import RecommededProductBox from "./RecommededProductBox";
import select from "@mui/material/Select";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../store/store";
import IProducts from "../types/product";
import {ProductSvc} from '../services/products.service'
import { Link } from "react-router-dom";

const ProductList = () => {


  const data = useSelector((state: RootState) => state.products.productList)
  const [productsData, setProductsData] = useState<IProducts[] | undefined>(data)
  const [categories, setCategories] = useState<string[]>()
  const [priceValue, setPriceValue] = useState<number>(500)
  const searchTimeout: any = useRef(0);

  useEffect(()=> {
    setProductsData(data)
  },
  [data])
useEffect(()=> {
  ProductSvc.getAllCategories().then(res => {
    setCategories(res)
  })
},[])

const onClickCategoryHandler = (category: string) => {
  ProductSvc.getSpecificCategoryProduct(category).then(res=> {
    console.log(res)
    setProductsData(res);
  })
}

const searchProduct = (text : string) => {
  console.log(text)
  if (text==='') {
    setProductsData(data)
  } else {
  const searchedData = productsData?.filter((product)=> product.title.toLowerCase().includes(text.toLowerCase()))
  console.log(searchedData, 'test')
  setProductsData(searchedData)
}

}

const onClickSortHandler = (sortValue : string) => {
  ProductSvc.getSortedProducts(sortValue).then(res => {
    setProductsData(res)
  })
}

const onChangePriceFilterHandler = (price : string) => {
  const products =data
  const priceFilterData = products.filter(data => data.price <= price)
  setProductsData(priceFilterData)
}


  return (
    <section className="main">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-3">
            <div className="priceHeaderContainer">
              <h4>Price</h4>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3V9.469L9 14.469V21.618L15 18.618V14.469L21 9.469V3H3ZM19 5V7H5V5H19ZM13 13.531V17.382L11 18.382V13.531L5.562 9H18.438L13 13.531Z"
                  fill="#F86338"
                />
              </svg>
            </div>
            <input type="range" min="1" max="1000" onChange = {(e)=> onChangePriceFilterHandler(e.target.value)}></input>

            <h4>Categories</h4>
            {categories?.map((data)=> {
              return (
                <div className="col">
                <Link className="categoryList" to={''} onClick = {()=>onClickCategoryHandler(data)}>
                  {data}
                </Link>
                </div>
              )
            })}
          </div>
          <div className="col-9">
            <form action="" className="formSearch">
              <input
                type="text"
                className="form-control"
                placeholder="Search products"
                onChange={(e)=>{
                  if (searchTimeout.current) {
                    clearTimeout(searchTimeout.current);
                  }
    
                  // setSearchTimer(
    
                  searchTimeout.current = setTimeout(
                    () => {
                      searchProduct(e.target.value)
                    },
    
                    500,
                  );
                }}
              />
              <i>
                <img src="./images/search.svg" alt="" />
              </i>
            </form>
            <div className="row sortingContainer">
              <div className="col-6 showingResultTxt">Showing Results</div>

              <div className="col-6">
                <div className="productSorting">
                  <div className="sortByText">Sort by</div>

                  <select
                    style={{
                      minWidth: "7rem",
                      marginLeft:'1rem'
                    }}
                    className="form-select-sm"
                    aria-label="Default select example"
                    onChange={(e)=> onClickSortHandler(e.target.value)}
                  >
                    <option selected>Select</option>
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row ">
              {productsData!.map((data) => {
                return (
                  <div className="col-6 col-md-4">
                    <div className="recommendedItemContainer">
                      <img width={200} height={200} src={data.image} />
                      <div className="productTitle">{data.title}</div>
                      <div className="priceValue">${data.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
