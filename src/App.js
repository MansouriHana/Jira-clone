import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import BoardComponent from './components/board.component';
import TicketListComponent from './components/ticket-list.component';
import jiraService from './services/jira.service';
class App extends React.Component {
  constructor() {
    super();
    this.state = { tickets: [], loading: false };
    this.getTicketList = this.getTicketList.bind(this);
  }
  getTicketList() {
    jiraService.getTasks().then(res => {
      res.data.forEach(element => {
        element.status = "TODO";
      });
      this.setState({ tickets: res.data, loading: true });
    }, err => {
      console.log("opps, error is accured !!")
    });
  }
  async componentDidMount() {
    this.getTicketList();
  }
  render() {
    const { tickets, loading } = this.state;
    console.log(tickets)
    if (loading === false) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div>
          <Container>
            <div>Ticket List </div>
            <Row id="list-row">
              <TicketListComponent tickets={tickets} />
            </Row>
            <div>Board </div>
            <Row id="board-row">
              <BoardComponent />
            </Row>
          </Container>
        </div>
      );
    }

  }

}

export default App;
