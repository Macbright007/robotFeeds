import './App.css';
import CreateFeeds from './components/CreateFeeds';
import Feeds from './components/Feeds';
import FeedsNav from './components/FeedsNav';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <FeedsNav />
      <Feeds />
      <CreateFeeds />
    </div>
  );
}

export default App;
