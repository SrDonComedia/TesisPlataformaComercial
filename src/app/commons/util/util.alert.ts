import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilAlert {

  constructor(
    private toastr: ToastrService
  ) { }

  /**
   * Mensaje por defecto: Hubo un problema al procesar la solicitud
   */

  toastErrorHttp(error: any,) {
    if (error?.status != 0) {
      this.toastr.error(error?.error?.message, '', { timeOut: 25000 });
    }
  }

  errorSwalDefault() {
    Swal.fire({
      title: 'Error',
      icon: 'error',
      text: 'Hubo un problema al procesar la solicitud',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  errorSwal(mensaje: string) {
    Swal.fire({
      title: 'Error',
      icon: 'error',
      text: mensaje,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }



  infoSwal(mensaje: string) {
    Swal.fire({
      title: 'Info',
      icon: 'info',
      text: mensaje,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  warningSwal(mensaje: string) {
    Swal.fire({
      icon: 'warning',
      text: mensaje,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  successSwal(mensaje: string) {
    Swal.fire({
      title: 'Hecho!',
      icon: 'success',
      text: mensaje,

    });
  }

  errorSwalHtml(mensajeHtml: string) {
    Swal.fire({
      title: 'Error',
      icon: 'error',
      html: mensajeHtml,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  successSwalHtml(mensaje: string) {
    Swal.fire({
      title: 'Hecho!',
      icon: 'success',
      html: mensaje
    });
  }

  warningSwalHtml(mensaje: string) {
    Swal.fire({
      icon: 'warning',
      html: mensaje,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }
}
