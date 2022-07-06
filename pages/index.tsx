import { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props{
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
 
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={ 2 } justify="flex-start">
        {
          pokemons.map((pokemon) =>(
           <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

//Solo se ejecuta en build time y de lado del servidor, por eso el console log aparece solo en la consola de la terminal y no del navegador
export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("Esto solo aparece en consola de admin");
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage
