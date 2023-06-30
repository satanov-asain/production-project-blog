import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('mockClass')).toBe('mockClass');
    });

    test('with additional classes', () => {
        expect(classNames('mockClass', {}, ['addClass1', 'addClass2']))
            .toBe('mockClass addClass1 addClass2');
    });

    test('with additional and mods classes', () => {
        expect(
            classNames(
                'mockClass',
                { hovered: true, scrollable: true },
                ['addClass1', 'addClass2'],
            ),
        )
            .toBe('mockClass addClass1 addClass2 hovered scrollable');
    });

    test('with additional annd mods classes, one mode falsy', () => {
        expect(
            classNames(
                'mockClass',
                { hovered: true, scrollable: false },
                ['addClass1', 'addClass2'],
            ),
        )
            .toBe('mockClass addClass1 addClass2 hovered');
    });

    test('with additional annd mods classes, one mode undefined', () => {
        expect(
            classNames(
                'mockClass',
                { hovered: undefined, scrollable: true },
                ['addClass1', 'addClass2'],
            ),
        )
            .toBe('mockClass addClass1 addClass2 scrollable');
    });
});
