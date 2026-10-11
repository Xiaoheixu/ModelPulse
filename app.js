const presets={minimal:{note:'只留下必要信息，让灵感拥有更多空间。',html:'<div class="metric"><small>生成速度</small><strong>48.2 <em>Token / s</em></strong></div><svg class="widget-chart" viewBox="0 0 280 46" role="img" aria-label="示意生成速度趋势"><path d="M0 36l20-8 20 5 20-19 20 7 20-9 20 5 20-14 20 9 20-5 20 7 20-13 20 4 20-5"/></svg><div class="pair"><span>当前模型</span><b>示例模型</b></div>'},developer:{note:'速度、延迟与上下文，让每次调试都有依据。',html:'<div class="metric"><small>上下文使用 · 示例</small><strong>32 <em>%</em></strong></div><div class="pair"><span>生成速度</span><b>48.2 t/s</b></div><div class="pair"><span>首 Token 延迟</span><b>420 ms</b></div><div class="pair"><span>推理 Token</span><b>不可用</b></div>'},cost:{note:'关注使用成本，在预算内从容创造。',html:'<div class="metric"><small>今日费用 · 估算</small><strong><em>$</em> 0.86</strong></div><div class="pair"><span>月度预算 · 示例</span><b>$20.00</b></div><div class="pair"><span>预算使用</span><b>18%</b></div><div class="pair"><span>供应商账单</span><b>不可用</b></div>'}};
document.querySelector('#presetContent').innerHTML=presets.minimal.html;
document.querySelectorAll('[data-preset]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-preset]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});const p=presets[button.dataset.preset];document.querySelector('#presetContent').innerHTML=p.html;document.querySelector('#presetNote').textContent=p.note;}));
const dialog=document.querySelector('#releaseDialog');document.querySelector('#releaseButton').addEventListener('click',()=>dialog.showModal());document.querySelectorAll('.close,.close-button').forEach(b=>b.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.section').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
const componentData={tokens:{title:'Token 用量',value:'12,840',unit:'',detail:'输入与输出 · 示例',icon:'⊞'},speed:{title:'生成速度',value:'48.2',unit:'t/s',detail:'当前请求 · 示例',icon:'ϟ'},context:{title:'上下文占用',value:'32',unit:'%',detail:'独立于累计 Token',icon:'◔'},cost:{title:'今日费用估算',value:'0.86',unit:'USD',detail:'示例价格 · 非实际账单',icon:'＄'},connection:{title:'连接状态',value:'已连接',unit:'',detail:'示例 API 数据源',icon:'◎'},latency:{title:'首 Token 延迟',value:'420',unit:'ms',detail:'当前请求 · 示例',icon:'◷'}};
let selectedComponents=['tokens','speed','context'];
const grid=document.querySelector('#assemblyGrid'),count=document.querySelector('#componentCount');
function renderComponents(){const previous=new Map([...grid.children].filter(e=>e.dataset.componentId).map(e=>[e.dataset.componentId,e.getBoundingClientRect()]));const existing=new Set(previous.keys());grid.innerHTML=selectedComponents.length?selectedComponents.map(id=>{const c=componentData[id];return '<article class="component-card '+(!existing.has(id)?'entering':'')+'" data-component-id="'+id+'"><i class="card-icon">'+c.icon+'</i><small>'+c.title+'</small><strong>'+c.value+' <em>'+c.unit+'</em></strong>'+(id==='context'?'<div class="card-bar"><i></i></div>':'')+'<span>'+c.detail+'</span></article>';}).join(''):'<div class="empty-builder">留白，也是一种选择。<br>从左侧选一块组件开始。</div>';count.textContent=selectedComponents.length+' 个组件 · 你的组合';document.querySelectorAll('[data-component]').forEach(button=>{const active=selectedComponents.includes(button.dataset.component);button.setAttribute('aria-pressed',String(active));button.querySelector('i').textContent=active?'✓':'+';});if(!matchMedia('(prefers-reduced-motion: reduce)').matches){[...grid.children].forEach(el=>{const old=previous.get(el.dataset.componentId);if(old){const next=el.getBoundingClientRect();el.animate([{transform:'translate('+ (old.left-next.left)+'px,'+(old.top-next.top)+'px)'},{transform:'translate(0,0)'}],{duration:500,easing:'cubic-bezier(.2,.8,.2,1)'});}});}}
document.querySelectorAll('[data-component]').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.component;selectedComponents=selectedComponents.includes(id)?selectedComponents.filter(x=>x!==id):[...selectedComponents,id];renderComponents();}));
document.querySelector('#reorderComponents').addEventListener('click',()=>{if(selectedComponents.length>1){selectedComponents.push(selectedComponents.shift());renderComponents();}});
document.querySelectorAll('[data-preset]').forEach(button=>button.addEventListener('click',()=>{const content=document.querySelector('#presetContent');content.classList.remove('preset-enter');void content.offsetWidth;content.classList.add('preset-enter');}));
renderComponents();

