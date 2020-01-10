import React, {Component} from "react";
import GraphUser from "./GraphUser";
import '../Graph.css';

class GraphView extends Component{
    render(){
        const myGraph = {
            nodes:[
                {id:"n1", name:"John Doe John Doe", email:"jdoe@asu.edu", subject:"CSE 535", imgUrl: "https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg" },
                {id:"n2", name:"நீல", email:"nila@asu.edu", subject:"CSE 476", imgUrl: "https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg"},
                {id:"n3", name:"Hair", email:"hair@asu.edu", subject:"CSE 552", imgUrl: "https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg"}
            ],
            edges:[
                {id:"e1",from:"n1",to:"n2"},
                {id:"e2",from:"n2",to:"n3"}
            ]
        };

        const userComponents = [];
        for(var i=0; i<myGraph.nodes.length; i++){
            userComponents.push(<GraphUser profileData={myGraph.nodes[i]}/>);
            userComponents.push(<div style={graphEdgeStyle}></div>);
        }
        userComponents.push(userComponents[0]);
        return (
            <div style={graphViewStyle}>
                {userComponents}
                {/*NOTE: everyone has to drop simultaneously for this to work!*/}
            </div>

        );
    }
}

const graphViewStyle = {
    background: "#fff",
    flex: "3",
    height: "300px",
    textAlign: "center",
    padding: "50px",
    margin: "10px",
    display: "flex",
    flexDirection: "row"
};

const graphEdgeStyle = {
    backgroundImage: "url('https://image.flaticon.com/icons/png/512/130/130884.png')",
    backgroundSize: "25px",
    padding: "30px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
};
export default GraphView