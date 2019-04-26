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
    nextTargetKey: state.next.targetKey,
})

class Question extends React.Component {
    componentDidMount() {
        document.addEventListener('keypress', this.handleSubmit);
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
            this.props.setNextAppend(nextProps.append(nextProps.savedInputs));
            this.props.setNextKey(nextProps.targetKey)
            this.props.navigate();
            return false
        } else return true
    }   
    handleSubmit = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.props.navigate();
        }

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
                <div>
                    <h1 style={styles.questionTitle}>{this.props.title}</h1>  
                </div>
                    {this.props.additionalInfo ? <InfoModal additionalInfo=
                    {this.props.additionalInfo}/> : null}
                <div style={styles.optionsBox}>                    
                    {this.renderCorrectOptionType()}
                </div>
                <div style={styles.buttonRow}>
                    <button style={this.props.nextTargetKey ? styles.nextButtonReady : styles.nextButtonWaiting} onClick={this.props.navigate}>Verder >></button>
                </div>  
            </div>
    )}
}

export default connect(mapStateToProps, {setNextKey, setNextAppend, setSavedInputs, navigate})(Question);

const styles = {
    flexBox: {
        backgroundColor: '#f8f9fa',
        borderRadius: 15,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: 25,
        paddingLeft: 35,
        paddingRight: 35,
        margin: '20px',
        minWidth: '400px',
        maxWidth: '800px',
        flexBasis: 'auto',
        flexGrow: 1,
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    questionTitle: {
        marginTop: 0,
        fontSize: 34,
    },
    optionsBox: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    nextButtonWaiting: {
        backgroundColor: 'white',
        border: 'none',
        color: 'gray',
        borderRadius: 15,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        alignSelf: 'flex-end',
        marginTop: 20,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    nextButtonReady: {
        backgroundColor: '#638ca6',
        border: 'none',
        color: 'white',
        borderRadius: 15,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        alignSelf: 'flex-end',
        marginTop: 20,
        cursor: 'pointer',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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