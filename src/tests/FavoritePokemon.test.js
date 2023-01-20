import { screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 3', () => {
  it('Teste se é exibido o texto caso não tenha favoritos', () => {
    renderWithRouter(<FavoritePokemon />);

    const noFavorites = screen.getByText('No favorite Pokémon found');
    expect(noFavorites).toBeInTheDocument();
  });

  it('Teste se apenas os pokémons favoritos são renderizados', () => {
    const pokemock = [
      {
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
      },
      {
        id: 23,
        name: 'Ekans',
        type: 'Poison',
        averageWeight: {
          value: '6.9',
          measurementUnit: 'kg',
        },
        image: 'https://archives.bulbagarden.net/media/upload/1/18/Spr_5b_023.png',
        moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)',
        foundAt: [
          {
            location: 'Goldenrod Game Corner',
            map: 'https://archives.bulbagarden.net/media/upload/e/ec/Johto_Goldenrod_City_Map.png',
          },
        ],
        summary: 'It can freely detach its jaw to swallow large prey whole. It can become too heavy to move, however.',
      },
    ];
    renderWithRouter(<FavoritePokemon pokemonList={ pokemock } />);

    const mew = screen.getByText('Mew');
    const ekans = screen.getByText('Ekans');
    expect(mew).toBeInTheDocument();
    expect(ekans).toBeInTheDocument();
  });
});
