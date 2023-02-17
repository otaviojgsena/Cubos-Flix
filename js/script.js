let paginas = 0;

let endpointGeral = [];
let endpointVideo = [];
let endpointGeralVideo = [];
let endpointModal = [];
let idMovie1 = 0;
let idMovie2 = 0;
let idMovie3 = 0;
let idMovie4 = 0;
let idMovie5 = 0;
let idMovie6 = 0;

const botaoNext = document.querySelector('.btn-next');
const botaoBack = document.querySelector('.btn-prev');

const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');
const star6 = document.querySelector('#star6');


const movie1 = document.querySelector('#movie1');
const movieTitle1 = document.querySelector('#movie__title1');
const movieRating1 = document.querySelector('#movie__rating1');

const movie2 = document.querySelector('#movie2');
const movieTitle2 = document.querySelector('#movie__title2');
const movieRating2 = document.querySelector('#movie__rating2');

const movie3 = document.querySelector('#movie3');
const movieTitle3 = document.querySelector('#movie__title3');
const movieRating3 = document.querySelector('#movie__rating3');

const movie4 = document.querySelector('#movie4');
const movieTitle4 = document.querySelector('#movie__title4');
const movieRating4 = document.querySelector('#movie__rating4');

const movie5 = document.querySelector('#movie5');
const movieTitle5 = document.querySelector('#movie__title5');
const movieRating5 = document.querySelector('#movie__rating5');

const movie6 = document.querySelector('#movie6');
const movieTitle6 = document.querySelector('#movie__title6');
const movieRating6 = document.querySelector('#movie__rating6');

const backgroundImageVideo = document.querySelector('.highlight__video');
const tituloVideo = document.querySelector('.highlight__title');
const ratingVideo = document.querySelector('.highlight__rating');
const genresVideo = document.querySelector('.highlight__genres');
const dataVideo = document.querySelector('.highlight__launch');
const descriptionVideo = document.querySelector('.highlight__description');
const linkVideo = document.querySelector('.highlight__video-link');

const cards = document.querySelectorAll('.movie');

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalTitle = document.querySelector('.modal__title');
const modalImg = document.querySelector('.modal__img');
const modalDescription = document.querySelector('.modal__description');
const modalAverage = document.querySelector('.modal__average');
const modalGenres = document.querySelector('.modal__genres');

const input = document.querySelector('.input');

const root = document.querySelector(':root');
const btnTheme = document.querySelector('.btn-theme');
const headerLogo = document.querySelector('.header__container-logo img');

const configurandoModal = (card, index, endpoint) => {

    card.addEventListener('click', (event) => {

        event.stopPropagation();


        modal.classList.remove('hidden');
        modalTitle.textContent = endpoint.data.results[index].title;
        modalImg.src = `${endpoint.data.results[index].backdrop_path}`;
        modalDescription.textContent = endpoint.data.results[index].overview;
        modalAverage.textContent = endpoint.data.results[index].vote_average;
    })
    modalClose.addEventListener('click', (event) => {
        event.stopPropagation();
        modal.classList.add('hidden');
    })
}

const modeloPaginação = (index, endpoint) => {

    movie1.style.backgroundImage = `url('${endpoint.data.results[index].poster_path}')`;
    movieTitle1.textContent = endpoint.data.results[index].title;
    movieRating1.textContent = endpoint.data.results[index].vote_average;
    star1.src = './assets/estrela.svg';
    movieRating1.appendChild(star1);
    idMovie1 = endpoint.data.results[index].id;
    configurandoModal(movie1, index, endpoint);

    movie2.style.backgroundImage = `url('${endpoint.data.results[index + 1].poster_path}')`;
    movieTitle2.textContent = endpoint.data.results[index + 1].title;
    movieRating2.textContent = endpoint.data.results[index + 1].vote_average;
    star2.src = './assets/estrela.svg';
    movieRating2.appendChild(star2);
    idMovie2 = endpoint.data.results[index + 1].id;
    configurandoModal(movie2, index + 1, endpoint);

    movie3.style.backgroundImage = `url('${endpoint.data.results[index + 2].poster_path}')`;
    movieTitle3.textContent = endpoint.data.results[index + 2].title;
    movieRating3.textContent = endpoint.data.results[index + 2].vote_average;
    star3.src = './assets/estrela.svg';
    movieRating3.appendChild(star3);
    idMovie3 = endpoint.data.results[index + 2].id;
    configurandoModal(movie3, index + 2, endpoint);

    movie4.style.backgroundImage = `url('${endpoint.data.results[index + 3].poster_path}')`;
    movieTitle4.textContent = endpoint.data.results[index + 3].title;
    movieRating4.textContent = endpoint.data.results[index + 3].vote_average;
    star4.src = './assets/estrela.svg';
    movieRating4.appendChild(star4);
    idMovie4 = endpoint.data.results[index + 3].id;
    configurandoModal(movie4, index + 3, endpoint);

    movie5.style.backgroundImage = `url('${endpoint.data.results[index + 4].poster_path}')`;
    movieTitle5.textContent = endpoint.data.results[index + 4].title;
    movieRating5.textContent = endpoint.data.results[index + 4].vote_average;
    star5.src = './assets/estrela.svg';
    movieRating5.appendChild(star5);
    idMovie5 = endpoint.data.results[index + 4].id;
    configurandoModal(movie5, index + 4, endpoint);

    movie6.style.backgroundImage = `url('${endpoint.data.results[index + 5].poster_path}')`;
    movieTitle6.textContent = endpoint.data.results[index + 5].title;
    movieRating6.textContent = endpoint.data.results[index + 5].vote_average;
    star6.src = './assets/estrela.svg';
    movieRating6.appendChild(star6);
    idMovie6 = endpoint.data.results[index + 5].id;
    configurandoModal(movie6, index + 5, endpoint);
}

