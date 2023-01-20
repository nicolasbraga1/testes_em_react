import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 4', () => {
  it('Testa se contém o h2', () => {
    renderWithRouter(<NotFound />);

    const title = screen.getByRole('heading', { name: 'Page requested not found' });
    expect(title).toBeInTheDocument();
  });

  it('Testa se contém a imagem correta', () => {
    renderWithRouter(<NotFound />);

    const img = screen.getByRole('img', { name: 'Pikachu crying because the page requested was not found' });
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
