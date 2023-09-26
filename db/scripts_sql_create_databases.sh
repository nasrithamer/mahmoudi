#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e
# Treat unset variables as an error when substituting
set -u

function create_databases() {
  database=$1

  isDatabaseExists=$(psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -tAc "SELECT 1 FROM pg_database WHERE datname = '$database'")

  if [ -z "$isDatabaseExists" ]; then
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -c "CREATE DATABASE $database WITH OWNER = $POSTGRES_USER"
  else
    echo "Database '$database' already exists"
  fi
}

if [ -n "$POSTGRES_MULTIBLE_DATABASES" ]; then
  echo "Multiple database creation requested: $POSTGRES_MULTIBLE_DATABASES"
  for db in $(echo $POSTGRES_MULTIBLE_DATABASES | tr ',' ' '); do
    database=$(echo $db)

    echo "Trying to create database << $database >> with owner $POSTGRES_USER"
    echo "###################################################################"
    create_databases $database
  done
  echo "Multiple databases created!"
fi
