/// <reference types="vite/client" />

declare module 'lz-string'

declare const umami: {
  track: (event: string, data: Record<string, any>) => void
}
