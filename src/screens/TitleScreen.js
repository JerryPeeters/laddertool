import React from 'react';

export default (props) => {
    return (
        <div style={styles.flexBox}>
            <div style={styles.textBox}>
                <span>
                    Doc Builder
                </span>
            </div>
        </div>
    )    
}

const styles = {
    flexBox: {
        flexBasis: 'auto',
        flexGrow: 1,
        backgroundColor: 'black',
        marginBottom: 15,
    },
    textBox: {
        margin: '20px',
        alignSelf: 'flex-start',
        padding: 30,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 25,
        width: 450,
        fontWeight: 'bold',
        fontSize: 50,
        color: '#d93240',
        borderBottom: '5px #e0e0e0',
        borderLeft: '5px #e0e0e0',
    }
}

