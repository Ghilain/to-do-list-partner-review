//  DOM element
const addElem = (elem, classes, parent) => {
  const createdElem = document.createElement(elem);
  if (classes !== undefined) {
    classes.forEach((classElement) => createdElem.classList.add(classElement));
  }
  parent.appendChild(createdElem);

  return createdElem;
};

export default addElem;
