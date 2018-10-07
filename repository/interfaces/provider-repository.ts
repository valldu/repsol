export interface IProviderRepository {
     connect(): Promise<ProviderRepositoryConnectionResult>;
     disconnect(): Promise<ProviderRepositoryConnectionResult>;
     executeReader(expression: any): Promise<ProviderRepositoryQueryResult>;
     executeScalar(expression: any): Promise<ProviderRepositoryScalarResult>;
     executeNonQuery(expression: any): Promise<ProviderRepositoryNonQueryResult>;

     dbConfig: any;
}

export class ProviderRepositoryConnectionResult {
    success: boolean;
    errors: Array<string>;
}
export class ProviderRepositoryQueryResult
    extends ProviderRepositoryConnectionResult {

    items: Array<any>;
}

export class ProviderRepositoryScalarResult
    extends ProviderRepositoryConnectionResult {

    value: any;
}

export class ProviderRepositoryNonQueryResult 
    extends ProviderRepositoryConnectionResult {

    affected: number;
}


