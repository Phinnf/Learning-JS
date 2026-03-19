const myCalculator = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== `number` || typeof num2 !== `number`) {
      reject(`Error: Both arguments must be numbers`);
    } else {
      let sum = num1 + num2;
      resolve(sum);
    }
  });
};

const displaySum = (some) => {
  console.log(some);
};
myCalculator(8, 8).then(displaySum)


const getWeatherFromAPI = (weather = `Sunny`) => {
  return new Promise((resolve, reject) => {
    if (typeof weather !== `string`) {
      reject(new Error(`Error: weather must be a string`));
    } else {
      resolve(weather);
    }
  });
};

const checkWeather = async (weather) => {
  try {
    const testWeather = await getWeatherFromAPI(weather);
    console.log(testWeather);
  } catch (err) {
    console.error(err);
  }
};

checkWeather(2);
