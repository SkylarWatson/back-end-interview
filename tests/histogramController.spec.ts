import { HistogramController } from '../src/histogramController';
import { CommodityService } from '../src/commodityService';
import { Response } from 'express';
import { mock, instance, when, verify, deepEqual } from 'ts-mockito';


describe('Histogram Controller Test', () => {	
	const service: CommodityService = mock(CommodityService);
	const response: Response = mock(Response);
	const result = new Map<string, number>([
		['Rice', 10],
		['Barley', 25]
	]);

	test('Write histogram data to response', () => {
		var data = [
			{
				x: ['Rice', 'Barley'],
				y: [10, 25],
				type: 'bar'
			}
		];

		let importPlotly = '<script src="https://cdn.plot.ly/plotly-2.18.2.min.js"></script>\n';
		let container = '<div id="container"></div>\n'
		let drawGraph = '<script>Plotly.newPlot("container",' + JSON.stringify(data) + ');</script>';
	
		when(service.histogram('Commodity')).thenReturn(result);

		new HistogramController(instance(service)).histogram('Commodity', instance(response));

		verify(response.send(importPlotly + container + drawGraph)).times(1);
	});
});
