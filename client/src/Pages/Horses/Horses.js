import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadHorses())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Row>
                <h1></h1>
                <h1> Horses db</h1>
                {console.log(this.state.horses)}
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
                                            {horse.name} by {horse.sire}
                                        </strong>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>

            </Row>
        );
    }
}

export default Horses;
