import React, { useState, useContext, useEffect, ReactNode } from "react";
import firebase from "firebase"
require("firebase/auth")

interface UserProviderProps {
  children: React.ReactNode
}

export const UserContext = React.createContext({user: null, loading: false});

export const UserProvider = (props: UserProviderProps) => {
  const [session, setSession] = useState<{user: any, loading: boolean}>({ user: null, loading: false });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setSession({ loading: false, user: user });
    });
    return () => unsubscribe();
  }, []);
  return (
    <UserContext.Provider value={session}>
      {!session.loading && props.children}
    </UserContext.Provider>
  );
};

export const useSession = () => {
  const session = useContext(UserContext);
  return session;
};
