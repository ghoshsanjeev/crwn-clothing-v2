import {renderWithProviders} from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";
import {screen} from '@testing-library/react';

describe('Cart Icon Tests', () => {
	it('should use preloaded state to render', () => {
		const initialCartItems = [
			{id: 1, name: 'Shirt', price: 19.99, imageUrl: 'test1', quantity: 2},
			{id: 2, name: 'Pants', price: 29.99, imageUrl: 'test1', quantity: 1},
			{id: 3, name: 'Shoes', price: 39.99, imageUrl: 'test1', quantity: 3}
		]

		renderWithProviders(<CartIcon/>, {
			preloadedState: {
				cart: {
					cartItems: initialCartItems
				}
			}
		});

		// quantity 6 should be seen on the icon
		const cartIconElm = screen.getByText('6');
		expect(cartIconElm).toBeInTheDocument();
	})
})