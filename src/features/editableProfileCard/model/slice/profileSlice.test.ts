/* eslint-disable comma-dangle */
import { DeepPartial, AnyAction } from '@reduxjs/toolkit';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../model/consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 30,
    country: Country.Ukraine,
    lastname: 'Lezh',
    first: 'Hamza',
    city: 'makha',
    currency: Currency.EUR,
};
const fakePending: AnyAction = {
    type: updateProfileData.pending.type,
};
const fakeFulfilled: AnyAction = {
    type: updateProfileData.fulfilled.type,
    payload: data,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: 'hamzik',
            }),
        )).toEqual({
            form: { username: 'hamzik' },
        });
    });

    test('test update profile pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            fakePending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            fakeFulfilled,
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,

        });
    });
});
