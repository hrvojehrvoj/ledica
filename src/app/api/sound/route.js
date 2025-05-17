import { NextResponse } from 'next/server';
import { ElevenLabsClient } from 'elevenlabs';

export async function POST(request) {
  try {
    const { text } = await request.json();
    if (!text) {
      return NextResponse.json({ error: 'Missing text' }, { status: 400 });
    }
    const client = new ElevenLabsClient({ apiKey: "sk_2e2a63e39830cb25899af9c41103387cd05c7e1d258fdbb3" });
    const audio = await client.textToSoundEffects.convert({ text });
    if (!audio || audio.length === 0) {
      console.error('No audio returned from ElevenLabs for text:', text);
      return NextResponse.json({ error: 'No audio returned from ElevenLabs' }, { status: 502 });
    }
    return new Response(audio, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'inline; filename="sound.mp3"',
      },
    });
  } catch (e) {
    console.error('Error in ElevenLabs API:', e);
    return NextResponse.json({ error: e.message || e.toString() || 'Internal error' }, { status: 500 });
  }
} 