import React, {Component} from "react";
import GraphView from "../components/GraphView";
import Table from "./Table";

class Content extends Component{
    render(){
        return (
            <div style={contentStyle}>
                <div style={announcementStyle}>You have 1 subject available to swap!!</div>
                <GraphView />
                <Table />
            </div>
        );
    }
}

const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    flex: "5",
    padding: "50px",
    zIndex: "10",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px 0px #6c6c6c"
};

const announcementStyle = {
    fontSize: "50px",
    background: "linear-gradient(to right, #6797ff 0%,#8debae 100%)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    fontWeight: "700"
};

export default Content