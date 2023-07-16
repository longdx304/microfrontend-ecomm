import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
  // if using React
  // ReactDOM.render(<App />, el);
};

// If in development mode and running in isolation
// Assume that only this MFE have an element with id dev-products
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el);
  }
}

// Export mount for container to use
export { mount };
