import "./App.css";
import NavbarTop from "./Components/NavbarTop";
import NavbarLeft from "./Components/NavbarLeft";
import NewProject from "./Components/NewProject";
import MyProjects from "./Components/MyProjects";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <NavbarTop />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <NavbarLeft />
                </div>
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/NewProject" element={<NewProject />} />
                            <Route path="/MyProjects" element={<MyProjects />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;
