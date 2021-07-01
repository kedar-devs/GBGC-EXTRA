import React, { useState, useEffect } from 'react'
import Cards from '../Cards'
import axios from 'axios'
import { Row, Col, Container } from 'react-bootstrap'
function Display() {
    const [data, setDate] = useState([])
    useEffect(() => {
        axios.get('https://gbgcapp.herokuapp.com/file/side/get')
            .then(result => {
                console.log(result.data)
                setDate(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const CardDisplay = () => {
        return data.map(qrdata => {
            console.log('in here',qrdata)
            return <Cards data={qrdata} key={qrdata._id} />
        })
    }
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={1} md={3} lg={4}>
                        {CardDisplay()}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Display
