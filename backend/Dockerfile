# Use official Python base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy files
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Set environment variable for Flask
ENV PORT=8080

# Expose port
EXPOSE 8080

# Run Flask app
CMD ["python", "main.py"]
