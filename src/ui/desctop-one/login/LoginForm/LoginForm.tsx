import React from "react";
import style from './LoginForm.module.scss'

const LoginForm = () => {
  return (
    <form>
      Логин
      <input className={style.input} />
      Пароль
      <input className={style.input} />
      <button className={style.button}>Войти</button>
    </form>
  );
};

export default LoginForm;
