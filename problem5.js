function convert(cel) {
  let currentTemp = cel;
  let Fahr = (currentTemp * 9) / 5 + 32;
  let result = Fahr + " \xB0F.";
  console.log(result);
}

convert(12);
