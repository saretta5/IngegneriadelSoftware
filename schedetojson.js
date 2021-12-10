// get the form element from dom
const formElement = document.querySelector("form#forms");

// convert the form to JSON
const getFormJSON = (form) => {
  const data = new FormData(form);
  return Array.from(data.keys()).reduce((result, key) => {
    if (result[key]) {
      result[key] = data.getAll(key);
      return result;
    }
    result[key] = data.get(key);
    return result;
  }, {});
};

// handle the form submission event, prevent default form behaviour, check validity, convert form to JSON
const handler = (event) => {
  event.preventDefault();
  const valid = formElement.reportValidity();
  if (valid) {
    const result = getFormJSON(formElement);

    // use spread function, but override the keys we've made changes to
    const output = {
      ...result
    };
    console.log(output);
  }
};

formElement.addEventListener("submit", handler);
