import React from 'react';
import './App.css';
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import LoginComponent from "./components/LoginComponent"

function App() {
  return (
    <div className="App">
        <LoginComponent />
        <div id="afterLogin">
            <Header />
            <div id="contentPane" style={contentPaneLayout}>
                <Sidebar />
                <Content />
            </div>
        </div>
    </div>
  );
}


const contentPaneLayout = {
    display: "flex",
    margin: "10px"
};

export default App;
