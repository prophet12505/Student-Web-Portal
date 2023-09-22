import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Thumbnail from './Components/Thumbnail/Thumbnail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <ProfileCard></ProfileCard>
      <Thumbnail index={1} ></Thumbnail>



    </div>
  );
}

export default App;
