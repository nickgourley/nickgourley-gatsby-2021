import React from "react";
import SignUpForm from "../components/sign-up-form";
import { FirebaseContext } from "../components/Firebase"

const SignUpPage = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <hr />
            <FirebaseContext.Consumer>
                {firebase => <SignUpForm firebase={firebase} /> }
            </FirebaseContext.Consumer>
        </div>
    );
}

export default SignUpPage;