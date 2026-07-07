// Faithful markup of the Saudi PMO Community site (ported from the static index.html).
export const MARKUP = `<!-- ============ NAV ============ -->
<nav class="nav" id="nav">
  <div class="brand" onclick="scrollTo({top:0,behavior:'smooth'})">
    <img id="brandLogo" src="/assets/nav-en-offwhite.png" alt="Saudi PMO Community">
  </div>
  <div class="nav-links" id="navlinks">
    <a class="lnk" href="#about" data-en="About" data-ar="من نحن">About</a>
    <a class="lnk" href="#pillars" data-en="What we do" data-ar="ما نقدّمه">What we do</a>
    <a class="lnk" href="#network" data-en="The network" data-ar="الشبكة">The network</a>
    <a class="lnk" href="#programs" data-en="Programs" data-ar="البرامج">Programs</a>
    <a class="lnk" href="#founders" data-en="Founders" data-ar="المؤسّسون">Founders</a>
  </div>
  <div class="nav-right">
    <button class="theme-toggle" id="themeBtn" onclick="toggleTheme()" aria-label="Toggle day / night mode" title="Day / Night">
      <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
    </button>
    <button class="lang-toggle" id="lang" onclick="toggleLang()">العربية</button>
    <a href="#join" class="btn btn-gold desk" data-en="Join us" data-ar="انضم إلينا">Join us</a>
    <button class="burger" id="burger" onclick="toggleMenu()"><span></span><span></span><span></span></button>
  </div>
</nav>

<!-- ============ HERO ============ -->
<header class="hero" id="top">
  <canvas id="net"></canvas>
  <div class="hero-glow g1"></div>
  <div class="hero-glow g2"></div>
  <div class="wrap">
    <div class="hero-copy">
      <span class="eyebrow hero-eyebrow" data-en="Saudi PMO Community · Est. 2025" data-ar="مجتمع مكاتب إدارة المشاريع السعودي · تأسّس 2025">Saudi PMO Community · Est. 2025</span>
      <h1 data-en="Where Saudi Arabia's project leaders <em>build together.</em>" data-ar="حيث يجتمع قادة المشاريع في السعودية <em>ليبنوا معًا.</em>">Where Saudi Arabia's project leaders <em>build together.</em></h1>
      <p class="lead" data-en="An independent home for PMO and project-delivery professionals — rooted in Najdi heritage, built for the ambition of Vision 2030." data-ar="بيتٌ مستقل لمحترفي مكاتب إدارة المشاريع وتسليم المشاريع — متجذّر في تراث نجد، ومبنيّ على طموح رؤية 2030.">An independent home for PMO and project-delivery professionals — rooted in Najdi heritage, built for the ambition of Vision 2030.</p>
      <div class="hero-cta">
        <a href="#join" class="btn btn-gold" data-en="Join the community" data-ar="انضم إلى المجتمع">Join the community <svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <a href="#about" class="btn btn-ghost" data-en="Discover the story" data-ar="اكتشف القصة">Discover the story</a>
      </div>
      <div class="hero-badges">
        <div class="hero-badge"><b class="count" data-target="1200" data-suffix="+">0</b><span data-en="Members" data-ar="عضو">Members</span></div>
        <div class="hero-badge"><b class="count" data-target="8" data-suffix="">0</b><span data-en="Sectors" data-ar="قطاعات">Sectors</span></div>
        <div class="hero-badge"><b class="count" data-target="40" data-suffix="+">0</b><span data-en="Events hosted" data-ar="فعالية">Events hosted</span></div>
        <div class="hero-badge"><b class="count" data-target="2" data-suffix="">0</b><span data-en="Founders" data-ar="مؤسّسان">Founders</span></div>
      </div>
    </div>
    <div class="hero-logo"><div class="lock"></div></div>
  </div>
  <div class="scroll-cue"><div class="mouse"></div><span data-en="Scroll" data-ar="اسحب">Scroll</span></div>
</header>

<!-- ============ MARQUEE ============ -->
<div class="strip">
  <div class="marquee" id="marq">
    <span data-en="Giga-Projects" data-ar="المشاريع العملاقة">Giga-Projects</span>
    <span data-en="Government PMOs" data-ar="مكاتب المشاريع الحكومية">Government PMOs</span>
    <span data-en="Infrastructure" data-ar="البنية التحتية">Infrastructure</span>
    <span data-en="Real Estate" data-ar="التطوير العقاري">Real Estate</span>
    <span data-en="Energy" data-ar="الطاقة">Energy</span>
    <span data-en="Portfolio Governance" data-ar="حوكمة المحافظ">Portfolio Governance</span>
  </div>
</div>

<!-- ============ ABOUT ============ -->
<section class="sec about" id="about">
  <div class="wrap about-grid">
    <div class="about-txt">
      <span class="eyebrow rv" data-en="Who we are" data-ar="من نحن">Who we are</span>
      <h2 class="rv d1" style="font-size:clamp(2rem,3.6vw,3.1rem);color:var(--green-deep);margin-bottom:22px" data-en="Rooted in Najd. Built for delivery." data-ar="متجذّرون في نجد. مبنيّون للتسليم.">Rooted in Najd. Built for delivery.</h2>
      <p class="lead-line rv d1" data-en="We bring together the people who plan, govern, and deliver the Kingdom's most ambitious projects." data-ar="نجمع الأشخاص الذين يخطّطون ويحوكمون ويسلّمون أكثر مشاريع المملكة طموحًا.">We bring together the people who plan, govern, and deliver the Kingdom's most ambitious projects.</p>
      <p class="rv d2" data-en="The Saudi PMO Community is an independent, practitioner-led network for project, program, and portfolio management professionals. We exist to raise the standard of delivery — sharing knowledge, opening doors, and building the relationships that get hard projects done." data-ar="مجتمع مكاتب إدارة المشاريع السعودي شبكة مستقلة يقودها الممارسون لمحترفي إدارة المشاريع والبرامج والمحافظ. نوجد لرفع مستوى التسليم — بمشاركة المعرفة، وفتح الأبواب، وبناء العلاقات التي تُنجز المشاريع الصعبة.">The Saudi PMO Community is an independent, practitioner-led network for project, program, and portfolio management professionals. We exist to raise the standard of delivery — sharing knowledge, opening doors, and building the relationships that get hard projects done.</p>
      <p class="rv d3" data-en="Our seal is drawn like the carved motifs of Najdi mud-brick homes — a mark of craft, order, and belonging. It reminds us that the future is always built on foundations." data-ar="خاتَمنا مرسومٌ على هيئة النقوش المحفورة في بيوت الطين النجدية — علامة الإتقان والنظام والانتماء. يذكّرنا بأن المستقبل يُبنى دائمًا على أساس.">Our seal is drawn like the carved motifs of Najdi mud-brick homes — a mark of craft, order, and belonging. It reminds us that the future is always built on foundations.</p>
      <div class="chips rv d3">
        <span class="chip" data-en="Independent" data-ar="مستقل">Independent</span>
        <span class="chip" data-en="Practitioner-led" data-ar="يقوده الممارسون">Practitioner-led</span>
        <span class="chip" data-en="Non-profit" data-ar="غير ربحي">Non-profit</span>
        <span class="chip" data-en="Kingdom-wide" data-ar="على مستوى المملكة">Kingdom-wide</span>
      </div>
    </div>
    <div class="about-media rv d2">
      <img loading="lazy" src="/assets/hero-heritage.png" alt="Najdi heritage architecture with the PMOS seal">
      <div class="cap"><b data-en="At-Turaif, Diriyah" data-ar="الطريف، الدرعية">At-Turaif, Diriyah</b><span data-en="Our visual language borrows from Najdi mud-brick craft." data-ar="لغتنا البصرية مستلهمة من حرفة الطين النجدية.">Our visual language borrows from Najdi mud-brick craft.</span></div>
    </div>
  </div>
</section>

<!-- ============ PILLARS ============ -->
<section class="sec pillars" id="pillars">
  <div class="wrap">
    <div class="sec-head center rv">
      <span class="eyebrow" style="justify-content:center" data-en="What we do" data-ar="ما نقدّمه">What we do</span>
      <h2 data-en="Four ways we build the community." data-ar="أربع طرقٍ نبني بها المجتمع.">Four ways we build the community.</h2>
      <p data-en="Like a Najdi wall, the community rises brick by brick — each layer supporting the next." data-ar="كالجدار النجدي، يرتفع المجتمع لبنةً لبنة — كل طبقةٍ تسند التي تليها.">Like a Najdi wall, the community rises brick by brick — each layer supporting the next.</p>
    </div>
    <div class="pillar-grid">
      <div class="pillar rv d1">
        <span class="num">01</span>
        <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7.5 7.8 11 15M16.5 7.8 13 15M8 6h8"/></svg></div>
        <h3 data-en="Connect" data-ar="نتواصل">Connect</h3>
        <p data-en="Meet peers across giga-projects, government, and the private sector — the people behind the Kingdom's delivery." data-ar="التقِ بالأقران عبر المشاريع العملاقة والجهات الحكومية والقطاع الخاص — صنّاع التسليم في المملكة.">Meet peers across giga-projects, government, and the private sector — the people behind the Kingdom's delivery.</p>
      </div>
      <div class="pillar rv d2">
        <span class="num">02</span>
        <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v16H5.5A2.5 2.5 0 0 0 3 21.5zM21 5.5A2.5 2.5 0 0 0 18.5 3H12v16h6.5A2.5 2.5 0 0 1 21 21.5z"/></svg></div>
        <h3 data-en="Learn" data-ar="نتعلّم">Learn</h3>
        <p data-en="Masterclasses, playbooks, and honest case studies from live PMOs — practical knowledge you can use on Monday." data-ar="ورش الخبراء، والأدلة العملية، ودراسات حالة صادقة من مكاتب مشاريع فعلية — معرفة تطبّقها فورًا.">Masterclasses, playbooks, and honest case studies from live PMOs — practical knowledge you can use on Monday.</p>
      </div>
      <div class="pillar rv d3">
        <span class="num">03</span>
        <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></div>
        <h3 data-en="Grow" data-ar="ننمو">Grow</h3>
        <p data-en="Mentorship circles and certification pathways that move careers — and the profession — forward." data-ar="حلقات إرشاد ومسارات احترافية تدفع بالمسيرة المهنية — والمهنة نفسها — إلى الأمام.">Mentorship circles and certification pathways that move careers — and the profession — forward.</p>
      </div>
      <div class="pillar rv d4">
        <span class="num">04</span>
        <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2 3 7l9 5 9-5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5"/></svg></div>
        <h3 data-en="Deliver" data-ar="ننجز">Deliver</h3>
        <p data-en="Shared standards, tools, and language that raise the bar for delivery across the whole Kingdom." data-ar="معايير وأدوات ولغة مشتركة ترفع سقف التسليم في عموم المملكة.">Shared standards, tools, and language that raise the bar for delivery across the whole Kingdom.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ NETWORK ============ -->
<section class="sec network" id="network">
  <div class="bg"><img loading="lazy" src="/assets/scene-network.png" alt="Community network"></div>
  <div class="wrap">
    <div class="inner">
      <span class="eyebrow rv" style="color:var(--sand)" data-en="The fabric" data-ar="النسيج">The fabric</span>
      <h2 class="rv d1" data-en="A network, <em>not a directory.</em>" data-ar="شبكةٌ، <em>لا مجرّد دليل.</em>">A network, <em>not a directory.</em></h2>
      <p class="rv d2" data-en="Every member is a thread. On their own, a name and a number. Together, we weave the fabric that carries knowledge, trust, and opportunity across the Kingdom." data-ar="كل عضوٍ خيط. وحده مجرّد اسمٍ ورقم. ومعًا ننسج النسيج الذي يحمل المعرفة والثقة والفرص عبر المملكة.">Every member is a thread. On their own, a name and a number. Together, we weave the fabric that carries knowledge, trust, and opportunity across the Kingdom.</p>
      <div class="thread-stats rv d3">
        <div><b>1 <span style="font-size:1.1rem">+</span></b><span data-en="group chat that started it all" data-ar="محادثة واحدة بدأت كل شيء">group chat that started it all</span></div>
        <div><b>13</b><span data-en="cities represented" data-ar="مدينة ممثّلة">cities represented</span></div>
        <div><b>∞</b><span data-en="connections still forming" data-ar="روابط لا تتوقف">connections still forming</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ PROGRAMS ============ -->
<section class="sec programs" id="programs">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow" data-en="Programs & rhythm" data-ar="البرامج والإيقاع">Programs &amp; rhythm</span>
      <h2 data-en="What being a member feels like." data-ar="كيف تبدو العضوية.">What being a member feels like.</h2>
      <p data-en="A steady rhythm of gatherings, learning, and mentorship — in person and online, in Arabic and English." data-ar="إيقاعٌ منتظم من اللقاءات والتعلّم والإرشاد — حضوريًا وعن بُعد، بالعربية والإنجليزية.">A steady rhythm of gatherings, learning, and mentorship — in person and online, in Arabic and English.</p>
    </div>
    <div class="prog-grid">
      <div class="prog rv d1">
        <div class="pic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/></svg></div>
        <div><span class="tag" data-en="Monthly" data-ar="شهريًا">Monthly</span><h3 data-en="Majlis Meetups" data-ar="لقاءات المجلس">Majlis Meetups</h3><p data-en="Informal evenings where members swap war stories over qahwa and dates." data-ar="أمسياتٌ ودّية يتبادل فيها الأعضاء تجاربهم على القهوة والتمر.">Informal evenings where members swap war stories over qahwa and dates.</p></div>
      </div>
      <div class="prog rv d2">
        <div class="pic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/></svg></div>
        <div><span class="tag" data-en="Bi-weekly" data-ar="كل أسبوعين">Bi-weekly</span><h3 data-en="Masterclasses" data-ar="ورش الخبراء">Masterclasses</h3><p data-en="Deep-dive sessions led by practitioners running the Kingdom's biggest PMOs." data-ar="جلسات معمّقة يقودها ممارسون يديرون أكبر مكاتب المشاريع في المملكة.">Deep-dive sessions led by practitioners running the Kingdom's biggest PMOs.</p></div>
      </div>
      <div class="prog rv d3">
        <div class="pic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <div><span class="tag" data-en="Ongoing" data-ar="مستمر">Ongoing</span><h3 data-en="Mentorship Circles" data-ar="حلقات الإرشاد">Mentorship Circles</h3><p data-en="Senior leaders paired with rising talent — small groups, real accountability." data-ar="قادة كبار مع مواهب صاعدة — مجموعات صغيرة ومسؤولية حقيقية.">Senior leaders paired with rising talent — small groups, real accountability.</p></div>
      </div>
      <div class="prog rv d4">
        <div class="pic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg></div>
        <div><span class="tag" data-en="Annual" data-ar="سنويًا">Annual</span><h3 data-en="The Annual Forum" data-ar="الملتقى السنوي">The Annual Forum</h3><p data-en="The whole community in one room — keynotes, awards, and the year's best thinking." data-ar="المجتمع كله في قاعة واحدة — كلمات رئيسية وجوائز وأفضل أفكار العام.">The whole community in one room — keynotes, awards, and the year's best thinking.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ VALUES ============ -->
<section class="values">
  <div class="wrap">
    <div class="val-row">
      <div class="val-item rv d1"><b data-en="Grounded" data-ar="راسخون">Grounded</b><span data-en="Rooted in heritage & craft" data-ar="متجذّرون في التراث والإتقان">Rooted in heritage &amp; craft</span></div>
      <div class="val-item rv d2"><b data-en="Generous" data-ar="كرماء">Generous</b><span data-en="We share, we open doors" data-ar="نشارك ونفتح الأبواب">We share, we open doors</span></div>
      <div class="val-item rv d3"><b data-en="Ambitious" data-ar="طموحون">Ambitious</b><span data-en="Built for Vision 2030" data-ar="مبنيّون لرؤية 2030">Built for Vision 2030</span></div>
      <div class="val-item rv d4"><b data-en="Precise" data-ar="دقيقون">Precise</b><span data-en="Delivery is our discipline" data-ar="التسليم هو انضباطنا">Delivery is our discipline</span></div>
    </div>
  </div>
</section>

<!-- ============ FOUNDERS ============ -->
<section class="sec founders" id="founders">
  <div class="wrap">
    <div class="sec-head center rv">
      <span class="eyebrow" style="justify-content:center" data-en="Founders &amp; members" data-ar="المؤسّسون والأعضاء">Founders &amp; members</span>
      <h2 data-en="Two founders. One growing circle." data-ar="مؤسّسان. ودائرة تتّسع.">Two founders. One growing circle.</h2>
      <p data-en="It started with a simple group chat. Meet the founders — and the members building the movement with them." data-ar="بدأت بمحادثةٍ بسيطة. تعرّف على المؤسّسَين — والأعضاء الذين يبنون الحركة معهم.">It started with a simple group chat. Meet the founders — and the members building the movement with them.</p>
    </div>
    <div class="f-grid">
      <div class="founder lead rv d1"><div class="ph"><img loading="lazy" src="/assets/founder-yanbawi.jpeg" alt="Eng. Tariq Fouad Yanbawi"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Tariq F. Yanbawi<small>م. طارق فؤاد ينبعاوي</small><div class="ltitle" data-en="Community President" data-ar="رئيس المجتمع">Community President</div></div><div class="role" data-en="Founding<br>Member" data-ar="عضو<br>مؤسّس">Founding<br>Member</div></div></div>
      <div class="founder rv d2"><div class="ph"><img loading="lazy" src="/assets/founder-ghaith.jpeg" alt="Eng. Majed Ghaith"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Majed Ghaith<small>م. ماجد غيث</small></div><div class="role" data-en="Founding<br>Member" data-ar="عضو<br>مؤسّس">Founding<br>Member</div></div></div>
      <div class="founder lead rv d3"><div class="ph"><img loading="lazy" src="/assets/founder-maha.jpeg" alt="Eng. Maha Abdulmajeed"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Maha Abdulmajeed<small>م. مها عبدالمجيد</small><div class="ltitle" data-en="Social Communication Team Lead" data-ar="قائد فريق التواصل الاجتماعي">Social Communication Team Lead</div></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
      <div class="founder lead rv d1"><div class="ph"><img loading="lazy" src="/assets/founder-marabi.jpeg" alt="Eng. Ahmed Al-Marabi"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Ahmed Al-Marabi<small>م. أحمد المرعبي</small><div class="ltitle" data-en="Meetups Team Lead" data-ar="قائد فريق اللقاءات">Meetups Team Lead</div></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
      <div class="founder rv d2"><div class="ph"><img loading="lazy" src="/assets/founder-milibari.jpeg" alt="Dr. Ali Milibari"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Dr. Ali Milibari<small>د. علي ميليباري</small></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
      <div class="founder rv d3"><div class="ph"><img loading="lazy" src="/assets/founder-aqqab.jpeg" alt="Eng. Hosam Oqab"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Hosam Oqab<small>م. حسام عقاب</small></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
      <div class="founder rv d1"><div class="ph"><img loading="lazy" src="/assets/founder-ghamdi.jpeg" alt="Eng. Emad Al-Ghamdi"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Emad Al-Ghamdi<small>م. عماد الغامدي</small></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
      <div class="founder rv d2"><div class="ph"><img loading="lazy" src="/assets/founder-qazzaz.jpeg" alt="Eng. Amr Qazzaz"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Amr Qazzaz<small>م. عمرو قزاز</small></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
      <div class="founder rv d3"><div class="ph"><img loading="lazy" src="/assets/founder-zidan.jpeg" alt="Eng. Mahmoud Zidan"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Mahmoud Zidan<small>م. محمود زيدان</small></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
      <div class="founder rv d1"><div class="ph"><img loading="lazy" src="/assets/founder-mudather.jpeg" alt="Eng. Faris Mudather"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Faris Mudather<small>م. فارس مدثر</small></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
      <div class="founder rv d2"><div class="ph"><img loading="lazy" src="/assets/founder-afandi.jpeg" alt="Eng. Mohammed Afandi"><div class="seal-badge"></div></div><div class="meta"><div class="nm">Mohammed Afandi<small>م. محمد أفندي</small></div><div class="role" data-en="Member" data-ar="عضو">Member</div></div></div>
    </div>
  </div>
</section>

<!-- ============ JOIN ============ -->
<section class="join" id="join">
  <div class="wrap">
    <div class="join-card rv">
      <div class="join-txt">
        <span class="eyebrow" style="color:var(--sand)" data-en="Become a member" data-ar="كن عضوًا">Become a member</span>
        <h2 data-en="Build the future of <em>delivery</em> with us." data-ar="لنبنِ مستقبل <em>التسليم</em> معًا.">Build the future of <em>delivery</em> with us.</h2>
        <p data-en="Membership is free while we grow. Tell us a little about you and we'll welcome you into the circle." data-ar="العضوية مجانية في مرحلة النمو. أخبرنا القليل عنك وسنرحّب بك في الدائرة.">Membership is free while we grow. Tell us a little about you and we'll welcome you into the circle.</p>
      </div>
      <form class="form" id="joinForm" onsubmit="return submitJoin(event)">
        <div class="row">
          <input type="text" required data-ph-en="Full name" data-ph-ar="الاسم الكامل" placeholder="Full name">
          <input type="email" required data-ph-en="Email address" data-ph-ar="البريد الإلكتروني" placeholder="Email address">
        </div>
        <input type="text" data-ph-en="Organization" data-ph-ar="جهة العمل" placeholder="Organization">
        <select required>
          <option value="" disabled selected data-en="Your role" data-ar="دورك المهني">Your role</option>
          <option data-en="PMO Lead / Director" data-ar="قائد / مدير مكتب مشاريع">PMO Lead / Director</option>
          <option data-en="Project / Program Manager" data-ar="مدير مشروع / برنامج">Project / Program Manager</option>
          <option data-en="Portfolio / Governance" data-ar="محافظ / حوكمة">Portfolio / Governance</option>
          <option data-en="Consultant" data-ar="استشاري">Consultant</option>
          <option data-en="Student / Early career" data-ar="طالب / بداية مسيرة">Student / Early career</option>
        </select>
        <button type="submit" class="btn btn-gold" data-en="Request to join" data-ar="اطلب الانضمام">Request to join</button>
        <p class="note" data-en="We'll never share your details. One welcome email, that's it." data-ar="لن نشارك بياناتك أبدًا. رسالة ترحيب واحدة، لا أكثر.">We'll never share your details. One welcome email, that's it.</p>
      </form>
      <div class="form-ok" id="formOk"><b data-en="Ahlan wa sahlan! 🌿" data-ar="أهلاً وسهلاً! 🌿">Ahlan wa sahlan! 🌿</b><span data-en="Your request is in. Watch your inbox for a welcome from the community." data-ar="وصل طلبك. ترقّب رسالة ترحيب من المجتمع في بريدك.">Your request is in. Watch your inbox for a welcome from the community.</span></div>
      <div class="tri"></div>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer class="footer">
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="seal"></div>
        <div class="brand-word" style="color:var(--cream);margin-bottom:14px">Saudi <b>PMO</b> Community</div>
        <p data-en="An independent community for project delivery professionals in the Kingdom of Saudi Arabia." data-ar="مجتمع مستقل لمحترفي تسليم المشاريع في المملكة العربية السعودية.">An independent community for project delivery professionals in the Kingdom of Saudi Arabia.</p>
      </div>
      <div class="foot-col">
        <h4 data-en="Explore" data-ar="استكشف">Explore</h4>
        <a href="#about" data-en="About us" data-ar="من نحن">About us</a>
        <a href="#pillars" data-en="What we do" data-ar="ما نقدّمه">What we do</a>
        <a href="#programs" data-en="Programs" data-ar="البرامج">Programs</a>
        <a href="#founders" data-en="Founders" data-ar="المؤسّسون">Founders</a>
      </div>
      <div class="foot-col">
        <h4 data-en="Community" data-ar="المجتمع">Community</h4>
        <a href="#join" data-en="Become a member" data-ar="كن عضوًا">Become a member</a>
        <a href="#" data-en="Code of conduct" data-ar="ميثاق السلوك">Code of conduct</a>
        <a href="#" data-en="Events calendar" data-ar="أجندة الفعاليات">Events calendar</a>
        <a href="#" data-en="Brand guidelines" data-ar="الهوية البصرية">Brand guidelines</a>
      </div>
      <div class="foot-col">
        <h4 data-en="Get in touch" data-ar="تواصل معنا">Get in touch</h4>
        <a href="mailto:hello@saudipmo.community">hello@saudipmo.community</a>
        <a href="#" data-en="Riyadh, Saudi Arabia" data-ar="الرياض، السعودية">Riyadh, Saudi Arabia</a>
        <div class="socials" style="margin-top:16px">
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.25 8.25h4.5V24h-4.5zM8.25 8.25h4.31v2.15h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V24h-4.5v-6.16c0-1.47-.03-3.36-2.05-3.36s-2.36 1.6-2.36 3.25V24h-4.5z"/></svg></a>
          <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5-6.6L5.3 22H2.2l8-9.2L1.5 2h6.9l4.6 6.1zM17.7 20h1.7L7.2 3.8H5.4z"/></svg></a>
          <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.13.2-3.8-.8-3.2-1.26-5.2-4.5-5.36-4.7-.15-.2-1.26-1.68-1.26-3.2s.8-2.27 1.08-2.58c.28-.3.6-.38.8-.38l.58.01c.18 0 .44-.07.68.52.24.6.83 2.06.9 2.2.08.16.13.34.02.54-.1.2-.16.34-.32.52l-.48.56c-.16.16-.32.34-.14.66.18.32.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.5 1.54.32.16.5.13.68-.08.18-.2.78-.9.99-1.22.2-.32.4-.26.68-.16.28.1 1.76.84 2.06.99.3.15.5.22.58.34.07.12.07.72-.17 1.4z"/></svg></a>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <p data-en="© 2026 Saudi PMO Community. Built in Riyadh. Brand Guidelines V1.1." data-ar="© 2026 مجتمع مكاتب إدارة المشاريع السعودي. صُنع في الرياض. دليل الهوية V1.1.">© 2026 Saudi PMO Community. Built in Riyadh. Brand Guidelines V1.1.</p>
      <p data-en="Rooted in Najd · Built for delivery" data-ar="متجذّرون في نجد · مبنيّون للتسليم">Rooted in Najd · Built for delivery</p>
    </div>
  </div>
</footer>`;
