import React from 'react'
import {Route, Routes, Navigate} from'react-router-dom'
import LinksPage from './pages/LinksPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import AuthPage from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
if(isAuthenticated){
    return(
        <Routes>
            <Route exact path='/links' element={<LinksPage/>}></Route>
            <Route exact path='/create' element={<CreatePage/>}></Route>
            <Route exact path='/detail/:id' element={<DetailPage/>}></Route>
            <Route path='*' element={<Navigate to='/create' />} />
        </Routes>
    )
}
return (
    <Routes>
        <Route exact path='/' element={<AuthPage/>}></Route>
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
)
}
