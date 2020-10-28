import React, {useState} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { login } from "../firebase/auth";
import { Cell } from "../components/shared/Cell";

const StyledLogin = styled.div`
`;
// interface IFormInputs {
//   email: string;
//   password: number;
// }

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})

;

interface LocationState {
  from: {
    pathname: string;
  };
}

function Login(props: any) {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(formSchema)
  });
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();

  const onSubmit = async (data: any) => {
    let user;
  setLoading(true);
  try {
    user = await login(data);
    reset();
  } catch (error) {
    const errorMessage = error.message
    console.log(errorMessage);
    return errorMessage;
  }
  if (user) {
    navigate(`/profile/${user.uid}`);
  } else {
    setLoading(false);
  }
};

  return (
    <Cell>
      <StyledLogin>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Login</h3>
          <label>Email</label>
          <input type="email" name="email" ref={register({required: true})} />
          {errors.email && (<p>{errors.email.message}</p>)}
          <label>Password</label>
          <input type="password" name="password" ref={register({ required: true})} />
          {errors.password && <p>{errors.password.message}</p>}
          {isLoading ? (<FontAwesomeIcon icon={faSpinner} size="2x" className="fa-spin loading"/>): (<input type="submit" />)}
          <p className="extraText">Don't have an account? <Link to="/register">Sign up </Link></p>
        </form>
      </StyledLogin>
    </Cell>
  );
}
export { Login };
