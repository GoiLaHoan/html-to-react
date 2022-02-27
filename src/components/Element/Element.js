import React from "react";
import BasicAccordion from "./BasicAccordion";
import BasicAlerts from "./BasicAlerts";
import BasicNavsTabs from "./BasicNavsTabs";
import FlushAccordion from "./FlushAccordion";
import IconsDismissingAlerts from "./IconsDismissingAlerts";
import PillsNavsTabs from "./PillsNavsTabs";
import ProgressBar from "./ProgressBar";
import VerticalNavsTabs from "./VerticalNavsTabs";

const Element = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <BasicAlerts />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <IconsDismissingAlerts />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <BasicAccordion />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <FlushAccordion />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <BasicNavsTabs />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <PillsNavsTabs />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <VerticalNavsTabs />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <ProgressBar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Element;
