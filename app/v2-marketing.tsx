'use client';

import { ArrowRight, Check, ChevronRight, Gift, Heart, QrCode, Rocket, ShieldCheck, Sparkles, Store, Users } from 'lucide-react';
import { useState } from 'react';

const activities = [
  {step:'第一口',name:'宝宝开荤礼',audience:'0.5—3岁宝宝家庭',idea:'把人生第一枚好蛋，做成值得记住的成长仪式。',benefit:'一次有仪式感的家庭成长纪念',kw:'到店客流·礼盒销售·会员互动',owner:'宣明海｜战区',href:'#first-bite'},
  {step:'好习惯',name:'7天早餐实验室',audience:'3岁以上儿童家庭',idea:'从门店试吃进入7天挑战，让孩子参与、让家长有做法。',benefit:'学早餐做法，完成挑战限量领4枚蛋',kw:'试吃引流·产品转化·私域互动',owner:'宣明海｜战区',href:'#breakfast-challenge'},
  {step:'探索成长',name:'品质溯源与航天亲子研学',audience:'孩子王新老会员家庭',idea:'从真实基地到航天主题探索，把品质信任变成亲子体验。',benefit:'了解鸡蛋来源，获得稀缺成长体验机会',kw:'品牌信任·会员权益·内容素材',owner:'肖春霞｜品牌部、市场部',href:'#family-journey'},
  {step:'持续陪伴',name:'家庭营养会员运营',audience:'孩子王新老会员家庭',idea:'用商品权益、家庭营养内容和亲子成长权益延长关系。',benefit:'实用内容、商品权益与成长活动机会',kw:'会员活跃·复购·长期关系',owner:'周雪｜私域运营',href:'#membership'},
  {step:'情感传递',name:'营养礼赠与联合礼卡',audience:'家庭礼赠、企业及团体客户',idea:'用联合蛋卡把营养与关心，送到家人和员工家庭。',benefit:'一份实用、有温度的家庭关怀',kw:'礼赠销售·企业采购机会',owner:'杨明｜特渠',href:'#gifting-v2'},
];

const ceremonyTabs = [
  {name:'开荤礼盒',title:'礼盒负责「获得体面」',copy:'用品牌鸡蛋、仪式主题包装、开荤祝福卡、成长纪念物料和礼仪说明卡，构成一套完整礼赠表达。',tags:['品牌鸡蛋','仪式包装','祝福卡','纪念物料']},
  {name:'开荤礼卡',title:'礼卡负责「获得出口」',copy:'用传统吉语与现代简约视觉，让家长可以填写宝宝昵称、仪式日期和祝福语，生成成长纪念卡。',tags:['三款视觉','模拟填写','即时预览','不保存信息']},
  {name:'门店仪式',title:'仪式负责「记得住」',copy:'从预约报名到亲子合影，在孩子王门店设置轻量拍摄区，让「宝宝人生中的重要一口」成为家庭愿意主动记录的瞬间。',tags:['预约报名','家庭签到','传统祝福','亲子合影']},
];

const days = [
  ['DAY 0','报名并领取早餐灵感包','七种做法·搭配建议·挑战任务'],
  ['DAY 1','记录一次家庭早餐','看见家庭真实习惯'],
  ['DAY 2','尝试5分钟快手早餐','选择一套可执行方案'],
  ['DAY 3','让孩子参与早餐设计','从吃饭者变成参与者'],
  ['DAY 4','尝试一种创意鸡蛋做法','增加趣味，不要求每天吃蛋'],
  ['DAY 5','认识鸡蛋品质与营养标签','把品质变成看得懂的线索'],
  ['DAY 6','分享一次家庭早餐搭配','可选择仅保存，不强制公开'],
  ['DAY 7','完成挑战，领取奖励资格','生成模拟核销凭证'],
];

const memberTabs = [
  {name:'商品权益',icon:'01',title:'让每一次购买都有下一步',items:['首购专属权益','复购优惠','会员专属产品组合','补货提醒']},
  {name:'家庭营养',icon:'02',title:'把产品转化为家庭真正用得上的内容',items:['早餐食谱','花式鸡蛋做法','家庭营养搭配','品质知识与饮食灵感']},
  {name:'亲子成长',icon:'03',title:'让会员因为新的成长机会持续回来',items:['宝宝开荤礼报名','7天早餐实验室','基地溯源活动','航天主题权益申请']},
];

