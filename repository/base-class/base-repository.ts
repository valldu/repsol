import { IWriteRepository, IReadRepository, IProviderRepository } from "../index";


export abstract class BaseRepository<T,K>
    implements IWriteRepository<T,K>, IReadRepository<T,K> {
        
        private _dbContext: IProviderRepository;

        public get dbContext(): IProviderRepository {
            return this._dbContext;
        }

        public set dbContext(provider: IProviderRepository) {
            this._dbContext = provider;
        }
    
        public create(item: T): Promise<boolean> {
            throw new Error("Method not implemented.");
        }
        public update(id: K, item: T): Promise<boolean> {
            throw new Error("Method not implemented.");
        }
        public delete(id: K): Promise<boolean> {
            throw new Error("Method not implemented.");
        }
        public findAll(): Promise<T[]> {
            throw new Error("Method find not implemented.");
        }
        public findOne(id: K): Promise<T> {
            throw new Error("Method not implemented.");
        }
    }