export const generateRandomString = () => {
    return Math.random().toString(36).substr(2, 8); 
  };