import React from 'react';
import img from './signup-img.svg';
import styled from 'styled-components';

const LoginContainer = styled.div`
    border-radius: 5px;
    box-shadow: 1px 1px 10px gray;
    width: 90%;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 768px) {
        flex-wrap: nowrap;
    }
`;

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 90%;
`;

const CenteredContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
`;

const Input = styled.input`
  /* Your input styles here */
    padding: 0.8rem;
    background-color: white;
    color: black;
    border: 2px solid #80808030;
    border-radius: 5px;
    margin-bottom: 0.8rem;
    outline: none;
    width: 100%;
`;

const CheckedInput = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 3px;
    background-color: white;
`;


const SubmitButton = styled.button`
    background-color: #407bff;
    margin-block: 10px;
`;

const Heading = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin: 0.8rem;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 50%;
    height: 50%;
    @media (min-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;

const Link = styled.a`
    color: #407bff;
`

const LoginForm = () => {
  return (
    <LoginContainer>
      <ImageContainer>
        <Image src={img} alt="Your Image" />
      </ImageContainer>
      <FormContainer>
        <Container>
            <Heading>Login</Heading>
            <div>Login Id</div>
            <Input type="text" placeholder="Enter Login Id" />
            <div>Password</div>
            <Input type="password" placeholder="Enter Password" />
            <CheckedInput type='checkbox'/>
            <label htmlFor="Remember Me">Remember Me</label>
            <CenteredContainer>
                <SubmitButton>Submit</SubmitButton>
                <CenteredContainer>Don't have an account? <Link href='/'>Register Here</Link> </CenteredContainer> 
            </CenteredContainer>

        </Container>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginForm;
