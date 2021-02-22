import React from "react";
import s from "./FormControls.module.scss";

export const Textarea = ({ input, meta: {touched, error}, ...props }) => {
    const isError = touched && error;
    return (
        <div className={ s.root + " " + (isError ? s.error : '') }>
            <textarea {...input} {...props} />
            { isError && <span>{ error }</span> }
        </div>
    )
}

export const Input = ({ input, meta: {touched, error}, ...props }) => {
    const isError = touched && error;
    return (
        <div className={ s.root + " " + (isError ? s.error : '') }>
            <input {...input} {...props} />
            { isError && <span>{ error }</span> }
        </div>
    )
}