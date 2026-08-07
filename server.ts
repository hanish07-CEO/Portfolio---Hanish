import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // API Contact Form Handler
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    console.log(`[Contact Form Received] From: ${name} (${email}) | Subject: ${subject}`);
    return res.json({
      success: true,
      message: `Thank you ${name}! Your message has been sent successfully. Hanish will get back to you shortly.`
    });
  });

  // Optional AI Assistant Endpoint using Gemini API
  app.post("/api/ai-assistant", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          reply: "I am Hanish's AI Portfolio Assistant! (Note: Gemini API Key is currently being configured. Here is a quick overview: Hanish Musini is a CSE student at IIIT Surat, founder of UniSell, and former AI & Data Analytics Intern at DecodeLabs & iStudio)."
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `
You are the interactive AI Portfolio Assistant for Hanish Musini.
Your job is to answer questions about Hanish Musini concisely, accurately, and professionally based on his background:
- Name: Hanish Musini
- Education: Second-year B.Tech CSE at IIIT Surat (Graduation 2029), Narayana Junior College (Hyderabad), St. Joseph's High School (Kurnool).
- Experience: 
  1. Data Analytics Intern at iStudio (May 2026 - July 2026): Data visualization, SQL, Python reports, actionable insights.
  2. AI Engineer Intern at DecodeLabs (June 2026 - July 2026): Machine learning models, data preprocessing, Git/GitHub.
  3. Founder & Developer @ UniSell: E-commerce platform for SMEs built with React, Express, MySQL, Render.
- Skills: C++, Python, Java, SQL, JavaScript, React, Tailwind CSS, MySQL, DBMS, Pandas, Matplotlib, Machine Learning, Data Analytics, Git, VS Code, Android Studio.
- Achievements: National Finalist in KANAD S.H.I.E.L.D. 2026 (Cybersecurity Hackathon by Ahmedabad City Police), E-Cell Member (Aspiring Ruminate), Founder of UniSell.
- Contact: hanish070328@gmail.com, +91 7386202172, LinkedIn: linkedin.com/in/hanish07.

Be polite, enthusiastic, concise (2-4 sentences max), and highlight Hanish's strengths in software engineering, AI, and entrepreneurship.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: systemInstruction + "\nUser Question: " + prompt }] }
        ]
      });

      const reply = response.text || "Hanish is a B.Tech CSE student at IIIT Surat and Founder of UniSell with expertise in AI and Data Analytics.";
      return res.json({ reply });
    } catch (err: any) {
      console.error("Gemini Assistant Error:", err);
      return res.json({
        reply: "Hanish Musini is a 2nd-year B.Tech CSE student at IIIT Surat, Founder of UniSell, AI Engineer Intern @ DecodeLabs, and Data Analytics Intern @ iStudio. Contact him at hanish070328@gmail.com."
      });
    }
  });

  // Vite Middleware in Dev vs Static Files in Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
