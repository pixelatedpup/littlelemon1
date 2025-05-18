// src/api.js

// Simulated fetchAPI that returns different times based on the date
export const fetchAPI = (date) => {
    const result = [];
    const seededRandom = seedRandom(new Date(date).getDate());
  
    for (let i = 17; i <= 23; i++) {
      if (seededRandom() < 0.5) {
        result.push(`${i}:00`);
      }
    }
  
    return Promise.resolve(result);
  };
  
  // Simulated form submission function
  export const submitAPI = (formData) => {
    return Promise.resolve(true);
  };
  
  // Seeded random function to make times vary with date
  function seedRandom(seed) {
    return function () {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
  }
  