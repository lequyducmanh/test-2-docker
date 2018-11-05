import React from 'react';



class DetailTable extends React.Component {
    

    render() {       
        return (
            <table className="table border">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>

        );
    }
}


export default DetailTable;
