"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

export default function LightboxGallery({
  images,
  className = "",
}) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className={className}>
        {images.map((image, i) => (
          <Image
            key={i}
            src={image.src}
            alt={image.alt || ""}
            width={500}
            height={500}
            onClick={() => setIndex(i)}
            className="cursor-pointer aspect-square w-full object-cover rounded-lg hover:scale-[1.02] transition duration-200"
          />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
      />
    </>
  );
}