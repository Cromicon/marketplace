import React, { useEffect, useState} from 'react'
import './App.css';
import { IProduct } from './interfaces/Product';
import { ProductService } from './services/product.service';
import { CardProduct } from './components/index';
import { Footer } from './components/footer';
import styles from './components/footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import icono from'./components/img/icono.png'
import icono2 from'./components/img/icono2.png'
function App() {
    const [ products, setProducts ] = useState<IProduct[]>([]);

  const productService = new ProductService();

  useEffect(()=>{
    //loadDataProduct()
},[]);

  const loadDataProduct = async () => {
    const data:IProduct[] = await productService.getAll();
    setProducts(data)
  }

  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
            <img src={icono} alt="" />
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-black">Tienda </h1>

            <button className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700"/>  

        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-black">Play Station</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Compra esta nintendo switch solo por 100 mil lucas</p>
    </div>

    <img className="object-cover w-full h-48 mt-2" src="https://m.media-amazon.com/images/I/71+nXtads2L.jpg" alt="NIKE AIR"/>

    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">$100000</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
    </div>
</div>


        <div className="grid grid-cols-1 gap 8 md:grid-cols-2 x1:grid-cols-3">
        
            {
            products.map((item)=> {
                return(
                    <CardProduct item={item}/>
                )
            })
            }   

            
            </div>  
<footer className={styles.footer}>
<center><img src={icono2} alt="" /></center>
<Footer/>
</footer>   
</div> 
</section>
  );
}

export default App;
