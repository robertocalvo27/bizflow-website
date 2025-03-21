// Archivo para interactuar con la API de Payload CMS
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

/**
 * Función genérica para realizar peticiones a la API
 */
async function fetchAPI(endpoint: string, options: FetchOptions = {}) {
  const { method = 'GET', headers = {}, body } = options;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const config: RequestInit = {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Ocurrió un error al realizar la petición');
  }
  
  return await response.json();
}

/**
 * Obtener todos los posts publicados
 */
export async function getAllPosts() {
  return fetchAPI('/posts?where[status][equals]=published&sort=-publishedAt');
}

/**
 * Obtener un post por su slug
 */
export async function getPostBySlug(slug: string) {
  return fetchAPI(`/posts?where[slug][equals]=${slug}`).then(data => {
    return data.docs && data.docs.length > 0 ? data.docs[0] : null;
  });
}

/**
 * Obtener posts por categoría
 */
export async function getPostsByCategory(categorySlug: string) {
  return fetchAPI(`/posts?where[category.slug][equals]=${categorySlug}&where[status][equals]=published&sort=-publishedAt`);
}

/**
 * Obtener todas las categorías
 */
export async function getAllCategories() {
  return fetchAPI('/categories');
}

/**
 * Obtener todos los autores
 */
export async function getAllAuthors() {
  return fetchAPI('/authors');
}

/**
 * Buscar posts por término
 */
export async function searchPosts(searchTerm: string) {
  return fetchAPI(`/posts?where[or][0][title][like]=${searchTerm}&where[or][1][excerpt][like]=${searchTerm}&where[status][equals]=published&sort=-publishedAt`);
}

export default {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  getAllCategories,
  getAllAuthors,
  searchPosts,
}; 