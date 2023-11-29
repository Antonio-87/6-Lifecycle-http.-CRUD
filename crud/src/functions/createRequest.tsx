const createRequest = (
  url: string,
  options: object,
  callback?: (data: { id: number; content: string }[]) => void | null
) => {
  fetch(url, options).then((response) => {
    if (response.ok) {
      response.json().then((jsonData) => {
        if (callback) callback(jsonData);
      });
    } else {
      alert("Ошибка в HTTP:" + response.status + "\n" + response.statusText);
    }
  });
};

export default createRequest;
