import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutPage from "./layouts/main/mainLayout"
import DataType from "./others/dataType"
import AboutPage from "./pages/aboutPage"
import ProgrammPage from "./pages/programmPage"
import MainPage from "./pages/mainPages/mainPage"

export const links = {
    algoritms: '/algoritms',
    arrays: '/arrays'
}

export const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/programm" element={<ProgrammPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}