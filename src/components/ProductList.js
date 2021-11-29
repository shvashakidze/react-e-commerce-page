import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

export default class ProductList extends Component{
    state={
        Products: storeProducts
    };
    render(){
        console.log(this.state.Products);
        return(
            <React.Fragment>
            <div className="py-5">
              <div className="container">
                <Title name="ჩვენი" title="პროდუქცია" />
                <div className="row">
                 <ProductConsumer>
                 {value =>{
                  return value.products.map( product =>{
                      return <Product key={product.id} Product={product} />;
                  })
                 }}
                 </ProductConsumer>
                </div>
              </div>
            </div>
            </React.Fragment>
        );
    }
}