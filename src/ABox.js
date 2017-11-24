import React from "react";



class ABox extends React.Component {
    render() {
        return (
            <div>
                Answer<input type="text" className="aText"/>
                <select name="corResult" id="">
                    <option value="result1">Result 1</option>
                    <option value="result2">Result 2</option>
                </select>
            </div>
        )
    };
}

export default ABox;