import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import React from 'react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('Button test theme CLEAR', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
    test('Button test render', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
        screen.debug();
    });
});
