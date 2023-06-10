
exports.getDate = function () {

  const today = new Date();

  const options = {
    day: "numeric",
    month: "long",
    weekday: "long"
  };
  const day = today.toLocaleDateString("pt-BR", options);

  return day;
}

exports.getDay = function () {

  const today = new Date();

  const options = {
    weekday: "long"
  };
  const day = today.toLocaleDateString("pt-BR", options);

  return day;
}
