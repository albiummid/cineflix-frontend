import { ProvideAuth } from "./Context/useAuth";
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Private from "./Private/Private";

function App ()
{
  return (
    <BrowserRouter>
      <ProvideAuth>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Private getAccess={[ 'none' ]} />} />
        </Routes>
      </ProvideAuth>
    </BrowserRouter>
  );
}

export default App;
