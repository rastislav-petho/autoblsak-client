import React, { FC } from 'react';
import Link from 'next/link';
import { CategoryType } from 'helpers/types';
import { Check } from 'components/Icons';

type PublicationAdProps = {
  aid: number;
  category: CategoryType;
};

export const PublicationAd: FC<PublicationAdProps> = (props) => {
  const { aid, category } = props;

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="row publication">
          {category === 'personal' ||
          category === 'moto' ||
          category === 'commercial' ? (
            <div className="card text-center">
              <div className="card-header">
                <p>
                  Pre zverejnenie inzerátu pošlite SMS na číslo 8866 v tvare
                </p>
              </div>
              <div className="card-body">
                <h1>AUTOB {aid}</h1>
              </div>
              <div className="card-footer">
                <p className="card-text">
                  Inzerát môžete zobraziť v "Moje inzeráty".
                  <br /> Cena za službu na 1 mesiac (30 dní) je 2,90 €
                </p>
              </div>
            </div>
          ) : (
            <div className="card text-center">
              <div className="card-header">
                <p>Váš inzerát bol úspešne pridaný</p>
              </div>
              <div className="card-body">
                <h1>
                  <Check />
                </h1>
              </div>
              <div className="card-footer">
                <p className="card-text">
                  Inzerát môžete zobraziť alebo upraviť v "Moje inzeráty".
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="col-12 col-lg-6">
        <div className="row publication">
          <div className="card text-center">
            <div className="card-header">
              <p>Pre topovanie inzerátu pošlite SMS na číslo 8866 v tvare</p>
            </div>
            <div className="card-body">
              <h1>AUTOB TOP {aid}</h1>
            </div>
            <div className="card-footer">
              <p className="card-text">
                Topovanie inzerátu je platné 7 dní a po uplynutí tejto lehoty
                bude inzerát zobrazený v bežnom poradí. Cena za službu na týždeň
                (7 dní) je 2,00 €
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center mt-5">
        <Link href="/moje-inzeraty">
          <a className="a-button p-3">Prejsť na moje inzeráty</a>
        </Link>
      </div>
    </div>
  );
};
