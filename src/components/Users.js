//Taernos los hooks del paquete de react
import { useState, useEffect } from "react"

function Users(){
    //Declarar nuestro estado
    const [users, setUsers] = useState(null/*Valor del estado inicial*/)
    
    //Generar nuestra petición a la API
    const url = 'https://reqres.in/api/users'
    const getUsers = async()=>{
        try {
            const response = await fetch(url)
            const json = await response.json()
            //El estado cambia al json de la api
            setUsers(json)
        } catch (error){
            console.log(error)
        }
    }

    //Generamos nuestro efecto secundario
    useEffect(()=>{
        getUsers()
    },[])

    //Validar que el estado tenga los datos de la api y retornal el jsx
    if(users !== null){
        return(
            users.data.map((user)=>(
                <div>
                    {user.first_name}
                    <br/>
                    <img src={user.avatar}/>
                </div>
            ))
        )
    }

    //Si no se cumple retornamos el párrafo "sin datos"
    return <p>SIN DATOS</p>
}

export default Users