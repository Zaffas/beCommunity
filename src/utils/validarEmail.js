function validarEmail(valor) {
  if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      valor
    )
  ) {
    return true;
  } else {
    return false;
  }
}

export default validarEmail;
