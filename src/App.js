
import './App.css';
import Banner from './Components/Banner/Banner';
import Counter from './Components/Counter/Counter';
import FeatureCrad from './Components/Feature/FeatureCrad';
import Header from './Components/Header/Header';
import JoinCommunity from './Components/JoinCommunity/JoinCommunity';
import NewItems from './Components/NewItems/NewItems';
import TopSeller from './Components/TopSeller/TopSeller';
import LatestNews from './Components/LetestNews/LetestNews.jsx';
import MainFooter from './Components/MainFooter/MainFooter';

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
      <LatestNews/>
      <MainFooter/>
    </div>
  );
}

export default App;
