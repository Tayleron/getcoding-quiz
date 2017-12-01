import React, { Component } from 'react';


class TitleBlock extends Component {
    handleUpdate(event) {
        this.props.onChange(event.value)
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>
                        Quiz Title
                        <input 
                            type="text" 
                            className="title"
                            value={this.props.title}
                            onChange={(event) => this.handleUpdate(event)}
                        />
                    </label>
                    <label>
                        Quiz Description
                        <input 
                            type="text" 
                            className="desc"
                            value={this.props.desc}
                        />
                    </label>
                </form>
            </div>
        )
    };
}

export default TitleBlock