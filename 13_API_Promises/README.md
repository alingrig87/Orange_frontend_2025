# API, Promises și Async Programming

## 1. Timers și Async Basics

### setTimeout și setInterval
```javascript
// setTimeout - execută o dată după delay
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

// setInterval - execută repetat
const intervalId = setInterval(() => {
    console.log("Repeating every second");
}, 1000);

// Oprirea timer-elor
clearTimeout(timeoutId);
clearInterval(intervalId);
```

## 2. Promises

### Crearea și folosirea
```javascript
// Crearea unei promisiuni
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

// Folosirea promisiunii
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Cleanup"));
```

### Promise chaining
```javascript
fetch('/api/user')
    .then(response => response.json())
    .then(user => fetch(`/api/posts/${user.id}`))
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error));
```

## 3. Async/Await

### Sintaxa modernă
```javascript
async function fetchUserData() {
    try {
        const response = await fetch('/api/user');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Folosirea
const userData = await fetchUserData();
```

## 4. Fetch API

### GET Request
```javascript
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
```

### POST Request
```javascript
async function postData(data) {
    try {
        const response = await fetch('https://api.example.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        return await response.json();
    } catch (error) {
        console.error('Post error:', error);
    }
}
```

## 5. Error Handling

### Try-Catch
```javascript
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error('Error occurred:', error.message);
} finally {
    console.log('Cleanup code');
}
```

### Promise Error Handling
```javascript
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results))
    .catch(error => console.error('One of the promises failed:', error));
```

## Exemple Practice

### Chronometer App
```javascript
class Chronometer {
    constructor() {
        this.time = 0;
        this.interval = null;
        this.isRunning = false;
    }
    
    start() {
        if (!this.isRunning) {
            this.interval = setInterval(() => {
                this.time += 10;
                this.updateDisplay();
            }, 10);
            this.isRunning = true;
        }
    }
    
    stop() {
        if (this.isRunning) {
            clearInterval(this.interval);
            this.isRunning = false;
        }
    }
    
    reset() {
        this.stop();
        this.time = 0;
        this.updateDisplay();
    }
    
    updateDisplay() {
        const minutes = Math.floor(this.time / 60000);
        const seconds = Math.floor((this.time % 60000) / 1000);
        const milliseconds = Math.floor((this.time % 1000) / 10);
        
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
        
        document.getElementById('display').textContent = display;
    }
}
```

### Weather App (Simulat)
```javascript
class WeatherApp {
    constructor() {
        this.apiKey = 'your-api-key';
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }
    
    async getWeather(city) {
        try {
            const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            
            const data = await response.json();
            return this.formatWeatherData(data);
        } catch (error) {
            console.error('Weather fetch error:', error);
            throw error;
        }
    }
    
    formatWeatherData(data) {
        return {
            city: data.name,
            temperature: Math.round(data.main.temp),
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };
    }
    
    async displayWeather(city) {
        try {
            const weather = await this.getWeather(city);
            this.renderWeather(weather);
        } catch (error) {
            this.renderError('Could not fetch weather data');
        }
    }
}
```

## Resurse Utile
- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
