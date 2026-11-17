'use client';

import { ArrowRight, Building2, CalendarHeart, HeartHandshake, ShoppingBasket } from 'lucide-react';
import { useState } from 'react';

const opportunities = [
  {
    en:'EXPAND THE CATEGORY',
    title:'从儿童消费，到全家高频消费',
    strategy:'扩品类 · 扩赛道',
    shortInsight:'家庭营养跨越年龄阶段，也更接近日常高频消费。',
    shortSolution:'以Omega-3营养蛋、儿童超级营养蛋打开全家营养场景。',
    insight:'孩子王正在从母婴零售向全龄儿童和家庭生活服务延伸。家庭营养具有跨年龄阶段、日常高频的消费特点，为品类延展提供了新的合作空间。',
    solution:'Omega-3营养蛋、儿童超级营养蛋及家庭营养产品组合，帮助孩子王探索覆盖孕产、儿童与全家人的营养消费场景。',
    value:'增加家庭营养消费的商品选择与购买场景。',
    tags:['全龄家庭','高频消费','新品类机会'],
    icon:'family',
  },
  {
    en:'BUILD RECURRING VALUE',
    title:'从单次购买，到周期经营',
    strategy:'复购 · 单客经济',
    shortInsight:'持续的家庭营养需求，需要超越单次交易的产品权益。',
    shortSolution:'以月卡、季卡、年卡连接内容、兑换服务和会员运营。',
    insight:'家庭营养消费具有持续性，但普通商品销售往往围绕单次交易展开。通过周期化产品权益，可以探索更长期的家庭消费关系。',
    solution:'推出月卡、季卡、年卡，结合家庭早餐内容、兑换服务和会员运营，创造持续接触消费者的机会，并验证续卡和复购。',
    value:'让一次购买有机会延伸为持续的家庭营养消费关系。',
    tags:['月卡','季卡','年卡'],
    icon:'cycle',
  },
  {
    en:'LIGHTER RETAIL MODEL',
    title:'从门店卖生鲜，到销售营养权益',
    strategy:'同城数字化 · 经营效率',
    shortInsight:'不依赖门店大量备货，也可以探索家庭营养商品销售。',
    shortSolution:'门店展示与售卡，消费者兑换，圣迪乐按约定供应履约。',
    insight:'鸡蛋具有生产日期、库存、破损、配送及售后管理要求。双方可以探索不依赖门店大量备货的合作模式，但不代表完全没有运营与管理成本。',
    solution:'孩子王负责门店展示、会员触达及礼卡销售；消费者购买后按照规则兑换；圣迪乐依据双方确认的合作协议提供产品供应和履约支持。',
    value:'探索降低门店生鲜库存管理负担的销售方式。',
    tags:['轻量化经营','礼卡兑换','协同履约'],
    icon:'retail',
  },
  {
    en:'UNLOCK NEW CHANNELS',
    title:'从家庭零售，到企业福利新场景',
    strategy:'单客价值 · 新增业务机会',
    shortInsight:'家庭自用与亲友礼赠之外，营养礼卡还能进入团体采购。',
    shortSolution:'连接ToC家庭礼赠与ToB企业福利两条拟议销售路径。',
    insight:'营养礼卡不仅可以满足家庭自用与亲友礼赠，也可以延伸到员工关怀、工会福利和企业团体采购等场景。',
    solution:'结合圣迪乐特通渠道与双方潜在企业合作资源，探索企业HR、工会、行政采购及园区团购客户，形成ToC与ToB双销售路径。',
    value:'从单个家庭消费者，拓展到企业批量采购需求。',
    tags:['ToC家庭礼赠','ToB企业福利','增量渠道'],
    icon:'enterprise',
  },
];

function OpportunityIcon({type}:{type:string}){
  if(type==='cycle') return <CalendarHeart/>;
  if(type==='retail') return <HeartHandshake/>;
  if(type==='enterprise') return <Building2/>;
  return <ShoppingBasket/>;
}

