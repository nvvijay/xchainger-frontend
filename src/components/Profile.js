import React, {Component} from "react";

class Profile extends Component{

    render(){
        const {name, imgUrl, school} = this.props.profileData;

        return (
            <div style={profileStyle}>
                <img style={imageStyle} alt="profile image" src={imgUrl} width="50px" height="50px"/>
                <div style={textStyle}>
                    <div style={nameStyle}>{name}</div>
                    <div style={schoolStyle}>{school} | <span style={logoutStyle}>Logout</span></div>
                </div>
            </div>
        );
    }
}

const profileStyle = {
    padding: "5px",
};

const imageStyle = {
    borderRadius: "50%",
};

const textStyle = {
    padding: "5px",
    float: "right",
    marginLeft: "10px"
};

const nameStyle = {
    color: "#fff",
    fontWeight: "700"
};

const schoolStyle = {
    color: "#fff",
};
const logoutStyle = {
    color: "rgb(255, 84, 172)",
    width: "80px",
    height: "20px",
    background: "#fff",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "12px",
    padding: "2px 10px",
    borderRadius: "3px",
    boxShadow: "0px 0px 5px 0px #888"

};
export default Profile