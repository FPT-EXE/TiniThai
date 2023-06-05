/* eslint-disable import/no-named-as-default */
import { Box, Grid, Stack } from '@mui/material';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';


export const LessonDetailContainer = styled(Stack)`
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: 2rem;
`;

export const QuestionBox = styled(Stack)`
  width: 50%;
  justify-content: center;
  align-items: center;
  ${down('md')} {
    flex-direction: column;
  }
`;

export const QuestionImage = styled.img`
  width: 300px;
  height: 300px;
  padding-bottom: 5rem;
  border-radius: 50%;
  ${down('md')} {
  }
`;

export const GridContainer = styled(Grid)`
  min-height: 15vh;

  justify-content: space-between;
  ${down('md')} {
  }
`;

export const GridItem = styled(Grid)`
  height: 50px;
  cursor: pointer;
  ${down('md')} {
  }
`;
export const AnswerChoice = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1b9dc;
  border-radius: 10px;
  color: #fff;
  font-size: 24px;
  transition: all 0.2s ease-in-out;

  ${down('md')} {
  }
`;

export const ResultBox = styled(Box)`
  width: 100%;
  height: 140px;

`;

export const ResultContent = styled(Stack)`
  width: 100%;
  height: 100%;
  padding: 1rem 5rem;
  box-sizing: border-box;
  justify-content: center;
  gap: 5%;
`;
