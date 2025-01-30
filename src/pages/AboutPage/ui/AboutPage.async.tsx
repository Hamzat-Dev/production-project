import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // Так в работе делать нельзя .только в курсе для искусственной загрузки
        setTimeout(() => resolve(import('./AboutPage')), 2000);
    }),
);
