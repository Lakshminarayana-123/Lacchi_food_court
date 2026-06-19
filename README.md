<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lacchi Food Court – Chundi</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/2.44.0/iconfont/tabler-icons.min.css">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --red:#7a1515;
  --red-mid:#b83232;
  --red-light:#fdf0ef;
  --gold:#f5c518;
  --bg:#f4f1ee;
  --card-bg:#ffffff;
  --border:#e6ddd9;
  --text:#1c1410;
  --text-2:#5c4f47;
  --text-3:#9e8f87;
  --radius:16px;
  --radius-sm:10px;
  --shadow:0 2px 12px rgba(120,30,30,0.09);
  --shadow-hover:0 6px 24px rgba(120,30,30,0.18);
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:var(--bg);color:var(--text);min-width:320px;margin:0;max-width:600px;margin:0 auto;min-height:100vh;position:relative}

/* ── HERO ── */
.hero{background:linear-gradient(160deg,#6e1010 0%,#3d0808 55%,#1a0404 100%);padding:0;position:relative;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60') center/cover;opacity:0.18;pointer-events:none}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.5) 100%);pointer-events:none}
.hero-inner{position:relative;z-index:1;padding:2.2rem 1.5rem 1.6rem;text-align:center}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(245,197,24,0.15);color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;padding:5px 14px;border-radius:20px;border:1px solid rgba(245,197,24,0.4);margin-bottom:1rem}
.hero-logo{width:62px;height:62px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 0.9rem;box-shadow:0 4px 20px rgba(245,197,24,0.4)}
.hero-logo i{font-size:30px;color:#3d0808}
.hero-title{font-size:2.4rem;font-weight:700;color:#fff;line-height:1.1;letter-spacing:-0.5px;text-shadow:0 2px 8px rgba(0,0,0,0.3)}
.hero-title span{color:var(--gold)}
.hero-sub{color:rgba(255,255,255,0.72);font-size:13px;margin-top:6px;letter-spacing:0.3px}
.hero-pills{display:flex;justify-content:center;gap:8px;margin-top:1.3rem;flex-wrap:wrap}
.hero-pill{display:flex;align-items:center;gap:5px;color:rgba(255,255,255,0.92);font-size:11.5px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);border-radius:20px;padding:6px 12px;backdrop-filter:blur(6px)}
.hero-pill i{font-size:14px;color:var(--gold)}
.hero-strip{display:flex;background:rgba(0,0,0,0.35);border-top:1px solid rgba(255,255,255,0.1)}
.hero-strip-item{flex:1;padding:10px 6px;text-align:center;border-right:1px solid rgba(255,255,255,0.1)}
.hero-strip-item:last-child{border-right:none}
.hero-strip-num{font-size:17px;font-weight:700;color:var(--gold)}
.hero-strip-label{font-size:10px;color:rgba(255,255,255,0.6);letter-spacing:0.5px;margin-top:1px}

/* ── NAV ── */
.nav-tabs{display:flex;background:#fff;border-bottom:1px solid var(--border);overflow-x:auto;position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.07)}
.nav-tab{flex:1;min-width:72px;padding:12px 6px;text-align:center;font-size:11.5px;color:var(--text-2);cursor:pointer;border-bottom:2.5px solid transparent;white-space:nowrap;display:flex;flex-direction:column;align-items:center;gap:3px;transition:color 0.15s,border-color 0.15s}
.nav-tab i{font-size:19px}
.nav-tab.active{color:var(--red-mid);border-bottom-color:var(--red-mid);font-weight:600}

/* ── SECTIONS ── */
.section{display:none;padding:1rem}
.section.active{display:block}

/* ── PROMO BANNER ── */
.promo-banner{background:linear-gradient(135deg,#fff3cd,#ffe08a);border:1px solid #f0c040;border-radius:var(--radius-sm);padding:10px 14px;margin-bottom:1rem;display:flex;align-items:center;gap:10px}
.promo-banner i{font-size:22px;color:#b8860b;flex-shrink:0}
.promo-text{font-size:12.5px;color:#7a5a00;font-weight:500;line-height:1.5}
.promo-text strong{color:#5a3e00}

/* ── MENU SECTION TITLE ── */
.menu-section-title{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--text-3);margin:1.4rem 0 0.75rem;font-weight:700;padding-left:2px;display:flex;align-items:center;gap:8px}
.menu-section-title::after{content:'';flex:1;height:1px;background:var(--border)}

/* ── MENU GRID ── */
.menu-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}

/* ── MENU CARD ── */
.menu-card{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column;transition:box-shadow 0.2s,transform 0.15s,border-color 0.2s;cursor:default}
.menu-card:hover{box-shadow:var(--shadow-hover);border-color:#c9a8a8;transform:translateY(-2px)}
.menu-card-img-wrap{position:relative;width:100%;height:132px;overflow:hidden;background:#f0e8e8}
.menu-card-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.35s}
.menu-card:hover .menu-card-img{transform:scale(1.06)}
.menu-card-veg{position:absolute;top:7px;left:7px;width:18px;height:18px;border:1.5px solid;border-radius:3px;display:flex;align-items:center;justify-content:center;background:#fff}
.veg{border-color:#3a8a3a}.veg::after{content:'';width:8px;height:8px;border-radius:50%;background:#3a8a3a;display:block}
.nonveg{border-color:#b83232}.nonveg::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:8px solid #b83232;display:block;margin-top:-1px}
.menu-card-rating{position:absolute;top:7px;right:7px;background:rgba(0,0,0,0.55);color:#ffd700;font-size:10px;font-weight:600;padding:2px 6px;border-radius:12px;display:flex;align-items:center;gap:3px;backdrop-filter:blur(4px)}
.menu-card-rating i{font-size:10px}
.menu-card-body{padding:10px 10px 6px;display:flex;flex-direction:column;gap:2px;flex:1}
.menu-card-name{font-size:13px;font-weight:600;color:var(--text);line-height:1.3}
.menu-card-desc{font-size:11px;color:var(--text-3);line-height:1.4}
.menu-card-price{font-size:15px;color:var(--red-mid);font-weight:700;margin-top:3px}
.menu-card-footer{padding:0 10px 10px;margin-top:auto}
.qty-controls{display:flex;align-items:center;border-radius:var(--radius-sm);overflow:hidden;border:1.5px solid var(--red-mid)}
.qty-btn{background:#fff;color:var(--red-mid);border:none;width:34px;height:32px;font-size:19px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.15s;flex-shrink:0;line-height:1}
.qty-btn:hover{background:var(--red-light)}
.qty-num{flex:1;text-align:center;font-size:14px;font-weight:600;color:var(--text);background:#fff;height:32px;line-height:32px;user-select:none}
.btn-add-menu{width:100%;background:linear-gradient(135deg,var(--red-mid),var(--red));color:#fff;border:none;border-radius:var(--radius-sm);padding:7px;font-size:12.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;transition:opacity 0.15s,transform 0.1s;box-shadow:0 2px 8px rgba(184,50,50,0.3)}
.btn-add-menu:hover{opacity:0.9;transform:translateY(-1px)}
.btn-add-menu:active{transform:scale(0.97)}

/* ── FLOATING CART ── */
.float-cart{position:fixed;bottom:1.2rem;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--red-mid),var(--red));color:#fff;border:none;border-radius:30px;padding:12px 22px;font-size:13px;font-weight:600;cursor:pointer;display:none;align-items:center;gap:8px;box-shadow:0 6px 24px rgba(184,50,50,0.45);z-index:200;white-space:nowrap;max-width:calc(600px - 2rem);width:calc(100% - 2rem)}
.float-cart.visible{display:flex}
.float-cart-items{font-size:12px;opacity:0.88}
.float-cart-total{margin-left:auto;font-size:14px;font-weight:700;background:rgba(255,255,255,0.18);padding:3px 10px;border-radius:12px}

/* ── POS ── */
.pos-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;flex-wrap:wrap;gap:6px}
.pos-title{font-size:15px;font-weight:600;color:var(--text);display:flex;align-items:center;gap:6px}
.date-badge{background:#fff;border:1px solid var(--border);border-radius:var(--radius-sm);padding:5px 10px;font-size:12px;color:var(--text-2);display:flex;align-items:center;gap:5px}
.stat-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:0.75rem}
.stat-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 10px;text-align:center;box-shadow:var(--shadow)}
.stat-label{font-size:10px;color:var(--text-3);text-transform:uppercase;letter-spacing:1px;font-weight:600}
.stat-value{font-size:20px;font-weight:700;color:var(--text);margin-top:2px}
.stat-value.red{color:var(--red-mid)}

/* ── ORDER FORM ── */
.add-order-form{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:1rem;margin-bottom:0.75rem;box-shadow:var(--shadow)}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
.form-group{display:flex;flex-direction:column;gap:3px}
.form-label{font-size:11px;color:var(--text-2);font-weight:600;letter-spacing:0.3px}
select,input[type=text],input[type=number]{border-radius:var(--radius-sm);font-size:13px;border:1.5px solid var(--border);background:#faf7f5;color:var(--text);padding:8px 10px;width:100%;transition:border-color 0.15s}
select:focus,input:focus{outline:none;border-color:var(--red-mid);background:#fff}
.cart-preview{background:#fdf8f8;border:1px solid #f0dada;border-radius:10px;padding:10px;margin-bottom:8px;display:none}
.cart-preview.has-items{display:block}
.cart-title{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--text-3);margin-bottom:8px;font-weight:700}
.cart-item-row{display:flex;align-items:center;font-size:12.5px;color:var(--text);padding:5px 0;border-bottom:1px solid #f5e8e8;gap:6px}
.cart-item-row:last-child{border-bottom:none}
.cart-item-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cart-item-qty-ctrl{display:flex;align-items:center;border:1px solid var(--border);border-radius:6px;overflow:hidden;flex-shrink:0}
.cqbtn{background:#fff;border:none;width:24px;height:24px;font-size:15px;cursor:pointer;color:var(--red-mid);font-weight:600;display:flex;align-items:center;justify-content:center;transition:background 0.1s}
.cqbtn:hover{background:var(--red-light)}
.cqnum{font-size:12px;font-weight:600;width:22px;text-align:center;user-select:none}
.cart-item-amt{color:var(--red-mid);font-weight:600;white-space:nowrap;min-width:42px;text-align:right;flex-shrink:0}
.btn-cart-remove{background:none;border:none;color:var(--text-3);cursor:pointer;font-size:14px;padding:0 2px;flex-shrink:0}
.btn-cart-remove:hover{color:var(--red-mid)}
.cart-total-row{display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:var(--text);padding:6px 0 0;margin-top:5px;border-top:1px solid #f0dada}
.btn-add-item{background:#fff;color:var(--red-mid);border:1.5px solid var(--red-mid);border-radius:var(--radius-sm);padding:9px;font-size:12.5px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;font-weight:600;width:100%;margin-bottom:6px;transition:background 0.15s}
.btn-add-item:hover{background:var(--red-light)}
.btn-place{width:100%;background:linear-gradient(135deg,var(--red-mid),var(--red));color:#fff;border:none;border-radius:var(--radius-sm);padding:11px;font-size:14px;cursor:pointer;font-weight:700;display:flex;align-items:center;justify-content:center;gap:5px;transition:opacity 0.15s;box-shadow:0 3px 12px rgba(184,50,50,0.35)}
.btn-place:hover{opacity:0.9}
.btn-place:disabled{background:#d0c0c0;cursor:not-allowed;box-shadow:none}

/* Orders table */
.orders-table-wrap{background:#fff;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)}
table{width:100%;border-collapse:collapse;font-size:12px;table-layout:fixed}
th{background:#faf0f0;color:var(--text-2);font-weight:700;padding:9px 8px;text-align:left;font-size:10px;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid var(--border)}
td{padding:8px;border-bottom:1px solid #f5f0f0;color:var(--text);vertical-align:middle}
tr:last-child td{border-bottom:none}
tr:hover td{background:#fdf8f8}
.status-badge{display:inline-block;font-size:10px;padding:3px 8px;border-radius:20px;font-weight:600}
.status-done{background:#e6f4d8;color:#2d6a04}
.status-pending{background:#fef3cd;color:#7a4f00}
.status-cancel{background:#fde8e8;color:#791f1f}
.btn-del{background:none;border:1px solid var(--border);border-radius:4px;padding:3px 6px;cursor:pointer;color:var(--text-3);font-size:11px}
.btn-del:hover{border-color:var(--red-mid);color:var(--red-mid)}
.btn-bill{background:#1a5fa8;color:#fff;border:none;border-radius:4px;padding:3px 8px;cursor:pointer;font-size:11px;display:inline-flex;align-items:center;gap:2px}
.btn-bill:hover{background:#0d4580}

/* ── ABOUT / CONTACT ── */
.about-hero-img{width:100%;height:160px;object-fit:cover;border-radius:var(--radius);margin-bottom:0.9rem;display:block}
.info-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:1.2rem;margin-bottom:0.75rem;box-shadow:var(--shadow)}
.info-card-title{font-size:14px;font-weight:700;color:var(--text);margin-bottom:10px;display:flex;align-items:center;gap:7px}
.info-card-title i{color:var(--red-mid);font-size:18px}
.info-card p{font-size:13px;color:var(--text-2);line-height:1.8}
.timing-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f5f0f0;font-size:13px}
.timing-row:last-child{border-bottom:none}
.timing-row span:first-child{color:var(--text-2)}
.contact-row{display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid #f5f0f0;font-size:13px}
.contact-row:last-child{border-bottom:none}
.contact-icon-wrap{width:36px;height:36px;background:var(--red-light);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.contact-row i{font-size:18px;color:var(--red-mid)}
.contact-label{color:var(--text-3);font-size:10px;font-weight:600;letter-spacing:0.3px;text-transform:uppercase}
.contact-value{color:var(--text);font-weight:600;font-size:13px;margin-top:1px}
.feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:0.5rem}
.feature-item{background:var(--red-light);border-radius:var(--radius-sm);padding:12px 10px;text-align:center}
.feature-item i{font-size:22px;color:var(--red-mid);display:block;margin-bottom:5px}
.feature-item span{font-size:11.5px;font-weight:600;color:var(--text-2)}

/* ── BILL MODAL ── */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:none;align-items:flex-start;justify-content:center;padding:1.5rem 1rem;z-index:999;overflow-y:auto}
.modal-overlay.open{display:flex}
.bill-modal{background:#fff;border-radius:var(--radius);width:100%;max-width:380px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.35)}
.bill-header{background:linear-gradient(135deg,#7a1515,#3d0808);padding:1.2rem;text-align:center}
.bill-header-title{color:var(--gold);font-size:1.4rem;font-weight:700}
.bill-header-sub{color:rgba(255,255,255,0.7);font-size:12px;margin-top:3px}
.bill-body{padding:1rem}
.bill-meta{display:flex;justify-content:space-between;font-size:11px;color:var(--text-2);margin-bottom:10px;padding-bottom:10px;border-bottom:1px dashed var(--border)}
.bill-table{width:100%;font-size:12px;border-collapse:collapse;margin-bottom:10px}
.bill-table th{font-size:10px;color:var(--text-3);text-transform:uppercase;letter-spacing:0.8px;padding:4px 0;border-bottom:1px solid var(--border);text-align:left;font-weight:600}
.bill-table th:last-child,.bill-table td:last-child{text-align:right}
.bill-table td{padding:5px 0;color:var(--text);border-bottom:1px solid #f5f5f5}
.bill-table tr:last-child td{border-bottom:none}
.bill-totals{border-top:1px dashed var(--border);padding-top:8px;margin-top:4px}
.bill-total-row.grand{font-size:15px;font-weight:700;color:var(--text);margin-top:4px;padding-top:6px;border-top:1px solid var(--border);display:flex;justify-content:space-between}
.bill-footer{text-align:center;padding:10px;border-top:1px dashed var(--border);font-size:11px;color:var(--text-3)}
.bill-actions{display:flex;gap:8px;padding:0 1rem 1rem}
.btn-print{flex:1;background:var(--red-mid);color:#fff;border:none;border-radius:var(--radius-sm);padding:10px;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;font-weight:600}
.btn-close-bill{flex:1;background:#f5f5f5;color:var(--text);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;font-weight:500}
.empty-state{text-align:center;padding:2.5rem 1rem;color:var(--text-3);font-size:13px}
.empty-state i{font-size:40px;display:block;margin-bottom:0.6rem;color:#e0c8c8}

/* ── FOOTER ── */
.footer{background:#fff;border-top:1px solid var(--border);text-align:center;padding:1.2rem;font-size:11.5px;color:var(--text-3)}
.footer span{color:var(--red-mid);font-weight:600}
</style>
</head>
<body>

<!-- HERO -->
<div class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-inner">
    <div class="hero-badge"><i class="ti ti-award"></i> Est. 2026 · Chundi</div>
    <div class="hero-logo"><i class="ti ti-tools-kitchen-2"></i></div>
    <div class="hero-title">Lacchi <span>Food Court</span></div>
    <div class="hero-sub">Authentic flavours · Fresh daily · Made with love</div>
    <div class="hero-pills">
      <div class="hero-pill"><i class="ti ti-bike"></i> Takeaway</div>
      <div class="hero-pill"><i class="ti ti-armchair"></i> Dine In</div>
      <div class="hero-pill"><i class="ti ti-clock"></i> 8am – 10pm</div>
      <div class="hero-pill"><i class="ti ti-star-filled"></i> 4.8 Stars</div>
    </div>
  </div>
  <div class="hero-strip">
    <div class="hero-strip-item">
      <div class="hero-strip-num">12+</div>
      <div class="hero-strip-label">Dishes</div>
    </div>
    <div class="hero-strip-item">
      <div class="hero-strip-num">₹10</div>
      <div class="hero-strip-label">Starts from</div>
    </div>
    <div class="hero-strip-item">
      <div class="hero-strip-num">4.8★</div>
      <div class="hero-strip-label">Rating</div>
    </div>
    <div class="hero-strip-item">
      <div class="hero-strip-num">14h</div>
      <div class="hero-strip-label">Open daily</div>
    </div>
  </div>
</div>

<!-- NAV -->
<div class="nav-tabs">
  <div class="nav-tab active" onclick="showTab('menu')"><i class="ti ti-tools-kitchen-2"></i>Menu</div>
  <div class="nav-tab" onclick="showTab('pos')"><i class="ti ti-receipt"></i>Orders</div>
  <div class="nav-tab" onclick="showTab('about')"><i class="ti ti-info-circle"></i>About</div>
  <div class="nav-tab" onclick="showTab('contact')"><i class="ti ti-phone"></i>Contact</div>
</div>

<!-- MENU TAB -->
<div id="tab-menu" class="section active">

  <div class="promo-banner">
    <i class="ti ti-discount-2"></i>
    <div class="promo-text"><strong>Today's Special!</strong> Biryani combos now available. Ask our staff for today's meal deal.</div>
  </div>

  <p class="menu-section-title"><i class="ti ti-bowl" style="color:var(--red-mid)"></i> Rice &amp; Biryani</p>
  <div class="menu-grid" id="grid-rice"></div>

  <p class="menu-section-title"><i class="ti ti-salad" style="color:var(--red-mid)"></i> Snacks &amp; Starters</p>
  <div class="menu-grid" id="grid-snacks"></div>

  <p class="menu-section-title"><i class="ti ti-glass" style="color:var(--red-mid)"></i> Drinks &amp; Lassi</p>
  <div class="menu-grid" id="grid-drinks"></div>

</div>

<!-- POS TAB -->
<div id="tab-pos" class="section">
  <div class="pos-header">
    <div class="pos-title"><i class="ti ti-calendar" style="color:var(--red-mid)"></i> Daily Orders</div>
    <div style="display:flex;gap:6px;align-items:center">
      <div class="date-badge"><i class="ti ti-calendar"></i><span id="today-date"></span></div>
      <button onclick="clearDay()" style="background:none;border:1px solid var(--border);border-radius:var(--radius-sm);padding:5px 9px;font-size:11px;color:var(--text-3);cursor:pointer;display:flex;align-items:center;gap:4px" title="Clear all orders"><i class="ti ti-trash"></i> Clear</button>
    </div>
  </div>
  <div class="stat-row">
    <div class="stat-card"><div class="stat-label">Orders</div><div class="stat-value" id="stat-orders">0</div></div>
    <div class="stat-card"><div class="stat-label">Revenue</div><div class="stat-value red" id="stat-revenue">₹0</div></div>
    <div class="stat-card"><div class="stat-label">Pending</div><div class="stat-value" id="stat-pending">0</div></div>
  </div>

  <div class="add-order-form">
    <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:12px;display:flex;align-items:center;gap:6px"><i class="ti ti-plus" style="color:var(--red-mid)"></i> New Order</div>
    <div class="form-row">
      <div class="form-group"><span class="form-label">Customer name</span><input type="text" id="inp-name" placeholder="e.g. Ravi Kumar"></div>
      <div class="form-group"><span class="form-label">Table / Token</span><input type="text" id="inp-table" placeholder="T1 or Token 5"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><span class="form-label">Status</span>
        <select id="inp-status">
          <option value="Pending">Pending</option>
          <option value="Done">Done</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div class="form-group"><span class="form-label">Payment</span>
        <select id="inp-pay">
          <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
        </select>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 64px;gap:8px;margin-bottom:6px">
      <div class="form-group"><span class="form-label">Add Item</span><select id="inp-item"></select></div>
      <div class="form-group"><span class="form-label">Qty</span><input type="number" id="inp-qty" value="1" min="1"></div>
    </div>
    <button class="btn-add-item" onclick="addCartItem()"><i class="ti ti-plus"></i> Add Item to Cart</button>

    <div class="cart-preview" id="cart-preview">
      <div class="cart-title">🛒 Cart</div>
      <div id="cart-rows"></div>
      <div class="cart-total-row"><span>Total</span><span id="cart-total-display" style="color:var(--red-mid)">₹0</span></div>
    </div>

    <button class="btn-place" id="btn-place" onclick="placeOrder()" disabled><i class="ti ti-check"></i> Place Order</button>
  </div>

  <div class="orders-table-wrap">
    <table>
      <thead><tr>
        <th style="width:26px">#</th>
        <th style="width:44px">Time</th>
        <th style="width:72px">Customer</th>
        <th>Items</th>
        <th style="width:58px">Amt</th>
        <th style="width:60px">Status</th>
        <th style="width:68px">Action</th>
      </tr></thead>
      <tbody id="orders-body"></tbody>
    </table>
  </div>
</div>

<!-- ABOUT TAB -->
<div id="tab-about" class="section">
  <img class="about-hero-img" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=70" alt="Lacchi Food Court interior" loading="lazy">
  <div class="info-card">
    <div class="info-card-title"><i class="ti ti-building-store"></i> Our Story</div>
    <p>Welcome to <strong>Lacchi Food Court</strong> — Chundi's favourite spot for authentic home-style meals, crispy snacks, and refreshing lassis. Every dish is made fresh with love and care, bringing the true taste of Andhra to your plate.</p>
  </div>
  <div class="info-card">
    <div class="info-card-title"><i class="ti ti-heart"></i> Why Choose Us</div>
    <div class="feature-grid">
      <div class="feature-item"><i class="ti ti-leaf"></i><span>Fresh Ingredients</span></div>
      <div class="feature-item"><i class="ti ti-clock"></i><span>Quick Service</span></div>
      <div class="feature-item"><i class="ti ti-coin-rupee"></i><span>Affordable Prices</span></div>
      <div class="feature-item"><i class="ti ti-star-filled"></i><span>4.8★ Rated</span></div>
    </div>
  </div>
  <div class="info-card">
    <div class="info-card-title"><i class="ti ti-clock"></i> Opening Hours</div>
    <div class="timing-row"><span>Monday – Friday</span><span style="color:var(--red-mid);font-weight:600">8:00 AM – 10:00 PM</span></div>
    <div class="timing-row"><span>Saturday</span><span style="color:var(--red-mid);font-weight:600">8:00 AM – 11:00 PM</span></div>
    <div class="timing-row"><span>Sunday</span><span style="color:var(--red-mid);font-weight:600">9:00 AM – 9:00 PM</span></div>
  </div>
  <div class="info-card">
    <div class="info-card-title"><i class="ti ti-map-pin"></i> Location</div>
    <p>Lacchi Food Court, Chundi, Andhra Pradesh 523116</p>
  </div>
</div>

<!-- CONTACT TAB -->
<div id="tab-contact" class="section">
  <div class="info-card">
    <div class="info-card-title"><i class="ti ti-address-book"></i> Get in Touch</div>
    <div class="contact-row">
      <div class="contact-icon-wrap"><i class="ti ti-phone"></i></div>
      <div><div class="contact-label">Phone</div><div class="contact-value">+91 63021 24325</div></div>
    </div>
    <div class="contact-row">
      <div class="contact-icon-wrap"><i class="ti ti-brand-whatsapp"></i></div>
      <div><div class="contact-label">WhatsApp</div><div class="contact-value">+91 99085 25413</div></div>
    </div>
    <div class="contact-row">
      <div class="contact-icon-wrap"><i class="ti ti-mail"></i></div>
      <div><div class="contact-label">Email</div><div class="contact-value">lnarayanae@gmail.com</div></div>
    </div>
    <div class="contact-row">
      <div class="contact-icon-wrap"><i class="ti ti-map-pin"></i></div>
      <div><div class="contact-label">Address</div><div class="contact-value">Lacchi Food Court, Chundi, AP</div></div>
    </div>
  </div>
  <div class="info-card" style="text-align:center;padding:1.6rem">
    <i class="ti ti-star-filled" style="font-size:36px;color:var(--gold);display:block;margin-bottom:8px"></i>
    <div style="font-size:15px;font-weight:700;color:var(--text)">Rate us on Google</div>
    <div style="font-size:12px;color:var(--text-3);margin-top:4px;line-height:1.6">Search <strong>"Lacchi Food Court"</strong> on Google Maps<br>and share your experience!</div>
  </div>
</div>

<!-- FLOATING CART BUTTON -->
<button class="float-cart" id="float-cart-btn" onclick="showTab('pos')">
  <i class="ti ti-shopping-cart"></i>
  <span id="float-cart-label" class="float-cart-items">0 items</span>
  <span id="float-cart-total" class="float-cart-total">₹0</span>
</button>

<!-- BILL MODAL -->
<div class="modal-overlay" id="bill-overlay">
  <div class="bill-modal" id="bill-content">
    <div class="bill-header">
      <div class="bill-header-title">🍽 Lacchi Food Court</div>
      <div class="bill-header-sub">Chundi · +91 63021 24325</div>
    </div>
    <div class="bill-body">
      <div class="bill-meta">
        <div><div style="font-size:10px;color:var(--text-3)">Bill No.</div><div style="font-weight:700;font-size:13px" id="b-billno"></div></div>
        <div style="text-align:center"><div style="font-size:10px;color:var(--text-3)">Customer</div><div style="font-weight:700;font-size:13px" id="b-name"></div></div>
        <div style="text-align:right"><div style="font-size:10px;color:var(--text-3)">Date &amp; Time</div><div style="font-weight:600;font-size:11px" id="b-datetime"></div></div>
      </div>
      <div style="display:flex;gap:12px;font-size:11px;color:var(--text-2);margin-bottom:10px">
        <span><i class="ti ti-armchair"></i> Table: <strong id="b-table" style="color:var(--text)"></strong></span>
        <span><i class="ti ti-credit-card"></i> Payment: <strong id="b-pay" style="color:var(--text)"></strong></span>
      </div>
      <table class="bill-table">
        <thead><tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Rate</th><th style="text-align:right">Amt</th></tr></thead>
        <tbody id="b-items"></tbody>
      </table>
      <div class="bill-totals">
        <div class="bill-total-row grand"><span>Total Payable</span><span id="b-total" style="color:var(--red-mid)"></span></div>
      </div>
    </div>
    <div class="bill-footer">🙏 Thank you for dining at Lacchi Food Court! 🙏</div>
    <div class="bill-actions">
      <button class="btn-print" onclick="printBill()"><i class="ti ti-printer"></i> Print</button>
      <button class="btn-close-bill" onclick="closeBill()"><i class="ti ti-x"></i> Close</button>
    </div>
  </div>
</div>

<!-- FOOTER -->
<div class="footer" id="site-footer" style="display:none">
  Made with ❤️ by <span>Lacchi Food Court</span> · Chundi, AP
</div>

<script>
// ── MENU DATA – real food images ─────────────────────────────────────────────
const MENU = [
  // Rice & Biryani
  {name:'Chicken Biryani', price:140, cat:'rice', veg:false, rating:'4.9',
   desc:'Aromatic basmati with tender chicken',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtWQFgd3t1sPPSxlnk-0TT5KOM6GnliFxVKqudAMSTA&s=10'},
  {name:'Veg Biryani', price:120, cat:'rice', veg:true, rating:'4.7',
   desc:'Fragrant rice with fresh vegetables',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSCKGZKPIq1xEpXQrnNBFTZwq2eJfw7U4n6N58GHTaA&s=10'},
  {name:'Egg Fried Rice', price:100, cat:'rice', veg:false, rating:'4.6',
   desc:'Wok-tossed rice with eggs & spices',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlQnnkQ-a9kBhwJC9cjYPtEAMypPjyWBuRR8Xs6BxAw&s=10'},
  {name:'Mutton Biryani', price:220, cat:'rice', veg:false, rating:'4.9',
   desc:'Slow-cooked mutton in spiced rice',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipF0lpU_GGTEvB5B6mDQfqwZfyA3GrD1jovwR3V98NQ&s=10'},

  // Snacks & Starters
  {name:'Samosa (2 pcs)', price:30, cat:'snacks', veg:true, rating:'4.8',
   desc:'Crispy pastry with spiced potato',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3nJZiyjWw5hF2ZkqIZvJF5zycl-GP0b4qYXE9cbX8g&s=10'},
  {name:'Mirchi Bajji', price:40, cat:'snacks', veg:true, rating:'4.7',
   desc:'Green chilli fritters, Andhra style',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQls9ikSralSVRQwHtDJZElCo9EHLChwYYgeQ6Q4_KHgg&s=10'},
  {name:'onion pokoda', price:30, cat:'snacks', veg:true, rating:'4.6',
   desc:'Spiced veggie mash with buttered buns',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaP-iIRZC6RxW_hkcjXuwmVLjs3OWqfjyu0cVk6gYzfQ&s=10'},
  {name:'spring potato', price:30, cat:'snacks', veg:true, rating:'4.5',
   desc:'Mumbai-style potato vada in pav',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpY4oS_Vc-1z9MrvnO8R6RlrX87npPjX6GNbGaVmUrQ&s=10'},

  // Drinks & Lassi
  {name:'thums up', price:60, cat:'drinks', veg:true, rating:'4.9',
   desc:'Chilled  drink',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxBEVfFeH47KPB-ufKk10Y2HfGk0v8CA6RPF88mt8vA&s'},
  {name:'Mango Lassi', price:80, cat:'drinks', veg:true, rating:'4.9',
   desc:'Fresh mango blended with cool lassi',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJyeooF2U2Lk954JOSYgYoUTG-49VwSPC31AGG7XpBA&s=10'},
  {name:'Masala Chai', price:10, cat:'drinks', veg:true, rating:'4.8',
   desc:'Spiced Indian tea, freshly brewed',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUjw2pSHDWtWnBCGJYdW3q2nHnAXRHl7GT2sD1LBqXQ&s=10'},
  {name:'Filter Coffee', price:14, cat:'drinks', veg:true, rating:'4.7',
   desc:'South Indian filter coffee decoction',
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2U5Vels_YtojlyHe9slvuGIxgGE0AXaWjCczahgQJQ&s=10'},
];

// ── State ─────────────────────────────────────────────────────────────────────
let cart = [];
let orders = [];
let billCounter = 1001;

function saveData(){
  try{
    localStorage.setItem('lacchi_orders', JSON.stringify(orders));
    localStorage.setItem('lacchi_bill', billCounter);
  }catch(e){}
}
function loadData(){
  try{
    const o = localStorage.getItem('lacchi_orders');
    const b = localStorage.getItem('lacchi_bill');
    if(o) orders = JSON.parse(o);
    if(b) billCounter = parseInt(b) || 1001;
  }catch(e){}
}
loadData();

// ── MENU CARD rendering ───────────────────────────────────────────────────────
function getCartQty(name){ const f=cart.find(c=>c.name===name); return f?f.qty:0; }
function getPrice(name){ const f=MENU.find(m=>m.name===name); return f?f.price:0; }

function buildMenu(){
  const cats = {rice:'grid-rice', snacks:'grid-snacks', drinks:'grid-drinks'};
  for(const [cat, gid] of Object.entries(cats)){
    const g = document.getElementById(gid);
    g.innerHTML = '';
    MENU.filter(m=>m.cat===cat).forEach(item => {
      const qty = getCartQty(item.name);
      const d = document.createElement('div');
      d.className = 'menu-card';
      d.id = 'mcard-' + item.name.replace(/\s/g,'_');
      d.innerHTML = `
        <div class="menu-card-img-wrap">
          <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy"
            onerror="this.parentElement.style.background='#f0e8e8'">
          <div class="menu-card-veg ${item.veg?'veg':'nonveg'}"></div>
          <div class="menu-card-rating"><i class="ti ti-star-filled"></i>${item.rating}</div>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-desc">${item.desc}</div>
          <div class="menu-card-price">₹${item.price}</div>
        </div>
        <div class="menu-card-footer" id="footer-${item.name.replace(/\s/g,'_')}">
          ${renderCardFooter(item.name, qty)}
        </div>`;
      g.appendChild(d);
    });
  }

  // Populate POS item selector
  const sel = document.getElementById('inp-item');
  sel.innerHTML = '';
  MENU.forEach(item => {
    const o = document.createElement('option');
    o.value = item.name;
    o.textContent = `${item.name} (₹${item.price})`;
    sel.appendChild(o);
  });
}

function renderCardFooter(name, qty){
  if(qty === 0){
    return `<button class="btn-add-menu" onclick="menuAdd('${name}')"><i class="ti ti-plus"></i> Add</button>`;
  }
  return `<div class="qty-controls">
    <button class="qty-btn" onclick="menuDec('${name}')">−</button>
    <div class="qty-num">${qty}</div>
    <button class="qty-btn" onclick="menuInc('${name}')">+</button>
  </div>`;
}

function refreshCardFooter(name){
  const qty = getCartQty(name);
  const id = 'footer-' + name.replace(/\s/g,'_');
  const el = document.getElementById(id);
  if(el) el.innerHTML = renderCardFooter(name, qty);
}

function menuAdd(name){
  const price = getPrice(name);
  cart.push({name, qty:1, price, amount:price});
  refreshCardFooter(name);
  updateFloatCart();
}
function menuInc(name){
  const item = cart.find(c=>c.name===name);
  if(item){ item.qty++; item.amount=item.price*item.qty; }
  refreshCardFooter(name);
  updateFloatCart();
}
function menuDec(name){
  const idx = cart.findIndex(c=>c.name===name);
  if(idx === -1) return;
  cart[idx].qty--;
  if(cart[idx].qty <= 0) cart.splice(idx, 1);
  else cart[idx].amount = cart[idx].price * cart[idx].qty;
  refreshCardFooter(name);
  updateFloatCart();
}

// ── FLOATING CART ─────────────────────────────────────────────────────────────
function updateFloatCart(){
  const btn = document.getElementById('float-cart-btn');
  const lbl = document.getElementById('float-cart-label');
  const tot = document.getElementById('float-cart-total');
  const total = cart.reduce((s,c)=>s+c.amount,0);
  const items = cart.reduce((s,c)=>s+c.qty,0);
  if(items > 0){
    btn.classList.add('visible');
    lbl.textContent = items + (items===1?' item':' items') + ' in cart';
    tot.textContent = '₹' + total.toLocaleString('en-IN');
  } else {
    btn.classList.remove('visible');
  }
}

// ── TABS ──────────────────────────────────────────────────────────────────────
function showTab(tab){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+tab).classList.add('active');
  const idx = ['menu','pos','about','contact'].indexOf(tab);
  if(idx > -1) document.querySelectorAll('.nav-tab')[idx].classList.add('active');
  if(tab === 'pos') renderPOSCart();
  document.getElementById('site-footer').style.display = (tab === 'contact') ? 'block' : 'none';
}

// ── POS CART ──────────────────────────────────────────────────────────────────
function addCartItem(){
  const itemName = document.getElementById('inp-item').value;
  const qty = parseInt(document.getElementById('inp-qty').value) || 1;
  const price = getPrice(itemName);
  if(!itemName || !price) return;
  const existing = cart.find(c=>c.name===itemName);
  if(existing){ existing.qty+=qty; existing.amount=existing.price*existing.qty; }
  else { cart.push({name:itemName, qty, price, amount:price*qty}); }
  document.getElementById('inp-qty').value = 1;
  renderPOSCart();
  refreshCardFooter(itemName);
  updateFloatCart();
}

function removePOSItem(idx){
  const name = cart[idx].name;
  cart.splice(idx,1);
  renderPOSCart();
  refreshCardFooter(name);
  updateFloatCart();
}
function posInc(idx){
  cart[idx].qty++;
  cart[idx].amount = cart[idx].price * cart[idx].qty;
  renderPOSCart();
  refreshCardFooter(cart[idx].name);
  updateFloatCart();
}
function posDec(idx){
  const name = cart[idx].name;
  cart[idx].qty--;
  if(cart[idx].qty <= 0){ cart.splice(idx,1); }
  else { cart[idx].amount = cart[idx].price * cart[idx].qty; }
  renderPOSCart();
  refreshCardFooter(name);
  updateFloatCart();
}

function renderPOSCart(){
  const preview = document.getElementById('cart-preview');
  const rows = document.getElementById('cart-rows');
  const totalDisplay = document.getElementById('cart-total-display');
  const btnPlace = document.getElementById('btn-place');
  if(cart.length === 0){ preview.classList.remove('has-items'); btnPlace.disabled=true; return; }
  preview.classList.add('has-items');
  btnPlace.disabled = false;
  rows.innerHTML = cart.map((c,i) => `
    <div class="cart-item-row">
      <span class="cart-item-name">${c.name}</span>
      <div class="cart-item-qty-ctrl">
        <button class="cqbtn" onclick="posDec(${i})">−</button>
        <div class="cqnum">${c.qty}</div>
        <button class="cqbtn" onclick="posInc(${i})">+</button>
      </div>
      <span class="cart-item-amt">₹${c.amount}</span>
      <button class="btn-cart-remove" onclick="removePOSItem(${i})" title="Remove"><i class="ti ti-x" style="font-size:12px"></i></button>
    </div>`).join('');
  const total = cart.reduce((s,c)=>s+c.amount,0);
  totalDisplay.textContent = '₹' + total.toLocaleString('en-IN');
}

// ── PLACE ORDER ───────────────────────────────────────────────────────────────
function placeOrder(){
  if(cart.length === 0) return;
  const name = document.getElementById('inp-name').value.trim() || 'Walk-in';
  const tableNo = document.getElementById('inp-table').value.trim() || '—';
  const status = document.getElementById('inp-status').value;
  const pay = document.getElementById('inp-pay').value;
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
  const total = cart.reduce((s,c)=>s+c.amount,0);
  orders.push({
    id:orders.length+1, billNo:billCounter++, time, name, tableNo,
    items:[...cart], amount:total, status, pay,
    datetime:now.toLocaleString('en-IN')
  });
  const names = cart.map(c=>c.name);
  cart = [];
  document.getElementById('inp-name').value = '';
  document.getElementById('inp-table').value = '';
  document.getElementById('inp-qty').value = '1';
  names.forEach(n=>refreshCardFooter(n));
  renderPOSCart();
  updateFloatCart();
  saveData();
  renderOrders();
}

// ── ORDERS TABLE ──────────────────────────────────────────────────────────────
function renderOrders(){
  const tbody = document.getElementById('orders-body');
  if(orders.length === 0){
    tbody.innerHTML='<tr><td colspan="7"><div class="empty-state"><i class="ti ti-receipt-off"></i>No orders yet today</div></td></tr>';
    document.getElementById('stat-orders').textContent='0';
    document.getElementById('stat-revenue').textContent='₹0';
    document.getElementById('stat-pending').textContent='0';
    return;
  }
  tbody.innerHTML = orders.map((o,i)=>{
    const sc = o.status==='Done'?'status-done':o.status==='Pending'?'status-pending':'status-cancel';
    const summary = o.items ? o.items.map(it=>`${it.name}×${it.qty}`).join(', ') : `${o.item}×${o.qty}`;
    return `<tr>
      <td style="color:var(--text-3)">${o.id}</td>
      <td style="color:var(--text-3);font-size:11px">${o.time}</td>
      <td style="font-size:11px">${o.name}</td>
      <td style="color:var(--text-2);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${summary}">${summary}</td>
      <td style="color:var(--red-mid);font-weight:600">₹${o.amount.toLocaleString('en-IN')}</td>
      <td><span class="status-badge ${sc}">${o.status}</span></td>
      <td style="display:flex;gap:4px;align-items:center">
        <button class="btn-bill" onclick="openBill(${i})"><i class="ti ti-receipt"></i></button>
        <button class="btn-del" onclick="deleteOrder(${i})"><i class="ti ti-trash"></i></button>
      </td>
    </tr>`;
  }).join('');
  const totalRev = orders.reduce((s,o)=>s+(o.status!=='Cancelled'?o.amount:0),0);
  const pending = orders.filter(o=>o.status==='Pending').length;
  document.getElementById('stat-orders').textContent = orders.length;
  document.getElementById('stat-revenue').textContent = '₹'+totalRev.toLocaleString('en-IN');
  document.getElementById('stat-pending').textContent = pending;
}

function deleteOrder(i){ orders.splice(i,1); orders.forEach((o,idx)=>o.id=idx+1); saveData(); renderOrders(); }

function clearDay(){
  if(!confirm('Clear ALL orders for today? This cannot be undone.')) return;
  orders=[]; billCounter=1001; cart=[];
  saveData(); renderOrders(); renderPOSCart(); updateFloatCart();
  MENU.forEach(m=>refreshCardFooter(m.name));
}

// ── BILL MODAL ────────────────────────────────────────────────────────────────
function openBill(i){
  const o = orders[i];
  document.getElementById('b-billno').textContent = '#'+o.billNo;
  document.getElementById('b-name').textContent = o.name;
  document.getElementById('b-datetime').textContent = o.datetime;
  document.getElementById('b-table').textContent = o.tableNo;
  document.getElementById('b-pay').textContent = o.pay;
  let itemsHtml='', total=0;
  if(o.items && o.items.length){
    o.items.forEach(it=>{
      itemsHtml+=`<tr><td>${it.name}</td><td style="text-align:center">${it.qty}</td><td style="text-align:right">₹${it.price}</td><td style="text-align:right">₹${it.amount}</td></tr>`;
      total+=it.amount;
    });
  } else {
    itemsHtml=`<tr><td>${o.item}</td><td style="text-align:center">${o.qty}</td><td style="text-align:right">₹${o.price}</td><td style="text-align:right">₹${o.amount}</td></tr>`;
    total=o.amount;
  }
  document.getElementById('b-items').innerHTML = itemsHtml;
  document.getElementById('b-total').textContent = '₹'+total.toLocaleString('en-IN');
  document.getElementById('bill-overlay').classList.add('open');
}
function closeBill(){ document.getElementById('bill-overlay').classList.remove('open'); }
function printBill(){
  const content = document.getElementById('bill-content').innerHTML;
  const w = window.open('','_blank','width=400,height=600');
  w.document.write(`<!DOCTYPE html><html><head><title>Bill – Lacchi Food Court</title><style>
    *{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
    .bill-header{background:#7a1515;padding:16px;text-align:center}
    .bill-header-title{color:#f5c518;font-size:1.2rem;font-weight:bold}
    .bill-header-sub{color:rgba(255,255,255,0.8);font-size:11px;margin-top:2px}
    .bill-body{padding:14px}
    .bill-meta{display:flex;justify-content:space-between;font-size:11px;color:#666;margin-bottom:10px;padding-bottom:10px;border-bottom:1px dashed #ccc}
    .bill-table{width:100%;font-size:12px;border-collapse:collapse;margin-bottom:10px}
    .bill-table th{font-size:10px;color:#999;text-transform:uppercase;padding:4px 0;border-bottom:1px solid #eee;text-align:left;font-weight:bold}
    .bill-table th:last-child,.bill-table td:last-child{text-align:right}
    .bill-table td{padding:5px 0;border-bottom:1px solid #f0f0f0}
    .bill-totals{border-top:1px dashed #ccc;padding-top:8px}
    .bill-total-row.grand{display:flex;justify-content:space-between;font-size:15px;font-weight:bold;color:#111;margin-top:4px;padding-top:6px;border-top:1px solid #ccc}
    .bill-footer{text-align:center;padding:10px;border-top:1px dashed #ccc;font-size:11px;color:#888}
    .bill-actions{display:none}
  </style></head><body>${content}</body></html>`);
  w.document.close();
  setTimeout(()=>{ w.print(); }, 400);
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.getElementById('today-date').textContent = new Date().toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short',year:'numeric'});
buildMenu();
renderOrders();
</script>
</body>
</html>
