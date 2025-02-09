import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: FC<PropsWithChildren> = ({ children }) => (
    <BrowserRouter>
        {children}
    </BrowserRouter>
);
