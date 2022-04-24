import React, { useState, useEffect } from "react";
import "../../src/App.css";
// import LoginIcon from '@mui/icons-material/Login';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
    };

    return (
        <div className="container">
            <h1>Book Store Login</h1>
            {error != "" ? (
                <div className="errorMsg">
                    <p>{error}</p>
                </div>
            ) : (
                ""
            )}

            <div class="panel">
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        <div className="form-group">
                            <input
                                className="input"
                                type="text"
                                name="name"
                                id="name"
                                onChange={(e) =>
                                    setDetails({ ...details, name: e.target.value })
                                }
                                value={details.name}
                            />
                            <span className="border"></span>
                            <label htmlFor="name">Name : </label>
                        </div>
                        <div className="form-group">
                            <input
                                className="input"
                                type="email"
                                name="email"
                                id="email"
                                onChange={(e) =>
                                    setDetails({ ...details, email: e.target.value })
                                }
                                value={details.email}
                            />
                            <span className="border"></span>
                            <label htmlFor="email">Email : </label>
                        </div>
                        <div className="form-group">
                            <input
                                className="input"
                                type="password"
                                name="password"
                                id="password"
                                onChange={(e) =>
                                    setDetails({ ...details, password: e.target.value })
                                }
                                value={details.password}
                            />
                            <span className="border"></span>
                            <label htmlFor="password">Password</label>
                        </div>
                        {/* <input type="submit" value="LOGIN" /> */}
                        <button type="submit">
                            Login <i className="bi bi-box-arrow-in-right"></i>{" "}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
