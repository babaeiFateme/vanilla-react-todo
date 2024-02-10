import React from "react";

const BoradView = ({ pageTitle }) => {
    const statusGenerate = () => {
        switch (pageTitle) {
            case "active":
                return (
                    <span className="badge badge-green fw-700 d-flex">
                        active
                    </span>
                );
            case "pending":
                return (
                    <span className="badge badge-orange fw-700 d-flex">
                        pending
                    </span>
                );
            case "complete":
                return (
                    <span className="page-content badge badge-red ">
                        Complete
                    </span>
                );
            default:
                return (
                    <span className="page-content badge badge-green">
                        Tasks
                    </span>
                );
        }
    };
    return (
        <h1 className="page-title">
            {statusGenerate()}
            <hr />
        </h1>
    );
};

export default BoradView;
