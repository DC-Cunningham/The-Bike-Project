import React, {useState} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";


import { login } from "../firebase/auth";


import { Cell } from "../components/shared/Cell";

const StyledLogin = styled.div``;
// interface IFormInputs {
//   email: string;
//   password: number;
// }

function Login(props: any) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data: any) => {
    let user;
  setLoading(true);
  try {
    user = await login(data);
    reset();
  } catch (error) {
    console.log(error);
  }
  if (user) {
    console.log(user);
    navigate(`/profile/${user.uid}`, { state: { pathname: location.pathname } });
    
  } else {
    setLoading(false);
  }
};

  return (
    <Cell>
      <StyledLogin>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input type="email" name="email" ref={register} />
          {/* <p>{error.message}</p> */}
          <label>Password</label>
          <input type="password" name="password" ref={register} />
          {/* <p>{error.message}</p> */}
          {isLoading ? (<p>Loading...</p>): (<input type="submit" />)}
          
        </form>
      </StyledLogin>
    </Cell>
  );
}
export { Login };
