import { BaseRepository } from "../index";
export declare class AssetRepository extends BaseRepository<any, number> {
    constructor();
    create(asset: any): Promise<boolean>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any[]>;
}
