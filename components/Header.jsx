import React from 'react';
import Link from 'next/link';

export const Header = () => {
    return (
        <div className="menu">
            <span><Link href="/"><a><img src="/img/bazarik-1.png" alt="Logo" className="logo" /></a></Link></span>
            <span><a href="https://autoblsak.sk/magazin">Magazín</a></span>
            <span><Link href="/kontakt"><a>Kontakt</a></Link></span>
            <span><Link href="/onas"><a>O nás</a></Link></span>
            <span><Link href="/post-ad"><a className="user-add-ads"><i aria-hidden className="far fa-plus-square"></i> Pridať inzerát</a></Link></span>
            <span><Link href="/post-ad"><a className="user-add-ads"><i aria-hidden className="fas fa-car"></i> Moje inzeráty</a></Link></span>
            <span><Link href="/login"><a>Prohlásiť</a></Link></span>
        </div>
    )
}