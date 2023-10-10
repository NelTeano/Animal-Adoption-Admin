import PropTypes from 'prop-types';

export default function Modal({ isOpen, closeModal, children }) {

    const modalOverlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    };
    
    const modalStyle = {
        backgroundColor: "rgb(173, 167, 255)",
        padding: "80px",
        borderRadius: "5px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        position: "relative",
        zIndex: 1001,
        width: "80%",
        maxWidth: "800px",
        textAlign: "center",
    };
    
    const closeButtonStyle = {
        position: "absolute",
        top: "0px",
        right: "15px",
        background: "none",
        border: "none",
        fontSize: "40px",
        cursor: "pointer",
        padding: "0",
        outline: "none",
    };    

    return (
        isOpen && 
            <>
            {/* {isAuthenticated ? ( */}
        <div style={modalOverlayStyle}>
            <div style={modalStyle}>
                    <button style={closeButtonStyle} onClick={closeModal}>
                        &times;
                    </button>
            {children}
            </div>
        </div>
        {/* ) : (
            <div style={modalOverlayStyle}>
                <div style={modalStyle}>
                    <Link
                        to='/'
                    >
                        <button style={closeButtonStyle} onClick={closeModal}>
                            &times;
                        </button>
                    </Link>
                {children}
                </div>
            </div>
        ) } */}
        </>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};
