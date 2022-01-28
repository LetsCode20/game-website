import React, { ReactElement } from 'react';
import * as Ai from 'react-icons/ai';
import * as Go from 'react-icons/go';

import { Game } from '../../types/types';
import {
  Description,
  Details,
  Genre,
  Image,
  StyledLink,
  Title,
} from './GameCard.style';
import { BROWSER, WINDOWS } from '../../constants/constants';

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre, platform } = content;

  const icons = platform.split(',').map((p) => {
    let icon = null;
    switch (p.trim()) {
      case BROWSER:
        icon = <Go.GoBrowser key={`${id}-browser`} />;
        break;
      case WINDOWS:
        icon = <Ai.AiFillWindows key={`${id}-windows`} />;
        break;

      default:
        break;
    }
    return icon;
  });

  const link = `/game/${id}`;

  return (
    <StyledLink to={link}>
      <Image src={thumbnail} alt={`${title} logo`} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        {icons}
      </Details>
    </StyledLink>
  );
};

export default GameCard;
