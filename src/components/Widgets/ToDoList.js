import React from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const ToDoList = () => {
    return (
        <>
            <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">To Do List</h6>
                    <Link to="#">Show All</Link>
                </div>
                <div className="d-flex mb-2">
                    <FormControl
                        placeholder="Enter task"
                        className="bg-transparent"
                    />

                    <Button variant="primary" className="ms-2">
                        Add
                    </Button>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                    <Form.Check aria-label="option 1" className="m-0" />
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <span>Short task goes here...</span>
                            <Button variant="light" size="sm">
                                <i className="fa fa-times"></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                    <Form.Check aria-label="option 1" className="m-0" />
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <span>Short task goes here...</span>
                            <Button variant="light" size="sm">
                                <i className="fa fa-times"></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                    <Form.Check
                        aria-label="option 1"
                        defaultChecked
                        className="m-0"
                    />

                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <span>
                                <del>Short task goes here...</del>
                            </span>
                            <Button
                                variant="light"
                                className="text-primary"
                                size="sm"
                            >
                                <i className="fa fa-times"></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                    <Form.Check aria-label="option 1" className="m-0" />
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <span>Short task goes here...</span>
                            <Button variant="light" size="sm">
                                <i className="fa fa-times"></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center pt-2">
                    <Form.Check aria-label="option 1" className="m-0" />
                    <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <span>Short task goes here...</span>
                            <Button variant="light" size="sm">
                                <i className="fa fa-times"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoList;
