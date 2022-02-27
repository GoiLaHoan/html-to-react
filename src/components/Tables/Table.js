import React from "react";
import AccentedTable from "./AccentedTable";
import BasicTable from "./BasicTable";
import BorderedTable from "./BorderedTable";
import ColorTable from "./ColorTable";
import HoverableTable from "./HoverableTable";
import ResponsiveTable from "./ResponsiveTable";
import TableWithoutBorder from "./TableWithoutBorder";

const Table = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <BasicTable />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <AccentedTable />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <HoverableTable />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <ColorTable />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <BorderedTable />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <TableWithoutBorder />
                    </div>
                    <div className="col-12">
                        <ResponsiveTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
