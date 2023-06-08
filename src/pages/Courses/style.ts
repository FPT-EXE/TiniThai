import styled from '@emotion/styled';
import { Grid, LinearProgress, Stack } from '@mui/material';
import { down } from 'styled-breakpoints';


export const CourseListContainer = styled(Stack)`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
${down('md')} {
  flex-direction: column;
}
`;

export const CourseGridContainer = styled(Grid)`
  direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  max-height: 420px;
  overflow-y: scroll;
  overflow-x: visible;
  padding: 1rem 2rem;
`;


export const CourseGridItem = styled(Grid)`
  padding-inline: 2rem;
  border-radius: 12px;
  max-height: 131px;
  justify-content: center;
  border: solid 1px #dadada;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const CourseItem = styled(Stack)`
  height: 5rem;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 7px;
  padding: 1rem;
  gap: 2rem;
`;
export const CourseImageBox = styled(Stack)`
  width: 5rem;
  height: 5rem;
  border-radius: 37px;
  justify-content: center;
  align-items: center;
  ${down('md')} {
    width: 4rem;
    height: 4rem;
  }
`;
export const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
`;
export const CourseInfoSection = styled(Stack)`
  width: 70%;
  justify-content: space-between;
  direction: row;
  gap: 0.5rem;
`;
export const CourseProgress = styled(LinearProgress)`
  border-radius: 5px;
  height: 12px !important;
`;

export const CourseProgressText = styled(Stack)`
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #898a8d;
  height: 100%;
  width: 1rem;
`;
