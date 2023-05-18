import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.link}>
            <AppLink theme = {AppLinkTheme.INVERTED} to = {'/'} className={cls.mainLink}>Главная</AppLink>
            <AppLink theme = {AppLinkTheme.PRIMARY} to = {'/about'}>О Сайте</AppLink>
        </div>
    </div>
  )
}


