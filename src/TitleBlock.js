import React, { Component } from 'react';


class TitleBlock extends Component {
    render() {
        return (
            <div><h3>Title Block</h3>
                <div>
                    Quiz Title<input type="text" className="title"/>
                    <br/>
                    Quiz Description<input type="text" className="desc"/>
                </div>
            </div>
        )
    };
}

export default TitleBlock