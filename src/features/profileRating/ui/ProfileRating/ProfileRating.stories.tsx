import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfileRating from './ProfileRating';

export default {
    title: 'shared/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    profileId: '2',
};

Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1', // ✅ userId присутствует
            },
        },
    }),
];

Normal.parameters = {
    mockData: [
        {
            url: 'https://testapi.ru/profile-ratings?userId=1&profileId=2',
            method: 'GET',
            status: 200,
            response: [{ rate: 5 }],
        },
    ],
};
