import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div
        className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
              <div className="home__row">
                <Product 
                    id='123456'
                    title='The lean strtup'
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={1}
                />
                 <Product 
                    id='223456'
                    title='The lean strtup'
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={4}
                />
                    
               </div>
               <div className="home__row">
               <Product 
                    id='323456'
                    title='The lean strtup'
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={2}
                />
                 <Product 
                    id='423456'
                    title='The lean strtup'
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={3}
                />
                 <Product 
                    id='523456'
                    title='The lean strtup'
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={5}
                />
              </div>
              <div className="home__row">
              <Product 
                    id='623456'
                    title='The lean strtup'
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={2}
                />
                    
              </div>
            </div>

        </div>
    )
}

export default Home
