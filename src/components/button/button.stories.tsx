import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import Button from './';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Botão',
    argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Button>;

export const Primary: Story = (args) => <Button {...args}>Botão</Button>;
