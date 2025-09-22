# Tema JavaScript DOM - Mini-proiecte

## Proiect 1: Interactive Dashboard Creator 📊

### Descriere
Creează o aplicație care permite utilizatorilor să construiască dashboard-uri interactive prin drag & drop, cu widget-uri personalizabile și salvare locală.

### Cerințe tehnice
- **Drag & Drop** nativ (fără librării externe)
- **Widget system** modular și extensibil
- **Real-time editing** cu preview instant
- **Local storage** pentru persistența datelor
- **Export/Import** funcționalitate
- **Responsive design** adaptat pentru mobile

### Structura aplicației

#### 1. Layout Principal
```html
<div class="dashboard-creator">
    <header class="app-header">
        <div class="logo">Dashboard Creator</div>
        <div class="actions">
            <button id="save-dashboard">Save</button>
            <button id="load-dashboard">Load</button>
            <button id="export-dashboard">Export</button>
            <button id="clear-dashboard">Clear All</button>
        </div>
    </header>
    
    <div class="app-body">
        <aside class="widget-palette">
            <h3>Available Widgets</h3>
            <div class="widget-list">
                <div class="widget-template" data-type="chart">📊 Chart Widget</div>
                <div class="widget-template" data-type="counter">🔢 Counter Widget</div>
                <div class="widget-template" data-type="text">📝 Text Widget</div>
                <div class="widget-template" data-type="image">🖼️ Image Widget</div>
                <div class="widget-template" data-type="list">📋 List Widget</div>
                <div class="widget-template" data-type="clock">🕐 Clock Widget</div>
            </div>
        </aside>
        
        <main class="dashboard-canvas">
            <div class="canvas-grid" id="dashboard-grid">
                <div class="drop-zone">Drop widgets here</div>
            </div>
        </main>
        
        <aside class="properties-panel">
            <h3>Widget Properties</h3>
            <div id="widget-properties">
                <p>Select a widget to edit its properties</p>
            </div>
        </aside>
    </div>
</div>
```

#### 2. Widget Templates și Funcționalitate

##### Counter Widget
```javascript
class CounterWidget {
    constructor(container, config = {}) {
        this.container = container;
        this.config = {
            title: config.title || "Counter",
            value: config.value || 0,
            increment: config.increment || 1,
            color: config.color || "#007bff"
        };
        this.render();
        this.bindEvents();
    }
    
    render() {
        this.container.innerHTML = `
            <div class="widget-header">
                <h4>${this.config.title}</h4>
                <div class="widget-controls">
                    <button class="edit-widget">⚙️</button>
                    <button class="delete-widget">🗑️</button>
                </div>
            </div>
            <div class="widget-content">
                <div class="counter-display" style="color: ${this.config.color}">
                    ${this.config.value}
                </div>
                <div class="counter-controls">
                    <button class="decrement-btn">-</button>
                    <button class="increment-btn">+</button>
                    <button class="reset-btn">Reset</button>
                </div>
            </div>
        `;
    }
    
    bindEvents() {
        const incrementBtn = this.container.querySelector('.increment-btn');
        const decrementBtn = this.container.querySelector('.decrement-btn');
        const resetBtn = this.container.querySelector('.reset-btn');
        const display = this.container.querySelector('.counter-display');
        
        incrementBtn.addEventListener('click', () => {
            this.config.value += this.config.increment;
            display.textContent = this.config.value;
        });
        
        decrementBtn.addEventListener('click', () => {
            this.config.value -= this.config.increment;
            display.textContent = this.config.value;
        });
        
        resetBtn.addEventListener('click', () => {
            this.config.value = 0;
            display.textContent = this.config.value;
        });
    }
    
    getConfig() {
        return this.config;
    }
    
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.render();
        this.bindEvents();
    }
}
```

