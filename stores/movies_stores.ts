import { defineStore } from "pinia";

interface Movies {
    id: number;
    name: string;
    image: string;
    note: number;
    date: string;
    description: string;
}

export const useStore = defineStore("movies", {
    state: () => {
      return {
        movies_donnnes: [] as Movies[],
      };
    },
    actions: {
      addMovies(movies: Movies){
        this.movies_donnnes.push(movies);
      },
      supprMovies(id: number){
        const index = this.movies_donnnes.findIndex(movie => movie.id === id);
        if(index !== -1){
          this.movies_donnnes.splice(index, 1);
        }
      },
    },
  });
    