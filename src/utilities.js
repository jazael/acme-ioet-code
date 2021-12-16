group_in_pairs = arrList => {
  const groups = [];
  for (let i = 0; i < arrList.length; i++) {
    const pairs = arrList.slice(i, i + 2);
    if (pairs.length === 1) {
      pairs.push(arrList[0]);
    }

    groups.push(pairs);
  }

  return groups;
}

is_in_range = (value, range) => {
  return value >= range[0] && value <= range[1];
}

module.exports = {
  group_in_pairs,
  is_in_range
};
