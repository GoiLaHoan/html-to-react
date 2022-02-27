import React from "react";
import BackgroundColors from "./BackgroundColors";
import BasicListGroup from "./BasicListGroup";
import Blockquotes from "./Blockquotes";
import DescriptionList from "./DescriptionList";
import DisplayHeadings from "./DisplayHeadings";
import FlushListGroup from "./FlushListGroup";
import Headings from "./Headings";
import TextColors from "./TextColors";
import TextElements from "./TextElements";
import UnstyledList from "./UnstyledList";

const Typography = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <BackgroundColors />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <TextColors />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <Headings />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <DisplayHeadings />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <TextElements />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <Blockquotes />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <UnstyledList />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <DescriptionList />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <BasicListGroup />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <FlushListGroup />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Typography;
