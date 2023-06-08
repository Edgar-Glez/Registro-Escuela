import { object } from "prop-types";
import React, { useEffect, useState } from "react"
import Estudiante from "./Estudiante";
const Formulario=({estudiantes, setEstudiantes, estudiante} )=>{
    const [nombre,setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
    const [promedio, setPromedio] = useState('');
    const [error, setError] = useState(false);
    const{nombres, carreras, semestres, promedios} = estudiante;
    
  useEffect(() => {

    if(Object.keys(estudiante).length>0){


    const{nombre, carrera, semestre, promedio} = estudiante;
    setNombre(nombre);
    setCarrera(carrera);
    setSemestre(semestre);
    setPromedio(promedio);

    }
    
  }, [estudiante])
  
  const generarID = () =>{
    const fecha = Date.now().toString(36);
    const aleatorio = Math.random().toString(36).substring(2);
    return (aleatorio+ fecha);

  }

  

    const manejadorSubmit = (e) => {
        e.preventDefault(false);
        if([nombre.trim(),carrera.trim(),semestre.trim(),promedio.trim()].includes('')){
            console.log ('no se permiten vacions')
            setError(true);
            return;
        }
        setError(false);
        const objetoEstudiantes={
            nombre, // en vez de poner 'nombre: nombre' se pone solo 'nombre' ya que las dos propiedades comparten nombres
            carrera,
            semestre,
            promedio
        }
        if(estudiante.id){
            objetoEstudiantes.id = estudiante.id;      
            const estudiantesActualizados=estudiantes.map( estudianteState => estudianteState.id === estudiante.id ? objetoEstudiantes : estudianteState );
            setEstudiantes(estudiantesActualizados);
            
            console.log("ahhh");
        }else{
        objetoEstudiantes.id=generarID();
        
        setEstudiantes([...estudiantes,objetoEstudiantes]) /// ... se llama spread operator
        limpiar();
        }
        
    }
    const limpiar =()=>{
        setNombre('');
        setCarrera('');
        setPromedio('');
        setSemestre('');
    }




    return(
        <div className="p-[20px] md:w-1/2 lg:w-2/5 rounded bg-[#dadada] border-b-[20px]  ">
         <h1 className="text-center font-bold text-xl">Registro de Estudiantes</h1>
         <h2 className="font-bold text-center"> Agregar y Administrar</h2>   
         <form
         onSubmit={manejadorSubmit}
           
         >
            {error && (<div className="bg-[#5a021f] text-white">
                <p>Llenar todos los campos</p></div>)}
            <div>
                <label className="block"> Nombre Estudiante</label>
                <input
                type="text"
                placeholder="Nombre"
                className="border-2 p-1 w-full rounded"
                value={nombre}
                onChange = {(e) => setNombre(e.target.value)}
                />
            </div>
         
            <div>
                <label className="block"> Carrera </label>
                <input
                type="text"
                placeholder="Nombre"
                className="border-2 p-2 w-full rounded"
                value={carrera}
                onChange = {(e) => setCarrera(e.target.value)}
                />
            </div>
        
            <div>
                <label className="block"> Semestre</label>
                <input
                type="text"
                placeholder="Nombre"
                className="border-2 p-2 w-full rounded"
                value={semestre}
                onChange = {(e) => setSemestre(e.target.value)}
                />
            </div>
         
            <div>
                <label className="block"> Promedio</label>
                <input
                type="text"
                placeholder="Nombre"
                className="border-2 p-2 w-full rounded"
                value={promedio}
                onChange = {(e) => setPromedio(e.target.value)}
                />
            </div>
        
         <div className="pt-4">
            <input
            
            type="submit"
            className="bg-[#009c2f] w-full rounded-md p-2 uppercase hover:bg-[#4dcf4d94] text-white"
            value={estudiante.id ? "Modificar estudiante": "Agregar Estudiante" }
            />
         </div>
         
            </form>
            
            
     
    </div>
    )
}
export default Formulario