import fs from 'node:fs';import path from 'node:path';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
for(const f of walk('dist').filter(f=>f.endsWith('.html')&&!f.endsWith('404.html'))){let s=fs.readFileSync(f,'utf8');s=s.replace('</head>','<script type="module" src="/interactive/gravita.js"></script></head>');fs.writeFileSync(f,s)}
fs.copyFileSync('page-inventory.json','dist/search-index.json');fs.copyFileSync('src/styles/tokens.css','dist/tokens.css');
console.log('React interaction layer integrated; prerendered content retained.');
