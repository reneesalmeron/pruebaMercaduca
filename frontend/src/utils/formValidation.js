export const areAllFieldsFilled = (formData) =>
  formData.username.trim() !== "" &&
  formData.password.trim() !== "" &&
  formData.confirmPassword.trim() !== "" &&
  formData.nombres.trim() !== "" &&
  formData.apellidos.trim() !== "" &&
  formData.correo.trim() !== "" &&
  formData.telefono.trim() !== "";

export const doPasswordsMatch = (password, confirmPassword) =>
  password === confirmPassword && password !== "";

export const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isPhoneValid = (phone) => /^\d{8}$/.test(phone);

export const isRegisterFormValid = (
  formData,
  usernameAvailable,
  passwordStrength
) =>
  areAllFieldsFilled(formData) &&
  doPasswordsMatch(formData.password, formData.confirmPassword) &&
  // Comentado temporalmente para no limitar los registros por la fuerza de la contraseña
  // passwordStrength.score >= 3 &&
  usernameAvailable !== false;
