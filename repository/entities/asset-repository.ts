import { BaseRepository, MsSqlProvider, ProviderRepositoryNonQueryResult, 
    ProviderRepositoryQueryResult, String } from "../index";
import * as sentences from './sentences.json';

export class AssetRepository
    extends BaseRepository<any, number> {

    constructor() {
        super();
        this.dbContext = new MsSqlProvider();
    }
    public async create (asset: any): Promise<boolean> {

            let created: ProviderRepositoryNonQueryResult;
            let connection = await this.dbContext.connect();
            
            if (connection.success) {
                created = await this.dbContext.executeNonQuery(sentences.getAssets);
            } else {
                Promise.resolve(false);
            }
    
            await this.dbContext.disconnect();
    
            return Promise.resolve(created.success);
    }

    public async findAll(): Promise<any[]> {
        let readed: ProviderRepositoryQueryResult;
        let connection = await this.dbContext.connect();
        if (connection.success) {
            readed = await this.dbContext.executeReader(sentences.getAssets);
        } else {
            Promise.resolve([]);
        }

        await this.dbContext.disconnect();
        return Promise.resolve(readed.success ? readed.items : []);
    }
    
    public async findOne(id: number): Promise<any[]> {
        let readed: ProviderRepositoryQueryResult = {success:false, items: [], errors: []};
        let connection = await this.dbContext.connect();
        if (connection.success) {
            
            let sql_sentence = String.Format(sentences.getAssetById, id);
            readed = await this.dbContext.executeReader(sql_sentence);
        }
        await this.dbContext.disconnect();
        return Promise.resolve(readed.success ? (readed.items ? readed.items[0] : []) : []);
    }
}