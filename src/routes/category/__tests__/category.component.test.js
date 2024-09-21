import {renderWithProviders} from "../../../utils/test/test.utils";
import Category from "../category.component";
import {screen} from '@testing-library/react';


jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		category: 'mens'
	})
}))

describe('Category tests', () => {
	it('should render a spinner if isLoading is true', () => {
		renderWithProviders(<Category/>, {
			preloadedState: {
				categories: {
					isLoading: true,
					categories: []
				}
			}
		});

		const spinnerElm = screen.getByTestId('spinner');
		expect(spinnerElm).toBeInTheDocument();
	});

	it('should render products if isLoading is false', () => {
		renderWithProviders(<Category/>, {
			preloadedState: {
				categories: {
					isLoading: false,
					categories: [
						{
							title: 'Mens',
							items: [
								{id: 1, name: 'Product 1'},
								{id: 2, name: 'Product 2'},
							]
						}
					]
				}
			}
		});

		const spinnerElm = screen.queryByTestId('spinner');
		expect(spinnerElm).toBeNull();

		const product1Elm = screen.getByText(/Product 1/i);
		expect(product1Elm).toBeInTheDocument();
	});
});