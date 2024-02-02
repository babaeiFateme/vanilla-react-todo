import React from "react";

const Badge = ({ status }) => {
    /**
     * @Author: fatemeh babaei
     * @Date: 2024-02-02 19:43:36
     * @Desc:  generate status of task
     */
    const statusGenerate = () => {
        switch (status) {
            case 0:
                return <span className="badge badge-success">active</span>;
            case 1:
                return <span className="badge badge-warning">pending</span>;
            case 2:
                return <span className="badge badge-danger">complete</span>;
            default:
                return null;
        }
    };

    return <div>{statusGenerate()}</div>;
};

export default Badge;
