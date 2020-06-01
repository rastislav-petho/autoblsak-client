import React, { useContext, useState } from 'react';
import { Context } from './../context/context';
import { FavoritesItem } from './index';

export const Favorites = () => {
    const { state } = useContext(Context);
    const [collapse, setCollapse] = useState(true);
    return(
        <div className="favorites-box" style={collapse ? { right: 0 } : { right: '-230px' }}>
            <button onClick={() => setCollapse(!collapse)} ><i aria-hidden className="far fa-star"></i></button>
            {collapse && <h3>Obľúbené</h3>}
            {state.favoriteAds.map((favorite) => <FavoritesItem ad={favorite} key={favorite.id} />)}
            
        </div>
    )
}