import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pokedex } from '../pages';
import data from '../data';
import { readFavoritePokemonIds } from '../services/pokedexService';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 5', () => {
  beforeEach(() => {
    renderWithRouter(<Pokedex
      pokemonList={ data }
      isPokemonFavoriteById={ readFavoritePokemonIds }
    />);
  });
  const pokemonTestId = 'pokemon-name';

  it('Testa se contém o h2 com o texto correto', () => {
    const title = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(title).toBeInTheDocument();
  });

  it('Testa se é exibido um pokémon ao renderizar a página', () => {
    const namePokemon = screen.getByText('Pikachu');
    expect(namePokemon).toBeInTheDocument();
  });

  it('Testa se o botão de próximo funciona', () => {
    const next = screen.getByRole('button', { name: 'Próximo Pokémon' });
    userEvent.click(next);
    const pokeNext = screen.getByText('Charmander');
    expect(pokeNext).toBeInTheDocument();
  });

  it('Testa se é mostrado apenas um pokémon', () => {
    const currentPokemon = screen.getAllByTestId(pokemonTestId);
    expect(currentPokemon).toHaveLength(1);
  });

  it('Testa dos botões de filtro', async () => {
    const btn = screen.getByRole('button', { name: 'All' });
    expect(btn).toBeInTheDocument();

    const filterBTN = await screen.findAllByTestId('pokemon-type-button');
    expect(filterBTN).toHaveLength(7);

    filterBTN.forEach((pokeType) => {
      userEvent.click(pokeType);
      const pokeFilter = data.filter((poke) => poke.type === pokeType.textContent);
      const pokeName = screen.getByTestId(pokemonTestId);
      expect(pokeName).toHaveTextContent(pokeFilter[0].name);
      const next = screen.getByRole('button', { name: 'Próximo Pokémon' });
      pokeFilter.forEach((pokemon, i) => {
        userEvent.click(next);
        if (i + 1 === pokeFilter.length) {
          expect(pokeName).toHaveTextContent(pokeFilter[0].name);
        }
      });
    });
  });

  it('Testa o botão de resetar', () => {
    const reset = () => {
      data.forEach((dat, i) => {
        const prox = screen.getByRole('button', { name: /Próximo Pokémon/i });
        const pokeNome = screen.getByTestId(pokemonTestId);
        userEvent.click(prox);
        if (i + 1 === data.length) {
          expect(pokeNome).toHaveTextContent('Pikachu');
          return;
        } expect(pokeNome).toHaveTextContent(data[i + 1].name);
      });
    };
    const btn = screen.getByRole('button', { name: 'All' });
    expect(btn).toBeInTheDocument();
    const dragon = screen.getByRole('button', { name: /dragon/i });
    userEvent.click(dragon);
    userEvent.click(btn);
    reset();
  });
});
