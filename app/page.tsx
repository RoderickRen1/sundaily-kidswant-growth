'use client';

import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.15 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
        </div>
        <a href="#opportunity" className="scroll-cue" aria-label="向下浏览"><span>SCROLL TO EXPLORE</span><ArrowDown size={18} /></a>
      </section>
      <section id="opportunity" className="section opportunity">
        <div className="section-index">01 / OPPORTUNITY</div>
        <div className="section-grid">
          <div data-reveal><p className="eyebrow">战略合作机会</p><h2>从母婴消费走向<br /><em>家庭营养</em></h2></div>
          <div className="opportunity-copy" data-reveal>
            <p>孩子王的家庭触点与会员服务能力，与圣迪乐高品质营养蛋及全产业链能力形成互补。</p>
            <div className="opportunity-list">{['家庭营养消费','日常早餐场景','亲子成长体验','会员持续经营','礼赠与企业关怀'].map((item,i)=><div key={item}><span>0{i+1}</span>{item}</div>)}</div>
          </div>
        </div>
      </section>
      <section className="section resource-section">
        <div className="resource-visual" data-reveal><img src="/assets/source/sdl-omega.png" alt="圣迪乐Omega-3营养蛋产品组合" /></div>
        <div className="resource-copy" data-reveal>
          <p className="eyebrow">资源互补</p><h2>一边是高品质营养产品<br />一边是家庭用户与服务场景</h2>
          <div className="resource-lines"><p><b>圣迪乐</b> 产品、全产业链、品质管理、生产基地与履约能力</p><p><b>孩子王</b> 家庭会员、全渠道触点、亲子活动与家庭服务</p></div>
          <div className="joint-value">共同创造家庭营养消费新场景</div>
        </div>
      </section>

      <section className="section insight-section">
        <div className="section-index">03 / INSIGHT</div>
        <div className="insight-head" data-reveal><p className="eyebrow">消费者洞察</p><h2>家庭的一顿早餐，<br />从来不只由<em>一个人</em>决定</h2></div>
        <div className="decision-orbit" data-reveal>
          <div className="decision-center"><span>家庭早餐</span><small>购买 · 使用 · 复购</small></div>
          {['家长：营养与品质','儿童：口味与参与','祖辈：照护与采购','时间：便利与稳定'].map((x,i)=><div className={`decision-node node-${i+1}`} key={x}>{x}</div>)}
        </div>
        <p className="insight-note" data-reveal>营养认知、品质信任、使用便利性与家庭偏好，共同影响购买与复购。这是待在合作试点中持续验证的研究框架。</p>
      </section>

      <section id="blueprint" className="section blueprint-section">
        <div className="blueprint-glow" />
        <div className="blueprint-title" data-reveal><p className="eyebrow">核心合作创意</p><h2>从卖一盒营养蛋<br />到陪伴一个家庭的成长</h2></div>
        <div className="ip-egg" data-reveal><span>营养有蛋</span><b>成长有伴</b><small>FAMILY NUTRITION & GROWTH</small></div>
        <div className="module-rail" data-reveal>{[
          ['01','7天早餐实验室','商品零售'],['02','30天家庭早餐成长计划','会员运营'],['03','周末早餐研究所','亲子活动'],['04','一枚鸡蛋的成长旅行','品质研学'],['05','把营养送给你爱的人','礼赠与企业客户']
        ].map(x=><div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><small>{x[2]}</small></div>)}</div>
      </section>

      <section className="section lab-section">
        <div className="lab-head" data-reveal><div><p className="eyebrow">7 DAYS BREAKFAST LAB</p><h2>让一盒营养蛋<br />变成一次家庭实验</h2></div><p>不要求每天重复购买，而是用七个轻任务，让产品进入真实的家庭早餐生活。</p></div>
        <div className="days-track" data-reveal>{[
          ['0','加入实验室'],['1','记录早餐习惯'],['2','5分钟早餐挑战'],['3','孩子设计早餐'],['4','家庭共餐'],['5','品质小侦探'],['6','分享创意早餐'],['7','反馈与权益']
        ].map((d,i)=><div className={i===7?'active':''} key={d[0]}><span>DAY {d[0]}</span><b>{d[1]}</b></div>)}</div>
      </section>

      <section className="section growth-section">
        <div className="growth-copy" data-reveal><p className="eyebrow">30 DAYS GROWTH PLAN</p><h2>把首次体验<br />转化为持续连接</h2><p>家庭早餐偏好卡、5/10/15分钟内容、会员积分与参与权益，共同构成有节奏的会员成长旅程。</p></div>
        <div className="phone-demo" data-reveal><div className="phone-top"><span>9:41</span><b>家庭早餐成长</b><small>设计示意</small></div><div className="phone-egg">本周进度<b>4 / 7</b></div><div className="phone-list"><p><span>05 min</span>快手早餐</p><p><span>10 min</span>家庭共创</p><p><span>15 min</span>周末悠闲</p></div><button>记录今日早餐</button></div>
      </section>

      <section className="experience-section">
        <div className="experience-image"><img src="/assets/source/kidswant-cover.png" alt="孩子王亲子家庭场景" /></div>
        <div className="experience-overlay" />
        <div className="experience-content" data-reveal><p className="eyebrow">周末早餐研究所</p><h2>让孩子从食用者<br />成为早餐的共同创造者</h2><div className="experience-zones"><span>01 营养搭配实验区</span><span>02 鸡蛋品质侦探区</span><span>03 创意早餐共创区</span></div></div>
      </section>

      <section className="section journey-section">
        <div className="journey-title" data-reveal><p className="eyebrow">一枚鸡蛋的成长旅行</p><h2>把品质溯源变成<br />可体验、可理解、可分享的成长旅程</h2></div>
        <div className="journey-map" data-reveal><div><span>LEVEL 01</span><b>门店微研学</b><p>包装、生产知识与品质互动</p></div><div><span>LEVEL 02</span><b>数字研学</b><p>视频、数字内容与互动任务</p></div><div className="journey-feature"><span>LEVEL 03</span><b>真实生产基地研学</b><p>在符合食品、生产与生物安全管理的前提下，了解养殖、品质检测和分级包装。</p></div></div>
        <div className="journey-photo" data-reveal><img src="/assets/source/sdl-base.png" alt="圣迪乐自动化蛋品生产流程" /></div>
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
