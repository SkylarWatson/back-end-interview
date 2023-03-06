import { CommodityService } from './commodityService';
import { IncomingMessage, ServerResponse } from 'http';
import { Response } from 'express';

class HistogramController {
	service: CommodityService;

	constructor(service?: CommodityService) {
		this.service = service ? service : new CommodityService();
	}
	
	histogram(fieldName: string, response: Response) {
		response.send(this.html(this.service.histogram(fieldName)));
	}
	
	html(histogramData: Map<string, number>) : string {
		let result = Object.fromEntries(histogramData);
		
		var data = [
			{
				x: Object.keys(result),
				y: Object.values(result),
				type: 'bar'
			}
		];
		
		let importPlotly = '<script src="https://cdn.plot.ly/plotly-2.18.2.min.js"></script>\n';
		let container = '<div id="container"></div>\n'
		let drawGraph = '<script>Plotly.newPlot("container",' + JSON.stringify(data) + ');</script>';
		
		return importPlotly + container + drawGraph;
	}
}

export { HistogramController }