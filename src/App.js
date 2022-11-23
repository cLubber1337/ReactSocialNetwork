import "./App.css";
import logo from "./log.png";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="logo" src={logo} alt="Logo.png" />
      </header>
      <nav className="nav">
        <div>
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
          <div>
            <a>News</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Settings</a>
          </div>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            className="friends"
            src="https://www.maitre-mouhou.com/wp-content/uploads/2013/07/temoignage.jpg"
          />
        </div>
        <div>
          <img
            className="ava"
            src="https://www.armrus.org/upload/main/581/581c1a044fcd9f526747749f6eb7b93d.jpg"
          />
          Discription
        </div>
        <div>
          My post
          <div>New post</div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
