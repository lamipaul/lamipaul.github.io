FROM mcr.microsoft.com/devcontainers/python:1-3.12-bookworm

COPY requirements.txt /tmp/site-requirements.txt
RUN python -m pip install --no-cache-dir -r /tmp/site-requirements.txt
