export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-uploads-mine"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://72dfqcwa3g.execute-api.ap-south-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_RKGltBNug",
    APP_CLIENT_ID: "qnm2iut1ska5fsr1mlahth6a2",
    IDENTITY_POOL_ID: "ap-south-1:49a62f77-f744-4359-8424-252f9e755b35"
  }
};
