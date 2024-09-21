import {renderWithProviders} from "../../../utils/test/test.utils";
import Navigation from "../navigation.component";
import {fireEvent, screen} from '@testing-library/react';
import * as reactRedux from "react-redux";
import {signOutStart} from "../../../store/user/user.action";

describe('Navigation Tests', () => {
	it('should show sign in link if no user is logged in', () => {
		renderWithProviders(<Navigation/>, {
			preloadedState: {
				user: {
					currentUser: null
				}
			}
		});

		const signInLinkElm = screen.getByText(/sign in/i);
		const signOutLinkElm = screen.queryByText(/sign out/i);
		expect(signInLinkElm).toBeInTheDocument();
		expect(signOutLinkElm).toBeNull();

	});

	it('should show sign out link if user is logged in', () => {
		renderWithProviders(<Navigation/>, {
			preloadedState: {
				user: {
					currentUser: {}
				}
			}
		});

		const signOutLinkElm = screen.getByText(/sign out/i);
		const signInLinkElm = screen.queryByText(/sign in/i);
		expect(signOutLinkElm).toBeInTheDocument();
		expect(signInLinkElm).toBeNull();
	});

	it('should not render a cart drop-down if isCartOpen is false', () => {
		renderWithProviders(<Navigation/>, {
			preloadedState: {
				cart: {
					isCartOpen: false,
					cartItems: []
				}
			}
		});

		const cartDropdownTextElm = screen.queryByText(/your cart is empty/i);
		expect(cartDropdownTextElm).toBeNull();
	});

	it('should render a cart drop-down if isCartOpen is true', () => {
		renderWithProviders(<Navigation/>, {
			preloadedState: {
				cart: {
					isCartOpen: true,
					cartItems: []
				}
			}
		});

		const cartDropdownTextElm = screen.getByText(/your cart is empty/i);
		expect(cartDropdownTextElm).toBeInTheDocument();
	});

	it('should dispatch signOutStart action when Sign Out link is clicked', async () => {
		const mockDispatch = jest.fn();
		jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

		renderWithProviders(<Navigation/>, {
			preloadedState: {
				user: {
					currentUser: {}
				}
			}
		});

		const signOutLinkElm = screen.getByText(/sign out/i);
		expect(signOutLinkElm).toBeInTheDocument();

		await fireEvent.click(signOutLinkElm);
		expect(mockDispatch).toHaveBeenCalled();
		expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

		mockDispatch.mockClear();
	});
});