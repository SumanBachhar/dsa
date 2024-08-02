const startDay = 0;
const totalDays = 30;

const coutSunday = (startDay, totalDays) => {
  const daysOfWeek = 7;
  let sundayCount = 0;

  for (let i = 0; i < totalDays; i++) {
    if ((startDay + i) % daysOfWeek === 0) {
      sundayCount++;
    }
  }
  return sundayCount;
};
console.log(coutSunday(startDay, totalDays));
