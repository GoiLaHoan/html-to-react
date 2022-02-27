import React from "react";
import BasicForm from "./BasicForm";
import CheckRadioSwitch from "./CheckRadioSwitch";
import FileInput from "./FileInput";
import FloatingLabel from "./FloatingLabel";
import HorizontalForm from "./HorizontalForm";
import InputGroup from "./InputGroup";
import Select from "./Select";
import Sizing from "./Sizing";

const Form = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <BasicForm />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <HorizontalForm />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <FloatingLabel />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <FileInput />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <Select />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <CheckRadioSwitch />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <InputGroup />
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <Sizing />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
