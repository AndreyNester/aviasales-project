function appropriateList(list, bunch) {
  return list.slice(0, bunch + 1).flat();
}

export default appropriateList;
