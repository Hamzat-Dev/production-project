import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'shared/ArrticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
