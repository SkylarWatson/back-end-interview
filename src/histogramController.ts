import { CommodityService } from './commodityService';
import { Response } from 'express';


class HistogramController {
	service: CommodityService;

    constructor(service?: CommodityService) {
  		this.service = service ? service : new CommodityService();
    }
	
	histogram(fieldName: string, response: Response) {
		response.send(Object.fromEntries(this.service.histogram(fieldName)));
	}
}

export { HistogramController }