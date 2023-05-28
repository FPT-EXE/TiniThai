import { Paper } from '@mui/material';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';


export const Login = styled.body`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Form = styled.div`
  margin: 0 10%;
  padding: 10px;
`;

export const ImageSpace = styled.div`
  margin: 0 10%;
  padding: 20px;
  align-items: center;
`;
export const Image = styled.image`
  width: 100%;
  height: auto;
`;

export const PaperLogin = styled(Paper)`
  padding: 10% 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
