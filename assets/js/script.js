const propiedades_venta = [
    {
        nombre: 'Departamento en el centro',
        src: 'assets/img/departamento1.jpg',
        descripcion: 'Departamento moderno y céntrico',
        ubicacion: 'Santiago',
        habitaciones: 2,
        costo: 1500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de campo',
        src: 'assets/img/casadecampo1.jpg',
        descripcion: 'Hermosa casa de campo con jardín',
        ubicacion: 'Valdivia',
        habitaciones: 4,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Loft moderno',
        src: 'assets/img/loft.jpg',
        descripcion: 'Loft ideal para profesionales',
        ubicacion: 'Concepción',
        habitaciones: 1,
        costo: 800,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa con piscina',
        src: 'assets/img/casasconpiscinas.jpg',
        descripcion: 'Casa perfecta para el verano',
        ubicacion: 'Antofagasta',
        habitaciones: 3,
        costo: 2000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa con piscina',
        src: 'assets/img/casasconpiscinas.jpg',
        descripcion: 'Casa perfecta para el verano',
        ubicacion: 'Antofagasta',
        habitaciones: 3,
        costo: 2000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa con piscina',
        src: 'assets/img/casasconpiscinas.jpg',
        descripcion: 'Casa perfecta para el verano',
        ubicacion: 'Antofagasta',
        habitaciones: 3,
        costo: 2000,
        smoke: true,
        pets: true
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Departamento en el centro',
        src: 'assets/img/departamento1.jpg',
        descripcion: 'Departamento moderno y céntrico',
        ubicacion: 'Santiago',
        habitaciones: 2,
        costo: 1500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de campo',
        src: 'assets/img/casadecampo1.jpg',
        descripcion: 'Hermosa casa de campo con jardín',
        ubicacion: 'Valdivia',
        habitaciones: 4,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Loft moderno',
        src: 'assets/img/loft.jpg',
        descripcion: 'Loft ideal para profesionales',
        ubicacion: 'Concepción',
        habitaciones: 1,
        costo: 800,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa con piscina',
        src: 'assets/img/casasconpiscinas.jpg',
        descripcion: 'Casa perfecta para el verano',
        ubicacion: 'Antofagasta',
        habitaciones: 3,
        costo: 2000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa con piscina',
        src: 'assets/img/casasconpiscinas.jpg',
        descripcion: 'Casa perfecta para el verano',
        ubicacion: 'Antofagasta',
        habitaciones: 3,
        costo: 2000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa con piscina',
        src: 'assets/img/casasconpiscinas.jpg',
        descripcion: 'Casa perfecta para el verano',
        ubicacion: 'Antofagasta',
        habitaciones: 3,
        costo: 2000,
        smoke: true,
        pets: true
    }
];
function renderizarPropiedades(propiedades, contenedorId, limite = null) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = '';

    const propiedadesAMostrar = limite ? propiedades.slice(0, limite) : propiedades;

    propiedadesAMostrar.forEach(propiedad => {
        const propiedadElemento = document.createElement('div');
        propiedadElemento.className = 'card';
        propiedadElemento.innerHTML = `
            <h2>${propiedad.nombre}</h2>
            <img src="${propiedad.src}" alt="${propiedad.nombre}">
            <p>${propiedad.descripcion}</p>
            <p>Ubicación: ${propiedad.ubicacion}</p>
            <p>Habitaciones: ${propiedad.habitaciones}</p>
            <p>Costo: $${propiedad.costo}</p>
            <p>${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}</p>
            <p>${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
        `;
        contenedor.appendChild(propiedadElemento);
    });
}

if (window.location.pathname.endsWith('index.html')) {
    renderizarPropiedades(propiedades_venta, 'contenedor-propiedades', 3);
    renderizarPropiedades(propiedades_alquiler, 'contenedor-propiedades', 3);
} else if (window.location.pathname.endsWith('propiedades_venta.html')) {
    renderizarPropiedades(propiedades_venta, 'contenedor-propiedades');
} else if (window.location.pathname.endsWith('propiedades_alquiler.html')) {
    renderizarPropiedades(propiedades_alquiler, 'contenedor-propiedades');
}
