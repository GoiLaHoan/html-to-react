import React from "react";
import BasicButtonGroup from "./BasicButtonGroup";
import BasicButtons from "./BasicButtons";
import BlockButtons from "./BlockButtons";
import ButtonsSize from "./ButtonsSize";
import ButtonToolbar from "./ButtonToolbar";
import CheckboxButtonGroup from "./CheckboxButtonGroup";
import IconButtons from "./IconButtons";
import IconButtonsSize from "./IconButtonsSize";
import IconTextButtons from "./IconTextButtons";
import MixedButtonGroup from "./MixedButtonGroup";
import OutlineButtons from "./OutlineButtons";
import OutlinedButtonGroup from "./OutlinedButtonGroup";
import RadioButtonGroup from "./RadioButtonGroup";
import RoundedButtons from "./RoundedButtons";
import VerticalButtonGroup from "./VerticalButtonGroup";
import VerticalButtonGroupCR from "./VerticalButtonGroupCR";

const Button = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <BasicButtons />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <OutlineButtons />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <RoundedButtons />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <ButtonsSize />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <IconButtons />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <IconButtonsSize />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <IconTextButtons />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <BlockButtons />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <BasicButtonGroup />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <MixedButtonGroup />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <OutlinedButtonGroup />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <CheckboxButtonGroup />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <RadioButtonGroup />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <ButtonToolbar />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <VerticalButtonGroup />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <VerticalButtonGroupCR />
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Button;
