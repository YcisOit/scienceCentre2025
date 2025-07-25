'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function AwardsSlider() {
  const timer = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      renderMode: 'performance',
      slides: {
        perView: 3,
        spacing: 0,
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: { perView: 4, spacing: 0 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 5, spacing: 0 },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.moveToIdx(slider.track.details.abs + 1, true, { duration: 1000 });
          }, 1000);
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  const images = [
    { src: '/award/1.jpg', alt: '' },
    { src: '/award/2.jpg', alt: '' },
    { src: '/award/3.jpg', alt: '' },
    { src: '/award/6.png', alt: '' },
    { src: '/award/4.jpg', alt: '' },
    { src: '/award/5.jpg', alt: '' },
    { src: '/award/9.jpg', alt: '' },
    { src: '/award/7.png', alt: '' },
    { src: '/award/8.jpg', alt: '' },
  ];

  return (
    <section className="bg-white py-10 border-t border-black">

      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
        EVENTS
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
          >
            <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] bg-white flex items-center justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={200}
                className="object-contain w-full h-full cursor-pointer"
                onClick={() => openModal(img)}
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-3xl font-bold"
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="object-contain max-h-[80vh] w-full"
            />
            <p className="mt-2 text-center text-black text-lg">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
