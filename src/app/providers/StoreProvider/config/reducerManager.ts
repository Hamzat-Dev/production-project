import {
    AnyAction, combineReducers, Reducer,
    // eslint-disable-next-line comma-dangle
    ReducersMapObject
} from '@reduxjs/toolkit';
import {
    MountedReducers,
    // eslint-disable-next-line comma-dangle
    ReducerManager, StateSchema, StateSchemaKey
} from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array <StateSchemaKey> = [];

    const mountedReducer:MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducer,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });

                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            mountedReducer[key] = true;

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);
            mountedReducer[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
