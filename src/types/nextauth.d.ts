import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

interface UserData {
  access_token?: string
  address?: Address
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User extends DefaultUser, UserData {}

  interface Session extends DefaultSession {
    access_token?: string
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT, UserData {}
}
