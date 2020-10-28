import React from "react";
import { useSession } from "../context/UserProvider";

import { Cell } from "../components/shared/Cell";

export const Profile = () => {
  const { user }= useSession();

    return (
      <Cell>
        <div>
          <h1>Logged in as -</h1>
          <p>Display Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Email Verified: {user.emailVerified}</p>
          <p>Photo URL: {user.photoURL}</p>
          <p>Is Anonymous: {user.isAnonymous}</p>
          <p>User ID: {user.uid}</p>
        </div> 
      </Cell>)
};
