export interface IWriteRepository<T, K> {
    create(item: T): Promise<boolean>;
    update(id: K, item: T): Promise<boolean>;
    delete(id: K): Promise<boolean>;
}
