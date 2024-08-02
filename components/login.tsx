"use client";

import React, { useState } from "react";
import KeyIcon from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Вход в аккаунт
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Если Вы не зарегистрированы, нажмите кнопку{" "}
          <a
            href="#"
            className="font-medium text-yellow-500 hover:text-yellow-400"
          >
            Регистрация
          </a>
        </p>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="login" className="sr-only">
              Login
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <KeyIcon className="text-gray-400" />
              </span>
              <input
                id="login"
                name="login"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm pl-10"
                placeholder="Login"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <KeyIcon className="text-gray-400" />
              </span>
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                required
                className="appearance-none rounded-md relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm pl-10"
                placeholder="Password"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <VisibilityOff className="text-gray-400" />
                ) : (
                  <Visibility className="text-gray-400" />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Забыли пароль?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
