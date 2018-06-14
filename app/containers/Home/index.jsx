import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Your Home Page </h1>
                <Link to="/city">
                  Click to CityPage
                </Link>
                <Link to="/detail/1">
                  Click to DetailPage
                </Link>
            </div>
        )
    }
}

export default Home
