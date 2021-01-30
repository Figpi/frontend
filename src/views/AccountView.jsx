import React from "react";
import { useState, useEffect } from "react";

// Dashboard wide Components
import Sidebar from "../components/layouts/sidebar/Sidebar";
import Topbar from "../components/layouts/topbar/Topbar";

// Icon-imports
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";

function AccountView() {
  const page_title = "Account";
  document.title = `Figpi - ${page_title}`;

  // Results
  const [results, setResults] = useState("");
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const api_endpoint = "https://randomuser.me/api/";
      try {
        const response = await fetch(api_endpoint, { mode: "no-cors" })
          .then((response) => response.json())
          .then((data) => setResults(data));
        console.log({ results });
        setIsLoading(false);
      } catch (error) {}
    }

    fetchData();
  }, []);

  console.log("Config-var" + process.env.BASE_API_ENDPOINT);

  return (
    <div className="dash--board">
      <Topbar />
      <div className="container-fluid content--area">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-lg-5 px-md-4 mt-5">
            <div className="view-bar">
              <div className="title-wrapper">
                <h3>{page_title}</h3>
              </div>
              <div className="view-bar-features">
                <button className="btn">
                  <IconContext.Provider value={{ className: "view-bar-icon" }}>
                    <AiFillPlusCircle size={30} />
                  </IconContext.Provider>
                </button>
              </div>
            </div>

            <div className="account-area mt-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="fbt@figpi.com"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleUsername"
                    placeholder="thorbensen-figpi"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="1234124"
                  />
                </div>

                <div className="mb-3">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="exampleFirstname" className="form-label">
                        First name
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleFirstname"
                        placeholder="Frederik"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="exampleLastname" className="form-label">
                        Last name
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleLastname"
                        placeholder="Bode Thorbensen"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="exampleAddress" className="form-label">
                        Address
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleAddress"
                        placeholder="Newel Road 223"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="exampleCity" className="form-label">
                        City
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleCity"
                        placeholder="Los Angles"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-theme">
                  Update
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AccountView;
