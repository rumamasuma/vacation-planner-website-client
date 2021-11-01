import React, {useState, useEffect} from 'react';
import WinterOffer from '../Home/WinterOffer/WinterOffer';

const Offer = () => {
    const [winterOffers , setWinterOffers] = useState([]);

useEffect(()=>{
    fetch('/winterOffer.json')
    .then(res => res.json())
    .then(data => setWinterOffers(data));
},[])

    return (
        <div className='container m-4 p-4'>
            <h3 className='text-success'>Winter Sun Vacations</h3>
            <p>This Winter, ditch the salt, ice and snow for something warmer, more relaxed and sunnier! Get your does of Vitamin D this Winter and say “see ya later” to the Winter weather!</p>
            <div className='row row-cols-1 row-cols-md-2 g-4 '>
           {
             winterOffers.map(winterOffer => <WinterOffer key ={winterOffers.id}
             winterOffer ={winterOffer}
             ></WinterOffer>)
         }
            </div>
        </div>
    );
};

export default Offer;