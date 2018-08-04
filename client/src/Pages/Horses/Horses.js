import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";


class Horses extends Component {
    state = {
        Horses: [],
        name: "",
        sire: "",
        mare: "",
        gender: "",
        age: "",
    };

    componentDidMount() {
        this.loadHorses();
    }

    loadHorses = () => {
        API.getHorses()
            .then(res =>
                this.setState({ horses: res.data, name: "", sire: "", mare: "", gender: "", age: "" })
            )
            .catch(err => console.log(err));
    };

    deleteHorse = id => {
        API.deleteHorse(id)
            .then(res => this.loadHorses())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
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





    yearlings = () => {
        const yearlings = this.state.horses.filter(horse => (horse.age < 5));
        return (
            <List>
                {yearlings.map(horse => (
                    <ListItem key={horse._id}>
                        <Link to={"/horses/" + horse._id}>
                            <strong>
                                {horse.name} by {horse.sire}
                            </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteHorse(horse._id)} />
                    </ListItem>
                ))}
            </List>
        )
    };


    render() {
        return (
            <Row>
                <h1></h1>
                <h1> Horses db</h1>
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
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Horses dB</h1>
                    </Jumbotron>
                    {this.state.horses ? (
                        <List>
                            {this.state.horses.map(horse => (
                                <ListItem key={horse._id}>
                                    <Link to={"/horses/" + horse._id}>
                                        <strong>
                                            {horse.name} by {horse.sire} {horse.age}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteHorse(horse._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>

                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Weanlings</h1>
                    </Jumbotron>
                    {this.state.horses ? ( <div>{this.weanlings()}</div>) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Yearlings</h1>
                    </Jumbotron>
                    {this.state.horses ? ( <div>{this.yearlings()}</div>) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>

            </Row>
        );
    }
}

export default Horses;
