
function getResultByPath(path, obj) {
  const normalizedPath = path.replace(/\[(\d+)\]/g, '.$1');
  const keys = normalizedPath.split('.');

  let result = obj;

  for (const key of keys) {
    if (result === undefined || result === null) {
      return undefined;
    }

    result = result[key];
  }

  return result;
}

const path = "data.results.status";

const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    }
  },
};

console.log(getResultByPath(path, obj));

module.exports = getResultByPath;
