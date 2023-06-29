import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.link}>
                <AppLink theme={AppLinkTheme.INVERTED_SECONDARY} to="/" className={cls.mainLink}>{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to="/about">{t('About Site')}</AppLink>
            </div>
        </div>
    );
};
