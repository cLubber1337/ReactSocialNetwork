import "./App.css";
import Header from "./componetns/Header";
import Nav from "./componetns/Nav";
import Profile from "./componetns/Profile";

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
