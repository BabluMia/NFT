
import './App.css';
import Banner from './Components/Banner/Banner';
import Counter from './Components/Counter/Counter';
import FeatureCrad from './Components/Feature/FeatureCrad';
import Header from './Components/Header/Header';
import NewItems from './Components/NewItems/NewItems';

function App() {
  return (
    <div className='bg-black'>
      <Header/>
      <Banner/>
      <FeatureCrad/>
      <NewItems/>
      <Counter/>
    </div>
  );
}

export default App;
