import React from 'react';
import PropTypes from 'prop-types';

//expects a stateRef per option that it uses to save and refernce the input. 

export default class TextInputOptions extends React.Component {
    constructor(props) {
        super(props);
        //sets empty string so inputs are controlled
        props.options.map( option => props.setSavedInputs({[option.stateRef]: ''}));
    }
    getInputHandler = key => event => {
        //handles controlled input in redux because it wants to store the values for later. 
        let update = {[key]: event.target.value}
        this.props.setSavedInputs(update); //IT WORKS!!
        if (this.props.append) this.props.setNextAppend(this.props.append({...this.props.savedInputs, ...update}));
    }
    render() {
        return (
            <>
                {this.props.options.map( option => (
                    <div style={styles.container}>
                        <span style={styles.text}>{option.text}</span>
                        <textarea
                            style={styles.inputArea}
                            placeholder='...' 
                            value={this.props.savedInputs[option.stateRef]}
                            onChange={this.getInputHandler(option.stateRef)}
                        />
                    </div>
                ))}
            </>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#17a697',
        border: 'none',
        color: 'white',
        borderRadius: 15,
        padding: 25,
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 18,
        marginBottom: 20,
        alignSelf: 'flex-start',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    text: {
        marginBottom: 30,
        flexGrow: 1,
    }, 
    inputArea: {
        minWidth: 330,
        minHeight: 150,
        flexGrow: 1,
        padding: 10,
        border: 'none',
        borderRadius: 15,
        outline: 'none',
        resize: 'none', //removes resize button
        overflow: 'auto', //removes IE scrollbar
        fontSize: 18,
        lineHeight: 1.6,
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif`,
        color: '#373c3e',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
    }
}

TextInputOptions.propTypes = {
    options: PropTypes.array,
    savedInputs: PropTypes.object,
    setNextKey: PropTypes.func,
    setNextAppend: PropTypes.func,
    setSavedInputs: PropTypes.func,
    append: PropTypes.func,
};