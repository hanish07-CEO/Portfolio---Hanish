import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

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

  // Interactive AI Assistant Endpoint using Gemini API
  app.post("/api/ai-assistant", async (req, res) => {
    const { prompt } = req.body || {};
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const lower = (prompt || "").toLowerCase();

    // Smart Contextual Knowledge Base for instant accurate responses
    const getSmartFallback = (q: string): string => {
      if (q.includes("decodelab") || q.includes("decode")) {
        return "At DecodeLabs (June - July 2026), Hanish worked as an AI Engineer Intern. He developed machine learning models, performed data preprocessing, optimized feature pipelines, and managed project workflows using Python, Pandas, and Git.";
      }
      if (q.includes("istudio")) {
        return "At iStudio (May - July 2026), Hanish worked as a Data Analytics Intern. He constructed data visualization dashboards, executed SQL queries, and transformed raw data into actionable insights for strategic decision-making.";
      }
      if (q.includes("unisell")) {
        return "UniSell is an e-commerce platform founded by Hanish Musini to empower Small & Medium Enterprises (SMEs). Built using React, Express, Node.js, MySQL DBMS, and Tailwind CSS. You can visit the live platform at https://unisell-mghz.onrender.com!";
      }
      if (q.includes("education") || q.includes("college") || q.includes("iiit") || q.includes("surat")) {
        return "Hanish Musini is a second-year B.Tech student in Computer Science & Engineering at IIIT Surat (Expected Graduation 2029). He completed intermediate at Narayana Junior College, Hyderabad, and schooling at St. Joseph's High School, Kurnool.";
      }
      if (q.includes("skill") || q.includes("tech") || q.includes("languages")) {
        return "Hanish is skilled in C++, Python, Java, SQL, JavaScript, React, Node.js, Express, MySQL DBMS, Tailwind CSS, Machine Learning, Data Analytics, Pandas, and Git.";
      }
      if (q.includes("hackathon") || q.includes("kanad") || q.includes("achievement") || q.includes("police")) {
        return "Hanish was a National Finalist in KANAD S.H.I.E.L.D. 2026, a prestigious Cybersecurity Hackathon organized by the Ahmedabad City Police. He is also an active member of the E-Cell (Aspiring Ruminate) at IIIT Surat.";
      }
      if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("phone")) {
        return "You can reach Hanish Musini directly via email at hanish070328@gmail.com, phone at +91 7386202172, or LinkedIn at linkedin.com/in/hanish07.";
      }
      return "Hanish Musini is a 2nd-year B.Tech CSE student at IIIT Surat, Founder of UniSell, former AI Engineer Intern @ DecodeLabs, and Data Analytics Intern @ iStudio. Feel free to ask about his skills, projects, or background!";
    };

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({ reply: getSmartFallback(lower) });
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
  3. Founder & Developer @ UniSell: E-commerce platform for SMEs built with React, Express, MySQL, Render (https://unisell-mghz.onrender.com).
- Skills: C++, Python, Java, SQL, JavaScript, React, Tailwind CSS, MySQL, DBMS, Pandas, Matplotlib, Machine Learning, Data Analytics, Git, VS Code, Android Studio.
- Achievements: National Finalist in KANAD S.H.I.E.L.D. 2026 (Cybersecurity Hackathon by Ahmedabad City Police), E-Cell Member (Aspiring Ruminate), Founder of UniSell.
- Contact: hanish070328@gmail.com, +91 7386202172, LinkedIn: linkedin.com/in/hanish07, GitHub: github.com/hanish07-CEO.

Be polite, enthusiastic, concise (2-4 sentences max), and highlight Hanish's strengths in software engineering, AI, and entrepreneurship.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7
        }
      });

      const reply = response.text || getSmartFallback(lower);
      return res.json({ reply });
    } catch (err: any) {
      console.error("Gemini Assistant Error:", err);
      return res.json({
        reply: getSmartFallback(lower)
      });
    }
  });

  // Dedicated Open Graph Preview Routes
  app.get("/og-image.png", (req, res) => {
    const candidatePaths = [
      path.join(process.cwd(), "public", "og-image.png"),
      path.join(process.cwd(), "dist", "og-image.png"),
      path.join(__dirname, "public", "og-image.png"),
      path.join(__dirname, "dist", "og-image.png"),
    ];
    for (const p of candidatePaths) {
      if (fs.existsSync(p)) {
        res.setHeader("Content-Type", "image/png");
        res.setHeader("Cache-Control", "public, max-age=86400");
        return res.sendFile(p);
      }
    }
    res.status(404).send("OG image not found");
  });

  app.get("/og-image.svg", (req, res) => {
    const candidatePaths = [
      path.join(process.cwd(), "public", "og-image.svg"),
      path.join(process.cwd(), "dist", "og-image.svg"),
      path.join(__dirname, "public", "og-image.svg"),
      path.join(__dirname, "dist", "og-image.svg"),
    ];
    for (const p of candidatePaths) {
      if (fs.existsSync(p)) {
        res.setHeader("Content-Type", "image/svg+xml");
        res.setHeader("Cache-Control", "public, max-age=86400");
        return res.sendFile(p);
      }
    }
    res.status(404).send("OG SVG not found");
  });

  // Vite Middleware in Dev vs Static Files in Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    let distPath = path.join(process.cwd(), "dist");
    if (!fs.existsSync(path.join(distPath, "index.html"))) {
      const altPaths = [
        path.join(process.cwd(), "..", "dist"),
        path.join(__dirname, "dist"),
        path.join(__dirname, "..", "dist"),
      ];
      for (const alt of altPaths) {
        if (fs.existsSync(path.join(alt, "index.html"))) {
          distPath = alt;
          break;
        }
      }
    }
    console.log(`Serving static assets from: ${distPath}`);
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
