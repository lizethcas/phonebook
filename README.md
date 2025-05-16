# Agenda Telefónica

Una aplicación web simple para gestionar contactos telefónicos desarrollada con React.

## 📋 Descripción

Esta aplicación permite a los usuarios:
- Agregar nuevos contactos (nombre y número de teléfono)
- Ver una lista de contactos existentes
- Filtrar contactos por nombre
- Eliminar contactos

## 🚀 Tecnologías utilizadas

- React 18
- Vite
- CSS Modules
- nanoid (para generar IDs únicos)

## 💻 Instalación y configuración

### Prerrequisitos
- Node.js (versión recomendada: 14.x o superior)
- npm o yarn

### Pasos para la instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/[tu-usuario]/phonebook.git
cd phonebook
```

2. Instalar las dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

## 🔧 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción localmente

## 📱 Funcionalidades

### Formulario de contacto
- Validación para evitar nombres duplicados
- Campos para nombre y número de teléfono

### Lista de contactos
- Muestra todos los contactos agregados
- Opción para eliminar contactos individuales

### Filtrado de contactos
- Búsqueda en tiempo real por nombre de contacto

## 🖼️ Estructura del proyecto

```
src/
  ├── components/
  │   ├── contactForm/    # Componente del formulario para añadir contactos
  │   ├── contactList/    # Componente que muestra la lista de contactos
  │   ├── filter/         # Componente de búsqueda y filtrado
  │   └── form/           # Componente principal que gestiona el estado
  ├── App.jsx             # Componente principal
  ├── main.jsx           # Punto de entrada de la aplicación
  └── ...
```

## 👨‍💻 Autor

[Tu nombre]

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles. 