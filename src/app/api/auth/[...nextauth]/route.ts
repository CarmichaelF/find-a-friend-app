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
          return { ...data.org, apiToken: data.token }
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
    jwt: async ({ token, user, account }) => {
      console.log('user', user)
      if (user) {
        token.email = user.email
        token.sub = user.id
      }

      if (account) {
        token.accessToken = account.access_token
      }

      return token
    },
    session: ({ session, token }) => {
      if (token && session.user) {
        session.user.email = token.email
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
