export const evaluatePasswordStrength = (password) => {
  const feedback = [];
  let score = 0;

  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push("Mínimo 8 caracteres");
  }

  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Mayúsculas y minúsculas");
  }

  if (/\d/.test(password)) {
    score += 1;
  } else {
    feedback.push("Al menos un número");
  }

  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Al menos un carácter especial (!@#$% etc.)");
  }

  if (password.length >= 12) {
    score += 1;
  }

  return { score, feedback };
};

export const getPasswordStrengthColor = (score) => {
  if (score === 0) return "bg-transparent";
  if (score <= 2) return "bg-red-500";
  if (score <= 3) return "bg-yellow-500";
  return "bg-green-500";
};

export const getPasswordStrengthText = (score) => {
  if (score === 0) return "";
  if (score <= 2) return "Débil";
  if (score <= 3) return "Media";
  return "Fuerte";
};

export const getPasswordStrengthTextColor = (score) => {
  if (score === 0) return "text-gray-500";
  if (score <= 2) return "text-red-600";
  if (score <= 3) return "text-yellow-600";
  return "text-green-600";
};
