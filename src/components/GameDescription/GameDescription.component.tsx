import React, { ReactElement, useState } from 'react';
import { GameDesc } from '../../types/types';
import {
  About,
  Header,
  Description,
  Details,
  Title,
  Span,
  PTitle,
  PInfo,
  Container,
  Banner,
  DetailsNote,
  Spans,
  ScreenshotImg,
  Screenshot,
  Image,
  ReadMore,
} from './GameDescription.style';

interface Props {
  content: GameDesc;
}

const GameDescription = ({ content }: Props): ReactElement => {
  const {
    title,
    thumbnail,
    description,
    developer,
    publisher,
    release_date,
    genre,
    platform,
    screenshots,
  } = content;

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Container>
      <Banner>
        <Header>
          <Title>{title}</Title>
          <Image src={thumbnail} alt='' />
        </Header>

        {/* About */}
        <About>
          <Title>About {title}</Title>
          <Description>
            {isReadMore ? description.slice(0, 400) : description}
            <ReadMore onClick={toggleReadMore}>
              {isReadMore ? '... Read More' : 'Show less'}
            </ReadMore>
          </Description>
        </About>
      </Banner>

      {/* Additional Information */}
      <Details>
        <Title>Additional Information</Title>
        <DetailsNote>
          Please note this free-to-play game may or may not offer optional
          in-game purchases.
        </DetailsNote>

        <Spans>
          <Span>
            <PTitle>Title</PTitle>
            <PInfo>{title}</PInfo>
          </Span>
          <Span>
            <PTitle>Developer</PTitle>
            <PInfo>{developer}</PInfo>
          </Span>
          <Span>
            <PTitle>Publisher</PTitle>
            <PInfo>{publisher}</PInfo>
          </Span>
          <Span>
            <PTitle>Release Date</PTitle>
            <PInfo>{release_date}</PInfo>
          </Span>
          <Span>
            <PTitle>Genre</PTitle>
            <PInfo>{genre}</PInfo>
          </Span>
          <Span>
            <PTitle>Platform</PTitle>
            <PInfo>{platform}</PInfo>
          </Span>
        </Spans>
      </Details>

      {/* Screenshot */}
      {screenshots.length ? (
        <div>
          <Title>{title} Screenshots</Title>
          <Screenshot>
            {screenshots.map((screen) => (
              <ScreenshotImg
                key={screen.id}
                src={screen.image}
                alt={`${screen.id}-screen`}
              />
            ))}
          </Screenshot>
        </div>
      ) : null}
    </Container>
  );
};

export default GameDescription;
