import React, { useContext } from "react";
import { Layout } from "./../components";
import { Context } from "./../context/context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import { cookiesManager } from './../helpers/helpers';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const { state, dispatch } = useContext(Context);
  const router = useRouter();

  const onSubmit = data => {
    axios
      .post(`${state.api}/login`, data)
      .then(response => {
        if (response.status === 200 && response.data.id) {
          cookiesManager('set', 'user', response.data);
          dispatch({ type: "LOGIN", user: response.data });
          router.push('/');
        } else {
          dispatch({ type: "SET_MESSAGE", message: {type: 'danger', message: response.data.error} });
        }
      })
      .then(error => {
        if (error) {
          dispatch({ type: "SET_MESSAGE", message: {type: 'warning', message: 'Chyba ! Kontaktujte administrátora'} });
        }
      });
  };

  return (
    <Layout pageTitle="Login - Autoblšák.sk" pageDescription="" pageKeywords="">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group col-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            ref={register({ required: true })}
          ></input>
          {errors.email && errors.email.type === "required" && (
            <i className="text-danger">Email je povinný údaj.</i>
          )}
        </div>
        <div className="form-group col-4">
          <label htmlFor="password">Heslo</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            ref={register({ required: true })}
          ></input>
          {errors.password && errors.password.type === "required" && (
            <i className="text-danger">Heslo je povinný údaj.</i>
          )}
        </div>

        <div className="col-12 d-flex justify-content-center">
          <input type="submit" value="Prihlásiť" />
        </div>
      </form>
    </Layout>
  );
};

export default Login;
