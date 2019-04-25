import React from 'react';
import PropTypes from 'prop-types';
import keyMaker from '../helpers/keyMaker';

//only used for questions with inputType: select

export default class SelectableOptions extends React.Component {
    state = {
        //adds props.options to state because it needs to add keys and selected: false
        options: this.props.options.map( (option) => {
            return {...option, id: keyMaker(), selected: false}
            }),
    }
    handleSelect = (selectedId, targetKey, append) => {
        if (targetKey === 'clickToCopy') {
            //copy the preview, works for IE, thanks SO
            let range = document.createRange();
            range.selectNode(document.getElementById("doc"));
            window.getSelection().removeAllRanges(); // clear current selection
            window.getSelection().addRange(range); // to select text
            document.execCommand("copy");
            window.getSelection().removeAllRanges();// to deselect
        };
        
        if (targetKey) this.props.setNextKey(targetKey); //preload the selection in store if it's there
        if (append) this.props.setNextAppend(append());
        
        this.setState(prevState => ( //set highlightflag
            {
                options: prevState.options.map( option => {
                    if (option.id === selectedId) {
                        return {...option, id: keyMaker(), selected: true}
                    } 
                    else if (option.selected && option.id !== selectedId) { 
                        //forces update on old selected
                        return {...option, id: keyMaker(), selected: false}
                    }
                    else return {...option, selected: false}
                    })
            }))
    }
    render() {
        return (
            <>
                {this.state.options.map( option => (
                    <span 
                        key={option.id}
                        style={option.selected ? styles.highlight : styles.option} 
                        onClick={() => this.handleSelect(option.id, option.targetKey, option.append)}>
                    {option.text}
                    </span>
                ))}
            </>
    )}
}

const styles = {
    highlight: {
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
    option: {
        backgroundColor: 'white',
        border: 'none',
        borderRadius: 15,
        padding: 25,
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 18,
        marginBottom: 20,
        alignSelf: 'flex-start',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
};

SelectableOptions.propTypes = {
    options: PropTypes.array,
    setNextKey: PropTypes.func,
    setNextAppend: PropTypes.func,
    append: PropTypes.func,
};