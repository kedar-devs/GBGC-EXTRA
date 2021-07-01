import React, { useState } from 'react'
import axios from 'axios'
import QRCode from 'qrcode.react'
import styles from './form.css'
import {Container, Form,Button} from 'react-bootstrap'
function form() {
    const [file, setFile] = useState()
    const [qrlink, setLink] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        console.log(file)
        formData.append('file',file)
        console.log('in here')
        axios.post('https://gbgcapp.herokuapp.com/file/side/add', formData)
            .then(result => {
                console.log(result.data)
                setLink(result.data.link)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className={styles.flexer}>
            <Container fluid>
            <div className={styles.splitScreen}>
                <div className={styles.topPane}>
                <Form style={{alignContent:'center'}}>
                    <Form.Group>
                        <input type="file" name="file"  onChange={(e)=>setFile(e.target.files[0])}/>
                    </Form.Group>
                    <button  onClick={(e)=>onSubmit(e)} className='border-2'>
                    Submit
                    </button>
                </Form>
                </div>
                <div className={styles.bottomPane}>
                {qrlink?<QRCode value={qrlink} />:<div></div>}
                </div>
            </div>
            </Container>
        </div>
    )
}

export default form
