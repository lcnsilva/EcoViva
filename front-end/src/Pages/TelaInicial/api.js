const API_URL = 'http://localhost:3001/publicacoes';

export const fetchPost = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const fetchFilterByTopico = async (topico) => {
  const response = await fetch(`${API_URL}/${topico}`, { method: 'GET' });
  return response.json();
}

export const deleteEventos = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

export const createPost = async (post) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
};

export const updateEventos = async (id, post) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
};