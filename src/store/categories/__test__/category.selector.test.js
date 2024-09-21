import {selectCategories, selectCategoriesIsLoading, selectCategoriesMap} from "../category.selector";

const mockState = {
	categories: {
		isLoading: false,
		categories: [
			{
				title: 'mens',
				imageUrl: 'test',
				items: [
					{id: 1, name: 'shirt', price: 19.99},
					{id: 2, name: 'pants', price: 29.99}
				]
			}, {
				title: 'womens',
				imageUrl: 'test',
				items: [
					{id: 3, name: 'shirt', price: 19.99},
					{id: 4, name: 'pants', price: 29.99}
				]
			}
		]
	}
}

describe('Category Selector Test', () => {
	test('selectCategories should return the categoriesData', () => {
		const categoriesSlice = selectCategories(mockState);
		expect(categoriesSlice).toEqual(mockState.categories.categories);
	});

	test('selectCategoriesIsLoading should return isLoading state', () => {
    const isLoadingSlice = selectCategoriesIsLoading(mockState);
    expect(isLoadingSlice).toEqual(false);
  });

	test('selectCategoriesMap should convert the array into the appropriate map', () => {
		const expectedCategoriesMap = {
			mens: [
				{id: 1, name: 'shirt', price: 19.99},
				{id: 2, name: 'pants', price: 29.99}
			],
			womens: [
        {id: 3, name: 'shirt', price: 19.99},
        {id: 4, name: 'pants', price: 29.99}
      ]
		}

		const categoriesMap = selectCategoriesMap(mockState);

		expect(categoriesMap).toEqual(expectedCategoriesMap);
	})
})