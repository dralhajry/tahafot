"""يجلب أحدث فيديوهات قناة يوتيوب من خلاصة RSS العامة (بلا مفتاح API) ويكتبها في videos.json."""
import json, os, re, sys, urllib.request
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cid = os.environ.get('YT_CHANNEL_ID', '').strip()
if not cid:
    m = re.search(r'youtubeChannelId:\s*"([^"]*)"', open(os.path.join(ROOT, 'config.js'), encoding='utf-8').read())
    cid = m.group(1) if m else ''
if not re.fullmatch(r'UC[\w-]{22}', cid):
    print('No valid channel id in config.js'); sys.exit(0)

src = sys.argv[1] if len(sys.argv) > 1 else f'https://www.youtube.com/feeds/videos.xml?channel_id={cid}'
data = open(src, 'rb').read() if os.path.exists(src) else urllib.request.urlopen(
    urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'}), timeout=30).read()

ns = {'a': 'http://www.w3.org/2005/Atom', 'yt': 'http://www.youtube.com/xml/schemas/2015'}
videos = []
for e in ET.fromstring(data).findall('a:entry', ns):
    vid = e.findtext('yt:videoId', namespaces=ns)
    link = (e.find('a:link', ns).get('href') if e.find('a:link', ns) is not None else '') or ''
    if not vid or '/shorts/' in link:
        continue
    videos.append({'id': vid, 'title': e.findtext('a:title', namespaces=ns), 'published': e.findtext('a:published', namespaces=ns)})
videos.sort(key=lambda v: v['published'], reverse=True)

out = os.path.join(ROOT, 'videos.json')
old = open(out, encoding='utf-8').read() if os.path.exists(out) else ''
new = json.dumps(videos, ensure_ascii=False, indent=1)
if new != old:
    open(out, 'w', encoding='utf-8').write(new); print(f'updated: {len(videos)} videos')
else:
    print('no change')
