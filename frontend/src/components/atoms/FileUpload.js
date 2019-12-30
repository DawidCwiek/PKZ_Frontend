import React from 'react';
import styled from 'styled-components';

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
`;

const FileUpload = props => {
  const { field, form } = props;

  const handleChange = e => {
    const file = e.currentTarget.files[0];
    const reader = new window.FileReader();
    const imgTag = document.getElementById('myimage');
    imgTag.title = file.name;
    reader.onload = event => {
      imgTag.src = event.target.result;
    };
    reader.readAsDataURL(file);
    form.setFieldValue(field.name, file);
  };

  return (
    <Wraper>
      <input type="file" onChange={o => handleChange(o)} className="form-control" />
      <HeaderImg src="" alt="" id="myimage" />
    </Wraper>
  );
};

export default FileUpload;
