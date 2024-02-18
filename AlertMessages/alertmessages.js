import Swal from 'sweetalert2';

export const SuccessMessage = (message) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${message}`,
        showConfirmButton: false,
      timer: 1500,
      })
}

export const ErrorMessage = (message) => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `${message}`,
        showConfirmButton: false,
      timer: 1500,
      })
}


