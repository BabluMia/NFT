
import './App.css';
import Banner from './Components/Banner/Banner';
import Counter from './Components/Counter/Counter';
import FeatureCrad from './Components/Feature/FeatureCrad';
import Header from './Components/Header/Header';
import JoinCommunity from './Components/JoinCommunity/JoinCommunity';
import NewItems from './Components/NewItems/NewItems';
import TopSeller from './Components/TopSeller/TopSeller';

function App() {
  return (
    <div className='bg-black'>
      <Header/>
      <Banner/>
      <FeatureCrad/>
      <NewItems/>
      <Counter/>
      <TopSeller/>
      <JoinCommunity/>
    </div>
  );
}

export default App;
