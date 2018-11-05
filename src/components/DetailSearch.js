import React from 'react';


class DetailSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <small>Search <i className="fa fa-search" aria-hidden="true" /></small>
                <input type="text" className="form-control" placeholder="Tìm kiếm" />                    
            </div>
        );
    }
}


export default DetailSearch;
