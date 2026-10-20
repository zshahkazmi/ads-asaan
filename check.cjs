const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const elements=new Map(),inputs=[];
function el(s){if(!elements.has(s))elements.set(s,{innerHTML:'',textContent:'',value:'',style:{},classList:{add(){},remove(){},toggle(){}}});return elements.get(s);}
const context=vm.createContext({console,structuredClone,setTimeout,clearTimeout,URL,Blob,localStorage:{getItem:()=>null,setItem(){}},document:{documentElement:{},querySelector:el,querySelectorAll:s=>s==='#calc-form input'?inputs:[]},window:{addEventListener(){},scrollTo(){}},location:{hash:'#home'}});
for(const f of ['content.js','app.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),context,{filename:f});
const run=s=>vm.runInContext(s,context);assert.equal(run('LESSONS.length'),42);assert.equal(run('CHAPTERS.length'),14);
for(let lang=0;lang<2;lang++){run('state.lang='+lang);for(const page of ['home','learn','lab','calculators','media','reference','progress',...Array.from({length:42},(_,i)=>'lesson/'+i)]){run('location.hash='+JSON.stringify('#'+page)+';render()');assert.ok(el('#app').innerHTML.length>500,page);assert.ok(!el('#app').innerHTML.includes('>undefined<'),page);}}
for(const l of run('LESSONS')){assert.ok(l.answer>=0&&l.answer<l.options.length);assert.ok(l.why[0]&&l.why[1]);for(const k of l.sources)assert.ok(run('SOURCES')[k]);}
function fields(values){inputs.length=0;for(const [key,value]of Object.entries(values))inputs.push({id:'calc-'+key,value:String(value),checkValidity:()=>true});}
run("state.lang=1;calcTab='metrics'");fields({impressions:2000,clicks:100,spend:5000,conversions:5,revenue:16000,margin:40});run('calcResults()');assert.match(el('#calc-results').innerHTML,/Rs 1,000/);assert.match(el('#calc-results').innerHTML,/3.2×/);assert.match(el('#calc-results').innerHTML,/Rs 1,400/);
fields({impressions:0,clicks:0,spend:0,conversions:0,revenue:0,margin:0});run('calcResults()');assert.ok(!/Infinity|NaN/.test(el('#calc-results').innerHTML));
fields({impressions:10,clicks:20,spend:5,conversions:1,revenue:10,margin:40});run('calcResults()');assert.match(el('#calc-results').innerHTML,/cannot exceed/);
run("calcTab='forecast'");fields({spend:10000,cpc:100,cvr:10,close:20,aov:8000,margin:40});run('calcResults()');assert.match(el('#calc-results').innerHTML,/Rs 640/);assert.match(el('#calc-results').innerHTML,/Rs -3,600/);
fields({spend:10000,cpc:0,cvr:10,close:20,aov:8000,margin:40});inputs[1].checkValidity=()=>false;run('calcResults()');assert.match(el('#calc-results').innerHTML,/valid numbers/);
assert.equal(run("esc('<script>')"),'&lt;script&gt;');run('state.done.push(0)');assert.equal(run('initial.done.length'),0);
console.log('PASS: 98 bilingual route renders, 42 lesson integrity checks, calculator examples/zero/invalid input, HTML escaping and reset isolation.');
