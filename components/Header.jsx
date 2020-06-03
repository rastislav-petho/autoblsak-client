import React, { Fragment, useState, useContext } from 'react';
import { Context } from './../context/context';
import Link from 'next/link';

export const Header = () => {
    const [collapse, setCollapse] = useState(false);
    const { state, dispatch } = useContext(Context);
    const collapseFilter = state.config.toggleFilter;
    const collapseFavorites = state.config.toggleFavorites;
    return (
        <Fragment>

            <div className="menu">
                <span><Link href="/"><a><img src="/img/bazarik-1.png" alt="Logo" className="logo" /></a></Link></span>
                <span><a href="https://autoblsak.sk/magazin">Magazín</a></span>
                <span><Link href="/kontakt"><a>Kontakt</a></Link></span>
                <span><Link href="/onas"><a>O nás</a></Link></span>
                <span><Link href="/post-ad"><a className="user-add-ads"><i aria-hidden className="far fa-plus-square"></i> Pridať inzerát</a></Link></span>
                <span><Link href="/post-ad"><a className="user-add-ads"><i aria-hidden className="fas fa-car"></i> Moje inzeráty</a></Link></span>
                <span><Link href="/login"><a>Prohlásiť</a></Link></span>
            </div>

            <div className="toggle-menu">
                <span><Link href="/"><a><img src="/img/bazarik-1.png" alt="Logo" className="logo" /></a></Link></span>
                <i aria-hidden className="fas fa-search" onClick={() => dispatch({ type: 'TOGGLE_FILTER', toggle: !collapseFilter })}></i>
                <i aria-hidden className="far fa-star"  onClick={() => dispatch({ type: 'TOGGLE_FAVORITES', toggle: !collapseFavorites })}></i>
                <span><Link href="/post-ad"><a className="user-add-ads"><i aria-hidden className="fas fa-car"></i> </a></Link></span> 
                <span><Link href="/post-ad"><a className="user-add-ads"><i aria-hidden className="far fa-plus-square"></i> </a></Link></span>
                <i aria-hidden className="fas fa-bars" onClick={() => setCollapse(!collapse)}></i>
            </div>

            {collapse &&
                <div className="mobile-menu">
                    <span><a href="https://autoblsak.sk/magazin">Magazín</a></span>
                    <span><Link href="/kontakt"><a>Kontakt</a></Link></span>
                    <span><Link href="/onas"><a>O nás</a></Link></span>
                    <span><Link href="/post-ad"><a className="user-add-ads"><i aria-hidden className="far fa-plus-square"></i> Pridať inzerát</a></Link></span>
                    <span><Link href="/post-ad"><a className="user-add-ads"><i aria-hidden className="fas fa-car"></i> Moje inzeráty</a></Link></span>
                    <span><Link href="/login"><a>Prohlásiť</a></Link></span>
                </div>
            }
        </Fragment>
    )
}