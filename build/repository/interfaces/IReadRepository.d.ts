export interface IReadRepository<T, K> {
    find(item: T): Promise<T[]>;
    findOne(id: K): Promise<T>;
}
