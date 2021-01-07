import React, {Component} from 'react';

/*
catch Errors when trying to get subs and fail or set bad values to the array of subs reddits
 */

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError){
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.children
    }

}

export default ErrorBoundry;
