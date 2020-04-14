import React, { useRef } from 'react';
import { Button } from 'components/index';

export default () => {
  const ref = useRef<any>();
  const handleClick: () => null = () => ref.current.click();
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex flex-col p-4">
        <div className="flex h-full items-center">
          <div>Please select an image to upload.</div>
        </div>
        <div className="flex justify-center">
          <input type="file" className="invisible" ref={ref} />
          <Button color="primary" dark onClick={handleClick}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};
