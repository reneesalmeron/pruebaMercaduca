import {
  getPasswordStrengthColor,
  getPasswordStrengthText,
  getPasswordStrengthTextColor,
} from "../../utils/password";

const PasswordStrengthMeter = ({ password, passwordStrength }) => {
  if (!password) return null;

  return (
    <div className="mt-3 space-y-2">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor(
            passwordStrength.score
          )}`}
          style={{
            width: `${(passwordStrength.score / 5) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between text-sm">
        <span>Fortaleza: </span>
        <span
          className={`font-semibold ${getPasswordStrengthTextColor(
            passwordStrength.score
          )}`}
        >
          {getPasswordStrengthText(passwordStrength.score)}
        </span>
      </div>

      <div className="bg-white p-3 rounded-md border border-gray-200 mt-2">
        <p className="text-sm font-medium text-gray-700 mb-2">
          La contraseña debe contener:
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li
            className={
              password.length >= 8
                ? "text-green-600 font-semibold"
                : ""
            }
          >
            ✓ Mínimo 8 caracteres
          </li>
          <li
            className={
              /[a-z]/.test(password) && /[A-Z]/.test(password)
                ? "text-green-600 font-semibold"
                : ""
            }
          >
            ✓ Mayúsculas y minúsculas
          </li>
          <li
            className={
              /\d/.test(password)
                ? "text-green-600 font-semibold"
                : ""
            }
          >
            ✓ Al menos un número
          </li>
          <li
            className={
              /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
                ? "text-green-600 font-semibold"
                : ""
            }
          >
            ✓ Al menos un carácter especial
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
