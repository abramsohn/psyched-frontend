import React, { useState, useLayoutEffect, useContext, createContext } from "react";
import baseUrl from './helpers/baseUrl' 

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
      return fetch(`${baseUrl}/users/signin`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: { 'Content-Type': 'application/json' },
            
        })
          .then(res => res.json())
          .then(response => {
                setUser(response.name);
                return response.name;
            });
            // .then(user => (props.setUser(user)))
            // .catch(error => console.log({ 'Error': error }));
    };

  const signup = (name, email, password) => {
    return fetch(`${baseUrl}/users/signup`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
          headers: { 'Content-Type': 'application/json' }, 
      })
      .then(res => res.json())
      .then(response => {
        setUser(response.name);
        return response.name;
        });
        // .then(res => res.json())
        // .then(user => console.log(user))
        // .catch(error => console.log({ 'Error': error }));
  };

    const therapistSignup = (name, email, password) => {
    return fetch(`${baseUrl}/users/therapist/signup`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
          headers: { 'Content-Type': 'application/json' }, 
      })
      .then(res => res.json())
      .then(response => {
        setUser(response.name);
        return response.name;
        });
        // .then(res => res.json())
        // .then(user => console.log(user))
        // .catch(error => console.log({ 'Error': error }));
  };

  const signout = () => {
    return fetch(`${baseUrl}/users/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })            
      .then(() => {
        setUser(false);
      });
  };


//   const sendPasswordResetEmail = email => {
//     return firebase
//       .auth()
//       .sendPasswordResetEmail(email)
//       .then(() => {
//         return true;
//       });
//   };

//   const confirmPasswordReset = (code, password) => {
//     return firebase
//       .auth()
//       .confirmPasswordReset(code, password)
//       .then(() => {
//         return true;
//       });
//   };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  useLayoutEffect(() => {
    // const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    fetch(`${baseUrl}/users`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
     .then(response => { console.log(response)
       if (response) {
         setUser({
            name: response.name,
            role: response.role,
            avatar: response.avatarImage,
            therapist: response.therapist
          });
          return response;
        } else {
          setUser(false);
          return
        }
      });
    
    // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    therapistSignup,
    signout,
    // sendPasswordResetEmail,
    // confirmPasswordReset
  };

}