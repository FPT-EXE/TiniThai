// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Grid } from '@mui/material';


export const Cart = styled(Grid)`
  align-items: center;
  justify-content: center;
`;

export const CardItems = styled(Grid)`
  width: 80%;
  margin-top: 20px;
  ${down('md')} {
    width: 90%;
  }
`;
