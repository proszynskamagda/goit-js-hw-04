function calcAverageCalories(days) {
  let totalCalories = 0;

  for (const day of days) {
    totalCalories += day.calories;

    const averageCalories = totalCalories / days.length;

    return averageCalories;
  }
}
