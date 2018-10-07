import { IProviderRepository, ProviderRepositoryConnectionResult, ProviderRepositoryQueryResult, ProviderRepositoryScalarResult, ProviderRepositoryNonQueryResult } from '../index';
export declare class MsSqlProvider implements IProviderRepository {
    constructor();
    dbConfig: any;
    private _connection;
    connect(): Promise<ProviderRepositoryConnectionResult>;
    disconnect(): Promise<ProviderRepositoryConnectionResult>;
    executeReader(sentence: string): Promise<ProviderRepositoryQueryResult>;
    executeScalar(sentence: string): Promise<ProviderRepositoryScalarResult>;
    executeNonQuery(sentence: string): Promise<ProviderRepositoryNonQueryResult>;
}
