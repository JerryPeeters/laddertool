import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNextKey, navigate, setNextAppend, setSavedInputs } from '../redux/actions';
import { SelectableOptions, TextInputOptions, InfoModal } from './';

//the object with questionData
import questions, { directAppend, textInput, select } from '../data/questionData'; 

/*
Component only gets the questionKey from the store, 
then grabs the correct data from the questionData file. 

Mapping props to state will cause it not to render. Use props.

It will render and behave differently based on the inputType specified
in the questionData.
*/

const mapStateToProps = state => ({
    currentQuestion: state.path.currentQuestion,
    ...questions[state.path.currentQuestion],
    savedInputs: state.savedInputs,
})

class Question extends React.Component {
    componentDidUpdate() {
        if (this.props.targetKey) { 
            //if the question contains a targetKey at top level, then it only has one targetKey and shouldn't contain any in the options. In which case we autoreload it.
            this.props.setNextKey(this.props.targetKey)
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        //checks if the next question in path is a directAppend, in which case it shouldn't be displayed but handled internally
        if (nextProps.inputType === directAppend) {
            this.props.setNextAppend(nextProps.append(nextProps.savedInputs));
            this.props.setNextKey(nextProps.targetKey)
            this.props.navigate();
            return false
        } else return true
    }    
    renderCorrectOptionType = () => {
        switch (this.props.inputType) {
            case select:
                return (
                    <SelectableOptions 
                        key={this.props.currentQuestion} 
                        options={this.props.options} 
                        setNextKey={this.props.setNextKey}
                        setNextAppend={this.props.setNextAppend}    
                    />
                )
            case textInput:
                return (
                    <TextInputOptions
                        key={this.props.currentQuestion}
                        options={this.props.options}
                        savedInputs={this.props.savedInputs}
                        setSavedInputs={this.props.setSavedInputs}
                        append={this.props.append}
                        setNextKey={this.props.setNextKey}
                        setNextAppend={this.props.setNextAppend}    
                    />
                )
            default:
                    return null
        }
    }
    render() { 
        //needs a key or it wont update the component
        return (
            <div style={styles.flexBox}>
                <h1>{this.props.title}</h1>
                {this.props.additionalInfo ? <InfoModal additionalInfo={this.props.additionalInfo}/> : null}
                {this.renderCorrectOptionType()}
                <button onClick={this.props.navigate}>Volgende</button>    
            </div>
    )}
}

export default connect(mapStateToProps, {setNextKey, setNextAppend, setSavedInputs, navigate})(Question);

const styles = {
    flexBox: {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: '50px',
        margin: '20px',
        minWidth: '400px',
        maxWidth: '800px',
        flexBasis: 'auto',
        flexGrow: 1,
    }
}

Question.propTypes = {
    currentQuestion: PropTypes.string,
    append: PropTypes.func,
    targetKey: PropTypes.string,
    options: PropTypes.array,
    inputType: PropTypes.string,
    title: PropTypes.string,
    additionalInfo: PropTypes.array,
};