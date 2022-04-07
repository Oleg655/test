import React from "react";
import style from "./Form.module.scss";

const Form = () => {
  return (
    <>
      <div className={style.formBlock}>
        <h1>Simple Hotel Check</h1>
        <form>
          Логин
          <input className={style.input} />
          Пароль
          <input className={style.input} />
          <button className={style.button}>Войти</button>
        </form>
      </div>
    </>
  );
};

export default Form;
