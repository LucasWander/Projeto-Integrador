# Django Project

## TODOS

- [ ] Add docker composer
- [ ] Add docker volume to backup the database

## How to run the project locally

```bash
# Install pip
sudo apt install python3.10-venv
```

### Enable virtual environment

```bash
# Creates the virtual environment
python3 -m venv ./.venv/django-project

#Enables the virtual environment
source .venv/django-project/bin/activate

#Install packages
python -m pip install -r requirements.txt
```

### Run the docker compose(Make sure that docker is installed)

```bash
docker compose up -d
```

### Create a .env file following the .example.env

### Run the migrations

```bash
python manage.py migrate
```

### Run this command to create the fake data

```bash
python manage.py mock_data
```

### Start dev Server

```bash
python manage.py runserver
```

### On Other terminal window run the command

```bash
python manage.py createsuperuse
```

## Others

If a new package is installed please run the command

```bash
python -m pip freeze > requirements.txt
```
