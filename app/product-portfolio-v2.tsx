'use client';

import { ArrowDown, Baby, Check, FileBadge2, Heart, PackageOpen, ShieldCheck, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const products = [
  {
    id:'omega3-product',number:'01',en:'OMEGA-3 NUTRITION EGG',name:'圣迪乐 OMEGA-3 营养蛋',line:'把难补充的OMEGA-3，放进家庭每天都熟悉的一枚蛋。',image:'assets/source/product-omega3-giftbox.png',tone:'gold',
    proof:'相当于普通鸡蛋 2倍 OMEGA-3',
    facts:['谷物、亚麻籽喂养','含OMEGA-3、DHA、α-亚麻酸、维生素A、维生素E','OMEGA-3强化鸡蛋生产技术规范起草单位之一','甄选德国罗曼粉种鸡','30枚/盒 · 单枚50g · 保质期30天'],
    family:'OMEGA-3是人体膳食中的重要脂肪酸来源之一。孕产家庭通常更关注妈妈与宝宝的膳食营养；婴幼儿与儿童处于生长发育阶段；成人也需要通过均衡饮食获取必需脂肪酸。圣迪乐OMEGA-3营养蛋把OMEGA-3融入家庭熟悉的日常食材，为不同家庭阶段提供更便捷的膳食选择。',
    patents:[],
  },
  {
    id:'kids-product',number:'02',en:'KIDS SUPER NUTRITION EGG',name:'圣迪乐儿童超级营养蛋',line:'围绕儿童家庭，把营养、口感与品质标准做成更容易理解的产品。',image:'assets/source/product-kids-giftbox.jpg',tone:'orange',
    proof:'含 2倍 OMEGA-3，宝宝更爱吃',
    facts:['含OMEGA-3、DHA、维生素A、维生素E','博士爸妈专研配方','执行圣迪乐儿童蛋生产标准','谷物喂养，细腻香滑','30枚/盒 · 保质期30天'],
    family:'适合已经进入相应辅食或家庭膳食阶段的儿童家庭，以更明确的儿童产品语言连接家长对营养、口感与品质的关注。',
    patents:[
      {type:'INVENTION PATENT',title:'一种用于生产适宜孕妇婴儿食用鸡蛋的饲料及其制备方法',meta:'中国发明专利 CN201310620108.6',copy:'此专利应用于圣迪乐OMEGA-3儿童蛋的生产过程。',image:'assets/source/omega3-importance-reference.png'},
      {type:'PACKAGING PATENT',title:'儿童超级营养蛋可再利用包装',meta:'包装设计与知识产权展示',copy:'包装在完成产品保护与信息传达后，可转化为家庭收纳或儿童书本整理工具，延长包装在家庭场景中的使用时间。',image:'assets/source/kids-reusable-package-patent.png'},
    ],
  },
];

export default function ProductPortfolioV2(){
  const [patent,setPatent]=useState<(typeof products)[number]['patents'][number] | null>(null);
  useEffect(()=>{const close=(e:KeyboardEvent)=>e.key==='Escape'&&setPatent(null);window.addEventListener('keydown',close);document.body.style.overflow=patent?'hidden':'';return()=>{window.removeEventListener('keydown',close);document.body.style.overflow=''}},[patent]);
  return <section id="product-portfolio" className="section product-portfolio-v2">
    <header className="portfolio-v2-head" data-reveal><div><p>PRODUCT PORTFOLIO / 两款核心营养蛋</p><h2>不是把一枚鸡蛋卖给所有人，<br/>而是为不同家庭阶段提供<em>更清楚的选择</em>。</h2></div><nav aria-label="跳转到产品介绍"><a href="#omega3-product">01 OMEGA-3 营养蛋</a><a href="#kids-product">02 儿童超级营养蛋</a></nav></header>
    <div className="portfolio-scroll-hint"><ArrowDown/>向下查看两款产品的完整信息与家庭人群匹配</div>

    {products.map((product,index)=><article id={product.id} className={`portfolio-product product-${product.tone}`} key={product.id} data-reveal>
      <div className="portfolio-product-visual"><span>{product.number} / {product.en}</span><img src={product.image} alt={`${product.name}真实产品包装`}/><i>SUNDaily<br/>FARM</i></div>
      <div className="portfolio-product-copy"><small>{product.en}</small><h3>{product.name}</h3><p className="portfolio-line">{product.line}</p><strong>{product.proof}</strong><div className="portfolio-facts">{product.facts.map((fact,i)=><p key={fact}><span>0{i+1}</span><Check/>{fact}</p>)}</div>{product.patents.length>0&&<div className="portfolio-patent-actions"><span>点击查看专利与设计资料</span>{product.patents.map((item,i)=><button type="button" onClick={()=>setPatent(item)} key={item.title}>{i===0?<FileBadge2/>:<PackageOpen/>}<b>{item.type}</b><small>{item.title}</small><em>展开查看 ↗</em></button>)}</div>}<div className="portfolio-family-fit"><span>{index===0?'OMEGA-3 对不同家庭阶段的意义':'与孩子王家庭的连接'}</span><p>{product.family}</p>{index===0&&<small>营养需求因人而异；孕妇、婴幼儿及特殊人群应依据专业建议与均衡膳食合理选择，产品不替代医疗或补充剂建议。</small>}</div></div>
    </article>)}

    {patent&&<div className="patent-detail-modal" role="dialog" aria-modal="true" aria-label={patent.title} onClick={()=>setPatent(null)}><article onClick={e=>e.stopPropagation()}><button className="patent-close" type="button" aria-label="关闭专利详情" onClick={()=>setPatent(null)}><X/></button><div className="patent-detail-image"><img src={patent.image} alt={`${patent.title}资料`}/></div><div className="patent-detail-copy"><span>{patent.type}</span><h3>{patent.title}</h3><b>{patent.meta}</b><p>{patent.copy}</p><small>资料来源于用户提供的圣迪乐产品文件与设计图；专利状态、权利范围及产品应用以正式专利文件和企业最终审核口径为准。</small></div></article></div>}

    <section className="family-match" data-reveal>
      <div className="family-match-head"><p>FAMILY STAGE MATCH / 人群匹配</p><h3>与孕产和婴幼儿家庭的联系，<br/>来自真实生活阶段，而不是夸大功效。</h3></div>
      <div className="match-paths">
        <article><span className="match-icon"><Heart/></span><small>MATERNITY & FAMILY NUTRITION</small><h4>孕产家庭：先服务全家的营养选择</h4><p>孕产阶段往往会提高家庭对食材品质、营养成分和长期供应稳定性的关注。OMEGA-3营养蛋可以作为家庭日常膳食中的一种食材选择。</p><div><b>更匹配</b><span>OMEGA-3营养蛋</span><span>家庭营养礼卡</span><span>周期消费</span></div><em>不宣称预防或治疗孕期疾病，不替代医生建议、补充剂或均衡膳食。</em></article>
        <article><span className="match-icon"><Baby/></span><small>BABY & CHILDREN FAMILY</small><h4>婴幼儿与儿童家庭：从适龄饮食进入成长日常</h4><p>儿童超级营养蛋以儿童家庭更容易理解的营养、口感和品质信息建立连接；实际食用应依据年龄、辅食添加阶段、过敏史和家庭喂养安排。</p><div><b>更匹配</b><span>儿童超级营养蛋</span><span>宝宝开荤礼</span><span>早餐实验室</span></div><em>婴幼儿食用须遵循适龄、适量和充分熟制原则，不默认适用于所有婴儿。</em></article>
      </div>
      <div className="match-center"><ShieldCheck/><b>共同的购买理由</b><span>真实产品信息</span><i>×</i><span>可验证品质体系</span><i>×</i><span>家庭日常场景</span></div>
    </section>

    <footer className="portfolio-source"><Sparkles/><p>产品信息来源于《圣迪乐公司及产品介绍（心智品）》；具体成分、规格、认证、适用方式及在售情况以产品实物包装和双方最终审核口径为准。</p></footer>
  </section>
}
