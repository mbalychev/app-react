import { BrowserRouter, Route, Routes } from "react-router-dom"
import AlgoritmsPage from "./pages/algoritmsPage"
import ArraysPage from "./pages/arraysPage"
import LayoutPage from "./layouts/main/mainLayout"
import DataType from "./others/dataType"
import MainPage from "./pages/mainPage"
import AboutPage from "./pages/aboutPage"
import ProgrammPage from "./pages/programmPage"

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