import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import './card.css'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';

function Cards(props) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const [pageNumber, setPage] = useState(1)
    const onDocumentLoad = () => {
        setPage(1)
    }
    return ( 
        <div className = 'border-4 border-black mt-2 justify-center w-full' style={{width:'350px'}} >
             { /* <Card.Img variant="top" src="holder.js/100px180" /> */ }
    { props.data.type === 'image' ? < img src = { props.data.thumbnail } alt = 'sorry server error' / >:<div className='overall'> < Document
            file = { props.data.link }
            className='h-1/2 w-2/5'
            onLoadSuccess = { onDocumentLoad } >

                <Page pageNumber = { pageNumber } height={450} width={450} >

                </Page> 

                </Document >
                <div className="QrStacker">
                <QRCode value = { props.data.link }
            src = "holder.js/100px180"  className='QrStacker' size={50}/> 
            </div>
                </div>
        } { /* <QRCode value={props.data.link} src="holder.js/100px180" /> */ }

        <h1 > { props.data.name } </h1>

        </div>
    )
}

export default Cards