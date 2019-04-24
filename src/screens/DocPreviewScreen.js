import React from 'react';
import { connect } from 'react-redux';
import keyMaker from '../helpers/keyMaker';

const mapStateToProps = state => ({
    doc: state.doc,
});

class DocPreviewScreen extends React.PureComponent {
  
    placeHolder = () => {
        if (this.props.map) {
            return this.props.doc.map( par => <p key={keyMaker()}>{par}</p> )
        } else {
            return (
            <p>
                .
                ...
                ....
            </p>
            )
        }
    }

    render() {
        return (
            <div id='doc' style={styles.flexBox}>
                <h1>Document preview</h1>
                {this.props.doc.map( par => <p key={keyMaker()}>{par}</p> )}
            </div>
        )
    }
} 

export default connect(mapStateToProps)(DocPreviewScreen);

const styles = {
    flexBox: {
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: '50px',
        margin: '20px',
        minWidth: '400px',
        maxWidth: '800px',
        flexBasis: 'auto',
        flexGrow: 1,
    }
}