import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import { throws } from "assert";

class AllHorses extends React.Component {
    state = {
        horses: [],
        foundHorse: [],
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
                this.setState({ horses: res.data, foundHorse: [], name: "", sire: "", mare: "", gender: "", age: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return(
            <Row>
                
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
            </Row>
        )
    }

}

export default AllHorses;