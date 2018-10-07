
import * as sql from 'mssql';
import * as repo from './repository';
import { AssetRepository } from './repository/entities/asset-repository';

class Startup {
    public static async main() {
        
       let asset = new AssetRepository();
       //asset.create({"id": 1, "desc:" : "test"});

       // //console.log(JSON.stringify(items));       

       var item = await asset.findOne(1);
       console.log(JSON.stringify(item));       
    }
}

Startup.main();

