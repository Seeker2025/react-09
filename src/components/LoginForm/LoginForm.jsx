import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(6).max(16).required(),

});

const initialValues = {
    login: '123',
    password: 'qwe',

};

const Input = styled(Field)`
    font-size: 40px;
`;

export const LoginForm = () => {

    // const handleSubmit = e =>{
    //     e.preventDefault();
    //     const{ login, password } = e.target.elements
    //     console.dir(login.value);
    //     console.dir(password.value);
        
    // }

    const handleSubmit =(values, {resetForm}) =>{
        console.log(values);
        // console.log(actions);
        resetForm();
    }

    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >

        <Form autoComplete="off">
            <label htmlFor="login">
                Login
                <Input type="text" name="login"/>
                <ErrorMessage name="login"  component="div"/>
            </label>

            <label htmlFor="password">
                Password
                <Input type="password" name="password"/>
                <ErrorMessage name="password" component="div"/>
            </label>

            <button type="submit">Submit</button>

        </Form>

        </Formik>
    )
}