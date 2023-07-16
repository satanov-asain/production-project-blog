import { useState, useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

export const ThrowErrorButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('throw error on page')}
        </Button>
    );
};
