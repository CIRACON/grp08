
import React, { useState, useEffect } from 'react';
import './Films.css';
import Film from './Film.js'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Films() {
    const [films, setFilms] = useState([]);
    const [selected, setSelected] = useState(null);
    const url = `https://swapi.dev/api/films/`;
    // const url = "http://localhost:27017/films";

    async function fetchFilms() {
        let films = await fetch(url)
            .then(res => res.json())
            .then(res => res.results);
        console.log(films);
        setFilms(films);
    }


    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <>
            <h1>Star Wars Films</h1>
            {films.map((film, key) => <Link key={key} to={`${key + 1}`}>{film.title}</Link>)}
            <Routes>
                {films.map((film, key) => <Route key={key} path={`${key + 1}`} element={<Film film={film} />} />)}
            </Routes>
        </>
    );
}