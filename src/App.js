import { Home } from "./pages/Home";
import About from "./pages/About";
import {Routes,Route} from "react-router-dom"
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Mainblog from "./pages/Mainblog";
function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/features" element={<Features />}/>
    <Route path="/pricing" element={<Pricing />}/>
    <Route path="/faq" element={<Faq />}/>
    <Route path="/blog" element={<Mainblog />}/>
 </Routes>
    
    </>
  );
}

export default App;
