
import React, { useState, useEffect } from 'react';
import './Films.css';

const Film = function (props) {
    return (
        <>
            <h2>{props.selected.title}</h2>
            <div className='filmInfo'>
                <span>Director: {props.selected.director}</span>
                <span>Release Date: {props.selected.release_date}</span>
            </div>
        </>
    )
}

const ConditionalFilm = function (props) {
    if (props.selected === null) {
        return <></>;
    }
    else {
        return <Film selected={props.selected} />;
    }
}

export function Films() {
    const [films, setFilms] = useState([]);
    const [selected, setSelected] = useState(null);
    const url = `https://swapi.dev/api/films/`;

    async function fetchFilms() {
        let films = await fetch(url)
            .then(res => res.json())
            .then(res => res.results);
        setFilms(films);
        //console.log(films[0])
    }

    const isSelected = function (film) {
        return (selected != null && selected === film);
    }

    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <>
            <h1>Star Wars Films</h1>
            <ul>
                {films.map((film, key) => <li key={key}
                    onClick={() => setSelected(film)}
                    className={isSelected(film) ? 'selected' : ''}>{JSON.stringify(film.title)}</li>)}
            </ul>
            {/* <pre>{JSON.stringify(films[0])}</pre> */}
            <br />
            <ConditionalFilm selected={selected} />
        </>
    );
}