import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const DropZone = (props) => {
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
        <p>Sem presunte fotky ktoré chcete nahrať ...</p>
      )}
    </div>
  );
};
