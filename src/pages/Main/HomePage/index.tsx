import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  CarouselIndicators,
  SelectedIndicator,
  CarrouselContainer,
  ArrowLeft,
  ArrowRight,
} from './styles'
import arrowLeftSvg from '../../../assets/arrow-left.svg'
import arrowRightSvg from '../../../assets/arrow-right.svg'
import image1 from '../../../assets/banner-image1.svg'
import image2 from '../../../assets/banner-image2.svg'
import image3 from '../../../assets/banner-image3.svg'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <CarrouselContainer>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <ArrowLeft onClick={onClickHandler}>
              <img src={arrowLeftSvg} alt='Seta esquerda' />
            </ArrowLeft>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <ArrowRight onClick={onClickHandler}>
              <img src={arrowRightSvg} alt='Seta direita' />
            </ArrowRight>
          )
        }
        onChange={(index) => setCurrentSlide(index)}
      >
        <div>
          <img src={image1} alt='Imagem 1' />
        </div>
        <div>
          <img src={image2} alt='Imagem 2' />
        </div>
        <div>
          <img src={image3} alt='Imagem 3' />
        </div>
      </Carousel>
      <CarouselIndicators>
        <SelectedIndicator isActive={currentSlide === 0} />
        <SelectedIndicator isActive={currentSlide === 1} />
        <SelectedIndicator isActive={currentSlide === 2} />
      </CarouselIndicators>
    </CarrouselContainer>
  )
}
