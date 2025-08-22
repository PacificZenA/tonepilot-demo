# TonePilot Demo · 多语种语气助理（面向说话/语言障碍友好）

> English / 中文双语 README

## Overview · 项目简介

**TonePilot Demo** is a lightweight web app that helps people who have **speaking or language barriers** compose responses more easily.  
You type what you want to say, pick a **tone/purpose**, and TonePilot generates a **clear, natural reply** — even **across languages**.

**TonePilot Demo** 是一个轻量网页应用，旨在帮助 **口语表达困难或语言障碍** 的用户更容易地组织表达。  
用户输入想说的话，选择想要的 **语气/目的**，系统会生成一段 **清晰、自然** 的回复，可 **跨语种** 输出。

> ⚠️ This demo is **not a medical device** and does not provide medical or therapeutic advice.  
> ⚠️ 本演示 **不是医疗器械**，不提供医疗/治疗建议。

---

## Who is this for · 适用人群
- People with **stuttering, aphasia, social anxiety**, or anyone who finds spontaneous speaking stressful.  
- Multilingual users who need **cross‑language** phrasing help.  
- Job seekers, customer support, students doing presentations, etc.

- **口吃、失语、社交焦虑** 等群体，或任何不擅长临场表达的人。  
- 需要 **跨语言** 组织表达的用户。  
- 求职面试、客户沟通、课堂展示等场景。

---

## What it does · 核心功能
- **Tone presets**: Friendly / Formal / Concise / Confident / Empathetic / Interview / Customer Service / De‑escalation …  
- **Cross‑lingual output**: Input in one language, output in another (e.g., Chinese → English).  
- **One‑click copy**: Copy the generated response instantly.  
- **Keyboard shortcuts**: `Ctrl/⌘ + Enter` to generate, `Esc` to clear.  
- **Privacy‑first demo**: By default, this demo runs in the **browser only**. If you later connect to an LLM API, follow the provider’s policy.

- **语气预设**：友好 / 正式 / 简洁 / 自信 / 共情 / 面试 / 客服 / 降温化解 等。  
- **跨语种输出**：支持输入与输出语言不一致（如中文输入→英文输出）。  
- **一键复制**：快速复制结果。  
- **键盘快捷键**：`Ctrl/⌘ + Enter` 生成，`Esc` 清空。  
- **隐私优先（演示版）**：默认仅在 **浏览器本地** 运行；若后续接入 LLM API，请遵守服务商政策。

---

## Tech Stack · 技术栈
- **React (Create‑React‑App)**  
- **Tailwind CSS** for styling  
- **Framer Motion** for smooth animations

---

## Quick Start · 快速开始

> Prerequisite: Node.js 16/18 and npm

```bash
# 1) Install
npm install

# 2) Run dev server (CRA)
npm start

# 3) Build for production
npm run build
```

> 先决条件：Node.js 16/18 与 npm

```bash
# 1) 安装依赖
npm install

# 2) 启动开发服务（CRA）
npm start

# 3) 生产构建
npm run build
```

If you see a blank page or errors, try removing `node_modules` and `package-lock.json`, then reinstall.  
若遇到空白页或报错，删除 `node_modules` 与 `package-lock.json` 后重新安装。

---

## Usage · 使用方式
1. **Input** what you want to say (any language).  
2. Choose a **Tone** and **Target Language**.  
3. Click **Generate** (or press `Ctrl/⌘ + Enter`).  
4. **Copy** the result and paste it where you need.

1. **输入** 想表达的内容（任意语言）。  
2. 选择 **语气** 与 **目标语言**。  
3. 点击 **生成**（或 `Ctrl/⌘ + Enter`）。  
4. **复制** 结果，粘贴到需要的地方。

---

## Example Tones · 语气示例
- **Friendly**: warm, casual, encouraging.  
- **Formal**: professional, precise, polite.  
- **Concise**: short, efficient, to the point.  
- **Empathetic**: supportive, understanding, de‑escalating.  
- **Interview**: structured, accomplishment‑oriented.  
- **Customer Service**: solution‑focused, courteous.  
- **De‑escalation**: calm, respectful, lowers tension.

- **友好**：温和、随和、鼓励性。  
- **正式**：专业、准确、礼貌。  
- **简洁**：短、快、重点明确。  
- **共情**：支持、理解、降温。  
- **面试**：结构化、强调成果。  
- **客服**：问题导向、礼貌周到。  
- **降温化解**：冷静、尊重、缓和矛盾。

---

## Accessibility Notes · 无障碍说明
- Keyboard‑friendly actions and focus management.  
- Clear labels and predictable UI.  
- Planned: voice input/output and screen‑reader optimizations.

- 友好的键盘操作与焦点管理。  
- 清晰标签与可预期交互。  
- 计划中：语音输入/输出与读屏优化。

---

## Deploy · 部署（GitHub Pages 可选）

```bash
npm i -D gh-pages
```
Add to `package.json`:
```json
{
  "homepage": "https://<your-username>.github.io/tonepilot-demo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
Then:
```bash
npm run deploy
```
Open: `https://<your-username>.github.io/tonepilot-demo`

---

## Roadmap · 路线图
- Voice input/output, on‑device TTS/STT (where possible)  
- Custom tone editor & import/export presets (JSON)  
- Full i18n UI (Chinese/English, more to come)  
- Offline models (where feasible), better privacy controls  
- Mobile PWA

- 语音输入/输出，本地 TTS/STT（条件允许）  
- 自定义语气编辑器与预设的导入/导出（JSON）  
- 完整界面多语言（中英及更多）  
- 更强的隐私控制与（可行时）离线模型  
- 移动端 PWA

---

## Contributing · 参与贡献
Pull Requests and Issues are welcome. Please keep changes small and focused.  
欢迎提交 PR 与 Issue，建议一次只做一类小改动，便于评审与回溯。

---

## License · 许可证
Choose a license that fits your use case (MIT recommended for demos).  
根据使用目的选择合适的协议（演示项目推荐 MIT）。

---

## Acknowledgments · 致谢
Thanks to open‑source communities of React, Tailwind CSS, and Framer Motion.  
致谢 React、Tailwind CSS、Framer Motion 等开源社区。
