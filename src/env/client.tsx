'use client'

import { z } from 'zod'

const processOBJ = {
  NEXT_PUBLIC_GOOGLE_MAPS_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
}

const clientEnvSchema = z.object({
  NEXT_PUBLIC_GOOGLE_MAPS_KEY: z.string(),
})

export const env = clientEnvSchema.parse(processOBJ)
