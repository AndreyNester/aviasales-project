function sortByOptionally(tickets) {
  //  понятие Оптимальности здесь выражается очень грубо : произведение цены и суммы времени двух билетов
  return [
    ...tickets.sort(
      (a, b) =>
        a.price * (a.segments[0].duration + a.segments[1].duration) -
        b.price * (b.segments[0].duration + b.segments[1].duration)
    ),
  ];
}

export default sortByOptionally;
