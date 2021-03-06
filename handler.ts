import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

const message = `
  Serverless Webpack (Typescript) v0.1.0 Bootstrap! Your function executed successfully!
  Secret function token "${process.env.SECRET_FUNCTION_TOKEN}" from enviroment
  Secret value "${process.env.SECRET_SERVICE_KEY}" from file
`

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  console.log('process.env', process.env)
  console.log('Was received message, reply with:', message)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event,
    }, null, 2),
  };
}
