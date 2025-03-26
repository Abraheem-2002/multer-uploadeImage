import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export const Create = () => {

    const [image ,setImage] = React.useState(null);

        const uploadImage = async() =>{
        const form = new FormData;
        form.append('pic',image);
        await axios.post("http://localhost:1010/image",form).then((res)=>{
        console.log(res.data.data);
        }).catch((error) =>{
            console.log(error);
        })
        }

    return (
        <>
            <input onChange={e => setImage(e.target.files[0])} type="file" className=''/>
            <button onClick={uploadImage}>send</button>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <Link to={'/home'}>CLICK ON ME TO TAKE YOU TO THE HOME PAGE</Link>
        </>
    )
}