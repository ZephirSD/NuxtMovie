<template>
    <div>
        <!-- Navbar -->
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
            <div class="navbar-end">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto"
                        @change="fetchMovieRefresh" v-model="searchMovie" />
                </div>
            </div>
        </div>
        <!-- Liste de films -->
        <section v-if="loading == 'pending'" class="w-full flex justify-center items-center">
            <span class="loading loading-bars loading-lg"></span>
        </section>
        <section v-else-if="error" class="text-center my-4">
            <p>Erreur lors du chargement des films.</p>
        </section>
        <section v-else class="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6 px-5">
            <div v-for="movie in filterMovie" :key="movie.id">
                <CarteFilm :movie="movie"/>
            </div>
        </section>
    </div>
</template>

<script setup>
const searchMovie = ref('');
const config = useRuntimeConfig();
// const filterMovieRefresh = ref();
// const { data: movies, status: loading, error, refresh } = await useFetch(`https://api.themoviedb.org/3/search/multi?api_key=${config.public.keyMovie}&language=fr-FR&query=${searchMovie.value === '' ? 'a' : searchMovie.value}`);
const fetchMovies = async () => {
    return useFetch(`https://api.themoviedb.org/3/search/multi`, {
        params: {
            api_key: config.public.keyMovie,
            language: 'fr-FR',
            query: searchMovie.value === '' ? 'a' : searchMovie.value
        }
    });
};

const { data: movies, status: loading, error, refresh } = await fetchMovies();

const fetchMovieRefresh = async () => {
    await refresh({ query: searchMovie.value === '' ? 'a' : searchMovie.value });
};


const filterMovie = computed(() => {
    if (!movies.value?.results) {
        return [];
    }
    return movies.value.results.filter(movie =>
    movie.name === undefined ? movie.title.toLowerCase().includes(searchMovie.value.toLowerCase()): movie.name.toLowerCase().includes(searchMovie.value.toLowerCase())
);
});

watch(searchMovie, async () => {
    await fetchMovieRefresh();
});

// const fetchMovieRefresh = async () => {
//     await refresh();
// };



</script>
