import { CommodityRepository } from '../src/commodityRepository';

describe('Repository Test', () => {
	const repository = new CommodityRepository();
	repository.pathToCsv = "../tests/resources/sample.csv"	

	test('two commodities should be returned', () => {
		expect(repository.findAll().length).toBe(3);
	});

	test('commodities should be parsed from file', () => {
		expect(repository.findAll()[0]['Commodity']).toBe('Rice');
		expect(repository.findAll()[1]['Commodity']).toBe('Barley');
	});

	test('commodities should be parsable when comma is apart of text', () => {
		expect(repository.findAll()[2]['Commodity']).toBe('Per capita meat consumption, retail weight');
	});
});
