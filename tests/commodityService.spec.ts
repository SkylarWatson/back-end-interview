import { CommodityRepository } from '../src/commodityRepository';
import { CommodityService } from '../src/commodityService';
import { mock, instance, when } from 'ts-mockito';


describe('Service Test', () => {	
	const repository: CommodityRepository = mock(CommodityRepository);
	const result = [
		{'Commodity': 'Foo'},
		{'Commodity': 'Baz', 'OtherField': 'Foo'},
		{'Commodity': 'Foo', 'OtherField': 'Foo'}
	];


	test('findAll should return commodities from the repository', () => {	  
		when(repository.findAll()).thenReturn(result);
		expect(new CommodityService(instance(repository)).findAll()).toBe(result);
	});

	test('create histogram from commodities', () => {
		when(repository.findAll()).thenReturn(result);

		const commodities = new CommodityService(instance(repository)).histogram('Commodity');

		expect(commodities.get('Foo')).toBe(2);
		expect(commodities.get('Baz')).toBe(1);
	});
});
