import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    name:"",
    file:"",
    fileArray:[]

  })

  // formData 
  // FormData();

  const uploadData=()=>{
  // FormData

  const formdata=new FormData();
  formdata.append("file",state.file) ;
  formdata.append("name",state.name);

  formdata.append("filesarray",state.fileArray);
 


  const config={
    headers:{
      "content-type":"multipart/form-data"
    }
  }

axios.post("http://localhost:8080/upload",formdata,config).then(response=>{
  console.log(response.data)
}).catch(err=>{
  console.log(err);
})

  }

  const handleFileChange=(event)=>{
    console.log(event.target.files)
    setState({...state,file:event.target.files[0]});

  }

  const handleChange=(event)=>{

    setState({...state,name:event.target.value});

  }

  const handleMultipleFileChange=(event)=>{
    setState({...state,fileArray:event.target.files});


  }

  return (
    <div className="App">

      <input type="text"   onChange={handleChange}/>

      <input type="file"  onChange={handleFileChange} />

      <input type="file" multiple onChange={handleMultipleFileChange} />



      <button onClick={uploadData}>

        Upload
      </button>
     
    </div>
  )
}

export default App
