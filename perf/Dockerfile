FROM loadimpact/k6

RUN apk update && \
    apk upgrade && \
    apk add git && \
    apk add curl 

COPY ./scripts /scripts

WORKDIR /scripts

ENTRYPOINT ["k6"]
