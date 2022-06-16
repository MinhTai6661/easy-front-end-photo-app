import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";
import AddEditPage from "./features/pages/AddEdit";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    {/* TODO: Remove after testing */}
                    <ul>
                        <li>
                            <Link to="/photos">Go to photo page</Link>
                        </li>
                        <li>
                            <Link to="/photos/add">
                                Go to Add new photo page
                            </Link>
                        </li>
                        <li>
                            <Link to="/photos/123">Go to Edit photo page</Link>
                        </li>
                    </ul>

                    <Routes>
                        {/* <Redirect exact from="/" to="/photos" /> */}

                        <Route path="/photos" element={<Photo />} />

                        <Route path="/photosadd" element={<AddEditPage />} />
                        <Route
                            path="photos/:photoId"
                            element={<AddEditPage />}
                        />

                        <Route element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
