import { classNames } from 'shared/lib/classNames'
import cls from './ThemeSwitcher.module.scss';
import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button';
import DarkIcon from 'shared/assets/icons/theme-dark-icon.svg';
import LightIcon from 'shared/assets/icons/theme-light-icon.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();
  return (
    <Button 
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}>
        {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  )
}