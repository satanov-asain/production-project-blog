import React from 'react'
import { Link} from 'react-router-dom';
import { AppRouter } from 'app/providers/Router';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';

import "./styles/index.scss";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to = {'/'}>Главная</Link>
            <Link to = {'/about'}>О Сайте</Link>
            <AppRouter/>
        </div>
  )
}

export default App



