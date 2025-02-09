import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Text' };

export const OutlineDark = Template.bind({});
OutlineDark.args = { children: 'Text', theme: ThemeButton.OUTLINE };
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
