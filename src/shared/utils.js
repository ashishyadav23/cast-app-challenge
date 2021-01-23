export const fetchJson = () => {
  return fetch(
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
  );
};

export const filterData = (list, type) => {
  let result = [];
  if (list.length > 0) {
    let filteredData = list.filter(
      (v) => v.releaseYear >= 2010 && v.programType === type
    );
    result = filteredData.sort((a, b) => {
      return b.title < a.title ? 1 : b.title > a.title ? -1 : 0;
    });
  }
  return result.length > 0 ? result.splice(0, 21) : result;
};

export const filterDataByTitle = (list, title) => {
  let result = [];
  if (list.length > 0) {
    result = list.filter((v) => v.title === title);
  }
  return result.length > 0 ? result[0] : result;
};
