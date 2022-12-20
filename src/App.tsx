import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Feed } from "./pages/feed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/signup" element={<Signup />} />        
        <Route path="/feed" element={<Feed />} />        
      </Routes>
    </Router>
  );
}

export default App;
