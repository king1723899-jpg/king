#!/usr/bin/env node

const crypto = require("crypto");

const password = process.argv[2];
if (!password) {
  console.error("Usage: node data_store/generate_password_hash.js <password>");
  process.exit(1);
}

const sha256 = crypto.createHash("sha256").update(String(password)).digest("hex");
console.log(sha256);
