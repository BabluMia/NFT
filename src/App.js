
import './App.css';
import Banner from './Components/Banner/Banner';
import FeatureCrad from './Components/Feature/FeatureCrad';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='bg-black'>
      <Header/>
      <Banner/>
      <FeatureCrad/>
    </div>
  );
}

export default App;
