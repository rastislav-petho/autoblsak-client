import { PostAdSteps } from 'helpers/types';
import React, { FC } from 'react';
import { BackButton } from '../BackButton';

type StepperProps = {
  step: PostAdSteps;
  handleStepperStep: (value: PostAdSteps) => void;
};

export const Stepper: FC<StepperProps> = (props) => {
  const { step, handleStepperStep } = props;
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <BackButton>
            <a className="breadcrumb-item">
              <i aria-hidden className="fas fa-chevron-left"></i>
            </a>
          </BackButton>
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
              onClick={() => handleStepperStep('category')}
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
              onClick={() => handleStepperStep('category')}
            >
              Kategória vozidla
            </li>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => handleStepperStep('additional-information')}
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
