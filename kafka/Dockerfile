FROM openjdk:8-jre

WORKDIR /
COPY kafka_2.11-1.0.0 /bin/kafka
RUN mkdir /data

EXPOSE 9092
ENTRYPOINT ./bin/kafka/bin/kafka-server-start.sh /config/server.properties