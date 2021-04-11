import React from 'react';
import { Button,Form,Container,Col,Row,Toast } from 'react-bootstrap';



class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
            value : '',
            showA : true
        }
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onSubmitButton(e){
        e.preventDefault();
        let {list, value} =this.state;
        list.push(value);
        this.setState(prevState => {
            return {
                ...prevState,
              list : list,
              value: ''
            };
        });
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    render(){
        const {list} = this.state;
        const groupList = list.map((data, index) => {
            return  (
                <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong  key={index} className="mr-auto">To-Do</strong>
                </Toast.Header>
                <Toast.Body>{data}</Toast.Body>
                </Toast>
            )
        });
        return(
            <Container>
                <Form>    
                    <Row>
                    <Col>
                <Form.Control type="text" value={this.state.value} onChange={this.onChangeValue} placeholder="Text" />
                    </Col>
                    <Col>
                <Button variant="primary" onClick={this.onSubmitButton} type="button">Submit</Button>
                    </Col>
                    </Row>
                </Form>
                
                <Row>
                {groupList}
                </Row>
            </Container>
        )
    }
}

export default List;