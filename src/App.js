import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Library from "./components/Library/Library";
import Header from "./components/Header/Header";
import SongDetail from "./components/SongDetail/SongDetail";


function App() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Header
                appName="Music Library"
                setSearchTerm={setSearchTerm}
            />

            <Routes>
                <Route
                    path="/"
                    element={<Library searchTerm={searchTerm} />}
                />

                <Route
    path="/song/:id"
    element={<SongDetail />}
/>
            </Routes>
        </>
    );
}

export default App;