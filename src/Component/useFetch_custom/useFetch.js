import React, { useEffect, useState } from "react";


export const useFetch = (url)=>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        const fetchData = async () =>{
            try{

            }catch(error){
                
            }finally{

            }
        }
    },[url])
}