import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Cell } from "../components/shared/Cell";

const StyledLogin = styled.div``;
interface IFormInputs {
  email: string;
  password: number;
}

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

function Login() {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <Cell>
      <StyledLogin>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input type="email" name="email" ref={register} />
          <p>{errors.email?.message}</p>
          <label>Password</label>
          <input type="text" name="Password" ref={register} />
          <p>{errors.password?.message}</p>
          <input type="submit" />
        </form>
      </StyledLogin>
    </Cell>
  );
}
export { Login };
