import React from 'react';

const MovieDetails: React.FC<{
  title: string;
  time: string;
  description: string;
  releaseDate: string;
  director: string;
}> = ({ title, time, description, releaseDate, director }) => (
  <div>
    <h1>{title}</h1>
    <p>{time}</p>
    <p>{description}</p>
    <p>Data de lançamento: {releaseDate}</p>
    <p>Direção: {director}</p>
  </div>
);

export default MovieDetails;
