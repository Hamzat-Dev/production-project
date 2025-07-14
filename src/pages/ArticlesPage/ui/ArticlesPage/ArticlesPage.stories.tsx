import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator({}),
];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Test Article 1',
                    user: { id: '1', username: 'admin' },
                    createdAt: '2023-01-01',
                    type: ['IT'],
                    img: 'https://placehold.co/600x400',
                    blocks: [],
                },

            ],
        },
    ],
};
