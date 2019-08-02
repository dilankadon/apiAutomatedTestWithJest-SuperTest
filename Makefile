help:
	@echo "This file contains targets to support local development"

# Build and run a standalone server of fake REST API with docker support
standalone:
	docker-compose down
	docker-compose build standalone
	docker-compose up -d standalone
	
# Startup performance testing support containers: standalone, influxdb & grafana
perf-support: standalone
	docker-compose up -d standalone influxdb grafana

# Build and run k6 perfomace test
perf-test:
	docker-compose build k6
	docker-compose run --rm k6	

# Build and run k6 perfomace test with docker support for influxdb & grafana
performance-full: perf-support
	docker-compose build k6
	docker-compose run --rm k6	

