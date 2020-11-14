import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-social mb-2">
          <a href="https://www.facebook.com/groups/autoblsakinzercia/">
            <img src="/img/facebook.png" />
          </a>
          <a href="https://www.instagram.com/autoblsak.sk/">
            <img src="/img/instagram.png" />
          </a>
        </div>
        <div className="footer-links mb-2">
          <Link href="/">
            <a>Domov</a>
          </Link>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
          <Link href="/page/ochrana-osobnych-udajov">
            <a>Ochrana osobných údajov</a>
          </Link>
          <Link href="/page/odstupenie-od-zmluvy">
            <a>Odstúpenie od zmluvy</a>
          </Link>
          <Link href="/page/obchodne-podmienky">
            <a>Podmienky poskytovania služieb</a>
          </Link>
        </div>
        <div className="footer-origin">© {currentYear} autoblsak.sk</div>
      </div>
    </div>
  );
};
