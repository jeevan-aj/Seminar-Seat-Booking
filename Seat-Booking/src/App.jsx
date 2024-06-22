import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeminarHall from "./Components/SeminarHall";
import PrivateSignInRoute, { PrivateBookRoute } from "./Pages/PrivateSignin";
import Signin from "./Pages/SignIn";
import Signup from "./Pages/SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* login signup routes */}
          <Route>
            <Route element={<PrivateSignInRoute />}>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Route>

          {/* other routes after loggedIn */}
          <Route>
            <Route  element={<PrivateBookRoute />} >
            <Route path="/book" element={<SeminarHall />} />
            </Route>
         
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
