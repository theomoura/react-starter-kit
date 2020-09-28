import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../components/atoms';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

describe('Icon Atom', () => {
  it('renders and creates snapshot', async () => {
    const component = render(<Icon icon={LockOutlinedIcon} />);
    expect(component).toMatchSnapshot();
  });
});
