export interface chatData {
  _id: string;
  userId: string;
  message: string;
  adminId: string;
  adminReply: string;
}

export interface AddUserchatData {
  userId: string;
  message: string;
  adminId: string;
  adminReply: string;
}

export interface AddAdminchatData {
  userId: string;
  adminId: string;
  adminReply: string;
}

export const getUserChat = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/chatbox/Admin/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    return data as chatData[];
  } catch (error) {
    console.error("Failed to fetch user chat data:", error);
    throw error;
  }
};


export const addUserChat = async (data: AddUserchatData): Promise<any> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/chatbox/User`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData; // Assuming you want to return the response data
  } catch (error) {
    console.error("Failed to fetch user chat data:", error);
    throw error;
  }
};

export const addAdminChat = async (data: AddAdminchatData): Promise<any> => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/chatbox/Admin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData; // Assuming you want to return the response data
  } catch (error) {
    console.error("Failed to fetch user chat data:", error);
    throw error;
  }
};