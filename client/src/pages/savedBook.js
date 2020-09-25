import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../Component/Jumbotron";
import { Container } from "../Component/Grid";
import Results from "../Component/Results";

class savedBook extends Component {
    // Set the state
    state = {
        savedBook: []
    };

    // Grab all books saved to the database when this component mounts
    componentDidMount() {
        API.getBooks()
        .then(res => this.setState({ savedBook: res.data }))
        .catch(err => console.log(err))
    };

    // Remove book by Id
    handleDelete = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render () {
        return (
            <Container>
                <Jumbotron/>
                <Results savedBook={this.state.savedBook} handleDelete={this.handleDelete}/>
            </Container>
        )
    }
}

export default savedBook;