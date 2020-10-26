import firebase from "firebase";
import "firebase/auth";

interface AuthProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  
}

export const signup = async ({ firstName, lastName, email, password }: AuthProps) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = resp.user;
  if (user === null) {
    console.log("User unable to be added");
  } else {
    await user.updateProfile({ displayName: `${firstName} ${lastName}` });
    return user;
  }
};

export const logout = () => {
  return firebase.auth().signOut();
}

export const login = async ({email, password}: AuthProps) => {
  const resp = await firebase.auth().signInWithEmailAndPassword(email, password);
  return resp.user
}