# BOM - Browser Object Model

## 1. Window Object

### Proprietăți și metode
```javascript
// Dimensiuni fereastră
console.log(window.innerWidth);   // Lățimea viewport-ului
console.log(window.innerHeight);  // Înălțimea viewport-ului
console.log(window.outerWidth);   // Lățimea totală a ferestrei
console.log(window.outerHeight);  // Înălțimea totală a ferestrei

// Screen properties
console.log(screen.width);        // Lățimea ecranului
console.log(screen.height);       // Înălțimea ecranului
console.log(screen.availWidth);   // Lățimea disponibilă
console.log(screen.availHeight);  // Înălțimea disponibilă

// Location
console.log(location.href);       // URL complet
console.log(location.hostname);   // Numele hostului
console.log(location.pathname);   // Calea
console.log(location.search);     // Query string
console.log(location.hash);       // Fragment identifier
```

### Dialog boxes
```javascript
// Alert
alert("Mesaj de alertă");

// Confirm
const confirmed = confirm("Ești sigur?");
if (confirmed) {
    console.log("User confirmed");
}

// Prompt
const name = prompt("Introduceți numele:", "Default name");
if (name !== null) {
    console.log("Name entered:", name);
}
```

### Navigation
```javascript
// Deschide fereastră nouă
window.open("https://example.com", "_blank", "width=800,height=600");

// Închide fereastra (doar pentru ferestre deschise cu JS)
window.close();

// Reîncarcă pagina
location.reload();

// Navighează la URL nou
location.href = "https://newpage.com";
location.assign("https://newpage.com");

// Înlocuiește în istoric
location.replace("https://newpage.com");
```

## 2. Cookies

### Crearea și citirea
```javascript
// Setarea unui cookie
document.cookie = "username=john; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// Cookie cu opțiuni multiple
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

// Citirea unui cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Ștergerea unui cookie
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
```

### Cookie Manager Class
```javascript
class CookieManager {
    static set(name, value, days = 7, path = '/') {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=${path}`;
    }
    
    static get(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
        }
        return null;
    }
    
    static delete(name, path = '/') {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
    }
    
    static exists(name) {
        return this.get(name) !== null;
    }
    
    static getAll() {
        const cookies = {};
        const ca = document.cookie.split(';');
        
        ca.forEach(cookie => {
            const parts = cookie.trim().split('=');
            if (parts.length === 2) {
                cookies[parts[0]] = decodeURIComponent(parts[1]);
            }
        });
        
        return cookies;
    }
}
```

## 3. Web Storage

### localStorage
```javascript
// Setarea datelor
localStorage.setItem('username', 'john');
localStorage.setItem('preferences', JSON.stringify({
    theme: 'dark',
    language: 'en',
    notifications: true
}));

// Citirea datelor
const username = localStorage.getItem('username');
const preferences = JSON.parse(localStorage.getItem('preferences') || '{}');

// Ștergerea datelor
localStorage.removeItem('username');
localStorage.clear(); // Șterge tot

// Verificarea spațiului disponibil
function getStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            total += localStorage[key].length + key.length;
        }
    }
    return total;
}
```

### sessionStorage
```javascript
// Similar cu localStorage, dar se șterge la închiderea tab-ului
sessionStorage.setItem('tempData', 'value');
const tempData = sessionStorage.getItem('tempData');
sessionStorage.removeItem('tempData');
sessionStorage.clear();
```

### Storage Manager Class
```javascript
class StorageManager {
    constructor(storageType = 'localStorage') {
        this.storage = storageType === 'sessionStorage' ? sessionStorage : localStorage;
    }
    
    set(key, value) {
        try {
            const serializedValue = JSON.stringify(value);
            this.storage.setItem(key, serializedValue);
            return true;
        } catch (error) {
            console.error('Storage set error:', error);
            return false;
        }
    }
    
    get(key, defaultValue = null) {
        try {
            const item = this.storage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage get error:', error);
            return defaultValue;
        }
    }
    
    remove(key) {
        this.storage.removeItem(key);
    }
    
    clear() {
        this.storage.clear();
    }
    
    exists(key) {
        return this.storage.getItem(key) !== null;
    }
    
    keys() {
        return Object.keys(this.storage);
    }
    
    size() {
        return this.storage.length;
    }
    
    // Get storage usage in bytes
    getUsage() {
        let total = 0;
        for (let key in this.storage) {
            if (this.storage.hasOwnProperty(key)) {
                total += this.storage[key].length + key.length;
            }
        }
        return total;
    }
    
