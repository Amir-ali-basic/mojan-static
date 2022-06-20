/* ==========================================================================

   Table of content:

   1. jQuery
   2. Magnific Popup
   3. Animsition
   4. Swiper
   5. Isotope PACKAGED
   6. ScrollMagic
   7. Page scroll to id
   8. Headroom
   9. Midnight

   ========================================================================== */

/* ==========================================================================
   1. jQuery
   ========================================================================== */

/*!
 * jQuery JavaScript Library v2.2.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T20:02Z
 */
!(function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a.document
              ? b(a, !0)
              : function (a) {
                    if (!a.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return b(a);
                })
        : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.0",
        n = function (a, b) {
            return new n.fn.init(a, b);
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase();
        };
    (n.fn = n.prototype =
        {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function () {
                return e.call(this);
            },
            get: function (a) {
                return null != a
                    ? 0 > a
                        ? this[a + this.length]
                        : this[a]
                    : e.call(this);
            },
            pushStack: function (a) {
                var b = n.merge(this.constructor(), a);
                return (b.prevObject = this), (b.context = this.context), b;
            },
            each: function (a) {
                return n.each(this, a);
            },
            map: function (a) {
                return this.pushStack(
                    n.map(this, function (b, c) {
                        return a.call(b, c, b);
                    })
                );
            },
            slice: function () {
                return this.pushStack(e.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: g,
            sort: c.sort,
            splice: c.splice,
        }),
        (n.extend = n.fn.extend =
            function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g = arguments[0] || {},
                    h = 1,
                    i = arguments.length,
                    j = !1;
                for (
                    "boolean" == typeof g &&
                        ((j = g), (g = arguments[h] || {}), h++),
                        "object" == typeof g || n.isFunction(g) || (g = {}),
                        h === i && ((g = this), h--);
                    i > h;
                    h++
                )
                    if (null != (a = arguments[h]))
                        for (b in a)
                            (c = g[b]),
                                (d = a[b]),
                                g !== d &&
                                    (j &&
                                    d &&
                                    (n.isPlainObject(d) || (e = n.isArray(d)))
                                        ? (e
                                              ? ((e = !1),
                                                (f =
                                                    c && n.isArray(c) ? c : []))
                                              : (f =
                                                    c && n.isPlainObject(c)
                                                        ? c
                                                        : {}),
                                          (g[b] = n.extend(j, f, d)))
                                        : void 0 !== d && (g[b] = d));
                return g;
            }),
        n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a);
            },
            noop: function () {},
            isFunction: function (a) {
                return "function" === n.type(a);
            },
            isArray: Array.isArray,
            isWindow: function (a) {
                return null != a && a === a.window;
            },
            isNumeric: function (a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
            },
            isPlainObject: function (a) {
                return "object" !== n.type(a) || a.nodeType || n.isWindow(a)
                    ? !1
                    : a.constructor &&
                      !k.call(a.constructor.prototype, "isPrototypeOf")
                    ? !1
                    : !0;
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            type: function (a) {
                return null == a
                    ? a + ""
                    : "object" == typeof a || "function" == typeof a
                    ? i[j.call(a)] || "object"
                    : typeof a;
            },
            globalEval: function (a) {
                var b,
                    c = eval;
                (a = n.trim(a)),
                    a &&
                        (1 === a.indexOf("use strict")
                            ? ((b = d.createElement("script")),
                              (b.text = a),
                              d.head.appendChild(b).parentNode.removeChild(b))
                            : c(a));
            },
            camelCase: function (a) {
                return a.replace(p, "ms-").replace(q, r);
            },
            nodeName: function (a, b) {
                return (
                    a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                );
            },
            each: function (a, b) {
                var c,
                    d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++)
                        if (b.call(a[d], d, a[d]) === !1) break;
                } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
                return a;
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(o, "");
            },
            makeArray: function (a, b) {
                var c = b || [];
                return (
                    null != a &&
                        (s(Object(a))
                            ? n.merge(c, "string" == typeof a ? [a] : a)
                            : g.call(c, a)),
                    c
                );
            },
            inArray: function (a, b, c) {
                return null == b ? -1 : h.call(b, a, c);
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                    a[e++] = b[d];
                return (a.length = e), a;
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                    (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
            },
            map: function (a, b, c) {
                var d,
                    e,
                    g = 0,
                    h = [];
                if (s(a))
                    for (d = a.length; d > g; g++)
                        (e = b(a[g], g, c)), null != e && h.push(e);
                else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
                return f.apply([], h);
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, f;
                return (
                    "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                    n.isFunction(a)
                        ? ((d = e.call(arguments, 2)),
                          (f = function () {
                              return a.apply(
                                  b || this,
                                  d.concat(e.call(arguments))
                              );
                          }),
                          (f.guid = a.guid = a.guid || n.guid++),
                          f)
                        : void 0
                );
            },
            now: Date.now,
            support: l,
        }),
        "function" == typeof Symbol &&
            (n.fn[Symbol.iterator] = c[Symbol.iterator]),
        n.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (a, b) {
                i["[object " + b + "]"] = b.toLowerCase();
            }
        );
    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a)
            ? !1
            : "array" === c ||
                  0 === b ||
                  ("number" == typeof b && b > 0 && b - 1 in a);
    }
    var t = (function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function (a, b) {
                return a === b && (l = !0), 0;
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1;
            },
            K =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N =
                "\\[" +
                L +
                "*(" +
                M +
                ")(?:" +
                L +
                "*([*^$|!~]?=)" +
                L +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                L +
                "*\\]",
            O =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                N +
                ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp(
                "^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$",
                "g"
            ),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        L +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        L +
                        "*(?:([+-]|)" +
                        L +
                        "*(\\d+)|))" +
                        L +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        L +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        L +
                        "*((?:-\\d)?\\d*)" +
                        L +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp(
                "\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)",
                "ig"
            ),
            ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c
                    ? b
                    : 0 > d
                    ? String.fromCharCode(d + 65536)
                    : String.fromCharCode(
                          (d >> 10) | 55296,
                          (1023 & d) | 56320
                      );
            },
            da = function () {
                m();
            };
        try {
            H.apply((E = I.call(v.childNodes)), v.childNodes),
                E[v.childNodes.length].nodeType;
        } catch (ea) {
            H = {
                apply: E.length
                    ? function (a, b) {
                          G.apply(a, I.call(b));
                      }
                    : function (a, b) {
                          var c = a.length,
                              d = 0;
                          while ((a[c++] = b[d++]));
                          a.length = c - 1;
                      },
            };
        }
        function fa(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s,
                w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (
                ((d = d || []),
                "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
            )
                return d;
            if (
                !e &&
                ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
            ) {
                if (11 !== x && (o = $.exec(a)))
                    if ((f = o[1])) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d;
                        } else if (
                            w &&
                            (j = w.getElementById(f)) &&
                            t(b, j) &&
                            j.id === f
                        )
                            return d.push(j), d;
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)), d;
                        if (
                            (f = o[3]) &&
                            c.getElementsByClassName &&
                            b.getElementsByClassName
                        )
                            return H.apply(d, b.getElementsByClassName(f)), d;
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) (w = b), (s = a);
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id"))
                            ? (k = k.replace(aa, "\\$&"))
                            : b.setAttribute("id", (k = u)),
                            (r = g(a)),
                            (h = r.length),
                            (l = V.test(k) ? "#" + k : "[id='" + k + "']");
                        while (h--) r[h] = l + " " + qa(r[h]);
                        (s = r.join(",")),
                            (w = (_.test(a) && oa(b.parentNode)) || b);
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d;
                        } catch (y) {
                        } finally {
                            k === u && b.removeAttribute("id");
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return (
                    a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    (b[c + " "] = e)
                );
            }
            return b;
        }
        function ha(a) {
            return (a[u] = !0), a;
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
            }
        }
        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function ka(a, b) {
            var c = b && a,
                d =
                    c &&
                    1 === a.nodeType &&
                    1 === b.nodeType &&
                    (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while ((c = c.nextSibling)) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function na(a) {
            return ha(function (b) {
                return (
                    (b = +b),
                    ha(function (c, d) {
                        var e,
                            f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                    })
                );
            });
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        (c = fa.support = {}),
            (f = fa.isXML =
                function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1;
                }),
            (m = fa.setDocument =
                function (a) {
                    var b,
                        e,
                        g = a ? a.ownerDocument || a : v;
                    return g !== n && 9 === g.nodeType && g.documentElement
                        ? ((n = g),
                          (o = n.documentElement),
                          (p = !f(n)),
                          (e = n.defaultView) &&
                              e.top !== e &&
                              (e.addEventListener
                                  ? e.addEventListener("unload", da, !1)
                                  : e.attachEvent &&
                                    e.attachEvent("onunload", da)),
                          (c.attributes = ia(function (a) {
                              return (
                                  (a.className = "i"),
                                  !a.getAttribute("className")
                              );
                          })),
                          (c.getElementsByTagName = ia(function (a) {
                              return (
                                  a.appendChild(n.createComment("")),
                                  !a.getElementsByTagName("*").length
                              );
                          })),
                          (c.getElementsByClassName = Z.test(
                              n.getElementsByClassName
                          )),
                          (c.getById = ia(function (a) {
                              return (
                                  (o.appendChild(a).id = u),
                                  !n.getElementsByName ||
                                      !n.getElementsByName(u).length
                              );
                          })),
                          c.getById
                              ? ((d.find.ID = function (a, b) {
                                    if (
                                        "undefined" !=
                                            typeof b.getElementById &&
                                        p
                                    ) {
                                        var c = b.getElementById(a);
                                        return c ? [c] : [];
                                    }
                                }),
                                (d.filter.ID = function (a) {
                                    var b = a.replace(ba, ca);
                                    return function (a) {
                                        return a.getAttribute("id") === b;
                                    };
                                }))
                              : (delete d.find.ID,
                                (d.filter.ID = function (a) {
                                    var b = a.replace(ba, ca);
                                    return function (a) {
                                        var c =
                                            "undefined" !=
                                                typeof a.getAttributeNode &&
                                            a.getAttributeNode("id");
                                        return c && c.value === b;
                                    };
                                })),
                          (d.find.TAG = c.getElementsByTagName
                              ? function (a, b) {
                                    return "undefined" !=
                                        typeof b.getElementsByTagName
                                        ? b.getElementsByTagName(a)
                                        : c.qsa
                                        ? b.querySelectorAll(a)
                                        : void 0;
                                }
                              : function (a, b) {
                                    var c,
                                        d = [],
                                        e = 0,
                                        f = b.getElementsByTagName(a);
                                    if ("*" === a) {
                                        while ((c = f[e++]))
                                            1 === c.nodeType && d.push(c);
                                        return d;
                                    }
                                    return f;
                                }),
                          (d.find.CLASS =
                              c.getElementsByClassName &&
                              function (a, b) {
                                  return "undefined" !=
                                      typeof b.getElementsByClassName && p
                                      ? b.getElementsByClassName(a)
                                      : void 0;
                              }),
                          (r = []),
                          (q = []),
                          (c.qsa = Z.test(n.querySelectorAll)) &&
                              (ia(function (a) {
                                  (o.appendChild(a).innerHTML =
                                      "<a id='" +
                                      u +
                                      "'></a><select id='" +
                                      u +
                                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      a.querySelectorAll("[msallowcapture^='']")
                                          .length &&
                                          q.push("[*^$]=" + L + "*(?:''|\"\")"),
                                      a.querySelectorAll("[selected]").length ||
                                          q.push(
                                              "\\[" + L + "*(?:value|" + K + ")"
                                          ),
                                      a.querySelectorAll("[id~=" + u + "-]")
                                          .length || q.push("~="),
                                      a.querySelectorAll(":checked").length ||
                                          q.push(":checked"),
                                      a.querySelectorAll("a#" + u + "+*")
                                          .length || q.push(".#.+[+~]");
                              }),
                              ia(function (a) {
                                  var b = n.createElement("input");
                                  b.setAttribute("type", "hidden"),
                                      a
                                          .appendChild(b)
                                          .setAttribute("name", "D"),
                                      a.querySelectorAll("[name=d]").length &&
                                          q.push("name" + L + "*[*^$|!~]?="),
                                      a.querySelectorAll(":enabled").length ||
                                          q.push(":enabled", ":disabled"),
                                      a.querySelectorAll("*,:x"),
                                      q.push(",.*:");
                              })),
                          (c.matchesSelector = Z.test(
                              (s =
                                  o.matches ||
                                  o.webkitMatchesSelector ||
                                  o.mozMatchesSelector ||
                                  o.oMatchesSelector ||
                                  o.msMatchesSelector)
                          )) &&
                              ia(function (a) {
                                  (c.disconnectedMatch = s.call(a, "div")),
                                      s.call(a, "[s!='']:x"),
                                      r.push("!=", O);
                              }),
                          (q = q.length && new RegExp(q.join("|"))),
                          (r = r.length && new RegExp(r.join("|"))),
                          (b = Z.test(o.compareDocumentPosition)),
                          (t =
                              b || Z.test(o.contains)
                                  ? function (a, b) {
                                        var c =
                                                9 === a.nodeType
                                                    ? a.documentElement
                                                    : a,
                                            d = b && b.parentNode;
                                        return (
                                            a === d ||
                                            !(
                                                !d ||
                                                1 !== d.nodeType ||
                                                !(c.contains
                                                    ? c.contains(d)
                                                    : a.compareDocumentPosition &&
                                                      16 &
                                                          a.compareDocumentPosition(
                                                              d
                                                          ))
                                            )
                                        );
                                    }
                                  : function (a, b) {
                                        if (b)
                                            while ((b = b.parentNode))
                                                if (b === a) return !0;
                                        return !1;
                                    }),
                          (B = b
                              ? function (a, b) {
                                    if (a === b) return (l = !0), 0;
                                    var d =
                                        !a.compareDocumentPosition -
                                        !b.compareDocumentPosition;
                                    return d
                                        ? d
                                        : ((d =
                                              (a.ownerDocument || a) ===
                                              (b.ownerDocument || b)
                                                  ? a.compareDocumentPosition(b)
                                                  : 1),
                                          1 & d ||
                                          (!c.sortDetached &&
                                              b.compareDocumentPosition(a) ===
                                                  d)
                                              ? a === n ||
                                                (a.ownerDocument === v &&
                                                    t(v, a))
                                                  ? -1
                                                  : b === n ||
                                                    (b.ownerDocument === v &&
                                                        t(v, b))
                                                  ? 1
                                                  : k
                                                  ? J(k, a) - J(k, b)
                                                  : 0
                                              : 4 & d
                                              ? -1
                                              : 1);
                                }
                              : function (a, b) {
                                    if (a === b) return (l = !0), 0;
                                    var c,
                                        d = 0,
                                        e = a.parentNode,
                                        f = b.parentNode,
                                        g = [a],
                                        h = [b];
                                    if (!e || !f)
                                        return a === n
                                            ? -1
                                            : b === n
                                            ? 1
                                            : e
                                            ? -1
                                            : f
                                            ? 1
                                            : k
                                            ? J(k, a) - J(k, b)
                                            : 0;
                                    if (e === f) return ka(a, b);
                                    c = a;
                                    while ((c = c.parentNode)) g.unshift(c);
                                    c = b;
                                    while ((c = c.parentNode)) h.unshift(c);
                                    while (g[d] === h[d]) d++;
                                    return d
                                        ? ka(g[d], h[d])
                                        : g[d] === v
                                        ? -1
                                        : h[d] === v
                                        ? 1
                                        : 0;
                                }),
                          n)
                        : n;
                }),
            (fa.matches = function (a, b) {
                return fa(a, null, null, b);
            }),
            (fa.matchesSelector = function (a, b) {
                if (
                    ((a.ownerDocument || a) !== n && m(a),
                    (b = b.replace(T, "='$1']")),
                    c.matchesSelector &&
                        p &&
                        !A[b + " "] &&
                        (!r || !r.test(b)) &&
                        (!q || !q.test(b)))
                )
                    try {
                        var d = s.call(a, b);
                        if (
                            d ||
                            c.disconnectedMatch ||
                            (a.document && 11 !== a.document.nodeType)
                        )
                            return d;
                    } catch (e) {}
                return fa(b, n, null, [a]).length > 0;
            }),
            (fa.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b);
            }),
            (fa.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f =
                        e && D.call(d.attrHandle, b.toLowerCase())
                            ? e(a, b, !p)
                            : void 0;
                return void 0 !== f
                    ? f
                    : c.attributes || !p
                    ? a.getAttribute(b)
                    : (f = a.getAttributeNode(b)) && f.specified
                    ? f.value
                    : null;
            }),
            (fa.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }),
            (fa.uniqueSort = function (a) {
                var b,
                    d = [],
                    e = 0,
                    f = 0;
                if (
                    ((l = !c.detectDuplicates),
                    (k = !c.sortStable && a.slice(0)),
                    a.sort(B),
                    l)
                ) {
                    while ((b = a[f++])) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1);
                }
                return (k = null), a;
            }),
            (e = fa.getText =
                function (a) {
                    var b,
                        c = "",
                        d = 0,
                        f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent)
                                return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling)
                                c += e(a);
                        } else if (3 === f || 4 === f) return a.nodeValue;
                    } else while ((b = a[d++])) c += e(b);
                    return c;
                }),
            (d = fa.selectors =
                {
                    cacheLength: 50,
                    createPseudo: ha,
                    match: W,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                        ATTR: function (a) {
                            return (
                                (a[1] = a[1].replace(ba, ca)),
                                (a[3] = (a[3] || a[4] || a[5] || "").replace(
                                    ba,
                                    ca
                                )),
                                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                                a.slice(0, 4)
                            );
                        },
                        CHILD: function (a) {
                            return (
                                (a[1] = a[1].toLowerCase()),
                                "nth" === a[1].slice(0, 3)
                                    ? (a[3] || fa.error(a[0]),
                                      (a[4] = +(a[4]
                                          ? a[5] + (a[6] || 1)
                                          : 2 *
                                            ("even" === a[3] ||
                                                "odd" === a[3]))),
                                      (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                                    : a[3] && fa.error(a[0]),
                                a
                            );
                        },
                        PSEUDO: function (a) {
                            var b,
                                c = !a[6] && a[2];
                            return W.CHILD.test(a[0])
                                ? null
                                : (a[3]
                                      ? (a[2] = a[4] || a[5] || "")
                                      : c &&
                                        U.test(c) &&
                                        (b = g(c, !0)) &&
                                        (b =
                                            c.indexOf(")", c.length - b) -
                                            c.length) &&
                                        ((a[0] = a[0].slice(0, b)),
                                        (a[2] = c.slice(0, b))),
                                  a.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(ba, ca).toLowerCase();
                            return "*" === a
                                ? function () {
                                      return !0;
                                  }
                                : function (a) {
                                      return (
                                          a.nodeName &&
                                          a.nodeName.toLowerCase() === b
                                      );
                                  };
                        },
                        CLASS: function (a) {
                            var b = y[a + " "];
                            return (
                                b ||
                                ((b = new RegExp(
                                    "(^|" + L + ")" + a + "(" + L + "|$)"
                                )) &&
                                    y(a, function (a) {
                                        return b.test(
                                            ("string" == typeof a.className &&
                                                a.className) ||
                                                ("undefined" !=
                                                    typeof a.getAttribute &&
                                                    a.getAttribute("class")) ||
                                                ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function (a, b, c) {
                            return function (d) {
                                var e = fa.attr(d, a);
                                return null == e
                                    ? "!=" === b
                                    : b
                                    ? ((e += ""),
                                      "=" === b
                                          ? e === c
                                          : "!=" === b
                                          ? e !== c
                                          : "^=" === b
                                          ? c && 0 === e.indexOf(c)
                                          : "*=" === b
                                          ? c && e.indexOf(c) > -1
                                          : "$=" === b
                                          ? c && e.slice(-c.length) === c
                                          : "~=" === b
                                          ? (
                                                " " +
                                                e.replace(P, " ") +
                                                " "
                                            ).indexOf(c) > -1
                                          : "|=" === b
                                          ? e === c ||
                                            e.slice(0, c.length + 1) === c + "-"
                                          : !1)
                                    : !0;
                            };
                        },
                        CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice(-4),
                                h = "of-type" === b;
                            return 1 === d && 0 === e
                                ? function (a) {
                                      return !!a.parentNode;
                                  }
                                : function (b, c, i) {
                                      var j,
                                          k,
                                          l,
                                          m,
                                          n,
                                          o,
                                          p =
                                              f !== g
                                                  ? "nextSibling"
                                                  : "previousSibling",
                                          q = b.parentNode,
                                          r = h && b.nodeName.toLowerCase(),
                                          s = !i && !h,
                                          t = !1;
                                      if (q) {
                                          if (f) {
                                              while (p) {
                                                  m = b;
                                                  while ((m = m[p]))
                                                      if (
                                                          h
                                                              ? m.nodeName.toLowerCase() ===
                                                                r
                                                              : 1 === m.nodeType
                                                      )
                                                          return !1;
                                                  o = p =
                                                      "only" === a &&
                                                      !o &&
                                                      "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (
                                              ((o = [
                                                  g
                                                      ? q.firstChild
                                                      : q.lastChild,
                                              ]),
                                              g && s)
                                          ) {
                                              (m = q),
                                                  (l = m[u] || (m[u] = {})),
                                                  (k =
                                                      l[m.uniqueID] ||
                                                      (l[m.uniqueID] = {})),
                                                  (j = k[a] || []),
                                                  (n = j[0] === w && j[1]),
                                                  (t = n && j[2]),
                                                  (m = n && q.childNodes[n]);
                                              while (
                                                  (m =
                                                      (++n && m && m[p]) ||
                                                      (t = n = 0) ||
                                                      o.pop())
                                              )
                                                  if (
                                                      1 === m.nodeType &&
                                                      ++t &&
                                                      m === b
                                                  ) {
                                                      k[a] = [w, n, t];
                                                      break;
                                                  }
                                          } else if (
                                              (s &&
                                                  ((m = b),
                                                  (l = m[u] || (m[u] = {})),
                                                  (k =
                                                      l[m.uniqueID] ||
                                                      (l[m.uniqueID] = {})),
                                                  (j = k[a] || []),
                                                  (n = j[0] === w && j[1]),
                                                  (t = n)),
                                              t === !1)
                                          )
                                              while (
                                                  (m =
                                                      (++n && m && m[p]) ||
                                                      (t = n = 0) ||
                                                      o.pop())
                                              )
                                                  if (
                                                      (h
                                                          ? m.nodeName.toLowerCase() ===
                                                            r
                                                          : 1 === m.nodeType) &&
                                                      ++t &&
                                                      (s &&
                                                          ((l =
                                                              m[u] ||
                                                              (m[u] = {})),
                                                          (k =
                                                              l[m.uniqueID] ||
                                                              (l[m.uniqueID] =
                                                                  {})),
                                                          (k[a] = [w, t])),
                                                      m === b)
                                                  )
                                                      break;
                                          return (
                                              (t -= e),
                                              t === d ||
                                                  (t % d === 0 && t / d >= 0)
                                          );
                                      }
                                  };
                        },
                        PSEUDO: function (a, b) {
                            var c,
                                e =
                                    d.pseudos[a] ||
                                    d.setFilters[a.toLowerCase()] ||
                                    fa.error("unsupported pseudo: " + a);
                            return e[u]
                                ? e(b)
                                : e.length > 1
                                ? ((c = [a, a, "", b]),
                                  d.setFilters.hasOwnProperty(a.toLowerCase())
                                      ? ha(function (a, c) {
                                            var d,
                                                f = e(a, b),
                                                g = f.length;
                                            while (g--)
                                                (d = J(a, f[g])),
                                                    (a[d] = !(c[d] = f[g]));
                                        })
                                      : function (a) {
                                            return e(a, 0, c);
                                        })
                                : e;
                        },
                    },
                    pseudos: {
                        not: ha(function (a) {
                            var b = [],
                                c = [],
                                d = h(a.replace(Q, "$1"));
                            return d[u]
                                ? ha(function (a, b, c, e) {
                                      var f,
                                          g = d(a, null, e, []),
                                          h = a.length;
                                      while (h--)
                                          (f = g[h]) && (a[h] = !(b[h] = f));
                                  })
                                : function (a, e, f) {
                                      return (
                                          (b[0] = a),
                                          d(b, null, f, c),
                                          (b[0] = null),
                                          !c.pop()
                                      );
                                  };
                        }),
                        has: ha(function (a) {
                            return function (b) {
                                return fa(a, b).length > 0;
                            };
                        }),
                        contains: ha(function (a) {
                            return (
                                (a = a.replace(ba, ca)),
                                function (b) {
                                    return (
                                        (
                                            b.textContent ||
                                            b.innerText ||
                                            e(b)
                                        ).indexOf(a) > -1
                                    );
                                }
                            );
                        }),
                        lang: ha(function (a) {
                            return (
                                V.test(a || "") ||
                                    fa.error("unsupported lang: " + a),
                                (a = a.replace(ba, ca).toLowerCase()),
                                function (b) {
                                    var c;
                                    do
                                        if (
                                            (c = p
                                                ? b.lang
                                                : b.getAttribute("xml:lang") ||
                                                  b.getAttribute("lang"))
                                        )
                                            return (
                                                (c = c.toLowerCase()),
                                                c === a ||
                                                    0 === c.indexOf(a + "-")
                                            );
                                    while (
                                        (b = b.parentNode) &&
                                        1 === b.nodeType
                                    );
                                    return !1;
                                }
                            );
                        }),
                        target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id;
                        },
                        root: function (a) {
                            return a === o;
                        },
                        focus: function (a) {
                            return (
                                a === n.activeElement &&
                                (!n.hasFocus || n.hasFocus()) &&
                                !!(a.type || a.href || ~a.tabIndex)
                            );
                        },
                        enabled: function (a) {
                            return a.disabled === !1;
                        },
                        disabled: function (a) {
                            return a.disabled === !0;
                        },
                        checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (
                                ("input" === b && !!a.checked) ||
                                ("option" === b && !!a.selected)
                            );
                        },
                        selected: function (a) {
                            return (
                                a.parentNode && a.parentNode.selectedIndex,
                                a.selected === !0
                            );
                        },
                        empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (a) {
                            return !d.pseudos.empty(a);
                        },
                        header: function (a) {
                            return Y.test(a.nodeName);
                        },
                        input: function (a) {
                            return X.test(a.nodeName);
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (
                                ("input" === b && "button" === a.type) ||
                                "button" === b
                            );
                        },
                        text: function (a) {
                            var b;
                            return (
                                "input" === a.nodeName.toLowerCase() &&
                                "text" === a.type &&
                                (null == (b = a.getAttribute("type")) ||
                                    "text" === b.toLowerCase())
                            );
                        },
                        first: na(function () {
                            return [0];
                        }),
                        last: na(function (a, b) {
                            return [b - 1];
                        }),
                        eq: na(function (a, b, c) {
                            return [0 > c ? c + b : c];
                        }),
                        even: na(function (a, b) {
                            for (var c = 0; b > c; c += 2) a.push(c);
                            return a;
                        }),
                        odd: na(function (a, b) {
                            for (var c = 1; b > c; c += 2) a.push(c);
                            return a;
                        }),
                        lt: na(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0; )
                                a.push(d);
                            return a;
                        }),
                        gt: na(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b; )
                                a.push(d);
                            return a;
                        }),
                    },
                }),
            (d.pseudos.nth = d.pseudos.eq);
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
        })
            d.pseudos[b] = la(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
        function pa() {}
        (pa.prototype = d.filters = d.pseudos),
            (d.setFilters = new pa()),
            (g = fa.tokenize =
                function (a, b) {
                    var c,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = z[a + " "];
                    if (k) return b ? 0 : k.slice(0);
                    (h = a), (i = []), (j = d.preFilter);
                    while (h) {
                        (!c || (e = R.exec(h))) &&
                            (e && (h = h.slice(e[0].length) || h),
                            i.push((f = []))),
                            (c = !1),
                            (e = S.exec(h)) &&
                                ((c = e.shift()),
                                f.push({
                                    value: c,
                                    type: e[0].replace(Q, " "),
                                }),
                                (h = h.slice(c.length)));
                        for (g in d.filter)
                            !(e = W[g].exec(h)) ||
                                (j[g] && !(e = j[g](e))) ||
                                ((c = e.shift()),
                                f.push({ value: c, type: g, matches: e }),
                                (h = h.slice(c.length)));
                        if (!c) break;
                    }
                    return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
                });
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first
                ? function (b, c, f) {
                      while ((b = b[d]))
                          if (1 === b.nodeType || e) return a(b, c, f);
                  }
                : function (b, c, g) {
                      var h,
                          i,
                          j,
                          k = [w, f];
                      if (g) {
                          while ((b = b[d]))
                              if ((1 === b.nodeType || e) && a(b, c, g))
                                  return !0;
                      } else
                          while ((b = b[d]))
                              if (1 === b.nodeType || e) {
                                  if (
                                      ((j = b[u] || (b[u] = {})),
                                      (i =
                                          j[b.uniqueID] ||
                                          (j[b.uniqueID] = {})),
                                      (h = i[d]) && h[0] === w && h[1] === f)
                                  )
                                      return (k[2] = h[2]);
                                  if (((i[d] = k), (k[2] = a(b, c, g))))
                                      return !0;
                              }
                  };
        }
        function sa(a) {
            return a.length > 1
                ? function (b, c, d) {
                      var e = a.length;
                      while (e--) if (!a[e](b, c, d)) return !1;
                      return !0;
                  }
                : a[0];
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c;
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g;
        }
        function va(a, b, c, d, e, f) {
            return (
                d && !d[u] && (d = va(d)),
                e && !e[u] && (e = va(e, f)),
                ha(function (f, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || (!f && b) ? p : ua(p, m, a, h, i),
                        r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                    if ((c && c(q, r, h, i), d)) {
                        (j = ua(r, n)), d(j, [], h, i), (k = j.length);
                        while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                (j = []), (k = r.length);
                                while (k--) (l = r[k]) && j.push((q[k] = l));
                                e(null, (r = []), j, i);
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) &&
                                    (j = e ? J(f, l) : m[k]) > -1 &&
                                    (f[j] = !(g[j] = l));
                        }
                    } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
                })
            );
        }
        function wa(a) {
            for (
                var b,
                    c,
                    e,
                    f = a.length,
                    g = d.relative[a[0].type],
                    h = g || d.relative[" "],
                    i = g ? 1 : 0,
                    k = ra(
                        function (a) {
                            return a === b;
                        },
                        h,
                        !0
                    ),
                    l = ra(
                        function (a) {
                            return J(b, a) > -1;
                        },
                        h,
                        !0
                    ),
                    m = [
                        function (a, c, d) {
                            var e =
                                (!g && (d || c !== j)) ||
                                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                            return (b = null), e;
                        },
                    ];
                f > i;
                i++
            )
                if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
                else {
                    if (
                        ((c = d.filter[a[i].type].apply(null, a[i].matches)),
                        c[u])
                    ) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(
                            i > 1 && sa(m),
                            i > 1 &&
                                qa(
                                    a
                                        .slice(0, i - 1)
                                        .concat({
                                            value:
                                                " " === a[i - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                ).replace(Q, "$1"),
                            c,
                            e > i && wa(a.slice(i, e)),
                            f > e && wa((a = a.slice(e))),
                            f > e && qa(a)
                        );
                    }
                    m.push(c);
                }
            return sa(m);
        }
        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l,
                        o,
                        q,
                        r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || (e && d.find.TAG("*", k)),
                        y = (w += null == v ? 1 : Math.random() || 0.1),
                        z = x.length;
                    for (
                        k && (j = g === n || g || k);
                        s !== z && null != (l = x[s]);
                        s++
                    ) {
                        if (e && l) {
                            (o = 0),
                                g || l.ownerDocument === n || (m(l), (h = !p));
                            while ((q = a[o++]))
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = y);
                        }
                        c && ((l = !q && l) && r--, f && t.push(l));
                    }
                    if (((r += s), c && s !== r)) {
                        o = 0;
                        while ((q = b[o++])) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u);
                        }
                        H.apply(i, u),
                            k &&
                                !f &&
                                u.length > 0 &&
                                r + b.length > 1 &&
                                fa.uniqueSort(i);
                    }
                    return k && ((w = y), (j = v)), t;
                };
            return c ? ha(f) : f;
        }
        return (
            (h = fa.compile =
                function (a, b) {
                    var c,
                        d = [],
                        e = [],
                        f = A[a + " "];
                    if (!f) {
                        b || (b = g(a)), (c = b.length);
                        while (c--)
                            (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
                        (f = A(a, xa(e, d))), (f.selector = a);
                    }
                    return f;
                }),
            (i = fa.select =
                function (a, b, e, f) {
                    var i,
                        j,
                        k,
                        l,
                        m,
                        n = "function" == typeof a && a,
                        o = !f && g((a = n.selector || a));
                    if (((e = e || []), 1 === o.length)) {
                        if (
                            ((j = o[0] = o[0].slice(0)),
                            j.length > 2 &&
                                "ID" === (k = j[0]).type &&
                                c.getById &&
                                9 === b.nodeType &&
                                p &&
                                d.relative[j[1].type])
                        ) {
                            if (
                                ((b = (d.find.ID(
                                    k.matches[0].replace(ba, ca),
                                    b
                                ) || [])[0]),
                                !b)
                            )
                                return e;
                            n && (b = b.parentNode),
                                (a = a.slice(j.shift().value.length));
                        }
                        i = W.needsContext.test(a) ? 0 : j.length;
                        while (i--) {
                            if (((k = j[i]), d.relative[(l = k.type)])) break;
                            if (
                                (m = d.find[l]) &&
                                (f = m(
                                    k.matches[0].replace(ba, ca),
                                    (_.test(j[0].type) && oa(b.parentNode)) || b
                                ))
                            ) {
                                if (
                                    (j.splice(i, 1),
                                    (a = f.length && qa(j)),
                                    !a)
                                )
                                    return H.apply(e, f), e;
                                break;
                            }
                        }
                    }
                    return (
                        (n || h(a, o))(
                            f,
                            b,
                            !p,
                            e,
                            !b || (_.test(a) && oa(b.parentNode)) || b
                        ),
                        e
                    );
                }),
            (c.sortStable = u.split("").sort(B).join("") === u),
            (c.detectDuplicates = !!l),
            m(),
            (c.sortDetached = ia(function (a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"));
            })),
            ia(function (a) {
                return (
                    (a.innerHTML = "<a href='#'></a>"),
                    "#" === a.firstChild.getAttribute("href")
                );
            }) ||
                ja("type|href|height|width", function (a, b, c) {
                    return c
                        ? void 0
                        : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                }),
            (c.attributes &&
                ia(function (a) {
                    return (
                        (a.innerHTML = "<input/>"),
                        a.firstChild.setAttribute("value", ""),
                        "" === a.firstChild.getAttribute("value")
                    );
                })) ||
                ja("value", function (a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase()
                        ? void 0
                        : a.defaultValue;
                }),
            ia(function (a) {
                return null == a.getAttribute("disabled");
            }) ||
                ja(K, function (a, b, c) {
                    var d;
                    return c
                        ? void 0
                        : a[b] === !0
                        ? b.toLowerCase()
                        : (d = a.getAttributeNode(b)) && d.specified
                        ? d.value
                        : null;
                }),
            fa
        );
    })(a);
    (n.find = t),
        (n.expr = t.selectors),
        (n.expr[":"] = n.expr.pseudos),
        (n.uniqueSort = n.unique = t.uniqueSort),
        (n.text = t.getText),
        (n.isXMLDoc = t.isXML),
        (n.contains = t.contains);
    var u = function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a);
                }
            return d;
        },
        v = function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return n.grep(a, function (a) {
                return (a === b) !== c;
            });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function (a) {
            return h.call(b, a) > -1 !== c;
        });
    }
    (n.filter = function (a, b, c) {
        var d = b[0];
        return (
            c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType
                ? n.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : n.find.matches(
                      a,
                      n.grep(b, function (a) {
                          return 1 === a.nodeType;
                      })
                  )
        );
    }),
        n.fn.extend({
            find: function (a) {
                var b,
                    c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a)
                    return this.pushStack(
                        n(a).filter(function () {
                            for (b = 0; c > b; b++)
                                if (n.contains(e[b], this)) return !0;
                        })
                    );
                for (b = 0; c > b; b++) n.find(a, e[b], d);
                return (
                    (d = this.pushStack(c > 1 ? n.unique(d) : d)),
                    (d.selector = this.selector ? this.selector + " " + a : a),
                    d
                );
            },
            filter: function (a) {
                return this.pushStack(z(this, a || [], !1));
            },
            not: function (a) {
                return this.pushStack(z(this, a || [], !0));
            },
            is: function (a) {
                return !!z(
                    this,
                    "string" == typeof a && w.test(a) ? n(a) : a || [],
                    !1
                ).length;
            },
        });
    var A,
        B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = (n.fn.init = function (a, b, c) {
            var e, f;
            if (!a) return this;
            if (((c = c || A), "string" == typeof a)) {
                if (
                    ((e =
                        "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                            ? [null, a, null]
                            : B.exec(a)),
                    !e || (!e[1] && b))
                )
                    return !b || b.jquery
                        ? (b || c).find(a)
                        : this.constructor(b).find(a);
                if (e[1]) {
                    if (
                        ((b = b instanceof n ? b[0] : b),
                        n.merge(
                            this,
                            n.parseHTML(
                                e[1],
                                b && b.nodeType ? b.ownerDocument || b : d,
                                !0
                            )
                        ),
                        x.test(e[1]) && n.isPlainObject(b))
                    )
                        for (e in b)
                            n.isFunction(this[e])
                                ? this[e](b[e])
                                : this.attr(e, b[e]);
                    return this;
                }
                return (
                    (f = d.getElementById(e[2])),
                    f && f.parentNode && ((this.length = 1), (this[0] = f)),
                    (this.context = d),
                    (this.selector = a),
                    this
                );
            }
            return a.nodeType
                ? ((this.context = this[0] = a), (this.length = 1), this)
                : n.isFunction(a)
                ? void 0 !== c.ready
                    ? c.ready(a)
                    : a(n)
                : (void 0 !== a.selector &&
                      ((this.selector = a.selector),
                      (this.context = a.context)),
                  n.makeArray(a, this));
        });
    (C.prototype = n.fn), (A = n(d));
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({
        has: function (a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function (a, b) {
            for (
                var c,
                    d = 0,
                    e = this.length,
                    f = [],
                    g =
                        w.test(a) || "string" != typeof a
                            ? n(a, b || this.context)
                            : 0;
                e > d;
                d++
            )
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (
                        c.nodeType < 11 &&
                        (g
                            ? g.index(c) > -1
                            : 1 === c.nodeType && n.find.matchesSelector(c, a))
                    ) {
                        f.push(c);
                        break;
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        index: function (a) {
            return a
                ? "string" == typeof a
                    ? h.call(n(a), this[0])
                    : h.call(this, a.jquery ? a[0] : a)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        },
        addBack: function (a) {
            return this.add(
                null == a ? this.prevObject : this.prevObject.filter(a)
            );
        },
    });
    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    n.each(
        {
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null;
            },
            parents: function (a) {
                return u(a, "parentNode");
            },
            parentsUntil: function (a, b, c) {
                return u(a, "parentNode", c);
            },
            next: function (a) {
                return F(a, "nextSibling");
            },
            prev: function (a) {
                return F(a, "previousSibling");
            },
            nextAll: function (a) {
                return u(a, "nextSibling");
            },
            prevAll: function (a) {
                return u(a, "previousSibling");
            },
            nextUntil: function (a, b, c) {
                return u(a, "nextSibling", c);
            },
            prevUntil: function (a, b, c) {
                return u(a, "previousSibling", c);
            },
            siblings: function (a) {
                return v((a.parentNode || {}).firstChild, a);
            },
            children: function (a) {
                return v(a.firstChild);
            },
            contents: function (a) {
                return a.contentDocument || n.merge([], a.childNodes);
            },
        },
        function (a, b) {
            n.fn[a] = function (c, d) {
                var e = n.map(this, b, c);
                return (
                    "Until" !== a.slice(-5) && (d = c),
                    d && "string" == typeof d && (e = n.filter(d, e)),
                    this.length > 1 &&
                        (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()),
                    this.pushStack(e)
                );
            };
        }
    );
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return (
            n.each(a.match(G) || [], function (a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    (n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length)
                        f[h].apply(c[0], c[1]) === !1 &&
                            a.stopOnFalse &&
                            ((h = f.length), (c = !1));
                }
                a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
            },
            j = {
                add: function () {
                    return (
                        f &&
                            (c && !b && ((h = f.length - 1), g.push(c)),
                            (function d(b) {
                                n.each(b, function (b, c) {
                                    n.isFunction(c)
                                        ? (a.unique && j.has(c)) || f.push(c)
                                        : c &&
                                          c.length &&
                                          "string" !== n.type(c) &&
                                          d(c);
                                });
                            })(arguments),
                            c && !b && i()),
                        this
                    );
                },
                remove: function () {
                    return (
                        n.each(arguments, function (a, b) {
                            var c;
                            while ((c = n.inArray(b, f, c)) > -1)
                                f.splice(c, 1), h >= c && h--;
                        }),
                        this
                    );
                },
                has: function (a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0;
                },
                empty: function () {
                    return f && (f = []), this;
                },
                disable: function () {
                    return (e = g = []), (f = c = ""), this;
                },
                disabled: function () {
                    return !f;
                },
                lock: function () {
                    return (e = g = []), c || (f = c = ""), this;
                },
                locked: function () {
                    return !!e;
                },
                fireWith: function (a, c) {
                    return (
                        e ||
                            ((c = c || []),
                            (c = [a, c.slice ? c.slice() : c]),
                            g.push(c),
                            b || i()),
                        this
                    );
                },
                fire: function () {
                    return j.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!d;
                },
            };
        return j;
    }),
        n.extend({
            Deferred: function (a) {
                var b = [
                        [
                            "resolve",
                            "done",
                            n.Callbacks("once memory"),
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            n.Callbacks("once memory"),
                            "rejected",
                        ],
                        ["notify", "progress", n.Callbacks("memory")],
                    ],
                    c = "pending",
                    d = {
                        state: function () {
                            return c;
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var a = arguments;
                            return n
                                .Deferred(function (c) {
                                    n.each(b, function (b, f) {
                                        var g = n.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a =
                                                g && g.apply(this, arguments);
                                            a && n.isFunction(a.promise)
                                                ? a
                                                      .promise()
                                                      .progress(c.notify)
                                                      .done(c.resolve)
                                                      .fail(c.reject)
                                                : c[f[0] + "With"](
                                                      this === d
                                                          ? c.promise()
                                                          : this,
                                                      g ? [a] : arguments
                                                  );
                                        });
                                    }),
                                        (a = null);
                                })
                                .promise();
                        },
                        promise: function (a) {
                            return null != a ? n.extend(a, d) : d;
                        },
                    },
                    e = {};
                return (
                    (d.pipe = d.then),
                    n.each(b, function (a, f) {
                        var g = f[2],
                            h = f[3];
                        (d[f[1]] = g.add),
                            h &&
                                g.add(
                                    function () {
                                        c = h;
                                    },
                                    b[1 ^ a][2].disable,
                                    b[2][2].lock
                                ),
                            (e[f[0]] = function () {
                                return (
                                    e[f[0] + "With"](
                                        this === e ? d : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (e[f[0] + "With"] = g.fireWith);
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                );
            },
            when: function (a) {
                var b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function (a, b, c) {
                        return function (d) {
                            (b[a] = this),
                                (c[a] =
                                    arguments.length > 1
                                        ? e.call(arguments)
                                        : d),
                                c === i
                                    ? g.notifyWith(b, c)
                                    : --f || g.resolveWith(b, c);
                        };
                    },
                    i,
                    j,
                    k;
                if (d > 1)
                    for (
                        i = new Array(d), j = new Array(d), k = new Array(d);
                        d > b;
                        b++
                    )
                        c[b] && n.isFunction(c[b].promise)
                            ? c[b]
                                  .promise()
                                  .progress(h(b, j, i))
                                  .done(h(b, k, c))
                                  .fail(g.reject)
                            : --f;
                return f || g.resolveWith(k, c), g.promise();
            },
        });
    var I;
    (n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
    }),
        n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? n.readyWait++ : n.ready(!0);
            },
            ready: function (a) {
                (a === !0 ? --n.readyWait : n.isReady) ||
                    ((n.isReady = !0),
                    (a !== !0 && --n.readyWait > 0) ||
                        (I.resolveWith(d, [n]),
                        n.fn.triggerHandler &&
                            (n(d).triggerHandler("ready"), n(d).off("ready"))));
            },
        });
    function J() {
        d.removeEventListener("DOMContentLoaded", J),
            a.removeEventListener("load", J),
            n.ready();
    }
    (n.ready.promise = function (b) {
        return (
            I ||
                ((I = n.Deferred()),
                "complete" === d.readyState ||
                ("loading" !== d.readyState && !d.documentElement.doScroll)
                    ? a.setTimeout(n.ready)
                    : (d.addEventListener("DOMContentLoaded", J),
                      a.addEventListener("load", J))),
            I.promise(b)
        );
    }),
        n.ready.promise();
    var K = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g);
            } else if (
                void 0 !== d &&
                ((e = !0),
                n.isFunction(d) || (g = !0),
                j &&
                    (g
                        ? (b.call(a, d), (b = null))
                        : ((j = b),
                          (b = function (a, b, c) {
                              return j.call(n(a), c);
                          }))),
                b)
            )
                for (; i > h; h++)
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
        },
        L = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        };
    function M() {
        this.expando = n.expando + M.uid++;
    }
    (M.uid = 1),
        (M.prototype = {
            register: function (a, b) {
                var c = b || {};
                return (
                    a.nodeType
                        ? (a[this.expando] = c)
                        : Object.defineProperty(a, this.expando, {
                              value: c,
                              writable: !0,
                              configurable: !0,
                          }),
                    a[this.expando]
                );
            },
            cache: function (a) {
                if (!L(a)) return {};
                var b = a[this.expando];
                return (
                    b ||
                        ((b = {}),
                        L(a) &&
                            (a.nodeType
                                ? (a[this.expando] = b)
                                : Object.defineProperty(a, this.expando, {
                                      value: b,
                                      configurable: !0,
                                  }))),
                    b
                );
            },
            set: function (a, b, c) {
                var d,
                    e = this.cache(a);
                if ("string" == typeof b) e[b] = c;
                else for (d in b) e[d] = b[d];
                return e;
            },
            get: function (a, b) {
                return void 0 === b
                    ? this.cache(a)
                    : a[this.expando] && a[this.expando][b];
            },
            access: function (a, b, c) {
                var d;
                return void 0 === b ||
                    (b && "string" == typeof b && void 0 === c)
                    ? ((d = this.get(a, b)),
                      void 0 !== d ? d : this.get(a, n.camelCase(b)))
                    : (this.set(a, b, c), void 0 !== c ? c : b);
            },
            remove: function (a, b) {
                var c,
                    d,
                    e,
                    f = a[this.expando];
                if (void 0 !== f) {
                    if (void 0 === b) this.register(a);
                    else {
                        n.isArray(b)
                            ? (d = b.concat(b.map(n.camelCase)))
                            : ((e = n.camelCase(b)),
                              b in f
                                  ? (d = [b, e])
                                  : ((d = e),
                                    (d = d in f ? [d] : d.match(G) || []))),
                            (c = d.length);
                        while (c--) delete f[d[c]];
                    }
                    (void 0 === b || n.isEmptyObject(f)) &&
                        (a.nodeType
                            ? (a[this.expando] = void 0)
                            : delete a[this.expando]);
                }
            },
            hasData: function (a) {
                var b = a[this.expando];
                return void 0 !== b && !n.isEmptyObject(b);
            },
        });
    var N = new M(),
        O = new M(),
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (
                ((d = "data-" + b.replace(Q, "-$&").toLowerCase()),
                (c = a.getAttribute(d)),
                "string" == typeof c)
            ) {
                try {
                    c =
                        "true" === c
                            ? !0
                            : "false" === c
                            ? !1
                            : "null" === c
                            ? null
                            : +c + "" === c
                            ? +c
                            : P.test(c)
                            ? n.parseJSON(c)
                            : c;
                } catch (e) {}
                O.set(a, b, c);
            } else c = void 0;
        return c;
    }
    n.extend({
        hasData: function (a) {
            return O.hasData(a) || N.hasData(a);
        },
        data: function (a, b, c) {
            return O.access(a, b, c);
        },
        removeData: function (a, b) {
            O.remove(a, b);
        },
        _data: function (a, b, c) {
            return N.access(a, b, c);
        },
        _removeData: function (a, b) {
            N.remove(a, b);
        },
    }),
        n.fn.extend({
            data: function (a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (
                        this.length &&
                        ((e = O.get(f)),
                        1 === f.nodeType && !N.get(f, "hasDataAttrs"))
                    ) {
                        c = g.length;
                        while (c--)
                            g[c] &&
                                ((d = g[c].name),
                                0 === d.indexOf("data-") &&
                                    ((d = n.camelCase(d.slice(5))),
                                    R(f, d, e[d])));
                        N.set(f, "hasDataAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a
                    ? this.each(function () {
                          O.set(this, a);
                      })
                    : K(
                          this,
                          function (b) {
                              var c, d;
                              if (f && void 0 === b) {
                                  if (
                                      ((c =
                                          O.get(f, a) ||
                                          O.get(
                                              f,
                                              a.replace(Q, "-$&").toLowerCase()
                                          )),
                                      void 0 !== c)
                                  )
                                      return c;
                                  if (
                                      ((d = n.camelCase(a)),
                                      (c = O.get(f, d)),
                                      void 0 !== c)
                                  )
                                      return c;
                                  if (((c = R(f, d, void 0)), void 0 !== c))
                                      return c;
                              } else
                                  (d = n.camelCase(a)),
                                      this.each(function () {
                                          var c = O.get(this, d);
                                          O.set(this, d, b),
                                              a.indexOf("-") > -1 &&
                                                  void 0 !== c &&
                                                  O.set(this, a, b);
                                      });
                          },
                          null,
                          b,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (a) {
                return this.each(function () {
                    O.remove(this, a);
                });
            },
        }),
        n.extend({
            queue: function (a, b, c) {
                var d;
                return a
                    ? ((b = (b || "fx") + "queue"),
                      (d = N.get(a, b)),
                      c &&
                          (!d || n.isArray(c)
                              ? (d = N.access(a, b, n.makeArray(c)))
                              : d.push(c)),
                      d || [])
                    : void 0;
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function () {
                        n.dequeue(a, b);
                    };
                "inprogress" === e && ((e = c.shift()), d--),
                    e &&
                        ("fx" === b && c.unshift("inprogress"),
                        delete f.stop,
                        e.call(a, g, f)),
                    !d && f && f.empty.fire();
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return (
                    N.get(a, c) ||
                    N.access(a, c, {
                        empty: n.Callbacks("once memory").add(function () {
                            N.remove(a, [b + "queue", c]);
                        }),
                    })
                );
            },
        }),
        n.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return (
                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                    arguments.length < c
                        ? n.queue(this[0], a)
                        : void 0 === b
                        ? this
                        : this.each(function () {
                              var c = n.queue(this, a, b);
                              n._queueHooks(this, a),
                                  "fx" === a &&
                                      "inprogress" !== c[0] &&
                                      n.dequeue(this, a);
                          })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    n.dequeue(this, a);
                });
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, b) {
                var c,
                    d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f]);
                    };
                "string" != typeof a && ((b = a), (a = void 0)),
                    (a = a || "fx");
                while (g--)
                    (c = N.get(f[g], a + "queueHooks")),
                        c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            },
        });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function (a, b) {
            return (
                (a = b || a),
                "none" === n.css(a, "display") ||
                    !n.contains(a.ownerDocument, a)
            );
        };
    function W(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d
                ? function () {
                      return d.cur();
                  }
                : function () {
                      return n.css(a, b, "");
                  },
            i = h(),
            j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || ("px" !== j && +i)) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            (j = j || k[3]), (c = c || []), (k = +i || 1);
            do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return (
            c &&
                ((k = +k || +i || 0),
                (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
                d && ((d.unit = j), (d.start = k), (d.end = e))),
            e
        );
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    ($.optgroup = $.option),
        ($.tbody = $.tfoot = $.colgroup = $.caption = $.thead),
        ($.th = $.td);
    function _(a, b) {
        var c =
            "undefined" != typeof a.getElementsByTagName
                ? a.getElementsByTagName(b || "*")
                : "undefined" != typeof a.querySelectorAll
                ? a.querySelectorAll(b || "*")
                : [];
        return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        for (
            var f,
                g,
                h,
                i,
                j,
                k,
                l = b.createDocumentFragment(),
                m = [],
                o = 0,
                p = a.length;
            p > o;
            o++
        )
            if (((f = a[o]), f || 0 === f))
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
                    (g = g || l.appendChild(b.createElement("div"))),
                        (h = (Y.exec(f) || ["", ""])[1].toLowerCase()),
                        (i = $[h] || $._default),
                        (g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2]),
                        (k = i[0]);
                    while (k--) g = g.lastChild;
                    n.merge(m, g.childNodes),
                        (g = l.firstChild),
                        (g.textContent = "");
                } else m.push(b.createTextNode(f));
        (l.textContent = ""), (o = 0);
        while ((f = m[o++]))
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (
                ((j = n.contains(f.ownerDocument, f)),
                (g = _(l.appendChild(f), "script")),
                j && aa(g),
                c)
            ) {
                k = 0;
                while ((f = g[k++])) Z.test(f.type || "") && c.push(f);
            }
        return l;
    }
    !(function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            b.appendChild(c),
            (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (b.innerHTML = "<textarea>x</textarea>"),
            (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return !0;
    }
    function ha() {
        return !1;
    }
    function ia() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && ((d = d || c), (c = void 0));
            for (h in b) ja(a, h, c, d, b[h], f);
            return a;
        }
        if (
            (null == d && null == e
                ? ((e = c), (d = c = void 0))
                : null == e &&
                  ("string" == typeof c
                      ? ((e = d), (d = void 0))
                      : ((e = d), (d = c), (c = void 0))),
            e === !1)
        )
            e = ha;
        else if (!e) return this;
        return (
            1 === f &&
                ((g = e),
                (e = function (a) {
                    return n().off(a), g.apply(this, arguments);
                }),
                (e.guid = g.guid || (g.guid = n.guid++))),
            a.each(function () {
                n.event.add(this, b, e, d, c);
            })
        );
    }
    (n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = N.get(a);
            if (r) {
                c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                    c.guid || (c.guid = n.guid++),
                    (i = r.events) || (i = r.events = {}),
                    (g = r.handle) ||
                        (g = r.handle =
                            function (b) {
                                return "undefined" != typeof n &&
                                    n.event.triggered !== b.type
                                    ? n.event.dispatch.apply(a, arguments)
                                    : void 0;
                            }),
                    (b = (b || "").match(G) || [""]),
                    (j = b.length);
                while (j--)
                    (h = fa.exec(b[j]) || []),
                        (o = q = h[1]),
                        (p = (h[2] || "").split(".").sort()),
                        o &&
                            ((l = n.event.special[o] || {}),
                            (o = (e ? l.delegateType : l.bindType) || o),
                            (l = n.event.special[o] || {}),
                            (k = n.extend(
                                {
                                    type: o,
                                    origType: q,
                                    data: d,
                                    handler: c,
                                    guid: c.guid,
                                    selector: e,
                                    needsContext:
                                        e && n.expr.match.needsContext.test(e),
                                    namespace: p.join("."),
                                },
                                f
                            )),
                            (m = i[o]) ||
                                ((m = i[o] = []),
                                (m.delegateCount = 0),
                                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                                    (a.addEventListener &&
                                        a.addEventListener(o, g))),
                            l.add &&
                                (l.add.call(a, k),
                                k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            (n.event.global[o] = !0));
            }
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                (b = (b || "").match(G) || [""]), (j = b.length);
                while (j--)
                    if (
                        ((h = fa.exec(b[j]) || []),
                        (o = q = h[1]),
                        (p = (h[2] || "").split(".").sort()),
                        o)
                    ) {
                        (l = n.event.special[o] || {}),
                            (o = (d ? l.delegateType : l.bindType) || o),
                            (m = i[o] || []),
                            (h =
                                h[2] &&
                                new RegExp(
                                    "(^|\\.)" +
                                        p.join("\\.(?:.*\\.|)") +
                                        "(\\.|$)"
                                )),
                            (g = f = m.length);
                        while (f--)
                            (k = m[f]),
                                (!e && q !== k.origType) ||
                                    (c && c.guid !== k.guid) ||
                                    (h && !h.test(k.namespace)) ||
                                    (d &&
                                        d !== k.selector &&
                                        ("**" !== d || !k.selector)) ||
                                    (m.splice(f, 1),
                                    k.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, k));
                        g &&
                            !m.length &&
                            ((l.teardown &&
                                l.teardown.call(a, p, r.handle) !== !1) ||
                                n.removeEvent(a, o, r.handle),
                            delete i[o]);
                    } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events");
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b,
                c,
                d,
                f,
                g,
                h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (
                ((i[0] = a),
                (a.delegateTarget = this),
                !k.preDispatch || k.preDispatch.call(this, a) !== !1)
            ) {
                (h = n.event.handlers.call(this, a, j)), (b = 0);
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    (a.currentTarget = f.elem), (c = 0);
                    while (
                        (g = f.handlers[c++]) &&
                        !a.isImmediatePropagationStopped()
                    )
                        (!a.rnamespace || a.rnamespace.test(g.namespace)) &&
                            ((a.handleObj = g),
                            (a.data = g.data),
                            (d = (
                                (n.event.special[g.origType] || {}).handle ||
                                g.handler
                            ).apply(f.elem, i)),
                            void 0 !== d &&
                                (a.result = d) === !1 &&
                                (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;
            if (
                h &&
                i.nodeType &&
                ("click" !== a.type || isNaN(a.button) || a.button < 1)
            )
                for (; i !== this; i = i.parentNode || this)
                    if (
                        1 === i.nodeType &&
                        (i.disabled !== !0 || "click" !== a.type)
                    ) {
                        for (d = [], c = 0; h > c; c++)
                            (f = b[c]),
                                (e = f.selector + " "),
                                void 0 === d[e] &&
                                    (d[e] = f.needsContext
                                        ? n(e, this).index(i) > -1
                                        : n.find(e, this, null, [i]).length),
                                d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d });
                    }
            return (
                h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
            );
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return (
                    null == a.which &&
                        (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
                );
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (a, b) {
                var c,
                    e,
                    f,
                    g = b.button;
                return (
                    null == a.pageX &&
                        null != b.clientX &&
                        ((c = a.target.ownerDocument || d),
                        (e = c.documentElement),
                        (f = c.body),
                        (a.pageX =
                            b.clientX +
                            ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) -
                            ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
                        (a.pageY =
                            b.clientY +
                            ((e && e.scrollTop) || (f && f.scrollTop) || 0) -
                            ((e && e.clientTop) || (f && f.clientTop) || 0))),
                    a.which ||
                        void 0 === g ||
                        (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                    a
                );
            },
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b,
                c,
                e,
                f = a.type,
                g = a,
                h = this.fixHooks[f];
            h ||
                (this.fixHooks[f] = h =
                    ea.test(f)
                        ? this.mouseHooks
                        : da.test(f)
                        ? this.keyHooks
                        : {}),
                (e = h.props ? this.props.concat(h.props) : this.props),
                (a = new n.Event(g)),
                (b = e.length);
            while (b--) (c = e[b]), (a[c] = g[c]);
            return (
                a.target || (a.target = d),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                h.filter ? h.filter(a, g) : a
            );
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    return this !== ia() && this.focus
                        ? (this.focus(), !1)
                        : void 0;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === ia() && this.blur
                        ? (this.blur(), !1)
                        : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type &&
                        this.click &&
                        n.nodeName(this, "input")
                        ? (this.click(), !1)
                        : void 0;
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result &&
                        a.originalEvent &&
                        (a.originalEvent.returnValue = a.result);
                },
            },
        },
    }),
        (n.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c);
        }),
        (n.Event = function (a, b) {
            return this instanceof n.Event
                ? (a && a.type
                      ? ((this.originalEvent = a),
                        (this.type = a.type),
                        (this.isDefaultPrevented =
                            a.defaultPrevented ||
                            (void 0 === a.defaultPrevented &&
                                a.returnValue === !1)
                                ? ga
                                : ha))
                      : (this.type = a),
                  b && n.extend(this, b),
                  (this.timeStamp = (a && a.timeStamp) || n.now()),
                  void (this[n.expando] = !0))
                : new n.Event(a, b);
        }),
        (n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: ha,
            isPropagationStopped: ha,
            isImmediatePropagationStopped: ha,
            preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = ga), a && a.preventDefault();
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = ga), a && a.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = ga),
                    a && a.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        n.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (a, b) {
                n.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c,
                            d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        return (
                            (!e || (e !== d && !n.contains(d, e))) &&
                                ((a.type = f.origType),
                                (c = f.handler.apply(this, arguments)),
                                (a.type = b)),
                            c
                        );
                    },
                };
            }
        ),
        n.fn.extend({
            on: function (a, b, c, d) {
                return ja(this, a, b, c, d);
            },
            one: function (a, b, c, d) {
                return ja(this, a, b, c, d, 1);
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return (
                        (d = a.handleObj),
                        n(a.delegateTarget).off(
                            d.namespace
                                ? d.origType + "." + d.namespace
                                : d.origType,
                            d.selector,
                            d.handler
                        ),
                        this
                    );
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (b === !1 || "function" == typeof b) &&
                        ((c = b), (b = void 0)),
                    c === !1 && (c = ha),
                    this.each(function () {
                        n.event.remove(this, a, c, b);
                    })
                );
            },
        });
    var ka =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") &&
            n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
            ? a.getElementsByTagName("tbody")[0] || a
            : a;
    }
    function qa(a) {
        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (
                N.hasData(a) &&
                ((f = N.access(a)), (g = N.set(b, f)), (j = f.events))
            ) {
                delete g.handle, (g.events = {});
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c]);
            }
            O.hasData(a) &&
                ((h = O.access(a)), (i = n.extend({}, h)), O.set(b, i));
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type)
            ? (b.checked = a.checked)
            : ("input" === c || "textarea" === c) &&
              (b.defaultValue = a.defaultValue);
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e,
            g,
            h,
            i,
            j,
            k,
            m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || (o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)))
            return a.each(function (e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
            });
        if (
            o &&
            ((e = ca(b, a[0].ownerDocument, !1, a, d)),
            (g = e.firstChild),
            1 === e.childNodes.length && (e = g),
            g || d)
        ) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++)
                (j = e),
                    m !== p &&
                        ((j = n.clone(j, !0, !0)),
                        i && n.merge(h, _(j, "script"))),
                    c.call(a[m], j, m);
            if (i)
                for (
                    k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0;
                    i > m;
                    m++
                )
                    (j = h[m]),
                        Z.test(j.type || "") &&
                            !N.access(j, "globalEval") &&
                            n.contains(k, j) &&
                            (j.src
                                ? n._evalUrl && n._evalUrl(j.src)
                                : n.globalEval(j.textContent.replace(oa, "")));
        }
        return a;
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(_(d)),
                d.parentNode &&
                    (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
                    d.parentNode.removeChild(d));
        return a;
    }
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(ka, "<$1></$2>");
        },
        clone: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (
                !(
                    l.noCloneChecked ||
                    (1 !== a.nodeType && 11 !== a.nodeType) ||
                    n.isXMLDoc(a)
                )
            )
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++)
                    ta(f[d], g[d]);
            if (b)
                if (c)
                    for (
                        f = f || _(a), g = g || _(h), d = 0, e = f.length;
                        e > d;
                        d++
                    )
                        sa(f[d], g[d]);
                else sa(a, h);
            return (
                (g = _(h, "script")),
                g.length > 0 && aa(g, !i && _(a, "script")),
                h
            );
        },
        cleanData: function (a) {
            for (
                var b, c, d, e = n.event.special, f = 0;
                void 0 !== (c = a[f]);
                f++
            )
                if (L(c)) {
                    if ((b = c[N.expando])) {
                        if (b.events)
                            for (d in b.events)
                                e[d]
                                    ? n.event.remove(c, d)
                                    : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0;
                    }
                    c[O.expando] && (c[O.expando] = void 0);
                }
        },
    }),
        n.fn.extend({
            domManip: ua,
            detach: function (a) {
                return va(this, a, !0);
            },
            remove: function (a) {
                return va(this, a);
            },
            text: function (a) {
                return K(
                    this,
                    function (a) {
                        return void 0 === a
                            ? n.text(this)
                            : this.empty().each(function () {
                                  (1 === this.nodeType ||
                                      11 === this.nodeType ||
                                      9 === this.nodeType) &&
                                      (this.textContent = a);
                              });
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function () {
                return ua(this, arguments, function (a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = pa(this, a);
                        b.appendChild(a);
                    }
                });
            },
            prepend: function () {
                return ua(this, arguments, function (a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = pa(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function () {
                return ua(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function () {
                return ua(this, arguments, function (a) {
                    this.parentNode &&
                        this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++)
                    1 === a.nodeType &&
                        (n.cleanData(_(a, !1)), (a.textContent = ""));
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null == a ? !1 : a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return n.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                return K(
                    this,
                    function (a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a && 1 === b.nodeType)
                            return b.innerHTML;
                        if (
                            "string" == typeof a &&
                            !la.test(a) &&
                            !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]
                        ) {
                            a = n.htmlPrefilter(a);
                            try {
                                for (; d > c; c++)
                                    (b = this[c] || {}),
                                        1 === b.nodeType &&
                                            (n.cleanData(_(b, !1)),
                                            (b.innerHTML = a));
                                b = 0;
                            } catch (e) {}
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function () {
                var a = [];
                return ua(
                    this,
                    arguments,
                    function (b) {
                        var c = this.parentNode;
                        n.inArray(this, a) < 0 &&
                            (n.cleanData(_(this)),
                            c && c.replaceChild(b, this));
                    },
                    a
                );
            },
        }),
        n.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (a, b) {
                n.fn[a] = function (a) {
                    for (
                        var c, d = [], e = n(a), f = e.length - 1, h = 0;
                        f >= h;
                        h++
                    )
                        (c = h === f ? this : this.clone(!0)),
                            n(e[h])[b](c),
                            g.apply(d, c.get());
                    return this.pushStack(d);
                };
            }
        );
    var wa,
        xa = { HTML: "block", BODY: "block" };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d;
    }
    function za(a) {
        var b = d,
            c = xa[a];
        return (
            c ||
                ((c = ya(a, b)),
                ("none" !== c && c) ||
                    ((wa = (
                        wa ||
                        n("<iframe frameborder='0' width='0' height='0'/>")
                    ).appendTo(b.documentElement)),
                    (b = wa[0].contentDocument),
                    b.write(),
                    b.close(),
                    (c = ya(a, b)),
                    wa.detach()),
                (xa[a] = c)),
            c
        );
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function (b) {
            var c = b.ownerDocument.defaultView;
            return c.opener || (c = a), c.getComputedStyle(b);
        },
        Da = function (a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        },
        Ea = d.documentElement;
    !(function () {
        var b,
            c,
            e,
            f,
            g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            (h.style.backgroundClip = "content-box"),
                (h.cloneNode(!0).style.backgroundClip = ""),
                (l.clearCloneStyle = "content-box" === h.style.backgroundClip),
                (g.style.cssText =
                    "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                g.appendChild(h);
            function i() {
                (h.style.cssText =
                    "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                    (h.innerHTML = ""),
                    Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                (b = "1%" !== d.top),
                    (f = "2px" === d.marginLeft),
                    (c = "4px" === d.width),
                    (h.style.marginRight = "50%"),
                    (e = "4px" === d.marginRight),
                    Ea.removeChild(g);
            }
            n.extend(l, {
                pixelPosition: function () {
                    return i(), b;
                },
                boxSizingReliable: function () {
                    return null == c && i(), c;
                },
                pixelMarginRight: function () {
                    return null == c && i(), e;
                },
                reliableMarginLeft: function () {
                    return null == c && i(), f;
                },
                reliableMarginRight: function () {
                    var b,
                        c = h.appendChild(d.createElement("div"));
                    return (
                        (c.style.cssText = h.style.cssText =
                            "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                        (c.style.marginRight = c.style.width = "0"),
                        (h.style.width = "1px"),
                        Ea.appendChild(g),
                        (b = !parseFloat(a.getComputedStyle(c).marginRight)),
                        Ea.removeChild(g),
                        h.removeChild(c),
                        b
                    );
                },
            });
        }
    })();
    function Fa(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return (
            (c = c || Ca(a)),
            c &&
                ((g = c.getPropertyValue(b) || c[b]),
                "" !== g ||
                    n.contains(a.ownerDocument, a) ||
                    (g = n.style(a, b)),
                !l.pixelMarginRight() &&
                    Ba.test(g) &&
                    Aa.test(b) &&
                    ((d = h.width),
                    (e = h.minWidth),
                    (f = h.maxWidth),
                    (h.minWidth = h.maxWidth = h.width = g),
                    (g = c.width),
                    (h.width = d),
                    (h.minWidth = e),
                    (h.maxWidth = f))),
            void 0 !== g ? g + "" : g
        );
    }
    function Ga(a, b) {
        return {
            get: function () {
                return a()
                    ? void delete this.get
                    : (this.get = b).apply(this, arguments);
            },
        };
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = { position: "absolute", visibility: "hidden", display: "block" },
        Ja = { letterSpacing: "0", fontWeight: "400" },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;
    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--) if (((a = Ka[c] + b), a in La)) return a;
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Oa(a, b, c, d, e) {
        for (
            var f =
                    c === (d ? "border" : "content")
                        ? 4
                        : "width" === b
                        ? 1
                        : 0,
                g = 0;
            4 > f;
            f += 2
        )
            "margin" === c && (g += n.css(a, c + U[f], !0, e)),
                d
                    ? ("content" === c &&
                          (g -= n.css(a, "padding" + U[f], !0, e)),
                      "margin" !== c &&
                          (g -= n.css(a, "border" + U[f] + "Width", !0, e)))
                    : ((g += n.css(a, "padding" + U[f], !0, e)),
                      "padding" !== c &&
                          (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g;
    }
    function Pa(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ca(b),
            i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (
            (d.msFullscreenElement &&
                a.top !== a &&
                b.getClientRects().length &&
                (g = Math.round(100 * b.getBoundingClientRect()[c])),
            0 >= g || null == g)
        ) {
            if (
                ((g = Fa(b, c, h)),
                (0 > g || null == g) && (g = b.style[c]),
                Ba.test(g))
            )
                return g;
            (f = i && (l.boxSizingReliable() || g === b.style[c])),
                (g = parseFloat(g) || 0);
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            (d = a[g]),
                d.style &&
                    ((f[g] = N.get(d, "olddisplay")),
                    (c = d.style.display),
                    b
                        ? (f[g] || "none" !== c || (d.style.display = ""),
                          "" === d.style.display &&
                              V(d) &&
                              (f[g] = N.access(
                                  d,
                                  "olddisplay",
                                  za(d.nodeName)
                              )))
                        : ((e = V(d)),
                          ("none" === c && e) ||
                              N.set(
                                  d,
                                  "olddisplay",
                                  e ? c : n.css(d, "display")
                              )));
        for (g = 0; h > g; g++)
            (d = a[g]),
                d.style &&
                    ((b &&
                        "none" !== d.style.display &&
                        "" !== d.style.display) ||
                        (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: "cssFloat" },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = n.camelCase(b),
                    i = a.style;
                return (
                    (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
                    (g = n.cssHooks[b] || n.cssHooks[h]),
                    void 0 === c
                        ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                            ? e
                            : i[b]
                        : ((f = typeof c),
                          "string" === f &&
                              (e = T.exec(c)) &&
                              e[1] &&
                              ((c = W(a, b, e)), (f = "number")),
                          null != c &&
                              c === c &&
                              ("number" === f &&
                                  (c +=
                                      (e && e[3]) ||
                                      (n.cssNumber[h] ? "" : "px")),
                              l.clearCloneStyle ||
                                  "" !== c ||
                                  0 !== b.indexOf("background") ||
                                  (i[b] = "inherit"),
                              (g &&
                                  "set" in g &&
                                  void 0 === (c = g.set(a, c, d))) ||
                                  (i[b] = c)),
                          void 0)
                );
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = n.camelCase(b);
            return (
                (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
                (g = n.cssHooks[b] || n.cssHooks[h]),
                g && "get" in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = Fa(a, b, d)),
                "normal" === e && b in Ja && (e = Ja[b]),
                "" === c || c
                    ? ((f = parseFloat(e)),
                      c === !0 || isFinite(f) ? f || 0 : e)
                    : e
            );
        },
    }),
        n.each(["height", "width"], function (a, b) {
            n.cssHooks[b] = {
                get: function (a, c, d) {
                    return c
                        ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth
                            ? Da(a, Ia, function () {
                                  return Pa(a, b, d);
                              })
                            : Pa(a, b, d)
                        : void 0;
                },
                set: function (a, c, d) {
                    var e,
                        f = d && Ca(a),
                        g =
                            d &&
                            Oa(
                                a,
                                b,
                                d,
                                "border-box" === n.css(a, "boxSizing", !1, f),
                                f
                            );
                    return (
                        g &&
                            (e = T.exec(c)) &&
                            "px" !== (e[3] || "px") &&
                            ((a.style[b] = c), (c = n.css(a, b))),
                        Na(a, c, g)
                    );
                },
            };
        }),
        (n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
            return b
                ? (parseFloat(Fa(a, "marginLeft")) ||
                      a.getBoundingClientRect().left -
                          Da(a, { marginLeft: 0 }, function () {
                              return a.getBoundingClientRect().left;
                          })) + "px"
                : void 0;
        })),
        (n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
            return b
                ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"])
                : void 0;
        })),
        n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            (n.cssHooks[a + b] = {
                expand: function (c) {
                    for (
                        var d = 0,
                            e = {},
                            f = "string" == typeof c ? c.split(" ") : [c];
                        4 > d;
                        d++
                    )
                        e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                },
            }),
                Aa.test(a) || (n.cssHooks[a + b].set = Na);
        }),
        n.fn.extend({
            css: function (a, b) {
                return K(
                    this,
                    function (a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (n.isArray(b)) {
                            for (d = Ca(a), e = b.length; e > g; g++)
                                f[b[g]] = n.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            },
            show: function () {
                return Qa(this, !0);
            },
            hide: function () {
                return Qa(this);
            },
            toggle: function (a) {
                return "boolean" == typeof a
                    ? a
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          V(this) ? n(this).show() : n(this).hide();
                      });
            },
        });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e);
    }
    (n.Tween = Ra),
        (Ra.prototype = {
            constructor: Ra,
            init: function (a, b, c, d, e, f) {
                (this.elem = a),
                    (this.prop = c),
                    (this.easing = e || n.easing._default),
                    (this.options = b),
                    (this.start = this.now = this.cur()),
                    (this.end = d),
                    (this.unit = f || (n.cssNumber[c] ? "" : "px"));
            },
            cur: function () {
                var a = Ra.propHooks[this.prop];
                return a && a.get
                    ? a.get(this)
                    : Ra.propHooks._default.get(this);
            },
            run: function (a) {
                var b,
                    c = Ra.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = b =
                              n.easing[this.easing](
                                  a,
                                  this.options.duration * a,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
                    this
                );
            },
        }),
        (Ra.prototype.init.prototype = Ra.prototype),
        (Ra.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType ||
                        (null != a.elem[a.prop] && null == a.elem.style[a.prop])
                        ? a.elem[a.prop]
                        : ((b = n.css(a.elem, a.prop, "")),
                          b && "auto" !== b ? b : 0);
                },
                set: function (a) {
                    n.fx.step[a.prop]
                        ? n.fx.step[a.prop](a)
                        : 1 !== a.elem.nodeType ||
                          (null == a.elem.style[n.cssProps[a.prop]] &&
                              !n.cssHooks[a.prop])
                        ? (a.elem[a.prop] = a.now)
                        : n.style(a.elem, a.prop, a.now + a.unit);
                },
            },
        }),
        (Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft =
            {
                set: function (a) {
                    a.elem.nodeType &&
                        a.elem.parentNode &&
                        (a.elem[a.prop] = a.now);
                },
            }),
        (n.easing = {
            linear: function (a) {
                return a;
            },
            swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (n.fx = Ra.prototype.init),
        (n.fx.step = {});
    var Sa,
        Ta,
        Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;
    function Wa() {
        return (
            a.setTimeout(function () {
                Sa = void 0;
            }),
            (Sa = n.now())
        );
    }
    function Xa(a, b) {
        var c,
            d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            (c = U[d]), (e["margin" + c] = e["padding" + c] = a);
        return b && (e.opacity = e.width = a), e;
    }
    function Ya(a, b, c) {
        for (
            var d,
                e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]),
                f = 0,
                g = e.length;
            g > f;
            f++
        )
            if ((d = e[f].call(c, b, a))) return d;
    }
    function Za(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue ||
            ((h = n._queueHooks(a, "fx")),
            null == h.unqueued &&
                ((h.unqueued = 0),
                (i = h.empty.fire),
                (h.empty.fire = function () {
                    h.unqueued || i();
                })),
            h.unqueued++,
            l.always(function () {
                l.always(function () {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
                });
            })),
            1 === a.nodeType &&
                ("height" in b || "width" in b) &&
                ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
                (j = n.css(a, "display")),
                (k =
                    "none" === j
                        ? N.get(a, "olddisplay") || za(a.nodeName)
                        : j),
                "inline" === k &&
                    "none" === n.css(a, "float") &&
                    (o.display = "inline-block")),
            c.overflow &&
                ((o.overflow = "hidden"),
                l.always(function () {
                    (o.overflow = c.overflow[0]),
                        (o.overflowX = c.overflow[1]),
                        (o.overflowY = c.overflow[2]);
                }));
        for (d in b)
            if (((e = b[d]), Ua.exec(e))) {
                if (
                    (delete b[d],
                    (f = f || "toggle" === e),
                    e === (p ? "hide" : "show"))
                ) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0;
                }
                m[d] = (q && q[d]) || n.style(a, d);
            } else j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q
                ? "hidden" in q && (p = q.hidden)
                : (q = N.access(a, "fxshow", {})),
                f && (q.hidden = !p),
                p
                    ? n(a).show()
                    : l.done(function () {
                          n(a).hide();
                      }),
                l.done(function () {
                    var b;
                    N.remove(a, "fxshow");
                    for (b in m) n.style(a, b, m[b]);
                });
            for (d in m)
                (g = Ya(p ? q[d] : 0, d, l)),
                    d in q ||
                        ((q[d] = g.start),
                        p &&
                            ((g.end = g.start),
                            (g.start =
                                "width" === d || "height" === d ? 1 : 0)));
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (
                ((d = n.camelCase(c)),
                (e = b[d]),
                (f = a[c]),
                n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                c !== d && ((a[d] = f), delete a[c]),
                (g = n.cssHooks[d]),
                g && "expand" in g)
            ) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function _a(a, b, c) {
        var d,
            e,
            f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function () {
                delete i.elem;
            }),
            i = function () {
                if (e) return !1;
                for (
                    var b = Sa || Wa(),
                        c = Math.max(0, j.startTime + j.duration - b),
                        d = c / j.duration || 0,
                        f = 1 - d,
                        g = 0,
                        i = j.tweens.length;
                    i > g;
                    g++
                )
                    j.tweens[g].run(f);
                return (
                    h.notifyWith(a, [j, f, c]),
                    1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                );
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(
                    !0,
                    { specialEasing: {}, easing: n.easing._default },
                    c
                ),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(
                        a,
                        j.opts,
                        b,
                        c,
                        j.opts.specialEasing[b] || j.opts.easing
                    );
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return (
                        b
                            ? (h.notifyWith(a, [j, 1, 0]),
                              h.resolveWith(a, [j, b]))
                            : h.rejectWith(a, [j, b]),
                        this
                    );
                },
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if ((d = _a.prefilters[f].call(j, a, k, j.opts)))
                return (
                    n.isFunction(d.stop) &&
                        (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(
                            d.stop,
                            d
                        )),
                    d
                );
        return (
            n.map(k, Ya, j),
            n.isFunction(j.opts.start) && j.opts.start.call(a, j),
            n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j
                .progress(j.opts.progress)
                .done(j.opts.done, j.opts.complete)
                .fail(j.opts.fail)
                .always(j.opts.always)
        );
    }
    (n.Animation = n.extend(_a, {
        tweeners: {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c;
                },
            ],
        },
        tweener: function (a, b) {
            n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
            for (var c, d = 0, e = a.length; e > d; d++)
                (c = a[d]),
                    (_a.tweeners[c] = _a.tweeners[c] || []),
                    _a.tweeners[c].unshift(b);
        },
        prefilters: [Za],
        prefilter: function (a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
        },
    })),
        (n.speed = function (a, b, c) {
            var d =
                a && "object" == typeof a
                    ? n.extend({}, a)
                    : {
                          complete: c || (!c && b) || (n.isFunction(a) && a),
                          duration: a,
                          easing: (c && b) || (b && !n.isFunction(b) && b),
                      };
            return (
                (d.duration = n.fx.off
                    ? 0
                    : "number" == typeof d.duration
                    ? d.duration
                    : d.duration in n.fx.speeds
                    ? n.fx.speeds[d.duration]
                    : n.fx.speeds._default),
                (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function () {
                    n.isFunction(d.old) && d.old.call(this),
                        d.queue && n.dequeue(this, d.queue);
                }),
                d
            );
        }),
        n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(V)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: b }, a, c, d);
            },
            animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function () {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0);
                    };
                return (
                    (g.finish = g),
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                );
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = n.timers,
                            g = N.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g)
                                g[e] && g[e].stop && Va.test(e) && d(g[e]);
                        for (e = f.length; e--; )
                            f[e].elem !== this ||
                                (null != a && f[e].queue !== a) ||
                                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (b || !c) && n.dequeue(this, a);
                    })
                );
            },
            finish: function (a) {
                return (
                    a !== !1 && (a = a || "fx"),
                    this.each(function () {
                        var b,
                            c = N.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (
                            c.finish = !0,
                                n.queue(this, a, []),
                                e && e.stop && e.stop.call(this, !0),
                                b = f.length;
                            b--;

                        )
                            f[b].elem === this &&
                                f[b].queue === a &&
                                (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            },
        }),
        n.each(["toggle", "show", "hide"], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a
                    ? c.apply(this, arguments)
                    : this.animate(Xa(b, !0), a, d, e);
            };
        }),
        n.each(
            {
                slideDown: Xa("show"),
                slideUp: Xa("hide"),
                slideToggle: Xa("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (a, b) {
                n.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }
        ),
        (n.timers = []),
        (n.fx.tick = function () {
            var a,
                b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++)
                (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), (Sa = void 0);
        }),
        (n.fx.timer = function (a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
        }),
        (n.fx.interval = 13),
        (n.fx.start = function () {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
        }),
        (n.fx.stop = function () {
            a.clearInterval(Ta), (Ta = null);
        }),
        (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (n.fn.delay = function (b, c) {
            return (
                (b = n.fx ? n.fx.speeds[b] || b : b),
                (c = c || "fx"),
                this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e);
                    };
                })
            );
        }),
        (function () {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            (a.type = "checkbox"),
                (l.checkOn = "" !== a.value),
                (l.optSelected = c.selected),
                (b.disabled = !0),
                (l.optDisabled = !c.disabled),
                (a = d.createElement("input")),
                (a.value = "t"),
                (a.type = "radio"),
                (l.radioValue = "t" === a.value);
        })();
    var ab,
        bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return K(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        },
    }),
        n.extend({
            attr: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return "undefined" == typeof a.getAttribute
                        ? n.prop(a, b, c)
                        : ((1 === f && n.isXMLDoc(a)) ||
                              ((b = b.toLowerCase()),
                              (e =
                                  n.attrHooks[b] ||
                                  (n.expr.match.bool.test(b) ? ab : void 0))),
                          void 0 !== c
                              ? null === c
                                  ? void n.removeAttr(a, b)
                                  : e &&
                                    "set" in e &&
                                    void 0 !== (d = e.set(a, c, b))
                                  ? d
                                  : (a.setAttribute(b, c + ""), c)
                              : e && "get" in e && null !== (d = e.get(a, b))
                              ? d
                              : ((d = n.find.attr(a, b)),
                                null == d ? void 0 : d));
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (
                            !l.radioValue &&
                            "radio" === b &&
                            n.nodeName(a, "input")
                        ) {
                            var c = a.value;
                            return (
                                a.setAttribute("type", b), c && (a.value = c), b
                            );
                        }
                    },
                },
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    while ((c = f[e++]))
                        (d = n.propFix[c] || c),
                            n.expr.match.bool.test(c) && (a[d] = !1),
                            a.removeAttribute(c);
            },
        }),
        (ab = {
            set: function (a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
            },
        }),
        n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = bb[b] || n.find.attr;
            bb[b] = function (a, b, d) {
                var e, f;
                return (
                    d ||
                        ((f = bb[b]),
                        (bb[b] = e),
                        (e = null != c(a, b, d) ? b.toLowerCase() : null),
                        (bb[b] = f)),
                    e
                );
            };
        });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return K(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a];
            });
        },
    }),
        n.extend({
            prop: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return (
                        (1 === f && n.isXMLDoc(a)) ||
                            ((b = n.propFix[b] || b), (e = n.propHooks[b])),
                        void 0 !== c
                            ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                ? d
                                : (a[b] = c)
                            : e && "get" in e && null !== (d = e.get(a, b))
                            ? d
                            : a[b]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = n.find.attr(a, "tabindex");
                        return b
                            ? parseInt(b, 10)
                            : cb.test(a.nodeName) ||
                              (db.test(a.nodeName) && a.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        l.optSelected ||
            (n.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return (
                        b && b.parentNode && b.parentNode.selectedIndex, null
                    );
                },
            }),
        n.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                n.propFix[this.toLowerCase()] = this;
            }
        );
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return (a.getAttribute && a.getAttribute("class")) || "";
    }
    n.fn.extend({
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, fb(this)));
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while ((c = this[i++]))
                    if (
                        ((e = fb(c)),
                        (d =
                            1 === c.nodeType &&
                            (" " + e + " ").replace(eb, " ")))
                    ) {
                        g = 0;
                        while ((f = b[g++]))
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        (h = n.trim(d)), e !== h && c.setAttribute("class", h);
                    }
            }
            return this;
        },
        removeClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, fb(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while ((c = this[i++]))
                    if (
                        ((e = fb(c)),
                        (d =
                            1 === c.nodeType &&
                            (" " + e + " ").replace(eb, " ")))
                    ) {
                        g = 0;
                        while ((f = b[g++]))
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        (h = n.trim(d)), e !== h && c.setAttribute("class", h);
                    }
            }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c
                ? b
                    ? this.addClass(a)
                    : this.removeClass(a)
                : n.isFunction(a)
                ? this.each(function (c) {
                      n(this).toggleClass(a.call(this, c, fb(this), b), b);
                  })
                : this.each(function () {
                      var b, d, e, f;
                      if ("string" === c) {
                          (d = 0), (e = n(this)), (f = a.match(G) || []);
                          while ((b = f[d++]))
                              e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                      } else (void 0 === a || "boolean" === c) && ((b = fb(this)), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (a) {
            var b,
                c,
                d = 0;
            b = " " + a + " ";
            while ((c = this[d++]))
                if (
                    1 === c.nodeType &&
                    (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1
                )
                    return !0;
            return !1;
        },
    });
    var gb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];
            {
                if (arguments.length)
                    return (
                        (d = n.isFunction(a)),
                        this.each(function (c) {
                            var e;
                            1 === this.nodeType &&
                                ((e = d ? a.call(this, c, n(this).val()) : a),
                                null == e
                                    ? (e = "")
                                    : "number" == typeof e
                                    ? (e += "")
                                    : n.isArray(e) &&
                                      (e = n.map(e, function (a) {
                                          return null == a ? "" : a + "";
                                      })),
                                (b =
                                    n.valHooks[this.type] ||
                                    n.valHooks[this.nodeName.toLowerCase()]),
                                (b &&
                                    "set" in b &&
                                    void 0 !== b.set(this, e, "value")) ||
                                    (this.value = e));
                        })
                    );
                if (e)
                    return (
                        (b =
                            n.valHooks[e.type] ||
                            n.valHooks[e.nodeName.toLowerCase()]),
                        b && "get" in b && void 0 !== (c = b.get(e, "value"))
                            ? c
                            : ((c = e.value),
                              "string" == typeof c
                                  ? c.replace(gb, "")
                                  : null == c
                                  ? ""
                                  : c)
                    );
            }
        },
    }),
        n.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        return n.trim(a.value);
                    },
                },
                select: {
                    get: function (a) {
                        for (
                            var b,
                                c,
                                d = a.options,
                                e = a.selectedIndex,
                                f = "select-one" === a.type || 0 > e,
                                g = f ? null : [],
                                h = f ? e + 1 : d.length,
                                i = 0 > e ? h : f ? e : 0;
                            h > i;
                            i++
                        )
                            if (
                                ((c = d[i]),
                                (c.selected || i === e) &&
                                    (l.optDisabled
                                        ? !c.disabled
                                        : null ===
                                          c.getAttribute("disabled")) &&
                                    (!c.parentNode.disabled ||
                                        !n.nodeName(c.parentNode, "optgroup")))
                            ) {
                                if (((b = n(c).val()), f)) return b;
                                g.push(b);
                            }
                        return g;
                    },
                    set: function (a, b) {
                        var c,
                            d,
                            e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--)
                            (d = e[g]),
                                (d.selected =
                                    n.inArray(n.valHooks.option.get(d), f) >
                                    -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f;
                    },
                },
            },
        }),
        n.each(["radio", "checkbox"], function () {
            (n.valHooks[this] = {
                set: function (a, b) {
                    return n.isArray(b)
                        ? (a.checked = n.inArray(n(a).val(), b) > -1)
                        : void 0;
                },
            }),
                l.checkOn ||
                    (n.valHooks[this].get = function (a) {
                        return null === a.getAttribute("value")
                            ? "on"
                            : a.value;
                    });
        });
    var hb = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function (b, c, e, f) {
            var g,
                h,
                i,
                j,
                l,
                m,
                o,
                p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (
                ((h = i = e = e || d),
                3 !== e.nodeType &&
                    8 !== e.nodeType &&
                    !hb.test(q + n.event.triggered) &&
                    (q.indexOf(".") > -1 &&
                        ((r = q.split(".")), (q = r.shift()), r.sort()),
                    (l = q.indexOf(":") < 0 && "on" + q),
                    (b = b[n.expando]
                        ? b
                        : new n.Event(q, "object" == typeof b && b)),
                    (b.isTrigger = f ? 2 : 3),
                    (b.namespace = r.join(".")),
                    (b.rnamespace = b.namespace
                        ? new RegExp(
                              "(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (b.result = void 0),
                    b.target || (b.target = e),
                    (c = null == c ? [b] : n.makeArray(c, [b])),
                    (o = n.event.special[q] || {}),
                    f || !o.trigger || o.trigger.apply(e, c) !== !1))
            ) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (
                        j = o.delegateType || q,
                            hb.test(j + q) || (h = h.parentNode);
                        h;
                        h = h.parentNode
                    )
                        p.push(h), (i = h);
                    i === (e.ownerDocument || d) &&
                        p.push(i.defaultView || i.parentWindow || a);
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped())
                    (b.type = g > 1 ? j : o.bindType || q),
                        (m =
                            (N.get(h, "events") || {})[b.type] &&
                            N.get(h, "handle")),
                        m && m.apply(h, c),
                        (m = l && h[l]),
                        m &&
                            m.apply &&
                            L(h) &&
                            ((b.result = m.apply(h, c)),
                            b.result === !1 && b.preventDefault());
                return (
                    (b.type = q),
                    f ||
                        b.isDefaultPrevented() ||
                        (o._default && o._default.apply(p.pop(), c) !== !1) ||
                        !L(e) ||
                        (l &&
                            n.isFunction(e[q]) &&
                            !n.isWindow(e) &&
                            ((i = e[l]),
                            i && (e[l] = null),
                            (n.event.triggered = q),
                            e[q](),
                            (n.event.triggered = void 0),
                            i && (e[l] = i))),
                    b.result
                );
            }
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b),
                d.isDefaultPrevented() && c.preventDefault();
        },
    }),
        n.fn.extend({
            trigger: function (a, b) {
                return this.each(function () {
                    n.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0;
            },
        }),
        n.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (a, b) {
                n.fn[b] = function (a, c) {
                    return arguments.length > 0
                        ? this.on(b, null, a, c)
                        : this.trigger(b);
                };
            }
        ),
        n.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
        }),
        (l.focusin = "onfocusin" in a),
        l.focusin ||
            n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                var c = function (a) {
                    n.event.simulate(b, a.target, n.event.fix(a));
                };
                n.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this,
                            e = N.access(d, b);
                        e || d.addEventListener(a, c, !0),
                            N.access(d, b, (e || 0) + 1);
                    },
                    teardown: function () {
                        var d = this.ownerDocument || this,
                            e = N.access(d, b) - 1;
                        e
                            ? N.access(d, b, e)
                            : (d.removeEventListener(a, c, !0), N.remove(d, b));
                    },
                };
            });
    var ib = a.location,
        jb = n.now(),
        kb = /\?/;
    (n.parseJSON = function (a) {
        return JSON.parse(a + "");
    }),
        (n.parseXML = function (b) {
            var c;
            if (!b || "string" != typeof b) return null;
            try {
                c = new a.DOMParser().parseFromString(b, "text/xml");
            } catch (d) {
                c = void 0;
            }
            return (
                (!c || c.getElementsByTagName("parsererror").length) &&
                    n.error("Invalid XML: " + b),
                c
            );
        });
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = {},
        sb = {},
        tb = "*/".concat("*"),
        ub = d.createElement("a");
    ub.href = ib.href;
    function vb(a) {
        return function (b, c) {
            "string" != typeof b && ((c = b), (b = "*"));
            var d,
                e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while ((d = f[e++]))
                    "+" === d[0]
                        ? ((d = d.slice(1) || "*"),
                          (a[d] = a[d] || []).unshift(c))
                        : (a[d] = a[d] || []).push(c);
        };
    }
    function wb(a, b, c, d) {
        var e = {},
            f = a === sb;
        function g(h) {
            var i;
            return (
                (e[h] = !0),
                n.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j]
                        ? f
                            ? !(i = j)
                            : void 0
                        : (b.dataTypes.unshift(j), g(j), !1);
                }),
                i
            );
        }
        return g(b.dataTypes[0]) || (!e["*"] && g("*"));
    }
    function xb(a, b) {
        var c,
            d,
            e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function yb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
                void 0 === d &&
                    (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function zb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (
                (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                (i = f),
                (f = k.shift()))
            )
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (((g = j[i + " " + f] || j["* " + f]), !g))
                        for (e in j)
                            if (
                                ((h = e.split(" ")),
                                h[1] === f &&
                                    (g = j[i + " " + h[0]] || j["* " + h[0]]))
                            ) {
                                g === !0
                                    ? (g = j[e])
                                    : j[e] !== !0 &&
                                      ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g
                                        ? l
                                        : "No conversion from " +
                                          i +
                                          " to " +
                                          f,
                                };
                            }
                }
        return { state: "success", data: b };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ib.href,
            type: "GET",
            isLocal: ob.test(ib.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (a, b) {
            return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a);
        },
        ajaxPrefilter: vb(rb),
        ajaxTransport: vb(sb),
        ajax: function (b, c) {
            "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
            var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while ((b = nb.exec(g)))
                                    h[b[1].toLowerCase()] = b[2];
                            }
                            b = h[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === v ? g : null;
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return v || ((a = u[c] = u[c] || a), (t[a] = b)), this;
                    },
                    overrideMimeType: function (a) {
                        return v || (m.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > v) for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this;
                    },
                    abort: function (a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this;
                    },
                };
            if (
                ((q.promise(x).complete = r.add),
                (x.success = x.done),
                (x.error = x.fail),
                (m.url = ((b || m.url || ib.href) + "")
                    .replace(lb, "")
                    .replace(qb, ib.protocol + "//")),
                (m.type = c.method || c.type || m.method || m.type),
                (m.dataTypes = n
                    .trim(m.dataType || "*")
                    .toLowerCase()
                    .match(G) || [""]),
                null == m.crossDomain)
            ) {
                j = d.createElement("a");
                try {
                    (j.href = m.url),
                        (j.href = j.href),
                        (m.crossDomain =
                            ub.protocol + "//" + ub.host !=
                            j.protocol + "//" + j.host);
                } catch (y) {
                    m.crossDomain = !0;
                }
            }
            if (
                (m.data &&
                    m.processData &&
                    "string" != typeof m.data &&
                    (m.data = n.param(m.data, m.traditional)),
                wb(rb, m, c, x),
                2 === v)
            )
                return x;
            (k = n.event && m.global),
                k && 0 === n.active++ && n.event.trigger("ajaxStart"),
                (m.type = m.type.toUpperCase()),
                (m.hasContent = !pb.test(m.type)),
                (f = m.url),
                m.hasContent ||
                    (m.data &&
                        ((f = m.url += (kb.test(f) ? "&" : "?") + m.data),
                        delete m.data),
                    m.cache === !1 &&
                        (m.url = mb.test(f)
                            ? f.replace(mb, "$1_=" + jb++)
                            : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)),
                m.ifModified &&
                    (n.lastModified[f] &&
                        x.setRequestHeader(
                            "If-Modified-Since",
                            n.lastModified[f]
                        ),
                    n.etag[f] &&
                        x.setRequestHeader("If-None-Match", n.etag[f])),
                ((m.data && m.hasContent && m.contentType !== !1) ||
                    c.contentType) &&
                    x.setRequestHeader("Content-Type", m.contentType),
                x.setRequestHeader(
                    "Accept",
                    m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                        ? m.accepts[m.dataTypes[0]] +
                              ("*" !== m.dataTypes[0]
                                  ? ", " + tb + "; q=0.01"
                                  : "")
                        : m.accepts["*"]
                );
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
                return x.abort();
            w = "abort";
            for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);
            if ((e = wb(sb, m, c, x))) {
                if (
                    ((x.readyState = 1),
                    k && p.trigger("ajaxSend", [x, m]),
                    2 === v)
                )
                    return x;
                m.async &&
                    m.timeout > 0 &&
                    (i = a.setTimeout(function () {
                        x.abort("timeout");
                    }, m.timeout));
                try {
                    (v = 1), e.send(t, z);
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y);
                }
            } else z(-1, "No Transport");
            function z(b, c, d, h) {
                var j,
                    l,
                    t,
                    u,
                    w,
                    y = c;
                2 !== v &&
                    ((v = 2),
                    i && a.clearTimeout(i),
                    (e = void 0),
                    (g = h || ""),
                    (x.readyState = b > 0 ? 4 : 0),
                    (j = (b >= 200 && 300 > b) || 304 === b),
                    d && (u = yb(m, x, d)),
                    (u = zb(m, u, x, j)),
                    j
                        ? (m.ifModified &&
                              ((w = x.getResponseHeader("Last-Modified")),
                              w && (n.lastModified[f] = w),
                              (w = x.getResponseHeader("etag")),
                              w && (n.etag[f] = w)),
                          204 === b || "HEAD" === m.type
                              ? (y = "nocontent")
                              : 304 === b
                              ? (y = "notmodified")
                              : ((y = u.state),
                                (l = u.data),
                                (t = u.error),
                                (j = !t)))
                        : ((t = y),
                          (b || !y) && ((y = "error"), 0 > b && (b = 0))),
                    (x.status = b),
                    (x.statusText = (c || y) + ""),
                    j
                        ? q.resolveWith(o, [l, y, x])
                        : q.rejectWith(o, [x, y, t]),
                    x.statusCode(s),
                    (s = void 0),
                    k &&
                        p.trigger(j ? "ajaxSuccess" : "ajaxError", [
                            x,
                            m,
                            j ? l : t,
                        ]),
                    r.fireWith(o, [x, y]),
                    k &&
                        (p.trigger("ajaxComplete", [x, m]),
                        --n.active || n.event.trigger("ajaxStop")));
            }
            return x;
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script");
        },
    }),
        n.each(["get", "post"], function (a, b) {
            n[b] = function (a, c, d, e) {
                return (
                    n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                    n.ajax(
                        n.extend(
                            {
                                url: a,
                                type: b,
                                dataType: e,
                                data: c,
                                success: d,
                            },
                            n.isPlainObject(a) && a
                        )
                    )
                );
            };
        }),
        (n._evalUrl = function (a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        n.fn.extend({
            wrapAll: function (a) {
                var b;
                return n.isFunction(a)
                    ? this.each(function (b) {
                          n(this).wrapAll(a.call(this, b));
                      })
                    : (this[0] &&
                          ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && b.insertBefore(this[0]),
                          b
                              .map(function () {
                                  var a = this;
                                  while (a.firstElementChild)
                                      a = a.firstElementChild;
                                  return a;
                              })
                              .append(this)),
                      this);
            },
            wrapInner: function (a) {
                return n.isFunction(a)
                    ? this.each(function (b) {
                          n(this).wrapInner(a.call(this, b));
                      })
                    : this.each(function () {
                          var b = n(this),
                              c = b.contents();
                          c.length ? c.wrapAll(a) : b.append(a);
                      });
            },
            wrap: function (a) {
                var b = n.isFunction(a);
                return this.each(function (c) {
                    n(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        n.nodeName(this, "body") ||
                            n(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (n.expr.filters.hidden = function (a) {
            return !n.expr.filters.visible(a);
        }),
        (n.expr.filters.visible = function (a) {
            return (
                a.offsetWidth > 0 ||
                a.offsetHeight > 0 ||
                a.getClientRects().length > 0
            );
        });
    var Ab = /%20/g,
        Bb = /\[\]$/,
        Cb = /\r?\n/g,
        Db = /^(?:submit|button|image|reset|file)$/i,
        Eb = /^(?:input|select|textarea|keygen)/i;
    function Fb(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function (b, e) {
                c || Bb.test(a)
                    ? d(a, e)
                    : Fb(
                          a +
                              "[" +
                              ("object" == typeof e && null != e ? b : "") +
                              "]",
                          e,
                          c,
                          d
                      );
            });
        else if (c || "object" !== n.type(b)) d(a, b);
        else for (e in b) Fb(a + "[" + e + "]", b[e], c, d);
    }
    (n.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
                (b = n.isFunction(b) ? b() : null == b ? "" : b),
                    (d[d.length] =
                        encodeURIComponent(a) + "=" + encodeURIComponent(b));
            };
        if (
            (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
            n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
        )
            n.each(a, function () {
                e(this.name, this.value);
            });
        else for (c in a) Fb(c, a[c], b, e);
        return d.join("&").replace(Ab, "+");
    }),
        n.fn.extend({
            serialize: function () {
                return n.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this;
                })
                    .filter(function () {
                        var a = this.type;
                        return (
                            this.name &&
                            !n(this).is(":disabled") &&
                            Eb.test(this.nodeName) &&
                            !Db.test(a) &&
                            (this.checked || !X.test(a))
                        );
                    })
                    .map(function (a, b) {
                        var c = n(this).val();
                        return null == c
                            ? null
                            : n.isArray(c)
                            ? n.map(c, function (a) {
                                  return {
                                      name: b.name,
                                      value: a.replace(Cb, "\r\n"),
                                  };
                              })
                            : { name: b.name, value: c.replace(Cb, "\r\n") };
                    })
                    .get();
            },
        }),
        (n.ajaxSettings.xhr = function () {
            try {
                return new a.XMLHttpRequest();
            } catch (b) {}
        });
    var Gb = { 0: 200, 1223: 204 },
        Hb = n.ajaxSettings.xhr();
    (l.cors = !!Hb && "withCredentials" in Hb),
        (l.ajax = Hb = !!Hb),
        n.ajaxTransport(function (b) {
            var c, d;
            return l.cors || (Hb && !b.crossDomain)
                ? {
                      send: function (e, f) {
                          var g,
                              h = b.xhr();
                          if (
                              (h.open(
                                  b.type,
                                  b.url,
                                  b.async,
                                  b.username,
                                  b.password
                              ),
                              b.xhrFields)
                          )
                              for (g in b.xhrFields) h[g] = b.xhrFields[g];
                          b.mimeType &&
                              h.overrideMimeType &&
                              h.overrideMimeType(b.mimeType),
                              b.crossDomain ||
                                  e["X-Requested-With"] ||
                                  (e["X-Requested-With"] = "XMLHttpRequest");
                          for (g in e) h.setRequestHeader(g, e[g]);
                          (c = function (a) {
                              return function () {
                                  c &&
                                      ((c =
                                          d =
                                          h.onload =
                                          h.onerror =
                                          h.onabort =
                                          h.onreadystatechange =
                                              null),
                                      "abort" === a
                                          ? h.abort()
                                          : "error" === a
                                          ? "number" != typeof h.status
                                              ? f(0, "error")
                                              : f(h.status, h.statusText)
                                          : f(
                                                Gb[h.status] || h.status,
                                                h.statusText,
                                                "text" !==
                                                    (h.responseType ||
                                                        "text") ||
                                                    "string" !=
                                                        typeof h.responseText
                                                    ? { binary: h.response }
                                                    : { text: h.responseText },
                                                h.getAllResponseHeaders()
                                            ));
                              };
                          }),
                              (h.onload = c()),
                              (d = h.onerror = c("error")),
                              void 0 !== h.onabort
                                  ? (h.onabort = d)
                                  : (h.onreadystatechange = function () {
                                        4 === h.readyState &&
                                            a.setTimeout(function () {
                                                c && d();
                                            });
                                    }),
                              (c = c("abort"));
                          try {
                              h.send((b.hasContent && b.data) || null);
                          } catch (i) {
                              if (c) throw i;
                          }
                      },
                      abort: function () {
                          c && c();
                      },
                  }
                : void 0;
        }),
        n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (a) {
                    return n.globalEval(a), a;
                },
            },
        }),
        n.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1),
                a.crossDomain && (a.type = "GET");
        }),
        n.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (e, f) {
                        (b = n("<script>")
                            .prop({ charset: a.scriptCharset, src: a.url })
                            .on(
                                "load error",
                                (c = function (a) {
                                    b.remove(),
                                        (c = null),
                                        a &&
                                            f(
                                                "error" === a.type ? 404 : 200,
                                                a.type
                                            );
                                })
                            )),
                            d.head.appendChild(b[0]);
                    },
                    abort: function () {
                        c && c();
                    },
                };
            }
        });
    var Ib = [],
        Jb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Ib.pop() || n.expando + "_" + jb++;
            return (this[a] = !0), a;
        },
    }),
        n.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e,
                f,
                g,
                h =
                    b.jsonp !== !1 &&
                    (Jb.test(b.url)
                        ? "url"
                        : "string" == typeof b.data &&
                          0 ===
                              (b.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Jb.test(b.data) &&
                          "data");
            return h || "jsonp" === b.dataTypes[0]
                ? ((e = b.jsonpCallback =
                      n.isFunction(b.jsonpCallback)
                          ? b.jsonpCallback()
                          : b.jsonpCallback),
                  h
                      ? (b[h] = b[h].replace(Jb, "$1" + e))
                      : b.jsonp !== !1 &&
                        (b.url +=
                            (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                  (b.converters["script json"] = function () {
                      return g || n.error(e + " was not called"), g[0];
                  }),
                  (b.dataTypes[0] = "json"),
                  (f = a[e]),
                  (a[e] = function () {
                      g = arguments;
                  }),
                  d.always(function () {
                      void 0 === f ? n(a).removeProp(e) : (a[e] = f),
                          b[e] &&
                              ((b.jsonpCallback = c.jsonpCallback), Ib.push(e)),
                          g && n.isFunction(f) && f(g[0]),
                          (g = f = void 0);
                  }),
                  "script")
                : void 0;
        }),
        (l.createHTMLDocument = (function () {
            var a = d.implementation.createHTMLDocument("").body;
            return (
                (a.innerHTML = "<form></form><form></form>"),
                2 === a.childNodes.length
            );
        })()),
        (n.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && ((c = b), (b = !1)),
                (b =
                    b ||
                    (l.createHTMLDocument
                        ? d.implementation.createHTMLDocument("")
                        : d));
            var e = x.exec(a),
                f = !c && [];
            return e
                ? [b.createElement(e[1])]
                : ((e = ca([a], b, f)),
                  f && f.length && n(f).remove(),
                  n.merge([], e.childNodes));
        });
    var Kb = n.fn.load;
    (n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Kb) return Kb.apply(this, arguments);
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");
        return (
            h > -1 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
            n.isFunction(b)
                ? ((c = b), (b = void 0))
                : b && "object" == typeof b && (e = "POST"),
            g.length > 0 &&
                n
                    .ajax({
                        url: a,
                        type: e || "GET",
                        dataType: "html",
                        data: b,
                    })
                    .done(function (a) {
                        (f = arguments),
                            g.html(
                                d
                                    ? n("<div>").append(n.parseHTML(a)).find(d)
                                    : a
                            );
                    })
                    .always(
                        c &&
                            function (a, b) {
                                g.each(function () {
                                    c.apply(g, f || [a.responseText, b, a]);
                                });
                            }
                    ),
            this
        );
    }),
        n.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (a, b) {
                n.fn[b] = function (a) {
                    return this.on(b, a);
                };
            }
        ),
        (n.expr.filters.animated = function (a) {
            return n.grep(n.timers, function (b) {
                return a === b.elem;
            }).length;
        });
    function Lb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    (n.offset = {
        setOffset: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"),
                (h = l.offset()),
                (f = n.css(a, "top")),
                (i = n.css(a, "left")),
                (j =
                    ("absolute" === k || "fixed" === k) &&
                    (f + i).indexOf("auto") > -1),
                j
                    ? ((d = l.position()), (g = d.top), (e = d.left))
                    : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                "using" in b ? b.using.call(a, m) : l.css(m);
        },
    }),
        n.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function (b) {
                              n.offset.setOffset(this, a, b);
                          });
                var b,
                    c,
                    d = this[0],
                    e = { top: 0, left: 0 },
                    f = d && d.ownerDocument;
                if (f)
                    return (
                        (b = f.documentElement),
                        n.contains(b, d)
                            ? ((e = d.getBoundingClientRect()),
                              (c = Lb(f)),
                              {
                                  top: e.top + c.pageYOffset - b.clientTop,
                                  left: e.left + c.pageXOffset - b.clientLeft,
                              })
                            : e
                    );
            },
            position: function () {
                if (this[0]) {
                    var a,
                        b,
                        c = this[0],
                        d = { top: 0, left: 0 };
                    return (
                        "fixed" === n.css(c, "position")
                            ? (b = c.getBoundingClientRect())
                            : ((a = this.offsetParent()),
                              (b = this.offset()),
                              n.nodeName(a[0], "html") || (d = a.offset()),
                              (d.top +=
                                  n.css(a[0], "borderTopWidth", !0) -
                                  a.scrollTop()),
                              (d.left +=
                                  n.css(a[0], "borderLeftWidth", !0) -
                                  a.scrollLeft())),
                        {
                            top: b.top - d.top - n.css(c, "marginTop", !0),
                            left: b.left - d.left - n.css(c, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent;
                    while (a && "static" === n.css(a, "position"))
                        a = a.offsetParent;
                    return a || Ea;
                });
            },
        }),
        n.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (a, b) {
                var c = "pageYOffset" === b;
                n.fn[a] = function (d) {
                    return K(
                        this,
                        function (a, d, e) {
                            var f = Lb(a);
                            return void 0 === e
                                ? f
                                    ? f[b]
                                    : a[d]
                                : void (f
                                      ? f.scrollTo(
                                            c ? f.pageXOffset : e,
                                            c ? e : f.pageYOffset
                                        )
                                      : (a[d] = e));
                        },
                        a,
                        d,
                        arguments.length
                    );
                };
            }
        ),
        n.each(["top", "left"], function (a, b) {
            n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
                return c
                    ? ((c = Fa(a, b)),
                      Ba.test(c) ? n(a).position()[b] + "px" : c)
                    : void 0;
            });
        }),
        n.each({ Height: "height", Width: "width" }, function (a, b) {
            n.each(
                { padding: "inner" + a, content: b, "": "outer" + a },
                function (c, d) {
                    n.fn[d] = function (d, e) {
                        var f =
                                arguments.length &&
                                (c || "boolean" != typeof d),
                            g =
                                c ||
                                (d === !0 || e === !0 ? "margin" : "border");
                        return K(
                            this,
                            function (b, c, d) {
                                var e;
                                return n.isWindow(b)
                                    ? b.document.documentElement["client" + a]
                                    : 9 === b.nodeType
                                    ? ((e = b.documentElement),
                                      Math.max(
                                          b.body["scroll" + a],
                                          e["scroll" + a],
                                          b.body["offset" + a],
                                          e["offset" + a],
                                          e["client" + a]
                                      ))
                                    : void 0 === d
                                    ? n.css(b, c, g)
                                    : n.style(b, c, d, g);
                            },
                            b,
                            f ? d : void 0,
                            f,
                            null
                        );
                    };
                }
            );
        }),
        n.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length
                    ? this.off(a, "**")
                    : this.off(b, a || "**", c);
            },
            size: function () {
                return this.length;
            },
        }),
        (n.fn.andSelf = n.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return n;
            });
    var Mb = a.jQuery,
        Nb = a.$;
    return (
        (n.noConflict = function (b) {
            return (
                a.$ === n && (a.$ = Nb),
                b && a.jQuery === n && (a.jQuery = Mb),
                n
            );
        }),
        b || (a.jQuery = a.$ = n),
        n
    );
});

/* ==========================================================================
   2. Magnific Popup
   ========================================================================== */

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : "object" == typeof exports
        ? e(require("jquery"))
        : e(window.jQuery || window.Zepto);
})(function (e) {
    var t,
        n,
        i,
        o,
        r,
        a,
        s = "Close",
        l = "BeforeClose",
        c = "MarkupParse",
        d = "Open",
        u = "Change",
        p = "mfp",
        f = "." + p,
        m = "mfp-ready",
        g = "mfp-removing",
        h = "mfp-prevent-close",
        v = function () {},
        y = !!window.jQuery,
        C = e(window),
        w = function (e, n) {
            t.ev.on(p + e + f, n);
        },
        b = function (t, n, i, o) {
            var r = document.createElement("div");
            return (
                (r.className = "mfp-" + t),
                i && (r.innerHTML = i),
                o ? n && n.appendChild(r) : ((r = e(r)), n && r.appendTo(n)),
                r
            );
        },
        I = function (n, i) {
            t.ev.triggerHandler(p + n, i),
                t.st.callbacks &&
                    ((n = n.charAt(0).toLowerCase() + n.slice(1)),
                    t.st.callbacks[n] &&
                        t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
        },
        x = function (n) {
            return (
                (n === a && t.currTemplate.closeBtn) ||
                    ((t.currTemplate.closeBtn = e(
                        t.st.closeMarkup.replace("%title%", t.st.tClose)
                    )),
                    (a = n)),
                t.currTemplate.closeBtn
            );
        },
        k = function () {
            e.magnificPopup.instance ||
                ((t = new v()).init(), (e.magnificPopup.instance = t));
        };
    (v.prototype = {
        constructor: v,
        init: function () {
            var n = navigator.appVersion;
            (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
                (t.isAndroid = /android/gi.test(n)),
                (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
                (t.supportsTransition = (function () {
                    var e = document.createElement("p").style,
                        t = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== e.transition) return !0;
                    for (; t.length; )
                        if (t.pop() + "Transition" in e) return !0;
                    return !1;
                })()),
                (t.probablyMobile =
                    t.isAndroid ||
                    t.isIOS ||
                    /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                        navigator.userAgent
                    )),
                (i = e(document)),
                (t.popupsCache = {});
        },
        open: function (n) {
            var o;
            if (!1 === n.isObj) {
                (t.items = n.items.toArray()), (t.index = 0);
                var a,
                    s = n.items;
                for (o = 0; o < s.length; o++)
                    if (((a = s[o]).parsed && (a = a.el[0]), a === n.el[0])) {
                        t.index = o;
                        break;
                    }
            } else
                (t.items = e.isArray(n.items) ? n.items : [n.items]),
                    (t.index = n.index || 0);
            if (!t.isOpen) {
                (t.types = []),
                    (r = ""),
                    n.mainEl && n.mainEl.length
                        ? (t.ev = n.mainEl.eq(0))
                        : (t.ev = i),
                    n.key
                        ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
                          (t.currTemplate = t.popupsCache[n.key]))
                        : (t.currTemplate = {}),
                    (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
                    (t.fixedContentPos =
                        "auto" === t.st.fixedContentPos
                            ? !t.probablyMobile
                            : t.st.fixedContentPos),
                    t.st.modal &&
                        ((t.st.closeOnContentClick = !1),
                        (t.st.closeOnBgClick = !1),
                        (t.st.showCloseBtn = !1),
                        (t.st.enableEscapeKey = !1)),
                    t.bgOverlay ||
                        ((t.bgOverlay = b("bg").on("click" + f, function () {
                            t.close();
                        })),
                        (t.wrap = b("wrap")
                            .attr("tabindex", -1)
                            .on("click" + f, function (e) {
                                t._checkIfClose(e.target) && t.close();
                            })),
                        (t.container = b("container", t.wrap))),
                    (t.contentContainer = b("content")),
                    t.st.preloader &&
                        (t.preloader = b(
                            "preloader",
                            t.container,
                            t.st.tLoading
                        ));
                var l = e.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var u = l[o];
                    (u = u.charAt(0).toUpperCase() + u.slice(1)),
                        t["init" + u].call(t);
                }
                I("BeforeOpen"),
                    t.st.showCloseBtn &&
                        (t.st.closeBtnInside
                            ? (w(c, function (e, t, n, i) {
                                  n.close_replaceWith = x(i.type);
                              }),
                              (r += " mfp-close-btn-in"))
                            : t.wrap.append(x())),
                    t.st.alignTop && (r += " mfp-align-top"),
                    t.fixedContentPos
                        ? t.wrap.css({
                              overflow: t.st.overflowY,
                              overflowX: "hidden",
                              overflowY: t.st.overflowY,
                          })
                        : t.wrap.css({
                              top: C.scrollTop(),
                              position: "absolute",
                          }),
                    (!1 === t.st.fixedBgPos ||
                        ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
                        t.bgOverlay.css({
                            height: i.height(),
                            position: "absolute",
                        }),
                    t.st.enableEscapeKey &&
                        i.on("keyup" + f, function (e) {
                            27 === e.keyCode && t.close();
                        }),
                    C.on("resize" + f, function () {
                        t.updateSize();
                    }),
                    t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
                    r && t.wrap.addClass(r);
                var p = (t.wH = C.height()),
                    g = {};
                if (t.fixedContentPos && t._hasScrollBar(p)) {
                    var h = t._getScrollbarSize();
                    h && (g.marginRight = h);
                }
                t.fixedContentPos &&
                    (t.isIE7
                        ? e("body, html").css("overflow", "hidden")
                        : (g.overflow = "hidden"));
                var v = t.st.mainClass;
                return (
                    t.isIE7 && (v += " mfp-ie7"),
                    v && t._addClassToMFP(v),
                    t.updateItemHTML(),
                    I("BuildControls"),
                    e("html").css(g),
                    t.bgOverlay
                        .add(t.wrap)
                        .prependTo(t.st.prependTo || e(document.body)),
                    (t._lastFocusedEl = document.activeElement),
                    setTimeout(function () {
                        t.content
                            ? (t._addClassToMFP(m), t._setFocus())
                            : t.bgOverlay.addClass(m),
                            i.on("focusin" + f, t._onFocusIn);
                    }, 16),
                    (t.isOpen = !0),
                    t.updateSize(p),
                    I(d),
                    n
                );
            }
            t.updateItemHTML();
        },
        close: function () {
            t.isOpen &&
                (I(l),
                (t.isOpen = !1),
                t.st.removalDelay && !t.isLowIE && t.supportsTransition
                    ? (t._addClassToMFP(g),
                      setTimeout(function () {
                          t._close();
                      }, t.st.removalDelay))
                    : t._close());
        },
        _close: function () {
            I(s);
            var n = g + " " + m + " ";
            if (
                (t.bgOverlay.detach(),
                t.wrap.detach(),
                t.container.empty(),
                t.st.mainClass && (n += t.st.mainClass + " "),
                t._removeClassFromMFP(n),
                t.fixedContentPos)
            ) {
                var o = { marginRight: "" };
                t.isIE7
                    ? e("body, html").css("overflow", "")
                    : (o.overflow = ""),
                    e("html").css(o);
            }
            i.off("keyup.mfp focusin" + f),
                t.ev.off(f),
                t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                t.bgOverlay.attr("class", "mfp-bg"),
                t.container.attr("class", "mfp-container"),
                !t.st.showCloseBtn ||
                    (t.st.closeBtnInside &&
                        !0 !== t.currTemplate[t.currItem.type]) ||
                    (t.currTemplate.closeBtn &&
                        t.currTemplate.closeBtn.detach()),
                t.st.autoFocusLast &&
                    t._lastFocusedEl &&
                    e(t._lastFocusedEl).focus(),
                (t.currItem = null),
                (t.content = null),
                (t.currTemplate = null),
                (t.prevHeight = 0),
                I("AfterClose");
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var n =
                        document.documentElement.clientWidth /
                        window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), (t.wH = i);
            } else t.wH = e || C.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), I("Resize");
        },
        updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(),
                t.content && t.content.detach(),
                n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (
                (I("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
                (t.currItem = n),
                !t.currTemplate[i])
            ) {
                var r = !!t.st[i] && t.st[i].markup;
                I("FirstMarkupParse", r), (t.currTemplate[i] = !r || e(r));
            }
            o &&
                o !== n.type &&
                t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
                n,
                t.currTemplate[i]
            );
            t.appendContent(a, i),
                (n.preloaded = !0),
                I(u, n),
                (o = n.type),
                t.container.prepend(t.contentContainer),
                I("AfterChange");
        },
        appendContent: function (e, n) {
            (t.content = e),
                e
                    ? t.st.showCloseBtn &&
                      t.st.closeBtnInside &&
                      !0 === t.currTemplate[n]
                        ? t.content.find(".mfp-close").length ||
                          t.content.append(x())
                        : (t.content = e)
                    : (t.content = ""),
                I("BeforeAppend"),
                t.container.addClass("mfp-" + n + "-holder"),
                t.contentContainer.append(t.content);
        },
        parseEl: function (n) {
            var i,
                o = t.items[n];
            if (
                (o.tagName
                    ? (o = { el: e(o) })
                    : ((i = o.type), (o = { data: o, src: o.src })),
                o.el)
            ) {
                for (var r = t.types, a = 0; a < r.length; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break;
                    }
                (o.src = o.el.attr("data-mfp-src")),
                    o.src || (o.src = o.el.attr("href"));
            }
            return (
                (o.type = i || t.st.type || "inline"),
                (o.index = n),
                (o.parsed = !0),
                (t.items[n] = o),
                I("ElementParse", o),
                t.items[n]
            );
        },
        addGroup: function (e, n) {
            var i = function (i) {
                (i.mfpEl = this), t._openClick(i, e, n);
            };
            n || (n = {});
            var o = "click.magnificPopup";
            (n.mainEl = e),
                n.items
                    ? ((n.isObj = !0), e.off(o).on(o, i))
                    : ((n.isObj = !1),
                      n.delegate
                          ? e.off(o).on(o, n.delegate, i)
                          : ((n.items = e), e.off(o).on(o, i)));
        },
        _openClick: function (n, i, o) {
            if (
                (void 0 !== o.midClick
                    ? o.midClick
                    : e.magnificPopup.defaults.midClick) ||
                !(
                    2 === n.which ||
                    n.ctrlKey ||
                    n.metaKey ||
                    n.altKey ||
                    n.shiftKey
                )
            ) {
                var r =
                    void 0 !== o.disableOn
                        ? o.disableOn
                        : e.magnificPopup.defaults.disableOn;
                if (r)
                    if (e.isFunction(r)) {
                        if (!r.call(t)) return !0;
                    } else if (C.width() < r) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
                    (o.el = e(n.mfpEl)),
                    o.delegate && (o.items = i.find(o.delegate)),
                    t.open(o);
            }
        },
        updateStatus: function (e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n),
                    i || "loading" !== e || (i = t.st.tLoading);
                var o = { status: e, text: i };
                I("UpdateStatus", o),
                    (e = o.status),
                    (i = o.text),
                    t.preloader.html(i),
                    t.preloader.find("a").on("click", function (e) {
                        e.stopImmediatePropagation();
                    }),
                    t.container.addClass("mfp-s-" + e),
                    (n = e);
            }
        },
        _checkIfClose: function (n) {
            if (!e(n).hasClass(h)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (
                    !t.content ||
                    e(n).hasClass("mfp-close") ||
                    (t.preloader && n === t.preloader[0])
                )
                    return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0;
                } else if (o && e.contains(document, n)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e);
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
        },
        _hasScrollBar: function (e) {
            return (
                (t.isIE7 ? i.height() : document.body.scrollHeight) >
                (e || C.height())
            );
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
        },
        _onFocusIn: function (n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target))
                return t._setFocus(), !1;
        },
        _parseMarkup: function (t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)),
                I(c, [t, n, i]),
                e.each(n, function (n, i) {
                    if (void 0 === i || !1 === i) return !0;
                    if ((o = n.split("_")).length > 1) {
                        var r = t.find(f + "-" + o[0]);
                        if (r.length > 0) {
                            var a = o[1];
                            "replaceWith" === a
                                ? r[0] !== i[0] && r.replaceWith(i)
                                : "img" === a
                                ? r.is("img")
                                    ? r.attr("src", i)
                                    : r.replaceWith(
                                          e("<img>")
                                              .attr("src", i)
                                              .attr("class", r.attr("class"))
                                      )
                                : r.attr(o[1], i);
                        }
                    } else t.find(f + "-" + n).html(i);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                (e.style.cssText =
                    "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                    document.body.appendChild(e),
                    (t.scrollbarSize = e.offsetWidth - e.clientWidth),
                    document.body.removeChild(e);
            }
            return t.scrollbarSize;
        },
    }),
        (e.magnificPopup = {
            instance: null,
            proto: v.prototype,
            modules: [],
            open: function (t, n) {
                return (
                    k(),
                    ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
                    (t.index = n || 0),
                    this.instance.open(t)
                );
            },
            close: function () {
                return (
                    e.magnificPopup.instance && e.magnificPopup.instance.close()
                );
            },
            registerModule: function (t, n) {
                n.options && (e.magnificPopup.defaults[t] = n.options),
                    e.extend(this.proto, n.proto),
                    this.modules.push(t);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup:
                    '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (e.fn.magnificPopup = function (n) {
            k();
            var i = e(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var o,
                        r = y ? i.data("magnificPopup") : i[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    r.items
                        ? (o = r.items[a])
                        : ((o = i),
                          r.delegate && (o = o.find(r.delegate)),
                          (o = o.eq(a))),
                        t._openClick({ mfpEl: o }, i, r);
                } else
                    t.isOpen &&
                        t[n].apply(t, Array.prototype.slice.call(arguments, 1));
            else
                (n = e.extend(!0, {}, n)),
                    y ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
                    t.addGroup(i, n);
            return i;
        });
    var T,
        _,
        P,
        S = "inline",
        E = function () {
            P && (_.after(P.addClass(T)).detach(), (P = null));
        };
    e.magnificPopup.registerModule(S, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found",
        },
        proto: {
            initInline: function () {
                t.types.push(S),
                    w(s + "." + S, function () {
                        E();
                    });
            },
            getInline: function (n, i) {
                if ((E(), n.src)) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a &&
                            a.tagName &&
                            (_ ||
                                ((T = o.hiddenClass),
                                (_ = b(T)),
                                (T = "mfp-" + T)),
                            (P = r.after(_).detach().removeClass(T))),
                            t.updateStatus("ready");
                    } else
                        t.updateStatus("error", o.tNotFound), (r = e("<div>"));
                    return (n.inlineElement = r), r;
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
            },
        },
    });
    var z,
        O = "ajax",
        M = function () {
            z && e(document.body).removeClass(z);
        },
        B = function () {
            M(), t.req && t.req.abort();
        };
    e.magnificPopup.registerModule(O, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.',
        },
        proto: {
            initAjax: function () {
                t.types.push(O),
                    (z = t.st.ajax.cursor),
                    w(s + "." + O, B),
                    w("BeforeChange." + O, B);
            },
            getAjax: function (n) {
                z && e(document.body).addClass(z), t.updateStatus("loading");
                var i = e.extend(
                    {
                        url: n.src,
                        success: function (i, o, r) {
                            var a = { data: i, xhr: r };
                            I("ParseAjax", a),
                                t.appendContent(e(a.data), O),
                                (n.finished = !0),
                                M(),
                                t._setFocus(),
                                setTimeout(function () {
                                    t.wrap.addClass(m);
                                }, 16),
                                t.updateStatus("ready"),
                                I("AjaxContentAdded");
                        },
                        error: function () {
                            M(),
                                (n.finished = n.loadError = !0),
                                t.updateStatus(
                                    "error",
                                    t.st.ajax.tError.replace("%url%", n.src)
                                );
                        },
                    },
                    t.st.ajax.settings
                );
                return (t.req = e.ajax(i)), "";
            },
        },
    });
    var L;
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image"),
                    w(d + i, function () {
                        "image" === t.currItem.type &&
                            n.cursor &&
                            e(document.body).addClass(n.cursor);
                    }),
                    w(s + i, function () {
                        n.cursor && e(document.body).removeClass(n.cursor),
                            C.off("resize" + f);
                    }),
                    w("Resize" + i, t.resizeImage),
                    t.isLowIE && w("AfterChange", t.resizeImage);
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE &&
                        (n =
                            parseInt(e.img.css("padding-top"), 10) +
                            parseInt(e.img.css("padding-bottom"), 10)),
                        e.img.css("max-height", t.wH - n);
                }
            },
            _onImageHasSize: function (e) {
                e.img &&
                    ((e.hasSize = !0),
                    L && clearInterval(L),
                    (e.isCheckingImgSize = !1),
                    I("ImageHasSize", e),
                    e.imgHidden &&
                        (t.content && t.content.removeClass("mfp-loading"),
                        (e.imgHidden = !1)));
            },
            findImageSize: function (e) {
                var n = 0,
                    i = e.img[0],
                    o = function (r) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                i.naturalWidth > 0
                                    ? t._onImageHasSize(e)
                                    : (n > 200 && clearInterval(L),
                                      3 === ++n
                                          ? o(10)
                                          : 40 === n
                                          ? o(50)
                                          : 100 === n && o(500));
                            }, r));
                    };
                o(1);
            },
            getImage: function (n, i) {
                var o = 0,
                    r = function () {
                        n &&
                            (n.img[0].complete
                                ? (n.img.off(".mfploader"),
                                  n === t.currItem &&
                                      (t._onImageHasSize(n),
                                      t.updateStatus("ready")),
                                  (n.hasSize = !0),
                                  (n.loaded = !0),
                                  I("ImageLoadComplete"))
                                : ++o < 200
                                ? setTimeout(r, 100)
                                : a());
                    },
                    a = function () {
                        n &&
                            (n.img.off(".mfploader"),
                            n === t.currItem &&
                                (t._onImageHasSize(n),
                                t.updateStatus(
                                    "error",
                                    s.tError.replace("%url%", n.src)
                                )),
                            (n.hasSize = !0),
                            (n.loaded = !0),
                            (n.loadError = !0));
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    (c.className = "mfp-img"),
                        n.el &&
                            n.el.find("img").length &&
                            (c.alt = n.el.find("img").attr("alt")),
                        (n.img = e(c)
                            .on("load.mfploader", r)
                            .on("error.mfploader", a)),
                        (c.src = n.src),
                        l.is("img") && (n.img = n.img.clone()),
                        (c = n.img[0]).naturalWidth > 0
                            ? (n.hasSize = !0)
                            : c.width || (n.hasSize = !1);
                }
                return (
                    t._parseMarkup(
                        i,
                        {
                            title: (function (n) {
                                if (n.data && void 0 !== n.data.title)
                                    return n.data.title;
                                var i = t.st.image.titleSrc;
                                if (i) {
                                    if (e.isFunction(i)) return i.call(t, n);
                                    if (n.el) return n.el.attr(i) || "";
                                }
                                return "";
                            })(n),
                            img_replaceWith: n.img,
                        },
                        n
                    ),
                    t.resizeImage(),
                    n.hasSize
                        ? (L && clearInterval(L),
                          n.loadError
                              ? (i.addClass("mfp-loading"),
                                t.updateStatus(
                                    "error",
                                    s.tError.replace("%url%", n.src)
                                ))
                              : (i.removeClass("mfp-loading"),
                                t.updateStatus("ready")),
                          i)
                        : (t.updateStatus("loading"),
                          (n.loading = !0),
                          n.hasSize ||
                              ((n.imgHidden = !0),
                              i.addClass("mfp-loading"),
                              t.findImageSize(n)),
                          i)
                );
            },
        },
    });
    var H;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var e,
                    n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o,
                        r,
                        a = n.duration,
                        c = function (e) {
                            var t = e
                                    .clone()
                                    .removeAttr("style")
                                    .removeAttr("class")
                                    .addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden",
                                },
                                r = "transition";
                            return (
                                (o["-webkit-" + r] =
                                    o["-moz-" + r] =
                                    o["-o-" + r] =
                                    o[r] =
                                        i),
                                t.css(o),
                                t
                            );
                        },
                        d = function () {
                            t.content.css("visibility", "visible");
                        };
                    w("BuildControls" + i, function () {
                        if (t._allowZoom()) {
                            if (
                                (clearTimeout(o),
                                t.content.css("visibility", "hidden"),
                                !(e = t._getItemToZoom()))
                            )
                                return void d();
                            (r = c(e)).css(t._getOffset()),
                                t.wrap.append(r),
                                (o = setTimeout(function () {
                                    r.css(t._getOffset(!0)),
                                        (o = setTimeout(function () {
                                            d(),
                                                setTimeout(function () {
                                                    r.remove(),
                                                        (e = r = null),
                                                        I("ZoomAnimationEnded");
                                                }, 16);
                                        }, a));
                                }, 16));
                        }
                    }),
                        w(l + i, function () {
                            if (t._allowZoom()) {
                                if (
                                    (clearTimeout(o),
                                    (t.st.removalDelay = a),
                                    !e)
                                ) {
                                    if (!(e = t._getItemToZoom())) return;
                                    r = c(e);
                                }
                                r.css(t._getOffset(!0)),
                                    t.wrap.append(r),
                                    t.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        r.css(t._getOffset());
                                    }, 16);
                            }
                        }),
                        w(s + i, function () {
                            t._allowZoom() &&
                                (d(), r && r.remove(), (e = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type;
            },
            _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img;
            },
            _getOffset: function (n) {
                var i,
                    o = (i = n
                        ? t.currItem.img
                        : t.st.zoom.opener(
                              t.currItem.el || t.currItem
                          )).offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (y ? i.innerHeight() : i[0].offsetHeight) - a - r,
                };
                return (
                    void 0 === H &&
                        (H =
                            void 0 !==
                            document.createElement("p").style.MozTransform),
                    H
                        ? (s["-moz-transform"] = s.transform =
                              "translate(" + o.left + "px," + o.top + "px)")
                        : ((s.left = o.left), (s.top = o.top)),
                    s
                );
            },
        },
    });
    var A = "iframe",
        F = function (e) {
            if (t.currTemplate[A]) {
                var n = t.currTemplate[A].find("iframe");
                n.length &&
                    (e || (n[0].src = "//about:blank"),
                    t.isIE8 && n.css("display", e ? "block" : "none"));
            }
        };
    e.magnificPopup.registerModule(A, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1",
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1",
                },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                t.types.push(A),
                    w("BeforeChange", function (e, t, n) {
                        t !== n && (t === A ? F() : n === A && F(!0));
                    }),
                    w(s + "." + A, function () {
                        F();
                    });
            },
            getIframe: function (n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function () {
                    if (o.indexOf(this.index) > -1)
                        return (
                            this.id &&
                                (o =
                                    "string" == typeof this.id
                                        ? o.substr(
                                              o.lastIndexOf(this.id) +
                                                  this.id.length,
                                              o.length
                                          )
                                        : this.id.call(this, o)),
                            (o = this.src.replace("%id%", o)),
                            !1
                        );
                });
                var a = {};
                return (
                    r.srcAction && (a[r.srcAction] = o),
                    t._parseMarkup(i, a, n),
                    t.updateStatus("ready"),
                    i
                );
            },
        },
    });
    var j = function (e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : e < 0 ? n + e : e;
        },
        N = function (e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup:
                '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var n = t.st.gallery,
                    o = ".mfp-gallery";
                if (((t.direction = !0), !n || !n.enabled)) return !1;
                (r += " mfp-gallery"),
                    w(d + o, function () {
                        n.navigateByImgClick &&
                            t.wrap.on("click" + o, ".mfp-img", function () {
                                if (t.items.length > 1) return t.next(), !1;
                            }),
                            i.on("keydown" + o, function (e) {
                                37 === e.keyCode
                                    ? t.prev()
                                    : 39 === e.keyCode && t.next();
                            });
                    }),
                    w("UpdateStatus" + o, function (e, n) {
                        n.text &&
                            (n.text = N(
                                n.text,
                                t.currItem.index,
                                t.items.length
                            ));
                    }),
                    w(c + o, function (e, i, o, r) {
                        var a = t.items.length;
                        o.counter = a > 1 ? N(n.tCounter, r.index, a) : "";
                    }),
                    w("BuildControls" + o, function () {
                        if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                            var i = n.arrowMarkup,
                                o = (t.arrowLeft = e(
                                    i
                                        .replace(/%title%/gi, n.tPrev)
                                        .replace(/%dir%/gi, "left")
                                ).addClass(h)),
                                r = (t.arrowRight = e(
                                    i
                                        .replace(/%title%/gi, n.tNext)
                                        .replace(/%dir%/gi, "right")
                                ).addClass(h));
                            o.click(function () {
                                t.prev();
                            }),
                                r.click(function () {
                                    t.next();
                                }),
                                t.container.append(o.add(r));
                        }
                    }),
                    w(u + o, function () {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout),
                            (t._preloadTimeout = setTimeout(function () {
                                t.preloadNearbyImages(),
                                    (t._preloadTimeout = null);
                            }, 16));
                    }),
                    w(s + o, function () {
                        i.off(o),
                            t.wrap.off("click" + o),
                            (t.arrowRight = t.arrowLeft = null);
                    });
            },
            next: function () {
                (t.direction = !0),
                    (t.index = j(t.index + 1)),
                    t.updateItemHTML();
            },
            prev: function () {
                (t.direction = !1),
                    (t.index = j(t.index - 1)),
                    t.updateItemHTML();
            },
            goTo: function (e) {
                (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var e,
                    n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++)
                    t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++)
                    t._preloadItem(t.index - e);
            },
            _preloadItem: function (n) {
                if (((n = j(n)), !t.items[n].preloaded)) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)),
                        I("LazyLoad", i),
                        "image" === i.type &&
                            (i.img = e('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    i.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (i.hasSize = !0),
                                        (i.loadError = !0),
                                        I("LazyLoadError", i);
                                })
                                .attr("src", i.src)),
                        (i.preloaded = !0);
                }
            },
        },
    });
    var W = "retina";
    e.magnificPopup.registerModule(W, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    (n = isNaN(n) ? n() : n) > 1 &&
                        (w("ImageHasSize." + W, function (e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%",
                            });
                        }),
                        w("ElementParse." + W, function (t, i) {
                            i.src = e.replaceSrc(i, n);
                        }));
                }
            },
        },
    }),
        k();
});

/* ==========================================================================
   3. Animsition
   ========================================================================== */

/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!(function (t) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], t)
        : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
})(function (t) {
    "use strict";
    var n = "animsition",
        i = {
            init: function (a) {
                (a = t.extend(
                    {
                        inClass: "fade-in",
                        outClass: "fade-out",
                        inDuration: 1500,
                        outDuration: 800,
                        linkElement: ".animsition-link",
                        loading: !0,
                        loadingParentElement: "body",
                        loadingClass: "animsition-loading",
                        loadingInner: "",
                        timeout: !1,
                        timeoutCountdown: 5e3,
                        onLoadEvent: !0,
                        browser: [
                            "animation-duration",
                            "-webkit-animation-duration",
                        ],
                        overlay: !1,
                        overlayClass: "animsition-overlay-slide",
                        overlayParentElement: "body",
                        transition: function (t) {
                            window.location.href = t;
                        },
                    },
                    a
                )),
                    (i.settings = {
                        timer: !1,
                        data: {
                            inClass: "animsition-in-class",
                            inDuration: "animsition-in-duration",
                            outClass: "animsition-out-class",
                            outDuration: "animsition-out-duration",
                            overlay: "animsition-overlay",
                        },
                        events: {
                            inStart: "animsition.inStart",
                            inEnd: "animsition.inEnd",
                            outStart: "animsition.outStart",
                            outEnd: "animsition.outEnd",
                        },
                    });
                var o = i.supportCheck.call(this, a);
                if (!o && a.browser.length > 0 && (!o || !this.length))
                    return (
                        "console" in window ||
                            ((window.console = {}),
                            (window.console.log = function (t) {
                                return t;
                            })),
                        this.length ||
                            console.log(
                                "Animsition: Element does not exist on page."
                            ),
                        o ||
                            console.log(
                                "Animsition: Does not support this browser."
                            ),
                        i.destroy.call(this)
                    );
                var e = i.optionCheck.call(this, a);
                return (
                    e &&
                        t("." + a.overlayClass).length <= 0 &&
                        i.addOverlay.call(this, a),
                    a.loading &&
                        t("." + a.loadingClass).length <= 0 &&
                        i.addLoading.call(this, a),
                    this.each(function () {
                        var o = this,
                            e = t(this),
                            s = t(window),
                            r = t(document),
                            l = e.data(n);
                        l ||
                            ((a = t.extend({}, a)),
                            e.data(n, { options: a }),
                            a.timeout && i.addTimer.call(o),
                            a.onLoadEvent &&
                                s.on("load." + n, function () {
                                    i.settings.timer &&
                                        clearTimeout(i.settings.timer),
                                        i["in"].call(o);
                                }),
                            s.on("pageshow." + n, function (t) {
                                t.originalEvent.persisted && i["in"].call(o);
                            }),
                            s.on("unload." + n, function () {}),
                            r.on("click." + n, a.linkElement, function (n) {
                                n.preventDefault();
                                var a = t(this),
                                    e = a.attr("href");
                                2 === n.which ||
                                n.metaKey ||
                                n.shiftKey ||
                                (-1 !==
                                    navigator.platform
                                        .toUpperCase()
                                        .indexOf("WIN") &&
                                    n.ctrlKey)
                                    ? window.open(e, "_blank")
                                    : i.out.call(o, a, e);
                            }));
                    })
                );
            },
            addOverlay: function (n) {
                t(n.overlayParentElement).prepend(
                    '<div class="' + n.overlayClass + '"></div>'
                );
            },
            addLoading: function (n) {
                t(n.loadingParentElement).append(
                    '<div class="' +
                        n.loadingClass +
                        '">' +
                        n.loadingInner +
                        "</div>"
                );
            },
            removeLoading: function () {
                var i = t(this),
                    a = i.data(n).options,
                    o = t(a.loadingParentElement).children(
                        "." + a.loadingClass
                    );
                o.fadeOut().remove();
            },
            addTimer: function () {
                var a = this,
                    o = t(this),
                    e = o.data(n).options;
                i.settings.timer = setTimeout(function () {
                    i["in"].call(a), t(window).off("load." + n);
                }, e.timeoutCountdown);
            },
            supportCheck: function (n) {
                var i = t(this),
                    a = n.browser,
                    o = a.length,
                    e = !1;
                0 === o && (e = !0);
                for (var s = 0; o > s; s++)
                    if ("string" == typeof i.css(a[s])) {
                        e = !0;
                        break;
                    }
                return e;
            },
            optionCheck: function (n) {
                var a,
                    o = t(this);
                return (a =
                    n.overlay || o.data(i.settings.data.overlay) ? !0 : !1);
            },
            animationCheck: function (i, a, o) {
                var e = t(this),
                    s = e.data(n).options,
                    r = typeof i,
                    l = !a && "number" === r,
                    d = a && "string" === r && i.length > 0;
                return (
                    l || d
                        ? (i = i)
                        : a && o
                        ? (i = s.inClass)
                        : !a && o
                        ? (i = s.inDuration)
                        : a && !o
                        ? (i = s.outClass)
                        : a || o || (i = s.outDuration),
                    i
                );
            },
            in: function () {
                var a = this,
                    o = t(this),
                    e = o.data(n).options,
                    s = o.data(i.settings.data.inDuration),
                    r = o.data(i.settings.data.inClass),
                    l = i.animationCheck.call(a, s, !1, !0),
                    d = i.animationCheck.call(a, r, !0, !0),
                    u = i.optionCheck.call(a, e),
                    c = o.data(n).outClass;
                e.loading && i.removeLoading.call(a),
                    c && o.removeClass(c),
                    u ? i.inOverlay.call(a, d, l) : i.inDefault.call(a, d, l);
            },
            inDefault: function (n, a) {
                var o = t(this);
                o.css({ "animation-duration": a + "ms" })
                    .addClass(n)
                    .trigger(i.settings.events.inStart)
                    .animateCallback(function () {
                        o.removeClass(n)
                            .css({ opacity: 1 })
                            .trigger(i.settings.events.inEnd);
                    });
            },
            inOverlay: function (a, o) {
                var e = t(this),
                    s = e.data(n).options;
                e.css({ opacity: 1 }).trigger(i.settings.events.inStart),
                    t(s.overlayParentElement)
                        .children("." + s.overlayClass)
                        .css({ "animation-duration": o + "ms" })
                        .addClass(a)
                        .animateCallback(function () {
                            e.trigger(i.settings.events.inEnd);
                        });
            },
            out: function (a, o) {
                var e = this,
                    s = t(this),
                    r = s.data(n).options,
                    l = a.data(i.settings.data.outClass),
                    d = s.data(i.settings.data.outClass),
                    u = a.data(i.settings.data.outDuration),
                    c = s.data(i.settings.data.outDuration),
                    m = l ? l : d,
                    g = u ? u : c,
                    f = i.animationCheck.call(e, m, !0, !1),
                    v = i.animationCheck.call(e, g, !1, !1),
                    h = i.optionCheck.call(e, r);
                (s.data(n).outClass = f),
                    h
                        ? i.outOverlay.call(e, f, v, o)
                        : i.outDefault.call(e, f, v, o);
            },
            outDefault: function (a, o, e) {
                var s = t(this),
                    r = s.data(n).options;
                s.css({ "animation-duration": o + 1 + "ms" })
                    .addClass(a)
                    .trigger(i.settings.events.outStart)
                    .animateCallback(function () {
                        s.trigger(i.settings.events.outEnd), r.transition(e);
                    });
            },
            outOverlay: function (a, o, e) {
                var s = this,
                    r = t(this),
                    l = r.data(n).options,
                    d = r.data(i.settings.data.inClass),
                    u = i.animationCheck.call(s, d, !0, !0);
                t(l.overlayParentElement)
                    .children("." + l.overlayClass)
                    .css({ "animation-duration": o + 1 + "ms" })
                    .removeClass(u)
                    .addClass(a)
                    .trigger(i.settings.events.outStart)
                    .animateCallback(function () {
                        r.trigger(i.settings.events.outEnd), l.transition(e);
                    });
            },
            destroy: function () {
                return this.each(function () {
                    var i = t(this);
                    t(window).off("." + n), i.css({ opacity: 1 }).removeData(n);
                });
            },
        };
    (t.fn.animateCallback = function (n) {
        var i = "animationend webkitAnimationEnd";
        return this.each(function () {
            var a = t(this);
            a.on(i, function () {
                return a.off(i), n.call(this);
            });
        });
    }),
        (t.fn.animsition = function (a) {
            return i[a]
                ? i[a].apply(this, Array.prototype.slice.call(arguments, 1))
                : "object" != typeof a && a
                ? void t.error("Method " + a + " does not exist on jQuery." + n)
                : i.init.apply(this, arguments);
        });
});

/* ==========================================================================
   4. Swiper
   ========================================================================== */

/**
 * Swiper 5.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 20, 2020
 */

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e = e || self).Swiper = t());
})(this, function () {
    "use strict";
    function e(e) {
        return (
            null !== e &&
            "object" == typeof e &&
            "constructor" in e &&
            e.constructor === Object
        );
    }
    function t(i, s) {
        void 0 === i && (i = {}),
            void 0 === s && (s = {}),
            Object.keys(s).forEach(function (a) {
                void 0 === i[a]
                    ? (i[a] = s[a])
                    : e(s[a]) &&
                      e(i[a]) &&
                      Object.keys(s[a]).length > 0 &&
                      t(i[a], s[a]);
            });
    }
    var i = "undefined" != typeof document ? document : {},
        s = {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
                return null;
            },
            querySelectorAll: function () {
                return [];
            },
            getElementById: function () {
                return null;
            },
            createEvent: function () {
                return { initEvent: function () {} };
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return [];
                    },
                };
            },
            createElementNS: function () {
                return {};
            },
            importNode: function () {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: "",
            },
        };
    t(i, s);
    var a = "undefined" != typeof window ? window : {};
    t(a, {
        document: s,
        navigator: { userAgent: "" },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
        },
        history: {
            replaceState: function () {},
            pushState: function () {},
            go: function () {},
            back: function () {},
        },
        CustomEvent: function () {
            return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return "";
                },
            };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {};
        },
    });
    var r = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return (this.length = e.length), this;
    };
    function n(e, t) {
        var s = [],
            n = 0;
        if (e && !t && e instanceof r) return e;
        if (e)
            if ("string" == typeof e) {
                var o,
                    l,
                    d = e.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (
                        0 === d.indexOf("<li") && (h = "ul"),
                            0 === d.indexOf("<tr") && (h = "tbody"),
                            (0 !== d.indexOf("<td") &&
                                0 !== d.indexOf("<th")) ||
                                (h = "tr"),
                            0 === d.indexOf("<tbody") && (h = "table"),
                            0 === d.indexOf("<option") && (h = "select"),
                            (l = i.createElement(h)).innerHTML = d,
                            n = 0;
                        n < l.childNodes.length;
                        n += 1
                    )
                        s.push(l.childNodes[n]);
                } else
                    for (
                        o =
                            t || "#" !== e[0] || e.match(/[ .<>:~]/)
                                ? (t || i).querySelectorAll(e.trim())
                                : [i.getElementById(e.trim().split("#")[1])],
                            n = 0;
                        n < o.length;
                        n += 1
                    )
                        o[n] && s.push(o[n]);
            } else if (e.nodeType || e === a || e === i) s.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (n = 0; n < e.length; n += 1) s.push(e[n]);
        return new r(s);
    }
    function o(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
    }
    (n.fn = r.prototype), (n.Class = r), (n.Dom7 = r);
    var l = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] &&
                        void 0 !== this[s].classList &&
                        this[s].classList.add(t[i]);
            return this;
        },
        removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] &&
                        void 0 !== this[s].classList &&
                        this[s].classList.remove(t[i]);
            return this;
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] &&
                        void 0 !== this[s].classList &&
                        this[s].classList.toggle(t[i]);
            return this;
        },
        attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else
                    for (var a in e)
                        (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
            return this;
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (i = this[s]).dom7ElementDataStorage ||
                        (i.dom7ElementDataStorage = {}),
                        (i.dom7ElementDataStorage[e] = t);
                return this;
            }
            if ((i = this[0])) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0;
            }
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                (i.webkitTransform = e), (i.transform = e);
            }
            return this;
        },
        transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                (i.webkitTransitionDuration = e), (i.transitionDuration = e);
            }
            return this;
        },
        on: function () {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if ((i.indexOf(e) < 0 && i.unshift(e), n(t).is(a)))
                        r.apply(t, i);
                    else
                        for (
                            var s = n(t).parents(), o = 0;
                            o < s.length;
                            o += 1
                        )
                            n(s[o]).is(a) && r.apply(s[o], i);
                }
            }
            function d(e) {
                var t = (e && e.target && e.target.dom7EventData) || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
            }
            "function" == typeof t[1] &&
                ((s = (e = t)[0]), (r = e[1]), (o = e[2]), (a = void 0)),
                o || (o = !1);
            for (var h, p = s.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (a)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                            u.dom7LiveListeners[v] ||
                                (u.dom7LiveListeners[v] = []),
                            u.dom7LiveListeners[v].push({
                                listener: r,
                                proxyListener: l,
                            }),
                            u.addEventListener(v, l, o);
                    }
                else
                    for (h = 0; h < p.length; h += 1) {
                        var f = p[h];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                            u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
                            u.dom7Listeners[f].push({
                                listener: r,
                                proxyListener: d,
                            }),
                            u.addEventListener(f, d, o);
                    }
            }
            return this;
        },
        off: function () {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] &&
                ((s = (e = t)[0]), (r = e[1]), (n = e[2]), (a = void 0)),
                n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h],
                        c = void 0;
                    if (
                        (!a && p.dom7Listeners
                            ? (c = p.dom7Listeners[d])
                            : a &&
                              p.dom7LiveListeners &&
                              (c = p.dom7LiveListeners[d]),
                        c && c.length)
                    )
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            (r && v.listener === r) ||
                            (r &&
                                v.listener &&
                                v.listener.dom7proxy &&
                                v.listener.dom7proxy === r)
                                ? (p.removeEventListener(d, v.proxyListener, n),
                                  c.splice(u, 1))
                                : r ||
                                  (p.removeEventListener(d, v.proxyListener, n),
                                  c.splice(u, 1));
                        }
                }
            return this;
        },
        trigger: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            for (var s = e[0].split(" "), r = e[1], n = 0; n < s.length; n += 1)
                for (var o = s[n], l = 0; l < this.length; l += 1) {
                    var d = this[l],
                        h = void 0;
                    try {
                        h = new a.CustomEvent(o, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0,
                        });
                    } catch (e) {
                        (h = i.createEvent("Event")).initEvent(o, !0, !0),
                            (h.detail = r);
                    }
                    (d.dom7EventData = e.filter(function (e, t) {
                        return t > 0;
                    })),
                        d.dispatchEvent(h),
                        (d.dom7EventData = []),
                        delete d.dom7EventData;
                }
            return this;
        },
        transitionEnd: function (e) {
            var t,
                i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1)
                        s.off(i[t], a);
            }
            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this;
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return (
                        this[0].offsetWidth +
                        parseFloat(t.getPropertyValue("margin-right")) +
                        parseFloat(t.getPropertyValue("margin-left"))
                    );
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return (
                        this[0].offsetHeight +
                        parseFloat(t.getPropertyValue("margin-top")) +
                        parseFloat(t.getPropertyValue("margin-bottom"))
                    );
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function () {
            if (this.length > 0) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    s = i.body,
                    r = e.clientTop || s.clientTop || 0,
                    n = e.clientLeft || s.clientLeft || 0,
                    o = e === a ? a.scrollY : e.scrollTop,
                    l = e === a ? a.scrollX : e.scrollLeft;
                return { top: t.top + o - r, left: t.left + l - n };
            }
            return null;
        },
        css: function (e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var s in e) this[i].style[s] = e[s];
                    return this;
                }
                if (this[0])
                    return a
                        .getComputedStyle(this[0], null)
                        .getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this;
            }
            return this;
        },
        each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function (e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function (e) {
            var t,
                s,
                o = this[0];
            if (!o || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (o.matches) return o.matches(e);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
                if (o.msMatchesSelector) return o.msMatchesSelector(e);
                for (t = n(e), s = 0; s < t.length; s += 1)
                    if (t[s] === o) return !0;
                return !1;
            }
            if (e === i) return o === i;
            if (e === a) return o === a;
            if (e.nodeType || e instanceof r) {
                for (t = e.nodeType ? [e] : e, s = 0; s < t.length; s += 1)
                    if (t[s] === o) return !0;
                return !1;
            }
            return !1;
        },
        index: function () {
            var e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t,
                i = this.length;
            return new r(
                e > i - 1
                    ? []
                    : e < 0
                    ? (t = i + e) < 0
                        ? []
                        : [this[t]]
                    : [this[e]]
            );
        },
        append: function () {
            for (var e, t = [], s = arguments.length; s--; )
                t[s] = arguments[s];
            for (var a = 0; a < t.length; a += 1) {
                e = t[a];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) {
                        var o = i.createElement("div");
                        for (o.innerHTML = e; o.firstChild; )
                            this[n].appendChild(o.firstChild);
                    } else if (e instanceof r)
                        for (var l = 0; l < e.length; l += 1)
                            this[n].appendChild(e[l]);
                    else this[n].appendChild(e);
            }
            return this;
        },
        prepend: function (e) {
            var t, s;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var a = i.createElement("div");
                    for (
                        a.innerHTML = e, s = a.childNodes.length - 1;
                        s >= 0;
                        s -= 1
                    )
                        this[t].insertBefore(
                            a.childNodes[s],
                            this[t].childNodes[0]
                        );
                } else if (e instanceof r)
                    for (s = 0; s < e.length; s += 1)
                        this[t].insertBefore(e[s], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
        },
        next: function (e) {
            return this.length > 0
                ? e
                    ? this[0].nextElementSibling &&
                      n(this[0].nextElementSibling).is(e)
                        ? new r([this[0].nextElementSibling])
                        : new r([])
                    : this[0].nextElementSibling
                    ? new r([this[0].nextElementSibling])
                    : new r([])
                : new r([]);
        },
        nextAll: function (e) {
            var t = [],
                i = this[0];
            if (!i) return new r([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s), (i = s);
            }
            return new r(t);
        },
        prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e
                    ? t.previousElementSibling &&
                      n(t.previousElementSibling).is(e)
                        ? new r([t.previousElementSibling])
                        : new r([])
                    : t.previousElementSibling
                    ? new r([t.previousElementSibling])
                    : new r([]);
            }
            return new r([]);
        },
        prevAll: function (e) {
            var t = [],
                i = this[0];
            if (!i) return new r([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s), (i = s);
            }
            return new r(t);
        },
        parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode &&
                    (e
                        ? n(this[i].parentNode).is(e) &&
                          t.push(this[i].parentNode)
                        : t.push(this[i].parentNode));
            return n(o(t));
        },
        parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].parentNode; s; )
                    e ? n(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
            return n(o(t));
        },
        closest: function (e) {
            var t = this;
            return void 0 === e
                ? new r([])
                : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (
                    var s = this[i].querySelectorAll(e), a = 0;
                    a < s.length;
                    a += 1
                )
                    t.push(s[a]);
            return new r(t);
        },
        children: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
                    e
                        ? 1 === s[a].nodeType && n(s[a]).is(e) && t.push(s[a])
                        : 1 === s[a].nodeType && t.push(s[a]);
            return new r(o(t));
        },
        filter: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                e.call(this[i], i, this[i]) && t.push(this[i]);
            return new r(t);
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var i,
                s,
                a = this;
            for (i = 0; i < e.length; i += 1) {
                var r = n(e[i]);
                for (s = 0; s < r.length; s += 1)
                    (a[a.length] = r[s]), (a.length += 1);
            }
            return a;
        },
        styles: function () {
            return this[0] ? a.getComputedStyle(this[0], null) : {};
        },
    };
    Object.keys(l).forEach(function (e) {
        n.fn[e] = n.fn[e] || l[e];
    });
    var d = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null;
                    } catch (e) {}
                    try {
                        delete t[e];
                    } catch (e) {}
                });
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function () {
                return Date.now();
            },
            getTranslate: function (e, t) {
                var i, s, r;
                void 0 === t && (t = "x");
                var n = a.getComputedStyle(e, null);
                return (
                    a.WebKitCSSMatrix
                        ? ((s = n.transform || n.webkitTransform).split(",")
                              .length > 6 &&
                              (s = s
                                  .split(", ")
                                  .map(function (e) {
                                      return e.replace(",", ".");
                                  })
                                  .join(", ")),
                          (r = new a.WebKitCSSMatrix("none" === s ? "" : s)))
                        : (i = (r =
                              n.MozTransform ||
                              n.OTransform ||
                              n.MsTransform ||
                              n.msTransform ||
                              n.transform ||
                              n
                                  .getPropertyValue("transform")
                                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                              .toString()
                              .split(",")),
                    "x" === t &&
                        (s = a.WebKitCSSMatrix
                            ? r.m41
                            : 16 === i.length
                            ? parseFloat(i[12])
                            : parseFloat(i[4])),
                    "y" === t &&
                        (s = a.WebKitCSSMatrix
                            ? r.m42
                            : 16 === i.length
                            ? parseFloat(i[13])
                            : parseFloat(i[5])),
                    s || 0
                );
            },
            parseUrlQuery: function (e) {
                var t,
                    i,
                    s,
                    r,
                    n = {},
                    o = e || a.location.href;
                if ("string" == typeof o && o.length)
                    for (
                        r = (i = (o =
                            o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "")
                            .split("&")
                            .filter(function (e) {
                                return "" !== e;
                            })).length,
                            t = 0;
                        t < r;
                        t += 1
                    )
                        (s = i[t].replace(/#\S+/g, "").split("=")),
                            (n[decodeURIComponent(s[0])] =
                                void 0 === s[1]
                                    ? void 0
                                    : decodeURIComponent(s[1]) || "");
                return n;
            },
            isObject: function (e) {
                return (
                    "object" == typeof e &&
                    null !== e &&
                    e.constructor &&
                    e.constructor === Object
                );
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (null != a)
                        for (
                            var r = Object.keys(Object(a)), n = 0, o = r.length;
                            n < o;
                            n += 1
                        ) {
                            var l = r[n],
                                h = Object.getOwnPropertyDescriptor(a, l);
                            void 0 !== h &&
                                h.enumerable &&
                                (d.isObject(i[l]) && d.isObject(a[l])
                                    ? d.extend(i[l], a[l])
                                    : !d.isObject(i[l]) && d.isObject(a[l])
                                    ? ((i[l] = {}), d.extend(i[l], a[l]))
                                    : (i[l] = a[l]));
                        }
                }
                return i;
            },
        },
        h = {
            touch: !!(
                "ontouchstart" in a ||
                (a.DocumentTouch && i instanceof a.DocumentTouch)
            ),
            pointerEvents:
                !!a.PointerEvent &&
                "maxTouchPoints" in a.navigator &&
                a.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
            passiveListener: (function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0;
                        },
                    });
                    a.addEventListener("testPassiveListener", null, t);
                } catch (e) {}
                return e;
            })(),
            gestures: "ongesturestart" in a,
        },
        p = function (e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
                (t.eventsListeners = {}),
                t.params &&
                    t.params.on &&
                    Object.keys(t.params.on).forEach(function (e) {
                        t.on(e, t.params.on[e]);
                    });
        },
        c = { components: { configurable: !0 } };
    (p.prototype.on = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return (
            e.split(" ").forEach(function (e) {
                s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][a](t);
            }),
            s
        );
    }),
        (p.prototype.once = function (e, t, i) {
            var s = this;
            if ("function" != typeof t) return s;
            function a() {
                for (var i = [], r = arguments.length; r--; )
                    i[r] = arguments[r];
                s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
            }
            return (a.f7proxy = t), s.on(e, a, i);
        }),
        (p.prototype.off = function (e, t) {
            var i = this;
            return i.eventsListeners
                ? (e.split(" ").forEach(function (e) {
                      void 0 === t
                          ? (i.eventsListeners[e] = [])
                          : i.eventsListeners[e] &&
                            i.eventsListeners[e].length &&
                            i.eventsListeners[e].forEach(function (s, a) {
                                (s === t || (s.f7proxy && s.f7proxy === t)) &&
                                    i.eventsListeners[e].splice(a, 1);
                            });
                  }),
                  i)
                : i;
        }),
        (p.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var i,
                s,
                a,
                r = this;
            if (!r.eventsListeners) return r;
            "string" == typeof e[0] || Array.isArray(e[0])
                ? ((i = e[0]), (s = e.slice(1, e.length)), (a = r))
                : ((i = e[0].events), (s = e[0].data), (a = e[0].context || r));
            var n = Array.isArray(i) ? i : i.split(" ");
            return (
                n.forEach(function (e) {
                    if (r.eventsListeners && r.eventsListeners[e]) {
                        var t = [];
                        r.eventsListeners[e].forEach(function (e) {
                            t.push(e);
                        }),
                            t.forEach(function (e) {
                                e.apply(a, s);
                            });
                    }
                }),
                r
            );
        }),
        (p.prototype.useModulesParams = function (e) {
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function (i) {
                    var s = t.modules[i];
                    s.params && d.extend(e, s.params);
                });
        }),
        (p.prototype.useModules = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function (i) {
                    var s = t.modules[i],
                        a = e[i] || {};
                    s.instance &&
                        Object.keys(s.instance).forEach(function (e) {
                            var i = s.instance[e];
                            t[e] = "function" == typeof i ? i.bind(t) : i;
                        }),
                        s.on &&
                            t.on &&
                            Object.keys(s.on).forEach(function (e) {
                                t.on(e, s.on[e]);
                            }),
                        s.create && s.create.bind(t)(a);
                });
        }),
        (c.components.set = function (e) {
            this.use && this.use(e);
        }),
        (p.installModule = function (e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; )
                t[i] = arguments[i + 1];
            var s = this;
            s.prototype.modules || (s.prototype.modules = {});
            var a =
                e.name ||
                Object.keys(s.prototype.modules).length + "_" + d.now();
            return (
                (s.prototype.modules[a] = e),
                e.proto &&
                    Object.keys(e.proto).forEach(function (t) {
                        s.prototype[t] = e.proto[t];
                    }),
                e.static &&
                    Object.keys(e.static).forEach(function (t) {
                        s[t] = e.static[t];
                    }),
                e.install && e.install.apply(s, t),
                s
            );
        }),
        (p.use = function (e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; )
                t[i] = arguments[i + 1];
            var s = this;
            return Array.isArray(e)
                ? (e.forEach(function (e) {
                      return s.installModule(e);
                  }),
                  s)
                : s.installModule.apply(s, [e].concat(t));
        }),
        Object.defineProperties(p, c);
    var u = {
        updateSize: function () {
            var e,
                t,
                i = this.$el;
            (e =
                void 0 !== this.params.width
                    ? this.params.width
                    : i[0].clientWidth),
                (t =
                    void 0 !== this.params.height
                        ? this.params.height
                        : i[0].clientHeight),
                (0 === e && this.isHorizontal()) ||
                    (0 === t && this.isVertical()) ||
                    ((e =
                        e -
                        parseInt(i.css("padding-left"), 10) -
                        parseInt(i.css("padding-right"), 10)),
                    (t =
                        t -
                        parseInt(i.css("padding-top"), 10) -
                        parseInt(i.css("padding-bottom"), 10)),
                    d.extend(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t,
                    }));
        },
        updateSlides: function () {
            var e = this.params,
                t = this.$wrapperEl,
                i = this.size,
                s = this.rtlTranslate,
                r = this.wrongRTL,
                n = this.virtual && e.virtual.enabled,
                o = n ? this.virtual.slides.length : this.slides.length,
                l = t.children("." + this.params.slideClass),
                h = n ? this.virtual.slides.length : l.length,
                p = [],
                c = [],
                u = [];
            function v(t) {
                return !e.cssMode || t !== l.length - 1;
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length,
                b = this.snapGrid.length,
                w = e.spaceBetween,
                y = -f,
                x = 0,
                E = 0;
            if (void 0 !== i) {
                var T, S;
                "string" == typeof w &&
                    w.indexOf("%") >= 0 &&
                    (w = (parseFloat(w.replace("%", "")) / 100) * i),
                    (this.virtualSize = -w),
                    s
                        ? l.css({ marginLeft: "", marginTop: "" })
                        : l.css({ marginRight: "", marginBottom: "" }),
                    e.slidesPerColumn > 1 &&
                        ((T =
                            Math.floor(h / e.slidesPerColumn) ===
                            h / this.params.slidesPerColumn
                                ? h
                                : Math.ceil(h / e.slidesPerColumn) *
                                  e.slidesPerColumn),
                        "auto" !== e.slidesPerView &&
                            "row" === e.slidesPerColumnFill &&
                            (T = Math.max(
                                T,
                                e.slidesPerView * e.slidesPerColumn
                            )));
                for (
                    var C,
                        M = e.slidesPerColumn,
                        P = T / M,
                        z = Math.floor(h / e.slidesPerColumn),
                        k = 0;
                    k < h;
                    k += 1
                ) {
                    S = 0;
                    var $ = l.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0,
                            I = void 0,
                            O = void 0;
                        if (
                            "row" === e.slidesPerColumnFill &&
                            e.slidesPerGroup > 1
                        ) {
                            var D = Math.floor(
                                    k / (e.slidesPerGroup * e.slidesPerColumn)
                                ),
                                A =
                                    k -
                                    e.slidesPerColumn * e.slidesPerGroup * D,
                                G =
                                    0 === D
                                        ? e.slidesPerGroup
                                        : Math.min(
                                              Math.ceil(
                                                  (h -
                                                      D *
                                                          M *
                                                          e.slidesPerGroup) /
                                                      M
                                              ),
                                              e.slidesPerGroup
                                          );
                            (L =
                                (I =
                                    A -
                                    (O = Math.floor(A / G)) * G +
                                    D * e.slidesPerGroup) +
                                (O * T) / M),
                                $.css({
                                    "-webkit-box-ordinal-group": L,
                                    "-moz-box-ordinal-group": L,
                                    "-ms-flex-order": L,
                                    "-webkit-order": L,
                                    order: L,
                                });
                        } else
                            "column" === e.slidesPerColumnFill
                                ? ((O = k - (I = Math.floor(k / M)) * M),
                                  (I > z || (I === z && O === M - 1)) &&
                                      (O += 1) >= M &&
                                      ((O = 0), (I += 1)))
                                : (I = k - (O = Math.floor(k / P)) * P);
                        $.css(
                            "margin-" + (this.isHorizontal() ? "top" : "left"),
                            0 !== O && e.spaceBetween && e.spaceBetween + "px"
                        );
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = a.getComputedStyle($[0], null),
                                B = $[0].style.transform,
                                N = $[0].style.webkitTransform;
                            if (
                                (B && ($[0].style.transform = "none"),
                                N && ($[0].style.webkitTransform = "none"),
                                e.roundLengths)
                            )
                                S = this.isHorizontal()
                                    ? $.outerWidth(!0)
                                    : $.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width")),
                                    V = parseFloat(
                                        H.getPropertyValue("padding-left")
                                    ),
                                    Y = parseFloat(
                                        H.getPropertyValue("padding-right")
                                    ),
                                    F = parseFloat(
                                        H.getPropertyValue("margin-left")
                                    ),
                                    W = parseFloat(
                                        H.getPropertyValue("margin-right")
                                    ),
                                    R = H.getPropertyValue("box-sizing");
                                S =
                                    R && "border-box" === R
                                        ? X + F + W
                                        : X + V + Y + F + W;
                            } else {
                                var q = parseFloat(
                                        H.getPropertyValue("height")
                                    ),
                                    j = parseFloat(
                                        H.getPropertyValue("padding-top")
                                    ),
                                    K = parseFloat(
                                        H.getPropertyValue("padding-bottom")
                                    ),
                                    U = parseFloat(
                                        H.getPropertyValue("margin-top")
                                    ),
                                    _ = parseFloat(
                                        H.getPropertyValue("margin-bottom")
                                    ),
                                    Z = H.getPropertyValue("box-sizing");
                                S =
                                    Z && "border-box" === Z
                                        ? q + U + _
                                        : q + j + K + U + _;
                            }
                            B && ($[0].style.transform = B),
                                N && ($[0].style.webkitTransform = N),
                                e.roundLengths && (S = Math.floor(S));
                        } else
                            (S =
                                (i - (e.slidesPerView - 1) * w) /
                                e.slidesPerView),
                                e.roundLengths && (S = Math.floor(S)),
                                l[k] &&
                                    (this.isHorizontal()
                                        ? (l[k].style.width = S + "px")
                                        : (l[k].style.height = S + "px"));
                        l[k] && (l[k].swiperSlideSize = S),
                            u.push(S),
                            e.centeredSlides
                                ? ((y = y + S / 2 + x / 2 + w),
                                  0 === x && 0 !== k && (y = y - i / 2 - w),
                                  0 === k && (y = y - i / 2 - w),
                                  Math.abs(y) < 0.001 && (y = 0),
                                  e.roundLengths && (y = Math.floor(y)),
                                  E % e.slidesPerGroup == 0 && p.push(y),
                                  c.push(y))
                                : (e.roundLengths && (y = Math.floor(y)),
                                  (E -
                                      Math.min(
                                          this.params.slidesPerGroupSkip,
                                          E
                                      )) %
                                      this.params.slidesPerGroup ==
                                      0 && p.push(y),
                                  c.push(y),
                                  (y = y + S + w)),
                            (this.virtualSize += S + w),
                            (x = S),
                            (E += 1);
                    }
                }
                if (
                    ((this.virtualSize = Math.max(this.virtualSize, i) + m),
                    s &&
                        r &&
                        ("slide" === e.effect || "coverflow" === e.effect) &&
                        t.css({
                            width: this.virtualSize + e.spaceBetween + "px",
                        }),
                    e.setWrapperSize &&
                        (this.isHorizontal()
                            ? t.css({
                                  width:
                                      this.virtualSize + e.spaceBetween + "px",
                              })
                            : t.css({
                                  height:
                                      this.virtualSize + e.spaceBetween + "px",
                              })),
                    e.slidesPerColumn > 1 &&
                        ((this.virtualSize = (S + e.spaceBetween) * T),
                        (this.virtualSize =
                            Math.ceil(this.virtualSize / e.slidesPerColumn) -
                            e.spaceBetween),
                        this.isHorizontal()
                            ? t.css({
                                  width:
                                      this.virtualSize + e.spaceBetween + "px",
                              })
                            : t.css({
                                  height:
                                      this.virtualSize + e.spaceBetween + "px",
                              }),
                        e.centeredSlides))
                ) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)),
                            p[Q] < this.virtualSize + p[0] && C.push(J);
                    }
                    p = C;
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)),
                            p[ee] <= this.virtualSize - i && C.push(te);
                    }
                    (p = C),
                        Math.floor(this.virtualSize - i) -
                            Math.floor(p[p.length - 1]) >
                            1 && p.push(this.virtualSize - i);
                }
                if (
                    (0 === p.length && (p = [0]),
                    0 !== e.spaceBetween &&
                        (this.isHorizontal()
                            ? s
                                ? l.filter(v).css({ marginLeft: w + "px" })
                                : l.filter(v).css({ marginRight: w + "px" })
                            : l.filter(v).css({ marginBottom: w + "px" })),
                    e.centeredSlides && e.centeredSlidesBounds)
                ) {
                    var ie = 0;
                    u.forEach(function (t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0);
                    });
                    var se = (ie -= e.spaceBetween) - i;
                    p = p.map(function (e) {
                        return e < 0 ? -f : e > se ? se + m : e;
                    });
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (
                        (u.forEach(function (t) {
                            ae += t + (e.spaceBetween ? e.spaceBetween : 0);
                        }),
                        (ae -= e.spaceBetween) < i)
                    ) {
                        var re = (i - ae) / 2;
                        p.forEach(function (e, t) {
                            p[t] = e - re;
                        }),
                            c.forEach(function (e, t) {
                                c[t] = e + re;
                            });
                    }
                }
                d.extend(this, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u,
                }),
                    h !== o && this.emit("slidesLengthChange"),
                    p.length !== g &&
                        (this.params.watchOverflow && this.checkOverflow(),
                        this.emit("snapGridLengthChange")),
                    c.length !== b && this.emit("slidesGridLengthChange"),
                    (e.watchSlidesProgress || e.watchSlidesVisibility) &&
                        this.updateSlidesOffset();
            }
        },
        updateAutoHeight: function (e) {
            var t,
                i = [],
                s = 0;
            if (
                ("number" == typeof e
                    ? this.setTransition(e)
                    : !0 === e && this.setTransition(this.params.speed),
                "auto" !== this.params.slidesPerView &&
                    this.params.slidesPerView > 1)
            )
                if (this.params.centeredSlides)
                    this.visibleSlides.each(function (e, t) {
                        i.push(t);
                    });
                else
                    for (
                        t = 0;
                        t < Math.ceil(this.params.slidesPerView);
                        t += 1
                    ) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length) break;
                        i.push(this.slides.eq(a)[0]);
                    }
            else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s;
                }
            s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal()
                    ? e[t].offsetLeft
                    : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this.params,
                i = this.slides,
                s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e),
                    i.removeClass(t.slideVisibleClass),
                    (this.visibleSlidesIndexes = []),
                    (this.visibleSlides = []);
                for (var r = 0; r < i.length; r += 1) {
                    var o = i[r],
                        l =
                            (a +
                                (t.centeredSlides ? this.minTranslate() : 0) -
                                o.swiperSlideOffset) /
                            (o.swiperSlideSize + t.spaceBetween);
                    if (
                        t.watchSlidesVisibility ||
                        (t.centeredSlides && t.autoHeight)
                    ) {
                        var d = -(a - o.swiperSlideOffset),
                            h = d + this.slidesSizesGrid[r];
                        ((d >= 0 && d < this.size - 1) ||
                            (h > 1 && h <= this.size) ||
                            (d <= 0 && h >= this.size)) &&
                            (this.visibleSlides.push(o),
                            this.visibleSlidesIndexes.push(r),
                            i.eq(r).addClass(t.slideVisibleClass));
                    }
                    o.progress = s ? -l : l;
                }
                this.visibleSlides = n(this.visibleSlides);
            }
        },
        updateProgress: function (e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
            }
            var i = this.params,
                s = this.maxTranslate() - this.minTranslate(),
                a = this.progress,
                r = this.isBeginning,
                n = this.isEnd,
                o = r,
                l = n;
            0 === s
                ? ((a = 0), (r = !0), (n = !0))
                : ((r = (a = (e - this.minTranslate()) / s) <= 0),
                  (n = a >= 1)),
                d.extend(this, { progress: a, isBeginning: r, isEnd: n }),
                (i.watchSlidesProgress ||
                    i.watchSlidesVisibility ||
                    (i.centeredSlides && i.autoHeight)) &&
                    this.updateSlidesProgress(e),
                r && !o && this.emit("reachBeginning toEdge"),
                n && !l && this.emit("reachEnd toEdge"),
                ((o && !r) || (l && !n)) && this.emit("fromEdge"),
                this.emit("progress", a);
        },
        updateSlidesClasses: function () {
            var e,
                t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(
                i.slideActiveClass +
                    " " +
                    i.slideNextClass +
                    " " +
                    i.slidePrevClass +
                    " " +
                    i.slideDuplicateActiveClass +
                    " " +
                    i.slideDuplicateNextClass +
                    " " +
                    i.slideDuplicatePrevClass
            ),
                (e = n
                    ? this.$wrapperEl.find(
                          "." +
                              i.slideClass +
                              '[data-swiper-slide-index="' +
                              a +
                              '"]'
                      )
                    : t.eq(a)).addClass(i.slideActiveClass),
                i.loop &&
                    (e.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  "." +
                                      i.slideClass +
                                      ":not(." +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      r +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateActiveClass)
                        : s
                              .children(
                                  "." +
                                      i.slideClass +
                                      "." +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      r +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateActiveClass));
            var o = e
                .nextAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass);
            i.loop &&
                0 === o.length &&
                (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e
                .prevAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass);
            i.loop &&
                0 === l.length &&
                (l = t.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                    (o.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  "." +
                                      i.slideClass +
                                      ":not(." +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      o.attr("data-swiper-slide-index") +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateNextClass)
                        : s
                              .children(
                                  "." +
                                      i.slideClass +
                                      "." +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      o.attr("data-swiper-slide-index") +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateNextClass),
                    l.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  "." +
                                      i.slideClass +
                                      ":not(." +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      l.attr("data-swiper-slide-index") +
                                      '"]'
                              )
                              .addClass(i.slideDuplicatePrevClass)
                        : s
                              .children(
                                  "." +
                                      i.slideClass +
                                      "." +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      l.attr("data-swiper-slide-index") +
                                      '"]'
                              )
                              .addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
            var t,
                i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                r = this.params,
                n = this.activeIndex,
                o = this.realIndex,
                l = this.snapIndex,
                h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                    void 0 !== s[p + 1]
                        ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2
                            ? (h = p)
                            : i >= s[p] && i < s[p + 1] && (h = p + 1)
                        : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i);
            else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup);
            }
            if ((t >= a.length && (t = a.length - 1), h !== n)) {
                var u = parseInt(
                    this.slides.eq(h).attr("data-swiper-slide-index") || h,
                    10
                );
                d.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: n,
                    activeIndex: h,
                }),
                    this.emit("activeIndexChange"),
                    this.emit("snapIndexChange"),
                    o !== u && this.emit("realIndexChange"),
                    (this.initialized || this.params.runCallbacksOnInit) &&
                        this.emit("slideChange");
            } else
                t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
            var t = this.params,
                i = n(e.target).closest("." + t.slideClass)[0],
                s = !1;
            if (i)
                for (var a = 0; a < this.slides.length; a += 1)
                    this.slides[a] === i && (s = !0);
            if (!i || !s)
                return (
                    (this.clickedSlide = void 0),
                    void (this.clickedIndex = void 0)
                );
            (this.clickedSlide = i),
                this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                          n(i).attr("data-swiper-slide-index"),
                          10
                      ))
                    : (this.clickedIndex = n(i).index()),
                t.slideToClickedSlide &&
                    void 0 !== this.clickedIndex &&
                    this.clickedIndex !== this.activeIndex &&
                    this.slideToClickedSlide();
        },
    };
    var v = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
            var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                r = this.wrapperEl,
                n = this.progress,
                o = 0,
                l = 0;
            this.isHorizontal() ? (o = i ? -e : e) : (l = e),
                s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                s.cssMode
                    ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                          this.isHorizontal() ? -o : -l)
                    : s.virtualTranslate ||
                      a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? o : l);
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function () {
            return -this.snapGrid[0];
        },
        maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
            var n = this,
                o = n.params,
                l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d,
                h = n.minTranslate(),
                p = n.maxTranslate();
            if (
                ((d = s && e > h ? h : s && e < p ? p : e),
                n.updateProgress(d),
                o.cssMode)
            ) {
                var c = n.isHorizontal();
                return (
                    0 === t
                        ? (l[c ? "scrollLeft" : "scrollTop"] = -d)
                        : l.scrollTo
                        ? l.scrollTo(
                              (((r = {})[c ? "left" : "top"] = -d),
                              (r.behavior = "smooth"),
                              r)
                          )
                        : (l[c ? "scrollLeft" : "scrollTop"] = -d),
                    !0
                );
            }
            return (
                0 === t
                    ? (n.setTransition(0),
                      n.setTranslate(d),
                      i &&
                          (n.emit("beforeTransitionStart", t, a),
                          n.emit("transitionEnd")))
                    : (n.setTransition(t),
                      n.setTranslate(d),
                      i &&
                          (n.emit("beforeTransitionStart", t, a),
                          n.emit("transitionStart")),
                      n.animating ||
                          ((n.animating = !0),
                          n.onTranslateToWrapperTransitionEnd ||
                              (n.onTranslateToWrapperTransitionEnd = function (
                                  e
                              ) {
                                  n &&
                                      !n.destroyed &&
                                      e.target === this &&
                                      (n.$wrapperEl[0].removeEventListener(
                                          "transitionend",
                                          n.onTranslateToWrapperTransitionEnd
                                      ),
                                      n.$wrapperEl[0].removeEventListener(
                                          "webkitTransitionEnd",
                                          n.onTranslateToWrapperTransitionEnd
                                      ),
                                      (n.onTranslateToWrapperTransitionEnd =
                                          null),
                                      delete n.onTranslateToWrapperTransitionEnd,
                                      i && n.emit("transitionEnd"));
                              }),
                          n.$wrapperEl[0].addEventListener(
                              "transitionend",
                              n.onTranslateToWrapperTransitionEnd
                          ),
                          n.$wrapperEl[0].addEventListener(
                              "webkitTransitionEnd",
                              n.onTranslateToWrapperTransitionEnd
                          ))),
                !0
            );
        },
    };
    var f = {
        setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.params,
                a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (
                    (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
                    this.emit("transitionStart"),
                    e && i !== a)
                ) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"),
                        "next" === r
                            ? this.emit("slideNextTransitionStart")
                            : this.emit("slidePrevTransitionStart");
                }
            }
        },
        transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.previousIndex,
                a = this.params;
            if (((this.animating = !1), !a.cssMode)) {
                this.setTransition(0);
                var r = t;
                if (
                    (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
                    this.emit("transitionEnd"),
                    e && i !== s)
                ) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"),
                        "next" === r
                            ? this.emit("slideNextTransitionEnd")
                            : this.emit("slidePrevTransitionEnd");
                }
            }
        },
    };
    var m = {
        slideTo: function (e, t, i, s) {
            var a;
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
            var r = this,
                n = e;
            n < 0 && (n = 0);
            var o = r.params,
                l = r.snapGrid,
                d = r.slidesGrid,
                h = r.previousIndex,
                p = r.activeIndex,
                c = r.rtlTranslate,
                u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n),
                f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1),
                (p || o.initialSlide || 0) === (h || 0) &&
                    i &&
                    r.emit("beforeSlideChangeStart");
            var m,
                g = -l[f];
            if ((r.updateProgress(g), o.normalizeSlideIndex))
                for (var b = 0; b < d.length; b += 1)
                    -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (
                    !r.allowSlideNext &&
                    g < r.translate &&
                    g < r.minTranslate()
                )
                    return !1;
                if (
                    !r.allowSlidePrev &&
                    g > r.translate &&
                    g > r.maxTranslate() &&
                    (p || 0) !== n
                )
                    return !1;
            }
            if (
                ((m = n > p ? "next" : n < p ? "prev" : "reset"),
                (c && -g === r.translate) || (!c && g === r.translate))
            )
                return (
                    r.updateActiveIndex(n),
                    o.autoHeight && r.updateAutoHeight(),
                    r.updateSlidesClasses(),
                    "slide" !== o.effect && r.setTranslate(g),
                    "reset" !== m &&
                        (r.transitionStart(i, m), r.transitionEnd(i, m)),
                    !1
                );
            if (o.cssMode) {
                var w = r.isHorizontal(),
                    y = -g;
                return (
                    c && (y = u.scrollWidth - u.offsetWidth - y),
                    0 === t
                        ? (u[w ? "scrollLeft" : "scrollTop"] = y)
                        : u.scrollTo
                        ? u.scrollTo(
                              (((a = {})[w ? "left" : "top"] = y),
                              (a.behavior = "smooth"),
                              a)
                          )
                        : (u[w ? "scrollLeft" : "scrollTop"] = y),
                    !0
                );
            }
            return (
                0 === t
                    ? (r.setTransition(0),
                      r.setTranslate(g),
                      r.updateActiveIndex(n),
                      r.updateSlidesClasses(),
                      r.emit("beforeTransitionStart", t, s),
                      r.transitionStart(i, m),
                      r.transitionEnd(i, m))
                    : (r.setTransition(t),
                      r.setTranslate(g),
                      r.updateActiveIndex(n),
                      r.updateSlidesClasses(),
                      r.emit("beforeTransitionStart", t, s),
                      r.transitionStart(i, m),
                      r.animating ||
                          ((r.animating = !0),
                          r.onSlideToWrapperTransitionEnd ||
                              (r.onSlideToWrapperTransitionEnd = function (e) {
                                  r &&
                                      !r.destroyed &&
                                      e.target === this &&
                                      (r.$wrapperEl[0].removeEventListener(
                                          "transitionend",
                                          r.onSlideToWrapperTransitionEnd
                                      ),
                                      r.$wrapperEl[0].removeEventListener(
                                          "webkitTransitionEnd",
                                          r.onSlideToWrapperTransitionEnd
                                      ),
                                      (r.onSlideToWrapperTransitionEnd = null),
                                      delete r.onSlideToWrapperTransitionEnd,
                                      r.transitionEnd(i, m));
                              }),
                          r.$wrapperEl[0].addEventListener(
                              "transitionend",
                              r.onSlideToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].addEventListener(
                              "webkitTransitionEnd",
                              r.onSlideToWrapperTransitionEnd
                          ))),
                !0
            );
        },
        slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
            var a = e;
            return (
                this.params.loop && (a += this.loopedSlides),
                this.slideTo(a, t, i, s)
            );
        },
        slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r =
                    this.activeIndex < s.slidesPerGroupSkip
                        ? 1
                        : s.slidesPerGroup;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(),
                    (this._clientLeft = this.$wrapperEl[0].clientLeft);
            }
            return this.slideTo(this.activeIndex + r, e, t, i);
        },
        slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.snapGrid,
                n = this.slidesGrid,
                o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(),
                    (this._clientLeft = this.$wrapperEl[0].clientLeft);
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var d,
                h = l(o ? this.translate : -this.translate),
                p = r.map(function (e) {
                    return l(e);
                }),
                c =
                    (n.map(function (e) {
                        return l(e);
                    }),
                    r[p.indexOf(h)],
                    r[p.indexOf(h) - 1]);
            return (
                void 0 === c &&
                    s.cssMode &&
                    r.forEach(function (e) {
                        !c && h >= e && (c = e);
                    }),
                void 0 !== c &&
                    (d = n.indexOf(c)) < 0 &&
                    (d = this.activeIndex - 1),
                this.slideTo(d, e, t, i)
            );
        },
        slideReset: function (e, t, i) {
            return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, i)
            );
        },
        slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === s && (s = 0.5);
            var a = this.activeIndex,
                r = Math.min(this.params.slidesPerGroupSkip, a),
                n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s &&
                    (a += this.params.slidesPerGroup);
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s &&
                    (a -= this.params.slidesPerGroup);
            }
            return (
                (a = Math.max(a, 0)),
                (a = Math.min(a, this.slidesGrid.length - 1)),
                this.slideTo(a, e, t, i)
            );
        },
        slideToClickedSlide: function () {
            var e,
                t = this,
                i = t.params,
                s = t.$wrapperEl,
                a =
                    "auto" === i.slidesPerView
                        ? t.slidesPerViewDynamic()
                        : i.slidesPerView,
                r = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                    n(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                )),
                    i.centeredSlides
                        ? r < t.loopedSlides - a / 2 ||
                          r > t.slides.length - t.loopedSlides + a / 2
                            ? (t.loopFix(),
                              (r = s
                                  .children(
                                      "." +
                                          i.slideClass +
                                          '[data-swiper-slide-index="' +
                                          e +
                                          '"]:not(.' +
                                          i.slideDuplicateClass +
                                          ")"
                                  )
                                  .eq(0)
                                  .index()),
                              d.nextTick(function () {
                                  t.slideTo(r);
                              }))
                            : t.slideTo(r)
                        : r > t.slides.length - a
                        ? (t.loopFix(),
                          (r = s
                              .children(
                                  "." +
                                      i.slideClass +
                                      '[data-swiper-slide-index="' +
                                      e +
                                      '"]:not(.' +
                                      i.slideDuplicateClass +
                                      ")"
                              )
                              .eq(0)
                              .index()),
                          d.nextTick(function () {
                              t.slideTo(r);
                          }))
                        : t.slideTo(r);
            } else t.slideTo(r);
        },
    };
    var g = {
        loopCreate: function () {
            var e = this,
                t = e.params,
                s = e.$wrapperEl;
            s.children(
                "." + t.slideClass + "." + t.slideDuplicateClass
            ).remove();
            var a = s.children("." + t.slideClass);
            if (t.loopFillGroupWithBlank) {
                var r = t.slidesPerGroup - (a.length % t.slidesPerGroup);
                if (r !== t.slidesPerGroup) {
                    for (var o = 0; o < r; o += 1) {
                        var l = n(i.createElement("div")).addClass(
                            t.slideClass + " " + t.slideBlankClass
                        );
                        s.append(l);
                    }
                    a = s.children("." + t.slideClass);
                }
            }
            "auto" !== t.slidesPerView ||
                t.loopedSlides ||
                (t.loopedSlides = a.length),
                (e.loopedSlides = Math.ceil(
                    parseFloat(t.loopedSlides || t.slidesPerView, 10)
                )),
                (e.loopedSlides += t.loopAdditionalSlides),
                e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var d = [],
                h = [];
            a.each(function (t, i) {
                var s = n(i);
                t < e.loopedSlides && h.push(i),
                    t < a.length && t >= a.length - e.loopedSlides && d.push(i),
                    s.attr("data-swiper-slide-index", t);
            });
            for (var p = 0; p < h.length; p += 1)
                s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1)
                s.prepend(
                    n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass)
                );
        },
        loopFix: function () {
            this.emit("beforeLoopFix");
            var e,
                t = this.activeIndex,
                i = this.slides,
                s = this.loopedSlides,
                a = this.allowSlidePrev,
                r = this.allowSlideNext,
                n = this.snapGrid,
                o = this.rtlTranslate;
            (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
            var l = -n[t] - this.getTranslate();
            if (t < s)
                (e = i.length - 3 * s + t),
                    (e += s),
                    this.slideTo(e, 0, !1, !0) &&
                        0 !== l &&
                        this.setTranslate(
                            (o ? -this.translate : this.translate) - l
                        );
            else if (t >= i.length - s) {
                (e = -i.length + t + s),
                    (e += s),
                    this.slideTo(e, 0, !1, !0) &&
                        0 !== l &&
                        this.setTranslate(
                            (o ? -this.translate : this.translate) - l
                        );
            }
            (this.allowSlidePrev = a),
                (this.allowSlideNext = r),
                this.emit("loopFix");
        },
        loopDestroy: function () {
            var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
            e
                .children(
                    "." +
                        t.slideClass +
                        "." +
                        t.slideDuplicateClass +
                        ",." +
                        t.slideClass +
                        "." +
                        t.slideBlankClass
                )
                .remove(),
                i.removeAttr("data-swiper-slide-index");
        },
    };
    var b = {
        setGrabCursor: function (e) {
            if (
                !(
                    h.touch ||
                    !this.params.simulateTouch ||
                    (this.params.watchOverflow && this.isLocked) ||
                    this.params.cssMode
                )
            ) {
                var t = this.el;
                (t.style.cursor = "move"),
                    (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                    (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                    (t.style.cursor = e ? "grabbing" : "grab");
            }
        },
        unsetGrabCursor: function () {
            h.touch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode ||
                (this.el.style.cursor = "");
        },
    };
    var w,
        y,
        x,
        E,
        T,
        S,
        C,
        M,
        P,
        z,
        k,
        $,
        L,
        I,
        O,
        D = {
            appendSlide: function (e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (
                    (i.loop && this.loopDestroy(),
                    "object" == typeof e && "length" in e)
                )
                    for (var s = 0; s < e.length; s += 1)
                        e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(),
                    (i.observer && h.observer) || this.update();
            },
            prependSlide: function (e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1)
                        e[r] && i.prepend(e[r]);
                    a = s + e.length;
                } else i.prepend(e);
                t.loop && this.loopCreate(),
                    (t.observer && h.observer) || this.update(),
                    this.slideTo(a, 0, !1);
            },
            addSlide: function (e, t) {
                var i = this.$wrapperEl,
                    s = this.params,
                    a = this.activeIndex;
                s.loop &&
                    ((a -= this.loopedSlides),
                    this.loopDestroy(),
                    (this.slides = i.children("." + s.slideClass)));
                var r = this.slides.length;
                if (e <= 0) this.prependSlide(t);
                else if (e >= r) this.appendSlide(t);
                else {
                    for (
                        var n = a > e ? a + 1 : a, o = [], l = r - 1;
                        l >= e;
                        l -= 1
                    ) {
                        var d = this.slides.eq(l);
                        d.remove(), o.unshift(d);
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var p = 0; p < t.length; p += 1)
                            t[p] && i.append(t[p]);
                        n = a > e ? a + t.length : a;
                    } else i.append(t);
                    for (var c = 0; c < o.length; c += 1) i.append(o[c]);
                    s.loop && this.loopCreate(),
                        (s.observer && h.observer) || this.update(),
                        s.loop
                            ? this.slideTo(n + this.loopedSlides, 0, !1)
                            : this.slideTo(n, 0, !1);
                }
            },
            removeSlide: function (e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop &&
                    ((s -= this.loopedSlides),
                    this.loopDestroy(),
                    (this.slides = i.children("." + t.slideClass)));
                var a,
                    r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1)
                        (a = e[n]),
                            this.slides[a] && this.slides.eq(a).remove(),
                            a < r && (r -= 1);
                    r = Math.max(r, 0);
                } else
                    (a = e),
                        this.slides[a] && this.slides.eq(a).remove(),
                        a < r && (r -= 1),
                        (r = Math.max(r, 0));
                t.loop && this.loopCreate(),
                    (t.observer && h.observer) || this.update(),
                    t.loop
                        ? this.slideTo(r + this.loopedSlides, 0, !1)
                        : this.slideTo(r, 0, !1);
            },
            removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1)
                    e.push(t);
                this.removeSlide(e);
            },
        },
        A =
            ((w = a.navigator.platform),
            (y = a.navigator.userAgent),
            (x = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!a.cordova && !a.phonegap),
                phonegap: !(!a.cordova && !a.phonegap),
                electron: !1,
            }),
            (E = a.screen.width),
            (T = a.screen.height),
            (S = y.match(/(Android);?[\s\/]+([\d.]+)?/)),
            (C = y.match(/(iPad).*OS\s([\d_]+)/)),
            (M = y.match(/(iPod)(.*OS\s([\d_]+))?/)),
            (P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
            (z = y.indexOf("MSIE ") >= 0 || y.indexOf("Trident/") >= 0),
            (k = y.indexOf("Edge/") >= 0),
            ($ = y.indexOf("Gecko/") >= 0 && y.indexOf("Firefox/") >= 0),
            (L = "Win32" === w),
            (I = y.toLowerCase().indexOf("electron") >= 0),
            (O = "MacIntel" === w),
            !C &&
                O &&
                h.touch &&
                ((1024 === E && 1366 === T) ||
                    (834 === E && 1194 === T) ||
                    (834 === E && 1112 === T) ||
                    (768 === E && 1024 === T)) &&
                ((C = y.match(/(Version)\/([\d.]+)/)), (O = !1)),
            (x.ie = z),
            (x.edge = k),
            (x.firefox = $),
            S &&
                !L &&
                ((x.os = "android"),
                (x.osVersion = S[2]),
                (x.android = !0),
                (x.androidChrome = y.toLowerCase().indexOf("chrome") >= 0)),
            (C || P || M) && ((x.os = "ios"), (x.ios = !0)),
            P &&
                !M &&
                ((x.osVersion = P[2].replace(/_/g, ".")), (x.iphone = !0)),
            C && ((x.osVersion = C[2].replace(/_/g, ".")), (x.ipad = !0)),
            M &&
                ((x.osVersion = M[3] ? M[3].replace(/_/g, ".") : null),
                (x.ipod = !0)),
            x.ios &&
                x.osVersion &&
                y.indexOf("Version/") >= 0 &&
                "10" === x.osVersion.split(".")[0] &&
                (x.osVersion = y
                    .toLowerCase()
                    .split("version/")[1]
                    .split(" ")[0]),
            (x.webView =
                !(
                    !(P || C || M) ||
                    (!y.match(/.*AppleWebKit(?!.*Safari)/i) &&
                        !a.navigator.standalone)
                ) ||
                (a.matchMedia &&
                    a.matchMedia("(display-mode: standalone)").matches)),
            (x.webview = x.webView),
            (x.standalone = x.webView),
            (x.desktop = !(x.ios || x.android) || I),
            x.desktop &&
                ((x.electron = I),
                (x.macos = O),
                (x.windows = L),
                x.macos && (x.os = "macos"),
                x.windows && (x.os = "windows")),
            (x.pixelRatio = a.devicePixelRatio || 1),
            x);
    function G(e) {
        var t = this.touchEventsData,
            s = this.params,
            r = this.touches;
        if (!this.animating || !s.preventInteractionOnTransition) {
            var o = e;
            o.originalEvent && (o = o.originalEvent);
            var l = n(o.target);
            if (
                ("wrapper" !== s.touchEventsTarget ||
                    l.closest(this.wrapperEl).length) &&
                ((t.isTouchEvent = "touchstart" === o.type),
                (t.isTouchEvent || !("which" in o) || 3 !== o.which) &&
                    !(
                        (!t.isTouchEvent && "button" in o && o.button > 0) ||
                        (t.isTouched && t.isMoved)
                    ))
            )
                if (
                    s.noSwiping &&
                    l.closest(
                        s.noSwipingSelector
                            ? s.noSwipingSelector
                            : "." + s.noSwipingClass
                    )[0]
                )
                    this.allowClick = !0;
                else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
                    (r.currentX =
                        "touchstart" === o.type
                            ? o.targetTouches[0].pageX
                            : o.pageX),
                        (r.currentY =
                            "touchstart" === o.type
                                ? o.targetTouches[0].pageY
                                : o.pageY);
                    var h = r.currentX,
                        p = r.currentY,
                        c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                        u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                    if (!c || !(h <= u || h >= a.screen.width - u)) {
                        if (
                            (d.extend(t, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0,
                            }),
                            (r.startX = h),
                            (r.startY = p),
                            (t.touchStartTime = d.now()),
                            (this.allowClick = !0),
                            this.updateSize(),
                            (this.swipeDirection = void 0),
                            s.threshold > 0 && (t.allowThresholdMove = !1),
                            "touchstart" !== o.type)
                        ) {
                            var v = !0;
                            l.is(t.formElements) && (v = !1),
                                i.activeElement &&
                                    n(i.activeElement).is(t.formElements) &&
                                    i.activeElement !== l[0] &&
                                    i.activeElement.blur();
                            var f =
                                v &&
                                this.allowTouchMove &&
                                s.touchStartPreventDefault;
                            (s.touchStartForcePreventDefault || f) &&
                                o.preventDefault();
                        }
                        this.emit("touchStart", o);
                    }
                }
        }
    }
    function H(e) {
        var t = this.touchEventsData,
            s = this.params,
            a = this.touches,
            r = this.rtlTranslate,
            o = e;
        if ((o.originalEvent && (o = o.originalEvent), t.isTouched)) {
            if (!t.isTouchEvent || "touchmove" === o.type) {
                var l =
                        "touchmove" === o.type &&
                        o.targetTouches &&
                        (o.targetTouches[0] || o.changedTouches[0]),
                    h = "touchmove" === o.type ? l.pageX : o.pageX,
                    p = "touchmove" === o.type ? l.pageY : o.pageY;
                if (o.preventedByNestedSwiper)
                    return (a.startX = h), void (a.startY = p);
                if (!this.allowTouchMove)
                    return (
                        (this.allowClick = !1),
                        void (
                            t.isTouched &&
                            (d.extend(a, {
                                startX: h,
                                startY: p,
                                currentX: h,
                                currentY: p,
                            }),
                            (t.touchStartTime = d.now()))
                        )
                    );
                if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (this.isVertical()) {
                        if (
                            (p < a.startY &&
                                this.translate <= this.maxTranslate()) ||
                            (p > a.startY &&
                                this.translate >= this.minTranslate())
                        )
                            return (t.isTouched = !1), void (t.isMoved = !1);
                    } else if (
                        (h < a.startX &&
                            this.translate <= this.maxTranslate()) ||
                        (h > a.startX && this.translate >= this.minTranslate())
                    )
                        return;
                if (
                    t.isTouchEvent &&
                    i.activeElement &&
                    o.target === i.activeElement &&
                    n(o.target).is(t.formElements)
                )
                    return (t.isMoved = !0), void (this.allowClick = !1);
                if (
                    (t.allowTouchCallbacks && this.emit("touchMove", o),
                    !(o.targetTouches && o.targetTouches.length > 1))
                ) {
                    (a.currentX = h), (a.currentY = p);
                    var c = a.currentX - a.startX,
                        u = a.currentY - a.startY;
                    if (
                        !(
                            this.params.threshold &&
                            Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) <
                                this.params.threshold
                        )
                    ) {
                        var v;
                        if (void 0 === t.isScrolling)
                            (this.isHorizontal() && a.currentY === a.startY) ||
                            (this.isVertical() && a.currentX === a.startX)
                                ? (t.isScrolling = !1)
                                : c * c + u * u >= 25 &&
                                  ((v =
                                      (180 *
                                          Math.atan2(
                                              Math.abs(u),
                                              Math.abs(c)
                                          )) /
                                      Math.PI),
                                  (t.isScrolling = this.isHorizontal()
                                      ? v > s.touchAngle
                                      : 90 - v > s.touchAngle));
                        if (
                            (t.isScrolling && this.emit("touchMoveOpposite", o),
                            void 0 === t.startMoving &&
                                ((a.currentX === a.startX &&
                                    a.currentY === a.startY) ||
                                    (t.startMoving = !0)),
                            t.isScrolling)
                        )
                            t.isTouched = !1;
                        else if (t.startMoving) {
                            (this.allowClick = !1),
                                !s.cssMode &&
                                    o.cancelable &&
                                    o.preventDefault(),
                                s.touchMoveStopPropagation &&
                                    !s.nested &&
                                    o.stopPropagation(),
                                t.isMoved ||
                                    (s.loop && this.loopFix(),
                                    (t.startTranslate = this.getTranslate()),
                                    this.setTransition(0),
                                    this.animating &&
                                        this.$wrapperEl.trigger(
                                            "webkitTransitionEnd transitionend"
                                        ),
                                    (t.allowMomentumBounce = !1),
                                    !s.grabCursor ||
                                        (!0 !== this.allowSlideNext &&
                                            !0 !== this.allowSlidePrev) ||
                                        this.setGrabCursor(!0),
                                    this.emit("sliderFirstMove", o)),
                                this.emit("sliderMove", o),
                                (t.isMoved = !0);
                            var f = this.isHorizontal() ? c : u;
                            (a.diff = f),
                                (f *= s.touchRatio),
                                r && (f = -f),
                                (this.swipeDirection = f > 0 ? "prev" : "next"),
                                (t.currentTranslate = f + t.startTranslate);
                            var m = !0,
                                g = s.resistanceRatio;
                            if (
                                (s.touchReleaseOnEdges && (g = 0),
                                f > 0 &&
                                t.currentTranslate > this.minTranslate()
                                    ? ((m = !1),
                                      s.resistance &&
                                          (t.currentTranslate =
                                              this.minTranslate() -
                                              1 +
                                              Math.pow(
                                                  -this.minTranslate() +
                                                      t.startTranslate +
                                                      f,
                                                  g
                                              )))
                                    : f < 0 &&
                                      t.currentTranslate <
                                          this.maxTranslate() &&
                                      ((m = !1),
                                      s.resistance &&
                                          (t.currentTranslate =
                                              this.maxTranslate() +
                                              1 -
                                              Math.pow(
                                                  this.maxTranslate() -
                                                      t.startTranslate -
                                                      f,
                                                  g
                                              ))),
                                m && (o.preventedByNestedSwiper = !0),
                                !this.allowSlideNext &&
                                    "next" === this.swipeDirection &&
                                    t.currentTranslate < t.startTranslate &&
                                    (t.currentTranslate = t.startTranslate),
                                !this.allowSlidePrev &&
                                    "prev" === this.swipeDirection &&
                                    t.currentTranslate > t.startTranslate &&
                                    (t.currentTranslate = t.startTranslate),
                                s.threshold > 0)
                            ) {
                                if (
                                    !(
                                        Math.abs(f) > s.threshold ||
                                        t.allowThresholdMove
                                    )
                                )
                                    return void (t.currentTranslate =
                                        t.startTranslate);
                                if (!t.allowThresholdMove)
                                    return (
                                        (t.allowThresholdMove = !0),
                                        (a.startX = a.currentX),
                                        (a.startY = a.currentY),
                                        (t.currentTranslate = t.startTranslate),
                                        void (a.diff = this.isHorizontal()
                                            ? a.currentX - a.startX
                                            : a.currentY - a.startY)
                                    );
                            }
                            s.followFinger &&
                                !s.cssMode &&
                                ((s.freeMode ||
                                    s.watchSlidesProgress ||
                                    s.watchSlidesVisibility) &&
                                    (this.updateActiveIndex(),
                                    this.updateSlidesClasses()),
                                s.freeMode &&
                                    (0 === t.velocities.length &&
                                        t.velocities.push({
                                            position:
                                                a[
                                                    this.isHorizontal()
                                                        ? "startX"
                                                        : "startY"
                                                ],
                                            time: t.touchStartTime,
                                        }),
                                    t.velocities.push({
                                        position:
                                            a[
                                                this.isHorizontal()
                                                    ? "currentX"
                                                    : "currentY"
                                            ],
                                        time: d.now(),
                                    })),
                                this.updateProgress(t.currentTranslate),
                                this.setTranslate(t.currentTranslate));
                        }
                    }
                }
            }
        } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o);
    }
    function B(e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            h = e;
        if (
            (h.originalEvent && (h = h.originalEvent),
            i.allowTouchCallbacks && t.emit("touchEnd", h),
            (i.allowTouchCallbacks = !1),
            !i.isTouched)
        )
            return (
                i.isMoved && s.grabCursor && t.setGrabCursor(!1),
                (i.isMoved = !1),
                void (i.startMoving = !1)
            );
        s.grabCursor &&
            i.isMoved &&
            i.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
        var p,
            c = d.now(),
            u = c - i.touchStartTime;
        if (
            (t.allowClick &&
                (t.updateClickedSlide(h),
                t.emit("tap click", h),
                u < 300 &&
                    c - i.lastClickTime < 300 &&
                    t.emit("doubleTap doubleClick", h)),
            (i.lastClickTime = d.now()),
            d.nextTick(function () {
                t.destroyed || (t.allowClick = !0);
            }),
            !i.isTouched ||
                !i.isMoved ||
                !t.swipeDirection ||
                0 === a.diff ||
                i.currentTranslate === i.startTranslate)
        )
            return (
                (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
            );
        if (
            ((i.isTouched = !1),
            (i.isMoved = !1),
            (i.startMoving = !1),
            (p = s.followFinger
                ? r
                    ? t.translate
                    : -t.translate
                : -i.currentTranslate),
            !s.cssMode)
        )
            if (s.freeMode) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                    return void (t.slides.length < l.length
                        ? t.slideTo(l.length - 1)
                        : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop(),
                            f = i.velocities.pop(),
                            m = v.position - f.position,
                            g = v.time - f.time;
                        (t.velocity = m / g),
                            (t.velocity /= 2),
                            Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                                (t.velocity = 0),
                            (g > 150 || d.now() - v.time > 300) &&
                                (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= s.freeModeMomentumVelocityRatio),
                        (i.velocities.length = 0);
                    var b = 1e3 * s.freeModeMomentumRatio,
                        w = t.velocity * b,
                        y = t.translate + w;
                    r && (y = -y);
                    var x,
                        E,
                        T = !1,
                        S =
                            20 *
                            Math.abs(t.velocity) *
                            s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        s.freeModeMomentumBounce
                            ? (y + t.maxTranslate() < -S &&
                                  (y = t.maxTranslate() - S),
                              (x = t.maxTranslate()),
                              (T = !0),
                              (i.allowMomentumBounce = !0))
                            : (y = t.maxTranslate()),
                            s.loop && s.centeredSlides && (E = !0);
                    else if (y > t.minTranslate())
                        s.freeModeMomentumBounce
                            ? (y - t.minTranslate() > S &&
                                  (y = t.minTranslate() + S),
                              (x = t.minTranslate()),
                              (T = !0),
                              (i.allowMomentumBounce = !0))
                            : (y = t.minTranslate()),
                            s.loop && s.centeredSlides && (E = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < l.length; M += 1)
                            if (l[M] > -y) {
                                C = M;
                                break;
                            }
                        y = -(y =
                            Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) ||
                            "next" === t.swipeDirection
                                ? l[C]
                                : l[C - 1]);
                    }
                    if (
                        (E &&
                            t.once("transitionEnd", function () {
                                t.loopFix();
                            }),
                        0 !== t.velocity)
                    ) {
                        if (
                            ((b = r
                                ? Math.abs((-y - t.translate) / t.velocity)
                                : Math.abs((y - t.translate) / t.velocity)),
                            s.freeModeSticky)
                        ) {
                            var P = Math.abs((r ? -y : y) - t.translate),
                                z = t.slidesSizesGrid[t.activeIndex];
                            b =
                                P < z
                                    ? s.speed
                                    : P < 2 * z
                                    ? 1.5 * s.speed
                                    : 2.5 * s.speed;
                        }
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && T
                        ? (t.updateProgress(x),
                          t.setTransition(b),
                          t.setTranslate(y),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          n.transitionEnd(function () {
                              t &&
                                  !t.destroyed &&
                                  i.allowMomentumBounce &&
                                  (t.emit("momentumBounce"),
                                  t.setTransition(s.speed),
                                  setTimeout(function () {
                                      t.setTranslate(x),
                                          n.transitionEnd(function () {
                                              t &&
                                                  !t.destroyed &&
                                                  t.transitionEnd();
                                          });
                                  }, 0));
                          }))
                        : t.velocity
                        ? (t.updateProgress(y),
                          t.setTransition(b),
                          t.setTranslate(y),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                              ((t.animating = !0),
                              n.transitionEnd(function () {
                                  t && !t.destroyed && t.transitionEnd();
                              })))
                        : t.updateProgress(y),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
            } else {
                for (
                    var k = 0, $ = t.slidesSizesGrid[0], L = 0;
                    L < o.length;
                    L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
                ) {
                    var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== o[L + I]
                        ? p >= o[L] &&
                          p < o[L + I] &&
                          ((k = L), ($ = o[L + I] - o[L]))
                        : p >= o[L] &&
                          ((k = L), ($ = o[o.length - 1] - o[o.length - 2]));
                }
                var O = (p - o[k]) / $,
                    D = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection &&
                        (O >= s.longSwipesRatio
                            ? t.slideTo(k + D)
                            : t.slideTo(k)),
                        "prev" === t.swipeDirection &&
                            (O > 1 - s.longSwipesRatio
                                ? t.slideTo(k + D)
                                : t.slideTo(k));
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation &&
                    (h.target === t.navigation.nextEl ||
                        h.target === t.navigation.prevEl)
                        ? h.target === t.navigation.nextEl
                            ? t.slideTo(k + D)
                            : t.slideTo(k)
                        : ("next" === t.swipeDirection && t.slideTo(k + D),
                          "prev" === t.swipeDirection && t.slideTo(k));
                }
            }
    }
    function N() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            (this.allowSlideNext = !0),
                (this.allowSlidePrev = !0),
                this.updateSize(),
                this.updateSlides(),
                this.updateSlidesClasses(),
                ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
                this.isEnd &&
                !this.params.centeredSlides
                    ? this.slideTo(this.slides.length - 1, 0, !1, !0)
                    : this.slideTo(this.activeIndex, 0, !1, !0),
                this.autoplay &&
                    this.autoplay.running &&
                    this.autoplay.paused &&
                    this.autoplay.run(),
                (this.allowSlidePrev = s),
                (this.allowSlideNext = i),
                this.params.watchOverflow &&
                    a !== this.snapGrid &&
                    this.checkOverflow();
        }
    }
    function X(e) {
        this.allowClick ||
            (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation &&
                this.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
    }
    function V() {
        var e = this.wrapperEl,
            t = this.rtlTranslate;
        (this.previousTranslate = this.translate),
            this.isHorizontal()
                ? (this.translate = t
                      ? e.scrollWidth - e.offsetWidth - e.scrollLeft
                      : -e.scrollLeft)
                : (this.translate = -e.scrollTop),
            -0 === this.translate && (this.translate = 0),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
            this.progress &&
            this.updateProgress(t ? -this.translate : this.translate),
            this.emit("setTranslate", this.translate, !1);
    }
    var Y = !1;
    function F() {}
    var W = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
        },
        R = {
            update: u,
            translate: v,
            transition: f,
            slide: m,
            loop: g,
            grabCursor: b,
            manipulation: D,
            events: {
                attachEvents: function () {
                    var e = this.params,
                        t = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl;
                    (this.onTouchStart = G.bind(this)),
                        (this.onTouchMove = H.bind(this)),
                        (this.onTouchEnd = B.bind(this)),
                        e.cssMode && (this.onScroll = V.bind(this)),
                        (this.onClick = X.bind(this));
                    var r = !!e.nested;
                    if (!h.touch && h.pointerEvents)
                        s.addEventListener(t.start, this.onTouchStart, !1),
                            i.addEventListener(t.move, this.onTouchMove, r),
                            i.addEventListener(t.end, this.onTouchEnd, !1);
                    else {
                        if (h.touch) {
                            var n = !(
                                "touchstart" !== t.start ||
                                !h.passiveListener ||
                                !e.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            s.addEventListener(t.start, this.onTouchStart, n),
                                s.addEventListener(
                                    t.move,
                                    this.onTouchMove,
                                    h.passiveListener
                                        ? { passive: !1, capture: r }
                                        : r
                                ),
                                s.addEventListener(t.end, this.onTouchEnd, n),
                                t.cancel &&
                                    s.addEventListener(
                                        t.cancel,
                                        this.onTouchEnd,
                                        n
                                    ),
                                Y ||
                                    (i.addEventListener("touchstart", F),
                                    (Y = !0));
                        }
                        ((e.simulateTouch && !A.ios && !A.android) ||
                            (e.simulateTouch && !h.touch && A.ios)) &&
                            (s.addEventListener(
                                "mousedown",
                                this.onTouchStart,
                                !1
                            ),
                            i.addEventListener(
                                "mousemove",
                                this.onTouchMove,
                                r
                            ),
                            i.addEventListener("mouseup", this.onTouchEnd, !1));
                    }
                    (e.preventClicks || e.preventClicksPropagation) &&
                        s.addEventListener("click", this.onClick, !0),
                        e.cssMode &&
                            a.addEventListener("scroll", this.onScroll),
                        e.updateOnWindowResize
                            ? this.on(
                                  A.ios || A.android
                                      ? "resize orientationchange observerUpdate"
                                      : "resize observerUpdate",
                                  N,
                                  !0
                              )
                            : this.on("observerUpdate", N, !0);
                },
                detachEvents: function () {
                    var e = this.params,
                        t = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        r = !!e.nested;
                    if (!h.touch && h.pointerEvents)
                        s.removeEventListener(t.start, this.onTouchStart, !1),
                            i.removeEventListener(t.move, this.onTouchMove, r),
                            i.removeEventListener(t.end, this.onTouchEnd, !1);
                    else {
                        if (h.touch) {
                            var n = !(
                                "onTouchStart" !== t.start ||
                                !h.passiveListener ||
                                !e.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            s.removeEventListener(
                                t.start,
                                this.onTouchStart,
                                n
                            ),
                                s.removeEventListener(
                                    t.move,
                                    this.onTouchMove,
                                    r
                                ),
                                s.removeEventListener(
                                    t.end,
                                    this.onTouchEnd,
                                    n
                                ),
                                t.cancel &&
                                    s.removeEventListener(
                                        t.cancel,
                                        this.onTouchEnd,
                                        n
                                    );
                        }
                        ((e.simulateTouch && !A.ios && !A.android) ||
                            (e.simulateTouch && !h.touch && A.ios)) &&
                            (s.removeEventListener(
                                "mousedown",
                                this.onTouchStart,
                                !1
                            ),
                            i.removeEventListener(
                                "mousemove",
                                this.onTouchMove,
                                r
                            ),
                            i.removeEventListener(
                                "mouseup",
                                this.onTouchEnd,
                                !1
                            ));
                    }
                    (e.preventClicks || e.preventClicksPropagation) &&
                        s.removeEventListener("click", this.onClick, !0),
                        e.cssMode &&
                            a.removeEventListener("scroll", this.onScroll),
                        this.off(
                            A.ios || A.android
                                ? "resize orientationchange observerUpdate"
                                : "resize observerUpdate",
                            N
                        );
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = this.params,
                        a = this.$el,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var n = this.getBreakpoint(r);
                        if (n && this.currentBreakpoint !== n) {
                            var o = n in r ? r[n] : void 0;
                            o &&
                                [
                                    "slidesPerView",
                                    "spaceBetween",
                                    "slidesPerGroup",
                                    "slidesPerGroupSkip",
                                    "slidesPerColumn",
                                ].forEach(function (e) {
                                    var t = o[e];
                                    void 0 !== t &&
                                        (o[e] =
                                            "slidesPerView" !== e ||
                                            ("AUTO" !== t && "auto" !== t)
                                                ? "slidesPerView" === e
                                                    ? parseFloat(t)
                                                    : parseInt(t, 10)
                                                : "auto");
                                });
                            var l = o || this.originalParams,
                                h = s.slidesPerColumn > 1,
                                p = l.slidesPerColumn > 1;
                            h && !p
                                ? a.removeClass(
                                      s.containerModifierClass +
                                          "multirow " +
                                          s.containerModifierClass +
                                          "multirow-column"
                                  )
                                : !h &&
                                  p &&
                                  (a.addClass(
                                      s.containerModifierClass + "multirow"
                                  ),
                                  "column" === l.slidesPerColumnFill &&
                                      a.addClass(
                                          s.containerModifierClass +
                                              "multirow-column"
                                      ));
                            var c = l.direction && l.direction !== s.direction,
                                u =
                                    s.loop &&
                                    (l.slidesPerView !== s.slidesPerView || c);
                            c && t && this.changeDirection(),
                                d.extend(this.params, l),
                                d.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev,
                                }),
                                (this.currentBreakpoint = n),
                                u &&
                                    t &&
                                    (this.loopDestroy(),
                                    this.loopCreate(),
                                    this.updateSlides(),
                                    this.slideTo(
                                        e - i + this.loopedSlides,
                                        0,
                                        !1
                                    )),
                                this.emit("breakpoint", l);
                        }
                    }
                },
                getBreakpoint: function (e) {
                    if (e) {
                        var t = !1,
                            i = Object.keys(e).map(function (e) {
                                if (
                                    "string" == typeof e &&
                                    0 === e.indexOf("@")
                                ) {
                                    var t = parseFloat(e.substr(1));
                                    return {
                                        value: a.innerHeight * t,
                                        point: e,
                                    };
                                }
                                return { value: e, point: e };
                            });
                        i.sort(function (e, t) {
                            return (
                                parseInt(e.value, 10) - parseInt(t.value, 10)
                            );
                        });
                        for (var s = 0; s < i.length; s += 1) {
                            var r = i[s],
                                n = r.point;
                            r.value <= a.innerWidth && (t = n);
                        }
                        return t || "max";
                    }
                },
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.params,
                        t = this.isLocked,
                        i =
                            this.slides.length > 0 &&
                            e.slidesOffsetBefore +
                                e.spaceBetween * (this.slides.length - 1) +
                                this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i
                        ? (this.isLocked = i <= this.size)
                        : (this.isLocked = 1 === this.snapGrid.length),
                        (this.allowSlideNext = !this.isLocked),
                        (this.allowSlidePrev = !this.isLocked),
                        t !== this.isLocked &&
                            this.emit(this.isLocked ? "lock" : "unlock"),
                        t &&
                            t !== this.isLocked &&
                            ((this.isEnd = !1), this.navigation.update());
                },
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push("initialized"),
                        a.push(t.direction),
                        t.freeMode && a.push("free-mode"),
                        t.autoHeight && a.push("autoheight"),
                        i && a.push("rtl"),
                        t.slidesPerColumn > 1 &&
                            (a.push("multirow"),
                            "column" === t.slidesPerColumnFill &&
                                a.push("multirow-column")),
                        A.android && a.push("android"),
                        A.ios && a.push("ios"),
                        t.cssMode && a.push("css-mode"),
                        a.forEach(function (i) {
                            e.push(t.containerModifierClass + i);
                        }),
                        s.addClass(e.join(" "));
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "));
                },
            },
            images: {
                loadImage: function (e, t, i, s, r, o) {
                    var l;
                    function d() {
                        o && o();
                    }
                    n(e).parent("picture")[0] || (e.complete && r)
                        ? d()
                        : t
                        ? (((l = new a.Image()).onload = d),
                          (l.onerror = d),
                          s && (l.sizes = s),
                          i && (l.srcset = i),
                          t && (l.src = t))
                        : d();
                },
                preloadImages: function () {
                    var e = this;
                    function t() {
                        null != e &&
                            e &&
                            !e.destroyed &&
                            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                            e.imagesLoaded === e.imagesToLoad.length &&
                                (e.params.updateOnImagesReady && e.update(),
                                e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(
                            s,
                            s.currentSrc || s.getAttribute("src"),
                            s.srcset || s.getAttribute("srcset"),
                            s.sizes || s.getAttribute("sizes"),
                            !0,
                            t
                        );
                    }
                },
            },
        },
        q = {},
        j = (function (e) {
            function t() {
                for (var i, s, a, r = [], o = arguments.length; o--; )
                    r[o] = arguments[o];
                1 === r.length &&
                r[0].constructor &&
                r[0].constructor === Object
                    ? (a = r[0])
                    : ((s = (i = r)[0]), (a = i[1])),
                    a || (a = {}),
                    (a = d.extend({}, a)),
                    s && !a.el && (a.el = s),
                    e.call(this, a),
                    Object.keys(R).forEach(function (e) {
                        Object.keys(R[e]).forEach(function (i) {
                            t.prototype[i] || (t.prototype[i] = R[e][i]);
                        });
                    });
                var l = this;
                void 0 === l.modules && (l.modules = {}),
                    Object.keys(l.modules).forEach(function (e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                s = t.params[i];
                            if ("object" != typeof s || null === s) return;
                            if (!(i in a) || !("enabled" in s)) return;
                            !0 === a[i] && (a[i] = { enabled: !0 }),
                                "object" != typeof a[i] ||
                                    "enabled" in a[i] ||
                                    (a[i].enabled = !0),
                                a[i] || (a[i] = { enabled: !1 });
                        }
                    });
                var p = d.extend({}, W);
                l.useModulesParams(p),
                    (l.params = d.extend({}, p, q, a)),
                    (l.originalParams = d.extend({}, l.params)),
                    (l.passedParams = d.extend({}, a)),
                    (l.$ = n);
                var c = n(l.params.el);
                if ((s = c[0])) {
                    if (c.length > 1) {
                        var u = [];
                        return (
                            c.each(function (e, i) {
                                var s = d.extend({}, a, { el: i });
                                u.push(new t(s));
                            }),
                            u
                        );
                    }
                    var v, f, m;
                    return (
                        (s.swiper = l),
                        c.data("swiper", l),
                        s && s.shadowRoot && s.shadowRoot.querySelector
                            ? ((v = n(
                                  s.shadowRoot.querySelector(
                                      "." + l.params.wrapperClass
                                  )
                              )).children = function (e) {
                                  return c.children(e);
                              })
                            : (v = c.children("." + l.params.wrapperClass)),
                        d.extend(l, {
                            $el: c,
                            el: s,
                            $wrapperEl: v,
                            wrapperEl: v[0],
                            classNames: [],
                            slides: n(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === l.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === l.params.direction;
                            },
                            rtl:
                                "rtl" === s.dir.toLowerCase() ||
                                "rtl" === c.css("direction"),
                            rtlTranslate:
                                "horizontal" === l.params.direction &&
                                ("rtl" === s.dir.toLowerCase() ||
                                    "rtl" === c.css("direction")),
                            wrongRTL: "-webkit-box" === v.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents:
                                ((f = [
                                    "touchstart",
                                    "touchmove",
                                    "touchend",
                                    "touchcancel",
                                ]),
                                (m = ["mousedown", "mousemove", "mouseup"]),
                                h.pointerEvents &&
                                    (m = [
                                        "pointerdown",
                                        "pointermove",
                                        "pointerup",
                                    ]),
                                (l.touchEventsTouch = {
                                    start: f[0],
                                    move: f[1],
                                    end: f[2],
                                    cancel: f[3],
                                }),
                                (l.touchEventsDesktop = {
                                    start: m[0],
                                    move: m[1],
                                    end: m[2],
                                }),
                                h.touch || !l.params.simulateTouch
                                    ? l.touchEventsTouch
                                    : l.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements:
                                    "input, select, option, textarea, button, video, label",
                                lastClickTime: d.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0,
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        l.useModules(),
                        l.params.init && l.init(),
                        l
                    );
                }
            }
            e && (t.__proto__ = e),
                (t.prototype = Object.create(e && e.prototype)),
                (t.prototype.constructor = t);
            var i = {
                extendedDefaults: { configurable: !0 },
                defaults: { configurable: !0 },
                Class: { configurable: !0 },
                $: { configurable: !0 },
            };
            return (
                (t.prototype.slidesPerViewDynamic = function () {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        a = this.activeIndex,
                        r = 1;
                    if (e.centeredSlides) {
                        for (
                            var n, o = t[a].swiperSlideSize, l = a + 1;
                            l < t.length;
                            l += 1
                        )
                            t[l] &&
                                !n &&
                                ((r += 1),
                                (o += t[l].swiperSlideSize) > s && (n = !0));
                        for (var d = a - 1; d >= 0; d -= 1)
                            t[d] &&
                                !n &&
                                ((r += 1),
                                (o += t[d].swiperSlideSize) > s && (n = !0));
                    } else
                        for (var h = a + 1; h < t.length; h += 1)
                            i[h] - i[a] < s && (r += 1);
                    return r;
                }),
                (t.prototype.update = function () {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            e.params.freeMode
                                ? (s(),
                                  e.params.autoHeight && e.updateAutoHeight())
                                : (("auto" === e.params.slidesPerView ||
                                      e.params.slidesPerView > 1) &&
                                  e.isEnd &&
                                  !e.params.centeredSlides
                                      ? e.slideTo(
                                            e.slides.length - 1,
                                            0,
                                            !1,
                                            !0
                                        )
                                      : e.slideTo(e.activeIndex, 0, !1, !0)) ||
                                  s(),
                            i.watchOverflow &&
                                t !== e.snapGrid &&
                                e.checkOverflow(),
                            e.emit("update");
                    }
                    function s() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(
                                Math.max(t, e.maxTranslate()),
                                e.minTranslate()
                            );
                        e.setTranslate(i),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses();
                    }
                }),
                (t.prototype.changeDirection = function (e, t) {
                    void 0 === t && (t = !0);
                    var i = this.params.direction;
                    return (
                        e ||
                            (e =
                                "horizontal" === i ? "vertical" : "horizontal"),
                        e === i ||
                            ("horizontal" !== e && "vertical" !== e) ||
                            (this.$el
                                .removeClass(
                                    "" + this.params.containerModifierClass + i
                                )
                                .addClass(
                                    "" + this.params.containerModifierClass + e
                                ),
                            (this.params.direction = e),
                            this.slides.each(function (t, i) {
                                "vertical" === e
                                    ? (i.style.width = "")
                                    : (i.style.height = "");
                            }),
                            this.emit("changeDirection"),
                            t && this.update()),
                        this
                    );
                }),
                (t.prototype.init = function () {
                    this.initialized ||
                        (this.emit("beforeInit"),
                        this.params.breakpoints && this.setBreakpoint(),
                        this.addClasses(),
                        this.params.loop && this.loopCreate(),
                        this.updateSize(),
                        this.updateSlides(),
                        this.params.watchOverflow && this.checkOverflow(),
                        this.params.grabCursor && this.setGrabCursor(),
                        this.params.preloadImages && this.preloadImages(),
                        this.params.loop
                            ? this.slideTo(
                                  this.params.initialSlide + this.loopedSlides,
                                  0,
                                  this.params.runCallbacksOnInit
                              )
                            : this.slideTo(
                                  this.params.initialSlide,
                                  0,
                                  this.params.runCallbacksOnInit
                              ),
                        this.attachEvents(),
                        (this.initialized = !0),
                        this.emit("init"));
                }),
                (t.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        a = i.$el,
                        r = i.$wrapperEl,
                        n = i.slides;
                    return (
                        void 0 === i.params ||
                            i.destroyed ||
                            (i.emit("beforeDestroy"),
                            (i.initialized = !1),
                            i.detachEvents(),
                            s.loop && i.loopDestroy(),
                            t &&
                                (i.removeClasses(),
                                a.removeAttr("style"),
                                r.removeAttr("style"),
                                n &&
                                    n.length &&
                                    n
                                        .removeClass(
                                            [
                                                s.slideVisibleClass,
                                                s.slideActiveClass,
                                                s.slideNextClass,
                                                s.slidePrevClass,
                                            ].join(" ")
                                        )
                                        .removeAttr("style")
                                        .removeAttr("data-swiper-slide-index")),
                            i.emit("destroy"),
                            Object.keys(i.eventsListeners).forEach(function (
                                e
                            ) {
                                i.off(e);
                            }),
                            !1 !== e &&
                                ((i.$el[0].swiper = null),
                                i.$el.data("swiper", null),
                                d.deleteProps(i)),
                            (i.destroyed = !0)),
                        null
                    );
                }),
                (t.extendDefaults = function (e) {
                    d.extend(q, e);
                }),
                (i.extendedDefaults.get = function () {
                    return q;
                }),
                (i.defaults.get = function () {
                    return W;
                }),
                (i.Class.get = function () {
                    return e;
                }),
                (i.$.get = function () {
                    return n;
                }),
                Object.defineProperties(t, i),
                t
            );
        })(p),
        K = { name: "device", proto: { device: A }, static: { device: A } },
        U = { name: "support", proto: { support: h }, static: { support: h } },
        _ = {
            isEdge: !!a.navigator.userAgent.match(/Edge/g),
            isSafari: (function () {
                var e = a.navigator.userAgent.toLowerCase();
                return (
                    e.indexOf("safari") >= 0 &&
                    e.indexOf("chrome") < 0 &&
                    e.indexOf("android") < 0
                );
            })(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                a.navigator.userAgent
            ),
        },
        Z = { name: "browser", proto: { browser: _ }, static: { browser: _ } },
        Q = {
            name: "resize",
            create: function () {
                var e = this;
                d.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function () {
                    a.addEventListener("resize", this.resize.resizeHandler),
                        a.addEventListener(
                            "orientationchange",
                            this.resize.orientationChangeHandler
                        );
                },
                destroy: function () {
                    a.removeEventListener("resize", this.resize.resizeHandler),
                        a.removeEventListener(
                            "orientationchange",
                            this.resize.orientationChangeHandler
                        );
                },
            },
        },
        J = {
            func: a.MutationObserver || a.WebkitMutationObserver,
            attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this,
                    s = new (0, J.func)(function (e) {
                        if (1 !== e.length) {
                            var t = function () {
                                i.emit("observerUpdate", e[0]);
                            };
                            a.requestAnimationFrame
                                ? a.requestAnimationFrame(t)
                                : a.setTimeout(t, 0);
                        } else i.emit("observerUpdate", e[0]);
                    });
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData:
                        void 0 === t.characterData || t.characterData,
                }),
                    i.observer.observers.push(s);
            },
            init: function () {
                if (h.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (
                            var e = this.$el.parents(), t = 0;
                            t < e.length;
                            t += 1
                        )
                            this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren,
                    }),
                        this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1,
                        });
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        ee = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1,
            },
            create: function () {
                d.extend(this, {
                    observer: {
                        init: J.init.bind(this),
                        attach: J.attach.bind(this),
                        destroy: J.destroy.bind(this),
                        observers: [],
                    },
                });
            },
            on: {
                init: function () {
                    this.observer.init();
                },
                destroy: function () {
                    this.observer.destroy();
                },
            },
        },
        te = {
            update: function (e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    h = t.virtual,
                    p = h.from,
                    c = h.to,
                    u = h.slides,
                    v = h.slidesGrid,
                    f = h.renderSlide,
                    m = h.offset;
                t.updateActiveIndex();
                var g,
                    b,
                    w,
                    y = t.activeIndex || 0;
                (g = t.rtlTranslate
                    ? "right"
                    : t.isHorizontal()
                    ? "left"
                    : "top"),
                    r
                        ? ((b = Math.floor(s / 2) + a + o),
                          (w = Math.floor(s / 2) + a + l))
                        : ((b = s + (a - 1) + o), (w = a + l));
                var x = Math.max((y || 0) - w, 0),
                    E = Math.min((y || 0) + b, u.length - 1),
                    T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
                function S() {
                    t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                        t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if (
                    (d.extend(t.virtual, {
                        from: x,
                        to: E,
                        offset: T,
                        slidesGrid: t.slidesGrid,
                    }),
                    p === x && c === E && !e)
                )
                    return (
                        t.slidesGrid !== v &&
                            T !== m &&
                            t.slides.css(g, T + "px"),
                        void t.updateProgress()
                    );
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: T,
                            from: x,
                            to: E,
                            slides: (function () {
                                for (var e = [], t = x; t <= E; t += 1)
                                    e.push(u[t]);
                                return e;
                            })(),
                        }),
                        void S()
                    );
                var C = [],
                    M = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var P = p; P <= c; P += 1)
                        (P < x || P > E) &&
                            t.$wrapperEl
                                .find(
                                    "." +
                                        t.params.slideClass +
                                        '[data-swiper-slide-index="' +
                                        P +
                                        '"]'
                                )
                                .remove();
                for (var z = 0; z < u.length; z += 1)
                    z >= x &&
                        z <= E &&
                        (void 0 === c || e
                            ? M.push(z)
                            : (z > c && M.push(z), z < p && C.push(z)));
                M.forEach(function (e) {
                    t.$wrapperEl.append(f(u[e], e));
                }),
                    C.sort(function (e, t) {
                        return t - e;
                    }).forEach(function (e) {
                        t.$wrapperEl.prepend(f(u[e], e));
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(g, T + "px"),
                    S();
            },
            renderSlide: function (e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t])
                    return this.virtual.cache[t];
                var s = i.renderSlide
                    ? n(i.renderSlide.call(this, e, t))
                    : n(
                          '<div class="' +
                              this.params.slideClass +
                              '" data-swiper-slide-index="' +
                              t +
                              '">' +
                              e +
                              "</div>"
                      );
                return (
                    s.attr("data-swiper-slide-index") ||
                        s.attr("data-swiper-slide-index", t),
                    i.cache && (this.virtual.cache[t] = s),
                    s
                );
            },
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1)
                        e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0);
            },
            prependSlide: function (e) {
                var t = this.activeIndex,
                    i = t + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1)
                        e[a] && this.virtual.slides.unshift(e[a]);
                    (i = t + e.length), (s = e.length);
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var r = this.virtual.cache,
                        n = {};
                    Object.keys(r).forEach(function (e) {
                        var t = r[e],
                            i = t.attr("data-swiper-slide-index");
                        i &&
                            t.attr(
                                "data-swiper-slide-index",
                                parseInt(i, 10) + 1
                            ),
                            (n[parseInt(e, 10) + s] = t);
                    }),
                        (this.virtual.cache = n);
                }
                this.virtual.update(!0), this.slideTo(i, 0);
            },
            removeSlide: function (e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1)
                            this.virtual.slides.splice(e[i], 1),
                                this.params.virtual.cache &&
                                    delete this.virtual.cache[e[i]],
                                e[i] < t && (t -= 1),
                                (t = Math.max(t, 0));
                    else
                        this.virtual.slides.splice(e, 1),
                            this.params.virtual.cache &&
                                delete this.virtual.cache[e],
                            e < t && (t -= 1),
                            (t = Math.max(t, 0));
                    this.virtual.update(!0), this.slideTo(t, 0);
                }
            },
            removeAllSlides: function () {
                (this.virtual.slides = []),
                    this.params.virtual.cache && (this.virtual.cache = {}),
                    this.virtual.update(!0),
                    this.slideTo(0, 0);
            },
        },
        ie = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0,
                },
            },
            create: function () {
                d.extend(this, {
                    virtual: {
                        update: te.update.bind(this),
                        appendSlide: te.appendSlide.bind(this),
                        prependSlide: te.prependSlide.bind(this),
                        removeSlide: te.removeSlide.bind(this),
                        removeAllSlides: te.removeAllSlides.bind(this),
                        renderSlide: te.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {},
                    },
                });
            },
            on: {
                beforeInit: function () {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(
                            this.params.containerModifierClass + "virtual"
                        );
                        var e = { watchSlidesProgress: !0 };
                        d.extend(this.params, e),
                            d.extend(this.originalParams, e),
                            this.params.initialSlide || this.virtual.update();
                    }
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update();
                },
            },
        },
        se = {
            handle: function (e) {
                var t = this.rtlTranslate,
                    s = e;
                s.originalEvent && (s = s.originalEvent);
                var r = s.keyCode || s.charCode;
                if (
                    !this.allowSlideNext &&
                    ((this.isHorizontal() && 39 === r) ||
                        (this.isVertical() && 40 === r) ||
                        34 === r)
                )
                    return !1;
                if (
                    !this.allowSlidePrev &&
                    ((this.isHorizontal() && 37 === r) ||
                        (this.isVertical() && 38 === r) ||
                        33 === r)
                )
                    return !1;
                if (
                    !(
                        s.shiftKey ||
                        s.altKey ||
                        s.ctrlKey ||
                        s.metaKey ||
                        (i.activeElement &&
                            i.activeElement.nodeName &&
                            ("input" ===
                                i.activeElement.nodeName.toLowerCase() ||
                                "textarea" ===
                                    i.activeElement.nodeName.toLowerCase()))
                    )
                ) {
                    if (
                        this.params.keyboard.onlyInViewport &&
                        (33 === r ||
                            34 === r ||
                            37 === r ||
                            39 === r ||
                            38 === r ||
                            40 === r)
                    ) {
                        var n = !1;
                        if (
                            this.$el.parents("." + this.params.slideClass)
                                .length > 0 &&
                            0 ===
                                this.$el.parents(
                                    "." + this.params.slideActiveClass
                                ).length
                        )
                            return;
                        var o = a.innerWidth,
                            l = a.innerHeight,
                            d = this.$el.offset();
                        t && (d.left -= this.$el[0].scrollLeft);
                        for (
                            var h = [
                                    [d.left, d.top],
                                    [d.left + this.width, d.top],
                                    [d.left, d.top + this.height],
                                    [d.left + this.width, d.top + this.height],
                                ],
                                p = 0;
                            p < h.length;
                            p += 1
                        ) {
                            var c = h[p];
                            c[0] >= 0 &&
                                c[0] <= o &&
                                c[1] >= 0 &&
                                c[1] <= l &&
                                (n = !0);
                        }
                        if (!n) return;
                    }
                    this.isHorizontal()
                        ? ((33 !== r && 34 !== r && 37 !== r && 39 !== r) ||
                              (s.preventDefault
                                  ? s.preventDefault()
                                  : (s.returnValue = !1)),
                          (((34 !== r && 39 !== r) || t) &&
                              ((33 !== r && 37 !== r) || !t)) ||
                              this.slideNext(),
                          (((33 !== r && 37 !== r) || t) &&
                              ((34 !== r && 39 !== r) || !t)) ||
                              this.slidePrev())
                        : ((33 !== r && 34 !== r && 38 !== r && 40 !== r) ||
                              (s.preventDefault
                                  ? s.preventDefault()
                                  : (s.returnValue = !1)),
                          (34 !== r && 40 !== r) || this.slideNext(),
                          (33 !== r && 38 !== r) || this.slidePrev()),
                        this.emit("keyPress", r);
                }
            },
            enable: function () {
                this.keyboard.enabled ||
                    (n(i).on("keydown", this.keyboard.handle),
                    (this.keyboard.enabled = !0));
            },
            disable: function () {
                this.keyboard.enabled &&
                    (n(i).off("keydown", this.keyboard.handle),
                    (this.keyboard.enabled = !1));
            },
        },
        ae = {
            name: "keyboard",
            params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
            create: function () {
                d.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: se.enable.bind(this),
                        disable: se.disable.bind(this),
                        handle: se.handle.bind(this),
                    },
                });
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable();
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable();
                },
            },
        };
    var re = {
            lastScrollTime: d.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function () {
                return a.navigator.userAgent.indexOf("firefox") > -1
                    ? "DOMMouseScroll"
                    : (function () {
                          var e = "onwheel" in i;
                          if (!e) {
                              var t = i.createElement("div");
                              t.setAttribute("onwheel", "return;"),
                                  (e = "function" == typeof t.onwheel);
                          }
                          return (
                              !e &&
                                  i.implementation &&
                                  i.implementation.hasFeature &&
                                  !0 !== i.implementation.hasFeature("", "") &&
                                  (e = i.implementation.hasFeature(
                                      "Events.wheel",
                                      "3.0"
                                  )),
                              e
                          );
                      })()
                    ? "wheel"
                    : "mousewheel";
            },
            normalize: function (e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return (
                    "detail" in e && (i = e.detail),
                    "wheelDelta" in e && (i = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                        e.axis === e.HORIZONTAL_AXIS &&
                        ((t = i), (i = 0)),
                    (s = 10 * t),
                    (a = 10 * i),
                    "deltaY" in e && (a = e.deltaY),
                    "deltaX" in e && (s = e.deltaX),
                    e.shiftKey && !s && ((s = a), (a = 0)),
                    (s || a) &&
                        e.deltaMode &&
                        (1 === e.deltaMode
                            ? ((s *= 40), (a *= 40))
                            : ((s *= 800), (a *= 800))),
                    s && !t && (t = s < 1 ? -1 : 1),
                    a && !i && (i = a < 1 ? -1 : 1),
                    { spinX: t, spinY: i, pixelX: s, pixelY: a }
                );
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0;
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1;
            },
            handle: function (e) {
                var t = e,
                    i = this,
                    s = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var a = i.$el;
                if (
                    ("container" !== i.params.mousewheel.eventsTarged &&
                        (a = n(i.params.mousewheel.eventsTarged)),
                    !i.mouseEntered &&
                        !a[0].contains(t.target) &&
                        !s.releaseOnEdges)
                )
                    return !0;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    o = i.rtlTranslate ? -1 : 1,
                    l = re.normalize(t);
                if (s.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                            return !0;
                        r = l.pixelX * o;
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                            return !0;
                        r = l.pixelY;
                    }
                else
                    r =
                        Math.abs(l.pixelX) > Math.abs(l.pixelY)
                            ? -l.pixelX * o
                            : -l.pixelY;
                if (0 === r) return !0;
                if ((s.invert && (r = -r), i.params.freeMode)) {
                    var h = {
                            time: d.now(),
                            delta: Math.abs(r),
                            direction: Math.sign(r),
                        },
                        p = i.mousewheel.lastEventBeforeSnap,
                        c =
                            p &&
                            h.time < p.time + 500 &&
                            h.delta <= p.delta &&
                            h.direction === p.direction;
                    if (!c) {
                        (i.mousewheel.lastEventBeforeSnap = void 0),
                            i.params.loop && i.loopFix();
                        var u = i.getTranslate() + r * s.sensitivity,
                            v = i.isBeginning,
                            f = i.isEnd;
                        if (
                            (u >= i.minTranslate() && (u = i.minTranslate()),
                            u <= i.maxTranslate() && (u = i.maxTranslate()),
                            i.setTransition(0),
                            i.setTranslate(u),
                            i.updateProgress(),
                            i.updateActiveIndex(),
                            i.updateSlidesClasses(),
                            ((!v && i.isBeginning) || (!f && i.isEnd)) &&
                                i.updateSlidesClasses(),
                            i.params.freeModeSticky)
                        ) {
                            clearTimeout(i.mousewheel.timeout),
                                (i.mousewheel.timeout = void 0);
                            var m = i.mousewheel.recentWheelEvents;
                            m.length >= 15 && m.shift();
                            var g = m.length ? m[m.length - 1] : void 0,
                                b = m[0];
                            if (
                                (m.push(h),
                                g &&
                                    (h.delta > g.delta ||
                                        h.direction !== g.direction))
                            )
                                m.splice(0);
                            else if (
                                m.length >= 15 &&
                                h.time - b.time < 500 &&
                                b.delta - h.delta >= 1 &&
                                h.delta <= 6
                            ) {
                                var w = r > 0 ? 0.8 : 0.2;
                                (i.mousewheel.lastEventBeforeSnap = h),
                                    m.splice(0),
                                    (i.mousewheel.timeout = d.nextTick(
                                        function () {
                                            i.slideToClosest(
                                                i.params.speed,
                                                !0,
                                                void 0,
                                                w
                                            );
                                        },
                                        0
                                    ));
                            }
                            i.mousewheel.timeout ||
                                (i.mousewheel.timeout = d.nextTick(function () {
                                    (i.mousewheel.lastEventBeforeSnap = h),
                                        m.splice(0),
                                        i.slideToClosest(
                                            i.params.speed,
                                            !0,
                                            void 0,
                                            0.5
                                        );
                                }, 500));
                        }
                        if (
                            (c || i.emit("scroll", t),
                            i.params.autoplay &&
                                i.params.autoplayDisableOnInteraction &&
                                i.autoplay.stop(),
                            u === i.minTranslate() || u === i.maxTranslate())
                        )
                            return !0;
                    }
                } else {
                    var y = {
                            time: d.now(),
                            delta: Math.abs(r),
                            direction: Math.sign(r),
                            raw: e,
                        },
                        x = i.mousewheel.recentWheelEvents;
                    x.length >= 2 && x.shift();
                    var E = x.length ? x[x.length - 1] : void 0;
                    if (
                        (x.push(y),
                        E
                            ? (y.direction !== E.direction ||
                                  y.delta > E.delta ||
                                  y.time > E.time + 150) &&
                              i.mousewheel.animateSlider(y)
                            : i.mousewheel.animateSlider(y),
                        i.mousewheel.releaseScroll(y))
                    )
                        return !0;
                }
                return (
                    t.preventDefault
                        ? t.preventDefault()
                        : (t.returnValue = !1),
                    !1
                );
            },
            animateSlider: function (e) {
                return (
                    (e.delta >= 6 &&
                        d.now() - this.mousewheel.lastScrollTime < 60) ||
                    (e.direction < 0
                        ? (this.isEnd && !this.params.loop) ||
                          this.animating ||
                          (this.slideNext(), this.emit("scroll", e.raw))
                        : (this.isBeginning && !this.params.loop) ||
                          this.animating ||
                          (this.slidePrev(), this.emit("scroll", e.raw)),
                    (this.mousewheel.lastScrollTime = new a.Date().getTime()),
                    !1)
                );
            },
            releaseScroll: function (e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                        return !0;
                } else if (
                    this.isBeginning &&
                    !this.params.loop &&
                    t.releaseOnEdges
                )
                    return !0;
                return !1;
            },
            enable: function () {
                var e = re.event();
                if (this.params.cssMode)
                    return (
                        this.wrapperEl.removeEventListener(
                            e,
                            this.mousewheel.handle
                        ),
                        !0
                    );
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return (
                    "container" !== this.params.mousewheel.eventsTarged &&
                        (t = n(this.params.mousewheel.eventsTarged)),
                    t.on("mouseenter", this.mousewheel.handleMouseEnter),
                    t.on("mouseleave", this.mousewheel.handleMouseLeave),
                    t.on(e, this.mousewheel.handle),
                    (this.mousewheel.enabled = !0),
                    !0
                );
            },
            disable: function () {
                var e = re.event();
                if (this.params.cssMode)
                    return (
                        this.wrapperEl.addEventListener(
                            e,
                            this.mousewheel.handle
                        ),
                        !0
                    );
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return (
                    "container" !== this.params.mousewheel.eventsTarged &&
                        (t = n(this.params.mousewheel.eventsTarged)),
                    t.off(e, this.mousewheel.handle),
                    (this.mousewheel.enabled = !1),
                    !0
                );
            },
        },
        ne = {
            update: function () {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s &&
                        s.length > 0 &&
                        (this.isBeginning
                            ? s.addClass(e.disabledClass)
                            : s.removeClass(e.disabledClass),
                        s[
                            this.params.watchOverflow && this.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](e.lockClass)),
                        i &&
                            i.length > 0 &&
                            (this.isEnd
                                ? i.addClass(e.disabledClass)
                                : i.removeClass(e.disabledClass),
                            i[
                                this.params.watchOverflow && this.isLocked
                                    ? "addClass"
                                    : "removeClass"
                            ](e.lockClass));
                }
            },
            onPrevClick: function (e) {
                e.preventDefault(),
                    (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick: function (e) {
                e.preventDefault(),
                    (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init: function () {
                var e,
                    t,
                    i = this.params.navigation;
                (i.nextEl || i.prevEl) &&
                    (i.nextEl &&
                        ((e = n(i.nextEl)),
                        this.params.uniqueNavElements &&
                            "string" == typeof i.nextEl &&
                            e.length > 1 &&
                            1 === this.$el.find(i.nextEl).length &&
                            (e = this.$el.find(i.nextEl))),
                    i.prevEl &&
                        ((t = n(i.prevEl)),
                        this.params.uniqueNavElements &&
                            "string" == typeof i.prevEl &&
                            t.length > 1 &&
                            1 === this.$el.find(i.prevEl).length &&
                            (t = this.$el.find(i.prevEl))),
                    e &&
                        e.length > 0 &&
                        e.on("click", this.navigation.onNextClick),
                    t &&
                        t.length > 0 &&
                        t.on("click", this.navigation.onPrevClick),
                    d.extend(this.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0],
                    }));
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t &&
                    t.length &&
                    (t.off("click", this.navigation.onNextClick),
                    t.removeClass(this.params.navigation.disabledClass)),
                    i &&
                        i.length &&
                        (i.off("click", this.navigation.onPrevClick),
                        i.removeClass(this.params.navigation.disabledClass));
            },
        },
        oe = {
            update: function () {
                var e = this.rtl,
                    t = this.params.pagination;
                if (
                    t.el &&
                    this.pagination.el &&
                    this.pagination.$el &&
                    0 !== this.pagination.$el.length
                ) {
                    var i,
                        s =
                            this.virtual && this.params.virtual.enabled
                                ? this.virtual.slides.length
                                : this.slides.length,
                        a = this.pagination.$el,
                        r = this.params.loop
                            ? Math.ceil(
                                  (s - 2 * this.loopedSlides) /
                                      this.params.slidesPerGroup
                              )
                            : this.snapGrid.length;
                    if (
                        (this.params.loop
                            ? ((i = Math.ceil(
                                  (this.activeIndex - this.loopedSlides) /
                                      this.params.slidesPerGroup
                              )) >
                                  s - 1 - 2 * this.loopedSlides &&
                                  (i -= s - 2 * this.loopedSlides),
                              i > r - 1 && (i -= r),
                              i < 0 &&
                                  "bullets" !== this.params.paginationType &&
                                  (i = r + i))
                            : (i =
                                  void 0 !== this.snapIndex
                                      ? this.snapIndex
                                      : this.activeIndex || 0),
                        "bullets" === t.type &&
                            this.pagination.bullets &&
                            this.pagination.bullets.length > 0)
                    ) {
                        var o,
                            l,
                            d,
                            h = this.pagination.bullets;
                        if (
                            (t.dynamicBullets &&
                                ((this.pagination.bulletSize = h
                                    .eq(0)
                                    [
                                        this.isHorizontal()
                                            ? "outerWidth"
                                            : "outerHeight"
                                    ](!0)),
                                a.css(
                                    this.isHorizontal() ? "width" : "height",
                                    this.pagination.bulletSize *
                                        (t.dynamicMainBullets + 4) +
                                        "px"
                                ),
                                t.dynamicMainBullets > 1 &&
                                    void 0 !== this.previousIndex &&
                                    ((this.pagination.dynamicBulletIndex +=
                                        i - this.previousIndex),
                                    this.pagination.dynamicBulletIndex >
                                    t.dynamicMainBullets - 1
                                        ? (this.pagination.dynamicBulletIndex =
                                              t.dynamicMainBullets - 1)
                                        : this.pagination.dynamicBulletIndex <
                                              0 &&
                                          (this.pagination.dynamicBulletIndex = 0)),
                                (o = i - this.pagination.dynamicBulletIndex),
                                (d =
                                    ((l =
                                        o +
                                        (Math.min(
                                            h.length,
                                            t.dynamicMainBullets
                                        ) -
                                            1)) +
                                        o) /
                                    2)),
                            h.removeClass(
                                t.bulletActiveClass +
                                    " " +
                                    t.bulletActiveClass +
                                    "-next " +
                                    t.bulletActiveClass +
                                    "-next-next " +
                                    t.bulletActiveClass +
                                    "-prev " +
                                    t.bulletActiveClass +
                                    "-prev-prev " +
                                    t.bulletActiveClass +
                                    "-main"
                            ),
                            a.length > 1)
                        )
                            h.each(function (e, s) {
                                var a = n(s),
                                    r = a.index();
                                r === i && a.addClass(t.bulletActiveClass),
                                    t.dynamicBullets &&
                                        (r >= o &&
                                            r <= l &&
                                            a.addClass(
                                                t.bulletActiveClass + "-main"
                                            ),
                                        r === o &&
                                            a
                                                .prev()
                                                .addClass(
                                                    t.bulletActiveClass +
                                                        "-prev"
                                                )
                                                .prev()
                                                .addClass(
                                                    t.bulletActiveClass +
                                                        "-prev-prev"
                                                ),
                                        r === l &&
                                            a
                                                .next()
                                                .addClass(
                                                    t.bulletActiveClass +
                                                        "-next"
                                                )
                                                .next()
                                                .addClass(
                                                    t.bulletActiveClass +
                                                        "-next-next"
                                                ));
                            });
                        else {
                            var p = h.eq(i),
                                c = p.index();
                            if (
                                (p.addClass(t.bulletActiveClass),
                                t.dynamicBullets)
                            ) {
                                for (
                                    var u = h.eq(o), v = h.eq(l), f = o;
                                    f <= l;
                                    f += 1
                                )
                                    h.eq(f).addClass(
                                        t.bulletActiveClass + "-main"
                                    );
                                if (this.params.loop)
                                    if (c >= h.length - t.dynamicMainBullets) {
                                        for (
                                            var m = t.dynamicMainBullets;
                                            m >= 0;
                                            m -= 1
                                        )
                                            h.eq(h.length - m).addClass(
                                                t.bulletActiveClass + "-main"
                                            );
                                        h.eq(
                                            h.length - t.dynamicMainBullets - 1
                                        ).addClass(
                                            t.bulletActiveClass + "-prev"
                                        );
                                    } else
                                        u
                                            .prev()
                                            .addClass(
                                                t.bulletActiveClass + "-prev"
                                            )
                                            .prev()
                                            .addClass(
                                                t.bulletActiveClass +
                                                    "-prev-prev"
                                            ),
                                            v
                                                .next()
                                                .addClass(
                                                    t.bulletActiveClass +
                                                        "-next"
                                                )
                                                .next()
                                                .addClass(
                                                    t.bulletActiveClass +
                                                        "-next-next"
                                                );
                                else
                                    u
                                        .prev()
                                        .addClass(t.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(
                                            t.bulletActiveClass + "-prev-prev"
                                        ),
                                        v
                                            .next()
                                            .addClass(
                                                t.bulletActiveClass + "-next"
                                            )
                                            .next()
                                            .addClass(
                                                t.bulletActiveClass +
                                                    "-next-next"
                                            );
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(
                                    h.length,
                                    t.dynamicMainBullets + 4
                                ),
                                b =
                                    (this.pagination.bulletSize * g -
                                        this.pagination.bulletSize) /
                                        2 -
                                    d * this.pagination.bulletSize,
                                w = e ? "right" : "left";
                            h.css(this.isHorizontal() ? w : "top", b + "px");
                        }
                    }
                    if (
                        ("fraction" === t.type &&
                            (a
                                .find("." + t.currentClass)
                                .text(t.formatFractionCurrent(i + 1)),
                            a
                                .find("." + t.totalClass)
                                .text(t.formatFractionTotal(r))),
                        "progressbar" === t.type)
                    ) {
                        var y;
                        y = t.progressbarOpposite
                            ? this.isHorizontal()
                                ? "vertical"
                                : "horizontal"
                            : this.isHorizontal()
                            ? "horizontal"
                            : "vertical";
                        var x = (i + 1) / r,
                            E = 1,
                            T = 1;
                        "horizontal" === y ? (E = x) : (T = x),
                            a
                                .find("." + t.progressbarFillClass)
                                .transform(
                                    "translate3d(0,0,0) scaleX(" +
                                        E +
                                        ") scaleY(" +
                                        T +
                                        ")"
                                )
                                .transition(this.params.speed);
                    }
                    "custom" === t.type && t.renderCustom
                        ? (a.html(t.renderCustom(this, i + 1, r)),
                          this.emit("paginationRender", this, a[0]))
                        : this.emit("paginationUpdate", this, a[0]),
                        a[
                            this.params.watchOverflow && this.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](t.lockClass);
                }
            },
            render: function () {
                var e = this.params.pagination;
                if (
                    e.el &&
                    this.pagination.el &&
                    this.pagination.$el &&
                    0 !== this.pagination.$el.length
                ) {
                    var t =
                            this.virtual && this.params.virtual.enabled
                                ? this.virtual.slides.length
                                : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (
                            var a = this.params.loop
                                    ? Math.ceil(
                                          (t - 2 * this.loopedSlides) /
                                              this.params.slidesPerGroup
                                      )
                                    : this.snapGrid.length,
                                r = 0;
                            r < a;
                            r += 1
                        )
                            e.renderBullet
                                ? (s += e.renderBullet.call(
                                      this,
                                      r,
                                      e.bulletClass
                                  ))
                                : (s +=
                                      "<" +
                                      e.bulletElement +
                                      ' class="' +
                                      e.bulletClass +
                                      '"></' +
                                      e.bulletElement +
                                      ">");
                        i.html(s),
                            (this.pagination.bullets = i.find(
                                "." + e.bulletClass
                            ));
                    }
                    "fraction" === e.type &&
                        ((s = e.renderFraction
                            ? e.renderFraction.call(
                                  this,
                                  e.currentClass,
                                  e.totalClass
                              )
                            : '<span class="' +
                              e.currentClass +
                              '"></span> / <span class="' +
                              e.totalClass +
                              '"></span>'),
                        i.html(s)),
                        "progressbar" === e.type &&
                            ((s = e.renderProgressbar
                                ? e.renderProgressbar.call(
                                      this,
                                      e.progressbarFillClass
                                  )
                                : '<span class="' +
                                  e.progressbarFillClass +
                                  '"></span>'),
                            i.html(s)),
                        "custom" !== e.type &&
                            this.emit(
                                "paginationRender",
                                this.pagination.$el[0]
                            );
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = n(t.el);
                    0 !== i.length &&
                        (e.params.uniqueNavElements &&
                            "string" == typeof t.el &&
                            i.length > 1 &&
                            1 === e.$el.find(t.el).length &&
                            (i = e.$el.find(t.el)),
                        "bullets" === t.type &&
                            t.clickable &&
                            i.addClass(t.clickableClass),
                        i.addClass(t.modifierClass + t.type),
                        "bullets" === t.type &&
                            t.dynamicBullets &&
                            (i.addClass(
                                "" + t.modifierClass + t.type + "-dynamic"
                            ),
                            (e.pagination.dynamicBulletIndex = 0),
                            t.dynamicMainBullets < 1 &&
                                (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type &&
                            t.progressbarOpposite &&
                            i.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            i.on("click", "." + t.bulletClass, function (t) {
                                t.preventDefault();
                                var i =
                                    n(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (i += e.loopedSlides),
                                    e.slideTo(i);
                            }),
                        d.extend(e.pagination, { $el: i, el: i[0] }));
                }
            },
            destroy: function () {
                var e = this.params.pagination;
                if (
                    e.el &&
                    this.pagination.el &&
                    this.pagination.$el &&
                    0 !== this.pagination.$el.length
                ) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass),
                        t.removeClass(e.modifierClass + e.type),
                        this.pagination.bullets &&
                            this.pagination.bullets.removeClass(
                                e.bulletActiveClass
                            ),
                        e.clickable && t.off("click", "." + e.bulletClass);
                }
            },
        },
        le = {
            setTranslate: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t
                        ? (d = -d) > 0
                            ? ((l = s - d), (d = 0))
                            : -d + s > a && (l = a + d)
                        : d < 0
                        ? ((l = s + d), (d = 0))
                        : d + s > a && (l = a - d),
                        this.isHorizontal()
                            ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                              (r[0].style.width = l + "px"))
                            : (r.transform("translate3d(0px, " + d + "px, 0)"),
                              (r[0].style.height = l + "px")),
                        o.hide &&
                            (clearTimeout(this.scrollbar.timeout),
                            (n[0].style.opacity = 1),
                            (this.scrollbar.timeout = setTimeout(function () {
                                (n[0].style.opacity = 0), n.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el &&
                    this.scrollbar.el &&
                    this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    (t[0].style.width = ""), (t[0].style.height = "");
                    var s,
                        a = this.isHorizontal()
                            ? i[0].offsetWidth
                            : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        n = r * (a / this.size);
                    (s =
                        "auto" === this.params.scrollbar.dragSize
                            ? a * r
                            : parseInt(this.params.scrollbar.dragSize, 10)),
                        this.isHorizontal()
                            ? (t[0].style.width = s + "px")
                            : (t[0].style.height = s + "px"),
                        (i[0].style.display = r >= 1 ? "none" : ""),
                        this.params.scrollbar.hide && (i[0].style.opacity = 0),
                        d.extend(e, {
                            trackSize: a,
                            divider: r,
                            moveDivider: n,
                            dragSize: s,
                        }),
                        e.$el[
                            this.params.watchOverflow && this.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](this.params.scrollbar.lockClass);
                }
            },
            getPointerPosition: function (e) {
                return this.isHorizontal()
                    ? "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].clientX
                        : e.clientX
                    : "touchstart" === e.type || "touchmove" === e.type
                    ? e.targetTouches[0].clientY
                    : e.clientY;
            },
            setDragPosition: function (e) {
                var t,
                    i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize,
                    o = i.dragStartPos;
                (t =
                    (i.getPointerPosition(e) -
                        a.offset()[this.isHorizontal() ? "left" : "top"] -
                        (null !== o ? o : r / 2)) /
                    (n - r)),
                    (t = Math.max(Math.min(t, 1), 0)),
                    s && (t = 1 - t);
                var l =
                    this.minTranslate() +
                    (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(l),
                    this.setTranslate(l),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses();
            },
            onDragStart: function (e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                (this.scrollbar.isTouched = !0),
                    (this.scrollbar.dragStartPos =
                        e.target === r[0] || e.target === r
                            ? i.getPointerPosition(e) -
                              e.target.getBoundingClientRect()[
                                  this.isHorizontal() ? "left" : "top"
                              ]
                            : null),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    r.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(this.scrollbar.dragTimeout),
                    a.transition(0),
                    t.hide && a.css("opacity", 1),
                    this.params.cssMode &&
                        this.$wrapperEl.css("scroll-snap-type", "none"),
                    this.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched &&
                    (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1),
                    t.setDragPosition(e),
                    i.transition(0),
                    s.transition(0),
                    a.transition(0),
                    this.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el;
                this.scrollbar.isTouched &&
                    ((this.scrollbar.isTouched = !1),
                    this.params.cssMode &&
                        (this.$wrapperEl.css("scroll-snap-type", ""),
                        s.transition("")),
                    t.hide &&
                        (clearTimeout(this.scrollbar.dragTimeout),
                        (this.scrollbar.dragTimeout = d.nextTick(function () {
                            a.css("opacity", 0), a.transition(400);
                        }, 1e3))),
                    this.emit("scrollbarDragEnd", e),
                    t.snapOnRelease && this.slideToClosest());
            },
            enableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = e.$el[0],
                        n = !(!h.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        o = !(!h.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    h.touch
                        ? (r.addEventListener(
                              t.start,
                              this.scrollbar.onDragStart,
                              n
                          ),
                          r.addEventListener(
                              t.move,
                              this.scrollbar.onDragMove,
                              n
                          ),
                          r.addEventListener(
                              t.end,
                              this.scrollbar.onDragEnd,
                              o
                          ))
                        : (r.addEventListener(
                              s.start,
                              this.scrollbar.onDragStart,
                              n
                          ),
                          i.addEventListener(
                              s.move,
                              this.scrollbar.onDragMove,
                              n
                          ),
                          i.addEventListener(
                              s.end,
                              this.scrollbar.onDragEnd,
                              o
                          ));
                }
            },
            disableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = e.$el[0],
                        n = !(!h.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        o = !(!h.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    h.touch
                        ? (r.removeEventListener(
                              t.start,
                              this.scrollbar.onDragStart,
                              n
                          ),
                          r.removeEventListener(
                              t.move,
                              this.scrollbar.onDragMove,
                              n
                          ),
                          r.removeEventListener(
                              t.end,
                              this.scrollbar.onDragEnd,
                              o
                          ))
                        : (r.removeEventListener(
                              s.start,
                              this.scrollbar.onDragStart,
                              n
                          ),
                          i.removeEventListener(
                              s.move,
                              this.scrollbar.onDragMove,
                              n
                          ),
                          i.removeEventListener(
                              s.end,
                              this.scrollbar.onDragEnd,
                              o
                          ));
                }
            },
            init: function () {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        s = n(i.el);
                    this.params.uniqueNavElements &&
                        "string" == typeof i.el &&
                        s.length > 1 &&
                        1 === t.find(i.el).length &&
                        (s = t.find(i.el));
                    var a = s.find("." + this.params.scrollbar.dragClass);
                    0 === a.length &&
                        ((a = n(
                            '<div class="' +
                                this.params.scrollbar.dragClass +
                                '"></div>'
                        )),
                        s.append(a)),
                        d.extend(e, {
                            $el: s,
                            el: s[0],
                            $dragEl: a,
                            dragEl: a[0],
                        }),
                        i.draggable && e.enableDraggable();
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable();
            },
        },
        de = {
            setTransform: function (e, t) {
                var i = this.rtl,
                    s = n(e),
                    a = i ? -1 : 1,
                    r = s.attr("data-swiper-parallax") || "0",
                    o = s.attr("data-swiper-parallax-x"),
                    l = s.attr("data-swiper-parallax-y"),
                    d = s.attr("data-swiper-parallax-scale"),
                    h = s.attr("data-swiper-parallax-opacity");
                if (
                    (o || l
                        ? ((o = o || "0"), (l = l || "0"))
                        : this.isHorizontal()
                        ? ((o = r), (l = "0"))
                        : ((l = r), (o = "0")),
                    (o =
                        o.indexOf("%") >= 0
                            ? parseInt(o, 10) * t * a + "%"
                            : o * t * a + "px"),
                    (l =
                        l.indexOf("%") >= 0
                            ? parseInt(l, 10) * t + "%"
                            : l * t + "px"),
                    null != h)
                ) {
                    var p = h - (h - 1) * (1 - Math.abs(t));
                    s[0].style.opacity = p;
                }
                if (null == d)
                    s.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var c = d - (d - 1) * (1 - Math.abs(t));
                    s.transform(
                        "translate3d(" +
                            o +
                            ", " +
                            l +
                            ", 0px) scale(" +
                            c +
                            ")"
                    );
                }
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    s = e.progress,
                    a = e.snapGrid;
                t
                    .children(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each(function (t, i) {
                        e.parallax.setTransform(i, s);
                    }),
                    i.each(function (t, i) {
                        var r = i.progress;
                        e.params.slidesPerGroup > 1 &&
                            "auto" !== e.params.slidesPerView &&
                            (r += Math.ceil(t / 2) - s * (a.length - 1)),
                            (r = Math.min(Math.max(r, -1), 1)),
                            n(i)
                                .find(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                )
                                .each(function (t, i) {
                                    e.parallax.setTransform(i, r);
                                });
                    });
            },
            setTransition: function (e) {
                void 0 === e && (e = this.params.speed);
                this.$el
                    .find(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each(function (t, i) {
                        var s = n(i),
                            a =
                                parseInt(
                                    s.attr("data-swiper-parallax-duration"),
                                    10
                                ) || e;
                        0 === e && (a = 0), s.transition(a);
                    });
            },
        },
        he = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
            },
            onGestureStart: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (
                    ((i.fakeGestureTouched = !1),
                    (i.fakeGestureMoved = !1),
                    !h.gestures)
                ) {
                    if (
                        "touchstart" !== e.type ||
                        ("touchstart" === e.type && e.targetTouches.length < 2)
                    )
                        return;
                    (i.fakeGestureTouched = !0),
                        (s.scaleStart = he.getDistanceBetweenTouches(e));
                }
                (s.$slideEl && s.$slideEl.length) ||
                ((s.$slideEl = n(e.target).closest(
                    "." + this.params.slideClass
                )),
                0 === s.$slideEl.length &&
                    (s.$slideEl = this.slides.eq(this.activeIndex)),
                (s.$imageEl = s.$slideEl.find(
                    "img, svg, canvas, picture, .swiper-zoom-target"
                )),
                (s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass)),
                (s.maxRatio =
                    s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
                0 !== s.$imageWrapEl.length)
                    ? (s.$imageEl && s.$imageEl.transition(0),
                      (this.zoom.isScaling = !0))
                    : (s.$imageEl = void 0);
            },
            onGestureChange: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if (
                        "touchmove" !== e.type ||
                        ("touchmove" === e.type && e.targetTouches.length < 2)
                    )
                        return;
                    (i.fakeGestureMoved = !0),
                        (s.scaleMove = he.getDistanceBetweenTouches(e));
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    ((i.scale = h.gestures
                        ? e.scale * i.currentScale
                        : (s.scaleMove / s.scaleStart) * i.currentScale),
                    i.scale > s.maxRatio &&
                        (i.scale =
                            s.maxRatio -
                            1 +
                            Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                    i.scale < t.minRatio &&
                        (i.scale =
                            t.minRatio +
                            1 -
                            Math.pow(t.minRatio - i.scale + 1, 0.5)),
                    s.$imageEl.transform(
                        "translate3d(0,0,0) scale(" + i.scale + ")"
                    ));
            },
            onGestureEnd: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if (
                        "touchend" !== e.type ||
                        ("touchend" === e.type &&
                            e.changedTouches.length < 2 &&
                            !A.android)
                    )
                        return;
                    (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    ((i.scale = Math.max(
                        Math.min(i.scale, s.maxRatio),
                        t.minRatio
                    )),
                    s.$imageEl
                        .transition(this.params.speed)
                        .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                    (i.currentScale = i.scale),
                    (i.isScaling = !1),
                    1 === i.scale && (s.$slideEl = void 0));
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (s.isTouched ||
                        (A.android && e.cancelable && e.preventDefault(),
                        (s.isTouched = !0),
                        (s.touchesStart.x =
                            "touchstart" === e.type
                                ? e.targetTouches[0].pageX
                                : e.pageX),
                        (s.touchesStart.y =
                            "touchstart" === e.type
                                ? e.targetTouches[0].pageY
                                : e.pageY)));
            },
            onTouchMove: function (e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (
                    i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((this.allowClick = !1), s.isTouched && i.$slideEl)
                ) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX =
                            d.getTranslate(i.$imageWrapEl[0], "x") || 0),
                        (s.startY =
                            d.getTranslate(i.$imageWrapEl[0], "y") || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        this.rtl &&
                            ((s.startX = -s.startX), (s.startY = -s.startY)));
                    var r = s.width * t.scale,
                        n = s.height * t.scale;
                    if (!(r < i.slideWidth && n < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - n / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x =
                                "touchmove" === e.type
                                    ? e.targetTouches[0].pageX
                                    : e.pageX),
                            (s.touchesCurrent.y =
                                "touchmove" === e.type
                                    ? e.targetTouches[0].pageY
                                    : e.pageY),
                            !s.isMoved && !t.isScaling)
                        ) {
                            if (
                                this.isHorizontal() &&
                                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                                    s.touchesCurrent.x < s.touchesStart.x) ||
                                    (Math.floor(s.maxX) ===
                                        Math.floor(s.startX) &&
                                        s.touchesCurrent.x > s.touchesStart.x))
                            )
                                return void (s.isTouched = !1);
                            if (
                                !this.isHorizontal() &&
                                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                                    s.touchesCurrent.y < s.touchesStart.y) ||
                                    (Math.floor(s.maxY) ===
                                        Math.floor(s.startY) &&
                                        s.touchesCurrent.y > s.touchesStart.y))
                            )
                                return void (s.isTouched = !1);
                        }
                        e.cancelable && e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX =
                                s.touchesCurrent.x -
                                s.touchesStart.x +
                                s.startX),
                            (s.currentY =
                                s.touchesCurrent.y -
                                s.touchesStart.y +
                                s.startY),
                            s.currentX < s.minX &&
                                (s.currentX =
                                    s.minX +
                                    1 -
                                    Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX &&
                                (s.currentX =
                                    s.maxX -
                                    1 +
                                    Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY &&
                                (s.currentY =
                                    s.minY +
                                    1 -
                                    Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY &&
                                (s.currentY =
                                    s.maxY -
                                    1 +
                                    Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            a.prevPositionX ||
                                (a.prevPositionX = s.touchesCurrent.x),
                            a.prevPositionY ||
                                (a.prevPositionY = s.touchesCurrent.y),
                            a.prevTime || (a.prevTime = Date.now()),
                            (a.x =
                                (s.touchesCurrent.x - a.prevPositionX) /
                                (Date.now() - a.prevTime) /
                                2),
                            (a.y =
                                (s.touchesCurrent.y - a.prevPositionY) /
                                (Date.now() - a.prevTime) /
                                2),
                            Math.abs(s.touchesCurrent.x - a.prevPositionX) <
                                2 && (a.x = 0),
                            Math.abs(s.touchesCurrent.y - a.prevPositionY) <
                                2 && (a.y = 0),
                            (a.prevPositionX = s.touchesCurrent.x),
                            (a.prevPositionY = s.touchesCurrent.y),
                            (a.prevTime = Date.now()),
                            i.$imageWrapEl.transform(
                                "translate3d(" +
                                    s.currentX +
                                    "px, " +
                                    s.currentY +
                                    "px,0)"
                            );
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved)
                        return (i.isTouched = !1), void (i.isMoved = !1);
                    (i.isTouched = !1), (i.isMoved = !1);
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                        0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    (i.currentX = o), (i.currentY = d);
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    (i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
                        (i.maxX = -i.minX),
                        (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
                        (i.maxY = -i.minY),
                        (i.currentX = Math.max(
                            Math.min(i.currentX, i.maxX),
                            i.minX
                        )),
                        (i.currentY = Math.max(
                            Math.min(i.currentY, i.maxY),
                            i.minY
                        )),
                        t.$imageWrapEl
                            .transition(h)
                            .transform(
                                "translate3d(" +
                                    i.currentX +
                                    "px, " +
                                    i.currentY +
                                    "px,0)"
                            );
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (t.$imageEl &&
                        t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    t.$imageWrapEl &&
                        t.$imageWrapEl.transform("translate3d(0,0,0)"),
                    (e.scale = 1),
                    (e.currentScale = 1),
                    (t.$slideEl = void 0),
                    (t.$imageEl = void 0),
                    (t.$imageWrapEl = void 0));
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function (e) {
                var t,
                    i,
                    s,
                    a,
                    r,
                    n,
                    o,
                    l,
                    d,
                    h,
                    p,
                    c,
                    u,
                    v,
                    f,
                    m,
                    g = this.zoom,
                    b = this.params.zoom,
                    w = g.gesture,
                    y = g.image;
                (w.$slideEl ||
                    (this.params.virtual &&
                    this.params.virtual.enabled &&
                    this.virtual
                        ? (w.$slideEl = this.$wrapperEl.children(
                              "." + this.params.slideActiveClass
                          ))
                        : (w.$slideEl = this.slides.eq(this.activeIndex)),
                    (w.$imageEl = w.$slideEl.find(
                        "img, svg, canvas, picture, .swiper-zoom-target"
                    )),
                    (w.$imageWrapEl = w.$imageEl.parent(
                        "." + b.containerClass
                    ))),
                w.$imageEl && 0 !== w.$imageEl.length) &&
                    (w.$slideEl.addClass("" + b.zoomedSlideClass),
                    void 0 === y.touchesStart.x && e
                        ? ((t =
                              "touchend" === e.type
                                  ? e.changedTouches[0].pageX
                                  : e.pageX),
                          (i =
                              "touchend" === e.type
                                  ? e.changedTouches[0].pageY
                                  : e.pageY))
                        : ((t = y.touchesStart.x), (i = y.touchesStart.y)),
                    (g.scale =
                        w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
                    (g.currentScale =
                        w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
                    e
                        ? ((f = w.$slideEl[0].offsetWidth),
                          (m = w.$slideEl[0].offsetHeight),
                          (s = w.$slideEl.offset().left + f / 2 - t),
                          (a = w.$slideEl.offset().top + m / 2 - i),
                          (o = w.$imageEl[0].offsetWidth),
                          (l = w.$imageEl[0].offsetHeight),
                          (d = o * g.scale),
                          (h = l * g.scale),
                          (u = -(p = Math.min(f / 2 - d / 2, 0))),
                          (v = -(c = Math.min(m / 2 - h / 2, 0))),
                          (r = s * g.scale) < p && (r = p),
                          r > u && (r = u),
                          (n = a * g.scale) < c && (n = c),
                          n > v && (n = v))
                        : ((r = 0), (n = 0)),
                    w.$imageWrapEl
                        .transition(300)
                        .transform("translate3d(" + r + "px, " + n + "px,0)"),
                    w.$imageEl
                        .transition(300)
                        .transform(
                            "translate3d(0,0,0) scale(" + g.scale + ")"
                        ));
            },
            out: function () {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl ||
                    (this.params.virtual &&
                    this.params.virtual.enabled &&
                    this.virtual
                        ? (i.$slideEl = this.$wrapperEl.children(
                              "." + this.params.slideActiveClass
                          ))
                        : (i.$slideEl = this.slides.eq(this.activeIndex)),
                    (i.$imageEl = i.$slideEl.find(
                        "img, svg, canvas, picture, .swiper-zoom-target"
                    )),
                    (i.$imageWrapEl = i.$imageEl.parent(
                        "." + t.containerClass
                    ))),
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((e.scale = 1),
                        (e.currentScale = 1),
                        i.$imageWrapEl
                            .transition(300)
                            .transform("translate3d(0,0,0)"),
                        i.$imageEl
                            .transition(300)
                            .transform("translate3d(0,0,0) scale(1)"),
                        i.$slideEl.removeClass("" + t.zoomedSlideClass),
                        (i.$slideEl = void 0));
            },
            enable: function () {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !(
                            "touchstart" !== this.touchEvents.start ||
                            !h.passiveListener ||
                            !this.params.passiveListeners
                        ) && { passive: !0, capture: !1 },
                        i = !h.passiveListener || { passive: !1, capture: !0 },
                        s = "." + this.params.slideClass;
                    h.gestures
                        ? (this.$wrapperEl.on(
                              "gesturestart",
                              s,
                              e.onGestureStart,
                              t
                          ),
                          this.$wrapperEl.on(
                              "gesturechange",
                              s,
                              e.onGestureChange,
                              t
                          ),
                          this.$wrapperEl.on(
                              "gestureend",
                              s,
                              e.onGestureEnd,
                              t
                          ))
                        : "touchstart" === this.touchEvents.start &&
                          (this.$wrapperEl.on(
                              this.touchEvents.start,
                              s,
                              e.onGestureStart,
                              t
                          ),
                          this.$wrapperEl.on(
                              this.touchEvents.move,
                              s,
                              e.onGestureChange,
                              i
                          ),
                          this.$wrapperEl.on(
                              this.touchEvents.end,
                              s,
                              e.onGestureEnd,
                              t
                          ),
                          this.touchEvents.cancel &&
                              this.$wrapperEl.on(
                                  this.touchEvents.cancel,
                                  s,
                                  e.onGestureEnd,
                                  t
                              )),
                        this.$wrapperEl.on(
                            this.touchEvents.move,
                            "." + this.params.zoom.containerClass,
                            e.onTouchMove,
                            i
                        );
                }
            },
            disable: function () {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !(
                            "touchstart" !== this.touchEvents.start ||
                            !h.passiveListener ||
                            !this.params.passiveListeners
                        ) && { passive: !0, capture: !1 },
                        i = !h.passiveListener || { passive: !1, capture: !0 },
                        s = "." + this.params.slideClass;
                    h.gestures
                        ? (this.$wrapperEl.off(
                              "gesturestart",
                              s,
                              e.onGestureStart,
                              t
                          ),
                          this.$wrapperEl.off(
                              "gesturechange",
                              s,
                              e.onGestureChange,
                              t
                          ),
                          this.$wrapperEl.off(
                              "gestureend",
                              s,
                              e.onGestureEnd,
                              t
                          ))
                        : "touchstart" === this.touchEvents.start &&
                          (this.$wrapperEl.off(
                              this.touchEvents.start,
                              s,
                              e.onGestureStart,
                              t
                          ),
                          this.$wrapperEl.off(
                              this.touchEvents.move,
                              s,
                              e.onGestureChange,
                              i
                          ),
                          this.$wrapperEl.off(
                              this.touchEvents.end,
                              s,
                              e.onGestureEnd,
                              t
                          ),
                          this.touchEvents.cancel &&
                              this.$wrapperEl.off(
                                  this.touchEvents.cancel,
                                  s,
                                  e.onGestureEnd,
                                  t
                              )),
                        this.$wrapperEl.off(
                            this.touchEvents.move,
                            "." + this.params.zoom.containerClass,
                            e.onTouchMove,
                            i
                        );
                }
            },
        },
        pe = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var a =
                            i.virtual && i.params.virtual.enabled
                                ? i.$wrapperEl.children(
                                      "." +
                                          i.params.slideClass +
                                          '[data-swiper-slide-index="' +
                                          e +
                                          '"]'
                                  )
                                : i.slides.eq(e),
                        r = a.find(
                            "." +
                                s.elementClass +
                                ":not(." +
                                s.loadedClass +
                                "):not(." +
                                s.loadingClass +
                                ")"
                        );
                    !a.hasClass(s.elementClass) ||
                        a.hasClass(s.loadedClass) ||
                        a.hasClass(s.loadingClass) ||
                        (r = r.add(a[0])),
                        0 !== r.length &&
                            r.each(function (e, r) {
                                var o = n(r);
                                o.addClass(s.loadingClass);
                                var l = o.attr("data-background"),
                                    d = o.attr("data-src"),
                                    h = o.attr("data-srcset"),
                                    p = o.attr("data-sizes"),
                                    c = o.parent("picture");
                                i.loadImage(
                                    o[0],
                                    d || l,
                                    h,
                                    p,
                                    !1,
                                    function () {
                                        if (
                                            null != i &&
                                            i &&
                                            (!i || i.params) &&
                                            !i.destroyed
                                        ) {
                                            if (
                                                (l
                                                    ? (o.css(
                                                          "background-image",
                                                          'url("' + l + '")'
                                                      ),
                                                      o.removeAttr(
                                                          "data-background"
                                                      ))
                                                    : (h &&
                                                          (o.attr("srcset", h),
                                                          o.removeAttr(
                                                              "data-srcset"
                                                          )),
                                                      p &&
                                                          (o.attr("sizes", p),
                                                          o.removeAttr(
                                                              "data-sizes"
                                                          )),
                                                      c.length &&
                                                          c
                                                              .children(
                                                                  "source"
                                                              )
                                                              .each(function (
                                                                  e,
                                                                  t
                                                              ) {
                                                                  var i = n(t);
                                                                  i.attr(
                                                                      "data-srcset"
                                                                  ) &&
                                                                      (i.attr(
                                                                          "srcset",
                                                                          i.attr(
                                                                              "data-srcset"
                                                                          )
                                                                      ),
                                                                      i.removeAttr(
                                                                          "data-srcset"
                                                                      ));
                                                              }),
                                                      d &&
                                                          (o.attr("src", d),
                                                          o.removeAttr(
                                                              "data-src"
                                                          ))),
                                                o
                                                    .addClass(s.loadedClass)
                                                    .removeClass(
                                                        s.loadingClass
                                                    ),
                                                a
                                                    .find(
                                                        "." + s.preloaderClass
                                                    )
                                                    .remove(),
                                                i.params.loop && t)
                                            ) {
                                                var e = a.attr(
                                                    "data-swiper-slide-index"
                                                );
                                                if (
                                                    a.hasClass(
                                                        i.params
                                                            .slideDuplicateClass
                                                    )
                                                ) {
                                                    var r =
                                                        i.$wrapperEl.children(
                                                            '[data-swiper-slide-index="' +
                                                                e +
                                                                '"]:not(.' +
                                                                i.params
                                                                    .slideDuplicateClass +
                                                                ")"
                                                        );
                                                    i.lazy.loadInSlide(
                                                        r.index(),
                                                        !1
                                                    );
                                                } else {
                                                    var u =
                                                        i.$wrapperEl.children(
                                                            "." +
                                                                i.params
                                                                    .slideDuplicateClass +
                                                                '[data-swiper-slide-index="' +
                                                                e +
                                                                '"]'
                                                        );
                                                    i.lazy.loadInSlide(
                                                        u.index(),
                                                        !1
                                                    );
                                                }
                                            }
                                            i.emit(
                                                "lazyImageReady",
                                                a[0],
                                                o[0]
                                            ),
                                                i.params.autoHeight &&
                                                    i.updateAutoHeight();
                                        }
                                    }
                                ),
                                    i.emit("lazyImageLoad", a[0], o[0]);
                            });
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    s = e.slides,
                    a = e.activeIndex,
                    r = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;
                function d(e) {
                    if (r) {
                        if (
                            t.children(
                                "." +
                                    i.slideClass +
                                    '[data-swiper-slide-index="' +
                                    e +
                                    '"]'
                            ).length
                        )
                            return !0;
                    } else if (s[e]) return !0;
                    return !1;
                }
                function h(e) {
                    return r
                        ? n(e).attr("data-swiper-slide-index")
                        : n(e).index();
                }
                if (
                    ("auto" === l && (l = 0),
                    e.lazy.initialImageLoaded ||
                        (e.lazy.initialImageLoaded = !0),
                    e.params.watchSlidesVisibility)
                )
                    t.children("." + i.slideVisibleClass).each(function (t, i) {
                        var s = r
                            ? n(i).attr("data-swiper-slide-index")
                            : n(i).index();
                        e.lazy.loadInSlide(s);
                    });
                else if (l > 1)
                    for (var p = a; p < a + l; p += 1)
                        d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(a);
                if (o.loadPrevNext)
                    if (
                        l > 1 ||
                        (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)
                    ) {
                        for (
                            var c = o.loadPrevNextAmount,
                                u = l,
                                v = Math.min(a + u + Math.max(c, u), s.length),
                                f = Math.max(a - Math.max(u, c), 0),
                                m = a + l;
                            m < v;
                            m += 1
                        )
                            d(m) && e.lazy.loadInSlide(m);
                        for (var g = f; g < a; g += 1)
                            d(g) && e.lazy.loadInSlide(g);
                    } else {
                        var b = t.children("." + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = t.children("." + i.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w));
                    }
            },
        },
        ce = {
            LinearSpline: function (e, t) {
                var i,
                    s,
                    a,
                    r,
                    n,
                    o = function (e, t) {
                        for (s = -1, i = e.length; i - s > 1; )
                            e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
                        return i;
                    };
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e
                            ? ((n = o(this.x, e)),
                              (r = n - 1),
                              ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                                  (this.x[n] - this.x[r]) +
                                  this.y[r])
                            : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                this.controller.spline ||
                    (this.controller.spline = this.params.loop
                        ? new ce.LinearSpline(this.slidesGrid, e.slidesGrid)
                        : new ce.LinearSpline(this.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                var i,
                    s,
                    a = this,
                    r = a.controller.control;
                function n(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by &&
                        (a.controller.getInterpolateFunction(e),
                        (s = -a.controller.spline.interpolate(-t))),
                        (s && "container" !== a.params.controller.by) ||
                            ((i =
                                (e.maxTranslate() - e.minTranslate()) /
                                (a.maxTranslate() - a.minTranslate())),
                            (s =
                                (t - a.minTranslate()) * i + e.minTranslate())),
                        a.params.controller.inverse &&
                            (s = e.maxTranslate() - s),
                        e.updateProgress(s),
                        e.setTranslate(s, a),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1)
                        r[o] !== t && r[o] instanceof j && n(r[o]);
                else r instanceof j && t !== r && n(r);
            },
            setTransition: function (e, t) {
                var i,
                    s = this,
                    a = s.controller.control;
                function r(t) {
                    t.setTransition(e, s),
                        0 !== e &&
                            (t.transitionStart(),
                            t.params.autoHeight &&
                                d.nextTick(function () {
                                    t.updateAutoHeight();
                                }),
                            t.$wrapperEl.transitionEnd(function () {
                                a &&
                                    (t.params.loop &&
                                        "slide" === s.params.controller.by &&
                                        t.loopFix(),
                                    t.transitionEnd());
                            }));
                }
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1)
                        a[i] !== t && a[i] instanceof j && r(a[i]);
                else a instanceof j && t !== a && r(a);
            },
        },
        ue = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
            },
            makeElNotFocusable: function (e) {
                return e.attr("tabIndex", "-1"), e;
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e;
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e;
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = n(e.target);
                    this.navigation &&
                        this.navigation.$nextEl &&
                        i.is(this.navigation.$nextEl) &&
                        ((this.isEnd && !this.params.loop) || this.slideNext(),
                        this.isEnd
                            ? this.a11y.notify(t.lastSlideMessage)
                            : this.a11y.notify(t.nextSlideMessage)),
                        this.navigation &&
                            this.navigation.$prevEl &&
                            i.is(this.navigation.$prevEl) &&
                            ((this.isBeginning && !this.params.loop) ||
                                this.slidePrev(),
                            this.isBeginning
                                ? this.a11y.notify(t.firstSlideMessage)
                                : this.a11y.notify(t.prevSlideMessage)),
                        this.pagination &&
                            i.is("." + this.params.pagination.bulletClass) &&
                            i[0].click();
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function () {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i &&
                        i.length > 0 &&
                        (this.isBeginning
                            ? (this.a11y.disableEl(i),
                              this.a11y.makeElNotFocusable(i))
                            : (this.a11y.enableEl(i),
                              this.a11y.makeElFocusable(i))),
                        t &&
                            t.length > 0 &&
                            (this.isEnd
                                ? (this.a11y.disableEl(t),
                                  this.a11y.makeElNotFocusable(t))
                                : (this.a11y.enableEl(t),
                                  this.a11y.makeElFocusable(t)));
                }
            },
            updatePagination: function () {
                var e = this,
                    t = e.params.a11y;
                e.pagination &&
                    e.params.pagination.clickable &&
                    e.pagination.bullets &&
                    e.pagination.bullets.length &&
                    e.pagination.bullets.each(function (i, s) {
                        var a = n(s);
                        e.a11y.makeElFocusable(a),
                            e.a11y.addElRole(a, "button"),
                            e.a11y.addElLabel(
                                a,
                                t.paginationBulletMessage.replace(
                                    /\{\{index\}\}/,
                                    a.index() + 1
                                )
                            );
                    });
            },
            init: function () {
                this.$el.append(this.a11y.liveRegion);
                var e,
                    t,
                    i = this.params.a11y;
                this.navigation &&
                    this.navigation.$nextEl &&
                    (e = this.navigation.$nextEl),
                    this.navigation &&
                        this.navigation.$prevEl &&
                        (t = this.navigation.$prevEl),
                    e &&
                        (this.a11y.makeElFocusable(e),
                        this.a11y.addElRole(e, "button"),
                        this.a11y.addElLabel(e, i.nextSlideMessage),
                        e.on("keydown", this.a11y.onEnterKey)),
                    t &&
                        (this.a11y.makeElFocusable(t),
                        this.a11y.addElRole(t, "button"),
                        this.a11y.addElLabel(t, i.prevSlideMessage),
                        t.on("keydown", this.a11y.onEnterKey)),
                    this.pagination &&
                        this.params.pagination.clickable &&
                        this.pagination.bullets &&
                        this.pagination.bullets.length &&
                        this.pagination.$el.on(
                            "keydown",
                            "." + this.params.pagination.bulletClass,
                            this.a11y.onEnterKey
                        );
            },
            destroy: function () {
                var e, t;
                this.a11y.liveRegion &&
                    this.a11y.liveRegion.length > 0 &&
                    this.a11y.liveRegion.remove(),
                    this.navigation &&
                        this.navigation.$nextEl &&
                        (e = this.navigation.$nextEl),
                    this.navigation &&
                        this.navigation.$prevEl &&
                        (t = this.navigation.$prevEl),
                    e && e.off("keydown", this.a11y.onEnterKey),
                    t && t.off("keydown", this.a11y.onEnterKey),
                    this.pagination &&
                        this.params.pagination.clickable &&
                        this.pagination.bullets &&
                        this.pagination.bullets.length &&
                        this.pagination.$el.off(
                            "keydown",
                            "." + this.params.pagination.bulletClass,
                            this.a11y.onEnterKey
                        );
            },
        },
        ve = {
            init: function () {
                if (this.params.history) {
                    if (!a.history || !a.history.pushState)
                        return (
                            (this.params.history.enabled = !1),
                            void (this.params.hashNavigation.enabled = !0)
                        );
                    var e = this.history;
                    (e.initialized = !0),
                        (e.paths = ve.getPathValues()),
                        (e.paths.key || e.paths.value) &&
                            (e.scrollToSlide(
                                0,
                                e.paths.value,
                                this.params.runCallbacksOnInit
                            ),
                            this.params.history.replaceState ||
                                a.addEventListener(
                                    "popstate",
                                    this.history.setHistoryPopState
                                ));
                }
            },
            destroy: function () {
                this.params.history.replaceState ||
                    a.removeEventListener(
                        "popstate",
                        this.history.setHistoryPopState
                    );
            },
            setHistoryPopState: function () {
                (this.history.paths = ve.getPathValues()),
                    this.history.scrollToSlide(
                        this.params.speed,
                        this.history.paths.value,
                        !1
                    );
            },
            getPathValues: function () {
                var e = a.location.pathname
                        .slice(1)
                        .split("/")
                        .filter(function (e) {
                            return "" !== e;
                        }),
                    t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory: function (e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var i = this.slides.eq(t),
                        s = ve.slugify(i.attr("data-history"));
                    a.location.pathname.includes(e) || (s = e + "/" + s);
                    var r = a.history.state;
                    (r && r.value === s) ||
                        (this.params.history.replaceState
                            ? a.history.replaceState({ value: s }, null, s)
                            : a.history.pushState({ value: s }, null, s));
                }
            },
            slugify: function (e) {
                return e
                    .toString()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (
                            ve.slugify(r.attr("data-history")) === t &&
                            !r.hasClass(this.params.slideDuplicateClass)
                        ) {
                            var n = r.index();
                            this.slideTo(n, e, i);
                        }
                    }
                else this.slideTo(0, e, i);
            },
        },
        fe = {
            onHashCange: function () {
                this.emit("hashChange");
                var e = i.location.hash.replace("#", "");
                if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var t = this.$wrapperEl
                        .children(
                            "." +
                                this.params.slideClass +
                                '[data-hash="' +
                                e +
                                '"]'
                        )
                        .index();
                    if (void 0 === t) return;
                    this.slideTo(t);
                }
            },
            setHash: function () {
                if (
                    this.hashNavigation.initialized &&
                    this.params.hashNavigation.enabled
                )
                    if (
                        this.params.hashNavigation.replaceState &&
                        a.history &&
                        a.history.replaceState
                    )
                        a.history.replaceState(
                            null,
                            null,
                            "#" +
                                this.slides
                                    .eq(this.activeIndex)
                                    .attr("data-hash") || ""
                        ),
                            this.emit("hashSet");
                    else {
                        var e = this.slides.eq(this.activeIndex),
                            t = e.attr("data-hash") || e.attr("data-history");
                        (i.location.hash = t || ""), this.emit("hashSet");
                    }
            },
            init: function () {
                if (
                    !(
                        !this.params.hashNavigation.enabled ||
                        (this.params.history && this.params.history.enabled)
                    )
                ) {
                    this.hashNavigation.initialized = !0;
                    var e = i.location.hash.replace("#", "");
                    if (e)
                        for (var t = 0, s = this.slides.length; t < s; t += 1) {
                            var r = this.slides.eq(t);
                            if (
                                (r.attr("data-hash") ||
                                    r.attr("data-history")) === e &&
                                !r.hasClass(this.params.slideDuplicateClass)
                            ) {
                                var o = r.index();
                                this.slideTo(
                                    o,
                                    0,
                                    this.params.runCallbacksOnInit,
                                    !0
                                );
                            }
                        }
                    this.params.hashNavigation.watchState &&
                        n(a).on("hashchange", this.hashNavigation.onHashCange);
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState &&
                    n(a).off("hashchange", this.hashNavigation.onHashCange);
            },
        },
        me = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") &&
                    (i =
                        t.attr("data-swiper-autoplay") ||
                        e.params.autoplay.delay),
                    clearTimeout(e.autoplay.timeout),
                    (e.autoplay.timeout = d.nextTick(function () {
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(),
                                  e.slidePrev(e.params.speed, !0, !0),
                                  e.emit("autoplay"))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(
                                          e.slides.length - 1,
                                          e.params.speed,
                                          !0,
                                          !0
                                      ),
                                      e.emit("autoplay"))
                                : (e.slidePrev(e.params.speed, !0, !0),
                                  e.emit("autoplay"))
                            : e.params.loop
                            ? (e.loopFix(),
                              e.slideNext(e.params.speed, !0, !0),
                              e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0),
                                  e.emit("autoplay"))
                            : (e.slideNext(e.params.speed, !0, !0),
                              e.emit("autoplay")),
                            e.params.cssMode &&
                                e.autoplay.running &&
                                e.autoplay.run();
                    }, i));
            },
            start: function () {
                return (
                    void 0 === this.autoplay.timeout &&
                    !this.autoplay.running &&
                    ((this.autoplay.running = !0),
                    this.emit("autoplayStart"),
                    this.autoplay.run(),
                    !0)
                );
            },
            stop: function () {
                return (
                    !!this.autoplay.running &&
                    void 0 !== this.autoplay.timeout &&
                    (this.autoplay.timeout &&
                        (clearTimeout(this.autoplay.timeout),
                        (this.autoplay.timeout = void 0)),
                    (this.autoplay.running = !1),
                    this.emit("autoplayStop"),
                    !0)
                );
            },
            pause: function (e) {
                this.autoplay.running &&
                    (this.autoplay.paused ||
                        (this.autoplay.timeout &&
                            clearTimeout(this.autoplay.timeout),
                        (this.autoplay.paused = !0),
                        0 !== e && this.params.autoplay.waitForTransition
                            ? (this.$wrapperEl[0].addEventListener(
                                  "transitionend",
                                  this.autoplay.onTransitionEnd
                              ),
                              this.$wrapperEl[0].addEventListener(
                                  "webkitTransitionEnd",
                                  this.autoplay.onTransitionEnd
                              ))
                            : ((this.autoplay.paused = !1),
                              this.autoplay.run())));
            },
        },
        ge = {
            setTranslate: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || ((a = s), (s = 0));
                    var r = this.params.fadeEffect.crossFade
                        ? Math.max(1 - Math.abs(i[0].progress), 0)
                        : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: r }).transform(
                        "translate3d(" + s + "px, " + a + "px, 0px)"
                    );
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var a = !1;
                    i.transitionEnd(function () {
                        if (!a && t && !t.destroyed) {
                            (a = !0), (t.animating = !1);
                            for (
                                var e = [
                                        "webkitTransitionEnd",
                                        "transitionend",
                                    ],
                                    i = 0;
                                i < e.length;
                                i += 1
                            )
                                s.trigger(e[i]);
                        }
                    });
                }
            },
        },
        be = {
            setTranslate: function () {
                var e,
                    t = this.$el,
                    i = this.$wrapperEl,
                    s = this.slides,
                    a = this.width,
                    r = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow &&
                    (h
                        ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                              ((e = n(
                                  '<div class="swiper-cube-shadow"></div>'
                              )),
                              i.append(e)),
                          e.css({ height: a + "px" }))
                        : 0 === (e = t.find(".swiper-cube-shadow")).length &&
                          ((e = n('<div class="swiper-cube-shadow"></div>')),
                          t.append(e)));
                for (var u = 0; u < s.length; u += 1) {
                    var v = s.eq(u),
                        f = u;
                    p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && ((m = -m), (g = Math.floor(-m / 360)));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0
                        ? ((w = 4 * -g * l), (x = 0))
                        : (f - 1) % 4 == 0
                        ? ((w = 0), (x = 4 * -g * l))
                        : (f - 2) % 4 == 0
                        ? ((w = l + 4 * g * l), (x = l))
                        : (f - 3) % 4 == 0 &&
                          ((w = -l), (x = 3 * l + 4 * l * g)),
                        o && (w = -w),
                        h || ((y = w), (w = 0));
                    var E =
                        "rotateX(" +
                        (h ? 0 : -m) +
                        "deg) rotateY(" +
                        (h ? m : 0) +
                        "deg) translate3d(" +
                        w +
                        "px, " +
                        y +
                        "px, " +
                        x +
                        "px)";
                    if (
                        (b <= 1 &&
                            b > -1 &&
                            ((c = 90 * f + 90 * b),
                            o && (c = 90 * -f - 90 * b)),
                        v.transform(E),
                        d.slideShadows)
                    ) {
                        var T = h
                                ? v.find(".swiper-slide-shadow-left")
                                : v.find(".swiper-slide-shadow-top"),
                            S = h
                                ? v.find(".swiper-slide-shadow-right")
                                : v.find(".swiper-slide-shadow-bottom");
                        0 === T.length &&
                            ((T = n(
                                '<div class="swiper-slide-shadow-' +
                                    (h ? "left" : "top") +
                                    '"></div>'
                            )),
                            v.append(T)),
                            0 === S.length &&
                                ((S = n(
                                    '<div class="swiper-slide-shadow-' +
                                        (h ? "right" : "bottom") +
                                        '"></div>'
                                )),
                                v.append(S)),
                            T.length && (T[0].style.opacity = Math.max(-b, 0)),
                            S.length && (S[0].style.opacity = Math.max(b, 0));
                    }
                }
                if (
                    (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px",
                    }),
                    d.shadow)
                )
                    if (h)
                        e.transform(
                            "translate3d(0px, " +
                                (a / 2 + d.shadowOffset) +
                                "px, " +
                                -a / 2 +
                                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                                d.shadowScale +
                                ")"
                        );
                    else {
                        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            M =
                                1.5 -
                                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                                    Math.cos((2 * C * Math.PI) / 360) / 2),
                            P = d.shadowScale,
                            z = d.shadowScale / M,
                            k = d.shadowOffset;
                        e.transform(
                            "scale3d(" +
                                P +
                                ", 1, " +
                                z +
                                ") translate3d(0px, " +
                                (r / 2 + k) +
                                "px, " +
                                -r / 2 / z +
                                "px) rotateX(-90deg)"
                        );
                    }
                var $ = _.isSafari || _.isUiWebView ? -l / 2 : 0;
                i.transform(
                    "translate3d(0px,0," +
                        $ +
                        "px) rotateX(" +
                        (this.isHorizontal() ? 0 : c) +
                        "deg) rotateY(" +
                        (this.isHorizontal() ? -c : 0) +
                        "deg)"
                );
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides
                    .transition(e)
                    .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e),
                    this.params.cubeEffect.shadow &&
                        !this.isHorizontal() &&
                        t.find(".swiper-cube-shadow").transition(e);
            },
        },
        we = {
            setTranslate: function () {
                for (
                    var e = this.slides, t = this.rtlTranslate, i = 0;
                    i < e.length;
                    i += 1
                ) {
                    var s = e.eq(i),
                        a = s[0].progress;
                    this.params.flipEffect.limitRotation &&
                        (a = Math.max(Math.min(s[0].progress, 1), -1));
                    var r = -180 * a,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (
                        (this.isHorizontal()
                            ? t && (r = -r)
                            : ((d = l), (l = 0), (o = -r), (r = 0)),
                        (s[0].style.zIndex =
                            -Math.abs(Math.round(a)) + e.length),
                        this.params.flipEffect.slideShadows)
                    ) {
                        var h = this.isHorizontal()
                                ? s.find(".swiper-slide-shadow-left")
                                : s.find(".swiper-slide-shadow-top"),
                            p = this.isHorizontal()
                                ? s.find(".swiper-slide-shadow-right")
                                : s.find(".swiper-slide-shadow-bottom");
                        0 === h.length &&
                            ((h = n(
                                '<div class="swiper-slide-shadow-' +
                                    (this.isHorizontal() ? "left" : "top") +
                                    '"></div>'
                            )),
                            s.append(h)),
                            0 === p.length &&
                                ((p = n(
                                    '<div class="swiper-slide-shadow-' +
                                        (this.isHorizontal()
                                            ? "right"
                                            : "bottom") +
                                        '"></div>'
                                )),
                                s.append(p)),
                            h.length && (h[0].style.opacity = Math.max(-a, 0)),
                            p.length && (p[0].style.opacity = Math.max(a, 0));
                    }
                    s.transform(
                        "translate3d(" +
                            l +
                            "px, " +
                            d +
                            "px, 0px) rotateX(" +
                            o +
                            "deg) rotateY(" +
                            r +
                            "deg)"
                    );
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (
                    (i
                        .transition(e)
                        .find(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .transition(e),
                    t.params.virtualTranslate && 0 !== e)
                ) {
                    var r = !1;
                    i.eq(s).transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            (r = !0), (t.animating = !1);
                            for (
                                var e = [
                                        "webkitTransitionEnd",
                                        "transitionend",
                                    ],
                                    i = 0;
                                i < e.length;
                                i += 1
                            )
                                a.trigger(e[i]);
                        }
                    });
                }
            },
        },
        ye = {
            setTranslate: function () {
                for (
                    var e = this.width,
                        t = this.height,
                        i = this.slides,
                        s = this.$wrapperEl,
                        a = this.slidesSizesGrid,
                        r = this.params.coverflowEffect,
                        o = this.isHorizontal(),
                        l = this.translate,
                        d = o ? e / 2 - l : t / 2 - l,
                        p = o ? r.rotate : -r.rotate,
                        c = r.depth,
                        u = 0,
                        v = i.length;
                    u < v;
                    u += 1
                ) {
                    var f = i.eq(u),
                        m = a[u],
                        g =
                            ((d - f[0].swiperSlideOffset - m / 2) / m) *
                            r.modifier,
                        b = o ? p * g : 0,
                        w = o ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = r.stretch;
                    "string" == typeof x &&
                        -1 !== x.indexOf("%") &&
                        (x = (parseFloat(r.stretch) / 100) * m);
                    var E = o ? 0 : x * g,
                        T = o ? x * g : 0;
                    Math.abs(T) < 0.001 && (T = 0),
                        Math.abs(E) < 0.001 && (E = 0),
                        Math.abs(y) < 0.001 && (y = 0),
                        Math.abs(b) < 0.001 && (b = 0),
                        Math.abs(w) < 0.001 && (w = 0);
                    var S =
                        "translate3d(" +
                        T +
                        "px," +
                        E +
                        "px," +
                        y +
                        "px)  rotateX(" +
                        w +
                        "deg) rotateY(" +
                        b +
                        "deg)";
                    if (
                        (f.transform(S),
                        (f[0].style.zIndex = 1 - Math.abs(Math.round(g))),
                        r.slideShadows)
                    ) {
                        var C = o
                                ? f.find(".swiper-slide-shadow-left")
                                : f.find(".swiper-slide-shadow-top"),
                            M = o
                                ? f.find(".swiper-slide-shadow-right")
                                : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length &&
                            ((C = n(
                                '<div class="swiper-slide-shadow-' +
                                    (o ? "left" : "top") +
                                    '"></div>'
                            )),
                            f.append(C)),
                            0 === M.length &&
                                ((M = n(
                                    '<div class="swiper-slide-shadow-' +
                                        (o ? "right" : "bottom") +
                                        '"></div>'
                                )),
                                f.append(M)),
                            C.length && (C[0].style.opacity = g > 0 ? g : 0),
                            M.length && (M[0].style.opacity = -g > 0 ? -g : 0);
                    }
                }
                (h.pointerEvents || h.prefixedPointerEvents) &&
                    (s[0].style.perspectiveOrigin = d + "px 50%");
            },
            setTransition: function (e) {
                this.slides
                    .transition(e)
                    .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e);
            },
        },
        xe = {
            init: function () {
                var e = this.params.thumbs,
                    t = this.constructor;
                e.swiper instanceof t
                    ? ((this.thumbs.swiper = e.swiper),
                      d.extend(this.thumbs.swiper.originalParams, {
                          watchSlidesProgress: !0,
                          slideToClickedSlide: !1,
                      }),
                      d.extend(this.thumbs.swiper.params, {
                          watchSlidesProgress: !0,
                          slideToClickedSlide: !1,
                      }))
                    : d.isObject(e.swiper) &&
                      ((this.thumbs.swiper = new t(
                          d.extend({}, e.swiper, {
                              watchSlidesVisibility: !0,
                              watchSlidesProgress: !0,
                              slideToClickedSlide: !1,
                          })
                      )),
                      (this.thumbs.swiperCreated = !0)),
                    this.thumbs.swiper.$el.addClass(
                        this.params.thumbs.thumbsContainerClass
                    ),
                    this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
            },
            onThumbClick: function () {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (
                        !(
                            (i &&
                                n(i).hasClass(
                                    this.params.thumbs.slideThumbActiveClass
                                )) ||
                            null == t
                        )
                    ) {
                        var s;
                        if (
                            ((s = e.params.loop
                                ? parseInt(
                                      n(e.clickedSlide).attr(
                                          "data-swiper-slide-index"
                                      ),
                                      10
                                  )
                                : t),
                            this.params.loop)
                        ) {
                            var a = this.activeIndex;
                            this.slides
                                .eq(a)
                                .hasClass(this.params.slideDuplicateClass) &&
                                (this.loopFix(),
                                (this._clientLeft =
                                    this.$wrapperEl[0].clientLeft),
                                (a = this.activeIndex));
                            var r = this.slides
                                    .eq(a)
                                    .prevAll(
                                        '[data-swiper-slide-index="' + s + '"]'
                                    )
                                    .eq(0)
                                    .index(),
                                o = this.slides
                                    .eq(a)
                                    .nextAll(
                                        '[data-swiper-slide-index="' + s + '"]'
                                    )
                                    .eq(0)
                                    .index();
                            s =
                                void 0 === r
                                    ? o
                                    : void 0 === o
                                    ? r
                                    : o - a < a - r
                                    ? o
                                    : r;
                        }
                        this.slideTo(s);
                    }
                }
            },
            update: function (e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i =
                            "auto" === t.params.slidesPerView
                                ? t.slidesPerViewDynamic()
                                : t.params.slidesPerView,
                        s = this.params.thumbs.autoScrollOffset,
                        a = s && !t.params.loop;
                    if (this.realIndex !== t.realIndex || a) {
                        var r,
                            n,
                            o = t.activeIndex;
                        if (t.params.loop) {
                            t.slides
                                .eq(o)
                                .hasClass(t.params.slideDuplicateClass) &&
                                (t.loopFix(),
                                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                                (o = t.activeIndex));
                            var l = t.slides
                                    .eq(o)
                                    .prevAll(
                                        '[data-swiper-slide-index="' +
                                            this.realIndex +
                                            '"]'
                                    )
                                    .eq(0)
                                    .index(),
                                d = t.slides
                                    .eq(o)
                                    .nextAll(
                                        '[data-swiper-slide-index="' +
                                            this.realIndex +
                                            '"]'
                                    )
                                    .eq(0)
                                    .index();
                            (r =
                                void 0 === l
                                    ? d
                                    : void 0 === d
                                    ? l
                                    : d - o == o - l
                                    ? o
                                    : d - o < o - l
                                    ? d
                                    : l),
                                (n =
                                    this.activeIndex > this.previousIndex
                                        ? "next"
                                        : "prev");
                        } else
                            n =
                                (r = this.realIndex) > this.previousIndex
                                    ? "next"
                                    : "prev";
                        a && (r += "next" === n ? s : -1 * s),
                            t.visibleSlidesIndexes &&
                                t.visibleSlidesIndexes.indexOf(r) < 0 &&
                                (t.params.centeredSlides
                                    ? (r =
                                          r > o
                                              ? r - Math.floor(i / 2) + 1
                                              : r + Math.floor(i / 2) - 1)
                                    : r > o && (r = r - i + 1),
                                t.slideTo(r, e ? 0 : void 0));
                    }
                    var h = 1,
                        p = this.params.thumbs.slideThumbActiveClass;
                    if (
                        (this.params.slidesPerView > 1 &&
                            !this.params.centeredSlides &&
                            (h = this.params.slidesPerView),
                        this.params.thumbs.multipleActiveThumbs || (h = 1),
                        (h = Math.floor(h)),
                        t.slides.removeClass(p),
                        t.params.loop ||
                            (t.params.virtual && t.params.virtual.enabled))
                    )
                        for (var c = 0; c < h; c += 1)
                            t.$wrapperEl
                                .children(
                                    '[data-swiper-slide-index="' +
                                        (this.realIndex + c) +
                                        '"]'
                                )
                                .addClass(p);
                    else
                        for (var u = 0; u < h; u += 1)
                            t.slides.eq(this.realIndex + u).addClass(p);
                }
            },
        },
        Ee = [
            K,
            U,
            Z,
            Q,
            ee,
            ie,
            ae,
            {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container",
                    },
                },
                create: function () {
                    d.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: re.enable.bind(this),
                            disable: re.disable.bind(this),
                            handle: re.handle.bind(this),
                            handleMouseEnter: re.handleMouseEnter.bind(this),
                            handleMouseLeave: re.handleMouseLeave.bind(this),
                            animateSlider: re.animateSlider.bind(this),
                            releaseScroll: re.releaseScroll.bind(this),
                            lastScrollTime: d.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: [],
                        },
                    });
                },
                on: {
                    init: function () {
                        !this.params.mousewheel.enabled &&
                            this.params.cssMode &&
                            this.mousewheel.disable(),
                            this.params.mousewheel.enabled &&
                                this.mousewheel.enable();
                    },
                    destroy: function () {
                        this.params.cssMode && this.mousewheel.enable(),
                            this.mousewheel.enabled &&
                                this.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                    },
                },
                create: function () {
                    d.extend(this, {
                        navigation: {
                            init: ne.init.bind(this),
                            update: ne.update.bind(this),
                            destroy: ne.destroy.bind(this),
                            onNextClick: ne.onNextClick.bind(this),
                            onPrevClick: ne.onPrevClick.bind(this),
                        },
                    });
                },
                on: {
                    init: function () {
                        this.navigation.init(), this.navigation.update();
                    },
                    toEdge: function () {
                        this.navigation.update();
                    },
                    fromEdge: function () {
                        this.navigation.update();
                    },
                    destroy: function () {
                        this.navigation.destroy();
                    },
                    click: function (e) {
                        var t,
                            i = this.navigation,
                            s = i.$nextEl,
                            a = i.$prevEl;
                        !this.params.navigation.hideOnClick ||
                            n(e.target).is(a) ||
                            n(e.target).is(s) ||
                            (s
                                ? (t = s.hasClass(
                                      this.params.navigation.hiddenClass
                                  ))
                                : a &&
                                  (t = a.hasClass(
                                      this.params.navigation.hiddenClass
                                  )),
                            !0 === t
                                ? this.emit("navigationShow", this)
                                : this.emit("navigationHide", this),
                            s &&
                                s.toggleClass(
                                    this.params.navigation.hiddenClass
                                ),
                            a &&
                                a.toggleClass(
                                    this.params.navigation.hiddenClass
                                ));
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e;
                        },
                        formatFractionTotal: function (e) {
                            return e;
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass:
                            "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass:
                            "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create: function () {
                    d.extend(this, {
                        pagination: {
                            init: oe.init.bind(this),
                            render: oe.render.bind(this),
                            update: oe.update.bind(this),
                            destroy: oe.destroy.bind(this),
                            dynamicBulletIndex: 0,
                        },
                    });
                },
                on: {
                    init: function () {
                        this.pagination.init(),
                            this.pagination.render(),
                            this.pagination.update();
                    },
                    activeIndexChange: function () {
                        (this.params.loop || void 0 === this.snapIndex) &&
                            this.pagination.update();
                    },
                    snapIndexChange: function () {
                        this.params.loop || this.pagination.update();
                    },
                    slidesLengthChange: function () {
                        this.params.loop &&
                            (this.pagination.render(),
                            this.pagination.update());
                    },
                    snapGridLengthChange: function () {
                        this.params.loop ||
                            (this.pagination.render(),
                            this.pagination.update());
                    },
                    destroy: function () {
                        this.pagination.destroy();
                    },
                    click: function (e) {
                        this.params.pagination.el &&
                            this.params.pagination.hideOnClick &&
                            this.pagination.$el.length > 0 &&
                            !n(e.target).hasClass(
                                this.params.pagination.bulletClass
                            ) &&
                            (!0 ===
                            this.pagination.$el.hasClass(
                                this.params.pagination.hiddenClass
                            )
                                ? this.emit("paginationShow", this)
                                : this.emit("paginationHide", this),
                            this.pagination.$el.toggleClass(
                                this.params.pagination.hiddenClass
                            ));
                    },
                },
            },
            {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                    },
                },
                create: function () {
                    d.extend(this, {
                        scrollbar: {
                            init: le.init.bind(this),
                            destroy: le.destroy.bind(this),
                            updateSize: le.updateSize.bind(this),
                            setTranslate: le.setTranslate.bind(this),
                            setTransition: le.setTransition.bind(this),
                            enableDraggable: le.enableDraggable.bind(this),
                            disableDraggable: le.disableDraggable.bind(this),
                            setDragPosition: le.setDragPosition.bind(this),
                            getPointerPosition:
                                le.getPointerPosition.bind(this),
                            onDragStart: le.onDragStart.bind(this),
                            onDragMove: le.onDragMove.bind(this),
                            onDragEnd: le.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init: function () {
                        this.scrollbar.init(),
                            this.scrollbar.updateSize(),
                            this.scrollbar.setTranslate();
                    },
                    update: function () {
                        this.scrollbar.updateSize();
                    },
                    resize: function () {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate: function () {
                        this.scrollbar.updateSize();
                    },
                    setTranslate: function () {
                        this.scrollbar.setTranslate();
                    },
                    setTransition: function (e) {
                        this.scrollbar.setTransition(e);
                    },
                    destroy: function () {
                        this.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create: function () {
                    d.extend(this, {
                        parallax: {
                            setTransform: de.setTransform.bind(this),
                            setTranslate: de.setTranslate.bind(this),
                            setTransition: de.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        this.params.parallax.enabled &&
                            ((this.params.watchSlidesProgress = !0),
                            (this.originalParams.watchSlidesProgress = !0));
                    },
                    init: function () {
                        this.params.parallax.enabled &&
                            this.parallax.setTranslate();
                    },
                    setTranslate: function () {
                        this.params.parallax.enabled &&
                            this.parallax.setTranslate();
                    },
                    setTransition: function (e) {
                        this.params.parallax.enabled &&
                            this.parallax.setTransition(e);
                    },
                },
            },
            {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed",
                    },
                },
                create: function () {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3,
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0,
                            },
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                        .split(" ")
                        .forEach(function (i) {
                            t[i] = he[i].bind(e);
                        }),
                        d.extend(e, { zoom: t });
                    var i = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: function () {
                            return i;
                        },
                        set: function (t) {
                            if (i !== t) {
                                var s = e.zoom.gesture.$imageEl
                                        ? e.zoom.gesture.$imageEl[0]
                                        : void 0,
                                    a = e.zoom.gesture.$slideEl
                                        ? e.zoom.gesture.$slideEl[0]
                                        : void 0;
                                e.emit("zoomChange", t, s, a);
                            }
                            i = t;
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.zoom.enabled && this.zoom.enable();
                    },
                    destroy: function () {
                        this.zoom.disable();
                    },
                    touchStart: function (e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd: function (e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap: function (e) {
                        this.params.zoom.enabled &&
                            this.zoom.enabled &&
                            this.params.zoom.toggle &&
                            this.zoom.toggle(e);
                    },
                    transitionEnd: function () {
                        this.zoom.enabled &&
                            this.params.zoom.enabled &&
                            this.zoom.onTransitionEnd();
                    },
                    slideChange: function () {
                        this.zoom.enabled &&
                            this.params.zoom.enabled &&
                            this.params.cssMode &&
                            this.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create: function () {
                    d.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: pe.load.bind(this),
                            loadInSlide: pe.loadInSlide.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        this.params.lazy.enabled &&
                            this.params.preloadImages &&
                            (this.params.preloadImages = !1);
                    },
                    init: function () {
                        this.params.lazy.enabled &&
                            !this.params.loop &&
                            0 === this.params.initialSlide &&
                            this.lazy.load();
                    },
                    scroll: function () {
                        this.params.freeMode &&
                            !this.params.freeModeSticky &&
                            this.lazy.load();
                    },
                    resize: function () {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    scrollbarDragMove: function () {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    transitionStart: function () {
                        this.params.lazy.enabled &&
                            (this.params.lazy.loadOnTransitionStart ||
                                (!this.params.lazy.loadOnTransitionStart &&
                                    !this.lazy.initialImageLoaded)) &&
                            this.lazy.load();
                    },
                    transitionEnd: function () {
                        this.params.lazy.enabled &&
                            !this.params.lazy.loadOnTransitionStart &&
                            this.lazy.load();
                    },
                    slideChange: function () {
                        this.params.lazy.enabled &&
                            this.params.cssMode &&
                            this.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: {
                    controller: { control: void 0, inverse: !1, by: "slide" },
                },
                create: function () {
                    d.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction:
                                ce.getInterpolateFunction.bind(this),
                            setTranslate: ce.setTranslate.bind(this),
                            setTransition: ce.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    update: function () {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0),
                            delete this.controller.spline);
                    },
                    resize: function () {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0),
                            delete this.controller.spline);
                    },
                    observerUpdate: function () {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0),
                            delete this.controller.spline);
                    },
                    setTranslate: function (e, t) {
                        this.controller.control &&
                            this.controller.setTranslate(e, t);
                    },
                    setTransition: function (e, t) {
                        this.controller.control &&
                            this.controller.setTransition(e, t);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                    },
                },
                create: function () {
                    var e = this;
                    d.extend(e, {
                        a11y: {
                            liveRegion: n(
                                '<span class="' +
                                    e.params.a11y.notificationClass +
                                    '" aria-live="assertive" aria-atomic="true"></span>'
                            ),
                        },
                    }),
                        Object.keys(ue).forEach(function (t) {
                            e.a11y[t] = ue[t].bind(e);
                        });
                },
                on: {
                    init: function () {
                        this.params.a11y.enabled &&
                            (this.a11y.init(), this.a11y.updateNavigation());
                    },
                    toEdge: function () {
                        this.params.a11y.enabled &&
                            this.a11y.updateNavigation();
                    },
                    fromEdge: function () {
                        this.params.a11y.enabled &&
                            this.a11y.updateNavigation();
                    },
                    paginationUpdate: function () {
                        this.params.a11y.enabled &&
                            this.a11y.updatePagination();
                    },
                    destroy: function () {
                        this.params.a11y.enabled && this.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: {
                    history: { enabled: !1, replaceState: !1, key: "slides" },
                },
                create: function () {
                    d.extend(this, {
                        history: {
                            init: ve.init.bind(this),
                            setHistory: ve.setHistory.bind(this),
                            setHistoryPopState:
                                ve.setHistoryPopState.bind(this),
                            scrollToSlide: ve.scrollToSlide.bind(this),
                            destroy: ve.destroy.bind(this),
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.history.enabled && this.history.init();
                    },
                    destroy: function () {
                        this.params.history.enabled && this.history.destroy();
                    },
                    transitionEnd: function () {
                        this.history.initialized &&
                            this.history.setHistory(
                                this.params.history.key,
                                this.activeIndex
                            );
                    },
                    slideChange: function () {
                        this.history.initialized &&
                            this.params.cssMode &&
                            this.history.setHistory(
                                this.params.history.key,
                                this.activeIndex
                            );
                    },
                },
            },
            {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1,
                    },
                },
                create: function () {
                    d.extend(this, {
                        hashNavigation: {
                            initialized: !1,
                            init: fe.init.bind(this),
                            destroy: fe.destroy.bind(this),
                            setHash: fe.setHash.bind(this),
                            onHashCange: fe.onHashCange.bind(this),
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.hashNavigation.enabled &&
                            this.hashNavigation.init();
                    },
                    destroy: function () {
                        this.params.hashNavigation.enabled &&
                            this.hashNavigation.destroy();
                    },
                    transitionEnd: function () {
                        this.hashNavigation.initialized &&
                            this.hashNavigation.setHash();
                    },
                    slideChange: function () {
                        this.hashNavigation.initialized &&
                            this.params.cssMode &&
                            this.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                    },
                },
                create: function () {
                    var e = this;
                    d.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: me.run.bind(e),
                            start: me.start.bind(e),
                            stop: me.stop.bind(e),
                            pause: me.pause.bind(e),
                            onVisibilityChange: function () {
                                "hidden" === document.visibilityState &&
                                    e.autoplay.running &&
                                    e.autoplay.pause(),
                                    "visible" === document.visibilityState &&
                                        e.autoplay.paused &&
                                        (e.autoplay.run(),
                                        (e.autoplay.paused = !1));
                            },
                            onTransitionEnd: function (t) {
                                e &&
                                    !e.destroyed &&
                                    e.$wrapperEl &&
                                    t.target === this &&
                                    (e.$wrapperEl[0].removeEventListener(
                                        "transitionend",
                                        e.autoplay.onTransitionEnd
                                    ),
                                    e.$wrapperEl[0].removeEventListener(
                                        "webkitTransitionEnd",
                                        e.autoplay.onTransitionEnd
                                    ),
                                    (e.autoplay.paused = !1),
                                    e.autoplay.running
                                        ? e.autoplay.run()
                                        : e.autoplay.stop());
                            },
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.autoplay.enabled &&
                            (this.autoplay.start(),
                            document.addEventListener(
                                "visibilitychange",
                                this.autoplay.onVisibilityChange
                            ));
                    },
                    beforeTransitionStart: function (e, t) {
                        this.autoplay.running &&
                            (t || !this.params.autoplay.disableOnInteraction
                                ? this.autoplay.pause(e)
                                : this.autoplay.stop());
                    },
                    sliderFirstMove: function () {
                        this.autoplay.running &&
                            (this.params.autoplay.disableOnInteraction
                                ? this.autoplay.stop()
                                : this.autoplay.pause());
                    },
                    touchEnd: function () {
                        this.params.cssMode &&
                            this.autoplay.paused &&
                            !this.params.autoplay.disableOnInteraction &&
                            this.autoplay.run();
                    },
                    destroy: function () {
                        this.autoplay.running && this.autoplay.stop(),
                            document.removeEventListener(
                                "visibilitychange",
                                this.autoplay.onVisibilityChange
                            );
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function () {
                    d.extend(this, {
                        fadeEffect: {
                            setTranslate: ge.setTranslate.bind(this),
                            setTransition: ge.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(
                                this.params.containerModifierClass + "fade"
                            );
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0,
                            };
                            d.extend(this.params, e),
                                d.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function () {
                        "fade" === this.params.effect &&
                            this.fadeEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "fade" === this.params.effect &&
                            this.fadeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    },
                },
                create: function () {
                    d.extend(this, {
                        cubeEffect: {
                            setTranslate: be.setTranslate.bind(this),
                            setTransition: be.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(
                                this.params.containerModifierClass + "cube"
                            ),
                                this.classNames.push(
                                    this.params.containerModifierClass + "3d"
                                );
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0,
                            };
                            d.extend(this.params, e),
                                d.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function () {
                        "cube" === this.params.effect &&
                            this.cubeEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "cube" === this.params.effect &&
                            this.cubeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function () {
                    d.extend(this, {
                        flipEffect: {
                            setTranslate: we.setTranslate.bind(this),
                            setTransition: we.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(
                                this.params.containerModifierClass + "flip"
                            ),
                                this.classNames.push(
                                    this.params.containerModifierClass + "3d"
                                );
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0,
                            };
                            d.extend(this.params, e),
                                d.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function () {
                        "flip" === this.params.effect &&
                            this.flipEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "flip" === this.params.effect &&
                            this.flipEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0,
                    },
                },
                create: function () {
                    d.extend(this, {
                        coverflowEffect: {
                            setTranslate: ye.setTranslate.bind(this),
                            setTransition: ye.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        "coverflow" === this.params.effect &&
                            (this.classNames.push(
                                this.params.containerModifierClass + "coverflow"
                            ),
                            this.classNames.push(
                                this.params.containerModifierClass + "3d"
                            ),
                            (this.params.watchSlidesProgress = !0),
                            (this.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate: function () {
                        "coverflow" === this.params.effect &&
                            this.coverflowEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "coverflow" === this.params.effect &&
                            this.coverflowEffect.setTransition(e);
                    },
                },
            },
            {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs",
                    },
                },
                create: function () {
                    d.extend(this, {
                        thumbs: {
                            swiper: null,
                            init: xe.init.bind(this),
                            update: xe.update.bind(this),
                            onThumbClick: xe.onThumbClick.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        var e = this.params.thumbs;
                        e &&
                            e.swiper &&
                            (this.thumbs.init(), this.thumbs.update(!0));
                    },
                    slideChange: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    update: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    resize: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    observerUpdate: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    setTransition: function (e) {
                        var t = this.thumbs.swiper;
                        t && t.setTransition(e);
                    },
                    beforeDestroy: function () {
                        var e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy();
                    },
                },
            },
        ];
    return (
        void 0 === j.use &&
            ((j.use = j.Class.use), (j.installModule = j.Class.installModule)),
        j.use(Ee),
        j
    );
});
//# sourceMappingURL=swiper.min.js.map

/* ==========================================================================
   5. Isotope PACKAGED
   ========================================================================== */

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
              return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';
            return (
                t.each(function (t, u) {
                    var h = a.data(u, i);
                    if (!h)
                        return void r(
                            i +
                                " not initialized. Cannot call methods, i.e. " +
                                s
                        );
                    var d = h[e];
                    if (!d || "_" == e.charAt(0))
                        return void r(s + " is not a valid method");
                    var l = d.apply(h, o);
                    n = void 0 === n ? l : n;
                }),
                void 0 !== n ? n : t
            );
        }
        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n
                    ? (n.option(e), n._init())
                    : ((n = new s(o, e)), a.data(o, i, n));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (s.prototype.option ||
                    (s.prototype.option = function (t) {
                        a.isPlainObject(t) &&
                            (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e);
                    }
                    return h(this, t), this;
                }),
                o(a));
    }
    function o(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var n = Array.prototype.slice,
        s = t.console,
        r =
            "undefined" == typeof s
                ? function () {}
                : function (t) {
                      s.error(t);
                  };
    return o(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("ev-emitter/ev-emitter", e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        o = (i[t] = i[t] || []);
                    return o.indexOf(e) == -1 && o.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}),
                        o = (i[t] = i[t] || {});
                    return (o[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return o != -1 && i.splice(o, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (
                        var o = this._onceEvents && this._onceEvents[t], n = 0;
                        n < i.length;
                        n++
                    ) {
                        var s = i[n],
                            r = o && o[s];
                        r && (this.off(t, s), delete o[s]), s.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("get-size/get-size", e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e;
        }
        function e() {}
        function i() {
            for (
                var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0,
                    },
                    e = 0;
                e < h;
                e++
            ) {
                var i = u[e];
                t[i] = 0;
            }
            return t;
        }
        function o(t) {
            var e = getComputedStyle(t);
            return (
                e ||
                    a(
                        "Style returned " +
                            e +
                            ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                    ),
                e
            );
        }
        function n() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"),
                    (e.style.padding = "1px 2px 3px 4px"),
                    (e.style.borderStyle = "solid"),
                    (e.style.borderWidth = "1px 2px 3px 4px"),
                    (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                (r = 200 == Math.round(t(n.width))),
                    (s.isBoxSizeOuter = r),
                    i.removeChild(e);
            }
        }
        function s(e) {
            if (
                (n(),
                "string" == typeof e && (e = document.querySelector(e)),
                e && "object" == typeof e && e.nodeType)
            ) {
                var s = o(e);
                if ("none" == s.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (
                    var d = (a.isBorderBox = "border-box" == s.boxSizing),
                        l = 0;
                    l < h;
                    l++
                ) {
                    var f = u[l],
                        c = s[f],
                        m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight,
                    y = a.paddingTop + a.paddingBottom,
                    g = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    z = a.borderTopWidth + a.borderBottomWidth,
                    I = d && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (I ? 0 : p + _));
                var S = t(s.height);
                return (
                    S !== !1 && (a.height = S + (I ? 0 : y + z)),
                    (a.innerWidth = a.width - (p + _)),
                    (a.innerHeight = a.height - (y + z)),
                    (a.outerWidth = a.width + g),
                    (a.outerHeight = a.height + v),
                    a
                );
            }
        }
        var r,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            u = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
            ],
            h = u.length,
            d = !1;
        return s;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("desandro-matches-selector/matches-selector", e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (
                var e = ["webkit", "moz", "ms", "o"], i = 0;
                i < e.length;
                i++
            ) {
                var o = e[i],
                    n = o + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "fizzy-ui-utils/utils",
                  ["desandro-matches-selector/matches-selector"],
                  function (i) {
                      return e(t, i);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            });
        var o = Array.prototype.slice;
        (i.makeArray = function (t) {
            if (Array.isArray(t)) return t;
            if (null === t || void 0 === t) return [];
            var e = "object" == typeof t && "number" == typeof t.length;
            return e ? o.call(t) : [t];
        }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                i != -1 && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; )
                    if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!o) return void n.push(t);
                            e(t, o) && n.push(t);
                            for (
                                var i = t.querySelectorAll(o), s = 0;
                                s < i.length;
                                s++
                            )
                                n.push(i[s]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                i = i || 100;
                var o = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    clearTimeout(t);
                    var e = arguments,
                        s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e), delete s[n];
                    }, i);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e
                    ? setTimeout(t)
                    : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = t.console;
        return (
            (i.htmlInit = function (e, o) {
                i.docReady(function () {
                    var s = i.toDashed(o),
                        r = "data-" + s,
                        a = document.querySelectorAll("[" + r + "]"),
                        u = document.querySelectorAll(".js-" + s),
                        h = i.makeArray(a).concat(i.makeArray(u)),
                        d = r + "-options",
                        l = t.jQuery;
                    h.forEach(function (t) {
                        var i,
                            s = t.getAttribute(r) || t.getAttribute(d);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (
                                n &&
                                n.error(
                                    "Error parsing " +
                                        r +
                                        " on " +
                                        t.className +
                                        ": " +
                                        a
                                )
                            );
                        }
                        var u = new e(t, i);
                        l && l.data(t, o, u);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "outlayer/item",
                  ["ev-emitter/ev-emitter", "get-size/get-size"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}),
              (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function o(t, e) {
            t &&
                ((this.element = t),
                (this.layout = e),
                (this.position = { x: 0, y: 0 }),
                this._create());
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var s = document.documentElement.style,
            r =
                "string" == typeof s.transition
                    ? "transition"
                    : "WebkitTransition",
            a =
                "string" == typeof s.transform
                    ? "transform"
                    : "WebkitTransform",
            u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend",
            }[r],
            h = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay",
            },
            d = (o.prototype = Object.create(t.prototype));
        (d.constructor = o),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                    this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.getSize = function () {
                this.size = e(this.element);
            }),
            (d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i];
                }
            }),
            (d.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    o = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    s = parseFloat(o),
                    r = parseFloat(n),
                    a = this.layout.size;
                o.indexOf("%") != -1 && (s = (s / 100) * a.width),
                    n.indexOf("%") != -1 && (r = (r / 100) * a.height),
                    (s = isNaN(s) ? 0 : s),
                    (r = isNaN(r) ? 0 : r),
                    (s -= e ? a.paddingLeft : a.paddingRight),
                    (r -= i ? a.paddingTop : a.paddingBottom),
                    (this.position.x = s),
                    (this.position.y = r);
            }),
            (d.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    s = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[n];
                (e[s] = this.getXValue(a)), (e[r] = "");
                var u = o ? "paddingTop" : "paddingBottom",
                    h = o ? "top" : "bottom",
                    d = o ? "bottom" : "top",
                    l = this.position.y + t[u];
                (e[h] = this.getYValue(l)),
                    (e[d] = ""),
                    this.css(e),
                    this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e
                    ? (t / this.layout.size.width) * 100 + "%"
                    : t + "px";
            }),
            (d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e
                    ? (t / this.layout.size.height) * 100 + "%"
                    : t + "px";
            }),
            (d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = t == this.position.x && e == this.position.y;
                if ((this.setPosition(t, e), n && !this.isTransitioning))
                    return void this.layoutPosition();
                var s = t - i,
                    r = e - o,
                    a = {};
                (a.transform = this.getTranslate(s, r)),
                    this.transition({
                        to: a,
                        onTransitionEnd: { transform: this.layoutPosition },
                        isCleaning: !0,
                    });
            }),
            (d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop");
                return (
                    (t = i ? t : -t),
                    (e = o ? e : -e),
                    "translate3d(" + t + "px, " + e + "px, 0)"
                );
            }),
            (d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (t, e) {
                (this.position.x = parseFloat(t)),
                    (this.position.y = parseFloat(e));
            }),
            (d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd)
                    t.onTransitionEnd[e].call(this);
            }),
            (d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration))
                    return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd)
                    e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                    (e.ingProperties[i] = !0),
                        t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null;
                }
                this.enableTransition(t.to),
                    this.css(t.to),
                    (this.isTransitioning = !0);
            });
        var l = "opacity," + n(a);
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t),
                    this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0,
                    }),
                    this.element.addEventListener(u, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (d.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var f = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = f[t.propertyName] || t.propertyName;
                if (
                    (delete e.ingProperties[o],
                    i(e.ingProperties) && this.disableTransition(),
                    o in e.clean &&
                        ((this.element.style[t.propertyName] = ""),
                        delete e.clean[o]),
                    o in e.onEnd)
                ) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(u, this, !1),
                    (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: "",
        };
        return (
            (d.removeTransitionStyles = function () {
                this.css(c);
            }),
            (d.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({ display: "" }),
                    this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd),
                    this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                    });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd),
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                    });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden &&
                    (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: "",
                });
            }),
            o
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(
                  "outlayer/outlayer",
                  [
                      "ev-emitter/ev-emitter",
                      "get-size/get-size",
                      "fizzy-ui-utils/utils",
                      "./item",
                  ],
                  function (i, o, n, s) {
                      return e(t, i, o, n, s);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("ev-emitter"),
                  require("get-size"),
                  require("fizzy-ui-utils"),
                  require("./item")
              ))
            : (t.Outlayer = e(
                  t,
                  t.EvEmitter,
                  t.getSize,
                  t.fizzyUIUtils,
                  t.Outlayer.Item
              ));
    })(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i)
                return void (
                    u &&
                    u.error(
                        "Bad element for " +
                            this.constructor.namespace +
                            ": " +
                            (i || t)
                    )
                );
            (this.element = i),
                h && (this.$element = h(this.element)),
                (this.options = o.extend({}, this.constructor.defaults)),
                this.option(e);
            var n = ++l;
            (this.element.outlayerGUID = n), (f[n] = this), this._create();
            var s = this._getOption("initLayout");
            s && this.layout();
        }
        function r(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (
                (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                e
            );
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = m[o] || 1;
            return i * n;
        }
        var u = t.console,
            h = t.jQuery,
            d = function () {},
            l = 0,
            f = {};
        (s.namespace = "outlayer"),
            (s.Item = n),
            (s.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var c = s.prototype;
        o.extend(c, e.prototype),
            (c.option = function (t) {
                o.extend(this.options, t);
            }),
            (c._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e]
                    ? this.options[e]
                    : this.options[t];
            }),
            (s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (c._create = function () {
                this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (c.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (c._itemize = function (t) {
                for (
                    var e = this._filterFindItemElements(t),
                        i = this.constructor.Item,
                        o = [],
                        n = 0;
                    n < e.length;
                    n++
                ) {
                    var s = e[n],
                        r = new i(s, this);
                    o.push(r);
                }
                return o;
            }),
            (c._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }),
            (c.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (c.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (c._init = c.layout),
            (c._resetLayout = function () {
                this.getSize();
            }),
            (c.getSize = function () {
                this.size = i(this.element);
            }),
            (c._getMeasurement = function (t, e) {
                var o,
                    n = this.options[t];
                n
                    ? ("string" == typeof n
                          ? (o = this.element.querySelector(n))
                          : n instanceof HTMLElement && (o = n),
                      (this[t] = o ? i(o)[e] : n))
                    : (this[t] = 0);
            }),
            (c.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)),
                    this._layoutItems(t, e),
                    this._postLayout();
            }),
            (c._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (c._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var o = this._getItemLayoutPosition(t);
                        (o.item = t),
                            (o.isInstant = e || t.isLayoutInstant),
                            i.push(o);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (c._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (c._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (c.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t
                    ? void (this.stagger = 0)
                    : ((this.stagger = a(t)), this.stagger);
            }),
            (c._positionItem = function (t, e, i, o, n) {
                o
                    ? t.goTo(e, i)
                    : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }),
            (c._postLayout = function () {
                this.resizeContainer();
            }),
            (c.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e &&
                        (this._setContainerMeasure(e.width, !0),
                        this._setContainerMeasure(e.height, !1));
                }
            }),
            (c._getContainerSize = d),
            (c._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox &&
                        (t += e
                            ? i.paddingLeft +
                              i.paddingRight +
                              i.borderLeftWidth +
                              i.borderRightWidth
                            : i.paddingBottom +
                              i.paddingTop +
                              i.borderTopWidth +
                              i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (c._emitCompleteOnItems = function (t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [e]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this,
                    s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o);
                });
            }),
            (c.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), h))
                    if (
                        ((this.$element = this.$element || h(this.element)), e)
                    ) {
                        var n = h.Event(e);
                        (n.type = t), this.$element.trigger(n, i);
                    } else this.$element.trigger(t, i);
            }),
            (c.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (c.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (c.stamp = function (t) {
                (t = this._find(t)),
                    t &&
                        ((this.stamps = this.stamps.concat(t)),
                        t.forEach(this.ignore, this));
            }),
            (c.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            o.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (c._find = function (t) {
                if (t)
                    return (
                        "string" == typeof t &&
                            (t = this.element.querySelectorAll(t)),
                        (t = o.makeArray(t))
                    );
            }),
            (c._manageStamps = function () {
                this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this));
            }),
            (c._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (c._manageStamp = d),
            (c._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    o = this._boundingRect,
                    n = i(t),
                    s = {
                        left: e.left - o.left - n.marginLeft,
                        top: e.top - o.top - n.marginTop,
                        right: o.right - e.right - n.marginRight,
                        bottom: o.bottom - e.bottom - n.marginBottom,
                    };
                return s;
            }),
            (c.handleEvent = o.handleEvent),
            (c.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (c.unbindResize = function () {
                t.removeEventListener("resize", this),
                    (this.isResizeBound = !1);
            }),
            (c.onresize = function () {
                this.resize();
            }),
            o.debounceMethod(s, "onresize", 100),
            (c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (c.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (c.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (c.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i);
                }
            }),
            (c.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (c.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (c.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (c.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (c.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (c.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (c.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), o.removeFrom(this.items, t);
                        }, this);
            }),
            (c.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e],
                    delete this.element.outlayerGUID,
                    h && h.removeData(this.element, this.constructor.namespace);
            }),
            (s.data = function (t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e];
            }),
            (s.create = function (t, e) {
                var i = r(s);
                return (
                    (i.defaults = o.extend({}, s.defaults)),
                    o.extend(i.defaults, e),
                    (i.compatOptions = o.extend({}, s.compatOptions)),
                    (i.namespace = t),
                    (i.data = s.data),
                    (i.Item = r(n)),
                    o.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
                );
            });
        var m = { ms: 1, s: 1e3 };
        return (s.Item = n), s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++),
                o.call(this),
                (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id),
                        (this.sortData["original-order"] = this.id),
                        (this.sortData.random = Math.random());
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-mode",
                  ["get-size/get-size", "outlayer/outlayer"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}),
              (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            (this.isotope = t),
                t &&
                    ((this.options = t.options[this.namespace]),
                    (this.element = t.element),
                    (this.items = t.filteredItems),
                    (this.size = t.size));
        }
        var o = i.prototype,
            n = [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
                "_getOption",
            ];
        return (
            n.forEach(function (t) {
                o[t] = function () {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (o.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight;
            }),
            (o._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (o.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (o.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (o.getSegmentSize = function (t, e) {
                var i = t + e,
                    o = "outer" + e;
                if ((this._getMeasurement(i, o), !this[i])) {
                    var n = this.getFirstItemSize();
                    this[i] = (n && n[o]) || this.isotope.size["inner" + e];
                }
            }),
            (o.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }),
            (o.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (o.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (t, e) {
                function n() {
                    i.apply(this, arguments);
                }
                return (
                    (n.prototype = Object.create(o)),
                    (n.prototype.constructor = n),
                    e && (n.options = e),
                    (n.prototype.namespace = t),
                    (i.modes[t] = n),
                    n
                );
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "masonry-layout/masonry",
                  ["outlayer/outlayer", "get-size/get-size"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return (
            (o._resetLayout = function () {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (o.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth =
                        (i && e(i).outerWidth) || this.containerWidth;
                }
                var o = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    s = n / o,
                    r = o - (n % o),
                    a = r && r < 1 ? "round" : "floor";
                (s = Math[a](s)), (this.cols = Math.max(s, 1));
            }),
            (o.getContainerWidth = function () {
                var t = this._getOption("fitWidth"),
                    i = t ? this.element.parentNode : this.element,
                    o = e(i);
                this.containerWidth = o && o.innerWidth;
            }),
            (o._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && e < 1 ? "round" : "ceil",
                    o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (
                    var n = this.options.horizontalOrder
                            ? "_getHorizontalColPosition"
                            : "_getTopColPosition",
                        s = this[n](o, t),
                        r = { x: this.columnWidth * s.col, y: s.y },
                        a = s.y + t.size.outerHeight,
                        u = o + s.col,
                        h = s.col;
                    h < u;
                    h++
                )
                    this.colYs[h] = a;
                return r;
            }),
            (o._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (o._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
                    e[o] = this._getColGroupY(o, t);
                return e;
            }),
            (o._getColGroupY = function (t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (o._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return (
                    (this.horizontalColIndex = n
                        ? i + t
                        : this.horizontalColIndex),
                    { col: i, y: this._getColGroupY(i, t) }
                );
            }),
            (o._manageStamp = function (t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this._getOption("originLeft"),
                    s = n ? o.left : o.right,
                    r = s + i.outerWidth,
                    a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                (u -= r % this.columnWidth ? 0 : 1),
                    (u = Math.min(this.cols - 1, u));
                for (
                    var h = this._getOption("originTop"),
                        d = (h ? o.top : o.bottom) + i.outerHeight,
                        l = a;
                    l <= u;
                    l++
                )
                    this.colYs[l] = Math.max(d, this.colYs[l]);
            }),
            (o._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return (
                    this._getOption("fitWidth") &&
                        (t.width = this._getContainerFitWidth()),
                    t
                );
            }),
            (o._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                    t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (o.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/masonry",
                  ["../layout-mode", "masonry-layout/masonry"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  require("../layout-mode"),
                  require("masonry-layout")
              ))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = o._getOption;
        return (
            (o._getOption = function (t) {
                return "fitWidth" == t
                    ? void 0 !== this.options.isFitWidth
                        ? this.options.isFitWidth
                        : this.options.fitWidth
                    : a.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/fit-rows",
                  ["../layout-mode"],
                  e
              )
            : "object" == typeof exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0),
                    (this.y = 0),
                    (this.maxY = 0),
                    this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x &&
                    e + this.x > i &&
                    ((this.x = 0), (this.y = this.maxY));
                var o = { x: this.x, y: this.y };
                return (
                    (this.maxY = Math.max(
                        this.maxY,
                        this.y + t.size.outerHeight
                    )),
                    (this.x += e),
                    o
                );
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/vertical",
                  ["../layout-mode"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e =
                        (this.isotope.size.innerWidth - t.size.outerWidth) *
                        this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  [
                      "outlayer/outlayer",
                      "get-size/get-size",
                      "desandro-matches-selector/matches-selector",
                      "fizzy-ui-utils/utils",
                      "isotope-layout/js/item",
                      "isotope-layout/js/layout-mode",
                      "isotope-layout/js/layout-modes/masonry",
                      "isotope-layout/js/layout-modes/fit-rows",
                      "isotope-layout/js/layout-modes/vertical",
                  ],
                  function (i, o, n, s, r, a) {
                      return e(t, i, o, n, s, r, a);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope-layout/js/item"),
                  require("isotope-layout/js/layout-mode"),
                  require("isotope-layout/js/layout-modes/masonry"),
                  require("isotope-layout/js/layout-modes/fit-rows"),
                  require("isotope-layout/js/layout-modes/vertical")
              ))
            : (t.Isotope = e(
                  t,
                  t.Outlayer,
                  t.getSize,
                  t.matchesSelector,
                  t.fizzyUIUtils,
                  t.Isotope.Item,
                  t.Isotope.LayoutMode
              ));
    })(window, function (t, e, i, o, n, s, r) {
        function a(t, e) {
            return function (i, o) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = i.sortData[s],
                        a = o.sortData[s];
                    if (r > a || r < a) {
                        var u = void 0 !== e[s] ? e[s] : e,
                            h = u ? 1 : -1;
                        return (r > a ? 1 : -1) * h;
                    }
                }
                return 0;
            };
        }
        var u = t.jQuery,
            h = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0,
            });
        (d.Item = s), (d.LayoutMode = r);
        var l = d.prototype;
        (l._create = function () {
            (this.itemGUID = 0),
                (this._sorters = {}),
                this._getSorters(),
                e.prototype._create.call(this),
                (this.modes = {}),
                (this.filteredItems = this.items),
                (this.sortHistory = ["original-order"]);
            for (var t in r.modes) this._initLayoutMode(t);
        }),
            (l.reloadItems = function () {
                (this.itemGUID = 0), e.prototype.reloadItems.call(this);
            }),
            (l._itemize = function () {
                for (
                    var t = e.prototype._itemize.apply(this, arguments), i = 0;
                    i < t.length;
                    i++
                ) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (l._initLayoutMode = function (t) {
                var e = r.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? n.extend(e.options, i) : i),
                    (this.modes[t] = new e(this));
            }),
            (l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout")
                    ? void this.arrange()
                    : void this._layout();
            }),
            (l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, t),
                    (this._isLayoutInited = !0);
            }),
            (l.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches),
                    this._bindArrangeComplete(),
                    this._isInstant
                        ? this._noTransition(this._hideReveal, [e])
                        : this._hideReveal(e),
                    this._sort(),
                    this._layout();
            }),
            (l._init = l.arrange),
            (l._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (l._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e), e;
            }),
            (l._bindArrangeComplete = function () {
                function t() {
                    e &&
                        i &&
                        o &&
                        n.dispatchEvent("arrangeComplete", null, [
                            n.filteredItems,
                        ]);
                }
                var e,
                    i,
                    o,
                    n = this;
                this.once("layoutComplete", function () {
                    (e = !0), t();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), t();
                    }),
                    this.once("revealComplete", function () {
                        (o = !0), t();
                    });
            }),
            (l._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (
                    var i = [],
                        o = [],
                        n = [],
                        s = this._getFilterTest(e),
                        r = 0;
                    r < t.length;
                    r++
                ) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a),
                            u && a.isHidden
                                ? o.push(a)
                                : u || a.isHidden || n.push(a);
                    }
                }
                return { matches: i, needReveal: o, needHide: n };
            }),
            (l._getFilterTest = function (t) {
                return u && this.options.isJQueryFiltering
                    ? function (e) {
                          return u(e.element).is(t);
                      }
                    : "function" == typeof t
                    ? function (e) {
                          return t(e.element);
                      }
                    : function (e) {
                          return o(e.element, t);
                      };
            }),
            (l.updateSortData = function (t) {
                var e;
                t
                    ? ((t = n.makeArray(t)), (e = this.getItems(t)))
                    : (e = this.items),
                    this._getSorters(),
                    this._updateItemsSortData(e);
            }),
            (l._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i);
                }
            }),
            (l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                }
            });
        var f = (function () {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    s = n && n[1],
                    r = e(s, o),
                    a = d.sortDataParsers[i[1]];
                return (t = a
                    ? function (t) {
                          return t && a(r(t));
                      }
                    : function (t) {
                          return t && r(t);
                      });
            }
            function e(t, e) {
                return t
                    ? function (e) {
                          return e.getAttribute(t);
                      }
                    : function (t) {
                          var i = t.querySelector(e);
                          return i && i.textContent;
                      };
            }
            return t;
        })();
        (d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (l._sort = function () {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) ||
                        (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }),
            (l._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }),
            (l._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (l._resetLayout = function () {
                e.prototype._resetLayout.call(this),
                    this._mode()._resetLayout();
            }),
            (l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (l._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (l._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (l.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (l.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems),
                        (this.filteredItems = i.concat(this.filteredItems)),
                        (this.items = e.concat(this.items));
                }
            }),
            (l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return (
                    this.hide(e.needHide),
                    this.reveal(e.matches),
                    this.layoutItems(e.matches, !0),
                    e.matches
                );
            }),
            (l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i,
                        o,
                        n = e.length;
                    for (i = 0; i < n; i++)
                        (o = e[i]), this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++)
                        delete e[i].isLayoutInstant;
                    this.reveal(s);
                }
            });
        var c = l.remove;
        return (
            (l.remove = function (t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                c.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }),
            (l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return (this.options.transitionDuration = i), o;
            }),
            (l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            d
        );
    });

/* ==========================================================================
   6. ScrollMagic
   ========================================================================== */

/*
# License

ScrollMagic is dual licensed under the terms of the MIT license (below) and the 
[GPL](http://www.gnu.org/licenses/gpl-3.0.html).

__Plugin License Information:__

* The Greensock Animation Platform (__GSAP__) is used per its 
["No Charge" license](http://greensock.com/standard-license).  
For some cases the extended ["Business Green" license]
(http://greensock.com/licensing/) will be necessary.
* __Velocity.js__ is published under the terms of the 
[MIT license](https://github.com/julianshapiro/velocity/blob/master/LICENSE.md).
* __jQuery__ is published under the terms of the [MIT license]
(https://jquery.org/license/).

---

## MIT License

Copyright (c) 2015 Jan Paepke

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/

/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!(function (e, t) {
    "function" == typeof define && define.amd
        ? define(t)
        : "object" == typeof exports
        ? (module.exports = t())
        : (e.ScrollMagic = t());
})(this, function () {
    "use strict";
    var e = function () {};
    (e.version = "2.0.5"),
        window.addEventListener("mousewheel", function () {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function (r) {
        var o,
            s,
            a = "ScrollMagic.Controller",
            l = "FORWARD",
            c = "REVERSE",
            u = "PAUSED",
            f = n.defaults,
            d = this,
            h = i.extend({}, f, r),
            g = [],
            p = !1,
            v = 0,
            m = u,
            w = !0,
            y = 0,
            S = !0,
            b = function () {
                for (var e in h) f.hasOwnProperty(e) || delete h[e];
                if (
                    ((h.container = i.get.elements(h.container)[0]),
                    !h.container)
                )
                    throw a + " init failed.";
                (w =
                    h.container === window ||
                    h.container === document.body ||
                    !document.body.contains(h.container)),
                    w && (h.container = window),
                    (y = z()),
                    h.container.addEventListener("resize", T),
                    h.container.addEventListener("scroll", T),
                    (h.refreshInterval =
                        parseInt(h.refreshInterval) || f.refreshInterval),
                    E();
            },
            E = function () {
                h.refreshInterval > 0 &&
                    (s = window.setTimeout(A, h.refreshInterval));
            },
            x = function () {
                return h.vertical
                    ? i.get.scrollTop(h.container)
                    : i.get.scrollLeft(h.container);
            },
            z = function () {
                return h.vertical
                    ? i.get.height(h.container)
                    : i.get.width(h.container);
            },
            C = (this._setScrollPos = function (e) {
                h.vertical
                    ? w
                        ? window.scrollTo(i.get.scrollLeft(), e)
                        : (h.container.scrollTop = e)
                    : w
                    ? window.scrollTo(e, i.get.scrollTop())
                    : (h.container.scrollLeft = e);
            }),
            F = function () {
                if (S && p) {
                    var e = i.type.Array(p) ? p : g.slice(0);
                    p = !1;
                    var t = v;
                    v = d.scrollPos();
                    var n = v - t;
                    0 !== n && (m = n > 0 ? l : c),
                        m === c && e.reverse(),
                        e.forEach(function (e) {
                            e.update(!0);
                        });
                }
            },
            L = function () {
                o = i.rAF(F);
            },
            T = function (e) {
                "resize" == e.type && ((y = z()), (m = u)),
                    p !== !0 && ((p = !0), L());
            },
            A = function () {
                if (!w && y != z()) {
                    var e;
                    try {
                        e = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1,
                        });
                    } catch (t) {
                        (e = document.createEvent("Event")),
                            e.initEvent("resize", !1, !1);
                    }
                    h.container.dispatchEvent(e);
                }
                g.forEach(function (e) {
                    e.refresh();
                }),
                    E();
            };
        this._options = h;
        var O = function (e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return (
                t.sort(function (e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
                }),
                t
            );
        };
        return (
            (this.addScene = function (t) {
                if (i.type.Array(t))
                    t.forEach(function (e) {
                        d.addScene(e);
                    });
                else if (t instanceof e.Scene)
                    if (t.controller() !== d) t.addTo(d);
                    else if (g.indexOf(t) < 0) {
                        g.push(t),
                            (g = O(g)),
                            t.on("shift.controller_sort", function () {
                                g = O(g);
                            });
                        for (var n in h.globalSceneOptions)
                            t[n] && t[n].call(t, h.globalSceneOptions[n]);
                    }
                return d;
            }),
            (this.removeScene = function (e) {
                if (i.type.Array(e))
                    e.forEach(function (e) {
                        d.removeScene(e);
                    });
                else {
                    var t = g.indexOf(e);
                    t > -1 &&
                        (e.off("shift.controller_sort"),
                        g.splice(t, 1),
                        e.remove());
                }
                return d;
            }),
            (this.updateScene = function (t, n) {
                return (
                    i.type.Array(t)
                        ? t.forEach(function (e) {
                              d.updateScene(e, n);
                          })
                        : n
                        ? t.update(!0)
                        : p !== !0 &&
                          t instanceof e.Scene &&
                          ((p = p || []),
                          -1 == p.indexOf(t) && p.push(t),
                          (p = O(p)),
                          L()),
                    d
                );
            }),
            (this.update = function (e) {
                return T({ type: "resize" }), e && F(), d;
            }),
            (this.scrollTo = function (n, r) {
                if (i.type.Number(n)) C.call(h.container, n, r);
                else if (n instanceof e.Scene)
                    n.controller() === d && d.scrollTo(n.scrollOffset(), r);
                else if (i.type.Function(n)) C = n;
                else {
                    var o = i.get.elements(n)[0];
                    if (o) {
                        for (; o.parentNode.hasAttribute(t); ) o = o.parentNode;
                        var s = h.vertical ? "top" : "left",
                            a = i.get.offset(h.container),
                            l = i.get.offset(o);
                        w || (a[s] -= d.scrollPos()),
                            d.scrollTo(l[s] - a[s], r);
                    }
                }
                return d;
            }),
            (this.scrollPos = function (e) {
                return arguments.length
                    ? (i.type.Function(e) && (x = e), d)
                    : x.call(d);
            }),
            (this.info = function (e) {
                var t = {
                    size: y,
                    vertical: h.vertical,
                    scrollPos: v,
                    scrollDirection: m,
                    container: h.container,
                    isDocument: w,
                };
                return arguments.length ? (void 0 !== t[e] ? t[e] : void 0) : t;
            }),
            (this.loglevel = function () {
                return d;
            }),
            (this.enabled = function (e) {
                return arguments.length
                    ? (S != e && ((S = !!e), d.updateScene(g, !0)), d)
                    : S;
            }),
            (this.destroy = function (e) {
                window.clearTimeout(s);
                for (var t = g.length; t--; ) g[t].destroy(e);
                return (
                    h.container.removeEventListener("resize", T),
                    h.container.removeEventListener("scroll", T),
                    i.cAF(o),
                    null
                );
            }),
            b(),
            d
        );
    };
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100,
        },
    };
    (e.Controller.addOption = function (e, t) {
        n.defaults[e] = t;
    }),
        (e.Controller.extend = function (t) {
            var n = this;
            (e.Controller = function () {
                return (
                    n.apply(this, arguments),
                    (this.$super = i.extend({}, this)),
                    t.apply(this, arguments) || this
                );
            }),
                i.extend(e.Controller, n),
                (e.Controller.prototype = n.prototype),
                (e.Controller.prototype.constructor = e.Controller);
        }),
        (e.Scene = function (n) {
            var o,
                s,
                a = "BEFORE",
                l = "DURING",
                c = "AFTER",
                u = r.defaults,
                f = this,
                d = i.extend({}, u, n),
                h = a,
                g = 0,
                p = { start: 0, end: 0 },
                v = 0,
                m = !0,
                w = function () {
                    for (var e in d) u.hasOwnProperty(e) || delete d[e];
                    for (var t in u) L(t);
                    C();
                },
                y = {};
            (this.on = function (e, t) {
                return (
                    i.type.Function(t) &&
                        ((e = e.trim().split(" ")),
                        e.forEach(function (e) {
                            var n = e.split("."),
                                r = n[0],
                                i = n[1];
                            "*" != r &&
                                (y[r] || (y[r] = []),
                                y[r].push({ namespace: i || "", callback: t }));
                        })),
                    f
                );
            }),
                (this.off = function (e, t) {
                    return e
                        ? ((e = e.trim().split(" ")),
                          e.forEach(function (e) {
                              var n = e.split("."),
                                  r = n[0],
                                  i = n[1] || "",
                                  o = "*" === r ? Object.keys(y) : [r];
                              o.forEach(function (e) {
                                  for (
                                      var n = y[e] || [], r = n.length;
                                      r--;

                                  ) {
                                      var o = n[r];
                                      !o ||
                                          (i !== o.namespace && "*" !== i) ||
                                          (t && t != o.callback) ||
                                          n.splice(r, 1);
                                  }
                                  n.length || delete y[e];
                              });
                          }),
                          f)
                        : f;
                }),
                (this.trigger = function (t, n) {
                    if (t) {
                        var r = t.trim().split("."),
                            i = r[0],
                            o = r[1],
                            s = y[i];
                        s &&
                            s.forEach(function (t) {
                                (o && o !== t.namespace) ||
                                    t.callback.call(
                                        f,
                                        new e.Event(i, t.namespace, f, n)
                                    );
                            });
                    }
                    return f;
                }),
                f
                    .on("change.internal", function (e) {
                        "loglevel" !== e.what &&
                            "tweenChanges" !== e.what &&
                            ("triggerElement" === e.what
                                ? E()
                                : "reverse" === e.what && f.update());
                    })
                    .on("shift.internal", function () {
                        S(), f.update();
                    }),
                (this.addTo = function (t) {
                    return (
                        t instanceof e.Controller &&
                            s != t &&
                            (s && s.removeScene(f),
                            (s = t),
                            C(),
                            b(!0),
                            E(!0),
                            S(),
                            s.info("container").addEventListener("resize", x),
                            t.addScene(f),
                            f.trigger("add", { controller: s }),
                            f.update()),
                        f
                    );
                }),
                (this.enabled = function (e) {
                    return arguments.length
                        ? (m != e && ((m = !!e), f.update(!0)), f)
                        : m;
                }),
                (this.remove = function () {
                    if (s) {
                        s.info("container").removeEventListener("resize", x);
                        var e = s;
                        (s = void 0), e.removeScene(f), f.trigger("remove");
                    }
                    return f;
                }),
                (this.destroy = function (e) {
                    return (
                        f.trigger("destroy", { reset: e }),
                        f.remove(),
                        f.off("*.*"),
                        null
                    );
                }),
                (this.update = function (e) {
                    if (s)
                        if (e)
                            if (s.enabled() && m) {
                                var t,
                                    n = s.info("scrollPos");
                                (t =
                                    d.duration > 0
                                        ? (n - p.start) / (p.end - p.start)
                                        : n >= p.start
                                        ? 1
                                        : 0),
                                    f.trigger("update", {
                                        startPos: p.start,
                                        endPos: p.end,
                                        scrollPos: n,
                                    }),
                                    f.progress(t);
                            } else T && h === l && O(!0);
                        else s.updateScene(f, !1);
                    return f;
                }),
                (this.refresh = function () {
                    return b(), E(), f;
                }),
                (this.progress = function (e) {
                    if (arguments.length) {
                        var t = !1,
                            n = h,
                            r = s ? s.info("scrollDirection") : "PAUSED",
                            i = d.reverse || e >= g;
                        if (
                            (0 === d.duration
                                ? ((t = g != e),
                                  (g = 1 > e && i ? 0 : 1),
                                  (h = 0 === g ? a : l))
                                : 0 > e && h !== a && i
                                ? ((g = 0), (h = a), (t = !0))
                                : e >= 0 && 1 > e && i
                                ? ((g = e), (h = l), (t = !0))
                                : e >= 1 && h !== c
                                ? ((g = 1), (h = c), (t = !0))
                                : h !== l || i || O(),
                            t)
                        ) {
                            var o = {
                                    progress: g,
                                    state: h,
                                    scrollDirection: r,
                                },
                                u = h != n,
                                p = function (e) {
                                    f.trigger(e, o);
                                };
                            u &&
                                n !== l &&
                                (p("enter"), p(n === a ? "start" : "end")),
                                p("progress"),
                                u &&
                                    h !== l &&
                                    (p(h === a ? "start" : "end"), p("leave"));
                        }
                        return f;
                    }
                    return g;
                });
            var S = function () {
                    (p = { start: v + d.offset }),
                        s &&
                            d.triggerElement &&
                            (p.start -= s.info("size") * d.triggerHook),
                        (p.end = p.start + d.duration);
                },
                b = function (e) {
                    if (o) {
                        var t = "duration";
                        F(t, o.call(f)) &&
                            !e &&
                            (f.trigger("change", { what: t, newval: d[t] }),
                            f.trigger("shift", { reason: t }));
                    }
                },
                E = function (e) {
                    var n = 0,
                        r = d.triggerElement;
                    if (s && r) {
                        for (
                            var o = s.info(),
                                a = i.get.offset(o.container),
                                l = o.vertical ? "top" : "left";
                            r.parentNode.hasAttribute(t);

                        )
                            r = r.parentNode;
                        var c = i.get.offset(r);
                        o.isDocument || (a[l] -= s.scrollPos()),
                            (n = c[l] - a[l]);
                    }
                    var u = n != v;
                    (v = n),
                        u &&
                            !e &&
                            f.trigger("shift", {
                                reason: "triggerElementPosition",
                            });
                },
                x = function () {
                    d.triggerHook > 0 &&
                        f.trigger("shift", { reason: "containerResize" });
                },
                z = i.extend(r.validate, {
                    duration: function (e) {
                        if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function () {
                                return s ? s.info("size") * t : 0;
                            };
                        }
                        if (i.type.Function(e)) {
                            o = e;
                            try {
                                e = parseFloat(o());
                            } catch (t) {
                                e = -1;
                            }
                        }
                        if (((e = parseFloat(e)), !i.type.Number(e) || 0 > e))
                            throw o ? ((o = void 0), 0) : 0;
                        return e;
                    },
                }),
                C = function (e) {
                    (e = arguments.length ? [e] : Object.keys(z)),
                        e.forEach(function (e) {
                            var t;
                            if (z[e])
                                try {
                                    t = z[e](d[e]);
                                } catch (n) {
                                    t = u[e];
                                } finally {
                                    d[e] = t;
                                }
                        });
                },
                F = function (e, t) {
                    var n = !1,
                        r = d[e];
                    return d[e] != t && ((d[e] = t), C(e), (n = r != d[e])), n;
                },
                L = function (e) {
                    f[e] ||
                        (f[e] = function (t) {
                            return arguments.length
                                ? ("duration" === e && (o = void 0),
                                  F(e, t) &&
                                      (f.trigger("change", {
                                          what: e,
                                          newval: d[e],
                                      }),
                                      r.shifts.indexOf(e) > -1 &&
                                          f.trigger("shift", { reason: e })),
                                  f)
                                : d[e];
                        });
                };
            (this.controller = function () {
                return s;
            }),
                (this.state = function () {
                    return h;
                }),
                (this.scrollOffset = function () {
                    return p.start;
                }),
                (this.triggerPosition = function () {
                    var e = d.offset;
                    return (
                        s &&
                            (e += d.triggerElement
                                ? v
                                : s.info("size") * f.triggerHook()),
                        e
                    );
                });
            var T, A;
            f.on("shift.internal", function (e) {
                var t = "duration" === e.reason;
                ((h === c && t) || (h === l && 0 === d.duration)) && O(),
                    t && _();
            })
                .on("progress.internal", function () {
                    O();
                })
                .on("add.internal", function () {
                    _();
                })
                .on("destroy.internal", function (e) {
                    f.removePin(e.reset);
                });
            var O = function (e) {
                    if (T && s) {
                        var t = s.info(),
                            n = A.spacer.firstChild;
                        if (e || h !== l) {
                            var r = {
                                    position: A.inFlow
                                        ? "relative"
                                        : "absolute",
                                    top: 0,
                                    left: 0,
                                },
                                o = i.css(n, "position") != r.position;
                            A.pushFollowers
                                ? d.duration > 0 &&
                                  (h === c &&
                                  0 ===
                                      parseFloat(i.css(A.spacer, "padding-top"))
                                      ? (o = !0)
                                      : h === a &&
                                        0 ===
                                            parseFloat(
                                                i.css(
                                                    A.spacer,
                                                    "padding-bottom"
                                                )
                                            ) &&
                                        (o = !0))
                                : (r[t.vertical ? "top" : "left"] =
                                      d.duration * g),
                                i.css(n, r),
                                o && _();
                        } else {
                            "fixed" != i.css(n, "position") &&
                                (i.css(n, { position: "fixed" }), _());
                            var u = i.get.offset(A.spacer, !0),
                                f =
                                    d.reverse || 0 === d.duration
                                        ? t.scrollPos - p.start
                                        : Math.round(g * d.duration * 10) / 10;
                            (u[t.vertical ? "top" : "left"] += f),
                                i.css(A.spacer.firstChild, {
                                    top: u.top,
                                    left: u.left,
                                });
                        }
                    }
                },
                _ = function () {
                    if (T && s && A.inFlow) {
                        var e = h === l,
                            t = s.info("vertical"),
                            n = A.spacer.firstChild,
                            r = i.isMarginCollapseType(
                                i.css(A.spacer, "display")
                            ),
                            o = {};
                        A.relSize.width || A.relSize.autoFullWidth
                            ? e
                                ? i.css(T, { width: i.get.width(A.spacer) })
                                : i.css(T, { width: "100%" })
                            : ((o["min-width"] = i.get.width(
                                  t ? T : n,
                                  !0,
                                  !0
                              )),
                              (o.width = e ? o["min-width"] : "auto")),
                            A.relSize.height
                                ? e
                                    ? i.css(T, {
                                          height:
                                              i.get.height(A.spacer) -
                                              (A.pushFollowers
                                                  ? d.duration
                                                  : 0),
                                      })
                                    : i.css(T, { height: "100%" })
                                : ((o["min-height"] = i.get.height(
                                      t ? n : T,
                                      !0,
                                      !r
                                  )),
                                  (o.height = e ? o["min-height"] : "auto")),
                            A.pushFollowers &&
                                ((o["padding" + (t ? "Top" : "Left")] =
                                    d.duration * g),
                                (o["padding" + (t ? "Bottom" : "Right")] =
                                    d.duration * (1 - g))),
                            i.css(A.spacer, o);
                    }
                },
                N = function () {
                    s && T && h === l && !s.info("isDocument") && O();
                },
                P = function () {
                    s &&
                        T &&
                        h === l &&
                        (((A.relSize.width || A.relSize.autoFullWidth) &&
                            i.get.width(window) !=
                                i.get.width(A.spacer.parentNode)) ||
                            (A.relSize.height &&
                                i.get.height(window) !=
                                    i.get.height(A.spacer.parentNode))) &&
                        _();
                },
                D = function (e) {
                    s &&
                        T &&
                        h === l &&
                        !s.info("isDocument") &&
                        (e.preventDefault(),
                        s._setScrollPos(
                            s.info("scrollPos") -
                                ((e.wheelDelta ||
                                    e[
                                        s.info("vertical")
                                            ? "wheelDeltaY"
                                            : "wheelDeltaX"
                                    ]) / 3 || 30 * -e.detail)
                        ));
                };
            (this.setPin = function (e, n) {
                var r = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer",
                };
                if (((n = i.extend({}, r, n)), (e = i.get.elements(e)[0]), !e))
                    return f;
                if ("fixed" === i.css(e, "position")) return f;
                if (T) {
                    if (T === e) return f;
                    f.removePin();
                }
                T = e;
                var o = T.parentNode.style.display,
                    s = [
                        "top",
                        "left",
                        "bottom",
                        "right",
                        "margin",
                        "marginLeft",
                        "marginRight",
                        "marginTop",
                        "marginBottom",
                    ];
                T.parentNode.style.display = "none";
                var a = "absolute" != i.css(T, "position"),
                    l = i.css(T, s.concat(["display"])),
                    c = i.css(T, ["width", "height"]);
                (T.parentNode.style.display = o),
                    !a && n.pushFollowers && (n.pushFollowers = !1);
                var u = T.parentNode.insertBefore(
                        document.createElement("div"),
                        T
                    ),
                    d = i.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box",
                    });
                if (
                    (a || i.extend(d, i.css(T, ["width", "height"])),
                    i.css(u, d),
                    u.setAttribute(t, ""),
                    i.addClass(u, n.spacerClass),
                    (A = {
                        spacer: u,
                        relSize: {
                            width: "%" === c.width.slice(-1),
                            height: "%" === c.height.slice(-1),
                            autoFullWidth:
                                "auto" === c.width &&
                                a &&
                                i.isMarginCollapseType(l.display),
                        },
                        pushFollowers: n.pushFollowers,
                        inFlow: a,
                    }),
                    !T.___origStyle)
                ) {
                    T.___origStyle = {};
                    var h = T.style,
                        g = s.concat([
                            "width",
                            "height",
                            "position",
                            "boxSizing",
                            "mozBoxSizing",
                            "webkitBoxSizing",
                        ]);
                    g.forEach(function (e) {
                        T.___origStyle[e] = h[e] || "";
                    });
                }
                return (
                    A.relSize.width && i.css(u, { width: c.width }),
                    A.relSize.height && i.css(u, { height: c.height }),
                    u.appendChild(T),
                    i.css(T, {
                        position: a ? "relative" : "absolute",
                        margin: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto",
                    }),
                    (A.relSize.width || A.relSize.autoFullWidth) &&
                        i.css(T, {
                            boxSizing: "border-box",
                            mozBoxSizing: "border-box",
                            webkitBoxSizing: "border-box",
                        }),
                    window.addEventListener("scroll", N),
                    window.addEventListener("resize", N),
                    window.addEventListener("resize", P),
                    T.addEventListener("mousewheel", D),
                    T.addEventListener("DOMMouseScroll", D),
                    O(),
                    f
                );
            }),
                (this.removePin = function (e) {
                    if (T) {
                        if ((h === l && O(!0), e || !s)) {
                            var n = A.spacer.firstChild;
                            if (n.hasAttribute(t)) {
                                var r = A.spacer.style,
                                    o = [
                                        "margin",
                                        "marginLeft",
                                        "marginRight",
                                        "marginTop",
                                        "marginBottom",
                                    ];
                                (margins = {}),
                                    o.forEach(function (e) {
                                        margins[e] = r[e] || "";
                                    }),
                                    i.css(n, margins);
                            }
                            A.spacer.parentNode.insertBefore(n, A.spacer),
                                A.spacer.parentNode.removeChild(A.spacer),
                                T.parentNode.hasAttribute(t) ||
                                    (i.css(T, T.___origStyle),
                                    delete T.___origStyle);
                        }
                        window.removeEventListener("scroll", N),
                            window.removeEventListener("resize", N),
                            window.removeEventListener("resize", P),
                            T.removeEventListener("mousewheel", D),
                            T.removeEventListener("DOMMouseScroll", D),
                            (T = void 0);
                    }
                    return f;
                });
            var R,
                k = [];
            return (
                f.on("destroy.internal", function (e) {
                    f.removeClassToggle(e.reset);
                }),
                (this.setClassToggle = function (e, t) {
                    var n = i.get.elements(e);
                    return 0 !== n.length && i.type.String(t)
                        ? (k.length > 0 && f.removeClassToggle(),
                          (R = t),
                          (k = n),
                          f.on(
                              "enter.internal_class leave.internal_class",
                              function (e) {
                                  var t =
                                      "enter" === e.type
                                          ? i.addClass
                                          : i.removeClass;
                                  k.forEach(function (e) {
                                      t(e, R);
                                  });
                              }
                          ),
                          f)
                        : f;
                }),
                (this.removeClassToggle = function (e) {
                    return (
                        e &&
                            k.forEach(function (e) {
                                i.removeClass(e, R);
                            }),
                        f.off("start.internal_class end.internal_class"),
                        (R = void 0),
                        (k = []),
                        f
                    );
                }),
                w(),
                f
            );
        });
    var r = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: 0.5,
            reverse: !0,
            loglevel: 2,
        },
        validate: {
            offset: function (e) {
                if (((e = parseFloat(e)), !i.type.Number(e))) throw 0;
                return e;
            },
            triggerElement: function (e) {
                if ((e = e || void 0)) {
                    var t = i.get.elements(e)[0];
                    if (!t) throw 0;
                    e = t;
                }
                return e;
            },
            triggerHook: function (e) {
                var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
                if (i.type.Number(e))
                    e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e];
                }
                return e;
            },
            reverse: function (e) {
                return !!e;
            },
        },
        shifts: ["duration", "offset", "triggerHook"],
    };
    (e.Scene.addOption = function (e, t, n, i) {
        e in r.defaults ||
            ((r.defaults[e] = t), (r.validate[e] = n), i && r.shifts.push(e));
    }),
        (e.Scene.extend = function (t) {
            var n = this;
            (e.Scene = function () {
                return (
                    n.apply(this, arguments),
                    (this.$super = i.extend({}, this)),
                    t.apply(this, arguments) || this
                );
            }),
                i.extend(e.Scene, n),
                (e.Scene.prototype = n.prototype),
                (e.Scene.prototype.constructor = e.Scene);
        }),
        (e.Event = function (e, t, n, r) {
            r = r || {};
            for (var i in r) this[i] = r[i];
            return (
                (this.type = e),
                (this.target = this.currentTarget = n),
                (this.namespace = t || ""),
                (this.timeStamp = this.timestamp = Date.now()),
                this
            );
        });
    var i = (e._util = (function (e) {
        var t,
            n = {},
            r = function (e) {
                return parseFloat(e) || 0;
            },
            i = function (t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
            },
            o = function (t, n, o, s) {
                if (((n = n === document ? e : n), n === e)) s = !1;
                else if (!f.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var a =
                    (o
                        ? n["offset" + t] || n["outer" + t]
                        : n["client" + t] || n["inner" + t]) || 0;
                if (o && s) {
                    var l = i(n);
                    a +=
                        "Height" === t
                            ? r(l.marginTop) + r(l.marginBottom)
                            : r(l.marginLeft) + r(l.marginRight);
                }
                return a;
            },
            s = function (e) {
                return e
                    .replace(/^[^a-z]+([a-z])/g, "$1")
                    .replace(/-([a-z])/g, function (e) {
                        return e[1].toUpperCase();
                    });
            };
        (n.extend = function (e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t])
                        arguments[t].hasOwnProperty(n) &&
                            (e[n] = arguments[t][n]);
            return e;
        }),
            (n.isMarginCollapseType = function (e) {
                return (
                    [
                        "block",
                        "flex",
                        "list-item",
                        "table",
                        "-webkit-box",
                    ].indexOf(e) > -1
                );
            });
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t)
            (c = e[l[t] + "RequestAnimationFrame"]),
                (u =
                    e[l[t] + "CancelAnimationFrame"] ||
                    e[l[t] + "CancelRequestAnimationFrame"]);
        c ||
            (c = function (t) {
                var n = new Date().getTime(),
                    r = Math.max(0, 16 - (n - a)),
                    i = e.setTimeout(function () {
                        t(n + r);
                    }, r);
                return (a = n + r), i;
            }),
            u ||
                (u = function (t) {
                    e.clearTimeout(t);
                }),
            (n.rAF = c.bind(e)),
            (n.cAF = u.bind(e));
        var f = (n.type = function (e) {
            return Object.prototype.toString
                .call(e)
                .replace(/^\[object (.+)\]$/, "$1")
                .toLowerCase();
        });
        (f.String = function (e) {
            return "string" === f(e);
        }),
            (f.Function = function (e) {
                return "function" === f(e);
            }),
            (f.Array = function (e) {
                return Array.isArray(e);
            }),
            (f.Number = function (e) {
                return !f.Array(e) && e - parseFloat(e) + 1 >= 0;
            }),
            (f.DomElement = function (e) {
                return "object" == typeof HTMLElement
                    ? e instanceof HTMLElement
                    : e &&
                          "object" == typeof e &&
                          null !== e &&
                          1 === e.nodeType &&
                          "string" == typeof e.nodeName;
            });
        var d = (n.get = {});
        return (
            (d.elements = function (t) {
                var n = [];
                if (f.String(t))
                    try {
                        t = document.querySelectorAll(t);
                    } catch (e) {
                        return n;
                    }
                if ("nodelist" === f(t) || f.Array(t))
                    for (var r = 0, i = (n.length = t.length); i > r; r++) {
                        var o = t[r];
                        n[r] = f.DomElement(o) ? o : d.elements(o);
                    }
                else
                    (f.DomElement(t) || t === document || t === e) && (n = [t]);
                return n;
            }),
            (d.scrollTop = function (t) {
                return t && "number" == typeof t.scrollTop
                    ? t.scrollTop
                    : e.pageYOffset || 0;
            }),
            (d.scrollLeft = function (t) {
                return t && "number" == typeof t.scrollLeft
                    ? t.scrollLeft
                    : e.pageXOffset || 0;
            }),
            (d.width = function (e, t, n) {
                return o("width", e, t, n);
            }),
            (d.height = function (e, t, n) {
                return o("height", e, t, n);
            }),
            (d.offset = function (e, t) {
                var n = { top: 0, left: 0 };
                if (e && e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    (n.top = r.top),
                        (n.left = r.left),
                        t ||
                            ((n.top += d.scrollTop()),
                            (n.left += d.scrollLeft()));
                }
                return n;
            }),
            (n.addClass = function (e, t) {
                t &&
                    (e.classList
                        ? e.classList.add(t)
                        : (e.className += " " + t));
            }),
            (n.removeClass = function (e, t) {
                t &&
                    (e.classList
                        ? e.classList.remove(t)
                        : (e.className = e.className.replace(
                              RegExp(
                                  "(^|\\b)" +
                                      t.split(" ").join("|") +
                                      "(\\b|$)",
                                  "gi"
                              ),
                              " "
                          )));
            }),
            (n.css = function (e, t) {
                if (f.String(t)) return i(e)[s(t)];
                if (f.Array(t)) {
                    var n = {},
                        r = i(e);
                    return (
                        t.forEach(function (e) {
                            n[e] = r[s(e)];
                        }),
                        n
                    );
                }
                for (var o in t) {
                    var a = t[o];
                    a == parseFloat(a) && (a += "px"), (e.style[s(o)] = a);
                }
            }),
            n
        );
    })(window || {}));
    return e;
});

/* ==========================================================================
   7. Page scroll to id
   ========================================================================== */

/*
== Page scroll to id == 
Version: 1.5.9 
Plugin URI: http://manos.malihu.gr/page-scroll-to-id/
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright 2013  malihu  (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
!(function (e, t, a, l) {
    var n,
        s,
        i,
        o,
        r,
        c,
        u,
        h,
        g,
        f,
        d,
        p,
        _ = "mPageScroll2id",
        C = "mPS2id",
        v = {
            scrollSpeed: 1e3,
            autoScrollSpeed: !0,
            scrollEasing: "easeInOutQuint",
            scrollingEasing: "easeOutQuint",
            pageEndSmoothScroll: !0,
            layout: "vertical",
            offset: 0,
            highlightSelector: !1,
            clickedClass: C + "-clicked",
            targetClass: C + "-target",
            highlightClass: C + "-highlight",
            forceSingleHighlight: !1,
            keepHighlightUntilNext: !1,
            highlightByNextTarget: !1,
            disablePluginBelow: !1,
            clickEvents: !0,
            appendHash: !1,
            onStart: function () {},
            onComplete: function () {},
            defaultSelector: !1,
            live: !0,
            liveSelector: !1,
        },
        m = 0,
        S = {
            init: function (l) {
                l = e.extend(!0, {}, v, l);
                if ((e(a).data(C, l), (s = e(a).data(C)), !this.selector)) {
                    var c = "__" + C;
                    this.each(function () {
                        var t = e(this);
                        t.hasClass(c) || t.addClass(c);
                    }),
                        (this.selector = "." + c);
                }
                s.liveSelector && (this.selector += "," + s.liveSelector),
                    (n = n ? n + "," + this.selector : this.selector),
                    s.defaultSelector &&
                        (("object" == typeof e(n) && 0 !== e(n).length) ||
                            (n =
                                ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id")),
                    s.clickEvents &&
                        e(a)
                            .undelegate("." + C)
                            .delegate(n, "click." + C, function (t) {
                                if (I._isDisabled.call(null))
                                    I._removeClasses.call(null);
                                else {
                                    var a = e(this),
                                        l = a.attr("href"),
                                        n =
                                            a.prop("href").baseVal ||
                                            a.prop("href");
                                    (l && -1 !== l.indexOf("#/")) ||
                                        (I._reset.call(null),
                                        (f = a.data("ps2id-offset") || 0),
                                        I._isValid.call(null, l, n) &&
                                            I._findTarget.call(null, l) &&
                                            (t.preventDefault(),
                                            (o = "selector"),
                                            (r = a),
                                            I._setClasses.call(null, !0),
                                            I._scrollTo.call(null)));
                                }
                            }),
                    e(t)
                        .unbind("." + C)
                        .bind("scroll." + C + " resize." + C, function () {
                            if (I._isDisabled.call(null))
                                I._removeClasses.call(null);
                            else {
                                var t = e("._" + C + "-t");
                                t.each(function (a) {
                                    var l = e(this),
                                        n = l.attr("id"),
                                        s = I._findHighlight.call(null, n);
                                    I._setClasses.call(null, !1, l, s),
                                        a == t.length - 1 &&
                                            I._extendClasses.call(null);
                                });
                            }
                        }),
                    (i = !0),
                    I._setup.call(null),
                    I._live.call(null);
            },
            scrollTo: function (t, a) {
                if (I._isDisabled.call(null)) I._removeClasses.call(null);
                else if (t && void 0 !== t) {
                    I._isInit.call(null);
                    var l = { layout: s.layout, offset: s.offset, clicked: !1 };
                    a = e.extend(!0, {}, l, a);
                    I._reset.call(null),
                        (h = a.layout),
                        (g = a.offset),
                        (t = -1 !== t.indexOf("#") ? t : "#" + t),
                        I._isValid.call(null, t) &&
                            I._findTarget.call(null, t) &&
                            ((o = "scrollTo"),
                            (r = a.clicked) && I._setClasses.call(null, !0),
                            I._scrollTo.call(null));
                }
            },
            destroy: function () {
                e(t).unbind("." + C),
                    e(a)
                        .undelegate("." + C)
                        .removeData(C),
                    e("._" + C + "-t").removeData(C),
                    I._removeClasses.call(null, !0);
            },
        },
        I = {
            _isDisabled: function () {
                var e = t,
                    l = "inner",
                    n =
                        s.disablePluginBelow instanceof Array
                            ? [
                                  s.disablePluginBelow[0] || 0,
                                  s.disablePluginBelow[1] || 0,
                              ]
                            : [s.disablePluginBelow || 0, 0];
                return (
                    "innerWidth" in t ||
                        ((l = "client"), (e = a.documentElement || a.body)),
                    e[l + "Width"] <= n[0] || e[l + "Height"] <= n[1]
                );
            },
            _isValid: function (e, a) {
                if (e) {
                    var l =
                            -1 !== (a = a || e).indexOf("#/")
                                ? a.split("#/")[0]
                                : a.split("#")[0],
                        n = t.location.toString().split("#")[0];
                    return (
                        "#" !== e &&
                        -1 !== e.indexOf("#") &&
                        ("" === l ||
                            decodeURIComponent(l) === decodeURIComponent(n))
                    );
                }
            },
            _setup: function () {
                var t = I._highlightSelector(),
                    a = 1,
                    l = 0;
                return e(t).each(function () {
                    var n = e(this),
                        i = n.attr("href"),
                        o = n.prop("href").baseVal || n.prop("href");
                    if (I._isValid.call(null, i, o)) {
                        var r =
                                -1 !== i.indexOf("#/")
                                    ? i.split("#/")[1]
                                    : i.split("#")[1],
                            c = e("#" + r);
                        if (c.length > 0) {
                            s.highlightByNextTarget &&
                                c !== l &&
                                (l
                                    ? l.data(C, { tn: c })
                                    : c.data(C, { tn: "0" }),
                                (l = c)),
                                c.hasClass("_" + C + "-t") ||
                                    c.addClass("_" + C + "-t"),
                                c.data(C, { i: a }),
                                n.hasClass("_" + C + "-h") ||
                                    n.addClass("_" + C + "-h");
                            var u = I._findHighlight.call(null, r);
                            I._setClasses.call(null, !1, c, u),
                                (m = a),
                                ++a == e(t).length &&
                                    I._extendClasses.call(null);
                        }
                    }
                });
            },
            _highlightSelector: function () {
                return s.highlightSelector && "" !== s.highlightSelector
                    ? s.highlightSelector
                    : n;
            },
            _findTarget: function (t) {
                var a =
                        -1 !== t.indexOf("#/")
                            ? t.split("#/")[1]
                            : t.split("#")[1],
                    l = e("#" + a);
                if (l.length < 1 || "fixed" === l.css("position")) {
                    if ("top" !== a) return;
                    l = e("body");
                }
                return (
                    (c = l),
                    h || (h = s.layout),
                    (g = I._setOffset.call(null)),
                    ((u = [
                        (l.offset().top - g[0]).toString(),
                        (l.offset().left - g[1]).toString(),
                    ])[0] = u[0] < 0 ? 0 : u[0]),
                    (u[1] = u[1] < 0 ? 0 : u[1]),
                    u
                );
            },
            _setOffset: function () {
                var t, a, l, n;
                switch (
                    (g || (g = s.offset ? s.offset : 0), f && (g = f), typeof g)
                ) {
                    case "object":
                    case "string":
                        (a = [
                            (t = [g.y ? g.y : g, g.x ? g.x : g])[0] instanceof
                            jQuery
                                ? t[0]
                                : e(t[0]),
                            t[1] instanceof jQuery ? t[1] : e(t[1]),
                        ])[0].length > 0
                            ? ((l = a[0].height()),
                              "fixed" === a[0].css("position") &&
                                  (l += a[0][0].offsetTop))
                            : (l =
                                  !isNaN(parseFloat(t[0])) && isFinite(t[0])
                                      ? parseInt(t[0])
                                      : 0),
                            a[1].length > 0
                                ? ((n = a[1].width()),
                                  "fixed" === a[1].css("position") &&
                                      (n += a[1][0].offsetLeft))
                                : (n =
                                      !isNaN(parseFloat(t[1])) && isFinite(t[1])
                                          ? parseInt(t[1])
                                          : 0);
                        break;
                    case "function":
                        (t = g.call(null)) instanceof Array
                            ? ((l = t[0]), (n = t[1]))
                            : (l = n = t);
                        break;
                    default:
                        l = n = parseInt(g);
                }
                return [l, n];
            },
            _findHighlight: function (a) {
                var l = t.location,
                    n = l.toString().split("#")[0],
                    s = l.pathname;
                return e(
                    "._" +
                        C +
                        "-h[href='#" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='" +
                        n +
                        "#" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='" +
                        s +
                        "#" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='#/" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='" +
                        n +
                        "#/" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='" +
                        s +
                        "#/" +
                        a +
                        "']"
                );
            },
            _setClasses: function (t, a, l) {
                var n = s.clickedClass,
                    i = s.targetClass,
                    o = s.highlightClass;
                t && n && "" !== n
                    ? (e("." + n).removeClass(n), r.addClass(n))
                    : a &&
                      i &&
                      "" !== i &&
                      l &&
                      o &&
                      "" !== o &&
                      (I._currentTarget.call(null, a)
                          ? (a.addClass(i), l.addClass(o))
                          : (!s.keepHighlightUntilNext ||
                                e("." + o).length > 1) &&
                            (a.removeClass(i), l.removeClass(o)));
            },
            _extendClasses: function () {
                var t = s.targetClass,
                    a = s.highlightClass,
                    l = e("." + t),
                    n = e("." + a),
                    i = t + "-first",
                    o = t + "-last",
                    r = a + "-first",
                    c = a + "-last";
                e("._" + C + "-t").removeClass(i + " " + o),
                    e("._" + C + "-h").removeClass(r + " " + c),
                    s.forceSingleHighlight
                        ? s.keepHighlightUntilNext && l.length > 1
                            ? (l.slice(0, 1).removeClass(t),
                              n.slice(0, 1).removeClass(a))
                            : (l.slice(1).removeClass(t),
                              n.slice(1).removeClass(a))
                        : (l
                              .slice(0, 1)
                              .addClass(i)
                              .end()
                              .slice(-1)
                              .addClass(o),
                          n
                              .slice(0, 1)
                              .addClass(r)
                              .end()
                              .slice(-1)
                              .addClass(c));
            },
            _removeClasses: function (t) {
                e("." + s.clickedClass).removeClass(s.clickedClass),
                    e("." + s.targetClass).removeClass(
                        s.targetClass +
                            " " +
                            s.targetClass +
                            "-first " +
                            s.targetClass +
                            "-last"
                    ),
                    e("." + s.highlightClass).removeClass(
                        s.highlightClass +
                            " " +
                            s.highlightClass +
                            "-first " +
                            s.highlightClass +
                            "-last"
                    ),
                    t &&
                        (e("._" + C + "-t").removeClass("_" + C + "-t"),
                        e("._" + C + "-h").removeClass("_" + C + "-h"));
            },
            _currentTarget: function (a) {
                var l = s["target_" + a.data(C).i],
                    n = a.data("ps2id-target"),
                    i =
                        n && e(n)[0]
                            ? e(n)[0].getBoundingClientRect()
                            : a[0].getBoundingClientRect();
                if (void 0 !== l) {
                    var o = a.offset().top,
                        r = a.offset().left,
                        c = l.from ? l.from + o : o,
                        u = l.to ? l.to + o : o,
                        h = l.fromX ? l.fromX + r : r,
                        g = l.toX ? l.toX + r : r;
                    return (
                        i.top >= u && i.top <= c && i.left >= g && i.left <= h
                    );
                }
                var f = e(t).height(),
                    d = e(t).width(),
                    p = n ? e(n).height() : a.height(),
                    _ = n ? e(n).width() : a.width(),
                    v = 1 + p / f,
                    m = v,
                    S = p < f ? v * (f / p) : v,
                    I = 1 + _ / d,
                    O = I,
                    M = _ < d ? I * (d / _) : I,
                    b = [
                        i.top <= f / m,
                        i.bottom >= f / S,
                        i.left <= d / O,
                        i.right >= d / M,
                    ];
                if (s.highlightByNextTarget) {
                    var w = a.data(C).tn;
                    if (w) {
                        var y = w[0].getBoundingClientRect();
                        "vertical" === s.layout
                            ? (b = [i.top <= f / 2, y.top > f / 2, 1, 1])
                            : "horizontal" === s.layout &&
                              (b = [1, 1, i.left <= d / 2, y.left > d / 2]);
                    }
                }
                return b[0] && b[1] && b[2] && b[3];
            },
            _scrollTo: function () {
                (p = I._scrollSpeed.call(null)),
                    (u = s.pageEndSmoothScroll
                        ? I._pageEndSmoothScroll.call(null)
                        : u);
                var a = e("html,body"),
                    l = s.autoScrollSpeed ? I._autoScrollSpeed.call(null) : p,
                    n = a.is(":animated") ? s.scrollingEasing : s.scrollEasing,
                    i = e(t).scrollTop(),
                    o = e(t).scrollLeft();
                switch (h) {
                    case "horizontal":
                        o != u[1] &&
                            (I._callbacks.call(null, "onStart"),
                            a
                                .stop()
                                .animate({ scrollLeft: u[1] }, l, n)
                                .promise()
                                .then(function () {
                                    I._callbacks.call(null, "onComplete");
                                }));
                        break;
                    case "auto":
                        var r;
                        if (i != u[0] || o != u[1])
                            if (
                                (I._callbacks.call(null, "onStart"),
                                navigator.userAgent.match(
                                    /(iPod|iPhone|iPad|Android)/
                                ))
                            )
                                a.stop()
                                    .animate(
                                        {
                                            pageYOffset: u[0],
                                            pageXOffset: u[1],
                                        },
                                        {
                                            duration: l,
                                            easing: n,
                                            step: function (e, a) {
                                                "pageXOffset" == a.prop
                                                    ? (r = e)
                                                    : "pageYOffset" == a.prop &&
                                                      t.scrollTo(r, e);
                                            },
                                        }
                                    )
                                    .promise()
                                    .then(function () {
                                        I._callbacks.call(null, "onComplete");
                                    });
                            else
                                a.stop()
                                    .animate(
                                        { scrollTop: u[0], scrollLeft: u[1] },
                                        l,
                                        n
                                    )
                                    .promise()
                                    .then(function () {
                                        I._callbacks.call(null, "onComplete");
                                    });
                        break;
                    default:
                        i != u[0] &&
                            (I._callbacks.call(null, "onStart"),
                            a
                                .stop()
                                .animate({ scrollTop: u[0] }, l, n)
                                .promise()
                                .then(function () {
                                    I._callbacks.call(null, "onComplete");
                                }));
                }
            },
            _pageEndSmoothScroll: function () {
                var l = e(a).height(),
                    n = e(a).width(),
                    s = e(t).height(),
                    i = e(t).width();
                return [
                    l - u[0] < s ? l - s : u[0],
                    n - u[1] < i ? n - i : u[1],
                ];
            },
            _scrollSpeed: function () {
                var t = s.scrollSpeed;
                return (
                    r &&
                        r.length &&
                        r.add(r.parent()).each(function () {
                            var a = e(this);
                            if (a.attr("class")) {
                                var l = a.attr("class").split(" ");
                                for (var n in l)
                                    if (
                                        String(l[n]).match(/^ps2id-speed-\d+$/)
                                    ) {
                                        t = l[n].split("ps2id-speed-")[1];
                                        break;
                                    }
                            }
                        }),
                    parseInt(t)
                );
            },
            _autoScrollSpeed: function () {
                var l = e(t).scrollTop(),
                    n = e(t).scrollLeft(),
                    s = e(a).height(),
                    i = e(a).width(),
                    o = [
                        p +
                            (p * Math.floor((Math.abs(u[0] - l) / s) * 100)) /
                                100,
                        p +
                            (p * Math.floor((Math.abs(u[1] - n) / i) * 100)) /
                                100,
                    ];
                return Math.max.apply(Math, o);
            },
            _callbacks: function (e) {
                if (s)
                    switch (
                        ((this[C] = {
                            trigger: o,
                            clicked: r,
                            target: c,
                            scrollTo: { y: u[0], x: u[1] },
                        }),
                        e)
                    ) {
                        case "onStart":
                            if (
                                s.appendHash &&
                                t.history &&
                                t.history.pushState &&
                                r &&
                                r.length
                            ) {
                                var a = "#" + r.attr("href").split("#")[1];
                                a !== t.location.hash &&
                                    history.pushState("", "", a);
                            }
                            s.onStart.call(null, this[C]);
                            break;
                        case "onComplete":
                            s.onComplete.call(null, this[C]);
                    }
            },
            _reset: function () {
                h = g = f = !1;
            },
            _isInit: function () {
                i || S.init.apply(this);
            },
            _live: function () {
                d = setTimeout(function () {
                    s.live
                        ? e(I._highlightSelector()).length !== m &&
                          I._setup.call(null)
                        : d && clearTimeout(d),
                        I._live.call(null);
                }, 1e3);
            },
            _easing: function () {
                function t(e) {
                    var t = 7.5625,
                        a = 2.75;
                    return e < 1 / a
                        ? t * e * e
                        : e < 2 / a
                        ? t * (e -= 1.5 / a) * e + 0.75
                        : e < 2.5 / a
                        ? t * (e -= 2.25 / a) * e + 0.9375
                        : t * (e -= 2.625 / a) * e + 0.984375;
                }
                (e.easing.easeInQuad =
                    e.easing.easeInQuad ||
                    function (e) {
                        return e * e;
                    }),
                    (e.easing.easeOutQuad =
                        e.easing.easeOutQuad ||
                        function (e) {
                            return 1 - (1 - e) * (1 - e);
                        }),
                    (e.easing.easeInOutQuad =
                        e.easing.easeInOutQuad ||
                        function (e) {
                            return e < 0.5
                                ? 2 * e * e
                                : 1 - Math.pow(-2 * e + 2, 2) / 2;
                        }),
                    (e.easing.easeInCubic =
                        e.easing.easeInCubic ||
                        function (e) {
                            return e * e * e;
                        }),
                    (e.easing.easeOutCubic =
                        e.easing.easeOutCubic ||
                        function (e) {
                            return 1 - Math.pow(1 - e, 3);
                        }),
                    (e.easing.easeInOutCubic =
                        e.easing.easeInOutCubic ||
                        function (e) {
                            return e < 0.5
                                ? 4 * e * e * e
                                : 1 - Math.pow(-2 * e + 2, 3) / 2;
                        }),
                    (e.easing.easeInQuart =
                        e.easing.easeInQuart ||
                        function (e) {
                            return e * e * e * e;
                        }),
                    (e.easing.easeOutQuart =
                        e.easing.easeOutQuart ||
                        function (e) {
                            return 1 - Math.pow(1 - e, 4);
                        }),
                    (e.easing.easeInOutQuart =
                        e.easing.easeInOutQuart ||
                        function (e) {
                            return e < 0.5
                                ? 8 * e * e * e * e
                                : 1 - Math.pow(-2 * e + 2, 4) / 2;
                        }),
                    (e.easing.easeInQuint =
                        e.easing.easeInQuint ||
                        function (e) {
                            return e * e * e * e * e;
                        }),
                    (e.easing.easeOutQuint =
                        e.easing.easeOutQuint ||
                        function (e) {
                            return 1 - Math.pow(1 - e, 5);
                        }),
                    (e.easing.easeInOutQuint =
                        e.easing.easeInOutQuint ||
                        function (e) {
                            return e < 0.5
                                ? 16 * e * e * e * e * e
                                : 1 - Math.pow(-2 * e + 2, 5) / 2;
                        }),
                    (e.easing.easeInExpo =
                        e.easing.easeInExpo ||
                        function (e) {
                            return 0 === e ? 0 : Math.pow(2, 10 * e - 10);
                        }),
                    (e.easing.easeOutExpo =
                        e.easing.easeOutExpo ||
                        function (e) {
                            return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                        }),
                    (e.easing.easeInOutExpo =
                        e.easing.easeInOutExpo ||
                        function (e) {
                            return 0 === e
                                ? 0
                                : 1 === e
                                ? 1
                                : e < 0.5
                                ? Math.pow(2, 20 * e - 10) / 2
                                : (2 - Math.pow(2, -20 * e + 10)) / 2;
                        }),
                    (e.easing.easeInSine =
                        e.easing.easeInSine ||
                        function (e) {
                            return 1 - Math.cos((e * Math.PI) / 2);
                        }),
                    (e.easing.easeOutSine =
                        e.easing.easeOutSine ||
                        function (e) {
                            return Math.sin((e * Math.PI) / 2);
                        }),
                    (e.easing.easeInOutSine =
                        e.easing.easeInOutSine ||
                        function (e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2;
                        }),
                    (e.easing.easeInCirc =
                        e.easing.easeInCirc ||
                        function (e) {
                            return 1 - Math.sqrt(1 - Math.pow(e, 2));
                        }),
                    (e.easing.easeOutCirc =
                        e.easing.easeOutCirc ||
                        function (e) {
                            return Math.sqrt(1 - Math.pow(e - 1, 2));
                        }),
                    (e.easing.easeInOutCirc =
                        e.easing.easeInOutCirc ||
                        function (e) {
                            return e < 0.5
                                ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
                                : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) /
                                      2;
                        }),
                    (e.easing.easeInElastic =
                        e.easing.easeInElastic ||
                        function (e) {
                            return 0 === e
                                ? 0
                                : 1 === e
                                ? 1
                                : -Math.pow(2, 10 * e - 10) *
                                  Math.sin(
                                      (10 * e - 10.75) * ((2 * Math.PI) / 3)
                                  );
                        }),
                    (e.easing.easeOutElastic =
                        e.easing.easeOutElastic ||
                        function (e) {
                            return 0 === e
                                ? 0
                                : 1 === e
                                ? 1
                                : Math.pow(2, -10 * e) *
                                      Math.sin(
                                          (10 * e - 0.75) * ((2 * Math.PI) / 3)
                                      ) +
                                  1;
                        }),
                    (e.easing.easeInOutElastic =
                        e.easing.easeInOutElastic ||
                        function (e) {
                            return 0 === e
                                ? 0
                                : 1 === e
                                ? 1
                                : e < 0.5
                                ? (-Math.pow(2, 20 * e - 10) *
                                      Math.sin(
                                          (20 * e - 11.125) *
                                              ((2 * Math.PI) / 4.5)
                                      )) /
                                  2
                                : (Math.pow(2, -20 * e + 10) *
                                      Math.sin(
                                          (20 * e - 11.125) *
                                              ((2 * Math.PI) / 4.5)
                                      )) /
                                      2 +
                                  1;
                        }),
                    (e.easing.easeInBack =
                        e.easing.easeInBack ||
                        function (e) {
                            return 2.70158 * e * e * e - 1.70158 * e * e;
                        }),
                    (e.easing.easeOutBack =
                        e.easing.easeOutBack ||
                        function (e) {
                            return (
                                1 +
                                2.70158 * Math.pow(e - 1, 3) +
                                1.70158 * Math.pow(e - 1, 2)
                            );
                        }),
                    (e.easing.easeInOutBack =
                        e.easing.easeInOutBack ||
                        function (e) {
                            return e < 0.5
                                ? (Math.pow(2 * e, 2) *
                                      (7.189819 * e - 2.5949095)) /
                                      2
                                : (Math.pow(2 * e - 2, 2) *
                                      (3.5949095 * (2 * e - 2) + 2.5949095) +
                                      2) /
                                      2;
                        }),
                    (e.easing.easeInBounce =
                        e.easing.easeInBounce ||
                        function (e) {
                            return 1 - t(1 - e);
                        }),
                    (e.easing.easeOutBounce = e.easing.easeOutBounce || t),
                    (e.easing.easeInOutBounce =
                        e.easing.easeInOutBounce ||
                        function (e) {
                            return e < 0.5
                                ? (1 - t(1 - 2 * e)) / 2
                                : (1 + t(2 * e - 1)) / 2;
                        });
            },
        };
    I._easing.call(),
        (e.fn[_] = function (t) {
            return S[t]
                ? S[t].apply(this, Array.prototype.slice.call(arguments, 1))
                : "object" != typeof t && t
                ? void e.error("Method " + t + " does not exist")
                : S.init.apply(this, arguments);
        }),
        (e[_] = function (t) {
            return S[t]
                ? S[t].apply(this, Array.prototype.slice.call(arguments, 1))
                : "object" != typeof t && t
                ? void e.error("Method " + t + " does not exist")
                : S.init.apply(this, arguments);
        }),
        (e[_].defaults = v);
})(jQuery, window, document);

/* ==========================================================================
   8. Headroom
   ========================================================================== */

/*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
!(function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
        ? define([], b)
        : "object" == typeof exports
        ? (module.exports = b())
        : (a.Headroom = b());
})(this, function () {
    "use strict";
    function a(a) {
        (this.callback = a), (this.ticking = !1);
    }
    function b(a) {
        return (
            a && "undefined" != typeof window && (a === window || a.nodeType)
        );
    }
    function c(a) {
        if (arguments.length <= 0)
            throw new Error("Missing arguments in extend function");
        var d,
            e,
            f = a || {};
        for (e = 1; e < arguments.length; e++) {
            var g = arguments[e] || {};
            for (d in g)
                "object" != typeof f[d] || b(f[d])
                    ? (f[d] = f[d] || g[d])
                    : (f[d] = c(f[d], g[d]));
        }
        return f;
    }
    function d(a) {
        return a === Object(a) ? a : { down: a, up: a };
    }
    function e(a, b) {
        (b = c(b, e.options)),
            (this.lastKnownScrollY = 0),
            (this.elem = a),
            (this.tolerance = d(b.tolerance)),
            (this.classes = b.classes),
            (this.offset = b.offset),
            (this.scroller = b.scroller),
            (this.initialised = !1),
            (this.onPin = b.onPin),
            (this.onUnpin = b.onUnpin),
            (this.onTop = b.onTop),
            (this.onNotTop = b.onNotTop),
            (this.onBottom = b.onBottom),
            (this.onNotBottom = b.onNotBottom);
    }
    var f = {
        bind: !!function () {}.bind,
        classList: "classList" in document.documentElement,
        rAF: !!(
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame
        ),
    };
    return (
        (window.requestAnimationFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame),
        (a.prototype = {
            constructor: a,
            update: function () {
                this.callback && this.callback(), (this.ticking = !1);
            },
            requestTick: function () {
                this.ticking ||
                    (requestAnimationFrame(
                        this.rafCallback ||
                            (this.rafCallback = this.update.bind(this))
                    ),
                    (this.ticking = !0));
            },
            handleEvent: function () {
                this.requestTick();
            },
        }),
        (e.prototype = {
            constructor: e,
            init: function () {
                if (e.cutsTheMustard)
                    return (
                        (this.debouncer = new a(this.update.bind(this))),
                        this.elem.classList.add(this.classes.initial),
                        setTimeout(this.attachEvent.bind(this), 100),
                        this
                    );
            },
            destroy: function () {
                var a = this.classes;
                this.initialised = !1;
                for (var b in a)
                    a.hasOwnProperty(b) && this.elem.classList.remove(a[b]);
                this.scroller.removeEventListener("scroll", this.debouncer, !1);
            },
            attachEvent: function () {
                this.initialised ||
                    ((this.lastKnownScrollY = this.getScrollY()),
                    (this.initialised = !0),
                    this.scroller.addEventListener(
                        "scroll",
                        this.debouncer,
                        !1
                    ),
                    this.debouncer.handleEvent());
            },
            unpin: function () {
                var a = this.elem.classList,
                    b = this.classes;
                (!a.contains(b.pinned) && a.contains(b.unpinned)) ||
                    (a.add(b.unpinned),
                    a.remove(b.pinned),
                    this.onUnpin && this.onUnpin.call(this));
            },
            pin: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.unpinned) &&
                    (a.remove(b.unpinned),
                    a.add(b.pinned),
                    this.onPin && this.onPin.call(this));
            },
            top: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.top) ||
                    (a.add(b.top),
                    a.remove(b.notTop),
                    this.onTop && this.onTop.call(this));
            },
            notTop: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.notTop) ||
                    (a.add(b.notTop),
                    a.remove(b.top),
                    this.onNotTop && this.onNotTop.call(this));
            },
            bottom: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.bottom) ||
                    (a.add(b.bottom),
                    a.remove(b.notBottom),
                    this.onBottom && this.onBottom.call(this));
            },
            notBottom: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.notBottom) ||
                    (a.add(b.notBottom),
                    a.remove(b.bottom),
                    this.onNotBottom && this.onNotBottom.call(this));
            },
            getScrollY: function () {
                return void 0 !== this.scroller.pageYOffset
                    ? this.scroller.pageYOffset
                    : void 0 !== this.scroller.scrollTop
                    ? this.scroller.scrollTop
                    : (
                          document.documentElement ||
                          document.body.parentNode ||
                          document.body
                      ).scrollTop;
            },
            getViewportHeight: function () {
                return (
                    window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight
                );
            },
            getElementPhysicalHeight: function (a) {
                return Math.max(a.offsetHeight, a.clientHeight);
            },
            getScrollerPhysicalHeight: function () {
                return this.scroller === window ||
                    this.scroller === document.body
                    ? this.getViewportHeight()
                    : this.getElementPhysicalHeight(this.scroller);
            },
            getDocumentHeight: function () {
                var a = document.body,
                    b = document.documentElement;
                return Math.max(
                    a.scrollHeight,
                    b.scrollHeight,
                    a.offsetHeight,
                    b.offsetHeight,
                    a.clientHeight,
                    b.clientHeight
                );
            },
            getElementHeight: function (a) {
                return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight);
            },
            getScrollerHeight: function () {
                return this.scroller === window ||
                    this.scroller === document.body
                    ? this.getDocumentHeight()
                    : this.getElementHeight(this.scroller);
            },
            isOutOfBounds: function (a) {
                var b = a < 0,
                    c =
                        a + this.getScrollerPhysicalHeight() >
                        this.getScrollerHeight();
                return b || c;
            },
            toleranceExceeded: function (a, b) {
                return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b];
            },
            shouldUnpin: function (a, b) {
                var c = a > this.lastKnownScrollY,
                    d = a >= this.offset;
                return c && d && b;
            },
            shouldPin: function (a, b) {
                var c = a < this.lastKnownScrollY,
                    d = a <= this.offset;
                return (c && b) || d;
            },
            update: function () {
                var a = this.getScrollY(),
                    b = a > this.lastKnownScrollY ? "down" : "up",
                    c = this.toleranceExceeded(a, b);
                this.isOutOfBounds(a) ||
                    (a <= this.offset ? this.top() : this.notTop(),
                    a + this.getViewportHeight() >= this.getScrollerHeight()
                        ? this.bottom()
                        : this.notBottom(),
                    this.shouldUnpin(a, c)
                        ? this.unpin()
                        : this.shouldPin(a, c) && this.pin(),
                    (this.lastKnownScrollY = a));
            },
        }),
        (e.options = {
            tolerance: { up: 0, down: 0 },
            offset: 0,
            scroller: window,
            classes: {
                pinned: "headroom--pinned",
                unpinned: "headroom--unpinned",
                top: "headroom--top",
                notTop: "headroom--not-top",
                bottom: "headroom--bottom",
                notBottom: "headroom--not-bottom",
                initial: "headroom",
            },
        }),
        (e.cutsTheMustard =
            "undefined" != typeof f && f.rAF && f.bind && f.classList),
        e
    );
});

!(function (o) {
    o &&
        ((o.fn.headroom = function (t) {
            return this.each(function () {
                var a = o(this),
                    e = a.data("headroom"),
                    n = "object" == typeof t && t;
                (n = o.extend(!0, {}, Headroom.options, n)),
                    e ||
                        ((e = new Headroom(this, n)).init(),
                        a.data("headroom", e)),
                    "string" == typeof t &&
                        (e[t](), "destroy" === t && a.removeData("headroom"));
            });
        }),
        o("[data-headroom]").each(function () {
            var t = o(this);
            t.headroom(t.data());
        }));
})(window.Zepto || window.jQuery);

/* ==========================================================================
   9. Midnight
   ========================================================================== */

/*!
 * Midnight.js 1.1.1
 * jQuery plugin to switch between multiple fixed header designs on the fly, so it looks in line with the content below it.
 * http://aerolab.github.io/midnight.js/
 *
 * Copyright (c) 2014 Aerolab <info@aerolab.co>
 *
 * Released under the MIT license
 * http://aerolab.github.io/midnight.js/LICENSE.txt
 */
!(function (t) {
    "function" == typeof define && define.amd
        ? define(["jquery"], t)
        : t(jQuery);
})(function (t) {
    var e = 0,
        s = Array.prototype.slice;
    (t.cleanData = (function (e) {
        return function (s) {
            var i, n, o;
            for (o = 0; null != (n = s[o]); o++)
                try {
                    (i = t._data(n, "events")),
                        i && i.remove && t(n).triggerHandler("remove");
                } catch (r) {}
            e(s);
        };
    })(t.cleanData)),
        (t.widget = function (e, s, i) {
            var n,
                o,
                r,
                a,
                h = {},
                d = e.split(".")[0];
            return (
                (e = e.split(".")[1]),
                (n = d + "-" + e),
                i || ((i = s), (s = t.Widget)),
                (t.expr[":"][n.toLowerCase()] = function (e) {
                    return !!t.data(e, n);
                }),
                (t[d] = t[d] || {}),
                (o = t[d][e]),
                (r = t[d][e] =
                    function (t, e) {
                        return this._createWidget
                            ? void (
                                  arguments.length && this._createWidget(t, e)
                              )
                            : new r(t, e);
                    }),
                t.extend(r, o, {
                    version: i.version,
                    _proto: t.extend({}, i),
                    _childConstructors: [],
                }),
                (a = new s()),
                (a.options = t.widget.extend({}, a.options)),
                t.each(i, function (e, i) {
                    return t.isFunction(i)
                        ? void (h[e] = (function () {
                              var t = function () {
                                      return s.prototype[e].apply(
                                          this,
                                          arguments
                                      );
                                  },
                                  n = function (t) {
                                      return s.prototype[e].apply(this, t);
                                  };
                              return function () {
                                  var e,
                                      s = this._super,
                                      o = this._superApply;
                                  return (
                                      (this._super = t),
                                      (this._superApply = n),
                                      (e = i.apply(this, arguments)),
                                      (this._super = s),
                                      (this._superApply = o),
                                      e
                                  );
                              };
                          })())
                        : void (h[e] = i);
                }),
                (r.prototype = t.widget.extend(
                    a,
                    { widgetEventPrefix: o ? a.widgetEventPrefix || e : e },
                    h,
                    {
                        constructor: r,
                        namespace: d,
                        widgetName: e,
                        widgetFullName: n,
                    }
                )),
                o
                    ? (t.each(o._childConstructors, function (e, s) {
                          var i = s.prototype;
                          t.widget(
                              i.namespace + "." + i.widgetName,
                              r,
                              s._proto
                          );
                      }),
                      delete o._childConstructors)
                    : s._childConstructors.push(r),
                t.widget.bridge(e, r),
                r
            );
        }),
        (t.widget.extend = function (e) {
            for (
                var i, n, o = s.call(arguments, 1), r = 0, a = o.length;
                a > r;
                r++
            )
                for (i in o[r])
                    (n = o[r][i]),
                        o[r].hasOwnProperty(i) &&
                            void 0 !== n &&
                            (e[i] = t.isPlainObject(n)
                                ? t.isPlainObject(e[i])
                                    ? t.widget.extend({}, e[i], n)
                                    : t.widget.extend({}, n)
                                : n);
            return e;
        }),
        (t.widget.bridge = function (e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function (o) {
                var r = "string" == typeof o,
                    a = s.call(arguments, 1),
                    h = this;
                return (
                    (o =
                        !r && a.length
                            ? t.widget.extend.apply(null, [o].concat(a))
                            : o),
                    r
                        ? this.each(function () {
                              var s,
                                  i = t.data(this, n);
                              return "instance" === o
                                  ? ((h = i), !1)
                                  : i
                                  ? t.isFunction(i[o]) && "_" !== o.charAt(0)
                                      ? ((s = i[o].apply(i, a)),
                                        s !== i && void 0 !== s
                                            ? ((h =
                                                  s && s.jquery
                                                      ? h.pushStack(s.get())
                                                      : s),
                                              !1)
                                            : void 0)
                                      : t.error(
                                            "no such method '" +
                                                o +
                                                "' for " +
                                                e +
                                                " widget instance"
                                        )
                                  : t.error(
                                        "cannot call methods on " +
                                            e +
                                            " prior to initialization; attempted to call method '" +
                                            o +
                                            "'"
                                    );
                          })
                        : this.each(function () {
                              var e = t.data(this, n);
                              e
                                  ? (e.option(o || {}), e._init && e._init())
                                  : t.data(this, n, new i(o, this));
                          }),
                    h
                );
            };
        }),
        (t.Widget = function () {}),
        (t.Widget._childConstructors = []),
        (t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { disabled: !1, create: null },
            _createWidget: function (s, i) {
                (i = t(i || this.defaultElement || this)[0]),
                    (this.element = t(i)),
                    (this.uuid = e++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = t()),
                    (this.hoverable = t()),
                    (this.focusable = t()),
                    i !== this &&
                        (t.data(i, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (t) {
                                t.target === i && this.destroy();
                            },
                        }),
                        (this.document = t(
                            i.style ? i.ownerDocument : i.document || i
                        )),
                        (this.window = t(
                            this.document[0].defaultView ||
                                this.document[0].parentWindow
                        ))),
                    (this.options = t.widget.extend(
                        {},
                        this.options,
                        this._getCreateOptions(),
                        s
                    )),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                this._destroy(),
                    this.element
                        .unbind(this.eventNamespace)
                        .removeData(this.widgetFullName)
                        .removeData(t.camelCase(this.widgetFullName)),
                    this.widget()
                        .unbind(this.eventNamespace)
                        .removeAttr("aria-disabled")
                        .removeClass(
                            this.widgetFullName + "-disabled ui-state-disabled"
                        ),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus");
            },
            _destroy: t.noop,
            widget: function () {
                return this.element;
            },
            option: function (e, s) {
                var i,
                    n,
                    o,
                    r = e;
                if (0 === arguments.length)
                    return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (
                        ((r = {}),
                        (i = e.split(".")),
                        (e = i.shift()),
                        i.length)
                    ) {
                        for (
                            n = r[e] = t.widget.extend({}, this.options[e]),
                                o = 0;
                            i.length - 1 > o;
                            o++
                        )
                            (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
                        if (((e = i.pop()), 1 === arguments.length))
                            return void 0 === n[e] ? null : n[e];
                        n[e] = s;
                    } else {
                        if (1 === arguments.length)
                            return void 0 === this.options[e]
                                ? null
                                : this.options[e];
                        r[e] = s;
                    }
                return this._setOptions(r), this;
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this;
            },
            _setOption: function (t, e) {
                return (
                    (this.options[t] = e),
                    "disabled" === t &&
                        (this.widget().toggleClass(
                            this.widgetFullName + "-disabled",
                            !!e
                        ),
                        e &&
                            (this.hoverable.removeClass("ui-state-hover"),
                            this.focusable.removeClass("ui-state-focus"))),
                    this
                );
            },
            enable: function () {
                return this._setOptions({ disabled: !1 });
            },
            disable: function () {
                return this._setOptions({ disabled: !0 });
            },
            _on: function (e, s, i) {
                var n,
                    o = this;
                "boolean" != typeof e && ((i = s), (s = e), (e = !1)),
                    i
                        ? ((s = n = t(s)),
                          (this.bindings = this.bindings.add(s)))
                        : ((i = s), (s = this.element), (n = this.widget())),
                    t.each(i, function (i, r) {
                        function a() {
                            return e ||
                                (o.options.disabled !== !0 &&
                                    !t(this).hasClass("ui-state-disabled"))
                                ? ("string" == typeof r ? o[r] : r).apply(
                                      o,
                                      arguments
                                  )
                                : void 0;
                        }
                        "string" != typeof r &&
                            (a.guid = r.guid = r.guid || a.guid || t.guid++);
                        var h = i.match(/^([\w:-]*)\s*(.*)$/),
                            d = h[1] + o.eventNamespace,
                            l = h[2];
                        l ? n.delegate(l, d, a) : s.bind(d, a);
                    });
            },
            _off: function (e, s) {
                (s =
                    (s || "").split(" ").join(this.eventNamespace + " ") +
                    this.eventNamespace),
                    e.unbind(s).undelegate(s),
                    (this.bindings = t(this.bindings.not(e).get())),
                    (this.focusable = t(this.focusable.not(e).get())),
                    (this.hoverable = t(this.hoverable.not(e).get()));
            },
            _delay: function (t, e) {
                function s() {
                    return ("string" == typeof t ? i[t] : t).apply(
                        i,
                        arguments
                    );
                }
                var i = this;
                return setTimeout(s, e || 0);
            },
            _hoverable: function (e) {
                (this.hoverable = this.hoverable.add(e)),
                    this._on(e, {
                        mouseenter: function (e) {
                            t(e.currentTarget).addClass("ui-state-hover");
                        },
                        mouseleave: function (e) {
                            t(e.currentTarget).removeClass("ui-state-hover");
                        },
                    });
            },
            _focusable: function (e) {
                (this.focusable = this.focusable.add(e)),
                    this._on(e, {
                        focusin: function (e) {
                            t(e.currentTarget).addClass("ui-state-focus");
                        },
                        focusout: function (e) {
                            t(e.currentTarget).removeClass("ui-state-focus");
                        },
                    });
            },
            _trigger: function (e, s, i) {
                var n,
                    o,
                    r = this.options[e];
                if (
                    ((i = i || {}),
                    (s = t.Event(s)),
                    (s.type = (
                        e === this.widgetEventPrefix
                            ? e
                            : this.widgetEventPrefix + e
                    ).toLowerCase()),
                    (s.target = this.element[0]),
                    (o = s.originalEvent))
                )
                    for (n in o) n in s || (s[n] = o[n]);
                return (
                    this.element.trigger(s, i),
                    !(
                        (t.isFunction(r) &&
                            r.apply(this.element[0], [s].concat(i)) === !1) ||
                        s.isDefaultPrevented()
                    )
                );
            },
        }),
        t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, s) {
            t.Widget.prototype["_" + e] = function (i, n, o) {
                "string" == typeof n && (n = { effect: n });
                var r,
                    a = n
                        ? n === !0 || "number" == typeof n
                            ? s
                            : n.effect || s
                        : e;
                (n = n || {}),
                    "number" == typeof n && (n = { duration: n }),
                    (r = !t.isEmptyObject(n)),
                    (n.complete = o),
                    n.delay && i.delay(n.delay),
                    r && t.effects && t.effects.effect[a]
                        ? i[e](n)
                        : a !== e && i[a]
                        ? i[a](n.duration, n.easing, o)
                        : i.queue(function (s) {
                              t(this)[e](), o && o.call(i[0]), s();
                          });
            };
        }),
        t.widget;
}),
    (function (t) {
        "use strict";
        t.widget("aerolab.midnight", {
            options: {
                headerClass: "midnightHeader",
                innerClass: "midnightInner",
                defaultClass: "default",
                classPrefix: "",
                sectionSelector: "midnight",
            },
            _headers: {},
            _headerInfo: { top: 0, height: 0 },
            _$sections: [],
            _sections: [],
            _scrollTop: 0,
            _documentHeight: 0,
            _transformMode: !1,
            refresh: function () {
                (this._headerInfo = {
                    top: 0,
                    height: this.element.outerHeight(),
                }),
                    (this._$sections = t(
                        "[data-" +
                            this.options.sectionSelector +
                            "]:not(:hidden)"
                    )),
                    (this._sections = []),
                    this._setupHeaders(),
                    this.recalculate();
            },
            _create: function () {
                var e = this;
                (this._scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop),
                    (this._documentHeight = t(document).height()),
                    (this._headers = {}),
                    (this._transformMode = this._getSupportedTransform()),
                    this.refresh(),
                    setInterval(function () {
                        e._recalculateSections();
                    }, 1e3),
                    e.recalculate(),
                    t(window).resize(function () {
                        e.recalculate();
                    }),
                    this._updateHeadersLoop();
            },
            recalculate: function () {
                this._recalculateSections(),
                    this._updateHeaderHeight(),
                    this._recalculateHeaders(),
                    this._updateHeaders();
            },
            _getSupportedTransform: function () {
                for (
                    var t = [
                            "transform",
                            "WebkitTransform",
                            "MozTransform",
                            "OTransform",
                            "msTransform",
                        ],
                        e = 0;
                    e < t.length;
                    e++
                )
                    if (void 0 !== document.createElement("div").style[t[e]])
                        return t[e];
                return !1;
            },
            _getContainerHeight: function () {
                var e = this.element.find("> ." + this.options.headerClass),
                    s = 0,
                    i = 0,
                    n = this;
                return (
                    e.length
                        ? e.each(function () {
                              var e = t(this),
                                  o = e.find("> ." + n.options.innerClass);
                              o.length
                                  ? (o
                                        .css("bottom", "auto")
                                        .css("overflow", "auto"),
                                    (i = o.outerHeight()),
                                    o.css("bottom", "0"))
                                  : (e.css("bottom", "auto"),
                                    (i = e.outerHeight()),
                                    e.css("bottom", "0")),
                                  (s = i > s ? i : s);
                          })
                        : (s = i = this.element.outerHeight()),
                    s
                );
            },
            _setupHeaders: function () {
                var e = this;
                this._headers[this.options.defaultClass] = {};
                for (var s = 0; s < this._$sections.length; s++) {
                    var i = t(this._$sections[s]),
                        n = i.data(this.options.sectionSelector);
                    "string" == typeof n &&
                        ((n = n.trim()), "" !== n && (e._headers[n] = {}));
                }
                ({
                    top: this.element.css("padding-top"),
                    right: this.element.css("padding-right"),
                    bottom: this.element.css("padding-bottom"),
                    left: this.element.css("padding-left"),
                });
                this.element.css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    overflow: "hidden",
                }),
                    this._updateHeaderHeight();
                var o = this.element.find("> ." + this.options.headerClass);
                o.length
                    ? o.filter("." + this.options.defaultClass).length ||
                      o
                          .filter("." + this.options.headerClass + ":first")
                          .clone(!0, !0)
                          .attr(
                              "class",
                              this.options.headerClass +
                                  " " +
                                  this.options.defaultClass
                          )
                    : this.element.wrapInner(
                          '<div class="' +
                              this.options.headerClass +
                              " " +
                              this.options.defaultClass +
                              '"></div>'
                      );
                var o = this.element.find("> ." + this.options.headerClass),
                    r = o.filter("." + this.options.defaultClass).clone(!0, !0);
                for (var n in this._headers)
                    if (
                        this._headers.hasOwnProperty(n) &&
                        "undefined" == typeof this._headers[n].element
                    ) {
                        var a = o.filter("." + n);
                        a.length
                            ? (this._headers[n].element = a)
                            : (this._headers[n].element = r
                                  .clone(!0, !0)
                                  .removeClass(this.options.defaultClass)
                                  .addClass(n)
                                  .appendTo(this.element));
                        var h = {
                            position: "absolute",
                            overflow: "hidden",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        };
                        this._headers[n].element.css(h),
                            this._transformMode !== !1 &&
                                this._headers[n].element.css(
                                    this._transformMode,
                                    "translateZ(0)"
                                ),
                            this._headers[n].element.find(
                                "> ." + this.options.innerClass
                            ).length ||
                                this._headers[n].element.wrapInner(
                                    '<div class="' +
                                        this.options.innerClass +
                                        '"></div>'
                                ),
                            (this._headers[n].inner = this._headers[
                                n
                            ].element.find("> ." + this.options.innerClass)),
                            this._headers[n].inner.css(h),
                            this._transformMode !== !1 &&
                                this._headers[n].inner.css(
                                    this._transformMode,
                                    "translateZ(0)"
                                ),
                            (this._headers[n].from = ""),
                            (this._headers[n].progress = 0);
                    }
                o.each(function () {
                    var s = t(this),
                        i = !1;
                    for (var n in e._headers)
                        e._headers.hasOwnProperty(n) &&
                            s.hasClass(n) &&
                            (i = !0);
                    s.find("> ." + e.options.innerClass).length ||
                        s.wrapInner(
                            '<div class="' + e.options.innerClass + '"></div>'
                        ),
                        i ? s.show() : s.hide();
                });
            },
            _recalculateHeaders: function () {
                (this._scrollTop =
                    window.pageYOffset ||
                    document.body.scrollTop ||
                    document.documentElement.scrollTop),
                    (this._scrollTop = Math.max(this._scrollTop, 0)),
                    (this._scrollTop = Math.min(
                        this._scrollTop,
                        this._documentHeight
                    ));
                var t = this._headerInfo.height,
                    e = this._scrollTop + this._headerInfo.top,
                    s = e + t;
                if ("function" == typeof window.getComputedStyle) {
                    var i = window.getComputedStyle(this.element[0], null),
                        n = 0,
                        o = 0;
                    if (
                        this._transformMode !== !1 &&
                        "string" == typeof i.transform
                    ) {
                        var r = i.transform.match(/(-?[0-9\.]+)/g);
                        null !== r &&
                            r.length >= 6 &&
                            !isNaN(parseFloat(r[5])) &&
                            (o = parseFloat(r[5]));
                    }
                    i.top.indexOf("px") >= 0 &&
                        !isNaN(parseFloat(i.top)) &&
                        (n = parseFloat(i.top)),
                        (e += n + o),
                        (s += n + o);
                }
                for (var a in this._headers)
                    this._headers.hasOwnProperty(a) &&
                        ((this._headers[a].from = ""),
                        (this._headers[a].progress = 0));
                for (var h = 0; h < this._sections.length; h++)
                    s >= this._sections[h].start &&
                        e <= this._sections[h].end &&
                        ((this._headers[this._sections[h].className].visible =
                            !0),
                        e >= this._sections[h].start &&
                        s <= this._sections[h].end
                            ? ((this._headers[
                                  this._sections[h].className
                              ].from = "top"),
                              (this._headers[
                                  this._sections[h].className
                              ].progress += 1))
                            : s > this._sections[h].end &&
                              e < this._sections[h].end
                            ? ((this._headers[
                                  this._sections[h].className
                              ].from = "top"),
                              (this._headers[
                                  this._sections[h].className
                              ].progress = 1 - (s - this._sections[h].end) / t))
                            : s > this._sections[h].start &&
                              e < this._sections[h].start &&
                              ("top" ===
                              this._headers[this._sections[h].className].from
                                  ? (this._headers[
                                        this._sections[h].className
                                    ].progress +=
                                        (s - this._sections[h].start) / t)
                                  : ((this._headers[
                                        this._sections[h].className
                                    ].from = "bottom"),
                                    (this._headers[
                                        this._sections[h].className
                                    ].progress =
                                        (s - this._sections[h].start) / t))));
            },
            _updateHeaders: function () {
                if (
                    "undefined" !=
                    typeof this._headers[this.options.defaultClass]
                ) {
                    var t = 0,
                        e = "";
                    for (var s in this._headers)
                        this._headers.hasOwnProperty(s) &&
                            "" !== !this._headers[s].from &&
                            ((t += this._headers[s].progress), (e = s));
                    t < 1 &&
                        ("" === this._headers[this.options.defaultClass].from
                            ? ((this._headers[this.options.defaultClass].from =
                                  "top" === this._headers[e].from
                                      ? "bottom"
                                      : "top"),
                              (this._headers[
                                  this.options.defaultClass
                              ].progress = 1 - t))
                            : (this._headers[
                                  this.options.defaultClass
                              ].progress += 1 - t));
                    for (var i in this._headers)
                        if (
                            this._headers.hasOwnProperty(i) &&
                            "" !== !this._headers[i].from
                        ) {
                            var n = 100 * (1 - this._headers[i].progress);
                            n >= 100 && (n = 110),
                                n <= -100 && (n = -110),
                                "top" === this._headers[i].from
                                    ? this._transformMode !== !1
                                        ? ((this._headers[i].element[0].style[
                                              this._transformMode
                                          ] =
                                              "translateY(-" +
                                              n +
                                              "%) translateZ(0)"),
                                          (this._headers[i].inner[0].style[
                                              this._transformMode
                                          ] =
                                              "translateY(+" +
                                              n +
                                              "%) translateZ(0)"))
                                        : ((this._headers[
                                              i
                                          ].element[0].style.top =
                                              "-" + n + "%"),
                                          (this._headers[i].inner[0].style.top =
                                              "+" + n + "%"))
                                    : this._transformMode !== !1
                                    ? ((this._headers[i].element[0].style[
                                          this._transformMode
                                      ] =
                                          "translateY(+" +
                                          n +
                                          "%) translateZ(0)"),
                                      (this._headers[i].inner[0].style[
                                          this._transformMode
                                      ] =
                                          "translateY(-" +
                                          n +
                                          "%) translateZ(0)"))
                                    : ((this._headers[i].element[0].style.top =
                                          "+" + n + "%"),
                                      (this._headers[i].inner[0].style.top =
                                          "-" + n + "%"));
                        }
                }
            },
            _recalculateSections: function () {
                (this._documentHeight = t(document).height()),
                    (this._sections = []);
                for (var e = 0; e < this._$sections.length; e++) {
                    var s = t(this._$sections[e]);
                    this._sections.push({
                        element: s,
                        className: s.data(this.options.sectionSelector),
                        start: s.offset().top,
                        end: s.offset().top + s.outerHeight(),
                    });
                }
            },
            _updateHeaderHeight: function () {
                (this._headerInfo.height = this._getContainerHeight()),
                    this.element.css("height", this._headerInfo.height + "px");
            },
            _updateHeadersLoop: function () {
                var t = this;
                this._requestAnimationFrame(function () {
                    t._updateHeadersLoop();
                }),
                    this._recalculateHeaders(),
                    this._updateHeaders();
            },
            _requestAnimationFrame: function (t) {
                var e =
                    e ||
                    (function () {
                        return (
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            function (t) {
                                window.setTimeout(t, 1e3 / 60);
                            }
                        );
                    })();
                e(t);
            },
        });
    })(jQuery);
