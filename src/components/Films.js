
import React, { useState, useEffect } from 'react';
import './Films.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Film = function (props) {
    return (
        <>
            <h2>{props.film.title}</h2>
            <div className='filmInfo'>
                <span>Director: {props.film.director}</span>
                <span>Release Date: {props.film.release_date}</span>
            </div>
        </>
    )
}

export default function Films() {
    const [films, setFilms] = useState([]);
    const [selected, setSelected] = useState(null);
    const url = `https://swapi.dev/api/films/`;

    async function fetchFilms() {
        let films = await fetch(url)
            .then(res => res.json())
            .then(res => res.results);
        setFilms(films);
    }


    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <>
            <h1>Star Wars Films</h1>
            {films.map((film, key) => <Link key={key} to='1'>{film.title}</Link>)}
            <Routes>
                {films.map((film, key) => <Route key={key} path='1' element={<Film film={film} />} />)}
            </Routes>
        </>
    );
}