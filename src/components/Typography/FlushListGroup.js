import React from "react";

const FlushListGroup = () => {
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Flush List Group</h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent">An item</li>
                    <li className="list-group-item bg-transparent">
                        A second item
                    </li>
                    <li className="list-group-item bg-transparent">
                        A third item
                    </li>
                    <li className="list-group-item bg-transparent">
                        A fourth item
                    </li>
                    <li className="list-group-item bg-transparent">
                        And a fifth one
                    </li>
                </ul>
            </div>
        </>
    );
};

export default FlushListGroup;
