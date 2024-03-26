
# Products App

Esta te permite poder administrar tus productos, al igual que poder verlos en la interfaz y también te permite agregar más productos desde la interfaz.


## Caracteristicas

- Iniciar sesión
- Ver productos
- Crear productos


## Antes de comenzar

Esta repositorio fue creado usando un *monorepo* con [Turborepo](https://turbo.build/repo), lo que facilita poder tener la capa de interfaz y api  en un solo repositorio, al igual que poder iniciar el proyecto desde el directorio raiz.

### Interfaz

La interfaz de la aplicación fue creada con [React](https://react.dev/).

### Api

Se desarrollo una Api Rest en [NodeJS](https://nodejs.org/en) con [Express](https://expressjs.com/).

### Base de Datos

Se considero que los datos debe seguir un esquema riguroso y al ser una aplicación que mayor mente se dedica a consultas de datos, se decidio utilizar una base de datos SQL, en este caso una base de datos en ***Postgresql***.

### ORM

Como ORM se utilizo [Prisma](https://www.prisma.io/) ya que su modelado de datos es sencillo y nos proporciona herramientas faciles de usar para poder crear la tablas en la base de datos y modificarlas, también como el cargar data inicial de una manera sencilla.

## Caracteristicas a tener en cuenta

Tenga en cuenta que las rutas de gestion de usuarios `/users`, de gestios de roles `/roles` y la ruta de crear productos `/products/create`, estan protegidas y solo los usuario de tipo `admin` puede acceder a ellas. Teniendo esto en cuenta la opción o botón en la interfaz que permite crear productos solo sera visible para usuarios `admin`.

Para la autorización a los endpoints de la API Rest, se utilizó JWT, por lo que debera iniciar sesión para obtener el token en la ruta `/auth/signin`
## Instalacion

Para instalar el proyecto, sigue estos pasos:

1. Crea una carpeta local donde clonaras el proyecto
2. Clona el repositorio en el directorio
3. Se recomienda el uso del manejador de paquetes **pnpm**, esto ya que al ser monorepo de utilizo este gestor para crear cada workspace del repositorio.
4. Instala las depencias
```bash
  pnpm install
```

## Empezar

#### 1. Configurar variables de entorno

Crea un el archivo ***`.env`*** en el directorio raíz del proyecto y pega el contenido que se encuentra en el archivo ***`.env.example`***.

Luego, debes modificar la variable de entorno **`DATABASE_URL`** del archivo ***`.env`*** con la información de tu base de datos:

```
  DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

Cambia los siguientes datos, con lo correspondiente a tu base de datos:

- `USER`: El nombre del usuario de su base de datos.
- `PASSWORD`: La contraseña de su base de datos.
- `HOST`: El nombre de su host (si es local, este es `localhost`).
- `PORT`: El puerto donde se ejecuta su servidor de base de datos (En `Postgresql` suele ser `5432`)
- `DATABASE`: Nombre de la base de datos.
- `SCHEMA`: El nombre del esquema dentro de la base de datos (Si no esta seguro de cual proporcionar puede ser `public`, que es esquema por defecto).

#### 2. Inicar Postgresql

Se debe iniciar `postgresql` antes de correr el proyecto y evitar conflictos, si no tiene instalado postgresql puede instalarlo desde [aqui](https://www.postgresql.org/download/).

#### 3. Crear base de datos

Para crear las tablas dentro de la base de datos, ejecute el siguiente comando en la terminal:

```bash
  pnpm run db:push
```

Tenga presente que algunas rutas estas protegidas y solo los usuario `admin` pueden acceder a ellas. Por lo que es necesario crear este rol y el primer usuario, ejecutando el siguiente comando en la terminal:

```bash
  pnpm run db:seed
```

Esto creara el rol `admin` y un usuario, puede ver los datos con los que se crearon en la base de datos o en el archivo `./packages/database/src/seed.js` (aqui también puede ver la contraseña del usuario sin encriptar `productappadmin`).

#### 4. Insertar productos (Opcional)

Al crear las tablas en la base de datos esta no va contener productos, si lo desea puede insertar algunos productos de prueba con el siguiente comando en la terminal:

```bash
  pnpm run db:seed:products
```

#### 5. Iniciar la aplicación

Para iniciar la aplicación en modo desarrollo escriba el siguiente comando en la terminal:

```bash
  pnpm run dev
```

Este ejecutara la API en el puerto [8000](http://localhost:8000) y el cliente en el puerto [5173](http://localhost:5173/).
    
## API Documentación

[Documentación](https://www.postman.com/research-cosmonaut-13352721/workspace/my-workspace/documentation/25425294-8261ee85-5024-40ae-9fc2-186d548d9fc1)

