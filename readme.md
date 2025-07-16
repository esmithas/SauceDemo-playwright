# Playwright Automation Framework

Framework de automatización de pruebas usando Playwright, Cucumber y TypeScript siguiendo el patrón Page Object Model.

## 🏗️ Estructura del Proyecto

```
playwright-automation/
├── src/test/
│   ├── features/          # Escenarios BDD (Cucumber)
│   ├── pages/            # Page Objects
│   ├── selectors/        # Selectores CSS/XPath
│   ├── steps/            # Step definitions
│   ├── interfaces/       # TypeScript interfaces
│   ├── utils/            # Utilidades de testing
│   ├── data/             # Datos de prueba
│   └── support/          # Hooks y configuración
├── reports/              # Reportes de ejecución
├── playwright.config.ts  # Configuración de Playwright
└── cucumber.json         # Configuración de Cucumber
```

## 🚀 Instalación

```bash
npm install
```

### Instalar navegadores de Playwright

Después de instalar las dependencias, es necesario instalar los navegadores que Playwright utilizará:

```bash
npx playwright install
```

**Nota importante**: Este paso es obligatorio para que las pruebas funcionen correctamente. Sin los navegadores instalados, obtendrás errores como "Executable doesn't exist".

## 📝 Configuración

1. Copia el archivo de ejemplo de variables de entorno:
```bash
cp env.example .env.qa
cp env.example .env.dev
```

2. Configura las URLs en los archivos `.env.qa` y `.env.dev`

## 🧪 Ejecución de Pruebas

### Ejecutar en ambiente QA:
```bash
npm run test:qa -- --tags "@Tag"
```

### Ejecutar en ambiente DEV:
```bash
npm run test:dev -- --tags "@Tag"
```


## 📊 Reportes

Si deseas generar el reporte HTML ejecuta:

```bash
node generateReport.js
```

Los reportes se generan al finalizar la ejecución de las pruebas:

- `reports/html/` - Reporte HTML
- `reports/cucumber_report.json` - Reporte JSON de Cucumber
- `reports/evidencies/` - Screenshots de cada paso

**Nota**: El reporte HTML se genera usando `multiple-cucumber-html-reporter` para un diseño más profesional y detallado.

## 🏛️ Patrón Page Object Model

El proyecto sigue el patrón POM con las siguientes capas:

1. **Features** - Escenarios BDD escritos en Gherkin
2. **Steps** - Definiciones de pasos que orquestan las acciones
3. **Pages** - Objetos de página que encapsulan la lógica de UI
4. **Selectors** - Localizadores CSS/XPath centralizados
5. **Interfaces** - Tipos TypeScript para datos estructurados

## 🔧 Buenas Prácticas Implementadas

- ✅ Separación de responsabilidades
- ✅ Reutilización de código
- ✅ Tipado fuerte con TypeScript
- ✅ Configuración por ambiente
- ✅ Reportes automáticos
- ✅ Screenshots en cada paso
- ✅ Datos de prueba centralizados
- ✅ Utilidades comunes

## 📋 Prerequisitos

- Node.js >= 16
- npm >= 8
- Navegadores de Playwright instalados (ver sección de instalación)

## 🛠️ Tecnologías

- **Playwright** - Framework de automatización
- **Cucumber** - BDD framework
- **TypeScript** - Lenguaje de programación
- **Node.js** - Runtime de JavaScript

---

## 📄 Estrategia de Automatización

Consulta el informe resumido de la estrategia y patrones utilizados en [informe-automatizacion.md](./informe-automatizacion.md)

---

## Autor

[Esmith Sánchez (@esmithas)](https://github.com/esmithas/)


