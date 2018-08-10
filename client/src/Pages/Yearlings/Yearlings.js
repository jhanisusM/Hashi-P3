import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import { throws } from "assert";

class Yearlings extends React.Component{
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
    };

    loadHorses = () => {
        API.getHorses()
        .then(res => {
            console.log(res)

            this.setState({
                horses: res.data.filter(horse => (horse.age > 2))
            })
        })
        .catch(err => console.log(err))
    }


    yearlings = () => {
        const yearlings = this.state.horses.filter(horse => (horse.age < 2));
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
            <Container>
            <Row>


            <Col size="md-12">
                     <br />
                    <br />
                    <br />
                <Jumbotron>
                    <h1>Yearlings</h1>
                </Jumbotron>
                {this.state.horses ? (<div>{this.yearlings()}</div>) : (
                    <h3>No Results to Display</h3>
                )}
            </Col> 
            </Row>
            </Container>
        )
    }

}
export default Yearlings;