import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Input } from '../Input';
import { Container, Profile, Logout } from './styles';

export function Header({ onSearchChange }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" onChange={onSearchChange} />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}>sair</Logout>
        </div>

        <img src={user.avatar} alt={`Foto de ${user.name}`} />
      </Profile>
    </Container>
  );
}
