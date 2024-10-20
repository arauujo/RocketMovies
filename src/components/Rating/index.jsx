import { FiStar } from 'react-icons/fi';
import theme from '../../styles/theme';

export const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FiStar 
        key={i} 
        fill={i <= rating ? theme.COLORS.PINK : 'none'}
      />
    );
  }

  return <div className="ratings">{stars}</div>;
};
