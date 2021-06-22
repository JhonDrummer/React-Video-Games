import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByRole('navigation');
  expect(linkElement).toBeInTheDocument();
});