import React from "react";
import s from "./FormControls.module.scss";

export const Textarea = ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={ s.root + " " + (isError ? s.error : '') }>
            <textarea {...input} {...props} />
            { isError && <span>{ meta.error }</span> }
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={ s.root + " " + (isError ? s.error : '') }>
            <input {...input} {...props} />
            { isError && <span>{ meta.error }</span> }
        </div>
    )
}