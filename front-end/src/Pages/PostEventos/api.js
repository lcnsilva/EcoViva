const API_URL = 'http://localhost:3001/eventos';

export const fetchEventos = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const deleteEventos = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

export const createEventos = async (evento) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(evento),
  });
};

export const updateEventos = async (id, evento) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(evento),
  });
};