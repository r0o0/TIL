# `input[type="file"]`

Check [DEMO](https://codepen.io/uvoro/pen/bXMbwo)

## Markup

```HTML
<input
  type="file"
  id="input-file"
  name="input-file"
  accept="image/*
  onchange={handleChange}
  hidden
/>
<label class="btn-upload" for="input-file" role="button">
  Upload Photo
</label>
```

## Javascript

```JS
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

```