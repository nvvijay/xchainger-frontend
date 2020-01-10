import React, {Component} from "react";

class Profile extends Component{

    render(){
        const {name, imgUrl, subject, email} = this.props.profileData;

        return (
            <div style={profileStyle}>
                <img style={imageStyle} alt="profile pic" src={imgUrl} width="50px" height="50px"/>
                <div style={textStyle}>
                    <div style={nameStyle}>{name}</div>
                    <div style={subjectStyle}>{subject} </div>
                    <div style={emailStyle}>{email} </div>
                </div>
            </div>
        );
    }
}

const profileStyle = {
    padding: "5px",
    border: "1px solid #333",
    borderRadius: "15px",
    boxShadow: "0px 0px 5px 0px #ccc"
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
    color: "#000",
    fontWeight: "700"
};

const subjectStyle = {
    color: "#000",
    fontSize: "10px"
};
const emailStyle = {
    color: "#000",
    fontSize: "12px"
};

export default Profile