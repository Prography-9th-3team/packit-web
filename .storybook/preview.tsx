import type { Preview } from '@storybook/react';
import React from 'react';
import '../styles/tailwind.css';

React.Component;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => {
      return <Story />;
    },
  ],
};

export default preview;
