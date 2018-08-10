// import React, { Component } from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import DeleteBtn from "../../components/DeleteBtn";
// import { throws } from "assert";


// class SearchHorses extends Component {

//     state = {
//         horses: [],
//         foundHorse: [],
//         name: "",
//         sire: "",
//         mare: "",
//         gender: "",
//         age: "",
//     };

//     componentDidMount() {
//         this.loadHorses();
//     }

//     loadHorses = () => {
//         API.getHorses()
//             .then(res =>
//                 this.setState({ horses: res.data, foundHorse: [], name: "", sire: "", mare: "", gender: "", age: "" })
//             )
//             .catch(err => console.log(err));
//     };

//     searchResults = () => {
//         const search = this.state.horses.filter(horse => (horse.age >= 5));
//         return (
//             <List>
//                 {weanlings.map(horse => (
//                     <ListItem key={horse._id}>
//                         <Link to={"/horses/" + horse._id}>
//                             <strong>
//                                 {horse.name} by {horse.sire}
//                             </strong>
//                         </Link>
//                         <DeleteBtn onClick={() => this.deleteHorse(horse._id)} />
//                     </ListItem>
//                 ))}
//             </List>

//         )
//     };



 
//         render() {
//             return (
//               <Form>
//                 <FormGroup>
//                   <Label for="exampleEmail">Text</Label>
//                   <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
//                 </FormGroup>
//                 <Button>Submit</Button>
//               </Form>
//             );
//           }
        


// };

// export default SearchHorses;