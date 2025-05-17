"use client";
import Image from "next/image";
import { useRef, useState } from "react";

function interpolateColor(a, b, t) {
  const ah = a.replace("#", "");
  const bh = b.replace("#", "");
  const ar = parseInt(ah.substring(0,2),16), ag = parseInt(ah.substring(2,4),16), ab = parseInt(ah.substring(4,6),16);
  const br = parseInt(bh.substring(0,2),16), bg = parseInt(bh.substring(2,4),16), bb = parseInt(bh.substring(4,6),16);
  const rr = Math.round(ar + (br-ar)*t);
  const rg = Math.round(ag + (bg-ag)*t);
  const rb = Math.round(ab + (bb-ab)*t);
  return "#" + ((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1);
}

function BulbSVG({ color }) {
  return (
    <svg width="180" height="270" viewBox="0 0 900 1351" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M311.981 1084.68C296.609 1084.68 283.755 1072.83 282.712 1057.49C275.584 952.611 227.46 854.466 148.781 783.604C57.431 701.333 0 582.119 0 449.502C0 202.791 198.752 2.51256 444.873 0.0235568C695.384 -2.50344 898.807 198.598 899.012 449.128C899.124 581.81 841.74 701.099 750.399 783.445C671.698 854.406 623.444 952.552 616.301 1057.5C615.257 1072.83 602.403 1084.68 587.032 1084.68H311.981Z" fill={color}/>
      <path d="M607.704 1173.18H291.309C273.904 1173.18 259.794 1159.07 259.794 1141.66C259.794 1124.26 273.904 1110.15 291.309 1110.15H607.704C625.109 1110.15 639.219 1124.26 639.219 1141.66C639.219 1159.07 625.109 1173.18 607.704 1173.18Z" fill="#9BA1AA"/>
      <path d="M607.704 1261.67H291.309C273.904 1261.67 259.794 1247.56 259.794 1230.15C259.794 1212.75 273.904 1198.64 291.309 1198.64H607.704C625.109 1198.64 639.219 1212.75 639.219 1230.15C639.219 1247.56 625.109 1261.67 607.704 1261.67Z" fill="#9BA1AA"/>
      <path d="M540.139 1350.16H358.874C324.064 1350.16 295.844 1321.94 295.844 1287.13H603.169C603.169 1321.94 574.95 1350.16 540.139 1350.16Z" fill="#9BA1AA"/>
    </svg>
  );
}

function HandSVGBackground() {
  return (
    <svg width="346" height="701" viewBox="0 0 346 701" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M301.691 700H40.308C18.599 700 1 682.401 1 660.692V40.308C1 18.599 18.599 1 40.308 1H301.692C323.401 1 341 18.599 341 40.308V660.692C340.999 682.401 323.401 700 301.691 700Z" fill="white" stroke="#333333" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M300.033 695.574H41.965C21.549 695.574 4.99902 679.024 4.99902 658.608V42.3918C4.99902 21.9758 21.549 5.42578 41.965 5.42578H300.033C320.449 5.42578 336.999 21.9758 336.999 42.3918V658.609C336.999 679.024 320.449 695.574 300.033 695.574Z" fill="white" stroke="#333333" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M293.429 684H48.57C30.858 684 16.499 669.641 16.499 651.929V49.071C16.499 31.359 30.857 17 48.57 17H293.429C311.141 17 325.5 31.358 325.5 49.071V651.93C325.499 669.641 311.141 684 293.429 684Z" fill="white" stroke="#333333" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M341.124 168.492V216.894H341.671C343.775 216.894 345.48 215.189 345.48 213.085V172.301C345.48 170.197 343.775 168.492 341.671 168.492H341.124Z" fill="white" stroke="#333333" strokeMiterlimit="10"/>
<path d="M341.124 264.492V363.894H341.188C343.558 363.894 345.48 361.972 345.48 359.602V268.784C345.48 266.414 343.558 264.492 341.188 264.492H341.124Z" fill="white" stroke="#333333" strokeMiterlimit="10"/>
<path d="M38.124 48.894C44.1992 48.894 49.124 43.9692 49.124 37.894C49.124 31.8189 44.1992 26.894 38.124 26.894C32.0489 26.894 27.124 31.8189 27.124 37.894C27.124 43.9692 32.0489 48.894 38.124 48.894Z" fill="white" stroke="#333333" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M38.124 43.394C41.1616 43.394 43.624 40.9316 43.624 37.894C43.624 34.8565 41.1616 32.394 38.124 32.394C35.0865 32.394 32.624 34.8565 32.624 37.894C32.624 40.9316 35.0865 43.394 38.124 43.394Z" fill="white" stroke="#333333" strokeMiterlimit="10"/>
<path d="M38.124 46.394C42.8184 46.394 46.624 42.5885 46.624 37.894C46.624 33.1996 42.8184 29.394 38.124 29.394C33.4296 29.394 29.624 33.1996 29.624 37.894C29.624 42.5885 33.4296 46.394 38.124 46.394Z" fill="white" stroke="#333333" strokeMiterlimit="10"/>
<path d="M38.1242 41.1942C39.9467 41.1942 41.4242 39.7168 41.4242 37.8943C41.4242 36.0717 39.9467 34.5942 38.1242 34.5942C36.3017 34.5942 34.8242 36.0717 34.8242 37.8943C34.8242 39.7168 36.3017 41.1942 38.1242 41.1942Z" fill="white" stroke="#333333" strokeMiterlimit="10"/>
</svg>
  );
}

export default function Home() {
  const [bulbColor, setBulbColor] = useState("#FFC715");
  const scrollRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [paragraphs, setParagraphs] = useState([]); // [{ paragraph, color, sound }]
  const [currentSound, setCurrentSound] = useState(null);
  const audioRef = useRef(null);

  // Helper to fetch GPT-formatted paragraphs
  const handleFormatText = async () => {
    if (!inputText) return;
    setLoading(true);
    setParagraphs([]);
    try {
      const res = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await res.json();
      console.log("GPT API result:", data.result);
      if (!res.ok) throw new Error(data.error || "Failed to format text");
      // Fix: handle both array and object with array property
      let paraArr = Array.isArray(data.result)
        ? data.result
        : Array.isArray(data.result.result)
        ? data.result.result
        : [];
      setParagraphs(paraArr);
    } catch (e) {
      alert("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  // Scroll handler: find which paragraph is in view, update bulb color and play sound
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || paragraphs.length === 0) return;
    const children = Array.from(el.children[0].children); // paragraphs are direct children
    let currentIdx = 0;
    for (let i = 0; i < children.length; i++) {
      const rect = children[i].getBoundingClientRect();
      const parentRect = el.getBoundingClientRect();
      if (rect.top - parentRect.top <= 40) {
        currentIdx = i;
      } else {
        break;
      }
    }
    const para = paragraphs[currentIdx];
    if (para) {
      setBulbColor(para.color || "#FFC715");
      if (para.sound && para.sound !== currentSound) {
        setCurrentSound(para.sound);
        playSoundForParagraph(para.sound);
      } else if (!para.sound && currentSound) {
        setCurrentSound(null);
        if (audioRef.current) audioRef.current.src = "";
      }
    }
  };

  // Play sound for a paragraph using ElevenLabs
  const playSoundForParagraph = async (soundText) => {
    if (!soundText) return;
    try {
      const res = await fetch("/api/sound", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: soundText }),
      });
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
      }
    } catch {}
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-8 md:gap-12 bg-white p-4">
      {/* Input section */}
      <div className="flex flex-col w-full max-w-[350px] gap-4 mb-4 md:mb-0">
        <textarea
          className="w-full h-64 border rounded p-2 text-black"
          placeholder="Paste your text here..."
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          disabled={loading}
        />
        <button
          className="bg-blue-600 text-white px-3 py-2 rounded disabled:opacity-50"
          onClick={handleFormatText}
          disabled={loading || !inputText}
        >
          {loading ? "Setting the mood..." : "Set the mood"}
        </button>
      </div>
      {/* Hand SVG with scrollable text overlay */}
      <div className="relative w-full max-w-[350px] h-[700px] flex-shrink-0 mb-4 md:mb-0">
        <HandSVGBackground />
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="absolute left-[44px] top-[60px] w-[262px] h-[580px] overflow-y-scroll bg-transparent z-10 snap-y snap-mandatory"
          style={{ color: "#222", fontSize: "1.1rem", padding: "1rem" }}
        >
          <div className="h-full w-full">
            {paragraphs.length === 0 ? (
              <div className="text-gray-400 text-center mt-20">Paste text and click Format & Preview</div>
            ) : (
              paragraphs.map((p, i) => (
                <div
                  key={i}
                  className="snap-start h-[500px] flex items-center justify-center"
                  style={{ minHeight: '100%', minWidth: '100%' }}
                >
                  <p className="text-center" style={{ marginBottom: 0 }}>{p.paragraph}</p>
                </div>
              ))
            )}
          </div>
          <audio ref={audioRef} style={{ display: 'none' }} />
        </div>
      </div>
      {/* Bulb SVG */}
      <div className="flex items-center justify-center w-full max-w-[200px] h-[200px]">
        <BulbSVG color={bulbColor} />
      </div>
    </div>
  );
}
