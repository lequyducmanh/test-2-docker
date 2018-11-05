import React from 'react';

class DetailSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <select className="custom-select custom-select-sm mt-2">
                <option defaultValue="selected" >SORT FOLLOW</option>
                <option value="{2}">UP</option>
                <option value="{3}">DOWN</option>
            </select>

        );
    }
}


export default DetailSort;
