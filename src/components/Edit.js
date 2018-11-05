import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

 

   
    render() {
       
        return (
           <Fragment>
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <h1 className="display-3">EDIT</h1>
                    <hr className="my-2" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name='txtName'/>
                                <small className="form-text text-muted">Name text</small>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" className="form-control" name='txtPrice'/>
                                <small className="form-text text-muted" >Price number</small>
                            </div>
                            <div className="form-check m-4">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name='chkbStatus'/>
                                    Còn hàng
                                </label>
                            </div>
                            <button type="button" className="btn btn-outline-success">Ok!</button>
                            <Link to="/detail" className="btn btn-outline-warning">Thoát</Link>
                        </div>
                    </div>
                </div>
            </div>
           </Fragment>
        );
    }
}



export default Edit;
