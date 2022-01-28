import styled from 'styled-components';
import { breakpoints } from '../../styles/bearkpoints/breakpoint';
import {
  primaryTextColor,
  secondaryTextColor,
  whiteTextColor,
} from '../../styles/theme/theme';

export const Container = styled.div`
  margin: 20px auto;
  padding: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
    padding: 10px 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: ${breakpoints.desktop};
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Header = styled.div`
  max-width: 400px;
  margin: 20px 0;

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 500px;
    margin: 0;
  }
`;

export const Title = styled.h2`
  color: ${primaryTextColor};
`;

export const Image = styled.img`
  margin: 20px 0;
  max-width: 100%;
`;

export const About = styled.div`
  max-width: 700px;

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 500px;
    padding: 10px 0;
  }
`;

export const Description = styled.p`
  color: ${secondaryTextColor};
  padding: 20px 0;
  line-height: 1.4;
  font-size: 14px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const ReadMore = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${whiteTextColor};
`;

export const Details = styled.div``;

export const DetailsNote = styled.span`
  color: #cee;
  font-size: 14px;
  margin-top: 5px;
`;

export const Spans = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: ${breakpoints.desktop};
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Span = styled.span`
  margin: 10px 0;
  width: 250px;
  color: ${whiteTextColor};
`;

export const PTitle = styled.p``;

export const PInfo = styled.p`
  color: ${secondaryTextColor};
`;

export const Screenshot = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const ScreenshotImg = styled.img`
  max-width: 100%;
  margin: 0 20px 30px 0;
`;
