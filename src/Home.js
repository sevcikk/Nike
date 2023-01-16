import './App.css';
import CartBox1 from './components/CartBox1';
import CartBox2 from './components/CartBox2';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='wrapContent'>
        <div className='content'>
          <CartBox1/>
          <CartBox2/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home