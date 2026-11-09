'use client';

import { ArrowDown, Baby, Building2, CalendarHeart, Gift, HeartHandshake, ShoppingBasket, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const insightDetails = [
  {
    kicker: '01 / TIME PRESSURE', title: '早餐不是知识问题，首先是执行问题', short: '家长往往知道早餐重要，但工作日真正稀缺的是时间、计划与低摩擦方案。',
    evidence: ['质性研究显示，家长决定给孩子吃什么时，会同时权衡儿童偏好、健康性与时间压力。', '中国居民膳食指南建议每天吃早餐，并提出早餐应覆盖谷薯、蔬果、动物性食物、奶豆坚果等类别。'],
    implication: '7天实验室不应只讲“营养知识”，而要交付5/10/15分钟可执行早餐组合、前夜准备提示和家庭任务卡。',
    test: '试点验证：任务完成率、平均准备时长、工作日连续参与天数。',
    sources: [
      ['学龄前儿童家庭喂养责任的质性研究','https://pmc.ncbi.nlm.nih.gov/articles/PMC6062462/'],
      ['中国居民膳食指南（2022）相关原则','https://www.ecphf.cn/Nutrition-Food/2025-07/7112p7.htm']
    ]
  },
  {
    kicker: '02 / FAMILY SYSTEM', title: '购买者、准备者与食用者，不一定是同一个人', short: '家庭食品选择不是单一“妈妈决策”，而是成员之间不断协商的系统。',
    evidence: ['家庭成员研究显示，儿童对家庭食品决策具有重要影响，且影响会随产品类别变化。', '亲子共同选餐实验进一步显示，儿童在场会改变父母的食物选择，说明影响关系是双向的。'],
    implication: '同一产品需要同时回应三种价值：采购者看品质与价格，准备者看便利，儿童看口味、参与感与选择权。',
    test: '试点验证：分别访谈购买者、准备者、食用儿童；记录三者对“好早餐”的定义差异。',
    sources: [
      ['家庭成员对食品决策的影响研究','https://pubmed.ncbi.nlm.nih.gov/10346661/'],
      ['亲子共同选餐的双向影响研究','https://pubmed.ncbi.nlm.nih.gov/36597486/']
    ]
  },
  {
    kicker: '03 / CHILD PARTICIPATION', title: '让孩子参与，可能比“教育孩子”更有效', short: '参与准备会改变孩子当下的进食行为，也可能建立更强的食物选择自我效能。',
    evidence: ['实验研究发现，5—7岁儿童会吃更多自己参与制作的食物；这一效应并不只发生在健康食品上。', '对加拿大五年级学生的大样本研究显示，参与家庭备餐与更高的果蔬偏好及健康选择自我效能相关。'],
    implication: '亲子活动应把孩子从“听众”变成“共同创造者”，但任务内容必须限定在健康食材与合理份量中。',
    test: '试点验证：孩子参与率、愿意尝试比例、家庭共同制作次数及活动后复做率。',
    sources: [
      ['儿童会更多食用自己准备的食物','https://pmc.ncbi.nlm.nih.gov/articles/PMC6768385/'],
      ['家庭备餐参与与食物偏好、自我效能','https://pmc.ncbi.nlm.nih.gov/articles/PMC10271544/']
    ]
  },
  {
    kicker: '04 / TRUST & REPEAT', title: '一次体验制造兴趣，重复体验才可能形成接受', short: '家庭复购不只取决于首次满意，还取决于产品能否稳定进入生活节奏。',
    evidence: ['儿童食物接受研究指出，熟悉度和重复接触会影响儿童尝试与接受新食物。', '亲子烹饪项目研究显示，重复接触与感官学习结合，可降低挑食并提高尝试意愿。'],
    implication: '7天用于降低首次参与门槛，30天用于形成家庭节奏；会员权益应奖励持续记录、复做和反馈，而非单次打卡。',
    test: '试点验证：7天完成率、30天留存率、第二次购买间隔及早餐方案复做率。',
    sources: [
      ['儿童食物准备与重复接触机制','https://pmc.ncbi.nlm.nih.gov/articles/PMC6768385/'],
      ['亲子烹饪项目的准实验研究','https://pmc.ncbi.nlm.nih.gov/articles/PMC7551038/']
    ]
  }
];

const dayDetails = [
  {day:'DAY 0',title:'加入早餐实验室',tag:'ENTRY',goal:'完成一次低门槛入组，让家庭知道未来7天不是促销打卡，而是一场真实早餐体验。',action:'在孩子王门店或线上购买首盒产品，扫码选择家庭早餐偏好，领取数字任务卡。',touch:'门店端架 / 商品页 / 会员小程序',deliver:['实验室欢迎页','家庭偏好3问','7天任务总览','首盒产品使用提示'],metric:'入组率 · 偏好卡完成率 · 首日打开率',next:'生成家庭专属任务路线，进入Day 1基线记录。',visual:'join'},
  {day:'DAY 1',title:'认识我的早餐',tag:'OBSERVE',goal:'先看见真实习惯，再谈改变；建立家庭早餐的基线画像。',action:'拍下或选择家庭平时的早餐，记录准备时长、参与成员与最大的困难。',touch:'会员小程序 / 社群提醒',deliver:['早餐快照上传','5/10/15分钟选择','家庭角色选择','一键生成早餐画像'],metric:'记录完成率 · 真实困难分布 · 当前准备时长',next:'根据时间条件推荐Day 2快手早餐方案。',visual:'record'},
  {day:'DAY 2',title:'5分钟早餐挑战',tag:'EASY WIN',goal:'用一次可完成的小胜利证明“营养早餐不一定复杂”。',action:'从3套快手组合中任选一套，在5分钟内完成鸡蛋早餐并记录用时。',touch:'食谱内容 / 任务计时器',deliver:['三选一食谱','步骤计时器','替换食材建议','完成动效与徽章'],metric:'挑战完成率 · 实际用时 · 食谱收藏率',next:'把选择权交给孩子，进入Day 3共同设计。',visual:'timer'},
  {day:'DAY 3',title:'小小早餐设计师',tag:'CO-CREATE',goal:'让孩子从被动食用者变成共同创造者，增加参与感与尝试意愿。',action:'孩子从主食、鸡蛋做法、果蔬和摆盘中各选一项，生成自己的早餐设计。',touch:'亲子互动卡 / 小程序拖拽界面',deliver:['食材积木卡','营养组合提示','儿童作品命名','早餐设计海报'],metric:'儿童参与率 · 组合完成率 · 作品分享率',next:'邀请家庭成员共同食用Day 3设计，进入Day 4。',visual:'build'},
  {day:'DAY 4',title:'全家一起吃',tag:'TOGETHER',goal:'把产品体验转化为家庭共同记忆，而不是单人完成的任务。',action:'选择一顿全家都能参与的早餐，设置共同开餐时间并完成一张家庭合照。',touch:'家庭任务提醒 / 共餐内容',deliver:['共餐时间预约','角色分工卡','家庭合照模板','一句话感受'],metric:'共同参与人数 · 共餐完成率 · 家庭反馈',next:'从“吃得开心”进入“吃得明白”，衔接Day 5品质探究。',visual:'family'},
  {day:'DAY 5',title:'鸡蛋品质侦探',tag:'TRUST',goal:'把抽象的品质承诺变成消费者可以识别、理解和验证的线索。',action:'观察包装信息、生产日期、营养标签与溯源码，完成4项品质线索任务。',touch:'包装 / 溯源内容 / 品牌知识卡',deliver:['包装找线索','日期与标签解释','溯源入口','品质问答'],metric:'溯源点击率 · 知识完成率 · 品质信任变化',next:'自然引导至数字研学或生产基地体验，并进入Day 6表达。',visual:'trace'},
  {day:'DAY 6',title:'我的创意鸡蛋料理',tag:'SHARE',goal:'把家庭体验沉淀为可传播的真实内容，同时避免强迫公开分享。',action:'复做最喜欢的早餐或创造新做法，生成一张家庭食谱卡；可选择仅自己保存或公开分享。',touch:'UGC模板 / 社群 / 会员内容',deliver:['食谱卡模板','照片轻编辑','隐私选择','家庭作品集'],metric:'食谱生成率 · 自愿分享率 · 二次制作率',next:'汇总7天记录，形成Day 7家庭实验报告。',visual:'share'},
  {day:'DAY 7',title:'早餐实验成果日',tag:'REVIEW',goal:'让用户看见变化、表达反馈，并获得进入下一阶段的合理理由。',action:'查看7天成长报告，选择最有价值的任务，完成简短反馈并领取下一阶段权益。',touch:'会员报告 / 权益页 / 复购触点',deliver:['7天成长报告','家庭早餐偏好卡','反馈问卷','30天计划邀请'],metric:'7天完成率 · 满意度 · 30天计划转化率 · 复购意愿',next:'进入30天家庭早餐成长计划；未完成家庭获得轻量回顾路线。',visual:'report'}
];

const growthActions = [
  {name:'购买行为',en:'BUY',points:'+30',desc:'购买指定圣迪乐产品',result:'记录真实消费，而非要求每日购买',icon:'01'},
  {name:'参与行为',en:'JOIN',points:'+20',desc:'参与早餐任务或食谱体验',result:'用内容与活动建立持续使用理由',icon:'02'},
  {name:'反馈行为',en:'SHARE',points:'+10',desc:'自愿提供产品与早餐反馈',result:'沉淀可用洞察，不强制公开分享',icon:'03'}
];

const zoneDetails = [
  {code:'A',en:'NUTRITION LAB',title:'小小营养搭配师',subtitle:'把“均衡早餐”变成孩子可以动手完成的组合实验。',purpose:'孩子与家长通过食物卡共同设计一份早餐，理解食物多样性；不把单一食品包装成万能营养方案。',steps:['领取家庭任务盘','从4类食物卡中选择','完成早餐组合','营养师给出轻量提示'],setup:['磁吸食物卡墙','家庭实验餐盘','5/10/15分钟标签','组合结果拍照位'],roles:'孩子负责选择与摆放，家长负责讨论现实可行性，工作人员只做引导、不替家庭作答。',time:'12—15分钟',output:'一张家庭早餐组合卡 + 可带走的进阶任务',research:'记录家庭准备时间、常见早餐搭配和执行障碍。',theme:'nutrition'},
  {code:'B',en:'EGG DETECTIVE',title:'鸡蛋品质侦探',subtitle:'把看不见的品质管理，转化为孩子可以寻找的真实线索。',purpose:'孩子识别生产日期、包装信息、营养标签与产品来源，圣迪乐展示可验证的品质信息，而不是只讲品牌口号。',steps:['领取侦探档案','寻找4个包装线索','扫描溯源入口','完成真假线索判断'],setup:['放大镜与线索卡','真实产品包装','品质档案抽屉','溯源互动屏'],roles:'孩子负责寻找线索，家长帮助阅读信息，品牌讲解员解释信息边界与溯源逻辑。',time:'10—12分钟',output:'品质侦探徽章 + 数字溯源任务入口',research:'了解家长购买品质鸡蛋时最关注的可验证信息。',theme:'detective'},
  {code:'C',en:'CREATIVE STUDIO',title:'家庭早餐创意工坊',subtitle:'让亲子共同完成一份可以在家复做的早餐作品。',purpose:'根据门店条件选择非烹饪互动、食谱拼图或成品展示，强调亲子协作与可复制性。',steps:['抽取早餐主题','共同完成食谱拼图','为作品命名','生成家庭食谱卡'],setup:['创意主题转盘','食谱积木卡','作品展示台','家庭合影模板'],roles:'孩子负责创意与命名，家长负责选择可复做方案，工作人员提供安全与流程支持。',time:'15—20分钟',output:'家庭原创食谱卡 + 30天成长计划内容入口',research:'观察亲子分工、孩子偏好以及家庭愿意持续复做的条件。',theme:'creative'}
];

const journeyLevels = [
  {level:'LEVEL 01',title:'门店微研学',en:'STORE DISCOVERY',purpose:'把孩子王门店变成多数家庭都能进入的第一站，用店中店与品牌堆头完成轻量品质启蒙。',experience:['找到一枚蛋的4个身份线索','观察包装与营养标签','完成从产地到餐桌路径拼图'],value:'低门槛、可复制、覆盖面广；孩子获得观察与信息识别能力，家长建立可验证的品质认知。',output:'门店探索护照 + Level 2解锁码',theme:'store'},
  {level:'LEVEL 02',title:'航天主题亲子探索',en:'SPACE NUTRITION MISSION',purpose:'将营养、科学探索与任务机制结合，设计“太空营养补给站”等亲子体验内容。',experience:['领取太空营养任务简报','完成密闭环境食品与营养知识互动','设计一份想象中的太空早餐补给'],value:'用儿童熟悉的航天想象激发科学兴趣，让品牌从产品知识延伸到营养科学与探索精神。',output:'航天主题任务徽章 + Level 3优先报名资格',theme:'space'},
  {level:'LEVEL 03',title:'真实生产基地深度研学',en:'REAL FARM JOURNEY',purpose:'在满足基地安全、卫生防疫与接待条件的前提下，让限定家庭看到养殖、检测、分级与自动化包装。',experience:['认识养殖环境与生物安全边界','观察品质检测与分级逻辑','参观智能高效自动化处理与包装流程'],value:'把抽象的“全产业链品质”变成可见证据，强化理解、信任与长期品牌记忆。',output:'基地研学证书 + 家庭溯源影像内容',theme:'base'}
];

export default function Home() {
  const [activeInsight, setActiveInsight] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [growthAction, setGrowthAction] = useState(0);
  const [activeZone, setActiveZone] = useState<number | null>(null);
  const [journeyLevel, setJourneyLevel] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.15 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setActiveInsight(null); setActiveDay(null); setActiveZone(null); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <main>
      <nav className="site-nav">
        <a href="#top" className="brand-lockup" aria-label="返回首页"><span className="egg-mark"><span /></span><span>圣迪乐 <b>×</b> KW 孩子王</span></a>
        <a href="#opportunity" className="nav-cta">合作蓝图</a>
      </nav>
      <section id="top" className="hero">
        <img className="hero-image" src="/assets/source/sdl-family.png" alt="圣迪乐家庭早餐品牌场景" />
        <div className="hero-shade" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <div className="hero-kicker"><Sparkles size={15} /> 家庭营养成长计划</div>
          <h1><span>营养有蛋</span><br />成长有伴</h1>
          <p className="hero-en">BORN TO SHINE, GROW TOGETHER.</p>
          <p className="hero-note">圣迪乐 × 孩子王战略合作创意提案</p>
          <div className="hero-concept" aria-label="核心合作概念">
            <div className="concept-summary">
              <span>CORE COLLABORATION CONCEPT</span>
              <b>一个核心 IP · 五大合作模块 · 四阶段运营周期</b>
            </div>
            <div className="concept-logic">
              <div><span>7 DAYS</span><b>建立体验</b></div><i />
              <div><span>30 DAYS</span><b>培养习惯</b></div><i />
              <div><span>SEASON</span><b>深化信任</b></div><i />
              <div><span>365 DAYS</span><b>创造增量</b></div>
            </div>
          </div>
        </div>
        <a href="#opportunity" className="scroll-cue" aria-label="向下浏览"><span>SCROLL TO EXPLORE</span><ArrowDown size={18} /></a>
      </section>
      <section id="opportunity" className="section opportunity">
        <div className="section-index">01 / OPPORTUNITY</div>
        <div className="opportunity-heading" data-reveal>
          <div><p className="eyebrow">战略合作机会 · OPPORTUNITY</p><h2>不止卖一盒蛋，<br />共同经营一个家庭的<em>营养成长</em></h2></div>
          <p>圣迪乐提供可信赖的营养产品与品质内容，孩子王提供家庭用户、消费场景与长期服务。双方的机会，在于把一次购买延展为持续陪伴。</p>
        </div>
        <div className="opportunity-map" data-reveal>
          <figure className="opportunity-photo">
            <img src="/assets/source/opportunity-family-breakfast-v2.png" alt="妈妈和孩子一起准备营养早餐的温暖家庭场景" />
            <figcaption><span>共同用户</span><b>正在为孩子成长做选择的家庭</b></figcaption>
            <div className="photo-badge"><HeartHandshake size={20} /><span>圣迪乐 × 孩子王</span></div>
          </figure>
          <div className="opportunity-cards">
            <article className="op-card op-card-primary"><span className="op-number">01</span><ShoppingBasket /><div><b>商品零售</b><p>用7天早餐实验室创造首购理由</p></div><small>日常持续</small></article>
            <article className="op-card"><span className="op-number">02</span><CalendarHeart /><div><b>会员经营</b><p>用30天成长计划建立复购连接</p></div><small>每月循环</small></article>
            <article className="op-card"><span className="op-number">03</span><Baby /><div><b>亲子共创</b><p>用周末活动形成参与与内容传播</p></div><small>月度 / 双月</small></article>
            <article className="op-card"><span className="op-number">04</span><Building2 /><div><b>品质研学</b><p>用一枚鸡蛋的旅程深化品质信任</p></div><small>季度 / 假期</small></article>
            <article className="op-card"><span className="op-number">05</span><Gift /><div><b>节庆礼赠</b><p>把家庭关怀延展至企业客户</p></div><small>关键节庆</small></article>
          </div>
        </div>
        <div className="opportunity-path" data-reveal><span>一次购买</span><i>创造接触</i><span>会员连接</span><i>培养习惯</i><span>亲子参与</span><i>深化信任</i><span>家庭与企业增量</span></div>
      </section>
      <section id="resources" className="section resource-section">
        <div className="resource-heading" data-reveal><p className="eyebrow">02 / 资源互补 · BETTER TOGETHER</p><h2>你有<em>好蛋</em>，<br className="resource-mobile-break" />我有<em>好伴</em>。</h2><p>把产品的实力，接上家庭的日常。</p></div>
        <div className="resource-stage" data-reveal>
          <div className="resource-stage-label"><span>圣迪乐 · 营养产品矩阵</span><span>GOOD EGGS, GREAT POSSIBILITIES</span></div>
          <div className="resource-visual"><img src="/assets/source/sdl-omega.png" alt="圣迪乐完整营养蛋产品组合，包含Omega-3营养蛋等系列" /></div>
          <div className="resource-stage-caption"><span>从一枚好蛋出发</span><b>让营养走进每一张家庭餐桌</b></div>
        </div>
        <div className="resource-copy" data-reveal>
          <article className="partner-card partner-sdl"><div className="partner-top"><span>01 / 产品与品质</span><b>圣迪乐</b></div><h3>把好营养，<br />准备好。</h3><p>营养蛋产品、全产业链与品质管理，连接生产基地和履约能力。</p><div className="partner-tags"><span>营养产品</span><span>品质溯源</span><span>供应履约</span></div></article>
          <div className="partner-plus" aria-hidden="true">×</div>
          <article className="partner-card partner-kw"><div className="partner-top"><span>02 / 用户与场景</span><b>孩子王</b></div><h3>让好营养，<br />找到家。</h3><p>家庭会员、全渠道触点与亲子服务，让营养融入购买、体验和陪伴。</p><div className="partner-tags"><span>家庭会员</span><span>全渠道触点</span><span>亲子服务</span></div></article>
        </div>
        <div className="resource-result" data-reveal><span>一起，把一盒蛋的故事讲长。</span><p>早餐有营养 <i>→</i> 周末有体验 <i>→</i> 成长有陪伴</p><a href="#blueprint">探索五大合作方向 <span aria-hidden="true">↗</span></a></div>
      </section>

      <section id="insight" className="section insight-section">
        <div className="section-index">03 / INSIGHT</div>
        <div className="insight-head" data-reveal><p className="eyebrow">消费者洞察 · EVIDENCE-LED</p><h2>家庭的一顿早餐，<br />从来不只由<em>一个人</em>决定</h2><p className="insight-lead">基于家庭食品决策、亲子喂养与儿童参与研究建立的洞察框架。点击四个关键变量，进入研究依据与项目启示。</p></div>
        <div className="decision-orbit" data-reveal>
          <div className="decision-center"><span>家庭早餐</span><small>购买 · 使用 · 复购</small><b>4个关键变量</b></div>
          {['时间压力：能否执行','家庭协作：谁在决策','儿童参与：是否愿意','重复体验：能否持续'].map((x,i)=><button type="button" className={`decision-node node-${i+1}`} key={x} onClick={()=>setActiveInsight(i)}><span>0{i+1}</span>{x}<i>↗</i></button>)}
        </div>
        <div className="insight-proof" data-reveal><span>研究不是结论的终点</span><p>外部研究用于构建假设；成都试点仍需通过家庭访谈、任务完成率与复购数据进行本地验证。</p><small>6篇研究论文 + 1项中国膳食指南</small></div>
      </section>
      {activeInsight !== null && <div className="insight-overlay" role="dialog" aria-modal="true" aria-label={insightDetails[activeInsight].title} onClick={()=>setActiveInsight(null)}>
        <article className="insight-deep" onClick={(event)=>event.stopPropagation()}>
          <button className="insight-close" type="button" onClick={()=>setActiveInsight(null)} aria-label="关闭深度分析">×</button>
          <div className="deep-index">{insightDetails[activeInsight].kicker}</div>
          <h3>{insightDetails[activeInsight].title}</h3><p className="deep-short">{insightDetails[activeInsight].short}</p>
          <div className="deep-grid"><section><span>研究发现</span>{insightDetails[activeInsight].evidence.map(x=><p key={x}>{x}</p>)}</section><section><span>对合作设计的启示</span><p>{insightDetails[activeInsight].implication}</p></section></div>
          <div className="deep-test"><span>建议验证指标</span><p>{insightDetails[activeInsight].test}</p></div>
          <div className="deep-sources"><span>REFERENCES</span>{insightDetails[activeInsight].sources.map(source=><a key={source[1]} href={source[1]} target="_blank" rel="noreferrer">{source[0]} <i>↗</i></a>)}</div>
          <div className="deep-nav">{insightDetails.map((_,i)=><button key={i} type="button" className={i===activeInsight?'active':''} onClick={()=>setActiveInsight(i)}>0{i+1}</button>)}</div>
        </article>
      </div>}

      <section id="blueprint" className="section blueprint-section">
        <div className="blueprint-glow" />
        <div className="blueprint-title" data-reveal><p className="eyebrow">核心合作创意</p><h2>从卖一盒营养蛋<br />到陪伴一个家庭的成长</h2></div>
        <div className="ip-egg" data-reveal><span>营养有蛋</span><b>成长有伴</b><small>FAMILY NUTRITION & GROWTH</small></div>
        <div className="module-rail" data-reveal>{[
          ['01','7天早餐实验室','商品零售'],['02','30天家庭早餐成长计划','会员运营'],['03','周末早餐研究所','亲子活动'],['04','一枚鸡蛋的成长旅行','品质研学'],['05','把营养送给你爱的人','礼赠与企业客户']
        ].map(x=><div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><small>{x[2]}</small></div>)}</div>
      </section>

      <section id="breakfast-lab" className="section lab-section">
        <div className="lab-head" data-reveal><div><p className="eyebrow">7 DAYS BREAKFAST LAB</p><h2>让一盒营养蛋<br />变成一次家庭实验</h2></div><div className="lab-intro"><p>不要求每天重复购买，而是用七个轻任务，让产品进入真实的家庭早餐生活。</p><span>点击每一天，查看完整任务设计与画面演示 ↘</span></div></div>
        <div className="days-track" data-reveal>{dayDetails.map((d,i)=><button type="button" onClick={()=>setActiveDay(i)} className={i===7?'active':''} key={d.day}><span>{d.day}</span><b>{d.title}</b><small>{d.tag}</small><i>↗</i></button>)}</div>
        <div className="lab-principles" data-reveal><div><span>01</span><b>体验，不是催购</b><p>7天内围绕同一盒产品展开，不设置每日购买任务。</p></div><div><span>02</span><b>每天都有下一步</b><p>从使用体验逐步连接亲子共创、品质研学与会员成长。</p></div></div>
      </section>
      {activeDay !== null && <div className="day-overlay" role="dialog" aria-modal="true" aria-label={`${dayDetails[activeDay].day} ${dayDetails[activeDay].title}`} onClick={()=>setActiveDay(null)}>
        <article className="day-deep" onClick={event=>event.stopPropagation()}>
          <button className="day-close" type="button" onClick={()=>setActiveDay(null)} aria-label="关闭当天任务">×</button>
          <div className="day-demo-wrap">
            <div className={`demo-device demo-${dayDetails[activeDay].visual}`}>
              <div className="demo-status"><span>9:41</span><b>早餐实验室</b><i>•••</i></div>
              <div className="demo-progress"><span>7 DAYS LAB</span><i><b style={{width:`${(activeDay+1)/8*100}%`}} /></i><small>{activeDay + 1} / 8</small></div>
              <div className="demo-scene"><div className="demo-egg"><span>{activeDay === 2 ? '05:00' : `0${activeDay}`}</span><small>{dayDetails[activeDay].tag}</small></div><em>✦</em><em>✦</em></div>
              <h4>{dayDetails[activeDay].title}</h4><p>{dayDetails[activeDay].action}</p>
              <div className="demo-tasks">{dayDetails[activeDay].deliver.slice(0,3).map((x,i)=><div key={x}><span>{i===0?'✓':'○'}</span>{x}</div>)}</div>
              <button type="button">开始今日任务 <span>→</span></button>
            </div>
            <p className="demo-caption">用户端画面演示 · 具体交互可在联合设计阶段深化</p>
          </div>
          <div className="day-content">
            <div className="day-kicker"><span>{dayDetails[activeDay].day}</span><i>{dayDetails[activeDay].tag}</i></div>
            <h3>{dayDetails[activeDay].title}</h3><p className="day-goal">{dayDetails[activeDay].goal}</p>
            <div className="day-action"><span>用户今天做什么</span><p>{dayDetails[activeDay].action}</p></div>
            <div className="day-specs"><section><span>品牌触点</span><p>{dayDetails[activeDay].touch}</p></section><section><span>完成标准 / 数据</span><p>{dayDetails[activeDay].metric}</p></section></div>
            <div className="day-assets"><span>需要设计的内容与物料</span><div>{dayDetails[activeDay].deliver.map(x=><b key={x}>{x}</b>)}</div></div>
            <div className="day-next"><span>NEXT STEP</span><p>{dayDetails[activeDay].next}</p></div>
            <div className="day-nav"><button type="button" disabled={activeDay===0} onClick={()=>setActiveDay(Math.max(0,activeDay-1))}>← 前一天</button><div>{dayDetails.map((_,i)=><button type="button" aria-label={`打开Day ${i}`} className={i===activeDay?'active':''} onClick={()=>setActiveDay(i)} key={i}>{i}</button>)}</div><button type="button" disabled={activeDay===7} onClick={()=>setActiveDay(Math.min(7,activeDay+1))}>后一天 →</button></div>
          </div>
        </article>
      </div>}

      <section id="growth-plan" className="section growth-section">
        <div className="growth-heading" data-reveal><div><p className="eyebrow">30 DAYS GROWTH PLAN</p><h2>从一次体验，<br />到一段<em>持续消费关系</em></h2></div><div className="growth-question"><span>核心问题</span><p>7天结束后，家庭为什么还要继续关注圣迪乐？</p><b>答案不是再发一张优惠券，而是建立持续有用的会员机制。</b></div></div>
        <div className="growth-chain" data-reveal>
          <div className="chain-start"><span>DAY 7</span><b>完成早餐实验</b><p>获得家庭实验报告</p></div><i>→</i>
          <div className="chain-core"><span>DAY 8—30</span><b>三类行为获得成长值</b><p>购买 · 参与 · 反馈</p></div><i>→</i>
          <div><span>MEMBERSHIP</span><b>逐级获得持续权益</b><p>体验 → 成长 → 共创</p></div><i>→</i>
          <div className="chain-end"><span>BUSINESS</span><b>留存与复购</b><p>有理由再次回来</p></div>
        </div>
        <div className="growth-workbench">
          <div className="growth-left" data-reveal>
            <div className="growth-block-title"><span>01 / HOW IT WORKS</span><h3>成长值来自三种真实行为</h3><p>用户不需要每天打卡，也不需要上传大量家庭信息。</p></div>
            <div className="growth-actions">{growthActions.map((action,i)=><button type="button" className={i===growthAction?'active':''} onClick={()=>setGrowthAction(i)} key={action.name}><span>{action.icon}</span><div><b>{action.name}</b><small>{action.desc}</small></div><em>{action.points}</em><i>↗</i></button>)}</div>
            <div className="growth-guidance"><span>当前动作的设计目的</span><p>{growthActions[growthAction].result}</p></div>
            <div className="member-levels"><span>02 / THREE LEVELS</span><div><article><small>LEVEL 01</small><b>体验会员</b><p>首次购买或完成7天活动</p><em>早餐内容 · 体验权益</em></article><article><small>LEVEL 02</small><b>成长会员</b><p>持续参与或再次购买</p><em>专属活动 · 复购权益</em></article><article><small>LEVEL 03</small><b>共创会员</b><p>多次参与并自愿反馈</p><em>新品体验 · 共创资格</em></article></div><p className="level-note">* 为合作项目内的活动分层，不替代孩子王现有会员等级。</p></div>
          </div>
          <div className="growth-phone-stage" data-reveal>
            <div className="growth-phone">
              <div className="gp-top"><span>9:41</span><b>家庭早餐成长</b><small>•••</small></div>
              <div className="gp-member"><div><span>成长会员</span><b>680 <small>成长值</small></b></div><i><b /></i><p>距共创会员还差 320</p></div>
              <div className="gp-card"><span>家庭早餐偏好卡</span><b>为你推荐更适合的早餐内容</b><div><i>05 min</i><i>3人家庭</i><i>孩子可参与</i></div><button type="button">调整偏好 →</button></div>
              <div className="gp-event"><span className="gp-icon">{growthActions[growthAction].icon}</span><div><small>{growthActions[growthAction].en} ACTION</small><b>{growthActions[growthAction].desc}</b></div><em>{growthActions[growthAction].points}</em></div>
              <div className="gp-benefits"><span>可兑换权益</span><div><b>亲子活动体验</b><b>商品权益</b><b>品牌周边</b></div></div>
            </div>
            <div className="privacy-note"><span>PRIVACY BY DESIGN</span><p>只记录早餐准备时间、家庭人数、饮食偏好和协助需求；不采集儿童姓名、健康状况等敏感信息。</p></div>
          </div>
        </div>
      </section>

      <section id="weekend-lab" className="experience-section">
        <div className="experience-image"><img src="/assets/source/kidswant-cover.png" alt="孩子王亲子家庭场景" /></div>
        <div className="experience-overlay" />
        <div className="experience-content" data-reveal><p className="eyebrow">周末早餐研究所 · MONTHLY FAMILY LAB</p><h2>让孩子从食用者<br />成为早餐的共同创造者</h2><p className="experience-lead">一个可在孩子王门店复制的轻量级活动IP：每月一次，三个体验区，完成后继续进入会员成长与品质研学。</p><div className="experience-zones">{zoneDetails.map((zone,i)=><button type="button" key={zone.code} className={`zone-card zone-${zone.theme}`} onClick={()=>setActiveZone(i)}><span>{zone.code}区 / {zone.en}</span><div className="zone-mini" aria-hidden="true"><i /><i /><i /><b>{zone.code}</b></div><h3>{zone.title}</h3><p>{zone.subtitle}</p><em>进入体验区 ↗</em></button>)}</div><div className="experience-loop"><span>活动现场</span><i>→</i><span>进阶任务卡</span><i>→</i><span>30天会员计划</span><i>→</i><span>季度溯源研学</span></div></div>
      </section>
      {activeZone !== null && <div className={`zone-overlay zone-overlay-${zoneDetails[activeZone].theme}`} role="dialog" aria-modal="true" aria-label={zoneDetails[activeZone].title} onClick={()=>setActiveZone(null)}>
        <article className="zone-deep" onClick={event=>event.stopPropagation()}>
          <button className="zone-close" type="button" onClick={()=>setActiveZone(null)} aria-label="关闭体验区">×</button>
          <div className="zone-visual">
            <div className="zone-visual-label"><span>{zoneDetails[activeZone].code}区</span><b>{zoneDetails[activeZone].en}</b></div>
            {zoneDetails[activeZone].theme==='nutrition' && <div className="nutrition-ui"><div className="nutrition-plate"><span>谷薯</span><span>果蔬</span><span>鸡蛋</span><span>奶豆</span><b>早餐<br/>实验盘</b></div><div className="food-cards"><i>05 min</i><i>10 min</i><i>15 min</i></div><p>拖动食物卡，完成一份多样化早餐组合</p></div>}
            {zoneDetails[activeZone].theme==='detective' && <div className="detective-ui"><div className="case-file"><span>CASE 03</span><b>一枚鸡蛋的<br/>品质档案</b><i>TOP SECRET</i></div><div className="magnifier"><span>生产日期</span></div><div className="clues"><i>包装信息</i><i>营养标签</i><i>产品来源</i><i>溯源码</i></div></div>}
            {zoneDetails[activeZone].theme==='creative' && <div className="creative-ui"><div className="recipe-board"><span>我的早餐作品</span><div><i>鸡蛋</i><i>主食</i><i>果蔬</i></div><b>家庭共同创作</b></div><div className="creative-stamp">ORIGINAL<br/>RECIPE</div><p>组合、命名、展示，生成家庭原创食谱卡</p></div>}
            <div className="zone-guide"><span>01 进入</span><i /><span>02 动手</span><i /><span>03 完成</span><i /><span>04 带走</span></div>
          </div>
          <div className="zone-info"><div className="zone-index"><span>{zoneDetails[activeZone].code}区</span><i>{zoneDetails[activeZone].en}</i></div><h3>{zoneDetails[activeZone].title}</h3><p className="zone-subtitle">{zoneDetails[activeZone].subtitle}</p><div className="zone-purpose"><span>这个区域是干什么的</span><p>{zoneDetails[activeZone].purpose}</p></div><div className="zone-steps"><span>现场参与路径</span>{zoneDetails[activeZone].steps.map((step,i)=><div key={step}><i>0{i+1}</i><b>{step}</b></div>)}</div><div className="zone-meta"><section><span>建议时长</span><b>{zoneDetails[activeZone].time}</b></section><section><span>参与者如何分工</span><p>{zoneDetails[activeZone].roles}</p></section></div><div className="zone-assets"><span>空间与物料配置</span><div>{zoneDetails[activeZone].setup.map(x=><b key={x}>{x}</b>)}</div></div><div className="zone-result"><span>活动产出</span><p>{zoneDetails[activeZone].output}</p><small>消费者研究动作：{zoneDetails[activeZone].research}</small></div><div className="zone-switch">{zoneDetails.map((zone,i)=><button type="button" className={i===activeZone?'active':''} onClick={()=>setActiveZone(i)} key={zone.code}>{zone.code}区</button>)}</div></div>
        </article>
      </div>}

      <section id="growth-journey" className="section journey-section">
        <div className="journey-title" data-reveal><p className="eyebrow">一枚鸡蛋的成长旅行 · THREE-LEVEL LEARNING JOURNEY</p><h2>从门店启蒙，到航天探索，<br />再走进<em>真实生产基地</em></h2><p>不是一次孤立的工厂参观，而是一条由会员行为逐步解锁、让品质持续变得可见的成长路径。</p></div>
        <div className="journey-progress" data-reveal>{journeyLevels.map((level,i)=><button type="button" className={i===journeyLevel?'active':''} onClick={()=>setJourneyLevel(i)} key={level.level}><span>{level.level}</span><b>{level.title}</b><small>{i===0?'多数家庭':i===1?'主题合作构想':'限定名额'}</small><i>{i<2?'→':'★'}</i></button>)}</div>
        <div className={`journey-stage stage-${journeyLevels[journeyLevel].theme}`} data-reveal>
          <div className="journey-visual">
            {journeyLevel===0 && <div className="store-ui"><div className="store-sign"><span className="egg-mark"><span /></span><b>圣迪乐<br/>品质探索站</b><small>SHOP-IN-SHOP</small></div><div className="store-shelves"><i /><i /><i /></div><div className="product-stack"><span>品质蛋</span><span>营养蛋</span><span>溯源卡</span></div><div className="store-task"><span>今日任务 01</span><b>找到包装上的4个品质线索</b><i>START →</i></div></div>}
            {journeyLevel===1 && <div className="space-ui"><div className="space-grid"/><div className="space-orbit orbit-a"/><div className="space-orbit orbit-b"/><div className="space-egg"><span>MISSION</span><b>太空营养<br/>补给站</b><small>SPACE NUTRITION</small></div><div className="space-data"><span>01 营养补给</span><span>02 科学实验</span><span>03 太空早餐</span></div><div className="space-status">MISSION STATUS <b>READY</b></div></div>}
            {journeyLevel===2 && <div className="base-ui"><img src="/assets/source/sdl-base.png" alt="圣迪乐智能高效自动化蛋品处理和包装流程"/><div className="base-overlay"/><div className="base-label"><span>REAL PRODUCTION BASE</span><b>智能高效<br/>自动化生产现场</b><p>养殖环境 → 品质检测 → 分级包装</p></div><div className="base-points"><i>01 检测</i><i>02 分级</i><i>03 包装</i></div></div>}
          </div>
          <div className="journey-detail"><div className="journey-kicker"><span>{journeyLevels[journeyLevel].level}</span><i>{journeyLevels[journeyLevel].en}</i></div><h3>{journeyLevels[journeyLevel].title}</h3><p className="journey-purpose">{journeyLevels[journeyLevel].purpose}</p><div className="journey-experience"><span>孩子在这里完成什么</span>{journeyLevels[journeyLevel].experience.map((x,i)=><div key={x}><i>0{i+1}</i><b>{x}</b></div>)}</div><div className="journey-value"><span>提供的体验与附加价值</span><p>{journeyLevels[journeyLevel].value}</p></div><div className="journey-output"><span>完成后获得</span><b>{journeyLevels[journeyLevel].output}</b></div>{journeyLevel===1&&<p className="space-disclaimer">航天主题亲子活动为合作构想，需在相关合作权益、知识产权与授权确认后推进，不代表已达成航天机构合作。</p>}</div>
        </div>
        <div className="journey-linkage" data-reveal><span>7天品质侦探任务</span><i>→</i><span>30天成长值累积</span><i>→</i><span>门店微研学</span><i>→</i><span>航天主题探索</span><i>→</i><span>基地研学资格</span></div>
      </section>

      <section className="section gifting-section">
        <div className="gifting-title" data-reveal><p className="eyebrow">礼赠与企业客户</p><h2>把营养，送给你爱的人</h2></div>
        <div className="gift-split" data-reveal><div><span>B2C</span><h3>家庭情感礼赠</h3><p>春节与中秋 · 异地家庭 · 祖辈照护感谢 · 新家庭营养礼物</p></div><div><span>B2B</span><h3>企业家庭关怀</h3><p>员工福利 · 工会节庆采购 · 企业礼赠 · 员工家庭关怀计划</p></div></div>
        <p className="concept-note" data-reveal>概念组合：圣迪乐营养蛋或礼品卡 + 孩子王家庭服务或亲子活动权益。为合作构想，非现有在售联合产品。</p>
      </section>

      <section className="section engine-section">
        <div data-reveal><p className="eyebrow">双增长引擎</p><h2>日常消费与礼赠采购<br />并行驱动增长</h2></div>
        <div className="engines" data-reveal><div><span>ENGINE A</span><h3>家庭日常消费</h3><p>商品零售 → 首购 → 会员运营 → 复购</p></div><div><span>ENGINE B</span><h3>礼赠与企业采购</h3><p>产品方案 → 客户开发 → 集中采购 → 续购</p></div></div>
        <div className="engine-base" data-reveal>产品与供应链 · 渠道与会员 · 品牌内容与亲子体验 · 品质研学</div>
      </section>

      <section className="section roadmap-section">
        <div className="roadmap-head" data-reveal><p className="eyebrow">90 DAYS → 365 DAYS</p><h2>以90天建立样板<br />以全年运营形成机制</h2></div>
        <div className="timeline" data-reveal><div><span>01—30</span><b>LAUNCH</b><p>商品上线与7天早餐实验室</p></div><div><span>31—60</span><b>ENGAGE</b><p>会员成长与亲子活动</p></div><div><span>61—90</span><b>VALIDATE</b><p>品质体验、经营复盘与复制方案</p></div></div>
        <div className="annual-line" data-reveal><span>7天 体验</span><span>30天 会员成长</span><span>90天 活动与品质体验</span><span>365天 运营与节庆增长</span></div>
        <p className="parallel-line" data-reveal>企业客户开发作为贯穿全年的并行工作线</p>
      </section>

      <section className="section scenario-section">
        <div data-reveal><p className="eyebrow">商业增长模型</p><h2>用门店动销与企业订单<br />测算潜在规模</h2><p className="scenario-disclaimer">以下为演示假设，非实际销售预测，不等于圣迪乐确认收入或双方利润。</p></div>
        <div className="scenario-cards" data-reveal>{[
          ['保守','85','10家门店 · 5盒/日','5个企业客户'],['基准','405','30家门店 · 8盒/日','15个企业客户'],['积极','1,230','60家门店 · 12盒/日','30个企业客户']
        ].map((s,i)=><div className={i===1?'featured':''} key={s[0]}><span>{s[0]}情景</span><b><i>¥</i>{s[1]}<small>万元</small></b><p>{s[2]}</p><p>{s[3]}</p></div>)}</div>
        <div className="formula" data-reveal>门店销售额 = 门店数 × 日均盒数 × 50元 × 300天　+　企业订单额</div>
      </section>

      <section className="section value-section">
        <div data-reveal><p className="eyebrow">价值与ROI</p><h2>从销售规模走向<br />真实增量</h2></div>
        <div className="value-layers" data-reveal><div><span>01</span><b>直接商业收益</b><p>销售额 · 贡献利润 · 单店动销</p></div><div><span>02</span><b>用户经营价值</b><p>会员复购 · 活动参与 · 使用反馈</p></div><div><span>03</span><b>品牌与长期资产</b><p>品质信任 · 企业客户续购 · 内容资产</p></div></div>
        <div className="roi-formula" data-reveal><span>项目增量 ROI</span><b>=（项目增量贡献利润 − 项目专项投入）÷ 项目专项投入</b></div>
      </section>

      <section className="section execution-section">
        <div data-reveal><p className="eyebrow">联合项目作战图</p><h2>一个联合项目组<br />五条工作线，三阶段里程碑</h2></div>
        <div className="workstreams" data-reveal>{['商品与渠道','会员与数字化','品牌与亲子活动','品质溯源与研学','礼赠与企业客户'].map((w,i)=><div key={w}><span>0{i+1}</span><b>{w}</b><i className={`bar bar-${i+1}`} /></div>)}</div>
        <div className="cadence" data-reveal><span>每周执行例会</span><span>每两周经营复盘</span><span>每月管理层里程碑评审</span></div>
      </section>

      <section className="section loop-section">
        <div data-reveal><p className="eyebrow">增长评估与洞察闭环</p><h2>数据回答“发生了什么”<br />研究回答“为什么”</h2></div>
        <div className="funnel" data-reveal>{[['Reach','触达'],['Engage','参与'],['Convert','首购'],['Use','使用'],['Retain','复购'],['Advocate','推荐']].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span></div>)}</div>
        <div className="loop-grid" data-reveal><div><span>BEHAVIOR DATA</span><h3>行为数据</h3><p>销售、转化、参与、复购</p></div><div className="loop-arrow">发现问题 → 解释原因 → 提出假设 → 小规模测试 → 评估优化</div><div><span>CONSUMER RESEARCH</span><h3>消费者研究</h3><p>深度访谈、早餐日志、活动观察、反馈分析</p></div></div>
      </section>

      <section className="final-section">
        <img src="/assets/source/sdl-cover.png" alt="圣迪乐天生阳光品牌视觉" />
        <div className="final-shade" />
        <div className="final-content" data-reveal><p className="eyebrow">MANAGEMENT DECISION</p><h2>从战略共识<br />到联合行动</h2><div className="decisions"><div><span>01</span><b>Strategic Alignment</b><p>确认合作主题与五大方向</p></div><div><span>02</span><b>Resource Commitment</b><p>明确联合项目负责人与资源支持</p></div><div><span>03</span><b>Pilot & Scale</b><p>启动90天试点，建立评估与复制机制</p></div></div><blockquote>从一枚鸡蛋开始，让营养走进每一个家庭的日常。</blockquote><p className="final-note">以商品连接家庭，以体验建立信任，以会员经营关系，以创新创造持续增长。</p></div>
      </section>
    </main>
  );
}
