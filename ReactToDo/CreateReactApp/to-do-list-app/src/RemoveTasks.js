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
                    this.handleRemoveTask = this.handleRemoveTask.bind(this);
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

                handleRemoveTask(evt) {
                    console.log("RemoveTasks#handleRemoveTask - evt:", evt);
                    if (evt.shiftKey) {
                        console.log("RemoveTasks#handleRemoveTask - shift key pressed");
                    }
                    var taskToDelete = document.getElementById("delete-drop-down").value;
                    var indexToDelete = this.state.tasksCanRemove.indexOf(taskToDelete);
                    console.log("indexToDelete:" + (indexToDelete || ""));
                    var newTaskList = this.state.tasksCanRemove.slice(0, indexToDelete).concat(this.state.tasksCanRemove.slice(indexToDelete + 1));
                    console.log("newTaskList:", newTaskList);
                    this.setState({ tasksCanRemove: newTaskList });
                    this.props.handleDelete(taskToDelete);   // notify parent
                }

                showRemoveHeader() {
                    return <label>:: Remove Tasks</label>;
                }

                render() {
                    var arr1 = [];   //[<label>testing1</label>, <label>testing2</label>];
                    return (
                        <div id="removeTasks">
                            <hr />
                            {this.showRemoveHeader()}
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
                            {arr1}
                        </div>
                    );
                }
            }

export default RemoveTasks;
