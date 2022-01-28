import styled from 'styled-components';
import { breakpoints } from '../../styles/bearkpoints/breakpoint';
import { backgroundColor, secondaryTextColor } from '../../styles/theme/theme';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 540px;
  padding: 0 16px;
  margin: 24px auto;
  color: ${secondaryTextColor};

  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1010px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-right: 16px;
  flex-basis: 25%;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 8px;
  color: white;
  background-color: ${backgroundColor};
`;
