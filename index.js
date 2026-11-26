// Uses the SDK offline: encodes the data for an attestation under a simple schema.
const { SchemaEncoder } = require("@coderoot-eth/eas-sdk-demo");

const encoder = new SchemaEncoder("string release, bytes32 digest");
const data = encoder.encodeData([
  { name: "release", value: "eas-sdk-demo-consumer", type: "string" },
  { name: "digest", value: `0x${"00".repeat(32)}`, type: "bytes32" },
]);
const fields = encoder.decodeData(data).map((item) => item.name).join(", ");
console.log(`Encoded ${(data.length - 2) / 2} bytes for fields: ${fields}`);
