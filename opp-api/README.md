# Api de Autenticación con JWT en Python

Este proyecto es un ejemplo de un **sistema de autenticación sencillo** en Python usando JWT (JSON Web Tokens) y un archivo JSON como base de datos de usuarios. Proporciona un endpoint `/auth/login` que valida usuarios y devuelve un token JWT válido por 1 hora.

### Requisitos

- Python 3.x
- Librería PyJWT

### Pasos para correr en entorno local

1. Clona el repositorio desde GitHub
Esto descargará una copia local del código fuente en tu máquina.
```bash
git clone https://github.com/criscamideas/prueba-american-capital
```

2. Accede al directorio del proyecto
Una vez clonado, entra a la carpeta del proyecto:
```bash
cd prueba-american-capital/opp-api
```

3. Instalar PyJWT:
```bash
pip install pyjwt
```

4. Inicia el servidor de desarrollo
Este comando levanta el sitio web en modo desarrollo, generalmente disponible en http://localhost:8000 (u otro puerto si ya está ocupado).
```bash
python main.py
```