export interface IProviderRepository {
    connect(): Promise<ProviderRepositoryConnectionResult>;
    disconnect(): Promise<ProviderRepositoryConnectionResult>;
    executeReader(expression: any): Promise<ProviderRepositoryQueryResult>;
    executeScalar(expression: any): Promise<ProviderRepositoryScalarResult>;
    executeNonQuery(expression: any): Promise<ProviderRepositoryNonQueryResult>;
    dbConfig: any;
}
export declare class ProviderRepositoryConnectionResult {
    success: boolean;
    errors: Array<string>;
}
export declare class ProviderRepositoryQueryResult extends ProviderRepositoryConnectionResult {
    items: Array<any>;
}
export declare class ProviderRepositoryScalarResult extends ProviderRepositoryConnectionResult {
    value: any;
}
export declare class ProviderRepositoryNonQueryResult extends ProviderRepositoryConnectionResult {
    affected: number;
}
