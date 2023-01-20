import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 2', () => {
  it('Teste se a página contém as informações', () => {
    renderWithRouter(<About />);

    const pokedex = screen.getByRole('heading', { name: 'About Pokédex' });
    const img = screen.getByRole('img', { name: 'Pokédex' });
    expect(pokedex).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const paragraph1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    const paragraph2 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const img = screen.getByRole('img', { name: 'Pokédex' });
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
