import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse/sync';

class CommodityRepository {
	pathToCsv: string = './resources/Projection2021.csv';

	findAll(): any {
		const csvFilePath = path.resolve(__dirname, this.pathToCsv);
		const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

		return parse(fileContent, {
			columns: true,
			delimiter: ',',
			from_line: 1,
			bom: true
		});
	}
}

export { CommodityRepository }