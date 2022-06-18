import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import AddEditPage from './features/Photo/pages/AddEdit'

 


// Lazy load - Code splitting
const MainPage = React.lazy(() => import("./features/Photo/pages/Main"));

function App() {
    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    {/* TODO: Remove after testing */}
                   <Header/>

                    <Routes>
                        {/* <Redirect exact from="/" to="/photos" /> */}

                        <Route path="/photos" element={<MainPage />} />

                        <Route path="photos/add" element={<AddEditPage />} />
                        <Route
                            path="photos/:photoId"
                            element={<AddEditPage/>}
                        />

                        <Route element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
            
        </div>
    );
}

export default App;
