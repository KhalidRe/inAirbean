import header from "./assets/Header.png";
import footer from "./assets/footer.png";
import boss from "./assets/boss.jpg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActive, setAll } from "./redux/actions/userAction";

import "./OurCoffe.css";

function OurCoffe() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:8001/api/account");

      let data = await response.json();
      console.log(data.accounts);
      dispatch(setAll(data.accounts));
      dispatch(setActive(data.activeAccount));

      setAll(() => {
        return data.accounts;
      });
    })();
  }, []);
  return (
    <div className="OurCoffe">
      <img src={header} className="HeadImg" alt="logo" />
      <div className="OurCoffe-text">
        <h1>Vårt Kaffe</h1>
        <p>
          <strong>
            Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
            grounds dripper, crema, strong whipped, variety extra iced id lungo
            half and half mazagran. Pumpkin spice.
          </strong>
        </p>

        <p>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
        </p>
        <p>
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </p>
      </div>
      <img src={boss} className="boss" />
      <h1 className="eva">Eva Cortado</h1>
      <p>VD & Grundare</p>

      <img src={footer} className="LowImg2" />
    </div>
  );
}

export default OurCoffe;
