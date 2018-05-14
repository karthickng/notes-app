import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";
import AWS from "aws-sdk"

AWS.config.update({region: "ap-southeast-1"});
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context, callback) {
  const params = {
    TableName: "notes",
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userid: event.requestContext.identity.cognitoIdentityId,
      noteid: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      // Return the retrieved item
      callback(null, success(result.Item));
    } else {
      //console.log("Error occurred. ");
      callback(null, failure({ status: false, error: "Item not found." }));
    }
  } catch (e) {
    console.log("Error occurred. "+e.name+": "+e.message);
    callback(null, failure({ status: false }));
  }
}
