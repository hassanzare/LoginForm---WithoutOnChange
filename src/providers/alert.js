import React, { useContext, useEffect } from "react";

const AlertContext = React.createContext();

const AlertProvider = ({ children }) => {
  const handleAlert = () => {
    alert("hello world");
  };

  const loading = () => {
    document.getElementById(
      "loader"
    ).innerHTML = `<div style=' border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid blue;
    border-right: 16px solid green;
    border-bottom: 16px solid red;
    border-left: 16px solid pink;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;' ></div>`;
  };

  const MyNotification = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        document.getElementById(
          "demo"
        ).innerHTML = `<div className="alert" style="padding: 20px;
        background-color: #f44336;
        color: white;
      }" >
        <span
          class="closebtn" style='margin-left: 15px;
          color: white;
          font-weight: bold;
          float: right;
          font-size: 22px;
          line-height: 20px;
          cursor: pointer;
          transition: 0.3s;
          '
          onclick="this.parentElement.style.display='none';"
        >
          &times;
        </span>
        <strong>Danger!</strong> Indicates a dangerous or potentially negative
        action.
      </div>`;
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
  };

  return (
    <AlertContext.Provider
      value={{
        handleAlert,
        MyNotification,
        loading,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AlertContext);
};

export { AlertContext, AlertProvider };
