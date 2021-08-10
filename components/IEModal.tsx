import { FC } from "react";

export const IEModal: FC = () => {

    return (
        <div className="ie-modal">
            <h3>Prepáčte, Váš prehliadač je zastaralí.</h3>
            <p className="mt-4">Pre korektné zobrazenie stránky použite prosím jeden z moderných prehliadačov. Ďakujeme</p>
            <span className="mt-4">
                <a target="_blank" href="https://www.google.com/chrome/">Stiahnúť Chrome</a>
                <a target="_blank" href="https://www.opera.com/">Stiahnúť Opera</a>
                <a target="_blank" href="https://www.microsoft.com/en-us/edge">Stiahnúť Edge</a>
            </span>
        </div>
    )
}