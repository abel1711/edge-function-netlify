import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    
    const myImportanVariable = process.env.MY_IMP;
    if (!myImportanVariable) {
        throw new Error('Missing MY_IMP');
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: myImportanVariable
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    }
};

export { handler };