const util = require("util");

const kafka = require("kafka-node");
const uuid = require("uuid/v4");

const client = new kafka.KafkaClient({
    kafkaHost: "kafka-node-1:9092,kafka-node-2:9092,kafka-node-3:9092"
});
const producer = new kafka.HighLevelProducer(client);

producer.on("error", (err) => {
    console.log("error on kafka producer", err);
});

producer.on("ready", () => {
    console.log("kafka producer is ready");
    setInterval(emitToKafka, 1000);
});

const generatePayload = function() {
    return [{
        topic: "logs",
        message: util.format("process='generate_noise', id='%s'", uuid()),
        timestamp: Date.now()
    }];
}

const emitToKafka = function () {
    producer.send(generatePayload(), (err, data) => {
        if (err) {
            console.log("failed to emit to kafka", err)
            return
        }

        console.log("emitted to kafka", data)
    });
};