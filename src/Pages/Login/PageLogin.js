import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../components/common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import s from "../../components/common/FormControls/FormControls.module.scss";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <Field name="email" component={Input} placeholder="login" validate={[required]}/>
            </div>
            <div className="">
                <Field name="password" type="password" component={Input} placeholder="password" validate={[required]}/>
            </div>
            <div className="">
                <Field name="rememberMe" component={Input} type="checkbox"/>
                <span>remember me</span>
            </div>
            {
                error && <div className={s.FormError}>{error}</div>
            }
            <div className="">
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReducerForm = reduxForm({form: 'login'})(LoginForm)

const PageLogin = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <div>Login</div>
            <LoginReducerForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(PageLogin);