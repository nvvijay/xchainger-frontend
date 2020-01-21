import React, {Component} from "react";
import GoogleLogin from 'react-google-login';
const axios = require('axios');

class LoginComponent extends Component {

    state = {
        isSignedIn: false,
    };

    componentDidMount() {
        console.log("check for existing login");
        const loginToken = JSON.parse(localStorage.getItem("loginToken"));
        if(loginToken){
            this.setState({isSignedIn: true});
        }else {
            this.setState({isSignedIn: false});
        }

    }

    // doAuthenticate = () => {
    //     axios.get("http://192.168.0.184:1338/login").then(function (response) {
    //         // handle success
    //         console.log(response);
    //     }).catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     }).finally(function () {
    //         // always executed
    //     });
    // };

    successCallback = async (response) => {
        console.log(response);
        await localStorage.setItem("loginToken", JSON.stringify(response.tokenObj));
        await localStorage.setItem("profile", JSON.stringify(response.w3));
        this.setState({isSignedIn: true});
    };

    render() {
        return (<div style={this.state.isSignedIn?afterLoginStyle:beforeLoginStyle} id="beforeLogin">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}

                <GoogleLogin
                    clientId="344237568373-kjd001mj1ilh7lmitopt3mrh295gn5af.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.successCallback}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </header>
        </div>);
    };
}

const beforeLoginStyle = {
    zIndex: "11",
    background: "white",
    position: "absolute",
    width: "100%",
    height: "100%"
};

const afterLoginStyle = {
    display: "none"
};
export default LoginComponent;