var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
var wt = window, Ye = wt.requestAnimationFrame || wt.webkitRequestAnimationFrame || wt.mozRequestAnimationFrame || wt.msRequestAnimationFrame || function(i) {
  return setTimeout(i, 16);
}, hr = window, sn = hr.cancelAnimationFrame || hr.mozCancelAnimationFrame || function(i) {
  clearTimeout(i);
};
function on() {
  for (var i, f, a, l = arguments[0] || {}, s = 1, m = arguments.length; s < m; s++)
    if ((i = arguments[s]) !== null)
      for (f in i)
        a = i[f], l !== a && a !== void 0 && (l[f] = a);
  return l;
}
function me(i) {
  return ["true", "false"].indexOf(i) >= 0 ? JSON.parse(i) : i;
}
function pe(i, f, a, l) {
  if (l)
    try {
      i.setItem(f, a);
    } catch {
    }
  return a;
}
function rf() {
  var i = window.tnsId;
  return window.tnsId = i ? i + 1 : 1, "tns" + window.tnsId;
}
function Tt() {
  var i = document, f = i.body;
  return f || (f = i.createElement("body"), f.fake = !0), f;
}
var Vi = document.documentElement;
function Et(i) {
  var f = "";
  return i.fake && (f = Vi.style.overflow, i.style.background = "", i.style.overflow = Vi.style.overflow = "hidden", Vi.appendChild(i)), f;
}
function Mt(i, f) {
  i.fake && (i.remove(), Vi.style.overflow = f, Vi.offsetHeight);
}
function ff() {
  var i = document, f = Tt(), a = Et(f), l = i.createElement("div"), s = !1;
  f.appendChild(l);
  try {
    for (var m = "(10px * 10)", K = ["calc" + m, "-moz-calc" + m, "-webkit-calc" + m], F, _ = 0; _ < 3; _++)
      if (F = K[_], l.style.width = F, l.offsetWidth === 100) {
        s = F.replace(m, "");
        break;
      }
  } catch {
  }
  return f.fake ? Mt(f, a) : l.remove(), s;
}
function af() {
  var i = document, f = Tt(), a = Et(f), l = i.createElement("div"), s = i.createElement("div"), m = "", K = 70, F = 3, _ = !1;
  l.className = "tns-t-subp2", s.className = "tns-t-ct";
  for (var ge = 0; ge < K; ge++)
    m += "<div></div>";
  return s.innerHTML = m, l.appendChild(s), f.appendChild(l), _ = Math.abs(l.getBoundingClientRect().left - s.children[K - F].getBoundingClientRect().left) < 2, f.fake ? Mt(f, a) : l.remove(), _;
}
function lf() {
  if (window.matchMedia || window.msMatchMedia)
    return !0;
  var i = document, f = Tt(), a = Et(f), l = i.createElement("div"), s = i.createElement("style"), m = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", K;
  return s.type = "text/css", l.className = "tns-mq-test", f.appendChild(s), f.appendChild(l), s.styleSheet ? s.styleSheet.cssText = m : s.appendChild(i.createTextNode(m)), K = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, f.fake ? Mt(f, a) : l.remove(), K === "absolute";
}
function sf(i, f) {
  var a = document.createElement("style");
  return i && a.setAttribute("media", i), f && a.setAttribute("nonce", f), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet;
}
function De(i, f, a, l) {
  "insertRule" in i ? i.insertRule(f + "{" + a + "}", l) : i.addRule(f, a, l);
}
function of(i, f) {
  "deleteRule" in i ? i.deleteRule(f) : i.removeRule(f);
}
function Ce(i) {
  var f = "insertRule" in i ? i.cssRules : i.rules;
  return f.length;
}
function uf(i, f) {
  return Math.atan2(i, f) * (180 / Math.PI);
}
function cf(i, f) {
  var a = !1, l = Math.abs(90 - Math.abs(i));
  return l >= 90 - f ? a = "horizontal" : l <= f && (a = "vertical"), a;
}
function Ie(i, f, a) {
  for (var l = 0, s = i.length; l < s; l++)
    f.call(a, i[l], l);
}
var un = "classList" in document.createElement("_"), hi = un ? function(i, f) {
  return i.classList.contains(f);
} : function(i, f) {
  return i.className.indexOf(f) >= 0;
}, k = un ? function(i, f) {
  hi(i, f) || i.classList.add(f);
} : function(i, f) {
  hi(i, f) || (i.className += " " + f);
}, re = un ? function(i, f) {
  hi(i, f) && i.classList.remove(f);
} : function(i, f) {
  hi(i, f) && (i.className = i.className.replace(f, ""));
};
function Pi(i, f) {
  return i.hasAttribute(f);
}
function bt(i, f) {
  return i.getAttribute(f);
}
function pr(i) {
  return typeof i.item < "u";
}
function se(i, f) {
  if (i = pr(i) || i instanceof Array ? i : [i], Object.prototype.toString.call(f) === "[object Object]")
    for (var a = i.length; a--; )
      for (var l in f)
        i[a].setAttribute(l, f[l]);
}
function Qe(i, f) {
  i = pr(i) || i instanceof Array ? i : [i], f = f instanceof Array ? f : [f];
  for (var a = f.length, l = i.length; l--; )
    for (var s = a; s--; )
      i[l].removeAttribute(f[s]);
}
function vr(i) {
  for (var f = [], a = 0, l = i.length; a < l; a++)
    f.push(i[a]);
  return f;
}
function oe(i, f) {
  i.style.display !== "none" && (i.style.display = "none");
}
function ue(i, f) {
  i.style.display === "none" && (i.style.display = "");
}
function gr(i) {
  return window.getComputedStyle(i).display !== "none";
}
function qi(i) {
  if (typeof i == "string") {
    var f = [i], a = i.charAt(0).toUpperCase() + i.substr(1), l = ["Webkit", "Moz", "ms", "O"];
    l.forEach(function(F) {
      (F !== "ms" || i === "transform") && f.push(F + a);
    }), i = f;
  }
  var s = document.createElement("fakeelement");
  i.length;
  for (var m = 0; m < i.length; m++) {
    var K = i[m];
    if (s.style[K] !== void 0)
      return K;
  }
  return !1;
}
function df(i) {
  if (!i || !window.getComputedStyle)
    return !1;
  var f = document, a = Tt(), l = Et(a), s = f.createElement("p"), m, K = i.length > 9 ? "-" + i.slice(0, -9).toLowerCase() + "-" : "";
  return K += "transform", a.insertBefore(s, null), s.style[i] = "translate3d(1px,1px,1px)", m = window.getComputedStyle(s).getPropertyValue(K), a.fake ? Mt(a, l) : s.remove(), m !== void 0 && m.length > 0 && m !== "none";
}
function yr(i, f) {
  var a = !1;
  return /^Webkit/.test(i) ? a = "webkit" + f + "End" : /^O/.test(i) ? a = "o" + f + "End" : i && (a = f.toLowerCase() + "end"), a;
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
function R(i, f, a) {
  for (var l in f) {
    var s = ["touchstart", "touchmove"].indexOf(l) >= 0 && !a ? br : !1;
    i.addEventListener(l, f[l], s);
  }
}
function Y(i, f) {
  for (var a in f) {
    var l = ["touchstart", "touchmove"].indexOf(a) >= 0 ? br : !1;
    i.removeEventListener(a, f[a], l);
  }
}
function vf() {
  return {
    topics: {},
    on: function(i, f) {
      this.topics[i] = this.topics[i] || [], this.topics[i].push(f);
    },
    off: function(i, f) {
      if (this.topics[i]) {
        for (var a = 0; a < this.topics[i].length; a++)
          if (this.topics[i][a] === f) {
            this.topics[i].splice(a, 1);
            break;
          }
      }
    },
    emit: function(i, f) {
      f.type = i, this.topics[i] && this.topics[i].forEach(function(a) {
        a(f, i);
      });
    }
  };
}
function gf(i, f, a, l, ge, m, K) {
  var F = Math.min(m, 10), _ = ge.indexOf("%") >= 0 ? "%" : "px", ge = ge.replace(_, ""), we = Number(i.style[f].replace(a, "").replace(l, "").replace(_, "")), $e = (ge - we) / m * F;
  setTimeout(Ki, F);
  function Ki() {
    m -= F, we += $e, i.style[f] = a + we + _ + l, m > 0 ? setTimeout(Ki, F) : K();
  }
}
Object.keys || (Object.keys = function(i) {
  var f = [];
  for (var a in i)
    Object.prototype.hasOwnProperty.call(i, a) && f.push(a);
  return f;
});
"remove" in Element.prototype || (Element.prototype.remove = function() {
  this.parentNode && this.parentNode.removeChild(this);
});
var Tr = function(i) {
  i = on({
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
  }, i || {});
  var f = document, a = window, l = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  }, s = {}, m = i.useLocalStorage;
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
  var _ = s.tC ? me(s.tC) : pe(s, "tC", ff(), m), ge = s.tPL ? me(s.tPL) : pe(s, "tPL", af(), m), we = s.tMQ ? me(s.tMQ) : pe(s, "tMQ", lf(), m), $e = s.tTf ? me(s.tTf) : pe(s, "tTf", qi("transform"), m), Ki = s.t3D ? me(s.t3D) : pe(s, "t3D", df($e), m), j = s.tTDu ? me(s.tTDu) : pe(s, "tTDu", qi("transitionDuration"), m), _i = s.tTDe ? me(s.tTDe) : pe(s, "tTDe", qi("transitionDelay"), m), Yi = s.tADu ? me(s.tADu) : pe(s, "tADu", qi("animationDuration"), m), At = s.tADe ? me(s.tADe) : pe(s, "tADe", qi("animationDelay"), m), Xe = s.tTE ? me(s.tTE) : pe(s, "tTE", yr(j, "Transition"), m), cn = s.tAE ? me(s.tAE) : pe(s, "tAE", yr(Yi, "Animation"), m), dn = a.console && typeof a.console.warn == "function", St = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], hn = {};
  if (St.forEach(function(e) {
    if (typeof i[e] == "string") {
      var t = i[e], n = f.querySelector(t);
      if (hn[e] = t, n && n.nodeName)
        i[e] = n;
      else {
        dn && console.warn("Can't find", i[e]);
        return;
      }
    }
  }), i.container.children.length < 1) {
    dn && console.warn("No slides found in", i.container);
    return;
  }
  var L = i.responsive, ti = i.nested, c = i.mode === "carousel";
  if (L) {
    0 in L && (i = on(i, L[0]), delete L[0]);
    var Ct = {};
    for (var vn in L) {
      var vi = L[vn];
      vi = typeof vi == "number" ? {
        items: vi
      } : vi, Ct[vn] = vi;
    }
    L = Ct, Ct = null;
  }
  function gn(e) {
    for (var t in e)
      c || (t === "slideBy" && (e[t] = "page"), t === "edgePadding" && (e[t] = !1), t === "autoHeight" && (e[t] = !1)), t === "responsive" && gn(e[t]);
  }
  if (c || gn(i), !c) {
    i.axis = "horizontal", i.slideBy = "page", i.edgePadding = !1;
    var Ne = i.animateIn, Ii = i.animateOut, xt = i.animateDelay, be = i.animateNormal;
  }
  var A = i.axis === "horizontal", G = f.createElement("div"), B = f.createElement("div"), ee, v = i.container, Lt = v.parentNode, yn = v.outerHTML, E = v.children, g = E.length, gi, Qi = Ln(), yi = !1;
  L && Vn(), c && (v.className += " tns-vpfix");
  var p = i.autoWidth, d = y("fixedWidth"), N = y("edgePadding"), b = y("gutter"), P = Nn(), I = y("center"), w = p ? 1 : Math.floor(y("items")), ni = y("slideBy"), Dt = i.viewportMax || i.fixedWidthViewportWidth, Oe = y("arrowKeys"), ce = y("speed"), mi = i.rewind, Q = mi ? !1 : i.loop, ie = y("autoHeight"), Te = y("controls"), Re = y("controlsText"), Ee = y("nav"), ke = y("touch"), He = y("mouseDrag"), U = y("autoplay"), Nt = y("autoplayTimeout"), ze = y("autoplayText"), We = y("autoplayHoverPause"), Fe = y("autoplayResetOnVisibility"), S = sf(null, y("nonce")), pi = i.lazyload, Er = i.lazyloadSelector, H, ri = [], $ = Q ? Cr() : 0, M = c ? g + $ * 2 : g + $, mn = !!((d || p) && !Q), fi = d ? jt() : null, Ot = !c || !Q, Ze = A ? "left" : "top", Pe = "", ai = "", wi = function() {
    return d ? function() {
      return I && !Q ? g - 1 : Math.ceil(-fi / (d + b));
    } : p ? function() {
      for (var e = 0; e < M; e++)
        if (H[e] >= -fi)
          return e;
    } : function() {
      return I && c && !Q ? g - 1 : Q || c ? Math.max(0, M - Math.ceil(w)) : M - 1;
    };
  }(), o = Cn(y("startIndex")), qe = o;
  Sn();
  var Me = 0, fe = p ? null : wi(), $i = i.preventActionWhenRunning, Xi = i.swipeAngle, Ae = Xi ? "?" : !0, Ve = !1, Rt = i.onInit, q = new vf(), Ke = " tns-slider tns-" + i.mode, D = v.id || rf(), te = y("disable"), bi = !1, Zi = i.freezable, de = Zi && !p ? _t() : !1, Ti = !1, Ei = {
    click: _e,
    keydown: Zr
  }, kt = {
    click: Kr,
    keydown: jr
  }, Mi = {
    mouseover: Qr,
    mouseout: $r
  }, Ai = {
    visibilitychange: Ir
  }, Si = {
    keydown: Xr
  }, Ci = {
    touchstart: sr,
    touchmove: or,
    touchend: pt,
    touchcancel: pt
  }, xi = {
    mousedown: sr,
    mousemove: or,
    mouseup: pt,
    mouseleave: pt
  }, ji = xe("controls"), Ht = xe("nav"), Li = p ? !0 : i.navAsThumbnails, zt = xe("autoplay"), pn = xe("touch"), wn = xe("mouseDrag"), Wt = "tns-slide-active", bn = "tns-slide-cloned", Ui = "tns-complete", Ji = {
    load: kr,
    error: Hr
  }, Ft, Pt, Di = i.preventScrollOnTouch === "force";
  if (ji)
    var z = i.controlsContainer, Tn = i.controlsContainer ? i.controlsContainer.outerHTML : "", C = i.prevButton, x = i.nextButton, Mr = i.prevButton ? i.prevButton.outerHTML : "", Ar = i.nextButton ? i.nextButton.outerHTML : "", Ni, Oi;
  if (Ht)
    var X = i.navContainer, En = i.navContainer ? i.navContainer.outerHTML : "", ae, he = p ? g : cr(), je = 0, Ue = -1, le = xn(), li = le, Gi = "tns-nav-active", si = "Carousel Page ", qt = " (Current Slide)";
  if (zt)
    var Mn = i.autoplayDirection === "forward" ? 1 : -1, O = i.autoplayButton, An = i.autoplayButton ? i.autoplayButton.outerHTML : "", Ri = ["<span class='tns-visually-hidden'>", " animation</span>"], Bi, ne, et, oi, it;
  if (pn || wn)
    var Je = {}, ye = {}, tt, Ge = !1, ve, Vt = A ? function(e, t) {
      return e.x - t.x;
    } : function(e, t) {
      return e.y - t.y;
    };
  p || nt(te || de), $e && (Ze = $e, Pe = "translate", Ki ? (Pe += A ? "3d(" : "3d(0px, ", ai = A ? ", 0px, 0px)" : ", 0px)") : (Pe += A ? "X(" : "Y(", ai = ")")), c && (v.className = v.className.replace("tns-vpfix", "")), Lr(), Dr(), kn();
  function nt(e) {
    e && (Te = Ee = ke = He = Oe = U = We = Fe = !1);
  }
  function Sn() {
    for (var e = c ? o - $ : o; e < 0; )
      e += g;
    return e % g + 1;
  }
  function Cn(e) {
    return e = e ? Math.max(0, Math.min(Q ? g - 1 : g - w, e)) : 0, c ? e + $ : e;
  }
  function rt(e) {
    for (e == null && (e = o), c && (e -= $); e < 0; )
      e += g;
    return Math.floor(e % g);
  }
  function xn() {
    var e = rt(), t;
    return t = Li ? e : d || p ? Math.ceil((e + 1) * he / g - 1) : Math.floor(e / w), !Q && c && o === fe && (t = he - 1), t;
  }
  function Sr() {
    if (p || d && !Dt)
      return g - 1;
    var e = d ? "fixedWidth" : "items", t = [];
    if ((d || i[e] < g) && t.push(i[e]), L)
      for (var n in L) {
        var r = L[n][e];
        r && (d || r < g) && t.push(r);
      }
    return t.length || t.push(0), Math.ceil(d ? Dt / Math.min.apply(null, t) : Math.max.apply(null, t));
  }
  function Cr() {
    var e = Sr(), t = c ? Math.ceil((e * 5 - g) / 2) : e * 4 - g;
    return t = Math.max(e, t), xe("edgePadding") ? t + 1 : t;
  }
  function Ln() {
    return a.innerWidth || f.documentElement.clientWidth || f.body.clientWidth;
  }
  function Kt(e) {
    return e === "top" ? "afterbegin" : "beforeend";
  }
  function Dn(e) {
    if (e != null) {
      var t = f.createElement("div"), n, r;
      return e.appendChild(t), n = t.getBoundingClientRect(), r = n.right - n.left, t.remove(), r || Dn(e.parentNode);
    }
  }
  function Nn() {
    var e = N ? N * 2 - b : 0;
    return Dn(Lt) - e;
  }
  function xe(e) {
    if (i[e])
      return !0;
    if (L) {
      for (var t in L)
        if (L[t][e])
          return !0;
    }
    return !1;
  }
  function y(e, t) {
    if (t == null && (t = Qi), e === "items" && d)
      return Math.floor((P + b) / (d + b)) || 1;
    var n = i[e];
    if (L)
      for (var r in L)
        t >= parseInt(r) && e in L[r] && (n = L[r][e]);
    return e === "slideBy" && n === "page" && (n = y("items")), !c && (e === "slideBy" || e === "items") && (n = Math.floor(n)), n;
  }
  function xr(e) {
    return _ ? _ + "(" + e * 100 + "% / " + M + ")" : e * 100 / M + "%";
  }
  function ft(e, t, n, r, u) {
    var h = "";
    if (e !== void 0) {
      var T = e;
      t && (T -= t), h = A ? "margin: 0 " + T + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + T + "px 0;";
    } else if (t && !n) {
      var V = "-" + t + "px", Z = A ? V + " 0 0" : "0 " + V + " 0";
      h = "margin: 0 " + Z + ";";
    }
    return !c && u && j && r && (h += Be(r)), h;
  }
  function at(e, t, n) {
    return e ? (e + t) * M + "px" : _ ? _ + "(" + M * 100 + "% / " + n + ")" : M * 100 / n + "%";
  }
  function lt(e, t, n) {
    var r;
    if (e)
      r = e + t + "px";
    else {
      c || (n = Math.floor(n));
      var u = c ? M : n;
      r = _ ? _ + "(100% / " + u + ")" : 100 / u + "%";
    }
    return r = "width:" + r, ti !== "inner" ? r + ";" : r + " !important;";
  }
  function st(e) {
    var t = "";
    if (e !== !1) {
      var n = A ? "padding-" : "margin-", r = A ? "right" : "bottom";
      t = n + r + ": " + e + "px;";
    }
    return t;
  }
  function On(e, t) {
    var n = e.substring(0, e.length - t).toLowerCase();
    return n && (n = "-" + n + "-"), n;
  }
  function Be(e) {
    return On(j, 18) + "transition-duration:" + e / 1e3 + "s;";
  }
  function Rn(e) {
    return On(Yi, 17) + "animation-duration:" + e / 1e3 + "s;";
  }
  function Lr() {
    var e = "tns-outer", t = "tns-inner";
    if (xe("gutter"), G.className = e, B.className = t, G.id = D + "-ow", B.id = D + "-iw", v.id === "" && (v.id = D), Ke += ge || p ? " tns-subpixel" : " tns-no-subpixel", Ke += _ ? " tns-calc" : " tns-no-calc", p && (Ke += " tns-autowidth"), Ke += " tns-" + i.axis, v.className += Ke, c ? (ee = f.createElement("div"), ee.id = D + "-mw", ee.className = "tns-ovh", G.appendChild(ee), ee.appendChild(B)) : G.appendChild(B), ie) {
      var n = ee || B;
      n.className += " tns-ah";
    }
    if (Lt.insertBefore(G, v), B.appendChild(v), Ie(E, function(W, ci) {
      k(W, "tns-item"), W.id || (W.id = D + "-item" + ci), !c && be && k(W, be), se(W, {
        "aria-hidden": "true",
        tabindex: "-1"
      });
    }), $) {
      for (var r = f.createDocumentFragment(), u = f.createDocumentFragment(), h = $; h--; ) {
        var T = h % g, V = E[T].cloneNode(!0);
        if (k(V, bn), Qe(V, "id"), u.insertBefore(V, u.firstChild), c) {
          var Z = E[g - 1 - T].cloneNode(!0);
          k(Z, bn), Qe(Z, "id"), r.appendChild(Z);
        }
      }
      v.insertBefore(r, v.firstChild), v.appendChild(u), E = v.children;
    }
  }
  function kn() {
    if (xe("autoHeight") || p || !A) {
      var e = v.querySelectorAll("img");
      Ie(e, function(t) {
        var n = t.src;
        pi || (n && n.indexOf("data:image") < 0 ? (t.src = "", R(t, Ji), k(t, "loading"), t.src = n) : $n(t));
      }), Ye(function() {
        ct(vr(e), function() {
          Ft = !0;
        });
      }), xe("autoHeight") && (e = Xt(o, Math.min(o + w - 1, M - 1))), pi ? Hn() : Ye(function() {
        ct(vr(e), Hn);
      });
    } else
      c && Hi(), Wn(), Fn();
  }
  function Hn() {
    if (p && g > 1) {
      var e = Q ? o : g - 1;
      (function t() {
        var n = E[e].getBoundingClientRect().left, r = E[e - 1].getBoundingClientRect().right;
        Math.abs(n - r) <= 1 ? zn() : setTimeout(function() {
          t();
        }, 16);
      })();
    } else
      zn();
  }
  function zn() {
    (!A || p) && (Un(), p ? (fi = jt(), Zi && (de = _t()), fe = wi(), nt(te || de)) : Gt()), c && Hi(), Wn(), Fn();
  }
  function Dr() {
    if (!c)
      for (var e = o, t = o + Math.min(g, w); e < t; e++) {
        var n = E[e];
        n.style.left = (e - o) * 100 / w + "%", k(n, Ne), re(n, be);
      }
    if (A && (ge || p ? (De(S, "#" + D + " > .tns-item", "font-size:" + a.getComputedStyle(E[0]).fontSize + ";", Ce(S)), De(S, "#" + D, "font-size:0;", Ce(S))) : c && Ie(E, function(nn, rn) {
      nn.style.marginLeft = xr(rn);
    })), we) {
      if (j) {
        var r = ee && i.autoHeight ? Be(i.speed) : "";
        De(S, "#" + D + "-mw", r, Ce(S));
      }
      r = ft(i.edgePadding, i.gutter, i.fixedWidth, i.speed, i.autoHeight), De(S, "#" + D + "-iw", r, Ce(S)), c && (r = A && !p ? "width:" + at(i.fixedWidth, i.gutter, i.items) + ";" : "", j && (r += Be(ce)), De(S, "#" + D, r, Ce(S))), r = A && !p ? lt(i.fixedWidth, i.gutter, i.items) : "", i.gutter && (r += st(i.gutter)), c || (j && (r += Be(ce)), Yi && (r += Rn(ce))), r && De(S, "#" + D + " > .tns-item", r, Ce(S));
    } else {
      Wr(), B.style.cssText = ft(N, b, d, ie), c && A && !p && (v.style.width = at(d, b, w));
      var r = A && !p ? lt(d, b, w) : "";
      b && (r += st(b)), r && De(S, "#" + D + " > .tns-item", r, Ce(S));
    }
    if (L && we)
      for (var u in L) {
        u = parseInt(u);
        var h = L[u], r = "", T = "", V = "", Z = "", W = "", ci = p ? null : y("items", u), Fi = y("fixedWidth", u), ii = y("speed", u), en = y("edgePadding", u), tn = y("autoHeight", u), di = y("gutter", u);
        j && ee && y("autoHeight", u) && "speed" in h && (T = "#" + D + "-mw{" + Be(ii) + "}"), ("edgePadding" in h || "gutter" in h) && (V = "#" + D + "-iw{" + ft(en, di, Fi, ii, tn) + "}"), c && A && !p && ("fixedWidth" in h || "items" in h || d && "gutter" in h) && (Z = "width:" + at(Fi, di, ci) + ";"), j && "speed" in h && (Z += Be(ii)), Z && (Z = "#" + D + "{" + Z + "}"), ("fixedWidth" in h || d && "gutter" in h || !c && "items" in h) && (W += lt(Fi, di, ci)), "gutter" in h && (W += st(di)), !c && "speed" in h && (j && (W += Be(ii)), Yi && (W += Rn(ii))), W && (W = "#" + D + " > .tns-item{" + W + "}"), r = T + V + Z + W, r && S.insertRule("@media (min-width: " + u / 16 + "em) {" + r + "}", S.cssRules.length);
      }
  }
  function Wn() {
    if (Zt(), G.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Qn() + "</span>  of " + g + "</div>"), Pt = G.querySelector(".tns-liveregion .current"), zt) {
      var e = U ? "stop" : "start";
      O ? se(O, {
        "data-action": e
      }) : i.autoplayButtonOutput && (G.insertAdjacentHTML(Kt(i.autoplayPosition), '<button type="button" data-action="' + e + '">' + Ri[0] + e + Ri[1] + ze[0] + "</button>"), O = G.querySelector("[data-action]")), O && R(O, {
        click: rr
      }), U && (mt(), We && R(v, Mi), Fe && R(v, Ai));
    }
    if (Ht) {
      if (X)
        se(X, {
          "aria-label": "Carousel Pagination"
        }), ae = X.children, Ie(ae, function(T, V) {
          se(T, {
            "data-nav": V,
            tabindex: "-1",
            "aria-label": si + (V + 1),
            "aria-controls": D
          });
        });
      else {
        for (var t = "", n = Li ? "" : 'style="display:none"', r = 0; r < g; r++)
          t += '<button type="button" data-nav="' + r + '" tabindex="-1" aria-controls="' + D + '" ' + n + ' aria-label="' + si + (r + 1) + '"></button>';
        t = '<div class="tns-nav" aria-label="Carousel Pagination">' + t + "</div>", G.insertAdjacentHTML(Kt(i.navPosition), t), X = G.querySelector(".tns-nav"), ae = X.children;
      }
      if (Bt(), j) {
        var u = j.substring(0, j.length - 18).toLowerCase(), h = "transition: all " + ce / 1e3 + "s";
        u && (h = "-" + u + "-" + h), De(S, "[aria-controls^=" + D + "-item]", h, Ce(S));
      }
      se(ae[le], {
        "aria-label": si + (le + 1) + qt
      }), Qe(ae[le], "tabindex"), k(ae[le], Gi), R(X, kt);
    }
    ji && (!z && (!C || !x) && (G.insertAdjacentHTML(Kt(i.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + D + '">' + Re[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + D + '">' + Re[1] + "</button></div>"), z = G.querySelector(".tns-controls")), (!C || !x) && (C = z.children[0], x = z.children[1]), i.controlsContainer && se(z, {
      "aria-label": "Carousel Navigation",
      tabindex: "0"
    }), (i.controlsContainer || i.prevButton && i.nextButton) && se([C, x], {
      "aria-controls": D,
      tabindex: "-1"
    }), (i.controlsContainer || i.prevButton && i.nextButton) && (se(C, {
      "data-controls": "prev"
    }), se(x, {
      "data-controls": "next"
    })), Ni = Gn(C), Oi = Gn(x), er(), z ? R(z, Ei) : (R(C, Ei), R(x, Ei))), It();
  }
  function Fn() {
    if (c && Xe) {
      var e = {};
      e[Xe] = Se, R(v, e);
    }
    ke && R(v, Ci, i.preventScrollOnTouch), He && R(v, xi), Oe && R(f, Si), ti === "inner" ? q.on("outerResized", function() {
      qn(), q.emit("innerLoaded", J());
    }) : (L || d || p || ie || !A) && R(a, {
      resize: Pn
    }), ie && (ti === "outer" ? q.on("innerLoaded", ut) : te || ut()), Qt(), te ? Yn() : de && _n(), q.on("indexChanged", Xn), ti === "inner" && q.emit("innerLoaded", J()), typeof Rt == "function" && Rt(J()), yi = !0;
  }
  function Nr() {
    if (S.disabled = !0, S.ownerNode && S.ownerNode.remove(), Y(a, {
      resize: Pn
    }), Oe && Y(f, Si), z && Y(z, Ei), X && Y(X, kt), Y(v, Mi), Y(v, Ai), O && Y(O, {
      click: rr
    }), U && clearInterval(Bi), c && Xe) {
      var e = {};
      e[Xe] = Se, Y(v, e);
    }
    ke && Y(v, Ci), He && Y(v, xi);
    var t = [yn, Tn, Mr, Ar, En, An];
    St.forEach(function(r, u) {
      var h = r === "container" ? G : i[r];
      if (typeof h == "object" && h) {
        var T = h.previousElementSibling ? h.previousElementSibling : !1, V = h.parentNode;
        h.outerHTML = t[u], i[r] = T ? T.nextElementSibling : V.firstElementChild;
      }
    }), St = Ne = Ii = xt = be = A = G = B = v = Lt = yn = E = g = gi = Qi = p = d = N = b = P = w = ni = Dt = Oe = ce = mi = Q = ie = S = pi = H = ri = $ = M = mn = fi = Ot = Ze = Pe = ai = wi = o = qe = Me = fe = Xi = Ae = Ve = Rt = q = Ke = D = te = bi = Zi = de = Ti = Ei = kt = Mi = Ai = Si = Ci = xi = ji = Ht = Li = zt = pn = wn = Wt = Ui = Ji = Ft = Te = Re = z = Tn = C = x = Ni = Oi = Ee = X = En = ae = he = je = Ue = le = li = Gi = si = qt = U = Nt = Mn = ze = We = O = An = Fe = Ri = Bi = ne = et = oi = it = Je = ye = tt = Ge = ve = Vt = ke = He = null;
    for (var n in this)
      n !== "rebuild" && (this[n] = null);
    yi = !1;
  }
  function Pn(e) {
    Ye(function() {
      qn(Le(e));
    });
  }
  function qn(e) {
    if (!!yi) {
      ti === "outer" && q.emit("outerResized", J(e)), Qi = Ln();
      var t, n = gi, r = !1;
      L && (Vn(), t = n !== gi, t && q.emit("newBreakpointStart", J(e)));
      var u, h, T = w, V = te, Z = de, W = Oe, ci = Te, Fi = Ee, ii = ke, en = He, tn = U, di = We, nn = Fe, rn = o;
      if (t) {
        var Ur = d, Jr = ie, Gr = Re, Br = I, fn = ze;
        if (!we)
          var ef = b, tf = N;
      }
      if (Oe = y("arrowKeys"), Te = y("controls"), Ee = y("nav"), ke = y("touch"), I = y("center"), He = y("mouseDrag"), U = y("autoplay"), We = y("autoplayHoverPause"), Fe = y("autoplayResetOnVisibility"), t && (te = y("disable"), d = y("fixedWidth"), ce = y("speed"), ie = y("autoHeight"), Re = y("controlsText"), ze = y("autoplayText"), Nt = y("autoplayTimeout"), we || (N = y("edgePadding"), b = y("gutter"))), nt(te), P = Nn(), (!A || p) && !te && (Un(), A || (Gt(), r = !0)), (d || p) && (fi = jt(), fe = wi()), (t || d) && (w = y("items"), ni = y("slideBy"), h = w !== T, h && (!d && !p && (fe = wi()), Yt())), t && te !== V && (te ? Yn() : Rr()), Zi && (t || d || p) && (de = _t(), de !== Z && (de ? (Ut(vt(Cn(0))), _n()) : (Or(), r = !0))), nt(te || de), U || (We = Fe = !1), Oe !== W && (Oe ? R(f, Si) : Y(f, Si)), Te !== ci && (Te ? z ? ue(z) : (C && ue(C), x && ue(x)) : z ? oe(z) : (C && oe(C), x && oe(x))), Ee !== Fi && (Ee ? (ue(X), Bt()) : oe(X)), ke !== ii && (ke ? R(v, Ci, i.preventScrollOnTouch) : Y(v, Ci)), He !== en && (He ? R(v, xi) : Y(v, xi)), U !== tn && (U ? (O && ue(O), !ne && !oi && mt()) : (O && oe(O), ne && Wi())), We !== di && (We ? R(v, Mi) : Y(v, Mi)), Fe !== nn && (Fe ? R(f, Ai) : Y(f, Ai)), t) {
        if ((d !== Ur || I !== Br) && (r = !0), ie !== Jr && (ie || (B.style.height = "")), Te && Re !== Gr && (C.innerHTML = Re[0], x.innerHTML = Re[1]), O && ze !== fn) {
          var an = U ? 1 : 0, ln = O.innerHTML, dr = ln.length - fn[an].length;
          ln.substring(dr) === fn[an] && (O.innerHTML = ln.substring(0, dr) + ze[an]);
        }
      } else
        I && (d || p) && (r = !0);
      if ((h || d && !p) && (he = cr(), Bt()), u = o !== rn, u ? (q.emit("indexChanged", J()), r = !0) : h ? u || Xn() : (d || p) && (Qt(), Zt(), In()), h && !c && Fr(), !te && !de) {
        if (t && !we && ((N !== tf || b !== ef) && (B.style.cssText = ft(N, b, d, ce, ie)), A)) {
          c && (v.style.width = at(d, b, w));
          var nf = lt(d, b, w) + st(b);
          of(S, Ce(S) - 1), De(S, "#" + D + " > .tns-item", nf, Ce(S));
        }
        ie && ut(), r && (Hi(), qe = o);
      }
      t && q.emit("newBreakpointEnd", J(e));
    }
  }
  function _t() {
    if (!d && !p) {
      var e = I ? w - (w - 1) / 2 : w;
      return g <= e;
    }
    var t = d ? (d + b) * g : H[g], n = N ? P + N * 2 : P + b;
    return I && (n -= d ? (P - d) / 2 : (P - (H[o + 1] - H[o] - b)) / 2), t <= n;
  }
  function Vn() {
    gi = 0;
    for (var e in L)
      e = parseInt(e), Qi >= e && (gi = e);
  }
  var Yt = function() {
    return Q ? c ? function() {
      var e = Me, t = fe;
      e += ni, t -= ni, N ? (e += 1, t -= 1) : d && (P + b) % (d + b) && (t -= 1), $ && (o > t ? o -= g : o < e && (o += g));
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
  function It() {
    !U && O && oe(O), !Ee && X && oe(X), Te || (z ? oe(z) : (C && oe(C), x && oe(x)));
  }
  function Kn() {
    U && O && ue(O), Ee && X && ue(X), Te && (z ? ue(z) : (C && ue(C), x && ue(x)));
  }
  function _n() {
    if (!Ti) {
      if (N && (B.style.margin = "0px"), $)
        for (var e = "tns-transparent", t = $; t--; )
          c && k(E[t], e), k(E[M - t - 1], e);
      It(), Ti = !0;
    }
  }
  function Or() {
    if (!!Ti) {
      if (N && we && (B.style.margin = ""), $)
        for (var e = "tns-transparent", t = $; t--; )
          c && re(E[t], e), re(E[M - t - 1], e);
      Kn(), Ti = !1;
    }
  }
  function Yn() {
    if (!bi) {
      if (S.disabled = !0, v.className = v.className.replace(Ke.substring(1), ""), Qe(v, ["style"]), Q)
        for (var e = $; e--; )
          c && oe(E[e]), oe(E[M - e - 1]);
      if ((!A || !c) && Qe(B, ["style"]), !c)
        for (var t = o, n = o + g; t < n; t++) {
          var r = E[t];
          Qe(r, ["style"]), re(r, Ne), re(r, be);
        }
      It(), bi = !0;
    }
  }
  function Rr() {
    if (!!bi) {
      if (S.disabled = !1, v.className += Ke, Hi(), Q)
        for (var e = $; e--; )
          c && ue(E[e]), ue(E[M - e - 1]);
      if (!c)
        for (var t = o, n = o + g; t < n; t++) {
          var r = E[t], u = t < o + w ? Ne : be;
          r.style.left = (t - o) * 100 / w + "%", k(r, u);
        }
      Kn(), bi = !1;
    }
  }
  function In() {
    var e = Qn();
    Pt.innerHTML !== e && (Pt.innerHTML = e);
  }
  function Qn() {
    var e = ot(), t = e[0] + 1, n = e[1] + 1;
    return t === n ? t + "" : t + " to " + n;
  }
  function ot(e) {
    e == null && (e = vt());
    var t = o, n, r, u;
    if (I || N ? (p || d) && (r = -(parseFloat(e) + N), u = r + P + N * 2) : p && (r = H[o], u = r + P), p)
      H.forEach(function(Z, W) {
        W < M && ((I || N) && Z <= r + 0.5 && (t = W), u - Z >= 0.5 && (n = W));
      });
    else {
      if (d) {
        var h = d + b;
        I || N ? (t = Math.floor(r / h), n = Math.ceil(u / h - 1)) : n = t + Math.ceil(P / h) - 1;
      } else if (I || N) {
        var T = w - 1;
        if (I ? (t -= T / 2, n = o + T / 2) : n = o + T, N) {
          var V = N * w / P;
          t -= V, n += V;
        }
        t = Math.floor(t), n = Math.ceil(n);
      } else
        n = t + w - 1;
      t = Math.max(t, 0), n = Math.min(n, M - 1);
    }
    return [t, n];
  }
  function Qt() {
    if (pi && !te) {
      var e = ot();
      e.push(Er), Xt.apply(null, e).forEach(function(t) {
        if (!hi(t, Ui)) {
          var n = {};
          n[Xe] = function(u) {
            u.stopPropagation();
          }, R(t, n), R(t, Ji), t.src = bt(t, "data-src");
          var r = bt(t, "data-srcset");
          r && (t.srcset = r), k(t, "loading");
        }
      });
    }
  }
  function kr(e) {
    $n(ui(e));
  }
  function Hr(e) {
    zr(ui(e));
  }
  function $n(e) {
    k(e, "loaded"), $t(e);
  }
  function zr(e) {
    k(e, "failed"), $t(e);
  }
  function $t(e) {
    k(e, Ui), re(e, "loading"), Y(e, Ji);
  }
  function Xt(e, t, n) {
    var r = [];
    for (n || (n = "img"); e <= t; )
      Ie(E[e].querySelectorAll(n), function(u) {
        r.push(u);
      }), e++;
    return r;
  }
  function ut() {
    var e = Xt.apply(null, ot());
    Ye(function() {
      ct(e, jn);
    });
  }
  function ct(e, t) {
    if (Ft || (e.forEach(function(n, r) {
      !pi && n.complete && $t(n), hi(n, Ui) && e.splice(r, 1);
    }), !e.length))
      return t();
    Ye(function() {
      ct(e, t);
    });
  }
  function Xn() {
    Qt(), Zt(), In(), er(), Pr();
  }
  function Wr() {
    c && ie && (ee.style[j] = ce / 1e3 + "s");
  }
  function Zn(e, t) {
    for (var n = [], r = e, u = Math.min(e + t, M); r < u; r++)
      n.push(E[r].offsetHeight);
    return Math.max.apply(null, n);
  }
  function jn() {
    var e = ie ? Zn(o, w) : Zn($, g), t = ee || B;
    t.style.height !== e && (t.style.height = e + "px");
  }
  function Un() {
    H = [0];
    var e = A ? "left" : "top", t = A ? "right" : "bottom", n = E[0].getBoundingClientRect()[e];
    Ie(E, function(r, u) {
      u && H.push(r.getBoundingClientRect()[e] - n), u === M - 1 && H.push(r.getBoundingClientRect()[t] - n);
    });
  }
  function Zt() {
    var e = ot(), t = e[0], n = e[1];
    Ie(E, function(r, u) {
      u >= t && u <= n ? Pi(r, "aria-hidden") && (Qe(r, ["aria-hidden", "tabindex"]), k(r, Wt)) : Pi(r, "aria-hidden") || (se(r, {
        "aria-hidden": "true",
        tabindex: "-1"
      }), re(r, Wt));
    });
  }
  function Fr() {
    for (var e = o + Math.min(g, w), t = M; t--; ) {
      var n = E[t];
      t >= o && t < e ? (k(n, "tns-moving"), n.style.left = (t - o) * 100 / w + "%", k(n, Ne), re(n, be)) : n.style.left && (n.style.left = "", k(n, be), re(n, Ne)), re(n, Ii);
    }
    setTimeout(function() {
      Ie(E, function(r) {
        re(r, "tns-moving");
      });
    }, 300);
  }
  function Pr() {
    if (Ee && (le = Ue >= 0 ? Ue : xn(), Ue = -1, le !== li)) {
      var e = ae[li], t = ae[le];
      se(e, {
        tabindex: "-1",
        "aria-label": si + (li + 1)
      }), re(e, Gi), se(t, {
        "aria-label": si + (le + 1) + qt
      }), Qe(t, "tabindex"), k(t, Gi), li = le;
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
  function dt(e, t, n) {
    e ? t.disabled = n : t.setAttribute("aria-disabled", n.toString());
  }
  function er() {
    if (!(!Te || mi || Q)) {
      var e = Ni ? C.disabled : Bn(C), t = Oi ? x.disabled : Bn(x), n = o <= Me, r = !mi && o >= fe;
      n && !e && dt(Ni, C, !0), !n && e && dt(Ni, C, !1), r && !t && dt(Oi, x, !0), !r && t && dt(Oi, x, !1);
    }
  }
  function ht(e, t) {
    j && (e.style[j] = t);
  }
  function qr() {
    return d ? (d + b) * M : H[M];
  }
  function ki(e) {
    e == null && (e = o);
    var t = N ? b : 0;
    return p ? (P - t - (H[e + 1] - H[e] - b)) / 2 : d ? (P - d) / 2 : (w - 1) / 2;
  }
  function jt() {
    var e = N ? b : 0, t = P + e - qr();
    return I && !Q && (t = d ? -(d + b) * (M - 1) - ki() : ki(M - 1) - H[M - 1]), t > 0 && (t = 0), t;
  }
  function vt(e) {
    e == null && (e = o);
    var t;
    if (A && !p)
      if (d)
        t = -(d + b) * e, I && (t += ki());
      else {
        var n = $e ? M : w;
        I && (e -= ki()), t = -e * 100 / n;
      }
    else
      t = -H[e], I && p && (t += ki());
    return mn && (t = Math.max(t, fi)), t += A && !p && !d ? "%" : "px", t;
  }
  function Hi(e) {
    ht(v, "0s"), Ut(e);
  }
  function Ut(e) {
    e == null && (e = vt()), v.style[Ze] = Pe + e + ai;
  }
  function ir(e, t, n, r) {
    var u = e + w;
    Q || (u = Math.min(u, M));
    for (var h = e; h < u; h++) {
      var T = E[h];
      r || (T.style.left = (h - o) * 100 / w + "%"), xt && _i && (T.style[_i] = T.style[At] = xt * (h - e) / 1e3 + "s"), re(T, t), k(T, n), r && ri.push(T);
    }
  }
  var Vr = function() {
    return c ? function() {
      ht(v, ""), j || !ce ? (Ut(), (!ce || !gr(v)) && Se()) : gf(v, Ze, Pe, ai, vt(), ce, Se), A || Gt();
    } : function() {
      ri = [];
      var e = {};
      e[Xe] = e[cn] = Se, Y(E[qe], e), R(E[o], e), ir(qe, Ne, Ii, !0), ir(o, be, Ne), (!Xe || !cn || !ce || !gr(v)) && Se();
    };
  }();
  function Jt(e, t) {
    Ot && Yt(), (o !== qe || t) && (q.emit("indexChanged", J()), q.emit("transitionStart", J()), ie && ut(), ne && e && ["click", "keydown"].indexOf(e.type) >= 0 && Wi(), Ve = !0, Vr());
  }
  function tr(e) {
    return e.toLowerCase().replace(/-/g, "");
  }
  function Se(e) {
    if (c || Ve) {
      if (q.emit("transitionEnd", J(e)), !c && ri.length > 0)
        for (var t = 0; t < ri.length; t++) {
          var n = ri[t];
          n.style.left = "", At && _i && (n.style[At] = "", n.style[_i] = ""), re(n, Ii), k(n, be);
        }
      if (!e || !c && e.target.parentNode === v || e.target === v && tr(e.propertyName) === tr(Ze)) {
        if (!Ot) {
          var r = o;
          Yt(), o !== r && (q.emit("indexChanged", J()), Hi());
        }
        ti === "inner" && q.emit("innerLoaded", J()), Ve = !1, qe = o;
      }
    }
  }
  function zi(e, t) {
    if (!de)
      if (e === "prev")
        _e(t, -1);
      else if (e === "next")
        _e(t, 1);
      else {
        if (Ve) {
          if ($i)
            return;
          Se();
        }
        var n = rt(), r = 0;
        if (e === "first" ? r = -n : e === "last" ? r = c ? g - w - n : g - 1 - n : (typeof e != "number" && (e = parseInt(e)), isNaN(e) || (t || (e = Math.max(0, Math.min(g - 1, e))), r = e - n)), !c && r && Math.abs(r) < w) {
          var u = r > 0 ? 1 : -1;
          r += o + r - g >= Me ? g * u : g * 2 * u * -1;
        }
        o += r, c && Q && (o < Me && (o += g), o > fe && (o -= g)), rt(o) !== rt(qe) && Jt(t);
      }
  }
  function _e(e, t) {
    if (Ve) {
      if ($i)
        return;
      Se();
    }
    var n;
    if (!t) {
      e = Le(e);
      for (var r = ui(e); r !== z && [C, x].indexOf(r) < 0; )
        r = r.parentNode;
      var u = [C, x].indexOf(r);
      u >= 0 && (n = !0, t = u === 0 ? -1 : 1);
    }
    if (mi) {
      if (o === Me && t === -1) {
        zi("last", e);
        return;
      } else if (o === fe && t === 1) {
        zi("first", e);
        return;
      }
    }
    t && (o += ni * t, p && (o = Math.floor(o)), Jt(n || e && e.type === "keydown" ? e : null));
  }
  function Kr(e) {
    if (Ve) {
      if ($i)
        return;
      Se();
    }
    e = Le(e);
    for (var t = ui(e), n; t !== X && !Pi(t, "data-nav"); )
      t = t.parentNode;
    if (Pi(t, "data-nav")) {
      var n = Ue = Number(bt(t, "data-nav")), r = d || p ? n * g / he : n * w, u = Li ? n : Math.min(Math.ceil(r), g - 1);
      zi(u, e), le === n && (ne && Wi(), Ue = -1);
    }
  }
  function gt() {
    Bi = setInterval(function() {
      _e(null, Mn);
    }, Nt), ne = !0;
  }
  function yt() {
    clearInterval(Bi), ne = !1;
  }
  function nr(e, t) {
    se(O, {
      "data-action": e
    }), O.innerHTML = Ri[0] + e + Ri[1] + t;
  }
  function mt() {
    gt(), O && nr("stop", ze[1]);
  }
  function Wi() {
    yt(), O && nr("start", ze[0]);
  }
  function _r() {
    U && !ne && (mt(), oi = !1);
  }
  function Yr() {
    ne && (Wi(), oi = !0);
  }
  function rr() {
    ne ? (Wi(), oi = !0) : (mt(), oi = !1);
  }
  function Ir() {
    f.hidden ? ne && (yt(), it = !0) : it && (gt(), it = !1);
  }
  function Qr() {
    ne && (yt(), et = !0);
  }
  function $r() {
    et && (gt(), et = !1);
  }
  function Xr(e) {
    e = Le(e);
    var t = [l.LEFT, l.RIGHT].indexOf(e.keyCode);
    t >= 0 && _e(e, t === 0 ? -1 : 1);
  }
  function Zr(e) {
    e = Le(e);
    var t = [l.LEFT, l.RIGHT].indexOf(e.keyCode);
    t >= 0 && (t === 0 ? C.disabled || _e(e, -1) : x.disabled || _e(e, 1));
  }
  function fr(e) {
    e.focus();
  }
  function jr(e) {
    e = Le(e);
    var t = f.activeElement;
    if (!!Pi(t, "data-nav")) {
      var n = [l.LEFT, l.RIGHT, l.ENTER, l.SPACE].indexOf(e.keyCode), r = Number(bt(t, "data-nav"));
      n >= 0 && (n === 0 ? r > 0 && fr(ae[r - 1]) : n === 1 ? r < he - 1 && fr(ae[r + 1]) : (Ue = r, zi(r, e)));
    }
  }
  function Le(e) {
    return e = e || a.event, ei(e) ? e.changedTouches[0] : e;
  }
  function ui(e) {
    return e.target || a.event.srcElement;
  }
  function ei(e) {
    return e.type.indexOf("touch") >= 0;
  }
  function ar(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
  }
  function lr() {
    return cf(uf(ye.y - Je.y, ye.x - Je.x), Xi) === i.axis;
  }
  function sr(e) {
    if (Ve) {
      if ($i)
        return;
      Se();
    }
    U && ne && yt(), Ge = !0, ve && (sn(ve), ve = null);
    var t = Le(e);
    q.emit(ei(e) ? "touchStart" : "dragStart", J(e)), !ei(e) && ["img", "a"].indexOf(Jn(ui(e))) >= 0 && ar(e), ye.x = Je.x = t.clientX, ye.y = Je.y = t.clientY, c && (tt = parseFloat(v.style[Ze].replace(Pe, "")), ht(v, "0s"));
  }
  function or(e) {
    if (Ge) {
      var t = Le(e);
      ye.x = t.clientX, ye.y = t.clientY, c ? ve || (ve = Ye(function() {
        ur(e);
      })) : (Ae === "?" && (Ae = lr()), Ae && (Di = !0)), (typeof e.cancelable != "boolean" || e.cancelable) && Di && e.preventDefault();
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
      !Di && ei(e) && (Di = !0);
      try {
        e.type && q.emit(ei(e) ? "touchMove" : "dragMove", J(e));
      } catch {
      }
      var t = tt, n = Vt(ye, Je);
      if (!A || d || p)
        t += n, t += "px";
      else {
        var r = $e ? n * w * 100 / ((P + b) * M) : n * 100 / (P + b);
        t += r, t += "%";
      }
      v.style[Ze] = Pe + t + ai;
    }
  }
  function pt(e) {
    if (Ge) {
      ve && (sn(ve), ve = null), c && ht(v, ""), Ge = !1;
      var t = Le(e);
      ye.x = t.clientX, ye.y = t.clientY;
      var n = Vt(ye, Je);
      if (Math.abs(n)) {
        if (!ei(e)) {
          var r = ui(e);
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
            var h = -(tt + n);
            if (h <= 0)
              o = Me;
            else if (h >= H[M - 1])
              o = fe;
            else
              for (var T = 0; T < M && h >= H[T]; )
                o = T, h > H[T] && n < 0 && (o += 1), T++;
          }
          Jt(e, n), q.emit(ei(e) ? "touchEnd" : "dragEnd", J(e));
        }) : Ae && _e(e, n > 0 ? -1 : 1);
      }
    }
    i.preventScrollOnTouch === "auto" && (Di = !1), Xi && (Ae = "?"), U && !ne && gt();
  }
  function Gt() {
    var e = ee || B;
    e.style.height = H[o + w] - H[o] + "px";
  }
  function cr() {
    var e = d ? (d + b) * g / P : g / w;
    return Math.min(Math.ceil(e), g);
  }
  function Bt() {
    if (!(!Ee || Li) && he !== je) {
      var e = je, t = he, n = ue;
      for (je > he && (e = he, t = je, n = oe); e < t; )
        n(ae[e]), e++;
      je = he;
    }
  }
  function J(e) {
    return {
      container: v,
      slideItems: E,
      navContainer: X,
      navItems: ae,
      controlsContainer: z,
      hasControls: ji,
      prevButton: C,
      nextButton: x,
      items: w,
      slideBy: ni,
      cloneCount: $,
      slideCount: g,
      slideCountNew: M,
      index: o,
      indexCached: qe,
      displayIndex: Sn(),
      navCurrentIndex: le,
      navCurrentIndexCached: li,
      pages: he,
      pagesCached: je,
      sheet: S,
      isOn: yi,
      event: e || {}
    };
  }
  return {
    version: "2.9.4",
    getInfo: J,
    events: q,
    goTo: zi,
    play: _r,
    pause: Yr,
    isOn: yi,
    updateSliderHeight: jn,
    refresh: kn,
    destroy: Nr,
    rebuild: function() {
      return Tr(on(i, hn));
    }
  };
}, yf = mr.tns = Tr;
const mf = ({ slideCount: i, settings: f }) => ({
  slideCount: i,
  carousel: null,
  settings: f || {},
  isPaused: !1,
  timePerSlide: null,
  currentSlide: 1,
  switchingSlide: !1,
  dotsCount: null,
  activeDot: 1,
  initialized: !1,
  init() {
    var a;
    this.carousel = yf({
      container: this.$el.querySelector(".carousel__slidesHolder"),
      mouseDrag: !0,
      controls: !1,
      nav: !1,
      autoplayButtonOutput: !1,
      onInit: () => {
        this.$nextTick(() => {
          this.initialized = !0;
        });
      },
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
