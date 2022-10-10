import React from "react";
import AllTasks from "./AllTasks";
import NewTaskBox from "./NewTaskBox";
import RemoveTasks from "./RemoveTasks";
import "./ToDoList.css";

///function ToDoList(props) {
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '>>> ',
            currentTasks: []
        }
        this.handleMyTasksChanged = this.handleMyTasksChanged.bind(this);
    }

    parentHandleDelete(taskToDelete) {
        console.log("parentHandleDelete - val = " + taskToDelete);
        var delIndex = this.state.currentTasks.indexOf(taskToDelete);
        console.log("parentHandleDelete - Deleting - delIndex  = ", delIndex);
        const newTaskList = [];
        for(let i = 0, len = this.state.currentTasks.length; i < len; i++) {
            if(i !== delIndex) {
                newTaskList.push(this.state.currentTasks[i]);
            }
        }
        console.log("parentHandleDelete - newTaskList:", newTaskList);
        this.setState({currentTasks: newTaskList});
    }

    handleMyTasksChanged(newTasks) {
        this.setState({currentTasks: newTasks});
    }

    render() {
        return (
            <div id="comp-to-do-list">
                <h2>{this.state.header} {this.props.headervalue}</h2>
                {this.props.children}
                <div>
                    <h2>To-Do List in React</h2>
                    <AllTasks someTasks={this.state.currentTasks} />
			        <NewTaskBox myTasksChanged={this.handleMyTasksChanged} />
                    <RemoveTasks theTasks={this.state.currentTasks} handleDelete={this.parentHandleDelete} />
                </div>
            </div>
        );
    }
}

export default ToDoList;
