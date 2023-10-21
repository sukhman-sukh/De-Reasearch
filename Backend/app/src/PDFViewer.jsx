import React, { useState } from 'react';

function PDFViewer() {
  const [pdfUrl, setPdfUrl] = useState('https://gateway.lighthouse.storage/ipfs/QmWtYcJGw2Co7qXfX81k2PuVQ4m6QQAESmhs5B2775AUrA'); // Replace with your PDF URL
  const [pdfLoaded, setPdfLoaded] = useState(false);

  const loadPdf = () => {
    fetch(pdfUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(pdfBlob => {
        const objectURL = URL.createObjectURL(pdfBlob);
        setPdfUrl(objectURL);
        setPdfLoaded(true);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  return (
    <div>
      <h1>Display PDF from URL</h1>
      <button onClick={loadPdf}>Load PDF</button>
      {pdfLoaded ? (
        <iframe title="PDF Viewer" src={pdfUrl} width="100%" height="500"></iframe>
      ) : null}
    </div>
  );
}

export default PDFViewer;
