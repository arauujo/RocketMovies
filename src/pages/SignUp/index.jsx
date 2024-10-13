import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('É necessário preencher todos os campos!');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível cadastrar!');
        }
      });
  }
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="E-mail"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          <FiArrowLeft />
          <ButtonText isActive title="Voltar para o login" />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
