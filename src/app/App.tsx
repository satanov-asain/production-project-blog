import React, {Suspense}from 'react'
import "./styles/index.scss";
import { Routes, Route, Link} from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/helpers/classNames';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to = {'/'}>Главная</Link>
            <Link to = {'/about'}>О Сайте</Link>
            <Suspense fallback = {<div>Loading ...</div>}>
                <Routes>
                    <Route path = {'/'} element = {<MainPage/>}></Route>
                    <Route path = {'/about'} element = {<AboutPage/>}></Route>
                </Routes>
            </Suspense>
        </div>
  )
}

export default App



