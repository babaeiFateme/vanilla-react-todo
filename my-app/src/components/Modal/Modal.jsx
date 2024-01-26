const Modal = ({ children, isOpen, setIsModalOpen, title }) => {
    return (
        <>
            <div className={`modal ${isOpen ? "d-block" : "d-none"}`}>
                <div className="modal-header">
                    <div className="title">{title}</div>
                    <span
                        className="close cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    >
                        &times;
                    </span>
                </div>
                <div className="modal-content">{children}</div>
            </div>
            <div
                className={`overlay cursor-pointer ${isOpen ? "d-block" : "d-none"}`}
                onClick={() => setIsModalOpen(false)}
            ></div>
        </>
    );
};

export default Modal;
