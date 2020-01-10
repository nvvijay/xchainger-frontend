import React, {Component} from "react";

class SidebarItem extends Component{
    render(){
        const isPremium = this.props.title === "Go Premium";
        return (
            <div style={isPremium? sidebarPremium: sidebarItemStyle}>
                {this.props.title}
            </div>
        );
    }
}

const sidebarItemStyle = {
    background: "#FFF",
    margin: "5px",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "10px",
};

const sidebarPremium  = {
    background: "#8ce9af",
    margin: "5px",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "10px",
};
export default SidebarItem