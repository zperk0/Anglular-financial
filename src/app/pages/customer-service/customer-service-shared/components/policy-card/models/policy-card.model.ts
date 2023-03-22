export interface PolicyCard {
  id: number;
  ticketCode: string;
  ein: string;
  entityName: string;
  entityEmail: string;
  entityProfilePictureUri: string;
  dateCreated: string;
  dateModified: string;
  sourceId: number;
  sourceName: string;
  sourceIconUri: string;
  primaryCommunicationChannelId: number;
  status: number;
  category: number;
  ticketTypeId: number;
  ticketTypeName: string;
  ticketTypeIconUri: string;
  assignedToId: string;
  assignedToName: string;
  assignedToProfilePictureUri: string;
  detailsJson: {};
  title: string;
  description: string;
  response: number;
}
