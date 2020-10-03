import React from 'react';
import Link from 'next/link';

export const Stepper = (props) => {
  const { step, setStep } = props;
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">
            <a>
              <i aria-hidden className="fas fa-chevron-left"></i>
            </a>
          </Link>
        </li>
        {step === 'category' && (
          <>
            <li className="breadcrumb-item active">Kategória vozidla</li>
            <li className="breadcrumb-item novisite">Informácie o vozidle</li>
            <li className="breadcrumb-item novisite">Nahratie fotografií</li>
            <li className="breadcrumb-item novisite">Zverejnenie inzerátu</li>
          </>
        )}
        {step === 'additional-information' && (
          <>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep('category')}
            >
              Kategória vozidla
            </li>
            <li className="breadcrumb-item active">Informácie o vozidle</li>
            <li className="breadcrumb-item novisite">Nahratie fotografií</li>
            <li className="breadcrumb-item novisite">Zverejnenie inzerátu</li>
          </>
        )}
        {step === 'upload-photos' && (
          <>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep('category')}
            >
              Kategória vozidla
            </li>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep('additional-information')}
            >
              Informácie o vozidle
            </li>
            <li className="breadcrumb-item active">Nahratie fotografií</li>
            <li className="breadcrumb-item novisite">Zverejnenie inzerátu</li>
          </>
        )}
        {step === 'publication-ad' && (
          <>
            <li className="breadcrumb-item novisite">Kategória vozidla</li>
            <li className="breadcrumb-item novisite">Informácie o vozidle</li>
            <li className="breadcrumb-item novisite">Nahratie fotografií</li>
            <li className="breadcrumb-item active">Zverejnenie inzerátu</li>
          </>
        )}
      </ol>
    </nav>
  );
};
