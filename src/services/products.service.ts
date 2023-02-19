import IProducts from '../types/product';
import {api} from './api.service';

const getProducts = async () => {
  const response = await api.get<IProducts>(`products`);
  if (response.ok) {
    return response.data;
  } else {
    console.log(response.status);
    return;
  }
};

const getSortedProducts = async (sortingType : string) => {
    const response = await api.get<IProducts[]>(`products?sort=${sortingType}`);
    if (response.ok) {
      return response.data;
    } else {
      console.log(response.status);
      return;
    }
  };

  const getAllCategories = async () => {
    const response = await api.get<string[]>(`products/categories`);
    if (response.ok) {
      return response.data;
    } else {
      console.log(response.status);
      return;
    }
  };

  const getSpecificCategoryProduct = async (selectedCategory: string) => {
    const response = await api.get<IProducts[]>(`products/category/${selectedCategory}`);
    if (response.ok) {
      return response.data;
    } else {
      console.log(response.status);
      return;
    }
  };

export const ProductSvc = {
  getProducts,
  getSortedProducts,
  getAllCategories,
  getSpecificCategoryProduct
};
