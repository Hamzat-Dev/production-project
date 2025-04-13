/* eslint-disable comma-dangle */
import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../..';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';

const articleData = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: ['IT'],
    blocks: [
    ],
};

describe('articleDetailsSlice.test', () => {
    test('should set isLoading true on fetchArticleById.pending ', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
            data: undefined,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
            data: undefined,
        });
    });

    test('should set isLoading false on fetchArticleById.fulfilled ', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        const action = {
            type: fetchArticleById.fulfilled,
            payload: articleData,
        };
        const newState = articleDetailsReducer(state as ArticleDetailsSchema, action);
        expect((newState)).toEqual({
            isLoading: false,
            error: undefined,
            data: articleData,
        });
    });

    test('should set isLoading false on fetchArticleById.fulfilled ', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        const action = {
            type: fetchArticleById.rejected,
            payload: 'error',
        };
        const newState = articleDetailsReducer(state as ArticleDetailsSchema, action);
        expect((newState)).toEqual({
            isLoading: false,
            error: 'error',
            data: undefined,
        });
    });
});
