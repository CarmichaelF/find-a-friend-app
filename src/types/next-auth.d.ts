import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface JWT {
    id_token?: string
    provider?: string
    access_token?: string
  }

  interface Session {
    access_token?: string
  }

  interface User {
    access_token?: string
  }
}
