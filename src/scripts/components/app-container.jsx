import React from 'react';

export default class AppContainer extends React.Component {
    render() {
        /* jshint ignore:start */
        /* jscs: disable */
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        );
        /* jshint ignore:end */
        /* jscs: enable */
    }
}