    // Check if storage is available
    static isAvailable(storageType = 'localStorage') {
        try {
            const storage = storageType === 'sessionStorage' ? sessionStorage : localStorage;
            const test = '__storage_test__';
            storage.setItem(test, test);
            storage.removeItem(test);
            return true;
        } catch (error) {
            return false;
        }
    }
}
```

## 4. Audio și Video

### HTML5 Audio
```javascript
class AudioPlayer {
    constructor(src) {
        this.audio = new Audio(src);
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.audio.addEventListener('loadstart', () => {
            console.log('Started loading audio');
        });
        
        this.audio.addEventListener('canplay', () => {
            console.log('Audio can start playing');
        });
        
        this.audio.addEventListener('ended', () => {
            console.log('Audio ended');
        });
        
        this.audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
        });
    }
    
    play() {
        return this.audio.play();
    }
    
    pause() {
        this.audio.pause();
    }
    
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }
    
    setVolume(volume) {
        this.audio.volume = Math.max(0, Math.min(1, volume));
    }
    
    seek(time) {
        this.audio.currentTime = time;
    }
    
    getDuration() {
        return this.audio.duration;
    }
    
    getCurrentTime() {
        return this.audio.currentTime;
    }
    
    isPlaying() {
        return !this.audio.paused;
    }
}
```

### Video Player
```javascript
class VideoPlayer {
    constructor(videoElement) {
        this.video = videoElement;
        this.setupControls();
    }
    
    setupControls() {
        // Play/Pause
        this.video.addEventListener('click', () => {
            if (this.video.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
        
        // Progress tracking
        this.video.addEventListener('timeupdate', () => {
            const progress = (this.video.currentTime / this.video.duration) * 100;
            this.updateProgressBar(progress);
        });
    }
    
    play() {
        return this.video.play();
    }
    
    pause() {
        this.video.pause();
    }
    
    toggleFullscreen() {
        if (this.video.requestFullscreen) {
            this.video.requestFullscreen();
        } else if (this.video.webkitRequestFullscreen) {
            this.video.webkitRequestFullscreen();
        } else if (this.video.msRequestFullscreen) {
            this.video.msRequestFullscreen();
        }
    }
    
    updateProgressBar(progress) {
        // Update custom progress bar
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }
}
```

## Exemple Practice Complete

### Shopping Cart cu localStorage
```javascript
class ShoppingCart {
    constructor() {
        this.storageKey = 'shopping_cart';
        this.items = this.loadCart();
        this.setupEventListeners();
    }
    
    loadCart() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }
    
    saveCart() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
        this.updateCartDisplay();
    }
    
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1,
                addedAt: new Date().toISOString()
            });
        }
        
        this.saveCart();
        this.showNotification(`Added ${product.name} to cart`);
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }
    
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
    
    getItemCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    
    clear() {
        this.items = [];
        this.saveCart();
    }
    
    updateCartDisplay() {
        const cartCount = document.querySelector('.cart-count');
        const cartTotal = document.querySelector('.cart-total');
        
        if (cartCount) {
            cartCount.textContent = this.getItemCount();
        }
        
        if (cartTotal) {
            cartTotal.textContent = `$${this.getTotal().toFixed(2)}`;
        }
        
        this.renderCartItems();
    }
    
    renderCartItems() {
        const cartContainer = document.querySelector('.cart-items');
        if (!cartContainer) return;
        
        cartContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="item-price">$${item.price}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button onclick="cart.removeItem(${item.id})" class="remove-btn">Remove</button>
            </div>
        `).join('');
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    setupEventListeners() {
        // Listen for storage changes in other tabs
        window.addEventListener('storage', (e) => {
            if (e.key === this.storageKey) {
                this.items = JSON.parse(e.newValue || '[]');
                this.updateCartDisplay();
            }
        });
    }
}

// Initialize cart
const cart = new ShoppingCart();
```

## Best Practices

1. **Feature Detection** înainte de folosirea API-urilor
2. **Error Handling** pentru operații storage
3. **Data Validation** pentru cookies și storage
4. **Performance** - evită accesul excesiv la storage
5. **Security** - nu stoca informații sensibile în storage
6. **Cross-tab Communication** cu storage events

## Resurse Utile
- [MDN BOM](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [HTML5 Audio/Video](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery)
