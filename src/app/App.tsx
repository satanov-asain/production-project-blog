import React from 'react'
import { Link} from 'react-router-dom';
import { AppRouter } from 'app/providers/Router';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';

import "./styles/index.scss";
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <AppRouter/>
        </div>
  )
}

export default App



