/* Polyfill service v3.111.0
 * Disable minification (remove `.min` from URL path) for more info */

(function (self, undefined) {
  if (
    !("Date" in self && "now" in self.Date && "getTime" in self.Date.prototype)
  ) {
    Date.now = function e() {
      return new Date().getTime();
    };
  }
  if (!("Date" in self && "toISOString" in Date.prototype)) {
    Date.prototype.toISOString = function t() {
      function t(t, e) {
        return (t = "" + t), "0000".substr(0, e - t.length) + t;
      }
      var e = this;
      return (
        e.getUTCFullYear() +
        "-" +
        t(e.getUTCMonth() + 1, 2) +
        "-" +
        t(e.getUTCDate(), 2) +
        "T" +
        t(e.getUTCHours(), 2) +
        ":" +
        t(e.getUTCMinutes(), 2) +
        ":" +
        t(e.getUTCSeconds(), 2) +
        "." +
        t(e.getUTCMilliseconds(), 3) +
        "Z"
      );
    };
  }
  if (!("JSON" in self)) {
    (function () {
      function e(t, r) {
        function i(e, t) {
          try {
            e();
          } catch (n) {
            t && t();
          }
        }
        function c(e) {
          if (null != c[e]) return c[e];
          var t;
          if ("bug-string-char-index" == e) t = "a" != "a"[0];
          else if ("json" == e)
            t =
              c("json-stringify") && c("date-serialization") && c("json-parse");
          else if ("date-serialization" == e) {
            if ((t = c("json-stringify") && v)) {
              var n = r.stringify;
              i(function () {
                t =
                  '"-271821-04-20T00:00:00.000Z"' == n(new s(-864e13)) &&
                  '"+275760-09-13T00:00:00.000Z"' == n(new s(864e13)) &&
                  '"-000001-01-01T00:00:00.000Z"' == n(new s(-621987552e5)) &&
                  '"1969-12-31T23:59:59.999Z"' == n(new s(-1));
              });
            }
          } else {
            var o,
              a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
            if ("json-stringify" == e) {
              var n = r.stringify,
                u = "function" == typeof n;
              u &&
                (((o = function () {
                  return 1;
                }).toJSON = o),
                i(
                  function () {
                    u =
                      "0" === n(0) &&
                      "0" === n(new f()) &&
                      '""' == n(new l()) &&
                      n(j) === b &&
                      n(b) === b &&
                      n() === b &&
                      "1" === n(o) &&
                      "[1]" == n([o]) &&
                      "[null]" == n([b]) &&
                      "null" == n(null) &&
                      "[null,null,null]" == n([b, j, null]) &&
                      n({ a: [o, !0, !1, null, "\0\b\n\f\r\t"] }) == a &&
                      "1" === n(null, o) &&
                      "[\n 1,\n 2\n]" == n([1, 2], null, 1);
                  },
                  function () {
                    u = !1;
                  }
                )),
                (t = u);
            }
            if ("json-parse" == e) {
              var p,
                g = r.parse;
              "function" == typeof g &&
                i(
                  function () {
                    0 !== g("0") ||
                      g(!1) ||
                      ((o = g(a)),
                      (p = 5 == o.a.length && 1 === o.a[0]) &&
                        (i(function () {
                          p = !g('"\t"');
                        }),
                        p &&
                          i(function () {
                            p = 1 !== g("01");
                          }),
                        p &&
                          i(function () {
                            p = 1 !== g("1.");
                          })));
                  },
                  function () {
                    p = !1;
                  }
                ),
                (t = p);
            }
          }
          return (c[e] = !!t);
        }
        function a(e) {
          return A(this);
        }
        t || (t = o.Object()), r || (r = o.Object());
        var f = t.Number || o.Number,
          l = t.String || o.String,
          u = t.Object || o.Object,
          s = t.Date || o.Date,
          p = t.SyntaxError || o.SyntaxError,
          g = t.TypeError || o.TypeError,
          h = t.Math || o.Math,
          y = t.JSON || o.JSON;
        "object" == typeof y &&
          y &&
          ((r.stringify = y.stringify), (r.parse = y.parse));
        var b,
          d = u.prototype,
          j = d.toString,
          C = d.hasOwnProperty,
          v = new s(-0xc782b5b800cec);
        if (
          (i(function () {
            v =
              -109252 == v.getUTCFullYear() &&
              0 === v.getUTCMonth() &&
              1 === v.getUTCDate() &&
              10 == v.getUTCHours() &&
              37 == v.getUTCMinutes() &&
              6 == v.getUTCSeconds() &&
              708 == v.getUTCMilliseconds();
          }),
          (c["bug-string-char-index"] =
            c["date-serialization"] =
            c.json =
            c["json-stringify"] =
            c["json-parse"] =
              null),
          !c("json"))
        ) {
          var S = c("bug-string-char-index"),
            O = function (e, t) {
              var r,
                o,
                i,
                c = 0;
              ((r = function () {
                this.valueOf = 0;
              }).prototype.valueOf = 0),
                (o = new r());
              for (i in o) C.call(o, i) && c++;
              return (
                (r = o = null),
                c
                  ? (O = function (e, t) {
                      var n,
                        r,
                        o = "[object Function]" == j.call(e);
                      for (n in e)
                        (o && "prototype" == n) ||
                          !C.call(e, n) ||
                          (r = "constructor" === n) ||
                          t(n);
                      (r || C.call(e, (n = "constructor"))) && t(n);
                    })
                  : ((o = [
                      "valueOf",
                      "toString",
                      "toLocaleString",
                      "propertyIsEnumerable",
                      "isPrototypeOf",
                      "hasOwnProperty",
                      "constructor",
                    ]),
                    (O = function (e, t) {
                      var r,
                        i,
                        c = "[object Function]" == j.call(e),
                        a =
                          (!c &&
                            "function" != typeof e.constructor &&
                            n[typeof e.hasOwnProperty] &&
                            e.hasOwnProperty) ||
                          C;
                      for (r in e)
                        (c && "prototype" == r) || !a.call(e, r) || t(r);
                      for (i = o.length; (r = o[--i]); ) a.call(e, r) && t(r);
                    })),
                O(e, t)
              );
            };
          if (!c("json-stringify") && !c("date-serialization")) {
            var T = {
                92: "\\\\",
                34: '\\"',
                8: "\\b",
                12: "\\f",
                10: "\\n",
                13: "\\r",
                9: "\\t",
              },
              w = function (e, t) {
                return ("000000" + (t || 0)).slice(-e);
              },
              A = function (e) {
                var t, n, r, o, i, c, a, f, l;
                if (v)
                  t = function (e) {
                    (n = e.getUTCFullYear()),
                      (r = e.getUTCMonth()),
                      (o = e.getUTCDate()),
                      (c = e.getUTCHours()),
                      (a = e.getUTCMinutes()),
                      (f = e.getUTCSeconds()),
                      (l = e.getUTCMilliseconds());
                  };
                else {
                  var u = h.floor,
                    s = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    p = function (e, t) {
                      return (
                        s[t] +
                        365 * (e - 1970) +
                        u((e - 1969 + (t = +(t > 1))) / 4) -
                        u((e - 1901 + t) / 100) +
                        u((e - 1601 + t) / 400)
                      );
                    };
                  t = function (e) {
                    for (
                      o = u(e / 864e5), n = u(o / 365.2425) + 1970 - 1;
                      p(n + 1, 0) <= o;
                      n++
                    );
                    for (r = u((o - p(n, 0)) / 30.42); p(n, r + 1) <= o; r++);
                    (o = 1 + o - p(n, r)),
                      (i = ((e % 864e5) + 864e5) % 864e5),
                      (c = u(i / 36e5) % 24),
                      (a = u(i / 6e4) % 60),
                      (f = u(i / 1e3) % 60),
                      (l = i % 1e3);
                  };
                }
                return (A = function (e) {
                  return (
                    e > -1 / 0 && e < 1 / 0
                      ? (t(e),
                        (e =
                          (n <= 0 || n >= 1e4
                            ? (n < 0 ? "-" : "+") + w(6, n < 0 ? -n : n)
                            : w(4, n)) +
                          "-" +
                          w(2, r + 1) +
                          "-" +
                          w(2, o) +
                          "T" +
                          w(2, c) +
                          ":" +
                          w(2, a) +
                          ":" +
                          w(2, f) +
                          "." +
                          w(3, l) +
                          "Z"),
                        (n = r = o = c = a = f = l = null))
                      : (e = null),
                    e
                  );
                })(e);
              };
            if (c("json-stringify") && !c("date-serialization")) {
              var N = r.stringify;
              r.stringify = function (e, t, n) {
                var r = s.prototype.toJSON;
                s.prototype.toJSON = a;
                var o = N(e, t, n);
                return (s.prototype.toJSON = r), o;
              };
            } else {
              var x = function (e) {
                  var t = e.charCodeAt(0),
                    n = T[t];
                  return n || "\\u00" + w(2, t.toString(16));
                },
                J = /[\x00-\x1f\x22\x5c]/g,
                U = function (e) {
                  return (
                    (J.lastIndex = 0),
                    '"' + (J.test(e) ? e.replace(J, x) : e) + '"'
                  );
                },
                m = function (e, t, n, r, o, c, a) {
                  var f, l, u, p, h, y, d, C, v;
                  if (
                    (i(function () {
                      f = t[e];
                    }),
                    "object" == typeof f &&
                      f &&
                      (f.getUTCFullYear &&
                      "[object Date]" == j.call(f) &&
                      f.toJSON === s.prototype.toJSON
                        ? (f = A(f))
                        : "function" == typeof f.toJSON && (f = f.toJSON(e))),
                    n && (f = n.call(t, e, f)),
                    f == b)
                  )
                    return f === b ? f : "null";
                  switch (
                    ((l = typeof f), "object" == l && (u = j.call(f)), u || l)
                  ) {
                    case "boolean":
                    case "[object Boolean]":
                      return "" + f;
                    case "number":
                    case "[object Number]":
                      return f > -1 / 0 && f < 1 / 0 ? "" + f : "null";
                    case "string":
                    case "[object String]":
                      return U("" + f);
                  }
                  if ("object" == typeof f) {
                    for (d = a.length; d--; ) if (a[d] === f) throw g();
                    if (
                      (a.push(f),
                      (p = []),
                      (C = c),
                      (c += o),
                      "[object Array]" == u)
                    ) {
                      for (y = 0, d = f.length; y < d; y++)
                        (h = m(y, f, n, r, o, c, a)),
                          p.push(h === b ? "null" : h);
                      v = p.length
                        ? o
                          ? "[\n" + c + p.join(",\n" + c) + "\n" + C + "]"
                          : "[" + p.join(",") + "]"
                        : "[]";
                    } else
                      O(r || f, function (e) {
                        var t = m(e, f, n, r, o, c, a);
                        t !== b && p.push(U(e) + ":" + (o ? " " : "") + t);
                      }),
                        (v = p.length
                          ? o
                            ? "{\n" + c + p.join(",\n" + c) + "\n" + C + "}"
                            : "{" + p.join(",") + "}"
                          : "{}");
                    return a.pop(), v;
                  }
                };
              r.stringify = function (e, t, r) {
                var o, i, c, a;
                if (n[typeof t] && t)
                  if ("[object Function]" == (a = j.call(t))) i = t;
                  else if ("[object Array]" == a) {
                    c = {};
                    for (var f, l = 0, u = t.length; l < u; )
                      (f = t[l++]),
                        ("[object String]" != (a = j.call(f)) &&
                          "[object Number]" != a) ||
                          (c[f] = 1);
                  }
                if (r)
                  if ("[object Number]" == (a = j.call(r))) {
                    if ((r -= r % 1) > 0)
                      for (r > 10 && (r = 10), o = ""; o.length < r; ) o += " ";
                  } else
                    "[object String]" == a &&
                      (o = r.length <= 10 ? r : r.slice(0, 10));
                return m("", ((f = {}), (f[""] = e), f), i, c, o, "", []);
              };
            }
          }
          if (!c("json-parse")) {
            var M,
              F,
              z = l.fromCharCode,
              D = {
                92: "\\",
                34: '"',
                47: "/",
                98: "\b",
                116: "\t",
                110: "\n",
                102: "\f",
                114: "\r",
              },
              E = function () {
                throw ((M = F = null), p());
              },
              P = function () {
                for (var e, t, n, r, o, i = F, c = i.length; M < c; )
                  switch ((o = i.charCodeAt(M))) {
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                      M++;
                      break;
                    case 123:
                    case 125:
                    case 91:
                    case 93:
                    case 58:
                    case 44:
                      return (e = S ? i.charAt(M) : i[M]), M++, e;
                    case 34:
                      for (e = "@", M++; M < c; )
                        if ((o = i.charCodeAt(M)) < 32) E();
                        else if (92 == o)
                          switch ((o = i.charCodeAt(++M))) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                              (e += D[o]), M++;
                              break;
                            case 117:
                              for (t = ++M, n = M + 4; M < n; M++)
                                ((o = i.charCodeAt(M)) >= 48 && o <= 57) ||
                                  (o >= 97 && o <= 102) ||
                                  (o >= 65 && o <= 70) ||
                                  E();
                              e += z("0x" + i.slice(t, M));
                              break;
                            default:
                              E();
                          }
                        else {
                          if (34 == o) break;
                          for (
                            o = i.charCodeAt(M), t = M;
                            o >= 32 && 92 != o && 34 != o;

                          )
                            o = i.charCodeAt(++M);
                          e += i.slice(t, M);
                        }
                      if (34 == i.charCodeAt(M)) return M++, e;
                      E();
                    default:
                      if (
                        ((t = M),
                        45 == o && ((r = !0), (o = i.charCodeAt(++M))),
                        o >= 48 && o <= 57)
                      ) {
                        for (
                          48 == o &&
                            (o = i.charCodeAt(M + 1)) >= 48 &&
                            o <= 57 &&
                            E(),
                            r = !1;
                          M < c && (o = i.charCodeAt(M)) >= 48 && o <= 57;
                          M++
                        );
                        if (46 == i.charCodeAt(M)) {
                          for (
                            n = ++M;
                            n < c && !((o = i.charCodeAt(n)) < 48 || o > 57);
                            n++
                          );
                          n == M && E(), (M = n);
                        }
                        if (101 == (o = i.charCodeAt(M)) || 69 == o) {
                          for (
                            o = i.charCodeAt(++M),
                              (43 != o && 45 != o) || M++,
                              n = M;
                            n < c && !((o = i.charCodeAt(n)) < 48 || o > 57);
                            n++
                          );
                          n == M && E(), (M = n);
                        }
                        return +i.slice(t, M);
                      }
                      r && E();
                      var a = i.slice(M, M + 4);
                      if ("true" == a) return (M += 4), !0;
                      if ("fals" == a && 101 == i.charCodeAt(M + 4))
                        return (M += 5), !1;
                      if ("null" == a) return (M += 4), null;
                      E();
                  }
                return "$";
              },
              Z = function (e) {
                var t, n;
                if (("$" == e && E(), "string" == typeof e)) {
                  if ("@" == (S ? e.charAt(0) : e[0])) return e.slice(1);
                  if ("[" == e) {
                    for (t = []; "]" != (e = P()); )
                      n ? ("," == e ? "]" == (e = P()) && E() : E()) : (n = !0),
                        "," == e && E(),
                        t.push(Z(e));
                    return t;
                  }
                  if ("{" == e) {
                    for (t = {}; "}" != (e = P()); )
                      n ? ("," == e ? "}" == (e = P()) && E() : E()) : (n = !0),
                        ("," != e &&
                          "string" == typeof e &&
                          "@" == (S ? e.charAt(0) : e[0]) &&
                          ":" == P()) ||
                          E(),
                        (t[e.slice(1)] = Z(P()));
                    return t;
                  }
                  E();
                }
                return e;
              },
              k = function (e, t, n) {
                var r = I(e, t, n);
                r === b ? delete e[t] : (e[t] = r);
              },
              I = function (e, t, n) {
                var r,
                  o = e[t];
                if ("object" == typeof o && o)
                  if ("[object Array]" == j.call(o))
                    for (r = o.length; r--; ) k(j, O, o);
                  else
                    O(o, function (e) {
                      k(o, e, n);
                    });
                return n.call(e, t, o);
              };
            r.parse = function (e, t) {
              var n, r;
              return (
                (M = 0),
                (F = "" + e),
                (n = Z(P())),
                "$" != P() && E(),
                (M = F = null),
                t && "[object Function]" == j.call(t)
                  ? I(((r = {}), (r[""] = n), r), "", t)
                  : n
              );
            };
          }
        }
        return (r.runInContext = e), r;
      }
      var t = "function" == typeof define && define.amd,
        n = { function: !0, object: !0 },
        r = n[typeof exports] && exports && !exports.nodeType && exports,
        o = (n[typeof window] && window) || this,
        i =
          r &&
          n[typeof module] &&
          module &&
          !module.nodeType &&
          "object" == typeof global &&
          global;
      if (
        (!i || (i.global !== i && i.window !== i && i.self !== i) || (o = i),
        r && !t)
      )
        e(o, r);
      else {
        var c = o.JSON,
          a = o.JSON3,
          f = !1,
          l = e(
            o,
            (o.JSON3 = {
              noConflict: function () {
                return (
                  f || ((f = !0), (o.JSON = c), (o.JSON3 = a), (c = a = null)),
                  l
                );
              },
            })
          );
        o.JSON = { parse: l.parse, stringify: l.stringify };
      }
      t &&
        define(function () {
          return l;
        });
    }.call(this));
  }
  if (
    !(
      "defineProperty" in Object &&
      (function () {
        try {
          var e = {};
          return Object.defineProperty(e, "test", { value: 42 }), !0;
        } catch (t) {
          return !1;
        }
      })()
    )
  ) {
    !(function (e) {
      var t = Object.prototype.hasOwnProperty.call(
          Object.prototype,
          "__defineGetter__"
        ),
        r =
          "A property cannot both have accessors and be writable or have a value";
      Object.defineProperty = function n(o, i, f) {
        if (
          e &&
          (o === window ||
            o === document ||
            o === Element.prototype ||
            o instanceof Element)
        )
          return e(o, i, f);
        if (null === o || !(o instanceof Object || "object" == typeof o))
          throw new TypeError("Object.defineProperty called on non-object");
        if (!(f instanceof Object))
          throw new TypeError("Property description must be an object");
        var c = String(i),
          a = "value" in f || "writable" in f,
          p = "get" in f && typeof f.get,
          s = "set" in f && typeof f.set;
        if (p) {
          if (p === undefined) return o;
          if ("function" !== p)
            throw new TypeError("Getter must be a function");
          if (!t)
            throw new TypeError(
              "Getters & setters cannot be defined on this javascript engine"
            );
          if (a) throw new TypeError(r);
          Object.__defineGetter__.call(o, c, f.get);
        } else o[c] = f.value;
        if (s) {
          if (s === undefined) return o;
          if ("function" !== s)
            throw new TypeError("Setter must be a function");
          if (!t)
            throw new TypeError(
              "Getters & setters cannot be defined on this javascript engine"
            );
          if (a) throw new TypeError(r);
          Object.__defineSetter__.call(o, c, f.set);
        }
        return "value" in f && (o[c] = f.value), o;
      };
    })(Object.defineProperty);
  }
  if (!("Window" in self)) {
    "undefined" == typeof WorkerGlobalScope &&
      "function" != typeof importScripts &&
      (function (o) {
        o.constructor
          ? (o.Window = o.constructor)
          : ((o.Window = o.constructor =
              new Function("return function Window() {}")()).prototype = self);
      })(self);
  }
  function ArrayCreate(r) {
    if ((1 / r == -Infinity && (r = 0), r > Math.pow(2, 32) - 1))
      throw new RangeError("Invalid array length");
    var n = [];
    return (n.length = r), n;
  }
  function Call(t, l) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!1 === IsCallable(t))
      throw new TypeError(
        Object.prototype.toString.call(t) + "is not a function."
      );
    return t.apply(l, n);
  }
  function CreateDataProperty(e, r, t) {
    var a = { value: t, writable: !0, enumerable: !0, configurable: !0 };
    try {
      return Object.defineProperty(e, r, a), !0;
    } catch (n) {
      return !1;
    }
  }
  function CreateDataPropertyOrThrow(t, r, o) {
    var e = CreateDataProperty(t, r, o);
    if (!e)
      throw new TypeError(
        "Cannot assign value `" +
          Object.prototype.toString.call(o) +
          "` to property `" +
          Object.prototype.toString.call(r) +
          "` on object `" +
          Object.prototype.toString.call(t) +
          "`"
      );
    return e;
  }
  function CreateMethodProperty(e, r, t) {
    var a = { value: t, writable: !0, enumerable: !1, configurable: !0 };
    Object.defineProperty(e, r, a);
  }
  if (!("freeze" in Object)) {
    CreateMethodProperty(Object, "freeze", function e(r) {
      return r;
    });
  }
  if (!("getPrototypeOf" in Object)) {
    CreateMethodProperty(Object, "getPrototypeOf", function t(o) {
      if (o !== Object(o))
        throw new TypeError("Object.getPrototypeOf called on non-object");
      var e = o.__proto__;
      return e || null === e
        ? e
        : "function" == typeof o.constructor && o instanceof o.constructor
        ? o.constructor.prototype
        : o instanceof Object
        ? Object.prototype
        : null;
    });
  }
  if (
    !(
      "keys" in Object &&
      (function () {
        return 2 === Object.keys(arguments).length;
      })(1, 2) &&
      (function () {
        try {
          return Object.keys(""), !0;
        } catch (t) {
          return !1;
        }
      })()
    )
  ) {
    CreateMethodProperty(
      Object,
      "keys",
      (function () {
        "use strict";
        function t() {
          var t;
          try {
            t = Object.create({});
          } catch (r) {
            return !0;
          }
          return o.call(t, "__proto__");
        }
        function r(t) {
          var r = n.call(t),
            e = "[object Arguments]" === r;
          return (
            e ||
              (e =
                "[object Array]" !== r &&
                null !== t &&
                "object" == typeof t &&
                "number" == typeof t.length &&
                t.length >= 0 &&
                "[object Function]" === n.call(t.callee)),
            e
          );
        }
        var e = Object.prototype.hasOwnProperty,
          n = Object.prototype.toString,
          o = Object.prototype.propertyIsEnumerable,
          c = !o.call({ toString: null }, "toString"),
          l = o.call(function () {}, "prototype"),
          i = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ],
          u = function (t) {
            var r = t.constructor;
            return r && r.prototype === t;
          },
          a = {
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
          },
          f = (function () {
            if ("undefined" == typeof window) return !1;
            for (var t in window)
              try {
                if (
                  !a["$" + t] &&
                  e.call(window, t) &&
                  null !== window[t] &&
                  "object" == typeof window[t]
                )
                  try {
                    u(window[t]);
                  } catch (r) {
                    return !0;
                  }
              } catch (r) {
                return !0;
              }
            return !1;
          })(),
          p = function (t) {
            if ("undefined" == typeof window || !f) return u(t);
            try {
              return u(t);
            } catch (r) {
              return !1;
            }
          };
        return function s(o) {
          var u = "[object Function]" === n.call(o),
            a = r(o),
            f = "[object String]" === n.call(o),
            s = [];
          if (o === undefined || null === o)
            throw new TypeError("Cannot convert undefined or null to object");
          var y = l && u;
          if (f && o.length > 0 && !e.call(o, 0))
            for (var h = 0; h < o.length; ++h) s.push(String(h));
          if (a && o.length > 0)
            for (var g = 0; g < o.length; ++g) s.push(String(g));
          else
            for (var w in o)
              (t() && "__proto__" === w) ||
                (y && "prototype" === w) ||
                !e.call(o, w) ||
                s.push(String(w));
          if (c)
            for (var d = p(o), $ = 0; $ < i.length; ++$)
              (d && "constructor" === i[$]) || !e.call(o, i[$]) || s.push(i[$]);
          return s;
        };
      })()
    );
  }
  function Get(n, t) {
    return n[t];
  }
  function HasOwnProperty(r, t) {
    return Object.prototype.hasOwnProperty.call(r, t);
  }
  function HasProperty(n, r) {
    return r in n;
  }
  function IsArray(r) {
    return "[object Array]" === Object.prototype.toString.call(r);
  }
  if (!("isArray" in Array)) {
    CreateMethodProperty(Array, "isArray", function r(e) {
      return IsArray(e);
    });
  }
  function IsCallable(n) {
    return "function" == typeof n;
  }
  if (!("bind" in Function.prototype)) {
    CreateMethodProperty(Function.prototype, "bind", function t(n) {
      var r = Array,
        o = Object,
        e = r.prototype,
        l = function g() {},
        p = e.slice,
        a = e.concat,
        i = e.push,
        c = Math.max,
        u = this;
      if (!IsCallable(u))
        throw new TypeError(
          "Function.prototype.bind called on incompatible " + u
        );
      for (
        var y,
          h = p.call(arguments, 1),
          s = function () {
            if (this instanceof y) {
              var t = u.apply(this, a.call(h, p.call(arguments)));
              return o(t) === t ? t : this;
            }
            return u.apply(n, a.call(h, p.call(arguments)));
          },
          f = c(0, u.length - h.length),
          b = [],
          d = 0;
        d < f;
        d++
      )
        i.call(b, "$" + d);
      return (
        (y = Function(
          "binder",
          "return function (" +
            b.join(",") +
            "){ return binder.apply(this, arguments); }"
        )(s)),
        u.prototype &&
          ((l.prototype = u.prototype),
          (y.prototype = new l()),
          (l.prototype = null)),
        y
      );
    });
  }
  function RequireObjectCoercible(e) {
    if (null === e || e === undefined)
      throw TypeError(
        Object.prototype.toString.call(e) + " is not coercible to Object."
      );
    return e;
  }
  function SameValueNonNumber(e, n) {
    return e === n;
  }
  function ToBoolean(o) {
    return Boolean(o);
  }
  function ToObject(e) {
    if (null === e || e === undefined) throw TypeError();
    return Object(e);
  }
  function GetV(t, e) {
    return ToObject(t)[e];
  }
  function GetMethod(e, n) {
    var r = GetV(e, n);
    if (null === r || r === undefined) return undefined;
    if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n);
    return r;
  }
  function Type(e) {
    switch (typeof e) {
      case "undefined":
        return "undefined";
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
      case "symbol":
        return "symbol";
      default:
        return null === e
          ? "null"
          : "Symbol" in self &&
            (e instanceof self.Symbol || e.constructor === self.Symbol)
          ? "symbol"
          : "object";
    }
  }
  if (!("isNaN" in Number)) {
    !(function () {
      var e = self;
      CreateMethodProperty(Number, "isNaN", function r(n) {
        return "number" === Type(n) && !!e.isNaN(n);
      });
    })();
  }
  if (!("isExtensible" in Object)) {
    !(function (e) {
      CreateMethodProperty(Object, "isExtensible", function t(n) {
        return "object" === Type(n) && (!e || e(n));
      });
    })(Object.isExtensible);
  }
  function CreateIterResultObject(e, r) {
    if ("boolean" !== Type(r)) throw new Error();
    var t = {};
    return (
      CreateDataProperty(t, "value", e), CreateDataProperty(t, "done", r), t
    );
  }
  function GetPrototypeFromConstructor(t, o) {
    var r = Get(t, "prototype");
    return "object" !== Type(r) && (r = o), r;
  }
  function IsConstructor(t) {
    return "object" === Type(t) && "function" == typeof t && !!t.prototype;
  }
  function IsRegExp(e) {
    if ("object" !== Type(e)) return !1;
    var n =
      "Symbol" in self && "match" in self.Symbol
        ? Get(e, self.Symbol.match)
        : undefined;
    if (n !== undefined) return ToBoolean(n);
    try {
      var t = e.lastIndex;
      return (e.lastIndex = 0), RegExp.prototype.exec.call(e), !0;
    } catch (l) {
    } finally {
      e.lastIndex = t;
    }
    return !1;
  }
  function IteratorClose(r, t) {
    if ("object" !== Type(r["[[Iterator]]"]))
      throw new Error(
        Object.prototype.toString.call(r["[[Iterator]]"]) + "is not an Object."
      );
    var e = r["[[Iterator]]"],
      o = GetMethod(e, "return");
    if (o === undefined) return t;
    try {
      var n = Call(o, e);
    } catch (c) {
      var a = c;
    }
    if (t) return t;
    if (a) throw a;
    if ("object" !== Type(n))
      throw new TypeError("Iterator's return method returned a non-object.");
    return t;
  }
  function IteratorComplete(t) {
    if ("object" !== Type(t))
      throw new Error(Object.prototype.toString.call(t) + "is not an Object.");
    return ToBoolean(Get(t, "done"));
  }
  function IteratorNext(t) {
    if (arguments.length < 2)
      var e = Call(t["[[NextMethod]]"], t["[[Iterator]]"]);
    else e = Call(t["[[NextMethod]]"], t["[[Iterator]]"], [arguments[1]]);
    if ("object" !== Type(e)) throw new TypeError("bad iterator");
    return e;
  }
  function IteratorStep(t) {
    var r = IteratorNext(t);
    return !0 !== IteratorComplete(r) && r;
  }
  function IteratorValue(t) {
    if ("object" !== Type(t))
      throw new Error(Object.prototype.toString.call(t) + "is not an Object.");
    return Get(t, "value");
  }
  function OrdinaryToPrimitive(r, t) {
    if ("string" === t) var e = ["toString", "valueOf"];
    else e = ["valueOf", "toString"];
    for (var i = 0; i < e.length; ++i) {
      var n = e[i],
        a = Get(r, n);
      if (IsCallable(a)) {
        var o = Call(a, r);
        if ("object" !== Type(o)) return o;
      }
    }
    throw new TypeError("Cannot convert to primitive.");
  }
  function SameValueZero(n, e) {
    return (
      Type(n) === Type(e) &&
      ("number" === Type(n)
        ? !(!isNaN(n) || !isNaN(e)) ||
          (1 / n === Infinity && 1 / e == -Infinity) ||
          (1 / n == -Infinity && 1 / e === Infinity) ||
          n === e
        : SameValueNonNumber(n, e))
    );
  }
  function ToInteger(n) {
    if ("symbol" === Type(n))
      throw new TypeError("Cannot convert a Symbol value to a number");
    var t = Number(n);
    return isNaN(t)
      ? 0
      : 1 / t === Infinity ||
        1 / t == -Infinity ||
        t === Infinity ||
        t === -Infinity
      ? t
      : (t < 0 ? -1 : 1) * Math.floor(Math.abs(t));
  }
  function ToLength(n) {
    var t = ToInteger(n);
    return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1);
  }
  function ToPrimitive(e) {
    var t = arguments.length > 1 ? arguments[1] : undefined;
    if ("object" === Type(e)) {
      if (arguments.length < 2) var i = "default";
      else t === String ? (i = "string") : t === Number && (i = "number");
      var r =
        "function" == typeof self.Symbol &&
        "symbol" == typeof self.Symbol.toPrimitive
          ? GetMethod(e, self.Symbol.toPrimitive)
          : undefined;
      if (r !== undefined) {
        var n = Call(r, e, [i]);
        if ("object" !== Type(n)) return n;
        throw new TypeError("Cannot convert exotic object to primitive.");
      }
      return "default" === i && (i = "number"), OrdinaryToPrimitive(e, i);
    }
    return e;
  }
  function ToString(t) {
    switch (Type(t)) {
      case "symbol":
        throw new TypeError("Cannot convert a Symbol value to a string");
      case "object":
        return ToString(ToPrimitive(t, String));
      default:
        return String(t);
    }
  }
  if (!("every" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "every", function r(e) {
      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
      for (
        var n = arguments.length > 1 ? arguments[1] : undefined, a = 0;
        a < o;

      ) {
        var i = ToString(a);
        if (HasProperty(t, i)) {
          var l = Get(t, i);
          if (!1 === ToBoolean(Call(e, n, [l, a, t]))) return !1;
        }
        a += 1;
      }
      return !0;
    });
  }
  if (!("fill" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "fill", function t(e) {
      for (
        var r = arguments[1],
          n = arguments[2],
          o = ToObject(this),
          a = ToLength(Get(o, "length")),
          h = ToInteger(r),
          i = h < 0 ? Math.max(a + h, 0) : Math.min(h, a),
          g = n === undefined ? a : ToInteger(n),
          M = g < 0 ? Math.max(a + g, 0) : Math.min(g, a);
        i < M;

      ) {
        (o[ToString(i)] = e), (i += 1);
      }
      return o;
    });
  }
  if (!("forEach" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "forEach", function r(t) {
      var e = ToObject(this),
        n = e instanceof String ? e.split("") : e,
        o = ToLength(Get(e, "length"));
      if (!1 === IsCallable(t)) throw new TypeError(t + " is not a function");
      for (
        var a = arguments.length > 1 ? arguments[1] : undefined, i = 0;
        i < o;

      ) {
        var f = ToString(i);
        if (HasProperty(n, f)) {
          var l = Get(n, f);
          Call(t, a, [l, i, e]);
        }
        i += 1;
      }
      return undefined;
    });
  }
  var _DOMTokenList = (function () {
    var n = !0,
      t = function (t, e, r, o) {
        Object.defineProperty
          ? Object.defineProperty(t, e, {
              configurable: !1 === n || !!o,
              get: r,
            })
          : t.__defineGetter__(e, r);
      };
    try {
      t({}, "support");
    } catch (e) {
      n = !1;
    }
    return function (n, e) {
      var r = this,
        o = [],
        i = {},
        a = 0,
        c = 0,
        f = function (n) {
          t(
            r,
            n,
            function () {
              return u(), o[n];
            },
            !1
          );
        },
        l = function () {
          if (a >= c) for (; c < a; ++c) f(c);
        },
        u = function () {
          var t,
            r,
            c = arguments,
            f = /\s+/;
          if (c.length)
            for (r = 0; r < c.length; ++r)
              if (f.test(c[r]))
                throw (
                  ((t = new SyntaxError(
                    'String "' + c[r] + '" contains an invalid character'
                  )),
                  (t.code = 5),
                  (t.name = "InvalidCharacterError"),
                  t)
                );
          for (
            o =
              "object" == typeof n[e]
                ? ("" + n[e].baseVal).replace(/^\s+|\s+$/g, "").split(f)
                : ("" + n[e]).replace(/^\s+|\s+$/g, "").split(f),
              "" === o[0] && (o = []),
              i = {},
              r = 0;
            r < o.length;
            ++r
          )
            i[o[r]] = !0;
          (a = o.length), l();
        };
      return (
        u(),
        t(r, "length", function () {
          return u(), a;
        }),
        (r.toLocaleString = r.toString =
          function () {
            return u(), o.join(" ");
          }),
        (r.item = function (n) {
          return u(), o[n];
        }),
        (r.contains = function (n) {
          return u(), !!i[n];
        }),
        (r.add = function () {
          u.apply(r, (t = arguments));
          for (var t, c, f = 0, p = t.length; f < p; ++f)
            (c = t[f]), i[c] || (o.push(c), (i[c] = !0));
          a !== o.length &&
            ((a = o.length >>> 0),
            "object" == typeof n[e]
              ? (n[e].baseVal = o.join(" "))
              : (n[e] = o.join(" ")),
            l());
        }),
        (r.remove = function () {
          u.apply(r, (t = arguments));
          for (var t, c = {}, f = 0, p = []; f < t.length; ++f)
            (c[t[f]] = !0), delete i[t[f]];
          for (f = 0; f < o.length; ++f) c[o[f]] || p.push(o[f]);
          (o = p),
            (a = p.length >>> 0),
            "object" == typeof n[e]
              ? (n[e].baseVal = o.join(" "))
              : (n[e] = o.join(" ")),
            l();
        }),
        (r.toggle = function (n, t) {
          return (
            u.apply(r, [n]),
            undefined !== t
              ? t
                ? (r.add(n), !0)
                : (r.remove(n), !1)
              : i[n]
              ? (r.remove(n), !1)
              : (r.add(n), !0)
          );
        }),
        (r.forEach = Array.prototype.forEach),
        r
      );
    };
  })();
  if (
    !(
      "DOMTokenList" in self &&
      (function (e) {
        return (
          !("classList" in e) || (!e.classList.toggle("x", !1) && !e.className)
        );
      })(document.createElement("x"))
    )
  ) {
    !(function (t) {
      ("DOMTokenList" in t &&
        t.DOMTokenList &&
        (!document.createElementNS ||
          !document.createElementNS("http://www.w3.org/2000/svg", "svg") ||
          document.createElementNS("http://www.w3.org/2000/svg", "svg")
            .classList instanceof DOMTokenList)) ||
        (t.DOMTokenList = _DOMTokenList),
        (function () {
          var t = document.createElement("span");
          "classList" in t &&
            (t.classList.toggle("x", !1),
            t.classList.contains("x") &&
              (t.classList.constructor.prototype.toggle = function s(t) {
                var s = arguments[1];
                if (s === undefined) {
                  var e = !this.contains(t);
                  return this[e ? "add" : "remove"](t), e;
                }
                return (s = !!s), this[s ? "add" : "remove"](t), s;
              }));
        })(),
        (function () {
          var t = document.createElement("span");
          if (
            "classList" in t &&
            (t.classList.add("a", "b"), !t.classList.contains("b"))
          ) {
            var s = t.classList.constructor.prototype.add;
            t.classList.constructor.prototype.add = function () {
              for (var t = arguments, e = arguments.length, n = 0; n < e; n++)
                s.call(this, t[n]);
            };
          }
        })(),
        (function () {
          var t = document.createElement("span");
          if (
            "classList" in t &&
            (t.classList.add("a"),
            t.classList.add("b"),
            t.classList.remove("a", "b"),
            t.classList.contains("b"))
          ) {
            var s = t.classList.constructor.prototype.remove;
            t.classList.constructor.prototype.remove = function () {
              for (var t = arguments, e = arguments.length, n = 0; n < e; n++)
                s.call(this, t[n]);
            };
          }
        })();
    })(self);
  }
  if (!("includes" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "includes", function e(r) {
      "use strict";
      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (0 === o) return !1;
      var n = ToInteger(arguments[1]);
      if (n >= 0) var a = n;
      else (a = o + n) < 0 && (a = 0);
      for (; a < o; ) {
        var i = Get(t, ToString(a));
        if (SameValueZero(r, i)) return !0;
        a += 1;
      }
      return !1;
    });
  }
  if (!("indexOf" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "indexOf", function r(t) {
      var e = ToObject(this),
        n = ToLength(Get(e, "length"));
      if (0 === n) return -1;
      var i = ToInteger(arguments[1]);
      if (i >= n) return -1;
      if (i >= 0) var o = 1 / i == -Infinity ? 0 : i;
      else (o = n + i) < 0 && (o = 0);
      for (; o < n; ) {
        if (HasProperty(e, ToString(o))) {
          if (t === Get(e, ToString(o))) return o;
        }
        o += 1;
      }
      return -1;
    });
  }
  if (
    !(
      "getOwnPropertyNames" in Object &&
      (function () {
        try {
          return Object.getOwnPropertyNames(1), !0;
        } catch (t) {
          return !1;
        }
      })()
    )
  ) {
    !(function () {
      var t = {}.toString,
        e = "".split,
        r = [].concat,
        o = Object.prototype.hasOwnProperty,
        c = Object.getOwnPropertyNames || Object.keys,
        n = "object" == typeof self ? c(self) : [];
      CreateMethodProperty(Object, "getOwnPropertyNames", function l(a) {
        var p = ToObject(a);
        if ("[object Window]" === t.call(p))
          try {
            return c(p);
          } catch (j) {
            return r.call([], n);
          }
        p = "[object String]" == t.call(p) ? e.call(p, "") : Object(p);
        for (
          var i = c(p), s = ["length", "prototype"], O = 0;
          O < s.length;
          O++
        ) {
          var b = s[O];
          o.call(p, b) && !i.includes(b) && i.push(b);
        }
        if (i.includes("__proto__")) {
          var f = i.indexOf("__proto__");
          i.splice(f, 1);
        }
        return i;
      });
    })();
  }
  if (!("lastIndexOf" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "lastIndexOf", function t(r) {
      var e = ToObject(this),
        n = ToLength(Get(e, "length"));
      if (0 === n) return -1;
      var o = arguments.length > 1 ? ToInteger(arguments[1]) : n - 1;
      if (o >= 0) var i = 1 / o == -Infinity ? 0 : Math.min(o, n - 1);
      else i = n + o;
      for (; i >= 0; ) {
        if (HasProperty(e, ToString(i))) {
          if (r === Get(e, ToString(i))) return i;
        }
        i -= 1;
      }
      return -1;
    });
  }
  if (!("reduce" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "reduce", function e(r) {
      var t = ToObject(this),
        n = t instanceof String ? t.split("") : t,
        o = ToLength(Get(n, "length"));
      if (!1 === IsCallable(r)) throw new TypeError(r + " is not a function");
      var i = arguments.length > 1 ? arguments[1] : undefined;
      if (0 === o && arguments.length < 2)
        throw new TypeError("Reduce of empty array with no initial value");
      var a = 0,
        f = undefined;
      if (arguments.length > 1) f = i;
      else {
        for (var l = !1; !1 === l && a < o; ) {
          var h = ToString(a);
          (l = HasProperty(n, h)), l && (f = Get(n, h)), (a += 1);
        }
        if (!1 === l)
          throw new TypeError("Reduce of empty array with no initial value");
      }
      for (; a < o; ) {
        if (((h = ToString(a)), (l = HasProperty(n, h)))) {
          var y = Get(n, h);
          f = Call(r, undefined, [f, y, a, t]);
        }
        a += 1;
      }
      return f;
    });
  }
  if (!("reduceRight" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "reduceRight", function e(r) {
      var t = ToObject(this),
        n = t instanceof String ? t.split("") : t,
        i = ToLength(Get(n, "length"));
      if (!1 === IsCallable(r)) throw new TypeError(r + " is not a function");
      var o = arguments.length > 1 ? arguments[1] : undefined;
      if (0 === i && arguments.length < 2)
        throw new TypeError("Reduce of empty array with no initial value");
      var a = i - 1,
        f = undefined;
      if (arguments.length > 1) f = o;
      else {
        for (var l = !1; !1 === l && a >= 0; ) {
          var h = ToString(a);
          (l = HasProperty(n, h)), l && (f = Get(n, h)), (a -= 1);
        }
        if (!1 === l)
          throw new TypeError("Reduce of empty array with no initial value");
      }
      for (; a >= 0; ) {
        if (((h = ToString(a)), (l = HasProperty(n, h)))) {
          var y = Get(n, h);
          f = Call(r, undefined, [f, y, a, t]);
        }
        a -= 1;
      }
      return f;
    });
  }
  if (!("some" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "some", function r(e) {
      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
      for (
        var n = arguments.length > 1 ? arguments[1] : undefined, a = 0;
        a < o;

      ) {
        var i = ToString(a);
        if (HasProperty(t, i)) {
          var l = Get(t, i);
          if (ToBoolean(Call(e, n, [l, a, t]))) return !0;
        }
        a += 1;
      }
      return !1;
    });
  }
  if (!("endsWith" in String.prototype)) {
    CreateMethodProperty(String.prototype, "endsWith", function e(t) {
      "use strict";
      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(t))
        throw new TypeError(
          "First argument to String.prototype.endsWith must not be a regular expression"
        );
      var o = ToString(t),
        s = i.length,
        g = r === undefined ? s : ToInteger(r),
        h = Math.min(Math.max(g, 0), s),
        u = o.length,
        a = h - u;
      return !(a < 0) && i.substr(a, u) === o;
    });
  }
  if (!("includes" in String.prototype)) {
    CreateMethodProperty(String.prototype, "includes", function e(t) {
      "use strict";
      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(t))
        throw new TypeError(
          "First argument to String.prototype.includes must not be a regular expression"
        );
      var o = ToString(t),
        g = ToInteger(r),
        a = i.length,
        p = Math.min(Math.max(g, 0), a);
      return -1 !== String.prototype.indexOf.call(i, o, p);
    });
  }
  if (!("startsWith" in String.prototype)) {
    CreateMethodProperty(String.prototype, "startsWith", function t(e) {
      "use strict";
      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(e))
        throw new TypeError(
          "First argument to String.prototype.startsWith must not be a regular expression"
        );
      var o = ToString(e),
        s = ToInteger(r),
        a = i.length,
        g = Math.min(Math.max(s, 0), a);
      return !(o.length + g > a) && 0 === i.substr(g).indexOf(e);
    });
  }
  function ToPropertyKey(r) {
    var i = ToPrimitive(r, String);
    return "symbol" === Type(i) ? i : ToString(i);
  }
  if (
    !(
      "getOwnPropertyDescriptor" in Object &&
      "function" == typeof Object.getOwnPropertyDescriptor &&
      (function () {
        try {
          return "3" === Object.getOwnPropertyDescriptor("13.7", 1).value;
        } catch (t) {
          return !1;
        }
      })()
    )
  ) {
    !(function () {
      var e = Object.getOwnPropertyDescriptor,
        t = function () {
          try {
            return (
              1 ===
              Object.defineProperty(document.createElement("div"), "one", {
                get: function () {
                  return 1;
                },
              }).one
            );
          } catch (e) {
            return !1;
          }
        },
        r = {}.toString,
        n = "".split;
      CreateMethodProperty(
        Object,
        "getOwnPropertyDescriptor",
        function c(o, i) {
          var a = ToObject(o);
          a =
            ("string" === Type(a) || a instanceof String) &&
            "[object String]" == r.call(o)
              ? n.call(o, "")
              : Object(o);
          var u = ToPropertyKey(i);
          if (t)
            try {
              return e(a, u);
            } catch (l) {}
          if (HasOwnProperty(a, u))
            return {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a[u],
            };
        }
      );
    })();
  }
  if (!("assign" in Object)) {
    CreateMethodProperty(Object, "assign", function e(t, r) {
      var n = ToObject(t);
      if (1 === arguments.length) return n;
      var o,
        c,
        a,
        l,
        i = Array.prototype.slice.call(arguments, 1);
      for (o = 0; o < i.length; o++) {
        var p = i[o];
        for (
          p === undefined || null === p
            ? (a = [])
            : ((l =
                "[object String]" === Object.prototype.toString.call(p)
                  ? String(p).split("")
                  : ToObject(p)),
              (a = Object.keys(l))),
            c = 0;
          c < a.length;
          c++
        ) {
          var b,
            y = a[c];
          try {
            var g = Object.getOwnPropertyDescriptor(l, y);
            b = g !== undefined && !0 === g.enumerable;
          } catch (u) {
            b = Object.prototype.propertyIsEnumerable.call(l, y);
          }
          if (b) {
            var j = Get(l, y);
            n[y] = j;
          }
        }
      }
      return n;
    });
  }
  if (!("defineProperties" in Object)) {
    CreateMethodProperty(Object, "defineProperties", function e(r, t) {
      if ("object" !== Type(r))
        throw new TypeError("Object.defineProperties called on non-object");
      for (
        var o = ToObject(t), n = Object.keys(o), c = [], i = 0;
        i < n.length;
        i++
      ) {
        var b = n[i],
          f = Object.getOwnPropertyDescriptor(o, b);
        if (f !== undefined && f.enumerable) {
          var p = Get(o, b),
            a = p;
          c.push([b, a]);
        }
      }
      for (var j = 0; j < c.length; j++) {
        var d = c[j][0];
        (a = c[j][1]), Object.defineProperty(r, d, a);
      }
      return r;
    });
  }
  if (!("create" in Object)) {
    !(function () {
      function e() {}
      if ({ __proto__: null } instanceof Object)
        t = function () {
          var e = document.createElement("iframe");
          e.style.display = "none";
          var o = document.body || document.documentElement;
          o.appendChild(e), (e.src = "javascript:");
          var n = e.contentWindow.Object.prototype;
          o.removeChild(e),
            (e = null),
            delete n.constructor,
            delete n.hasOwnProperty,
            delete n.propertyIsEnumerable,
            delete n.isPrototypeOf,
            delete n.toLocaleString,
            delete n.toString,
            delete n.valueOf;
          var r = function l() {};
          return (
            (r.prototype = n),
            (t = function () {
              return new r();
            }),
            new r()
          );
        };
      else
        var t = function () {
          return { __proto__: null };
        };
      CreateMethodProperty(Object, "create", function o(n, r) {
        if ("object" !== Type(n) && "null" !== Type(n))
          throw new TypeError("Object prototype may only be an Object or null");
        if ("null" === Type(n)) var l = t();
        else
          (e.prototype = n),
            (l = new e()),
            (l.__proto__ = n),
            (l.constructor.prototype = n),
            (l.__proto__ = n);
        return 1 in arguments ? Object.defineProperties(l, r) : l;
      });
    })();
  }
  if (
    !(
      "DocumentFragment" in self &&
      (function () {
        try {
          return new DocumentFragment(), !0;
        } catch (n) {
          return !1;
        }
      })()
    )
  ) {
    !(function (t) {
      t.DocumentFragment = function n() {
        return document.createDocumentFragment();
      };
      var e = document.createDocumentFragment();
      t.DocumentFragment.prototype = Object.create(e.constructor.prototype);
    })(self);
  }
  function OrdinaryCreateFromConstructor(r, e) {
    var t = arguments[2] || {},
      o = GetPrototypeFromConstructor(r, e),
      a = Object.create(o);
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        Object.defineProperty(a, n, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t[n],
        });
    return a;
  }
  function Construct(r) {
    var t = arguments.length > 2 ? arguments[2] : r,
      o = arguments.length > 1 ? arguments[1] : [];
    if (!IsConstructor(r)) throw new TypeError("F must be a constructor.");
    if (!IsConstructor(t))
      throw new TypeError("newTarget must be a constructor.");
    if (t === r)
      return new (Function.prototype.bind.apply(r, [null].concat(o)))();
    var n = OrdinaryCreateFromConstructor(t, Object.prototype);
    return Call(r, n, o);
  }
  if (!("of" in Array)) {
    CreateMethodProperty(Array, "of", function r() {
      var r = arguments.length,
        t = arguments,
        e = this;
      if (IsConstructor(e)) var a = Construct(e, [r]);
      else a = ArrayCreate(r);
      for (var o = 0; o < r; ) {
        var n = t[o],
          h = ToString(o);
        CreateDataPropertyOrThrow(a, h, n), (o += 1);
      }
      return (a.length = r), a;
    });
  }
  function ArraySpeciesCreate(e, r) {
    if ((0 === r && 1 / r == -Infinity && (r = 0), !1 === IsArray(e)))
      return ArrayCreate(r);
    var n = Get(e, "constructor");
    if (
      ("object" === Type(n) &&
        null ===
          (n =
            "Symbol" in self && "species" in self.Symbol
              ? Get(n, self.Symbol.species)
              : undefined) &&
        (n = undefined),
      n === undefined)
    )
      return ArrayCreate(r);
    if (!IsConstructor(n)) throw new TypeError("C must be a constructor");
    return Construct(n, [r]);
  }
  if (!("filter" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "filter", function r(e) {
      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
      for (
        var a = arguments.length > 1 ? arguments[1] : undefined,
          n = ArraySpeciesCreate(t, 0),
          i = 0,
          l = 0;
        i < o;

      ) {
        var f = ToString(i);
        if (HasProperty(t, f)) {
          var h = Get(t, f);
          ToBoolean(Call(e, a, [h, i, t])) &&
            (CreateDataPropertyOrThrow(n, ToString(l), h), (l += 1));
        }
        i += 1;
      }
      return n;
    });
  }
  if (!("map" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "map", function r(e) {
      var t = ToObject(this),
        a = ToLength(Get(t, "length"));
      if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
      for (
        var o = arguments.length > 1 ? arguments[1] : undefined,
          n = ArraySpeciesCreate(t, a),
          i = 0;
        i < a;

      ) {
        var p = ToString(i);
        if (HasProperty(t, p)) {
          var h = Get(t, p),
            l = Call(e, o, [h, i, t]);
          CreateDataPropertyOrThrow(n, p, l);
        }
        i += 1;
      }
      return n;
    });
  }
  if (!("Symbol" in self && 0 === self.Symbol.length)) {
    !(function (e, r, n) {
      "use strict";
      function t(e) {
        if ("symbol" === Type(e)) return e;
        throw TypeError(e + " is not a symbol");
      }
      var u,
        o = (function () {
          try {
            var r = {};
            return (
              e.defineProperty(r, "t", {
                configurable: !0,
                enumerable: !1,
                get: function () {
                  return !0;
                },
                set: undefined,
              }),
              !!r.t
            );
          } catch (n) {
            return !1;
          }
        })(),
        i = 0,
        a = "" + Math.random(),
        c = "__symbol:",
        l = c.length,
        f = "__symbol@@" + a,
        s = {},
        v = "defineProperty",
        y = "defineProperties",
        b = "getOwnPropertyNames",
        p = "getOwnPropertyDescriptor",
        h = "propertyIsEnumerable",
        m = e.prototype,
        d = m.hasOwnProperty,
        g = m[h],
        w = m.toString,
        S = Array.prototype.concat,
        P = e.getOwnPropertyNames ? e.getOwnPropertyNames(self) : [],
        O = e[b],
        j = function $(e) {
          if ("[object Window]" === w.call(e))
            try {
              return O(e);
            } catch (r) {
              return S.call([], P);
            }
          return O(e);
        },
        E = e[p],
        N = e.create,
        T = e.keys,
        _ = e.freeze || e,
        k = e[v],
        F = e[y],
        I = E(e, b),
        x = function (e, r, n) {
          if (!d.call(e, f))
            try {
              k(e, f, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: {},
              });
            } catch (t) {
              e[f] = {};
            }
          e[f]["@@" + r] = n;
        },
        z = function (e, r) {
          var n = N(e);
          return (
            j(r).forEach(function (e) {
              q.call(r, e) && L(n, e, r[e]);
            }),
            n
          );
        },
        A = function (e) {
          var r = N(e);
          return (r.enumerable = !1), r;
        },
        D = function ee() {},
        M = function (e) {
          return e != f && !d.call(H, e);
        },
        W = function (e) {
          return e != f && d.call(H, e);
        },
        q = function re(e) {
          var r = "" + e;
          return W(r)
            ? d.call(this, r) && this[f] && this[f]["@@" + r]
            : g.call(this, e);
        },
        B = function (r) {
          var n = {
            enumerable: !1,
            configurable: !0,
            get: D,
            set: function (e) {
              u(this, r, {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: e,
              }),
                x(this, r, !0);
            },
          };
          try {
            k(m, r, n);
          } catch (o) {
            m[r] = n.value;
          }
          H[r] = k(e(r), "constructor", J);
          var t = E(G.prototype, "description");
          return t && k(H[r], "description", t), _(H[r]);
        },
        C = function (e) {
          var r = t(e);
          if (Y) {
            var n = V(r);
            if ("" !== n) return n.slice(1, -1);
          }
          if (s[r] !== undefined) return s[r];
          var u = r.toString(),
            o = u.lastIndexOf("0.");
          return (u = u.slice(10, o)), "" === u ? undefined : u;
        },
        G = function ne() {
          var r = arguments[0];
          if (this instanceof ne)
            throw new TypeError("Symbol is not a constructor");
          var n = c.concat(r || "", a, ++i);
          r === undefined ||
            (null !== r && !isNaN(r) && "" !== String(r)) ||
            (s[n] = String(r));
          var t = B(n);
          return (
            o ||
              e.defineProperty(t, "description", {
                configurable: !0,
                enumerable: !1,
                value: C(t),
              }),
            t
          );
        },
        H = N(null),
        J = { value: G },
        K = function (e) {
          return H[e];
        },
        L = function te(e, r, n) {
          var t = "" + r;
          return (
            W(t)
              ? (u(e, t, n.enumerable ? A(n) : n), x(e, t, !!n.enumerable))
              : k(e, r, n),
            e
          );
        },
        Q = function (e) {
          return function (r) {
            return d.call(e, f) && d.call(e[f], "@@" + r);
          };
        },
        R = function ue(e) {
          return j(e)
            .filter(e === m ? Q(e) : W)
            .map(K);
        };
      (I.value = L),
        k(e, v, I),
        (I.value = R),
        k(e, "getOwnPropertySymbols", I),
        (I.value = function oe(e) {
          return j(e).filter(M);
        }),
        k(e, b, I),
        (I.value = function ie(e, r) {
          var n = R(r);
          return (
            n.length
              ? T(r)
                  .concat(n)
                  .forEach(function (n) {
                    q.call(r, n) && L(e, n, r[n]);
                  })
              : F(e, r),
            e
          );
        }),
        k(e, y, I),
        (I.value = q),
        k(m, h, I),
        (I.value = G),
        k(n, "Symbol", I),
        (I.value = function (e) {
          var r = c.concat(c, e, a);
          return r in m ? H[r] : B(r);
        }),
        k(G, "for", I),
        (I.value = function (e) {
          if (M(e)) throw new TypeError(e + " is not a symbol");
          return d.call(H, e) ? e.slice(2 * l, -a.length) : void 0;
        }),
        k(G, "keyFor", I),
        (I.value = function ae(e, r) {
          var n = E(e, r);
          return n && W(r) && (n.enumerable = q.call(e, r)), n;
        }),
        k(e, p, I),
        (I.value = function ce(e, r) {
          return 1 === arguments.length || void 0 === r ? N(e) : z(e, r);
        }),
        k(e, "create", I);
      var U =
        null ===
        function () {
          return this;
        }.call(null);
      if (
        ((I.value = U
          ? function () {
              var e = w.call(this);
              return "[object String]" === e && W(this) ? "[object Symbol]" : e;
            }
          : function () {
              if (this === window) return "[object Null]";
              var e = w.call(this);
              return "[object String]" === e && W(this) ? "[object Symbol]" : e;
            }),
        k(m, "toString", I),
        (u = function (e, r, n) {
          var t = E(m, r);
          delete m[r], k(e, r, n), e !== m && k(m, r, t);
        }),
        (function () {
          try {
            var r = {};
            return (
              e.defineProperty(r, "t", {
                configurable: !0,
                enumerable: !1,
                get: function () {
                  return !0;
                },
                set: undefined,
              }),
              !!r.t
            );
          } catch (n) {
            return !1;
          }
        })())
      ) {
        var V;
        try {
          V = Function(
            "s",
            "var v = s.valueOf(); return { [v]() {} }[v].name;"
          );
        } catch (Z) {}
        var X = function () {},
          Y = V && "inferred" === X.name ? V : null;
        e.defineProperty(n.Symbol.prototype, "description", {
          configurable: !0,
          enumerable: !1,
          get: function () {
            return C(this);
          },
        });
      }
    })(Object, 0, self);
  }
  if (!("Symbol" in self && "iterator" in self.Symbol)) {
    Object.defineProperty(self.Symbol, "iterator", {
      value: self.Symbol("iterator"),
    });
  }
  function GetIterator(t) {
    var e = arguments.length > 1 ? arguments[1] : GetMethod(t, Symbol.iterator),
      r = Call(e, t);
    if ("object" !== Type(r)) throw new TypeError("bad iterator");
    var o = GetV(r, "next"),
      a = Object.create(null);
    return (
      (a["[[Iterator]]"] = r),
      (a["[[NextMethod]]"] = o),
      (a["[[Done]]"] = !1),
      a
    );
  }
  if (!("Symbol" in self && "species" in self.Symbol)) {
    Object.defineProperty(Symbol, "species", { value: Symbol("species") });
  }
  if (
    !(
      "Map" in self &&
      (function (t) {
        try {
          var n = new t.Map([
            [1, 1],
            [2, 2],
          ]);
          return (
            0 === t.Map.length &&
            2 === n.size &&
            "Symbol" in t &&
            "iterator" in t.Symbol &&
            "function" == typeof n[t.Symbol.iterator]
          );
        } catch (e) {
          return !1;
        }
      })(self)
    )
  ) {
    !(function (e) {
      function t(e, t) {
        if ("object" !== Type(e))
          throw new TypeError(
            "createMapIterator called on incompatible receiver " +
              Object.prototype.toString.call(e)
          );
        if (!0 !== e._es6Map)
          throw new TypeError(
            "createMapIterator called on incompatible receiver " +
              Object.prototype.toString.call(e)
          );
        var r = Object.create(u);
        return (
          Object.defineProperty(r, "[[Map]]", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: e,
          }),
          Object.defineProperty(r, "[[MapNextIndex]]", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(r, "[[MapIterationKind]]", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: t,
          }),
          r
        );
      }
      var r = (function () {
          try {
            var e = {};
            return (
              Object.defineProperty(e, "t", {
                configurable: !0,
                enumerable: !1,
                get: function () {
                  return !0;
                },
                set: undefined,
              }),
              !!e.t
            );
          } catch (t) {
            return !1;
          }
        })(),
        o = 0,
        a = Symbol("meta_" + (1e8 * Math.random() + "").replace(".", "")),
        n = function (e) {
          if ("object" == typeof e ? null !== e : "function" == typeof e) {
            if (!Object.isExtensible(e)) return !1;
            if (!Object.prototype.hasOwnProperty.call(e, a)) {
              var t = typeof e + "-" + ++o;
              Object.defineProperty(e, a, {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: t,
              });
            }
            return e[a];
          }
          return "" + e;
        },
        i = function (e, t) {
          var r = n(t);
          if (!1 === r) return p(e, t);
          var o = e._table[r];
          return o !== undefined && o;
        },
        p = function (e, t) {
          for (var r = 0; r < e._keys.length; r++) {
            var o = e._keys[r];
            if (o !== c && SameValueZero(o, t)) return r;
          }
          return !1;
        },
        l = function (e, t, r) {
          var o = n(t);
          return (
            !1 !== o && (!1 === r ? delete e._table[o] : (e._table[o] = r), !0)
          );
        },
        c = Symbol("undef"),
        y = function f() {
          if (!(this instanceof f))
            throw new TypeError('Constructor Map requires "new"');
          var e = OrdinaryCreateFromConstructor(this, f.prototype, {
            _table: {},
            _keys: [],
            _values: [],
            _size: 0,
            _es6Map: !0,
          });
          r ||
            Object.defineProperty(e, "size", {
              configurable: !0,
              enumerable: !1,
              writable: !0,
              value: 0,
            });
          var t = arguments.length > 0 ? arguments[0] : undefined;
          if (null === t || t === undefined) return e;
          var o = e.set;
          if (!IsCallable(o))
            throw new TypeError("Map.prototype.set is not a function");
          try {
            for (var a = GetIterator(t); ; ) {
              var n = IteratorStep(a);
              if (!1 === n) return e;
              var i = IteratorValue(n);
              if ("object" !== Type(i))
                try {
                  throw new TypeError(
                    "Iterator value " + i + " is not an entry object"
                  );
                } catch (u) {
                  return IteratorClose(a, u);
                }
              try {
                var p = i[0],
                  l = i[1];
                o.call(e, p, l);
              } catch (s) {
                return IteratorClose(a, s);
              }
            }
          } catch (s) {
            if (
              Array.isArray(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t) ||
              t.callee
            ) {
              var c,
                y = t.length;
              for (c = 0; c < y; c++) o.call(e, t[c][0], t[c][1]);
            }
          }
          return e;
        };
      Object.defineProperty(y, "prototype", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: {},
      }),
        r
          ? Object.defineProperty(y, Symbol.species, {
              configurable: !0,
              enumerable: !1,
              get: function () {
                return this;
              },
              set: undefined,
            })
          : CreateMethodProperty(y, Symbol.species, y),
        CreateMethodProperty(y.prototype, "clear", function b() {
          var e = this;
          if ("object" !== Type(e))
            throw new TypeError(
              "Method Map.prototype.clear called on incompatible receiver " +
                Object.prototype.toString.call(e)
            );
          if (!0 !== e._es6Map)
            throw new TypeError(
              "Method Map.prototype.clear called on incompatible receiver " +
                Object.prototype.toString.call(e)
            );
          for (var t = e._keys, o = 0; o < t.length; o++)
            (e._keys[o] = c), (e._values[o] = c);
          return (
            (this._size = 0),
            r || (this.size = this._size),
            (this._table = {}),
            undefined
          );
        }),
        CreateMethodProperty(y.prototype, "constructor", y),
        CreateMethodProperty(y.prototype, "delete", function (e) {
          var t = this;
          if ("object" !== Type(t))
            throw new TypeError(
              "Method Map.prototype.clear called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!0 !== t._es6Map)
            throw new TypeError(
              "Method Map.prototype.clear called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          var o = i(t, e);
          if (!1 !== o) {
            var a = t._keys[o];
            if (a !== c && SameValueZero(a, e))
              return (
                (this._keys[o] = c),
                (this._values[o] = c),
                (this._size = --this._size),
                r || (this.size = this._size),
                l(this, e, !1),
                !0
              );
          }
          return !1;
        }),
        CreateMethodProperty(y.prototype, "entries", function h() {
          return t(this, "key+value");
        }),
        CreateMethodProperty(y.prototype, "forEach", function (e) {
          var t = this;
          if ("object" !== Type(t))
            throw new TypeError(
              "Method Map.prototype.forEach called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!0 !== t._es6Map)
            throw new TypeError(
              "Method Map.prototype.forEach called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!IsCallable(e))
            throw new TypeError(
              Object.prototype.toString.call(e) + " is not a function."
            );
          if (arguments[1]) var r = arguments[1];
          for (var o = t._keys, a = 0; a < o.length; a++)
            t._keys[a] !== c &&
              t._values[a] !== c &&
              e.call(r, t._values[a], t._keys[a], t);
          return undefined;
        }),
        CreateMethodProperty(y.prototype, "get", function d(e) {
          var t = this;
          if ("object" !== Type(t))
            throw new TypeError(
              "Method Map.prototype.get called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!0 !== t._es6Map)
            throw new TypeError(
              "Method Map.prototype.get called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          var r = i(t, e);
          if (!1 !== r) {
            var o = t._keys[r];
            if (o !== c && SameValueZero(o, e)) return t._values[r];
          }
          return undefined;
        }),
        CreateMethodProperty(y.prototype, "has", function v(e) {
          var t = this;
          if ("object" != typeof t)
            throw new TypeError(
              "Method Map.prototype.has called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!0 !== t._es6Map)
            throw new TypeError(
              "Method Map.prototype.has called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          var r = i(t, e);
          if (!1 !== r) {
            var o = t._keys[r];
            if (o !== c && SameValueZero(o, e)) return !0;
          }
          return !1;
        }),
        CreateMethodProperty(y.prototype, "keys", function M() {
          return t(this, "key");
        }),
        CreateMethodProperty(y.prototype, "set", function w(e, t) {
          var o = this;
          if ("object" !== Type(o))
            throw new TypeError(
              "Method Map.prototype.set called on incompatible receiver " +
                Object.prototype.toString.call(o)
            );
          if (!0 !== o._es6Map)
            throw new TypeError(
              "Method Map.prototype.set called on incompatible receiver " +
                Object.prototype.toString.call(o)
            );
          var a = i(o, e);
          if (!1 !== a) o._values[a] = t;
          else {
            -0 === e && (e = 0);
            var n = { "[[Key]]": e, "[[Value]]": t };
            o._keys.push(n["[[Key]]"]),
              o._values.push(n["[[Value]]"]),
              l(o, e, o._keys.length - 1),
              ++o._size,
              r || (o.size = o._size);
          }
          return o;
        }),
        r &&
          Object.defineProperty(y.prototype, "size", {
            configurable: !0,
            enumerable: !1,
            get: function () {
              var e = this;
              if ("object" !== Type(e))
                throw new TypeError(
                  "Method Map.prototype.size called on incompatible receiver " +
                    Object.prototype.toString.call(e)
                );
              if (!0 !== e._es6Map)
                throw new TypeError(
                  "Method Map.prototype.size called on incompatible receiver " +
                    Object.prototype.toString.call(e)
                );
              return this._size;
            },
            set: undefined,
          }),
        CreateMethodProperty(y.prototype, "values", function j() {
          return t(this, "value");
        }),
        CreateMethodProperty(y.prototype, Symbol.iterator, y.prototype.entries),
        "name" in y ||
          Object.defineProperty(y, "name", {
            configurable: !0,
            enumerable: !1,
            writable: !1,
            value: "Map",
          });
      var u = {};
      Object.defineProperty(u, "isMapIterator", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: !0,
      }),
        CreateMethodProperty(u, "next", function _() {
          var e = this;
          if ("object" !== Type(e))
            throw new TypeError(
              "Method %MapIteratorPrototype%.next called on incompatible receiver " +
                Object.prototype.toString.call(e)
            );
          if (!e.isMapIterator)
            throw new TypeError(
              "Method %MapIteratorPrototype%.next called on incompatible receiver " +
                Object.prototype.toString.call(e)
            );
          var t = e["[[Map]]"],
            r = e["[[MapNextIndex]]"],
            o = e["[[MapIterationKind]]"];
          if (t === undefined) return CreateIterResultObject(undefined, !0);
          if (!t._es6Map)
            throw new Error(
              Object.prototype.toString.call(t) +
                " has a [[MapData]] internal slot."
            );
          for (var a = t._keys, n = a.length; r < n; ) {
            var i = Object.create(null);
            if (
              ((i["[[Key]]"] = t._keys[r]),
              (i["[[Value]]"] = t._values[r]),
              (r += 1),
              (e["[[MapNextIndex]]"] = r),
              i["[[Key]]"] !== c)
            ) {
              if ("key" === o) var p = i["[[Key]]"];
              else if ("value" === o) p = i["[[Value]]"];
              else {
                if ("key+value" !== o) throw new Error();
                p = [i["[[Key]]"], i["[[Value]]"]];
              }
              return CreateIterResultObject(p, !1);
            }
          }
          return (
            (e["[[Map]]"] = undefined), CreateIterResultObject(undefined, !0)
          );
        }),
        CreateMethodProperty(u, Symbol.iterator, function g() {
          return this;
        });
      try {
        CreateMethodProperty(e, "Map", y);
      } catch (s) {
        e.Map = y;
      }
    })(self);
  }
  if (
    !(
      "Set" in self &&
      (function () {
        try {
          var e = new self.Set([1, 2]);
          return (
            0 === self.Set.length &&
            2 === e.size &&
            "Symbol" in self &&
            "iterator" in self.Symbol &&
            "function" == typeof e[self.Symbol.iterator]
          );
        } catch (t) {
          return !1;
        }
      })()
    )
  ) {
    !(function (e) {
      function t(e, t) {
        if ("object" != typeof e)
          throw new TypeError(
            "createSetIterator called on incompatible receiver " +
              Object.prototype.toString.call(e)
          );
        if (!0 !== e._es6Set)
          throw new TypeError(
            "createSetIterator called on incompatible receiver " +
              Object.prototype.toString.call(e)
          );
        var r = Object.create(i);
        return (
          Object.defineProperty(r, "[[IteratedSet]]", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: e,
          }),
          Object.defineProperty(r, "[[SetNextIndex]]", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(r, "[[SetIterationKind]]", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: t,
          }),
          r
        );
      }
      var r = (function () {
          try {
            var e = {};
            return (
              Object.defineProperty(e, "t", {
                configurable: !0,
                enumerable: !1,
                get: function () {
                  return !0;
                },
                set: undefined,
              }),
              !!e.t
            );
          } catch (t) {
            return !1;
          }
        })(),
        o = Symbol("undef"),
        n = function c() {
          if (!(this instanceof c))
            throw new TypeError('Constructor Set requires "new"');
          var e = OrdinaryCreateFromConstructor(this, c.prototype, {
            _values: [],
            _size: 0,
            _es6Set: !0,
          });
          r ||
            Object.defineProperty(e, "size", {
              configurable: !0,
              enumerable: !1,
              writable: !0,
              value: 0,
            });
          var t = arguments.length > 0 ? arguments[0] : undefined;
          if (null === t || t === undefined) return e;
          var o = e.add;
          if (!IsCallable(o))
            throw new TypeError("Set.prototype.add is not a function");
          try {
            for (var n = GetIterator(t); ; ) {
              var a = IteratorStep(n);
              if (!1 === a) return e;
              var i = IteratorValue(a);
              try {
                o.call(e, i);
              } catch (y) {
                return IteratorClose(n, y);
              }
            }
          } catch (y) {
            if (
              !Array.isArray(t) &&
              "[object Arguments]" !== Object.prototype.toString.call(t) &&
              !t.callee
            )
              throw y;
            var l,
              p = t.length;
            for (l = 0; l < p; l++) o.call(e, t[l]);
          }
          return e;
        };
      Object.defineProperty(n, "prototype", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: {},
      }),
        r
          ? Object.defineProperty(n, Symbol.species, {
              configurable: !0,
              enumerable: !1,
              get: function () {
                return this;
              },
              set: undefined,
            })
          : CreateMethodProperty(n, Symbol.species, n),
        CreateMethodProperty(n.prototype, "add", function p(e) {
          var t = this;
          if ("object" != typeof t)
            throw new TypeError(
              "Method Set.prototype.add called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!0 !== t._es6Set)
            throw new TypeError(
              "Method Set.prototype.add called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          for (var n = t._values, a = 0; a < n.length; a++) {
            var i = n[a];
            if (i !== o && SameValueZero(i, e)) return t;
          }
          return (
            0 === e && 1 / e == -Infinity && (e = 0),
            t._values.push(e),
            (this._size = ++this._size),
            r || (this.size = this._size),
            t
          );
        }),
        CreateMethodProperty(n.prototype, "clear", function y() {
          var e = this;
          if ("object" != typeof e)
            throw new TypeError(
              "Method Set.prototype.clear called on incompatible receiver " +
                Object.prototype.toString.call(e)
            );
          if (!0 !== e._es6Set)
            throw new TypeError(
              "Method Set.prototype.clear called on incompatible receiver " +
                Object.prototype.toString.call(e)
            );
          for (var t = e._values, n = 0; n < t.length; n++) t[n] = o;
          return (this._size = 0), r || (this.size = this._size), undefined;
        }),
        CreateMethodProperty(n.prototype, "constructor", n),
        CreateMethodProperty(n.prototype, "delete", function (e) {
          var t = this;
          if ("object" != typeof t)
            throw new TypeError(
              "Method Set.prototype.delete called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!0 !== t._es6Set)
            throw new TypeError(
              "Method Set.prototype.delete called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          for (var n = t._values, a = 0; a < n.length; a++) {
            var i = n[a];
            if (i !== o && SameValueZero(i, e))
              return (
                (n[a] = o),
                (this._size = --this._size),
                r || (this.size = this._size),
                !0
              );
          }
          return !1;
        }),
        CreateMethodProperty(n.prototype, "entries", function u() {
          return t(this, "key+value");
        }),
        CreateMethodProperty(n.prototype, "forEach", function f(e) {
          var t = this;
          if ("object" != typeof t)
            throw new TypeError(
              "Method Set.prototype.forEach called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!0 !== t._es6Set)
            throw new TypeError(
              "Method Set.prototype.forEach called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!IsCallable(e))
            throw new TypeError(
              Object.prototype.toString.call(e) + " is not a function."
            );
          if (arguments[1]) var r = arguments[1];
          for (var n = t._values, a = 0; a < n.length; a++) {
            var i = n[a];
            i !== o && e.call(r, i, i, t);
          }
          return undefined;
        }),
        CreateMethodProperty(n.prototype, "has", function d(e) {
          var t = this;
          if ("object" != typeof t)
            throw new TypeError(
              "Method Set.prototype.forEach called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          if (!0 !== t._es6Set)
            throw new TypeError(
              "Method Set.prototype.forEach called on incompatible receiver " +
                Object.prototype.toString.call(t)
            );
          for (var r = t._values, n = 0; n < r.length; n++) {
            var a = r[n];
            if (a !== o && SameValueZero(a, e)) return !0;
          }
          return !1;
        });
      var a = function h() {
        return t(this, "value");
      };
      CreateMethodProperty(n.prototype, "values", a),
        CreateMethodProperty(n.prototype, "keys", a),
        r &&
          Object.defineProperty(n.prototype, "size", {
            configurable: !0,
            enumerable: !1,
            get: function () {
              var e = this;
              if ("object" != typeof e)
                throw new TypeError(
                  "Method Set.prototype.size called on incompatible receiver " +
                    Object.prototype.toString.call(e)
                );
              if (!0 !== e._es6Set)
                throw new TypeError(
                  "Method Set.prototype.size called on incompatible receiver " +
                    Object.prototype.toString.call(e)
                );
              for (var t = e._values, r = 0, n = 0; n < t.length; n++) {
                t[n] !== o && (r += 1);
              }
              return r;
            },
            set: undefined,
          }),
        CreateMethodProperty(n.prototype, Symbol.iterator, a),
        "name" in n ||
          Object.defineProperty(n, "name", {
            configurable: !0,
            enumerable: !1,
            writable: !1,
            value: "Set",
          });
      var i = {};
      Object.defineProperty(i, "isSetIterator", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: !0,
      }),
        CreateMethodProperty(i, "next", function b() {
          var e = this;
          if ("object" != typeof e)
            throw new TypeError(
              "Method %SetIteratorPrototype%.next called on incompatible receiver " +
                Object.prototype.toString.call(e)
            );
          if (!e.isSetIterator)
            throw new TypeError(
              "Method %SetIteratorPrototype%.next called on incompatible receiver " +
                Object.prototype.toString.call(e)
            );
          var t = e["[[IteratedSet]]"],
            r = e["[[SetNextIndex]]"],
            n = e["[[SetIterationKind]]"];
          if (t === undefined) return CreateIterResultObject(undefined, !0);
          if (!t._es6Set)
            throw new Error(
              Object.prototype.toString.call(t) +
                " does not have [[SetData]] internal slot."
            );
          for (var a = t._values, i = a.length; r < i; ) {
            var l = a[r];
            if (((r += 1), (e["[[SetNextIndex]]"] = r), l !== o))
              return "key+value" === n
                ? CreateIterResultObject([l, l], !1)
                : CreateIterResultObject(l, !1);
          }
          return (
            (e["[[IteratedSet]]"] = undefined),
            CreateIterResultObject(undefined, !0)
          );
        }),
        CreateMethodProperty(i, Symbol.iterator, function s() {
          return this;
        });
      try {
        CreateMethodProperty(e, "Set", n);
      } catch (l) {
        e.Set = n;
      }
    })(self);
  }
  if (
    !(
      "from" in Array &&
      (function () {
        try {
          return (
            Array.from({ length: -Infinity }),
            "a" === Array.from(new self.Set(["a"]))[0] &&
              "a" === Array.from(new self.Map([["a", "one"]]))[0][0]
          );
        } catch (r) {
          return !1;
        }
      })()
    )
  ) {
    !(function () {
      function r(r) {
        return (
          "string" == typeof r ||
          ("object" == typeof r && "[object String]" === t.call(r))
        );
      }
      var t = Object.prototype.toString,
        e = String.prototype.match;
      CreateMethodProperty(Array, "from", function o(t) {
        var o = this,
          a = arguments.length > 1 ? arguments[1] : undefined;
        if (a === undefined) var n = !1;
        else {
          if (!1 === IsCallable(a))
            throw new TypeError(
              Object.prototype.toString.call(a) + " is not a function."
            );
          var i = arguments.length > 2 ? arguments[2] : undefined;
          if (i !== undefined) var l = i;
          else l = undefined;
          n = !0;
        }
        var u = GetMethod(t, Symbol.iterator);
        if (u !== undefined) {
          if (IsConstructor(o)) var f = Construct(o);
          else f = ArrayCreate(0);
          for (var c = GetIterator(t, u), s = 0; ; ) {
            if (s >= Math.pow(2, 53) - 1) {
              var h = new TypeError(
                "Iteration count can not be greater than or equal 9007199254740991."
              );
              return IteratorClose(c, h);
            }
            var y = ToString(s),
              C = IteratorStep(c);
            if (!1 === C) return (f.length = s), f;
            var g = IteratorValue(C);
            if (n)
              try {
                var p = Call(a, l, [g, s]);
              } catch (b) {
                return IteratorClose(c, b);
              }
            else p = g;
            try {
              CreateDataPropertyOrThrow(f, y, p);
            } catch (b) {
              return IteratorClose(c, b);
            }
            s += 1;
          }
        }
        if (r(t))
          var v =
            e.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) ||
            [];
        else v = ToObject(t);
        var d = ToLength(Get(v, "length"));
        for (
          f = IsConstructor(o) ? Construct(o, [d]) : ArrayCreate(d), s = 0;
          s < d;

        ) {
          y = ToString(s);
          var I = Get(v, y);
          (p = !0 === n ? Call(a, l, [I, s]) : I),
            CreateDataPropertyOrThrow(f, y, p),
            (s += 1);
        }
        return (f.length = d), f;
      });
    })();
  }
  if (
    !(function (r) {
      "use strict";
      try {
        var a = new r.URL("http://example.com");
        if ("href" in a && "searchParams" in a) {
          var e = new URL("http://example.com");
          if (
            ((e.search = "a=1&b=2"),
            "http://example.com/?a=1&b=2" === e.href &&
              ((e.search = ""), "http://example.com/" === e.href))
          ) {
            if (!("sort" in r.URLSearchParams.prototype)) return !1;
            var t = new r.URLSearchParams("a=1"),
              n = new r.URLSearchParams(t);
            if ("a=1" !== String(n)) return !1;
            var c = new r.URLSearchParams({ a: "1" });
            if ("a=1" !== String(c)) return !1;
            var h = new r.URLSearchParams([["a", "1"]]);
            return "a=1" === String(h);
          }
        }
        return !1;
      } catch (m) {
        return !1;
      }
    })(self)
  ) {
    !(function (e) {
      "use strict";
      function t(t) {
        return (
          !!t &&
          (("Symbol" in e &&
            "iterator" in e.Symbol &&
            "function" == typeof t[Symbol.iterator]) ||
            !!Array.isArray(t))
        );
      }
      !(function () {
        function n(e) {
          var t = "",
            n = !0;
          return (
            e.forEach(function (e) {
              var r = encodeURIComponent(e.name),
                a = encodeURIComponent(e.value);
              n || (t += "&"), (t += r + "=" + a), (n = !1);
            }),
            t.replace(/%20/g, "+")
          );
        }
        function r(e) {
          return e.replace(/((%[0-9A-Fa-f]{2})*)/g, function (e, t) {
            return decodeURIComponent(t);
          });
        }
        function a(e, t) {
          var n = e.split("&");
          t && -1 === n[0].indexOf("=") && (n[0] = "=" + n[0]);
          var a = [];
          n.forEach(function (e) {
            if (0 !== e.length) {
              var t = e.indexOf("=");
              if (-1 !== t)
                var n = e.substring(0, t),
                  r = e.substring(t + 1);
              else (n = e), (r = "");
              (n = n.replace(/\+/g, " ")),
                (r = r.replace(/\+/g, " ")),
                a.push({ name: n, value: r });
            }
          });
          var i = [];
          return (
            a.forEach(function (e) {
              i.push({ name: r(e.name), value: r(e.value) });
            }),
            i
          );
        }
        function i(e) {
          if (c) return new s(e);
          var t = document.createElement("a");
          return (t.href = e), t;
        }
        function o(e) {
          var r = this;
          (this._list = []),
            e === undefined ||
              null === e ||
              (e instanceof o
                ? (this._list = a(String(e)))
                : "object" == typeof e && t(e)
                ? Array.from(e).forEach(function (e) {
                    if (!t(e)) throw TypeError();
                    var n = Array.from(e);
                    if (2 !== n.length) throw TypeError();
                    r._list.push({ name: String(n[0]), value: String(n[1]) });
                  })
                : "object" == typeof e && e
                ? Object.keys(e).forEach(function (t) {
                    r._list.push({ name: String(t), value: String(e[t]) });
                  })
                : ((e = String(e)),
                  "?" === e.substring(0, 1) && (e = e.substring(1)),
                  (this._list = a(e)))),
            (this._url_object = null),
            (this._setList = function (e) {
              i || (r._list = e);
            });
          var i = !1;
          this._update_steps = function () {
            i ||
              ((i = !0),
              r._url_object &&
                ("about:" === r._url_object.protocol &&
                  -1 !== r._url_object.pathname.indexOf("?") &&
                  (r._url_object.pathname =
                    r._url_object.pathname.split("?")[0]),
                (r._url_object.search = n(r._list)),
                (i = !1)));
          };
        }
        function u(e, t) {
          var n = 0;
          this.next = function () {
            if (n >= e.length) return { done: !0, value: undefined };
            var r = e[n++];
            return {
              done: !1,
              value:
                "key" === t
                  ? r.name
                  : "value" === t
                  ? r.value
                  : [r.name, r.value],
            };
          };
        }
        function l(t, n) {
          function r() {
            var e = l.href.replace(/#$|\?$|\?(?=#)/g, "");
            l.href !== e && (l.href = e);
          }
          function u() {
            m._setList(l.search ? a(l.search.substring(1)) : []),
              m._update_steps();
          }
          if (!(this instanceof e.URL))
            throw new TypeError(
              "Failed to construct 'URL': Please use the 'new' operator."
            );
          n &&
            (t = (function () {
              if (c) return new s(t, n).href;
              var e;
              try {
                var r;
                if (
                  ("[object OperaMini]" ===
                  Object.prototype.toString.call(window.operamini)
                    ? ((e = document.createElement("iframe")),
                      (e.style.display = "none"),
                      document.documentElement.appendChild(e),
                      (r = e.contentWindow.document))
                    : document.implementation &&
                      document.implementation.createHTMLDocument
                    ? (r = document.implementation.createHTMLDocument(""))
                    : document.implementation &&
                      document.implementation.createDocument
                    ? ((r = document.implementation.createDocument(
                        "http://www.w3.org/1999/xhtml",
                        "html",
                        null
                      )),
                      r.documentElement.appendChild(r.createElement("head")),
                      r.documentElement.appendChild(r.createElement("body")))
                    : window.ActiveXObject &&
                      ((r = new window.ActiveXObject("htmlfile")),
                      r.write("<head></head><body></body>"),
                      r.close()),
                  !r)
                )
                  throw Error("base not supported");
                var a = r.createElement("base");
                (a.href = n), r.getElementsByTagName("head")[0].appendChild(a);
                var i = r.createElement("a");
                return (i.href = t), i.href;
              } finally {
                e && e.parentNode.removeChild(e);
              }
            })());
          var l = i(t || ""),
            f = (function () {
              if (!("defineProperties" in Object)) return !1;
              try {
                var e = {};
                return (
                  Object.defineProperties(e, {
                    prop: {
                      get: function () {
                        return !0;
                      },
                    },
                  }),
                  e.prop
                );
              } catch (t) {
                return !1;
              }
            })(),
            h = f ? this : document.createElement("a"),
            m = new o(l.search ? l.search.substring(1) : null);
          return (
            (m._url_object = h),
            Object.defineProperties(h, {
              href: {
                get: function () {
                  return l.href;
                },
                set: function (e) {
                  (l.href = e), r(), u();
                },
                enumerable: !0,
                configurable: !0,
              },
              origin: {
                get: function () {
                  return "data:" === this.protocol.toLowerCase()
                    ? null
                    : "origin" in l
                    ? l.origin
                    : this.protocol + "//" + this.host;
                },
                enumerable: !0,
                configurable: !0,
              },
              protocol: {
                get: function () {
                  return l.protocol;
                },
                set: function (e) {
                  l.protocol = e;
                },
                enumerable: !0,
                configurable: !0,
              },
              username: {
                get: function () {
                  return l.username;
                },
                set: function (e) {
                  l.username = e;
                },
                enumerable: !0,
                configurable: !0,
              },
              password: {
                get: function () {
                  return l.password;
                },
                set: function (e) {
                  l.password = e;
                },
                enumerable: !0,
                configurable: !0,
              },
              host: {
                get: function () {
                  var e = {
                    "http:": /:80$/,
                    "https:": /:443$/,
                    "ftp:": /:21$/,
                  }[l.protocol];
                  return e ? l.host.replace(e, "") : l.host;
                },
                set: function (e) {
                  l.host = e;
                },
                enumerable: !0,
                configurable: !0,
              },
              hostname: {
                get: function () {
                  return l.hostname;
                },
                set: function (e) {
                  l.hostname = e;
                },
                enumerable: !0,
                configurable: !0,
              },
              port: {
                get: function () {
                  return l.port;
                },
                set: function (e) {
                  l.port = e;
                },
                enumerable: !0,
                configurable: !0,
              },
              pathname: {
                get: function () {
                  return "/" !== l.pathname.charAt(0)
                    ? "/" + l.pathname
                    : l.pathname;
                },
                set: function (e) {
                  l.pathname = e;
                },
                enumerable: !0,
                configurable: !0,
              },
              search: {
                get: function () {
                  return l.search;
                },
                set: function (e) {
                  l.search !== e && ((l.search = e), r(), u());
                },
                enumerable: !0,
                configurable: !0,
              },
              searchParams: {
                get: function () {
                  return m;
                },
                enumerable: !0,
                configurable: !0,
              },
              hash: {
                get: function () {
                  return l.hash;
                },
                set: function (e) {
                  (l.hash = e), r();
                },
                enumerable: !0,
                configurable: !0,
              },
              toString: {
                value: function () {
                  return l.toString();
                },
                enumerable: !1,
                configurable: !0,
              },
              valueOf: {
                value: function () {
                  return l.valueOf();
                },
                enumerable: !1,
                configurable: !0,
              },
            }),
            h
          );
        }
        var c,
          s = e.URL;
        try {
          if (s) {
            if ("searchParams" in (c = new e.URL("http://example.com"))) {
              var f = new l("http://example.com");
              if (
                ((f.search = "a=1&b=2"),
                "http://example.com/?a=1&b=2" === f.href &&
                  ((f.search = ""), "http://example.com/" === f.href))
              )
                return;
            }
            "href" in c || (c = undefined), (c = undefined);
          }
        } catch (m) {}
        if (
          (Object.defineProperties(o.prototype, {
            append: {
              value: function (e, t) {
                this._list.push({ name: e, value: t }), this._update_steps();
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            delete: {
              value: function (e) {
                for (var t = 0; t < this._list.length; )
                  this._list[t].name === e ? this._list.splice(t, 1) : ++t;
                this._update_steps();
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            get: {
              value: function (e) {
                for (var t = 0; t < this._list.length; ++t)
                  if (this._list[t].name === e) return this._list[t].value;
                return null;
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            getAll: {
              value: function (e) {
                for (var t = [], n = 0; n < this._list.length; ++n)
                  this._list[n].name === e && t.push(this._list[n].value);
                return t;
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            has: {
              value: function (e) {
                for (var t = 0; t < this._list.length; ++t)
                  if (this._list[t].name === e) return !0;
                return !1;
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            set: {
              value: function (e, t) {
                for (var n = !1, r = 0; r < this._list.length; )
                  this._list[r].name === e
                    ? n
                      ? this._list.splice(r, 1)
                      : ((this._list[r].value = t), (n = !0), ++r)
                    : ++r;
                n || this._list.push({ name: e, value: t }),
                  this._update_steps();
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            entries: {
              value: function () {
                return new u(this._list, "key+value");
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            keys: {
              value: function () {
                return new u(this._list, "key");
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            values: {
              value: function () {
                return new u(this._list, "value");
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            forEach: {
              value: function (e) {
                var t = arguments.length > 1 ? arguments[1] : undefined;
                this._list.forEach(function (n) {
                  e.call(t, n.value, n.name);
                });
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            },
            toString: {
              value: function () {
                return n(this._list);
              },
              writable: !0,
              enumerable: !1,
              configurable: !0,
            },
            sort: {
              value: function p() {
                for (
                  var e = this.entries(), t = e.next(), n = [], r = {};
                  !t.done;

                ) {
                  var a = t.value,
                    i = a[0];
                  n.push(i),
                    Object.prototype.hasOwnProperty.call(r, i) || (r[i] = []),
                    r[i].push(a[1]),
                    (t = e.next());
                }
                n.sort();
                for (var o = 0; o < n.length; o++) this["delete"](n[o]);
                for (var u = 0; u < n.length; u++)
                  (i = n[u]), this.append(i, r[i].shift());
              },
            },
          }),
          "Symbol" in e &&
            "iterator" in e.Symbol &&
            (Object.defineProperty(o.prototype, e.Symbol.iterator, {
              value: o.prototype.entries,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(u.prototype, e.Symbol.iterator, {
              value: function () {
                return this;
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })),
          s)
        )
          for (var h in s)
            Object.prototype.hasOwnProperty.call(s, h) &&
              "function" == typeof s[h] &&
              (l[h] = s[h]);
        (e.URL = l), (e.URLSearchParams = o);
      })(),
        (function () {
          if (
            "1" !== new e.URLSearchParams([["a", 1]]).get("a") ||
            "1" !== new e.URLSearchParams({ a: 1 }).get("a")
          ) {
            var n = e.URLSearchParams;
            e.URLSearchParams = function (e) {
              if (e && "object" == typeof e && t(e)) {
                var r = new n();
                return (
                  Array.from(e).forEach(function (e) {
                    if (!t(e)) throw TypeError();
                    var n = Array.from(e);
                    if (2 !== n.length) throw TypeError();
                    r.append(n[0], n[1]);
                  }),
                  r
                );
              }
              return e && "object" == typeof e
                ? ((r = new n()),
                  Object.keys(e).forEach(function (t) {
                    r.set(t, e[t]);
                  }),
                  r)
                : new n(e);
            };
          }
        })();
    })(self);
  }
  if (!("Symbol" in self && "toStringTag" in self.Symbol)) {
    Object.defineProperty(Symbol, "toStringTag", {
      value: Symbol("toStringTag"),
    });
  }
  if (!("Promise" in self)) {
    !(function () {
      "use strict";
      function n() {
        return tn[q][B] || D;
      }
      function t(n) {
        return n && "object" == typeof n;
      }
      function e(n) {
        return "function" == typeof n;
      }
      function r(n, t) {
        return n instanceof t;
      }
      function o(n) {
        return r(n, A);
      }
      function i(n, t, e) {
        if (!t(n)) throw a(e);
      }
      function u() {
        try {
          return b.apply(R, arguments);
        } catch (n) {
          return (Y.e = n), Y;
        }
      }
      function c(n, t) {
        return (b = n), (R = t), u;
      }
      function f(n, t) {
        function e() {
          for (var e = 0; e < o; )
            t(r[e], r[e + 1]), (r[e++] = T), (r[e++] = T);
          (o = 0), r.length > n && (r.length = n);
        }
        var r = L(n),
          o = 0;
        return function (n, t) {
          (r[o++] = n), (r[o++] = t), 2 === o && tn.nextTick(e);
        };
      }
      function s(n, t) {
        var o,
          i,
          u,
          f,
          s = 0;
        if (!n) throw a(N);
        var l = n[tn[q][z]];
        if (e(l)) i = l.call(n);
        else {
          if (!e(n.next)) {
            if (r(n, L)) {
              for (o = n.length; s < o; ) t(n[s], s++);
              return s;
            }
            throw a(N);
          }
          i = n;
        }
        for (; !(u = i.next()).done; )
          if ((f = c(t)(u.value, s++)) === Y) throw (e(i[G]) && i[G](), f.e);
        return s;
      }
      function a(n) {
        return new TypeError(n);
      }
      function l(n) {
        return (n ? "" : Q) + new A().stack;
      }
      function h(n, t) {
        var e = "on" + n.toLowerCase(),
          r = F[e];
        E && E.listeners(n).length
          ? n === X
            ? E.emit(n, t._v, t)
            : E.emit(n, t)
          : r
          ? r({ reason: t._v, promise: t })
          : tn[n](t._v, t);
      }
      function v(n) {
        return n && n._s;
      }
      function _(n) {
        if (v(n)) return new n(Z);
        var t, r, o;
        return (
          (t = new n(function (n, e) {
            if (t) throw a();
            (r = n), (o = e);
          })),
          i(r, e),
          i(o, e),
          t
        );
      }
      function d(n, t) {
        var e = !1;
        return function (r) {
          e || ((e = !0), I && (n[M] = l(!0)), t === U ? g(n, r) : y(n, t, r));
        };
      }
      function p(n, t, r, o) {
        return (
          e(r) && (t._onFulfilled = r),
          e(o) && (n[J] && h(W, n), (t._onRejected = o)),
          I && (t._p = n),
          (n[n._c++] = t),
          n._s !== $ && rn(n, t),
          t
        );
      }
      function m(n) {
        if (n._umark) return !0;
        n._umark = !0;
        for (var t, e = 0, r = n._c; e < r; )
          if (((t = n[e++]), t._onRejected || m(t))) return !0;
      }
      function w(n, t) {
        function e(n) {
          return r.push(n.replace(/^\s+|\s+$/g, ""));
        }
        var r = [];
        return (
          I &&
            (t[M] && e(t[M]),
            (function o(n) {
              n && K in n && (o(n._next), e(n[K] + ""), o(n._p));
            })(t)),
          (n && n.stack ? n.stack : n) + ("\n" + r.join("\n")).replace(nn, "")
        );
      }
      function j(n, t) {
        return n(t);
      }
      function y(n, t, e) {
        var r = 0,
          i = n._c;
        if (n._s === $)
          for (
            n._s = t,
              n._v = e,
              t === O && (I && o(e) && (e.longStack = w(e, n)), on(n));
            r < i;

          )
            rn(n, n[r++]);
        return n;
      }
      function g(n, r) {
        if (r === n && r) return y(n, O, a(V)), n;
        if (r !== S && (e(r) || t(r))) {
          var o = c(k)(r);
          if (o === Y) return y(n, O, o.e), n;
          e(o)
            ? (I && v(r) && (n._next = r),
              v(r)
                ? x(n, r, o)
                : tn.nextTick(function () {
                    x(n, r, o);
                  }))
            : y(n, U, r);
        } else y(n, U, r);
        return n;
      }
      function k(n) {
        return n.then;
      }
      function x(n, t, e) {
        var r = c(e, t)(
          function (e) {
            t && ((t = S), g(n, e));
          },
          function (e) {
            t && ((t = S), y(n, O, e));
          }
        );
        r === Y && t && (y(n, O, r.e), (t = S));
      }
      var T,
        b,
        R,
        S = null,
        C = "object" == typeof self,
        F = self,
        P = F.Promise,
        E = F.process,
        H = F.console,
        I = !0,
        L = Array,
        A = Error,
        O = 1,
        U = 2,
        $ = 3,
        q = "Symbol",
        z = "iterator",
        B = "species",
        D = q + "(" + B + ")",
        G = "return",
        J = "_uh",
        K = "_pt",
        M = "_st",
        N = "Invalid argument",
        Q = "\nFrom previous ",
        V = "Chaining cycle detected for promise",
        W = "rejectionHandled",
        X = "unhandledRejection",
        Y = { e: S },
        Z = function () {},
        nn = /^.+\/node_modules\/yaku\/.+\n?/gm,
        tn = function (n) {
          var r,
            o = this;
          if (!t(o) || o._s !== T) throw a("Invalid this");
          if (((o._s = $), I && (o[K] = l()), n !== Z)) {
            if (!e(n)) throw a(N);
            (r = c(n)(d(o, U), d(o, O))), r === Y && y(o, O, r.e);
          }
        };
      (tn["default"] = tn),
        (function en(n, t) {
          for (var e in t) n[e] = t[e];
        })(tn.prototype, {
          then: function (n, t) {
            if (this._s === undefined) throw a();
            return p(this, _(tn.speciesConstructor(this, tn)), n, t);
          },
          catch: function (n) {
            return this.then(T, n);
          },
          finally: function (n) {
            return this.then(
              function (t) {
                return tn.resolve(n()).then(function () {
                  return t;
                });
              },
              function (t) {
                return tn.resolve(n()).then(function () {
                  throw t;
                });
              }
            );
          },
          _c: 0,
          _p: S,
        }),
        (tn.resolve = function (n) {
          return v(n) ? n : g(_(this), n);
        }),
        (tn.reject = function (n) {
          return y(_(this), O, n);
        }),
        (tn.race = function (n) {
          var t = this,
            e = _(t),
            r = function (n) {
              y(e, U, n);
            },
            o = function (n) {
              y(e, O, n);
            },
            i = c(s)(n, function (n) {
              t.resolve(n).then(r, o);
            });
          return i === Y ? t.reject(i.e) : e;
        }),
        (tn.all = function (n) {
          function t(n) {
            y(o, O, n);
          }
          var e,
            r = this,
            o = _(r),
            i = [];
          return (e = c(s)(n, function (n, u) {
            r.resolve(n).then(function (n) {
              (i[u] = n), --e || y(o, U, i);
            }, t);
          })) === Y
            ? r.reject(e.e)
            : (e || y(o, U, []), o);
        }),
        (tn.Symbol = F[q] || {}),
        c(function () {
          Object.defineProperty(tn, n(), {
            get: function () {
              return this;
            },
          });
        })(),
        (tn.speciesConstructor = function (t, e) {
          var r = t.constructor;
          return r ? r[n()] || e : e;
        }),
        (tn.unhandledRejection = function (n, t) {
          H && H.error("Uncaught (in promise)", I ? t.longStack : w(n, t));
        }),
        (tn.rejectionHandled = Z),
        (tn.enableLongStackTrace = function () {
          I = !0;
        }),
        (tn.nextTick = C
          ? function (n) {
              P
                ? new P(function (n) {
                    n();
                  }).then(n)
                : setTimeout(n);
            }
          : E.nextTick),
        (tn._s = 1);
      var rn = f(999, function (n, t) {
          var e, r;
          return (r = n._s !== O ? t._onFulfilled : t._onRejected) === T
            ? void y(t, n._s, n._v)
            : (e = c(j)(r, n._v)) === Y
            ? void y(t, O, e.e)
            : void g(t, e);
        }),
        on = f(9, function (n) {
          m(n) || ((n[J] = 1), h(X, n));
        });
      F.Promise = tn;
    })();
  }
  function TrimString(e, u) {
    var r = RequireObjectCoercible(e),
      t = ToString(r),
      n =
        /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
          .source;
    if ("start" === u)
      var p = String.prototype.replace.call(t, new RegExp("^" + n, "g"), "");
    else
      p =
        "end" === u
          ? String.prototype.replace.call(t, new RegExp(n + "$", "g"), "")
          : String.prototype.replace.call(
              t,
              new RegExp("^" + n + "|" + n + "$", "g"),
              ""
            );
    return p;
  }
  if (
    !(
      "trim" in String.prototype &&
      (function () {
        var r = "​᠎";
        return (
          !"\t\n\x0B\f\r                　\u2028\u2029\ufeff".trim() &&
          r.trim() === r
        );
      })()
    )
  ) {
    CreateMethodProperty(String.prototype, "trim", function t() {
      "use strict";
      var t = this;
      return TrimString(t, "start+end");
    });
  }
  if (!("atob" in self)) {
    !(function (e) {
      "use strict";
      if (
        "object" == typeof exports &&
        null != exports &&
        "number" != typeof exports.nodeType
      )
        module.exports = e();
      else if ("function" == typeof define && null != define.amd) define([], e);
      else {
        var t = e(),
          o = "undefined" != typeof self ? self : $.global;
        "function" != typeof o.btoa && (o.btoa = t.btoa),
          "function" != typeof o.atob && (o.atob = t.atob);
      }
    })(function () {
      "use strict";
      function e(e) {
        this.message = e;
      }
      function t(t) {
        for (
          var o, n, a = String(t), i = 0, f = r, c = "";
          a.charAt(0 | i) || ((f = "="), i % 1);
          c += f.charAt(63 & (o >> (8 - (i % 1) * 8)))
        ) {
          if ((n = a.charCodeAt((i += 0.75))) > 255)
            throw new e(
              "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
            );
          o = (o << 8) | n;
        }
        return c;
      }
      function o(t) {
        var o = String(t).replace(/[=]+$/, "");
        if (o.length % 4 == 1)
          throw new e(
            "'atob' failed: The string to be decoded is not correctly encoded."
          );
        for (
          var n, a, i = 0, f = 0, c = "";
          (a = o.charAt(f++));
          ~a && ((n = i % 4 ? 64 * n + a : a), i++ % 4)
            ? (c += String.fromCharCode(255 & (n >> ((-2 * i) & 6))))
            : 0
        )
          a = r.indexOf(a);
        return c;
      }
      var r =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      return (
        (e.prototype = new Error()),
        (e.prototype.name = "InvalidCharacterError"),
        { btoa: t, atob: o }
      );
    });
  }
  if (!("document" in self && "Document" in self)) {
    "undefined" == typeof WorkerGlobalScope &&
      "function" != typeof importScripts &&
      (self.HTMLDocument
        ? (self.Document = self.HTMLDocument)
        : ((self.Document =
            self.HTMLDocument =
            document.constructor =
              new Function("return function Document() {}")()),
          (self.Document.prototype = document)));
  }
  if (!("Element" in self && "HTMLElement" in self)) {
    !(function () {
      function e() {
        return (
          l-- || clearTimeout(t),
          !(
            !document.body ||
            document.body.prototype ||
            !/(complete|interactive)/.test(document.readyState)
          ) &&
            (m(document, !0),
            t && document.body.prototype && clearTimeout(t),
            !!document.body.prototype)
        );
      }
      if (!("Element" in self && "HTMLElement" in self)) {
        if (window.Element && !window.HTMLElement)
          return void (window.HTMLElement = window.Element);
        window.Element = window.HTMLElement = new Function(
          "return function Element() {}"
        )();
        var t,
          n = document.appendChild(document.createElement("body")),
          o = n.appendChild(document.createElement("iframe")),
          r = o.contentWindow.document,
          c = (Element.prototype = r.appendChild(r.createElement("*"))),
          d = {},
          m = function (e, t) {
            var n,
              o,
              r,
              c = e.childNodes || [],
              u = -1;
            if (1 === e.nodeType && e.constructor !== Element) {
              e.constructor = Element;
              for (n in d) (o = d[n]), (e[n] = o);
            }
            for (; (r = t && c[++u]); ) m(r, t);
            return e;
          },
          u = document.getElementsByTagName("*"),
          i = document.createElement,
          l = 100;
        c.attachEvent("onpropertychange", function (e) {
          for (
            var t,
              n = e.propertyName,
              o = !Object.prototype.hasOwnProperty.call(d, n),
              r = c[n],
              m = d[n],
              i = -1;
            (t = u[++i]);

          )
            1 === t.nodeType && (o || t[n] === m) && (t[n] = r);
          d[n] = r;
        }),
          (c.constructor = Element),
          c.hasAttribute ||
            (c.hasAttribute = function a(e) {
              return null !== this.getAttribute(e);
            }),
          e() || ((document.onreadystatechange = e), (t = setInterval(e, 25))),
          (document.createElement = function p(e) {
            var t = i(String(e).toLowerCase());
            return m(t);
          }),
          document.removeChild(n);
      }
    })();
  }
  if (
    !(
      "document" in self &&
      "classList" in document.documentElement &&
      "Element" in self &&
      "classList" in Element.prototype &&
      (function () {
        var e = document.createElement("span");
        return e.classList.add("a", "b"), e.classList.contains("b");
      })()
    )
  ) {
    !(function (e) {
      var t = !0,
        r = function (e, r, n, i) {
          Object.defineProperty
            ? Object.defineProperty(e, r, {
                configurable: !1 === t || !!i,
                get: n,
              })
            : e.__defineGetter__(r, n);
        };
      try {
        r({}, "support");
      } catch (i) {
        t = !1;
      }
      var n = function (e, i, l) {
        r(
          e.prototype,
          i,
          function () {
            var e,
              c = this,
              s = "__defineGetter__DEFINE_PROPERTY" + i;
            if (c[s]) return e;
            if (((c[s] = !0), !1 === t)) {
              for (
                var o,
                  a = n.mirror || document.createElement("div"),
                  f = a.childNodes,
                  d = f.length,
                  m = 0;
                m < d;
                ++m
              )
                if (f[m]._R === c) {
                  o = f[m];
                  break;
                }
              o || (o = a.appendChild(document.createElement("div"))),
                (e = DOMTokenList.call(o, c, l));
            } else e = new _DOMTokenList(c, l);
            return (
              r(c, i, function () {
                return e;
              }),
              delete c[s],
              e
            );
          },
          !0
        );
      };
      n(e.Element, "classList", "className"),
        n(e.HTMLElement, "classList", "className"),
        n(e.HTMLLinkElement, "relList", "rel"),
        n(e.HTMLAnchorElement, "relList", "rel"),
        n(e.HTMLAreaElement, "relList", "rel");
    })(self);
  }
  if (
    !(
      "document" in self &&
      "cloneNode" in document.documentElement &&
      (function () {
        var e = document.createElement("div"),
          n = document.createElement("input");
        (n.type = "radio"), (n.checked = !0), e.appendChild(n);
        var c,
          t = n.cloneNode(!1);
        try {
          c = e.cloneNode();
        } catch (d) {
          return !1;
        }
        return t.checked && void 0 !== c && 0 === c.childNodes.length;
      })()
    )
  ) {
    Element.prototype.cloneNode = (function (e, t) {
      return function (t) {
        void 0 === t && (t = !1);
        var c = e.call(this, t);
        return "checked" in this && (c.checked = this.checked), c;
      };
    })(Element.prototype.cloneNode);
  }
  if (!document.contains) {
    !(function () {
      function e(e) {
        if (!(0 in arguments)) throw new TypeError("1 argument is required");
        do {
          if (this === e) return !0;
        } while ((e = e && e.parentNode));
        return !1;
      }
      if ("HTMLElement" in self && "contains" in HTMLElement.prototype)
        try {
          delete HTMLElement.prototype.contains;
        } catch (t) {}
      "Node" in self
        ? (Node.prototype.contains = e)
        : (document.contains = Element.prototype.contains = e);
    })();
  }
  if (!document.isSameNode) {
    !(function () {
      function e(e) {
        if (!(0 in arguments)) throw new TypeError("1 argument is required");
        return this === e;
      }
      if ("HTMLElement" in self && "isSameNode" in HTMLElement.prototype)
        try {
          delete HTMLElement.prototype.isSameNode;
        } catch (t) {}
      "Node" in self
        ? (Node.prototype.isSameNode = e)
        : (document.isSameNode = Element.prototype.isSameNode = e);
    })();
  }
  if (
    !(function (n) {
      if (!("Event" in n)) return !1;
      try {
        return new Event("click"), !0;
      } catch (t) {
        return !1;
      }
    })(self)
  ) {
    !(function () {
      function e(e, t) {
        if (!e) throw new Error("Not enough arguments");
        var n;
        if ("createEvent" in document) {
          n = document.createEvent("Event");
          var o = !(!t || t.bubbles === undefined) && t.bubbles,
            i = !(!t || t.cancelable === undefined) && t.cancelable;
          return n.initEvent(e, o, i), n;
        }
        return (
          (n = document.createEventObject()),
          (n.type = e),
          (n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles),
          (n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable),
          n
        );
      }
      var t = {
        click: 1,
        dblclick: 1,
        keyup: 1,
        keypress: 1,
        keydown: 1,
        mousedown: 1,
        mouseup: 1,
        mousemove: 1,
        mouseover: 1,
        mouseenter: 1,
        mouseleave: 1,
        mouseout: 1,
        storage: 1,
        storagecommit: 1,
        textinput: 1,
      };
      if ("undefined" != typeof document && "undefined" != typeof window) {
        var n = (window.Event && window.Event.prototype) || null;
        (e.NONE = 0),
          (e.CAPTURING_PHASE = 1),
          (e.AT_TARGET = 2),
          (e.BUBBLING_PHASE = 3),
          (window.Event = Window.prototype.Event = e),
          n &&
            Object.defineProperty(window.Event, "prototype", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: n,
            }),
          "createEvent" in document ||
            ((window.addEventListener =
              Window.prototype.addEventListener =
              Document.prototype.addEventListener =
              Element.prototype.addEventListener =
                function o() {
                  var e = this,
                    n = arguments[0],
                    o = arguments[1];
                  if (e === window && n in t)
                    throw new Error(
                      "In IE8 the event: " +
                        n +
                        " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information."
                    );
                  e._events || (e._events = {}),
                    e._events[n] ||
                      ((e._events[n] = function (t) {
                        var n,
                          o = e._events[t.type].list,
                          i = o.slice(),
                          r = -1,
                          c = i.length;
                        for (
                          t.preventDefault = function a() {
                            !1 !== t.cancelable && (t.returnValue = !1);
                          },
                            t.stopPropagation = function l() {
                              t.cancelBubble = !0;
                            },
                            t.stopImmediatePropagation = function s() {
                              (t.cancelBubble = !0), (t.cancelImmediate = !0);
                            },
                            t.currentTarget = e,
                            t.relatedTarget = t.fromElement || null,
                            t.target = t.target || t.srcElement || e,
                            t.timeStamp = new Date().getTime(),
                            t.clientX &&
                              ((t.pageX =
                                t.clientX +
                                document.documentElement.scrollLeft),
                              (t.pageY =
                                t.clientY +
                                document.documentElement.scrollTop));
                          ++r < c && !t.cancelImmediate;

                        )
                          r in i &&
                            ((n = i[r]),
                            o.includes(n) &&
                              "function" == typeof n &&
                              n.call(e, t));
                      }),
                      (e._events[n].list = []),
                      e.attachEvent && e.attachEvent("on" + n, e._events[n])),
                    e._events[n].list.push(o);
                }),
            (window.removeEventListener =
              Window.prototype.removeEventListener =
              Document.prototype.removeEventListener =
              Element.prototype.removeEventListener =
                function i() {
                  var e,
                    t = this,
                    n = arguments[0],
                    o = arguments[1];
                  t._events &&
                    t._events[n] &&
                    t._events[n].list &&
                    -1 !== (e = t._events[n].list.indexOf(o)) &&
                    (t._events[n].list.splice(e, 1),
                    t._events[n].list.length ||
                      (t.detachEvent && t.detachEvent("on" + n, t._events[n]),
                      delete t._events[n]));
                }),
            (window.dispatchEvent =
              Window.prototype.dispatchEvent =
              Document.prototype.dispatchEvent =
              Element.prototype.dispatchEvent =
                function r(e) {
                  if (!arguments.length)
                    throw new Error("Not enough arguments");
                  if (!e || "string" != typeof e.type)
                    throw new Error("DOM Events Exception 0");
                  var t = this,
                    n = e.type;
                  try {
                    if (!e.bubbles) {
                      e.cancelBubble = !0;
                      var o = function (e) {
                        (e.cancelBubble = !0),
                          (t || window).detachEvent("on" + n, o);
                      };
                      this.attachEvent("on" + n, o);
                    }
                    this.fireEvent("on" + n, e);
                  } catch (i) {
                    e.target = t;
                    do {
                      (e.currentTarget = t),
                        "_events" in t &&
                          "function" == typeof t._events[n] &&
                          t._events[n].call(t, e),
                        "function" == typeof t["on" + n] &&
                          t["on" + n].call(t, e),
                        (t = 9 === t.nodeType ? t.parentWindow : t.parentNode);
                    } while (t && !e.cancelBubble);
                  }
                  return !0;
                }),
            document.attachEvent("onreadystatechange", function () {
              "complete" === document.readyState &&
                document.dispatchEvent(
                  new e("DOMContentLoaded", { bubbles: !0 })
                );
            }));
      }
    })();
  }
  if (
    !(
      "CustomEvent" in self &&
      ("function" == typeof self.CustomEvent ||
        self.CustomEvent.toString().indexOf("CustomEventConstructor") > -1)
    )
  ) {
    (self.CustomEvent = function e(t, n) {
      if (!t)
        throw Error(
          'TypeError: Failed to construct "CustomEvent": An event name must be provided.'
        );
      var l;
      if (
        ((n = n || { bubbles: !1, cancelable: !1, detail: null }),
        "createEvent" in document)
      )
        try {
          (l = document.createEvent("CustomEvent")),
            l.initCustomEvent(t, n.bubbles, n.cancelable, n.detail);
        } catch (a) {
          (l = document.createEvent("Event")),
            l.initEvent(t, n.bubbles, n.cancelable),
            (l.detail = n.detail);
        }
      else (l = new Event(t, n)), (l.detail = (n && n.detail) || null);
      return l;
    }),
      (CustomEvent.prototype = Event.prototype);
  }
  if (
    !(function () {
      var n = !1;
      return (
        document.documentElement.addEventListener("focusin", function () {
          n = !0;
        }),
        document.documentElement.dispatchEvent(new Event("focusin")),
        n
      );
    })()
  ) {
    self.addEventListener(
      "focus",
      function (e) {
        e.target.dispatchEvent(
          new Event("focusin", { bubbles: !0, cancelable: !0 })
        );
      },
      !0
    ),
      self.addEventListener(
        "blur",
        function (e) {
          e.target.dispatchEvent(
            new Event("focusout", { bubbles: !0, cancelable: !0 })
          );
        },
        !0
      );
  }
  if (
    !(
      "onhashchange" in self &&
      (null == self.onhashchange || "function" == typeof self.onhashchange)
    )
  ) {
    !(function (n) {
      function h() {
        a !== n.location.hash &&
          ((a = n.location.hash), n.dispatchEvent(new Event("hashchange"))),
          setTimeout(h, 500);
      }
      var a = n.location.hash;
      (n.onhashchange = function () {}), h();
    })(self);
  }
  if (
    !(
      "XMLHttpRequest" in self &&
      "prototype" in self.XMLHttpRequest &&
      "addEventListener" in self.XMLHttpRequest.prototype
    )
  ) {
    !(function (e, t) {
      (e.XMLHttpRequest = function s() {
        var e = this,
          n = (e._request = t
            ? new t()
            : new ActiveXObject("MSXML2.XMLHTTP.3.0"));
        (n.onreadystatechange = function () {
          e.readyState = n.readyState;
          var t = 4 === e.readyState;
          (e.response = e.responseText = t ? n.responseText : null),
            (e.status = t ? n.status : null),
            (e.statusText = t ? n.statusText : null),
            e.dispatchEvent(new Event("readystatechange")),
            t && e.dispatchEvent(new Event("load"));
        }),
          "onerror" in n &&
            (n.onerror = function () {
              e.dispatchEvent(new Event("error"));
            });
      }),
        (e.XMLHttpRequest.UNSENT = 0),
        (e.XMLHttpRequest.OPENED = 1),
        (e.XMLHttpRequest.HEADERS_RECEIVED = 2),
        (e.XMLHttpRequest.LOADING = 3),
        (e.XMLHttpRequest.DONE = 4);
      var n = e.XMLHttpRequest.prototype;
      (n.addEventListener = e.addEventListener),
        (n.removeEventListener = e.removeEventListener),
        (n.dispatchEvent = e.dispatchEvent),
        (n.abort = function r() {
          return this._request();
        }),
        (n.getAllResponseHeaders = function u() {
          return this._request.getAllResponseHeaders();
        }),
        (n.getResponseHeader = function i(e) {
          return this._request.getResponseHeader(e);
        }),
        (n.open = function a(e, t) {
          this._request.open(e, t, arguments[2], arguments[3], arguments[4]);
        }),
        (n.overrideMimeType = function o(e) {
          this._request.overrideMimeType(e);
        }),
        (n.send = function p() {
          this._request.send(0 in arguments ? arguments[0] : null);
        }),
        (n.setRequestHeader = function d(e, t) {
          this._request.setRequestHeader(e, t);
        });
    })(self, self.XMLHttpRequest);
  }
  var _mutation = (function () {
    function e(e) {
      return "function" == typeof Node
        ? e instanceof Node
        : e &&
            "object" == typeof e &&
            e.nodeName &&
            e.nodeType >= 1 &&
            e.nodeType <= 12;
    }
    return function n(t) {
      if (1 === t.length)
        return e(t[0]) ? t[0] : document.createTextNode(t[0] + "");
      for (var o = document.createDocumentFragment(), r = 0; r < t.length; r++)
        o.appendChild(e(t[r]) ? t[r] : document.createTextNode(t[r] + ""));
      return o;
    };
  })();
  if (!("DocumentFragment" in self && "append" in DocumentFragment.prototype)) {
    !(function (t) {
      (document.createDocumentFragment().constructor.prototype.append =
        function n() {
          this.appendChild(_mutation(arguments));
        }),
        (t.DocumentFragment.prototype.append = function e() {
          this.appendChild(_mutation(arguments));
        });
    })(self);
  }
  if (
    !("DocumentFragment" in self && "prepend" in DocumentFragment.prototype)
  ) {
    !(function (t) {
      (document.createDocumentFragment().constructor.prototype.prepend =
        function e() {
          this.insertBefore(_mutation(arguments), this.firstChild);
        }),
        (t.DocumentFragment.prototype.prepend = function n() {
          this.insertBefore(_mutation(arguments), this.firstChild);
        });
    })(self);
  }
  if (!("Element" in self && "after" in Element.prototype)) {
    (Document.prototype.after = Element.prototype.after =
      function t() {
        if (this.parentNode) {
          for (
            var t = Array.prototype.slice.call(arguments),
              e = this.nextSibling,
              o = e ? t.indexOf(e) : -1;
            -1 !== o && (e = e.nextSibling);

          )
            o = t.indexOf(e);
          this.parentNode.insertBefore(_mutation(arguments), e);
        }
      }),
      "Text" in self && (Text.prototype.after = Element.prototype.after);
  }
  if (!("Element" in self && "append" in Element.prototype)) {
    Document.prototype.append = Element.prototype.append = function p() {
      this.appendChild(_mutation(arguments));
    };
  }
  if (!("Element" in self && "before" in Element.prototype)) {
    (Document.prototype.before = Element.prototype.before =
      function e() {
        if (this.parentNode) {
          for (
            var e = Array.prototype.slice.call(arguments),
              t = this.previousSibling,
              o = t ? e.indexOf(t) : -1;
            -1 !== o && (t = t.previousSibling);

          )
            o = e.indexOf(t);
          this.parentNode.insertBefore(
            _mutation(arguments),
            t ? t.nextSibling : this.parentNode.firstChild
          );
        }
      }),
      "Text" in self && (Text.prototype.before = Element.prototype.before);
  }
  if (!("Element" in self && "prepend" in Element.prototype)) {
    Document.prototype.prepend = Element.prototype.prepend = function t() {
      this.insertBefore(_mutation(arguments), this.firstChild);
    };
  }
  if (!("Element" in self && "remove" in Element.prototype)) {
    (Document.prototype.remove = Element.prototype.remove =
      function e() {
        this.parentNode && this.parentNode.removeChild(this);
      }),
      "Text" in self && (Text.prototype.remove = Element.prototype.remove);
  }
  if (!("Element" in self && "replaceWith" in Element.prototype)) {
    (Document.prototype.replaceWith = Element.prototype.replaceWith =
      function e() {
        this.parentNode &&
          this.parentNode.replaceChild(_mutation(arguments), this);
      }),
      "Text" in self &&
        (Text.prototype.replaceWith = Element.prototype.replaceWith);
  }
  if (!("document" in self && "querySelector" in self.document)) {
    !(function () {
      function e(e, n, o) {
        var l,
          u,
          c = document.createElement("div"),
          i = "qsa" + String(Math.random()).slice(3);
        return (
          (c.innerHTML = "x<style>" + n + "{qsa:" + i + ";}"),
          (l = r.appendChild(c.lastChild)),
          (u = t(e, n, o, i)),
          r.removeChild(l),
          o ? u[0] : u
        );
      }
      function t(e, r, n, o) {
        var l,
          u = /1|9/.test(e.nodeType),
          c = e.childNodes,
          i = [],
          a = -1;
        if (u && e.currentStyle && e.currentStyle.qsa === o && i.push(e) && n)
          return i;
        for (; (l = c[++a]); )
          if (((i = i.concat(t(l, r, n, o))), n && i.length)) return i;
        return i;
      }
      var r = document.getElementsByTagName("head")[0];
      (Document.prototype.querySelector = Element.prototype.querySelector =
        function n(t) {
          return e(this, t, !0);
        }),
        (Document.prototype.querySelectorAll =
          Element.prototype.querySelectorAll =
            function o(t) {
              return e(this, t, !1);
            });
    })();
  }
  if (!("document" in self && "matches" in document.documentElement)) {
    Element.prototype.matches =
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      function e(t) {
        for (
          var o = this,
            r = (o.document || o.ownerDocument).querySelectorAll(t),
            c = 0;
          r[c] && r[c] !== o;

        )
          ++c;
        return !!r[c];
      };
  }
  if (!("document" in self && "closest" in document.documentElement)) {
    Element.prototype.closest = function e(n) {
      for (var t = this; t; ) {
        if (t.matches(n)) return t;
        t =
          "SVGElement" in window && t instanceof SVGElement
            ? t.parentNode
            : t.parentElement;
      }
      return null;
    };
  }
  if (
    !(
      "document" in self &&
      "hidden" in document &&
      "visibilityState" in document
    )
  ) {
    !(function () {
      function i() {
        (document.hidden = document[t + "Hidden"]),
          (document.visibilityState = document[t + "VisibilityState"]);
      }
      var t = document.webkitVisibilityState
        ? "webkit"
        : document.mozVisibilityState
        ? "moz"
        : null;
      t &&
        (i(),
        document.addEventListener(t + "visibilitychange", function () {
          i(), document.dispatchEvent(new CustomEvent("visibilitychange"));
        }));
    })();
  }
  if (!("location" in self && "origin" in self.location)) {
    try {
      Object.defineProperty(window.location, "origin", {
        enumerable: !0,
        writable: !1,
        value:
          window.location.protocol +
          "//" +
          window.location.hostname +
          (window.location.port ? ":" + window.location.port : ""),
        configurable: !1,
      });
    } catch (e) {
      window.location.origin =
        window.location.protocol +
        "//" +
        window.location.hostname +
        (window.location.port ? ":" + window.location.port : "");
    }
  }
  if (!("requestAnimationFrame" in self)) {
    !(function (n) {
      var e,
        t = Date.now(),
        o = function () {
          return n.performance && "function" == typeof n.performance.now
            ? n.performance.now()
            : Date.now() - t;
        };
      if (
        ("mozRequestAnimationFrame" in n
          ? (e = "moz")
          : "webkitRequestAnimationFrame" in n && (e = "webkit"),
        e)
      )
        (n.requestAnimationFrame = function (t) {
          return n[e + "RequestAnimationFrame"](function () {
            t(o());
          });
        }),
          (n.cancelAnimationFrame = n[e + "CancelAnimationFrame"]);
      else {
        var i = Date.now();
        (n.requestAnimationFrame = function (n) {
          if ("function" != typeof n)
            throw new TypeError(n + " is not a function");
          var e = Date.now(),
            t = 16 + i - e;
          return (
            t < 0 && (t = 0),
            (i = e),
            setTimeout(function () {
              (i = Date.now()), n(o());
            }, t)
          );
        }),
          (n.cancelAnimationFrame = function (n) {
            clearTimeout(n);
          });
      }
    })(self);
  }
  if (
    !(function () {
      var e = document.createElement("p"),
        t = !1;
      return (
        (e.innerHTML = "<section></section>"),
        document.documentElement.appendChild(e),
        e.firstChild &&
          ("getComputedStyle" in window
            ? (t = "block" === getComputedStyle(e.firstChild).display)
            : e.firstChild.currentStyle &&
              (t = "block" === e.firstChild.currentStyle.display)),
        document.documentElement.removeChild(e),
        t
      );
    })()
  ) {
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = y.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function a(e, t) {
        var n = y.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (y.elements = n + " " + e),
          m(t);
      }
      function o(e) {
        var t = v[e[p]];
        return t || ((t = {}), g++, (e[p] = g), (v[g] = t)), t;
      }
      function c(e, n, r) {
        if ((n || (n = t), s)) return n.createElement(e);
        r || (r = o(n));
        var a;
        return (
          (a = r.cache[e]
            ? r.cache[e].cloneNode()
            : h.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !a.canHaveChildren || f.test(e) || a.tagUrn
            ? a
            : r.frag.appendChild(a)
        );
      }
      function i(e, n) {
        if ((e || (e = t), s)) return e.createDocumentFragment();
        n = n || o(e);
        for (
          var a = n.frag.cloneNode(), c = 0, i = r(), l = i.length;
          l > c;
          c++
        )
          a.createElement(i[c]);
        return a;
      }
      function l(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return y.shivMethods ? c(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(y, t.frag));
      }
      function m(e) {
        e || (e = t);
        var r = o(e);
        return (
          !y.shivCSS ||
            u ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          s || l(e, r),
          e
        );
      }
      var u,
        s,
        d = e.html5 || {},
        f =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        p = "_html5shiv",
        g = 0,
        v = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (u = "hidden" in e),
            (s =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (u = !0), (s = !0);
        }
      })();
      var y = {
        elements:
          d.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: "3.7.3-pre",
        shivCSS: !1 !== d.shivCSS,
        supportsUnknownElements: s,
        shivMethods: !1 !== d.shivMethods,
        type: "default",
        shivDocument: m,
        createElement: c,
        createDocumentFragment: i,
        addElements: a,
      };
      (e.html5 = y),
        m(t),
        "object" == typeof module && module.exports && (module.exports = y);
    })("undefined" != typeof window ? window : this, document);
  }
})(
  ("object" === typeof window && window) ||
    ("object" === typeof self && self) ||
    ("object" === typeof global && global) ||
    {}
);
