import React, { Component } from 'react';


class TitleBlock extends Component {
    render() {
        return (
            <div>
                Quiz Title<input type="text" className="title"/>
                <br/>
                Quiz Description<input type="text" className="desc"/>
            </div>
        )
    };
}

export default TitleBlock