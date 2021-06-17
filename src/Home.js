import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import header from "./assets/Header.png";
import { useHistory } from "react-router-dom";
import logo from "./assets/logo.svg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActive, setAll } from "./redux/actions/userAction";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./component/Menu";
import "./App.css";
import Account from "./Account";

function Home() {
  const history = useHistory();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log(`Your state values:
                     username: ${username}
                     email: ${email}`);
    fetch("http://localhost:8001/api/account", {
      body: JSON.stringify({ username: username, email: email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === "they gone and did it") {
          console.log(result);
          setTimeout(() => {
            alert("sheeeeeesh");
          }, 1000);
        } else {
          console.log(result);
          setTimeout(() => {
            alert("oooookkkeeeeeee");
          }, 1000);
        }
        history.push("/account");
      });
  };
  const dispatch = useDispatch();
  const accounts = useSelector((state) => {
    console.log(state.accounts);
    return state.accounts;
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Router>
      <Menu />
      <Route
        path="/"
        exact
        render={(props) => (
          <>
            <div className="App">
              <img src={header} className="HeadImg" alt="logo" />
              <div className="App-login">
                <div className="banner">
                  <img src={logo} alt="logo" />
                  <h2>
                    Välkommen till <br /> AirBean-familjen!
                  </h2>
                  <p>
                    Genom att skapa ett konto nedan kan <br /> du spara och se
                    din orderhistorik.
                  </p>
                  <div className="inputs">
                    <Formik
                      initialValues={{ email: "", Username: "" }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email address";
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 400);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form onSubmit={loginSubmit} className="form">
                          <p className="inputstxt">Namn</p>
                          <Field
                            className="input"
                            value={username}
                            onChange={handleNameChange}
                            type="name"
                            name="name"
                            id="userN"
                          />

                          <p className="inputstxt">Epost</p>
                          <Field
                            className="input"
                            value={email}
                            type="email"
                            name="email"
                            onChange={handleEmailChange}
                            id="Mail"
                          />
                          <div>
                            <span>
                              <input type="radio" name="check" />
                              <label>GDPR Ok!</label>
                            </span>
                          </div>
                          <div className="button">
                            <button
                              className="LoginB"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Logga in
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      />

      <Route path="/account" exact component={Account}></Route>
    </Router>
  );
}

export default Home;
