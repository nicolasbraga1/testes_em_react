import React from 'react';
import { screen } from '@testing-library/react';
import { Pokedex } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 5', () => {
  it('Testa se contém o h2 com o texto correto', () => {
    renderWithRouter(<Pokedex />);

    const title = screen.getByRole('heading');
    expect(title).toHaveValue('Encountered Pokémon');
  });
});