##### Chart Widget (Simulat)
```javascript
class ChartWidget {
    constructor(container, config = {}) {
        this.container = container;
        this.config = {
            title: config.title || "Chart",
            type: config.type || "bar",
            data: config.data || [10, 20, 30, 40, 50],
            labels: config.labels || ["A", "B", "C", "D", "E"],
            color: config.color || "#28a745"
        };
        this.render();
    }
    
    render() {
        this.container.innerHTML = `
            <div class="widget-header">
                <h4>${this.config.title}</h4>
                <div class="widget-controls">
                    <button class="edit-widget">⚙️</button>
                    <button class="delete-widget">🗑️</button>
                </div>
            </div>
            <div class="widget-content">
                <div class="chart-container">
                    ${this.renderChart()}
                </div>
            </div>
        `;
    }
    
    renderChart() {
        const maxValue = Math.max(...this.config.data);
        return this.config.data.map((value, index) => {
            const height = (value / maxValue) * 100;
            return `
                <div class="chart-bar">
                    <div class="bar" style="height: ${height}%; background-color: ${this.config.color}">
                        <span class="bar-value">${value}</span>
                    </div>
                    <div class="bar-label">${this.config.labels[index]}</div>
                </div>
            `;
        }).join('');
    }
}
```

#### 3. Drag & Drop System

