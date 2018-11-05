import React from 'react';
import {Link} from 'react-router-dom';


class DetailItem extends React.Component {

    onDelete = (id) =>{
        // console.log(id);
        if(confirm('Bạn chắc chắn muốn xóa???')){   //eslint-disable-line
            this.props.onDelete(id);
        }
    }

   
    render() {
        var {product, index} = this.props;
        var statusName  = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'success' : 'danger';
        return (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <div className={`alert alert-${statusClass}`} role="alert">{statusName}</div>
                </td>
                <td>
                    <Link to={`/edit/${product.id}`} className="btn btn-info" >EDIT</Link>
                    <button type="button" className="btn btn-danger" onClick={()=>{this.onDelete(product.id)}}>DELETE</button>
                </td> 
            </tr>
        );
    }
}


export default DetailItem;
