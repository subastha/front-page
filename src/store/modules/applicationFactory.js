function create(application) {
  const id = application.id;
  const name = application.display_name;
  const description = application.description;
  const identifier = application.name_identifier;

  const obj = {};

  Object.defineProperties(obj, {
    id: {
      value: id,
      configurable: false,
      enumerable: true,
      writable: false,
    },
    name: {
      configurable: false,
      enumerable: true,
      get: () => name,
    },
    description: {
      configurable: false,
      enumerable: true,
      get: () => description,
    },
    identifier: {
      configurable: false,
      enumerable: true,
      get: () => identifier,
    },
  });

  return obj;
}


export default {
  create: application => create(application),
};
