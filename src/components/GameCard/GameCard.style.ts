import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/bearkpoints/breakpoint';
import {
  secondaryColor,
  primaryTextColor,
  secondaryTextColor,
  tertiaryTextColor,
  backgroundColor,
} from '../../styles/theme/theme';

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  background-color: ${secondaryColor};
  border-radius: 4px;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Details = styled.div`
  padding: 20px;

  svg {
    color: #fff;
    margin-right: 5px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    whitespace: nowrap;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${primaryTextColor};

  @media (min-width: ${breakpoints.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${secondaryTextColor};
  margin: 10px 0;

  @media (min-width: ${breakpoints.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Genre = styled.p`
  padding: 2px 4px;
  margin: 0 8px 8px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  color: ${tertiaryTextColor};
  background-color: ${backgroundColor};
  float: right;
`;
