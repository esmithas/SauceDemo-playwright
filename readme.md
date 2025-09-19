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

## 🤖 GitHub Actions Workflow

El proyecto incluye un workflow automatizado que permite ejecutar pruebas desde GitHub con notificaciones por correo electrónico.

### 🚀 Cómo usar el Workflow

1. **Accede a GitHub Actions**: Ve a la pestaña "Actions" en tu repositorio
2. **Selecciona el workflow**: "Run Tagged Tests and Publish Report"
3. **Configura los parámetros**:
   - **Tag**: Especifica qué pruebas ejecutar (ej: `@smoke`, `@login`, `@regression`)
   - **Ambiente**: Selecciona entre `qa` o `dev`
   - **Correo destinatario del reporte**: Especifica el correo donde llegará el reporte
4. **Ejecuta**: Haz clic en "Run workflow"

### 📧 Notificaciones Automáticas

El workflow envía automáticamente un correo electrónico al destinatorio configurado con:
- ✅ Resumen de la ejecución
- 🌍 Ambiente utilizado
- 🏷️ Tag ejecutado
- 🔗 Enlace directo al reporte en línea

### 📍 Ubicación del Workflow

El archivo de configuración se encuentra en:
```
.github/workflows/test-by-tag.yml
```

### 🔧 Configuración Requerida

Para que el workflow funcione correctamente, necesitas configurar los siguientes secrets en GitHub:

- `URL_BASE_QA` - URL del ambiente QA
- `URL_BASE_DEV` - URL del ambiente DEV
- `GH_PAGES_TOKEN` - Token para GitHub Pages
- `SMTP_SERVER` - Servidor SMTP para correos
- `SMTP_PORT` - Puerto del servidor SMTP
- `EMAIL_USERNAME` - Usuario de correo
- `EMAIL_PASSWORD` - Contraseña de correo

## 📊 Reportes

### Reporte Local
Si deseas generar el reporte HTML ejecuta:

```bash
node generateReport.js
```

Los reportes se generan al finalizar la ejecución de las pruebas:

- `reports/html/` - Reporte HTML
- `reports/cucumber_report.json` - Reporte JSON de Cucumber
- `reports/evidencies/` - Screenshots de cada paso

### Reporte en Línea (GitHub Pages)
Los reportes también están disponibles públicamente en:
**🔗 [https://esmithas.github.io/SauceDemo-playwright/](https://esmithas.github.io/SauceDemo-playwright/)**

Este reporte se actualiza automáticamente cada vez que se ejecuta el workflow de GitHub Actions.

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
- ✅ CI/CD con GitHub Actions
- ✅ Notificaciones automáticas por email
- ✅ Despliegue automático de reportes

## 📋 Prerequisitos

- Node.js >= 16
- npm >= 8
- Navegadores de Playwright instalados (ver sección de instalación)

## 🛠️ Tecnologías

- **Playwright** - Framework de automatización
- **Cucumber** - BDD framework
- **TypeScript** - Lenguaje de programación
- **Node.js** - Runtime de JavaScript
- **GitHub Actions** - CI/CD y automatización
- **GitHub Pages** - Hosting de reportes

---

## 📄 Estrategia de Automatización

Consulta el informe resumido de la estrategia y patrones utilizados en [informe-automatizacion.md](./informe-automatizacion.md)

---

## Autor

[Esmith Sánchez (@esmithas)](https://github.com/esmithas/)


