const TOKEN_KEY = "authToken";
const USER_KEY = "authUser";

export function saveAuthSession({ token, user }) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

export function getAuthSession() {
  const token = localStorage.getItem(TOKEN_KEY) || null;
  const userRaw = localStorage.getItem(USER_KEY);

  let user = null;
  if (userRaw) {
    try {
      user = JSON.parse(userRaw);
    } catch {
      user = null;
    }
  }

  return { token, user };
}

export function clearAuthSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
