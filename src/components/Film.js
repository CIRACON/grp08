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

                {/* {props.films.planets.map((planet_url, key) => <Link key={key} to={'/planets/' + `${planet_url.split('planets/')[1]}`}>{`planet ${key + 1}`}</Link>)}
                <Routes>
                    {props.films.planets.map((planet_url, key) => <Route key={key} path={'/planets/' + `${planet_url.split('planets/')[1]}`} element={<Planet />} />)}
                </Routes> */}

            </div>
        </>
    )
}

export default Film;