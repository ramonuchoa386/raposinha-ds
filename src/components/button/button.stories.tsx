import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import Button from './';
import { colorPalette } from '../../theme';

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    title: 'Components/Botão',
    argTypes: {
        $buttonTheme: {
            defaultValue: 'brown',
            description: 'Tema do botão',
            options: Object.keys(colorPalette),
            control: { type: 'select' },
            table: {
                type: { summary: 'ColorPalette' },
                defaultValue: { summary: 'brown' },
            },
        },
    },
};
export default meta;

type Story = StoryFn<typeof Button>;

const Template: Story = (args) => {
    const { $buttonTheme, ...rest } = args;

    return (
        <Button $buttonTheme={$buttonTheme} {...rest}>
            Botão
        </Button>
    );
};

export const Default = Template.bind({});

export const OffwhiteTheme = Template.bind({});
OffwhiteTheme.args = {
    $buttonTheme: 'offwhite',
};
