import React,{useState} from 'react';
import PropTypes from 'prop-types';
import WrappedPage from "../WrappedPage";
import CardBlock from "../CardBlock";
import {FORM_FIELD_TYPES} from "../../constants/const";
import Form from "../form/Form";
import FormCheckbox from "../form/Form.Checkbox";

const UFormsPage = props => {

    const settings = {
        fields: [
            {
                id: 1, name: 'email', type: FORM_FIELD_TYPES.EMAIL, placeholder: 'placeholder email',label: 'Input Email'
            },
            {
                id: 2, name: 'username', type: FORM_FIELD_TYPES.TEXT, placeholder: 'placeholder text',label: 'Input text',error: 'Required field',isRequired: true
            },
            {
                id: 3, name: 'password', type: FORM_FIELD_TYPES.PASSWORD, placeholder: 'placeholder password',label: 'Input password',disabled: true
            },
            {
                id: 4, name: 'dis-text', type: FORM_FIELD_TYPES.TEXT, placeholder: 'placeholder disable text',label: 'Input disable text'
            },
            {
                id: 5, name: 'textarea', type: FORM_FIELD_TYPES.TEXTAREA, placeholder: 'placeholder disable textarea',label: 'Input textarea'
            }
        ]
    };
    const [checked,setChecked] = useState(false);
    const checkBoxChange = (e)=>{
        setChecked((checked)=>!checked);
    };


    const [state,setState] = useState({
        username: '',
        email: '',
        password: '',

    });

    return (
        <div className='flex-row'>
            <div className='flex-col flex-col-2'>
                <CardBlock>
                    <CardBlock.Title>Inputs</CardBlock.Title>
                    <CardBlock.Body>
                        <Form settings={settings} values={state}/>
                    </CardBlock.Body>
                </CardBlock>
                <CardBlock>
                    <CardBlock.Title>Radio Types</CardBlock.Title>
                    <CardBlock.Body>
                        <FormCheckbox checked={checked} onChange={checkBoxChange}/>
                    </CardBlock.Body>
                </CardBlock>
            </div>
        </div>
    );
};

UFormsPage.propTypes = {

};

export default UFormsPage
// export default WrappedPage(UFormsPage,{title: 'Form elements'});