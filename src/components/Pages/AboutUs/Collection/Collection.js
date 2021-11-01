import React from 'react';
import './Collection.css';

const Collection = ({collection}) => {

    const {img, description ,title} = collection;

    return (
        <div>
             <div className="col m-2 p-3">
    <div className="card collection h-100">
      <img src={img} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Collection;