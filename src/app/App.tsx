import React from 'react'
import { Link} from 'react-router-dom';
import { AppRouter } from 'app/providers/Router';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';

import "./styles/index.scss";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
  )
}

export default App



