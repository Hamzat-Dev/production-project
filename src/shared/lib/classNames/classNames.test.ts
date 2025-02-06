import { describe } from 'node:test';
import { classNames } from 'shared/lib/classNames/classNames';

describe('classNems', () => {
    test('with firs param', () => {
        expect(classNames('sclass')).toBe('sclass');
    });
    test('with additional', () => {
        const expected = 'sclass hovered scrollable';
        expect(classNames('sclass', { hovered: true, scrollable: true }))
            .toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'sclass class1 class2 hovered';
        expect(classNames(
            'sclass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
