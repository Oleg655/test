import React from "react";
import Form from "./form/Form";
import style from "./DesctopOne.module.scss";

const DesctopOne = () => {
  return (
    <>
      <div className={style.desctopBlock}>
        <Form />
      </div>
    </>
  );
};

export default DesctopOne;