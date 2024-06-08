import { Injectable } from '@angular/core';
import Inputmask from 'inputmask';

@Injectable()
export class UtilFormating {

  private f_currency = {
    'alias': 'currency',
    'autoGroup': true,
    'radixPoint': ',',
    'digits': 0,
    'groupSeparator': '.',
    'digitsOptional': false,
    'prefix': '$ ',
    'placeholder': '0',
    'removeMaskOnSubmit': true,
    'rightAlign': false
  };
  private f_percentage = {
    'alias': 'currency',
    'autoGroup': true,
    'radixPoint': ',',
    'digits': 0,
    'groupSeparator': '.',
    'digitsOptional': false,
    'suffix': '%',
    'prefix': '',
    'placeholder': '0',
    'removeMaskOnSubmit': true,
    'rightAlign': false
  };
  private f_number = {
    'alias': 'currency',
    'autoGroup': true,
    'radixPoint': ',',
    'digits': 0,
    'groupSeparator': '.',
    'digitsOptional': false,
    'suffix': '',
    'prefix': '',
    'placeholder': '0',
    'removeMaskOnSubmit': true,
    'rightAlign': false
  };

  public formatingInputCurrency(id_input: string) {

    const precio_lista = document.getElementById(id_input);
    Inputmask(this.f_currency).mask(id_input);
  }
  public formatingCurrency(value: number) {

    return Inputmask.format(value, this.f_currency);
  }
  public formatingPercentage(value: number) {
    return Inputmask.format(value, this.f_percentage);
  }
  public formatingInputPercentage(id_input: string) {

    const precio_lista = document.getElementById(id_input);
    Inputmask(this.f_percentage).mask(id_input);
  }
  public unformatingCurrency(value: string): any {
    return Inputmask.unmask(value, this.f_currency);
  }
  public unformatingPercentage(value: string): any {
    return Inputmask.unmask(value, this.f_percentage);
  }
  public unformatingNumber(value: string): any {
    return Inputmask.unmask(value, this.f_number);
  }

  public formatingInputNumber(id_input: string) {

    const precio_lista = document.getElementById(id_input);
    Inputmask(this.f_number).mask(id_input);
  }
  public formatingNumber(value: number) {
    return Inputmask.format(value, this.f_number);
  }
  public rutSinDv(rut: string) {
    let solo_rut = rut.replace('-', '');
    solo_rut = this.quitarPuntos(solo_rut);
    solo_rut = solo_rut.substring(0, solo_rut.length - 1);
    return solo_rut;
  }
  public quitarPuntos(rut: string): string {
    return rut.replace(/\./g, '');
  }

  public formatearRut(rut: any) {
    let rutPuntos = '';
    const actual = rut.replace(/^0+/, '');
    if (actual !== '' && actual.length > 1) {
      const sinPuntos = actual.replace(/\./g, '');
      const actualLimpio = sinPuntos.replace(/-/g, '');
      const inicio = actualLimpio.substring(0, actualLimpio.length - 1);

      let i = 0;
      let j = 1;
      for (i = inicio.length - 1; i >= 0; i--) {
        const letra = inicio.charAt(i);
        rutPuntos = letra + rutPuntos;

        j++;
      }
      const dv = actualLimpio.substring(actualLimpio.length - 1);
      rutPuntos = rutPuntos + '-' + dv;
    }
    return rutPuntos;
  }
}
