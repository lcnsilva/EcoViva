const API_URL = 'http://localhost:3001/dicas';

export const fetchDicas = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const deleteDicas = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

export const createDicas = async (evento) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(evento),
  });
};

export const updateDicas = async (id, evento) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(evento),
  });
};