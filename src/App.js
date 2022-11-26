import "./App.css";
import Header from "./componetns/Header/Header";
import Nav from "./componetns/Nav/Nav";
import Profile from "./componetns/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};

export default App;
