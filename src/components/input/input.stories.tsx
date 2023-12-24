import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Components/Caixa de texto',
    argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Input>;

export const Primary: Story = (args) => <Input {...args} />;
