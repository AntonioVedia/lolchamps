import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Campeones from './Components/Campeones';
import DetallesChamps from './Pages/DetallesChamps';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/campeones" element={<Campeones />} />
                <Route path="/campeon/:id" element={<DetallesChamps />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;