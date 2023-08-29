import React, { Fragment, PropsWithChildren } from 'react'

interface PetCharacteristicProps {
  level?: number
  maxLevel?: number
  label: string
}

export function PetCharacteristic({
  children,
  label,
  level,
  maxLevel = 3,
}: PropsWithChildren<PetCharacteristicProps>) {
  return (
    <div className="flex h-28 flex-1 flex-col justify-center gap-4 rounded-default border-2 border-light-grey px-6">
      <div className="flex gap-2">
        {level ? (
          <>
            {Array.from({ length: level }).map((_, index) => (
              <Fragment key={index}>{children}</Fragment>
            ))}
            {Array.from({ length: maxLevel - level }).map((_, index) => (
              <div key={index} className="opacity-20">
                {children}
              </div>
            ))}
          </>
        ) : (
          children
        )}
      </div>
      <span className="text-lg font-semibold text-ateneo">{label}</span>
    </div>
  )
}
