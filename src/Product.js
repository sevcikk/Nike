import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductCart from './components/product/ProductCart';

const Product = () => {
  return (
    <div>
      <Navbar/>
      <div className='wrapContent'>
        <div className='content'>
          <ProductCart/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Product