import { screen, fireEvent } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sibebar test', () => {
    test('Sidebar is mounted', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar is collapsed', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getAllByTestId('sidebar-toggle')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getAllByTestId('sidebar')).toHaveClass('collapsed');
    });
});
