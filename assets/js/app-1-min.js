function lazyload() {
    for (var e = document.getElementsByClassName("lazy"), t = 0; t < e.length; t++) elementInViewport(e[t]) && e[t].setAttribute("src", e[t].getAttribute("data-src"))
}

function elementInViewport(e) {
    var t = e.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHieght) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
}! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        i = e.document,
        o = Object.getPrototypeOf,
        r = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        h = d.toString,
        f = h.call(Object),
        p = {},
        g = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function (e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var o, r, s = (n = n || i).createElement("script");
        if (s.text = e, t)
            for (o in v)(r = t[o] || t.getAttribute && t.getAttribute(o)) && s.setAttribute(o, r);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function _(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var b = "3.4.1",
        w = function (e, t) {
            return new w.fn.init(e, t)
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function E(e) {
        var t = !!e && "length" in e && e.length,
            n = _(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: b,
        constructor: w,
        length: 0,
        toArray: function () {
            return r.call(this)
        },
        get: function (e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, s[t] = w.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, w.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== f))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function (e, t) {
            var n, i = 0;
            if (E(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var i, o, r = 0,
                a = [];
            if (E(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function (e) {
        var t, n, i, o, r, s, a, l, c, u, d, h, f, p, g, m, v, y, _, b = "sizzle" + 1 * new Date,
            w = e.document,
            C = 0,
            E = 0,
            x = le(),
            T = le(),
            S = le(),
            A = le(),
            I = function (e, t) {
                return e === t && (d = !0), 0
            },
            D = {}.hasOwnProperty,
            k = [],
            N = k.pop,
            O = k.push,
            L = k.push,
            j = k.slice,
            H = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + P + "*(" + q + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + P + "*\\]",
            M = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            F = new RegExp(P + "+", "g"),
            B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            W = new RegExp("^" + P + "*," + P + "*"),
            U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            Q = new RegExp(P + "|>"),
            z = new RegExp(M),
            K = new RegExp("^" + q + "$"),
            V = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + $ + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ne = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function () {
                h()
            },
            se = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(k = j.call(w.childNodes), w.childNodes), k[w.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: k.length ? function (e, t) {
                    O.apply(e, j.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, o) {
            var r, a, c, u, d, p, v, y = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return i;
            if (!o && ((t ? t.ownerDocument || t : w) !== f && h(t), t = t || f, g)) {
                if (11 !== C && (d = Z.exec(e)))
                    if (r = d[1]) {
                        if (9 === C) {
                            if (!(c = t.getElementById(r))) return i;
                            if (c.id === r) return i.push(c), i
                        } else if (y && (c = y.getElementById(r)) && _(t, c) && c.id === r) return i.push(c), i
                    } else {
                        if (d[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(r)), i
                    } if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === C && Q.test(e)) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = b), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + _e(p[a]);
                        v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return L.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        A(e, !0)
                    } finally {
                        u === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, i, o)
        }

        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function ce(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce(function (t) {
                return t = +t, ce(function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, r = ae.isXML = function (e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !X.test(t || n && n.nodeName || "HTML")
            }, h = ae.setDocument = function (e) {
                var t, o, s = e ? e.ownerDocument || e : w;
                return s !== f && 9 === s.nodeType && s.documentElement && (p = (f = s).documentElement, g = !r(f), w !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ue(function (e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ue(function (e) {
                    return p.appendChild(e).id = b, !f.getElementsByName || !f.getElementsByName(b).length
                }), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = J.test(f.querySelectorAll)) && (ue(function (e) {
                    p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                }), ue(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue(function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), _ = t || J.test(p.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, I = t ? function (e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && _(w, e) ? -1 : t === f || t.ownerDocument === w && _(w, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : u ? H(u, e) - H(u, t) : 0;
                    if (o === r) return he(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? he(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                }), f
            }, ae.matches = function (e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== f && h(e), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    A(t, !0)
                }
                return 0 < ae(t, f, null, [e]).length
            }, ae.contains = function (e, t) {
                return (e.ownerDocument || e) !== f && h(e), _(e, t)
            }, ae.attr = function (e, t) {
                (e.ownerDocument || e) !== f && h(e);
                var o = i.attrHandle[t.toLowerCase()],
                    r = o && D.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ae.escape = function (e) {
                return (e + "").replace(ie, oe)
            }, ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function (e) {
                var t, i = [],
                    o = 0,
                    r = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(I), d) {
                    for (; t = e[r++];) t === e[r] && (o = i.push(r));
                    for (; o--;) e.splice(i[o], 1)
                }
                return u = null, e
            }, o = ae.getText = function (e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = x[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && x(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, n) {
                        return function (i) {
                            var o = ae.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(F, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, d, h, f, p, g = r !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                _ = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (_ = (f = (c = (u = (d = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (_ = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++_ && h === t) {
                                            u[e] = [C, f, _];
                                            break
                                        }
                                } else if (y && (_ = f = (c = (u = (d = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === _)
                                    for (;
                                        (h = ++f && h && h[g] || (_ = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((u = (d = h[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [C, _]), h !== t)););
                                return (_ -= o) === i || _ % i == 0 && 0 <= _ / i
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[b] ? o(t) : 1 < o.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, n) {
                            for (var i, r = o(e, t), s = r.length; s--;) e[i = H(e, r[s])] = !(n[i] = r[s])
                        }) : function (e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: ce(function (e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(B, "$1"));
                        return i[b] ? ce(function (e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function (e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ce(function (e) {
                        return function (t) {
                            return 0 < ae(e, t).length
                        }
                    }),
                    contains: ce(function (e) {
                        return e = e.replace(te, ne),
                            function (t) {
                                return -1 < (t.textContent || o(t)).indexOf(e)
                            }
                    }),
                    lang: ce(function (e) {
                        return K.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === p
                    },
                    focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function (e) {
                        return G.test(e.nodeName)
                    },
                    input: function (e) {
                        return Y.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function () {
                        return [0]
                    }),
                    last: me(function (e, t) {
                        return [t - 1]
                    }),
                    eq: me(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function (e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: me(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ye() {}

        function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function be(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = E++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function (t, n, l) {
                var c, u, d, h = [C, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (u = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[r]) && c[0] === C && c[1] === a) return h[2] = c[2];
                                if ((u[r] = h)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function (t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Ce(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function Ee(e, t, n, i, o, r) {
            return i && !i[b] && (i = Ee(i)), o && !o[b] && (o = Ee(o, r)), ce(function (r, s, a, l) {
                var c, u, d, h = [],
                    f = [],
                    p = s.length,
                    g = r || function (e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !r && t ? g : Ce(g, h, e, a, l),
                    v = n ? o || (r ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l), i)
                    for (c = Ce(v, f), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                            o(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && -1 < (c = o ? H(r, d) : h[u]) && (r[c] = !(s[c] = d))
                    }
                } else v = Ce(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : L.apply(s, v)
            })
        }

        function xe(e) {
            for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = be(function (e) {
                    return e === t
                }, a, !0), d = be(function (e) {
                    return -1 < H(t, e)
                }, a, !0), h = [function (e, n, i) {
                    var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return t = null, o
                }]; l < r; l++)
                if (n = i.relative[e[l].type]) h = [be(we(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                        return Ee(1 < l && we(h), 1 < l && _e(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, l < o && xe(e.slice(l, o)), o < r && xe(e = e.slice(o)), o < r && _e(e))
                    }
                    h.push(n)
                } return we(h)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) {
            var n, o, r, s, a, l, c, u = T[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = U.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(B, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : T(e, l).slice(0)
        }, a = ae.compile = function (e, t) {
            var n, o, r, a, l, u, d = [],
                p = [],
                m = S[e + " "];
            if (!m) {
                for (t || (t = s(e)), n = t.length; n--;)(m = xe(t[n]))[b] ? d.push(m) : p.push(m);
                (m = S(e, (o = p, a = 0 < (r = d).length, l = 0 < o.length, u = function (e, t, n, s, u) {
                    var d, p, m, v = 0,
                        y = "0",
                        _ = e && [],
                        b = [],
                        w = c,
                        E = e || l && i.find.TAG("*", u),
                        x = C += null == w ? 1 : Math.random() || .1,
                        T = E.length;
                    for (u && (c = t === f || t || u); y !== T && null != (d = E[y]); y++) {
                        if (l && d) {
                            for (p = 0, t || d.ownerDocument === f || (h(d), n = !g); m = o[p++];)
                                if (m(d, t || f, n)) {
                                    s.push(d);
                                    break
                                } u && (C = x)
                        }
                        a && ((d = !m && d) && v--, e && _.push(d))
                    }
                    if (v += y, a && y !== v) {
                        for (p = 0; m = r[p++];) m(_, b, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) _[y] || b[y] || (b[y] = N.call(s));
                            b = Ce(b)
                        }
                        L.apply(s, b), u && !e && 0 < b.length && 1 < v + r.length && ae.uniqueSort(s)
                    }
                    return u && (C = x, c = w), _
                }, a ? ce(u) : u))).selector = e
            }
            return m
        }, l = ae.select = function (e, t, n, o) {
            var r, l, c, u, d, h = "function" == typeof e && e,
                f = !o && s(e = h.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (r = V.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                    if ((d = i.find[u]) && (o = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(r, 1), !(e = o.length && _e(l))) return L.apply(n, o), n;
                        break
                    }
            }
            return (h || a(e, f))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(I).join("") === b, n.detectDuplicates = !!d, h(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || de($, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(e);
    w.find = x, w.expr = x.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = x.uniqueSort, w.text = x.getText, w.isXMLDoc = x.isXML, w.contains = x.contains, w.escapeSelector = x.escape;
    var T = function (e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && w(e).is(n)) break;
                    i.push(e)
                } return i
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        A = w.expr.match.needsContext;

    function I(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
        return g(t) ? w.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return -1 < l.call(t, e) !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (w.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
            return 1 < i ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function (e) {
            return !!k(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1).length
        }
    });
    var N, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var o, r;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(o[1]) && w.isPlainObject(t))
                    for (o in t) g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, N = w(i);
    var L = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && w(e);
            if (!A.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(1 < r.length ? w.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return T(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function (e) {
            return H(e, "nextSibling")
        },
        prev: function (e) {
            return H(e, "previousSibling")
        },
        nextAll: function (e) {
            return T(e, "nextSibling")
        },
        prevAll: function (e) {
            return T(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S(e.firstChild)
        },
        contents: function (e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (I(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, i) {
            var o = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), 1 < this.length && (j[e] || w.uniqueSort(o), L.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var $ = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function R(e, t, n, i) {
        var o;
        try {
            e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function (e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match($) || [], function (e, t) {
            n[t] = !0
        }), n) : w.extend({}, e);
        var i, o, r, s, a = [],
            l = [],
            c = -1,
            u = function () {
                for (s = s || e.once, r = i = !0; l.length; c = -1)
                    for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && e.stopOnFalse && (c = a.length, o = !1);
                e.memory || (o = !1), i = !1, s && (a = o ? [] : "")
            },
            d = {
                add: function () {
                    return a && (o && !i && (c = a.length - 1, l.push(o)), function t(n) {
                        w.each(n, function (n, i) {
                            g(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== _(i) && t(i)
                        })
                    }(arguments), o && !i && u()), this
                },
                remove: function () {
                    return w.each(arguments, function (e, t) {
                        for (var n; - 1 < (n = w.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return s = l = [], a = o = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = l = [], o || i || (a = o = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return d
    }, w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return o.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, i) {
                                var o = g(e[i[4]]) && e[i[4]];
                                r[i[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, i, o) {
                        var r = 0;

                        function s(t, n, i, o) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    c = function () {
                                        var e, c;
                                        if (!(t < r)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? o ? c.call(e, s(r, n, P, o), s(r, n, q, o)) : (r++, c.call(e, s(r, n, P, o), s(r, n, q, o), s(r, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (o || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = o ? c : function () {
                                        try {
                                            c()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), r <= t + 1 && (i !== q && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(s(0, e, g(o) ? o : P, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : P)), n[2][3].add(s(0, e, g(i) ? i : q))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, o) : o
                    }
                },
                r = {};
            return w.each(n, function (e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = r.call(arguments),
                s = w.Deferred(),
                a = function (e) {
                    return function (n) {
                        i[e] = this, o[e] = 1 < arguments.length ? r.call(arguments) : n, --t || s.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (R(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(o[n] && o[n].then))) return s.then();
            for (; n--;) R(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();

    function B() {
        i.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready()
    }
    w.fn.ready = function (e) {
        return F.then(e).catch(function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || F.resolveWith(i, [w])
        }
    }), w.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var W = function (e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === _(n))
                for (a in o = !0, n) W(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, g(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(w(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        U = /^-ms-/,
        Q = /-([a-z])/g;

    function z(e, t) {
        return t.toUpperCase()
    }

    function K(e) {
        return e.replace(U, "ms-").replace(Q, z)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function X() {
        this.expando = w.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[K(t)] = n;
            else
                for (i in t) o[K(i)] = t[i];
            return o
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match($) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Y = new X,
        G = new X,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function (e, t) {
            G.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = G.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K(i.slice(5)), ee(r, i, o[i]));
                    Y.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                G.set(this, e)
            }) : W(this, function (t) {
                var n;
                if (r && void 0 === t) return void 0 !== (n = G.get(r, e)) ? n : void 0 !== (n = ee(r, e)) ? n : void 0;
                this.each(function () {
                    G.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                G.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
                w.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = w.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = i.documentElement,
        re = function (e) {
            return w.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    oe.getRootNode && (re = function (e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var ae = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === w.css(e, "display")
        },
        le = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        };

    function ce(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return w.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && ne.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) w.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, w.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var ue = {};

    function de(e, t) {
        for (var n, i, o, r, s, a, l, c = [], u = 0, d = e.length; u < d; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = Y.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && ae(i) && (c[u] = (l = s = r = void 0, s = (o = i).ownerDocument, a = o.nodeName, (l = ue[a]) || (r = s.body.appendChild(s.createElement(a)), l = w.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), ue[a] = l)))) : "none" !== n && (c[u] = "none", Y.set(i, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    w.fn.extend({
        show: function () {
            return de(this, !0)
        },
        hide: function () {
            return de(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && I(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, _e, be = /<|&#?\w+;/;

    function we(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === _(r)) w.merge(h, r.nodeType ? [r] : r);
                else if (be.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (fe.exec(r) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            w.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = h[f++];)
            if (i && -1 < w.inArray(r, i)) o && o.push(r);
            else if (c = re(r), s = me(d.appendChild(r), "script"), c && ve(s), n)
            for (u = 0; r = s[u++];) pe.test(r.type || "") && n.push(r);
        return d
    }
    ye = i.createDocumentFragment().appendChild(i.createElement("div")), (_e = i.createElement("input")).setAttribute("type", "radio"), _e.setAttribute("checked", "checked"), _e.setAttribute("name", "t"), ye.appendChild(_e), p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ce = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ae(e, t) {
        return e === function () {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ie(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ie(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Se;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function (e) {
            return w().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, o, i, n)
        })
    }

    function De(e, t, n) {
        n ? (Y.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
                var i, o, s = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = r.call(arguments), Y.set(this, t, s), i = n(this, t), this[t](), s !== (o = Y.get(this, t)) || i ? Y.set(this, t, !1) : o = {}, s !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                } else s.length && (Y.set(this, t, {
                    value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && w.event.add(e, t, Te)
    }
    w.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, h, f, p, g, m = Y.get(e);
            if (m)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && w.find.matchesSelector(oe, o), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match($) || [""]).length; c--;) f = g = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, u = w.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), w.event.global[f] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, h, f, p, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match($) || [""]).length; c--;)
                    if (f = g = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = w.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || w.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) w.event.remove(e, f + t[c], n, i, !0);
                w.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, o, r, s, a = w.event.fix(e),
                l = new Array(arguments.length),
                c = (Y.get(this, "events") || {})[a.type] || [],
                u = w.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = w.event.handlers.call(this, a, c), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < w(o, this).index(c) : w.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && I(t, "input") && De(t, "click", Te), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && I(t, "input") && De(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && I(t, "input") && Y.get(t, "click") || I(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        w.event.special[e] = {
            setup: function () {
                return De(this, e, Ae), !1
            },
            trigger: function () {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, i) {
            return Ie(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return Ie(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ne = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return I(e, "table") && I(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function $e(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (r = Y.access(e), s = Y.set(t, r), c = r.events))
                for (o in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[o].length; n < i; n++) w.event.add(t, o, c[o][n]);
            G.hasData(e) && (a = G.access(e), l = w.extend({}, a), G.set(t, l))
        }
    }

    function qe(e, t, n, i) {
        t = s.apply([], t);
        var o, r, a, l, c, u, d = 0,
            h = e.length,
            f = h - 1,
            m = t[0],
            v = g(m);
        if (v || 1 < h && "string" == typeof m && !p.checkClone && Oe.test(m)) return e.each(function (o) {
            var r = e.eq(o);
            v && (t[0] = m.call(this, o, r.html())), qe(r, t, n, i)
        });
        if (h && (r = (o = we(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (a = w.map(me(o, "script"), He)).length; d < h; d++) c = o, d !== f && (c = w.clone(c, !0, !0), l && w.merge(a, me(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, w.map(a, $e), d = 0; d < l; d++) c = a[d], pe.test(c.type || "") && !Y.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }) : y(c.textContent.replace(Le, ""), c, u))
        }
        return e
    }

    function Re(e, t, n) {
        for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || w.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(ke, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                d = re(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (s = me(u), i = 0, o = (r = me(e)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && he.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || me(e), s = s || me(u), i = 0, o = r.length; i < o; i++) Pe(r[i], s[i]);
                else Pe(e, u);
            return 0 < (s = me(u, "script")).length && ve(s, !d && me(e, "script")), u
        },
        cleanData: function (e) {
            for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Re(this, e, !0)
        },
        remove: function (e) {
            return Re(this, e)
        },
        text: function (e) {
            return W(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return qe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return qe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return qe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return qe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return W(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return qe(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), w(o[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Me = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(ie.join("|"), "i");

    function We(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = w.style(e, t)), !p.pixelBoxStyles() && Me.test(s) && Be.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function Ue(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                o = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", s = 12 === n(u.offsetWidth / 3), oe.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var o, r, s, a, l, c = i.createElement("div"),
            u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function () {
                return t(), r
            },
            pixelBoxStyles: function () {
                return t(), a
            },
            pixelPosition: function () {
                return t(), o
            },
            reliableMarginLeft: function () {
                return t(), l
            },
            scrollboxSize: function () {
                return t(), s
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"],
        ze = i.createElement("div").style,
        Ke = {};

    function Ve(e) {
        return w.cssProps[e] || Ke[e] || (e in ze ? e : Ke[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
                if ((e = Qe[n] + t) in ze) return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function et(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += w.css(e, n + ie[s], !0, o)), i ? ("content" === n && (l -= w.css(e, "padding" + ie[s], !0, o)), "margin" !== n && (l -= w.css(e, "border" + ie[s] + "Width", !0, o))) : (l += w.css(e, "padding" + ie[s], !0, o), "padding" !== n ? l += w.css(e, "border" + ie[s] + "Width", !0, o) : a += w.css(e, "border" + ie[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function tt(e, t, n) {
        var i = Fe(e),
            o = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            r = o,
            s = We(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!p.boxSizingReliable() && o || "auto" === s || !parseFloat(s) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }

    function nt(e, t, n, i, o) {
        return new nt.prototype.init(e, t, n, i, o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = K(t),
                    l = Ye.test(t),
                    c = e.style;
                if (l || (t = Ve(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = ne.exec(n)) && o[1] && (n = ce(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = K(t);
            return Ye.test(t) || (t = Ve(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = We(e, t, i)), "normal" === o && t in Je && (o = Je[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Xe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : le(e, Ge, function () {
                    return tt(e, t, i)
                })
            },
            set: function (e, n, i) {
                var o, r = Fe(e),
                    s = !p.scrollboxSize() && "absolute" === r.position,
                    a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, r),
                    l = i ? et(e, t, i, a, r) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - et(e, t, "border", !1, r) - .5)), l && (o = ne.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ze(0, n, l)
            }
        }
    }), w.cssHooks.marginLeft = Ue(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ie[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ze)
    }), w.fn.extend({
        css: function (e, t) {
            return W(this, function (e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Fe(e), o = t.length; s < o; s++) r[t[s]] = w.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((w.Tween = nt).prototype = {
        constructor: nt,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = nt.prototype.init, w.fx.step = {};
    var it, ot, rt, st, at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ct() {
        ot && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, w.fx.interval), w.fx.tick())
    }

    function ut() {
        return e.setTimeout(function () {
            it = void 0
        }), it = Date.now()
    }

    function dt(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function ht(e, t, n) {
        for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function ft(e, t, n) {
        var i, o, r = 0,
            s = ft.prefilters.length,
            a = w.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = it || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = K(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = w.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); r < s; r++)
            if (i = ft.prefilters[r].call(c, e, u, c.opts)) return g(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(u, ht, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match($);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
                h = this,
                f = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = Y.get(e, "fxshow");
            for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, h.always(function () {
                    h.always(function () {
                        s.unqueued--, w.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (o = t[i], at.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    f[i] = m && m[i] || w.style(e, i)
                } if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
                for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Y.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (de([e], !0), c = e.style.display || c, u = w.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (h.done(function () {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                    display: c
                }), r && (m.hidden = !g), g && de([e], !0), h.done(function () {
                    for (i in g || de([e]), Y.remove(e, "fxshow"), f) w.style(e, i, f[i])
                })), l = ht(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            g(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var o = w.isEmptyObject(e),
                r = w.speed(t, n, i),
                s = function () {
                    var t = ft(this, w.extend({}, e), r);
                    (o || Y.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = w.timers,
                    s = Y.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Y.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = w.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, o)
        }
    }), w.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        w.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), w.timers = [], w.fx.tick = function () {
        var e, t = 0,
            n = w.timers;
        for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), it = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        ot || (ot = !0, ct())
    }, w.fx.stop = function () {
        ot = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function (t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(o)
            }
        })
    }, rt = i.createElement("input"), st = i.createElement("select").appendChild(i.createElement("option")), rt.type = "checkbox", p.checkOn = "" !== rt.value, p.optSelected = st.selected, (rt = i.createElement("input")).value = "t", rt.type = "radio", p.radioValue = "t" === rt.value;
    var pt, gt = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return W(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && I(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                o = t && t.match($);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = gt[t] || w.find.attr;
        gt[t] = function (e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = gt[s], gt[s] = o, o = null != n(e, t, i) ? s : null, gt[s] = r), o
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match($) || []).join(" ")
    }

    function _t(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match($) || []
    }
    w.fn.extend({
        prop: function (e, t) {
            return W(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, _t(this)))
            });
            if ((t = bt(e)).length)
                for (; n = this[l++];)
                    if (o = _t(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = yt(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, _t(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = bt(e)).length)
                for (; n = this[l++];)
                    if (o = _t(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (a = yt(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, _t(this), t), t)
            }) : this.each(function () {
                var t, o, r, s;
                if (i)
                    for (o = 0, r = w(this), s = bt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = _t(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + yt(_t(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = g(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : yt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = w.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < w.inArray(w.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, p.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var Ct = /^(?:focusinfocus|focusoutblur)$/,
        Et = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, o, r) {
            var s, a, l, c, u, h, f, p, v = [o || i],
                y = d.call(t, "type") ? t.type : t,
                _ = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !Ct.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (_ = y.split(".")).shift(), _.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : w.makeArray(n, [t]), f = w.event.special[y] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!r && !f.noBubble && !m(o)) {
                    for (c = f.delegateType || y, Ct.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = v[s++]) && !t.isPropagationStopped();) p = a, t.type = 1 < s ? c : f.bindType || y, (h = (Y.get(a, "events") || {})[t.type] && Y.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && V(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !V(o) || u && g(o[y]) && !m(o) && ((l = o[u]) && (o[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, Et), o[y](), t.isPropagationStopped() && p.removeEventListener(y, Et), w.event.triggered = void 0, l && (o[u] = l)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), p.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = Y.access(i, t);
                o || i.addEventListener(e, n, !0), Y.access(i, t, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    o = Y.access(i, t) - 1;
                o ? Y.access(i, t, o) : (i.removeEventListener(e, n, !0), Y.remove(i, t))
            }
        }
    });
    var xt = e.location,
        Tt = Date.now(),
        St = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var At = /\[\]$/,
        It = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function Nt(e, t, n, i) {
        var o;
        if (Array.isArray(t)) w.each(t, function (t, o) {
            n || At.test(e) ? i(e, o) : Nt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== _(t)) i(e, t);
        else
            for (o in t) Nt(e + "[" + o + "]", t[o], n, i)
    }
    w.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) Nt(n, e[n], t, o);
        return i.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && kt.test(this.nodeName) && !Dt.test(e) && (this.checked || !he.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(It, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(It, "\r\n")
                }
            }).get()
        }
    });
    var Ot = /%20/g,
        Lt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        qt = {},
        Rt = {},
        Mt = "*/".concat("*"),
        Ft = i.createElement("a");

    function Bt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match($) || [];
            if (g(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Wt(e, t, n, i) {
        var o = {},
            r = e === Rt;

        function s(a) {
            var l;
            return o[a] = !0, w.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function Ut(e, t) {
        var n, i, o = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }
    Ft.href = xt.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Ut(Ut(e, w.ajaxSettings), t) : Ut(w.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(qt),
        ajaxTransport: Bt(Rt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, u, d, h, f, p = w.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                _ = p.statusCode || {},
                b = {},
                C = {},
                E = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Ht.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return u ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u) x.always(e[x.status]);
                            else
                                for (t in e) _[t] = [_[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || E;
                        return o && o.abort(t), T(0, t), this
                    }
                };
            if (v.promise(x), p.url = ((t || p.url || xt.href) + "").replace(Pt, xt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match($) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Wt(qt, p, n, x), u) return x;
            for (h in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !$t.test(p.type), r = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ot, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (St.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(jt, "$1"), f = (St.test(r) ? "&" : "?") + "_=" + Tt++ + f), p.url = r + f), p.ifModified && (w.lastModified[r] && x.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && x.setRequestHeader("If-None-Match", w.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || u)) return x.abort();
            if (E = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), o = Wt(Rt, p, n, x)) {
                if (x.readyState = 1, d && m.trigger("ajaxSend", [x, p]), u) return x;
                p.async && 0 < p.timeout && (l = e.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, o.send(b, T)
                } catch (t) {
                    if (u) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(t, n, i, a) {
                var c, h, f, b, C, E = n;
                u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", x.readyState = 0 < t ? 4 : 0, c = 200 <= t && t < 300 || 304 === t, i && (b = function (e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(p, x, i)), b = function (e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, b, x, c), c ? (p.ifModified && ((C = x.getResponseHeader("Last-Modified")) && (w.lastModified[r] = C), (C = x.getResponseHeader("etag")) && (w.etag[r] = C)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = b.state, h = b.data, c = !(f = b.error))) : (f = E, !t && E || (E = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || E) + "", c ? v.resolveWith(g, [h, E, x]) : v.rejectWith(g, [x, E, f]), x.statusCode(_), _ = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? h : f]), y.fireWith(g, [x, E]), d && (m.trigger("ajaxComplete", [x, p]), --w.active || w.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, i, o) {
            return g(n) && (o = o || i, i = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e, t) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                w.globalEval(e, t)
            }
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Qt = {
            0: 200,
            1223: 204
        },
        zt = w.ajaxSettings.xhr();
    p.cors = !!zt && "withCredentials" in zt, p.ajax = zt = !!zt, w.ajaxTransport(function (t) {
        var n, i;
        if (p.cors || zt && !t.crossDomain) return {
            send: function (o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (n) throw o
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function (o, r) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function () {
                n && n()
            }
        }
    });
    var Kt, Vt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Vt.pop() || w.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Xt, "$1" + o) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || w.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? w(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Vt.push(o)), s && g(r) && r(s[0]), s = r = void 0
        }), "script"
    }), p.createHTMLDocument = ((Kt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Kt.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), s = !n && [], (r = D.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, s), s && s.length && w(s).remove(), w.merge([], r.childNodes)));
        var o, r, s
    }, w.fn.load = function (e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = yt(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c = w.css(e, "position"),
                u = w(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), g(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(i, "marginTop", !0),
                    left: t.left - o.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || oe
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
            return W(this, function (e, i, o) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = Ue(p.pixelPosition, function (e, n) {
            if (n) return n = We(e, t), Me.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            w.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return W(this, function (t, n, o) {
                    var r;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? w.css(t, n, a) : w.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = r.call(arguments, 2), (o = function () {
            return e.apply(t || this, i.concat(r.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = I, w.isFunction = g, w.isWindow = m, w.camelCase = K, w.type = _, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Yt = e.jQuery,
        Gt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Yt), w
    }, t || (e.jQuery = e.$ = w), w
}),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                var i, o, r;
                i = e, r = n[o = t], o in i ? Object.defineProperty(i, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[o] = r
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = "transitionend";
    var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                i = t(e).css("transition-delay"),
                o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function (e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function (e) {
            t(e).trigger(s)
        },
        supportsTransitionEnd: function () {
            return Boolean(s)
        },
        isElement: function (e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function (e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = t[i],
                        s = r && a.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                } var l
        },
        findShadowRoot: function (e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    t.fn.emulateTransitionEnd = function (e) {
        var n = this,
            i = !1;
        return t(this).one(a.TRANSITION_END, function () {
            i = !0
        }), setTimeout(function () {
            i || a.triggerTransitionEnd(n)
        }, e), this
    }, t.event.special[a.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var l = "alert",
        c = "bs.alert",
        u = "." + c,
        d = t.fn[l],
        h = {
            CLOSE: "close" + u,
            CLOSED: "closed" + u,
            CLICK_DATA_API: "click" + u + ".data-api"
        },
        f = function () {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function () {
                t.removeData(this._element, c), this._element = null
            }, n._getRootElement = function (e) {
                var n = a.getSelectorFromElement(e),
                    i = !1;
                return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
            }, n._triggerCloseEvent = function (e) {
                var n = t.Event(h.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function (e) {
                var n = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var i = a.getTransitionDurationFromElement(e);
                    t(e).one(a.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function (e) {
                t(e).detach().trigger(h.CLOSED).remove()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this),
                        o = i.data(c);
                    o || (o = new e(this), i.data(c, o)), "close" === n && o[n](this)
                })
            }, e._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), t.fn[l] = f._jQueryInterface, t.fn[l].Constructor = f, t.fn[l].noConflict = function () {
        return t.fn[l] = d, f._jQueryInterface
    };
    var p = "button",
        g = "bs.button",
        m = "." + g,
        v = ".data-api",
        y = t.fn[p],
        _ = "active",
        b = '[data-toggle^="button"]',
        w = ".btn",
        C = {
            CLICK_DATA_API: "click" + m + v,
            FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
        },
        E = function () {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.toggle = function () {
                var e = !0,
                    n = !0,
                    i = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var o = this._element.querySelector('input:not([type="hidden"])');
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains(_)) e = !1;
                            else {
                                var r = i.querySelector(".active");
                                r && t(r).removeClass(_)
                            } if (e) {
                            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            o.checked = !this._element.classList.contains(_), t(o).trigger("change")
                        }
                        o.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)), e && t(this._element).toggleClass(_)
            }, n.dispose = function () {
                t.removeData(this._element, g), this._element = null
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(g);
                    i || (i = new e(this), t(this).data(g, i)), "toggle" === n && i[n]()
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(C.CLICK_DATA_API, b, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass("btn") || (n = t(n).closest(w)), E._jQueryInterface.call(t(n), "toggle")
    }).on(C.FOCUS_BLUR_DATA_API, b, function (e) {
        var n = t(e.target).closest(w)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), t.fn[p] = E._jQueryInterface, t.fn[p].Constructor = E, t.fn[p].noConflict = function () {
        return t.fn[p] = y, E._jQueryInterface
    };
    var x = "carousel",
        T = "bs.carousel",
        S = "." + T,
        A = ".data-api",
        I = t.fn[x],
        D = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        k = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        N = "next",
        O = "prev",
        L = {
            SLIDE: "slide" + S,
            SLID: "slid" + S,
            KEYDOWN: "keydown" + S,
            MOUSEENTER: "mouseenter" + S,
            MOUSELEAVE: "mouseleave" + S,
            TOUCHSTART: "touchstart" + S,
            TOUCHMOVE: "touchmove" + S,
            TOUCHEND: "touchend" + S,
            POINTERDOWN: "pointerdown" + S,
            POINTERUP: "pointerup" + S,
            DRAG_START: "dragstart" + S,
            LOAD_DATA_API: "load" + S + A,
            CLICK_DATA_API: "click" + S + A
        },
        j = "active",
        H = ".active.carousel-item",
        $ = ".carousel-indicators",
        P = {
            TOUCH: "touch",
            PEN: "pen"
        },
        q = function () {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector($), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = e.prototype;
            return n.next = function () {
                this._isSliding || this._slide(N)
            }, n.nextWhenVisible = function () {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function () {
                this._isSliding || this._slide(O)
            }, n.pause = function (e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function (e) {
                var n = this;
                this._activeElement = this._element.querySelector(H);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(L.SLID, function () {
                        return n.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var o = i < e ? N : O;
                        this._slide(o, this._items[e])
                    }
            }, n.dispose = function () {
                t(this._element).off(S), t.removeData(this._element, T), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function (e) {
                return e = r({}, D, e), a.typeCheckConfig(x, e, k), e
            }, n._handleSwipe = function () {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function () {
                var e = this;
                this._config.keyboard && t(this._element).on(L.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(L.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(L.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function () {
                var e = this;
                if (this._touchSupported) {
                    var n = function (t) {
                            e._pointerEvent && P[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function (t) {
                            e._pointerEvent && P[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, function (e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(L.POINTERDOWN, function (e) {
                        return n(e)
                    }), t(this._element).on(L.POINTERUP, function (e) {
                        return i(e)
                    }), this._element.classList.add("pointer-event")) : (t(this._element).on(L.TOUCHSTART, function (e) {
                        return n(e)
                    }), t(this._element).on(L.TOUCHMOVE, function (t) {
                        var n;
                        (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = n.originalEvent.touches[0].clientX - e.touchStartX
                    }), t(this._element).on(L.TOUCHEND, function (e) {
                        return i(e)
                    }))
                }
            }, n._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function (e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function (e, t) {
                var n = e === N,
                    i = e === O,
                    o = this._getItemIndex(t),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
                var s = (o + (e === O ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e),
                    o = this._getItemIndex(this._element.querySelector(H)),
                    r = t.Event(L.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: o,
                        to: i
                    });
                return t(this._element).trigger(r), r
            }, n._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(n).removeClass(j);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(j)
                }
            }, n._slide = function (e, n) {
                var i, o, r, s = this,
                    l = this._element.querySelector(H),
                    c = this._getItemIndex(l),
                    u = n || l && this._getItemByDirection(e, l),
                    d = this._getItemIndex(u),
                    h = Boolean(this._interval);
                if (r = e === N ? (i = "carousel-item-left", o = "carousel-item-next", "left") : (i = "carousel-item-right", o = "carousel-item-prev", "right"), u && t(u).hasClass(j)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && l && u) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
                    var f = t.Event(L.SLID, {
                        relatedTarget: u,
                        direction: r,
                        from: c,
                        to: d
                    });
                    if (t(this._element).hasClass("slide")) {
                        t(u).addClass(o), a.reflow(u), t(l).addClass(i), t(u).addClass(i);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        this._config.interval = p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, p) : this._config.defaultInterval || this._config.interval;
                        var g = a.getTransitionDurationFromElement(l);
                        t(l).one(a.TRANSITION_END, function () {
                            t(u).removeClass(i + " " + o).addClass(j), t(l).removeClass(j + " " + o + " " + i), s._isSliding = !1, setTimeout(function () {
                                return t(s._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(l).removeClass(j), t(u).addClass(j), this._isSliding = !1, t(this._element).trigger(f);
                    h && this.cycle()
                }
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(T),
                        o = r({}, D, t(this).data());
                    "object" == typeof n && (o = r({}, o, n));
                    var s = "string" == typeof n ? n : o.slide;
                    if (i || (i = new e(this, o), t(this).data(T, i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof s) {
                        if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                        i[s]()
                    } else o.interval && o.ride && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function (n) {
                var i = a.getSelectorFromElement(this);
                if (i) {
                    var o = t(i)[0];
                    if (o && t(o).hasClass("carousel")) {
                        var s = r({}, t(o).data(), t(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (s.interval = !1), e._jQueryInterface.call(t(o), s), l && t(o).data(T).to(l), n.preventDefault()
                    }
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return D
                }
            }]), e
        }();
    t(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", q._dataApiClickHandler), t(window).on(L.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
            var o = t(e[n]);
            q._jQueryInterface.call(o, o.data())
        }
    }), t.fn[x] = q._jQueryInterface, t.fn[x].Constructor = q, t.fn[x].noConflict = function () {
        return t.fn[x] = I, q._jQueryInterface
    };
    var R = "collapse",
        M = "bs.collapse",
        F = "." + M,
        B = t.fn[R],
        W = {
            toggle: !0,
            parent: ""
        },
        U = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Q = {
            SHOW: "show" + F,
            SHOWN: "shown" + F,
            HIDE: "hide" + F,
            HIDDEN: "hidden" + F,
            CLICK_DATA_API: "click" + F + ".data-api"
        },
        z = "show",
        K = "collapse",
        V = "collapsing",
        X = "collapsed",
        Y = '[data-toggle="collapse"]',
        G = function () {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Y)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = a.getSelectorFromElement(r),
                        l = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                            return t === e
                        });
                    null !== s && 0 < l.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = e.prototype;
            return n.toggle = function () {
                t(this._element).hasClass(z) ? this.hide() : this.show()
            }, n.show = function () {
                var n, i, o = this;
                if (!(this._isTransitioning || t(this._element).hasClass(z) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
                        return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(K)
                    })).length && (n = null), n && (i = t(n).not(this._selector).data(M)) && i._isTransitioning))) {
                    var r = t.Event(Q.SHOW);
                    if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(M, null));
                        var s = this._getDimension();
                        t(this._element).removeClass(K).addClass(V), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(X).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = a.getTransitionDurationFromElement(this._element);
                        t(this._element).one(a.TRANSITION_END, function () {
                            t(o._element).removeClass(V).addClass(K).addClass(z), o._element.style[s] = "", o.setTransitioning(!1), t(o._element).trigger(Q.SHOWN)
                        }).emulateTransitionEnd(c), this._element.style[s] = this._element[l] + "px"
                    }
                }
            }, n.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(z)) {
                    var n = t.Event(Q.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), t(this._element).addClass(V).removeClass(K).removeClass(z);
                        var o = this._triggerArray.length;
                        if (0 < o)
                            for (var r = 0; r < o; r++) {
                                var s = this._triggerArray[r],
                                    l = a.getSelectorFromElement(s);
                                null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass(z) || t(s).addClass(X).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var c = a.getTransitionDurationFromElement(this._element);
                        t(this._element).one(a.TRANSITION_END, function () {
                            e.setTransitioning(!1), t(e._element).removeClass(V).addClass(K).trigger(Q.HIDDEN)
                        }).emulateTransitionEnd(c)
                    }
                }
            }, n.setTransitioning = function (e) {
                this._isTransitioning = e
            }, n.dispose = function () {
                t.removeData(this._element, M), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function (e) {
                return (e = r({}, W, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(R, e, U), e
            }, n._getDimension = function () {
                return t(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function () {
                var n, i = this;
                a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(n.querySelectorAll(o));
                return t(r).each(function (t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function (e, n) {
                var i = t(e).hasClass(z);
                n.length && t(n).toggleClass(X, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function (e) {
                var t = a.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this),
                        o = i.data(M),
                        s = r({}, W, i.data(), "object" == typeof n && n ? n : {});
                    if (!o && s.toggle && /show|hide/.test(n) && (s.toggle = !1), o || (o = new e(this, s), i.data(M, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return W
                }
            }]), e
        }();
    t(document).on(Q.CLICK_DATA_API, Y, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
            i = a.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
        t(o).each(function () {
            var e = t(this),
                i = e.data(M) ? "toggle" : n.data();
            G._jQueryInterface.call(e, i)
        })
    }), t.fn[R] = G._jQueryInterface, t.fn[R].Constructor = G, t.fn[R].noConflict = function () {
        return t.fn[R] = B, G._jQueryInterface
    };
    var J = "dropdown",
        Z = "bs.dropdown",
        ee = "." + Z,
        te = ".data-api",
        ne = t.fn[J],
        ie = new RegExp("38|40|27"),
        oe = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            CLICK: "click" + ee,
            CLICK_DATA_API: "click" + ee + te,
            KEYDOWN_DATA_API: "keydown" + ee + te,
            KEYUP_DATA_API: "keyup" + ee + te
        },
        re = "disabled",
        se = "show",
        ae = "dropdown-menu-right",
        le = '[data-toggle="dropdown"]',
        ce = ".dropdown-menu",
        ue = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        de = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        he = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var i = e.prototype;
            return i.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass(re)) {
                    var i = e._getParentFromElement(this._element),
                        o = t(this._menu).hasClass(se);
                    if (e._clearMenus(), !o) {
                        var r = {
                                relatedTarget: this._element
                            },
                            s = t.Event(oe.SHOW, r);
                        if (t(i).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var l = this._element;
                                "parent" === this._config.reference ? l = i : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(i).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(i).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(se), t(i).toggleClass(se).trigger(t.Event(oe.SHOWN, r))
                        }
                    }
                }
            }, i.show = function () {
                if (!(this._element.disabled || t(this._element).hasClass(re) || t(this._menu).hasClass(se))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(oe.SHOW, n),
                        o = e._getParentFromElement(this._element);
                    t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(se), t(o).toggleClass(se).trigger(t.Event(oe.SHOWN, n)))
                }
            }, i.hide = function () {
                if (!this._element.disabled && !t(this._element).hasClass(re) && t(this._menu).hasClass(se)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(oe.HIDE, n),
                        o = e._getParentFromElement(this._element);
                    t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(se), t(o).toggleClass(se).trigger(t.Event(oe.HIDDEN, n)))
                }
            }, i.dispose = function () {
                t.removeData(this._element, Z), t(this._element).off(ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function () {
                var e = this;
                t(this._element).on(oe.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, i._getConfig = function (e) {
                return e = r({}, this.constructor.Default, t(this._element).data(), e), a.typeCheckConfig(J, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(ce))
                }
                return this._menu
            }, i._getPlacement = function () {
                var e = t(this._element.parentNode),
                    n = "bottom-start";
                return e.hasClass("dropup") ? (n = "top-start", t(this._menu).hasClass(ae) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(ae) && (n = "bottom-end"), n
            }, i._detectNavbar = function () {
                return 0 < t(this._element).closest(".navbar").length
            }, i._getOffset = function () {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, i._getPopperConfig = function () {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(Z);
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(Z, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e._clearMenus = function (n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll(le)), o = 0, r = i.length; o < r; o++) {
                        var s = e._getParentFromElement(i[o]),
                            a = t(i[o]).data(Z),
                            l = {
                                relatedTarget: i[o]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), a) {
                            var c = a._menu;
                            if (t(s).hasClass(se) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                                var u = t.Event(oe.HIDE, l);
                                t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[o].setAttribute("aria-expanded", "false"), t(c).removeClass(se), t(s).removeClass(se).trigger(t.Event(oe.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function (e) {
                var t, n = a.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function (n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(ce).length)) : ie.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(re))) {
                    var i = e._getParentFromElement(this),
                        o = t(i).hasClass(se);
                    if (o && (!o || 27 !== n.which && 32 !== n.which)) {
                        var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== r.length) {
                            var s = r.indexOf(n.target);
                            38 === n.which && 0 < s && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var a = i.querySelector(le);
                            t(a).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return ue
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return de
                }
            }]), e
        }();
    t(document).on(oe.KEYDOWN_DATA_API, le, he._dataApiKeydownHandler).on(oe.KEYDOWN_DATA_API, ce, he._dataApiKeydownHandler).on(oe.CLICK_DATA_API + " " + oe.KEYUP_DATA_API, he._clearMenus).on(oe.CLICK_DATA_API, le, function (e) {
        e.preventDefault(), e.stopPropagation(), he._jQueryInterface.call(t(this), "toggle")
    }).on(oe.CLICK_DATA_API, ".dropdown form", function (e) {
        e.stopPropagation()
    }), t.fn[J] = he._jQueryInterface, t.fn[J].Constructor = he, t.fn[J].noConflict = function () {
        return t.fn[J] = ne, he._jQueryInterface
    };
    var fe = "modal",
        pe = "bs.modal",
        ge = "." + pe,
        me = t.fn[fe],
        ve = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        ye = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        _e = {
            HIDE: "hide" + ge,
            HIDDEN: "hidden" + ge,
            SHOW: "show" + ge,
            SHOWN: "shown" + ge,
            FOCUSIN: "focusin" + ge,
            RESIZE: "resize" + ge,
            CLICK_DISMISS: "click.dismiss" + ge,
            KEYDOWN_DISMISS: "keydown.dismiss" + ge,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ge,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ge,
            CLICK_DATA_API: "click" + ge + ".data-api"
        },
        be = "modal-open",
        we = "fade",
        Ce = "show",
        Ee = ".modal-dialog",
        xe = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Te = ".sticky-top",
        Se = function () {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Ee), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = e.prototype;
            return n.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function (e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(we) && (this._isTransitioning = !0);
                    var i = t.Event(_e.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(_e.CLICK_DISMISS, '[data-dismiss="modal"]', function (e) {
                        return n.hide(e)
                    }), t(this._dialog).on(_e.MOUSEDOWN_DISMISS, function () {
                        t(n._element).one(_e.MOUSEUP_DISMISS, function (e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function (e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = t.Event(_e.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = t(this._element).hasClass(we);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(_e.FOCUSIN), t(this._element).removeClass(Ce), t(this._element).off(_e.CLICK_DISMISS), t(this._dialog).off(_e.MOUSEDOWN_DISMISS), o) {
                            var r = a.getTransitionDurationFromElement(this._element);
                            t(this._element).one(a.TRANSITION_END, function (e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function () {
                [window, this._element, this._dialog].forEach(function (e) {
                    return t(e).off(ge)
                }), t(document).off(_e.FOCUSIN), t.removeData(this._element, pe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function () {
                this._adjustDialog()
            }, n._getConfig = function (e) {
                return e = r({}, ve, e), a.typeCheckConfig(fe, e, ye), e
            }, n._showElement = function (e) {
                var n = this,
                    i = t(this._element).hasClass(we);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, i && a.reflow(this._element), t(this._element).addClass(Ce), this._config.focus && this._enforceFocus();
                var o = t.Event(_e.SHOWN, {
                        relatedTarget: e
                    }),
                    r = function () {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                    };
                if (i) {
                    var s = a.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, n._enforceFocus = function () {
                var e = this;
                t(document).off(_e.FOCUSIN).on(_e.FOCUSIN, function (n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(_e.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(_e.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function () {
                var e = this;
                this._isShown ? t(window).on(_e.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : t(window).off(_e.RESIZE)
            }, n._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                    t(document.body).removeClass(be), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(_e.HIDDEN)
                })
            }, n._removeBackdrop = function () {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function (e) {
                var n = this,
                    i = t(this._element).hasClass(we) ? we : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(_e.CLICK_DISMISS, function (e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), i && a.reflow(this._backdrop), t(this._backdrop).addClass(Ce), !e) return;
                    if (!i) return void e();
                    var o = a.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(Ce);
                    var r = function () {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(we)) {
                        var s = a.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else e && e()
            }, n._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(xe)),
                        i = [].slice.call(document.querySelectorAll(Te));
                    t(n).each(function (n, i) {
                        var o = i.style.paddingRight,
                            r = t(i).css("padding-right");
                        t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), t(i).each(function (n, i) {
                        var o = i.style.marginRight,
                            r = t(i).css("margin-right");
                        t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    });
                    var o = document.body.style.paddingRight,
                        r = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(be)
            }, n._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(xe));
                t(e).each(function (e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + Te));
                t(n).each(function (e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var o = t(this).data(pe),
                        s = r({}, ve, t(this).data(), "object" == typeof n && n ? n : {});
                    if (o || (o = new e(this, s), t(this).data(pe, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](i)
                    } else s.show && o.show(i)
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return ve
                }
            }]), e
        }();
    t(document).on(_e.CLICK_DATA_API, '[data-toggle="modal"]', function (e) {
        var n, i = this,
            o = a.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var s = t(n).data(pe) ? "toggle" : r({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = t(n).one(_e.SHOW, function (e) {
            e.isDefaultPrevented() || l.one(_e.HIDDEN, function () {
                t(i).is(":visible") && i.focus()
            })
        });
        Se._jQueryInterface.call(t(n), s, this)
    }), t.fn[fe] = Se._jQueryInterface, t.fn[fe].Constructor = Se, t.fn[fe].noConflict = function () {
        return t.fn[fe] = me, Se._jQueryInterface
    };
    var Ae = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ie = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function ke(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = function (e, n) {
                var i = r[e],
                    s = i.nodeName.toLowerCase();
                if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var a = [].slice.call(i.attributes),
                    l = [].concat(t["*"] || [], t[s] || []);
                a.forEach(function (e) {
                    (function (e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Ae.indexOf(n) || Boolean(e.nodeValue.match(Ie) || e.nodeValue.match(De));
                        for (var i = t.filter(function (e) {
                                return e instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(e, l) || i.removeAttribute(e.nodeName)
                })
            }, a = 0, l = r.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Ne = "tooltip",
        Oe = "bs.tooltip",
        Le = "." + Oe,
        je = t.fn[Ne],
        He = "bs-tooltip",
        $e = new RegExp("(^|\\s)" + He + "\\S+", "g"),
        Pe = ["sanitize", "whiteList", "sanitizeFn"],
        qe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Re = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Me = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        Fe = "show",
        Be = {
            HIDE: "hide" + Le,
            HIDDEN: "hidden" + Le,
            SHOW: "show" + Le,
            SHOWN: "shown" + Le,
            INSERTED: "inserted" + Le,
            CLICK: "click" + Le,
            FOCUSIN: "focusin" + Le,
            FOCUSOUT: "focusout" + Le,
            MOUSEENTER: "mouseenter" + Le,
            MOUSELEAVE: "mouseleave" + Le
        },
        We = "fade",
        Ue = "show",
        Qe = "hover",
        ze = "focus",
        Ke = function () {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var i = e.prototype;
            return i.enable = function () {
                this._isEnabled = !0
            }, i.disable = function () {
                this._isEnabled = !1
            }, i.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function (e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY,
                            i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(Ue)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, i.dispose = function () {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var o = a.findShadowRoot(this.element),
                        r = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r) return;
                    var s = this.getTipElement(),
                        l = a.getUID(this.constructor.NAME);
                    s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(s).addClass(We);
                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        u = this._getAttachment(c);
                    this.addAttachmentClass(u);
                    var d = this._getContainer();
                    t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
                        placement: u,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(s).addClass(Ue), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var h = function () {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(We)) {
                        var f = a.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(a.TRANSITION_END, h).emulateTransitionEnd(f)
                    } else h()
                }
            }, i.hide = function (e) {
                var n = this,
                    i = this.getTipElement(),
                    o = t.Event(this.constructor.Event.HIDE),
                    r = function () {
                        n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (t(i).removeClass(Ue), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[ze] = !1, this._activeTrigger[Qe] = !1, t(this.tip).hasClass(We)) {
                        var s = a.getTransitionDurationFromElement(i);
                        t(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, i.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function () {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass(He + "-" + e)
            }, i.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, i.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(We + " " + Ue)
            }, i.setElementContent = function (e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = ke(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, i.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, i._getOffset = function () {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function (t) {
                    return t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, i._getContainer = function () {
                return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, i._getAttachment = function (e) {
                return Re[e.toUpperCase()]
            }, i._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== n) {
                        var i = n === Qe ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            o = n === Qe ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(o, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function () {
                    e.element && e.hide()
                }), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? ze : Qe] = !0), t(n.getTipElement()).hasClass(Ue) || n._hoverState === Fe ? n._hoverState = Fe : (clearTimeout(n._timeout), n._hoverState = Fe, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === Fe && n.show()
                }, n.config.delay.show) : n.show())
            }, i._leave = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? ze : Qe] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    "out" === n._hoverState && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, i._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function (e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function (e) {
                    -1 !== Pe.indexOf(e) && delete n[e]
                }), "number" == typeof (e = r({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), a.typeCheckConfig(Ne, e, this.constructor.DefaultType), e.sanitize && (e.template = ke(e.template, e.whiteList, e.sanitizeFn)), e
            }, i._getDelegateConfig = function () {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match($e);
                null !== n && n.length && e.removeClass(n.join(""))
            }, i._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function () {
                var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(We), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(Oe),
                        o = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, o), t(this).data(Oe, i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Me
                }
            }, {
                key: "NAME",
                get: function () {
                    return Ne
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return Oe
                }
            }, {
                key: "Event",
                get: function () {
                    return Be
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return Le
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return qe
                }
            }]), e
        }();
    t.fn[Ne] = Ke._jQueryInterface, t.fn[Ne].Constructor = Ke, t.fn[Ne].noConflict = function () {
        return t.fn[Ne] = je, Ke._jQueryInterface
    };
    var Ve = "popover",
        Xe = "bs.popover",
        Ye = "." + Xe,
        Ge = t.fn[Ve],
        Je = "bs-popover",
        Ze = new RegExp("(^|\\s)" + Je + "\\S+", "g"),
        et = r({}, Ke.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        tt = r({}, Ke.DefaultType, {
            content: "(string|element|function)"
        }),
        nt = {
            HIDE: "hide" + Ye,
            HIDDEN: "hidden" + Ye,
            SHOW: "show" + Ye,
            SHOWN: "shown" + Ye,
            INSERTED: "inserted" + Ye,
            CLICK: "click" + Ye,
            FOCUSIN: "focusin" + Ye,
            FOCUSOUT: "focusout" + Ye,
            MOUSEENTER: "mouseenter" + Ye,
            MOUSELEAVE: "mouseleave" + Ye
        },
        it = function (e) {
            var n, i;

            function r() {
                return e.apply(this, arguments) || this
            }
            i = e, (n = r).prototype = Object.create(i.prototype), (n.prototype.constructor = n).__proto__ = i;
            var s = r.prototype;
            return s.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass(Je + "-" + e)
            }, s.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, s.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
            }, s._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Ze);
                null !== n && 0 < n.length && e.removeClass(n.join(""))
            }, r._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data(Xe),
                        i = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data(Xe, n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, o(r, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return et
                }
            }, {
                key: "NAME",
                get: function () {
                    return Ve
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return Xe
                }
            }, {
                key: "Event",
                get: function () {
                    return nt
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return Ye
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return tt
                }
            }]), r
        }(Ke);
    t.fn[Ve] = it._jQueryInterface, t.fn[Ve].Constructor = it, t.fn[Ve].noConflict = function () {
        return t.fn[Ve] = Ge, it._jQueryInterface
    };
    var ot = "scrollspy",
        rt = "bs.scrollspy",
        st = "." + rt,
        at = t.fn[ot],
        lt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ct = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        ut = {
            ACTIVATE: "activate" + st,
            SCROLL: "scroll" + st,
            LOAD_DATA_API: "load" + st + ".data-api"
        },
        dt = "active",
        ht = ".nav, .list-group",
        ft = ".nav-link",
        pt = ".list-group-item",
        gt = ".dropdown-item",
        mt = "position",
        vt = function () {
            function e(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + ft + "," + this._config.target + " " + pt + "," + this._config.target + " " + gt, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(ut.SCROLL, function (e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }
            var n = e.prototype;
            return n.refresh = function () {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? "offset" : mt,
                    i = "auto" === this._config.method ? n : this._config.method,
                    o = i === mt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                    var n, r = a.getSelectorFromElement(e);
                    if (r && (n = document.querySelector(r)), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [t(n)[i]().top + o, r]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function () {
                t.removeData(this._element, rt), t(this._scrollElement).off(st), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function (e) {
                if ("string" != typeof (e = r({}, lt, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = a.getUID(ot), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return a.typeCheckConfig(ot, e, ct), e
            }, n._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, n._activate = function (e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function (t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(dt), i.addClass(dt)) : (i.addClass(dt), i.parents(ht).prev(ft + ", " + pt).addClass(dt), i.parents(ht).prev(".nav-item").children(ft).addClass(dt)), t(this._scrollElement).trigger(ut.ACTIVATE, {
                    relatedTarget: e
                })
            }, n._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
                    return e.classList.contains(dt)
                }).forEach(function (e) {
                    return e.classList.remove(dt)
                })
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data(rt);
                    if (i || (i = new e(this, "object" == typeof n && n), t(this).data(rt, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return lt
                }
            }]), e
        }();
    t(window).on(ut.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
            var i = t(e[n]);
            vt._jQueryInterface.call(i, i.data())
        }
    }), t.fn[ot] = vt._jQueryInterface, t.fn[ot].Constructor = vt, t.fn[ot].noConflict = function () {
        return t.fn[ot] = at, vt._jQueryInterface
    };
    var yt = "bs.tab",
        _t = "." + yt,
        bt = t.fn.tab,
        wt = {
            HIDE: "hide" + _t,
            HIDDEN: "hidden" + _t,
            SHOW: "show" + _t,
            SHOWN: "shown" + _t,
            CLICK_DATA_API: "click" + _t + ".data-api"
        },
        Ct = "active",
        Et = ".active",
        xt = "> li > .active",
        Tt = function () {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Ct) || t(this._element).hasClass("disabled"))) {
                    var n, i, o = t(this._element).closest(".nav, .list-group")[0],
                        r = a.getSelectorFromElement(this._element);
                    if (o) {
                        var s = "UL" === o.nodeName || "OL" === o.nodeName ? xt : Et;
                        i = (i = t.makeArray(t(o).find(s)))[i.length - 1]
                    }
                    var l = t.Event(wt.HIDE, {
                            relatedTarget: this._element
                        }),
                        c = t.Event(wt.SHOW, {
                            relatedTarget: i
                        });
                    if (i && t(i).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        r && (n = document.querySelector(r)), this._activate(this._element, o);
                        var u = function () {
                            var n = t.Event(wt.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                o = t.Event(wt.SHOWN, {
                                    relatedTarget: i
                                });
                            t(i).trigger(n), t(e._element).trigger(o)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function () {
                t.removeData(this._element, yt), this._element = null
            }, n._activate = function (e, n, i) {
                var o = this,
                    r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Et) : t(n).find(xt))[0],
                    s = i && r && t(r).hasClass("fade"),
                    l = function () {
                        return o._transitionComplete(e, r, i)
                    };
                if (r && s) {
                    var c = a.getTransitionDurationFromElement(r);
                    t(r).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }, n._transitionComplete = function (e, n, i) {
                if (n) {
                    t(n).removeClass(Ct);
                    var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    o && t(o).removeClass(Ct), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(Ct), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var r = t(e).closest(".dropdown")[0];
                    if (r) {
                        var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        t(s).addClass(Ct)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this),
                        o = i.data(yt);
                    if (o || (o = new e(this), i.data(yt, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(wt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
        e.preventDefault(), Tt._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = Tt._jQueryInterface, t.fn.tab.Constructor = Tt, t.fn.tab.noConflict = function () {
        return t.fn.tab = bt, Tt._jQueryInterface
    };
    var St = "toast",
        At = "bs.toast",
        It = "." + At,
        Dt = t.fn[St],
        kt = {
            CLICK_DISMISS: "click.dismiss" + It,
            HIDE: "hide" + It,
            HIDDEN: "hidden" + It,
            SHOW: "show" + It,
            SHOWN: "shown" + It
        },
        Nt = "show",
        Ot = "showing",
        Lt = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        jt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Ht = function () {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var n = e.prototype;
            return n.show = function () {
                var e = this;
                t(this._element).trigger(kt.SHOW), this._config.animation && this._element.classList.add("fade");
                var n = function () {
                    e._element.classList.remove(Ot), e._element.classList.add(Nt), t(e._element).trigger(kt.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(Ot), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, n.hide = function (e) {
                var n = this;
                this._element.classList.contains(Nt) && (t(this._element).trigger(kt.HIDE), e ? this._close() : this._timeout = setTimeout(function () {
                    n._close()
                }, this._config.delay))
            }, n.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Nt) && this._element.classList.remove(Nt), t(this._element).off(kt.CLICK_DISMISS), t.removeData(this._element, At), this._element = null, this._config = null
            }, n._getConfig = function (e) {
                return e = r({}, jt, t(this._element).data(), "object" == typeof e && e ? e : {}), a.typeCheckConfig(St, e, this.constructor.DefaultType), e
            }, n._setListeners = function () {
                var e = this;
                t(this._element).on(kt.CLICK_DISMISS, '[data-dismiss="toast"]', function () {
                    return e.hide(!0)
                })
            }, n._close = function () {
                var e = this,
                    n = function () {
                        e._element.classList.add("hide"), t(e._element).trigger(kt.HIDDEN)
                    };
                if (this._element.classList.remove(Nt), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this),
                        o = i.data(At);
                    if (o || (o = new e(this, "object" == typeof n && n), i.data(At, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](this)
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Lt
                }
            }, {
                key: "Default",
                get: function () {
                    return jt
                }
            }]), e
        }();
    t.fn[St] = Ht._jQueryInterface, t.fn[St].Constructor = Ht, t.fn[St].noConflict = function () {
            return t.fn[St] = Dt, Ht._jQueryInterface
        },
        function () {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = a, e.Alert = f, e.Button = E, e.Carousel = q, e.Collapse = G, e.Dropdown = he, e.Modal = Se, e.Popover = it, e.Scrollspy = vt, e.Tab = Tt, e.Toast = Ht, e.Tooltip = Ke, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}),
function (e) {
    "use strict";
    var t = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    ! function (e) {
        var n = "ekkoLightbox",
            i = e.fn[n],
            o = {
                title: "",
                footer: "",
                maxWidth: 9999,
                maxHeight: 9999,
                showArrows: !0,
                wrapping: !0,
                type: null,
                alwaysShowClose: !1,
                loadingMessage: '<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>',
                leftArrow: "<span>&#10094;</span>",
                rightArrow: "<span>&#10095;</span>",
                strings: {
                    close: "Close",
                    fail: "Failed to load image:",
                    type: "Could not detect remote target type. Force the type using data-type"
                },
                doc: document,
                onShow: function () {},
                onShown: function () {},
                onHide: function () {},
                onHidden: function () {},
                onNavigate: function () {},
                onContentLoaded: function () {}
            },
            r = function () {
                function n(t, i) {
                    var r = this;
                    (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, n), this._config = e.extend({}, o, i), this._$modalArrows = null, this._galleryIndex = 0, this._galleryName = null, this._padding = null, this._border = null, this._titleIsShown = !1, this._footerIsShown = !1, this._wantedWidth = 0, this._wantedHeight = 0, this._touchstartX = 0, this._touchendX = 0, this._modalId = "ekkoLightbox-" + Math.floor(1e3 * Math.random() + 1), this._$element = t instanceof jQuery ? t : e(t), this._isBootstrap3 = 3 == e.fn.modal.Constructor.VERSION[0];
                    var s = '<h4 class="modal-title">' + (this._config.title || "&nbsp;") + "</h4>",
                        a = '<button type="button" class="close" data-dismiss="modal" aria-label="' + this._config.strings.close + '"><span aria-hidden="true">&times;</span></button>',
                        l = '<div class="modal-dialog" role="document"><div class="modal-content">' + ('<div class="modal-header' + (this._config.title || this._config.alwaysShowClose ? "" : " hide") + '">' + (this._isBootstrap3 ? a + s : s + a) + "</div>") + '<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>' + ('<div class="modal-footer' + (this._config.footer ? "" : " hide") + '">' + (this._config.footer || "&nbsp;") + "</div>") + "</div></div>";
                    e(this._config.doc.body).append('<div id="' + this._modalId + '" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">' + l + "</div>"), this._$modal = e("#" + this._modalId, this._config.doc), this._$modalDialog = this._$modal.find(".modal-dialog").first(), this._$modalContent = this._$modal.find(".modal-content").first(), this._$modalBody = this._$modal.find(".modal-body").first(), this._$modalHeader = this._$modal.find(".modal-header").first(), this._$modalFooter = this._$modal.find(".modal-footer").first(), this._$lightboxContainer = this._$modalBody.find(".ekko-lightbox-container").first(), this._$lightboxBodyOne = this._$lightboxContainer.find("> div:first-child").first(), this._$lightboxBodyTwo = this._$lightboxContainer.find("> div:last-child").first(), this._border = this._calculateBorders(), this._padding = this._calculatePadding(), this._galleryName = this._$element.data("gallery"), this._galleryName && (this._$galleryItems = e(document.body).find('*[data-gallery="' + this._galleryName + '"]'), this._galleryIndex = this._$galleryItems.index(this._$element), e(document).on("keydown.ekkoLightbox", this._navigationalBinder.bind(this)), this._config.showArrows && this._$galleryItems.length > 1 && (this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">' + this._config.leftArrow + '</a><a href="#">' + this._config.rightArrow + "</a></div>"), this._$modalArrows = this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay").first(), this._$lightboxContainer.on("click", "a:first-child", function (e) {
                        return e.preventDefault(), r.navigateLeft()
                    }), this._$lightboxContainer.on("click", "a:last-child", function (e) {
                        return e.preventDefault(), r.navigateRight()
                    }), this.updateNavigation())), this._$modal.on("show.bs.modal", this._config.onShow.bind(this)).on("shown.bs.modal", function () {
                        return r._toggleLoading(!0), r._handle(), r._config.onShown.call(r)
                    }).on("hide.bs.modal", this._config.onHide.bind(this)).on("hidden.bs.modal", function () {
                        return r._galleryName && (e(document).off("keydown.ekkoLightbox"), e(window).off("resize.ekkoLightbox")), r._$modal.remove(), r._config.onHidden.call(r)
                    }).modal(this._config), e(window).on("resize.ekkoLightbox", function () {
                        r._resize(r._wantedWidth, r._wantedHeight)
                    }), this._$lightboxContainer.on("touchstart", function () {
                        r._touchstartX = event.changedTouches[0].screenX
                    }).on("touchend", function () {
                        r._touchendX = event.changedTouches[0].screenX, r._swipeGesure()
                    })
                }
                return t(n, null, [{
                    key: "Default",
                    get: function () {
                        return o
                    }
                }]), t(n, [{
                    key: "element",
                    value: function () {
                        return this._$element
                    }
                }, {
                    key: "modal",
                    value: function () {
                        return this._$modal
                    }
                }, {
                    key: "navigateTo",
                    value: function (t) {
                        return t < 0 || t > this._$galleryItems.length - 1 ? this : (this._galleryIndex = t, this.updateNavigation(), this._$element = e(this._$galleryItems.get(this._galleryIndex)), void this._handle())
                    }
                }, {
                    key: "navigateLeft",
                    value: function () {
                        if (this._$galleryItems && 1 !== this._$galleryItems.length) {
                            if (0 === this._galleryIndex) {
                                if (!this._config.wrapping) return;
                                this._galleryIndex = this._$galleryItems.length - 1
                            } else this._galleryIndex--;
                            return this._config.onNavigate.call(this, "left", this._galleryIndex), this.navigateTo(this._galleryIndex)
                        }
                    }
                }, {
                    key: "navigateRight",
                    value: function () {
                        if (this._$galleryItems && 1 !== this._$galleryItems.length) {
                            if (this._galleryIndex === this._$galleryItems.length - 1) {
                                if (!this._config.wrapping) return;
                                this._galleryIndex = 0
                            } else this._galleryIndex++;
                            return this._config.onNavigate.call(this, "right", this._galleryIndex), this.navigateTo(this._galleryIndex)
                        }
                    }
                }, {
                    key: "updateNavigation",
                    value: function () {
                        if (!this._config.wrapping) {
                            var e = this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay");
                            0 === this._galleryIndex ? e.find("a:first-child").addClass("disabled") : e.find("a:first-child").removeClass("disabled"), this._galleryIndex === this._$galleryItems.length - 1 ? e.find("a:last-child").addClass("disabled") : e.find("a:last-child").removeClass("disabled")
                        }
                    }
                }, {
                    key: "close",
                    value: function () {
                        return this._$modal.modal("hide")
                    }
                }, {
                    key: "_navigationalBinder",
                    value: function (e) {
                        return 39 === (e = e || window.event).keyCode ? this.navigateRight() : 37 === e.keyCode ? this.navigateLeft() : void 0
                    }
                }, {
                    key: "_detectRemoteType",
                    value: function (e, t) {
                        return !(t = t || !1) && this._isImage(e) && (t = "image"), !t && this._getYoutubeId(e) && (t = "youtube"), !t && this._getVimeoId(e) && (t = "vimeo"), !t && this._getInstagramId(e) && (t = "instagram"), ("audio" == t || "video" == t || !t && this._isMedia(e)) && (t = "media"), (!t || ["image", "youtube", "vimeo", "instagram", "media", "url"].indexOf(t) < 0) && (t = "url"), t
                    }
                }, {
                    key: "_getRemoteContentType",
                    value: function (t) {
                        return e.ajax({
                            type: "HEAD",
                            url: t,
                            async: !1
                        }).getResponseHeader("Content-Type")
                    }
                }, {
                    key: "_isImage",
                    value: function (e) {
                        return e && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
                    }
                }, {
                    key: "_isMedia",
                    value: function (e) {
                        return e && e.match(/(\.(mp3|mp4|ogg|webm|wav)((\?|#).*)?$)/i)
                    }
                }, {
                    key: "_containerToUse",
                    value: function () {
                        var e = this,
                            t = this._$lightboxBodyTwo,
                            n = this._$lightboxBodyOne;
                        return this._$lightboxBodyTwo.hasClass("in") && (t = this._$lightboxBodyOne, n = this._$lightboxBodyTwo), n.removeClass("in show"), setTimeout(function () {
                            e._$lightboxBodyTwo.hasClass("in") || e._$lightboxBodyTwo.empty(), e._$lightboxBodyOne.hasClass("in") || e._$lightboxBodyOne.empty()
                        }, 500), t.addClass("in show"), t
                    }
                }, {
                    key: "_handle",
                    value: function () {
                        var e = this._containerToUse();
                        this._updateTitleAndFooter();
                        var t = this._$element.attr("data-remote") || this._$element.attr("href"),
                            n = this._detectRemoteType(t, this._$element.attr("data-type") || !1);
                        if (["image", "youtube", "vimeo", "instagram", "media", "url"].indexOf(n) < 0) return this._error(this._config.strings.type);
                        switch (n) {
                            case "image":
                                this._preloadImage(t, e), this._preloadImageByIndex(this._galleryIndex, 3);
                                break;
                            case "youtube":
                                this._showYoutubeVideo(t, e);
                                break;
                            case "vimeo":
                                this._showVimeoVideo(this._getVimeoId(t), e);
                                break;
                            case "instagram":
                                this._showInstagramVideo(this._getInstagramId(t), e);
                                break;
                            case "media":
                                this._showHtml5Media(t, e);
                                break;
                            default:
                                this._loadRemoteContent(t, e)
                        }
                        return this
                    }
                }, {
                    key: "_getYoutubeId",
                    value: function (e) {
                        if (!e) return !1;
                        var t = e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                        return !(!t || 11 !== t[2].length) && t[2]
                    }
                }, {
                    key: "_getVimeoId",
                    value: function (e) {
                        return !!(e && e.indexOf("vimeo") > 0) && e
                    }
                }, {
                    key: "_getInstagramId",
                    value: function (e) {
                        return !!(e && e.indexOf("instagram") > 0) && e
                    }
                }, {
                    key: "_toggleLoading",
                    value: function (t) {
                        return (t = t || !1) ? (this._$modalDialog.css("display", "none"), this._$modal.removeClass("in show"), e(".modal-backdrop").append(this._config.loadingMessage)) : (this._$modalDialog.css("display", "block"), this._$modal.addClass("in show"), e(".modal-backdrop").find(".ekko-lightbox-loader").remove()), this
                    }
                }, {
                    key: "_calculateBorders",
                    value: function () {
                        return {
                            top: this._totalCssByAttribute("border-top-width"),
                            right: this._totalCssByAttribute("border-right-width"),
                            bottom: this._totalCssByAttribute("border-bottom-width"),
                            left: this._totalCssByAttribute("border-left-width")
                        }
                    }
                }, {
                    key: "_calculatePadding",
                    value: function () {
                        return {
                            top: this._totalCssByAttribute("padding-top"),
                            right: this._totalCssByAttribute("padding-right"),
                            bottom: this._totalCssByAttribute("padding-bottom"),
                            left: this._totalCssByAttribute("padding-left")
                        }
                    }
                }, {
                    key: "_totalCssByAttribute",
                    value: function (e) {
                        return parseInt(this._$modalDialog.css(e), 10) + parseInt(this._$modalContent.css(e), 10) + parseInt(this._$modalBody.css(e), 10)
                    }
                }, {
                    key: "_updateTitleAndFooter",
                    value: function () {
                        var e = this._$element.data("title") || "",
                            t = this._$element.data("footer") || "";
                        return this._titleIsShown = !1, e || this._config.alwaysShowClose ? (this._titleIsShown = !0, this._$modalHeader.css("display", "").find(".modal-title").html(e || "&nbsp;")) : this._$modalHeader.css("display", "none"), this._footerIsShown = !1, t ? (this._footerIsShown = !0, this._$modalFooter.css("display", "").html(t)) : this._$modalFooter.css("display", "none"), this
                    }
                }, {
                    key: "_showYoutubeVideo",
                    value: function (e, t) {
                        var n = this._getYoutubeId(e),
                            i = e.indexOf("&") > 0 ? e.substr(e.indexOf("&")) : "",
                            o = this._$element.data("width") || 560,
                            r = this._$element.data("height") || o / (560 / 315);
                        return this._showVideoIframe("//www.youtube.com/embed/" + n + "?badge=0&autoplay=1&html5=1" + i, o, r, t)
                    }
                }, {
                    key: "_showVimeoVideo",
                    value: function (e, t) {
                        var n = this._$element.data("width") || 500,
                            i = this._$element.data("height") || n / (560 / 315);
                        return this._showVideoIframe(e + "?autoplay=1", n, i, t)
                    }
                }, {
                    key: "_showInstagramVideo",
                    value: function (e, t) {
                        var n = this._$element.data("width") || 612,
                            i = n + 80;
                        return e = "/" !== e.substr(-1) ? e + "/" : e, t.html('<iframe width="' + n + '" height="' + i + '" src="' + e + 'embed/" frameborder="0" allowfullscreen></iframe>'), this._resize(n, i), this._config.onContentLoaded.call(this), this._$modalArrows && this._$modalArrows.css("display", "none"), this._toggleLoading(!1), this
                    }
                }, {
                    key: "_showVideoIframe",
                    value: function (e, t, n, i) {
                        return n = n || t, i.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="' + t + '" height="' + n + '" src="' + e + '" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'), this._resize(t, n), this._config.onContentLoaded.call(this), this._$modalArrows && this._$modalArrows.css("display", "none"), this._toggleLoading(!1), this
                    }
                }, {
                    key: "_showHtml5Media",
                    value: function (e, t) {
                        var n = this._getRemoteContentType(e);
                        if (!n) return this._error(this._config.strings.type);
                        var i;
                        i = n.indexOf("audio") > 0 ? "audio" : "video";
                        var o = this._$element.data("width") || 560,
                            r = this._$element.data("height") || o / (560 / 315);
                        return t.html('<div class="embed-responsive embed-responsive-16by9"><' + i + ' width="' + o + '" height="' + r + '" preload="auto" autoplay controls class="embed-responsive-item"><source src="' + e + '" type="' + n + '">' + this._config.strings.type + "</" + i + "></div>"), this._resize(o, r), this._config.onContentLoaded.call(this), this._$modalArrows && this._$modalArrows.css("display", "none"), this._toggleLoading(!1), this
                    }
                }, {
                    key: "_loadRemoteContent",
                    value: function (t, n) {
                        var i = this,
                            o = this._$element.data("width") || 560,
                            r = this._$element.data("height") || 560,
                            s = this._$element.data("disableExternalCheck") || !1;
                        return this._toggleLoading(!1), s || this._isExternal(t) ? (n.html('<iframe src="' + t + '" frameborder="0" allowfullscreen></iframe>'), this._config.onContentLoaded.call(this)) : n.load(t, e.proxy(function () {
                            return i._$element.trigger("loaded.bs.modal")
                        })), this._$modalArrows && this._$modalArrows.css("display", "none"), this._resize(o, r), this
                    }
                }, {
                    key: "_isExternal",
                    value: function (e) {
                        var t = e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                        return "string" == typeof t[1] && t[1].length > 0 && t[1].toLowerCase() !== location.protocol || "string" == typeof t[2] && t[2].length > 0 && t[2].replace(new RegExp(":(" + {
                            "http:": 80,
                            "https:": 443
                        } [location.protocol] + ")?$"), "") !== location.host
                    }
                }, {
                    key: "_error",
                    value: function (e) {
                        return console.error(e), this._containerToUse().html(e), this._resize(300, 300), this
                    }
                }, {
                    key: "_preloadImageByIndex",
                    value: function (t, n) {
                        if (this._$galleryItems) {
                            var i = e(this._$galleryItems.get(t), !1);
                            if (void 0 !== i) {
                                var o = i.attr("data-remote") || i.attr("href");
                                return ("image" === i.attr("data-type") || this._isImage(o)) && this._preloadImage(o, !1), n > 0 ? this._preloadImageByIndex(t + 1, n - 1) : void 0
                            }
                        }
                    }
                }, {
                    key: "_preloadImage",
                    value: function (t, n) {
                        var i = this;
                        n = n || !1;
                        var o, r = new Image;
                        return n && (o = setTimeout(function () {
                            n.append(i._config.loadingMessage)
                        }, 200), r.onload = function () {
                            o && clearTimeout(o), o = null;
                            var t = e("<img />");
                            return t.attr("src", r.src), t.addClass("img-fluid"), t.css("width", "100%"), n.html(t), i._$modalArrows && i._$modalArrows.css("display", ""), i._resize(r.width, r.height), i._toggleLoading(!1), i._config.onContentLoaded.call(i)
                        }, r.onerror = function () {
                            return i._toggleLoading(!1), i._error(i._config.strings.fail + "  " + t)
                        }), r.src = t, r
                    }
                }, {
                    key: "_swipeGesure",
                    value: function () {
                        return this._touchendX < this._touchstartX ? this.navigateRight() : this._touchendX > this._touchstartX ? this.navigateLeft() : void 0
                    }
                }, {
                    key: "_resize",
                    value: function (t, n) {
                        n = n || t, this._wantedWidth = t, this._wantedHeight = n;
                        var i = t / n,
                            o = this._padding.left + this._padding.right + this._border.left + this._border.right,
                            r = this._config.doc.body.clientWidth > 575 ? 20 : 0,
                            s = this._config.doc.body.clientWidth > 575 ? 0 : 20,
                            a = Math.min(t + o, this._config.doc.body.clientWidth - r, this._config.maxWidth);
                        t + o > a ? (n = (a - o - s) / i, t = a) : t += o;
                        var l = 0,
                            c = 0;
                        this._footerIsShown && (c = this._$modalFooter.outerHeight(!0) || 55), this._titleIsShown && (l = this._$modalHeader.outerHeight(!0) || 67);
                        var u = this._padding.top + this._padding.bottom + this._border.bottom + this._border.top,
                            d = parseFloat(this._$modalDialog.css("margin-top")) + parseFloat(this._$modalDialog.css("margin-bottom")),
                            h = Math.min(n, e(window).height() - u - d - l - c, this._config.maxHeight - u - l - c);
                        n > h && (t = Math.ceil(h * i) + o), this._$lightboxContainer.css("height", h), this._$modalDialog.css("flex", 1).css("maxWidth", t);
                        var f = this._$modal.data("bs.modal");
                        if (f) try {
                            f._handleUpdate()
                        } catch (e) {
                            f.handleUpdate()
                        }
                        return this
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function (t) {
                        var i = this;
                        return t = t || {}, this.each(function () {
                            var o = e(i),
                                r = e.extend({}, n.Default, o.data(), "object" == typeof t && t);
                            new n(i, r)
                        })
                    }
                }]), n
            }();
        e.fn[n] = r._jQueryInterface, e.fn[n].Constructor = r, e.fn[n].noConflict = function () {
            return e.fn[n] = i, r._jQueryInterface
        }
    }(jQuery)
}(jQuery), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
        var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
            i = this;
        do {
            for (t = n.length; 0 <= --t && n.item(t) !== i;);
        } while (t < 0 && (i = i.parentElement));
        return i
    }),
    function () {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(),
    function () {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
            var i = (new Date).getTime(),
                o = Math.max(0, 16 - (i - e)),
                r = window.setTimeout(function () {
                    t(i + o)
                }, o);
            return e = i + o, r
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }(),
    function (e, t) {
        "function" == typeof define && define.amd ? define([], function () {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
    }("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (e) {
        "use strict";
        var t = {
                ignore: "[data-scroll-ignore]",
                header: null,
                topOnEmptyHash: !0,
                speed: 500,
                speedAsDuration: !1,
                durationMax: null,
                durationMin: null,
                clip: !0,
                offset: 0,
                easing: "easeInOutCubic",
                customEasing: null,
                updateURL: !0,
                popstate: !0,
                emitEvents: !0
            },
            n = function () {
                var e = {};
                return Array.prototype.forEach.call(arguments, function (t) {
                    for (var n in t) {
                        if (!t.hasOwnProperty(n)) return;
                        e[n] = t[n]
                    }
                }), e
            },
            i = function (e) {
                "#" === e.charAt(0) && (e = e.substr(1));
                for (var t, n = String(e), i = n.length, o = -1, r = "", s = n.charCodeAt(0); ++o < i;) {
                    if (0 === (t = n.charCodeAt(o))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                    r += 1 <= t && t <= 31 || 127 == t || 0 === o && 48 <= t && t <= 57 || 1 === o && 48 <= t && t <= 57 && 45 === s ? "\\" + t.toString(16) + " " : 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(o) : "\\" + n.charAt(o)
                }
                return "#" + r
            },
            o = function () {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
            },
            r = function (t, n, i, o) {
                if (n.emitEvents && "function" == typeof e.CustomEvent) {
                    var r = new CustomEvent(t, {
                        bubbles: !0,
                        detail: {
                            anchor: i,
                            toggle: o
                        }
                    });
                    document.dispatchEvent(r)
                }
            };
        return function (s, a) {
            var l, c, u, d, h = {
                cancelScroll: function (e) {
                    cancelAnimationFrame(d), d = null, e || r("scrollCancel", l)
                }
            };
            h.animateScroll = function (i, s, a) {
                h.cancelScroll();
                var c = n(l || t, a || {}),
                    f = "[object Number]" === Object.prototype.toString.call(i),
                    p = f || !i.tagName ? null : i;
                if (f || p) {
                    var g = e.pageYOffset;
                    c.header && !u && (u = document.querySelector(c.header));
                    var m, v, y, _, b, w, C, E, x = function (t) {
                            return t ? (n = t, parseInt(e.getComputedStyle(n).height, 10) + t.offsetTop) : 0;
                            var n
                        }(u),
                        T = f ? i : function (t, n, i, r) {
                            var s = 0;
                            if (t.offsetParent)
                                for (; s += t.offsetTop, t = t.offsetParent;);
                            return s = Math.max(s - n - i, 0), r && (s = Math.min(s, o() - e.innerHeight)), s
                        }(p, x, parseInt("function" == typeof c.offset ? c.offset(i, s) : c.offset, 10), c.clip),
                        S = T - g,
                        A = o(),
                        I = 0,
                        D = (m = S, y = (v = c).speedAsDuration ? v.speed : Math.abs(m / 1e3 * v.speed), v.durationMax && y > v.durationMax ? v.durationMax : v.durationMin && y < v.durationMin ? v.durationMin : parseInt(y, 10)),
                        k = function (t) {
                            var n, o, a;
                            _ || (_ = t), I += t - _, w = g + S * (o = b = 1 < (b = 0 === D ? 0 : I / D) ? 1 : b, "easeInQuad" === (n = c).easing && (a = o * o), "easeOutQuad" === n.easing && (a = o * (2 - o)), "easeInOutQuad" === n.easing && (a = o < .5 ? 2 * o * o : (4 - 2 * o) * o - 1), "easeInCubic" === n.easing && (a = o * o * o), "easeOutCubic" === n.easing && (a = --o * o * o + 1), "easeInOutCubic" === n.easing && (a = o < .5 ? 4 * o * o * o : (o - 1) * (2 * o - 2) * (2 * o - 2) + 1), "easeInQuart" === n.easing && (a = o * o * o * o), "easeOutQuart" === n.easing && (a = 1 - --o * o * o * o), "easeInOutQuart" === n.easing && (a = o < .5 ? 8 * o * o * o * o : 1 - 8 * --o * o * o * o), "easeInQuint" === n.easing && (a = o * o * o * o * o), "easeOutQuint" === n.easing && (a = 1 + --o * o * o * o * o), "easeInOutQuint" === n.easing && (a = o < .5 ? 16 * o * o * o * o * o : 1 + 16 * --o * o * o * o * o), n.customEasing && (a = n.customEasing(o)), a || o), e.scrollTo(0, Math.floor(w)),
                                function (t, n) {
                                    var o, a, l, u = e.pageYOffset;
                                    if (t == n || u == n || (g < n && e.innerHeight + u) >= A) return h.cancelScroll(!0), a = n, l = f, 0 === (o = i) && document.body.focus(), l || (o.focus(), document.activeElement !== o && (o.setAttribute("tabindex", "-1"), o.focus(), o.style.outline = "none"), e.scrollTo(0, a)), r("scrollStop", c, i, s), !(d = _ = null)
                                }(w, T) || (d = e.requestAnimationFrame(k), _ = t)
                        };
                    0 === e.pageYOffset && e.scrollTo(0, 0), C = i, E = c, f || history.pushState && E.updateURL && history.pushState({
                        smoothScroll: JSON.stringify(E),
                        anchor: C.id
                    }, document.title, C === document.documentElement ? "#top" : "#" + C.id), r("scrollStart", c, i, s), h.cancelScroll(!0), e.requestAnimationFrame(k)
                }
            };
            var f = function (t) {
                    if (!("matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches) && !t.defaultPrevented && !(0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey) && "closest" in t.target && (c = t.target.closest(s)) && "a" === c.tagName.toLowerCase() && !t.target.closest(l.ignore) && c.hostname === e.location.hostname && c.pathname === e.location.pathname && /#/.test(c.href)) {
                        var n, o = i(c.hash);
                        if ("#" === o) {
                            if (!l.topOnEmptyHash) return;
                            n = document.documentElement
                        } else n = document.querySelector(o);
                        (n = n || "#top" !== o ? n : document.documentElement) && (t.preventDefault(), function (t) {
                            if (history.replaceState && t.updateURL && !history.state) {
                                var n = e.location.hash;
                                n = n || "", history.replaceState({
                                    smoothScroll: JSON.stringify(t),
                                    anchor: n || e.pageYOffset
                                }, document.title, n || e.location.href)
                            }
                        }(l), h.animateScroll(n, c))
                    }
                },
                p = function (e) {
                    if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(l)) {
                        var t = history.state.anchor;
                        "string" == typeof t && t && !(t = document.querySelector(i(history.state.anchor))) || h.animateScroll(t, null, {
                            updateURL: !1
                        })
                    }
                };
            return h.destroy = function () {
                    l && (document.removeEventListener("click", f, !1), e.removeEventListener("popstate", p, !1), h.cancelScroll(), d = u = c = l = null)
                },
                function () {
                    if (!("querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    h.destroy(), l = n(t, a || {}), u = l.header ? document.querySelector(l.header) : null, document.addEventListener("click", f, !1), l.updateURL && l.popstate && e.addEventListener("popstate", p, !1)
                }(), h
        }
    }), $(window).on("load", function () {
        setTimeout(function () {
            $("#autoPopRK").modal("show")
        }, 15e3)
    }),
    function () {
        "use strict";
        window.addEventListener("load", function () {
            var e = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(e, function (e) {
                e.addEventListener("submit", function (t) {
                    !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
                }, !1)
            })
        }, !1)
    }(), window.onscroll = function (e) {
        lazyload()
    };
var ua = navigator.userAgent.toLowerCase(),
    platform = navigator.platform.toLowerCase();
platformName = ua.match(/ip(?:ad|od|hone)/) ? "ios" : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ["other"])[0], isMobile = /ios|android|webos/.test(platformName), isMobile || (window.$zopim || function (e, t) {
    var n = $zopim = function (e) {
            n._.push(e)
        },
        i = n.s = e.createElement(t),
        o = e.getElementsByTagName(t)[0];
    n.set = function (e) {
        n.set._.push(e)
    }, n._ = [], n.set._ = [], i.async = !0, i.setAttribute("charset", "utf-8"), i.src = "", n.t = +new Date, i.type = "text/javascript", o.parentNode.insertBefore(i, o)
}(document, "script"), $zopim(function () {
    window.setTimeout(function () {
        $zopim.livechat.window.show()
    }, 3e4), $zopim.livechat.window.setOffsetHorizontal(50), $zopim.livechat.window.setOffsetVertical(0), $zopim.livechat.theme.setColor(sitePrimaryColor), $zopim.livechat.window.setSize("small")
})), $(".callModelRK").click(function () {
    var e = $(this).data("name"),
        t = $(this).data("btn"),
        n = $(this).data("form");
    $(".rkModalTitle").text(e), $(".rk-modal-btn").text(t), "lg" == n && ($(".rk-form-mail").removeClass("hide"), $(".rk-form-mail").addClass("show"), $(".rk-form-comm").removeClass("hide"), $(".rk-form-comm").addClass("show")), "md" == n && ($(".rk-form-comm").removeClass("show"), $(".rk-form-comm").addClass("hide"), $(".rk-form-mail").removeClass("hide"), $(".rk-form-mail").addClass("show")), "sm" == n && ($(".rk-form-comm").removeClass("show"), $(".rk-form-comm").addClass("hide"), $(".rk-form-mail").removeClass("show"), $(".rk-form-mail").addClass("hide"))
}), $(document).ready(function () {
    $("#mainSlider").find(".carousel-item").first().addClass("active"), $("#mainSliderM").find(".carousel-item").first().addClass("active"), $("#overviewRKSlider").find(".carousel-item").first().addClass("active"), $("#customRKSlider").find(".carousel-item").first().addClass("active"), $(".rk-tab-link").find(".rk-tab-btn").first().addClass("active"), $(".rk-tab-tab").find(".rk-tab-container").first().addClass("show active")
});
var scroll = new SmoothScroll('a[href*="#"]');
$(document).on("click", '[data-toggle="lightbox"]', function (e) {
    e.preventDefault(), $(this).ekkoLightbox()
}), $(".ami-btn").click(function () {
    $(".ami-btn").toggleClass("hide"), $(".ami-div").toggleClass("ami-div-h"), $(".ami-btn-block").toggleClass("bg-white")
}), window.oncontextmenu = function () {
    return !1
}, $(document).keydown(function (e) {
    return 123 != e.keyCode && (!(e.ctrlKey && e.shiftKey && 73 == e.keyCode || e.ctrlKey && e.shiftKey && 740 == e.keyCode || e.ctrlKey && 85 == e.keyCode) && void 0)
});
var lastId, topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var e = $($(this).attr("href"));
        if (e.length) return e
    });

function setCookie(e, t) {
    var n = new Date;
    n.setTime(n.getTime() + 6e4);
    var i = "expires=" + n.toUTCString();
    document.cookie = e + "=" + t + "; " + i
}
menuItems.click(function (e) {
    var t = $(this).attr("href"),
        n = "#" === t ? 0 : $(t).offset().top - topMenuHeight + 1;
    $("html, body").stop().animate({
        scrollTop: n
    }, 300), e.preventDefault()
}), $(window).scroll(function () {
    var e = $(this).scrollTop() + topMenuHeight,
        t = scrollItems.map(function () {
            if ($(this).offset().top < e) return this
        }),
        n = (t = t[t.length - 1]) && t.length ? t[0].id : "";
    lastId !== n && (lastId = n, menuItems.parent().removeClass("active").end().filter("[href='#" + n + "']").parent().addClass("active"))
});