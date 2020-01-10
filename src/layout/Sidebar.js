import React, {Component} from "react";
import SidebarItem from "../components/SidebarItem";

class Sidebar extends Component{

    render(){
        const sidebarItems = ["Add New Subject", "Search For Subject", "Go Premium"];
        const sidebar = [];
        for(let i in sidebarItems){
            sidebar.push(<SidebarItem title={sidebarItems[i]}/>);
        }
        return (
            <div style={sidebarStyle}>
                {sidebar}
            </div>
        );
    }
}

const sidebarStyle = {
    flex: "1",
    padding: "5px",
    // margin: "5px",
    // boxShadow: "0px 0px 3px 0px #000",
};

export default Sidebar