class Consultorio {
    constructor (nombre,pacientes){
        this.nombre = nombre;
        this.pacientes = pacientes;
    }

      }
      Consultorio.prototype.buscarPacientePorNombre = function (nombrePacienteBuscar) {
        let nombrePaciente = this.pacientes.find(nombrePacienteBuscar => nombrePacienteBuscar.nombre == "Elvis Tek")
        console.log (nombrePaciente)
    }
class Paciente {
#diagnostico
    constructor (nombre,edad,rut,diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.#diagnostico = diagnostico;
    }
get Paciente () {
return {diagnostico: this.diagnostico} 
}

}


const Paciente1= new Paciente ("Elvis Tek",99,"1234567-8","úlcera")
const Paciente2= new Paciente ("Joaquín Cruzat",29,"18390646-1","influenza");
const Paciente3= new Paciente ("Aquiles Baila",42,"7390646-1","hepatitis A");
const Paciente4= new Paciente ("Paquita la del Barrio",73,"4390646-1","sana");

const ConsultorioN1 = new Consultorio ("Consultorio N°1",[Paciente1,Paciente2,Paciente3,Paciente4])


console.log(ConsultorioN1);
ConsultorioN1.buscarPacientePorNombre()
