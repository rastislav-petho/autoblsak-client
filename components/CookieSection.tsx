import Link from "next/link";
import React, { FC } from "react";

type CookiesSectionProps = {
  handleCookie: React.Dispatch<React.SetStateAction<string>>;
};

export const CookiesSection: FC<CookiesSectionProps> = (props) => {
  const { handleCookie } = props;
  return (
    <div className="cookies-panel">
      <p>
        Používame súbory cookie, aby sme pre Vás zabezpečili ten najlepší
        zážitok z našich webových stránok. Naše súbory cookie môžete prijať
        alebo odmietnuť kliknutím na tlačidlá nižšie. Predvolená možnosť "bez
        súhlasu" sa uplatňuje v prípade, že sa nevyberie žiadna voľba a
        odmietnutie neobmedzí vašu používateľskú skúsenosť. Ak sa chcete
        dozvedieť viac o našich pravidlách používania súborov cookie, kliknite
        na tlačidlo „Viac informácií“ nižšie.
      </p>
      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleCookie("false")}
        >
          Odmietnuť
        </button>
        <button
          className="btn btn-sm btn-success ml-2"
          onClick={() => handleCookie("true")}
        >
          Prijať
        </button>
        <Link href="/page/privacy-policy">
          <button className="btn btn-sm btn-warning ml-2">
            Viac Informácií
          </button>
        </Link>
      </div>
    </div>
  );
};
