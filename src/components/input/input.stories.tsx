import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
    component: Input,
    tags: ['autodocs'],
    title: 'Components/Caixa de texto',
    argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Input>;

const Template: Story = (args) => {
    return <Input placeholder="Caixa de texto" {...args} />;
};

export const Default = Template.bind({});

export const RequiredField = Template.bind({});
RequiredField.args = {
    required: true,
};
