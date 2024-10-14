import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Movie } from '../../components/Movie';
import { Container, Content, Button } from './styles.jsx';

export function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleAddMovie () {
    navigate('/new');
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(
        `/movie_notes?title=${search}`
      );
      setMovies(response.data);
    }
    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header onSearchChange={handleSearchChange} />

      <Content>
        <Section title="Meus filmes">
          <Button title="Adicionar filme" icon={FiPlus} onClick={handleAddMovie} />

          {movies.map(movie => (
            <Movie
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetails(movie.id)}
            />
          ))}
        </Section>
      </Content>
    </Container>
  );
}
