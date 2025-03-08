// Permite letras mayúsculas y minúsculas, números, espacios, puntos y paréntesis.
export const PATTERN_USERID = "^([A-Za-z0-9 .\\(\\)]+)$";

// Requiere al menos una letra mayúscula, una letra minúscula, un número y un carácter especial. La longitud debe ser entre 8 y 30 caracteres.
export const PATTERN_PASS = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,30}$";

// Permite letras, números, acentos, puntos y espacios. También permite comas para separar columnas.
export const PATTER_COLUM_MODEL = "^([:A-Za-z0-9áéíóúÁÉÍÓÚ\\.ñÑÜü][:A-Za-z0-9áéíóúÁÉÍÓÚ\\.ñÑÜü ]*)([,]{1}[:A-Za-z0-9áéíóúÁÉÍÓÚ\\.ñÑÜü][:A-Za-z0-9áéíóúÁÉÍÓÚ\\.ñÑÜü ]*)*";

// Permite números enteros y decimales, con o sin signo negativo.
export const PATTERN_NUMSIGNED = "-?[0-9]+([\\.][0-9]+)?";

// Permite solo letras y puntos.
export const PATTERN_NOMBRE = "[A-Za-záéíóúÁÉÍÓÚ\\.ñÑÜü ]*";

// Permite letras, números, acentos, puntos y espacios.
export const PATTERN_TITULO = "[A-Za-z0-9áéíóúÁÉÍÓÚ\\.ñÑÜü ]*";

// Permite letras, números, acentos, puntos, paréntesis y espacios.
export const PATTERN_TITULO_MODELO = "[A-Za-z0-9áéíóúÁÉÍÓÚ\\.ñÑÜü() ]*";

// Permite números y espacios, opcionalmente precedidos por un signo más.
export const PATTERN_TELF = "\\+?[0-9 ]*";

// Permite números y puntos.
export const PATTERN_REEUP = "[0-9\\.]*";

// Permite letras, números, acentos y puntos.
export const PATTERN_CODIGO = "[A-Za-z0-9áéíóúÁÉÍÓÚ\\.ñÑÜü]*";