```javascript
class DragDropManager {
    constructor() {
        this.draggedElement = null;
        this.placeholder = null;
        this.init();
    }
    
    init() {
        this.setupWidgetPalette();
        this.setupDropZones();
        this.setupGridSorting();
    }
    
    setupWidgetPalette() {
        const widgetTemplates = document.querySelectorAll('.widget-template');
        
        widgetTemplates.forEach(template => {
            template.draggable = true;
            
            template.addEventListener('dragstart', (e) => {
                this.draggedElement = template;
                e.dataTransfer.setData('text/plain', template.dataset.type);
                e.dataTransfer.effectAllowed = 'copy';
            });
        });
    }
    
    setupDropZones() {
        const canvas = document.getElementById('dashboard-grid');
        
        canvas.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            
            // Visual feedback
            const afterElement = this.getDragAfterElement(canvas, e.clientY);
            const draggedElement = document.querySelector('.dragging');
            
            if (afterElement == null) {
                canvas.appendChild(this.getPlaceholder());
            } else {
                canvas.insertBefore(this.getPlaceholder(), afterElement);
            }
        });
        
        canvas.addEventListener('drop', (e) => {
            e.preventDefault();
            const widgetType = e.dataTransfer.getData('text/plain');
            this.createWidget(widgetType, e.target);
            this.removePlaceholder();
        });
        
        canvas.addEventListener('dragleave', (e) => {
            if (!canvas.contains(e.relatedTarget)) {
                this.removePlaceholder();
            }
        });
    }
    
    createWidget(type, dropTarget) {
        const widgetContainer = document.createElement('div');
        widgetContainer.classList.add('dashboard-widget', `widget-${type}`);
        widgetContainer.dataset.type = type;
        
        // Generate unique ID
        const widgetId = 'widget-' + Date.now();
        widgetContainer.id = widgetId;
        
        let widget;
        switch (type) {
            case 'counter':
                widget = new CounterWidget(widgetContainer);
                break;
            case 'chart':
                widget = new ChartWidget(widgetContainer);
                break;
            case 'text':
                widget = new TextWidget(widgetContainer);
                break;
            case 'clock':
                widget = new ClockWidget(widgetContainer);
                break;
            default:
                console.warn('Unknown widget type:', type);
                return;
        }
        
        // Store widget instance
        widgetContainer._widgetInstance = widget;
        
        // Add to canvas
        const canvas = document.getElementById('dashboard-grid');
        const placeholder = this.placeholder;
        
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.replaceChild(widgetContainer, placeholder);
        } else {
            canvas.appendChild(widgetContainer);
        }
        
        this.setupWidgetInteractions(widgetContainer);
    }
    
    setupWidgetInteractions(widgetContainer) {
        // Make widget draggable for reordering
        widgetContainer.draggable = true;
        
        widgetContainer.addEventListener('dragstart', (e) => {
            widgetContainer.classList.add('dragging');
            this.draggedElement = widgetContainer;
        });
        
        widgetContainer.addEventListener('dragend', () => {
            widgetContainer.classList.remove('dragging');
            this.draggedElement = null;
        });
        
        // Widget selection
        widgetContainer.addEventListener('click', (e) => {
            if (!e.target.closest('.widget-controls')) {
                this.selectWidget(widgetContainer);
            }
        });
        
        // Delete functionality
        const deleteBtn = widgetContainer.querySelector('.delete-widget');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to delete this widget?')) {
                    widgetContainer.remove();
                }
            });
        }
        
        // Edit functionality
        const editBtn = widgetContainer.querySelector('.edit-widget');
        if (editBtn) {
            editBtn.addEventListener('click', () => {
                this.openWidgetEditor(widgetContainer);
            });
        }
    }
    
    selectWidget(widgetContainer) {
        // Remove previous selection
        document.querySelectorAll('.dashboard-widget.selected').forEach(w => {
            w.classList.remove('selected');
        });
        
        // Add selection to current widget
        widgetContainer.classList.add('selected');
        
        // Update properties panel
        this.updatePropertiesPanel(widgetContainer);
    }
    
    updatePropertiesPanel(widgetContainer) {
        const propertiesPanel = document.getElementById('widget-properties');
        const widget = widgetContainer._widgetInstance;
        
        if (!widget) return;
        
        const config = widget.getConfig();
        const type = widgetContainer.dataset.type;
        
        propertiesPanel.innerHTML = `
            <h4>Edit ${type.charAt(0).toUpperCase() + type.slice(1)} Widget</h4>
            <form class="properties-form">
                <div class="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" value="${config.title || ''}">
                </div>
                ${this.getTypeSpecificProperties(type, config)}
                <div class="form-actions">
                    <button type="submit">Apply Changes</button>
                    <button type="button" class="cancel-btn">Cancel</button>
                </div>
            </form>
        `;
        
        // Handle form submission
        const form = propertiesPanel.querySelector('.properties-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.applyWidgetChanges(widgetContainer, form);
        });
    }
    
    getTypeSpecificProperties(type, config) {
        switch (type) {
            case 'counter':
                return `
                    <div class="form-group">
                        <label>Initial Value:</label>
                        <input type="number" name="value" value="${config.value || 0}">
                    </div>
                    <div class="form-group">
                        <label>Increment:</label>
                        <input type="number" name="increment" value="${config.increment || 1}">
                    </div>
                    <div class="form-group">
                        <label>Color:</label>
                        <input type="color" name="color" value="${config.color || '#007bff'}">
                    </div>
                `;
            case 'chart':
                return `
                    <div class="form-group">
                        <label>Chart Type:</label>
                        <select name="type">
                            <option value="bar" ${config.type === 'bar' ? 'selected' : ''}>Bar</option>
                            <option value="line" ${config.type === 'line' ? 'selected' : ''}>Line</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Data (comma separated):</label>
                        <input type="text" name="data" value="${(config.data || []).join(', ')}">
                    </div>
                    <div class="form-group">
                        <label>Labels (comma separated):</label>
                        <input type="text" name="labels" value="${(config.labels || []).join(', ')}">
                    </div>
                `;
            default:
                return '';
        }
    }
    
    applyWidgetChanges(widgetContainer, form) {
        const formData = new FormData(form);
        const widget = widgetContainer._widgetInstance;
        const newConfig = {};
        
        for (let [key, value] of formData.entries()) {
            if (key === 'data' || key === 'labels') {
                newConfig[key] = value.split(',').map(v => v.trim());
                if (key === 'data') {
                    newConfig[key] = newConfig[key].map(Number);
                }
            } else if (key === 'value' || key === 'increment') {
                newConfig[key] = Number(value);
            } else {
                newConfig[key] = value;
            }
        }
        
        widget.updateConfig(newConfig);
    }
    
    getPlaceholder() {
        if (!this.placeholder) {
            this.placeholder = document.createElement('div');
            this.placeholder.classList.add('drop-placeholder');
            this.placeholder.textContent = 'Drop here';
        }
        return this.placeholder;
    }
    
    removePlaceholder() {
        if (this.placeholder && this.placeholder.parentNode) {
            this.placeholder.parentNode.removeChild(this.placeholder);
        }
    }
}
```

