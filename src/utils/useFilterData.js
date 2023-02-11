export const Academies = {
  FRONTEND: 'frontend',
  TESTERS: 'testers',
  DEVELOPERS: 'developers',
  ALL: 'all',
};

const getRandom = function (arr, count) {
  let newRandArr = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter(
      (user, index, self) =>
        self.findIndex((t) => t.name === user.name) === index
    )
    .slice(0, count);

  return newRandArr;
};

export const filterUserAcademy = function (data, page) {
  const usersData = data.map((element) => ({
    graduate: element.academy.toLowerCase().replace('-', ''),
    ...element,
  }));
  const filtered = usersData.filter((user) => user.graduate.includes(page));
  if (filtered.length === 0) {
    return getRandom(usersData, 3);
  } else {
    return getRandom(filtered, 3);
  }
};
