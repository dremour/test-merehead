import React, {useState ,useEffect} from 'react';
import { requestUsers } from "./redux/actions";
import { connect } from "react-redux";
import { Container, Card, Row, Col, Pagination } from 'react-bootstrap';

function App(props) {
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() =>{
        requestUsers()
    }, []);

    const { users, isLoaded, isError, requestUsers} = props;

    // Logic for pagination
    const usersPerPage = 5;
    const pagesCount = Math.ceil(users.length / usersPerPage);
    const indexOfLastUserOnPage = currentPage * usersPerPage;
    const indexOfFirstUserOnPage = indexOfLastUserOnPage - usersPerPage;
    const currentPageUsers = users.slice( indexOfFirstUserOnPage, indexOfLastUserOnPage );

    let pageNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }

    const renderPaginationItems = () => (
        pageNumbers.map(number => (
            <Pagination.Item
                onClick={() => setCurrentPage(number)}
                key={number}
                active={number === currentPage}
            >
                {number}
            </Pagination.Item>
        ))
    );

    const renderUserCards = () => (
        currentPageUsers.map(user => (
            <Col key={user.id} xs={6}>
                <Card className='mb-3'>
                    <Card.Body>
                        <Card.Title>{user.name} {user.surname}</Card.Title>
                        <Card.Text>
                            {user.desc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))
    );

    return (
        <Container className='mt-5'>
            <Row className="justify-content-start">
                 { isLoaded ? renderUserCards() : isError ? 'Error, Try again later' : 'Loading...'}
            </Row>
            <Row className="justify-content-center">
                <Pagination>
                    {renderPaginationItems()}
                </Pagination>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => ({
    isLoaded: state.isLoaded,
    isError: state.isError,
    users: state.users,
});

const mapActionsToProps = {
    requestUsers
};

export default connect(mapStateToProps, mapActionsToProps)(App);