// One shared demonstration clock drives the dashboard and floating widget.
// No API requests or real usage data are involved.
(() => {
 const scene=document.querySelector('.scene');
 const toggle=document.querySelector('#sceneMotionToggle');
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const stats=scene.querySelectorAll('.stats strong');
 const speedText=document.createTextNode('48.2');
 stats[1].firstChild.replaceWith(speedText);
 const floatingText=document.createTextNode('48.2 ');
 scene.querySelector('.floating strong').firstChild.replaceWith(floatingText);
 const usageText=stats[0].firstChild;
 const costText=stats[2].lastChild;
 const chartLine=scene.querySelector('.chart .line');
 const chartFill=scene.querySelector('.chart svg path:not(.line)');
 const spark=scene.querySelector('.floating svg path');
 const context=scene.querySelector('.context b');
 const bar=scene.querySelector('.progress i');
 const svg=scene.querySelector('.chart svg');
 const tip=document.createElementNS('http://www.w3.org/2000/svg','circle');
 tip.setAttribute('r','4');tip.setAttribute('class','live-tip');tip.setAttribute('aria-hidden','true');svg.append(tip);
 let paused=reduce.matches,visible=false,raf=0,elapsed=0,last=0,lastPaint=-1000;
 function draw(t){
   const speed=48.2+Math.sin(t*.62)*2.4+Math.sin(t*1.17)*.8;
   speedText.nodeValue=speed.toFixed(1);floatingText.nodeValue=speed.toFixed(1)+' ';
   usageText.nodeValue=Math.round(128640+t*48).toLocaleString('en-US');
   costText.nodeValue=(.86+t*.00003).toFixed(2);
   const occupancy=32+Math.sin(t*.18)*1.4;
   context.textContent=Math.round(occupancy)+'%';bar.style.width=occupancy+'%';
   const points=Array.from({length:23},(_,i)=>{
     const x=i*640/22;
     const y=88-i*2.2+Math.sin(i*1.3-t*.38)*13+Math.sin(i*2.5-t*.24)*8;
     return [x,Math.max(12,Math.min(110,y))];
   });
   const path=points.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
   chartLine.setAttribute('d',path);chartFill.setAttribute('d',path+' V130 H0Z');
   tip.setAttribute('cx','640');tip.setAttribute('cy',points[22][1].toFixed(1));
   spark.setAttribute('d',Array.from({length:16},(_,i)=>{const y=25+Math.sin(i*1.5-t*.7)*6+Math.sin(i*.7-t*.4)*4;return (i?'L':'M')+(i*200/15).toFixed(1)+' '+y.toFixed(1);}).join(' '));
 }
 function running(){return visible&&!paused&&!document.hidden&&!reduce.matches;}
 function frame(now){if(!running()){raf=0;last=0;return;}if(last)elapsed+=Math.min(now-last,100);last=now;if(now-lastPaint>80){draw(elapsed/1000);lastPaint=now;}raf=requestAnimationFrame(frame);}
 function sync(){const active=running();scene.classList.toggle('motion-paused',!active);scene.dataset.running=String(active);toggle.setAttribute('aria-pressed',String(paused));toggle.textContent=paused?'播放演示 ▷':'暂停演示 Ⅱ';toggle.disabled=reduce.matches;if(reduce.matches){toggle.textContent='已减少动态效果';}if(active&&!raf){last=0;raf=requestAnimationFrame(frame);}else if(!active&&raf){cancelAnimationFrame(raf);raf=0;last=0;}}
 scene.classList.add('scene-live');draw(0);
 toggle.addEventListener('click',()=>{paused=!paused;sync();});
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.1}).observe(scene);
 document.addEventListener('visibilitychange',sync);
 reduce.addEventListener('change',()=>{paused=reduce.matches;sync();});
 sync();
})();

// Appearance-only preview of the planned desktop floating window.
document.querySelectorAll('[data-float-mode]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-float-mode]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 const compact=button.dataset.floatMode==='compact';document.querySelector('#floatingConcept').classList.toggle('compact',compact);document.querySelector('.concept-extra').setAttribute('aria-hidden',String(compact));
}));
document.querySelector('#floatOpacity').addEventListener('input',event=>{
 const value=event.target.value;document.querySelector('#floatingConcept').style.opacity=String(Number(value)/100);document.querySelector('#floatOpacityValue').value=value+'%';
});

