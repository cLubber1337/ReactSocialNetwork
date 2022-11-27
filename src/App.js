import "./App.css";
import Header from "./componetns/Header/Header";
import Nav from "./componetns/Nav/Nav";
import Profile from "./componetns/Profile/Profile";
import Dialogs from "./componetns/Profile/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/dialogs"} element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
