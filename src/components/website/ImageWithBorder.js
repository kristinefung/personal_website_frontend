import React, { useRef, useState, useEffect } from 'react';

const ImageWithBorder = ({ className = '', src }) => {

  const imageRef = useRef(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  console.log(imageRef.current);
  useEffect(() => {
    if (imageRef.current?.offsetWidth & imageRef.current?.offsetHeight) {
      setImageSize({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <>
      <div className={"image-with-border"}>
        <img
          className={`image ${className}`}
          src={src}
          ref={imageRef}
        />

        <div
          className="border"
          style={{
            height: imageSize.height,
            width: imageSize.width
          }}
        ></div>

      </div >
    </>
  )
}

export default ImageWithBorder