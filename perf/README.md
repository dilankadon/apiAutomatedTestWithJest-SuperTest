# Open Banking Authorisation Service API Performance testing

Performance testing is done with [k6 framework](https://docs.k6.io/).

### Running locally - against SIT instance of Authorisation service

To run k6 performance test on Authorisation service APIs (Certificates have to be present under /certs dir - not checked in the repo for security reasons)

```bash
docker-compose up -d influxdb grafana
docker-conpose run k6
```

OR

```bash
make perf-support
make perf-test
```

OR

```bash
make performance-full
```
