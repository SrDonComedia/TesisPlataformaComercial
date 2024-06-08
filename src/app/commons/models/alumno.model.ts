export class AlumnoModel {
  public id: string;
  public rut: string; // Rut o pasaporte
  public nombre: string;
  public esRut: boolean; // Indica si es Rut o Pasaporte (true = rut)

  constructor(fields?: {
    id?: string,
    rut?: string,
    nombre?: string,
    esRut?: boolean,
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}
