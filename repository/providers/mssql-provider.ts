import {IProviderRepository, IWriteRepository, ProviderRepositoryConnectionResult,
    ProviderRepositoryQueryResult, ProviderRepositoryScalarResult, ProviderRepositoryNonQueryResult} from '../index';
import * as sql from 'mssql';
import * as connect_params from './config.json';

 export class MsSqlProvider
    implements IProviderRepository {

     constructor() {
         this.dbConfig = connect_params;
     }
     public dbConfig: any;
     private _connection: sql.ConnectionPool;

     public connect(): Promise<ProviderRepositoryConnectionResult> {
          
        return new Promise<ProviderRepositoryConnectionResult>((resolve, reject) =>{

            try {
                this._connection = new sql.ConnectionPool(this.dbConfig, err => {
                if (err) {
                    console.error("Connection failed.", err);
                    resolve (<ProviderRepositoryConnectionResult>{success: false, errors: [err]});
                } else {
                    console.log("Database pool #1 connected.");
                    resolve (<ProviderRepositoryConnectionResult>{success: true, errors: []});
                }
            });
            } catch (ex) {
                //reject(ex);
                resolve (<ProviderRepositoryConnectionResult>{success: false, errors: [ex]});
            }
        });
     }

     public disconnect(): Promise<ProviderRepositoryConnectionResult> {
        //throw new Error("Method not implemented.");
        return Promise.resolve(<ProviderRepositoryConnectionResult>{success: true, errors: []});
     }
     public async executeReader(sentence: string): Promise<ProviderRepositoryQueryResult> {
         console.log("Sentence executed: " + sentence);
        if (this._connection) {
            let request = new sql.Request(this._connection);
            let result = await request.query(sentence);
            return Promise.resolve(<ProviderRepositoryQueryResult> {success : true, errors: [], items: result.recordset});
        }
        else {
            return Promise.resolve(<ProviderRepositoryQueryResult> {success : false, errors: ['database is not connected'], items: null});
        }
        
     }
     public executeScalar(sentence: string): Promise<ProviderRepositoryScalarResult> {
        throw new Error("Method not implemented.");
     }
     public executeNonQuery(sentence: string): Promise<ProviderRepositoryNonQueryResult> {
        throw new Error("Method not implemented.");
     }
     

}