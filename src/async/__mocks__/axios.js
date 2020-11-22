export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "yue" } })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
