import React, {useEffect} from 'react';
import {Poster} from "@/components/Poster/Poster";
import {Products} from "@/components/Products/Products";
import {RootState, useAppDispatch, useAppSelector} from "@/store";
import {Categories} from "@/components/Categories/Categories";
import {Banner} from "@/components/Banner/Banner";
import {ProductType} from "@/types";
import {filterByPrice} from "@/store/products/productsSlice";

const Home = () => {
  const dispatch = useAppDispatch()
  const {list, filtered} = useAppSelector<ProductType[]>(({products}: RootState) => products)
  const categoriesList = useAppSelector<ProductType[]>(({categories}: RootState) => categories.list)

  useEffect(() => {
    if (!list.length) return

    dispatch(filterByPrice(100))
  }, [list.length])

  return (
    <>
      <Poster/>
      <Products
        title="Trending"
        style={{}}
        products={list}
        amount={5}
      />
      <Categories
        title="Worth seeing"
        products={categoriesList}
        amount={5}
      />
      <Banner/>
      <Products
        title="Less that 100"
        style={{}}
        products={filtered}
        amount={5}
      />
    </>
  );
};

export default Home;
