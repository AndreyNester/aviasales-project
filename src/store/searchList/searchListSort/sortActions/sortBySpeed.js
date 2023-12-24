function sortBySpeed(tickets) {
  return tickets.sort(
    (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
  );
}

export default sortBySpeed;
