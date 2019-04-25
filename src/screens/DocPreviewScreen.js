import React from 'react';
import { connect } from 'react-redux';
import keyMaker from '../helpers/keyMaker';

const mapStateToProps = state => ({
    doc: state.doc,
});

class DocPreviewScreen extends React.PureComponent {
  
    placeHolder = () => {
        if (this.props.doc) {
            return this.props.doc.map( par => <p key={keyMaker()}>{par}</p> )
        } else {
            return 
        }
    }

    render() {
        return (
            <div id='doc' style={styles.flexBox}>
                <h1 style={styles.title}>Document preview</h1>
                {this.placeHolder()}
            </div>
        )
    }
} 

export default connect(mapStateToProps)(DocPreviewScreen);

const styles = {
    title: {
        marginTop: 0,
    },
    flexBox: {
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: 15,
        padding: 25,
        paddingLeft: 35,
        paddingRight: 35,
        margin: '20px',
        minWidth: '400px',
        maxWidth: '800px',
        minHeight: '300px',
        flexBasis: 'auto',
        flexGrow: 1,
        alignSelf: 'flex-start',
    }
}