const b2cGifts = [
  ['春节家庭礼赠','把一份日常营养，送进全家团聚的新年。'],['祖辈关怀','不能每天陪你吃饭，就把一份日常关心送到家。'],['新生家庭','愿新生活的每一天，都有好好吃饭的温暖。'],['节日亲友','用一份实用的营养心意，表达想念与祝福。']
];

export default function V2Marketing(){
  const [activity,setActivity]=useState(0);
  const [ceremony,setCeremony]=useState(0);
  const [cardStyle,setCardStyle]=useState(0);
  const [cardOpen,setCardOpen]=useState(false);
  const [babyName,setBabyName]=useState('小曜');
  const [blessing,setBlessing]=useState('平安健康，欢喜长大');
  const [day,setDay]=useState(0);
  const [rewardOpen,setRewardOpen]=useState(false);
  const [journey,setJourney]=useState(0);
  const [member,setMember]=useState(0);
  const [giftMode,setGiftMode]=useState(0);
  const [giftScene,setGiftScene]=useState(0);

  return <>
    <span id="opportunity" className="v2-anchor-alias" aria-hidden="true" />
    <section id="campaigns" className="section v2-overview">
      <div className="v2-heading" data-reveal><div><p className="eyebrow">PART 02 / FIVE JOINT CAMPAIGNS</p><h2>从宝宝第一口，<br/>到全家<em>每一天</em></h2></div><p>五大联合营销活动，连接成长仪式、日常营养、亲子体验、会员经营与家庭关怀。</p></div>
      <div className="growth-path" data-reveal>{activities.map((item,i)=><button type="button" className={activity===i?'active':''} onClick={()=>setActivity(i)} key={item.name}><span>0{i+1}</span><i/><b>{item.step}</b><small>{item.name}</small></button>)}</div>
      <div className="activity-focus" data-reveal>
        <div className="focus-index"><span>0{activity+1}</span><small>{activities[activity].step}</small></div>
        <div className="focus-main"><span>{activities[activity].audience}</span><h3>{activities[activity].name}</h3><p>{activities[activity].idea}</p></div>
        <div className="focus-value"><div><span>消费者为什么参与</span><b>{activities[activity].benefit}</b></div><div><span>孩子王获得什么</span><b>{activities[activity].kw}</b></div></div>
        <div className="focus-action"><small>圣迪乐牵头</small><b>{activities[activity].owner}</b><a href={activities[activity].href}>查看活动 <ArrowRight size={15}/></a></div>
      </div>
      <p className="overview-summary" data-reveal>以不同家庭需求为入口，让每一次活动都成为新的消费和会员连接机会。</p>
    </section>

    <section id="first-bite" className="section ceremony-section">
      <div className="campaign-head" data-reveal><div><p className="eyebrow">ACTIVITY 01 / GROWTH RITUAL</p><h2>人生第一枚好蛋，<br/>值得<em>认真纪念</em></h2></div><div className="campaign-meta"><span>0.5—3岁宝宝家庭</span><b>人生第一枚好蛋·宝宝开荤礼</b><small>圣迪乐牵头：宣明海｜战区</small></div></div>
      <div className="ceremony-stage" data-reveal>
        <div className="ceremony-visual"><img src="assets/source/v2-nutrition-class.jpg" alt="圣迪乐真实营养科普与体验场景"/><div><span>THE FIRST GOOD EGG</span><b>礼盒获得体面<br/>礼卡获得出口<br/>仪式让家庭记得住</b></div></div>
        <div className="ceremony-panel"><div className="ceremony-tabs" role="tablist">{ceremonyTabs.map((x,i)=><button type="button" role="tab" aria-selected={ceremony===i} className={ceremony===i?'active':''} onClick={()=>setCeremony(i)} key={x.name}>{x.name}</button>)}</div><div className="ceremony-copy"><span>0{ceremony+1} / FORMAT</span><h3>{ceremonyTabs[ceremony].title}</h3><p>{ceremonyTabs[ceremony].copy}</p><div>{ceremonyTabs[ceremony].tags.map(x=><b key={x}>{x}</b>)}</div>{ceremony===1&&<button type="button" className="primary-btn" onClick={()=>setCardOpen(true)}> <Sparkles size={15}/>生成成长纪念卡</button>}{ceremony===2&&<div className="mini-flow">{['预约报名','家庭签到','领取礼卡','祝福仪式','亲子合影','自愿体验'].map((x,i)=><span key={x}><i>{i+1}</i>{x}</span>)}</div>}</div></div>
      </div>
      <div className="campaign-value" data-reveal><span>孩子王合作价值</span><div><b>门店引流</b><b>成长仪式</b><b>礼盒销售</b><b>社交传播</b></div><p>食品体验应使用适龄、安全、充分熟制的食品，并由家长确认是否适合宝宝食用。</p></div>
    </section>
    {cardOpen&&<div className="v2-modal" role="dialog" aria-modal="true" aria-label="生成成长纪念卡" onClick={()=>setCardOpen(false)}><article className="memory-builder" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setCardOpen(false)} aria-label="关闭">×</button><div className="memory-form"><span>DEMO / 信息不会保存</span><h3>生成宝宝第一枚好蛋纪念卡</h3><label>宝宝昵称<input value={babyName} onChange={e=>setBabyName(e.target.value.slice(0,8))}/></label><label>仪式日期<input type="date" defaultValue="2027-01-01"/></label><label>家庭祝福<input value={blessing} onChange={e=>setBlessing(e.target.value.slice(0,24))}/></label><div className="style-switch">{['朝阳橙','浅金笺','成长绿'].map((x,i)=><button type="button" className={cardStyle===i?'active':''} onClick={()=>setCardStyle(i)} key={x}>{x}</button>)}</div><small>28天成长卡仅用于记录成长瞬间、家庭互动、纪念照片与家长祝福，不提供统一喂养建议。</small></div><div className={`memory-card style-${cardStyle}`}><span>营养有蛋 · 成长有伴</span><small>MY FIRST GOOD EGG</small><div className="memory-egg"><i/></div><h4>{babyName||'宝宝'}的第一枚好蛋</h4><p>{blessing||'欢喜长大'}</p><div className="memory-days">{Array.from({length:28},(_,i)=><i key={i}>{i+1}</i>)}</div><b>成长纪念卡 · 演示</b></div></article></div>}

    <section id="breakfast-challenge" className="section challenge-section">
      <div className="campaign-head light" data-reveal><div><p className="eyebrow">ACTIVITY 02 / 7 DAYS BREAKFAST LAB</p><h2>7天早餐挑战，<br/>完成限量领<em>4枚营养蛋</em></h2></div><div className="campaign-meta"><span>3岁以上儿童家庭</span><b>7天早餐实验室·小小早餐养成家</b><small>圣迪乐牵头：宣明海｜战区</small></div></div>
      <div className="entry-chain" data-reveal>{['门店试吃','扫码报名','7天挑战','限量领4枚蛋'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b>{i<3&&<ArrowRight/>}</div>)}</div>
      <div className="challenge-workbench" data-reveal>
        <div className="breakfast-photo"><img src="assets/source/v2-breakfast-real.jpg" alt="圣迪乐鸡蛋家庭早餐搭配实拍"/><div><span>BREAKFAST INSPIRATION</span><b>真实、简单、愿意参与</b><p>不要求儿童每天吃鸡蛋，重点是建立家庭参与与早餐灵感。</p></div></div>
        <div className="day-console"><div className="day-progress"><span>7 DAYS PROGRESS</span><b><i style={{width:`${(day+1)/8*100}%`}}/></b><small>{day+1}/8</small></div><div className="day-picker">{days.map((x,i)=><button type="button" aria-label={`查看${x[0]}`} className={day===i?'active':''} onClick={()=>setDay(i)} key={x[0]}><span>{i}</span><small>{x[0]}</small></button>)}</div><article className="day-focus"><span>{days[day][0]}</span><h3>{days[day][1]}</h3><p>{days[day][2]}</p><div><b>用户动作</b><p>{day===0?'从门店或社群扫码报名，免费领取7天早餐灵感包。':day===7?'查看完成记录，生成模拟奖励凭证，到指定门店领取。':'打开今日任务，选择适合家庭的做法并完成一次记录。'}</p></div>{day===7&&<button className="primary-btn" type="button" onClick={()=>setRewardOpen(true)}><Gift size={16}/>演示奖励核销</button>}</article></div>
      </div>
      <div className="recipe-strip" data-reveal><div><span>7天早餐灵感包</span><b>7种做法 · 简单搭配 · 家庭任务</b></div>{['5分钟快手蛋','全家分享盘','小小设计师'].map((x,i)=><article key={x}><span>0{i+1}</span><b>{x}</b><small>示意食谱卡</small></article>)}</div>
      <div className="campaign-value dark" data-reveal><span>孩子王合作价值</span><div><b>门店试吃引流</b><b>活动报名</b><b>产品首购</b><b>会员互动</b><b>持续复购</b></div></div>
    </section>
    {rewardOpen&&<div className="v2-modal" role="dialog" aria-modal="true" aria-label="奖励核销演示" onClick={()=>setRewardOpen(false)}><article className="reward-ticket" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setRewardOpen(false)} aria-label="关闭">×</button><span>7 DAYS COMPLETE</span><div className="reward-eggs">{[1,2,3,4].map(x=><i key={x}/>)}</div><h3>限量领4枚圣迪乐鸡蛋</h3><p>每个符合条件的家庭限领一次，到指定门店核销。</p><div className="demo-code"><QrCode/><b>DEMO—27</b></div><strong>每期名额待确认</strong><small>模拟核销凭证，不代表已发放奖励或真实库存。</small></article></div>}

    <section id="family-journey" className="section v2-journey">
      <div className="campaign-head" data-reveal><div><p className="eyebrow">ACTIVITY 03 / TRACE & EXPLORE</p><h2>从产地到餐桌，<br/>探索一枚鸡蛋的<em>成长</em></h2></div><div className="campaign-meta"><span>孩子王新老会员家庭</span><b>一枚鸡蛋的成长旅行</b><small>圣迪乐牵头：肖春霞｜品牌部、市场部</small></div></div>
      <div className="journey-switch" role="tablist" data-reveal><button type="button" className={journey===0?'active':''} onClick={()=>setJourney(0)}><ShieldCheck/>真实基地溯源</button><button type="button" className={journey===1?'active':''} onClick={()=>setJourney(1)}><Rocket/>航天主题探索</button></div>
      {journey===0?<div className="journey-scene base-scene" data-reveal><div className="journey-image"><img src="assets/source/v2-farm-chain.png" alt="圣迪乐真实基地、生产与养殖场景"/><span>REAL SUNDaily BASE</span></div><div className="journey-copy"><span>SCENE A</span><h3>带孩子看看，每天吃的鸡蛋从哪里来</h3><p>从品牌与基地介绍，到养殖生产知识、品质溯源、亲子互动和联合内容拍摄。</p><div className="journey-steps">{['会员报名','行前安全说明','开放区域参观','品质任务','家庭合影与复盘'].map((x,i)=><div key={x}><i>0{i+1}</i><b>{x}</b></div>)}</div><small>活动路线以基地实际允许开放的区域及接待条件为准；获得拍摄及肖像授权后，方可形成双方使用的品牌素材。</small></div></div>:<div className="journey-scene space-scene" data-reveal><div className="journey-image"><img src="assets/source/v2-space-event.jpg" alt="圣迪乐航天主题品牌活动实拍"/><span>SPACE-THEMED EXPERIENCE</span></div><div className="journey-copy"><span>SCENE B</span><h3>让一次亲子探索，成为值得期待的会员成长权益</h3><div className="space-quota"><b>每半年3个名额</b><span>2027年全年拟设6个名额</span><small>名额具体定义待确认</small></div><div className="space-rights"><span>可探索内容</span><b>航天主题亲子活动</b><b>航天知识互动</b><b>家庭成长体验</b><b>品牌内容共创</b></div><p className="legal-note">拟议合作权益，具体以授权及执行条件确认为准。</p></div></div>}
      <div className="campaign-value" data-reveal><span>孩子王合作价值</span><div><b>品牌信任</b><b>亲子体验</b><b>会员权益</b><b>联合内容资产</b></div></div>
    </section>

    <section id="membership" className="section member-section">
      <div className="campaign-head light" data-reveal><div><p className="eyebrow">ACTIVITY 04 / FAMILY MEMBERSHIP</p><h2>从一次体验，<br/>到<em>长期陪伴</em></h2></div><div className="campaign-meta"><span>孩子王新老会员家庭</span><b>家庭营养成长会员计划</b><small>圣迪乐牵头：周雪｜私域运营</small></div></div>
      <div className="member-loop" data-reveal>{['活动参与','会员沉淀','内容互动','商品复购','专属权益'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b>{i<4&&<ChevronRight/>}</div>)}</div>
      <div className="member-workbench" data-reveal><div className="member-tabs">{memberTabs.map((x,i)=><button type="button" className={member===i?'active':''} onClick={()=>setMember(i)} key={x.name}><span>{x.icon}</span><b>{x.name}</b><small>{x.title}</small></button>)}</div><div className="member-phone"><div className="phone-top"><span>9:41</span><b>家庭营养成长</b><i>•••</i></div><div className="phone-hero"><small>{memberTabs[member].name}</small><h3>{memberTabs[member].title}</h3><span>联合会员服务 · 演示</span></div><div className="phone-list">{memberTabs[member].items.map((x,i)=><div key={x}><i>{i<2?<Check/>:'+'}</i><b>{x}</b><ArrowRight/></div>)}</div><button type="button" onClick={()=>setMember((member+1)%3)}>查看下一类权益</button></div><div className="member-roles"><span>COLLABORATION ROLES</span><div><Store/><b>战区</b><p>活动入口与线下体验</p></div><div><Sparkles/><b>品牌部</b><p>内容与品牌体验</p></div><div><Users/><b>周雪</b><p>私域承接、持续内容与会员运营</p></div><small>不改变孩子王现有会员等级规则；页面为联合运营模拟界面。</small></div></div>
      <div className="campaign-value dark" data-reveal><span>孩子王合作价值</span><div><b>会员活跃</b><b>持续复购</b><b>家庭内容服务</b><b>长期用户关系</b></div></div>
    </section>

    <section id="gifting-v2" className="section v2-gifting">
      <div className="campaign-head" data-reveal><div><p className="eyebrow">ACTIVITY 05 / NUTRITION GIFTING</p><h2>一份好蛋，<br/>送给每一个<em>值得关心的人</em></h2></div><div className="campaign-meta"><span>家庭礼赠消费者、企业及团体客户</span><b>把营养送给你爱的人</b><small>圣迪乐牵头：杨明｜特渠</small></div></div>
      <div className="gift-mode" role="tablist" data-reveal><button type="button" className={giftMode===0?'active':''} onClick={()=>setGiftMode(0)}><Heart/>B2C 家庭礼赠</button><button type="button" className={giftMode===1?'active':''} onClick={()=>setGiftMode(1)}><Users/>B2B 企业关怀</button></div>
      <div className={`gift-v2-stage mode-${giftMode}`} data-reveal><div className="joint-card"><div className="joint-brand"><span className="egg-mark"><span/></span><b>圣迪乐 <i>×</i> 孩子王</b></div><small>{giftMode===0?'FAMILY NUTRITION GIFT':'ENTERPRISE FAMILY CARE'}</small><h3>{giftMode===0?b2cGifts[giftScene][0]:'企业家庭关怀卡'}</h3><p>{giftMode===0?b2cGifts[giftScene][1]:'让企业福利从一份实物，延伸到员工的家庭日常。'}</p><div className="joint-egg"><span>营养<br/>有蛋</span></div><b className="card-demo">联合蛋卡 · 概念演示</b></div><div className="gift-v2-copy"><span>{giftMode===0?'ROUTE A / PERSONAL GIFT':'ROUTE B / CORPORATE CARE'}</span><h3>{giftMode===0?'把营养与关心，送到家人身边':'让企业福利延伸到员工家庭'}</h3>{giftMode===0?<div className="gift-scenes">{b2cGifts.map((x,i)=><button type="button" className={giftScene===i?'active':''} onClick={()=>setGiftScene(i)} key={x[0]}>{x[0]}</button>)}</div>:<div className="b2b-scenes"><b>企业员工福利</b><b>工会采购</b><b>企业节庆礼赠</b><b>员工家庭关怀</b></div>}<div className="gift-use-flow"><span>购买礼卡</span><i>→</i><span>赠送／发放</span><i>→</i><span>收礼人领取</span><i>→</i><span>按规则兑换</span></div><small>不代表已上线卡券；面额、有效期、兑换区域、物流及履约规则待双方确认。</small></div></div>
      <div className="campaign-value" data-reveal><span>孩子王合作价值</span><div><b>节庆销售</b><b>礼卡产品</b><b>企业客户开发</b><b>家庭消费场景延伸</b></div></div>
    </section>
  </>;
}
