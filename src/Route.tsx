import { BrowserRouter, Route, Routes } from "react-router-dom"
import AlgoritmsPage from "./pages/algoritmsPage"
import ArraysPage from "./pages/arraysPage"
import { LayoutPage } from "./LayoutPage"
import DataType from "./others/dataType"

export const links = {
    algoritms: '/algoritms',
    arrays: '/arrays'
}

export const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route path="/algoritms" element={<AlgoritmsPage />} />
                    <Route path="/arrays" element={<ArraysPage />} />
                    <Route path="/others" element={<DataType />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}