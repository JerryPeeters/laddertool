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
                    <div>
                        <span>{option.text}</span>
                        <input
                            type='text' 
                            value={this.props.savedInputs[option.stateRef]}
                            onChange={this.getInputHandler(option.stateRef)}
                        />
                    </div>
                ))}
            </>
        )
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