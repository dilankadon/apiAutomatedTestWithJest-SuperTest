help:
	@echo "This file contains targets to support local development"

# Build and run a standalone server of authservice with docker support for db, redis and mountebank
standalone:
	docker-compose down
	docker-compose build standalone
	docker-compose up -d standalone
	
# Startup performance testing support containers: influxdb & grafana
perf-support: standalone
	docker-compose up -d standalone influxdb grafana

perf-test:
	docker-compose build k6
	docker-compose run --rm k6	

# Build and run k6 perfomace test with docker support for influxdb & grafana
performance-full: perf-support
	docker-compose build k6
	docker-compose run --rm k6	

