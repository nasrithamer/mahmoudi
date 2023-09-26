-- Création de l'utilisateur nasricenter s'il n'existe pas
DO
$$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_user
        WHERE usename = 'nasricenter'
    ) THEN
        CREATE ROLE nasricenter LOGIN PASSWORD 'nasricenter';
    ELSE
        RAISE NOTICE 'Role nasricenter already exists';
    END IF;
END
$$;

-- Création de la base de données nc_app si elle n'existe pas
DO
$$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_database
        WHERE datname = 'nc_app'
    ) THEN
        CREATE DATABASE nc_app WITH OWNER = nasricenter;
    ELSE
        RAISE NOTICE 'Database nc_app already exists';
    END IF;
END
$$;

-- Création de la base de données nc_keycloak si elle n'existe pas
DO
$$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_database
        WHERE datname = 'nc_keycloak'
    ) THEN
        CREATE DATABASE nc_keycloak WITH OWNER = nasricenter;
    ELSE
        RAISE NOTICE 'Database nc_keycloak already exists';
    END IF;
END
$$;
