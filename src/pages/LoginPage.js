import React from 'react';
import styled from 'styled-components';

// styles
const TitleStyled = styled.div`
    font-size: 2em;
    margin-bottom: 1.5rem;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    width: 300px;
`;

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
`;
const Button = styled.button`
    padding: 0.75rem 2rem;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
`;

const StyledParagraph = styled.p`
    margin-top: 1.5rem;
    text-align: center;
`;

const RegisterLink = styled.a`
    color: blue;
    text-decoration: underline;
`;

const LoginPage = () => {
    return (
        <Wrapper>
            <FormStyled action="">
                <TitleStyled>Login</TitleStyled>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" placeholder="username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" placeholder="password" />
                </FormGroup>
                <Button>Login</Button>
                <StyledParagraph>
                    Don't have an account? Register{' '}
                    <RegisterLink href="Register">here!</RegisterLink>
                </StyledParagraph>
            </FormStyled>
        </Wrapper>
    );
};

export default LoginPage;
