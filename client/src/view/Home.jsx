import React,{useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


export const Home = () => {
    const [pathd ,setPath] = React.useState([]);
    
    useEffect(()=>{
        const getImage = async() =>{
            await axios.get('http://localhost:1010/getImage').then((res)=>{
            console.log(res.data.data);
            setPath(res.data.data);
            }).catch((err)=>{
            console.log(err);
            })
        }
        getImage();
    },[])
    return (
        <>
    {
        pathd?.map((index,key)=>{
            return(
                <> 
    <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '10px',
    width: '100%',

  }}
>
  {pathd.map((img, index) => (
    <div key={index} style={{height:'200px'}}>
      <img
        style={{ width: '100px', height: '100px' }}
        src={`http://localhost:1010/${img.path}`}
        alt="Loding"
      />
      <Link to="/Product" state={img.path} style={{backgroundColor:"blue"}}>Show product</Link>
    </div>
  ))}
</div>
                </>
            )
        })
    }
        </>
    )
}