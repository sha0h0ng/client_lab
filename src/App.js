import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import RecordList from "./components/TelephoneList";
import Create from "./components/Create";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<RecordList />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    );
}

export default App;
