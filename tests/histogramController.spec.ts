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
	when(service.histogram('Commodity')).thenReturn(result);

	new HistogramController(instance(service)).histogram('Commodity', instance(response));

	verify(response.send(deepEqual(Object.fromEntries(result)))).times(1);
  });
});
