import React, {Component} from "react";

class TableRow extends Component{
    render(){

        const isHeader = this.props.data.isHeader;
        let colVals = [];

        if(isHeader){
            for(var c in this.props.data.cols){
                const isDeleteRow = this.props.data.cols[c] === "Delete";
                colVals.push(<div key={this.props.data.id+"_"+c} style={isDeleteRow?deleteItemHeaderStyle:tableRowItemStyle}>{this.props.data.cols[c]}</div>);
            }
        }else{
            let keys = Object.keys(this.props.data);
            for(var k in keys)
                if(k == keys.length -1){
                    const delItem = <div key="-2" style={deleteItemStyle}>Delete</div>;
                    colVals.push(delItem);
                }else{
                    colVals.push(<div key={this.props.data.id+"_"+k} style={tableRowItemStyle}>{this.props.data[keys[k]]}</div>);
                }

        }

        return (
            <div style={isHeader? tableHeaderStyle:tableRowStyle}>
                {colVals}
            </div>
        );
    }
}

const tableHeaderStyle = {
    display: "flex",
    background: "#2C3339",
    color: "#fff",
    padding: "5px",
    fontWeight: "700",
};
const tableRowStyle = {
    display: "flex",
    background: "#EBEDF3",
    color: "#000",
    padding: "5px",
};

const tableRowItemStyle = {
    flex: "3",
    padding: "10px"
};
const deleteItemHeaderStyle = {
    flex: "1",
    background: "#2C3339",
    color: "#2C3339",
    padding: "5px",
};
const deleteItemStyle = {
    flex: "1",
    background: "#ff7575",
    padding: "5px",
    height: "20px",
    color: "#fff",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer"
};
export default TableRow