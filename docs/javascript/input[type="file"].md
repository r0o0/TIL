---
title: input[type="file"]
lang: en-US
next: false
---

<Icon iconSuffix="js" />

# `input[type="file"]`

Check [DEMO](https://codepen.io/uvoro/pen/bXMbwo)

## Demo

::: demo JS
<html>
  <div class="demo-frame">
    <input
      type="file"
      id="input-file"
      name="input-file"
      accept="image/*"
      onchange={handleChange}
      hidden
    />
    <label class="btn-upload" for="input-file" role="button">
      Upload Photo
    </label>
  </div>
</html>
<script>
// handles changes in input[type="file"]
const handleChange = () => {
  const fileUploader = document.querySelector('#input-file');
  const getFile = fileUploader.files
  if (getFile.length !== 0) {
    const uploadedFile = getFile[0];
    readFile(uploadedFile);
  }
}
// FileReader
const readFile = (uploadedFile) => {
  if (uploadedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      const parent = document.querySelector('.preview-box');
      // render html for a preview of image uploaded
      parent.innerHTML = `<img class="preview-content" src=${reader.result} />`;
    };
    // reader converts image file to Data URL
    reader.readAsDataURL(uploadedFile);
  }
};
</script>
<style>
  .demo-frame {
    padding: 20px;
    border: 1px solid #e7e7e7;
  }
  .btn-upload {
    padding: 5px 10px;
    background-color: #eaeaea;
    cursor: pointer;
  }
</style>
:::
