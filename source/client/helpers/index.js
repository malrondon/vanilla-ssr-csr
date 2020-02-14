const Helpers = {
  parseRequestURL: () => {
    const url = location.hash.slice(1).toLowerCase() || '/';
    const r = url.split("/");
    const request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];

    return request;
  },
  sleep: ms => new Promise(resolve => setTimeout(resolve, ms))
}

export default Helpers;
