"use client";

import React from "react";
import { Input, Modal } from "antd";
import { Login } from "@/service/auth.service";
import Notification from "@/utils/notification";
import { signInValidationSchema } from "@/utils/validation";
import { useFormik } from "formik";

const LoginModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: async values => {
      try {
        const response = await Login(values);
        if (response && response.status === 200) {
          Notification({ title: "Login Successful", type: "success" });
          onClose();
        } else {
          Notification({ title: "Login Failed", type: "error" });
        }
      } catch (error) {
        Notification({ title: "Login Error", type: "error" });
      }
    },
  });

  return (
    <Modal
      open={true}
      onOk={formik.handleSubmit}
      onCancel={onClose}
      okButtonProps={{ className: "custom-ok-button" }}
      okText="Login"
      className="p-[25px]"
      onClose={onClose}
    >
      <form
        className="p-[25px] flex flex-col gap-3"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
        <p className="w-[270px] text-[12px]">
          Если Вы не зарегистрированы, нажмите кнопку
        </p>
        <div className="form-group">
          <Input
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="button">Забыли пароль?</button>
      </form>
    </Modal>
  );
};

export default LoginModal;
