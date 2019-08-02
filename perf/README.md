# REST API - Performance testing with K6

Performance testing is done with [k6 framework](https://docs.k6.io/).

### Running locally
Performance test is run against fake REST API service built with Json-server

#### Launch application and run performance test

```bash
$ docker-compose up -d standalone influxdb grafana
$ docker-conpose run k6
```

OR

```bash
$ make perf-support
$ make perf-test
```

OR

```bash
$ make performance-full
```
