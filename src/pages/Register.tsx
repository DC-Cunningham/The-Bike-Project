import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Cell } from "../components/shared/Cell";

const StyledRegister = styled.div``;

interface IFormInputs {
  name: string;
  email: string;
  password: number;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

function Register() {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <Cell>
      <StyledRegister>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Name </label>
          <input type="text" name="name" ref={register} />
          <p>{errors.name?.message}</p>
          <label>Email </label>
          <input type="email" name="email" ref={register} />
          <p>{errors.email?.message}</p>
          <label>Password </label>
          <input type="text" name="Password" ref={register} />
          <p>{errors.password?.message}</p>
          <input type="submit" name="Register" />
        </form>
      </StyledRegister>
    </Cell>
  );
}
export { Register };
