import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Input } from '../Input';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Container, Profile, Logout } from './styles';

export function Header({ onSearchChange }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  const avatarUrl = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}`
  : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" onChange={onSearchChange} />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}>sair</Logout>
        </div>

        <img src={avatarUrl} alt={`Foto de ${user.name}`} />
      </Profile>
    </Container>
  );
}
