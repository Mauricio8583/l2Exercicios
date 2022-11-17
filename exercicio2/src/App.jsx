import './app.scss';
import { Cards } from './components/cards/Cards';
import { Divider } from './components/divider/Divider';
import { Featured } from './components/featured/Featured';
import { Footer } from './components/footer/Footer';
import { Intro } from './components/intro/Intro';
import { Navbar } from './components/navbar/Navbar';


function App() {
   return (
    <div className="app">
       <Navbar />
       <div className='sections'>
        <Intro /> 
        <Cards />
        <Featured /> 
        <Divider />   
        <Footer />   
       </div> 
                                   
    </div>
  )
}

export default App
