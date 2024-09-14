import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '../app/page';

describe('Page Test', () => {
  it('render Test', () => {
    render(<Page />);

    const heading = screen.getByText('Main Header');

    expect(heading).toBeInTheDocument();
  });
});
