import React from 'react';
import { useApi } from './../../hooks/useApi';

export const DeactiveAccount = () => {
  const { deactiveAccount } = useApi();

  const onSubmit = () => {
    const alert = confirm('Naozaj si prajete zrušíť účet ?');

    if (alert) {
      deactiveAccount();
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <p>
          Po zrušení vášho účtu na inzercii wwww.autoblsak.sk budú odstránené
          všetky vaše inzeráty a osobné informácie, ktoré sme doposial
          uchovávali. Tento krok nebude možné vratiť späť.
        </p>
        <p>Naozaj si prajete zrušíť účet ?</p>

        <button className="button" onClick={onSubmit}>
          Zrušiť účet
        </button>
      </div>
    </div>
  );
};
