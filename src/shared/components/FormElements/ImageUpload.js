import React, { useRef, useState, useEffect } from 'react';

import Button from '../../UIElements/Button';
import classes from './ImageUpload.module.css';

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();
  console.log('props.initialValue: ', props.initialValue);

  useEffect(() => {
    // if (props.initialValue) setPreviewUrl(props.initialValue);
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }, [file, props.initialValue]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div
        className={`${classes['image-upload']} ${
          props.center && classes.center
        }`}
      >
        <div className={classes.preview}>
          {props.initialValue && !previewUrl && (
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/${props.initialValue}`}
              alt="Preview"
            />
          )}
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!props.initialValue && !previewUrl && <p>Please select an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          Browse Image
        </Button>
        {!isValid && <p>{props.errorText}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
