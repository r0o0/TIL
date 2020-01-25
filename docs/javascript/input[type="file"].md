---
title: input[type="file"]
lang: en-US
next: false
---

<Icon iconSuffix="js" />

# `input[type="file"]`

## Demo <Button icon="codepen" type="link" link="https://codepen.io/uvoro/pen/bXMbwo" style="width: 28px; height: 28px; margin-left: 10px;" />

::: demo js
<html>
  <div class="demo-code-block">
    <input
      type="file"
      id="input-file"
      name="input-file"
      accept="image/*"
      onchange={handleFileChange}
      hidden
    />
    <label class="btn-upload" for="input-file" role="button">
      Upload Photo
    </label>
  </div>
</html>
<script>
(() => {
// handles changes in input[type="file"]
const handleFileChange = () => {
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
})();
</script>
<style>
  .btn-upload {
    padding: 5px 10px;
    background-color: #eaeaea;
    cursor: pointer;
  }
</style>
:::

#### Related Links
- [MDN - input type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
- [MDN - FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
