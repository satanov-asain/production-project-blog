import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button tests', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test render with Theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST with theme</Button>);
        expect(screen.getByText('TEST with theme')).toHaveClass('clear');
    });
});
