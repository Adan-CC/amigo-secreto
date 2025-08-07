# 🎁 Proyecto Amigo Secreto

Este proyecto consiste en una aplicación web simple que permite a los usuarios agregar nombres a una lista y luego seleccionar aleatoriamente a un "amigo secreto". Es ideal para practicar lógica de programación básica con JavaScript.

## 🧠 Objetivo

El principal objetivo de este desafío es fortalecer las habilidades de lógica de programación mediante una dinámica divertida y funcional.

## 🚀 Funcionalidades

- Agregar nombres a una lista
- Verificación de nombres vacíos o repetidos
- Mostrar la lista de amigos agregados
- Selección aleatoria de un amigo secreto
- Eliminación automática del amigo sorteado para evitar repeticiones

## 🛠️ Tecnologías utilizadas

- HTML
- CSS (opcional, si agregas estilo)
- JavaScript

## 📦 Estructura del proyecto

```
/mi-proyecto-amigo-secreto/
│
├── index.html           # Interfaz principal
├── style.css            # (Opcional) Estilos del proyecto
└── script.js            # Lógica en JavaScript
```

## 📋 Instrucciones de uso

1. Clona este repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador.
3. Agrega los nombres de los participantes.
4. Haz clic en “Sortear” para seleccionar un amigo secreto al azar.

## 🧪 Ejemplo de código clave

```javascript
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía.');
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let seleccionado = amigos[indice];
    document.getElementById('resultado').textContent = 'El amigo seleccionado es: ' + seleccionado;
    amigos.splice(indice, 1);
}
```

## 👤 Autor

- [Angel Adan Carbajal Caballero]

