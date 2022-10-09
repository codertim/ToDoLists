import React from "react";

class NewTaskBox extends React.Componet {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    handleMyChange(event) {
        console.log("NewTaskBox - handleMyChange - myTasks= " + JSON.stringify(this.state.tasks));
        console.log("NewTaskBox - handleMyChange - theTasks= " + JSON.stringify(this.state.tasks));
        // console.log("this.state.currentTasks= " + JSON.stringify(this.state.currentTasks));
        var newTaskValue = document.getElementById("newtask").value;
        document.getElementById("newtask").value = "";

        if(newTaskValue) {
            this.state.tasks.push(newTaskValue);
            this.props.myTasksChanged(this.state.tasks);
        }
    }

    componentDidMount() {
        console.log("componentDidMount - NewTaskBox mounted.");
    }

    render() {
        return (
            <div className="newTaskBox">
                Enter New Task: <input type="text" name="newtask" id="newtask" />
                <button id="addnewtask" onClick={this.handleMyChange} style={{marginLeft: "10px"}}>Add</button>
                <br /><br /><br />
            </div>
        );
    }
}

export default NewTaskBox;
