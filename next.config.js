module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: "/about", destination: "/", permanent: true }];
  },
};
