
import './App.css';
import Banner from './Components/Banner/Banner';
import Counter from './Components/Counter/Counter';
import FeatureCrad from './Components/Feature/FeatureCrad';
import Header from './Components/Header/Header';
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
    </div>
  );
}

export default App;
