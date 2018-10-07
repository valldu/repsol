import { IWriteRepository, IReadRepository, IProviderRepository } from "../index";
export declare abstract class BaseRepository<T, K> implements IWriteRepository<T, K>, IReadRepository<T, K> {
    private _dbContext;
    dbContext: IProviderRepository;
    create(item: T): Promise<boolean>;
    update(id: K, item: T): Promise<boolean>;
    delete(id: K): Promise<boolean>;
    findAll(): Promise<T[]>;
    findOne(id: K): Promise<T>;
}
