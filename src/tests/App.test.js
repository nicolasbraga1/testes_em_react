import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 1', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: 'Home' });
    const about = screen.getByRole('link', { name: 'About' });
    const favorite = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
  });

  it('Teste se é direcionado para Home ao clicar', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: 'Home' });
    userEvent.click(home);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Teste se é direcionado para About ao clicar', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: 'About' });
    userEvent.click(about);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('Teste se é direcionado para Pokémons favoritados ao clicar', () => {
    const { history } = renderWithRouter(<App />);

    const favorite = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(favorite);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it('Teste se é direcionado para Not Found quando ao entrar em url errada', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/bla');
    });
    const error = screen.getByRole('heading', { name: 'Page requested not found' });
    expect(error).toBeInTheDocument();
  });
});
