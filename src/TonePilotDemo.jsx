// TonePilot v0.5 — Intent + Tone + Bilingual Output System
// Input → User selects Intent + Tone → AI generates original + English translation

import React, { useState } from "react";

const INTENTS = ["Accept", "Reject", "Maybe Later", "Ask Back", "Propose", "Neutral"]; 
const TONES = ["Polite", "Humorous", "Assertive", "Apologetic", "Professional"];

export default function TonePilotDemo() {
  const [input, setInput] = useState("");
  const [intent, setIntent] = useState(INTENTS[0]);
  const [tone, setTone] = useState(TONES[0]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResponse("");

    const prompt = `You are a multilingual AI assistant that helps users respond in conversations. 
Given the user input, intent, and tone, generate a natural reply in the user's language. 
Then translate that reply into English. Return both in the following format:

Original Reply:
<original language response>

English Translation:
<translated response>

Input: "${input}"
Intent: ${intent}
Tone: ${tone}`;

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Put your API key in Authorization
          "Authorization": ""
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You help users reply with selected tone and intent." },
            { role: "user", content: prompt }
          ]
        })
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "(No response)";
      setResponse(reply);
    } catch (err) {
      setResponse("⚠️ Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">TonePilot v0.5 🌍</h1>
      <p className="text-center text-gray-500">Intent + Tone + Bilingual AI Response</p>

      <textarea
        className="w-full border p-3 rounded-lg"
        rows={4}
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-col md:flex-row gap-4">
        <select
          className="w-full border p-2 rounded"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
        >
          {INTENTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>

        <select
          className="w-full border p-2 rounded"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          {TONES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!input || loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Reply"}
      </button>

      {response && (
        <div className="border rounded-xl p-4 shadow bg-white whitespace-pre-wrap">
          <h2 className="text-sm text-gray-500 font-semibold mb-2">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
