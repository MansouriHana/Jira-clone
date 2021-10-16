import React from 'react';
import { Image, ListGroup} from 'react-bootstrap';

class TicketListComponent extends React.Component {

    render() {
        console.log(this.props.tickets[0])
        return (
            <div>
                <ListGroup >
                    {this.props.tickets.map((element, index) => (
                        <ListGroup.Item >
                            <div className="float-start">
                           <Image src="holder.js/171x180" roundedCircle />
                            </div>
                            <div value={index} className="float-start">{element.title}</div>
                            <div  className="float-end">{element.status}</div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default TicketListComponent;