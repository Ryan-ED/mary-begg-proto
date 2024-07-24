INSERT INTO update_type (type_name) VALUES
('Correction'),
('Order Out'),
('Order In'),
('Damage'),
('Return');

INSERT INTO order_status (status_name) VALUES
('Not Submitted'),
('Awaiting Fulfilment'),
('Completed'),
('Cancelled');

INSERT INTO "role" (role_name) VALUES
('Admin'),
('Paramedic'),
('ECO'),
('Clinician');