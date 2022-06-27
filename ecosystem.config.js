module.exports = {
  apps: [
    {
      name: "aws-codedeploy",
      script: "npx",
      args: "serve -s build -l 32999 -n",
      interpreter: "none",
      env: {
        NODE_ENV: "develop",
      },
    },
  ],
};
