import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev);
    }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={onToggle}>
            TOGGLE
        </button>
        <div className={cls.switchers}>
            <ThemeSwitcher/>
        </div>
    </div>
  )
}