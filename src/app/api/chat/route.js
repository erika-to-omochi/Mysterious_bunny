import { OpenAI } from 'openai';
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  if (!message) {
    return new Response(
      JSON.stringify({ error: 'メッセージが必要でちゅよ。' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "あなたは愛に関するアドバイスをする姉御肌の賢いうさぎでちゅ。名前は「おもち」。優しく、楽しく、そして親身になって相談にのってあげるでちゅよ。" 
        },
        { role: "user", content: message }
      ],
      max_tokens: 50,
      temperature: 0.5,
      n: 1
    });

    let reply = response.choices[0].message.content || response.choices[0].text;

    if (!reply.endsWith("でちゅ")) {
      reply += "でちゅ";
    }

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'サーバーエラーが発生しましたでちゅ。' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
