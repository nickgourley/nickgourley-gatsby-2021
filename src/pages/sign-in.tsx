import React from "react";
import SignInForm from "../components/sign-in-form";
import { FirebaseContext } from "../components/Firebase";
import UserContext from "../context/UserContext";

const SignInPage = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <hr />
            <FirebaseContext.Consumer>
                {firebase => (
                    <UserContext.Consumer>
                        {values => (<SignInForm firebase={firebase} setUser={values.setUser} />)}
                    </UserContext.Consumer>
                    
                )}
            </FirebaseContext.Consumer>
        </div>
    );
}

export default SignInPage;