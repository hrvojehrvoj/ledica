import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { text } = await request.json();
    if (!text) {
      return NextResponse.json({ error: 'Missing text' }, { status: 400 });
    }
    // Dynamically import openai to avoid issues in edge/serverless
    const { OpenAI } = await import('openai');
    const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });
    const systemPrompt = `You are a creative assistant. Format the following text into small, clear paragraphs. For each paragraph, assign a hex color representing the mood, and suggest a sound effect (if any) that would fit the paragraph. Return the result as a JSON array with objects: { paragraph, color, sound }.`;
    const userPrompt = `Text: ${text}`;
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: 'json_object' },
      max_tokens: 1024,
    });
    // The model should return a JSON array as described
    let result;
    try {
      result = JSON.parse(completion.choices[0].message.content);
    } catch (e) {
      return NextResponse.json({ error: 'Failed to parse GPT response', raw: completion.choices[0].message.content }, { status: 500 });
    }
    return NextResponse.json({ result });
  } catch (e) {
    console.error('Error in OpenAI API:', e);
    return NextResponse.json({ error: e.message || e.toString() || 'Internal error' }, { status: 500 });
  }
} 