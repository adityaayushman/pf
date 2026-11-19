"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { localAnswer } from "@/lib/askResponder";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What are Aditya's strongest skills?",
  "Tell me about MedVision",
  "What's his experience?",
  "Is he a good fit for an ML role?",
];

function SparkIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2c.4 3.6 1.8 5 5.4 5.4C13.8 7.8 12.4 9.2 12 12.8 11.6 9.2 10.2 7.8 6.6 7.4 10.2 7 11.6 5.6 12 2Zm7 10c.2 1.8.9 2.5 2.7 2.7-1.8.2-2.5.9-2.7 2.7-.2-1.8-.9-2.5-2.7-2.7 1.8-.2 2.5-.9 2.7-2.7ZM5.5 14c.2 1.6.8 2.2 2.4 2.4-1.6.2-2.2.8-2.4 2.4-.2-1.6-.8-2.2-2.4-2.4 1.6-.2 2.2-.8 2.4-2.4Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

export default function AskMeAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const setLast = (content: string) =>
    setMessages((prev) => {
      const copy = [...prev];
      copy[copy.length - 1] = { role: "assistant", content };
      return copy;
    });

  // Reveal a local answer word-by-word so it feels like it's being typed.
  const typeLocal = async (full: string) => {
    const parts = full.split(/(\s+)/);
    let acc = "";
    for (const p of parts) {
      acc += p;
      setLast(acc);
      await new Promise((r) => setTimeout(r, 26));
    }
  };

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || loading) return;

    const history = [...messages, { role: "user", content: question } as Msg];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    let streamed = false;
    // Try the LLM route first. If no API key is configured it returns 503,
    // and we fall back to the built-in keyless responder — so the assistant
    // works either way.
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (res.ok && res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          if (acc) {
            streamed = true;
            setLast(acc);
          }
        }
      }
    } catch {
      // ignore — fall through to the local responder
    }

    try {
      if (!streamed) await typeLocal(localAnswer(question));
    } catch {
      setLast(
        "I can tell you about Aditya's projects, skills, experience or how to reach him — email adityaasahoo@gmail.com."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Ask me anything about Aditya"}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] hover:scale-105 active:scale-95 transition-all"
      >
        {open ? <CloseIcon /> : <SparkIcon />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-40 flex h-[min(34rem,calc(100vh-8rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#000000]/80 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0071e3]/15 text-[#2997ff]">
                <SparkIcon size={18} />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">Ask me about Aditya</p>
                <p className="text-xs text-[#86868b]">AI assistant · answers from his profile</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.length === 0 && (
                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-[#a1a1a6]">
                    Hi! I&apos;m Aditya&apos;s AI assistant. Ask me about his projects,
                    skills, experience, or whether he&apos;s a fit for a role.
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s)}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-[#d2d2d7] transition-colors hover:border-[#2997ff]/40 hover:bg-[#0071e3]/10 hover:text-white"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-[28px] px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#0071e3] text-white"
                        : "border border-white/10 bg-white/5 text-[#e8e8ed]"
                    }`}
                  >
                    {m.content ||
                      (loading && i === messages.length - 1 ? (
                        <span className="inline-flex gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.2s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.1s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
                        </span>
                      ) : (
                        ""
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Aditya…"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[#2997ff]/40"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-white transition-all hover:bg-[#0077ed] active:scale-95 disabled:opacity-40"
              >
                <SendIcon />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
