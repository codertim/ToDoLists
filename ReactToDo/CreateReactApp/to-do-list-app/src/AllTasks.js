
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
                <div style={ {fontStyle: 'italic'} }>All Current Tasks:</div>
                <section style={ { marginBottom: '25px', paddingLeft: '50px'} }>
                    <React.Fragment>
                        {/* react fragment for lists that do not have a key */}
                        { this.props.someTasks.map((value, i) => <div key={i} >{value}</div>) }
                    </React.Fragment>
                </section>
            </div>
        );
    }
}


export default AllTasks;
