import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <Field name="login" component="input" placeholder="login" />
            </div>
            <div className="">
                <Field name="password" component="input" placeholder="password"/>
            </div>
            <div className="">
                <Field name="rememberMe" component="input" type="checkbox"/>
                <span>remember me</span>
            </div>
            <div className="">
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReducerForm = reduxForm({form: 'login'})(LoginForm)

const PageLogin = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <div>Login</div>
            <LoginReducerForm onSubmit={onSubmit}/>
        </div>
    )
}

export default PageLogin;