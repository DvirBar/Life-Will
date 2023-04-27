import React from 'react';
import { useState } from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'

export const RootCmp = () => {
    const [scrollTop, setScrollTop] = useState(0);

    return (
        <div className="app-container main-layout">
            <main onScroll={(ev) => { setScrollTop(ev.currentTarget.scrollTop) }} className="home-app-container full  main-layout">
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
            </main>
        </div>
    )

}