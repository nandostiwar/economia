CREATE TABLE ventas (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE detalle_ventas (
    id SERIAL PRIMARY KEY,
    ventaId INT,
    productoId INT,
    cantidad INT,
    FOREIGN KEY (ventaId) REFERENCES ventas(id),
    FOREIGN KEY (productoId) REFERENCES productos(id)
);
