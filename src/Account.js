import header from "./assets/Header.png";
import Profile from "./assets/Profile.svg";
import { setAll, setActive } from "./redux/actions/userAction";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react";
import { useDispatch, useEffect, useState } from "react";

import "./Account.css";

function Account() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => {
    console.log(state.menu);
    return state.menu;
  });
  const [meny, setUser] = useState([]);
  const [accountsLoaded, setMenuLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      setMenuLoaded(false);
      let response = await fetch("http://localhost:8001/api/account");
      let data = await response.json();
      console.log(data.accounts);
      dispatch(setAll(data.accounts));
      dispatch(setActive(data.activeAccount));
      setUser(data.accounts);
      setMenuLoaded(true);
      setAll(() => {
        return data.accounts;
      });
    })();
  }, []);

  const it = setActive();
  return (
    <div className="Account">
      <img src={header} className="HeadImg" alt="logo" />
      <img src={Profile} className="ProfileImg" alt="logo" />

      <div className="UserInfo">
        {meny.map((item, index) => {
          return (
            <div key={index}>
              <span>{item[it]}</span> <hr />
            </div>
          );
        })}
        <h2 className="name">Khalid Tumah</h2>
        <p className="email">Khaledtumah@gmail.com</p>
      </div>
      <div>
        <h2 className="Mid">Orderhistorik</h2>
        <table className="OrderList">
          <tr className="TableHead">
            <th className="id">Id</th>
            <th className="date">Date</th>
          </tr>
          <tr className="TableLow">
            <td className="sum">total ordersumma</td>
            <td className="price">Num</td>
          </tr>
        </table>
        <hr />
        <table className="OrderList">
          <tr className="TableHead">
            <th className="id">Totalt spenderat</th>
            <th className="date">Num</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Account;
