const Config = import('tailwindcss').Config

declare module 'tailwindcss/resolveConfig' {
  export default function (config: Config): Config;
}

declare module 'tailwind.config.js' {
  export default Config;
}