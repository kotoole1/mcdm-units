export enum CloseStatus {
  CONFIRMED,
  DELETED,
}

export interface ClosedCallbackData {
  status: CloseStatus;
}
