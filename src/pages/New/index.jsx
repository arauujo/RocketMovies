import { Container, Form } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { MovieTag } from '../../components/MovieTag';
import { Button } from '../../components/Button';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              <ButtonText title="Voltar" isActive />
            </Link>
            <h1>Novo filme</h1>
          </header>

          <div>
            <Input type="text" placeholder="Título" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <MovieTag value="React" />
              <MovieTag isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div className="buttons">
            <Button className="secondary" title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
