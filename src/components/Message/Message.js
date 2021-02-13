import React from "react";
import s from "./Message.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators"
import {Textarea} from "../common/FormControls/FormControls";

let maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="message" component={Textarea} placeholder="Enter your message" validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'addMessage'})(AddMessageForm)

const Message = (props) => {
    const messages = props.message
        .map( message => <li key={ message.id }>{ message.message }</li> );

    const onAddMessage = (value) => {
        props.addMessage(value.message);
    }

    return (
        <div className={s.root}>
            <div>
                <ul>
                    { messages }
                </ul>
            </div>
            <AddMessageFormRedux onSubmit={onAddMessage}/>
        </div>
    )
}

export default Message;