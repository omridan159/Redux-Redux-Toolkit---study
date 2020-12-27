import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout,setPass,selectUser,selectPass } from './userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const User = useSelector(selectUser);
    const Pass = useSelector(selectPass);
    
    const loginToApp = () =>{
    dispatch(setUser({
        user: "Omri"
    }))
    }
    const SetPassword = () =>{
    dispatch(setPass({
        pass: "123456"
    }))
    }

    console.log(User);

   return (
      <div>
         <h1>I am the Login componet</h1>
         {User ? <h2>The User is {User}</h2> : <h2>No one is Sign In</h2>}
         <button onClick={loginToApp}>Log Me In</button>
         <button onClick={() => dispatch(logout())}>Log Me Out</button>
         {Pass ? <h2>The Pass is {Pass}</h2> : <h2>No Pass</h2>}
         <button onClick={SetPassword}>SetPassword</button>
      </div>
   );
};

export default Login;
