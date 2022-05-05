<template>
  <div>
    <pre>PROJECT: CONSULTOR</pre>
    <MonorepoButton class="poke-button" text="Quem é esse pokemon?" disabled />
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
import MonorepoButton from "@monorepo/monorepo-button";

export default {
  name: 'InitialButton',
  components: {
    MonorepoButton
  },
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
            this.choosedPokemon = result.data
          })
      ])
    }
  }
}
</script>

<style lang="scss">
  .poke-button {
    background: orange;
    border: 2px solid red;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    padding: 10px 20px;
  }
</style>
