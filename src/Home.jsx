import React from 'react';
import { ItemCart } from './ItemCart';  
import { data } from './data';

function Home() {
  return (
    <div>
      <h1 className='text-center mt-3'>Баардык товарлар</h1>
      <section className='py-4 container'>
        <div style={main}>
        {
          data.productName.map((el, id) => (
            <ItemCart 
              key={id} 
              img={el.img} 
              title={el.title} 
              item={el} 
              desc={el.desc} 
              price={el.price} 
            />
          ))
        }
        </div>
      </section>
    </div>
  );
}

const main = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap"  
  
}

export default Home;
