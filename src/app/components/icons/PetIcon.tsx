import { ComponentProps } from 'react'

export function PetIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={45}
      viewBox="0 0 44 45"
      fill="none"
      {...props}
    >
      <rect y={0.986816} width={44} height={44} rx={10} fill="#F15156" />
      <path
        d="M24.517 29.643a2.745 2.745 0 01-4.018.024c-.482-.518-.107-1.348.61-1.352l2.782-.017c.717-.004 1.102.821.626 1.345z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.137 28.203c-.562.436-1.355.292-1.83-.235l-1.51-1.673a1.544 1.544 0 00-2.287 0l-1.635 1.811c-.463.513-1.23.666-1.793.26C16.214 27.021 15 24.843 15 22.386c0-4.086 3.358-7.4 7.5-7.4 4.142 0 7.5 3.314 7.5 7.4 0 2.36-1.12 4.462-2.863 5.817zm-6.901-4.988l1.417 1.655c.45.526 1.243.526 1.694 0l1.417-1.655c.455-.531.22-1.372-.438-1.57a6.326 6.326 0 00-3.652 0c-.659.198-.893 1.039-.438 1.57zm.042-3.506a1.111 1.111 0 11-2.222 0 1.111 1.111 0 012.222 0zm5.555 1.111a1.111 1.111 0 100-2.222 1.111 1.111 0 000 2.222z"
        fill="#fff"
      />
    </svg>
  )
}
