import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PolicyCard } from '../../customer-service-shared/components/policy-card/models/policy-card.model';
import { PolicyRenewalsTicketsRepository } from '../store/policy-renewals-tickets.repository';

@Injectable({
  providedIn: 'root',
})
export class PolicyCardService {
  constructor(
    private http: HttpClient,
    private policyRenewalsTicketsRepository: PolicyRenewalsTicketsRepository
  ) {}

  /*========================================
    CRUD Methods for CustomerService RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  customerServiceServerURL = `${environment.customerService}/api`;

  // Define Filter API
  apiFilterURL = `${this.customerServiceServerURL}/PolicyRenewalTicket/Filter`;
  apiPutURL = `${this.customerServiceServerURL}/PolicyRenewalTicket`;
  apiGetTicketData = `${this.customerServiceServerURL}/CustomerServiceTicket`;

  // HttpClient API post() method => Get PolicyRenewalTickets
  getPolicyRenewalTickets() {
    let paramObj: any = {
      searchQuery: null,
      assignedToId: null,
      fromDateCreated: null,
      toDateCreated: null,
      fromDateModified: null,
      toDateModified: null,
      communicationChannelId: null,
    };

    this.http
      .post<PolicyCard>(this.apiFilterURL, paramObj, this.httpOptions)
      .subscribe((data) => {
        this.policyRenewalsTicketsRepository.updateTickets(data);
      });
  }

  getTicketData(ticketId: number) {
    return this.http
      .get<any>(`${this.apiGetTicketData}/${ticketId}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => create PolicyRenewalTickets
  filterPolicyRenewalTickets(option: {}) {
    this.http
      .post<PolicyCard>(this.apiFilterURL, option, this.httpOptions)
      .subscribe((data) => {
        this.policyRenewalsTicketsRepository.updateTickets(data);
      });
  }

  // HttpClient API put() method => update PolicyRenewalTickets
  updatePolicyRenewalTickets(body: {}) {
    this.http
      .put<PolicyCard>(this.apiPutURL, body, this.httpOptions)
      .subscribe(console.log);
  }

  // HttpClient API put() method => Update Customer Service Ticket Details
  updateCustomServiceTicketDetails(ticketID: number, body: {}) {
    this.http
      .put<PolicyCard>(
        `${this.customerServiceServerURL}/CustomerServiceTicket/UpdateTicketDetails/${ticketID}`,
        body,
        this.httpOptions
      )
      .subscribe(console.log);
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
