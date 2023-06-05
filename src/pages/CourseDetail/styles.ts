/* eslint-disable import/no-named-as-default */
import { Box, Button, Grid, LinearProgress, Stack } from '@mui/material';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';


export const CourseDetailFlex = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 2rem;
  ${down('md')} {
    flex-direction: column;
  }
`;

export const CourseDetailImageSection = styled(Stack)`
  width: 50%;
  justify-content: center;
  align-items: center;
  ${down('md')} {
    width: 100%;
  }
`;
export const CourseDetailImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 490px;
  max-width: 445px;
`;
export const LessonSection = styled(Stack)`
  width: 50%;
  height: 100%;
  min-height: 30rem;
  justify-content: space-between;
  align-items: center;
  ${down('md')} {
    width: 100%;
  }
`;

export const LessonGridContainer = styled(Grid)`
  direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 552px;
`;

export const LessonGridItem = styled(Grid)`
  max-height: 131px;
  justify-content: center;
  border: solid 1px #dadada;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const LessonItem = styled(Stack)`
  height: 5rem;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 7px;
  padding: 1rem;
  gap: 2rem;
`;
export const LessonImageBox = styled(Stack)`
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  ${down('md')} {
    width: 4rem;
    height: 4rem;
  }
`;
export const LessonImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
`;
export const LessonInfoSection = styled(Stack)`
  width: 50%;
  justify-content: space-between;
  direction: row;
  gap: 0.5rem;
`;
export const LessonProgress = styled(LinearProgress)`
  border-radius: 5px;
  height: 12px !important;
`;

export const LessonProgressText = styled(Stack)`
  align-items: center;
  justify-content: flex-end;
  font-size: 0.75rem;
  color: #898a8d;
  height: 100%;
  width: 20%;
`;
export const CourseDetailButton = styled(Button)`
  border-radius: 30px !important;
  font-size: 1.25rem;
  width: 20rem;
  height: 3rem;
`;

export const IconBox = styled(Box)`
  display: flex;
  width: 22px;
  height: 22px;
  background-color: #ece3ef;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
