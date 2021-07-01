import React from 'react'
import QRCode  from 'qrcode.react'
function Cards(props) {
    return (
        <div className='border-4'>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <QRCode value={props.data.link} src="holder.js/100px180" />
                <h1>{props.data.name}</h1>
     
        </div>
    )
}

export default Cards
