import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<Dashboard/>}> </Route>
        
          </Routes>
        </BrowserRouter>
      );
}

export default App;