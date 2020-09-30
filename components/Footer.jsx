import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="footer-links">
        <Link href="/">
          <a>Domov</a>
        </Link>
        <Link href="/">
          <a>Ochrana osobných údajov</a>
        </Link>
        <Link href="/">
          <a>Odstúpenie od zmluvy</a>
        </Link>
        <Link href="/">
          <a>Podmienky poskytovania služieb</a>
        </Link>
        <Link href="/kontakt">
          <a>Kontakt</a>
        </Link>
      </div>
      <p className="m-0">© 2020 autoblsak.sk</p>
      <p className="m-0">
        created by
        <a href="mailto:rastislav.petho@gmail.com">rastislav.petho@gmail.com</a>
      </p>
    </div>
  );
};
