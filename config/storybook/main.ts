import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (storybookConfig) => {
        // Создаем копию конфигурации
        const config = { ...storybookConfig };

        if (!config.module) {
            config.module = { rules: [] };
        }

        config.resolve = config.resolve || {};
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, '..', '..', 'src'),
        ];
        config.resolve.extensions = [
            ...(config.resolve.extensions || []),
            '.ts',
            '.tsx',
        ];

        config.module.rules = config.module.rules?.map((rule) => {
            if (rule && typeof rule === 'object' && rule.test && rule.test.toString().includes('svg')) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        }) || [];

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module.rules.push(buildCssLoader(true));

        return config;
    },
};

export default config;
