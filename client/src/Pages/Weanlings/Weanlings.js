import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";



class Weanlings extends Component {

    weanlings = () => {
        const weanlings = this.state.horses.filter(horse => (horse.age >= 5));
        return (
            <List>
                {weanlings.map(horse => (
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

};

export default Weanlings;