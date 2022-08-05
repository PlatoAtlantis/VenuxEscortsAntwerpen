import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faWhatsapp
} from "@fortawesome/fontawesome-free-brands"

const Tarieven = () => {

  return (
    <>

      <sections className="">
        <div className="">
      <div className="columns has-text-centered">

        <div className="column">
          <div className="has-background-black padding1">

          <div className="container content">
            <h3 className="title has-text-white">Tarieven</h3>
            <p className="is-italic has-text-white">
              Hieronver vind u de lijst met onze tarieven. Als u verder nog vragen heeft verwijzen wij u door naar onze Veelgestelde Vragen pagina. In geen enkele gevallen zijn onze prijzen onderhandelbaar. Vragen hierom resulteert in een plaatsing op onzwe zwarte lijst.
            </p>
          </div>

          <div className="columns">
            <div className="column">
          <h4 className="has-text-weight-bold has-text-white">2 uur</h4>
          <br/>
          <p className="marginbottom2 has-text-white">
            300
          </p>
            </div>


            <div className="column">
          <h4 className="has-text-weight-bold has-text-white">Extra uur</h4>
          <br/>
          <p className="marginbottom2 has-text-white">
            100
          </p>
          </div>
        </div>

          <div className="columns">
            <div className="column">

            <h4 className="has-text-weight-bold has-text-white">10 uur overnachting</h4>
          <br/>
          <p className="marginbottom2 has-text-white">
            800
          </p>

            </div>

            <div className="column">

            <h4 className="has-text-weight-bold has-text-white">12 uur overnachting</h4>
          <br/>
          <p className="marginbottom2 has-text-white">
            900
          </p>
          </div>
          </div>


          <div className="columns">
            <div className="column">

            <h4 className="has-text-weight-bold has-text-white">Trio</h4>
          <br/>
          <p className="has-text-white">
            Bij trios zijn er geen extra kosten. U betaalt de normale prijs per dame.
          </p>
        </div>
            <div className="column">
              <h4 className="has-text-weight-bold has-text-white">Kinky extra per uur</h4>
              <br/>
              <p className="has-text-white">
                50
              </p>
            </div>
          </div>
            <div className="columns">
              <div className="column">

                <h4 className="has-text-weight-bold has-text-white">An</h4>
                <br/>
                <p className=" has-text-white">
                  Bij trios zijn er geen extra kosten. U betaalt de normale prijs per dame.
                </p>
              </div>
              <div className="column">
                <h4 className="has-text-weight-bold has-text-white">Dm</h4>
                <br/>
                <p className=" has-text-white">
                  50
                </p>
              </div>
            </div>
        </div>
      </div>



        <div className="column has-text-white">
<div className="container padding1">
          <h3 className="title has-text-black">Betaalmethodes</h3>
  <p className="is-italic has-text-black">
          We accepteren contante betalingen, bankoverschrijvingen en credit cards.
          Let wel, niet al onze dames beschikken over een mobiele pinmachine, laat ons dus alsjeblieft van te voren weten hoe u wenst te betalen.
    Voor zowel bank als creditcard betalingen hanteren wij een discrete naam. Er zal dus niks met escortbedrijf op uw afschriften komen te staan.
  </p>
</div>
          <h4 className="has-text-weight-bold has-text-black">Contant</h4>
          <br/>
          <p className="marginbottom2 has-text-black">
          Wij willen u vragen om het correcte bedrag in een open envelop klaar te hebben liggen aan het begin van de afspraak met uw escort.
          </p>


          <h4 className="has-text-weight-bold has-text-black">Credit Card</h4>
          <br/>
          <p className="marginbottom2 has-text-black">
          Voor creditcard betalingen hanteren wij een extra tarief van 4%.
          Het is ook belangrijk om te weten dat bij creditcard betalingen onze dames u om uw identiteitsbewijs zullen vragen.
          </p>

          <h4 className="has-text-weight-bold has-text-black">Bankbetaling</h4>
          <br/>
          <p className="has-text-black">
          Bankbetalingen dienen uiterlijk 1 uur voor aanvang van de boeking op onze rekening staan. Desgewenst kunnen we u een tikkie sturen (uitsluitend beschikbaar voor houders van een Nederlandse bankrekening).
            Onze dames beschikken over een mobiele pinmachine, als u hiervan gebruik wilt maken moet u dit echter op zijn minst 2 uur voor de boeking aangeven.
          </p>
        </div>
        </div>
        </div>
      </sections>



    </>
  );
};

export default Tarieven;
