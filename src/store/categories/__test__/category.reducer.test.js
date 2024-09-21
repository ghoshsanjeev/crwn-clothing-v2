import {CATEGORIES_INITIAL_STATE, categoriesReducer} from "../category.reducer";
import {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} from "../category.action";

describe('Category Reducer Test', () => {
	test('fetchCategoriesStart', () => {
		const expectedState = {
			...CATEGORIES_INITIAL_STATE,
			isLoading: true
		}

		expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart()))
			.toEqual(expectedState);
	});
	test('fetchCategoriesSuccess', () => {
		const mockData = [
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
					{id: 1, name: 'shirt', price: 19.99},
					{id: 2, name: 'pants', price: 29.99}
				]
			}
		]
		const expectedState = {
			...CATEGORIES_INITIAL_STATE,
			isLoading: false,
			categories: mockData,
		}

		expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesSuccess(mockData)))
			.toEqual(expectedState);
	});

	test('fetchCategoriesFailed', () => {
		const mockError = new Error('Error fetching categories');

		const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError
    };

		expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesFailed(mockError)))
			.toEqual(expectedState);
	})
})
;