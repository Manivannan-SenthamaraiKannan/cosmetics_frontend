import "./App.css";
import {Routes, Route} from 'react-router-dom'
import AdBanner from "./Layout/AdBanner";
import TopNav from "./Layout/TopNav";
import Login from "./Authentication/Login";
import Register from './Authentication/Register';
import Resetpassword from './Authentication/ResetPassword';

function App() {
  return (
    <div className="App">
      <AdBanner/>
      <TopNav/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<Resetpassword />} />
      </Routes>
    </div>
  );
}

export default App;
