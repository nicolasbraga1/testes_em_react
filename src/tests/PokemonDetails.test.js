// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Pokemon } from '../components';
// import PokemonDetails from '../pages';
// import data from '../data';
// import { readFavoritePokemonIds } from '../services/pokedexService';
// import renderWithRouter from '../renderWithRouter';

// const pokemock = {
//   id: 151,
//   name: 'Mew',
//   type: 'Psychic',
//   averageWeight: {
//     value: '4.0',
//     measurementUnit: 'kg',
//   },
//   image: 'https://archives.bulbagarden.net/media/upload/4/43/Spr_5b_151.png',
//   moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)',
//   foundAt: [
//     {
//       location: 'Faraway Island',
//       map: 'https://archives.bulbagarden.net/media/upload/e/e4/Hoenn_Faraway_Island_Map.png',
//     },
//   ],
//   summary: 'Apparently, it appears only to those people who are pure of heart and have a strong desire to see it.',
// };

// describe('Requisito 7', () => {
//   beforeEach(() => {
//     renderWithRouter(<PokemonDetails
//       pokemonList={ data }
//       isPokemonFavoriteById={ false }
//     />);
//   });
//   it('Teste se a página tem um texto details', () => {
//     const text = screen.getByText(/Mew Details/i);
//     expect(text).toBeInTheDocument();
//   });
// });
