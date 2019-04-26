import React from 'react';

export default (props) => {
    return (
        <div style={styles.flexBox}>
            <div style={styles.textBox}>
                <a href='/' style={styles.cleanLink}>
                    <span>
                        Doc Builder
                    </span>
                </a>
            </div>
        </div>
    )    
}

const styles = {
    flexBox: {
        flexBasis: 'auto',
        flexGrow: 1,
        marginBottom: 15,
    },
    cleanLink: {
        color: 'inherit',
        textDecoration: 'inherit',
    },
    textBox: {
        margin: '20px',
        color: 'white',
        alignSelf: 'flex-start',
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 25,
        width: 450,
        fontWeight: 'bold',
        fontSize: 50,
        borderBottom: '5px #e0e0e0',
        borderLeft: '5px #e0e0e0',
    }
}

