import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { AddClaim } from "../models/add-claim.model";
import { AddRole } from "../models/add-role.model";
import { DeleteClaimFromRole } from "../models/delete-claim-from-role.model";
import { RoleList } from "../models/role-list.model";
import { Role } from "../models/role.model";
import { UserSecurityRepository } from "../store/user-security.repository";

@Injectable({ providedIn: 'root' })
export class UserSecurityService {
    private baseUrl = `${environment.identityAPIServerURL}/Roles`;

    addRoleSubject = new BehaviorSubject<AddRole>(null);
    addRole$ = this.addRoleSubject.asObservable();

    getClaimsSubject = new BehaviorSubject<any>(null);
    getClaims$ = this.getClaimsSubject.asObservable();

    deleteRoleSubject = new BehaviorSubject<boolean>(null);
    deleteRole$ = this.deleteRoleSubject.asObservable();

    constructor(
        private httpClient: HttpClient,
        private userSecurityRepository: UserSecurityRepository
    ) { }

    getRoles(pageIndex: number, pageSize: number, backendUrl?: string): void {
        let endPointUrl = this.baseUrl;
        let httpOptions = {
            headers: new HttpHeaders(),
            params: new HttpParams(),
        };
        if (backendUrl) {
            endPointUrl = backendUrl;
        }
        else {
            httpOptions = {
                ...httpOptions,
                params: httpOptions.params.set('PageIndex', pageIndex.toString()).set('PageSize', pageSize.toString()),
            }
        }
        this.httpClient.get<RoleList>(endPointUrl, httpOptions).subscribe(data => {
            if (data) {
                this.userSecurityRepository.updateRolesList(data);
            }
        });
    }
    deleteRole(roleId: string, backendUrl?: string) {
        let endPointUrl = `${this.baseUrl}/${roleId}`
        let httpOptions = {
            headers: new HttpHeaders(),
            params: new HttpParams(),
        };
        if (backendUrl) {
            endPointUrl = backendUrl;
        }
        this.httpClient.delete<any>(endPointUrl, httpOptions).subscribe(data => {
            console.log(data);
            this.deleteRoleSubject.next(true);
        });
    }

    getClaims(backendUrl?: string): void {
        let endPointUrl = this.baseUrl;
        let httpOptions = {
            headers: new HttpHeaders(),
            params: new HttpParams(),
        };
        if (backendUrl) {
            endPointUrl = backendUrl;
        }
        this.httpClient.get<any>(endPointUrl, httpOptions).subscribe(data => {
            if (data) {
                this.userSecurityRepository.updateClaims(data);
            }
        });
    }

    getClaimsByRole(role: Role): void {
        const endPointUrl = `${this.baseUrl}/${role.id}/Claims?page=1&size=1000`
        this.httpClient.get<any>(endPointUrl).subscribe(data => {
            if (data) {
                this.getClaimsSubject.next(data.claims);
                let updatedRole = this.userSecurityRepository.updateRoleClaims(role.id, data);
                this.userSecurityRepository.updateRole(updatedRole);
            }
        });
    }

    addRole(addRole: AddRole, backendUrl?: string) {
        let endPointUrl = `${this.baseUrl}/AddOrUpdateRoleClaims`;
        let httpOptions = {
            headers: new HttpHeaders(),
            params: new HttpParams(),
        };
        if (backendUrl) {
            endPointUrl = backendUrl;
        }
        console.log(addRole);
        this.httpClient.post<AddRole>(endPointUrl, addRole, httpOptions).subscribe(data => {
            if (data) {
                this.addRoleSubject.next(data)
                this.userSecurityRepository.addRole({ id: data.roleId, name: addRole.roleName })
            }
        });
    }

    addClaimToRole(addClaim: AddClaim, backendUrl?: string) {
        let endPointUrl = this.baseUrl + '/Claims';
        let httpOptions = {
            headers: new HttpHeaders(),
            params: new HttpParams(),
        };
        if (backendUrl) {
            endPointUrl = backendUrl;
        }
        this.httpClient.post<any>(endPointUrl, addClaim, httpOptions).subscribe(data => {
            if (data) {
            }
        });
    }

    deleteClaimFromRole(deleteClaimFromRole: DeleteClaimFromRole, backendUrl?: string) {
        let endPointUrl = `${this.baseUrl}/${deleteClaimFromRole.roleId}/Claims?claimId=${deleteClaimFromRole.claimId}`;
        let httpOptions = {
            headers: new HttpHeaders(),
            params: new HttpParams(),
        };
        if (backendUrl) {
            endPointUrl = backendUrl;
        }
        this.httpClient.delete<any>(endPointUrl, httpOptions).subscribe(data => {
            console.log(data);
            if (data) {
            }
        });
    }

    saveUserPolices(data: any) {
        this.userSecurityRepository.saveUserPolices(data)
    }
    getUserPolices() {
        return this.userSecurityRepository.getUserPolices();
    }
}