#### 4. Persistence și Export/Import

```javascript
class DashboardManager {
    constructor() {
        this.currentDashboard = {
            id: null,
            name: 'Untitled Dashboard',
            widgets: [],
            created: new Date(),
            modified: new Date()
        };
    }
    
    saveDashboard() {
        const widgets = [];
        const widgetElements = document.querySelectorAll('.dashboard-widget');
        
        widgetElements.forEach((element, index) => {
            const widget = element._widgetInstance;
            if (widget) {
                widgets.push({
                    id: element.id,
                    type: element.dataset.type,
                    position: index,
                    config: widget.getConfig()
                });
            }
        });
        
        this.currentDashboard.widgets = widgets;
        this.currentDashboard.modified = new Date();
        
        // Save to localStorage
        const dashboards = this.getSavedDashboards();
        if (!this.currentDashboard.id) {
            this.currentDashboard.id = 'dashboard-' + Date.now();
        }
        
        dashboards[this.currentDashboard.id] = this.currentDashboard;
        localStorage.setItem('dashboards', JSON.stringify(dashboards));
        
        this.showNotification('Dashboard saved successfully!');
    }
    
    loadDashboard(dashboardId) {
        const dashboards = this.getSavedDashboards();
        const dashboard = dashboards[dashboardId];
        
        if (!dashboard) {
            this.showNotification('Dashboard not found!', 'error');
            return;
        }
        
        // Clear current dashboard
        this.clearDashboard();
        
        // Load widgets
        const canvas = document.getElementById('dashboard-grid');
        dashboard.widgets
            .sort((a, b) => a.position - b.position)
            .forEach(widgetData => {
                this.createWidgetFromData(widgetData, canvas);
            });
        
        this.currentDashboard = dashboard;
        this.showNotification('Dashboard loaded successfully!');
    }
    
    exportDashboard() {
        const exportData = {
            ...this.currentDashboard,
            exportedAt: new Date(),
            version: '1.0'
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `dashboard-${this.currentDashboard.name.replace(/\s+/g, '-')}.json`;
        link.click();
    }
    
    importDashboard(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                
                // Validate structure
                if (!importedData.widgets || !Array.isArray(importedData.widgets)) {
                    throw new Error('Invalid dashboard format');
                }
                
                // Load the imported dashboard
                this.loadDashboardFromData(importedData);
                this.showNotification('Dashboard imported successfully!');
                
            } catch (error) {
                this.showNotification('Error importing dashboard: ' + error.message, 'error');
            }
        };
        reader.readAsText(file);
    }
    
    getSavedDashboards() {
        const saved = localStorage.getItem('dashboards');
        return saved ? JSON.parse(saved) : {};
    }
    
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
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
}
```

### Cerințe specifice

#### 1. Widget Types obligatorii
- **Counter Widget** - cu increment/decrement și reset
- **Chart Widget** - bar chart simplu cu date editabile  
- **Text Widget** - pentru note și descrieri
- **Clock Widget** - ceas digital cu format personalizabil
- **List Widget** - pentru todo-uri sau liste simple
- **Image Widget** - pentru afișarea imaginilor

#### 2. Drag & Drop Features
- Drag din palette pentru a crea widget-uri noi
- Drag între widget-uri pentru reordonare
- Visual feedback în timpul drag-ului
- Drop zones clare și intuitive

#### 3. Persistence Features
- Salvare automată în localStorage
- Export ca fișier JSON
- Import din fișier JSON
- Versioning pentru compatibilitate

#### 4. Responsive Design
- Layout adaptat pentru tablet și mobile
- Touch-friendly pentru drag & drop pe mobile
- Collapsible sidebar pe ecrane mici

### Criterii de evaluare
- ✅ **Drag & Drop Implementation** (25 puncte)
- ✅ **Widget System Architecture** (25 puncte)
- ✅ **Data Persistence** (20 puncte)
- ✅ **User Experience** (15 puncte)
- ✅ **Code Quality și Organization** (15 puncte)

