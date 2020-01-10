import React, {Component} from "react";
import Profile from "../components/Profile";

class Header extends Component{

    state = {
        profileData: {
            name: "John Doe John Doe ",
            imgUrl: "https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg",
            school: "ASU"
        }
    };

    render(){
        return (
            <div style={headerStyle}>
                <div style={titleStyle}>Xchainger</div>
                <Profile profileData={this.state.profileData}/>
            </div>
        )
    }
}

const headerStyle = {
    // background:"#383736",
    // background: "linear-gradient(to right, #6797ff 0%,#ff54ac 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    padding: "5px 15px",
    display: "flex",
    alignItems: "center",
};

const titleStyle = {
    color:"#fff",
    flex: "1",
    fontSize: "40px",
    fontWeight: "700",
    textShadow: "0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15)",
    paddingBottom: "10px"
};


export default Header