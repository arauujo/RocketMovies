import { Container, Profile } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>Wesley Araujo</strong>
          <a>sair</a>
        </div>

        <Link to="/profile">
          <img src="https://github.com/arauujo.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}
