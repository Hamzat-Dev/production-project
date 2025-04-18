import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
const comment = {
    id: '1',
    text: 'This is a test comment',
    user: {
        id: 'u1',
        username: 'testuser',
        avatar: 'https://example.com/avatar.png', // или null
    },
};

Normal.args = comment ? { comment } : {};
