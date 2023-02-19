import React, {useEffect} from "react";
import "./index.css";
import Box from '@mui/material/Box'
import image from '../assets/Images/image.png'
import RecommededProductBox from "../Components/RecommededProductBox";
import ProductList from "../Components/ProductList";
import { ProductSvc } from "../services/products.service";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../store/store";
import { addProducts } from "../features/productsSlice";
import IProducts from "../types/product";

const ProductListing = () => {

  const productsData = useSelector((state: RootState) => state.products.productList)
  const dispatch = useDispatch()

useEffect(()=>{
  ProductSvc.getProducts().then((products: any)=> {
    dispatch(addProducts(products))
  })

},[])

  return (
    <>
      <section className="header-main">
        <div className="container-fluid ">
          <div className="row gx-0">
            <div className="col-md-4 headingContainer gap-1">
              <h3>Home {`>`} Shop</h3>
              <h1>Shop</h1>
            </div>
            <div className="col-8 imageContainer">
              <img width={'100%'} height={'100%'} src={image} />
            </div>
          </div>
        </div>
      </section>
      <ProductList />
      <div className="container-fluid">
        <h1>Recommended for you</h1>
        <div className="row ">
                <RecommededProductBox recommendedProduct = {productsData} />
        </div>
      </div>
    </>
  );
};

export default ProductListing;
