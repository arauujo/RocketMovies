import { Container, Form, Background } from './styles';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser} />

        <Input type="text" placeholder="E-mail" icon={FiMail} />

        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Cadastrar" />

        <Link to="/">
          <FiArrowLeft />
          <ButtonText isActive title="Voltar para o login" />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
