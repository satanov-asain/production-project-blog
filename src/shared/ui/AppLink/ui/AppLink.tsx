import { classNames } from 'shared/lib/classNames'
import cls from './AppLink.module.scss';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
    SECONDARY = "secondary",
    INVERTED_SECONDARY = 'inverted-secondary'
}   

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        to, 
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
  return (
    <Link 
        to = {to}
        className = {classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
        >
        {children}
    </Link>
  )
}