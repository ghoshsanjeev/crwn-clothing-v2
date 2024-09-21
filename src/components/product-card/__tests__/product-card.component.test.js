import {fireEvent, screen} from '@testing-library/react';
import ProductCard from "../product-card.component";
import {renderWithProviders} from "../../../utils/test/test.utils";

describe('Product Card Tests', () => {
	it('should add item to the cart when the product card button is clicked', async () => {
    const mockProduct = {
		  id: 1,
      name: 'Test Product',
      price: 19.99,
      imageUrl: 'test1.jpg',
    }

		const {store} = renderWithProviders(<ProductCard product={mockProduct}/>,{
			preloadedState:{
				cart: {
          cartItems: []
        }
			}
		} );

		const addToCartButtonElm = screen.getByText(/Add to card/i);
		await fireEvent.click(addToCartButtonElm);

		expect(store.getState().cart.cartItems).toHaveLength(1);
	})
});