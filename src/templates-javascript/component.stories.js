module.exports = (componentName) => ({
  content: `import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ${componentName} from '.';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <${componentName} {...args} />;

// Base default ${componentName}
export const Base = Template.bind({});
Base.args = {
};
`,
  extension: `.stories.jsx`,
});
