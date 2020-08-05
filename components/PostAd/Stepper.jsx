import React from "react";

export const Stepper = props => {
  const { step, setStep } = props;
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {step === "category" && (
          <>
            <li className="breadcrumb-item active">Kategória vozidla</li>
            <li className="breadcrumb-item novisite">Informácie o vozidle</li>
            <li className="breadcrumb-item novisite">Nahratie fotografií</li>
            <li className="breadcrumb-item novisite">Zverejnenie inzerátu</li>
          </>
        )}
        {step === "additional-information" && (
          <>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep("category")}
            >
              Kategória vozidla
            </li>
            <li className="breadcrumb-item active">Informácie o vozidle</li>
            <li className="breadcrumb-item novisite">Nahratie fotografií</li>
            <li className="breadcrumb-item novisite">Zverejnenie inzerátu</li>
          </>
        )}
        {step === "upload-photos" && (
          <>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep("category")}
            >
              Kategória vozidla
            </li>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep("additional-information")}
            >
              Informácie o vozidle
            </li>
            <li className="breadcrumb-item active">Nahratie fotografií</li>
            <li className="breadcrumb-item novisite">Zverejnenie inzerátu</li>
          </>
        )}
        {step === "publication-ad" && (
          <>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep("category")}
            >
              Kategória vozidla
            </li>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep("additional-information")}
            >
              Informácie o vozidle
            </li>
            <li
              className="breadcrumb-item cursor-pointer"
              onClick={() => setStep("additional-information")}
            >
              Nahratie fotografií
            </li>
            <li className="breadcrumb-item active">Zverejnenie inzerátu</li>
          </>
        )}
      </ol>
    </nav>
  );
};
