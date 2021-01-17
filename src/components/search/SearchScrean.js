import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScrean = ({ history }) => {

    const location = useLocation();

    const { q = '' } =  queryString.parse( location.search );

    const initialForm = { searchText: q};

    const [ values, handleInputChange] = useForm( initialForm );

    const { searchText } = values;

    const heroesFiltered = useMemo( () => getHeroesByName( q ), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search your hero</h4>
                    <form onSubmit={ handleSearch }>
                        <input type="text" name="searchText" placeholder="Find your hero" className="form-control" value={ searchText } onChange={ handleInputChange } />
                        <button type="submit" className="btn btn-block m-1 btn-outline-primary">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    { (q === '') && <h1>Search a hero</h1>}

                    { (q !== '' && heroesFiltered.length === 0) && <h1>No results</h1>}


                    {

                        heroesFiltered.map( hero =>
                            <HeroCard key={hero.id} {...hero}/>
                        )
                    }

                </div>
            </div>

            
        </div>
    )
}
