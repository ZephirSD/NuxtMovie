<template>
    <div class="flex items-center justify-center">
        <div class="mx-auto bg-white rounded-3xl shadow-xl">
            <div class="grid rounded-3xl max-w-[360px] shadow-sm bg-slate-100 flex-col">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.image" width="360" height="200"
                    class="rounded-t-3xl justify-center h-80 grid object-cover" alt="movie.title" />

                <div class="group p-5 grid z-10">
                    <p class="font-bold md:text-2xl line-clamp-2 text-neutral">
                        {{ movie.name }}
                    </p>
                    <span class="text-slate-400 pt-2 font-semibold">
                        {{ dateFilm(movie.date) }}
                    </span>
                    <div class="h-20">
                        <span class="line-clamp-3 py-2 h-20 text-sm font-light leading-relaxed">
                            {{ movie.description }}
                        </span>
                    </div>
                    <div class="grid-cols-2 flex group justify-between">
                        <div class="font-black flex flex-col">
                            <span class="text-2xl flex gap-x-1 items-center text-yellow-700">
                                {{ movie.note.toFixed(1) }}/10
                            </span>
                        </div>
                        <div class="flex flex-col items-end">
                            <div>
                                <span class="text-3xl font-bold gap-x-2 text-slate-300 cursor-pointer" @click="supprimCoupCoeur(movie.id)">
                                    <font-awesome-icon :icon="['fas', 'trash']" />
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
const { movie } = defineProps(["movie"]);
import { storeToRefs } from "pinia";
const movieStores = useStore();

const dateFilm = (date) => {
    return new Date(date).getFullYear();
};

const supprimCoupCoeur = (id) => {
    movieStores.supprMovies(id);
};
</script>

<style>

</style>