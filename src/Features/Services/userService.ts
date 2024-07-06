export interface UserData {
  _id: string;
  firstname: string;
  email: string;
  password: string;
  role:string;
}

export interface AddUserData {
  firstname: string;
  email: string;
  password: string;
  role:string;
}

export const addUser = async (data: AddUserData): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/user', {
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

export const fetchUsers = async (): Promise<UserData[]> => {
  const response = await fetch('http://localhost:3000/api/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as UserData[];
};

export const fetchUserById = async (id: string): Promise<UserData> => {
  const response = await fetch(`http://localhost:3000/api/user/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as UserData;
};

export const updateUser = async (id: string, data: AddUserData): Promise<any> => {
  const response = await fetch(`http://localhost:3000/api/user/${id}`, {
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