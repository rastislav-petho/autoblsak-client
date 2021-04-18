import React, { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type DropZoneProps = {
  setCountOfFiles: (value: number) => void;
  handleImageUpload: (file: any) => Promise<void>;
};

export const DropZone: FC<DropZoneProps> = (props) => {
  const onDrop = useCallback((files) => {
    props.setCountOfFiles(files.length);
    files.map((file) => props.handleImageUpload(file));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="drop-zone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Vložiť</p>
      ) : (
        <p>Sem presuňte / vložte fotky, ktoré chcete nahrať...</p>
      )}
    </div>
  );
};
