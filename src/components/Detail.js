import React, {Fragment} from 'react';
import DetailSearch from './DetailSearch';
import DetailSort from './DetailSort';
import DetailTable from './DetailTable';
import DetailNewEdit from './DetailNewEdit';
import axios from 'axios';
import DetailItem from './DetailItem';


class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusEdit : true,
            products : []
        };
    }

    statusChange = ()=>{
        this.setState({
            statusEdit: !this.state.statusEdit
        });
    }

    displayBtn = ()=>{
        if(this.state.statusEdit === true){
            return <button type="button" className="btn btn-outline-success btn-block" onClick={()=>{this.statusChange()}}>AddNew</button>;
            
        }else{
            return <button type="button" className="btn btn-outline-danger btn-block" onClick={()=>{this.statusChange()}}>Hủy</button>;
        }
    }

    displayForm = ()=>{
        if(this.state.statusEdit !== true){
            return <DetailNewEdit product={this.onChange}/>
        }
    }

    onChange = ()=>{
        this.setState({
            
        });
    }
    
    componentDidMount() {
        axios.get('http://5bcc6ca4cf2e850013874722.mockapi.io/api/testapi')
        .then((resp)=> {
            this.setState({
                products: resp.data
            })
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    onDelete = (id) =>{
        axios({
            method: 'DELETE',
            url: `http://5bcc6ca4cf2e850013874722.mockapi.io/api/testapi/${id}`,
            data: null
          }).then(resp => {
            if(resp.status === 200){
                var {products} = this.state;
                var index = this.findIndex(products, id);
                if(index !== -1){
                    products.splice(index, 1);
                    this.setState({
                        products:products
                       
                    });
                   
                }
            }
          });
    }

    findIndex = (products, id) =>{
        var result = -1;
        products.forEach((product, index)=>{
            if(product.id === id){
                result = index;
            }
        });
        return result;
    } 



    showProducts(products){
        // console.log(products);
        var result = null;
        if(products.length > 0){
            result = products.map((product,index)=>{
                return(
                    <DetailItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                        
                    />
                )
            })
        }
        return result;
    }
    
   
    render() {
        var {products} = this.state;
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid text-center">
                    <div className="container">
                        <h1 className="display-3">Task</h1>
                        <hr className="my-2"/>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col m-3">
                            {this.displayBtn()}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                        {/* search / sort*/}
                            <div className="form-group">
                                <DetailSearch/>
                                <DetailSort/>
                            </div>
                        {/* table */}
                        <DetailTable>{this.showProducts(products)}</DetailTable>
                        </div>
                        {/* addnew & edit */}
                        {this.displayForm(this.state.product)}
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default Detail;
