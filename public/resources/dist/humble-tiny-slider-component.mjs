var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
var wi = window, Ye = wi.requestAnimationFrame || wi.webkitRequestAnimationFrame || wi.mozRequestAnimationFrame || wi.msRequestAnimationFrame || function(t) {
  return setTimeout(t, 16);
}, hr = window, sn = hr.cancelAnimationFrame || hr.mozCancelAnimationFrame || function(t) {
  clearTimeout(t);
};
function on() {
  for (var t, f, a, l = arguments[0] || {}, s = 1, m = arguments.length; s < m; s++)
    if ((t = arguments[s]) !== null)
      for (f in t)
        a = t[f], l !== a && a !== void 0 && (l[f] = a);
  return l;
}
function me(t) {
  return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
}
function pe(t, f, a, l) {
  if (l)
    try {
      t.setItem(f, a);
    } catch {
    }
  return a;
}
function rf() {
  var t = window.tnsId;
  return window.tnsId = t ? t + 1 : 1, "tns" + window.tnsId;
}
function Ti() {
  var t = document, f = t.body;
  return f || (f = t.createElement("body"), f.fake = !0), f;
}
var Vt = document.documentElement;
function Ei(t) {
  var f = "";
  return t.fake && (f = Vt.style.overflow, t.style.background = "", t.style.overflow = Vt.style.overflow = "hidden", Vt.appendChild(t)), f;
}
function Mi(t, f) {
  t.fake && (t.remove(), Vt.style.overflow = f, Vt.offsetHeight);
}
function ff() {
  var t = document, f = Ti(), a = Ei(f), l = t.createElement("div"), s = !1;
  f.appendChild(l);
  try {
    for (var m = "(10px * 10)", K = ["calc" + m, "-moz-calc" + m, "-webkit-calc" + m], F, _ = 0; _ < 3; _++)
      if (F = K[_], l.style.width = F, l.offsetWidth === 100) {
        s = F.replace(m, "");
        break;
      }
  } catch {
  }
  return f.fake ? Mi(f, a) : l.remove(), s;
}
function af() {
  var t = document, f = Ti(), a = Ei(f), l = t.createElement("div"), s = t.createElement("div"), m = "", K = 70, F = 3, _ = !1;
  l.className = "tns-t-subp2", s.className = "tns-t-ct";
  for (var ge = 0; ge < K; ge++)
    m += "<div></div>";
  return s.innerHTML = m, l.appendChild(s), f.appendChild(l), _ = Math.abs(l.getBoundingClientRect().left - s.children[K - F].getBoundingClientRect().left) < 2, f.fake ? Mi(f, a) : l.remove(), _;
}
function lf() {
  if (window.matchMedia || window.msMatchMedia)
    return !0;
  var t = document, f = Ti(), a = Ei(f), l = t.createElement("div"), s = t.createElement("style"), m = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", K;
  return s.type = "text/css", l.className = "tns-mq-test", f.appendChild(s), f.appendChild(l), s.styleSheet ? s.styleSheet.cssText = m : s.appendChild(t.createTextNode(m)), K = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, f.fake ? Mi(f, a) : l.remove(), K === "absolute";
}
function sf(t, f) {
  var a = document.createElement("style");
  return t && a.setAttribute("media", t), f && a.setAttribute("nonce", f), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet;
}
function De(t, f, a, l) {
  "insertRule" in t ? t.insertRule(f + "{" + a + "}", l) : t.addRule(f, a, l);
}
function of(t, f) {
  "deleteRule" in t ? t.deleteRule(f) : t.removeRule(f);
}
function Ce(t) {
  var f = "insertRule" in t ? t.cssRules : t.rules;
  return f.length;
}
function uf(t, f) {
  return Math.atan2(t, f) * (180 / Math.PI);
}
function cf(t, f) {
  var a = !1, l = Math.abs(90 - Math.abs(t));
  return l >= 90 - f ? a = "horizontal" : l <= f && (a = "vertical"), a;
}
function Qe(t, f, a) {
  for (var l = 0, s = t.length; l < s; l++)
    f.call(a, t[l], l);
}
var un = "classList" in document.createElement("_"), ht = un ? function(t, f) {
  return t.classList.contains(f);
} : function(t, f) {
  return t.className.indexOf(f) >= 0;
}, k = un ? function(t, f) {
  ht(t, f) || t.classList.add(f);
} : function(t, f) {
  ht(t, f) || (t.className += " " + f);
}, re = un ? function(t, f) {
  ht(t, f) && t.classList.remove(f);
} : function(t, f) {
  ht(t, f) && (t.className = t.className.replace(f, ""));
};
function Pt(t, f) {
  return t.hasAttribute(f);
}
function bi(t, f) {
  return t.getAttribute(f);
}
function pr(t) {
  return typeof t.item < "u";
}
function se(t, f) {
  if (t = pr(t) || t instanceof Array ? t : [t], Object.prototype.toString.call(f) === "[object Object]")
    for (var a = t.length; a--; )
      for (var l in f)
        t[a].setAttribute(l, f[l]);
}
function Ie(t, f) {
  t = pr(t) || t instanceof Array ? t : [t], f = f instanceof Array ? f : [f];
  for (var a = f.length, l = t.length; l--; )
    for (var s = a; s--; )
      t[l].removeAttribute(f[s]);
}
function vr(t) {
  for (var f = [], a = 0, l = t.length; a < l; a++)
    f.push(t[a]);
  return f;
}
function oe(t, f) {
  t.style.display !== "none" && (t.style.display = "none");
}
function ue(t, f) {
  t.style.display === "none" && (t.style.display = "");
}
function gr(t) {
  return window.getComputedStyle(t).display !== "none";
}
function qt(t) {
  if (typeof t == "string") {
    var f = [t], a = t.charAt(0).toUpperCase() + t.substr(1), l = ["Webkit", "Moz", "ms", "O"];
    l.forEach(function(F) {
      (F !== "ms" || t === "transform") && f.push(F + a);
    }), t = f;
  }
  var s = document.createElement("fakeelement");
  t.length;
  for (var m = 0; m < t.length; m++) {
    var K = t[m];
    if (s.style[K] !== void 0)
      return K;
  }
  return !1;
}
function df(t) {
  if (!t || !window.getComputedStyle)
    return !1;
  var f = document, a = Ti(), l = Ei(a), s = f.createElement("p"), m, K = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
  return K += "transform", a.insertBefore(s, null), s.style[t] = "translate3d(1px,1px,1px)", m = window.getComputedStyle(s).getPropertyValue(K), a.fake ? Mi(a, l) : s.remove(), m !== void 0 && m.length > 0 && m !== "none";
}
function yr(t, f) {
  var a = !1;
  return /^Webkit/.test(t) ? a = "webkit" + f + "End" : /^O/.test(t) ? a = "o" + f + "End" : t && (a = f.toLowerCase() + "end"), a;
}
var wr = !1;
try {
  var hf = Object.defineProperty({}, "passive", {
    get: function() {
      wr = !0;
    }
  });
  window.addEventListener("test", null, hf);
} catch {
}
var br = wr ? {
  passive: !0
} : !1;
function R(t, f, a) {
  for (var l in f) {
    var s = ["touchstart", "touchmove"].indexOf(l) >= 0 && !a ? br : !1;
    t.addEventListener(l, f[l], s);
  }
}
function Y(t, f) {
  for (var a in f) {
    var l = ["touchstart", "touchmove"].indexOf(a) >= 0 ? br : !1;
    t.removeEventListener(a, f[a], l);
  }
}
function vf() {
  return {
    topics: {},
    on: function(t, f) {
      this.topics[t] = this.topics[t] || [], this.topics[t].push(f);
    },
    off: function(t, f) {
      if (this.topics[t]) {
        for (var a = 0; a < this.topics[t].length; a++)
          if (this.topics[t][a] === f) {
            this.topics[t].splice(a, 1);
            break;
          }
      }
    },
    emit: function(t, f) {
      f.type = t, this.topics[t] && this.topics[t].forEach(function(a) {
        a(f, t);
      });
    }
  };
}
function gf(t, f, a, l, ge, m, K) {
  var F = Math.min(m, 10), _ = ge.indexOf("%") >= 0 ? "%" : "px", ge = ge.replace(_, ""), we = Number(t.style[f].replace(a, "").replace(l, "").replace(_, "")), Xe = (ge - we) / m * F;
  setTimeout(Kt, F);
  function Kt() {
    m -= F, we += Xe, t.style[f] = a + we + _ + l, m > 0 ? setTimeout(Kt, F) : K();
  }
}
Object.keys || (Object.keys = function(t) {
  var f = [];
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && f.push(a);
  return f;
});
"remove" in Element.prototype || (Element.prototype.remove = function() {
  this.parentNode && this.parentNode.removeChild(this);
});
var Tr = function(t) {
  t = on({
    container: ".slider",
    mode: "carousel",
    axis: "horizontal",
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: !1,
    autoWidth: !1,
    viewportMax: !1,
    slideBy: 1,
    center: !1,
    controls: !0,
    controlsPosition: "top",
    controlsText: ["prev", "next"],
    controlsContainer: !1,
    prevButton: !1,
    nextButton: !1,
    nav: !0,
    navPosition: "top",
    navContainer: !1,
    navAsThumbnails: !1,
    arrowKeys: !1,
    speed: 300,
    autoplay: !1,
    autoplayPosition: "top",
    autoplayTimeout: 5e3,
    autoplayDirection: "forward",
    autoplayText: ["start", "stop"],
    autoplayHoverPause: !1,
    autoplayButton: !1,
    autoplayButtonOutput: !0,
    autoplayResetOnVisibility: !0,
    animateIn: "tns-fadeIn",
    animateOut: "tns-fadeOut",
    animateNormal: "tns-normal",
    animateDelay: !1,
    loop: !0,
    rewind: !1,
    autoHeight: !1,
    responsive: !1,
    lazyload: !1,
    lazyloadSelector: ".tns-lazy-img",
    touch: !0,
    mouseDrag: !1,
    swipeAngle: 15,
    nested: !1,
    preventActionWhenRunning: !1,
    preventScrollOnTouch: !1,
    freezable: !0,
    onInit: !1,
    useLocalStorage: !0,
    nonce: !1
  }, t || {});
  var f = document, a = window, l = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  }, s = {}, m = t.useLocalStorage;
  if (m) {
    var K = navigator.userAgent, F = new Date();
    try {
      s = a.localStorage, s ? (s.setItem(F, F), m = s.getItem(F) == F, s.removeItem(F)) : m = !1, m || (s = {});
    } catch {
      m = !1;
    }
    m && (s.tnsApp && s.tnsApp !== K && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(e) {
      s.removeItem(e);
    }), localStorage.tnsApp = K);
  }
  var _ = s.tC ? me(s.tC) : pe(s, "tC", ff(), m), ge = s.tPL ? me(s.tPL) : pe(s, "tPL", af(), m), we = s.tMQ ? me(s.tMQ) : pe(s, "tMQ", lf(), m), Xe = s.tTf ? me(s.tTf) : pe(s, "tTf", qt("transform"), m), Kt = s.t3D ? me(s.t3D) : pe(s, "t3D", df(Xe), m), j = s.tTDu ? me(s.tTDu) : pe(s, "tTDu", qt("transitionDuration"), m), _t = s.tTDe ? me(s.tTDe) : pe(s, "tTDe", qt("transitionDelay"), m), Yt = s.tADu ? me(s.tADu) : pe(s, "tADu", qt("animationDuration"), m), Ai = s.tADe ? me(s.tADe) : pe(s, "tADe", qt("animationDelay"), m), Ze = s.tTE ? me(s.tTE) : pe(s, "tTE", yr(j, "Transition"), m), cn = s.tAE ? me(s.tAE) : pe(s, "tAE", yr(Yt, "Animation"), m), dn = a.console && typeof a.console.warn == "function", Si = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], hn = {};
  if (Si.forEach(function(e) {
    if (typeof t[e] == "string") {
      var i = t[e], n = f.querySelector(i);
      if (hn[e] = i, n && n.nodeName)
        t[e] = n;
      else {
        dn && console.warn("Can't find", t[e]);
        return;
      }
    }
  }), t.container.children.length < 1) {
    dn && console.warn("No slides found in", t.container);
    return;
  }
  var L = t.responsive, it = t.nested, c = t.mode === "carousel";
  if (L) {
    0 in L && (t = on(t, L[0]), delete L[0]);
    var Ci = {};
    for (var vn in L) {
      var vt = L[vn];
      vt = typeof vt == "number" ? {
        items: vt
      } : vt, Ci[vn] = vt;
    }
    L = Ci, Ci = null;
  }
  function gn(e) {
    for (var i in e)
      c || (i === "slideBy" && (e[i] = "page"), i === "edgePadding" && (e[i] = !1), i === "autoHeight" && (e[i] = !1)), i === "responsive" && gn(e[i]);
  }
  if (c || gn(t), !c) {
    t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
    var Ne = t.animateIn, Qt = t.animateOut, xi = t.animateDelay, be = t.animateNormal;
  }
  var A = t.axis === "horizontal", G = f.createElement("div"), B = f.createElement("div"), ee, v = t.container, Li = v.parentNode, yn = v.outerHTML, E = v.children, g = E.length, gt, It = Ln(), yt = !1;
  L && Vn(), c && (v.className += " tns-vpfix");
  var p = t.autoWidth, d = y("fixedWidth"), N = y("edgePadding"), b = y("gutter"), P = Nn(), Q = y("center"), w = p ? 1 : Math.floor(y("items")), nt = y("slideBy"), Di = t.viewportMax || t.fixedWidthViewportWidth, Oe = y("arrowKeys"), ce = y("speed"), mt = t.rewind, I = mt ? !1 : t.loop, te = y("autoHeight"), Te = y("controls"), Re = y("controlsText"), Ee = y("nav"), ke = y("touch"), He = y("mouseDrag"), U = y("autoplay"), Ni = y("autoplayTimeout"), ze = y("autoplayText"), We = y("autoplayHoverPause"), Fe = y("autoplayResetOnVisibility"), S = sf(null, y("nonce")), pt = t.lazyload, Er = t.lazyloadSelector, H, rt = [], X = I ? Cr() : 0, M = c ? g + X * 2 : g + X, mn = !!((d || p) && !I), ft = d ? ji() : null, Oi = !c || !I, $e = A ? "left" : "top", Pe = "", at = "", wt = function() {
    return d ? function() {
      return Q && !I ? g - 1 : Math.ceil(-ft / (d + b));
    } : p ? function() {
      for (var e = 0; e < M; e++)
        if (H[e] >= -ft)
          return e;
    } : function() {
      return Q && c && !I ? g - 1 : I || c ? Math.max(0, M - Math.ceil(w)) : M - 1;
    };
  }(), o = Cn(y("startIndex")), qe = o;
  Sn();
  var Me = 0, fe = p ? null : wt(), Xt = t.preventActionWhenRunning, Zt = t.swipeAngle, Ae = Zt ? "?" : !0, Ve = !1, Ri = t.onInit, q = new vf(), Ke = " tns-slider tns-" + t.mode, D = v.id || rf(), ie = y("disable"), bt = !1, $t = t.freezable, de = $t && !p ? _i() : !1, Tt = !1, Et = {
    click: _e,
    keydown: $r
  }, ki = {
    click: Kr,
    keydown: jr
  }, Mt = {
    mouseover: Ir,
    mouseout: Xr
  }, At = {
    visibilitychange: Qr
  }, St = {
    keydown: Zr
  }, Ct = {
    touchstart: sr,
    touchmove: or,
    touchend: pi,
    touchcancel: pi
  }, xt = {
    mousedown: sr,
    mousemove: or,
    mouseup: pi,
    mouseleave: pi
  }, jt = xe("controls"), Hi = xe("nav"), Lt = p ? !0 : t.navAsThumbnails, zi = xe("autoplay"), pn = xe("touch"), wn = xe("mouseDrag"), Wi = "tns-slide-active", bn = "tns-slide-cloned", Ut = "tns-complete", Jt = {
    load: kr,
    error: Hr
  }, Fi, Pi, Dt = t.preventScrollOnTouch === "force";
  if (jt)
    var z = t.controlsContainer, Tn = t.controlsContainer ? t.controlsContainer.outerHTML : "", C = t.prevButton, x = t.nextButton, Mr = t.prevButton ? t.prevButton.outerHTML : "", Ar = t.nextButton ? t.nextButton.outerHTML : "", Nt, Ot;
  if (Hi)
    var Z = t.navContainer, En = t.navContainer ? t.navContainer.outerHTML : "", ae, he = p ? g : cr(), je = 0, Ue = -1, le = xn(), lt = le, Gt = "tns-nav-active", st = "Carousel Page ", qi = " (Current Slide)";
  if (zi)
    var Mn = t.autoplayDirection === "forward" ? 1 : -1, O = t.autoplayButton, An = t.autoplayButton ? t.autoplayButton.outerHTML : "", Rt = ["<span class='tns-visually-hidden'>", " animation</span>"], Bt, ne, ei, ot, ti;
  if (pn || wn)
    var Je = {}, ye = {}, ii, Ge = !1, ve, Vi = A ? function(e, i) {
      return e.x - i.x;
    } : function(e, i) {
      return e.y - i.y;
    };
  p || ni(ie || de), Xe && ($e = Xe, Pe = "translate", Kt ? (Pe += A ? "3d(" : "3d(0px, ", at = A ? ", 0px, 0px)" : ", 0px)") : (Pe += A ? "X(" : "Y(", at = ")")), c && (v.className = v.className.replace("tns-vpfix", "")), Lr(), Dr(), kn();
  function ni(e) {
    e && (Te = Ee = ke = He = Oe = U = We = Fe = !1);
  }
  function Sn() {
    for (var e = c ? o - X : o; e < 0; )
      e += g;
    return e % g + 1;
  }
  function Cn(e) {
    return e = e ? Math.max(0, Math.min(I ? g - 1 : g - w, e)) : 0, c ? e + X : e;
  }
  function ri(e) {
    for (e == null && (e = o), c && (e -= X); e < 0; )
      e += g;
    return Math.floor(e % g);
  }
  function xn() {
    var e = ri(), i;
    return i = Lt ? e : d || p ? Math.ceil((e + 1) * he / g - 1) : Math.floor(e / w), !I && c && o === fe && (i = he - 1), i;
  }
  function Sr() {
    if (p || d && !Di)
      return g - 1;
    var e = d ? "fixedWidth" : "items", i = [];
    if ((d || t[e] < g) && i.push(t[e]), L)
      for (var n in L) {
        var r = L[n][e];
        r && (d || r < g) && i.push(r);
      }
    return i.length || i.push(0), Math.ceil(d ? Di / Math.min.apply(null, i) : Math.max.apply(null, i));
  }
  function Cr() {
    var e = Sr(), i = c ? Math.ceil((e * 5 - g) / 2) : e * 4 - g;
    return i = Math.max(e, i), xe("edgePadding") ? i + 1 : i;
  }
  function Ln() {
    return a.innerWidth || f.documentElement.clientWidth || f.body.clientWidth;
  }
  function Ki(e) {
    return e === "top" ? "afterbegin" : "beforeend";
  }
  function Dn(e) {
    if (e != null) {
      var i = f.createElement("div"), n, r;
      return e.appendChild(i), n = i.getBoundingClientRect(), r = n.right - n.left, i.remove(), r || Dn(e.parentNode);
    }
  }
  function Nn() {
    var e = N ? N * 2 - b : 0;
    return Dn(Li) - e;
  }
  function xe(e) {
    if (t[e])
      return !0;
    if (L) {
      for (var i in L)
        if (L[i][e])
          return !0;
    }
    return !1;
  }
  function y(e, i) {
    if (i == null && (i = It), e === "items" && d)
      return Math.floor((P + b) / (d + b)) || 1;
    var n = t[e];
    if (L)
      for (var r in L)
        i >= parseInt(r) && e in L[r] && (n = L[r][e]);
    return e === "slideBy" && n === "page" && (n = y("items")), !c && (e === "slideBy" || e === "items") && (n = Math.floor(n)), n;
  }
  function xr(e) {
    return _ ? _ + "(" + e * 100 + "% / " + M + ")" : e * 100 / M + "%";
  }
  function fi(e, i, n, r, u) {
    var h = "";
    if (e !== void 0) {
      var T = e;
      i && (T -= i), h = A ? "margin: 0 " + T + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + T + "px 0;";
    } else if (i && !n) {
      var V = "-" + i + "px", $ = A ? V + " 0 0" : "0 " + V + " 0";
      h = "margin: 0 " + $ + ";";
    }
    return !c && u && j && r && (h += Be(r)), h;
  }
  function ai(e, i, n) {
    return e ? (e + i) * M + "px" : _ ? _ + "(" + M * 100 + "% / " + n + ")" : M * 100 / n + "%";
  }
  function li(e, i, n) {
    var r;
    if (e)
      r = e + i + "px";
    else {
      c || (n = Math.floor(n));
      var u = c ? M : n;
      r = _ ? _ + "(100% / " + u + ")" : 100 / u + "%";
    }
    return r = "width:" + r, it !== "inner" ? r + ";" : r + " !important;";
  }
  function si(e) {
    var i = "";
    if (e !== !1) {
      var n = A ? "padding-" : "margin-", r = A ? "right" : "bottom";
      i = n + r + ": " + e + "px;";
    }
    return i;
  }
  function On(e, i) {
    var n = e.substring(0, e.length - i).toLowerCase();
    return n && (n = "-" + n + "-"), n;
  }
  function Be(e) {
    return On(j, 18) + "transition-duration:" + e / 1e3 + "s;";
  }
  function Rn(e) {
    return On(Yt, 17) + "animation-duration:" + e / 1e3 + "s;";
  }
  function Lr() {
    var e = "tns-outer", i = "tns-inner";
    if (xe("gutter"), G.className = e, B.className = i, G.id = D + "-ow", B.id = D + "-iw", v.id === "" && (v.id = D), Ke += ge || p ? " tns-subpixel" : " tns-no-subpixel", Ke += _ ? " tns-calc" : " tns-no-calc", p && (Ke += " tns-autowidth"), Ke += " tns-" + t.axis, v.className += Ke, c ? (ee = f.createElement("div"), ee.id = D + "-mw", ee.className = "tns-ovh", G.appendChild(ee), ee.appendChild(B)) : G.appendChild(B), te) {
      var n = ee || B;
      n.className += " tns-ah";
    }
    if (Li.insertBefore(G, v), B.appendChild(v), Qe(E, function(W, ct) {
      k(W, "tns-item"), W.id || (W.id = D + "-item" + ct), !c && be && k(W, be), se(W, {
        "aria-hidden": "true",
        tabindex: "-1"
      });
    }), X) {
      for (var r = f.createDocumentFragment(), u = f.createDocumentFragment(), h = X; h--; ) {
        var T = h % g, V = E[T].cloneNode(!0);
        if (k(V, bn), Ie(V, "id"), u.insertBefore(V, u.firstChild), c) {
          var $ = E[g - 1 - T].cloneNode(!0);
          k($, bn), Ie($, "id"), r.appendChild($);
        }
      }
      v.insertBefore(r, v.firstChild), v.appendChild(u), E = v.children;
    }
  }
  function kn() {
    if (xe("autoHeight") || p || !A) {
      var e = v.querySelectorAll("img");
      Qe(e, function(i) {
        var n = i.src;
        pt || (n && n.indexOf("data:image") < 0 ? (i.src = "", R(i, Jt), k(i, "loading"), i.src = n) : Xn(i));
      }), Ye(function() {
        ci(vr(e), function() {
          Fi = !0;
        });
      }), xe("autoHeight") && (e = Zi(o, Math.min(o + w - 1, M - 1))), pt ? Hn() : Ye(function() {
        ci(vr(e), Hn);
      });
    } else
      c && Ht(), Wn(), Fn();
  }
  function Hn() {
    if (p && g > 1) {
      var e = I ? o : g - 1;
      (function i() {
        var n = E[e].getBoundingClientRect().left, r = E[e - 1].getBoundingClientRect().right;
        Math.abs(n - r) <= 1 ? zn() : setTimeout(function() {
          i();
        }, 16);
      })();
    } else
      zn();
  }
  function zn() {
    (!A || p) && (Un(), p ? (ft = ji(), $t && (de = _i()), fe = wt(), ni(ie || de)) : Gi()), c && Ht(), Wn(), Fn();
  }
  function Dr() {
    if (!c)
      for (var e = o, i = o + Math.min(g, w); e < i; e++) {
        var n = E[e];
        n.style.left = (e - o) * 100 / w + "%", k(n, Ne), re(n, be);
      }
    if (A && (ge || p ? (De(S, "#" + D + " > .tns-item", "font-size:" + a.getComputedStyle(E[0]).fontSize + ";", Ce(S)), De(S, "#" + D, "font-size:0;", Ce(S))) : c && Qe(E, function(nn, rn) {
      nn.style.marginLeft = xr(rn);
    })), we) {
      if (j) {
        var r = ee && t.autoHeight ? Be(t.speed) : "";
        De(S, "#" + D + "-mw", r, Ce(S));
      }
      r = fi(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), De(S, "#" + D + "-iw", r, Ce(S)), c && (r = A && !p ? "width:" + ai(t.fixedWidth, t.gutter, t.items) + ";" : "", j && (r += Be(ce)), De(S, "#" + D, r, Ce(S))), r = A && !p ? li(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (r += si(t.gutter)), c || (j && (r += Be(ce)), Yt && (r += Rn(ce))), r && De(S, "#" + D + " > .tns-item", r, Ce(S));
    } else {
      Wr(), B.style.cssText = fi(N, b, d, te), c && A && !p && (v.style.width = ai(d, b, w));
      var r = A && !p ? li(d, b, w) : "";
      b && (r += si(b)), r && De(S, "#" + D + " > .tns-item", r, Ce(S));
    }
    if (L && we)
      for (var u in L) {
        u = parseInt(u);
        var h = L[u], r = "", T = "", V = "", $ = "", W = "", ct = p ? null : y("items", u), Ft = y("fixedWidth", u), tt = y("speed", u), en = y("edgePadding", u), tn = y("autoHeight", u), dt = y("gutter", u);
        j && ee && y("autoHeight", u) && "speed" in h && (T = "#" + D + "-mw{" + Be(tt) + "}"), ("edgePadding" in h || "gutter" in h) && (V = "#" + D + "-iw{" + fi(en, dt, Ft, tt, tn) + "}"), c && A && !p && ("fixedWidth" in h || "items" in h || d && "gutter" in h) && ($ = "width:" + ai(Ft, dt, ct) + ";"), j && "speed" in h && ($ += Be(tt)), $ && ($ = "#" + D + "{" + $ + "}"), ("fixedWidth" in h || d && "gutter" in h || !c && "items" in h) && (W += li(Ft, dt, ct)), "gutter" in h && (W += si(dt)), !c && "speed" in h && (j && (W += Be(tt)), Yt && (W += Rn(tt))), W && (W = "#" + D + " > .tns-item{" + W + "}"), r = T + V + $ + W, r && S.insertRule("@media (min-width: " + u / 16 + "em) {" + r + "}", S.cssRules.length);
      }
  }
  function Wn() {
    if ($i(), G.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + In() + "</span>  of " + g + "</div>"), Pi = G.querySelector(".tns-liveregion .current"), zi) {
      var e = U ? "stop" : "start";
      O ? se(O, {
        "data-action": e
      }) : t.autoplayButtonOutput && (G.insertAdjacentHTML(Ki(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + Rt[0] + e + Rt[1] + ze[0] + "</button>"), O = G.querySelector("[data-action]")), O && R(O, {
        click: rr
      }), U && (mi(), We && R(v, Mt), Fe && R(v, At));
    }
    if (Hi) {
      if (Z)
        se(Z, {
          "aria-label": "Carousel Pagination"
        }), ae = Z.children, Qe(ae, function(T, V) {
          se(T, {
            "data-nav": V,
            tabindex: "-1",
            "aria-label": st + (V + 1),
            "aria-controls": D
          });
        });
      else {
        for (var i = "", n = Lt ? "" : 'style="display:none"', r = 0; r < g; r++)
          i += '<button type="button" data-nav="' + r + '" tabindex="-1" aria-controls="' + D + '" ' + n + ' aria-label="' + st + (r + 1) + '"></button>';
        i = '<div class="tns-nav" aria-label="Carousel Pagination">' + i + "</div>", G.insertAdjacentHTML(Ki(t.navPosition), i), Z = G.querySelector(".tns-nav"), ae = Z.children;
      }
      if (Bi(), j) {
        var u = j.substring(0, j.length - 18).toLowerCase(), h = "transition: all " + ce / 1e3 + "s";
        u && (h = "-" + u + "-" + h), De(S, "[aria-controls^=" + D + "-item]", h, Ce(S));
      }
      se(ae[le], {
        "aria-label": st + (le + 1) + qi
      }), Ie(ae[le], "tabindex"), k(ae[le], Gt), R(Z, ki);
    }
    jt && (!z && (!C || !x) && (G.insertAdjacentHTML(Ki(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + D + '">' + Re[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + D + '">' + Re[1] + "</button></div>"), z = G.querySelector(".tns-controls")), (!C || !x) && (C = z.children[0], x = z.children[1]), t.controlsContainer && se(z, {
      "aria-label": "Carousel Navigation",
      tabindex: "0"
    }), (t.controlsContainer || t.prevButton && t.nextButton) && se([C, x], {
      "aria-controls": D,
      tabindex: "-1"
    }), (t.controlsContainer || t.prevButton && t.nextButton) && (se(C, {
      "data-controls": "prev"
    }), se(x, {
      "data-controls": "next"
    })), Nt = Gn(C), Ot = Gn(x), er(), z ? R(z, Et) : (R(C, Et), R(x, Et))), Qi();
  }
  function Fn() {
    if (c && Ze) {
      var e = {};
      e[Ze] = Se, R(v, e);
    }
    ke && R(v, Ct, t.preventScrollOnTouch), He && R(v, xt), Oe && R(f, St), it === "inner" ? q.on("outerResized", function() {
      qn(), q.emit("innerLoaded", J());
    }) : (L || d || p || te || !A) && R(a, {
      resize: Pn
    }), te && (it === "outer" ? q.on("innerLoaded", ui) : ie || ui()), Ii(), ie ? Yn() : de && _n(), q.on("indexChanged", Zn), it === "inner" && q.emit("innerLoaded", J()), typeof Ri == "function" && Ri(J()), yt = !0;
  }
  function Nr() {
    if (S.disabled = !0, S.ownerNode && S.ownerNode.remove(), Y(a, {
      resize: Pn
    }), Oe && Y(f, St), z && Y(z, Et), Z && Y(Z, ki), Y(v, Mt), Y(v, At), O && Y(O, {
      click: rr
    }), U && clearInterval(Bt), c && Ze) {
      var e = {};
      e[Ze] = Se, Y(v, e);
    }
    ke && Y(v, Ct), He && Y(v, xt);
    var i = [yn, Tn, Mr, Ar, En, An];
    Si.forEach(function(r, u) {
      var h = r === "container" ? G : t[r];
      if (typeof h == "object" && h) {
        var T = h.previousElementSibling ? h.previousElementSibling : !1, V = h.parentNode;
        h.outerHTML = i[u], t[r] = T ? T.nextElementSibling : V.firstElementChild;
      }
    }), Si = Ne = Qt = xi = be = A = G = B = v = Li = yn = E = g = gt = It = p = d = N = b = P = w = nt = Di = Oe = ce = mt = I = te = S = pt = H = rt = X = M = mn = ft = Oi = $e = Pe = at = wt = o = qe = Me = fe = Zt = Ae = Ve = Ri = q = Ke = D = ie = bt = $t = de = Tt = Et = ki = Mt = At = St = Ct = xt = jt = Hi = Lt = zi = pn = wn = Wi = Ut = Jt = Fi = Te = Re = z = Tn = C = x = Nt = Ot = Ee = Z = En = ae = he = je = Ue = le = lt = Gt = st = qi = U = Ni = Mn = ze = We = O = An = Fe = Rt = Bt = ne = ei = ot = ti = Je = ye = ii = Ge = ve = Vi = ke = He = null;
    for (var n in this)
      n !== "rebuild" && (this[n] = null);
    yt = !1;
  }
  function Pn(e) {
    Ye(function() {
      qn(Le(e));
    });
  }
  function qn(e) {
    if (!!yt) {
      it === "outer" && q.emit("outerResized", J(e)), It = Ln();
      var i, n = gt, r = !1;
      L && (Vn(), i = n !== gt, i && q.emit("newBreakpointStart", J(e)));
      var u, h, T = w, V = ie, $ = de, W = Oe, ct = Te, Ft = Ee, tt = ke, en = He, tn = U, dt = We, nn = Fe, rn = o;
      if (i) {
        var Ur = d, Jr = te, Gr = Re, Br = Q, fn = ze;
        if (!we)
          var ef = b, tf = N;
      }
      if (Oe = y("arrowKeys"), Te = y("controls"), Ee = y("nav"), ke = y("touch"), Q = y("center"), He = y("mouseDrag"), U = y("autoplay"), We = y("autoplayHoverPause"), Fe = y("autoplayResetOnVisibility"), i && (ie = y("disable"), d = y("fixedWidth"), ce = y("speed"), te = y("autoHeight"), Re = y("controlsText"), ze = y("autoplayText"), Ni = y("autoplayTimeout"), we || (N = y("edgePadding"), b = y("gutter"))), ni(ie), P = Nn(), (!A || p) && !ie && (Un(), A || (Gi(), r = !0)), (d || p) && (ft = ji(), fe = wt()), (i || d) && (w = y("items"), nt = y("slideBy"), h = w !== T, h && (!d && !p && (fe = wt()), Yi())), i && ie !== V && (ie ? Yn() : Rr()), $t && (i || d || p) && (de = _i(), de !== $ && (de ? (Ui(vi(Cn(0))), _n()) : (Or(), r = !0))), ni(ie || de), U || (We = Fe = !1), Oe !== W && (Oe ? R(f, St) : Y(f, St)), Te !== ct && (Te ? z ? ue(z) : (C && ue(C), x && ue(x)) : z ? oe(z) : (C && oe(C), x && oe(x))), Ee !== Ft && (Ee ? (ue(Z), Bi()) : oe(Z)), ke !== tt && (ke ? R(v, Ct, t.preventScrollOnTouch) : Y(v, Ct)), He !== en && (He ? R(v, xt) : Y(v, xt)), U !== tn && (U ? (O && ue(O), !ne && !ot && mi()) : (O && oe(O), ne && Wt())), We !== dt && (We ? R(v, Mt) : Y(v, Mt)), Fe !== nn && (Fe ? R(f, At) : Y(f, At)), i) {
        if ((d !== Ur || Q !== Br) && (r = !0), te !== Jr && (te || (B.style.height = "")), Te && Re !== Gr && (C.innerHTML = Re[0], x.innerHTML = Re[1]), O && ze !== fn) {
          var an = U ? 1 : 0, ln = O.innerHTML, dr = ln.length - fn[an].length;
          ln.substring(dr) === fn[an] && (O.innerHTML = ln.substring(0, dr) + ze[an]);
        }
      } else
        Q && (d || p) && (r = !0);
      if ((h || d && !p) && (he = cr(), Bi()), u = o !== rn, u ? (q.emit("indexChanged", J()), r = !0) : h ? u || Zn() : (d || p) && (Ii(), $i(), Qn()), h && !c && Fr(), !ie && !de) {
        if (i && !we && ((N !== tf || b !== ef) && (B.style.cssText = fi(N, b, d, ce, te)), A)) {
          c && (v.style.width = ai(d, b, w));
          var nf = li(d, b, w) + si(b);
          of(S, Ce(S) - 1), De(S, "#" + D + " > .tns-item", nf, Ce(S));
        }
        te && ui(), r && (Ht(), qe = o);
      }
      i && q.emit("newBreakpointEnd", J(e));
    }
  }
  function _i() {
    if (!d && !p) {
      var e = Q ? w - (w - 1) / 2 : w;
      return g <= e;
    }
    var i = d ? (d + b) * g : H[g], n = N ? P + N * 2 : P + b;
    return Q && (n -= d ? (P - d) / 2 : (P - (H[o + 1] - H[o] - b)) / 2), i <= n;
  }
  function Vn() {
    gt = 0;
    for (var e in L)
      e = parseInt(e), It >= e && (gt = e);
  }
  var Yi = function() {
    return I ? c ? function() {
      var e = Me, i = fe;
      e += nt, i -= nt, N ? (e += 1, i -= 1) : d && (P + b) % (d + b) && (i -= 1), X && (o > i ? o -= g : o < e && (o += g));
    } : function() {
      if (o > fe)
        for (; o >= Me + g; )
          o -= g;
      else if (o < Me)
        for (; o <= fe - g; )
          o += g;
    } : function() {
      o = Math.max(Me, Math.min(fe, o));
    };
  }();
  function Qi() {
    !U && O && oe(O), !Ee && Z && oe(Z), Te || (z ? oe(z) : (C && oe(C), x && oe(x)));
  }
  function Kn() {
    U && O && ue(O), Ee && Z && ue(Z), Te && (z ? ue(z) : (C && ue(C), x && ue(x)));
  }
  function _n() {
    if (!Tt) {
      if (N && (B.style.margin = "0px"), X)
        for (var e = "tns-transparent", i = X; i--; )
          c && k(E[i], e), k(E[M - i - 1], e);
      Qi(), Tt = !0;
    }
  }
  function Or() {
    if (!!Tt) {
      if (N && we && (B.style.margin = ""), X)
        for (var e = "tns-transparent", i = X; i--; )
          c && re(E[i], e), re(E[M - i - 1], e);
      Kn(), Tt = !1;
    }
  }
  function Yn() {
    if (!bt) {
      if (S.disabled = !0, v.className = v.className.replace(Ke.substring(1), ""), Ie(v, ["style"]), I)
        for (var e = X; e--; )
          c && oe(E[e]), oe(E[M - e - 1]);
      if ((!A || !c) && Ie(B, ["style"]), !c)
        for (var i = o, n = o + g; i < n; i++) {
          var r = E[i];
          Ie(r, ["style"]), re(r, Ne), re(r, be);
        }
      Qi(), bt = !0;
    }
  }
  function Rr() {
    if (!!bt) {
      if (S.disabled = !1, v.className += Ke, Ht(), I)
        for (var e = X; e--; )
          c && ue(E[e]), ue(E[M - e - 1]);
      if (!c)
        for (var i = o, n = o + g; i < n; i++) {
          var r = E[i], u = i < o + w ? Ne : be;
          r.style.left = (i - o) * 100 / w + "%", k(r, u);
        }
      Kn(), bt = !1;
    }
  }
  function Qn() {
    var e = In();
    Pi.innerHTML !== e && (Pi.innerHTML = e);
  }
  function In() {
    var e = oi(), i = e[0] + 1, n = e[1] + 1;
    return i === n ? i + "" : i + " to " + n;
  }
  function oi(e) {
    e == null && (e = vi());
    var i = o, n, r, u;
    if (Q || N ? (p || d) && (r = -(parseFloat(e) + N), u = r + P + N * 2) : p && (r = H[o], u = r + P), p)
      H.forEach(function($, W) {
        W < M && ((Q || N) && $ <= r + 0.5 && (i = W), u - $ >= 0.5 && (n = W));
      });
    else {
      if (d) {
        var h = d + b;
        Q || N ? (i = Math.floor(r / h), n = Math.ceil(u / h - 1)) : n = i + Math.ceil(P / h) - 1;
      } else if (Q || N) {
        var T = w - 1;
        if (Q ? (i -= T / 2, n = o + T / 2) : n = o + T, N) {
          var V = N * w / P;
          i -= V, n += V;
        }
        i = Math.floor(i), n = Math.ceil(n);
      } else
        n = i + w - 1;
      i = Math.max(i, 0), n = Math.min(n, M - 1);
    }
    return [i, n];
  }
  function Ii() {
    if (pt && !ie) {
      var e = oi();
      e.push(Er), Zi.apply(null, e).forEach(function(i) {
        if (!ht(i, Ut)) {
          var n = {};
          n[Ze] = function(u) {
            u.stopPropagation();
          }, R(i, n), R(i, Jt), i.src = bi(i, "data-src");
          var r = bi(i, "data-srcset");
          r && (i.srcset = r), k(i, "loading");
        }
      });
    }
  }
  function kr(e) {
    Xn(ut(e));
  }
  function Hr(e) {
    zr(ut(e));
  }
  function Xn(e) {
    k(e, "loaded"), Xi(e);
  }
  function zr(e) {
    k(e, "failed"), Xi(e);
  }
  function Xi(e) {
    k(e, Ut), re(e, "loading"), Y(e, Jt);
  }
  function Zi(e, i, n) {
    var r = [];
    for (n || (n = "img"); e <= i; )
      Qe(E[e].querySelectorAll(n), function(u) {
        r.push(u);
      }), e++;
    return r;
  }
  function ui() {
    var e = Zi.apply(null, oi());
    Ye(function() {
      ci(e, jn);
    });
  }
  function ci(e, i) {
    if (Fi || (e.forEach(function(n, r) {
      !pt && n.complete && Xi(n), ht(n, Ut) && e.splice(r, 1);
    }), !e.length))
      return i();
    Ye(function() {
      ci(e, i);
    });
  }
  function Zn() {
    Ii(), $i(), Qn(), er(), Pr();
  }
  function Wr() {
    c && te && (ee.style[j] = ce / 1e3 + "s");
  }
  function $n(e, i) {
    for (var n = [], r = e, u = Math.min(e + i, M); r < u; r++)
      n.push(E[r].offsetHeight);
    return Math.max.apply(null, n);
  }
  function jn() {
    var e = te ? $n(o, w) : $n(X, g), i = ee || B;
    i.style.height !== e && (i.style.height = e + "px");
  }
  function Un() {
    H = [0];
    var e = A ? "left" : "top", i = A ? "right" : "bottom", n = E[0].getBoundingClientRect()[e];
    Qe(E, function(r, u) {
      u && H.push(r.getBoundingClientRect()[e] - n), u === M - 1 && H.push(r.getBoundingClientRect()[i] - n);
    });
  }
  function $i() {
    var e = oi(), i = e[0], n = e[1];
    Qe(E, function(r, u) {
      u >= i && u <= n ? Pt(r, "aria-hidden") && (Ie(r, ["aria-hidden", "tabindex"]), k(r, Wi)) : Pt(r, "aria-hidden") || (se(r, {
        "aria-hidden": "true",
        tabindex: "-1"
      }), re(r, Wi));
    });
  }
  function Fr() {
    for (var e = o + Math.min(g, w), i = M; i--; ) {
      var n = E[i];
      i >= o && i < e ? (k(n, "tns-moving"), n.style.left = (i - o) * 100 / w + "%", k(n, Ne), re(n, be)) : n.style.left && (n.style.left = "", k(n, be), re(n, Ne)), re(n, Qt);
    }
    setTimeout(function() {
      Qe(E, function(r) {
        re(r, "tns-moving");
      });
    }, 300);
  }
  function Pr() {
    if (Ee && (le = Ue >= 0 ? Ue : xn(), Ue = -1, le !== lt)) {
      var e = ae[lt], i = ae[le];
      se(e, {
        tabindex: "-1",
        "aria-label": st + (lt + 1)
      }), re(e, Gt), se(i, {
        "aria-label": st + (le + 1) + qi
      }), Ie(i, "tabindex"), k(i, Gt), lt = le;
    }
  }
  function Jn(e) {
    return e.nodeName.toLowerCase();
  }
  function Gn(e) {
    return Jn(e) === "button";
  }
  function Bn(e) {
    return e.getAttribute("aria-disabled") === "true";
  }
  function di(e, i, n) {
    e ? i.disabled = n : i.setAttribute("aria-disabled", n.toString());
  }
  function er() {
    if (!(!Te || mt || I)) {
      var e = Nt ? C.disabled : Bn(C), i = Ot ? x.disabled : Bn(x), n = o <= Me, r = !mt && o >= fe;
      n && !e && di(Nt, C, !0), !n && e && di(Nt, C, !1), r && !i && di(Ot, x, !0), !r && i && di(Ot, x, !1);
    }
  }
  function hi(e, i) {
    j && (e.style[j] = i);
  }
  function qr() {
    return d ? (d + b) * M : H[M];
  }
  function kt(e) {
    e == null && (e = o);
    var i = N ? b : 0;
    return p ? (P - i - (H[e + 1] - H[e] - b)) / 2 : d ? (P - d) / 2 : (w - 1) / 2;
  }
  function ji() {
    var e = N ? b : 0, i = P + e - qr();
    return Q && !I && (i = d ? -(d + b) * (M - 1) - kt() : kt(M - 1) - H[M - 1]), i > 0 && (i = 0), i;
  }
  function vi(e) {
    e == null && (e = o);
    var i;
    if (A && !p)
      if (d)
        i = -(d + b) * e, Q && (i += kt());
      else {
        var n = Xe ? M : w;
        Q && (e -= kt()), i = -e * 100 / n;
      }
    else
      i = -H[e], Q && p && (i += kt());
    return mn && (i = Math.max(i, ft)), i += A && !p && !d ? "%" : "px", i;
  }
  function Ht(e) {
    hi(v, "0s"), Ui(e);
  }
  function Ui(e) {
    e == null && (e = vi()), v.style[$e] = Pe + e + at;
  }
  function tr(e, i, n, r) {
    var u = e + w;
    I || (u = Math.min(u, M));
    for (var h = e; h < u; h++) {
      var T = E[h];
      r || (T.style.left = (h - o) * 100 / w + "%"), xi && _t && (T.style[_t] = T.style[Ai] = xi * (h - e) / 1e3 + "s"), re(T, i), k(T, n), r && rt.push(T);
    }
  }
  var Vr = function() {
    return c ? function() {
      hi(v, ""), j || !ce ? (Ui(), (!ce || !gr(v)) && Se()) : gf(v, $e, Pe, at, vi(), ce, Se), A || Gi();
    } : function() {
      rt = [];
      var e = {};
      e[Ze] = e[cn] = Se, Y(E[qe], e), R(E[o], e), tr(qe, Ne, Qt, !0), tr(o, be, Ne), (!Ze || !cn || !ce || !gr(v)) && Se();
    };
  }();
  function Ji(e, i) {
    Oi && Yi(), (o !== qe || i) && (q.emit("indexChanged", J()), q.emit("transitionStart", J()), te && ui(), ne && e && ["click", "keydown"].indexOf(e.type) >= 0 && Wt(), Ve = !0, Vr());
  }
  function ir(e) {
    return e.toLowerCase().replace(/-/g, "");
  }
  function Se(e) {
    if (c || Ve) {
      if (q.emit("transitionEnd", J(e)), !c && rt.length > 0)
        for (var i = 0; i < rt.length; i++) {
          var n = rt[i];
          n.style.left = "", Ai && _t && (n.style[Ai] = "", n.style[_t] = ""), re(n, Qt), k(n, be);
        }
      if (!e || !c && e.target.parentNode === v || e.target === v && ir(e.propertyName) === ir($e)) {
        if (!Oi) {
          var r = o;
          Yi(), o !== r && (q.emit("indexChanged", J()), Ht());
        }
        it === "inner" && q.emit("innerLoaded", J()), Ve = !1, qe = o;
      }
    }
  }
  function zt(e, i) {
    if (!de)
      if (e === "prev")
        _e(i, -1);
      else if (e === "next")
        _e(i, 1);
      else {
        if (Ve) {
          if (Xt)
            return;
          Se();
        }
        var n = ri(), r = 0;
        if (e === "first" ? r = -n : e === "last" ? r = c ? g - w - n : g - 1 - n : (typeof e != "number" && (e = parseInt(e)), isNaN(e) || (i || (e = Math.max(0, Math.min(g - 1, e))), r = e - n)), !c && r && Math.abs(r) < w) {
          var u = r > 0 ? 1 : -1;
          r += o + r - g >= Me ? g * u : g * 2 * u * -1;
        }
        o += r, c && I && (o < Me && (o += g), o > fe && (o -= g)), ri(o) !== ri(qe) && Ji(i);
      }
  }
  function _e(e, i) {
    if (Ve) {
      if (Xt)
        return;
      Se();
    }
    var n;
    if (!i) {
      e = Le(e);
      for (var r = ut(e); r !== z && [C, x].indexOf(r) < 0; )
        r = r.parentNode;
      var u = [C, x].indexOf(r);
      u >= 0 && (n = !0, i = u === 0 ? -1 : 1);
    }
    if (mt) {
      if (o === Me && i === -1) {
        zt("last", e);
        return;
      } else if (o === fe && i === 1) {
        zt("first", e);
        return;
      }
    }
    i && (o += nt * i, p && (o = Math.floor(o)), Ji(n || e && e.type === "keydown" ? e : null));
  }
  function Kr(e) {
    if (Ve) {
      if (Xt)
        return;
      Se();
    }
    e = Le(e);
    for (var i = ut(e), n; i !== Z && !Pt(i, "data-nav"); )
      i = i.parentNode;
    if (Pt(i, "data-nav")) {
      var n = Ue = Number(bi(i, "data-nav")), r = d || p ? n * g / he : n * w, u = Lt ? n : Math.min(Math.ceil(r), g - 1);
      zt(u, e), le === n && (ne && Wt(), Ue = -1);
    }
  }
  function gi() {
    Bt = setInterval(function() {
      _e(null, Mn);
    }, Ni), ne = !0;
  }
  function yi() {
    clearInterval(Bt), ne = !1;
  }
  function nr(e, i) {
    se(O, {
      "data-action": e
    }), O.innerHTML = Rt[0] + e + Rt[1] + i;
  }
  function mi() {
    gi(), O && nr("stop", ze[1]);
  }
  function Wt() {
    yi(), O && nr("start", ze[0]);
  }
  function _r() {
    U && !ne && (mi(), ot = !1);
  }
  function Yr() {
    ne && (Wt(), ot = !0);
  }
  function rr() {
    ne ? (Wt(), ot = !0) : (mi(), ot = !1);
  }
  function Qr() {
    f.hidden ? ne && (yi(), ti = !0) : ti && (gi(), ti = !1);
  }
  function Ir() {
    ne && (yi(), ei = !0);
  }
  function Xr() {
    ei && (gi(), ei = !1);
  }
  function Zr(e) {
    e = Le(e);
    var i = [l.LEFT, l.RIGHT].indexOf(e.keyCode);
    i >= 0 && _e(e, i === 0 ? -1 : 1);
  }
  function $r(e) {
    e = Le(e);
    var i = [l.LEFT, l.RIGHT].indexOf(e.keyCode);
    i >= 0 && (i === 0 ? C.disabled || _e(e, -1) : x.disabled || _e(e, 1));
  }
  function fr(e) {
    e.focus();
  }
  function jr(e) {
    e = Le(e);
    var i = f.activeElement;
    if (!!Pt(i, "data-nav")) {
      var n = [l.LEFT, l.RIGHT, l.ENTER, l.SPACE].indexOf(e.keyCode), r = Number(bi(i, "data-nav"));
      n >= 0 && (n === 0 ? r > 0 && fr(ae[r - 1]) : n === 1 ? r < he - 1 && fr(ae[r + 1]) : (Ue = r, zt(r, e)));
    }
  }
  function Le(e) {
    return e = e || a.event, et(e) ? e.changedTouches[0] : e;
  }
  function ut(e) {
    return e.target || a.event.srcElement;
  }
  function et(e) {
    return e.type.indexOf("touch") >= 0;
  }
  function ar(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
  }
  function lr() {
    return cf(uf(ye.y - Je.y, ye.x - Je.x), Zt) === t.axis;
  }
  function sr(e) {
    if (Ve) {
      if (Xt)
        return;
      Se();
    }
    U && ne && yi(), Ge = !0, ve && (sn(ve), ve = null);
    var i = Le(e);
    q.emit(et(e) ? "touchStart" : "dragStart", J(e)), !et(e) && ["img", "a"].indexOf(Jn(ut(e))) >= 0 && ar(e), ye.x = Je.x = i.clientX, ye.y = Je.y = i.clientY, c && (ii = parseFloat(v.style[$e].replace(Pe, "")), hi(v, "0s"));
  }
  function or(e) {
    if (Ge) {
      var i = Le(e);
      ye.x = i.clientX, ye.y = i.clientY, c ? ve || (ve = Ye(function() {
        ur(e);
      })) : (Ae === "?" && (Ae = lr()), Ae && (Dt = !0)), (typeof e.cancelable != "boolean" || e.cancelable) && Dt && e.preventDefault();
    }
  }
  function ur(e) {
    if (!Ae) {
      Ge = !1;
      return;
    }
    if (sn(ve), Ge && (ve = Ye(function() {
      ur(e);
    })), Ae === "?" && (Ae = lr()), Ae) {
      !Dt && et(e) && (Dt = !0);
      try {
        e.type && q.emit(et(e) ? "touchMove" : "dragMove", J(e));
      } catch {
      }
      var i = ii, n = Vi(ye, Je);
      if (!A || d || p)
        i += n, i += "px";
      else {
        var r = Xe ? n * w * 100 / ((P + b) * M) : n * 100 / (P + b);
        i += r, i += "%";
      }
      v.style[$e] = Pe + i + at;
    }
  }
  function pi(e) {
    if (Ge) {
      ve && (sn(ve), ve = null), c && hi(v, ""), Ge = !1;
      var i = Le(e);
      ye.x = i.clientX, ye.y = i.clientY;
      var n = Vi(ye, Je);
      if (Math.abs(n)) {
        if (!et(e)) {
          var r = ut(e);
          R(r, {
            click: function u(h) {
              ar(h), Y(r, {
                click: u
              });
            }
          });
        }
        c ? ve = Ye(function() {
          if (A && !p) {
            var u = -n * w / (P + b);
            u = n > 0 ? Math.floor(u) : Math.ceil(u), o += u;
          } else {
            var h = -(ii + n);
            if (h <= 0)
              o = Me;
            else if (h >= H[M - 1])
              o = fe;
            else
              for (var T = 0; T < M && h >= H[T]; )
                o = T, h > H[T] && n < 0 && (o += 1), T++;
          }
          Ji(e, n), q.emit(et(e) ? "touchEnd" : "dragEnd", J(e));
        }) : Ae && _e(e, n > 0 ? -1 : 1);
      }
    }
    t.preventScrollOnTouch === "auto" && (Dt = !1), Zt && (Ae = "?"), U && !ne && gi();
  }
  function Gi() {
    var e = ee || B;
    e.style.height = H[o + w] - H[o] + "px";
  }
  function cr() {
    var e = d ? (d + b) * g / P : g / w;
    return Math.min(Math.ceil(e), g);
  }
  function Bi() {
    if (!(!Ee || Lt) && he !== je) {
      var e = je, i = he, n = ue;
      for (je > he && (e = he, i = je, n = oe); e < i; )
        n(ae[e]), e++;
      je = he;
    }
  }
  function J(e) {
    return {
      container: v,
      slideItems: E,
      navContainer: Z,
      navItems: ae,
      controlsContainer: z,
      hasControls: jt,
      prevButton: C,
      nextButton: x,
      items: w,
      slideBy: nt,
      cloneCount: X,
      slideCount: g,
      slideCountNew: M,
      index: o,
      indexCached: qe,
      displayIndex: Sn(),
      navCurrentIndex: le,
      navCurrentIndexCached: lt,
      pages: he,
      pagesCached: je,
      sheet: S,
      isOn: yt,
      event: e || {}
    };
  }
  return {
    version: "2.9.4",
    getInfo: J,
    events: q,
    goTo: zt,
    play: _r,
    pause: Yr,
    isOn: yt,
    updateSliderHeight: jn,
    refresh: kn,
    destroy: Nr,
    rebuild: function() {
      return Tr(on(t, hn));
    }
  };
}, yf = mr.tns = Tr;
const mf = ({ slideCount: t, settings: f }) => ({
  slideCount: t,
  carousel: null,
  settings: f || {},
  isPaused: !1,
  timePerSlide: null,
  currentSlide: 1,
  switchingSlide: !1,
  dotsCount: null,
  activeDot: 1,
  init() {
    var a;
    this.carousel = yf({
      container: this.$el.querySelector(".carousel__slidesHolder"),
      mouseDrag: !0,
      controls: !1,
      nav: !1,
      autoplayButtonOutput: !1,
      ...this.settings
    }), this.carousel.events.on("indexChanged", (l) => {
      this.currentSlide !== l.displayIndex && (this.switchingSlide = !0, this.$nextTick(() => {
        this.switchingSlide = !1;
      })), this.currentSlide = l.displayIndex, this.activeDot = Math.ceil(l.displayIndex / l.slideBy);
    }), this.carousel.events.on("transitionEnd", (l) => {
      this.isPaused && this.pause();
    }), this.carousel.events.on("newBreakpointEnd", (l) => {
      this.setDotsCount(l), this.activeDot = Math.ceil(l.displayIndex / l.slideBy);
    }), this.setDotsCount(this.carousel.getInfo()), this.timePerSlide = ((a = this.settings) == null ? void 0 : a.autoplayTimeout) || 5e3;
  },
  setDotsCount(a) {
    this.dotsCount = Math.ceil(a.slideCount / a.slideBy);
  },
  prev() {
    this.goTo("prev");
  },
  next() {
    this.goTo("next");
  },
  goTo(a) {
    var l;
    this.isPaused || (this.carousel.pause(), this.carousel.play()), a !== "next" && a !== "prev" && ((l = this.settings) == null ? void 0 : l.slideBy) === "page" && (a = a * this.carousel.getInfo().slideBy), this.carousel.goTo(a);
  },
  toggleAutoplay() {
    this.isPaused ? this.play() : this.pause();
  },
  pause() {
    this.isPaused = !0, this.carousel.pause();
  },
  play() {
    this.isPaused = !1, this.carousel.play();
  },
  forceTwoDigits(a) {
    return a > 9 ? a : `0${a}`;
  }
});
document.addEventListener("alpine:init", () => {
  window.Alpine.data("tinySlider", mf);
});
