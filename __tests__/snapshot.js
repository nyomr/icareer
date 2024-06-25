import { render } from '@testing-library/react';
import Home from '../src/app/page';
import App from '@/app/app/page';
 
describe('Home Page', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
