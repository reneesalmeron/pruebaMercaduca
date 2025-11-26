import logoVerde from "../images/logoVerde.png";

export const PROFILE_PLACEHOLDER = logoVerde;
export const EMPRENDIMIENTO_CACHE_KEY = "emprendimientoCache";

export const getStoredToken = (userData) => {
  const localToken = localStorage.getItem("token");
  if (localToken && localToken !== "undefined" && localToken !== "null") {
    return localToken;
  }

  const fallbackToken =
    userData?.token || userData?.profile?.token || userData?.accessToken;

  if (fallbackToken && fallbackToken !== "undefined" && fallbackToken !== "null") {
    return fallbackToken;
  }

  return null;
};

export const getAuthHeaders = (userData) => {
  const token = getStoredToken(userData);
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getUserId = (data) =>
  data?.id || data?.id_usuario || data?.userId || data?.idUser || null;

export const normalizeProducto = (producto) => ({
  id: producto?.id ?? producto?.id_producto,
  nombre: producto?.nombre ?? producto?.Nombre ?? "",
  descripcion: producto?.descripcion ?? producto?.Descripcion ?? "",
  precio:
    producto?.precio ?? producto?.precio_dolares ?? producto?.Precio_dolares ?? 0,
  imagen:
    producto?.imagen ??
    producto?.imagen_url ??
    producto?.Imagen_URL ??
    producto?.Imagen_url ??
    "",
  id_categoria: producto?.id_categoria ?? null,
  stock: producto?.stock ?? producto?.existencias ?? producto?.Existencias ?? 0,
  disponible: producto?.disponible ?? producto?.Disponible ?? true,
  id_emprendimiento:
    producto?.emprendimiento_id ?? producto?.id_emprendimiento ?? null,
  categoria: producto?.categoria ?? producto?.Categoria,
});

const readCachedEmprendimientos = () => {
  try {
    const raw = localStorage.getItem(EMPRENDIMIENTO_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("No se pudo leer el cache de emprendimientos", e);
    return {};
  }
};

export const getCachedEmprendimiento = (userId) => {
  if (!userId) return null;
  const cache = readCachedEmprendimientos();
  return cache?.[userId] || null;
};

export const saveCachedEmprendimiento = (userId, emprendimiento) => {
  if (!userId || !emprendimiento) return;

  try {
    const cache = readCachedEmprendimientos();
    cache[userId] = emprendimiento;
    localStorage.setItem(EMPRENDIMIENTO_CACHE_KEY, JSON.stringify(cache));
  } catch (e) {
    console.error("No se pudo guardar el cache de emprendimientos", e);
  }
};

export const normalizeEmprendimiento = (data = {}) => ({
  id_emprendimiento:
    data.id_emprendimiento ||
    data.id ||
    data.idEmprendimiento ||
    data.emprendimiento_id ||
    null,
  nombre: data.nombre || data.Nombre || data.emprendimiento_nombre || "",
  descripcion:
    data.descripcion || data.Descripcion || data.emprendimiento_descripcion || "",
  imagen_url:
    data.imagen_url ||
    data.Imagen_URL ||
    data.imagen ||
    data.emprendimiento_imagen_url ||
    "",
  instagram: data.instagram || data.Instagram || data.emprendimiento_instagram || "",
  disponible: data.disponible ?? data.Disponible ?? true,
  id_categoria:
    data.id_categoria || data.idCategoria || data.emprendimiento_id_categoria || null,
});
