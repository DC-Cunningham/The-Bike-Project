import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Route, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { signup } from "../firebase/auth";

import { Cell } from "../components/shared/Cell";

const StyledRegister = styled.div``;

function Register(props: any) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    let newUser;
    setLoading(true);
    try {
      newUser = await signup(data);
      reset();
    } catch (error) {
     console.log(error);
    }
    if (newUser  !== null && newUser !== undefined) {
    navigate(`/profile/${newUser.uid}`);
    } else {
      setLoading(false);
    }
  }

  return (
    <Cell>
      <StyledRegister>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>First Name </label>
          <input type="text" name="firstName" ref={register} />
          {/* <p>{errors.firstName?.message}</p> */}
          <label>Last Name </label>
          <input type="text" name="lastName" ref={register} />
          {/* <p>{errors.lastName?.message}</p> */}
          <label>Email </label>
          <input type="email" name="email" ref={register} />
          {/* <p>{errors.email?.message}</p> */}
          <label>Password </label>
          <input type="password" name="password" ref={register} />
          {/* <p>{errorMessage}</p> */}
          {isLoading ? (<p>Loading...</p> ):(
          <input type="submit" name="Register" />)}
        </form>
      </StyledRegister>
    </Cell>
  );
}
export { Register };
