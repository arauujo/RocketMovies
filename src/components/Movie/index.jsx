import { Container } from './styles';
import { FiStar } from 'react-icons/fi';
import { Tag } from '../Tag';

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="ratings">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>
      <p>{data.presentation}</p>

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
