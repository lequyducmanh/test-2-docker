import React, {Fragment} from 'react';
import { Route } from "react-router-dom";
import Home from './Home';
import Detail from './Detail';
import Edit from './Edit';

class Routers extends React.Component {

    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/detail" component={Detail} />
                <Route path="/edit"   component={Edit} />
            </Fragment>
        );
    }
}


export default Routers;
