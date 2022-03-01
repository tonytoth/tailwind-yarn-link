import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Accordion } from 'react-tailwindcss';

export default {
  component: Accordion,
  title: 'App/Components/Accordion',
  args: {
    title: 'Block title',
    showArrow: true,
    bgColor: '#edf2f7',
    showContent: false,
  },
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
      },
    },
  },
};

const Template: Story = (args) => (
  <div className="m-3">
    <Accordion {...args}>
      <ul>
        <li>this is some text</li>
        <li>this is some text</li>
        <li>this is some text</li>
        <li>this is some text</li>
        <li>this is some text</li>
      </ul>
    </Accordion>
  </div>
);

export const Default = Template.bind({});


const TemplateWithState: Story = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-3">
      <Accordion {...args} showContent={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <ul>
          <li>this is some text</li>
          <li>this is some text</li>
          <li>this is some text</li>
          <li>this is some text</li>
          <li>this is some text</li>
        </ul>
      </Accordion>
    </div>
  );
};

export const ControlledState = TemplateWithState.bind({});
