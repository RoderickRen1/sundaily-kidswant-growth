'use client';

import { ArrowRight, Check, Gift, Heart, Maximize2, Store, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const audiences = [
  {age:'孕产家庭',key:'MATERNITY',words:'品质 · 家庭营养 · 孕产关怀',needs:['关注日常食材品质','重视家庭营养搭配','存在家庭关怀与礼赠需求'],entries:['Omega-3营养蛋','家庭营养礼卡','孕产家庭礼赠','开荤礼提前触达'],benefit:'为孕产家庭提供日常营养食材选择与家庭关怀礼赠方案。',active:[0,3,4]},
  {age:'0—3岁',key:'FIRST YEARS',words:'成长仪式 · 辅食探索 · 食品品质',needs:['关注宝宝成长节点','重视辅食添加和食品品质','愿意记录与分享成长'],entries:['宝宝开荤礼','成长纪念礼盒','家庭营养礼卡','会员成长内容'],benefit:'为宝宝的重要成长时刻留下有温度的家庭记忆。',active:[0,2,3,4]},
  {age:'4—6岁',key:'EARLY CHILDHOOD',words:'饮食习惯 · 亲子参与 · 趣味体验',needs:['希望孩子参与早餐','需要简单实用的搭配','喜欢互动亲子活动'],entries:['7天早餐实验室','花式鸡蛋食谱','家庭营养会员内容','品质溯源亲子体验'],benefit:'让早餐更有趣，让孩子愿意参与，让家长获得实用灵感。',active:[1,2,3,4]},
  {age:'7—12岁',key:'GROWING YEARS',words:'自主探索 · 营养知识 · 成长体验',needs:['关注家庭日常营养','重视孩子自主参与','关注研学与知识探索'],entries:['7天早餐实验室','品质溯源与航天研学','家庭营养礼卡','会员持续运营'],benefit:'让孩子从日常饮食出发，参与有知识、有体验的成长活动。',active:[1,2,3,4]},
];

const campaignMatrix = [
  ['宝宝开荤礼','延伸触达','核心','—','—','#first-bite'],
  ['7天早餐实验室','—','—','核心','核心','#breakfast-challenge'],
  ['品质溯源与航天研学','—','延伸','核心','核心','#family-journey'],
  ['家庭营养会员运营','核心','核心','核心','核心','#membership'],
  ['营养礼赠与联合礼卡','核心','核心','核心','核心','#gifting-v3'],
];

const cards = [
  {name:'月卡',en:'MONTHLY',position:'一个月的家庭营养关怀',scene:'家庭尝鲜 · 日常消费 · 小额礼赠'},
  {name:'季卡',en:'SEASONAL',position:'一整个季度的营养陪伴',scene:'家庭周期消费 · 节庆礼赠 · 会员权益'},
  {name:'年卡',en:'ANNUAL',position:'把一整年的关心送给家人',scene:'长期家庭关怀 · 高价值礼赠 · 企业员工福利'},
];

export function ProductGiftCards(){
  const [cycle,setCycle]=useState(0); const [open,setOpen]=useState(false);
  useEffect(()=>{const fn=(e:KeyboardEvent)=>e.key==='Escape'&&setOpen(false);window.addEventListener('keydown',fn);return()=>window.removeEventListener('keydown',fn)},[]);
  return <div className="product-real-cards"><div><span>真实礼卡</span>{cards.map((c,i)=><button key={c.name} type="button" className={cycle===i?'active':''} onClick={()=>setCycle(i)}>{c.name}</button>)}</div><button className="product-card-thumb" type="button" onClick={()=>setOpen(true)}><img src="assets/source/gift-card-omega.png" alt="可生食无抗营养蛋真实礼卡卡面"/><span><b>{cards[cycle].name}</b><small>{cards[cycle].position}</small><em>查看卡面 ↗</em></span></button><small>卡面为真实素材；月卡／季卡／年卡的具体权益与兑换规则待双方确认。</small>{open&&<div className="card-lightbox" role="dialog" aria-modal="true" aria-label="产品礼卡卡面大图" onClick={()=>setOpen(false)}><button aria-label="关闭卡面预览" onClick={()=>setOpen(false)}><X/></button><img src="assets/source/gift-card-omega.png" alt="可生食无抗营养蛋真实礼卡卡面大图" onClick={e=>e.stopPropagation()}/><span>可生食无抗营养蛋 · {cards[cycle].name}</span></div>}</div>
}

export function V3Overview(){
  const [selected,setSelected]=useState(0);
  return <section id="opportunity-v3" className="section v3-overview">
    <div className="v3-title" data-reveal><div><p className="eyebrow">PART 02 / AUDIENCE × CAMPAIGN LOGIC</p><h2>从宝宝第一口，<br/>到全家<em>每一天</em></h2></div><p>围绕四大成长阶段，设计五大营销场景，让营养消费融入家庭成长的每一个重要时刻。</p></div>
    <p className="v3-lead" data-reveal>孩子王连接不同成长阶段的家庭，圣迪乐通过产品、活动和礼卡，为这些家庭提供不同的营养消费与成长体验。</p>
    <div className="audience-guide"><span>01 / 选择家庭客群</span><b>点击家庭客群，查看适合的联合营销活动 ↓</b></div>
    <div className="audience-cards" role="tablist" data-reveal>{audiences.map((a,i)=><button key={a.age} type="button" role="tab" aria-selected={selected===i} className={selected===i?'active':''} onClick={()=>setSelected(i)}><small>0{i+1} / {a.key}</small><strong>{a.age}</strong><span>{a.words}</span><em>查看详情 <ArrowRight size={14}/></em></button>)}</div>
    <div className="audience-detail" data-reveal><div><small>核心需求</small>{audiences[selected].needs.map(x=><p key={x}><Check size={14}/>{x}</p>)}</div><div><small>合作切入</small>{audiences[selected].entries.map(x=><b key={x}>{x}</b>)}</div><div className="audience-benefit"><small>消费者利益</small><strong>{audiences[selected].benefit}</strong><span>产品实际食用应依据年龄、辅食添加情况及食品安全要求。</span></div></div>
    <div className="matrix-head"><div><span>02 / 五大活动覆盖矩阵</span><b>当前高亮：{audiences[selected].age}</b></div><small>点击活动名称，直接进入活动详情</small></div>
    <div className="matrix-wrap" data-reveal><table className="audience-matrix"><thead><tr><th>联合营销活动</th>{audiences.map((a,i)=><th className={selected===i?'active':''} key={a.age}>{a.age}</th>)}</tr></thead><tbody>{campaignMatrix.map((row,ri)=><tr className={audiences[selected].active.includes(ri)?'active':''} key={row[0]}><th><a href={row[5]}>{row[0]} <ArrowRight size={13}/></a></th>{row.slice(1,5).map((cell,ci)=><td className={selected===ci?'selected':''} key={ci}><span className={cell==='核心'?'core':cell==='延伸'||cell==='延伸触达'?'extend':''}>{cell}</span></td>)}</tr>)}</tbody></table></div>
    <div className="value-chain" data-reveal>{[['引流','开荤礼、早餐试吃和亲子活动吸引家庭参与'],['销售','产品体验、营养礼卡与节日礼赠创造购买机会'],['留存','家庭营养内容、商品权益和成长体验持续经营会员'],['增量','企业福利、团体采购和联合礼卡探索新场景']].map((x,i)=><article key={x[0]}><span>0{i+1}</span><b>{x[0]}</b><p>{x[1]}</p></article>)}</div>
    <p className="v3-summary">用活动吸引家庭，用礼卡承接购买，用会员运营延续消费关系。</p>
  </section>
}

export function V3Gifting(){
  const [cycle,setCycle]=useState(0); const [route,setRoute]=useState(0); const [preview,setPreview]=useState(false);
  useEffect(()=>{const onKey=(e:KeyboardEvent)=>e.key==='Escape'&&setPreview(false);window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
  useEffect(()=>{document.body.style.overflow=preview?'hidden':'';return()=>{document.body.style.overflow=''}},[preview]);
  const image='assets/source/sundaily-kidswant-co-brand-card-v1.png';
  return <section id="gifting-v2" className="section gifting-v3"><span id="gifting-v3" className="v2-anchor-alias" aria-hidden="true" />
    <div className="campaign-head" data-reveal><div><p className="eyebrow">ACTIVITY 05 / NUTRITION GIFT CARD</p><h2>不增加复杂生鲜管理，<br/>也能开展<em>家庭营养商品销售</em></h2></div><div className="campaign-meta"><span>家庭会员 · 企业HR · 工会 · 园区客户</span><b>以体验建立信任，以礼卡承接购买</b><small>圣迪乐牵头：杨明｜特渠</small></div></div>
    <div className="light-inventory" data-reveal><article><Store/><small>模式 A / 活动型实物体验</small><h3>限定场次 · 少量产品</h3><p>用于开荤礼、早餐实验室、门店试吃与亲子活动，按活动需求配送，控制效期与损耗。</p></article><i><span>体验建立信任</span><ArrowRight/><b>礼卡承接购买</b></i><article><Gift/><small>模式 B / 礼卡型商品销售</small><h3>按需兑换 · 后端履约</h3><p>用于家庭购买、会员权益、家庭礼赠与企业福利，减少门店直接管理生鲜库存的需求。</p></article></div>
    <div className="card-gallery cobranded-gallery" data-reveal><div className="card-image"><img src={image} alt="圣迪乐与孩子王联名礼卡概念提案"/><button type="button" onClick={()=>setPreview(true)}><Maximize2 size={16}/>查看联名卡面 ↗</button></div><div className="card-config"><span>01 / 联名卡面设计</span><div className="co-brand-note"><b>圣迪乐品质橙</b><i>×</i><b>孩子王成长绿</b><p>用蛋形品质符号连接家庭成长场景，让双方品牌不是简单并排，而是共同表达“营养有蛋，成长有伴”。</p></div><span>02 / 选择消费周期</span><div className="cycle-tabs" role="tablist">{cards.map((c,i)=><button type="button" role="tab" aria-selected={cycle===i} className={cycle===i?'active':''} onClick={()=>setCycle(i)} key={c.name}><small>{c.en}</small><b>{c.name}</b></button>)}</div><article className="cycle-copy"><small>{cards[cycle].en} CARE</small><h3>{cards[cycle].position}</h3><p>{cards[cycle].scene}</p><b>联名卡面为合作概念提案 · 具体产品、兑换次数、配送频率、价格及权益待双方确认</b></article></div></div>
    <div className="sales-head"><div><span>03 / 选择销售打法</span><b>点击切换 ToC 与 ToB，查看目标客户、销售入口与完整流程</b></div><div className="route-tabs"><button className={route===0?'active':''} onClick={()=>setRoute(0)}><Heart/>ToC 家庭零售</button><button className={route===1?'active':''} onClick={()=>setRoute(1)}><Users/>ToB 企业采购</button></div></div>
    {route===0?<div className="route-panel toc-panel" data-reveal><div className="route-people">{[['孕产及年轻家庭','家庭食材品质与便利兑换','月卡'],['3—12岁儿童家庭','周期采购与日常饮食','月卡／季卡'],['家庭礼赠人群','把一次礼物变成持续关怀','季卡／年卡']].map(x=><article key={x[0]}><small>目标客群</small><h3>{x[0]}</h3><p>{x[1]}</p><b>推荐：{x[2]}</b></article>)}</div><div className="touchpoints">{['孩子王门店收银台','家庭营养商品区域','会员社群与私域','节日营销'].map((x,i)=><span key={x}><i>0{i+1}</i><b>{x}</b></span>)}</div><div className="route-flow">{['门店／私域触达','了解礼卡权益','扫码购买','获得电子卡或实体卡','收礼人按规则兑换','圣迪乐按约定履约'].map((x,i)=><span key={x}><i>{i+1}</i>{x}{i<5&&<ArrowRight/>}</span>)}</div><div className="route-value"><b>孩子王获得什么？</b><span>新增商品销售机会</span><span>丰富会员权益</span><span>拓展家庭礼赠场景</span></div></div>:<div className="route-panel tob-panel" data-reveal><div className="route-people">{[['企业HR','员工关怀 · 节日福利 · 家庭活动'],['企业工会','慰问 · 节庆福利 · 家庭关怀'],['行政与采购','批量福利 · 节庆礼赠 · 客户关怀'],['园区服务机构','联合采购 · 团体伴手礼']].map(x=><article key={x[0]}><small>拟开发客户</small><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div><div className="route-flow seven">{['目标客户开发','企业需求沟通','匹配礼卡方案','商务报价与采购','批量发卡','员工自主兑换','履约与售后'].map((x,i)=><span key={x}><i>{i+1}</i>{x}{i<6&&<ArrowRight/>}</span>)}</div><div className="role-table"><div><b>合作环节</b><b>孩子王（拟议）</b><b>圣迪乐（拟议）</b></div>{[['客户资源','探索企业合作资源','特渠及已有客户资源'],['客户开发','联合推荐与触达','杨明／特渠牵头'],['产品方案','提供家庭消费场景','礼卡产品与权益'],['履约售后','必要服务协同','按协议明确责任']].map(x=><div key={x[0]}>{x.map(c=><span key={c}>{c}</span>)}</div>)}</div><div className="route-value"><b>孩子王合作价值</b><span>拓展企业福利销售机会</span><span>减少生鲜门店管理压力</span><span>延伸家庭会员服务触点</span></div></div>}
    <div className="operation-chain"><b>线下活动创造体验</b><ArrowRight/><b>月卡／季卡／年卡承接购买</b><ArrowRight/><b>私域持续经营</b><ArrowRight/><b>复购与礼赠延伸</b></div>
    <p className="v3-summary">用活动吸引家庭，用礼卡实现销售，用会员运营延续消费关系。</p>
    {preview&&<div className="card-lightbox" role="dialog" aria-modal="true" aria-label="联名礼卡卡面大图" onClick={()=>setPreview(false)}><button aria-label="关闭卡面预览" onClick={()=>setPreview(false)}><X/></button><img src={image} alt="圣迪乐与孩子王联名礼卡概念提案大图" onClick={e=>e.stopPropagation()}/><span>圣迪乐 × 孩子王 · {cards[cycle].name}联名概念卡</span></div>}
  </section>
}
