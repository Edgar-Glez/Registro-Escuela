import { useState, useEffect } from 'react'
import  Formulario  from './components/Formulario'
import  Header  from './components/Header'
import  Listado  from './components/Listado'

function App() {
  //Tener lista de estudiantes
  const [estudiantes, setEstudiantes] = useState([]);

  // Aqui se almacena el estudiante a modificar
  const [estudiante, setEstudiante] = useState({})
  // const eliminarEstudiante = estudiante.filter(id => estudiantes.id!== id ).map(filteredEstudiante)
  return (
   <div className='container mx-auto p-[20px]'>
   <Header/>
   <div className='mt-12 md:flex gap-10'>
   <Formulario 
   estudiantes={estudiantes}
   setEstudiantes = {setEstudiantes}
   estudiante={estudiante}
   />
   <Listado
   setEstudiantes={setEstudiantes}
    estudiantes={estudiantes}
    setEstudiante={setEstudiante}
   // eliminarEstudiante = {eliminarEstudiante}
   />
   </div>

   </div>
  )
}

export default App
