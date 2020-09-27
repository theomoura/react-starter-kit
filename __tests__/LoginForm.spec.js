import { render } from '@testing-library/react';
import LoginForm from '../src/components/molecules/LoginForm';

describe('Login Form', () => {
  it('renders and creates snapshot', async () => {
    const component = render(
      <LoginForm onclickLogin={() => {}} formErrors={{}} />,
    );
    expect(component).toMatchSnapshot();
  });
});
