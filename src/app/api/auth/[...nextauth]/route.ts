import { findAFriendAPI } from '@/services/api'
import { AxiosError } from 'axios'
import NextAuth from 'next-auth'
import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _) {
        try {
          const { data } = await findAFriendAPI.post(
            '/orgs/authenticate',
            credentials,
          )
          return { ...data.org, access_token: data.token }
        } catch (error) {
          if (error instanceof AxiosError)
            return Promise.reject(error.response?.data)
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  pages: {
    signIn: '/org/sign-in',
  },
  callbacks: {
    async jwt({ token, user }) {
      // the user object is what returned from the Credentials login, it has `access_token` from the server `/login` endpoint
      // assign the access_token to the `token` object, so it will be available on the `session` callback
      if (user) {
        token.access_token = user.access_token
        token.address = user.address
      }
      return token
    },

    async session({ session, token }) {
      // the token object is what returned from the `jwt` callback, it has the `access_token` that was assigned before
      // Assign the access_token to the `session` object, so it will be available on our app through `useSession` hooks
      if (token) {
        session.access_token = token.access_token as string
      }
      if (token && session.user) {
        session.user.address = token.address
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
