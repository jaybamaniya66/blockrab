import { superbase } from "@/lib/connect_db";
import { useEffect, useState } from "react";

function fetchData(){
    const [data,setData] = useState([])
    const [loading, setLoading] = useState()

    useEffect(() =>{
        fetchData()
    }, [])

    //fetch the data:
    async function fetchData(){
        try{
            const {data, error} = await superbase.from("client").select('*')
            if (error){
                console.log("found an error while fetching the superbase data")
            }
            else{
                setData(data)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    // insert the data to the superbase:    
    // async function insertData(newItem){
    //     try{
    //         const {data, error} = await superbase.from("").insert([newItem]).select()
    //         if (error){
    //             console.log("Data is enter the superbase database")
    //         }
    //         else{
    //             setData(data)
    //         }
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }


    return (
        <div>
            {data.map(item => (
                    <div>{item.name}</div>
                ))
            }
        </div>
    )
}