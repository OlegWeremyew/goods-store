import React from "react";

import {UserSignupForm} from "./UserSignupForm";
import {UserLoginForm} from "./UserLoginForm";

import styles from "@/assets/styles/User.module.css";
import {RootState, useAppDispatch, useAppSelector} from "@/store";

export const UserForm = () => {
  const dispatch = useAppDispatch();
  const { showForm, formType } = useAppSelector(({ user }: RootState) => user);

  // const closeForm = () => dispatch(toggleForm(false));
  // const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      {/*<div className={styles.overlay} onClick={closeForm} />*/}
      {/*{formType === "signup" ? (*/}
      {/*  <UserSignupForm*/}
      {/*    toggleCurrentFormType={toggleCurrentFormType}*/}
      {/*    closeForm={closeForm}*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <UserLoginForm*/}
      {/*    toggleCurrentFormType={toggleCurrentFormType}*/}
      {/*    closeForm={closeForm}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  ) : (
    <></>
  );
};
