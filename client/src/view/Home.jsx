import React,{useEffect} from 'react'
import axios from 'axios';


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
            <div style={{width:'300px' , height:'300px' , backgroundColor:"red" }} key={key} >
            {console.log(index.path)}
            <img style={{width:'300px' , height:'300px'}} src={'http://localhost:1010/public/uploads/pic-1742779418203-774488805.jpg'}/>
            </div>
                
                </>
            )
        })
    }
        </>
    )
}