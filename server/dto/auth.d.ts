declare module '#auth-utils' {
    interface UserSession {
      id: string,
      email: string,
      loggedInAt: Date
    }
  }
  export {}