export default function GrowthOpportunityPage(){
  const [active,setActive]=useState(0);
  const item=opportunities[active];
  return <div className="growth-opportunity-page">
    <header className="growth-strategy-head" data-reveal>
      <p>STRATEGIC GROWTH OPPORTUNITY / 战略增长机会</p>
      <h2>孩子王的下一份增长，<br/>可以从家庭的<em>每一天</em>开始。</h2>
      <div><b>从经营商品到经营用户，</b><span>从母婴消费到全家生活。</span></div>
      <nav><span>扩品类</span><i>×</i><span>扩赛道</span><i>×</i><span>扩业态</span></nav>
    </header>

    <section className="growth-foundation" data-reveal aria-label="孩子王经营基础">
      <div><strong>1亿+</strong><span>累计注册会员</span></div>
      <div><strong>1,284</strong><span>家亲子家庭服务门店</span></div>
      <div><strong>33.56%</strong><span>商品线上销售占比</span></div>
      <p>圣迪乐不是来使用孩子王已有的会员资源，而是带来<strong>新产品、新消费场景、新销售方式和新客户机会。</strong></p>
    </section>

    <div className="growth-opportunity-intro" data-reveal><span>02 / FOUR GROWTH OPPORTUNITIES</span><h3>四个经营方向，一套递进的增长逻辑</h3><p>点击任一机会，查看完整商业洞察与圣迪乐解决方案。</p></div>
    <section className="growth-opportunity-grid" aria-label="四大商业增长机会" data-reveal>
      {opportunities.map((op,index)=><button type="button" key={op.en} className={active===index?'active':''} onClick={()=>setActive(index)} aria-expanded={active===index}>
        <span className="growth-op-number">0{index+1}</span><span className="growth-op-icon"><OpportunityIcon type={op.icon}/></span>
        <small>{op.en}</small><h3>{op.title}</h3><b>{op.strategy}</b>
        <p>{op.shortInsight}</p><div><i>圣迪乐带来什么</i><span>{op.shortSolution}</span></div>
        <strong>{op.value}</strong><footer>{op.tags.map(tag=><em key={tag}>{tag}</em>)}<span>查看详情 <ArrowRight/></span></footer>
      </button>)}
    </section>

    <section className="growth-op-detail" aria-live="polite" data-reveal>
      <div className="growth-detail-index"><span>0{active+1}</span><small>{item.en}</small><OpportunityIcon type={item.icon}/></div>
      <div><small>商业洞察</small><p>{item.insight}</p></div>
      <div><small>圣迪乐带来的解决方案</small><p>{item.solution}</p></div>
      <aside><small>孩子王获得什么</small><b>{item.value}</b></aside>
    </section>

    <section className="growth-proposal" data-reveal>
      <div className="growth-proposal-copy"><span>OUR GROWTH PROPOSAL</span><h3>产品打开品类，场景创造需求，<br/><em>礼卡承接交易，合作创造增量。</em></h3><div><b>月卡</b><b>季卡</b><b>年卡</b></div><p><strong>ToC 家庭消费</strong><i>＋</i><strong>ToB 企业福利</strong></p><small>联名礼卡为拟议合作模式，产品权益、交易主体、兑换规则与履约责任以双方后续确认的协议为准。</small></div>
      <div className="growth-card-network" aria-label="四大机会汇聚到礼卡商业模式">
        <span className="network-node n1">新品类</span><span className="network-node n2">周期经营</span><span className="network-node n3">轻量销售</span><span className="network-node n4">新增渠道</span>
        <i className="network-line l1"/><i className="network-line l2"/><i className="network-line l3"/><i className="network-line l4"/>
        <div className="growth-real-card"><img src="assets/source/gift-card-omega.png" alt="圣迪乐真实营养蛋礼卡卡面"/><span>真实礼卡产品视觉</span></div>
      </div>
    </section>

    <footer className="growth-conclusion" data-reveal><span>FINAL STRATEGIC CONCLUSION</span><h3>以一枚好蛋切入家庭营养，<br/>以一张礼卡打开增长新场景。</h3><p>圣迪乐带来的不是一款寻找渠道的鸡蛋，而是一套值得双方共同验证的新增长方案。</p></footer>
    <p className="growth-source">数据来源：孩子王公开经营资料及项目已提供资料；统计口径与最终对外表达以孩子王审核确认为准。</p>
  </div>
}
