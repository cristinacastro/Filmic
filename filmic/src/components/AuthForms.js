import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 500px;
  margin: 0 auto;
  padding: 10rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid white;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background: white;
  border: 1px solid white;
  opacity: 80%;
  padding: 1rem;
  color: black;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Error = styled.div`
  background-color: white;
  padding: 20px;
  color: black;
`;

export { Form, Input, Button,  Card, Error };
