// Simple login service that verifies credentials
export const Login = (username, password) => {
  return new Promise((resolve, reject) => {
    // Simulate a brief network request
    setTimeout(() => {
      const trimmedUser = username.trim();
      const trimmedPass = password.trim();

      if (trimmedUser === 'aildc' && trimmedPass === 'Devdlc@123') {
        resolve({
          username: 'aildc',
          name: 'AILDC User',
          role: 'Member',
          loginTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
      } else {
        reject(new Error('Invalid username or password. Please try again.'));
      }
    }, 400);
  });
};

