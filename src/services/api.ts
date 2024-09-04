import { get } from "aws-amplify/api";

export async function getItem() {
  try {
    const restOperation = get({
      apiName: "myRestApi",
      path: "items",
    });
    const { body } = await restOperation.response;
    // consume as a string:
    const str = await body.text();
    console.log("GET call succeeded: ", str);
  } catch (error) {
    console.log("GET call failed: ", JSON.parse(error as string));
  }
}
