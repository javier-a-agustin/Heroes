import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ 
    id, 
    superhero,
    alter_ego,
    characters
}) => {
    return (

        <div className='card text-white bg-dark mb-3' style={ { textAlign: "center", minWidth:300 } }>
            <img src={`./assets/heroes/${id}.jpg`} style={ { width:200, margin:20, borderRadius:15 } } className='card-img-top' alt="..." />
            
            <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>
            </div>

            <div className="card-body">
                <p className="card-text">Characters { characters }</p>

            </div>
          
            <div className="card-body">

            <Link to={`./hero/${ id }`}>
            <button className='btn btn-primary'>More...</button>
            </Link>

            </div>
        </div>
   
    )
}
