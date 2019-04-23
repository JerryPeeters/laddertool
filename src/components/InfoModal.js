import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { InfoBlocks } from './';

export default class InfoModal extends React.Component {
    constructor(props) {
        super(props);
        //have to set showModal per item before setting state. Mapping the array produces another Array, but we want an Object
        let showModal = {}
        props.additionalInfo.forEach( item => {
            showModal[item.targetKey] = false
        })
        this.state = {
            showModal,
        }
    }
    getOpenModalHandler = key => () => this.setState({showModal: {[key]: true}})
    getCloseModalHandler = key => () => this.setState({showModal: {[key]: false}})

    render() {
        if (!this.props.additionalInfo) return null
        return(
            <>
                {this.props.additionalInfo.map( item => (
                    <>
                        <span onClick={this.getOpenModalHandler(item.targetKey)}>{item.text}</span>
                        <Modal
                            key={item.targeKey}
                            isOpen={this.state.showModal[item.targetKey]}
                            onRequestClose={this.getCloseModalHandler(item.targetKey)}
                            >
                                <button onClick={this.getCloseModalHandler(item.targetKey)}>Terug</button>
                                {InfoBlocks[item.targetKey]()}
                        </Modal>
                    </>
                ))}
            </>
        )
    }
}

InfoModal.propTypes = {
    additionInfo: PropTypes.array,
}

