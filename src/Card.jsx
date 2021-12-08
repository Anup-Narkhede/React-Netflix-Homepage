import React from 'react';
import Images from './Images';
import Heading from './Heading';
import './App.css';
const Card=(props) =>{
    return(
        <>
        <div className="Cards">
            <div className="Card">
                <Images simgsrc={props.simgsrc}/>
                <div className="Card-info">
                    <p><em>{props.stitle}</em></p>
                    <Heading sname={props.sname} />
                    <a href={props.slink} target="_blank" rel="noopener noreferrer">
                        
                        <button className="buttons">Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>

    );

}

export default Card;