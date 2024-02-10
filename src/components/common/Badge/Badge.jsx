import React from "react";

const Badge = ({ status }) => {
    /**
     * @Author: fatemeh babaei
     * @Date: 2024-02-02 19:43:36
     * @Desc:  generate status of task
     */
    const statusGenerate = () => {
        switch (status) {
            case "active":
                return (
                    <span className="badge badge-green fw-700 ">active</span>
                );
            case "pending":
                return (
                    <span className="badge badge-orange fw-700 ">pending</span>
                );
            case "complete":
                return <span className="badge badge-red fw-700">complete</span>;
            default:
                return null;
        }
    };

    return <div>{statusGenerate()}</div>;
};

export default Badge;
