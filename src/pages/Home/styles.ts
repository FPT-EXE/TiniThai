// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { Grid } from '@mui/material';


export const Home = styled.body`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  background-color: #d1b9dc;
  height: 40vh;
  display: flex;
  justify-content: center;
`;

export const ContentHeader = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
