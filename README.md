# Test | Mercado Libre | Back

- Hecho por: Lizeth Nuñez

**Indice**

1. [Descripción](#description)

2. [Instalación](#install)

3. [End-Points](#endPoint)


<a id="description"></a>

## Descripción

- Este proyecto es el desarrollo de los requerimientos de la prueba enviada por Mercado libre en la capa back end.

- Este proyecto fue generado con NodeJs using express


<a id="install"></a>

## Instalación

Para la correcta instalacion del proyecto se debe realizar los siguientes pasos:

### 1. Descargar el proyecto

- Dirigirse a la url `https://github.com/lizthin/test-ml-back`, clonar la rama master, ejecutar el script `npm install` y posteriormente `npm run start`

- Abrir el navegador con la ruta [http://localhost:3001](http://localhost:3001)

NOTA: El proyecto front realiza peticiones al api que esta corriendo del proyecto back end, por esta razon es necesario que para el correcto funcionamiento de la prueba esten ejecutandose los dos al mismo tiempo

<a id="endPoint"></a>

## End Points
-  La ruta [http://localhost:3001/api/](http://localhost:3001/api/)
    debe retornar el mensaje: `{message: 'Web api iniciada'}`

- Si se realiza la busqueda desde el navegador se debe realizar como el siguiente ejemplo, [http://localhost:3001/api/items?q='your filter search'](http://localhost:3001/api/items?q=Iphone11), adicional retorna un objeto con los filtros aplicados: `{author:Object, categories:Array, items:Array}`

- Para la busqueda del detalle se debe realizar el cambio en el navegador como esta en el siguiente ejemplo [http://localhost:3001/api/items/:id](http://localhost:3001/api/items/MLA863083993), esperando que retorne un objeto similar a `{author:Object, item:Object}`
