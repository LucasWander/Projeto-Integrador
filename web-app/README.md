# Django Project

Enable virtual environment

```bash
# Creates the virtual environment
python3 -m venv ./.venv/django-project

#Enables the virtual environment
source .venv/django-project/bin/activate

#Install packages
python -m pip install -r requirements.txt
```

If a new package is installed please run the command

```bash
python -m pip freeze > requirements.txt
```

### Docker

#### Postgress

Pull image

```bash
docker pull postgres:16.4
```

Start container

```bash
docker run --name green-area -p 5432:5432 -e POSTGRES_USER=Freckled5 -e POSTGRES_DB=green_area -e POSTGRES_PASSWORD=**************** -d postgres
```

Connect to the database inside the docker container

```bash
psql -d green_area -U Freckled5
```
