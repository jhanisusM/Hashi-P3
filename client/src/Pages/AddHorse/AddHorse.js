import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import { throws } from "assert";

class AddHorse extends React.Component {
 state = {
    horses: [],
    foundHorse: [],
    name: "",
    sire: "",
    mare: "",
    gender: "",
    age: "",
};

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.name)
        if (this.state.name && this.state.sire) {
            API.saveHorse({
                name: this.state.name,
                sire: this.state.sire,
                mare: this.state.mare,
                gender: this.state.gender,
                age: this.state.age,
            })
                .then(res => this.loadHorses())
                .catch(err => console.log(err));
        }
    };
    render() {
    return (
        <Row>
    <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Add a Horse </h1>
                    </Jumbotron>
                    <form>
                        <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Name (required)"
                        />
                        <Input
                            value={this.state.sire}
                            onChange={this.handleInputChange}
                            name="sire"
                            placeholder=" Sire (required)"
                        />
                        <Input
                            value={this.state.mare}
                            onChange={this.handleInputChange}
                            name="mare"
                            placeholder=" Mare (required)"
                        />
                        <Input
                            value={this.state.gender}
                            onChange={this.handleInputChange}
                            name="gender"
                            placeholder=" Gender (required)"
                        />
                        <Input
                            value={this.state.age}
                            onChange={this.handleInputChange}
                            name="age"
                            placeholder=" Age (required)"
                        />
                        <FormBtn
                            disabled={!(this.state.name && this.state.sire)}
                            onClick={this.handleFormSubmit}
                        >
                            Add Horse
              </FormBtn>
                    </form>
                </Col> 
                </Row>
    )
}
};

export default AddHorse;
