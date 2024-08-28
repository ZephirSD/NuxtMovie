<template>
    <div>
        <div class="navbar bg-secondary sticky top-0 z-20">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NuxtLink to="/">Accueil</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/coup-coeur">Coups de Coeurs</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <p class="text-3xl">NuxtMovie</p>
            </div>
        </div>
        <section v-if="movies_donnnes.length < 1" class="w-full h-fit flex justify-center items-center">
            <span class="text-2xl">Aucun Coups de Coeurs enregisté</span>
        </section>
        <section v-else class="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6 px-5">
            <div v-for="movie in movies_donnnes" :key="movie.id">
                <CarteFilmStore :movie="movie"/>
            </div>
        </section>

    </div>
</template>

<script setup>
import { useStore } from '~/stores/movies_stores';
import { storeToRefs } from "pinia";
const movieStores = useStore();
const { movies_donnnes } = storeToRefs(movieStores);


</script>

<style></style>