import React, { Components } from "react";
import API from "../utils/API";
import Jumbotron from "../Components/Jumbotron";
import { Container } from "../Components/Grid";
import Results from "../Components/Results";


class savedBook extends component {
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
                <Container>
                    <Results savedBook={this.state.savedBook} handleDelete={this.handleDelete}/>
                </Container>
            </Container>
        )
    }
}

export default savedBook;