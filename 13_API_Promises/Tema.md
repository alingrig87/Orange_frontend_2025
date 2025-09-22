# Tema API și Promises

## Proiect: Real-time Data Dashboard

### Descriere
Creează un dashboard care afișează date în timp real folosind API-uri simulate, promises, și async/await pentru o experiență fluidă.

### Cerințe tehnice
- **Multiple API endpoints** simulate
- **Real-time updates** cu timers
- **Error handling** robust
- **Loading states** și progress indicators
- **Data caching** cu localStorage
- **Retry mechanisms** pentru failed requests

### Componente obligatorii

#### 1. API Manager
```javascript
class APIManager {
    constructor() {
        this.baseUrl = 'https://api.simulation.com';
        this.cache = new Map();
        this.retryAttempts = 3;
    }
    
    async fetchWithRetry(endpoint, options = {}) {
        // Implementează retry logic
    }
    
    async get(endpoint) {
        // GET cu caching
    }
    
    async post(endpoint, data) {
        // POST cu error handling
    }
}
```

#### 2. Data Sources
- Weather API simulation
- Stock prices simulation  
- Social media metrics simulation
- Server status monitoring
- User analytics simulation

#### 3. Real-time Features
- Auto-refresh la intervale setate
- WebSocket simulation cu timers
- Live notifications pentru changes
- Progress bars pentru long operations

#### 4. Dashboard Widgets
- Charts cu data updates
- Metrics cards cu animations
- Alert system pentru thresholds
- Historical data views

### Criterii evaluare
- API integration și async handling (35%)
- Real-time functionality (25%)
- Error handling și UX (20%)
- Code architecture (20%)

### Timeline: 3 săptămâni
