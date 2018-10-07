export interface IReadRepository<T, K> {
    findAll(): Promise<T[]>;
    findOne(id: K): Promise<T>;
}
