<template>
    <div class="flex items-center justify-center">
        <div class="mx-auto bg-white rounded-3xl shadow-xl">
            <div class="grid rounded-3xl max-w-[360px] shadow-sm bg-slate-100 flex-col">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" width="360" height="200"
                    class="rounded-t-3xl justify-center h-80 grid object-cover" alt="movie.title" />

                <div class="group p-5 grid z-10">
                    <p class="font-bold md:text-2xl line-clamp-2 text-neutral">
                        {{ movie.name === undefined ? movie.title : movie.name }}
                    </p>
                    <span class="text-slate-400 pt-2 font-semibold">
                        {{
                            movie.release_date === undefined
                                ? dateFilm(movie.first_air_date)
                                : dateFilm(movie.release_date)
                        }}
                    </span>
                    <div class="h-20">
                        <span class="line-clamp-3 py-2 h-20 text-sm font-light leading-relaxed">
                            {{ movie.overview }}
                        </span>
                    </div>
                    <div class="grid-cols-2 flex group justify-between">
                        <div class="font-black flex flex-col">
                            <span class="text-2xl flex gap-x-1 items-center text-yellow-700">
                                {{ movie.vote_average.toFixed(1) }}/10
                            </span>
                        </div>
                        <div class="flex flex-col items-end">
                            <!-- <div class="h-7" /> -->
                            <div v-if="movies_donnnes.some((movies) => movies.id === movie.id)">
                                <span class="text-3xl font-bold gap-x-2 text-pink-500 cursor-pointer">
                                    <font-awesome-icon :icon="['fas', 'heart']" />
                                </span>
                            </div>
                            <div v-else>
                                <span class="text-3xl font-bold gap-x-2 text-slate-300 cursor-pointer" @click="ajoutHeart(movie)">
                                    <font-awesome-icon :icon="['fas', 'heart']" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '~/stores/movies_stores';
import { storeToRefs } from "pinia";
const movieStores = useStore();
const { movies_donnnes } = storeToRefs(movieStores);

const { movie } = defineProps(["movie"]);

const dateFilm = (date) => {
    return new Date(date).getFullYear();
};

const ajoutHeart = (film) => {
    movieStores.addMovies({
        id: film.id,
        name: film.name === undefined ? film.title : film.name,
        note: film.vote_average,
        date: film.release_date === undefined
            ? dateFilm(film.first_air_date)
            : dateFilm(film.release_date),
        image: film.poster_path,
        description: film.overview
    });
};
</script>
