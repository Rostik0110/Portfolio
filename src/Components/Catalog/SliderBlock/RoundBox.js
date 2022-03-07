import React from 'react';
import './RoundBox.css'
import motoImg1 from './Images/motoImg1.jpg';
import motoImg2 from './Images/motoImg2.jpg';
import motoImg3 from './Images/motoImg3.jpg';
import motoImg4 from './Images/motoImg4.jpg';
import motoImg5 from './Images/motoImg5.jpg';
import motoImg6 from './Images/motoImg6.jpg';
import motoImg7 from './Images/motoImg7.jpg';

const RoundBox = () =>{
    let rounds =[
        { id: 1, round: motoImg1},
        { id: 2, round: motoImg2},
        { id: 3, round: motoImg3},
        { id: 4, round: motoImg4},
        { id: 5, round: motoImg5},
        { id: 6, round: motoImg6},
        { id: 7, round: motoImg7}

    ];

    return(
        
            rounds.map(( item , index) => {
                return(
            <div className="sliderItem2">
                <img key={index} className="round" src={item.round} />
            </div>)
            }
        
    ))
}

export default RoundBox;