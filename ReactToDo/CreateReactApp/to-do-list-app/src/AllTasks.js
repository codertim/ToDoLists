
import React from "react";

class AllTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    render() {
        return (
            <div className="allTasks">
                <hr />
    <div style={ {fontStyle: 'italic'} }>All Current Tasks:</div>
    <section style={ { marginBottom: '25px', paddingLeft: '50px'} }>
        { this.props.someTasks.map((value, i) => <div key={i} >{value}</div>) }
    </section>
            </div>
        );
    }
}


export default AllTasks;
