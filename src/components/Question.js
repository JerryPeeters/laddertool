import React from 'react';
import questions, {directAppend} from '../data/questionData'; //the object with questionData
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNextKey, navigate, setNextAppend } from '../redux/actions';
import { SelectableOptions } from './';

/*
Component only gets the questionKey from the store, 
then grabs the correct data from the questionData file. 

Mapping props to state will cause it not to render. Use props.

It will render and behave differently based on the inputType specified
in the questionData.
*/

const mapStateToProps = state => ({
    currentQuestion: state.path.currentQuestion,
    ...questions[state.path.currentQuestion]
})

class Question extends React.Component {
    state = {
        woningAantal: 9,
        planNaam: 'testplan'
    }
    componentDidUpdate() {
        if (this.props.targetKey) { 
            //if the question contains a targetKey at top level, then it only has one targetKey and shouldn't contain any in the options. In which case we autoreload it.
            this.props.setNextKey(this.props.targetKey)
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        //checks if the next question in path is a directAppend, in which case it shouldn't be displayed but handled internally
        if (nextProps.inputType === directAppend) {
            this.props.setNextAppend(nextProps.append(this.state));
            this.props.setNextKey(nextProps.targetKey)
            this.props.navigate();
            return false
        } else return true
    }
    render() { 
        //needs a key or it wont update the component
        return (
            <>
                <h1>{this.props.title}</h1>
                <SelectableOptions 
                    key={this.props.currentQuestion} 
                    options={this.props.options} 
                    setNextKey={this.props.setNextKey}
                    setNextAppend={this.props.setNextAppend}    
                />
                <button onClick={this.props.navigate}>Volgende</button>    
            </>
    )}
}

export default connect(mapStateToProps, {setNextKey, setNextAppend, navigate})(Question);

Question.propTypes = {
    currentQuestion: PropTypes.string,
    append: PropTypes.func,
    targetKey: PropTypes.string,
    options: PropTypes.array,
    inputType: PropTypes.string,
    title: PropTypes.string,
    additionalInfo: PropTypes.array,
};