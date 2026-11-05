from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
import json,hashlib,re
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.tags=[]
 def handle_starttag(self,t,a):self.tags.append((t,dict(a)))
root=Path('dist');errors=[];titles=[];count=0
for f in root.rglob('*.html'):
 if f.name=='404.html':continue
 count+=1;s=f.read_text();p=Parser();p.feed(s);titles.append(re.search('<title>(.*?)</title>',s).group(1))
 if sum(t=='h1' for t,a in p.tags)!=1:errors.append(str(f)+' heading')
 for t,a in p.tags:
  v=a.get('href',a.get('src',''));u=urlparse(v)
  if v.startswith('/'):
   target=root/u.path.lstrip('/');target=target/'index.html' if u.path.endswith('/') else target
   if not target.exists():errors.append(str(f)+' missing '+v)
  if t=='img' and not a.get('alt'):errors.append(str(f)+' missing alt')
 for x in re.findall('<script type="application/ld\\+json">(.*?)</script>',s):json.loads(x)
 if 'rel="canonical"' not in s:errors.append(str(f)+' canonical')
a=json.loads(Path('articles.json').read_text());assert len(a)==50,len(a);assert len(set(x['slug'] for x in a))==50
assert len(titles)==len(set(titles))
a1=hashlib.sha256((root/'assets/gravita-company-profile.pdf').read_bytes()).hexdigest();a2='f77d3b602823b20c3997563572941faeffcb3697f19d9b49a6ba110d0cd1c16a';assert a1==a2
assert not errors,errors
print(json.dumps({'pages':count,'articles':len(a),'links_assets_schema_alt_h1_canonical':'passed','original_pdf_byte_identical':True},indent=2))
