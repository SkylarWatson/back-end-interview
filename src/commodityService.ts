import { CommodityRepository } from './commodityRepository';

class CommodityService {
	repository: CommodityRepository;

	constructor(repository?: CommodityRepository) {
		this.repository = repository ? repository : new CommodityRepository();
	}

	findAll() : Map<string,string>[] {
		return this.repository.findAll();
	}
	
	histogram(fieldName:string) : Map<string,number> {
		const result = new Map<string, number>();

		this.findAll().forEach((record) => {
			let fieldValue = record[fieldName];
			let currentCount = result.get(fieldValue);
			currentCount = currentCount ?? 0;
			result.set(fieldValue, currentCount + 1);
		});

		return result;
	}
	
}

export { CommodityService }