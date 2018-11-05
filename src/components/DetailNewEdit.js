import React from 'react';
import axios from 'axios';


class DetailNewEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            txtName: '',
            txtPrice: '',
            chkbStatus: '',
        }
       
    }

    onChange = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        });
    }

    onSave = (e) =>{
        e.preventDefault();
        var {txtName, txtPrice,chkbStatus} =this.state;
        axios({
            method: 'post',
            url: 'http://5bcc6ca4cf2e850013874722.mockapi.io/api/testapi/',
            data:{
                name: txtName,
                price:txtPrice,
                status: chkbStatus
            }
        }).then(resp =>{
            console.log(this.props.product());
            if(resp.status === 201){
                
            }
        });
    }

    
    render() {
        var {txtName, txtPrice, chkbStatus} = this.state;
        return (
            <div className="col-3">
            <form onSubmit={this.onSave}>
                <div className="alert alert-warning" role="alert">Thêm Mới</div>
                <div className="form-group">
                <label >Name</label>
                <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <label >Price</label>
                <input type="text" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange}/>
                </div>
                <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" name="chkbStatus"  value={chkbStatus} onChange={this.onChange}/>
                <label className="form-check-label"  >Còn hàng</label>
                </div>
                <button type="submit" className="btn btn-primary">Ok!</button>
                <button type="reset" className="btn btn-warning">Hủy</button>
            </form>
            </div>

        );
    }
}


export default DetailNewEdit;