---

## Proiect 2: Real-time Chat Interface 💬

### Descriere
Creează o interfață de chat în timp real (simulat) cu rooms, emoticons, file sharing simulat și sistem de notificări.

### Cerințe tehnice
- **Multi-room support** cu switching între rooms
- **Message types** (text, emoji, file, system messages)
- **User management** cu avatare și status
- **Real-time simulation** cu WebSocket simulation
- **Message search și filtering**
- **Responsive design** cu mobile-first approach

### Funcționalități obligatorii

#### 1. Chat Rooms Management
```javascript
class ChatRoom {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.messages = [];
        this.users = new Map();
        this.created = new Date();
    }
    
    addMessage(message) {
        message.timestamp = new Date();
        message.id = 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        this.messages.push(message);
        return message;
    }
    
    addUser(user) {
        this.users.set(user.id, {
            ...user,
            joinedAt: new Date(),
            lastSeen: new Date()
        });
    }
    
    removeUser(userId) {
        this.users.delete(userId);
    }
    
    getMessages(limit = 50, offset = 0) {
        return this.messages.slice(offset, offset + limit);
    }
}
```

#### 2. Message System
```javascript
class Message {
    constructor(type, content, author, metadata = {}) {
        this.type = type; // 'text', 'emoji', 'file', 'system'
        this.content = content;
        this.author = author;
        this.metadata = metadata;
        this.reactions = new Map();
        this.edited = false;
        this.editHistory = [];
    }
    
    addReaction(emoji, userId) {
        if (!this.reactions.has(emoji)) {
            this.reactions.set(emoji, new Set());
        }
        this.reactions.get(emoji).add(userId);
    }
    
    removeReaction(emoji, userId) {
        if (this.reactions.has(emoji)) {
            this.reactions.get(emoji).delete(userId);
            if (this.reactions.get(emoji).size === 0) {
                this.reactions.delete(emoji);
            }
        }
    }
    
    edit(newContent, editorId) {
        if (this.author.id !== editorId) return false;
        
        this.editHistory.push({
            content: this.content,
            editedAt: new Date()
        });
        
        this.content = newContent;
        this.edited = true;
        this.lastEditedAt = new Date();
        return true;
    }
}
```

#### 3. Real-time Simulation
```javascript
class ChatSimulator {
    constructor() {
        this.bots = [
            { id: 'bot1', name: 'Alice', avatar: '👩', status: 'online' },
            { id: 'bot2', name: 'Bob', avatar: '👨', status: 'away' },
            { id: 'bot3', name: 'Charlie', avatar: '🧑', status: 'online' }
        ];
        
        this.messageTemplates = [
            "Hello everyone! 👋",
            "How's everyone doing today?",
            "Anyone working on something interesting?",
            "Great weather today! ☀️",
            "Coffee break time! ☕",
            "Happy Friday! 🎉",
            "Working late tonight 🌙",
            "Just finished a big project! 🚀"
        ];
        
        this.isRunning = false;
    }
    
    start(chatApp) {
        this.chatApp = chatApp;
        this.isRunning = true;
        this.scheduleNextMessage();
    }
    
    stop() {
        this.isRunning = false;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
    
    scheduleNextMessage() {
        if (!this.isRunning) return;
        
        const delay = Math.random() * 10000 + 5000; // 5-15 seconds
        
        this.timeoutId = setTimeout(() => {
            this.sendRandomMessage();
            this.scheduleNextMessage();
        }, delay);
    }
    
    sendRandomMessage() {
        const bot = this.bots[Math.floor(Math.random() * this.bots.length)];
        const template = this.messageTemplates[Math.floor(Math.random() * this.messageTemplates.length)];
        
        const message = new Message('text', template, bot);
        this.chatApp.receiveMessage(message);
    }
    
    simulateTyping(user, duration = 2000) {
        this.chatApp.showTypingIndicator(user);
        setTimeout(() => {
            this.chatApp.hideTypingIndicator(user.id);
        }, duration);
    }
}
```

