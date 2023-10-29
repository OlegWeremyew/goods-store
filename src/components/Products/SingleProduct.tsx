import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "@/utils/routes";
import {Products} from "./Products.js";
import {RootState, useAppDispatch, useAppSelector} from "@/store";
import {useGetProductQuery} from "@/store/api/apiSlice";
import {Product} from "@/components/Products/Product";

export const SingleProduct = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const {list, related} = useAppSelector(({products}: RootState) => products);

  const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return;

  }, [data, dispatch, list.length]);

  if (!data) {
    return <section className="preloader">Loading...</section>
  }

  return (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related products"/>
    </>
  );
};

