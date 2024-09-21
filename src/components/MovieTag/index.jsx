import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';

export function MovieTag({ isNew = false, value = '', onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        size={value.length || 12}
        onChange={() => {}}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
