import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Speed from './components/Speed.jsx'
import Mass from './components/Mass.jsx'
import Length from './components/Length.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Length />} />
                <Route path="/Speed" element={<Speed />} />
                <Route path="/Weight" element={<Mass />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
