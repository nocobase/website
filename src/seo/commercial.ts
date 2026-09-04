type Locale = 'en' | 'cn' | 'ja';

type Faq = {
  question: string;
  answer: string;
};

type Offer = {
  name: string;
  price?: string;
  priceCurrency: 'USD' | 'CNY';
  description: string;
};

const commercialSchemaData: Record<Locale, {
  language: string;
  faqs: Faq[];
  offers: Offer[];
}> = {
  en: {
    language: 'en-US',
    faqs: [
      {
        question: 'How to understand "Lifetime license"?',
        answer: "There is no expiration date, and you don't need to pay annually. Once you buy a commercial license, you get a lifetime license for permanent use.",
      },
      {
        question: 'Do I need to purchase a commercial license to use it in a commercial environment?',
        answer: 'No. As long as you comply with the NocoBase license agreement and retain the copyright information and version information of NocoBase on the interface, you can use it for free.',
      },
      {
        question: 'When do I need to purchase a commercial license?',
        answer: 'You need to purchase a commercial license if you have any of the following requirements: You want to change the copyright and version information about NocoBase in the footer or in the upper right corner of the system to your own brand. You want to obtain advanced security features, such as dynamic access management, audit logs, and automatic backups. You want to obtain advanced development and deployment capabilities, such as multi-application, environment isolation, and distributed architecture. You want to obtain advanced technical support from the NocoBase team.',
      },
      {
        question: 'Can a license be used to develop applications for different companies?',
        answer: "The Standard Edition is limited to authorized internal company use only; the Professional and Enterprise Editions can be used to develop applications for your own clients or to sell the developed applications to clients. If the product you provide to the client does not grant configuration permissions, and the client can only use the product you have developed as is, then only you need to have a commercial license. If the product you provide to the client grants configuration permissions, allowing the client to modify and further develop your product using NocoBase's no-code configuration capabilities, then your client also needs to purchase a commercial license.",
      },
      {
        question: 'Can I switch between different editions?',
        answer: 'You can upgrade from a lower edition to a higher edition, but downgrading from a higher edition to a lower edition is not supported. When upgrading, the remaining valid amount can be deducted from the upgrade fee. For example, if you purchase the Standard Edition and use it for 6 months before upgrading to the Professional Edition, the remaining valid amount is $800*(12-6)/12 = $400, and the upgrade fee is $8000 - $400 = $7600.',
      },
      {
        question: 'Can I try it out?',
        answer: 'Yes, absolutely! You can set up a dedicated sandbox environment in just a minute, which includes all NocoBase commercial plugins. The sandbox environment is valid for 48 hours by default. If you require a longer trial, please contact us at hello@nocobase.com.',
      },
    ],
    offers: [
      {
        name: 'Community Edition',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free open-source edition for most teams building business systems and internal tools.',
      },
      {
        name: 'Standard Edition',
        price: '800',
        priceCurrency: 'USD',
        description: 'One-time lifetime commercial license for regular use.',
      },
      {
        name: 'Professional Edition',
        price: '8000',
        priceCurrency: 'USD',
        description: 'One-time lifetime commercial license for professional teams.',
      },
      {
        name: 'Enterprise Edition',
        priceCurrency: 'USD',
        description: 'Enterprise license for large applications. Contact sales for pricing.',
      },
    ],
  },
  cn: {
    language: 'zh-CN',
    faqs: [
      {
        question: '如何理解“永久授权”？',
        answer: '没有过期时间，不需要按年付费，一旦你购买了商业许可证，就会获得永久授权，可以永久使用。',
      },
      {
        question: '是否要购买商业许可证才能用在商业环境？',
        answer: '不是。只要你遵循 NocoBase 许可协议，并且保留界面上的 NocoBase 版权信息和版本信息，就可以免费使用。',
      },
      {
        question: '什么情况下需要购买商业许可证？',
        answer: '如果你有以下任何需求，则需要购买商业许可证：你希望将页脚或系统右上角关于 NocoBase 的版权和版本信息修改为你自己的品牌；你希望获得更高级的安全保障能力，比如动态访问管理、审计日志、自动备份；你希望获得更高级的开发和部署能力，比如多应用、环境隔离、分布式架构；你希望获得 NocoBase 团队的高级技术支持。',
      },
      {
        question: '是否可以使用一份授权为不同的公司开发应用？',
        answer: '标准版仅限被授权公司内部使用；专业版和企业版可以用于为自己的客户开发应用，或者将开发的应用出售给客户。如果你为客户提供的产品不开放配置权限，客户只能直接使用你开发完成的产品，那么只需要你拥有商业许可证即可。如果你为客户提供的产品开放配置权限，客户可以自己通过 NocoBase 的无代码配置能力继续修改和开发你的产品，那么你的客户也需要购买商业许可证。',
      },
      {
        question: '是否可以在不同版本间切换？',
        answer: '可以由低版本升级到高版本，不能从高版本降级到低版本。升级时，剩余有效金额可以抵扣升级费用。例如，购买标准版并使用 6 个月之后，升级到专业版，剩余有效金额为 5000*(12-6)/12=2500 元，升级费用为 50000-2500 =47500 元。',
      },
      {
        question: '是否可以试用？',
        answer: '当然可以。花费一分钟时间，开通专属的沙箱环境，其中包含 NocoBase 全部商业插件。沙箱环境默认有效期为 48 小时。如果你需要更长的试用时间，请联系我们: hello@nocobase.com',
      },
    ],
    offers: [
      {
        name: '社区版',
        price: '0',
        priceCurrency: 'CNY',
        description: '免费开源版本，满足大多数团队构建业务系统与内部工具的需求。',
      },
      {
        name: '标准版',
        price: '5000',
        priceCurrency: 'CNY',
        description: '一次性买断的永久商业授权，适合常规使用场景。',
      },
      {
        name: '专业版',
        price: '50000',
        priceCurrency: 'CNY',
        description: '一次性买断的永久商业授权，适合专业团队。',
      },
      {
        name: '企业版',
        priceCurrency: 'CNY',
        description: '面向大型应用与企业的商业授权，价格请联系销售。',
      },
    ],
  },
  ja: {
    language: 'ja-JP',
    faqs: [
      {
        question: '「永久ライセンス」とは？',
        answer: '有効期限がなく、年ごとの追加費用は不要です。商用ライセンスを購入すれば、永久ライセンスとして恒久的に利用できます。',
      },
      {
        question: '商業環境で使うには必ず商用ライセンスが必要ですか？',
        answer: 'いいえ。NocoBaseのライセンス契約を遵守し、画面上のNocoBaseの著作権情報とバージョン情報を保持していれば、無料で利用できます。',
      },
      {
        question: 'どのような場合に商用ライセンスが必要になりますか？',
        answer: '以下いずれかの要件がある場合は商用ライセンスが必要です：フッターや右上隅などに表示されるNocoBaseの著作権・バージョン情報を自社ブランドに変更したい場合；動的アクセス管理、監査ログ、自動バックアップなど高度なセキュリティ機能が欲しい場合；マルチアプリ、環境隔離、分散アーキテクチャなど高度な開発・デプロイ機能が欲しい場合；NocoBaseチームからの高度な技術サポートを求める場合。',
      },
      {
        question: '1つのライセンスで異なる会社向けにアプリ開発できますか？',
        answer: 'スタンダード版は被許諾企業の内部利用に限定されます。プロフェッショナル版とエンタープライズ版は、顧客向けアプリケーションの開発や、開発したアプリの販売に利用できます。提供する製品に顧客側の追加設定権限がなく、顧客は完成品をそのまま使用する場合、開発元が商用ライセンスを持つだけで問題ありません。提供する製品に顧客がNocoBaseのノーコード構築機能を用いて自らの用途に合わせて再設定・再開発できる権限がある場合、顧客側も商用ライセンスが必要になります。',
      },
      {
        question: '違うエディションへ切り替えることは可能ですか？',
        answer: '低いエディションから高いエディションへのアップグレードは可能ですが、高いエディションから低いエディションへのダウングレードはできません。アップグレード時には、残りの有効金額をアップグレード費用に充当できます。例えば、スタンダード版を購入して 6 か月使用した後にプロフェッショナル版へアップグレードする場合、残りの有効金額は $800*(12-6)/12 = $400 で、アップグレード費用は $8000 - $400 = $7600 です。',
      },
      {
        question: '試せますか？',
        answer: 'はい、もちろんです。NocoBaseのすべての商用プラグインが含まれる専用サンドボックス環境を数分でセットアップできます。サンドボックス環境は初期設定で48時間ご利用いただけます。さらに長いトライアルをご希望の場合は、hello@nocobase.comまでご連絡ください。',
      },
    ],
    offers: [
      {
        name: 'コミュニティ版',
        price: '0',
        priceCurrency: 'USD',
        description: 'ほとんどのチーム向けの無料オープンソース版。',
      },
      {
        name: 'スタンダード版',
        price: '800',
        priceCurrency: 'USD',
        description: '通常利用向けの買い切り永久商用ライセンス。',
      },
      {
        name: 'プロフェッショナル版',
        price: '8000',
        priceCurrency: 'USD',
        description: 'プロフェッショナルチーム向けの買い切り永久商用ライセンス。',
      },
      {
        name: 'エンタープライズ版',
        priceCurrency: 'USD',
        description: '大規模・エンタープライズ向け。価格はお問い合わせください。',
      },
    ],
  },
};

export function generateCommercialSchema(locale: Locale) {
  const pageUrl = `https://www.nocobase.com/${locale}/commercial`;
  const data = commercialSchemaData[locale];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        inLanguage: data.language,
        mainEntity: data.faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${pageUrl}#product`,
        name: 'NocoBase',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Self-hosted',
        url: pageUrl,
        inLanguage: data.language,
        offers: data.offers.map((offer) => ({
          '@type': 'Offer',
          ...offer,
        })),
      },
    ],
  };
}
