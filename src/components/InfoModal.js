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
                {this.props.additionalInfo.map( item => {
                    if (!item.targetKey) {
                        return <div style={styles.text}>{item.text}</div>
                    } else return (
                    <>
                        <div style={styles.text}onClick={this.getOpenModalHandler(item.targetKey)}>{item.text}</div>
                        <Modal
                            style={{overlay: styles.modalContainer, content: styles.modal}}
                            key={item.targeKey}
                            isOpen={this.state.showModal[item.targetKey]}
                            onRequestClose={this.getCloseModalHandler(item.targetKey)}
                            >
                                <button onClick={this.getCloseModalHandler(item.targetKey)} style={styles.backButton}>{'<< '}Terug</button>
                                {InfoBlocks[item.targetKey]()}
                        </Modal>
                    </>
                )})}
            </>
        )
    }
}
const styles = {
    modal: {
        backgroundColor: '#f8f9fa',
        borderRadius: 15,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: 25,
        paddingLeft: 35,
        paddingRight: 35,
        margin: '20px',
        minWidth: '400px',
        maxWidth: '800px',
    },
    modalContainer: {
    },
    text: {
        fontStyle: 'italic',
        cursor: 'pointer',
    }, 
    backButton: {
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
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        cursor: 'pointer',
    }
}

InfoModal.propTypes = {
    additionInfo: PropTypes.array,
}

