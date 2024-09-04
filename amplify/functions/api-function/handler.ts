import type { APIGatewayProxyHandler } from "aws-lambda";
import { TwelveLabs } from "twelvelabs-js";

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log("event", event);
  const client = new TwelveLabs({ apiKey: "<YOUR_API_KEY>" });
  return {
    statusCode: 200,
    // Modify the CORS settings below to match your specific requirements
    headers: {
      "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
      "Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
    },
    body: JSON.stringify(client),
  };
};
