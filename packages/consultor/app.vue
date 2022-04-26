<template>
  <div>
    <pre>PROJECT: CONSULTOR</pre>
    <h1 v-if="pokedexTotals > 0">A sua pokedex tem atualmente {{ pokedexTotals }} pokemons.</h1>
    <h3>Seu pokemon principal é: {{ choosedPokemon.name }}</h3>
    <h4>Lista dos 20 primeios de sua pokedex:</h4>
    <ul v-if="pokemons">
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axiosPublic from "@monorepo/axios-config";

export default {
  data: () => ({
    choosedPokemon: {},
    pokedexTotals: 0,
    pokemons: null,
  }),
  async mounted() {
    await this.getPokemons()
  },
  methods: {
    async getPokemons() {
      await Promise.all([
        axiosPublic.get('https://pokeapi.co/api/v2/pokemon')
          .then((result) => {
            this.pokedexTotals = result.data.count
            this.pokemons = result.data.results
          }),
        axiosPublic.get('https://pokeapi.co/api/v2/pokemon/pikachu')
          .then((result) => {
            console.log(result.data)
            this.choosedPokemon = result.data
          })
      ])
    }
  }
}
</script>
