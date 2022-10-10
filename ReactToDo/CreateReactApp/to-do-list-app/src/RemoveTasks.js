import React from "react";
            
            //var RemoveTasks = React.createClass({
            class RemoveTasks extends React.Component {
                /*
                getInitialState() {
                    return {
                        tasksCanRemove: []
                    };
                }
                */
                constructor(props) {
                    super(props);
                    this.state = {
                        tasksCanRemove: []
                    };
                }

                componentDidMount() {
                    console.log("RemoveTasks - componentDidMount - this.tasksCanRemove=", this.state.tasksCanRemove);
                    console.log("RemoveTasks - componentDidMount - this.props.theTasks=", this.props.theTasks);
                    // this.setState({tasksCanRemove: this.props.theTasks.map( (val) => 
                    //     <div><span key={val} onClick={this.removeTaskHandleDelete}>{val}</span></div>
                    // )});
                    this.setState({ tasksCanRemove: this.props.theTasks.map( (val) => val)});
                    console.log("RemoveTasks - component did mount - this.tasksCanRemove=", this.state.tasksCanRemove);
                }

                handleRemoveTask() {
                    var taskToDelete = document.getElementById("delete-drop-down").value;
                    var indexToDelete = this.state.tasksCanRemove.indexOf(taskToDelete);
                    console.log("indexToDelete:" + (indexToDelete || ""));
                    var newTaskList = this.state.tasksCanRemove.slice(0, indexToDelete).concat(this.state.tasksCanRemove.slice(indexToDelete + 1));
                    console.log("newTaskList:", newTaskList);
                    this.setState({ tasksCanRemove: newTaskList });
                    this.props.handleDelete(taskToDelete);   // notify parent
                }

                render() {
                    return (
                        <div id="removeTasks">
                            <hr />
                            :: Remove tasks
                            <br />
                            <div style={{visibility: 'hidden'}}>
                            { this.state.tasksCanRemove }
                            </div>
                            <select id="delete-drop-down">
                                {
                                    this.state.tasksCanRemove.map(function(val) {
                                        return <option key={val}>{val}</option>
                                    })
                                }
                            </select>
			    <button id='delete-button' onClick={this.handleRemoveTask} style={{marginLeft: '20px'}}>Remove</button> 
                        </div>
                    );
                }
            }

export default RemoveTasks;
