import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                        <h1 className="display-3">INDEX</h1>
                        <p className="lead">LQDM</p>
                        <hr className="my-2" />
                        <p>More info</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Link github</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}



export default Home;
