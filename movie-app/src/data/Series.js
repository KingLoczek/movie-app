import { mindhunter_cast } from './Mindhunter/mindhunter_cast';
import { mindhunter_curiosities } from './Mindhunter/mindhunter_curiosities';
import { mindhunter_opinions } from './Mindhunter/mindhunter_opinions';
import { v4 as uuidv4 } from 'uuid';
import Mindhunter from 'views/Mindhunter';
import Sherlock from '../views/Sherlock';
import Breakingbad from '../views/Breakingbad';
import { sherlock_cast } from './Sherlock/sherlock_cast';
import { sherlock_curiosities } from './Sherlock/sherlock_curiosities';
import { sherlock_opinions } from './Sherlock/sherlock_opinions';
import { breakingbadCast } from './Breakingbad/breakingbad_cast';
import { breakingbadCuriosities } from './Breakingbad/breakingbad_curiosities';
import { breakingbadOpinions } from './Breakingbad/breakingbad_opinions';

const Series = [
  {
    id: uuidv4(),
    pathname: '/mindhunter',
    data: {
      Component: Mindhunter,
      cast: mindhunter_cast,
      curiosities: mindhunter_curiosities,
      opinions: mindhunter_opinions,
    },
  },
  {
    id: uuidv4(),
    pathname: '/sherlock',
    data: {
      Component: Sherlock,
      cast: sherlock_cast,
      curiosities: sherlock_curiosities,
      opinions: sherlock_opinions,
    },
  },
  {
    id: uuidv4(),
    pathname: '/breakingbad',
    data: {
      Component: Breakingbad,
      cast: breakingbadCast,
      curiosities: breakingbadCuriosities,
      opinions: breakingbadOpinions,
    },
  },
];
export default Series;
