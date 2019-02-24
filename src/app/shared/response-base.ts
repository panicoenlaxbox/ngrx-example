export interface ResponseBase<T> {
    totalRecords: number;
    data: T[];
}
