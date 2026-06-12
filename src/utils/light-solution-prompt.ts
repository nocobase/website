// Single source of truth for the AI build prompt card on light-solution
// detail pages. The card is rendered by the page template at a fixed
// position (top of the article) — article markdown carries nothing about it,
// so wording/placement changes never touch CMS content.

const I18N = {
  en: {
    heading: 'Build it with your AI agent',
    copy: 'Copy prompt',
    footer:
      'Before you start, follow the <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">AI agent quick start</a> to install NocoBase and connect your agent. AI results can vary; depending on the model and system complexity, some fine-tuning or extra rounds may be needed.',
    comingSoon: 'Prompt coming soon.',
  },
  cn: {
    heading: '用 AI Agent 搭建同款系统',
    copy: '复制提示词',
    footer:
      '开始前，请先按 <a href="https://docs.nocobase.com/cn/ai/quick-start" target="_blank" rel="noopener">AI Agent 快速开始</a> 安装 NocoBase 并接入你的 AI Agent。AI 生成的结果可能有波动，视模型能力与系统复杂度，可能需要微调或多轮交互。',
    comingSoon: '提示词即将提供。',
  },
  de: {
    heading: 'Mit Ihrem KI-Agenten nachbauen',
    copy: 'Prompt kopieren',
    footer:
      'Folgen Sie zunächst dem <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">AI-Agent-Schnellstart</a>, um NocoBase zu installieren und Ihren Agenten anzubinden. KI-Ergebnisse können variieren; je nach Modell und Systemkomplexität sind möglicherweise Feinabstimmungen oder mehrere Runden erforderlich.',
    comingSoon: 'Prompt folgt in Kürze.',
  },
  es: {
    heading: 'Construye esto con tu agente de IA',
    copy: 'Copiar prompt',
    footer:
      'Antes de empezar, sigue la <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">guía de inicio rápido del agente de IA</a> para instalar NocoBase y conectar tu agente. Los resultados de la IA pueden variar; según el modelo y la complejidad del sistema, puede ser necesario ajustar o realizar varias iteraciones.',
    comingSoon: 'Prompt disponible próximamente.',
  },
  fr: {
    heading: 'Construire avec votre agent IA',
    copy: 'Copier l\'invite',
    footer:
      'Avant de commencer, suivez le <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">démarrage rapide de l\'agent IA</a> pour installer NocoBase et connecter votre agent. Les résultats de l\'IA peuvent varier ; selon le modèle et la complexité du système, quelques ajustements ou échanges supplémentaires peuvent être nécessaires.',
    comingSoon: 'Invite bientôt disponible.',
  },
  id: {
    heading: 'Bangun dengan AI agent Anda',
    copy: 'Salin prompt',
    footer:
      'Sebelum memulai, ikuti <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">panduan cepat AI agent</a> untuk menginstal NocoBase dan menghubungkan agent Anda. Hasil AI dapat bervariasi; bergantung pada model dan kompleksitas sistem, mungkin diperlukan penyesuaian atau beberapa putaran tambahan.',
    comingSoon: 'Prompt segera tersedia.',
  },
  ja: {
    heading: 'AI エージェントで同じシステムを構築する',
    copy: 'プロンプトをコピー',
    footer:
      '始める前に、<a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">AI Agent クイックスタート</a> に従って NocoBase をインストールし、エージェントを接続してください。AI の生成結果には個体差があります。モデルの性能とシステムの複雑さによっては、微調整や複数回のやり取りが必要になる場合があります。',
    comingSoon: 'プロンプトは近日公開予定です。',
  },
  pt: {
    heading: 'Construa com o seu agente de IA',
    copy: 'Copiar prompt',
    footer:
      'Antes de começar, siga o <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">início rápido do agente de IA</a> para instalar o NocoBase e conectar o seu agente. Os resultados de IA podem variar; dependendo do modelo e da complexidade do sistema, alguns ajustes ou rodadas adicionais podem ser necessários.',
    comingSoon: 'Prompt em breve.',
  },
  ru: {
    heading: 'Создайте систему с помощью AI-агента',
    copy: 'Скопировать промпт',
    footer:
      'Прежде чем начать, выполните инструкции из <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">быстрого старта для AI-агента</a>, чтобы установить NocoBase и подключить агент. Результаты AI могут различаться; в зависимости от модели и сложности системы может потребоваться точная настройка или несколько итераций.',
    comingSoon: 'Промпт скоро появится.',
  },
  tw: {
    heading: '用 AI Agent 搭建同款系統',
    copy: '複製提示詞',
    footer:
      '開始前，請先按 <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">AI Agent 快速開始</a> 安裝 NocoBase 並接入你的 AI Agent。AI 生成的結果可能有波動，視模型能力與系統複雜度，可能需要微調或多輪互動。',
    comingSoon: '提示詞即將提供。',
  },
  vi: {
    heading: 'Xây dựng hệ thống bằng AI agent của bạn',
    copy: 'Sao chép prompt',
    footer:
      'Trước khi bắt đầu, hãy làm theo <a href="https://docs.nocobase.com/ai/quick-start" target="_blank" rel="noopener">hướng dẫn nhanh AI agent</a> để cài đặt NocoBase và kết nối agent của bạn. Kết quả AI có thể khác nhau; tùy vào mô hình và độ phức tạp của hệ thống, có thể cần tinh chỉnh thêm hoặc tương tác nhiều vòng.',
    comingSoon: 'Prompt sẽ sớm được cung cấp.',
  },
} as const;

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderPromptSection(prompt: string | null | undefined, lang: string): string {
  const t = I18N[lang as keyof typeof I18N] ?? I18N.en;
  const inner = prompt
    ? `<pre id="solution-prompt" class="prompt-pre">${escapeHtml(prompt)}</pre>
    <p class="prompt-footnote mb-0"><i class="uil uil-info-circle"></i> ${t.footer}</p>`
    : `<p class="text-muted fst-italic mb-0">${t.comingSoon}</p>`;

  return `<div class="prompt-card card border-0 shadow mb-4">
  <div class="p-3">
    <div class="d-flex align-items-center justify-content-between flex-wrap mb-2 gap-2">
      <h6 class="mb-0"><i class="uil uil-robot text-primary"></i> ${t.heading}</h6>
      ${prompt ? `<button id="copy-prompt" class="btn btn-primary btn-sm py-1">
        <i class="uil uil-copy"></i> ${t.copy}
      </button>` : ''}
    </div>
    ${inner}
  </div>
</div>`;
}
