import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [image ,setImage] = React.useState(null);
  const [path ,setPath] = React.useState([]);

  const uploadImage = async() =>{
    const form = new FormData;
    form.append('pic',image);
    await axios.post("http://localhost:1010/image",form).then((res)=>{
      console.log(res.data.data);
    }).catch((error) =>{
      console.log(error);
    })
  }

  const getImage = async() =>{
    await axios.get('http://localhost:1010/getImage').then((res)=>{
    console.log(res.data.data);
    setPath(res.data.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getImage();
  },[])

  return (
    <>
      <input onChange={e => setImage(e.target.files[0])} type="file" className=''/>
      <button onClick={uploadImage}>send</button>
      <hr/>
      <hr/>
      {
        path?.map((index,key)=>{
        <div key={key} >
          <img src={index.path}/>
        </div>
        })
      }
      
    </>
  )
}

export default App
