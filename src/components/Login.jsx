import { useState } from "react";
import "../styles/login.css";

const details = [
  {
    id: 1,
    name: "Suman Dwijendra",
    userName: "suman",
    passWord: "29472",
  },
  {
    id: 2,
    name: "THOR",
    userName: "13",
    passWord: "13",
  },
  {
    id: 1,
    name: "THOR",
    userName: "163",
    passWord: "183",
  },
];

function Login({ userName, setUserName, passWord, setPassWord, setShowExam }) {
  const [visible, setVisible] = useState(false);
  const handlePassWordVisibility = () => setVisible((curr) => !curr);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !passWord) return;

    setUserName((curr) => e.target[0]?.value);
    setPassWord((curr) => e.target[1]?.value);
    const present = details.filter(
      (curr) => curr.passWord === passWord && curr.passWord === passWord
    );

    if (present.length > 0) setShowExam(present);
    else alert("User Not Found!");
    // console.log(present);
    setUserName("");
    setPassWord("");
  };
  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <div className="wrapper">
        <span>
          <label>UserName: </label>
          <input
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="inp"
          />
        </span>
        <span>
          <label>Password: </label>
          <input
            type={visible ? "text" : "passWord"}
            required
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            className="inp"
          />
          <span>
            <label>Show Password </label>{" "}
            <input
              type="checkbox"
              value={visible}
              onChange={handlePassWordVisibility}
              className="check"
            />
          </span>
        </span>
        <span>
          <button className="btn"> Enter &rarr;</button>
        </span>
      </div>
    </form>
  );
}

export default Login;
