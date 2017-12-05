import React, { Component } from 'react';


class TitleBlock extends Component {

  handleUpdate(event) {
    this.props.onChange(event)
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
              name="title"
              type="text"
              // value={title}
              onChange={(event) => this.handleUpdate(event)}
              />
          </label>
          <label>
            Quiz Description
            <input 
              name="desc"
              type="text"
              // value={desc}
              onChange={(event) => this.handleUpdate(event)}
              />
          </label>
        </form>
      </div>
    )
  };
}

export default TitleBlock
