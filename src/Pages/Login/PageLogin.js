import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../components/common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

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

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <Field name="login" component={Input} placeholder="Iogin" validate={[required]}/>
            </div>
            <div className="">
                <Field name="password" component={Input} placeholder="password" validate={[required]}/>
            </div>
            <div className="">
                <Field name="rememberMe" component={Input} type="checkbox"/>
                <span>remember me</span>
            </div>
            <div className="">
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReducerForm = reduxForm({form: 'login'})(LoginForm)

export default PageLogin;