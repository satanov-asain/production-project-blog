import React, {Suspense}from 'react'
import { Counter } from './components/Counter'
import "./styles/index.scss";
import { Routes, Route, Link} from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to = {'/'}>Главная</Link>
            <Link to = {'/about'}>О Сайте</Link>
            <Suspense fallback = {<div>Loading ...</div>}>
                <Routes>
                    <Route path = {'/'} element = {<MainPageAsync/>}></Route>
                    <Route path = {'/about'} element = {<AboutPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
  )
}

export default App