### Criterii de evaluare
- ✅ **Chat Functionality** (30 puncte)
- ✅ **Real-time Simulation** (25 puncte)
- ✅ **User Interface** (20 puncte)
- ✅ **Message Management** (15 puncte)
- ✅ **Performance și Optimization** (10 puncte)

---

## Proiect 3: Interactive Code Editor 💻

### Descriere
Creează un editor de cod simplu în browser cu syntax highlighting simulat, auto-completion, și live preview pentru HTML/CSS.

### Cerințe tehnice
- **Multi-tab support** pentru fișiere multiple
- **Syntax highlighting** simulat pentru HTML, CSS, JavaScript
- **Live preview** pentru HTML/CSS
- **Auto-completion** basic pentru taguri HTML și proprietăți CSS
- **File management** (new, open, save, delete)
- **Theme support** (light/dark modes)

### Funcționalități obligatorii

#### 1. Editor Core
```javascript
class CodeEditor {
    constructor(container) {
        this.container = container;
        this.files = new Map();
        this.activeFile = null;
        this.themes = {
            light: { bg: '#ffffff', text: '#000000', accent: '#007bff' },
            dark: { bg: '#1e1e1e', text: '#ffffff', accent: '#4fc3f7' }
        };
        this.currentTheme = 'light';
        this.init();
    }
    
    init() {
        this.createEditorInterface();
        this.setupEventListeners();
        this.createDefaultFile();
    }
    
    createEditorInterface() {
        this.container.innerHTML = `
            <div class="editor-header">
                <div class="file-tabs" id="file-tabs"></div>
                <div class="editor-actions">
                    <button id="new-file">+ New</button>
                    <button id="save-file">💾 Save</button>
                    <button id="toggle-preview">👁️ Preview</button>
                    <button id="toggle-theme">🌙 Theme</button>
                </div>
            </div>
            <div class="editor-body">
                <div class="editor-pane">
                    <textarea id="code-input" spellcheck="false"></textarea>
                    <div id="syntax-overlay"></div>
                </div>
                <div class="preview-pane" id="preview-pane" style="display: none;">
                    <iframe id="preview-frame"></iframe>
                </div>
            </div>
            <div class="editor-footer">
                <div class="status-bar">
                    <span id="cursor-position">Line 1, Column 1</span>
                    <span id="file-type">HTML</span>
                    <span id="word-count">0 words</span>
                </div>
            </div>
        `;
    }
}
```

### Criterii de evaluare
- ✅ **Editor Functionality** (30 puncte)
- ✅ **Syntax Highlighting** (25 puncte)
- ✅ **Live Preview** (20 puncte)
- ✅ **File Management** (15 puncte)
- ✅ **User Experience** (10 puncte)

---

## Instrucțiuni generale

### Cerințe obligatorii pentru toate proiectele
1. ✅ **Vanilla JavaScript** - fără framework-uri sau librării externe
2. ✅ **Responsive Design** - funcționează pe toate dimensiunile
3. ✅ **Error Handling** - gestionează erorile elegant
4. ✅ **Performance** - optimizat pentru utilizare fluidă
5. ✅ **Accessibility** - suport pentru keyboard navigation și screen readers

### Criterii de notare generale
- **90-100%**: Implementare completă, toate features + inovație
- **80-89%**: Foarte bun, majoritatea features + atenție la detalii
- **70-79%**: Bun, features de bază implementate corect
- **60-69%**: Acceptabil, lipsesc unele features importante
- **Sub 60%**: Incomplet, necesită relucrare majoră

### Timeline recomandat
- **Săptămâna 1**: Structura de bază și DOM manipulation
- **Săptămâna 2**: Features principale și event handling
- **Săptămâna 3**: Advanced features și optimizări
- **Săptămâna 4**: Polish, testing, documentație

### Livrabile
1. **Cod sursă complet** organizat în fișiere logice
2. **Documentație** cu explicații despre arhitectură
3. **Demo live** functional
4. **Video demo** (2-3 minute) prezentând funcționalitățile
5. **README** cu instrucțiuni de utilizare

**Succes la proiecte! 🚀**
