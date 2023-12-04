const createRequest = (
  url: string,
  options: object,
  callback?: (data: { id: number; content: string }[]) => void | null
): Promise<boolean | void> => {
  return fetch(url, options).then((response) => {
    if (response.ok) {
      response.text().then((text) => {
        if (callback) callback(JSON.parse(text));
      });
      return true;
    } else if (response.status === 204) {
      return true;
    } else {
      alert("Ошибка в HTTP:" + response.status + "\n" + response.statusText);
    }
  });
};

export default createRequest;
