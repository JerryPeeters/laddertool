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
                        style={option.selected ? styles.highlight : null} 
                        onClick={() => this.handleSelect(option.id, option.targetKey, option.append)}>
                    {option.text}
                    </span>
                ))}
            </>
    )}
}

const styles = {
    highlight: {
        backgroundColor: 'blue',
        color: 'white',
    }
};

SelectableOptions.propTypes = {
    options: PropTypes.array,
    setNextKey: PropTypes.func,
    setNextAppend: PropTypes.func,
    append: PropTypes.func,
};