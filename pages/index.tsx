import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';
import MovieDetails from '../components/MovieDetails';
import SeatGrid from '../components/SeatGrid';
import ThemeToggle from '../components/ThemeToggle';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;

const IndexPage: React.FC = () => {
  // Estados do tema e dados do JSON
  const [theme, setTheme] = useState(lightTheme);
  const [selectedSeats, setSelectedSeats] = useState(0);

  // Dados do JSON (pode ser carregado de uma API no futuro)
  const movieData = {
    title: "A Forja",
    time: "16:40",
    description: "Um ano depois de encerrar o ensino médio, o jovem Isaías Wright não tem planos para o futuro...",
    releaseDate: "26 de setembro de 2024",
    director: "Alex Kendrick",
    price: 125.0,
    seats: [
      ["available", "available", "unavailable"],
      ["available", "available", "available"],
      ["Selected", "Selected", "unavailable"],
      ["available", "available", "unavailable"],
      ["available", "available", "available"],
      ["available", "available", "unavailable"],
      ["available", "available", "unavailable"],
      ["available", "available", "available"],
      ["available", "available", "unavailable"],
    ],
  };

  // Alternância de tema (Light <-> Dark)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  // Atualizar o estado dos assentos selecionados
  const handleSeatSelect = (count: number) => {
    setSelectedSeats(count);
  };

  // Lógica para finalizar a compra
  const handlePurchase = () => {
    const totalPrice = selectedSeats * movieData.price;
    alert(`Compra realizada com sucesso! Total: R$ ${totalPrice.toFixed(2)}`);
    if (selectedSeats === 0) {
      alert('Nenhum assento selecionado!');
      return;
    alert(`Compra realizada com sucesso! Total: R$ ${totalPrice.toFixed(2)}`);
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <ThemeToggle toggleTheme={toggleTheme} />
        <MovieDetails
          title={movieData.title}
          time={movieData.time}
          description={movieData.description}
          releaseDate={movieData.releaseDate}
          director={movieData.director}
        />
        <SeatGrid seats={movieData.seats} onSeatSelect={handleSeatSelect} />
        <Button onClick={handlePurchase}>
            Comprar (R$ {selectedSeats * movieData.price})
        </Button>

      </Container>
    </ThemeProvider>
  );
};

export default IndexPage;
