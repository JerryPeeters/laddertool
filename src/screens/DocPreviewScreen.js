import React from 'react';
import { connect } from 'react-redux';
import keyMaker from '../helpers/keyMaker';

const mapStateToProps = state => ({
    doc: state.doc,
});

class DocPreviewScreen extends React.PureComponent {
  
    render() {
        return (
            <div>
                {this.props.doc.map( par => <p key={keyMaker()}>{par}</p> )}
            </div>
        )
    }
} 

export default connect(mapStateToProps)(DocPreviewScreen);