async function getEndpointGeral() {
    const response = await api.get(`/3/discover/movie?language=pt-BR&include_adult=false`);
    endpointGeral = response;
    modeloPaginação(0, endpointGeral);

    botaoNext.addEventListener('click', (event) => {
        event.stopPropagation();
        if (paginas < 2) {
            paginas++;
        }
        else {
            modeloPaginação(0, endpointGeral);
            paginas = 0;
        }

        if (paginas === 1) {
            modeloPaginação(6, endpointGeral);
        }
        if (paginas === 2) {
            modeloPaginação(12, endpointGeral);
        }

    })

    botaoBack.addEventListener('click', (event) => {
        event.stopPropagation();
        if (paginas > 0) {
            paginas--;
        }

        else {
            paginas = 2;
            modeloPaginação(12, endpointGeral);
        }

        if (paginas === 0) {
            modeloPaginação(0, endpointGeral);
        }

        if (paginas === 1) {
            modeloPaginação(6, endpointGeral);
        }
    })

}

async function getEndPointVideo() {
    const responseVideo = await api.get('/3/movie/436969/videos?language=pt-BR');
    endpointVideo = responseVideo;

    const responseGeral = await api.get('/3/movie/436969?language=pt-BR');
    endpointGeralVideo = responseGeral;

    let data = new Date(endpointGeralVideo.data.release_date);
    let dataFormatada = new Date(data).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });

    backgroundImageVideo.style.backgroundImage = `url('${endpointGeralVideo.data.backdrop_path}')`;
    tituloVideo.textContent = endpointGeralVideo.data.title;
    ratingVideo.textContent = endpointGeralVideo.data.vote_average.toFixed(1);
    genresVideo.textContent = `${endpointGeralVideo.data.genres[0].name},${endpointGeralVideo.data.genres[1].name},${endpointGeralVideo.data.genres[2].name}`;
    dataVideo.textContent = dataFormatada;
    descriptionVideo.textContent = endpointGeralVideo.data.overview;
    linkVideo.href = `https://www.youtube.com/watch?v=${endpointVideo.data.results[0].key}`;

}

const searchConfig = () => {
    input.addEventListener('keypress', (event) => {
        event.stopPropagation();
        if (event.which == 13) {

            if (input.value.length > 0) {

                async function getSearchResults() {
                    const response = await api.get(`https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${input.value}`);
                    const resultadoDaPesquisa = response;
                    modeloPaginação(0, resultadoDaPesquisa);

                    botaoNext.addEventListener('click', (event) => {
                        event.stopPropagation();

                        if (paginas < 2) {
                            paginas++;
                        }

                        else {
                            modeloPaginação(0, resultadoDaPesquisa);
                            paginas = 0;
                        }

                        if (paginas === 1) {
                            modeloPaginação(6, resultadoDaPesquisa);
                        }

                        if (paginas === 2) {
                            modeloPaginação(12, resultadoDaPesquisa);
                        }

                    })

                    botaoBack.addEventListener('click', (event) => {
                        event.stopPropagation();

                        if (paginas > 0) {
                            paginas--;
                        }

                        else {
                            paginas = 2;
                            modeloPaginação(12, resultadoDaPesquisa);
                        }

                        if (paginas === 0) {
                            modeloPaginação(0, resultadoDaPesquisa);
                        }

                        if (paginas === 1) {
                            modeloPaginação(6, resultadoDaPesquisa);
                        }

                    })

                    input.value = "";

                }
                getSearchResults();
            }
            else {
                getEndpointGeral()
            }
        }
    })
}

const applyCurrentTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (!currentTheme || currentTheme === 'light') {
        btnTheme.src = './assets/light-mode.svg';
        headerLogo.src = './assets/logo-dark.png';
        modalClose.src = './assets/close-dark.svg';
        botaoNext.src = './assets/arrow-right-dark.svg';
        botaoBack.src = './assets/arrow-left-dark.svg';

        root.style.setProperty('--background', '#fff');
        root.style.setProperty('--input-color', '#979797;');
        root.style.setProperty('--text-color', '#1b2028');
        root.style.setProperty('--bg-secondary', '#ededed');
        root.style.setProperty('--rating-color', '#f1c40f');
        root.style.setProperty('--bg-modal', '#ededed');

        return
    }
    btnTheme.src = './assets/dark-mode.svg';
    headerLogo.src = './assets/logo.svg';
    modalClose.src = './assets/close.svg';
    botaoNext.src = './assets/arrow-right-light.svg';
    botaoBack.src = './assets/arrow-left-light.svg';


    root.style.setProperty('--background', '#1B2028');
    root.style.setProperty('--input-color', '#665F5F');
    root.style.setProperty('--text-color', '#FFFFFF');
    root.style.setProperty('--bg-secondary', '#2D3440');
    root.style.setProperty('--rating-color', '#f1c40f');
    root.style.setProperty('--bg-modal', '#2D3440');


}
applyCurrentTheme();

btnTheme.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');

    if (!currentTheme || currentTheme === 'light') {

        localStorage.setItem('theme', 'dark');
        applyCurrentTheme();
        return;
    }
    localStorage.setItem('theme', 'light');
    applyCurrentTheme();
})


searchConfig();
getEndPointVideo();
getEndpointGeral();