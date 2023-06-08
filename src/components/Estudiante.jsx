import React from 'react'

const Estudiante = ({estudiante,setEstudiante, eliminarEstudiante}) => {
  //console.log(estudiante);
  const{nombre, carrera, semestre, promedio} = estudiante;
  return (
    <div className="bg-[#3b8f9e] shadow-lg rounded-md px-3 mt-2 mb-2 py-3">
    <p className="font-bold uppercase mb-2">Nombre:<span className="font-normal ml-3 normal-case">{nombre}</span></p>
    <p className="font-bold uppercase mb-2">Carrera:<span className="font-normal ml-3 normal-case">{carrera}</span></p>
    <p className="font-bold uppercase mb-2">Semestre:<span className="font-normal ml-3 normal-case">{semestre}</span></p>
    <p className="font-bold uppercase mb-2">Promedio:<span className="font-normal ml-3 normal-case">{promedio}</span></p>
    <div className='flex justify-between'>
      <button
      type='button'
      className='bg-[#c90000] text-[#ffffff] hover:bg-[#740101] px-4 py-2 rounded'
      onClick={()=>eliminarEstudiante(estudiante.id)}
      >Eliminar</button>
      <button
      type='button'
      className='bg-[#3044b9] text-[#ffffff] px-4 py-2 hover:bg-[#1c2363] rounded' 
      onClick={()=>setEstudiante(estudiante)} 
      
      >Modificar</button>
    </div>
    </div>   
    
  )
}

 export default Estudiante