function sortByPrice(tickets) {
  return [...tickets.sort((a, b) => a.price - b.price)];
}

export default sortByPrice;
