'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import Image from 'next/image'
import { useState } from 'react'

interface PetSliderProps {
  pet: Pet
}

export function PetSlider({ pet }: PetSliderProps) {
  const [slider, setSlider] = useState<Slider | null>(null)
  const [navThumbnails, setNavThumbnails] = useState<Slider | null>(null)
  const { images } = pet

  return (
    <div className="overflow-hidden">
      <Slider
        ref={(slider) => setSlider(slider)}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        asNavFor={navThumbnails || undefined}
      >
        {images.map((image, index) => (
          <div
            key={`${pet.id}-${index}`}
            className="!flex h-[350px] w-[350px] items-center justify-center overflow-hidden"
          >
            <Image
              src={image}
              alt={`${pet.name}-${index}`}
              objectFit="cover"
              objectPosition="center"
              width={700}
              height={400}
            />
          </div>
        ))}
      </Slider>
      <Slider
        ref={(slider) => setNavThumbnails(slider)}
        asNavFor={slider || undefined}
        slidesToShow={images.length - 1}
        slidesToScroll={1}
        focusOnSelect
        className="mt-8 [&_.slick-current_.pet-slider-content]:opacity-100"
      >
        {images.map((image, index) => (
          <div
            className="pet-slider-content !flex max-h-[80px] max-w-[80px] cursor-pointer items-center justify-center overflow-hidden rounded-default opacity-40 transition-all"
            key={`${pet.id}-${index}`}
          >
            <Image
              width={80}
              height={80}
              src={image}
              alt={`${pet.name}-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
