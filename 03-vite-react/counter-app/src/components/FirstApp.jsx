import PropTypes from 'prop-types';

export const FirstApp = ({ name, msg, send }) => {
    return (
        <>
            <p>{ send }</p>
            
            <h1>{ name }</h1>
            <p>{ msg }</p>
        </>
        
         
    )
}

FirstApp.propTypes ={
    name: PropTypes.string.isRequired,
    msg: PropTypes.string
}
FirstApp.defaultProps = {
    name: 'No hay nombre',
    msg: 'Sin mensje',
    send: 'Carolina dice: '
}