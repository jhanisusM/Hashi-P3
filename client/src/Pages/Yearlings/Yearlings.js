import React from 'react';
import API from "../../utils/API";

class Yearlings extends React.Component {

    state = {
        horses: [],
        name: "",
        sire: "",
        mare: "",
        gender: "",
        age: ""
    };

    componentDidMount() {
        this.loadHorses();
    }

    loadHorses = () => {
        API.getHorses()
            .then(res => {
                console.log(res)
                this.setState({
                    horses: res.data.filter(horse => (horse.age < 5))
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.horses.map(horse => {
                    return (
                        <div>
                            <h2>Name: {horse.name}</h2>
                            <h2>Age: {horse.age}</h2>
                            <h2>Sire: {horse.sire}</h2>
                            <h2>Mare: {horse.mare}</h2>
                            <h2>Gender: {horse.gender}</h2>
                            <h2>Age: {horse.age}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }

}


export default Yearlings;