import React from "react"
import Estudiante from "./Estudiante"
const Listado=({estudiantes,setEstudiante,setEstudiantes} )=>{
    const eliminarEstudiante = (id) => {
        console.log(id);
        const nuevaLista = estudiantes.filter((estudiante) => estudiante.id !== id);
    setEstudiantes(nuevaLista);
    }

    return(
     <div className="md:w-1/2 lg:w-3/5 rounded bg-[#646e6e] text-white overflow-y-scroll h-screen p-[20px]">
        <h2 className="text-center font-bold text-xl">Listado de Estudiantes </h2>
        <h2 className="font-bold text-center"> Administrar Estudiantes</h2>
        
       {
        estudiantes.map((estudiante) =>
            <Estudiante 
            key = {estudiante.id} 
            estudiante={estudiante} 
            setEstudiante={setEstudiante}
            eliminarEstudiante = {eliminarEstudiante}
            />

)
       }

       
       
            
     
    </div>
    
    )
}
export default Listado