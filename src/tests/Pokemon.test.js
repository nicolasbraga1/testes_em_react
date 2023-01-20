import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pokedex } from '../pages';
import { Pokemon } from '../components';
import data from '../data';
import { readFavoritePokemonIds } from '../services/pokedexService';
import renderWithRouter from '../renderWithRouter';

const pokemock = {
  id: 151,
  name: 'Mew',
  type: 'Psychic',
  averageWeight: {
    value: '4.0',
    measurementUnit: 'kg',
  },
  image: 'https://archives.bulbagarden.net/media/upload/4/43/Spr_5b_151.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Faraway Island',
      map: 'https://archives.bulbagarden.net/media/upload/e/e4/Hoenn_Faraway_Island_Map.png',
    },
  ],
  summary: 'Apparently, it appears only to those people who are pure of heart and have a strong desire to see it.',
};

describe('Testando os elementos do card', () => {
  beforeEach(() => {
    renderWithRouter(<Pokemon
      pokemon={ pokemock }
      isPokemonFavoriteById={ false }
    />);
  });
  it('Teste se o nome do pokémon é exibido na tela', () => {
    const name = screen.getByText('Mew');
    expect(name).toBeInTheDocument();
  });

  it('Teste se o tipo do pokémon é exibido na tela', () => {
    const type = screen.getByText('Psychic');
    expect(type).toBeInTheDocument();
  });

  it('Teste se o peso do pokémon é exibido na tela corretamente', () => {
    const weight = screen.getByText('Average weight: 4.0 kg');
    expect(weight).toBeInTheDocument();
  });

  it('Teste se a imagem do pokémon é exibido na tela', () => {
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://archives.bulbagarden.net/media/upload/4/43/Spr_5b_151.png');
    expect(img.alt).toBe('Mew sprite');
    expect(img).toBeInTheDocument();
  });
});

describe('Testando os links', () => {
  it('Teste se o card do pokémon tem o link de detalhes', () => {
    renderWithRouter(<Pokedex
      pokemonList={ data }
      isPokemonFavoriteById={ readFavoritePokemonIds }
    />);
    const link = screen.getByRole('link', { name: /More details/i });
    expect(link.href).toBe(`http://localhost/pokemon/${data[0].id}`);
  });

  it('Teste se é redirecionado para a página de detalhes', () => {
    const { history } = renderWithRouter(<Pokedex
      pokemonList={ data }
      isPokemonFavoriteById={ readFavoritePokemonIds }
    />);
    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);
    expect(history.location.pathname).toBe('/pokemon/25');
  });

  it('Teste se os pokémons favoritos tem uma estrela', () => {
    renderWithRouter(<Pokemon
      isFavorite
      pokemon={ pokemock }
    />);
    const star = screen.getAllByRole('img');
    const markedStar = star.find((stars) => stars.alt === 'Mew is marked as favorite');
    expect(markedStar.src).toBe('http://localhost/star-icon.svg');
    expect(markedStar).toBeInTheDocument();
  });
});
