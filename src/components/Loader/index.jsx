import { useEffect } from 'react';
import { Container } from './styles';

export function Loader() {
  useEffect(() => {
    const body = document.body;
    body.classList.add('flex-center');

    return () => {
      body.classList.remove('flex-center');
    };
  }, []);

  return (
    <Container>
      <div className="loader-circle" />
      <span>Carregando...</span>
    </Container>
  );
}
