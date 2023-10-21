import React from "react";
import lighthouse from '@lighthouse-web3/sdk';
import PDFViewer from "./PDFViewer";

function App() {

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFile = async(file) =>{
    // Push file to lighthouse node
    // Both file and folder are supported by upload function
    // Third parameter is for multiple files, if multiple files are to be uploaded at once make it true
    // Fourth parameter is the deal parameters, default null
    const output = await lighthouse.upload(file, "baefe75f.10d4e4566fc04bd6ae0abdc0f5b64a4a", false, null, progressCallback);
    console.log('File Status:', output.data.Hash);
    /*
      output:
        data: {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
  }
  const getUploads = async() =>{
    /*
      @param {string} apiKey - Your API key.
    */
    const response = await lighthouse.getUploads("baefe75f.10d4e4566fc04bd6ae0abdc0f5b64a4a")
    console.log(response)
    
    /* Sample response
      {
        data: {
          fileList: [
            {
              publicKey: '0x4e6d5be93ab7c1f75e30dd5a7f574f42f675eed3',
              fileName: 'sample.txt',
              mimeType: 'text/plain',
              txHash: '',
              status: 'queued',
              createdAt: 1691087810426,
              fileSizeInBytes: '14',
              cid: 'QmQK9V46b4vpNUd7pe7EcCqihBEmcSLH4NVNWukLJhGzgN',
              id: '1b2623bd-64ca-4434-8619-24c9a1eca840',
              lastUpdate: 1691087810426,
              encryption: false
            }
          ]
        }
      }
    */
  }

  return (
    <div className="App">
      <input onChange={e=>uploadFile(e.target.files)} type="file" accept = ".pdf"/>
      <button onClick={getUploads}>Get Uploads</button>
      <PDFViewer />
    </div>
  );
}

export default App;



