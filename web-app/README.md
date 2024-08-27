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
