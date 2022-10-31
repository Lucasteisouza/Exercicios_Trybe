// const getPlanet = () => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers',
//     },
//   };
//   console.log('Returned planet: ', mars);
// };

// setTimeout(() => getPlanet(), 4000); // Imprime Marte depois de 4 segundos
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};
const toFahrenheit = () => (getMarsTemperature() * (9 / 5)) + 32;
const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);
const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
const sendMarsTemperature = (callback) => {
  setTimeout(callback, messageDelay());
}
sendMarsTemperature(temperatureInFahrenheit)