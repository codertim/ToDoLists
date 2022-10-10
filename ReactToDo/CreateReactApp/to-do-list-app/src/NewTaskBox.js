import React from "react";

class NewTaskBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.handleMyChange = this.handleMyChange.bind(this);
    }

    handleMyChange(event) {
        console.log("NewTaskBox - handleMyChange - myTasks= " + JSON.stringify(this.state.tasks));
        console.log("NewTaskBox - handleMyChange - theTasks= " + JSON.stringify(this.state.tasks));
        // console.log("this.state.currentTasks= " + JSON.stringify(this.state.currentTasks));
        var newTaskValue = document.getElementById("newtask").value;
        this._inputNew.value = '';
        this._inputNew.focus();

        if(newTaskValue) {
            //this.state.tasks.push(newTaskValue);
            this.setState((prevState) => {
                return {tasks: [...prevState.tasks, newTaskValue]};
            });
            console.log("NewTaskBox#handleMyChange - this.state.tasks:", this.state.tasks);
            this.props.myTasksChanged(this.state.tasks);
        }
    }

    componentDidMount() {
        console.log("componentDidMount - NewTaskBox mounted.");
    }

    render() {
        var newTaskMsg = <label>Enter new task: </label>;
        var self = this;

        return (
            <div className="newTaskBox">
                {newTaskMsg} <input type="text" name="newtask" id="newtask"
                                    ref={
                                        function(el) {
                                            self._inputNew = el;
                                        }
                                    } />
                <button id="addnewtask" onClick={this.handleMyChange} style={{marginLeft: "10px"}}>Add</button>
                <br /><br /><br />
            </div>
        );
    }
}

export default NewTaskBox;
