// netlify/functions/proxy.js
export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    const response = await fetch(
      "https://personal-he2qwpjy.outsystemscloud.com/Teerificu/rest/GenImages/Generate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Prompt: prompt }),
      }
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to fetch Outsystems API" }),
      };
    }

    const arrayBuffer = await response.arrayBuffer();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png", // or image/jpeg depending on your API
      },
      body: Buffer.from(arrayBuffer).toString("base64"),
      isBase64Encoded: true,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
