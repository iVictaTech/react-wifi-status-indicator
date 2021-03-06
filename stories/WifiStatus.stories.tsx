import { Meta, Story } from '@storybook/react';
import React from 'react';
import { WifiStatus, WifiStatusType } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: WifiStatus,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => (
  <WifiStatus status={WifiStatusType.Excellent} {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  status: WifiStatusType.Excellent,
  color: '#148742',
  width: 500,
};
