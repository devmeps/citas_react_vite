import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
      <div className="md:w-1/2 flex lg:w-3/5 md:h-screen overflow-y-scroll">
      <div>
        {pacientes && pacientes.length ? (
          <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                  <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus{' '}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                  </p>
        
                  {pacientes.map((paciente, index) => (
                            <Paciente
                              key = {paciente.id}
                              paciente = {paciente}
                              setPaciente ={setPaciente}
                              eliminarPaciente = {eliminarPaciente}
                            />
                    ))}
                    </>
        ): (
          <>
          <h2 className="font-black text-3xl text-center">No hay pacientes registrados</h2>
                  <p className="text-xl mt-5 mb-10 text-center">
                    Comienza Agregando Pacientes{' '}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                  </p>
          </>
        )
        }

        </div>
      </div>
    );
  };
  
  export default ListadoPacientes;