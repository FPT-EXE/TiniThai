/* eslint-disable import/no-named-as-default */
import { Box, Grid, Stack } from '@mui/material';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';


export const LessonDetailContainer = styled(Stack)`
  padding: 1rem 2rem;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${down('md')} {
    padding: 1rem 0rem;
  }
`;

export const StepperSection = styled(Stack)`
  width: 100%;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`;

export const StepBox = styled(Box)`
  width: 2rem;
  height: 0.5rem;
  border-radius: 6px;
`;

export const QuestionTitle = styled(Stack)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  column-gap: 20px;
  ${down('md')} {
  }
`;

export const QuestionBox = styled(Stack)`
  width: 50%;
  justify-content: center;
  align-items: center;
  ${down('md')} {
    flex-direction: column;
    width: 100%;
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
