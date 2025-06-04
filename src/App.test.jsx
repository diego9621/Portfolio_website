import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders App without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('Data Portfolio')).toBeInTheDocument();
});