// Navigation, focused use-case storytelling, and light/dark appearance preview.
const menuToggle=document.querySelector('#menuToggle'),mainNav=document.querySelector('#mainNav');
function closeMenu(){mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','打开导航');}
menuToggle.addEventListener('click',()=>{const open=!mainNav.classList.contains('open');mainNav.classList.toggle('open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'关闭导航':'打开导航');});
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mainNav.classList.contains('open')){closeMenu();menuToggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu();});
let scrollPending=false;
function updatePageProgress(){const total=document.documentElement.scrollHeight-innerHeight;document.querySelector('#pageProgress').style.transform='scaleX('+Math.min(1,Math.max(0,total?scrollY/total:0))+')';document.querySelector('header').classList.toggle('scrolled',scrollY>10);scrollPending=false;}
addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updatePageProgress);}},{passive:true});addEventListener('resize',updatePageProgress);updatePageProgress();
const sectionNav=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){mainNav.querySelectorAll('a').forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}),{rootMargin:'-15% 0px -65% 0px'});
mainNav.querySelectorAll('a').forEach(a=>{const s=document.querySelector(a.hash);if(s)sectionNav.observe(s);});
document.querySelector('#previewTheme').addEventListener('click',e=>{const light=document.querySelector('#floatingConcept').classList.toggle('light-preview');e.currentTarget.setAttribute('aria-pressed',String(light));e.currentTarget.textContent=light?'切换深色外观 ◐':'切换浅色外观 ◐';});
const workflowData={
 develop:{n:'01 / BUILD WITH INSIGHT',title:'调试模型，<br>也看清每一次等待。',copy:'在生成速度、首 Token 延迟与上下文状态之间找到线索。让你为下一次优化，保留清晰的参考。',tags:['生成速度','首 Token 延迟','上下文占用'],metrics:[['生成速度','48.2','t/s'],['首 Token 延迟','420','ms'],['上下文占用','32','%'],['请求耗时','3.8','s']]},
 create:{n:'02 / CREATE WITH FOCUS',title:'让灵感向前。<br>让数据退后一步。',copy:'只留少量必要信息，安静地伴随写作与创作。用一套紧凑组合，观察会话消耗与费用估算。',tags:['紧凑布局','会话用量','费用估算'],metrics:[['会话 Token','12,840',''],['今日费用 · 估算','0.86','USD'],['输入 Token','8,120',''],['输出 Token','4,720','']]},
 compare:{n:'03 / EXPLORE SIDE BY SIDE',title:'不同的模型，<br>放在同一视野里。',copy:'计划让同类组件分别绑定不同数据源，查看各模型的表现。对比前，先了解每个指标的来源和可用性。',tags:['重复组件','独立数据源','透明来源'],metrics:[['模型 A · 速度','48.2','t/s'],['模型 B · 速度','36.7','t/s'],['模型 A · TTFT','420','ms'],['模型 B · 推理用量','不可用','']]}}
function renderWorkflow(key){const data=workflowData[key],content=document.querySelector('#workflowContent');content.innerHTML='<div class="workflow-copy"><span class="workflow-number">'+data.n+'</span><h3>'+data.title+'</h3><p>'+data.copy+'</p><div class="workflow-tags">'+data.tags.map(t=>'<span>'+t+'</span>').join('')+'</div></div><div class="workflow-display"><div class="workflow-display-top"><span>ϟ &nbsp; ModelPulse / '+(key==='develop'?'开发者':key==='create'?'创作':'多模型')+'</span><span>● 示例数据</span></div><div class="workflow-metrics">'+data.metrics.map(m=>'<div><small>'+m[0]+'</small><strong>'+m[1]+' <em>'+m[2]+'</em></strong></div>').join('')+'</div><div class="workflow-graphic" aria-hidden="true">'+[38,65,49,78,57,88,67,90,76,58,85,72,95,63,80,92].map(h=>'<i style="--bar:'+h+'%"></i>').join('')+'</div></div>';content.classList.remove('changing');void content.offsetWidth;content.classList.add('changing');}
document.querySelectorAll('[data-workflow]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-workflow]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderWorkflow(button.dataset.workflow);}));renderWorkflow('develop');
document.querySelectorAll('.faq-list details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==item)other.open=false;});}));
