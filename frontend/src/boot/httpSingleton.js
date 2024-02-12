const ApiSingleton = (function () {
  let instance;

  function createInstance() {
    const urlApi = "http://127.0.0.1:3000";

    return {
      getApiUrl: function () {
        return urlApi;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const api = ApiSingleton.getInstance();

export default api.getApiUrl();
