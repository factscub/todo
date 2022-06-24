import Header from "./Layouts/Header/Header";
import Body from "./Pages/Body/Body";
import RootContext from './RootContext'
import { Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login/Login";
import SignUp from './Pages/SignUp/SignUp'
import { useEffect } from "react"

function App() {
    const { userName } = window.localStorage.getItem('userData') !== null && JSON.parse(window.localStorage.getItem('userData'))

    useEffect(() => {
    }, [userName])

    return (
        <div className="main">
            <RootContext.Provider value={{ user: userName }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/:id" element={<Body />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </RootContext.Provider>
        </div>
    );
}

export default App;
