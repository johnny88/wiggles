import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import exif from 'exif-js';
import cn from 'classnames';

var rotateClassMap: { [key: number]: string } = {
  1: 'rotate-0',
  3: 'rotate-180',
  6: 'rotate-90',
  8: 'rotate-270'
};

const getFileOrientation = (file: File) =>
  new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const { Orientation } = exif.readFromBinaryFile(reader.result);
      resolve(Orientation);
    };

    reader.readAsArrayBuffer(file);
  });

const getFileUrl = (file: File) =>
  new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });

export default () => {
  const [image, setImage] = useState<string>('');
  const [orientation, setOrientation] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

  const uploadInput = useRef<HTMLInputElement>(null);

  const history = useHistory();

  useEffect(() => {
    uploadInput?.current?.click();
    setStarted(true);
  }, [uploadInput]);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const [img, ori] = await Promise.all([
      getFileUrl(file),
      getFileOrientation(file)
    ]);

    setImage(img as string);
    setOrientation(ori as number);
  };

  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex flex-col p-4">
        <div className="flex h-full justify-center items-center">
          <div>This is your selected image</div>
          <img
            className={cn('transform', {
              [rotateClassMap[orientation]]: orientation
            })}
            src={image}
            alt="Your upload"
          />
        </div>
      </div>
      <input
        className="hidden"
        id="upload-image"
        ref={uploadInput}
        type="file"
        onChange={handleImageChange}
      />
    </div>
  );
};
