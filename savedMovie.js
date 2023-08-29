//Light-Dark
const toggle2 = document.getElementById('toggleLight')
const HHH = document.querySelector('.mainInf')
const header = document.querySelector('.header')
const moviesList = document.querySelector('.moviesList')
const savedFilms = document.querySelector('.saved-Films')


toggle2.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        header.style.color = '#ddd';
        header.style.background = '#222';
        HHH.style.color = '#ddd';
        HHH.style.background = '#222';
        moviesList.style.color = '#ddd';
        moviesList.style.background = '#222';     
        savedFilms.style.backgroundColor = 'rgba(259, 259, 259, 0.7)';
        savedFilms.style.color = '#222';
        header.style.transition = '0.7s';
        HHH.style.transition = '0.7s';
        moviesList.style.transition = '0.7s';
        savedFilms.style.transition = '0.7s';


    }else{
        HHH.style.color = '#222';
        HHH.style.background = '#ddd';
        header.style.color = '#222';
        header.style.background = '#ddd';
        moviesList.style.color = '#222';
        moviesList.style.background = '#ddd'; 
        savedFilms.style.backgroundColor = 'rgba(20, 20, 20, 0.9)';
        savedFilms.style.color = '#ddd';
        header.style.transition = '0.7s';
        HHH.style.transition = '0.7s';
        moviesList.style.transition = '0.7s';
        savedFilms.style.transition = '0.7s';
    }
});

const savedMovies = Object.keys(window.localStorage).filter
(item => {
    return item.startsWith("")
})