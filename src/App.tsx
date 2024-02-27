import { FileUploader } from "./FileUploader"

function App() {

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h1 className='d-flex align-items-center' >XLSX Designer</h1>
        <img src="/okysoft-logo.jpg" height={150}/>
      </div>

      <FileUploader></FileUploader>

    </div>
  )
}

export default App