import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout,selectUser } from './userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const User = useSelector(selectUser);
    
    const loginToApp = () =>{
    dispatch(setUser({
        user: "Omridan159"
    }))
    }

    console.log(User);

   return (
      <div>
         <h1>I am the Login componet</h1>
         {User ? <h2>The User is {User}</h2> : <h2>No one is Sign In</h2>}
         <button onClick={loginToApp}>Log Me In</button>
         <button onClick={() => dispatch(logout())}>Log Me Out</button>
      </div>
   );
};

export default Login;
