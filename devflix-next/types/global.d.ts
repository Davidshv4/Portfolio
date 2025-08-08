// Minimal stubs so the project type-checks before installing deps

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'next' {
  export type Metadata = any;
}

declare module 'next/link' {
  const Link: any;
  export default Link;
}

declare module 'next/font/google' {
  export const Inter: any;
  export const Poppins: any;
}

declare module 'framer-motion' {
  export const motion: any;
}

// Temporary stub to satisfy TS before dependencies are installed
declare module 'next-themes' {
  export const ThemeProvider: any;
}

// Minimal React stubs for type-checking in environments without node_modules installed
declare module 'react' {
  export type ReactNode = any;
  export function useEffect(...args: any[]): void;
  const React: any;
  export default React;
}


