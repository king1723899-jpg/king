module.exports = {
  apps: [
    {
      name: "king777",
      script: "server.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "700M",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 3000,
        ENABLE_TEST_ACCOUNTS: "false",
        TEST_ACCOUNT_PASSWORD: "test@123",
      },
    },
  ],
};
