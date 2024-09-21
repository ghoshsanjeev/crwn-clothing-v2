import {render, screen} from '@testing-library/react'
import Button, {BUTTON_TYPE_CLASSES} from "../button.component";

describe('button tests', () => {
	it('should render base button when nothing is passed',() => {
		render(<Button>Test</Button>);
		const button1 = screen.getByText(/test/i);
		expect(button1).toHaveStyle('background-color: black');

		const button2 = screen.getByRole('button');
		expect(button2).toHaveStyle('background-color: black');
	});

	it('should render a google button if google button type is passed', () =>{
		render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Test</Button>);
    const googleButton = screen.getByText(/test/i);
    expect(googleButton).toHaveStyle('background-color: #4285f4');
	});

	it('should render a inverted button if google button type is passed', () =>{
		render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);
		const invertedBtn = screen.getByRole('button');
		expect(invertedBtn).toHaveStyle('background-color: white');
	});

	it('should be disabled if isLoading is true', () =>{
		render(<Button isLoading={true}>Test</Button>);
		const loadingBtn = screen.getByRole('button');
		expect(loadingBtn).toBeDisabled();
	})
});