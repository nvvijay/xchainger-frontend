import React, {Component} from "react";
import TableRow from "../components/TableRow";

class Table extends Component{
    state = {
        data: [
            {
                id: -1,
                isHeader: true,
                cols: ["ID", "Subject Code", "Availability", "Status", "Delete"]
            },
            {
                id: 1,
                subject: "cse 575",
                status: "unavailable",
                wantOrHave: "want",
                delete: "x"
            }, {
                id: 2,
                subject: "cse 534",
                status: "unavailable",
                wantOrHave: "want",
                delete: "x"
            }, {
                id: 3,
                subject: "cse 435",
                status: "available",
                wantOrHave: "have",
                delete: "x"
            }
        ]
    };

    render(){

        const rows = [];
        for(var i=0; i<this.state.data.length; i++){
            rows.push(<TableRow key={this.state.data[i].id} data={this.state.data[i]}/>)
        }
        return (
            <div style={tableStyle}>
                {rows}
            </div>
        );
    }
}

const tableStyle = {
    display: "flex",
    flexDirection: "column",
    flex: "7",
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 0px 5px 0px #6c6c6c"
};

export default Table