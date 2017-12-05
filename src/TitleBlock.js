import React, { Component } from 'react';


class TitleBlock extends Component {

    handleUpdate(event) {
        this.props.onChange(event.target.value)
    }
    
    render() {
        const title = this.props.title;
        const desc = this.props.desc;
        return (
            <div>
                <form>
                    <label>
                        Quiz Title
                        <input 
                            type="text"
                            value={title}
                            onChange={(event) => this.handleUpdate(event)}
                        />
                    </label>
                    <label>
                        Quiz Description
                        <input 
                            type="text"
                            value={desc}
                            onChange={(event) => this.handleUpdate(event)}
                        />
                    </label>
                </form>
            </div>
        )
    };
}

export default TitleBlock