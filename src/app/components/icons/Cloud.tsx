import { ComponentProps } from 'react'

export function Cloud(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g
        clipPath="url(#clip0_1256_63)"
        stroke="#0D3B66"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 16l-4-4-4 4M12 12v9" />
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
        <path d="M16 16l-4-4-4 4" />
      </g>
      <defs>
        <clipPath id="clip0_1256_63">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
