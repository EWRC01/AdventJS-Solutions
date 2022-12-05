function getFechaCompleta(year, holidays){
    return holidays.map((holiday) => `${holiday}/${year}`
    )
  }
  function countHours(year, holidays) {
    return getFechaCompleta(year, holidays).map((holiday) => {
      return new Date(holiday).getDay()
    }).filter((item) => item !== 0 && item !== 6).length * 2
  }
  
  console.log(countHours(2022, ['01/06', '04/01', '12/25'])) // 2 días -> 4 horas extra en el año