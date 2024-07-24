-- Create the User table
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

-- Create the Role table
CREATE TABLE "role" (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(255) NOT NULL
);

-- Create the UserRole table
CREATE TABLE user_role (
    user_id INT NOT NULL REFERENCES "user"(id),
    role_id INT NOT NULL REFERENCES "role"(id),
    PRIMARY KEY (user_id, role_id)
);

-- Create the Product table
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    barcode VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    expiry_date DATE NOT NULL,
    created_by INT NOT NULL REFERENCES "user"(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_by INT REFERENCES "user"(id),
    updated_at TIMESTAMPTZ
);

-- Create the OrderStatus table
CREATE TABLE order_status (
    id SERIAL PRIMARY KEY,
    status_name VARCHAR(255) NOT NULL
);

-- Create the Order table
CREATE TABLE "order" (
    id SERIAL PRIMARY KEY,
    submit_date TIMESTAMPTZ,
    status_id INT NOT NULL REFERENCES order_status(id),
    qr_code VARCHAR(255) NOT NULL,
    created_by INT NOT NULL REFERENCES "user"(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_by INT REFERENCES "user"(id),
    updated_at TIMESTAMPTZ
);

-- Create the OrderProduct table
CREATE TABLE order_product (
    order_id INT NOT NULL REFERENCES "order"(id),
    product_id INT NOT NULL REFERENCES product(id),
    quantity INT NOT NULL,
    PRIMARY KEY (order_id, product_id)
);

-- Create the UpdateType table
CREATE TABLE update_type (
    id SERIAL PRIMARY KEY,
    type_name VARCHAR(255) NOT NULL
);

-- Create the ProductHistory table
CREATE TABLE product_history (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL REFERENCES product(id),
    update_type_id INT NOT NULL REFERENCES update_type(id),
    update_message VARCHAR(255) NOT NULL,
    quantity_affected INT NOT NULL,
    date_captured DATE NOT NULL,
	affected_by_user INT REFERENCES "user"(id),
	affected_by_order INT REFERENCES "order"(id)
);
