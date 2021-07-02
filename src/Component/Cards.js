import React, { useState } from 'react'
import QRCode from 'qrcode.react'

import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
function Cards(props) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  const [pageNumber, setPage] = useState(1)
  const onDocumentLoad = () => {
    setPage(1)
  }
  return (
    <div className='border-4'>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      {props.data.type === 'image' ? <img src={props.data.thumbnail} alt='sorry server error' /> : <Document
        file={{
          url: `${props.data.link}`, httpHeaders: {
            'Access-Control-Request-Method': 'GET',
            "Access- Control-Allow-Origin": "*"
          }, withCredentials: true
        }}
        onLoadSuccess={onDocumentLoad}
        renderMode="canvas"
      >
        <Page pageNumber={pageNumber} />
      </Document>

      }
      <QRCode value={props.data.link} src="holder.js/100px180" />

      <h1>{props.data.name}</h1>

    </div>
  )
}

export default Cards
