import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 30,
        country: Country.Ukraine,
        lastname: 'Lezh',
        first: 'Hamza',
        city: 'makha',
        currency: Currency.EUR,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
