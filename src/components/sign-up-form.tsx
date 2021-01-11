import React from "react";

const SignInForm = (props) => {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.target.username.value, e.target.password.value);
        if(props.firebase) {
            const username = e.target.username.value;
            const password = e.target.password.value;
            props.firebase.doCreateUserWithEmailAndPassword(username, password)
                .then((user)=> {
                    console.log('success');
                    console.log(user);
                    props.doSetUser({ name: "Nick" });
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        }
      }
    return (
        <form onSubmit={handleLogin}>
          <input name="username" />
          <input name="password" type="password" />
          <button>Login</button>
        </form>
    );
}

export default SignInForm;