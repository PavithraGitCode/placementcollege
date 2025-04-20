import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoginError("");
  
      const credentials = {
        username: username,
        password: password,
      };
  
      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
  
        if (response.ok) {
          try {
            const data = await response.json();
            
                alert("Login successful");
                 
            console.log("Login successful:", data);
            localStorage.setItem("authToken", data.token);
            navigate("/");
          } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
            const textData = await response.text();
            console.log("Raw successful response:", textData);
            setLoginError("Login successful, but failed to parse response.");
          }
        } else {
          // Handle the 401 Unauthorized error specifically
          if (response.status === 401) {
            try {
              const errorData = await response.json();
              console.error("Login failed (Unauthorized):", errorData);
              setLoginError(`Login failed: ${errorData?.message || "Invalid username or password"}`);
            } catch (jsonError) {
              console.error("Error parsing 401 JSON:", jsonError);
              const errorText = await response.text();
              console.error("Raw 401 response:", errorText);
              setLoginError("Invalid username or password");
            }
          } else {
            // Handle other non-OK responses
            try {
              const errorData = await response.json();
              console.error(`Login failed (${response.status}):`, errorData);
              setLoginError(`Login failed: ${errorData?.message || response.statusText}`);
            } catch (jsonError) {
              console.error(`Error parsing ${response.status} JSON:`, jsonError);
              const errorText = await response.text();
              console.error(`Raw ${response.status} response:`, errorText);
              setLoginError(`Login failed: ${response.statusText}`);
            }
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
        setLoginError("Username or password is incorrect");
      }
    };
  return (
    <>
      <div className="bg-login">
        <div className="containers">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={handleSubmit}>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button className="button login__submit" type="submit">
                  <span className="button__text">Sign In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
                {loginError && (
  () => {
    alert(loginError);
    return null; // Or <></>
  }
)()}
                <div className="signup-text">
                  <h6>
                    Don't have an account? <a href="/register">Sign up</a>
                  </h6>
                </div>
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;