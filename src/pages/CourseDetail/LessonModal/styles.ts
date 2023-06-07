/* eslint-disable import/no-named-as-default */
import { Box, Stack } from '@mui/material';
import styled from 'styled-components';


export const LessonModalBox = styled(Box)`
  min-width: 30vw;
 	position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  width: 400;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 1rem;
`;

export const ModalHeader = styled(Stack)`

`;


export const ModalBody = styled(Stack)`
  align-items: center;
`;

