export interface DataWrapper<T> {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: T;
}

export interface DataContainer<T> {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
}