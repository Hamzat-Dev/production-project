import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab',

        },
        {
            value: 'tab 12',
            content: 'tab2',

        },
        {
            value: 'tab 13',
            content: 'tab2',

        },
    ],
    value: 'tab 12',
    onTabClick: action('onTabClick'),
};
