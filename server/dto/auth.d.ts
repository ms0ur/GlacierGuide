declare module '#auth-utils' {
    interface UserSession {
      id: string,
      email: string,
      name: string,
      loggedInAt: Date
    }
  }
  export {}