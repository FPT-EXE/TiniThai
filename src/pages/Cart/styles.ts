// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { down } from 'styled-breakpoints';


export const Cart = styled.div`
  align-items: center;
  justify-content: center;
`;

export const CardItems = styled.div`
  width: 80vw;
  margin-top: 20px;
  ${down('md')} {
    width: 90%;
  }
`;
