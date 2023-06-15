import React from 'react';
import styled from 'styled-components';

// styles
const TitleStyled = styled.div`
    font-size: 2em;
`;

const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginPage = () => {
    return (
        <div>
            <TitleStyled>Login</TitleStyled>
            <FormStyled action="">
                <label for="username">Username</label>
                <input type="text" placeholder="username" />
                <label for="password">Password</label>
                <input type="password" placeholder="password" />
                <button>Submit</button>
            </FormStyled>
        </div>
    );
};

export default LoginPage;
