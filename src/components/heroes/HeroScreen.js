import React from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    const hero = getHeroesById(heroId);

    if ( !hero ){
        return <Redirect to="/" />
    }

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h1 className='mt-5'>{hero.superhero}</h1>  
            <hr />  

            <div className='card text-white bg-dark mb-3' style={ { textAlign: "center", minWidth:300, width:"90%", alignSelf: "center" } }>
                <img src={`../assets/heroes/${hero.id}.jpg`} style={ { width:200, margin:20, borderRadius:15, alignSelf: "center" } } className='card-img-top' alt="..." />
                
                <div className="card-body">
                    <h5 className="card-title">{ hero.superhero }</h5>
                    <p className="card-text">{ hero.alter_ego }</p>
                </div>

                <div className="card-body">
                    <p className="card-text">Characters { hero.characters }</p>
                    <p className="card-text">First appearance { hero.first_appearance }</p>
                    <p className="card-text">By { hero.publisher }</p>
                </div>
            
                <div className="card-body">

                
                <button className='btn btn-danger' onClick={ handleBack }>Back</button>
                
                

            </div>
        </div>
        </div>
    )
}
