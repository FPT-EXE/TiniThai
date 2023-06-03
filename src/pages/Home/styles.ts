// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { down } from 'styled-breakpoints';


export const Home = styled.body`
  align-items: center;
  justify-content: center;
`;

export const Carousel = styled(Box)`
  background-color: #d1b9dc;
  height: 40vh;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  ${down('md')} {
    width: 90%;
    height: 35vh;
  }
`;

export const ContentCarousel = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Courses = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  ${down('md')} {
    width: 90%;
  }
`;
