// eventService.ts

export interface EventData {
  _id: string;
  eventName: string;
  desc: string;
  address: string;
  image: string;
}

export interface AddEventData {
  eventName: string;
  desc: string;
  address: string;
  image: string;
}

export const addEvent = async (data: AddEventData): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchEvents = async (): Promise<EventData[]> => {
  const response = await fetch('http://localhost:3000/api/event', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as EventData[];
};

export const fetchEventById = async (id: string): Promise<EventData> => {
  const response = await fetch(`http://localhost:3000/api/event/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as EventData;
};

export const updateEvent = async (id: string, data: AddEventData): Promise<any> => {
  const response = await fetch(`http://localhost:3000/api/event/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};