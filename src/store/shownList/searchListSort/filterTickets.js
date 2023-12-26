function filterTickets(responce, filtersStatus) {
  const activeFilters = filtersStatus.filter((el) => el.active);

  const filteredTickets = responce.filter((el) =>
    activeFilters.some(
      (item) =>
        item.amountOfTransfer === el.segments[0].stops.length || item.amountOfTransfer === el.segments[1].stops.length
    )
  );

  return filteredTickets;
}

export default filterTickets;
