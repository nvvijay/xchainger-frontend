import React, {Component} from "react";
import GoogleLogin from 'react-google-login';
const axios = require('axios');

class LoginComponent extends Component {

    state = {
        isSignedIn: false,
    };

    componentDidMount() {
        console.log("check for existing login");
        // this.setState({isSignedIn: true})
    }

    doAuthenticate = () => {
        axios.get("http://192.168.0.184:1338/login").then(function (response) {
            // handle success
            console.log(response);
        }).catch(function (error) {
            // handle error
            console.log(error);
        }).finally(function () {
            // always executed
        });
    };

    successCallback = (response) => {
        console.log(response);

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
                    redirectUri={"http://localhost:1338/login"}
                    uxMode="redirect"
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