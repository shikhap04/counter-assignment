// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  await userEvent.click(incrementButton);

  // Check if the count increased to 1
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  await userEvent.click(decrementButton);

  // Check if the count decreased to -1
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('-1');
});
