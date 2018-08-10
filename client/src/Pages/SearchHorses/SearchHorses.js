import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import { throws } from "assert";
import "./SearchHorses.css";



class SearchHorses extends Component {

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
                {console.log(res)
                this.setState({ horses: res.data, foundHorse: [], name: "", sire: "", mare: "", gender: "", age: "" })
                })
            .catch(err => console.log(err));
    };

    searchResults = () => {
        const search = this.state.horses.filter(horse => (horse.age >= 0));
        return (
            <List>
                {search.map(horse => (
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
            <div id="searchformcontainder">
                <form id="searchform">

                    <label htmlFor="search">Search</label>
                    <input type="text" name="email" id="search" placeholder="Horse Name" />

                    <button>Submit</button>
                </form>
                <div>
                    {this.searchResults()}
                </div>

            </div>
        );
    }



};

export default SearchHorses;