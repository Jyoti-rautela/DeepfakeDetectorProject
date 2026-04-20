function kb(l, i) {
   for (var s = 0; s < i.length; s++) {
      const u = i[s];
      if (typeof u != "string" && !Array.isArray(u)) {
         for (const c in u)
            if (c !== "default" && !(c in l)) {
               const f = Object.getOwnPropertyDescriptor(u, c);
               f && Object.defineProperty(l, c, f.get ? f : {
                  enumerable: !0,
                  get: () => u[c]
               })
            }
      }
   }
   return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, {
      value: "Module"
   }))
}(function () {
   const i = document.createElement("link").relList;
   if (i && i.supports && i.supports("modulepreload")) return;
   for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
   new MutationObserver(c => {
      for (const f of c)
         if (f.type === "childList")
            for (const h of f.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && u(h)
   }).observe(document, {
      childList: !0,
      subtree: !0
   });

   function s(c) {
      const f = {};
      return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
   }

   function u(c) {
      if (c.ep) return;
      c.ep = !0;
      const f = s(c);
      fetch(c.href, f)
   }
})();

function yp(l) {
   return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l
}
var wu = {
      exports: {}
   },
   ci = {};
var vm;

function qb() {
   if (vm) return ci;
   vm = 1;
   var l = Symbol.for("react.transitional.element"),
      i = Symbol.for("react.fragment");

   function s(u, c, f) {
      var h = null;
      if (f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), "key" in c) {
         f = {};
         for (var y in c) y !== "key" && (f[y] = c[y])
      } else f = c;
      return c = f.ref, {
         $$typeof: l,
         type: u,
         key: h,
         ref: c !== void 0 ? c : null,
         props: f
      }
   }
   return ci.Fragment = i, ci.jsx = s, ci.jsxs = s, ci
}
var gm;

function Bb() {
   return gm || (gm = 1, wu.exports = qb()), wu.exports
}
var g = Bb(),
   Eu = {
      exports: {}
   },
   fi = {},
   Tu = {
      exports: {}
   },
   Au = {};
var bm;

function Yb() {
   return bm || (bm = 1, (function (l) {
      function i(M, Q) {
         var Z = M.length;
         M.push(Q);
         t: for (; 0 < Z;) {
            var it = Z - 1 >>> 1,
               x = M[it];
            if (0 < c(x, Q)) M[it] = Q, M[Z] = x, Z = it;
            else break t
         }
      }

      function s(M) {
         return M.length === 0 ? null : M[0]
      }

      function u(M) {
         if (M.length === 0) return null;
         var Q = M[0],
            Z = M.pop();
         if (Z !== Q) {
            M[0] = Z;
            t: for (var it = 0, x = M.length, G = x >>> 1; it < G;) {
               var F = 2 * (it + 1) - 1,
                  J = M[F],
                  lt = F + 1,
                  st = M[lt];
               if (0 > c(J, Z)) lt < x && 0 > c(st, J) ? (M[it] = st, M[lt] = Z, it = lt) : (M[it] = J, M[F] = Z, it = F);
               else if (lt < x && 0 > c(st, Z)) M[it] = st, M[lt] = Z, it = lt;
               else break t
            }
         }
         return Q
      }

      function c(M, Q) {
         var Z = M.sortIndex - Q.sortIndex;
         return Z !== 0 ? Z : M.id - Q.id
      }
      if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
         var f = performance;
         l.unstable_now = function () {
            return f.now()
         }
      } else {
         var h = Date,
            y = h.now();
         l.unstable_now = function () {
            return h.now() - y
         }
      }
      var v = [],
         m = [],
         b = 1,
         E = null,
         A = 3,
         D = !1,
         z = !1,
         R = !1,
         N = !1,
         B = typeof setTimeout == "function" ? setTimeout : null,
         X = typeof clearTimeout == "function" ? clearTimeout : null,
         V = typeof setImmediate < "u" ? setImmediate : null;

      function k(M) {
         for (var Q = s(m); Q !== null;) {
            if (Q.callback === null) u(m);
            else if (Q.startTime <= M) u(m), Q.sortIndex = Q.expirationTime, i(v, Q);
            else break;
            Q = s(m)
         }
      }

      function H(M) {
         if (R = !1, k(M), !z)
            if (s(v) !== null) z = !0, P || (P = !0, dt());
            else {
               var Q = s(m);
               Q !== null && ft(H, Q.startTime - M)
            }
      }
      var P = !1,
         $ = -1,
         K = 5,
         ut = -1;

      function vt() {
         return N ? !0 : !(l.unstable_now() - ut < K)
      }

      function xt() {
         if (N = !1, P) {
            var M = l.unstable_now();
            ut = M;
            var Q = !0;
            try {
               t: {
                  z = !1,
                  R && (R = !1, X($), $ = -1),
                  D = !0;
                  var Z = A;
                  try {
                     e: {
                        for (k(M), E = s(v); E !== null && !(E.expirationTime > M && vt());) {
                           var it = E.callback;
                           if (typeof it == "function") {
                              E.callback = null, A = E.priorityLevel;
                              var x = it(E.expirationTime <= M);
                              if (M = l.unstable_now(), typeof x == "function") {
                                 E.callback = x, k(M), Q = !0;
                                 break e
                              }
                              E === s(v) && u(v), k(M)
                           } else u(v);
                           E = s(v)
                        }
                        if (E !== null) Q = !0;
                        else {
                           var G = s(m);
                           G !== null && ft(H, G.startTime - M), Q = !1
                        }
                     }
                     break t
                  }
                  finally {
                     E = null, A = Z, D = !1
                  }
                  Q = void 0
               }
            }
            finally {
               Q ? dt() : P = !1
            }
         }
      }
      var dt;
      if (typeof V == "function") dt = function () {
         V(xt)
      };
      else if (typeof MessageChannel < "u") {
         var wt = new MessageChannel,
            W = wt.port2;
         wt.port1.onmessage = xt, dt = function () {
            W.postMessage(null)
         }
      } else dt = function () {
         B(xt, 0)
      };

      function ft(M, Q) {
         $ = B(function () {
            M(l.unstable_now())
         }, Q)
      }
      l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function (M) {
         M.callback = null
      }, l.unstable_forceFrameRate = function (M) {
         0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < M ? Math.floor(1e3 / M) : 5
      }, l.unstable_getCurrentPriorityLevel = function () {
         return A
      }, l.unstable_next = function (M) {
         switch (A) {
            case 1:
            case 2:
            case 3:
               var Q = 3;
               break;
            default:
               Q = A
         }
         var Z = A;
         A = Q;
         try {
            return M()
         } finally {
            A = Z
         }
      }, l.unstable_requestPaint = function () {
         N = !0
      }, l.unstable_runWithPriority = function (M, Q) {
         switch (M) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
               break;
            default:
               M = 3
         }
         var Z = A;
         A = M;
         try {
            return Q()
         } finally {
            A = Z
         }
      }, l.unstable_scheduleCallback = function (M, Q, Z) {
         var it = l.unstable_now();
         switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? it + Z : it) : Z = it, M) {
            case 1:
               var x = -1;
               break;
            case 2:
               x = 250;
               break;
            case 5:
               x = 1073741823;
               break;
            case 4:
               x = 1e4;
               break;
            default:
               x = 5e3
         }
         return x = Z + x, M = {
            id: b++,
            callback: Q,
            priorityLevel: M,
            startTime: Z,
            expirationTime: x,
            sortIndex: -1
         }, Z > it ? (M.sortIndex = Z, i(m, M), s(v) === null && M === s(m) && (R ? (X($), $ = -1) : R = !0, ft(H, Z - it))) : (M.sortIndex = x, i(v, M), z || D || (z = !0, P || (P = !0, dt()))), M
      }, l.unstable_shouldYield = vt, l.unstable_wrapCallback = function (M) {
         var Q = A;
         return function () {
            var Z = A;
            A = Q;
            try {
               return M.apply(this, arguments)
            } finally {
               A = Z
            }
         }
      }
   })(Au)), Au
}
var xm;

function Gb() {
   return xm || (xm = 1, Tu.exports = Yb()), Tu.exports
}
var Ou = {
      exports: {}
   },
   ht = {};
var Sm;

function Vb() {
   if (Sm) return ht;
   Sm = 1;
   var l = Symbol.for("react.transitional.element"),
      i = Symbol.for("react.portal"),
      s = Symbol.for("react.fragment"),
      u = Symbol.for("react.strict_mode"),
      c = Symbol.for("react.profiler"),
      f = Symbol.for("react.consumer"),
      h = Symbol.for("react.context"),
      y = Symbol.for("react.forward_ref"),
      v = Symbol.for("react.suspense"),
      m = Symbol.for("react.memo"),
      b = Symbol.for("react.lazy"),
      E = Symbol.iterator;

   function A(x) {
      return x === null || typeof x != "object" ? null : (x = E && x[E] || x["@@iterator"], typeof x == "function" ? x : null)
   }
   var D = {
         isMounted: function () {
            return !1
         },
         enqueueForceUpdate: function () {},
         enqueueReplaceState: function () {},
         enqueueSetState: function () {}
      },
      z = Object.assign,
      R = {};

   function N(x, G, F) {
      this.props = x, this.context = G, this.refs = R, this.updater = F || D
   }
   N.prototype.isReactComponent = {}, N.prototype.setState = function (x, G) {
      if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, x, G, "setState")
   }, N.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate")
   };

   function B() {}
   B.prototype = N.prototype;

   function X(x, G, F) {
      this.props = x, this.context = G, this.refs = R, this.updater = F || D
   }
   var V = X.prototype = new B;
   V.constructor = X, z(V, N.prototype), V.isPureReactComponent = !0;
   var k = Array.isArray,
      H = {
         H: null,
         A: null,
         T: null,
         S: null,
         V: null
      },
      P = Object.prototype.hasOwnProperty;

   function $(x, G, F, J, lt, st) {
      return F = st.ref, {
         $$typeof: l,
         type: x,
         key: G,
         ref: F !== void 0 ? F : null,
         props: st
      }
   }

   function K(x, G) {
      return $(x.type, G, void 0, void 0, void 0, x.props)
   }

   function ut(x) {
      return typeof x == "object" && x !== null && x.$$typeof === l
   }

   function vt(x) {
      var G = {
         "=": "=0",
         ":": "=2"
      };
      return "$" + x.replace(/[=:]/g, function (F) {
         return G[F]
      })
   }
   var xt = /\/+/g;

   function dt(x, G) {
      return typeof x == "object" && x !== null && x.key != null ? vt("" + x.key) : G.toString(36)
   }

   function wt() {}

   function W(x) {
      switch (x.status) {
         case "fulfilled":
            return x.value;
         case "rejected":
            throw x.reason;
         default:
            switch (typeof x.status == "string" ? x.then(wt, wt) : (x.status = "pending", x.then(function (G) {
                  x.status === "pending" && (x.status = "fulfilled", x.value = G)
               }, function (G) {
                  x.status === "pending" && (x.status = "rejected", x.reason = G)
               })), x.status) {
               case "fulfilled":
                  return x.value;
               case "rejected":
                  throw x.reason
            }
      }
      throw x
   }

   function ft(x, G, F, J, lt) {
      var st = typeof x;
      (st === "undefined" || st === "boolean") && (x = null);
      var nt = !1;
      if (x === null) nt = !0;
      else switch (st) {
         case "bigint":
         case "string":
         case "number":
            nt = !0;
            break;
         case "object":
            switch (x.$$typeof) {
               case l:
               case i:
                  nt = !0;
                  break;
               case b:
                  return nt = x._init, ft(nt(x._payload), G, F, J, lt)
            }
      }
      if (nt) return lt = lt(x), nt = J === "" ? "." + dt(x, 0) : J, k(lt) ? (F = "", nt != null && (F = nt.replace(xt, "$&/") + "/"), ft(lt, G, F, "", function (Ot) {
         return Ot
      })) : lt != null && (ut(lt) && (lt = K(lt, F + (lt.key == null || x && x.key === lt.key ? "" : ("" + lt.key).replace(xt, "$&/") + "/") + nt)), G.push(lt)), 1;
      nt = 0;
      var zt = J === "" ? "." : J + ":";
      if (k(x))
         for (var At = 0; At < x.length; At++) J = x[At], st = zt + dt(J, At), nt += ft(J, G, F, st, lt);
      else if (At = A(x), typeof At == "function")
         for (x = At.call(x), At = 0; !(J = x.next()).done;) J = J.value, st = zt + dt(J, At++), nt += ft(J, G, F, st, lt);
      else if (st === "object") {
         if (typeof x.then == "function") return ft(W(x), G, F, J, lt);
         throw G = String(x), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.")
      }
      return nt
   }

   function M(x, G, F) {
      if (x == null) return x;
      var J = [],
         lt = 0;
      return ft(x, J, "", "", function (st) {
         return G.call(F, st, lt++)
      }), J
   }

   function Q(x) {
      if (x._status === -1) {
         var G = x._result;
         G = G(), G.then(function (F) {
            (x._status === 0 || x._status === -1) && (x._status = 1, x._result = F)
         }, function (F) {
            (x._status === 0 || x._status === -1) && (x._status = 2, x._result = F)
         }), x._status === -1 && (x._status = 0, x._result = G)
      }
      if (x._status === 1) return x._result.default;
      throw x._result
   }
   var Z = typeof reportError == "function" ? reportError : function (x) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
         var G = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
            error: x
         });
         if (!window.dispatchEvent(G)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
         process.emit("uncaughtException", x);
         return
      }
      console.error(x)
   };

   function it() {}
   return ht.Children = {
      map: M,
      forEach: function (x, G, F) {
         M(x, function () {
            G.apply(this, arguments)
         }, F)
      },
      count: function (x) {
         var G = 0;
         return M(x, function () {
            G++
         }), G
      },
      toArray: function (x) {
         return M(x, function (G) {
            return G
         }) || []
      },
      only: function (x) {
         if (!ut(x)) throw Error("React.Children.only expected to receive a single React element child.");
         return x
      }
   }, ht.Component = N, ht.Fragment = s, ht.Profiler = c, ht.PureComponent = X, ht.StrictMode = u, ht.Suspense = v, ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, ht.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
         return H.H.useMemoCache(x)
      }
   }, ht.cache = function (x) {
      return function () {
         return x.apply(null, arguments)
      }
   }, ht.cloneElement = function (x, G, F) {
      if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
      var J = z({}, x.props),
         lt = x.key,
         st = void 0;
      if (G != null)
         for (nt in G.ref !== void 0 && (st = void 0), G.key !== void 0 && (lt = "" + G.key), G) !P.call(G, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && G.ref === void 0 || (J[nt] = G[nt]);
      var nt = arguments.length - 2;
      if (nt === 1) J.children = F;
      else if (1 < nt) {
         for (var zt = Array(nt), At = 0; At < nt; At++) zt[At] = arguments[At + 2];
         J.children = zt
      }
      return $(x.type, lt, void 0, void 0, st, J)
   }, ht.createContext = function (x) {
      return x = {
         $$typeof: h,
         _currentValue: x,
         _currentValue2: x,
         _threadCount: 0,
         Provider: null,
         Consumer: null
      }, x.Provider = x, x.Consumer = {
         $$typeof: f,
         _context: x
      }, x
   }, ht.createElement = function (x, G, F) {
      var J, lt = {},
         st = null;
      if (G != null)
         for (J in G.key !== void 0 && (st = "" + G.key), G) P.call(G, J) && J !== "key" && J !== "__self" && J !== "__source" && (lt[J] = G[J]);
      var nt = arguments.length - 2;
      if (nt === 1) lt.children = F;
      else if (1 < nt) {
         for (var zt = Array(nt), At = 0; At < nt; At++) zt[At] = arguments[At + 2];
         lt.children = zt
      }
      if (x && x.defaultProps)
         for (J in nt = x.defaultProps, nt) lt[J] === void 0 && (lt[J] = nt[J]);
      return $(x, st, void 0, void 0, null, lt)
   }, ht.createRef = function () {
      return {
         current: null
      }
   }, ht.forwardRef = function (x) {
      return {
         $$typeof: y,
         render: x
      }
   }, ht.isValidElement = ut, ht.lazy = function (x) {
      return {
         $$typeof: b,
         _payload: {
            _status: -1,
            _result: x
         },
         _init: Q
      }
   }, ht.memo = function (x, G) {
      return {
         $$typeof: m,
         type: x,
         compare: G === void 0 ? null : G
      }
   }, ht.startTransition = function (x) {
      var G = H.T,
         F = {};
      H.T = F;
      try {
         var J = x(),
            lt = H.S;
         lt !== null && lt(F, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(it, Z)
      } catch (st) {
         Z(st)
      } finally {
         H.T = G
      }
   }, ht.unstable_useCacheRefresh = function () {
      return H.H.useCacheRefresh()
   }, ht.use = function (x) {
      return H.H.use(x)
   }, ht.useActionState = function (x, G, F) {
      return H.H.useActionState(x, G, F)
   }, ht.useCallback = function (x, G) {
      return H.H.useCallback(x, G)
   }, ht.useContext = function (x) {
      return H.H.useContext(x)
   }, ht.useDebugValue = function () {}, ht.useDeferredValue = function (x, G) {
      return H.H.useDeferredValue(x, G)
   }, ht.useEffect = function (x, G, F) {
      var J = H.H;
      if (typeof F == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return J.useEffect(x, G)
   }, ht.useId = function () {
      return H.H.useId()
   }, ht.useImperativeHandle = function (x, G, F) {
      return H.H.useImperativeHandle(x, G, F)
   }, ht.useInsertionEffect = function (x, G) {
      return H.H.useInsertionEffect(x, G)
   }, ht.useLayoutEffect = function (x, G) {
      return H.H.useLayoutEffect(x, G)
   }, ht.useMemo = function (x, G) {
      return H.H.useMemo(x, G)
   }, ht.useOptimistic = function (x, G) {
      return H.H.useOptimistic(x, G)
   }, ht.useReducer = function (x, G, F) {
      return H.H.useReducer(x, G, F)
   }, ht.useRef = function (x) {
      return H.H.useRef(x)
   }, ht.useState = function (x) {
      return H.H.useState(x)
   }, ht.useSyncExternalStore = function (x, G, F) {
      return H.H.useSyncExternalStore(x, G, F)
   }, ht.useTransition = function () {
      return H.H.useTransition()
   }, ht.version = "19.1.0", ht
}
var wm;

function $r() {
   return wm || (wm = 1, Ou.exports = Vb()), Ou.exports
}
var Ru = {
      exports: {}
   },
   le = {};
var Em;

function Qb() {
   if (Em) return le;
   Em = 1;
   var l = $r();

   function i(v) {
      var m = "https://react.dev/errors/" + v;
      if (1 < arguments.length) {
         m += "?args[]=" + encodeURIComponent(arguments[1]);
         for (var b = 2; b < arguments.length; b++) m += "&args[]=" + encodeURIComponent(arguments[b])
      }
      return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
   }

   function s() {}
   var u = {
         d: {
            f: s,
            r: function () {
               throw Error(i(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
         },
         p: 0,
         findDOMNode: null
      },
      c = Symbol.for("react.portal");

   function f(v, m, b) {
      var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
         $$typeof: c,
         key: E == null ? null : "" + E,
         children: v,
         containerInfo: m,
         implementation: b
      }
   }
   var h = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

   function y(v, m) {
      if (v === "font") return "";
      if (typeof m == "string") return m === "use-credentials" ? m : ""
   }
   return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, le.createPortal = function (v, m) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(i(299));
      return f(v, m, null, b)
   }, le.flushSync = function (v) {
      var m = h.T,
         b = u.p;
      try {
         if (h.T = null, u.p = 2, v) return v()
      } finally {
         h.T = m, u.p = b, u.d.f()
      }
   }, le.preconnect = function (v, m) {
      typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, u.d.C(v, m))
   }, le.prefetchDNS = function (v) {
      typeof v == "string" && u.d.D(v)
   }, le.preinit = function (v, m) {
      if (typeof v == "string" && m && typeof m.as == "string") {
         var b = m.as,
            E = y(b, m.crossOrigin),
            A = typeof m.integrity == "string" ? m.integrity : void 0,
            D = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
         b === "style" ? u.d.S(v, typeof m.precedence == "string" ? m.precedence : void 0, {
            crossOrigin: E,
            integrity: A,
            fetchPriority: D
         }) : b === "script" && u.d.X(v, {
            crossOrigin: E,
            integrity: A,
            fetchPriority: D,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
         })
      }
   }, le.preinitModule = function (v, m) {
      if (typeof v == "string")
         if (typeof m == "object" && m !== null) {
            if (m.as == null || m.as === "script") {
               var b = y(m.as, m.crossOrigin);
               u.d.M(v, {
                  crossOrigin: b,
                  integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                  nonce: typeof m.nonce == "string" ? m.nonce : void 0
               })
            }
         } else m == null && u.d.M(v)
   }, le.preload = function (v, m) {
      if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
         var b = m.as,
            E = y(b, m.crossOrigin);
         u.d.L(v, b, {
            crossOrigin: E,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            type: typeof m.type == "string" ? m.type : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
            referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
            imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
            imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
            media: typeof m.media == "string" ? m.media : void 0
         })
      }
   }, le.preloadModule = function (v, m) {
      if (typeof v == "string")
         if (m) {
            var b = y(m.as, m.crossOrigin);
            u.d.m(v, {
               as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
               crossOrigin: b,
               integrity: typeof m.integrity == "string" ? m.integrity : void 0
            })
         } else u.d.m(v)
   }, le.requestFormReset = function (v) {
      u.d.r(v)
   }, le.unstable_batchedUpdates = function (v, m) {
      return v(m)
   }, le.useFormState = function (v, m, b) {
      return h.H.useFormState(v, m, b)
   }, le.useFormStatus = function () {
      return h.H.useHostTransitionStatus()
   }, le.version = "19.1.0", le
}
var Tm;

function vp() {
   if (Tm) return Ru.exports;
   Tm = 1;

   function l() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
         __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
      } catch (i) {
         console.error(i)
      }
   }
   return l(), Ru.exports = Qb(), Ru.exports
}
var Am;

function Xb() {
   if (Am) return fi;
   Am = 1;
   var l = Gb(),
      i = $r(),
      s = vp();

   function u(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
         e += "?args[]=" + encodeURIComponent(arguments[1]);
         for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n])
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
   }

   function c(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
   }

   function f(t) {
      var e = t,
         n = t;
      if (t.alternate)
         for (; e.return;) e = e.return;
      else {
         t = e;
         do e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return; while (t)
      }
      return e.tag === 3 ? n : null
   }

   function h(t) {
      if (t.tag === 13) {
         var e = t.memoizedState;
         if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
      }
      return null
   }

   function y(t) {
      if (f(t) !== t) throw Error(u(188))
   }

   function v(t) {
      var e = t.alternate;
      if (!e) {
         if (e = f(t), e === null) throw Error(u(188));
         return e !== t ? null : t
      }
      for (var n = t, a = e;;) {
         var r = n.return;
         if (r === null) break;
         var o = r.alternate;
         if (o === null) {
            if (a = r.return, a !== null) {
               n = a;
               continue
            }
            break
         }
         if (r.child === o.child) {
            for (o = r.child; o;) {
               if (o === n) return y(r), t;
               if (o === a) return y(r), e;
               o = o.sibling
            }
            throw Error(u(188))
         }
         if (n.return !== a.return) n = r, a = o;
         else {
            for (var d = !1, p = r.child; p;) {
               if (p === n) {
                  d = !0, n = r, a = o;
                  break
               }
               if (p === a) {
                  d = !0, a = r, n = o;
                  break
               }
               p = p.sibling
            }
            if (!d) {
               for (p = o.child; p;) {
                  if (p === n) {
                     d = !0, n = o, a = r;
                     break
                  }
                  if (p === a) {
                     d = !0, a = o, n = r;
                     break
                  }
                  p = p.sibling
               }
               if (!d) throw Error(u(189))
            }
         }
         if (n.alternate !== a) throw Error(u(190))
      }
      if (n.tag !== 3) throw Error(u(188));
      return n.stateNode.current === n ? t : e
   }

   function m(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null;) {
         if (e = m(t), e !== null) return e;
         t = t.sibling
      }
      return null
   }
   var b = Object.assign,
      E = Symbol.for("react.element"),
      A = Symbol.for("react.transitional.element"),
      D = Symbol.for("react.portal"),
      z = Symbol.for("react.fragment"),
      R = Symbol.for("react.strict_mode"),
      N = Symbol.for("react.profiler"),
      B = Symbol.for("react.provider"),
      X = Symbol.for("react.consumer"),
      V = Symbol.for("react.context"),
      k = Symbol.for("react.forward_ref"),
      H = Symbol.for("react.suspense"),
      P = Symbol.for("react.suspense_list"),
      $ = Symbol.for("react.memo"),
      K = Symbol.for("react.lazy"),
      ut = Symbol.for("react.activity"),
      vt = Symbol.for("react.memo_cache_sentinel"),
      xt = Symbol.iterator;

   function dt(t) {
      return t === null || typeof t != "object" ? null : (t = xt && t[xt] || t["@@iterator"], typeof t == "function" ? t : null)
   }
   var wt = Symbol.for("react.client.reference");

   function W(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === wt ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
         case z:
            return "Fragment";
         case N:
            return "Profiler";
         case R:
            return "StrictMode";
         case H:
            return "Suspense";
         case P:
            return "SuspenseList";
         case ut:
            return "Activity"
      }
      if (typeof t == "object") switch (t.$$typeof) {
         case D:
            return "Portal";
         case V:
            return (t.displayName || "Context") + ".Provider";
         case X:
            return (t._context.displayName || "Context") + ".Consumer";
         case k:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
         case $:
            return e = t.displayName || null, e !== null ? e : W(t.type) || "Memo";
         case K:
            e = t._payload, t = t._init;
            try {
               return W(t(e))
            } catch {}
      }
      return null
   }
   var ft = Array.isArray,
      M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Z = {
         pending: !1,
         data: null,
         method: null,
         action: null
      },
      it = [],
      x = -1;

   function G(t) {
      return {
         current: t
      }
   }

   function F(t) {
      0 > x || (t.current = it[x], it[x] = null, x--)
   }

   function J(t, e) {
      x++, it[x] = t.current, t.current = e
   }
   var lt = G(null),
      st = G(null),
      nt = G(null),
      zt = G(null);

   function At(t, e) {
      switch (J(nt, e), J(st, t), J(lt, null), e.nodeType) {
         case 9:
         case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? Xh(t) : 0;
            break;
         default:
            if (t = e.tagName, e = e.namespaceURI) e = Xh(e), t = Zh(e, t);
            else switch (t) {
               case "svg":
                  t = 1;
                  break;
               case "math":
                  t = 2;
                  break;
               default:
                  t = 0
            }
      }
      F(lt), J(lt, t)
   }

   function Ot() {
      F(lt), F(st), F(nt)
   }

   function bn(t) {
      t.memoizedState !== null && J(zt, t);
      var e = lt.current,
         n = Zh(e, t.type);
      e !== n && (J(st, t), J(lt, n))
   }

   function Ue(t) {
      st.current === t && (F(lt), F(st)), zt.current === t && (F(zt), ii._currentValue = Z)
   }
   var Ve = Object.prototype.hasOwnProperty,
      Te = l.unstable_scheduleCallback,
      xn = l.unstable_cancelCallback,
      yv = l.unstable_shouldYield,
      vv = l.unstable_requestPaint,
      Qe = l.unstable_now,
      gv = l.unstable_getCurrentPriorityLevel,
      Tc = l.unstable_ImmediatePriority,
      Ac = l.unstable_UserBlockingPriority,
      Si = l.unstable_NormalPriority,
      bv = l.unstable_LowPriority,
      Oc = l.unstable_IdlePriority,
      xv = l.log,
      Sv = l.unstable_setDisableYieldValue,
      ha = null,
      he = null;

   function Sn(t) {
      if (typeof xv == "function" && Sv(t), he && typeof he.setStrictMode == "function") try {
         he.setStrictMode(ha, t)
      } catch {}
   }
   var me = Math.clz32 ? Math.clz32 : Tv,
      wv = Math.log,
      Ev = Math.LN2;

   function Tv(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (wv(t) / Ev | 0) | 0
   }
   var wi = 256,
      Ei = 4194304;

   function In(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
         case 1:
            return 1;
         case 2:
            return 2;
         case 4:
            return 4;
         case 8:
            return 8;
         case 16:
            return 16;
         case 32:
            return 32;
         case 64:
            return 64;
         case 128:
            return 128;
         case 256:
         case 512:
         case 1024:
         case 2048:
         case 4096:
         case 8192:
         case 16384:
         case 32768:
         case 65536:
         case 131072:
         case 262144:
         case 524288:
         case 1048576:
         case 2097152:
            return t & 4194048;
         case 4194304:
         case 8388608:
         case 16777216:
         case 33554432:
            return t & 62914560;
         case 67108864:
            return 67108864;
         case 134217728:
            return 134217728;
         case 268435456:
            return 268435456;
         case 536870912:
            return 536870912;
         case 1073741824:
            return 0;
         default:
            return t
      }
   }

   function Ti(t, e, n) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var r = 0,
         o = t.suspendedLanes,
         d = t.pingedLanes;
      t = t.warmLanes;
      var p = a & 134217727;
      return p !== 0 ? (a = p & ~o, a !== 0 ? r = In(a) : (d &= p, d !== 0 ? r = In(d) : n || (n = p & ~t, n !== 0 && (r = In(n))))) : (p = a & ~o, p !== 0 ? r = In(p) : d !== 0 ? r = In(d) : n || (n = a & ~t, n !== 0 && (r = In(n)))), r === 0 ? 0 : e !== 0 && e !== r && (e & o) === 0 && (o = r & -r, n = e & -e, o >= n || o === 32 && (n & 4194048) !== 0) ? e : r
   }

   function ma(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
   }

   function Av(t, e) {
      switch (t) {
         case 1:
         case 2:
         case 4:
         case 8:
         case 64:
            return e + 250;
         case 16:
         case 32:
         case 128:
         case 256:
         case 512:
         case 1024:
         case 2048:
         case 4096:
         case 8192:
         case 16384:
         case 32768:
         case 65536:
         case 131072:
         case 262144:
         case 524288:
         case 1048576:
         case 2097152:
            return e + 5e3;
         case 4194304:
         case 8388608:
         case 16777216:
         case 33554432:
            return -1;
         case 67108864:
         case 134217728:
         case 268435456:
         case 536870912:
         case 1073741824:
            return -1;
         default:
            return -1
      }
   }

   function Rc() {
      var t = wi;
      return wi <<= 1, (wi & 4194048) === 0 && (wi = 256), t
   }

   function Nc() {
      var t = Ei;
      return Ei <<= 1, (Ei & 62914560) === 0 && (Ei = 4194304), t
   }

   function cs(t) {
      for (var e = [], n = 0; 31 > n; n++) e.push(t);
      return e
   }

   function pa(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
   }

   function Ov(t, e, n, a, r, o) {
      var d = t.pendingLanes;
      t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
      var p = t.entanglements,
         S = t.expirationTimes,
         _ = t.hiddenUpdates;
      for (n = d & ~n; 0 < n;) {
         var L = 31 - me(n),
            Y = 1 << L;
         p[L] = 0, S[L] = -1;
         var j = _[L];
         if (j !== null)
            for (_[L] = null, L = 0; L < j.length; L++) {
               var U = j[L];
               U !== null && (U.lane &= -536870913)
            }
         n &= ~Y
      }
      a !== 0 && Cc(t, a, 0), o !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(d & ~e))
   }

   function Cc(t, e, n) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - me(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 4194090
   }

   function Mc(t, e) {
      var n = t.entangledLanes |= e;
      for (t = t.entanglements; n;) {
         var a = 31 - me(n),
            r = 1 << a;
         r & e | t[a] & e && (t[a] |= e), n &= ~r
      }
   }

   function fs(t) {
      switch (t) {
         case 2:
            t = 1;
            break;
         case 8:
            t = 4;
            break;
         case 32:
            t = 16;
            break;
         case 256:
         case 512:
         case 1024:
         case 2048:
         case 4096:
         case 8192:
         case 16384:
         case 32768:
         case 65536:
         case 131072:
         case 262144:
         case 524288:
         case 1048576:
         case 2097152:
         case 4194304:
         case 8388608:
         case 16777216:
         case 33554432:
            t = 128;
            break;
         case 268435456:
            t = 134217728;
            break;
         default:
            t = 0
      }
      return t
   }

   function ds(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
   }

   function _c() {
      var t = Q.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : fm(t.type))
   }

   function Rv(t, e) {
      var n = Q.p;
      try {
         return Q.p = t, e()
      } finally {
         Q.p = n
      }
   }
   var wn = Math.random().toString(36).slice(2),
      ee = "__reactFiber$" + wn,
      re = "__reactProps$" + wn,
      wl = "__reactContainer$" + wn,
      hs = "__reactEvents$" + wn,
      Nv = "__reactListeners$" + wn,
      Cv = "__reactHandles$" + wn,
      Dc = "__reactResources$" + wn,
      ya = "__reactMarker$" + wn;

   function ms(t) {
      delete t[ee], delete t[re], delete t[hs], delete t[Nv], delete t[Cv]
   }

   function El(t) {
      var e = t[ee];
      if (e) return e;
      for (var n = t.parentNode; n;) {
         if (e = n[wl] || n[ee]) {
            if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
               for (t = Fh(t); t !== null;) {
                  if (n = t[ee]) return n;
                  t = Fh(t)
               }
            return e
         }
         t = n, n = t.parentNode
      }
      return null
   }

   function Tl(t) {
      if (t = t[ee] || t[wl]) {
         var e = t.tag;
         if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t
      }
      return null
   }

   function va(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(u(33))
   }

   function Al(t) {
      var e = t[Dc];
      return e || (e = t[Dc] = {
         hoistableStyles: new Map,
         hoistableScripts: new Map
      }), e
   }

   function Kt(t) {
      t[ya] = !0
   }
   var jc = new Set,
      zc = {};

   function tl(t, e) {
      Ol(t, e), Ol(t + "Capture", e)
   }

   function Ol(t, e) {
      for (zc[t] = e, t = 0; t < e.length; t++) jc.add(e[t])
   }
   var Mv = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
      Uc = {},
      Hc = {};

   function _v(t) {
      return Ve.call(Hc, t) ? !0 : Ve.call(Uc, t) ? !1 : Mv.test(t) ? Hc[t] = !0 : (Uc[t] = !0, !1)
   }

   function Ai(t, e, n) {
      if (_v(e))
         if (n === null) t.removeAttribute(e);
         else {
            switch (typeof n) {
               case "undefined":
               case "function":
               case "symbol":
                  t.removeAttribute(e);
                  return;
               case "boolean":
                  var a = e.toLowerCase().slice(0, 5);
                  if (a !== "data-" && a !== "aria-") {
                     t.removeAttribute(e);
                     return
                  }
            }
            t.setAttribute(e, "" + n)
         }
   }

   function Oi(t, e, n) {
      if (n === null) t.removeAttribute(e);
      else {
         switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
               t.removeAttribute(e);
               return
         }
         t.setAttribute(e, "" + n)
      }
   }

   function Ie(t, e, n, a) {
      if (a === null) t.removeAttribute(n);
      else {
         switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
               t.removeAttribute(n);
               return
         }
         t.setAttributeNS(e, n, "" + a)
      }
   }
   var ps, Lc;

   function Rl(t) {
      if (ps === void 0) try {
         throw Error()
      } catch (n) {
         var e = n.stack.trim().match(/\n( *(at )?)/);
         ps = e && e[1] || "", Lc = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
      }
      return `
` + ps + t + Lc
   }
   var ys = !1;

   function vs(t, e) {
      if (!t || ys) return "";
      ys = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
         var a = {
            DetermineComponentFrameRoot: function () {
               try {
                  if (e) {
                     var Y = function () {
                        throw Error()
                     };
                     if (Object.defineProperty(Y.prototype, "props", {
                           set: function () {
                              throw Error()
                           }
                        }), typeof Reflect == "object" && Reflect.construct) {
                        try {
                           Reflect.construct(Y, [])
                        } catch (U) {
                           var j = U
                        }
                        Reflect.construct(t, [], Y)
                     } else {
                        try {
                           Y.call()
                        } catch (U) {
                           j = U
                        }
                        t.call(Y.prototype)
                     }
                  } else {
                     try {
                        throw Error()
                     } catch (U) {
                        j = U
                     }(Y = t()) && typeof Y.catch == "function" && Y.catch(function () {})
                  }
               } catch (U) {
                  if (U && j && typeof U.stack == "string") return [U.stack, j.stack]
               }
               return [null, null]
            }
         };
         a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
         var r = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
         r && r.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
         });
         var o = a.DetermineComponentFrameRoot(),
            d = o[0],
            p = o[1];
         if (d && p) {
            var S = d.split(`
`),
               _ = p.split(`
`);
            for (r = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot");) a++;
            for (; r < _.length && !_[r].includes("DetermineComponentFrameRoot");) r++;
            if (a === S.length || r === _.length)
               for (a = S.length - 1, r = _.length - 1; 1 <= a && 0 <= r && S[a] !== _[r];) r--;
            for (; 1 <= a && 0 <= r; a--, r--)
               if (S[a] !== _[r]) {
                  if (a !== 1 || r !== 1)
                     do
                        if (a--, r--, 0 > r || S[a] !== _[r]) {
                           var L = `
` + S[a].replace(" at new ", " at ");
                           return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)), L
                        } while (1 <= a && 0 <= r);
                  break
               }
         }
      } finally {
         ys = !1, Error.prepareStackTrace = n
      }
      return (n = t ? t.displayName || t.name : "") ? Rl(n) : ""
   }

   function Dv(t) {
      switch (t.tag) {
         case 26:
         case 27:
         case 5:
            return Rl(t.type);
         case 16:
            return Rl("Lazy");
         case 13:
            return Rl("Suspense");
         case 19:
            return Rl("SuspenseList");
         case 0:
         case 15:
            return vs(t.type, !1);
         case 11:
            return vs(t.type.render, !1);
         case 1:
            return vs(t.type, !0);
         case 31:
            return Rl("Activity");
         default:
            return ""
      }
   }

   function kc(t) {
      try {
         var e = "";
         do e += Dv(t), t = t.return; while (t);
         return e
      } catch (n) {
         return `
Error generating stack: ` + n.message + `
` + n.stack
      }
   }

   function Ae(t) {
      switch (typeof t) {
         case "bigint":
         case "boolean":
         case "number":
         case "string":
         case "undefined":
            return t;
         case "object":
            return t;
         default:
            return ""
      }
   }

   function qc(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
   }

   function jv(t) {
      var e = qc(t) ? "checked" : "value",
         n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
         a = "" + t[e];
      if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
         var r = n.get,
            o = n.set;
         return Object.defineProperty(t, e, {
            configurable: !0,
            get: function () {
               return r.call(this)
            },
            set: function (d) {
               a = "" + d, o.call(this, d)
            }
         }), Object.defineProperty(t, e, {
            enumerable: n.enumerable
         }), {
            getValue: function () {
               return a
            },
            setValue: function (d) {
               a = "" + d
            },
            stopTracking: function () {
               t._valueTracker = null, delete t[e]
            }
         }
      }
   }

   function Ri(t) {
      t._valueTracker || (t._valueTracker = jv(t))
   }

   function Bc(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var n = e.getValue(),
         a = "";
      return t && (a = qc(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1
   }

   function Ni(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
         return t.activeElement || t.body
      } catch {
         return t.body
      }
   }
   var zv = /[\n"\\]/g;

   function Oe(t) {
      return t.replace(zv, function (e) {
         return "\\" + e.charCodeAt(0).toString(16) + " "
      })
   }

   function gs(t, e, n, a, r, o, d, p) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ae(e)) : t.value !== "" + Ae(e) && (t.value = "" + Ae(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? bs(t, d, Ae(e)) : n != null ? bs(t, d, Ae(n)) : a != null && t.removeAttribute("value"), r == null && o != null && (t.defaultChecked = !!o), r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + Ae(p) : t.removeAttribute("name")
   }

   function Yc(t, e, n, a, r, o, d, p) {
      if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || n != null) {
         if (!(o !== "submit" && o !== "reset" || e != null)) return;
         n = n != null ? "" + Ae(n) : "", e = e != null ? "" + Ae(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e
      }
      a = a ?? r, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = p ? t.checked : !!a, t.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d)
   }

   function bs(t, e, n) {
      e === "number" && Ni(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
   }

   function Nl(t, e, n, a) {
      if (t = t.options, e) {
         e = {};
         for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
         for (n = 0; n < t.length; n++) r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && a && (t[n].defaultSelected = !0)
      } else {
         for (n = "" + Ae(n), e = null, r = 0; r < t.length; r++) {
            if (t[r].value === n) {
               t[r].selected = !0, a && (t[r].defaultSelected = !0);
               return
            }
            e !== null || t[r].disabled || (e = t[r])
         }
         e !== null && (e.selected = !0)
      }
   }

   function Gc(t, e, n) {
      if (e != null && (e = "" + Ae(e), e !== t.value && (t.value = e), n == null)) {
         t.defaultValue !== e && (t.defaultValue = e);
         return
      }
      t.defaultValue = n != null ? "" + Ae(n) : ""
   }

   function Vc(t, e, n, a) {
      if (e == null) {
         if (a != null) {
            if (n != null) throw Error(u(92));
            if (ft(a)) {
               if (1 < a.length) throw Error(u(93));
               a = a[0]
            }
            n = a
         }
         n == null && (n = ""), e = n
      }
      n = Ae(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a)
   }

   function Cl(t, e) {
      if (e) {
         var n = t.firstChild;
         if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
         }
      }
      t.textContent = e
   }
   var Uv = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

   function Qc(t, e, n) {
      var a = e.indexOf("--") === 0;
      n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Uv.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
   }

   function Xc(t, e, n) {
      if (e != null && typeof e != "object") throw Error(u(62));
      if (t = t.style, n != null) {
         for (var a in n) !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
         for (var r in e) a = e[r], e.hasOwnProperty(r) && n[r] !== a && Qc(t, r, a)
      } else
         for (var o in e) e.hasOwnProperty(o) && Qc(t, o, e[o])
   }

   function xs(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
         case "annotation-xml":
         case "color-profile":
         case "font-face":
         case "font-face-src":
         case "font-face-uri":
         case "font-face-format":
         case "font-face-name":
         case "missing-glyph":
            return !1;
         default:
            return !0
      }
   }
   var Hv = new Map([
         ["acceptCharset", "accept-charset"],
         ["htmlFor", "for"],
         ["httpEquiv", "http-equiv"],
         ["crossOrigin", "crossorigin"],
         ["accentHeight", "accent-height"],
         ["alignmentBaseline", "alignment-baseline"],
         ["arabicForm", "arabic-form"],
         ["baselineShift", "baseline-shift"],
         ["capHeight", "cap-height"],
         ["clipPath", "clip-path"],
         ["clipRule", "clip-rule"],
         ["colorInterpolation", "color-interpolation"],
         ["colorInterpolationFilters", "color-interpolation-filters"],
         ["colorProfile", "color-profile"],
         ["colorRendering", "color-rendering"],
         ["dominantBaseline", "dominant-baseline"],
         ["enableBackground", "enable-background"],
         ["fillOpacity", "fill-opacity"],
         ["fillRule", "fill-rule"],
         ["floodColor", "flood-color"],
         ["floodOpacity", "flood-opacity"],
         ["fontFamily", "font-family"],
         ["fontSize", "font-size"],
         ["fontSizeAdjust", "font-size-adjust"],
         ["fontStretch", "font-stretch"],
         ["fontStyle", "font-style"],
         ["fontVariant", "font-variant"],
         ["fontWeight", "font-weight"],
         ["glyphName", "glyph-name"],
         ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
         ["glyphOrientationVertical", "glyph-orientation-vertical"],
         ["horizAdvX", "horiz-adv-x"],
         ["horizOriginX", "horiz-origin-x"],
         ["imageRendering", "image-rendering"],
         ["letterSpacing", "letter-spacing"],
         ["lightingColor", "lighting-color"],
         ["markerEnd", "marker-end"],
         ["markerMid", "marker-mid"],
         ["markerStart", "marker-start"],
         ["overlinePosition", "overline-position"],
         ["overlineThickness", "overline-thickness"],
         ["paintOrder", "paint-order"],
         ["panose-1", "panose-1"],
         ["pointerEvents", "pointer-events"],
         ["renderingIntent", "rendering-intent"],
         ["shapeRendering", "shape-rendering"],
         ["stopColor", "stop-color"],
         ["stopOpacity", "stop-opacity"],
         ["strikethroughPosition", "strikethrough-position"],
         ["strikethroughThickness", "strikethrough-thickness"],
         ["strokeDasharray", "stroke-dasharray"],
         ["strokeDashoffset", "stroke-dashoffset"],
         ["strokeLinecap", "stroke-linecap"],
         ["strokeLinejoin", "stroke-linejoin"],
         ["strokeMiterlimit", "stroke-miterlimit"],
         ["strokeOpacity", "stroke-opacity"],
         ["strokeWidth", "stroke-width"],
         ["textAnchor", "text-anchor"],
         ["textDecoration", "text-decoration"],
         ["textRendering", "text-rendering"],
         ["transformOrigin", "transform-origin"],
         ["underlinePosition", "underline-position"],
         ["underlineThickness", "underline-thickness"],
         ["unicodeBidi", "unicode-bidi"],
         ["unicodeRange", "unicode-range"],
         ["unitsPerEm", "units-per-em"],
         ["vAlphabetic", "v-alphabetic"],
         ["vHanging", "v-hanging"],
         ["vIdeographic", "v-ideographic"],
         ["vMathematical", "v-mathematical"],
         ["vectorEffect", "vector-effect"],
         ["vertAdvY", "vert-adv-y"],
         ["vertOriginX", "vert-origin-x"],
         ["vertOriginY", "vert-origin-y"],
         ["wordSpacing", "word-spacing"],
         ["writingMode", "writing-mode"],
         ["xmlnsXlink", "xmlns:xlink"],
         ["xHeight", "x-height"]
      ]),
      Lv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

   function Ci(t) {
      return Lv.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
   }
   var Ss = null;

   function ws(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
   }
   var Ml = null,
      _l = null;

   function Zc(t) {
      var e = Tl(t);
      if (e && (t = e.stateNode)) {
         var n = t[re] || null;
         t: switch (t = e.stateNode, e.type) {
            case "input":
               if (gs(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
                  for (n = t; n.parentNode;) n = n.parentNode;
                  for (n = n.querySelectorAll('input[name="' + Oe("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                     var a = n[e];
                     if (a !== t && a.form === t.form) {
                        var r = a[re] || null;
                        if (!r) throw Error(u(90));
                        gs(a, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                     }
                  }
                  for (e = 0; e < n.length; e++) a = n[e], a.form === t.form && Bc(a)
               }
               break t;
            case "textarea":
               Gc(t, n.value, n.defaultValue);
               break t;
            case "select":
               e = n.value, e != null && Nl(t, !!n.multiple, e, !1)
         }
      }
   }
   var Es = !1;

   function Kc(t, e, n) {
      if (Es) return t(e, n);
      Es = !0;
      try {
         var a = t(e);
         return a
      } finally {
         if (Es = !1, (Ml !== null || _l !== null) && (mr(), Ml && (e = Ml, t = _l, _l = Ml = null, Zc(e), t)))
            for (e = 0; e < t.length; e++) Zc(t[e])
      }
   }

   function ga(t, e) {
      var n = t.stateNode;
      if (n === null) return null;
      var a = n[re] || null;
      if (a === null) return null;
      n = a[e];
      t: switch (e) {
         case "onClick":
         case "onClickCapture":
         case "onDoubleClick":
         case "onDoubleClickCapture":
         case "onMouseDown":
         case "onMouseDownCapture":
         case "onMouseMove":
         case "onMouseMoveCapture":
         case "onMouseUp":
         case "onMouseUpCapture":
         case "onMouseEnter":
            (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
            break t;
         default:
            t = !1
      }
      if (t) return null;
      if (n && typeof n != "function") throw Error(u(231, e, typeof n));
      return n
   }
   var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
      Ts = !1;
   if (tn) try {
      var ba = {};
      Object.defineProperty(ba, "passive", {
         get: function () {
            Ts = !0
         }
      }), window.addEventListener("test", ba, ba), window.removeEventListener("test", ba, ba)
   } catch {
      Ts = !1
   }
   var En = null,
      As = null,
      Mi = null;

   function Pc() {
      if (Mi) return Mi;
      var t, e = As,
         n = e.length,
         a, r = "value" in En ? En.value : En.textContent,
         o = r.length;
      for (t = 0; t < n && e[t] === r[t]; t++);
      var d = n - t;
      for (a = 1; a <= d && e[n - a] === r[o - a]; a++);
      return Mi = r.slice(t, 1 < a ? 1 - a : void 0)
   }

   function _i(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
   }

   function Di() {
      return !0
   }

   function Jc() {
      return !1
   }

   function se(t) {
      function e(n, a, r, o, d) {
         this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = o, this.target = d, this.currentTarget = null;
         for (var p in t) t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(o) : o[p]);
         return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Di : Jc, this.isPropagationStopped = Jc, this
      }
      return b(e.prototype, {
         preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Di)
         },
         stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Di)
         },
         persist: function () {},
         isPersistent: Di
      }), e
   }
   var el = {
         eventPhase: 0,
         bubbles: 0,
         cancelable: 0,
         timeStamp: function (t) {
            return t.timeStamp || Date.now()
         },
         defaultPrevented: 0,
         isTrusted: 0
      },
      ji = se(el),
      xa = b({}, el, {
         view: 0,
         detail: 0
      }),
      kv = se(xa),
      Os, Rs, Sa, zi = b({}, xa, {
         screenX: 0,
         screenY: 0,
         clientX: 0,
         clientY: 0,
         pageX: 0,
         pageY: 0,
         ctrlKey: 0,
         shiftKey: 0,
         altKey: 0,
         metaKey: 0,
         getModifierState: Cs,
         button: 0,
         buttons: 0,
         relatedTarget: function (t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
         },
         movementX: function (t) {
            return "movementX" in t ? t.movementX : (t !== Sa && (Sa && t.type === "mousemove" ? (Os = t.screenX - Sa.screenX, Rs = t.screenY - Sa.screenY) : Rs = Os = 0, Sa = t), Os)
         },
         movementY: function (t) {
            return "movementY" in t ? t.movementY : Rs
         }
      }),
      Fc = se(zi),
      qv = b({}, zi, {
         dataTransfer: 0
      }),
      Bv = se(qv),
      Yv = b({}, xa, {
         relatedTarget: 0
      }),
      Ns = se(Yv),
      Gv = b({}, el, {
         animationName: 0,
         elapsedTime: 0,
         pseudoElement: 0
      }),
      Vv = se(Gv),
      Qv = b({}, el, {
         clipboardData: function (t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
         }
      }),
      Xv = se(Qv),
      Zv = b({}, el, {
         data: 0
      }),
      $c = se(Zv),
      Kv = {
         Esc: "Escape",
         Spacebar: " ",
         Left: "ArrowLeft",
         Up: "ArrowUp",
         Right: "ArrowRight",
         Down: "ArrowDown",
         Del: "Delete",
         Win: "OS",
         Menu: "ContextMenu",
         Apps: "ContextMenu",
         Scroll: "ScrollLock",
         MozPrintableKey: "Unidentified"
      },
      Pv = {
         8: "Backspace",
         9: "Tab",
         12: "Clear",
         13: "Enter",
         16: "Shift",
         17: "Control",
         18: "Alt",
         19: "Pause",
         20: "CapsLock",
         27: "Escape",
         32: " ",
         33: "PageUp",
         34: "PageDown",
         35: "End",
         36: "Home",
         37: "ArrowLeft",
         38: "ArrowUp",
         39: "ArrowRight",
         40: "ArrowDown",
         45: "Insert",
         46: "Delete",
         112: "F1",
         113: "F2",
         114: "F3",
         115: "F4",
         116: "F5",
         117: "F6",
         118: "F7",
         119: "F8",
         120: "F9",
         121: "F10",
         122: "F11",
         123: "F12",
         144: "NumLock",
         145: "ScrollLock",
         224: "Meta"
      },
      Jv = {
         Alt: "altKey",
         Control: "ctrlKey",
         Meta: "metaKey",
         Shift: "shiftKey"
      };

   function Fv(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = Jv[t]) ? !!e[t] : !1
   }

   function Cs() {
      return Fv
   }
   var $v = b({}, xa, {
         key: function (t) {
            if (t.key) {
               var e = Kv[t.key] || t.key;
               if (e !== "Unidentified") return e
            }
            return t.type === "keypress" ? (t = _i(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Pv[t.keyCode] || "Unidentified" : ""
         },
         code: 0,
         location: 0,
         ctrlKey: 0,
         shiftKey: 0,
         altKey: 0,
         metaKey: 0,
         repeat: 0,
         locale: 0,
         getModifierState: Cs,
         charCode: function (t) {
            return t.type === "keypress" ? _i(t) : 0
         },
         keyCode: function (t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
         },
         which: function (t) {
            return t.type === "keypress" ? _i(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
         }
      }),
      Wv = se($v),
      Iv = b({}, zi, {
         pointerId: 0,
         width: 0,
         height: 0,
         pressure: 0,
         tangentialPressure: 0,
         tiltX: 0,
         tiltY: 0,
         twist: 0,
         pointerType: 0,
         isPrimary: 0
      }),
      Wc = se(Iv),
      tg = b({}, xa, {
         touches: 0,
         targetTouches: 0,
         changedTouches: 0,
         altKey: 0,
         metaKey: 0,
         ctrlKey: 0,
         shiftKey: 0,
         getModifierState: Cs
      }),
      eg = se(tg),
      ng = b({}, el, {
         propertyName: 0,
         elapsedTime: 0,
         pseudoElement: 0
      }),
      lg = se(ng),
      ag = b({}, zi, {
         deltaX: function (t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
         },
         deltaY: function (t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
         },
         deltaZ: 0,
         deltaMode: 0
      }),
      ig = se(ag),
      rg = b({}, el, {
         newState: 0,
         oldState: 0
      }),
      sg = se(rg),
      og = [9, 13, 27, 32],
      Ms = tn && "CompositionEvent" in window,
      wa = null;
   tn && "documentMode" in document && (wa = document.documentMode);
   var ug = tn && "TextEvent" in window && !wa,
      Ic = tn && (!Ms || wa && 8 < wa && 11 >= wa),
      tf = " ",
      ef = !1;

   function nf(t, e) {
      switch (t) {
         case "keyup":
            return og.indexOf(e.keyCode) !== -1;
         case "keydown":
            return e.keyCode !== 229;
         case "keypress":
         case "mousedown":
         case "focusout":
            return !0;
         default:
            return !1
      }
   }

   function lf(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
   }
   var Dl = !1;

   function cg(t, e) {
      switch (t) {
         case "compositionend":
            return lf(e);
         case "keypress":
            return e.which !== 32 ? null : (ef = !0, tf);
         case "textInput":
            return t = e.data, t === tf && ef ? null : t;
         default:
            return null
      }
   }

   function fg(t, e) {
      if (Dl) return t === "compositionend" || !Ms && nf(t, e) ? (t = Pc(), Mi = As = En = null, Dl = !1, t) : null;
      switch (t) {
         case "paste":
            return null;
         case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
               if (e.char && 1 < e.char.length) return e.char;
               if (e.which) return String.fromCharCode(e.which)
            }
            return null;
         case "compositionend":
            return Ic && e.locale !== "ko" ? null : e.data;
         default:
            return null
      }
   }
   var dg = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
   };

   function af(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!dg[t.type] : e === "textarea"
   }

   function rf(t, e, n, a) {
      Ml ? _l ? _l.push(a) : _l = [a] : Ml = a, e = xr(e, "onChange"), 0 < e.length && (n = new ji("onChange", "change", null, n, a), t.push({
         event: n,
         listeners: e
      }))
   }
   var Ea = null,
      Ta = null;

   function hg(t) {
      Bh(t, 0)
   }

   function Ui(t) {
      var e = va(t);
      if (Bc(e)) return t
   }

   function sf(t, e) {
      if (t === "change") return e
   }
   var of = !1;
   if (tn) {
      var _s;
      if (tn) {
         var Ds = "oninput" in document;
         if (!Ds) {
            var uf = document.createElement("div");
            uf.setAttribute("oninput", "return;"), Ds = typeof uf.oninput == "function"
         }
         _s = Ds
      } else _s = !1; of = _s && (!document.documentMode || 9 < document.documentMode)
   }

   function cf() {
      Ea && (Ea.detachEvent("onpropertychange", ff), Ta = Ea = null)
   }

   function ff(t) {
      if (t.propertyName === "value" && Ui(Ta)) {
         var e = [];
         rf(e, Ta, t, ws(t)), Kc(hg, e)
      }
   }

   function mg(t, e, n) {
      t === "focusin" ? (cf(), Ea = e, Ta = n, Ea.attachEvent("onpropertychange", ff)) : t === "focusout" && cf()
   }

   function pg(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ui(Ta)
   }

   function yg(t, e) {
      if (t === "click") return Ui(e)
   }

   function vg(t, e) {
      if (t === "input" || t === "change") return Ui(e)
   }

   function gg(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
   }
   var pe = typeof Object.is == "function" ? Object.is : gg;

   function Aa(t, e) {
      if (pe(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
      var n = Object.keys(t),
         a = Object.keys(e);
      if (n.length !== a.length) return !1;
      for (a = 0; a < n.length; a++) {
         var r = n[a];
         if (!Ve.call(e, r) || !pe(t[r], e[r])) return !1
      }
      return !0
   }

   function df(t) {
      for (; t && t.firstChild;) t = t.firstChild;
      return t
   }

   function hf(t, e) {
      var n = df(t);
      t = 0;
      for (var a; n;) {
         if (n.nodeType === 3) {
            if (a = t + n.textContent.length, t <= e && a >= e) return {
               node: n,
               offset: e - t
            };
            t = a
         }
         t: {
            for (; n;) {
               if (n.nextSibling) {
                  n = n.nextSibling;
                  break t
               }
               n = n.parentNode
            }
            n = void 0
         }
         n = df(n)
      }
   }

   function mf(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? mf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
   }

   function pf(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = Ni(t.document); e instanceof t.HTMLIFrameElement;) {
         try {
            var n = typeof e.contentWindow.location.href == "string"
         } catch {
            n = !1
         }
         if (n) t = e.contentWindow;
         else break;
         e = Ni(t.document)
      }
      return e
   }

   function js(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
   }
   var bg = tn && "documentMode" in document && 11 >= document.documentMode,
      jl = null,
      zs = null,
      Oa = null,
      Us = !1;

   function yf(t, e, n) {
      var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Us || jl == null || jl !== Ni(a) || (a = jl, "selectionStart" in a && js(a) ? a = {
         start: a.selectionStart,
         end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
         anchorNode: a.anchorNode,
         anchorOffset: a.anchorOffset,
         focusNode: a.focusNode,
         focusOffset: a.focusOffset
      }), Oa && Aa(Oa, a) || (Oa = a, a = xr(zs, "onSelect"), 0 < a.length && (e = new ji("onSelect", "select", null, e, n), t.push({
         event: e,
         listeners: a
      }), e.target = jl)))
   }

   function nl(t, e) {
      var n = {};
      return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
   }
   var zl = {
         animationend: nl("Animation", "AnimationEnd"),
         animationiteration: nl("Animation", "AnimationIteration"),
         animationstart: nl("Animation", "AnimationStart"),
         transitionrun: nl("Transition", "TransitionRun"),
         transitionstart: nl("Transition", "TransitionStart"),
         transitioncancel: nl("Transition", "TransitionCancel"),
         transitionend: nl("Transition", "TransitionEnd")
      },
      Hs = {},
      vf = {};
   tn && (vf = document.createElement("div").style, "AnimationEvent" in window || (delete zl.animationend.animation, delete zl.animationiteration.animation, delete zl.animationstart.animation), "TransitionEvent" in window || delete zl.transitionend.transition);

   function ll(t) {
      if (Hs[t]) return Hs[t];
      if (!zl[t]) return t;
      var e = zl[t],
         n;
      for (n in e)
         if (e.hasOwnProperty(n) && n in vf) return Hs[t] = e[n];
      return t
   }
   var gf = ll("animationend"),
      bf = ll("animationiteration"),
      xf = ll("animationstart"),
      xg = ll("transitionrun"),
      Sg = ll("transitionstart"),
      wg = ll("transitioncancel"),
      Sf = ll("transitionend"),
      wf = new Map,
      Ls = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
   Ls.push("scrollEnd");

   function He(t, e) {
      wf.set(t, e), tl(e, [t])
   }
   var Ef = new WeakMap;

   function Re(t, e) {
      if (typeof t == "object" && t !== null) {
         var n = Ef.get(t);
         return n !== void 0 ? n : (e = {
            value: t,
            source: e,
            stack: kc(e)
         }, Ef.set(t, e), e)
      }
      return {
         value: t,
         source: e,
         stack: kc(e)
      }
   }
   var Ne = [],
      Ul = 0,
      ks = 0;

   function Hi() {
      for (var t = Ul, e = ks = Ul = 0; e < t;) {
         var n = Ne[e];
         Ne[e++] = null;
         var a = Ne[e];
         Ne[e++] = null;
         var r = Ne[e];
         Ne[e++] = null;
         var o = Ne[e];
         if (Ne[e++] = null, a !== null && r !== null) {
            var d = a.pending;
            d === null ? r.next = r : (r.next = d.next, d.next = r), a.pending = r
         }
         o !== 0 && Tf(n, r, o)
      }
   }

   function Li(t, e, n, a) {
      Ne[Ul++] = t, Ne[Ul++] = e, Ne[Ul++] = n, Ne[Ul++] = a, ks |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
   }

   function qs(t, e, n, a) {
      return Li(t, e, n, a), ki(t)
   }

   function Hl(t, e) {
      return Li(t, null, null, e), ki(t)
   }

   function Tf(t, e, n) {
      t.lanes |= n;
      var a = t.alternate;
      a !== null && (a.lanes |= n);
      for (var r = !1, o = t.return; o !== null;) o.childLanes |= n, a = o.alternate, a !== null && (a.childLanes |= n), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (r = !0)), t = o, o = o.return;
      return t.tag === 3 ? (o = t.stateNode, r && e !== null && (r = 31 - me(n), t = o.hiddenUpdates, a = t[r], a === null ? t[r] = [e] : a.push(e), e.lane = n | 536870912), o) : null
   }

   function ki(t) {
      if (50 < $a) throw $a = 0, Zo = null, Error(u(185));
      for (var e = t.return; e !== null;) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null
   }
   var Ll = {};

   function Eg(t, e, n, a) {
      this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
   }

   function ye(t, e, n, a) {
      return new Eg(t, e, n, a)
   }

   function Bs(t) {
      return t = t.prototype, !(!t || !t.isReactComponent)
   }

   function en(t, e) {
      var n = t.alternate;
      return n === null ? (n = ye(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
         lanes: e.lanes,
         firstContext: e.firstContext
      }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n
   }

   function Af(t, e) {
      t.flags &= 65011714;
      var n = t.alternate;
      return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
         lanes: e.lanes,
         firstContext: e.firstContext
      }), t
   }

   function qi(t, e, n, a, r, o) {
      var d = 0;
      if (a = t, typeof t == "function") Bs(t) && (d = 1);
      else if (typeof t == "string") d = Ab(t, n, lt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
         case ut:
            return t = ye(31, n, e, r), t.elementType = ut, t.lanes = o, t;
         case z:
            return al(n.children, r, o, e);
         case R:
            d = 8, r |= 24;
            break;
         case N:
            return t = ye(12, n, e, r | 2), t.elementType = N, t.lanes = o, t;
         case H:
            return t = ye(13, n, e, r), t.elementType = H, t.lanes = o, t;
         case P:
            return t = ye(19, n, e, r), t.elementType = P, t.lanes = o, t;
         default:
            if (typeof t == "object" && t !== null) switch (t.$$typeof) {
               case B:
               case V:
                  d = 10;
                  break t;
               case X:
                  d = 9;
                  break t;
               case k:
                  d = 11;
                  break t;
               case $:
                  d = 14;
                  break t;
               case K:
                  d = 16, a = null;
                  break t
            }
            d = 29, n = Error(u(130, t === null ? "null" : typeof t, "")), a = null
      }
      return e = ye(d, n, e, r), e.elementType = t, e.type = a, e.lanes = o, e
   }

   function al(t, e, n, a) {
      return t = ye(7, t, a, e), t.lanes = n, t
   }

   function Ys(t, e, n) {
      return t = ye(6, t, null, e), t.lanes = n, t
   }

   function Gs(t, e, n) {
      return e = ye(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
         containerInfo: t.containerInfo,
         pendingChildren: null,
         implementation: t.implementation
      }, e
   }
   var kl = [],
      ql = 0,
      Bi = null,
      Yi = 0,
      Ce = [],
      Me = 0,
      il = null,
      nn = 1,
      ln = "";

   function rl(t, e) {
      kl[ql++] = Yi, kl[ql++] = Bi, Bi = t, Yi = e
   }

   function Of(t, e, n) {
      Ce[Me++] = nn, Ce[Me++] = ln, Ce[Me++] = il, il = t;
      var a = nn;
      t = ln;
      var r = 32 - me(a) - 1;
      a &= ~(1 << r), n += 1;
      var o = 32 - me(e) + r;
      if (30 < o) {
         var d = r - r % 5;
         o = (a & (1 << d) - 1).toString(32), a >>= d, r -= d, nn = 1 << 32 - me(e) + r | n << r | a, ln = o + t
      } else nn = 1 << o | n << r | a, ln = t
   }

   function Vs(t) {
      t.return !== null && (rl(t, 1), Of(t, 1, 0))
   }

   function Qs(t) {
      for (; t === Bi;) Bi = kl[--ql], kl[ql] = null, Yi = kl[--ql], kl[ql] = null;
      for (; t === il;) il = Ce[--Me], Ce[Me] = null, ln = Ce[--Me], Ce[Me] = null, nn = Ce[--Me], Ce[Me] = null
   }
   var ie = null,
      Lt = null,
      Tt = !1,
      sl = null,
      Xe = !1,
      Xs = Error(u(519));

   function ol(t) {
      var e = Error(u(418, ""));
      throw Ca(Re(e, t)), Xs
   }

   function Rf(t) {
      var e = t.stateNode,
         n = t.type,
         a = t.memoizedProps;
      switch (e[ee] = t, e[re] = a, n) {
         case "dialog":
            bt("cancel", e), bt("close", e);
            break;
         case "iframe":
         case "object":
         case "embed":
            bt("load", e);
            break;
         case "video":
         case "audio":
            for (n = 0; n < Ia.length; n++) bt(Ia[n], e);
            break;
         case "source":
            bt("error", e);
            break;
         case "img":
         case "image":
         case "link":
            bt("error", e), bt("load", e);
            break;
         case "details":
            bt("toggle", e);
            break;
         case "input":
            bt("invalid", e), Yc(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Ri(e);
            break;
         case "select":
            bt("invalid", e);
            break;
         case "textarea":
            bt("invalid", e), Vc(e, a.value, a.defaultValue, a.children), Ri(e)
      }
      n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Qh(e.textContent, n) ? (a.popover != null && (bt("beforetoggle", e), bt("toggle", e)), a.onScroll != null && bt("scroll", e), a.onScrollEnd != null && bt("scrollend", e), a.onClick != null && (e.onclick = Sr), e = !0) : e = !1, e || ol(t)
   }

   function Nf(t) {
      for (ie = t.return; ie;) switch (ie.tag) {
         case 5:
         case 13:
            Xe = !1;
            return;
         case 27:
         case 3:
            Xe = !0;
            return;
         default:
            ie = ie.return
      }
   }

   function Ra(t) {
      if (t !== ie) return !1;
      if (!Tt) return Nf(t), Tt = !0, !1;
      var e = t.tag,
         n;
      if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || ou(t.type, t.memoizedProps)), n = !n), n && Lt && ol(t), Nf(t), e === 13) {
         if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
         t: {
            for (t = t.nextSibling, e = 0; t;) {
               if (t.nodeType === 8)
                  if (n = t.data, n === "/$") {
                     if (e === 0) {
                        Lt = ke(t.nextSibling);
                        break t
                     }
                     e--
                  } else n !== "$" && n !== "$!" && n !== "$?" || e++;
               t = t.nextSibling
            }
            Lt = null
         }
      } else e === 27 ? (e = Lt, qn(t.type) ? (t = du, du = null, Lt = t) : Lt = e) : Lt = ie ? ke(t.stateNode.nextSibling) : null;
      return !0
   }

   function Na() {
      Lt = ie = null, Tt = !1
   }

   function Cf() {
      var t = sl;
      return t !== null && (ce === null ? ce = t : ce.push.apply(ce, t), sl = null), t
   }

   function Ca(t) {
      sl === null ? sl = [t] : sl.push(t)
   }
   var Zs = G(null),
      ul = null,
      an = null;

   function Tn(t, e, n) {
      J(Zs, e._currentValue), e._currentValue = n
   }

   function rn(t) {
      t._currentValue = Zs.current, F(Zs)
   }

   function Ks(t, e, n) {
      for (; t !== null;) {
         var a = t.alternate;
         if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
         t = t.return
      }
   }

   function Ps(t, e, n, a) {
      var r = t.child;
      for (r !== null && (r.return = t); r !== null;) {
         var o = r.dependencies;
         if (o !== null) {
            var d = r.child;
            o = o.firstContext;
            t: for (; o !== null;) {
               var p = o;
               o = r;
               for (var S = 0; S < e.length; S++)
                  if (p.context === e[S]) {
                     o.lanes |= n, p = o.alternate, p !== null && (p.lanes |= n), Ks(o.return, n, t), a || (d = null);
                     break t
                  } o = p.next
            }
         } else if (r.tag === 18) {
            if (d = r.return, d === null) throw Error(u(341));
            d.lanes |= n, o = d.alternate, o !== null && (o.lanes |= n), Ks(d, n, t), d = null
         } else d = r.child;
         if (d !== null) d.return = r;
         else
            for (d = r; d !== null;) {
               if (d === t) {
                  d = null;
                  break
               }
               if (r = d.sibling, r !== null) {
                  r.return = d.return, d = r;
                  break
               }
               d = d.return
            }
         r = d
      }
   }

   function Ma(t, e, n, a) {
      t = null;
      for (var r = e, o = !1; r !== null;) {
         if (!o) {
            if ((r.flags & 524288) !== 0) o = !0;
            else if ((r.flags & 262144) !== 0) break
         }
         if (r.tag === 10) {
            var d = r.alternate;
            if (d === null) throw Error(u(387));
            if (d = d.memoizedProps, d !== null) {
               var p = r.type;
               pe(r.pendingProps.value, d.value) || (t !== null ? t.push(p) : t = [p])
            }
         } else if (r === zt.current) {
            if (d = r.alternate, d === null) throw Error(u(387));
            d.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(ii) : t = [ii])
         }
         r = r.return
      }
      t !== null && Ps(e, t, n, a), e.flags |= 262144
   }

   function Gi(t) {
      for (t = t.firstContext; t !== null;) {
         if (!pe(t.context._currentValue, t.memoizedValue)) return !0;
         t = t.next
      }
      return !1
   }

   function cl(t) {
      ul = t, an = null, t = t.dependencies, t !== null && (t.firstContext = null)
   }

   function ne(t) {
      return Mf(ul, t)
   }

   function Vi(t, e) {
      return ul === null && cl(t), Mf(t, e)
   }

   function Mf(t, e) {
      var n = e._currentValue;
      if (e = {
            context: e,
            memoizedValue: n,
            next: null
         }, an === null) {
         if (t === null) throw Error(u(308));
         an = e, t.dependencies = {
            lanes: 0,
            firstContext: e
         }, t.flags |= 524288
      } else an = an.next = e;
      return n
   }
   var Tg = typeof AbortController < "u" ? AbortController : function () {
         var t = [],
            e = this.signal = {
               aborted: !1,
               addEventListener: function (n, a) {
                  t.push(a)
               }
            };
         this.abort = function () {
            e.aborted = !0, t.forEach(function (n) {
               return n()
            })
         }
      },
      Ag = l.unstable_scheduleCallback,
      Og = l.unstable_NormalPriority,
      Vt = {
         $$typeof: V,
         Consumer: null,
         Provider: null,
         _currentValue: null,
         _currentValue2: null,
         _threadCount: 0
      };

   function Js() {
      return {
         controller: new Tg,
         data: new Map,
         refCount: 0
      }
   }

   function _a(t) {
      t.refCount--, t.refCount === 0 && Ag(Og, function () {
         t.controller.abort()
      })
   }
   var Da = null,
      Fs = 0,
      Bl = 0,
      Yl = null;

   function Rg(t, e) {
      if (Da === null) {
         var n = Da = [];
         Fs = 0, Bl = Io(), Yl = {
            status: "pending",
            value: void 0,
            then: function (a) {
               n.push(a)
            }
         }
      }
      return Fs++, e.then(_f, _f), e
   }

   function _f() {
      if (--Fs === 0 && Da !== null) {
         Yl !== null && (Yl.status = "fulfilled");
         var t = Da;
         Da = null, Bl = 0, Yl = null;
         for (var e = 0; e < t.length; e++)(0, t[e])()
      }
   }

   function Ng(t, e) {
      var n = [],
         a = {
            status: "pending",
            value: null,
            reason: null,
            then: function (r) {
               n.push(r)
            }
         };
      return t.then(function () {
         a.status = "fulfilled", a.value = e;
         for (var r = 0; r < n.length; r++)(0, n[r])(e)
      }, function (r) {
         for (a.status = "rejected", a.reason = r, r = 0; r < n.length; r++)(0, n[r])(void 0)
      }), a
   }
   var Df = M.S;
   M.S = function (t, e) {
      typeof e == "object" && e !== null && typeof e.then == "function" && Rg(t, e), Df !== null && Df(t, e)
   };
   var fl = G(null);

   function $s() {
      var t = fl.current;
      return t !== null ? t : jt.pooledCache
   }

   function Qi(t, e) {
      e === null ? J(fl, fl.current) : J(fl, e.pool)
   }

   function jf() {
      var t = $s();
      return t === null ? null : {
         parent: Vt._currentValue,
         pool: t
      }
   }
   var ja = Error(u(460)),
      zf = Error(u(474)),
      Xi = Error(u(542)),
      Ws = {
         then: function () {}
      };

   function Uf(t) {
      return t = t.status, t === "fulfilled" || t === "rejected"
   }

   function Zi() {}

   function Hf(t, e, n) {
      switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Zi, Zi), e = n), e.status) {
         case "fulfilled":
            return e.value;
         case "rejected":
            throw t = e.reason, kf(t), t;
         default:
            if (typeof e.status == "string") e.then(Zi, Zi);
            else {
               if (t = jt, t !== null && 100 < t.shellSuspendCounter) throw Error(u(482));
               t = e, t.status = "pending", t.then(function (a) {
                  if (e.status === "pending") {
                     var r = e;
                     r.status = "fulfilled", r.value = a
                  }
               }, function (a) {
                  if (e.status === "pending") {
                     var r = e;
                     r.status = "rejected", r.reason = a
                  }
               })
            }
            switch (e.status) {
               case "fulfilled":
                  return e.value;
               case "rejected":
                  throw t = e.reason, kf(t), t
            }
            throw za = e, ja
      }
   }
   var za = null;

   function Lf() {
      if (za === null) throw Error(u(459));
      var t = za;
      return za = null, t
   }

   function kf(t) {
      if (t === ja || t === Xi) throw Error(u(483))
   }
   var An = !1;

   function Is(t) {
      t.updateQueue = {
         baseState: t.memoizedState,
         firstBaseUpdate: null,
         lastBaseUpdate: null,
         shared: {
            pending: null,
            lanes: 0,
            hiddenCallbacks: null
         },
         callbacks: null
      }
   }

   function to(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
         baseState: t.baseState,
         firstBaseUpdate: t.firstBaseUpdate,
         lastBaseUpdate: t.lastBaseUpdate,
         shared: t.shared,
         callbacks: null
      })
   }

   function On(t) {
      return {
         lane: t,
         tag: 0,
         payload: null,
         callback: null,
         next: null
      }
   }

   function Rn(t, e, n) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (Rt & 2) !== 0) {
         var r = a.pending;
         return r === null ? e.next = e : (e.next = r.next, r.next = e), a.pending = e, e = ki(t), Tf(t, null, n), e
      }
      return Li(t, a, e, n), ki(t)
   }

   function Ua(t, e, n) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
         var a = e.lanes;
         a &= t.pendingLanes, n |= a, e.lanes = n, Mc(t, n)
      }
   }

   function eo(t, e) {
      var n = t.updateQueue,
         a = t.alternate;
      if (a !== null && (a = a.updateQueue, n === a)) {
         var r = null,
            o = null;
         if (n = n.firstBaseUpdate, n !== null) {
            do {
               var d = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null
               };
               o === null ? r = o = d : o = o.next = d, n = n.next
            } while (n !== null);
            o === null ? r = o = e : o = o.next = e
         } else r = o = e;
         n = {
            baseState: a.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: o,
            shared: a.shared,
            callbacks: a.callbacks
         }, t.updateQueue = n;
         return
      }
      t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
   }
   var no = !1;

   function Ha() {
      if (no) {
         var t = Yl;
         if (t !== null) throw t
      }
   }

   function La(t, e, n, a) {
      no = !1;
      var r = t.updateQueue;
      An = !1;
      var o = r.firstBaseUpdate,
         d = r.lastBaseUpdate,
         p = r.shared.pending;
      if (p !== null) {
         r.shared.pending = null;
         var S = p,
            _ = S.next;
         S.next = null, d === null ? o = _ : d.next = _, d = S;
         var L = t.alternate;
         L !== null && (L = L.updateQueue, p = L.lastBaseUpdate, p !== d && (p === null ? L.firstBaseUpdate = _ : p.next = _, L.lastBaseUpdate = S))
      }
      if (o !== null) {
         var Y = r.baseState;
         d = 0, L = _ = S = null, p = o;
         do {
            var j = p.lane & -536870913,
               U = j !== p.lane;
            if (U ? (St & j) === j : (a & j) === j) {
               j !== 0 && j === Bl && (no = !0), L !== null && (L = L.next = {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null
               });
               t: {
                  var ct = t,
                     rt = p;j = e;
                  var _t = n;
                  switch (rt.tag) {
                     case 1:
                        if (ct = rt.payload, typeof ct == "function") {
                           Y = ct.call(_t, Y, j);
                           break t
                        }
                        Y = ct;
                        break t;
                     case 3:
                        ct.flags = ct.flags & -65537 | 128;
                     case 0:
                        if (ct = rt.payload, j = typeof ct == "function" ? ct.call(_t, Y, j) : ct, j == null) break t;
                        Y = b({}, Y, j);
                        break t;
                     case 2:
                        An = !0
                  }
               }
               j = p.callback, j !== null && (t.flags |= 64, U && (t.flags |= 8192), U = r.callbacks, U === null ? r.callbacks = [j] : U.push(j))
            } else U = {
               lane: j,
               tag: p.tag,
               payload: p.payload,
               callback: p.callback,
               next: null
            }, L === null ? (_ = L = U, S = Y) : L = L.next = U, d |= j;
            if (p = p.next, p === null) {
               if (p = r.shared.pending, p === null) break;
               U = p, p = U.next, U.next = null, r.lastBaseUpdate = U, r.shared.pending = null
            }
         } while (!0);
         L === null && (S = Y), r.baseState = S, r.firstBaseUpdate = _, r.lastBaseUpdate = L, o === null && (r.shared.lanes = 0), Un |= d, t.lanes = d, t.memoizedState = Y
      }
   }

   function qf(t, e) {
      if (typeof t != "function") throw Error(u(191, t));
      t.call(e)
   }

   function Bf(t, e) {
      var n = t.callbacks;
      if (n !== null)
         for (t.callbacks = null, t = 0; t < n.length; t++) qf(n[t], e)
   }
   var Gl = G(null),
      Ki = G(0);

   function Yf(t, e) {
      t = hn, J(Ki, t), J(Gl, e), hn = t | e.baseLanes
   }

   function lo() {
      J(Ki, hn), J(Gl, Gl.current)
   }

   function ao() {
      hn = Ki.current, F(Gl), F(Ki)
   }
   var Nn = 0,
      mt = null,
      Ct = null,
      Yt = null,
      Pi = !1,
      Vl = !1,
      dl = !1,
      Ji = 0,
      ka = 0,
      Ql = null,
      Cg = 0;

   function qt() {
      throw Error(u(321))
   }

   function io(t, e) {
      if (e === null) return !1;
      for (var n = 0; n < e.length && n < t.length; n++)
         if (!pe(t[n], e[n])) return !1;
      return !0
   }

   function ro(t, e, n, a, r, o) {
      return Nn = o, mt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? Td : Ad, dl = !1, o = n(a, r), dl = !1, Vl && (o = Vf(e, n, a, r)), Gf(t), o
   }

   function Gf(t) {
      M.H = er;
      var e = Ct !== null && Ct.next !== null;
      if (Nn = 0, Yt = Ct = mt = null, Pi = !1, ka = 0, Ql = null, e) throw Error(u(300));
      t === null || Pt || (t = t.dependencies, t !== null && Gi(t) && (Pt = !0))
   }

   function Vf(t, e, n, a) {
      mt = t;
      var r = 0;
      do {
         if (Vl && (Ql = null), ka = 0, Vl = !1, 25 <= r) throw Error(u(301));
         if (r += 1, Yt = Ct = null, t.updateQueue != null) {
            var o = t.updateQueue;
            o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0)
         }
         M.H = Hg, o = e(n, a)
      } while (Vl);
      return o
   }

   function Mg() {
      var t = M.H,
         e = t.useState()[0];
      return e = typeof e.then == "function" ? qa(e) : e, t = t.useState()[0], (Ct !== null ? Ct.memoizedState : null) !== t && (mt.flags |= 1024), e
   }

   function so() {
      var t = Ji !== 0;
      return Ji = 0, t
   }

   function oo(t, e, n) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n
   }

   function uo(t) {
      if (Pi) {
         for (t = t.memoizedState; t !== null;) {
            var e = t.queue;
            e !== null && (e.pending = null), t = t.next
         }
         Pi = !1
      }
      Nn = 0, Yt = Ct = mt = null, Vl = !1, ka = Ji = 0, Ql = null
   }

   function oe() {
      var t = {
         memoizedState: null,
         baseState: null,
         baseQueue: null,
         queue: null,
         next: null
      };
      return Yt === null ? mt.memoizedState = Yt = t : Yt = Yt.next = t, Yt
   }

   function Gt() {
      if (Ct === null) {
         var t = mt.alternate;
         t = t !== null ? t.memoizedState : null
      } else t = Ct.next;
      var e = Yt === null ? mt.memoizedState : Yt.next;
      if (e !== null) Yt = e, Ct = t;
      else {
         if (t === null) throw mt.alternate === null ? Error(u(467)) : Error(u(310));
         Ct = t, t = {
            memoizedState: Ct.memoizedState,
            baseState: Ct.baseState,
            baseQueue: Ct.baseQueue,
            queue: Ct.queue,
            next: null
         }, Yt === null ? mt.memoizedState = Yt = t : Yt = Yt.next = t
      }
      return Yt
   }

   function co() {
      return {
         lastEffect: null,
         events: null,
         stores: null,
         memoCache: null
      }
   }

   function qa(t) {
      var e = ka;
      return ka += 1, Ql === null && (Ql = []), t = Hf(Ql, t, e), e = mt, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? Td : Ad), t
   }

   function Fi(t) {
      if (t !== null && typeof t == "object") {
         if (typeof t.then == "function") return qa(t);
         if (t.$$typeof === V) return ne(t)
      }
      throw Error(u(438, String(t)))
   }

   function fo(t) {
      var e = null,
         n = mt.updateQueue;
      if (n !== null && (e = n.memoCache), e == null) {
         var a = mt.alternate;
         a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
            data: a.data.map(function (r) {
               return r.slice()
            }),
            index: 0
         })))
      }
      if (e == null && (e = {
            data: [],
            index: 0
         }), n === null && (n = co(), mt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
         for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = vt;
      return e.index++, n
   }

   function sn(t, e) {
      return typeof e == "function" ? e(t) : e
   }

   function $i(t) {
      var e = Gt();
      return ho(e, Ct, t)
   }

   function ho(t, e, n) {
      var a = t.queue;
      if (a === null) throw Error(u(311));
      a.lastRenderedReducer = n;
      var r = t.baseQueue,
         o = a.pending;
      if (o !== null) {
         if (r !== null) {
            var d = r.next;
            r.next = o.next, o.next = d
         }
         e.baseQueue = r = o, a.pending = null
      }
      if (o = t.baseState, r === null) t.memoizedState = o;
      else {
         e = r.next;
         var p = d = null,
            S = null,
            _ = e,
            L = !1;
         do {
            var Y = _.lane & -536870913;
            if (Y !== _.lane ? (St & Y) === Y : (Nn & Y) === Y) {
               var j = _.revertLane;
               if (j === 0) S !== null && (S = S.next = {
                  lane: 0,
                  revertLane: 0,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null
               }), Y === Bl && (L = !0);
               else if ((Nn & j) === j) {
                  _ = _.next, j === Bl && (L = !0);
                  continue
               } else Y = {
                  lane: 0,
                  revertLane: _.revertLane,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null
               }, S === null ? (p = S = Y, d = o) : S = S.next = Y, mt.lanes |= j, Un |= j;
               Y = _.action, dl && n(o, Y), o = _.hasEagerState ? _.eagerState : n(o, Y)
            } else j = {
               lane: Y,
               revertLane: _.revertLane,
               action: _.action,
               hasEagerState: _.hasEagerState,
               eagerState: _.eagerState,
               next: null
            }, S === null ? (p = S = j, d = o) : S = S.next = j, mt.lanes |= Y, Un |= Y;
            _ = _.next
         } while (_ !== null && _ !== e);
         if (S === null ? d = o : S.next = p, !pe(o, t.memoizedState) && (Pt = !0, L && (n = Yl, n !== null))) throw n;
         t.memoizedState = o, t.baseState = d, t.baseQueue = S, a.lastRenderedState = o
      }
      return r === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
   }

   function mo(t) {
      var e = Gt(),
         n = e.queue;
      if (n === null) throw Error(u(311));
      n.lastRenderedReducer = t;
      var a = n.dispatch,
         r = n.pending,
         o = e.memoizedState;
      if (r !== null) {
         n.pending = null;
         var d = r = r.next;
         do o = t(o, d.action), d = d.next; while (d !== r);
         pe(o, e.memoizedState) || (Pt = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o
      }
      return [o, a]
   }

   function Qf(t, e, n) {
      var a = mt,
         r = Gt(),
         o = Tt;
      if (o) {
         if (n === void 0) throw Error(u(407));
         n = n()
      } else n = e();
      var d = !pe((Ct || r).memoizedState, n);
      d && (r.memoizedState = n, Pt = !0), r = r.queue;
      var p = Kf.bind(null, a, r, t);
      if (Ba(2048, 8, p, [t]), r.getSnapshot !== e || d || Yt !== null && Yt.memoizedState.tag & 1) {
         if (a.flags |= 2048, Xl(9, Wi(), Zf.bind(null, a, r, n, e), null), jt === null) throw Error(u(349));
         o || (Nn & 124) !== 0 || Xf(a, e, n)
      }
      return n
   }

   function Xf(t, e, n) {
      t.flags |= 16384, t = {
         getSnapshot: e,
         value: n
      }, e = mt.updateQueue, e === null ? (e = co(), mt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
   }

   function Zf(t, e, n, a) {
      e.value = n, e.getSnapshot = a, Pf(e) && Jf(t)
   }

   function Kf(t, e, n) {
      return n(function () {
         Pf(e) && Jf(t)
      })
   }

   function Pf(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
         var n = e();
         return !pe(t, n)
      } catch {
         return !0
      }
   }

   function Jf(t) {
      var e = Hl(t, 2);
      e !== null && Se(e, t, 2)
   }

   function po(t) {
      var e = oe();
      if (typeof t == "function") {
         var n = t;
         if (t = n(), dl) {
            Sn(!0);
            try {
               n()
            } finally {
               Sn(!1)
            }
         }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
         pending: null,
         lanes: 0,
         dispatch: null,
         lastRenderedReducer: sn,
         lastRenderedState: t
      }, e
   }

   function Ff(t, e, n, a) {
      return t.baseState = n, ho(t, Ct, typeof a == "function" ? a : sn)
   }

   function _g(t, e, n, a, r) {
      if (tr(t)) throw Error(u(485));
      if (t = e.action, t !== null) {
         var o = {
            payload: r,
            action: t,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function (d) {
               o.listeners.push(d)
            }
         };
         M.T !== null ? n(!0) : o.isTransition = !1, a(o), n = e.pending, n === null ? (o.next = e.pending = o, $f(e, o)) : (o.next = n.next, e.pending = n.next = o)
      }
   }

   function $f(t, e) {
      var n = e.action,
         a = e.payload,
         r = t.state;
      if (e.isTransition) {
         var o = M.T,
            d = {};
         M.T = d;
         try {
            var p = n(r, a),
               S = M.S;
            S !== null && S(d, p), Wf(t, e, p)
         } catch (_) {
            yo(t, e, _)
         } finally {
            M.T = o
         }
      } else try {
         o = n(r, a), Wf(t, e, o)
      } catch (_) {
         yo(t, e, _)
      }
   }

   function Wf(t, e, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function (a) {
         If(t, e, a)
      }, function (a) {
         return yo(t, e, a)
      }) : If(t, e, n)
   }

   function If(t, e, n) {
      e.status = "fulfilled", e.value = n, td(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, $f(t, n)))
   }

   function yo(t, e, n) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
         a = a.next;
         do e.status = "rejected", e.reason = n, td(e), e = e.next; while (e !== a)
      }
      t.action = null
   }

   function td(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++)(0, t[e])()
   }

   function ed(t, e) {
      return e
   }

   function nd(t, e) {
      if (Tt) {
         var n = jt.formState;
         if (n !== null) {
            t: {
               var a = mt;
               if (Tt) {
                  if (Lt) {
                     e: {
                        for (var r = Lt, o = Xe; r.nodeType !== 8;) {
                           if (!o) {
                              r = null;
                              break e
                           }
                           if (r = ke(r.nextSibling), r === null) {
                              r = null;
                              break e
                           }
                        }
                        o = r.data,
                        r = o === "F!" || o === "F" ? r : null
                     }
                     if (r) {
                        Lt = ke(r.nextSibling), a = r.data === "F!";
                        break t
                     }
                  }
                  ol(a)
               }
               a = !1
            }
            a && (e = n[0])
         }
      }
      return n = oe(), n.memoizedState = n.baseState = e, a = {
         pending: null,
         lanes: 0,
         dispatch: null,
         lastRenderedReducer: ed,
         lastRenderedState: e
      }, n.queue = a, n = Sd.bind(null, mt, a), a.dispatch = n, a = po(!1), o = So.bind(null, mt, !1, a.queue), a = oe(), r = {
         state: e,
         dispatch: null,
         action: t,
         pending: null
      }, a.queue = r, n = _g.bind(null, mt, r, o, n), r.dispatch = n, a.memoizedState = t, [e, n, !1]
   }

   function ld(t) {
      var e = Gt();
      return ad(e, Ct, t)
   }

   function ad(t, e, n) {
      if (e = ho(t, e, ed)[0], t = $i(sn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
         var a = qa(e)
      } catch (d) {
         throw d === ja ? Xi : d
      } else a = e;
      e = Gt();
      var r = e.queue,
         o = r.dispatch;
      return n !== e.memoizedState && (mt.flags |= 2048, Xl(9, Wi(), Dg.bind(null, r, n), null)), [a, o, t]
   }

   function Dg(t, e) {
      t.action = e
   }

   function id(t) {
      var e = Gt(),
         n = Ct;
      if (n !== null) return ad(e, n, t);
      Gt(), e = e.memoizedState, n = Gt();
      var a = n.queue.dispatch;
      return n.memoizedState = t, [e, a, !1]
   }

   function Xl(t, e, n, a) {
      return t = {
         tag: t,
         create: n,
         deps: a,
         inst: e,
         next: null
      }, e = mt.updateQueue, e === null && (e = co(), mt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t
   }

   function Wi() {
      return {
         destroy: void 0,
         resource: void 0
      }
   }

   function rd() {
      return Gt().memoizedState
   }

   function Ii(t, e, n, a) {
      var r = oe();
      a = a === void 0 ? null : a, mt.flags |= t, r.memoizedState = Xl(1 | e, Wi(), n, a)
   }

   function Ba(t, e, n, a) {
      var r = Gt();
      a = a === void 0 ? null : a;
      var o = r.memoizedState.inst;
      Ct !== null && a !== null && io(a, Ct.memoizedState.deps) ? r.memoizedState = Xl(e, o, n, a) : (mt.flags |= t, r.memoizedState = Xl(1 | e, o, n, a))
   }

   function sd(t, e) {
      Ii(8390656, 8, t, e)
   }

   function od(t, e) {
      Ba(2048, 8, t, e)
   }

   function ud(t, e) {
      return Ba(4, 2, t, e)
   }

   function cd(t, e) {
      return Ba(4, 4, t, e)
   }

   function fd(t, e) {
      if (typeof e == "function") {
         t = t();
         var n = e(t);
         return function () {
            typeof n == "function" ? n() : e(null)
         }
      }
      if (e != null) return t = t(), e.current = t,
         function () {
            e.current = null
         }
   }

   function dd(t, e, n) {
      n = n != null ? n.concat([t]) : null, Ba(4, 4, fd.bind(null, e, t), n)
   }

   function vo() {}

   function hd(t, e) {
      var n = Gt();
      e = e === void 0 ? null : e;
      var a = n.memoizedState;
      return e !== null && io(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t)
   }

   function md(t, e) {
      var n = Gt();
      e = e === void 0 ? null : e;
      var a = n.memoizedState;
      if (e !== null && io(e, a[1])) return a[0];
      if (a = t(), dl) {
         Sn(!0);
         try {
            t()
         } finally {
            Sn(!1)
         }
      }
      return n.memoizedState = [a, e], a
   }

   function go(t, e, n) {
      return n === void 0 || (Nn & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n, t = vh(), mt.lanes |= t, Un |= t, n)
   }

   function pd(t, e, n, a) {
      return pe(n, e) ? n : Gl.current !== null ? (t = go(t, n, a), pe(t, e) || (Pt = !0), t) : (Nn & 42) === 0 ? (Pt = !0, t.memoizedState = n) : (t = vh(), mt.lanes |= t, Un |= t, e)
   }

   function yd(t, e, n, a, r) {
      var o = Q.p;
      Q.p = o !== 0 && 8 > o ? o : 8;
      var d = M.T,
         p = {};
      M.T = p, So(t, !1, e, n);
      try {
         var S = r(),
            _ = M.S;
         if (_ !== null && _(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
            var L = Ng(S, a);
            Ya(t, e, L, xe(t))
         } else Ya(t, e, a, xe(t))
      } catch (Y) {
         Ya(t, e, {
            then: function () {},
            status: "rejected",
            reason: Y
         }, xe())
      } finally {
         Q.p = o, M.T = d
      }
   }

   function jg() {}

   function bo(t, e, n, a) {
      if (t.tag !== 5) throw Error(u(476));
      var r = vd(t).queue;
      yd(t, r, e, Z, n === null ? jg : function () {
         return gd(t), n(a)
      })
   }

   function vd(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
         memoizedState: Z,
         baseState: Z,
         baseQueue: null,
         queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: sn,
            lastRenderedState: Z
         },
         next: null
      };
      var n = {};
      return e.next = {
         memoizedState: n,
         baseState: n,
         baseQueue: null,
         queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: sn,
            lastRenderedState: n
         },
         next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
   }

   function gd(t) {
      var e = vd(t).next.queue;
      Ya(t, e, {}, xe())
   }

   function xo() {
      return ne(ii)
   }

   function bd() {
      return Gt().memoizedState
   }

   function xd() {
      return Gt().memoizedState
   }

   function zg(t) {
      for (var e = t.return; e !== null;) {
         switch (e.tag) {
            case 24:
            case 3:
               var n = xe();
               t = On(n);
               var a = Rn(e, t, n);
               a !== null && (Se(a, e, n), Ua(a, e, n)), e = {
                  cache: Js()
               }, t.payload = e;
               return
         }
         e = e.return
      }
   }

   function Ug(t, e, n) {
      var a = xe();
      n = {
         lane: a,
         revertLane: 0,
         action: n,
         hasEagerState: !1,
         eagerState: null,
         next: null
      }, tr(t) ? wd(e, n) : (n = qs(t, e, n, a), n !== null && (Se(n, t, a), Ed(n, e, a)))
   }

   function Sd(t, e, n) {
      var a = xe();
      Ya(t, e, n, a)
   }

   function Ya(t, e, n, a) {
      var r = {
         lane: a,
         revertLane: 0,
         action: n,
         hasEagerState: !1,
         eagerState: null,
         next: null
      };
      if (tr(t)) wd(e, r);
      else {
         var o = t.alternate;
         if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
            var d = e.lastRenderedState,
               p = o(d, n);
            if (r.hasEagerState = !0, r.eagerState = p, pe(p, d)) return Li(t, e, r, 0), jt === null && Hi(), !1
         } catch {}
         if (n = qs(t, e, r, a), n !== null) return Se(n, t, a), Ed(n, e, a), !0
      }
      return !1
   }

   function So(t, e, n, a) {
      if (a = {
            lane: 2,
            revertLane: Io(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
         }, tr(t)) {
         if (e) throw Error(u(479))
      } else e = qs(t, n, a, 2), e !== null && Se(e, t, 2)
   }

   function tr(t) {
      var e = t.alternate;
      return t === mt || e !== null && e === mt
   }

   function wd(t, e) {
      Vl = Pi = !0;
      var n = t.pending;
      n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
   }

   function Ed(t, e, n) {
      if ((n & 4194048) !== 0) {
         var a = e.lanes;
         a &= t.pendingLanes, n |= a, e.lanes = n, Mc(t, n)
      }
   }
   var er = {
         readContext: ne,
         use: Fi,
         useCallback: qt,
         useContext: qt,
         useEffect: qt,
         useImperativeHandle: qt,
         useLayoutEffect: qt,
         useInsertionEffect: qt,
         useMemo: qt,
         useReducer: qt,
         useRef: qt,
         useState: qt,
         useDebugValue: qt,
         useDeferredValue: qt,
         useTransition: qt,
         useSyncExternalStore: qt,
         useId: qt,
         useHostTransitionStatus: qt,
         useFormState: qt,
         useActionState: qt,
         useOptimistic: qt,
         useMemoCache: qt,
         useCacheRefresh: qt
      },
      Td = {
         readContext: ne,
         use: Fi,
         useCallback: function (t, e) {
            return oe().memoizedState = [t, e === void 0 ? null : e], t
         },
         useContext: ne,
         useEffect: sd,
         useImperativeHandle: function (t, e, n) {
            n = n != null ? n.concat([t]) : null, Ii(4194308, 4, fd.bind(null, e, t), n)
         },
         useLayoutEffect: function (t, e) {
            return Ii(4194308, 4, t, e)
         },
         useInsertionEffect: function (t, e) {
            Ii(4, 2, t, e)
         },
         useMemo: function (t, e) {
            var n = oe();
            e = e === void 0 ? null : e;
            var a = t();
            if (dl) {
               Sn(!0);
               try {
                  t()
               } finally {
                  Sn(!1)
               }
            }
            return n.memoizedState = [a, e], a
         },
         useReducer: function (t, e, n) {
            var a = oe();
            if (n !== void 0) {
               var r = n(e);
               if (dl) {
                  Sn(!0);
                  try {
                     n(e)
                  } finally {
                     Sn(!1)
                  }
               }
            } else r = e;
            return a.memoizedState = a.baseState = r, t = {
               pending: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: t,
               lastRenderedState: r
            }, a.queue = t, t = t.dispatch = Ug.bind(null, mt, t), [a.memoizedState, t]
         },
         useRef: function (t) {
            var e = oe();
            return t = {
               current: t
            }, e.memoizedState = t
         },
         useState: function (t) {
            t = po(t);
            var e = t.queue,
               n = Sd.bind(null, mt, e);
            return e.dispatch = n, [t.memoizedState, n]
         },
         useDebugValue: vo,
         useDeferredValue: function (t, e) {
            var n = oe();
            return go(n, t, e)
         },
         useTransition: function () {
            var t = po(!1);
            return t = yd.bind(null, mt, t.queue, !0, !1), oe().memoizedState = t, [!1, t]
         },
         useSyncExternalStore: function (t, e, n) {
            var a = mt,
               r = oe();
            if (Tt) {
               if (n === void 0) throw Error(u(407));
               n = n()
            } else {
               if (n = e(), jt === null) throw Error(u(349));
               (St & 124) !== 0 || Xf(a, e, n)
            }
            r.memoizedState = n;
            var o = {
               value: n,
               getSnapshot: e
            };
            return r.queue = o, sd(Kf.bind(null, a, o, t), [t]), a.flags |= 2048, Xl(9, Wi(), Zf.bind(null, a, o, n, e), null), n
         },
         useId: function () {
            var t = oe(),
               e = jt.identifierPrefix;
            if (Tt) {
               var n = ln,
                  a = nn;
               n = (a & ~(1 << 32 - me(a) - 1)).toString(32) + n, e = "«" + e + "R" + n, n = Ji++, 0 < n && (e += "H" + n.toString(32)), e += "»"
            } else n = Cg++, e = "«" + e + "r" + n.toString(32) + "»";
            return t.memoizedState = e
         },
         useHostTransitionStatus: xo,
         useFormState: nd,
         useActionState: nd,
         useOptimistic: function (t) {
            var e = oe();
            e.memoizedState = e.baseState = t;
            var n = {
               pending: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: null,
               lastRenderedState: null
            };
            return e.queue = n, e = So.bind(null, mt, !0, n), n.dispatch = e, [t, e]
         },
         useMemoCache: fo,
         useCacheRefresh: function () {
            return oe().memoizedState = zg.bind(null, mt)
         }
      },
      Ad = {
         readContext: ne,
         use: Fi,
         useCallback: hd,
         useContext: ne,
         useEffect: od,
         useImperativeHandle: dd,
         useInsertionEffect: ud,
         useLayoutEffect: cd,
         useMemo: md,
         useReducer: $i,
         useRef: rd,
         useState: function () {
            return $i(sn)
         },
         useDebugValue: vo,
         useDeferredValue: function (t, e) {
            var n = Gt();
            return pd(n, Ct.memoizedState, t, e)
         },
         useTransition: function () {
            var t = $i(sn)[0],
               e = Gt().memoizedState;
            return [typeof t == "boolean" ? t : qa(t), e]
         },
         useSyncExternalStore: Qf,
         useId: bd,
         useHostTransitionStatus: xo,
         useFormState: ld,
         useActionState: ld,
         useOptimistic: function (t, e) {
            var n = Gt();
            return Ff(n, Ct, t, e)
         },
         useMemoCache: fo,
         useCacheRefresh: xd
      },
      Hg = {
         readContext: ne,
         use: Fi,
         useCallback: hd,
         useContext: ne,
         useEffect: od,
         useImperativeHandle: dd,
         useInsertionEffect: ud,
         useLayoutEffect: cd,
         useMemo: md,
         useReducer: mo,
         useRef: rd,
         useState: function () {
            return mo(sn)
         },
         useDebugValue: vo,
         useDeferredValue: function (t, e) {
            var n = Gt();
            return Ct === null ? go(n, t, e) : pd(n, Ct.memoizedState, t, e)
         },
         useTransition: function () {
            var t = mo(sn)[0],
               e = Gt().memoizedState;
            return [typeof t == "boolean" ? t : qa(t), e]
         },
         useSyncExternalStore: Qf,
         useId: bd,
         useHostTransitionStatus: xo,
         useFormState: id,
         useActionState: id,
         useOptimistic: function (t, e) {
            var n = Gt();
            return Ct !== null ? Ff(n, Ct, t, e) : (n.baseState = t, [t, n.queue.dispatch])
         },
         useMemoCache: fo,
         useCacheRefresh: xd
      },
      Zl = null,
      Ga = 0;

   function nr(t) {
      var e = Ga;
      return Ga += 1, Zl === null && (Zl = []), Hf(Zl, t, e)
   }

   function Va(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null
   }

   function lr(t, e) {
      throw e.$$typeof === E ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
   }

   function Od(t) {
      var e = t._init;
      return e(t._payload)
   }

   function Rd(t) {
      function e(O, T) {
         if (t) {
            var C = O.deletions;
            C === null ? (O.deletions = [T], O.flags |= 16) : C.push(T)
         }
      }

      function n(O, T) {
         if (!t) return null;
         for (; T !== null;) e(O, T), T = T.sibling;
         return null
      }

      function a(O) {
         for (var T = new Map; O !== null;) O.key !== null ? T.set(O.key, O) : T.set(O.index, O), O = O.sibling;
         return T
      }

      function r(O, T) {
         return O = en(O, T), O.index = 0, O.sibling = null, O
      }

      function o(O, T, C) {
         return O.index = C, t ? (C = O.alternate, C !== null ? (C = C.index, C < T ? (O.flags |= 67108866, T) : C) : (O.flags |= 67108866, T)) : (O.flags |= 1048576, T)
      }

      function d(O) {
         return t && O.alternate === null && (O.flags |= 67108866), O
      }

      function p(O, T, C, q) {
         return T === null || T.tag !== 6 ? (T = Ys(C, O.mode, q), T.return = O, T) : (T = r(T, C), T.return = O, T)
      }

      function S(O, T, C, q) {
         var I = C.type;
         return I === z ? L(O, T, C.props.children, q, C.key) : T !== null && (T.elementType === I || typeof I == "object" && I !== null && I.$$typeof === K && Od(I) === T.type) ? (T = r(T, C.props), Va(T, C), T.return = O, T) : (T = qi(C.type, C.key, C.props, null, O.mode, q), Va(T, C), T.return = O, T)
      }

      function _(O, T, C, q) {
         return T === null || T.tag !== 4 || T.stateNode.containerInfo !== C.containerInfo || T.stateNode.implementation !== C.implementation ? (T = Gs(C, O.mode, q), T.return = O, T) : (T = r(T, C.children || []), T.return = O, T)
      }

      function L(O, T, C, q, I) {
         return T === null || T.tag !== 7 ? (T = al(C, O.mode, q, I), T.return = O, T) : (T = r(T, C), T.return = O, T)
      }

      function Y(O, T, C) {
         if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = Ys("" + T, O.mode, C), T.return = O, T;
         if (typeof T == "object" && T !== null) {
            switch (T.$$typeof) {
               case A:
                  return C = qi(T.type, T.key, T.props, null, O.mode, C), Va(C, T), C.return = O, C;
               case D:
                  return T = Gs(T, O.mode, C), T.return = O, T;
               case K:
                  var q = T._init;
                  return T = q(T._payload), Y(O, T, C)
            }
            if (ft(T) || dt(T)) return T = al(T, O.mode, C, null), T.return = O, T;
            if (typeof T.then == "function") return Y(O, nr(T), C);
            if (T.$$typeof === V) return Y(O, Vi(O, T), C);
            lr(O, T)
         }
         return null
      }

      function j(O, T, C, q) {
         var I = T !== null ? T.key : null;
         if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return I !== null ? null : p(O, T, "" + C, q);
         if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
               case A:
                  return C.key === I ? S(O, T, C, q) : null;
               case D:
                  return C.key === I ? _(O, T, C, q) : null;
               case K:
                  return I = C._init, C = I(C._payload), j(O, T, C, q)
            }
            if (ft(C) || dt(C)) return I !== null ? null : L(O, T, C, q, null);
            if (typeof C.then == "function") return j(O, T, nr(C), q);
            if (C.$$typeof === V) return j(O, T, Vi(O, C), q);
            lr(O, C)
         }
         return null
      }

      function U(O, T, C, q, I) {
         if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return O = O.get(C) || null, p(T, O, "" + q, I);
         if (typeof q == "object" && q !== null) {
            switch (q.$$typeof) {
               case A:
                  return O = O.get(q.key === null ? C : q.key) || null, S(T, O, q, I);
               case D:
                  return O = O.get(q.key === null ? C : q.key) || null, _(T, O, q, I);
               case K:
                  var yt = q._init;
                  return q = yt(q._payload), U(O, T, C, q, I)
            }
            if (ft(q) || dt(q)) return O = O.get(C) || null, L(T, O, q, I, null);
            if (typeof q.then == "function") return U(O, T, C, nr(q), I);
            if (q.$$typeof === V) return U(O, T, C, Vi(T, q), I);
            lr(T, q)
         }
         return null
      }

      function ct(O, T, C, q) {
         for (var I = null, yt = null, at = T, ot = T = 0, Ft = null; at !== null && ot < C.length; ot++) {
            at.index > ot ? (Ft = at, at = null) : Ft = at.sibling;
            var Et = j(O, at, C[ot], q);
            if (Et === null) {
               at === null && (at = Ft);
               break
            }
            t && at && Et.alternate === null && e(O, at), T = o(Et, T, ot), yt === null ? I = Et : yt.sibling = Et, yt = Et, at = Ft
         }
         if (ot === C.length) return n(O, at), Tt && rl(O, ot), I;
         if (at === null) {
            for (; ot < C.length; ot++) at = Y(O, C[ot], q), at !== null && (T = o(at, T, ot), yt === null ? I = at : yt.sibling = at, yt = at);
            return Tt && rl(O, ot), I
         }
         for (at = a(at); ot < C.length; ot++) Ft = U(at, O, ot, C[ot], q), Ft !== null && (t && Ft.alternate !== null && at.delete(Ft.key === null ? ot : Ft.key), T = o(Ft, T, ot), yt === null ? I = Ft : yt.sibling = Ft, yt = Ft);
         return t && at.forEach(function (Qn) {
            return e(O, Qn)
         }), Tt && rl(O, ot), I
      }

      function rt(O, T, C, q) {
         if (C == null) throw Error(u(151));
         for (var I = null, yt = null, at = T, ot = T = 0, Ft = null, Et = C.next(); at !== null && !Et.done; ot++, Et = C.next()) {
            at.index > ot ? (Ft = at, at = null) : Ft = at.sibling;
            var Qn = j(O, at, Et.value, q);
            if (Qn === null) {
               at === null && (at = Ft);
               break
            }
            t && at && Qn.alternate === null && e(O, at), T = o(Qn, T, ot), yt === null ? I = Qn : yt.sibling = Qn, yt = Qn, at = Ft
         }
         if (Et.done) return n(O, at), Tt && rl(O, ot), I;
         if (at === null) {
            for (; !Et.done; ot++, Et = C.next()) Et = Y(O, Et.value, q), Et !== null && (T = o(Et, T, ot), yt === null ? I = Et : yt.sibling = Et, yt = Et);
            return Tt && rl(O, ot), I
         }
         for (at = a(at); !Et.done; ot++, Et = C.next()) Et = U(at, O, ot, Et.value, q), Et !== null && (t && Et.alternate !== null && at.delete(Et.key === null ? ot : Et.key), T = o(Et, T, ot), yt === null ? I = Et : yt.sibling = Et, yt = Et);
         return t && at.forEach(function (Lb) {
            return e(O, Lb)
         }), Tt && rl(O, ot), I
      }

      function _t(O, T, C, q) {
         if (typeof C == "object" && C !== null && C.type === z && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
               case A:
                  t: {
                     for (var I = C.key; T !== null;) {
                        if (T.key === I) {
                           if (I = C.type, I === z) {
                              if (T.tag === 7) {
                                 n(O, T.sibling), q = r(T, C.props.children), q.return = O, O = q;
                                 break t
                              }
                           } else if (T.elementType === I || typeof I == "object" && I !== null && I.$$typeof === K && Od(I) === T.type) {
                              n(O, T.sibling), q = r(T, C.props), Va(q, C), q.return = O, O = q;
                              break t
                           }
                           n(O, T);
                           break
                        } else e(O, T);
                        T = T.sibling
                     }
                     C.type === z ? (q = al(C.props.children, O.mode, q, C.key), q.return = O, O = q) : (q = qi(C.type, C.key, C.props, null, O.mode, q), Va(q, C), q.return = O, O = q)
                  }
                  return d(O);
               case D:
                  t: {
                     for (I = C.key; T !== null;) {
                        if (T.key === I)
                           if (T.tag === 4 && T.stateNode.containerInfo === C.containerInfo && T.stateNode.implementation === C.implementation) {
                              n(O, T.sibling), q = r(T, C.children || []), q.return = O, O = q;
                              break t
                           } else {
                              n(O, T);
                              break
                           }
                        else e(O, T);
                        T = T.sibling
                     }
                     q = Gs(C, O.mode, q),
                     q.return = O,
                     O = q
                  }
                  return d(O);
               case K:
                  return I = C._init, C = I(C._payload), _t(O, T, C, q)
            }
            if (ft(C)) return ct(O, T, C, q);
            if (dt(C)) {
               if (I = dt(C), typeof I != "function") throw Error(u(150));
               return C = I.call(C), rt(O, T, C, q)
            }
            if (typeof C.then == "function") return _t(O, T, nr(C), q);
            if (C.$$typeof === V) return _t(O, T, Vi(O, C), q);
            lr(O, C)
         }
         return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, T !== null && T.tag === 6 ? (n(O, T.sibling), q = r(T, C), q.return = O, O = q) : (n(O, T), q = Ys(C, O.mode, q), q.return = O, O = q), d(O)) : n(O, T)
      }
      return function (O, T, C, q) {
         try {
            Ga = 0;
            var I = _t(O, T, C, q);
            return Zl = null, I
         } catch (at) {
            if (at === ja || at === Xi) throw at;
            var yt = ye(29, at, null, O.mode);
            return yt.lanes = q, yt.return = O, yt
         }
      }
   }
   var Kl = Rd(!0),
      Nd = Rd(!1),
      _e = G(null),
      Ze = null;

   function Cn(t) {
      var e = t.alternate;
      J(Qt, Qt.current & 1), J(_e, t), Ze === null && (e === null || Gl.current !== null || e.memoizedState !== null) && (Ze = t)
   }

   function Cd(t) {
      if (t.tag === 22) {
         if (J(Qt, Qt.current), J(_e, t), Ze === null) {
            var e = t.alternate;
            e !== null && e.memoizedState !== null && (Ze = t)
         }
      } else Mn()
   }

   function Mn() {
      J(Qt, Qt.current), J(_e, _e.current)
   }

   function on(t) {
      F(_e), Ze === t && (Ze = null), F(Qt)
   }
   var Qt = G(0);

   function ar(t) {
      for (var e = t; e !== null;) {
         if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || fu(n))) return e
         } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if ((e.flags & 128) !== 0) return e
         } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
         }
         if (e === t) break;
         for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return
         }
         e.sibling.return = e.return, e = e.sibling
      }
      return null
   }

   function wo(t, e, n, a) {
      e = t.memoizedState, n = n(a, e), n = n == null ? e : b({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
   }
   var Eo = {
      enqueueSetState: function (t, e, n) {
         t = t._reactInternals;
         var a = xe(),
            r = On(a);
         r.payload = e, n != null && (r.callback = n), e = Rn(t, r, a), e !== null && (Se(e, t, a), Ua(e, t, a))
      },
      enqueueReplaceState: function (t, e, n) {
         t = t._reactInternals;
         var a = xe(),
            r = On(a);
         r.tag = 1, r.payload = e, n != null && (r.callback = n), e = Rn(t, r, a), e !== null && (Se(e, t, a), Ua(e, t, a))
      },
      enqueueForceUpdate: function (t, e) {
         t = t._reactInternals;
         var n = xe(),
            a = On(n);
         a.tag = 2, e != null && (a.callback = e), e = Rn(t, a, n), e !== null && (Se(e, t, n), Ua(e, t, n))
      }
   };

   function Md(t, e, n, a, r, o, d) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, o, d) : e.prototype && e.prototype.isPureReactComponent ? !Aa(n, a) || !Aa(r, o) : !0
   }

   function _d(t, e, n, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Eo.enqueueReplaceState(e, e.state, null)
   }

   function hl(t, e) {
      var n = e;
      if ("ref" in e) {
         n = {};
         for (var a in e) a !== "ref" && (n[a] = e[a])
      }
      if (t = t.defaultProps) {
         n === e && (n = b({}, n));
         for (var r in t) n[r] === void 0 && (n[r] = t[r])
      }
      return n
   }
   var ir = typeof reportError == "function" ? reportError : function (t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
         var e = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
            error: t
         });
         if (!window.dispatchEvent(e)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
         process.emit("uncaughtException", t);
         return
      }
      console.error(t)
   };

   function Dd(t) {
      ir(t)
   }

   function jd(t) {
      console.error(t)
   }

   function zd(t) {
      ir(t)
   }

   function rr(t, e) {
      try {
         var n = t.onUncaughtError;
         n(e.value, {
            componentStack: e.stack
         })
      } catch (a) {
         setTimeout(function () {
            throw a
         })
      }
   }

   function Ud(t, e, n) {
      try {
         var a = t.onCaughtError;
         a(n.value, {
            componentStack: n.stack,
            errorBoundary: e.tag === 1 ? e.stateNode : null
         })
      } catch (r) {
         setTimeout(function () {
            throw r
         })
      }
   }

   function To(t, e, n) {
      return n = On(n), n.tag = 3, n.payload = {
         element: null
      }, n.callback = function () {
         rr(t, e)
      }, n
   }

   function Hd(t) {
      return t = On(t), t.tag = 3, t
   }

   function Ld(t, e, n, a) {
      var r = n.type.getDerivedStateFromError;
      if (typeof r == "function") {
         var o = a.value;
         t.payload = function () {
            return r(o)
         }, t.callback = function () {
            Ud(e, n, a)
         }
      }
      var d = n.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function () {
         Ud(e, n, a), typeof r != "function" && (Hn === null ? Hn = new Set([this]) : Hn.add(this));
         var p = a.stack;
         this.componentDidCatch(a.value, {
            componentStack: p !== null ? p : ""
         })
      })
   }

   function Lg(t, e, n, a, r) {
      if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
         if (e = n.alternate, e !== null && Ma(e, n, r, !0), n = _e.current, n !== null) {
            switch (n.tag) {
               case 13:
                  return Ze === null ? Po() : n.alternate === null && kt === 0 && (kt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = r, a === Ws ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = new Set([a]) : e.add(a), Fo(t, a, r)), !1;
               case 22:
                  return n.flags |= 65536, a === Ws ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
                     transitions: null,
                     markerInstances: null,
                     retryQueue: new Set([a])
                  }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = new Set([a]) : n.add(a)), Fo(t, a, r)), !1
            }
            throw Error(u(435, n.tag))
         }
         return Fo(t, a, r), Po(), !1
      }
      if (Tt) return e = _e.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = r, a !== Xs && (t = Error(u(422), {
         cause: a
      }), Ca(Re(t, n)))) : (a !== Xs && (e = Error(u(423), {
         cause: a
      }), Ca(Re(e, n))), t = t.current.alternate, t.flags |= 65536, r &= -r, t.lanes |= r, a = Re(a, n), r = To(t.stateNode, a, r), eo(t, r), kt !== 4 && (kt = 2)), !1;
      var o = Error(u(520), {
         cause: a
      });
      if (o = Re(o, n), Fa === null ? Fa = [o] : Fa.push(o), kt !== 4 && (kt = 2), e === null) return !0;
      a = Re(a, n), n = e;
      do {
         switch (n.tag) {
            case 3:
               return n.flags |= 65536, t = r & -r, n.lanes |= t, t = To(n.stateNode, a, t), eo(n, t), !1;
            case 1:
               if (e = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Hn === null || !Hn.has(o)))) return n.flags |= 65536, r &= -r, n.lanes |= r, r = Hd(r), Ld(r, t, n, a), eo(n, r), !1
         }
         n = n.return
      } while (n !== null);
      return !1
   }
   var kd = Error(u(461)),
      Pt = !1;

   function $t(t, e, n, a) {
      e.child = t === null ? Nd(e, null, n, a) : Kl(e, t.child, n, a)
   }

   function qd(t, e, n, a, r) {
      n = n.render;
      var o = e.ref;
      if ("ref" in a) {
         var d = {};
         for (var p in a) p !== "ref" && (d[p] = a[p])
      } else d = a;
      return cl(e), a = ro(t, e, n, d, o, r), p = so(), t !== null && !Pt ? (oo(t, e, r), un(t, e, r)) : (Tt && p && Vs(e), e.flags |= 1, $t(t, e, a, r), e.child)
   }

   function Bd(t, e, n, a, r) {
      if (t === null) {
         var o = n.type;
         return typeof o == "function" && !Bs(o) && o.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = o, Yd(t, e, o, a, r)) : (t = qi(n.type, null, a, e, e.mode, r), t.ref = e.ref, t.return = e, e.child = t)
      }
      if (o = t.child, !Do(t, r)) {
         var d = o.memoizedProps;
         if (n = n.compare, n = n !== null ? n : Aa, n(d, a) && t.ref === e.ref) return un(t, e, r)
      }
      return e.flags |= 1, t = en(o, a), t.ref = e.ref, t.return = e, e.child = t
   }

   function Yd(t, e, n, a, r) {
      if (t !== null) {
         var o = t.memoizedProps;
         if (Aa(o, a) && t.ref === e.ref)
            if (Pt = !1, e.pendingProps = a = o, Do(t, r))(t.flags & 131072) !== 0 && (Pt = !0);
            else return e.lanes = t.lanes, un(t, e, r)
      }
      return Ao(t, e, n, a, r)
   }

   function Gd(t, e, n) {
      var a = e.pendingProps,
         r = a.children,
         o = t !== null ? t.memoizedState : null;
      if (a.mode === "hidden") {
         if ((e.flags & 128) !== 0) {
            if (a = o !== null ? o.baseLanes | n : n, t !== null) {
               for (r = e.child = t.child, o = 0; r !== null;) o = o | r.lanes | r.childLanes, r = r.sibling;
               e.childLanes = o & ~a
            } else e.childLanes = 0, e.child = null;
            return Vd(t, e, a, n)
         }
         if ((n & 536870912) !== 0) e.memoizedState = {
            baseLanes: 0,
            cachePool: null
         }, t !== null && Qi(e, o !== null ? o.cachePool : null), o !== null ? Yf(e, o) : lo(), Cd(e);
         else return e.lanes = e.childLanes = 536870912, Vd(t, e, o !== null ? o.baseLanes | n : n, n)
      } else o !== null ? (Qi(e, o.cachePool), Yf(e, o), Mn(), e.memoizedState = null) : (t !== null && Qi(e, null), lo(), Mn());
      return $t(t, e, r, n), e.child
   }

   function Vd(t, e, n, a) {
      var r = $s();
      return r = r === null ? null : {
         parent: Vt._currentValue,
         pool: r
      }, e.memoizedState = {
         baseLanes: n,
         cachePool: r
      }, t !== null && Qi(e, null), lo(), Cd(e), t !== null && Ma(t, e, a, !0), null
   }

   function sr(t, e) {
      var n = e.ref;
      if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
         if (typeof n != "function" && typeof n != "object") throw Error(u(284));
         (t === null || t.ref !== n) && (e.flags |= 4194816)
      }
   }

   function Ao(t, e, n, a, r) {
      return cl(e), n = ro(t, e, n, a, void 0, r), a = so(), t !== null && !Pt ? (oo(t, e, r), un(t, e, r)) : (Tt && a && Vs(e), e.flags |= 1, $t(t, e, n, r), e.child)
   }

   function Qd(t, e, n, a, r, o) {
      return cl(e), e.updateQueue = null, n = Vf(e, a, n, r), Gf(t), a = so(), t !== null && !Pt ? (oo(t, e, o), un(t, e, o)) : (Tt && a && Vs(e), e.flags |= 1, $t(t, e, n, o), e.child)
   }

   function Xd(t, e, n, a, r) {
      if (cl(e), e.stateNode === null) {
         var o = Ll,
            d = n.contextType;
         typeof d == "object" && d !== null && (o = ne(d)), o = new n(a, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Eo, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = a, o.state = e.memoizedState, o.refs = {}, Is(e), d = n.contextType, o.context = typeof d == "object" && d !== null ? ne(d) : Ll, o.state = e.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (wo(e, n, d, a), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (d = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), d !== o.state && Eo.enqueueReplaceState(o, o.state, null), La(e, a, o, r), Ha(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = !0
      } else if (t === null) {
         o = e.stateNode;
         var p = e.memoizedProps,
            S = hl(n, p);
         o.props = S;
         var _ = o.context,
            L = n.contextType;
         d = Ll, typeof L == "object" && L !== null && (d = ne(L));
         var Y = n.getDerivedStateFromProps;
         L = typeof Y == "function" || typeof o.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, L || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (p || _ !== d) && _d(e, o, a, d), An = !1;
         var j = e.memoizedState;
         o.state = j, La(e, a, o, r), Ha(), _ = e.memoizedState, p || j !== _ || An ? (typeof Y == "function" && (wo(e, n, Y, a), _ = e.memoizedState), (S = An || Md(e, n, S, a, j, _, d)) ? (L || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = _), o.props = a, o.state = _, o.context = d, a = S) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
      } else {
         o = e.stateNode, to(t, e), d = e.memoizedProps, L = hl(n, d), o.props = L, Y = e.pendingProps, j = o.context, _ = n.contextType, S = Ll, typeof _ == "object" && _ !== null && (S = ne(_)), p = n.getDerivedStateFromProps, (_ = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (d !== Y || j !== S) && _d(e, o, a, S), An = !1, j = e.memoizedState, o.state = j, La(e, a, o, r), Ha();
         var U = e.memoizedState;
         d !== Y || j !== U || An || t !== null && t.dependencies !== null && Gi(t.dependencies) ? (typeof p == "function" && (wo(e, n, p, a), U = e.memoizedState), (L = An || Md(e, n, L, a, j, U, S) || t !== null && t.dependencies !== null && Gi(t.dependencies)) ? (_ || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(a, U, S), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(a, U, S)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || d === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = U), o.props = a, o.state = U, o.context = S, a = L) : (typeof o.componentDidUpdate != "function" || d === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), a = !1)
      }
      return o = a, sr(t, e), a = (e.flags & 128) !== 0, o || a ? (o = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : o.render(), e.flags |= 1, t !== null && a ? (e.child = Kl(e, t.child, null, r), e.child = Kl(e, null, n, r)) : $t(t, e, n, r), e.memoizedState = o.state, t = e.child) : t = un(t, e, r), t
   }

   function Zd(t, e, n, a) {
      return Na(), e.flags |= 256, $t(t, e, n, a), e.child
   }
   var Oo = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
   };

   function Ro(t) {
      return {
         baseLanes: t,
         cachePool: jf()
      }
   }

   function No(t, e, n) {
      return t = t !== null ? t.childLanes & ~n : 0, e && (t |= De), t
   }

   function Kd(t, e, n) {
      var a = e.pendingProps,
         r = !1,
         o = (e.flags & 128) !== 0,
         d;
      if ((d = o) || (d = t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0), d && (r = !0, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
         if (Tt) {
            if (r ? Cn(e) : Mn(), Tt) {
               var p = Lt,
                  S;
               if (S = p) {
                  t: {
                     for (S = p, p = Xe; S.nodeType !== 8;) {
                        if (!p) {
                           p = null;
                           break t
                        }
                        if (S = ke(S.nextSibling), S === null) {
                           p = null;
                           break t
                        }
                     }
                     p = S
                  }
                  p !== null ? (e.memoizedState = {
                     dehydrated: p,
                     treeContext: il !== null ? {
                        id: nn,
                        overflow: ln
                     } : null,
                     retryLane: 536870912,
                     hydrationErrors: null
                  }, S = ye(18, null, null, 0), S.stateNode = p, S.return = e, e.child = S, ie = e, Lt = null, S = !0) : S = !1
               }
               S || ol(e)
            }
            if (p = e.memoizedState, p !== null && (p = p.dehydrated, p !== null)) return fu(p) ? e.lanes = 32 : e.lanes = 536870912, null;
            on(e)
         }
         return p = a.children, a = a.fallback, r ? (Mn(), r = e.mode, p = or({
            mode: "hidden",
            children: p
         }, r), a = al(a, r, n, null), p.return = e, a.return = e, p.sibling = a, e.child = p, r = e.child, r.memoizedState = Ro(n), r.childLanes = No(t, d, n), e.memoizedState = Oo, a) : (Cn(e), Co(e, p))
      }
      if (S = t.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
         if (o) e.flags & 256 ? (Cn(e), e.flags &= -257, e = Mo(t, e, n)) : e.memoizedState !== null ? (Mn(), e.child = t.child, e.flags |= 128, e = null) : (Mn(), r = a.fallback, p = e.mode, a = or({
            mode: "visible",
            children: a.children
         }, p), r = al(r, p, n, null), r.flags |= 2, a.return = e, r.return = e, a.sibling = r, e.child = a, Kl(e, t.child, null, n), a = e.child, a.memoizedState = Ro(n), a.childLanes = No(t, d, n), e.memoizedState = Oo, e = r);
         else if (Cn(e), fu(p)) {
            if (d = p.nextSibling && p.nextSibling.dataset, d) var _ = d.dgst;
            d = _, a = Error(u(419)), a.stack = "", a.digest = d, Ca({
               value: a,
               source: null,
               stack: null
            }), e = Mo(t, e, n)
         } else if (Pt || Ma(t, e, n, !1), d = (n & t.childLanes) !== 0, Pt || d) {
            if (d = jt, d !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : fs(a), a = (a & (d.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== S.retryLane)) throw S.retryLane = a, Hl(t, a), Se(d, t, a), kd;
            p.data === "$?" || Po(), e = Mo(t, e, n)
         } else p.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, Lt = ke(p.nextSibling), ie = e, Tt = !0, sl = null, Xe = !1, t !== null && (Ce[Me++] = nn, Ce[Me++] = ln, Ce[Me++] = il, nn = t.id, ln = t.overflow, il = e), e = Co(e, a.children), e.flags |= 4096);
         return e
      }
      return r ? (Mn(), r = a.fallback, p = e.mode, S = t.child, _ = S.sibling, a = en(S, {
         mode: "hidden",
         children: a.children
      }), a.subtreeFlags = S.subtreeFlags & 65011712, _ !== null ? r = en(_, r) : (r = al(r, p, n, null), r.flags |= 2), r.return = e, a.return = e, a.sibling = r, e.child = a, a = r, r = e.child, p = t.child.memoizedState, p === null ? p = Ro(n) : (S = p.cachePool, S !== null ? (_ = Vt._currentValue, S = S.parent !== _ ? {
         parent: _,
         pool: _
      } : S) : S = jf(), p = {
         baseLanes: p.baseLanes | n,
         cachePool: S
      }), r.memoizedState = p, r.childLanes = No(t, d, n), e.memoizedState = Oo, a) : (Cn(e), n = t.child, t = n.sibling, n = en(n, {
         mode: "visible",
         children: a.children
      }), n.return = e, n.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = n, e.memoizedState = null, n)
   }

   function Co(t, e) {
      return e = or({
         mode: "visible",
         children: e
      }, t.mode), e.return = t, t.child = e
   }

   function or(t, e) {
      return t = ye(22, t, null, e), t.lanes = 0, t.stateNode = {
         _visibility: 1,
         _pendingMarkers: null,
         _retryCache: null,
         _transitions: null
      }, t
   }

   function Mo(t, e, n) {
      return Kl(e, t.child, null, n), t = Co(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
   }

   function Pd(t, e, n) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), Ks(t.return, e, n)
   }

   function _o(t, e, n, a, r) {
      var o = t.memoizedState;
      o === null ? t.memoizedState = {
         isBackwards: e,
         rendering: null,
         renderingStartTime: 0,
         last: a,
         tail: n,
         tailMode: r
      } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = a, o.tail = n, o.tailMode = r)
   }

   function Jd(t, e, n) {
      var a = e.pendingProps,
         r = a.revealOrder,
         o = a.tail;
      if ($t(t, e, a.children, n), a = Qt.current, (a & 2) !== 0) a = a & 1 | 2, e.flags |= 128;
      else {
         if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && Pd(t, n, e);
            else if (t.tag === 19) Pd(t, n, e);
            else if (t.child !== null) {
               t.child.return = t, t = t.child;
               continue
            }
            if (t === e) break t;
            for (; t.sibling === null;) {
               if (t.return === null || t.return === e) break t;
               t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
         }
         a &= 1
      }
      switch (J(Qt, a), r) {
         case "forwards":
            for (n = e.child, r = null; n !== null;) t = n.alternate, t !== null && ar(t) === null && (r = n), n = n.sibling;
            n = r, n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), _o(e, !1, r, n, o);
            break;
         case "backwards":
            for (n = null, r = e.child, e.child = null; r !== null;) {
               if (t = r.alternate, t !== null && ar(t) === null) {
                  e.child = r;
                  break
               }
               t = r.sibling, r.sibling = n, n = r, r = t
            }
            _o(e, !0, n, null, o);
            break;
         case "together":
            _o(e, !1, null, null, void 0);
            break;
         default:
            e.memoizedState = null
      }
      return e.child
   }

   function un(t, e, n) {
      if (t !== null && (e.dependencies = t.dependencies), Un |= e.lanes, (n & e.childLanes) === 0)
         if (t !== null) {
            if (Ma(t, e, n, !1), (n & e.childLanes) === 0) return null
         } else return null;
      if (t !== null && e.child !== t.child) throw Error(u(153));
      if (e.child !== null) {
         for (t = e.child, n = en(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = en(t, t.pendingProps), n.return = e;
         n.sibling = null
      }
      return e.child
   }

   function Do(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Gi(t)))
   }

   function kg(t, e, n) {
      switch (e.tag) {
         case 3:
            At(e, e.stateNode.containerInfo), Tn(e, Vt, t.memoizedState.cache), Na();
            break;
         case 27:
         case 5:
            bn(e);
            break;
         case 4:
            At(e, e.stateNode.containerInfo);
            break;
         case 10:
            Tn(e, e.type, e.memoizedProps.value);
            break;
         case 13:
            var a = e.memoizedState;
            if (a !== null) return a.dehydrated !== null ? (Cn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Kd(t, e, n) : (Cn(e), t = un(t, e, n), t !== null ? t.sibling : null);
            Cn(e);
            break;
         case 19:
            var r = (t.flags & 128) !== 0;
            if (a = (n & e.childLanes) !== 0, a || (Ma(t, e, n, !1), a = (n & e.childLanes) !== 0), r) {
               if (a) return Jd(t, e, n);
               e.flags |= 128
            }
            if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), J(Qt, Qt.current), a) break;
            return null;
         case 22:
         case 23:
            return e.lanes = 0, Gd(t, e, n);
         case 24:
            Tn(e, Vt, t.memoizedState.cache)
      }
      return un(t, e, n)
   }

   function Fd(t, e, n) {
      if (t !== null)
         if (t.memoizedProps !== e.pendingProps) Pt = !0;
         else {
            if (!Do(t, n) && (e.flags & 128) === 0) return Pt = !1, kg(t, e, n);
            Pt = (t.flags & 131072) !== 0
         }
      else Pt = !1, Tt && (e.flags & 1048576) !== 0 && Of(e, Yi, e.index);
      switch (e.lanes = 0, e.tag) {
         case 16:
            t: {
               t = e.pendingProps;
               var a = e.elementType,
                  r = a._init;
               if (a = r(a._payload), e.type = a, typeof a == "function") Bs(a) ? (t = hl(a, t), e.tag = 1, e = Xd(null, e, a, t, n)) : (e.tag = 0, e = Ao(null, e, a, t, n));
               else {
                  if (a != null) {
                     if (r = a.$$typeof, r === k) {
                        e.tag = 11, e = qd(null, e, a, t, n);
                        break t
                     } else if (r === $) {
                        e.tag = 14, e = Bd(null, e, a, t, n);
                        break t
                     }
                  }
                  throw e = W(a) || a, Error(u(306, e, ""))
               }
            }
            return e;
         case 0:
            return Ao(t, e, e.type, e.pendingProps, n);
         case 1:
            return a = e.type, r = hl(a, e.pendingProps), Xd(t, e, a, r, n);
         case 3:
            t: {
               if (At(e, e.stateNode.containerInfo), t === null) throw Error(u(387));a = e.pendingProps;
               var o = e.memoizedState;r = o.element,
               to(t, e),
               La(e, a, null, n);
               var d = e.memoizedState;
               if (a = d.cache, Tn(e, Vt, a), a !== o.cache && Ps(e, [Vt], n, !0), Ha(), a = d.element, o.isDehydrated)
                  if (o = {
                        element: a,
                        isDehydrated: !1,
                        cache: d.cache
                     }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
                     e = Zd(t, e, a, n);
                     break t
                  } else if (a !== r) {
                  r = Re(Error(u(424)), e), Ca(r), e = Zd(t, e, a, n);
                  break t
               } else
                  for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Lt = ke(t.firstChild), ie = e, Tt = !0, sl = null, Xe = !0, n = Nd(e, null, a, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
               else {
                  if (Na(), a === r) {
                     e = un(t, e, n);
                     break t
                  }
                  $t(t, e, a, n)
               }
               e = e.child
            }
            return e;
         case 26:
            return sr(t, e), t === null ? (n = tm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : Tt || (n = e.type, t = e.pendingProps, a = wr(nt.current).createElement(n), a[ee] = e, a[re] = t, It(a, n, t), Kt(a), e.stateNode = a) : e.memoizedState = tm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
         case 27:
            return bn(e), t === null && Tt && (a = e.stateNode = $h(e.type, e.pendingProps, nt.current), ie = e, Xe = !0, r = Lt, qn(e.type) ? (du = r, Lt = ke(a.firstChild)) : Lt = r), $t(t, e, e.pendingProps.children, n), sr(t, e), t === null && (e.flags |= 4194304), e.child;
         case 5:
            return t === null && Tt && ((r = a = Lt) && (a = db(a, e.type, e.pendingProps, Xe), a !== null ? (e.stateNode = a, ie = e, Lt = ke(a.firstChild), Xe = !1, r = !0) : r = !1), r || ol(e)), bn(e), r = e.type, o = e.pendingProps, d = t !== null ? t.memoizedProps : null, a = o.children, ou(r, o) ? a = null : d !== null && ou(r, d) && (e.flags |= 32), e.memoizedState !== null && (r = ro(t, e, Mg, null, null, n), ii._currentValue = r), sr(t, e), $t(t, e, a, n), e.child;
         case 6:
            return t === null && Tt && ((t = n = Lt) && (n = hb(n, e.pendingProps, Xe), n !== null ? (e.stateNode = n, ie = e, Lt = null, t = !0) : t = !1), t || ol(e)), null;
         case 13:
            return Kd(t, e, n);
         case 4:
            return At(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Kl(e, null, a, n) : $t(t, e, a, n), e.child;
         case 11:
            return qd(t, e, e.type, e.pendingProps, n);
         case 7:
            return $t(t, e, e.pendingProps, n), e.child;
         case 8:
            return $t(t, e, e.pendingProps.children, n), e.child;
         case 12:
            return $t(t, e, e.pendingProps.children, n), e.child;
         case 10:
            return a = e.pendingProps, Tn(e, e.type, a.value), $t(t, e, a.children, n), e.child;
         case 9:
            return r = e.type._context, a = e.pendingProps.children, cl(e), r = ne(r), a = a(r), e.flags |= 1, $t(t, e, a, n), e.child;
         case 14:
            return Bd(t, e, e.type, e.pendingProps, n);
         case 15:
            return Yd(t, e, e.type, e.pendingProps, n);
         case 19:
            return Jd(t, e, n);
         case 31:
            return a = e.pendingProps, n = e.mode, a = {
               mode: a.mode,
               children: a.children
            }, t === null ? (n = or(a, n), n.ref = e.ref, e.child = n, n.return = e, e = n) : (n = en(t.child, a), n.ref = e.ref, e.child = n, n.return = e, e = n), e;
         case 22:
            return Gd(t, e, n);
         case 24:
            return cl(e), a = ne(Vt), t === null ? (r = $s(), r === null && (r = jt, o = Js(), r.pooledCache = o, o.refCount++, o !== null && (r.pooledCacheLanes |= n), r = o), e.memoizedState = {
               parent: a,
               cache: r
            }, Is(e), Tn(e, Vt, r)) : ((t.lanes & n) !== 0 && (to(t, e), La(e, null, null, n), Ha()), r = t.memoizedState, o = e.memoizedState, r.parent !== a ? (r = {
               parent: a,
               cache: a
            }, e.memoizedState = r, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r), Tn(e, Vt, a)) : (a = o.cache, Tn(e, Vt, a), a !== r.cache && Ps(e, [Vt], n, !0))), $t(t, e, e.pendingProps.children, n), e.child;
         case 29:
            throw e.pendingProps
      }
      throw Error(u(156, e.tag))
   }

   function cn(t) {
      t.flags |= 4
   }

   function $d(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !im(e)) {
         if (e = _e.current, e !== null && ((St & 4194048) === St ? Ze !== null : (St & 62914560) !== St && (St & 536870912) === 0 || e !== Ze)) throw za = Ws, zf;
         t.flags |= 8192
      }
   }

   function ur(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Nc() : 536870912, t.lanes |= e, $l |= e)
   }

   function Qa(t, e) {
      if (!Tt) switch (t.tailMode) {
         case "hidden":
            e = t.tail;
            for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
         case "collapsed":
            n = t.tail;
            for (var a = null; n !== null;) n.alternate !== null && (a = n), n = n.sibling;
            a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
      }
   }

   function Ht(t) {
      var e = t.alternate !== null && t.alternate.child === t.child,
         n = 0,
         a = 0;
      if (e)
         for (var r = t.child; r !== null;) n |= r.lanes | r.childLanes, a |= r.subtreeFlags & 65011712, a |= r.flags & 65011712, r.return = t, r = r.sibling;
      else
         for (r = t.child; r !== null;) n |= r.lanes | r.childLanes, a |= r.subtreeFlags, a |= r.flags, r.return = t, r = r.sibling;
      return t.subtreeFlags |= a, t.childLanes = n, e
   }

   function qg(t, e, n) {
      var a = e.pendingProps;
      switch (Qs(e), e.tag) {
         case 31:
         case 16:
         case 15:
         case 0:
         case 11:
         case 7:
         case 8:
         case 12:
         case 9:
         case 14:
            return Ht(e), null;
         case 1:
            return Ht(e), null;
         case 3:
            return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), rn(Vt), Ot(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ra(e) ? cn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Cf())), Ht(e), null;
         case 26:
            return n = e.memoizedState, t === null ? (cn(e), n !== null ? (Ht(e), $d(e, n)) : (Ht(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (cn(e), Ht(e), $d(e, n)) : (Ht(e), e.flags &= -16777217) : (t.memoizedProps !== a && cn(e), Ht(e), e.flags &= -16777217), null;
         case 27:
            Ue(e), n = nt.current;
            var r = e.type;
            if (t !== null && e.stateNode != null) t.memoizedProps !== a && cn(e);
            else {
               if (!a) {
                  if (e.stateNode === null) throw Error(u(166));
                  return Ht(e), null
               }
               t = lt.current, Ra(e) ? Rf(e) : (t = $h(r, a, n), e.stateNode = t, cn(e))
            }
            return Ht(e), null;
         case 5:
            if (Ue(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && cn(e);
            else {
               if (!a) {
                  if (e.stateNode === null) throw Error(u(166));
                  return Ht(e), null
               }
               if (t = lt.current, Ra(e)) Rf(e);
               else {
                  switch (r = wr(nt.current), t) {
                     case 1:
                        t = r.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                     case 2:
                        t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                     default:
                        switch (n) {
                           case "svg":
                              t = r.createElementNS("http://www.w3.org/2000/svg", n);
                              break;
                           case "math":
                              t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                              break;
                           case "script":
                              t = r.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                              break;
                           case "select":
                              t = typeof a.is == "string" ? r.createElement("select", {
                                 is: a.is
                              }) : r.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                              break;
                           default:
                              t = typeof a.is == "string" ? r.createElement(n, {
                                 is: a.is
                              }) : r.createElement(n)
                        }
                  }
                  t[ee] = e, t[re] = a;
                  t: for (r = e.child; r !== null;) {
                     if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
                     else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                        r.child.return = r, r = r.child;
                        continue
                     }
                     if (r === e) break t;
                     for (; r.sibling === null;) {
                        if (r.return === null || r.return === e) break t;
                        r = r.return
                     }
                     r.sibling.return = r.return, r = r.sibling
                  }
                  e.stateNode = t;
                  t: switch (It(t, n, a), n) {
                     case "button":
                     case "input":
                     case "select":
                     case "textarea":
                        t = !!a.autoFocus;
                        break t;
                     case "img":
                        t = !0;
                        break t;
                     default:
                        t = !1
                  }
                  t && cn(e)
               }
            }
            return Ht(e), e.flags &= -16777217, null;
         case 6:
            if (t && e.stateNode != null) t.memoizedProps !== a && cn(e);
            else {
               if (typeof a != "string" && e.stateNode === null) throw Error(u(166));
               if (t = nt.current, Ra(e)) {
                  if (t = e.stateNode, n = e.memoizedProps, a = null, r = ie, r !== null) switch (r.tag) {
                     case 27:
                     case 5:
                        a = r.memoizedProps
                  }
                  t[ee] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Qh(t.nodeValue, n)), t || ol(e)
               } else t = wr(t).createTextNode(a), t[ee] = e, e.stateNode = t
            }
            return Ht(e), null;
         case 13:
            if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
               if (r = Ra(e), a !== null && a.dehydrated !== null) {
                  if (t === null) {
                     if (!r) throw Error(u(318));
                     if (r = e.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(u(317));
                     r[ee] = e
                  } else Na(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                  Ht(e), r = !1
               } else r = Cf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), r = !0;
               if (!r) return e.flags & 256 ? (on(e), e) : (on(e), null)
            }
            if (on(e), (e.flags & 128) !== 0) return e.lanes = n, e;
            if (n = a !== null, t = t !== null && t.memoizedState !== null, n) {
               a = e.child, r = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (r = a.alternate.memoizedState.cachePool.pool);
               var o = null;
               a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== r && (a.flags |= 2048)
            }
            return n !== t && n && (e.child.flags |= 8192), ur(e, e.updateQueue), Ht(e), null;
         case 4:
            return Ot(), t === null && lu(e.stateNode.containerInfo), Ht(e), null;
         case 10:
            return rn(e.type), Ht(e), null;
         case 19:
            if (F(Qt), r = e.memoizedState, r === null) return Ht(e), null;
            if (a = (e.flags & 128) !== 0, o = r.rendering, o === null)
               if (a) Qa(r, !1);
               else {
                  if (kt !== 0 || t !== null && (t.flags & 128) !== 0)
                     for (t = e.child; t !== null;) {
                        if (o = ar(t), o !== null) {
                           for (e.flags |= 128, Qa(r, !1), t = o.updateQueue, e.updateQueue = t, ur(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null;) Af(n, t), n = n.sibling;
                           return J(Qt, Qt.current & 1 | 2), e.child
                        }
                        t = t.sibling
                     }
                  r.tail !== null && Qe() > dr && (e.flags |= 128, a = !0, Qa(r, !1), e.lanes = 4194304)
               }
            else {
               if (!a)
                  if (t = ar(o), t !== null) {
                     if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, ur(e, t), Qa(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !Tt) return Ht(e), null
                  } else 2 * Qe() - r.renderingStartTime > dr && n !== 536870912 && (e.flags |= 128, a = !0, Qa(r, !1), e.lanes = 4194304);
               r.isBackwards ? (o.sibling = e.child, e.child = o) : (t = r.last, t !== null ? t.sibling = o : e.child = o, r.last = o)
            }
            return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Qe(), e.sibling = null, t = Qt.current, J(Qt, a ? t & 1 | 2 : t & 1), e) : (Ht(e), null);
         case 22:
         case 23:
            return on(e), ao(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Ht(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ht(e), n = e.updateQueue, n !== null && ur(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && F(fl), null;
         case 24:
            return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), rn(Vt), Ht(e), null;
         case 25:
            return null;
         case 30:
            return null
      }
      throw Error(u(156, e.tag))
   }

   function Bg(t, e) {
      switch (Qs(e), e.tag) {
         case 1:
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
         case 3:
            return rn(Vt), Ot(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
         case 26:
         case 27:
         case 5:
            return Ue(e), null;
         case 13:
            if (on(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
               if (e.alternate === null) throw Error(u(340));
               Na()
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
         case 19:
            return F(Qt), null;
         case 4:
            return Ot(), null;
         case 10:
            return rn(e.type), null;
         case 22:
         case 23:
            return on(e), ao(), t !== null && F(fl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
         case 24:
            return rn(Vt), null;
         case 25:
            return null;
         default:
            return null
      }
   }

   function Wd(t, e) {
      switch (Qs(e), e.tag) {
         case 3:
            rn(Vt), Ot();
            break;
         case 26:
         case 27:
         case 5:
            Ue(e);
            break;
         case 4:
            Ot();
            break;
         case 13:
            on(e);
            break;
         case 19:
            F(Qt);
            break;
         case 10:
            rn(e.type);
            break;
         case 22:
         case 23:
            on(e), ao(), t !== null && F(fl);
            break;
         case 24:
            rn(Vt)
      }
   }

   function Xa(t, e) {
      try {
         var n = e.updateQueue,
            a = n !== null ? n.lastEffect : null;
         if (a !== null) {
            var r = a.next;
            n = r;
            do {
               if ((n.tag & t) === t) {
                  a = void 0;
                  var o = n.create,
                     d = n.inst;
                  a = o(), d.destroy = a
               }
               n = n.next
            } while (n !== r)
         }
      } catch (p) {
         Dt(e, e.return, p)
      }
   }

   function _n(t, e, n) {
      try {
         var a = e.updateQueue,
            r = a !== null ? a.lastEffect : null;
         if (r !== null) {
            var o = r.next;
            a = o;
            do {
               if ((a.tag & t) === t) {
                  var d = a.inst,
                     p = d.destroy;
                  if (p !== void 0) {
                     d.destroy = void 0, r = e;
                     var S = n,
                        _ = p;
                     try {
                        _()
                     } catch (L) {
                        Dt(r, S, L)
                     }
                  }
               }
               a = a.next
            } while (a !== o)
         }
      } catch (L) {
         Dt(e, e.return, L)
      }
   }

   function Id(t) {
      var e = t.updateQueue;
      if (e !== null) {
         var n = t.stateNode;
         try {
            Bf(e, n)
         } catch (a) {
            Dt(t, t.return, a)
         }
      }
   }

   function th(t, e, n) {
      n.props = hl(t.type, t.memoizedProps), n.state = t.memoizedState;
      try {
         n.componentWillUnmount()
      } catch (a) {
         Dt(t, e, a)
      }
   }

   function Za(t, e) {
      try {
         var n = t.ref;
         if (n !== null) {
            switch (t.tag) {
               case 26:
               case 27:
               case 5:
                  var a = t.stateNode;
                  break;
               case 30:
                  a = t.stateNode;
                  break;
               default:
                  a = t.stateNode
            }
            typeof n == "function" ? t.refCleanup = n(a) : n.current = a
         }
      } catch (r) {
         Dt(t, e, r)
      }
   }

   function Ke(t, e) {
      var n = t.ref,
         a = t.refCleanup;
      if (n !== null)
         if (typeof a == "function") try {
            a()
         } catch (r) {
            Dt(t, e, r)
         } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
         } else if (typeof n == "function") try {
            n(null)
         } catch (r) {
            Dt(t, e, r)
         } else n.current = null
   }

   function eh(t) {
      var e = t.type,
         n = t.memoizedProps,
         a = t.stateNode;
      try {
         t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
               n.autoFocus && a.focus();
               break t;
            case "img":
               n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
         }
      }
      catch (r) {
         Dt(t, t.return, r)
      }
   }

   function jo(t, e, n) {
      try {
         var a = t.stateNode;
         sb(a, t.type, n, e), a[re] = e
      } catch (r) {
         Dt(t, t.return, r)
      }
   }

   function nh(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && qn(t.type) || t.tag === 4
   }

   function zo(t) {
      t: for (;;) {
         for (; t.sibling === null;) {
            if (t.return === null || nh(t.return)) return null;
            t = t.return
         }
         for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.tag === 27 && qn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
            t.child.return = t, t = t.child
         }
         if (!(t.flags & 2)) return t.stateNode
      }
   }

   function Uo(t, e, n) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Sr));
      else if (a !== 4 && (a === 27 && qn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
         for (Uo(t, e, n), t = t.sibling; t !== null;) Uo(t, e, n), t = t.sibling
   }

   function cr(t, e, n) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
      else if (a !== 4 && (a === 27 && qn(t.type) && (n = t.stateNode), t = t.child, t !== null))
         for (cr(t, e, n), t = t.sibling; t !== null;) cr(t, e, n), t = t.sibling
   }

   function lh(t) {
      var e = t.stateNode,
         n = t.memoizedProps;
      try {
         for (var a = t.type, r = e.attributes; r.length;) e.removeAttributeNode(r[0]);
         It(e, a, n), e[ee] = t, e[re] = n
      } catch (o) {
         Dt(t, t.return, o)
      }
   }
   var fn = !1,
      Bt = !1,
      Ho = !1,
      ah = typeof WeakSet == "function" ? WeakSet : Set,
      Jt = null;

   function Yg(t, e) {
      if (t = t.containerInfo, ru = Nr, t = pf(t), js(t)) {
         if ("selectionStart" in t) var n = {
            start: t.selectionStart,
            end: t.selectionEnd
         };
         else t: {
            n = (n = t.ownerDocument) && n.defaultView || window;
            var a = n.getSelection && n.getSelection();
            if (a && a.rangeCount !== 0) {
               n = a.anchorNode;
               var r = a.anchorOffset,
                  o = a.focusNode;
               a = a.focusOffset;
               try {
                  n.nodeType, o.nodeType
               } catch {
                  n = null;
                  break t
               }
               var d = 0,
                  p = -1,
                  S = -1,
                  _ = 0,
                  L = 0,
                  Y = t,
                  j = null;
               e: for (;;) {
                  for (var U; Y !== n || r !== 0 && Y.nodeType !== 3 || (p = d + r), Y !== o || a !== 0 && Y.nodeType !== 3 || (S = d + a), Y.nodeType === 3 && (d += Y.nodeValue.length), (U = Y.firstChild) !== null;) j = Y, Y = U;
                  for (;;) {
                     if (Y === t) break e;
                     if (j === n && ++_ === r && (p = d), j === o && ++L === a && (S = d), (U = Y.nextSibling) !== null) break;
                     Y = j, j = Y.parentNode
                  }
                  Y = U
               }
               n = p === -1 || S === -1 ? null : {
                  start: p,
                  end: S
               }
            } else n = null
         }
         n = n || {
            start: 0,
            end: 0
         }
      } else n = null;
      for (su = {
            focusedElem: t,
            selectionRange: n
         }, Nr = !1, Jt = e; Jt !== null;)
         if (e = Jt, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, Jt = t;
         else
            for (; Jt !== null;) {
               switch (e = Jt, o = e.alternate, t = e.flags, e.tag) {
                  case 0:
                     break;
                  case 11:
                  case 15:
                     break;
                  case 1:
                     if ((t & 1024) !== 0 && o !== null) {
                        t = void 0, n = e, r = o.memoizedProps, o = o.memoizedState, a = n.stateNode;
                        try {
                           var ct = hl(n.type, r, n.elementType === n.type);
                           t = a.getSnapshotBeforeUpdate(ct, o), a.__reactInternalSnapshotBeforeUpdate = t
                        } catch (rt) {
                           Dt(n, n.return, rt)
                        }
                     }
                     break;
                  case 3:
                     if ((t & 1024) !== 0) {
                        if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) cu(t);
                        else if (n === 1) switch (t.nodeName) {
                           case "HEAD":
                           case "HTML":
                           case "BODY":
                              cu(t);
                              break;
                           default:
                              t.textContent = ""
                        }
                     }
                     break;
                  case 5:
                  case 26:
                  case 27:
                  case 6:
                  case 4:
                  case 17:
                     break;
                  default:
                     if ((t & 1024) !== 0) throw Error(u(163))
               }
               if (t = e.sibling, t !== null) {
                  t.return = e.return, Jt = t;
                  break
               }
               Jt = e.return
            }
   }

   function ih(t, e, n) {
      var a = n.flags;
      switch (n.tag) {
         case 0:
         case 11:
         case 15:
            Dn(t, n), a & 4 && Xa(5, n);
            break;
         case 1:
            if (Dn(t, n), a & 4)
               if (t = n.stateNode, e === null) try {
                  t.componentDidMount()
               } catch (d) {
                  Dt(n, n.return, d)
               } else {
                  var r = hl(n.type, e.memoizedProps);
                  e = e.memoizedState;
                  try {
                     t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate)
                  } catch (d) {
                     Dt(n, n.return, d)
                  }
               }
            a & 64 && Id(n), a & 512 && Za(n, n.return);
            break;
         case 3:
            if (Dn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
               if (e = null, n.child !== null) switch (n.child.tag) {
                  case 27:
                  case 5:
                     e = n.child.stateNode;
                     break;
                  case 1:
                     e = n.child.stateNode
               }
               try {
                  Bf(t, e)
               } catch (d) {
                  Dt(n, n.return, d)
               }
            }
            break;
         case 27:
            e === null && a & 4 && lh(n);
         case 26:
         case 5:
            Dn(t, n), e === null && a & 4 && eh(n), a & 512 && Za(n, n.return);
            break;
         case 12:
            Dn(t, n);
            break;
         case 13:
            Dn(t, n), a & 4 && oh(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Fg.bind(null, n), mb(t, n))));
            break;
         case 22:
            if (a = n.memoizedState !== null || fn, !a) {
               e = e !== null && e.memoizedState !== null || Bt, r = fn;
               var o = Bt;
               fn = a, (Bt = e) && !o ? jn(t, n, (n.subtreeFlags & 8772) !== 0) : Dn(t, n), fn = r, Bt = o
            }
            break;
         case 30:
            break;
         default:
            Dn(t, n)
      }
   }

   function rh(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, rh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ms(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
   }
   var Ut = null,
      ue = !1;

   function dn(t, e, n) {
      for (n = n.child; n !== null;) sh(t, e, n), n = n.sibling
   }

   function sh(t, e, n) {
      if (he && typeof he.onCommitFiberUnmount == "function") try {
         he.onCommitFiberUnmount(ha, n)
      } catch {}
      switch (n.tag) {
         case 26:
            Bt || Ke(n, e), dn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
            break;
         case 27:
            Bt || Ke(n, e);
            var a = Ut,
               r = ue;
            qn(n.type) && (Ut = n.stateNode, ue = !1), dn(t, e, n), ei(n.stateNode), Ut = a, ue = r;
            break;
         case 5:
            Bt || Ke(n, e);
         case 6:
            if (a = Ut, r = ue, Ut = null, dn(t, e, n), Ut = a, ue = r, Ut !== null)
               if (ue) try {
                  (Ut.nodeType === 9 ? Ut.body : Ut.nodeName === "HTML" ? Ut.ownerDocument.body : Ut).removeChild(n.stateNode)
               } catch (o) {
                  Dt(n, e, o)
               } else try {
                  Ut.removeChild(n.stateNode)
               } catch (o) {
                  Dt(n, e, o)
               }
            break;
         case 18:
            Ut !== null && (ue ? (t = Ut, Jh(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), ui(t)) : Jh(Ut, n.stateNode));
            break;
         case 4:
            a = Ut, r = ue, Ut = n.stateNode.containerInfo, ue = !0, dn(t, e, n), Ut = a, ue = r;
            break;
         case 0:
         case 11:
         case 14:
         case 15:
            Bt || _n(2, n, e), Bt || _n(4, n, e), dn(t, e, n);
            break;
         case 1:
            Bt || (Ke(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && th(n, e, a)), dn(t, e, n);
            break;
         case 21:
            dn(t, e, n);
            break;
         case 22:
            Bt = (a = Bt) || n.memoizedState !== null, dn(t, e, n), Bt = a;
            break;
         default:
            dn(t, e, n)
      }
   }

   function oh(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
         ui(t)
      } catch (n) {
         Dt(e, e.return, n)
      }
   }

   function Gg(t) {
      switch (t.tag) {
         case 13:
         case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new ah), e;
         case 22:
            return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ah), e;
         default:
            throw Error(u(435, t.tag))
      }
   }

   function Lo(t, e) {
      var n = Gg(t);
      e.forEach(function (a) {
         var r = $g.bind(null, t, a);
         n.has(a) || (n.add(a), a.then(r, r))
      })
   }

   function ve(t, e) {
      var n = e.deletions;
      if (n !== null)
         for (var a = 0; a < n.length; a++) {
            var r = n[a],
               o = t,
               d = e,
               p = d;
            t: for (; p !== null;) {
               switch (p.tag) {
                  case 27:
                     if (qn(p.type)) {
                        Ut = p.stateNode, ue = !1;
                        break t
                     }
                     break;
                  case 5:
                     Ut = p.stateNode, ue = !1;
                     break t;
                  case 3:
                  case 4:
                     Ut = p.stateNode.containerInfo, ue = !0;
                     break t
               }
               p = p.return
            }
            if (Ut === null) throw Error(u(160));
            sh(o, d, r), Ut = null, ue = !1, o = r.alternate, o !== null && (o.return = null), r.return = null
         }
      if (e.subtreeFlags & 13878)
         for (e = e.child; e !== null;) uh(e, t), e = e.sibling
   }
   var Le = null;

   function uh(t, e) {
      var n = t.alternate,
         a = t.flags;
      switch (t.tag) {
         case 0:
         case 11:
         case 14:
         case 15:
            ve(e, t), ge(t), a & 4 && (_n(3, t, t.return), Xa(3, t), _n(5, t, t.return));
            break;
         case 1:
            ve(e, t), ge(t), a & 512 && (Bt || n === null || Ke(n, n.return)), a & 64 && fn && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
            break;
         case 26:
            var r = Le;
            if (ve(e, t), ge(t), a & 512 && (Bt || n === null || Ke(n, n.return)), a & 4) {
               var o = n !== null ? n.memoizedState : null;
               if (a = t.memoizedState, n === null)
                  if (a === null)
                     if (t.stateNode === null) {
                        t: {
                           a = t.type,
                           n = t.memoizedProps,
                           r = r.ownerDocument || r;e: switch (a) {
                              case "title":
                                 o = r.getElementsByTagName("title")[0], (!o || o[ya] || o[ee] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = r.createElement(a), r.head.insertBefore(o, r.querySelector("head > title"))), It(o, a, n), o[ee] = t, Kt(o), a = o;
                                 break t;
                              case "link":
                                 var d = lm("link", "href", r).get(a + (n.href || ""));
                                 if (d) {
                                    for (var p = 0; p < d.length; p++)
                                       if (o = d[p], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                          d.splice(p, 1);
                                          break e
                                       }
                                 }
                                 o = r.createElement(a), It(o, a, n), r.head.appendChild(o);
                                 break;
                              case "meta":
                                 if (d = lm("meta", "content", r).get(a + (n.content || ""))) {
                                    for (p = 0; p < d.length; p++)
                                       if (o = d[p], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                          d.splice(p, 1);
                                          break e
                                       }
                                 }
                                 o = r.createElement(a), It(o, a, n), r.head.appendChild(o);
                                 break;
                              default:
                                 throw Error(u(468, a))
                           }
                           o[ee] = t,
                           Kt(o),
                           a = o
                        }
                        t.stateNode = a
                     }
               else am(r, t.type, t.stateNode);
               else t.stateNode = nm(r, a, t.memoizedProps);
               else o !== a ? (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, a === null ? am(r, t.type, t.stateNode) : nm(r, a, t.memoizedProps)) : a === null && t.stateNode !== null && jo(t, t.memoizedProps, n.memoizedProps)
            }
            break;
         case 27:
            ve(e, t), ge(t), a & 512 && (Bt || n === null || Ke(n, n.return)), n !== null && a & 4 && jo(t, t.memoizedProps, n.memoizedProps);
            break;
         case 5:
            if (ve(e, t), ge(t), a & 512 && (Bt || n === null || Ke(n, n.return)), t.flags & 32) {
               r = t.stateNode;
               try {
                  Cl(r, "")
               } catch (U) {
                  Dt(t, t.return, U)
               }
            }
            a & 4 && t.stateNode != null && (r = t.memoizedProps, jo(t, r, n !== null ? n.memoizedProps : r)), a & 1024 && (Ho = !0);
            break;
         case 6:
            if (ve(e, t), ge(t), a & 4) {
               if (t.stateNode === null) throw Error(u(162));
               a = t.memoizedProps, n = t.stateNode;
               try {
                  n.nodeValue = a
               } catch (U) {
                  Dt(t, t.return, U)
               }
            }
            break;
         case 3:
            if (Ar = null, r = Le, Le = Er(e.containerInfo), ve(e, t), Le = r, ge(t), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
               ui(e.containerInfo)
            } catch (U) {
               Dt(t, t.return, U)
            }
            Ho && (Ho = !1, ch(t));
            break;
         case 4:
            a = Le, Le = Er(t.stateNode.containerInfo), ve(e, t), ge(t), Le = a;
            break;
         case 12:
            ve(e, t), ge(t);
            break;
         case 13:
            ve(e, t), ge(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Vo = Qe()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Lo(t, a)));
            break;
         case 22:
            r = t.memoizedState !== null;
            var S = n !== null && n.memoizedState !== null,
               _ = fn,
               L = Bt;
            if (fn = _ || r, Bt = L || S, ve(e, t), Bt = L, fn = _, ge(t), a & 8192) t: for (e = t.stateNode, e._visibility = r ? e._visibility & -2 : e._visibility | 1, r && (n === null || S || fn || Bt || ml(t)), n = null, e = t;;) {
               if (e.tag === 5 || e.tag === 26) {
                  if (n === null) {
                     S = n = e;
                     try {
                        if (o = S.stateNode, r) d = o.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                        else {
                           p = S.stateNode;
                           var Y = S.memoizedProps.style,
                              j = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                           p.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim()
                        }
                     } catch (U) {
                        Dt(S, S.return, U)
                     }
                  }
               } else if (e.tag === 6) {
                  if (n === null) {
                     S = e;
                     try {
                        S.stateNode.nodeValue = r ? "" : S.memoizedProps
                     } catch (U) {
                        Dt(S, S.return, U)
                     }
                  }
               } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                  e.child.return = e, e = e.child;
                  continue
               }
               if (e === t) break t;
               for (; e.sibling === null;) {
                  if (e.return === null || e.return === t) break t;
                  n === e && (n = null), e = e.return
               }
               n === e && (n = null), e.sibling.return = e.return, e = e.sibling
            }
            a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Lo(t, n))));
            break;
         case 19:
            ve(e, t), ge(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Lo(t, a)));
            break;
         case 30:
            break;
         case 21:
            break;
         default:
            ve(e, t), ge(t)
      }
   }

   function ge(t) {
      var e = t.flags;
      if (e & 2) {
         try {
            for (var n, a = t.return; a !== null;) {
               if (nh(a)) {
                  n = a;
                  break
               }
               a = a.return
            }
            if (n == null) throw Error(u(160));
            switch (n.tag) {
               case 27:
                  var r = n.stateNode,
                     o = zo(t);
                  cr(t, o, r);
                  break;
               case 5:
                  var d = n.stateNode;
                  n.flags & 32 && (Cl(d, ""), n.flags &= -33);
                  var p = zo(t);
                  cr(t, p, d);
                  break;
               case 3:
               case 4:
                  var S = n.stateNode.containerInfo,
                     _ = zo(t);
                  Uo(t, _, S);
                  break;
               default:
                  throw Error(u(161))
            }
         } catch (L) {
            Dt(t, t.return, L)
         }
         t.flags &= -3
      }
      e & 4096 && (t.flags &= -4097)
   }

   function ch(t) {
      if (t.subtreeFlags & 1024)
         for (t = t.child; t !== null;) {
            var e = t;
            ch(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
         }
   }

   function Dn(t, e) {
      if (e.subtreeFlags & 8772)
         for (e = e.child; e !== null;) ih(t, e.alternate, e), e = e.sibling
   }

   function ml(t) {
      for (t = t.child; t !== null;) {
         var e = t;
         switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
               _n(4, e, e.return), ml(e);
               break;
            case 1:
               Ke(e, e.return);
               var n = e.stateNode;
               typeof n.componentWillUnmount == "function" && th(e, e.return, n), ml(e);
               break;
            case 27:
               ei(e.stateNode);
            case 26:
            case 5:
               Ke(e, e.return), ml(e);
               break;
            case 22:
               e.memoizedState === null && ml(e);
               break;
            case 30:
               ml(e);
               break;
            default:
               ml(e)
         }
         t = t.sibling
      }
   }

   function jn(t, e, n) {
      for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
         var a = e.alternate,
            r = t,
            o = e,
            d = o.flags;
         switch (o.tag) {
            case 0:
            case 11:
            case 15:
               jn(r, o, n), Xa(4, o);
               break;
            case 1:
               if (jn(r, o, n), a = o, r = a.stateNode, typeof r.componentDidMount == "function") try {
                  r.componentDidMount()
               } catch (_) {
                  Dt(a, a.return, _)
               }
               if (a = o, r = a.updateQueue, r !== null) {
                  var p = a.stateNode;
                  try {
                     var S = r.shared.hiddenCallbacks;
                     if (S !== null)
                        for (r.shared.hiddenCallbacks = null, r = 0; r < S.length; r++) qf(S[r], p)
                  } catch (_) {
                     Dt(a, a.return, _)
                  }
               }
               n && d & 64 && Id(o), Za(o, o.return);
               break;
            case 27:
               lh(o);
            case 26:
            case 5:
               jn(r, o, n), n && a === null && d & 4 && eh(o), Za(o, o.return);
               break;
            case 12:
               jn(r, o, n);
               break;
            case 13:
               jn(r, o, n), n && d & 4 && oh(r, o);
               break;
            case 22:
               o.memoizedState === null && jn(r, o, n), Za(o, o.return);
               break;
            case 30:
               break;
            default:
               jn(r, o, n)
         }
         e = e.sibling
      }
   }

   function ko(t, e) {
      var n = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && _a(n))
   }

   function qo(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && _a(t))
   }

   function Pe(t, e, n, a) {
      if (e.subtreeFlags & 10256)
         for (e = e.child; e !== null;) fh(t, e, n, a), e = e.sibling
   }

   function fh(t, e, n, a) {
      var r = e.flags;
      switch (e.tag) {
         case 0:
         case 11:
         case 15:
            Pe(t, e, n, a), r & 2048 && Xa(9, e);
            break;
         case 1:
            Pe(t, e, n, a);
            break;
         case 3:
            Pe(t, e, n, a), r & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && _a(t)));
            break;
         case 12:
            if (r & 2048) {
               Pe(t, e, n, a), t = e.stateNode;
               try {
                  var o = e.memoizedProps,
                     d = o.id,
                     p = o.onPostCommit;
                  typeof p == "function" && p(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
               } catch (S) {
                  Dt(e, e.return, S)
               }
            } else Pe(t, e, n, a);
            break;
         case 13:
            Pe(t, e, n, a);
            break;
         case 23:
            break;
         case 22:
            o = e.stateNode, d = e.alternate, e.memoizedState !== null ? o._visibility & 2 ? Pe(t, e, n, a) : Ka(t, e) : o._visibility & 2 ? Pe(t, e, n, a) : (o._visibility |= 2, Pl(t, e, n, a, (e.subtreeFlags & 10256) !== 0)), r & 2048 && ko(d, e);
            break;
         case 24:
            Pe(t, e, n, a), r & 2048 && qo(e.alternate, e);
            break;
         default:
            Pe(t, e, n, a)
      }
   }

   function Pl(t, e, n, a, r) {
      for (r = r && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null;) {
         var o = t,
            d = e,
            p = n,
            S = a,
            _ = d.flags;
         switch (d.tag) {
            case 0:
            case 11:
            case 15:
               Pl(o, d, p, S, r), Xa(8, d);
               break;
            case 23:
               break;
            case 22:
               var L = d.stateNode;
               d.memoizedState !== null ? L._visibility & 2 ? Pl(o, d, p, S, r) : Ka(o, d) : (L._visibility |= 2, Pl(o, d, p, S, r)), r && _ & 2048 && ko(d.alternate, d);
               break;
            case 24:
               Pl(o, d, p, S, r), r && _ & 2048 && qo(d.alternate, d);
               break;
            default:
               Pl(o, d, p, S, r)
         }
         e = e.sibling
      }
   }

   function Ka(t, e) {
      if (e.subtreeFlags & 10256)
         for (e = e.child; e !== null;) {
            var n = t,
               a = e,
               r = a.flags;
            switch (a.tag) {
               case 22:
                  Ka(n, a), r & 2048 && ko(a.alternate, a);
                  break;
               case 24:
                  Ka(n, a), r & 2048 && qo(a.alternate, a);
                  break;
               default:
                  Ka(n, a)
            }
            e = e.sibling
         }
   }
   var Pa = 8192;

   function Jl(t) {
      if (t.subtreeFlags & Pa)
         for (t = t.child; t !== null;) dh(t), t = t.sibling
   }

   function dh(t) {
      switch (t.tag) {
         case 26:
            Jl(t), t.flags & Pa && t.memoizedState !== null && Rb(Le, t.memoizedState, t.memoizedProps);
            break;
         case 5:
            Jl(t);
            break;
         case 3:
         case 4:
            var e = Le;
            Le = Er(t.stateNode.containerInfo), Jl(t), Le = e;
            break;
         case 22:
            t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Pa, Pa = 16777216, Jl(t), Pa = e) : Jl(t));
            break;
         default:
            Jl(t)
      }
   }

   function hh(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
         e.child = null;
         do e = t.sibling, t.sibling = null, t = e; while (t !== null)
      }
   }

   function Ja(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
         if (e !== null)
            for (var n = 0; n < e.length; n++) {
               var a = e[n];
               Jt = a, ph(a, t)
            }
         hh(t)
      }
      if (t.subtreeFlags & 10256)
         for (t = t.child; t !== null;) mh(t), t = t.sibling
   }

   function mh(t) {
      switch (t.tag) {
         case 0:
         case 11:
         case 15:
            Ja(t), t.flags & 2048 && _n(9, t, t.return);
            break;
         case 3:
            Ja(t);
            break;
         case 12:
            Ja(t);
            break;
         case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, fr(t)) : Ja(t);
            break;
         default:
            Ja(t)
      }
   }

   function fr(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
         if (e !== null)
            for (var n = 0; n < e.length; n++) {
               var a = e[n];
               Jt = a, ph(a, t)
            }
         hh(t)
      }
      for (t = t.child; t !== null;) {
         switch (e = t, e.tag) {
            case 0:
            case 11:
            case 15:
               _n(8, e, e.return), fr(e);
               break;
            case 22:
               n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, fr(e));
               break;
            default:
               fr(e)
         }
         t = t.sibling
      }
   }

   function ph(t, e) {
      for (; Jt !== null;) {
         var n = Jt;
         switch (n.tag) {
            case 0:
            case 11:
            case 15:
               _n(8, n, e);
               break;
            case 23:
            case 22:
               if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                  var a = n.memoizedState.cachePool.pool;
                  a != null && a.refCount++
               }
               break;
            case 24:
               _a(n.memoizedState.cache)
         }
         if (a = n.child, a !== null) a.return = n, Jt = a;
         else t: for (n = t; Jt !== null;) {
            a = Jt;
            var r = a.sibling,
               o = a.return;
            if (rh(a), a === n) {
               Jt = null;
               break t
            }
            if (r !== null) {
               r.return = o, Jt = r;
               break t
            }
            Jt = o
         }
      }
   }
   var Vg = {
         getCacheForType: function (t) {
            var e = ne(Vt),
               n = e.data.get(t);
            return n === void 0 && (n = t(), e.data.set(t, n)), n
         }
      },
      Qg = typeof WeakMap == "function" ? WeakMap : Map,
      Rt = 0,
      jt = null,
      gt = null,
      St = 0,
      Nt = 0,
      be = null,
      zn = !1,
      Fl = !1,
      Bo = !1,
      hn = 0,
      kt = 0,
      Un = 0,
      pl = 0,
      Yo = 0,
      De = 0,
      $l = 0,
      Fa = null,
      ce = null,
      Go = !1,
      Vo = 0,
      dr = 1 / 0,
      hr = null,
      Hn = null,
      Wt = 0,
      Ln = null,
      Wl = null,
      Il = 0,
      Qo = 0,
      Xo = null,
      yh = null,
      $a = 0,
      Zo = null;

   function xe() {
      if ((Rt & 2) !== 0 && St !== 0) return St & -St;
      if (M.T !== null) {
         var t = Bl;
         return t !== 0 ? t : Io()
      }
      return _c()
   }

   function vh() {
      De === 0 && (De = (St & 536870912) === 0 || Tt ? Rc() : 536870912);
      var t = _e.current;
      return t !== null && (t.flags |= 32), De
   }

   function Se(t, e, n) {
      (t === jt && (Nt === 2 || Nt === 9) || t.cancelPendingCommit !== null) && (ta(t, 0), kn(t, St, De, !1)), pa(t, n), ((Rt & 2) === 0 || t !== jt) && (t === jt && ((Rt & 2) === 0 && (pl |= n), kt === 4 && kn(t, St, De, !1)), Je(t))
   }

   function gh(t, e, n) {
      if ((Rt & 6) !== 0) throw Error(u(327));
      var a = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || ma(t, e),
         r = a ? Kg(t, e) : Jo(t, e, !0),
         o = a;
      do {
         if (r === 0) {
            Fl && !a && kn(t, e, 0, !1);
            break
         } else {
            if (n = t.current.alternate, o && !Xg(n)) {
               r = Jo(t, e, !1), o = !1;
               continue
            }
            if (r === 2) {
               if (o = e, t.errorRecoveryDisabledLanes & o) var d = 0;
               else d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
               if (d !== 0) {
                  e = d;
                  t: {
                     var p = t;r = Fa;
                     var S = p.current.memoizedState.isDehydrated;
                     if (S && (ta(p, d).flags |= 256), d = Jo(p, d, !1), d !== 2) {
                        if (Bo && !S) {
                           p.errorRecoveryDisabledLanes |= o, pl |= o, r = 4;
                           break t
                        }
                        o = ce, ce = r, o !== null && (ce === null ? ce = o : ce.push.apply(ce, o))
                     }
                     r = d
                  }
                  if (o = !1, r !== 2) continue
               }
            }
            if (r === 1) {
               ta(t, 0), kn(t, e, 0, !0);
               break
            }
            t: {
               switch (a = t, o = r, o) {
                  case 0:
                  case 1:
                     throw Error(u(345));
                  case 4:
                     if ((e & 4194048) !== e) break;
                  case 6:
                     kn(a, e, De, !zn);
                     break t;
                  case 2:
                     ce = null;
                     break;
                  case 3:
                  case 5:
                     break;
                  default:
                     throw Error(u(329))
               }
               if ((e & 62914560) === e && (r = Vo + 300 - Qe(), 10 < r)) {
                  if (kn(a, e, De, !zn), Ti(a, 0, !0) !== 0) break t;
                  a.timeoutHandle = Kh(bh.bind(null, a, n, ce, hr, Go, e, De, pl, $l, zn, o, 2, -0, 0), r);
                  break t
               }
               bh(a, n, ce, hr, Go, e, De, pl, $l, zn, o, 0, -0, 0)
            }
         }
         break
      } while (!0);
      Je(t)
   }

   function bh(t, e, n, a, r, o, d, p, S, _, L, Y, j, U) {
      if (t.timeoutHandle = -1, Y = e.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (ai = {
            stylesheets: null,
            count: 0,
            unsuspend: Ob
         }, dh(e), Y = Nb(), Y !== null)) {
         t.cancelPendingCommit = Y(Oh.bind(null, t, e, o, n, a, r, d, p, S, L, 1, j, U)), kn(t, o, d, !_);
         return
      }
      Oh(t, e, o, n, a, r, d, p, S)
   }

   function Xg(t) {
      for (var e = t;;) {
         var n = e.tag;
         if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
            for (var a = 0; a < n.length; a++) {
               var r = n[a],
                  o = r.getSnapshot;
               r = r.value;
               try {
                  if (!pe(o(), r)) return !1
               } catch {
                  return !1
               }
            }
         if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
         else {
            if (e === t) break;
            for (; e.sibling === null;) {
               if (e.return === null || e.return === t) return !0;
               e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
         }
      }
      return !0
   }

   function kn(t, e, n, a) {
      e &= ~Yo, e &= ~pl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var r = e; 0 < r;) {
         var o = 31 - me(r),
            d = 1 << o;
         a[o] = -1, r &= ~d
      }
      n !== 0 && Cc(t, n, e)
   }

   function mr() {
      return (Rt & 6) === 0 ? (Wa(0), !1) : !0
   }

   function Ko() {
      if (gt !== null) {
         if (Nt === 0) var t = gt.return;
         else t = gt, an = ul = null, uo(t), Zl = null, Ga = 0, t = gt;
         for (; t !== null;) Wd(t.alternate, t), t = t.return;
         gt = null
      }
   }

   function ta(t, e) {
      var n = t.timeoutHandle;
      n !== -1 && (t.timeoutHandle = -1, ub(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Ko(), jt = t, gt = n = en(t.current, null), St = e, Nt = 0, be = null, zn = !1, Fl = ma(t, e), Bo = !1, $l = De = Yo = pl = Un = kt = 0, ce = Fa = null, Go = !1, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0)
         for (t = t.entanglements, a &= e; 0 < a;) {
            var r = 31 - me(a),
               o = 1 << r;
            e |= t[r], a &= ~o
         }
      return hn = e, Hi(), n
   }

   function xh(t, e) {
      mt = null, M.H = er, e === ja || e === Xi ? (e = Lf(), Nt = 3) : e === zf ? (e = Lf(), Nt = 4) : Nt = e === kd ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, be = e, gt === null && (kt = 1, rr(t, Re(e, t.current)))
   }

   function Sh() {
      var t = M.H;
      return M.H = er, t === null ? er : t
   }

   function wh() {
      var t = M.A;
      return M.A = Vg, t
   }

   function Po() {
      kt = 4, zn || (St & 4194048) !== St && _e.current !== null || (Fl = !0), (Un & 134217727) === 0 && (pl & 134217727) === 0 || jt === null || kn(jt, St, De, !1)
   }

   function Jo(t, e, n) {
      var a = Rt;
      Rt |= 2;
      var r = Sh(),
         o = wh();
      (jt !== t || St !== e) && (hr = null, ta(t, e)), e = !1;
      var d = kt;
      t: do try {
            if (Nt !== 0 && gt !== null) {
               var p = gt,
                  S = be;
               switch (Nt) {
                  case 8:
                     Ko(), d = 6;
                     break t;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                     _e.current === null && (e = !0);
                     var _ = Nt;
                     if (Nt = 0, be = null, ea(t, p, S, _), n && Fl) {
                        d = 0;
                        break t
                     }
                     break;
                  default:
                     _ = Nt, Nt = 0, be = null, ea(t, p, S, _)
               }
            }
            Zg(), d = kt;
            break
         } catch (L) {
            xh(t, L)
         }
         while (!0);
         return e && t.shellSuspendCounter++, an = ul = null, Rt = a, M.H = r, M.A = o, gt === null && (jt = null, St = 0, Hi()), d
   }

   function Zg() {
      for (; gt !== null;) Eh(gt)
   }

   function Kg(t, e) {
      var n = Rt;
      Rt |= 2;
      var a = Sh(),
         r = wh();
      jt !== t || St !== e ? (hr = null, dr = Qe() + 500, ta(t, e)) : Fl = ma(t, e);
      t: do try {
            if (Nt !== 0 && gt !== null) {
               e = gt;
               var o = be;
               e: switch (Nt) {
                  case 1:
                     Nt = 0, be = null, ea(t, e, o, 1);
                     break;
                  case 2:
                  case 9:
                     if (Uf(o)) {
                        Nt = 0, be = null, Th(e);
                        break
                     }
                     e = function () {
                        Nt !== 2 && Nt !== 9 || jt !== t || (Nt = 7), Je(t)
                     }, o.then(e, e);
                     break t;
                  case 3:
                     Nt = 7;
                     break t;
                  case 4:
                     Nt = 5;
                     break t;
                  case 7:
                     Uf(o) ? (Nt = 0, be = null, Th(e)) : (Nt = 0, be = null, ea(t, e, o, 7));
                     break;
                  case 5:
                     var d = null;
                     switch (gt.tag) {
                        case 26:
                           d = gt.memoizedState;
                        case 5:
                        case 27:
                           var p = gt;
                           if (!d || im(d)) {
                              Nt = 0, be = null;
                              var S = p.sibling;
                              if (S !== null) gt = S;
                              else {
                                 var _ = p.return;
                                 _ !== null ? (gt = _, pr(_)) : gt = null
                              }
                              break e
                           }
                     }
                     Nt = 0, be = null, ea(t, e, o, 5);
                     break;
                  case 6:
                     Nt = 0, be = null, ea(t, e, o, 6);
                     break;
                  case 8:
                     Ko(), kt = 6;
                     break t;
                  default:
                     throw Error(u(462))
               }
            }
            Pg();
            break
         } catch (L) {
            xh(t, L)
         }
         while (!0);
         return an = ul = null, M.H = a, M.A = r, Rt = n, gt !== null ? 0 : (jt = null, St = 0, Hi(), kt)
   }

   function Pg() {
      for (; gt !== null && !yv();) Eh(gt)
   }

   function Eh(t) {
      var e = Fd(t.alternate, t, hn);
      t.memoizedProps = t.pendingProps, e === null ? pr(t) : gt = e
   }

   function Th(t) {
      var e = t,
         n = e.alternate;
      switch (e.tag) {
         case 15:
         case 0:
            e = Qd(n, e, e.pendingProps, e.type, void 0, St);
            break;
         case 11:
            e = Qd(n, e, e.pendingProps, e.type.render, e.ref, St);
            break;
         case 5:
            uo(e);
         default:
            Wd(n, e), e = gt = Af(e, hn), e = Fd(n, e, hn)
      }
      t.memoizedProps = t.pendingProps, e === null ? pr(t) : gt = e
   }

   function ea(t, e, n, a) {
      an = ul = null, uo(e), Zl = null, Ga = 0;
      var r = e.return;
      try {
         if (Lg(t, r, e, n, St)) {
            kt = 1, rr(t, Re(n, t.current)), gt = null;
            return
         }
      } catch (o) {
         if (r !== null) throw gt = r, o;
         kt = 1, rr(t, Re(n, t.current)), gt = null;
         return
      }
      e.flags & 32768 ? (Tt || a === 1 ? t = !0 : Fl || (St & 536870912) !== 0 ? t = !1 : (zn = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = _e.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ah(e, t)) : pr(e)
   }

   function pr(t) {
      var e = t;
      do {
         if ((e.flags & 32768) !== 0) {
            Ah(e, zn);
            return
         }
         t = e.return;
         var n = qg(e.alternate, e, hn);
         if (n !== null) {
            gt = n;
            return
         }
         if (e = e.sibling, e !== null) {
            gt = e;
            return
         }
         gt = e = t
      } while (e !== null);
      kt === 0 && (kt = 5)
   }

   function Ah(t, e) {
      do {
         var n = Bg(t.alternate, t);
         if (n !== null) {
            n.flags &= 32767, gt = n;
            return
         }
         if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
            gt = t;
            return
         }
         gt = t = n
      } while (t !== null);
      kt = 6, gt = null
   }

   function Oh(t, e, n, a, r, o, d, p, S) {
      t.cancelPendingCommit = null;
      do yr(); while (Wt !== 0);
      if ((Rt & 6) !== 0) throw Error(u(327));
      if (e !== null) {
         if (e === t.current) throw Error(u(177));
         if (o = e.lanes | e.childLanes, o |= ks, Ov(t, n, o, d, p, S), t === jt && (gt = jt = null, St = 0), Wl = e, Ln = t, Il = n, Qo = o, Xo = r, yh = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Wg(Si, function () {
               return _h(), null
            })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
            a = M.T, M.T = null, r = Q.p, Q.p = 2, d = Rt, Rt |= 4;
            try {
               Yg(t, e, n)
            } finally {
               Rt = d, Q.p = r, M.T = a
            }
         }
         Wt = 1, Rh(), Nh(), Ch()
      }
   }

   function Rh() {
      if (Wt === 1) {
         Wt = 0;
         var t = Ln,
            e = Wl,
            n = (e.flags & 13878) !== 0;
         if ((e.subtreeFlags & 13878) !== 0 || n) {
            n = M.T, M.T = null;
            var a = Q.p;
            Q.p = 2;
            var r = Rt;
            Rt |= 4;
            try {
               uh(e, t);
               var o = su,
                  d = pf(t.containerInfo),
                  p = o.focusedElem,
                  S = o.selectionRange;
               if (d !== p && p && p.ownerDocument && mf(p.ownerDocument.documentElement, p)) {
                  if (S !== null && js(p)) {
                     var _ = S.start,
                        L = S.end;
                     if (L === void 0 && (L = _), "selectionStart" in p) p.selectionStart = _, p.selectionEnd = Math.min(L, p.value.length);
                     else {
                        var Y = p.ownerDocument || document,
                           j = Y && Y.defaultView || window;
                        if (j.getSelection) {
                           var U = j.getSelection(),
                              ct = p.textContent.length,
                              rt = Math.min(S.start, ct),
                              _t = S.end === void 0 ? rt : Math.min(S.end, ct);
                           !U.extend && rt > _t && (d = _t, _t = rt, rt = d);
                           var O = hf(p, rt),
                              T = hf(p, _t);
                           if (O && T && (U.rangeCount !== 1 || U.anchorNode !== O.node || U.anchorOffset !== O.offset || U.focusNode !== T.node || U.focusOffset !== T.offset)) {
                              var C = Y.createRange();
                              C.setStart(O.node, O.offset), U.removeAllRanges(), rt > _t ? (U.addRange(C), U.extend(T.node, T.offset)) : (C.setEnd(T.node, T.offset), U.addRange(C))
                           }
                        }
                     }
                  }
                  for (Y = [], U = p; U = U.parentNode;) U.nodeType === 1 && Y.push({
                     element: U,
                     left: U.scrollLeft,
                     top: U.scrollTop
                  });
                  for (typeof p.focus == "function" && p.focus(), p = 0; p < Y.length; p++) {
                     var q = Y[p];
                     q.element.scrollLeft = q.left, q.element.scrollTop = q.top
                  }
               }
               Nr = !!ru, su = ru = null
            } finally {
               Rt = r, Q.p = a, M.T = n
            }
         }
         t.current = e, Wt = 2
      }
   }

   function Nh() {
      if (Wt === 2) {
         Wt = 0;
         var t = Ln,
            e = Wl,
            n = (e.flags & 8772) !== 0;
         if ((e.subtreeFlags & 8772) !== 0 || n) {
            n = M.T, M.T = null;
            var a = Q.p;
            Q.p = 2;
            var r = Rt;
            Rt |= 4;
            try {
               ih(t, e.alternate, e)
            } finally {
               Rt = r, Q.p = a, M.T = n
            }
         }
         Wt = 3
      }
   }

   function Ch() {
      if (Wt === 4 || Wt === 3) {
         Wt = 0, vv();
         var t = Ln,
            e = Wl,
            n = Il,
            a = yh;
         (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0, Wl = Ln = null, Mh(t, t.pendingLanes));
         var r = t.pendingLanes;
         if (r === 0 && (Hn = null), ds(n), e = e.stateNode, he && typeof he.onCommitFiberRoot == "function") try {
            he.onCommitFiberRoot(ha, e, void 0, (e.current.flags & 128) === 128)
         } catch {}
         if (a !== null) {
            e = M.T, r = Q.p, Q.p = 2, M.T = null;
            try {
               for (var o = t.onRecoverableError, d = 0; d < a.length; d++) {
                  var p = a[d];
                  o(p.value, {
                     componentStack: p.stack
                  })
               }
            } finally {
               M.T = e, Q.p = r
            }
         }(Il & 3) !== 0 && yr(), Je(t), r = t.pendingLanes, (n & 4194090) !== 0 && (r & 42) !== 0 ? t === Zo ? $a++ : ($a = 0, Zo = t) : $a = 0, Wa(0)
      }
   }

   function Mh(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, _a(e)))
   }

   function yr(t) {
      return Rh(), Nh(), Ch(), _h()
   }

   function _h() {
      if (Wt !== 5) return !1;
      var t = Ln,
         e = Qo;
      Qo = 0;
      var n = ds(Il),
         a = M.T,
         r = Q.p;
      try {
         Q.p = 32 > n ? 32 : n, M.T = null, n = Xo, Xo = null;
         var o = Ln,
            d = Il;
         if (Wt = 0, Wl = Ln = null, Il = 0, (Rt & 6) !== 0) throw Error(u(331));
         var p = Rt;
         if (Rt |= 4, mh(o.current), fh(o, o.current, d, n), Rt = p, Wa(0, !1), he && typeof he.onPostCommitFiberRoot == "function") try {
            he.onPostCommitFiberRoot(ha, o)
         } catch {}
         return !0
      } finally {
         Q.p = r, M.T = a, Mh(t, e)
      }
   }

   function Dh(t, e, n) {
      e = Re(n, e), e = To(t.stateNode, e, 2), t = Rn(t, e, 2), t !== null && (pa(t, 2), Je(t))
   }

   function Dt(t, e, n) {
      if (t.tag === 3) Dh(t, t, n);
      else
         for (; e !== null;) {
            if (e.tag === 3) {
               Dh(e, t, n);
               break
            } else if (e.tag === 1) {
               var a = e.stateNode;
               if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Hn === null || !Hn.has(a))) {
                  t = Re(n, t), n = Hd(2), a = Rn(e, n, 2), a !== null && (Ld(n, a, e, t), pa(a, 2), Je(a));
                  break
               }
            }
            e = e.return
         }
   }

   function Fo(t, e, n) {
      var a = t.pingCache;
      if (a === null) {
         a = t.pingCache = new Qg;
         var r = new Set;
         a.set(e, r)
      } else r = a.get(e), r === void 0 && (r = new Set, a.set(e, r));
      r.has(n) || (Bo = !0, r.add(n), t = Jg.bind(null, t, e, n), e.then(t, t))
   }

   function Jg(t, e, n) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, jt === t && (St & n) === n && (kt === 4 || kt === 3 && (St & 62914560) === St && 300 > Qe() - Vo ? (Rt & 2) === 0 && ta(t, 0) : Yo |= n, $l === St && ($l = 0)), Je(t)
   }

   function jh(t, e) {
      e === 0 && (e = Nc()), t = Hl(t, e), t !== null && (pa(t, e), Je(t))
   }

   function Fg(t) {
      var e = t.memoizedState,
         n = 0;
      e !== null && (n = e.retryLane), jh(t, n)
   }

   function $g(t, e) {
      var n = 0;
      switch (t.tag) {
         case 13:
            var a = t.stateNode,
               r = t.memoizedState;
            r !== null && (n = r.retryLane);
            break;
         case 19:
            a = t.stateNode;
            break;
         case 22:
            a = t.stateNode._retryCache;
            break;
         default:
            throw Error(u(314))
      }
      a !== null && a.delete(e), jh(t, n)
   }

   function Wg(t, e) {
      return Te(t, e)
   }
   var vr = null,
      na = null,
      $o = !1,
      gr = !1,
      Wo = !1,
      yl = 0;

   function Je(t) {
      t !== na && t.next === null && (na === null ? vr = na = t : na = na.next = t), gr = !0, $o || ($o = !0, tb())
   }

   function Wa(t, e) {
      if (!Wo && gr) {
         Wo = !0;
         do
            for (var n = !1, a = vr; a !== null;) {
               if (t !== 0) {
                  var r = a.pendingLanes;
                  if (r === 0) var o = 0;
                  else {
                     var d = a.suspendedLanes,
                        p = a.pingedLanes;
                     o = (1 << 31 - me(42 | t) + 1) - 1, o &= r & ~(d & ~p), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0
                  }
                  o !== 0 && (n = !0, Lh(a, o))
               } else o = St, o = Ti(a, a === jt ? o : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (o & 3) === 0 || ma(a, o) || (n = !0, Lh(a, o));
               a = a.next
            }
         while (n);
         Wo = !1
      }
   }

   function Ig() {
      zh()
   }

   function zh() {
      gr = $o = !1;
      var t = 0;
      yl !== 0 && (ob() && (t = yl), yl = 0);
      for (var e = Qe(), n = null, a = vr; a !== null;) {
         var r = a.next,
            o = Uh(a, e);
         o === 0 ? (a.next = null, n === null ? vr = r : n.next = r, r === null && (na = n)) : (n = a, (t !== 0 || (o & 3) !== 0) && (gr = !0)), a = r
      }
      Wa(t)
   }

   function Uh(t, e) {
      for (var n = t.suspendedLanes, a = t.pingedLanes, r = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o;) {
         var d = 31 - me(o),
            p = 1 << d,
            S = r[d];
         S === -1 ? ((p & n) === 0 || (p & a) !== 0) && (r[d] = Av(p, e)) : S <= e && (t.expiredLanes |= p), o &= ~p
      }
      if (e = jt, n = St, n = Ti(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, n === 0 || t === e && (Nt === 2 || Nt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && xn(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((n & 3) === 0 || ma(t, n)) {
         if (e = n & -n, e === t.callbackPriority) return e;
         switch (a !== null && xn(a), ds(n)) {
            case 2:
            case 8:
               n = Ac;
               break;
            case 32:
               n = Si;
               break;
            case 268435456:
               n = Oc;
               break;
            default:
               n = Si
         }
         return a = Hh.bind(null, t), n = Te(n, a), t.callbackPriority = e, t.callbackNode = n, e
      }
      return a !== null && a !== null && xn(a), t.callbackPriority = 2, t.callbackNode = null, 2
   }

   function Hh(t, e) {
      if (Wt !== 0 && Wt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var n = t.callbackNode;
      if (yr() && t.callbackNode !== n) return null;
      var a = St;
      return a = Ti(t, t === jt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (gh(t, a, e), Uh(t, Qe()), t.callbackNode != null && t.callbackNode === n ? Hh.bind(null, t) : null)
   }

   function Lh(t, e) {
      if (yr()) return null;
      gh(t, e, !0)
   }

   function tb() {
      cb(function () {
         (Rt & 6) !== 0 ? Te(Tc, Ig) : zh()
      })
   }

   function Io() {
      return yl === 0 && (yl = Rc()), yl
   }

   function kh(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ci("" + t)
   }

   function qh(t, e) {
      var n = e.ownerDocument.createElement("input");
      return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t
   }

   function eb(t, e, n, a, r) {
      if (e === "submit" && n && n.stateNode === r) {
         var o = kh((r[re] || null).action),
            d = a.submitter;
         d && (e = (e = d[re] || null) ? kh(e.formAction) : d.getAttribute("formAction"), e !== null && (o = e, d = null));
         var p = new ji("action", "action", null, a, r);
         t.push({
            event: p,
            listeners: [{
               instance: null,
               listener: function () {
                  if (a.defaultPrevented) {
                     if (yl !== 0) {
                        var S = d ? qh(r, d) : new FormData(r);
                        bo(n, {
                           pending: !0,
                           data: S,
                           method: r.method,
                           action: o
                        }, null, S)
                     }
                  } else typeof o == "function" && (p.preventDefault(), S = d ? qh(r, d) : new FormData(r), bo(n, {
                     pending: !0,
                     data: S,
                     method: r.method,
                     action: o
                  }, o, S))
               },
               currentTarget: r
            }]
         })
      }
   }
   for (var tu = 0; tu < Ls.length; tu++) {
      var eu = Ls[tu],
         nb = eu.toLowerCase(),
         lb = eu[0].toUpperCase() + eu.slice(1);
      He(nb, "on" + lb)
   }
   He(gf, "onAnimationEnd"), He(bf, "onAnimationIteration"), He(xf, "onAnimationStart"), He("dblclick", "onDoubleClick"), He("focusin", "onFocus"), He("focusout", "onBlur"), He(xg, "onTransitionRun"), He(Sg, "onTransitionStart"), He(wg, "onTransitionCancel"), He(Sf, "onTransitionEnd"), Ol("onMouseEnter", ["mouseout", "mouseover"]), Ol("onMouseLeave", ["mouseout", "mouseover"]), Ol("onPointerEnter", ["pointerout", "pointerover"]), Ol("onPointerLeave", ["pointerout", "pointerover"]), tl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), tl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), tl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), tl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), tl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), tl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
   var Ia = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
      ab = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ia));

   function Bh(t, e) {
      e = (e & 4) !== 0;
      for (var n = 0; n < t.length; n++) {
         var a = t[n],
            r = a.event;
         a = a.listeners;
         t: {
            var o = void 0;
            if (e)
               for (var d = a.length - 1; 0 <= d; d--) {
                  var p = a[d],
                     S = p.instance,
                     _ = p.currentTarget;
                  if (p = p.listener, S !== o && r.isPropagationStopped()) break t;
                  o = p, r.currentTarget = _;
                  try {
                     o(r)
                  } catch (L) {
                     ir(L)
                  }
                  r.currentTarget = null, o = S
               } else
                  for (d = 0; d < a.length; d++) {
                     if (p = a[d], S = p.instance, _ = p.currentTarget, p = p.listener, S !== o && r.isPropagationStopped()) break t;
                     o = p, r.currentTarget = _;
                     try {
                        o(r)
                     } catch (L) {
                        ir(L)
                     }
                     r.currentTarget = null, o = S
                  }
         }
      }
   }

   function bt(t, e) {
      var n = e[hs];
      n === void 0 && (n = e[hs] = new Set);
      var a = t + "__bubble";
      n.has(a) || (Yh(e, t, 2, !1), n.add(a))
   }

   function nu(t, e, n) {
      var a = 0;
      e && (a |= 4), Yh(n, t, a, e)
   }
   var br = "_reactListening" + Math.random().toString(36).slice(2);

   function lu(t) {
      if (!t[br]) {
         t[br] = !0, jc.forEach(function (n) {
            n !== "selectionchange" && (ab.has(n) || nu(n, !1, t), nu(n, !0, t))
         });
         var e = t.nodeType === 9 ? t : t.ownerDocument;
         e === null || e[br] || (e[br] = !0, nu("selectionchange", !1, e))
      }
   }

   function Yh(t, e, n, a) {
      switch (fm(e)) {
         case 2:
            var r = _b;
            break;
         case 8:
            r = Db;
            break;
         default:
            r = vu
      }
      n = r.bind(null, e, n, t), r = void 0, !Ts || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), a ? r !== void 0 ? t.addEventListener(e, n, {
         capture: !0,
         passive: r
      }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
         passive: r
      }) : t.addEventListener(e, n, !1)
   }

   function au(t, e, n, a, r) {
      var o = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (;;) {
         if (a === null) return;
         var d = a.tag;
         if (d === 3 || d === 4) {
            var p = a.stateNode.containerInfo;
            if (p === r) break;
            if (d === 4)
               for (d = a.return; d !== null;) {
                  var S = d.tag;
                  if ((S === 3 || S === 4) && d.stateNode.containerInfo === r) return;
                  d = d.return
               }
            for (; p !== null;) {
               if (d = El(p), d === null) return;
               if (S = d.tag, S === 5 || S === 6 || S === 26 || S === 27) {
                  a = o = d;
                  continue t
               }
               p = p.parentNode
            }
         }
         a = a.return
      }
      Kc(function () {
         var _ = o,
            L = ws(n),
            Y = [];
         t: {
            var j = wf.get(t);
            if (j !== void 0) {
               var U = ji,
                  ct = t;
               switch (t) {
                  case "keypress":
                     if (_i(n) === 0) break t;
                  case "keydown":
                  case "keyup":
                     U = Wv;
                     break;
                  case "focusin":
                     ct = "focus", U = Ns;
                     break;
                  case "focusout":
                     ct = "blur", U = Ns;
                     break;
                  case "beforeblur":
                  case "afterblur":
                     U = Ns;
                     break;
                  case "click":
                     if (n.button === 2) break t;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                     U = Fc;
                     break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                     U = Bv;
                     break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                     U = eg;
                     break;
                  case gf:
                  case bf:
                  case xf:
                     U = Vv;
                     break;
                  case Sf:
                     U = lg;
                     break;
                  case "scroll":
                  case "scrollend":
                     U = kv;
                     break;
                  case "wheel":
                     U = ig;
                     break;
                  case "copy":
                  case "cut":
                  case "paste":
                     U = Xv;
                     break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                     U = Wc;
                     break;
                  case "toggle":
                  case "beforetoggle":
                     U = sg
               }
               var rt = (e & 4) !== 0,
                  _t = !rt && (t === "scroll" || t === "scrollend"),
                  O = rt ? j !== null ? j + "Capture" : null : j;
               rt = [];
               for (var T = _, C; T !== null;) {
                  var q = T;
                  if (C = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || C === null || O === null || (q = ga(T, O), q != null && rt.push(ti(T, q, C))), _t) break;
                  T = T.return
               }
               0 < rt.length && (j = new U(j, ct, null, n, L), Y.push({
                  event: j,
                  listeners: rt
               }))
            }
         }
         if ((e & 7) === 0) {
            t: {
               if (j = t === "mouseover" || t === "pointerover", U = t === "mouseout" || t === "pointerout", j && n !== Ss && (ct = n.relatedTarget || n.fromElement) && (El(ct) || ct[wl])) break t;
               if ((U || j) && (j = L.window === L ? L : (j = L.ownerDocument) ? j.defaultView || j.parentWindow : window, U ? (ct = n.relatedTarget || n.toElement, U = _, ct = ct ? El(ct) : null, ct !== null && (_t = f(ct), rt = ct.tag, ct !== _t || rt !== 5 && rt !== 27 && rt !== 6) && (ct = null)) : (U = null, ct = _), U !== ct)) {
                  if (rt = Fc, q = "onMouseLeave", O = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (rt = Wc, q = "onPointerLeave", O = "onPointerEnter", T = "pointer"), _t = U == null ? j : va(U), C = ct == null ? j : va(ct), j = new rt(q, T + "leave", U, n, L), j.target = _t, j.relatedTarget = C, q = null, El(L) === _ && (rt = new rt(O, T + "enter", ct, n, L), rt.target = C, rt.relatedTarget = _t, q = rt), _t = q, U && ct) e: {
                     for (rt = U, O = ct, T = 0, C = rt; C; C = la(C)) T++;
                     for (C = 0, q = O; q; q = la(q)) C++;
                     for (; 0 < T - C;) rt = la(rt),
                     T--;
                     for (; 0 < C - T;) O = la(O),
                     C--;
                     for (; T--;) {
                        if (rt === O || O !== null && rt === O.alternate) break e;
                        rt = la(rt), O = la(O)
                     }
                     rt = null
                  }
                  else rt = null;
                  U !== null && Gh(Y, j, U, rt, !1), ct !== null && _t !== null && Gh(Y, _t, ct, rt, !0)
               }
            }
            t: {
               if (j = _ ? va(_) : window, U = j.nodeName && j.nodeName.toLowerCase(), U === "select" || U === "input" && j.type === "file") var I = sf;
               else if (af(j))
                  if ( of ) I = vg;
                  else {
                     I = pg;
                     var yt = mg
                  }
               else U = j.nodeName,
               !U || U.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? _ && xs(_.elementType) && (I = sf) : I = yg;
               if (I && (I = I(t, _))) {
                  rf(Y, I, n, L);
                  break t
               }
               yt && yt(t, j, _),
               t === "focusout" && _ && j.type === "number" && _.memoizedProps.value != null && bs(j, "number", j.value)
            }
            switch (yt = _ ? va(_) : window, t) {
               case "focusin":
                  (af(yt) || yt.contentEditable === "true") && (jl = yt, zs = _, Oa = null);
                  break;
               case "focusout":
                  Oa = zs = jl = null;
                  break;
               case "mousedown":
                  Us = !0;
                  break;
               case "contextmenu":
               case "mouseup":
               case "dragend":
                  Us = !1, yf(Y, n, L);
                  break;
               case "selectionchange":
                  if (bg) break;
               case "keydown":
               case "keyup":
                  yf(Y, n, L)
            }
            var at;
            if (Ms) t: {
               switch (t) {
                  case "compositionstart":
                     var ot = "onCompositionStart";
                     break t;
                  case "compositionend":
                     ot = "onCompositionEnd";
                     break t;
                  case "compositionupdate":
                     ot = "onCompositionUpdate";
                     break t
               }
               ot = void 0
            }
            else Dl ? nf(t, n) && (ot = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ot = "onCompositionStart");ot && (Ic && n.locale !== "ko" && (Dl || ot !== "onCompositionStart" ? ot === "onCompositionEnd" && Dl && (at = Pc()) : (En = L, As = "value" in En ? En.value : En.textContent, Dl = !0)), yt = xr(_, ot), 0 < yt.length && (ot = new $c(ot, t, null, n, L), Y.push({
               event: ot,
               listeners: yt
            }), at ? ot.data = at : (at = lf(n), at !== null && (ot.data = at)))),
            (at = ug ? cg(t, n) : fg(t, n)) && (ot = xr(_, "onBeforeInput"), 0 < ot.length && (yt = new $c("onBeforeInput", "beforeinput", null, n, L), Y.push({
               event: yt,
               listeners: ot
            }), yt.data = at)),
            eb(Y, t, _, n, L)
         }
         Bh(Y, e)
      })
   }

   function ti(t, e, n) {
      return {
         instance: t,
         listener: e,
         currentTarget: n
      }
   }

   function xr(t, e) {
      for (var n = e + "Capture", a = []; t !== null;) {
         var r = t,
            o = r.stateNode;
         if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || o === null || (r = ga(t, n), r != null && a.unshift(ti(t, r, o)), r = ga(t, e), r != null && a.push(ti(t, r, o))), t.tag === 3) return a;
         t = t.return
      }
      return []
   }

   function la(t) {
      if (t === null) return null;
      do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
      return t || null
   }

   function Gh(t, e, n, a, r) {
      for (var o = e._reactName, d = []; n !== null && n !== a;) {
         var p = n,
            S = p.alternate,
            _ = p.stateNode;
         if (p = p.tag, S !== null && S === a) break;
         p !== 5 && p !== 26 && p !== 27 || _ === null || (S = _, r ? (_ = ga(n, o), _ != null && d.unshift(ti(n, _, S))) : r || (_ = ga(n, o), _ != null && d.push(ti(n, _, S)))), n = n.return
      }
      d.length !== 0 && t.push({
         event: e,
         listeners: d
      })
   }
   var ib = /\r\n?/g,
      rb = /\u0000|\uFFFD/g;

   function Vh(t) {
      return (typeof t == "string" ? t : "" + t).replace(ib, `
`).replace(rb, "")
   }

   function Qh(t, e) {
      return e = Vh(e), Vh(t) === e
   }

   function Sr() {}

   function Mt(t, e, n, a, r, o) {
      switch (n) {
         case "children":
            typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Cl(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Cl(t, "" + a);
            break;
         case "className":
            Oi(t, "class", a);
            break;
         case "tabIndex":
            Oi(t, "tabindex", a);
            break;
         case "dir":
         case "role":
         case "viewBox":
         case "width":
         case "height":
            Oi(t, n, a);
            break;
         case "style":
            Xc(t, a, o);
            break;
         case "data":
            if (e !== "object") {
               Oi(t, "data", a);
               break
            }
         case "src":
         case "href":
            if (a === "" && (e !== "a" || n !== "href")) {
               t.removeAttribute(n);
               break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
               t.removeAttribute(n);
               break
            }
            a = Ci("" + a), t.setAttribute(n, a);
            break;
         case "action":
         case "formAction":
            if (typeof a == "function") {
               t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
               break
            } else typeof o == "function" && (n === "formAction" ? (e !== "input" && Mt(t, e, "name", r.name, r, null), Mt(t, e, "formEncType", r.formEncType, r, null), Mt(t, e, "formMethod", r.formMethod, r, null), Mt(t, e, "formTarget", r.formTarget, r, null)) : (Mt(t, e, "encType", r.encType, r, null), Mt(t, e, "method", r.method, r, null), Mt(t, e, "target", r.target, r, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
               t.removeAttribute(n);
               break
            }
            a = Ci("" + a), t.setAttribute(n, a);
            break;
         case "onClick":
            a != null && (t.onclick = Sr);
            break;
         case "onScroll":
            a != null && bt("scroll", t);
            break;
         case "onScrollEnd":
            a != null && bt("scrollend", t);
            break;
         case "dangerouslySetInnerHTML":
            if (a != null) {
               if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
               if (n = a.__html, n != null) {
                  if (r.children != null) throw Error(u(60));
                  t.innerHTML = n
               }
            }
            break;
         case "multiple":
            t.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
         case "muted":
            t.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
         case "suppressContentEditableWarning":
         case "suppressHydrationWarning":
         case "defaultValue":
         case "defaultChecked":
         case "innerHTML":
         case "ref":
            break;
         case "autoFocus":
            break;
         case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
               t.removeAttribute("xlink:href");
               break
            }
            n = Ci("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
         case "contentEditable":
         case "spellCheck":
         case "draggable":
         case "value":
         case "autoReverse":
         case "externalResourcesRequired":
         case "focusable":
         case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
            break;
         case "inert":
         case "allowFullScreen":
         case "async":
         case "autoPlay":
         case "controls":
         case "default":
         case "defer":
         case "disabled":
         case "disablePictureInPicture":
         case "disableRemotePlayback":
         case "formNoValidate":
         case "hidden":
         case "loop":
         case "noModule":
         case "noValidate":
         case "open":
         case "playsInline":
         case "readOnly":
         case "required":
         case "reversed":
         case "scoped":
         case "seamless":
         case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
         case "capture":
         case "download":
            a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
            break;
         case "cols":
         case "rows":
         case "size":
         case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
            break;
         case "rowSpan":
         case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
            break;
         case "popover":
            bt("beforetoggle", t), bt("toggle", t), Ai(t, "popover", a);
            break;
         case "xlinkActuate":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
         case "xlinkArcrole":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
         case "xlinkRole":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
         case "xlinkShow":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
         case "xlinkTitle":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
         case "xlinkType":
            Ie(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
         case "xmlBase":
            Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
         case "xmlLang":
            Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
         case "xmlSpace":
            Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
         case "is":
            Ai(t, "is", a);
            break;
         case "innerText":
         case "textContent":
            break;
         default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Hv.get(n) || n, Ai(t, n, a))
      }
   }

   function iu(t, e, n, a, r, o) {
      switch (n) {
         case "style":
            Xc(t, a, o);
            break;
         case "dangerouslySetInnerHTML":
            if (a != null) {
               if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
               if (n = a.__html, n != null) {
                  if (r.children != null) throw Error(u(60));
                  t.innerHTML = n
               }
            }
            break;
         case "children":
            typeof a == "string" ? Cl(t, a) : (typeof a == "number" || typeof a == "bigint") && Cl(t, "" + a);
            break;
         case "onScroll":
            a != null && bt("scroll", t);
            break;
         case "onScrollEnd":
            a != null && bt("scrollend", t);
            break;
         case "onClick":
            a != null && (t.onclick = Sr);
            break;
         case "suppressContentEditableWarning":
         case "suppressHydrationWarning":
         case "innerHTML":
         case "ref":
            break;
         case "innerText":
         case "textContent":
            break;
         default:
            if (!zc.hasOwnProperty(n)) t: {
               if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"), e = n.slice(2, r ? n.length - 7 : void 0), o = t[re] || null, o = o != null ? o[n] : null, typeof o == "function" && t.removeEventListener(e, o, r), typeof a == "function")) {
                  typeof o != "function" && o !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, r);
                  break t
               }
               n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Ai(t, n, a)
            }
      }
   }

   function It(t, e, n) {
      switch (e) {
         case "div":
         case "span":
         case "svg":
         case "path":
         case "a":
         case "g":
         case "p":
         case "li":
            break;
         case "img":
            bt("error", t), bt("load", t);
            var a = !1,
               r = !1,
               o;
            for (o in n)
               if (n.hasOwnProperty(o)) {
                  var d = n[o];
                  if (d != null) switch (o) {
                     case "src":
                        a = !0;
                        break;
                     case "srcSet":
                        r = !0;
                        break;
                     case "children":
                     case "dangerouslySetInnerHTML":
                        throw Error(u(137, e));
                     default:
                        Mt(t, e, o, d, n, null)
                  }
               } r && Mt(t, e, "srcSet", n.srcSet, n, null), a && Mt(t, e, "src", n.src, n, null);
            return;
         case "input":
            bt("invalid", t);
            var p = o = d = r = null,
               S = null,
               _ = null;
            for (a in n)
               if (n.hasOwnProperty(a)) {
                  var L = n[a];
                  if (L != null) switch (a) {
                     case "name":
                        r = L;
                        break;
                     case "type":
                        d = L;
                        break;
                     case "checked":
                        S = L;
                        break;
                     case "defaultChecked":
                        _ = L;
                        break;
                     case "value":
                        o = L;
                        break;
                     case "defaultValue":
                        p = L;
                        break;
                     case "children":
                     case "dangerouslySetInnerHTML":
                        if (L != null) throw Error(u(137, e));
                        break;
                     default:
                        Mt(t, e, a, L, n, null)
                  }
               } Yc(t, o, p, S, _, d, r, !1), Ri(t);
            return;
         case "select":
            bt("invalid", t), a = d = o = null;
            for (r in n)
               if (n.hasOwnProperty(r) && (p = n[r], p != null)) switch (r) {
                  case "value":
                     o = p;
                     break;
                  case "defaultValue":
                     d = p;
                     break;
                  case "multiple":
                     a = p;
                  default:
                     Mt(t, e, r, p, n, null)
               }
            e = o, n = d, t.multiple = !!a, e != null ? Nl(t, !!a, e, !1) : n != null && Nl(t, !!a, n, !0);
            return;
         case "textarea":
            bt("invalid", t), o = r = a = null;
            for (d in n)
               if (n.hasOwnProperty(d) && (p = n[d], p != null)) switch (d) {
                  case "value":
                     a = p;
                     break;
                  case "defaultValue":
                     r = p;
                     break;
                  case "children":
                     o = p;
                     break;
                  case "dangerouslySetInnerHTML":
                     if (p != null) throw Error(u(91));
                     break;
                  default:
                     Mt(t, e, d, p, n, null)
               }
            Vc(t, a, r, o), Ri(t);
            return;
         case "option":
            for (S in n) n.hasOwnProperty(S) && (a = n[S], a != null) && (S === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Mt(t, e, S, a, n, null));
            return;
         case "dialog":
            bt("beforetoggle", t), bt("toggle", t), bt("cancel", t), bt("close", t);
            break;
         case "iframe":
         case "object":
            bt("load", t);
            break;
         case "video":
         case "audio":
            for (a = 0; a < Ia.length; a++) bt(Ia[a], t);
            break;
         case "image":
            bt("error", t), bt("load", t);
            break;
         case "details":
            bt("toggle", t);
            break;
         case "embed":
         case "source":
         case "link":
            bt("error", t), bt("load", t);
         case "area":
         case "base":
         case "br":
         case "col":
         case "hr":
         case "keygen":
         case "meta":
         case "param":
         case "track":
         case "wbr":
         case "menuitem":
            for (_ in n)
               if (n.hasOwnProperty(_) && (a = n[_], a != null)) switch (_) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                     throw Error(u(137, e));
                  default:
                     Mt(t, e, _, a, n, null)
               }
            return;
         default:
            if (xs(e)) {
               for (L in n) n.hasOwnProperty(L) && (a = n[L], a !== void 0 && iu(t, e, L, a, n, void 0));
               return
            }
      }
      for (p in n) n.hasOwnProperty(p) && (a = n[p], a != null && Mt(t, e, p, a, n, null))
   }

   function sb(t, e, n, a) {
      switch (e) {
         case "div":
         case "span":
         case "svg":
         case "path":
         case "a":
         case "g":
         case "p":
         case "li":
            break;
         case "input":
            var r = null,
               o = null,
               d = null,
               p = null,
               S = null,
               _ = null,
               L = null;
            for (U in n) {
               var Y = n[U];
               if (n.hasOwnProperty(U) && Y != null) switch (U) {
                  case "checked":
                     break;
                  case "value":
                     break;
                  case "defaultValue":
                     S = Y;
                  default:
                     a.hasOwnProperty(U) || Mt(t, e, U, null, a, Y)
               }
            }
            for (var j in a) {
               var U = a[j];
               if (Y = n[j], a.hasOwnProperty(j) && (U != null || Y != null)) switch (j) {
                  case "type":
                     o = U;
                     break;
                  case "name":
                     r = U;
                     break;
                  case "checked":
                     _ = U;
                     break;
                  case "defaultChecked":
                     L = U;
                     break;
                  case "value":
                     d = U;
                     break;
                  case "defaultValue":
                     p = U;
                     break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                     if (U != null) throw Error(u(137, e));
                     break;
                  default:
                     U !== Y && Mt(t, e, j, U, a, Y)
               }
            }
            gs(t, d, p, S, _, L, o, r);
            return;
         case "select":
            U = d = p = j = null;
            for (o in n)
               if (S = n[o], n.hasOwnProperty(o) && S != null) switch (o) {
                  case "value":
                     break;
                  case "multiple":
                     U = S;
                  default:
                     a.hasOwnProperty(o) || Mt(t, e, o, null, a, S)
               }
            for (r in a)
               if (o = a[r], S = n[r], a.hasOwnProperty(r) && (o != null || S != null)) switch (r) {
                  case "value":
                     j = o;
                     break;
                  case "defaultValue":
                     p = o;
                     break;
                  case "multiple":
                     d = o;
                  default:
                     o !== S && Mt(t, e, r, o, a, S)
               }
            e = p, n = d, a = U, j != null ? Nl(t, !!n, j, !1) : !!a != !!n && (e != null ? Nl(t, !!n, e, !0) : Nl(t, !!n, n ? [] : "", !1));
            return;
         case "textarea":
            U = j = null;
            for (p in n)
               if (r = n[p], n.hasOwnProperty(p) && r != null && !a.hasOwnProperty(p)) switch (p) {
                  case "value":
                     break;
                  case "children":
                     break;
                  default:
                     Mt(t, e, p, null, a, r)
               }
            for (d in a)
               if (r = a[d], o = n[d], a.hasOwnProperty(d) && (r != null || o != null)) switch (d) {
                  case "value":
                     j = r;
                     break;
                  case "defaultValue":
                     U = r;
                     break;
                  case "children":
                     break;
                  case "dangerouslySetInnerHTML":
                     if (r != null) throw Error(u(91));
                     break;
                  default:
                     r !== o && Mt(t, e, d, r, a, o)
               }
            Gc(t, j, U);
            return;
         case "option":
            for (var ct in n) j = n[ct], n.hasOwnProperty(ct) && j != null && !a.hasOwnProperty(ct) && (ct === "selected" ? t.selected = !1 : Mt(t, e, ct, null, a, j));
            for (S in a) j = a[S], U = n[S], a.hasOwnProperty(S) && j !== U && (j != null || U != null) && (S === "selected" ? t.selected = j && typeof j != "function" && typeof j != "symbol" : Mt(t, e, S, j, a, U));
            return;
         case "img":
         case "link":
         case "area":
         case "base":
         case "br":
         case "col":
         case "embed":
         case "hr":
         case "keygen":
         case "meta":
         case "param":
         case "source":
         case "track":
         case "wbr":
         case "menuitem":
            for (var rt in n) j = n[rt], n.hasOwnProperty(rt) && j != null && !a.hasOwnProperty(rt) && Mt(t, e, rt, null, a, j);
            for (_ in a)
               if (j = a[_], U = n[_], a.hasOwnProperty(_) && j !== U && (j != null || U != null)) switch (_) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                     if (j != null) throw Error(u(137, e));
                     break;
                  default:
                     Mt(t, e, _, j, a, U)
               }
            return;
         default:
            if (xs(e)) {
               for (var _t in n) j = n[_t], n.hasOwnProperty(_t) && j !== void 0 && !a.hasOwnProperty(_t) && iu(t, e, _t, void 0, a, j);
               for (L in a) j = a[L], U = n[L], !a.hasOwnProperty(L) || j === U || j === void 0 && U === void 0 || iu(t, e, L, j, a, U);
               return
            }
      }
      for (var O in n) j = n[O], n.hasOwnProperty(O) && j != null && !a.hasOwnProperty(O) && Mt(t, e, O, null, a, j);
      for (Y in a) j = a[Y], U = n[Y], !a.hasOwnProperty(Y) || j === U || j == null && U == null || Mt(t, e, Y, j, a, U)
   }
   var ru = null,
      su = null;

   function wr(t) {
      return t.nodeType === 9 ? t : t.ownerDocument
   }

   function Xh(t) {
      switch (t) {
         case "http://www.w3.org/2000/svg":
            return 1;
         case "http://www.w3.org/1998/Math/MathML":
            return 2;
         default:
            return 0
      }
   }

   function Zh(t, e) {
      if (t === 0) switch (e) {
         case "svg":
            return 1;
         case "math":
            return 2;
         default:
            return 0
      }
      return t === 1 && e === "foreignObject" ? 0 : t
   }

   function ou(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
   }
   var uu = null;

   function ob() {
      var t = window.event;
      return t && t.type === "popstate" ? t === uu ? !1 : (uu = t, !0) : (uu = null, !1)
   }
   var Kh = typeof setTimeout == "function" ? setTimeout : void 0,
      ub = typeof clearTimeout == "function" ? clearTimeout : void 0,
      Ph = typeof Promise == "function" ? Promise : void 0,
      cb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ph < "u" ? function (t) {
         return Ph.resolve(null).then(t).catch(fb)
      } : Kh;

   function fb(t) {
      setTimeout(function () {
         throw t
      })
   }

   function qn(t) {
      return t === "head"
   }

   function Jh(t, e) {
      var n = e,
         a = 0,
         r = 0;
      do {
         var o = n.nextSibling;
         if (t.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
               if (0 < a && 8 > a) {
                  n = a;
                  var d = t.ownerDocument;
                  if (n & 1 && ei(d.documentElement), n & 2 && ei(d.body), n & 4)
                     for (n = d.head, ei(n), d = n.firstChild; d;) {
                        var p = d.nextSibling,
                           S = d.nodeName;
                        d[ya] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && d.rel.toLowerCase() === "stylesheet" || n.removeChild(d), d = p
                     }
               }
               if (r === 0) {
                  t.removeChild(o), ui(e);
                  return
               }
               r--
            } else n === "$" || n === "$?" || n === "$!" ? r++ : a = n.charCodeAt(0) - 48;
         else a = 0;
         n = o
      } while (n);
      ui(e)
   }

   function cu(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
         var n = e;
         switch (e = e.nextSibling, n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
               cu(n), ms(n);
               continue;
            case "SCRIPT":
            case "STYLE":
               continue;
            case "LINK":
               if (n.rel.toLowerCase() === "stylesheet") continue
         }
         t.removeChild(n)
      }
   }

   function db(t, e, n, a) {
      for (; t.nodeType === 1;) {
         var r = n;
         if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
            if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
         } else if (a) {
            if (!t[ya]) switch (e) {
               case "meta":
                  if (!t.hasAttribute("itemprop")) break;
                  return t;
               case "link":
                  if (o = t.getAttribute("rel"), o === "stylesheet" && t.hasAttribute("data-precedence")) break;
                  if (o !== r.rel || t.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || t.getAttribute("title") !== (r.title == null ? null : r.title)) break;
                  return t;
               case "style":
                  if (t.hasAttribute("data-precedence")) break;
                  return t;
               case "script":
                  if (o = t.getAttribute("src"), (o !== (r.src == null ? null : r.src) || t.getAttribute("type") !== (r.type == null ? null : r.type) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && o && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                  return t;
               default:
                  return t
            }
         } else if (e === "input" && t.type === "hidden") {
            var o = r.name == null ? null : "" + r.name;
            if (r.type === "hidden" && t.getAttribute("name") === o) return t
         } else return t;
         if (t = ke(t.nextSibling), t === null) break
      }
      return null
   }

   function hb(t, e, n) {
      if (e === "") return null;
      for (; t.nodeType !== 3;)
         if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = ke(t.nextSibling), t === null)) return null;
      return t
   }

   function fu(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
   }

   function mb(t, e) {
      var n = t.ownerDocument;
      if (t.data !== "$?" || n.readyState === "complete") e();
      else {
         var a = function () {
            e(), n.removeEventListener("DOMContentLoaded", a)
         };
         n.addEventListener("DOMContentLoaded", a), t._reactRetry = a
      }
   }

   function ke(t) {
      for (; t != null; t = t.nextSibling) {
         var e = t.nodeType;
         if (e === 1 || e === 3) break;
         if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
            if (e === "/$") return null
         }
      }
      return t
   }
   var du = null;

   function Fh(t) {
      t = t.previousSibling;
      for (var e = 0; t;) {
         if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
               if (e === 0) return t;
               e--
            } else n === "/$" && e++
         }
         t = t.previousSibling
      }
      return null
   }

   function $h(t, e, n) {
      switch (e = wr(n), t) {
         case "html":
            if (t = e.documentElement, !t) throw Error(u(452));
            return t;
         case "head":
            if (t = e.head, !t) throw Error(u(453));
            return t;
         case "body":
            if (t = e.body, !t) throw Error(u(454));
            return t;
         default:
            throw Error(u(451))
      }
   }

   function ei(t) {
      for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
      ms(t)
   }
   var je = new Map,
      Wh = new Set;

   function Er(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
   }
   var mn = Q.d;
   Q.d = {
      f: pb,
      r: yb,
      D: vb,
      C: gb,
      L: bb,
      m: xb,
      X: wb,
      S: Sb,
      M: Eb
   };

   function pb() {
      var t = mn.f(),
         e = mr();
      return t || e
   }

   function yb(t) {
      var e = Tl(t);
      e !== null && e.tag === 5 && e.type === "form" ? gd(e) : mn.r(t)
   }
   var aa = typeof document > "u" ? null : document;

   function Ih(t, e, n) {
      var a = aa;
      if (a && typeof e == "string" && e) {
         var r = Oe(e);
         r = 'link[rel="' + t + '"][href="' + r + '"]', typeof n == "string" && (r += '[crossorigin="' + n + '"]'), Wh.has(r) || (Wh.add(r), t = {
            rel: t,
            crossOrigin: n,
            href: e
         }, a.querySelector(r) === null && (e = a.createElement("link"), It(e, "link", t), Kt(e), a.head.appendChild(e)))
      }
   }

   function vb(t) {
      mn.D(t), Ih("dns-prefetch", t, null)
   }

   function gb(t, e) {
      mn.C(t, e), Ih("preconnect", t, e)
   }

   function bb(t, e, n) {
      mn.L(t, e, n);
      var a = aa;
      if (a && t && e) {
         var r = 'link[rel="preload"][as="' + Oe(e) + '"]';
         e === "image" && n && n.imageSrcSet ? (r += '[imagesrcset="' + Oe(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (r += '[imagesizes="' + Oe(n.imageSizes) + '"]')) : r += '[href="' + Oe(t) + '"]';
         var o = r;
         switch (e) {
            case "style":
               o = ia(t);
               break;
            case "script":
               o = ra(t)
         }
         je.has(o) || (t = b({
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e
         }, n), je.set(o, t), a.querySelector(r) !== null || e === "style" && a.querySelector(ni(o)) || e === "script" && a.querySelector(li(o)) || (e = a.createElement("link"), It(e, "link", t), Kt(e), a.head.appendChild(e)))
      }
   }

   function xb(t, e) {
      mn.m(t, e);
      var n = aa;
      if (n && t) {
         var a = e && typeof e.as == "string" ? e.as : "script",
            r = 'link[rel="modulepreload"][as="' + Oe(a) + '"][href="' + Oe(t) + '"]',
            o = r;
         switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
               o = ra(t)
         }
         if (!je.has(o) && (t = b({
               rel: "modulepreload",
               href: t
            }, e), je.set(o, t), n.querySelector(r) === null)) {
            switch (a) {
               case "audioworklet":
               case "paintworklet":
               case "serviceworker":
               case "sharedworker":
               case "worker":
               case "script":
                  if (n.querySelector(li(o))) return
            }
            a = n.createElement("link"), It(a, "link", t), Kt(a), n.head.appendChild(a)
         }
      }
   }

   function Sb(t, e, n) {
      mn.S(t, e, n);
      var a = aa;
      if (a && t) {
         var r = Al(a).hoistableStyles,
            o = ia(t);
         e = e || "default";
         var d = r.get(o);
         if (!d) {
            var p = {
               loading: 0,
               preload: null
            };
            if (d = a.querySelector(ni(o))) p.loading = 5;
            else {
               t = b({
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
               }, n), (n = je.get(o)) && hu(t, n);
               var S = d = a.createElement("link");
               Kt(S), It(S, "link", t), S._p = new Promise(function (_, L) {
                  S.onload = _, S.onerror = L
               }), S.addEventListener("load", function () {
                  p.loading |= 1
               }), S.addEventListener("error", function () {
                  p.loading |= 2
               }), p.loading |= 4, Tr(d, e, a)
            }
            d = {
               type: "stylesheet",
               instance: d,
               count: 1,
               state: p
            }, r.set(o, d)
         }
      }
   }

   function wb(t, e) {
      mn.X(t, e);
      var n = aa;
      if (n && t) {
         var a = Al(n).hoistableScripts,
            r = ra(t),
            o = a.get(r);
         o || (o = n.querySelector(li(r)), o || (t = b({
            src: t,
            async: !0
         }, e), (e = je.get(r)) && mu(t, e), o = n.createElement("script"), Kt(o), It(o, "link", t), n.head.appendChild(o)), o = {
            type: "script",
            instance: o,
            count: 1,
            state: null
         }, a.set(r, o))
      }
   }

   function Eb(t, e) {
      mn.M(t, e);
      var n = aa;
      if (n && t) {
         var a = Al(n).hoistableScripts,
            r = ra(t),
            o = a.get(r);
         o || (o = n.querySelector(li(r)), o || (t = b({
            src: t,
            async: !0,
            type: "module"
         }, e), (e = je.get(r)) && mu(t, e), o = n.createElement("script"), Kt(o), It(o, "link", t), n.head.appendChild(o)), o = {
            type: "script",
            instance: o,
            count: 1,
            state: null
         }, a.set(r, o))
      }
   }

   function tm(t, e, n, a) {
      var r = (r = nt.current) ? Er(r) : null;
      if (!r) throw Error(u(446));
      switch (t) {
         case "meta":
         case "title":
            return null;
         case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ia(n.href), n = Al(r).hoistableStyles, a = n.get(e), a || (a = {
               type: "style",
               instance: null,
               count: 0,
               state: null
            }, n.set(e, a)), a) : {
               type: "void",
               instance: null,
               count: 0,
               state: null
            };
         case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
               t = ia(n.href);
               var o = Al(r).hoistableStyles,
                  d = o.get(t);
               if (d || (r = r.ownerDocument || r, d = {
                     type: "stylesheet",
                     instance: null,
                     count: 0,
                     state: {
                        loading: 0,
                        preload: null
                     }
                  }, o.set(t, d), (o = r.querySelector(ni(t))) && !o._p && (d.instance = o, d.state.loading = 5), je.has(t) || (n = {
                     rel: "preload",
                     as: "style",
                     href: n.href,
                     crossOrigin: n.crossOrigin,
                     integrity: n.integrity,
                     media: n.media,
                     hrefLang: n.hrefLang,
                     referrerPolicy: n.referrerPolicy
                  }, je.set(t, n), o || Tb(r, t, n, d.state))), e && a === null) throw Error(u(528, ""));
               return d
            }
            if (e && a !== null) throw Error(u(529, ""));
            return null;
         case "script":
            return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ra(n), n = Al(r).hoistableScripts, a = n.get(e), a || (a = {
               type: "script",
               instance: null,
               count: 0,
               state: null
            }, n.set(e, a)), a) : {
               type: "void",
               instance: null,
               count: 0,
               state: null
            };
         default:
            throw Error(u(444, t))
      }
   }

   function ia(t) {
      return 'href="' + Oe(t) + '"'
   }

   function ni(t) {
      return 'link[rel="stylesheet"][' + t + "]"
   }

   function em(t) {
      return b({}, t, {
         "data-precedence": t.precedence,
         precedence: null
      })
   }

   function Tb(t, e, n, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function () {
         return a.loading |= 1
      }), e.addEventListener("error", function () {
         return a.loading |= 2
      }), It(e, "link", n), Kt(e), t.head.appendChild(e))
   }

   function ra(t) {
      return '[src="' + Oe(t) + '"]'
   }

   function li(t) {
      return "script[async]" + t
   }

   function nm(t, e, n) {
      if (e.count++, e.instance === null) switch (e.type) {
         case "style":
            var a = t.querySelector('style[data-href~="' + Oe(n.href) + '"]');
            if (a) return e.instance = a, Kt(a), a;
            var r = b({}, n, {
               "data-href": n.href,
               "data-precedence": n.precedence,
               href: null,
               precedence: null
            });
            return a = (t.ownerDocument || t).createElement("style"), Kt(a), It(a, "style", r), Tr(a, n.precedence, t), e.instance = a;
         case "stylesheet":
            r = ia(n.href);
            var o = t.querySelector(ni(r));
            if (o) return e.state.loading |= 4, e.instance = o, Kt(o), o;
            a = em(n), (r = je.get(r)) && hu(a, r), o = (t.ownerDocument || t).createElement("link"), Kt(o);
            var d = o;
            return d._p = new Promise(function (p, S) {
               d.onload = p, d.onerror = S
            }), It(o, "link", a), e.state.loading |= 4, Tr(o, n.precedence, t), e.instance = o;
         case "script":
            return o = ra(n.src), (r = t.querySelector(li(o))) ? (e.instance = r, Kt(r), r) : (a = n, (r = je.get(o)) && (a = b({}, n), mu(a, r)), t = t.ownerDocument || t, r = t.createElement("script"), Kt(r), It(r, "link", a), t.head.appendChild(r), e.instance = r);
         case "void":
            return null;
         default:
            throw Error(u(443, e.type))
      } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Tr(a, n.precedence, t));
      return e.instance
   }

   function Tr(t, e, n) {
      for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = a.length ? a[a.length - 1] : null, o = r, d = 0; d < a.length; d++) {
         var p = a[d];
         if (p.dataset.precedence === e) o = p;
         else if (o !== r) break
      }
      o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild))
   }

   function hu(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
   }

   function mu(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
   }
   var Ar = null;

   function lm(t, e, n) {
      if (Ar === null) {
         var a = new Map,
            r = Ar = new Map;
         r.set(n, a)
      } else r = Ar, a = r.get(n), a || (a = new Map, r.set(n, a));
      if (a.has(t)) return a;
      for (a.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
         var o = n[r];
         if (!(o[ya] || o[ee] || t === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
            var d = o.getAttribute(e) || "";
            d = t + d;
            var p = a.get(d);
            p ? p.push(o) : a.set(d, [o])
         }
      }
      return a
   }

   function am(t, e, n) {
      t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
   }

   function Ab(t, e, n) {
      if (n === 1 || e.itemProp != null) return !1;
      switch (t) {
         case "meta":
         case "title":
            return !0;
         case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
            return !0;
         case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
            return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
         case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
      }
      return !1
   }

   function im(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
   }
   var ai = null;

   function Ob() {}

   function Rb(t, e, n) {
      if (ai === null) throw Error(u(475));
      var a = ai;
      if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
         if (e.instance === null) {
            var r = ia(n.href),
               o = t.querySelector(ni(r));
            if (o) {
               t = o._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Or.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = o, Kt(o);
               return
            }
            o = t.ownerDocument || t, n = em(n), (r = je.get(r)) && hu(n, r), o = o.createElement("link"), Kt(o);
            var d = o;
            d._p = new Promise(function (p, S) {
               d.onload = p, d.onerror = S
            }), It(o, "link", n), e.instance = o
         }
         a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = Or.bind(a), t.addEventListener("load", e), t.addEventListener("error", e))
      }
   }

   function Nb() {
      if (ai === null) throw Error(u(475));
      var t = ai;
      return t.stylesheets && t.count === 0 && pu(t, t.stylesheets), 0 < t.count ? function (e) {
         var n = setTimeout(function () {
            if (t.stylesheets && pu(t, t.stylesheets), t.unsuspend) {
               var a = t.unsuspend;
               t.unsuspend = null, a()
            }
         }, 6e4);
         return t.unsuspend = e,
            function () {
               t.unsuspend = null, clearTimeout(n)
            }
      } : null
   }

   function Or() {
      if (this.count--, this.count === 0) {
         if (this.stylesheets) pu(this, this.stylesheets);
         else if (this.unsuspend) {
            var t = this.unsuspend;
            this.unsuspend = null, t()
         }
      }
   }
   var Rr = null;

   function pu(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Rr = new Map, e.forEach(Cb, t), Rr = null, Or.call(t))
   }

   function Cb(t, e) {
      if (!(e.state.loading & 4)) {
         var n = Rr.get(t);
         if (n) var a = n.get(null);
         else {
            n = new Map, Rr.set(t, n);
            for (var r = t.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < r.length; o++) {
               var d = r[o];
               (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), a = d)
            }
            a && n.set(null, a)
         }
         r = e.instance, d = r.getAttribute("data-precedence"), o = n.get(d) || a, o === a && n.set(null, r), n.set(d, r), this.count++, a = Or.bind(this), r.addEventListener("load", a), r.addEventListener("error", a), o ? o.parentNode.insertBefore(r, o.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(r, t.firstChild)), e.state.loading |= 4
      }
   }
   var ii = {
      $$typeof: V,
      Provider: null,
      Consumer: null,
      _currentValue: Z,
      _currentValue2: Z,
      _threadCount: 0
   };

   function Mb(t, e, n, a, r, o, d, p) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = cs(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cs(0), this.hiddenUpdates = cs(null), this.identifierPrefix = a, this.onUncaughtError = r, this.onCaughtError = o, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = new Map
   }

   function rm(t, e, n, a, r, o, d, p, S, _, L, Y) {
      return t = new Mb(t, e, n, d, p, S, _, Y), e = 1, o === !0 && (e |= 24), o = ye(3, null, null, e), t.current = o, o.stateNode = t, e = Js(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = {
         element: a,
         isDehydrated: n,
         cache: e
      }, Is(o), t
   }

   function sm(t) {
      return t ? (t = Ll, t) : Ll
   }

   function om(t, e, n, a, r, o) {
      r = sm(r), a.context === null ? a.context = r : a.pendingContext = r, a = On(e), a.payload = {
         element: n
      }, o = o === void 0 ? null : o, o !== null && (a.callback = o), n = Rn(t, a, e), n !== null && (Se(n, t, e), Ua(n, t, e))
   }

   function um(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
         var n = t.retryLane;
         t.retryLane = n !== 0 && n < e ? n : e
      }
   }

   function yu(t, e) {
      um(t, e), (t = t.alternate) && um(t, e)
   }

   function cm(t) {
      if (t.tag === 13) {
         var e = Hl(t, 67108864);
         e !== null && Se(e, t, 67108864), yu(t, 67108864)
      }
   }
   var Nr = !0;

   function _b(t, e, n, a) {
      var r = M.T;
      M.T = null;
      var o = Q.p;
      try {
         Q.p = 2, vu(t, e, n, a)
      } finally {
         Q.p = o, M.T = r
      }
   }

   function Db(t, e, n, a) {
      var r = M.T;
      M.T = null;
      var o = Q.p;
      try {
         Q.p = 8, vu(t, e, n, a)
      } finally {
         Q.p = o, M.T = r
      }
   }

   function vu(t, e, n, a) {
      if (Nr) {
         var r = gu(a);
         if (r === null) au(t, e, a, Cr, n), dm(t, a);
         else if (zb(r, t, e, n, a)) a.stopPropagation();
         else if (dm(t, a), e & 4 && -1 < jb.indexOf(t)) {
            for (; r !== null;) {
               var o = Tl(r);
               if (o !== null) switch (o.tag) {
                  case 3:
                     if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                        var d = In(o.pendingLanes);
                        if (d !== 0) {
                           var p = o;
                           for (p.pendingLanes |= 2, p.entangledLanes |= 2; d;) {
                              var S = 1 << 31 - me(d);
                              p.entanglements[1] |= S, d &= ~S
                           }
                           Je(o), (Rt & 6) === 0 && (dr = Qe() + 500, Wa(0))
                        }
                     }
                     break;
                  case 13:
                     p = Hl(o, 2), p !== null && Se(p, o, 2), mr(), yu(o, 2)
               }
               if (o = gu(a), o === null && au(t, e, a, Cr, n), o === r) break;
               r = o
            }
            r !== null && a.stopPropagation()
         } else au(t, e, a, null, n)
      }
   }

   function gu(t) {
      return t = ws(t), bu(t)
   }
   var Cr = null;

   function bu(t) {
      if (Cr = null, t = El(t), t !== null) {
         var e = f(t);
         if (e === null) t = null;
         else {
            var n = e.tag;
            if (n === 13) {
               if (t = h(e), t !== null) return t;
               t = null
            } else if (n === 3) {
               if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
               t = null
            } else e !== t && (t = null)
         }
      }
      return Cr = t, null
   }

   function fm(t) {
      switch (t) {
         case "beforetoggle":
         case "cancel":
         case "click":
         case "close":
         case "contextmenu":
         case "copy":
         case "cut":
         case "auxclick":
         case "dblclick":
         case "dragend":
         case "dragstart":
         case "drop":
         case "focusin":
         case "focusout":
         case "input":
         case "invalid":
         case "keydown":
         case "keypress":
         case "keyup":
         case "mousedown":
         case "mouseup":
         case "paste":
         case "pause":
         case "play":
         case "pointercancel":
         case "pointerdown":
         case "pointerup":
         case "ratechange":
         case "reset":
         case "resize":
         case "seeked":
         case "submit":
         case "toggle":
         case "touchcancel":
         case "touchend":
         case "touchstart":
         case "volumechange":
         case "change":
         case "selectionchange":
         case "textInput":
         case "compositionstart":
         case "compositionend":
         case "compositionupdate":
         case "beforeblur":
         case "afterblur":
         case "beforeinput":
         case "blur":
         case "fullscreenchange":
         case "focus":
         case "hashchange":
         case "popstate":
         case "select":
         case "selectstart":
            return 2;
         case "drag":
         case "dragenter":
         case "dragexit":
         case "dragleave":
         case "dragover":
         case "mousemove":
         case "mouseout":
         case "mouseover":
         case "pointermove":
         case "pointerout":
         case "pointerover":
         case "scroll":
         case "touchmove":
         case "wheel":
         case "mouseenter":
         case "mouseleave":
         case "pointerenter":
         case "pointerleave":
            return 8;
         case "message":
            switch (gv()) {
               case Tc:
                  return 2;
               case Ac:
                  return 8;
               case Si:
               case bv:
                  return 32;
               case Oc:
                  return 268435456;
               default:
                  return 32
            }
         default:
            return 32
      }
   }
   var xu = !1,
      Bn = null,
      Yn = null,
      Gn = null,
      ri = new Map,
      si = new Map,
      Vn = [],
      jb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

   function dm(t, e) {
      switch (t) {
         case "focusin":
         case "focusout":
            Bn = null;
            break;
         case "dragenter":
         case "dragleave":
            Yn = null;
            break;
         case "mouseover":
         case "mouseout":
            Gn = null;
            break;
         case "pointerover":
         case "pointerout":
            ri.delete(e.pointerId);
            break;
         case "gotpointercapture":
         case "lostpointercapture":
            si.delete(e.pointerId)
      }
   }

   function oi(t, e, n, a, r, o) {
      return t === null || t.nativeEvent !== o ? (t = {
         blockedOn: e,
         domEventName: n,
         eventSystemFlags: a,
         nativeEvent: o,
         targetContainers: [r]
      }, e !== null && (e = Tl(e), e !== null && cm(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t)
   }

   function zb(t, e, n, a, r) {
      switch (e) {
         case "focusin":
            return Bn = oi(Bn, t, e, n, a, r), !0;
         case "dragenter":
            return Yn = oi(Yn, t, e, n, a, r), !0;
         case "mouseover":
            return Gn = oi(Gn, t, e, n, a, r), !0;
         case "pointerover":
            var o = r.pointerId;
            return ri.set(o, oi(ri.get(o) || null, t, e, n, a, r)), !0;
         case "gotpointercapture":
            return o = r.pointerId, si.set(o, oi(si.get(o) || null, t, e, n, a, r)), !0
      }
      return !1
   }

   function hm(t) {
      var e = El(t.target);
      if (e !== null) {
         var n = f(e);
         if (n !== null) {
            if (e = n.tag, e === 13) {
               if (e = h(n), e !== null) {
                  t.blockedOn = e, Rv(t.priority, function () {
                     if (n.tag === 13) {
                        var a = xe();
                        a = fs(a);
                        var r = Hl(n, a);
                        r !== null && Se(r, n, a), yu(n, a)
                     }
                  });
                  return
               }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
               t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
               return
            }
         }
      }
      t.blockedOn = null
   }

   function Mr(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length;) {
         var n = gu(t.nativeEvent);
         if (n === null) {
            n = t.nativeEvent;
            var a = new n.constructor(n.type, n);
            Ss = a, n.target.dispatchEvent(a), Ss = null
         } else return e = Tl(n), e !== null && cm(e), t.blockedOn = n, !1;
         e.shift()
      }
      return !0
   }

   function mm(t, e, n) {
      Mr(t) && n.delete(e)
   }

   function Ub() {
      xu = !1, Bn !== null && Mr(Bn) && (Bn = null), Yn !== null && Mr(Yn) && (Yn = null), Gn !== null && Mr(Gn) && (Gn = null), ri.forEach(mm), si.forEach(mm)
   }

   function _r(t, e) {
      t.blockedOn === e && (t.blockedOn = null, xu || (xu = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Ub)))
   }
   var Dr = null;

   function pm(t) {
      Dr !== t && (Dr = t, l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
         Dr === t && (Dr = null);
         for (var e = 0; e < t.length; e += 3) {
            var n = t[e],
               a = t[e + 1],
               r = t[e + 2];
            if (typeof a != "function") {
               if (bu(a || n) === null) continue;
               break
            }
            var o = Tl(n);
            o !== null && (t.splice(e, 3), e -= 3, bo(o, {
               pending: !0,
               data: r,
               method: n.method,
               action: a
            }, a, r))
         }
      }))
   }

   function ui(t) {
      function e(S) {
         return _r(S, t)
      }
      Bn !== null && _r(Bn, t), Yn !== null && _r(Yn, t), Gn !== null && _r(Gn, t), ri.forEach(e), si.forEach(e);
      for (var n = 0; n < Vn.length; n++) {
         var a = Vn[n];
         a.blockedOn === t && (a.blockedOn = null)
      }
      for (; 0 < Vn.length && (n = Vn[0], n.blockedOn === null);) hm(n), n.blockedOn === null && Vn.shift();
      if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
         for (a = 0; a < n.length; a += 3) {
            var r = n[a],
               o = n[a + 1],
               d = r[re] || null;
            if (typeof o == "function") d || pm(n);
            else if (d) {
               var p = null;
               if (o && o.hasAttribute("formAction")) {
                  if (r = o, d = o[re] || null) p = d.formAction;
                  else if (bu(r) !== null) continue
               } else p = d.action;
               typeof p == "function" ? n[a + 1] = p : (n.splice(a, 3), a -= 3), pm(n)
            }
         }
   }

   function Su(t) {
      this._internalRoot = t
   }
   jr.prototype.render = Su.prototype.render = function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
         a = xe();
      om(n, a, t, e, null, null)
   }, jr.prototype.unmount = Su.prototype.unmount = function () {
      var t = this._internalRoot;
      if (t !== null) {
         this._internalRoot = null;
         var e = t.containerInfo;
         om(t.current, 2, null, t, null, null), mr(), e[wl] = null
      }
   };

   function jr(t) {
      this._internalRoot = t
   }
   jr.prototype.unstable_scheduleHydration = function (t) {
      if (t) {
         var e = _c();
         t = {
            blockedOn: null,
            target: t,
            priority: e
         };
         for (var n = 0; n < Vn.length && e !== 0 && e < Vn[n].priority; n++);
         Vn.splice(n, 0, t), n === 0 && hm(t)
      }
   };
   var ym = i.version;
   if (ym !== "19.1.0") throw Error(u(527, ym, "19.1.0"));
   Q.findDOMNode = function (t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
      return t = v(e), t = t !== null ? m(t) : null, t = t === null ? null : t.stateNode, t
   };
   var Hb = {
      bundleType: 0,
      version: "19.1.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: M,
      reconcilerVersion: "19.1.0"
   };
   if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zr.isDisabled && zr.supportsFiber) try {
         ha = zr.inject(Hb), he = zr
      } catch {}
   }
   return fi.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
         a = "",
         r = Dd,
         o = jd,
         d = zd,
         p = null;
      return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (r = e.onUncaughtError), e.onCaughtError !== void 0 && (o = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (p = e.unstable_transitionCallbacks)), e = rm(t, 1, !1, null, null, n, a, r, o, d, p, null), t[wl] = e.current, lu(t), new Su(e)
   }, fi.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var a = !1,
         r = "",
         o = Dd,
         d = jd,
         p = zd,
         S = null,
         _ = null;
      return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (S = n.unstable_transitionCallbacks), n.formState !== void 0 && (_ = n.formState)), e = rm(t, 1, !0, e, n ?? null, a, r, o, d, p, S, _), e.context = sm(null), n = e.current, a = xe(), a = fs(a), r = On(a), r.callback = null, Rn(n, r, a), n = a, e.current.lanes = n, pa(e, n), Je(e), t[wl] = e.current, lu(t), new jr(e)
   }, fi.version = "19.1.0", fi
}
var Om;

function Zb() {
   if (Om) return Eu.exports;
   Om = 1;

   function l() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
         __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
      } catch (i) {
         console.error(i)
      }
   }
   return l(), Eu.exports = Xb(), Eu.exports
}
var Kb = Zb();

function Pb(l, i) {
   if (l instanceof RegExp) return {
      keys: !1,
      pattern: l
   };
   var s, u, c, f, h = [],
      y = "",
      v = l.split("/");
   for (v[0] || v.shift(); c = v.shift();) s = c[0], s === "*" ? (h.push(s), y += c[1] === "?" ? "(?:/(.*))?" : "/(.*)") : s === ":" ? (u = c.indexOf("?", 1), f = c.indexOf(".", 1), h.push(c.substring(1, ~u ? u : ~f ? f : c.length)), y += ~u && !~f ? "(?:/([^/]+?))?" : "/([^/]+?)", ~f && (y += (~u ? "?" : "") + "\\" + c.substring(f))) : y += "/" + c;
   return {
      keys: h,
      pattern: new RegExp("^" + y + (i ? "(?=$|/)" : "/?$"), "i")
   }
}
var w = $r();
const Kn = yp(w),
   tc = kb({
      __proto__: null,
      default: Kn
   }, [w]);
var Nu = {
      exports: {}
   },
   Cu = {};
var Rm;

function Jb() {
   if (Rm) return Cu;
   Rm = 1;
   var l = $r();

   function i(E, A) {
      return E === A && (E !== 0 || 1 / E === 1 / A) || E !== E && A !== A
   }
   var s = typeof Object.is == "function" ? Object.is : i,
      u = l.useState,
      c = l.useEffect,
      f = l.useLayoutEffect,
      h = l.useDebugValue;

   function y(E, A) {
      var D = A(),
         z = u({
            inst: {
               value: D,
               getSnapshot: A
            }
         }),
         R = z[0].inst,
         N = z[1];
      return f(function () {
         R.value = D, R.getSnapshot = A, v(R) && N({
            inst: R
         })
      }, [E, D, A]), c(function () {
         return v(R) && N({
            inst: R
         }), E(function () {
            v(R) && N({
               inst: R
            })
         })
      }, [E]), h(D), D
   }

   function v(E) {
      var A = E.getSnapshot;
      E = E.value;
      try {
         var D = A();
         return !s(E, D)
      } catch {
         return !0
      }
   }

   function m(E, A) {
      return A()
   }
   var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : y;
   return Cu.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : b, Cu
}
var Nm;

function Fb() {
   return Nm || (Nm = 1, Nu.exports = Jb()), Nu.exports
}
var $b = Fb();
const Wb = tc.useInsertionEffect,
   Ib = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
   t0 = Ib ? w.useLayoutEffect : w.useEffect,
   e0 = Wb || t0,
   gp = l => {
      const i = w.useRef([l, (...s) => i[0](...s)]).current;
      return e0(() => {
         i[0] = l
      }), i[1]
   },
   n0 = "popstate",
   ec = "pushState",
   nc = "replaceState",
   l0 = "hashchange",
   Cm = [n0, ec, nc, l0],
   a0 = l => {
      for (const i of Cm) addEventListener(i, l);
      return () => {
         for (const i of Cm) removeEventListener(i, l)
      }
   },
   bp = (l, i) => $b.useSyncExternalStore(a0, l, i),
   Mm = () => location.search,
   i0 = ({
      ssrSearch: l
   } = {}) => bp(Mm, l != null ? () => l : Mm),
   _m = () => location.pathname,
   r0 = ({
      ssrPath: l
   } = {}) => bp(_m, l != null ? () => l : _m),
   s0 = (l, {
      replace: i = !1,
      state: s = null
   } = {}) => history[i ? nc : ec](s, "", l),
   o0 = (l = {}) => [r0(l), s0],
   Dm = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Dm] > "u") {
   for (const l of [ec, nc]) {
      const i = history[l];
      history[l] = function () {
         const s = i.apply(this, arguments),
            u = new Event(l);
         return u.arguments = arguments, dispatchEvent(u), s
      }
   }
   Object.defineProperty(window, Dm, {
      value: !0
   })
}
const u0 = (l, i) => i.toLowerCase().indexOf(l.toLowerCase()) ? "~" + i : i.slice(l.length) || "/",
   xp = (l = "") => l === "/" ? "" : l,
   c0 = (l, i) => l[0] === "~" ? l.slice(1) : xp(i) + l,
   f0 = (l = "", i) => u0(jm(xp(l)), jm(i)),
   jm = l => {
      try {
         return decodeURI(l)
      } catch {
         return l
      }
   },
   Sp = {
      hook: o0,
      searchHook: i0,
      parser: Pb,
      base: "",
      ssrPath: void 0,
      ssrSearch: void 0,
      ssrContext: void 0,
      hrefs: l => l,
      aroundNav: (l, i, s) => l(i, s)
   },
   wp = w.createContext(Sp),
   Wr = () => w.useContext(wp),
   Ep = {},
   Tp = w.createContext(Ep),
   d0 = () => w.useContext(Tp),
   lc = l => {
      const [i, s] = l.hook(l);
      return [f0(l.base, i), gp((u, c) => l.aroundNav(s, c0(u, l.base), c))]
   },
   Ap = (l, i, s, u) => {
      const {
         pattern: c,
         keys: f
      } = i instanceof RegExp ? {
         keys: !1,
         pattern: i
      } : l(i || "*", u), h = c.exec(s) || [], [y, ...v] = h;
      return y !== void 0 ? [!0, (() => {
         const m = f !== !1 ? Object.fromEntries(f.map((E, A) => [E, v[A]])) : h.groups;
         let b = {
            ...v
         };
         return m && Object.assign(b, m), b
      })(), ...u ? [y] : []] : [!1, null]
   },
   Op = ({
      children: l,
      ...i
   }) => {
      const s = Wr(),
         u = i.hook ? Sp : s;
      let c = u;
      const [f, h = i.ssrSearch ?? ""] = i.ssrPath?.split("?") ?? [];
      f && (i.ssrSearch = h, i.ssrPath = f), i.hrefs = i.hrefs ?? i.hook?.hrefs, i.searchHook = i.searchHook ?? i.hook?.searchHook;
      let y = w.useRef({}),
         v = y.current,
         m = v;
      for (let b in u) {
         const E = b === "base" ? u[b] + (i[b] ?? "") : i[b] ?? u[b];
         v === m && E !== m[b] && (y.current = m = {
            ...m
         }), m[b] = E, (E !== u[b] || E !== c[b]) && (c = m)
      }
      return w.createElement(wp.Provider, {
         value: c,
         children: l
      })
   },
   zm = ({
      children: l,
      component: i
   }, s) => i ? w.createElement(i, {
      params: s
   }) : typeof l == "function" ? l(s) : l,
   h0 = l => {
      let i = w.useRef(Ep);
      const s = i.current;
      return i.current = Object.keys(l).length !== Object.keys(s).length || Object.entries(l).some(([u, c]) => c !== s[u]) ? l : s
   },
   Um = ({
      path: l,
      nest: i,
      match: s,
      ...u
   }) => {
      const c = Wr(),
         [f] = lc(c),
         [h, y, v] = s ?? Ap(c.parser, l, f, i),
         m = h0({
            ...d0(),
            ...y
         });
      if (!h) return null;
      const b = v ? w.createElement(Op, {
         base: v
      }, zm(u, m)) : zm(u, m);
      return w.createElement(Tp.Provider, {
         value: m,
         children: b
      })
   },
   ku = w.forwardRef((l, i) => {
      const s = Wr(),
         [u, c] = lc(s),
         {
            to: f = "",
            href: h = f,
            onClick: y,
            asChild: v,
            children: m,
            className: b,
            replace: E,
            state: A,
            transition: D,
            ...z
         } = l,
         R = gp(B => {
            B.ctrlKey || B.metaKey || B.altKey || B.shiftKey || B.button !== 0 || (y?.(B), B.defaultPrevented || (B.preventDefault(), c(h, l)))
         }),
         N = s.hrefs(h[0] === "~" ? h.slice(1) : s.base + h, s);
      return v && w.isValidElement(m) ? w.cloneElement(m, {
         onClick: R,
         href: N
      }) : w.createElement("a", {
         ...z,
         onClick: R,
         href: N,
         className: b?.call ? b(u === h) : b,
         children: m,
         ref: i
      })
   }),
   Rp = l => Array.isArray(l) ? l.flatMap(i => Rp(i && i.type === w.Fragment ? i.props.children : i)) : [l],
   m0 = ({
      children: l,
      location: i
   }) => {
      const s = Wr(),
         [u] = lc(s);
      for (const c of Rp(l)) {
         let f = 0;
         if (w.isValidElement(c) && (f = Ap(s.parser, c.props.path, i || u, c.props.nest))[0]) return w.cloneElement(c, {
            match: f
         })
      }
      return null
   };
var vi = class {
      constructor() {
         this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
      }
      subscribe(l) {
         return this.listeners.add(l), this.onSubscribe(), () => {
            this.listeners.delete(l), this.onUnsubscribe()
         }
      }
      hasListeners() {
         return this.listeners.size > 0
      }
      onSubscribe() {}
      onUnsubscribe() {}
   },
   p0 = {
      setTimeout: (l, i) => setTimeout(l, i),
      clearTimeout: l => clearTimeout(l),
      setInterval: (l, i) => setInterval(l, i),
      clearInterval: l => clearInterval(l)
   },
   y0 = class {
      #t = p0;
      #n = !1;
      setTimeoutProvider(l) {
         this.#t = l
      }
      setTimeout(l, i) {
         return this.#t.setTimeout(l, i)
      }
      clearTimeout(l) {
         this.#t.clearTimeout(l)
      }
      setInterval(l, i) {
         return this.#t.setInterval(l, i)
      }
      clearInterval(l) {
         this.#t.clearInterval(l)
      }
   },
   qu = new y0;

function v0(l) {
   setTimeout(l, 0)
}
var Ir = typeof window > "u" || "Deno" in globalThis;

function ze() {}

function g0(l, i) {
   return typeof l == "function" ? l(i) : l
}

function b0(l) {
   return typeof l == "number" && l >= 0 && l !== 1 / 0
}

function x0(l, i) {
   return Math.max(l + (i || 0) - Date.now(), 0)
}

function Bu(l, i) {
   return typeof l == "function" ? l(i) : l
}

function S0(l, i) {
   return typeof l == "function" ? l(i) : l
}

function Hm(l, i) {
   const {
      type: s = "all",
      exact: u,
      fetchStatus: c,
      predicate: f,
      queryKey: h,
      stale: y
   } = l;
   if (h) {
      if (u) {
         if (i.queryHash !== ac(h, i.options)) return !1
      } else if (!pi(i.queryKey, h)) return !1
   }
   if (s !== "all") {
      const v = i.isActive();
      if (s === "active" && !v || s === "inactive" && v) return !1
   }
   return !(typeof y == "boolean" && i.isStale() !== y || c && c !== i.state.fetchStatus || f && !f(i))
}

function Lm(l, i) {
   const {
      exact: s,
      status: u,
      predicate: c,
      mutationKey: f
   } = l;
   if (f) {
      if (!i.options.mutationKey) return !1;
      if (s) {
         if (bl(i.options.mutationKey) !== bl(f)) return !1
      } else if (!pi(i.options.mutationKey, f)) return !1
   }
   return !(u && i.state.status !== u || c && !c(i))
}

function ac(l, i) {
   return (i?.queryKeyHashFn || bl)(l)
}

function bl(l) {
   return JSON.stringify(l, (i, s) => Yu(s) ? Object.keys(s).sort().reduce((u, c) => (u[c] = s[c], u), {}) : s)
}

function pi(l, i) {
   return l === i ? !0 : typeof l != typeof i ? !1 : l && i && typeof l == "object" && typeof i == "object" ? Object.keys(i).every(s => pi(l[s], i[s])) : !1
}
var w0 = Object.prototype.hasOwnProperty;

function Np(l, i, s = 0) {
   if (l === i) return l;
   if (s > 500) return i;
   const u = km(l) && km(i);
   if (!u && !(Yu(l) && Yu(i))) return i;
   const f = (u ? l : Object.keys(l)).length,
      h = u ? i : Object.keys(i),
      y = h.length,
      v = u ? new Array(y) : {};
   let m = 0;
   for (let b = 0; b < y; b++) {
      const E = u ? b : h[b],
         A = l[E],
         D = i[E];
      if (A === D) {
         v[E] = A, (u ? b < f : w0.call(l, E)) && m++;
         continue
      }
      if (A === null || D === null || typeof A != "object" || typeof D != "object") {
         v[E] = D;
         continue
      }
      const z = Np(A, D, s + 1);
      v[E] = z, z === A && m++
   }
   return f === y && m === f ? l : v
}

function E0(l, i) {
   if (!i || Object.keys(l).length !== Object.keys(i).length) return !1;
   for (const s in l)
      if (l[s] !== i[s]) return !1;
   return !0
}

function km(l) {
   return Array.isArray(l) && l.length === Object.keys(l).length
}

function Yu(l) {
   if (!qm(l)) return !1;
   const i = l.constructor;
   if (i === void 0) return !0;
   const s = i.prototype;
   return !(!qm(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(l) !== Object.prototype)
}

function qm(l) {
   return Object.prototype.toString.call(l) === "[object Object]"
}

function T0(l) {
   return new Promise(i => {
      qu.setTimeout(i, l)
   })
}

function A0(l, i, s) {
   return typeof s.structuralSharing == "function" ? s.structuralSharing(l, i) : s.structuralSharing !== !1 ? Np(l, i) : i
}

function O0(l, i, s = 0) {
   const u = [...l, i];
   return s && u.length > s ? u.slice(1) : u
}

function R0(l, i, s = 0) {
   const u = [i, ...l];
   return s && u.length > s ? u.slice(0, -1) : u
}
var ic = Symbol();

function Cp(l, i) {
   return !l.queryFn && i?.initialPromise ? () => i.initialPromise : !l.queryFn || l.queryFn === ic ? () => Promise.reject(new Error(`Missing queryFn: '${l.queryHash}'`)) : l.queryFn
}

function N0(l, i) {
   return typeof l == "function" ? l(...i) : !!l
}

function C0(l, i, s) {
   let u = !1,
      c;
   return Object.defineProperty(l, "signal", {
      enumerable: !0,
      get: () => (c ??= i(), u || (u = !0, c.aborted ? s() : c.addEventListener("abort", s, {
         once: !0
      })), c)
   }), l
}
var M0 = class extends vi {
      #t;
      #n;
      #e;
      constructor() {
         super(), this.#e = l => {
            if (!Ir && window.addEventListener) {
               const i = () => l();
               return window.addEventListener("visibilitychange", i, !1), () => {
                  window.removeEventListener("visibilitychange", i)
               }
            }
         }
      }
      onSubscribe() {
         this.#n || this.setEventListener(this.#e)
      }
      onUnsubscribe() {
         this.hasListeners() || (this.#n?.(), this.#n = void 0)
      }
      setEventListener(l) {
         this.#e = l, this.#n?.(), this.#n = l(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
         })
      }
      setFocused(l) {
         this.#t !== l && (this.#t = l, this.onFocus())
      }
      onFocus() {
         const l = this.isFocused();
         this.listeners.forEach(i => {
            i(l)
         })
      }
      isFocused() {
         return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden"
      }
   },
   Mp = new M0;

function _0() {
   let l, i;
   const s = new Promise((c, f) => {
      l = c, i = f
   });
   s.status = "pending", s.catch(() => {});

   function u(c) {
      Object.assign(s, c), delete s.resolve, delete s.reject
   }
   return s.resolve = c => {
      u({
         status: "fulfilled",
         value: c
      }), l(c)
   }, s.reject = c => {
      u({
         status: "rejected",
         reason: c
      }), i(c)
   }, s
}
var D0 = v0;

function j0() {
   let l = [],
      i = 0,
      s = y => {
         y()
      },
      u = y => {
         y()
      },
      c = D0;
   const f = y => {
         i ? l.push(y) : c(() => {
            s(y)
         })
      },
      h = () => {
         const y = l;
         l = [], y.length && c(() => {
            u(() => {
               y.forEach(v => {
                  s(v)
               })
            })
         })
      };
   return {
      batch: y => {
         let v;
         i++;
         try {
            v = y()
         } finally {
            i--, i || h()
         }
         return v
      },
      batchCalls: y => (...v) => {
         f(() => {
            y(...v)
         })
      },
      schedule: f,
      setNotifyFunction: y => {
         s = y
      },
      setBatchNotifyFunction: y => {
         u = y
      },
      setScheduler: y => {
         c = y
      }
   }
}
var te = j0(),
   z0 = class extends vi {
      #t = !0;
      #n;
      #e;
      constructor() {
         super(), this.#e = l => {
            if (!Ir && window.addEventListener) {
               const i = () => l(!0),
                  s = () => l(!1);
               return window.addEventListener("online", i, !1), window.addEventListener("offline", s, !1), () => {
                  window.removeEventListener("online", i), window.removeEventListener("offline", s)
               }
            }
         }
      }
      onSubscribe() {
         this.#n || this.setEventListener(this.#e)
      }
      onUnsubscribe() {
         this.hasListeners() || (this.#n?.(), this.#n = void 0)
      }
      setEventListener(l) {
         this.#e = l, this.#n?.(), this.#n = l(this.setOnline.bind(this))
      }
      setOnline(l) {
         this.#t !== l && (this.#t = l, this.listeners.forEach(s => {
            s(l)
         }))
      }
      isOnline() {
         return this.#t
      }
   },
   Qr = new z0;

function U0(l) {
   return Math.min(1e3 * 2 ** l, 3e4)
}

function _p(l) {
   return (l ?? "online") === "online" ? Qr.isOnline() : !0
}
var Gu = class extends Error {
   constructor(l) {
      super("CancelledError"), this.revert = l?.revert, this.silent = l?.silent
   }
};

function Dp(l) {
   let i = !1,
      s = 0,
      u;
   const c = _0(),
      f = () => c.status !== "pending",
      h = R => {
         if (!f()) {
            const N = new Gu(R);
            A(N), l.onCancel?.(N)
         }
      },
      y = () => {
         i = !0
      },
      v = () => {
         i = !1
      },
      m = () => Mp.isFocused() && (l.networkMode === "always" || Qr.isOnline()) && l.canRun(),
      b = () => _p(l.networkMode) && l.canRun(),
      E = R => {
         f() || (u?.(), c.resolve(R))
      },
      A = R => {
         f() || (u?.(), c.reject(R))
      },
      D = () => new Promise(R => {
         u = N => {
            (f() || m()) && R(N)
         }, l.onPause?.()
      }).then(() => {
         u = void 0, f() || l.onContinue?.()
      }),
      z = () => {
         if (f()) return;
         let R;
         const N = s === 0 ? l.initialPromise : void 0;
         try {
            R = N ?? l.fn()
         } catch (B) {
            R = Promise.reject(B)
         }
         Promise.resolve(R).then(E).catch(B => {
            if (f()) return;
            const X = l.retry ?? (Ir ? 0 : 3),
               V = l.retryDelay ?? U0,
               k = typeof V == "function" ? V(s, B) : V,
               H = X === !0 || typeof X == "number" && s < X || typeof X == "function" && X(s, B);
            if (i || !H) {
               A(B);
               return
            }
            s++, l.onFail?.(s, B), T0(k).then(() => m() ? void 0 : D()).then(() => {
               i ? A(B) : z()
            })
         })
      };
   return {
      promise: c,
      status: () => c.status,
      cancel: h,
      continue: () => (u?.(), c),
      cancelRetry: y,
      continueRetry: v,
      canStart: b,
      start: () => (b() ? z() : D().then(z), c)
   }
}
var jp = class {
      #t;
      destroy() {
         this.clearGcTimeout()
      }
      scheduleGc() {
         this.clearGcTimeout(), b0(this.gcTime) && (this.#t = qu.setTimeout(() => {
            this.optionalRemove()
         }, this.gcTime))
      }
      updateGcTime(l) {
         this.gcTime = Math.max(this.gcTime || 0, l ?? (Ir ? 1 / 0 : 300 * 1e3))
      }
      clearGcTimeout() {
         this.#t && (qu.clearTimeout(this.#t), this.#t = void 0)
      }
   },
   H0 = class extends jp {
      #t;
      #n;
      #e;
      #a;
      #l;
      #r;
      #s;
      constructor(l) {
         super(), this.#s = !1, this.#r = l.defaultOptions, this.setOptions(l.options), this.observers = [], this.#a = l.client, this.#e = this.#a.getQueryCache(), this.queryKey = l.queryKey, this.queryHash = l.queryHash, this.#t = Ym(this.options), this.state = l.state ?? this.#t, this.scheduleGc()
      }
      get meta() {
         return this.options.meta
      }
      get promise() {
         return this.#l?.promise
      }
      setOptions(l) {
         if (this.options = {
               ...this.#r,
               ...l
            }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
            const i = Ym(this.options);
            i.data !== void 0 && (this.setState(Bm(i.data, i.dataUpdatedAt)), this.#t = i)
         }
      }
      optionalRemove() {
         !this.observers.length && this.state.fetchStatus === "idle" && this.#e.remove(this)
      }
      setData(l, i) {
         const s = A0(this.state.data, l, this.options);
         return this.#i({
            data: s,
            type: "success",
            dataUpdatedAt: i?.updatedAt,
            manual: i?.manual
         }), s
      }
      setState(l, i) {
         this.#i({
            type: "setState",
            state: l,
            setStateOptions: i
         })
      }
      cancel(l) {
         const i = this.#l?.promise;
         return this.#l?.cancel(l), i ? i.then(ze).catch(ze) : Promise.resolve()
      }
      destroy() {
         super.destroy(), this.cancel({
            silent: !0
         })
      }
      reset() {
         this.destroy(), this.setState(this.#t)
      }
      isActive() {
         return this.observers.some(l => S0(l.options.enabled, this) !== !1)
      }
      isDisabled() {
         return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ic || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
      }
      isStatic() {
         return this.getObserversCount() > 0 ? this.observers.some(l => Bu(l.options.staleTime, this) === "static") : !1
      }
      isStale() {
         return this.getObserversCount() > 0 ? this.observers.some(l => l.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
      }
      isStaleByTime(l = 0) {
         return this.state.data === void 0 ? !0 : l === "static" ? !1 : this.state.isInvalidated ? !0 : !x0(this.state.dataUpdatedAt, l)
      }
      onFocus() {
         this.observers.find(i => i.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
         }), this.#l?.continue()
      }
      onOnline() {
         this.observers.find(i => i.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
         }), this.#l?.continue()
      }
      addObserver(l) {
         this.observers.includes(l) || (this.observers.push(l), this.clearGcTimeout(), this.#e.notify({
            type: "observerAdded",
            query: this,
            observer: l
         }))
      }
      removeObserver(l) {
         this.observers.includes(l) && (this.observers = this.observers.filter(i => i !== l), this.observers.length || (this.#l && (this.#s ? this.#l.cancel({
            revert: !0
         }) : this.#l.cancelRetry()), this.scheduleGc()), this.#e.notify({
            type: "observerRemoved",
            query: this,
            observer: l
         }))
      }
      getObserversCount() {
         return this.observers.length
      }
      invalidate() {
         this.state.isInvalidated || this.#i({
            type: "invalidate"
         })
      }
      async fetch(l, i) {
         if (this.state.fetchStatus !== "idle" && this.#l?.status() !== "rejected") {
            if (this.state.data !== void 0 && i?.cancelRefetch) this.cancel({
               silent: !0
            });
            else if (this.#l) return this.#l.continueRetry(), this.#l.promise
         }
         if (l && this.setOptions(l), !this.options.queryFn) {
            const y = this.observers.find(v => v.options.queryFn);
            y && this.setOptions(y.options)
         }
         const s = new AbortController,
            u = y => {
               Object.defineProperty(y, "signal", {
                  enumerable: !0,
                  get: () => (this.#s = !0, s.signal)
               })
            },
            c = () => {
               const y = Cp(this.options, i),
                  m = (() => {
                     const b = {
                        client: this.#a,
                        queryKey: this.queryKey,
                        meta: this.meta
                     };
                     return u(b), b
                  })();
               return this.#s = !1, this.options.persister ? this.options.persister(y, m, this) : y(m)
            },
            h = (() => {
               const y = {
                  fetchOptions: i,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#a,
                  state: this.state,
                  fetchFn: c
               };
               return u(y), y
            })();
         this.options.behavior?.onFetch(h, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== h.fetchOptions?.meta) && this.#i({
            type: "fetch",
            meta: h.fetchOptions?.meta
         }), this.#l = Dp({
            initialPromise: i?.initialPromise,
            fn: h.fetchFn,
            onCancel: y => {
               y instanceof Gu && y.revert && this.setState({
                  ...this.#n,
                  fetchStatus: "idle"
               }), s.abort()
            },
            onFail: (y, v) => {
               this.#i({
                  type: "failed",
                  failureCount: y,
                  error: v
               })
            },
            onPause: () => {
               this.#i({
                  type: "pause"
               })
            },
            onContinue: () => {
               this.#i({
                  type: "continue"
               })
            },
            retry: h.options.retry,
            retryDelay: h.options.retryDelay,
            networkMode: h.options.networkMode,
            canRun: () => !0
         });
         try {
            const y = await this.#l.start();
            if (y === void 0) throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(y), this.#e.config.onSuccess?.(y, this), this.#e.config.onSettled?.(y, this.state.error, this), y
         } catch (y) {
            if (y instanceof Gu) {
               if (y.silent) return this.#l.promise;
               if (y.revert) {
                  if (this.state.data === void 0) throw y;
                  return this.state.data
               }
            }
            throw this.#i({
               type: "error",
               error: y
            }), this.#e.config.onError?.(y, this), this.#e.config.onSettled?.(this.state.data, y, this), y
         } finally {
            this.scheduleGc()
         }
      }
      #i(l) {
         const i = s => {
            switch (l.type) {
               case "failed":
                  return {
                     ...s, fetchFailureCount: l.failureCount, fetchFailureReason: l.error
                  };
               case "pause":
                  return {
                     ...s, fetchStatus: "paused"
                  };
               case "continue":
                  return {
                     ...s, fetchStatus: "fetching"
                  };
               case "fetch":
                  return {
                     ...s, ...L0(s.data, this.options), fetchMeta: l.meta ?? null
                  };
               case "success":
                  const u = {
                     ...s,
                     ...Bm(l.data, l.dataUpdatedAt),
                     dataUpdateCount: s.dataUpdateCount + 1,
                     ...!l.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                     }
                  };
                  return this.#n = l.manual ? u : void 0, u;
               case "error":
                  const c = l.error;
                  return {
                     ...s, error: c, errorUpdateCount: s.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: s.fetchFailureCount + 1, fetchFailureReason: c, fetchStatus: "idle", status: "error", isInvalidated: !0
                  };
               case "invalidate":
                  return {
                     ...s, isInvalidated: !0
                  };
               case "setState":
                  return {
                     ...s, ...l.state
                  }
            }
         };
         this.state = i(this.state), te.batch(() => {
            this.observers.forEach(s => {
               s.onQueryUpdate()
            }), this.#e.notify({
               query: this,
               type: "updated",
               action: l
            })
         })
      }
   };

function L0(l, i) {
   return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: _p(i.networkMode) ? "fetching" : "paused",
      ...l === void 0 && {
         error: null,
         status: "pending"
      }
   }
}

function Bm(l, i) {
   return {
      data: l,
      dataUpdatedAt: i ?? Date.now(),
      error: null,
      isInvalidated: !1,
      status: "success"
   }
}

function Ym(l) {
   const i = typeof l.initialData == "function" ? l.initialData() : l.initialData,
      s = i !== void 0,
      u = s ? typeof l.initialDataUpdatedAt == "function" ? l.initialDataUpdatedAt() : l.initialDataUpdatedAt : 0;
   return {
      data: i,
      dataUpdateCount: 0,
      dataUpdatedAt: s ? u ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: s ? "success" : "pending",
      fetchStatus: "idle"
   }
}

function Gm(l) {
   return {
      onFetch: (i, s) => {
         const u = i.options,
            c = i.fetchOptions?.meta?.fetchMore?.direction,
            f = i.state.data?.pages || [],
            h = i.state.data?.pageParams || [];
         let y = {
               pages: [],
               pageParams: []
            },
            v = 0;
         const m = async () => {
            let b = !1;
            const E = z => {
                  C0(z, () => i.signal, () => b = !0)
               },
               A = Cp(i.options, i.fetchOptions),
               D = async (z, R, N) => {
                  if (b) return Promise.reject();
                  if (R == null && z.pages.length) return Promise.resolve(z);
                  const X = (() => {
                        const P = {
                           client: i.client,
                           queryKey: i.queryKey,
                           pageParam: R,
                           direction: N ? "backward" : "forward",
                           meta: i.options.meta
                        };
                        return E(P), P
                     })(),
                     V = await A(X),
                     {
                        maxPages: k
                     } = i.options,
                     H = N ? R0 : O0;
                  return {
                     pages: H(z.pages, V, k),
                     pageParams: H(z.pageParams, R, k)
                  }
               };
            if (c && f.length) {
               const z = c === "backward",
                  R = z ? k0 : Vm,
                  N = {
                     pages: f,
                     pageParams: h
                  },
                  B = R(u, N);
               y = await D(N, B, z)
            } else {
               const z = l ?? f.length;
               do {
                  const R = v === 0 ? h[0] ?? u.initialPageParam : Vm(u, y);
                  if (v > 0 && R == null) break;
                  y = await D(y, R), v++
               } while (v < z)
            }
            return y
         };
         i.options.persister ? i.fetchFn = () => i.options.persister?.(m, {
            client: i.client,
            queryKey: i.queryKey,
            meta: i.options.meta,
            signal: i.signal
         }, s) : i.fetchFn = m
      }
   }
}

function Vm(l, {
   pages: i,
   pageParams: s
}) {
   const u = i.length - 1;
   return i.length > 0 ? l.getNextPageParam(i[u], i, s[u], s) : void 0
}

function k0(l, {
   pages: i,
   pageParams: s
}) {
   return i.length > 0 ? l.getPreviousPageParam?.(i[0], i, s[0], s) : void 0
}
var q0 = class extends jp {
   #t;
   #n;
   #e;
   #a;
   constructor(l) {
      super(), this.#t = l.client, this.mutationId = l.mutationId, this.#e = l.mutationCache, this.#n = [], this.state = l.state || zp(), this.setOptions(l.options), this.scheduleGc()
   }
   setOptions(l) {
      this.options = l, this.updateGcTime(this.options.gcTime)
   }
   get meta() {
      return this.options.meta
   }
   addObserver(l) {
      this.#n.includes(l) || (this.#n.push(l), this.clearGcTimeout(), this.#e.notify({
         type: "observerAdded",
         mutation: this,
         observer: l
      }))
   }
   removeObserver(l) {
      this.#n = this.#n.filter(i => i !== l), this.scheduleGc(), this.#e.notify({
         type: "observerRemoved",
         mutation: this,
         observer: l
      })
   }
   optionalRemove() {
      this.#n.length || (this.state.status === "pending" ? this.scheduleGc() : this.#e.remove(this))
   }
   continue () {
      return this.#a?.continue() ?? this.execute(this.state.variables)
   }
   async execute(l) {
      const i = () => {
            this.#l({
               type: "continue"
            })
         },
         s = {
            client: this.#t,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
         };
      this.#a = Dp({
         fn: () => this.options.mutationFn ? this.options.mutationFn(l, s) : Promise.reject(new Error("No mutationFn found")),
         onFail: (f, h) => {
            this.#l({
               type: "failed",
               failureCount: f,
               error: h
            })
         },
         onPause: () => {
            this.#l({
               type: "pause"
            })
         },
         onContinue: i,
         retry: this.options.retry ?? 0,
         retryDelay: this.options.retryDelay,
         networkMode: this.options.networkMode,
         canRun: () => this.#e.canRun(this)
      });
      const u = this.state.status === "pending",
         c = !this.#a.canStart();
      try {
         if (u) i();
         else {
            this.#l({
               type: "pending",
               variables: l,
               isPaused: c
            }), this.#e.config.onMutate && await this.#e.config.onMutate(l, this, s);
            const h = await this.options.onMutate?.(l, s);
            h !== this.state.context && this.#l({
               type: "pending",
               context: h,
               variables: l,
               isPaused: c
            })
         }
         const f = await this.#a.start();
         return await this.#e.config.onSuccess?.(f, l, this.state.context, this, s), await this.options.onSuccess?.(f, l, this.state.context, s), await this.#e.config.onSettled?.(f, null, this.state.variables, this.state.context, this, s), await this.options.onSettled?.(f, null, l, this.state.context, s), this.#l({
            type: "success",
            data: f
         }), f
      } catch (f) {
         try {
            await this.#e.config.onError?.(f, l, this.state.context, this, s)
         } catch (h) {
            Promise.reject(h)
         }
         try {
            await this.options.onError?.(f, l, this.state.context, s)
         } catch (h) {
            Promise.reject(h)
         }
         try {
            await this.#e.config.onSettled?.(void 0, f, this.state.variables, this.state.context, this, s)
         } catch (h) {
            Promise.reject(h)
         }
         try {
            await this.options.onSettled?.(void 0, f, l, this.state.context, s)
         } catch (h) {
            Promise.reject(h)
         }
         throw this.#l({
            type: "error",
            error: f
         }), f
      } finally {
         this.#e.runNext(this)
      }
   }
   #l(l) {
      const i = s => {
         switch (l.type) {
            case "failed":
               return {
                  ...s, failureCount: l.failureCount, failureReason: l.error
               };
            case "pause":
               return {
                  ...s, isPaused: !0
               };
            case "continue":
               return {
                  ...s, isPaused: !1
               };
            case "pending":
               return {
                  ...s, context: l.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: l.isPaused, status: "pending", variables: l.variables, submittedAt: Date.now()
               };
            case "success":
               return {
                  ...s, data: l.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
               };
            case "error":
               return {
                  ...s, data: void 0, error: l.error, failureCount: s.failureCount + 1, failureReason: l.error, isPaused: !1, status: "error"
               }
         }
      };
      this.state = i(this.state), te.batch(() => {
         this.#n.forEach(s => {
            s.onMutationUpdate(l)
         }), this.#e.notify({
            mutation: this,
            type: "updated",
            action: l
         })
      })
   }
};

function zp() {
   return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0
   }
}
var B0 = class extends vi {
   constructor(l = {}) {
      super(), this.config = l, this.#t = new Set, this.#n = new Map, this.#e = 0
   }
   #t;
   #n;
   #e;
   build(l, i, s) {
      const u = new q0({
         client: l,
         mutationCache: this,
         mutationId: ++this.#e,
         options: l.defaultMutationOptions(i),
         state: s
      });
      return this.add(u), u
   }
   add(l) {
      this.#t.add(l);
      const i = Ur(l);
      if (typeof i == "string") {
         const s = this.#n.get(i);
         s ? s.push(l) : this.#n.set(i, [l])
      }
      this.notify({
         type: "added",
         mutation: l
      })
   }
   remove(l) {
      if (this.#t.delete(l)) {
         const i = Ur(l);
         if (typeof i == "string") {
            const s = this.#n.get(i);
            if (s)
               if (s.length > 1) {
                  const u = s.indexOf(l);
                  u !== -1 && s.splice(u, 1)
               } else s[0] === l && this.#n.delete(i)
         }
      }
      this.notify({
         type: "removed",
         mutation: l
      })
   }
   canRun(l) {
      const i = Ur(l);
      if (typeof i == "string") {
         const u = this.#n.get(i)?.find(c => c.state.status === "pending");
         return !u || u === l
      } else return !0
   }
   runNext(l) {
      const i = Ur(l);
      return typeof i == "string" ? this.#n.get(i)?.find(u => u !== l && u.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
   }
   clear() {
      te.batch(() => {
         this.#t.forEach(l => {
            this.notify({
               type: "removed",
               mutation: l
            })
         }), this.#t.clear(), this.#n.clear()
      })
   }
   getAll() {
      return Array.from(this.#t)
   }
   find(l) {
      const i = {
         exact: !0,
         ...l
      };
      return this.getAll().find(s => Lm(i, s))
   }
   findAll(l = {}) {
      return this.getAll().filter(i => Lm(l, i))
   }
   notify(l) {
      te.batch(() => {
         this.listeners.forEach(i => {
            i(l)
         })
      })
   }
   resumePausedMutations() {
      const l = this.getAll().filter(i => i.state.isPaused);
      return te.batch(() => Promise.all(l.map(i => i.continue().catch(ze))))
   }
};

function Ur(l) {
   return l.options.scope?.id
}
var Y0 = class extends vi {
      #t;
      #n = void 0;
      #e;
      #a;
      constructor(i, s) {
         super(), this.#t = i, this.setOptions(s), this.bindMethods(), this.#l()
      }
      bindMethods() {
         this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
      }
      setOptions(i) {
         const s = this.options;
         this.options = this.#t.defaultMutationOptions(i), E0(this.options, s) || this.#t.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#e,
            observer: this
         }), s?.mutationKey && this.options.mutationKey && bl(s.mutationKey) !== bl(this.options.mutationKey) ? this.reset() : this.#e?.state.status === "pending" && this.#e.setOptions(this.options)
      }
      onUnsubscribe() {
         this.hasListeners() || this.#e?.removeObserver(this)
      }
      onMutationUpdate(i) {
         this.#l(), this.#r(i)
      }
      getCurrentResult() {
         return this.#n
      }
      reset() {
         this.#e?.removeObserver(this), this.#e = void 0, this.#l(), this.#r()
      }
      mutate(i, s) {
         return this.#a = s, this.#e?.removeObserver(this), this.#e = this.#t.getMutationCache().build(this.#t, this.options), this.#e.addObserver(this), this.#e.execute(i)
      }
      #l() {
         const i = this.#e?.state ?? zp();
         this.#n = {
            ...i,
            isPending: i.status === "pending",
            isSuccess: i.status === "success",
            isError: i.status === "error",
            isIdle: i.status === "idle",
            mutate: this.mutate,
            reset: this.reset
         }
      }
      #r(i) {
         te.batch(() => {
            if (this.#a && this.hasListeners()) {
               const s = this.#n.variables,
                  u = this.#n.context,
                  c = {
                     client: this.#t,
                     meta: this.options.meta,
                     mutationKey: this.options.mutationKey
                  };
               if (i?.type === "success") {
                  try {
                     this.#a.onSuccess?.(i.data, s, u, c)
                  } catch (f) {
                     Promise.reject(f)
                  }
                  try {
                     this.#a.onSettled?.(i.data, null, s, u, c)
                  } catch (f) {
                     Promise.reject(f)
                  }
               } else if (i?.type === "error") {
                  try {
                     this.#a.onError?.(i.error, s, u, c)
                  } catch (f) {
                     Promise.reject(f)
                  }
                  try {
                     this.#a.onSettled?.(void 0, i.error, s, u, c)
                  } catch (f) {
                     Promise.reject(f)
                  }
               }
            }
            this.listeners.forEach(s => {
               s(this.#n)
            })
         })
      }
   },
   G0 = class extends vi {
      constructor(l = {}) {
         super(), this.config = l, this.#t = new Map
      }
      #t;
      build(l, i, s) {
         const u = i.queryKey,
            c = i.queryHash ?? ac(u, i);
         let f = this.get(c);
         return f || (f = new H0({
            client: l,
            queryKey: u,
            queryHash: c,
            options: l.defaultQueryOptions(i),
            state: s,
            defaultOptions: l.getQueryDefaults(u)
         }), this.add(f)), f
      }
      add(l) {
         this.#t.has(l.queryHash) || (this.#t.set(l.queryHash, l), this.notify({
            type: "added",
            query: l
         }))
      }
      remove(l) {
         const i = this.#t.get(l.queryHash);
         i && (l.destroy(), i === l && this.#t.delete(l.queryHash), this.notify({
            type: "removed",
            query: l
         }))
      }
      clear() {
         te.batch(() => {
            this.getAll().forEach(l => {
               this.remove(l)
            })
         })
      }
      get(l) {
         return this.#t.get(l)
      }
      getAll() {
         return [...this.#t.values()]
      }
      find(l) {
         const i = {
            exact: !0,
            ...l
         };
         return this.getAll().find(s => Hm(i, s))
      }
      findAll(l = {}) {
         const i = this.getAll();
         return Object.keys(l).length > 0 ? i.filter(s => Hm(l, s)) : i
      }
      notify(l) {
         te.batch(() => {
            this.listeners.forEach(i => {
               i(l)
            })
         })
      }
      onFocus() {
         te.batch(() => {
            this.getAll().forEach(l => {
               l.onFocus()
            })
         })
      }
      onOnline() {
         te.batch(() => {
            this.getAll().forEach(l => {
               l.onOnline()
            })
         })
      }
   },
   V0 = class {
      #t;
      #n;
      #e;
      #a;
      #l;
      #r;
      #s;
      #i;
      constructor(l = {}) {
         this.#t = l.queryCache || new G0, this.#n = l.mutationCache || new B0, this.#e = l.defaultOptions || {}, this.#a = new Map, this.#l = new Map, this.#r = 0
      }
      mount() {
         this.#r++, this.#r === 1 && (this.#s = Mp.subscribe(async l => {
            l && (await this.resumePausedMutations(), this.#t.onFocus())
         }), this.#i = Qr.subscribe(async l => {
            l && (await this.resumePausedMutations(), this.#t.onOnline())
         }))
      }
      unmount() {
         this.#r--, this.#r === 0 && (this.#s?.(), this.#s = void 0, this.#i?.(), this.#i = void 0)
      }
      isFetching(l) {
         return this.#t.findAll({
            ...l,
            fetchStatus: "fetching"
         }).length
      }
      isMutating(l) {
         return this.#n.findAll({
            ...l,
            status: "pending"
         }).length
      }
      getQueryData(l) {
         const i = this.defaultQueryOptions({
            queryKey: l
         });
         return this.#t.get(i.queryHash)?.state.data
      }
      ensureQueryData(l) {
         const i = this.defaultQueryOptions(l),
            s = this.#t.build(this, i),
            u = s.state.data;
         return u === void 0 ? this.fetchQuery(l) : (l.revalidateIfStale && s.isStaleByTime(Bu(i.staleTime, s)) && this.prefetchQuery(i), Promise.resolve(u))
      }
      getQueriesData(l) {
         return this.#t.findAll(l).map(({
            queryKey: i,
            state: s
         }) => {
            const u = s.data;
            return [i, u]
         })
      }
      setQueryData(l, i, s) {
         const u = this.defaultQueryOptions({
               queryKey: l
            }),
            f = this.#t.get(u.queryHash)?.state.data,
            h = g0(i, f);
         if (h !== void 0) return this.#t.build(this, u).setData(h, {
            ...s,
            manual: !0
         })
      }
      setQueriesData(l, i, s) {
         return te.batch(() => this.#t.findAll(l).map(({
            queryKey: u
         }) => [u, this.setQueryData(u, i, s)]))
      }
      getQueryState(l) {
         const i = this.defaultQueryOptions({
            queryKey: l
         });
         return this.#t.get(i.queryHash)?.state
      }
      removeQueries(l) {
         const i = this.#t;
         te.batch(() => {
            i.findAll(l).forEach(s => {
               i.remove(s)
            })
         })
      }
      resetQueries(l, i) {
         const s = this.#t;
         return te.batch(() => (s.findAll(l).forEach(u => {
            u.reset()
         }), this.refetchQueries({
            type: "active",
            ...l
         }, i)))
      }
      cancelQueries(l, i = {}) {
         const s = {
               revert: !0,
               ...i
            },
            u = te.batch(() => this.#t.findAll(l).map(c => c.cancel(s)));
         return Promise.all(u).then(ze).catch(ze)
      }
      invalidateQueries(l, i = {}) {
         return te.batch(() => (this.#t.findAll(l).forEach(s => {
            s.invalidate()
         }), l?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
            ...l,
            type: l?.refetchType ?? l?.type ?? "active"
         }, i)))
      }
      refetchQueries(l, i = {}) {
         const s = {
               ...i,
               cancelRefetch: i.cancelRefetch ?? !0
            },
            u = te.batch(() => this.#t.findAll(l).filter(c => !c.isDisabled() && !c.isStatic()).map(c => {
               let f = c.fetch(void 0, s);
               return s.throwOnError || (f = f.catch(ze)), c.state.fetchStatus === "paused" ? Promise.resolve() : f
            }));
         return Promise.all(u).then(ze)
      }
      fetchQuery(l) {
         const i = this.defaultQueryOptions(l);
         i.retry === void 0 && (i.retry = !1);
         const s = this.#t.build(this, i);
         return s.isStaleByTime(Bu(i.staleTime, s)) ? s.fetch(i) : Promise.resolve(s.state.data)
      }
      prefetchQuery(l) {
         return this.fetchQuery(l).then(ze).catch(ze)
      }
      fetchInfiniteQuery(l) {
         return l.behavior = Gm(l.pages), this.fetchQuery(l)
      }
      prefetchInfiniteQuery(l) {
         return this.fetchInfiniteQuery(l).then(ze).catch(ze)
      }
      ensureInfiniteQueryData(l) {
         return l.behavior = Gm(l.pages), this.ensureQueryData(l)
      }
      resumePausedMutations() {
         return Qr.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
      }
      getQueryCache() {
         return this.#t
      }
      getMutationCache() {
         return this.#n
      }
      getDefaultOptions() {
         return this.#e
      }
      setDefaultOptions(l) {
         this.#e = l
      }
      setQueryDefaults(l, i) {
         this.#a.set(bl(l), {
            queryKey: l,
            defaultOptions: i
         })
      }
      getQueryDefaults(l) {
         const i = [...this.#a.values()],
            s = {};
         return i.forEach(u => {
            pi(l, u.queryKey) && Object.assign(s, u.defaultOptions)
         }), s
      }
      setMutationDefaults(l, i) {
         this.#l.set(bl(l), {
            mutationKey: l,
            defaultOptions: i
         })
      }
      getMutationDefaults(l) {
         const i = [...this.#l.values()],
            s = {};
         return i.forEach(u => {
            pi(l, u.mutationKey) && Object.assign(s, u.defaultOptions)
         }), s
      }
      defaultQueryOptions(l) {
         if (l._defaulted) return l;
         const i = {
            ...this.#e.queries,
            ...this.getQueryDefaults(l.queryKey),
            ...l,
            _defaulted: !0
         };
         return i.queryHash || (i.queryHash = ac(i.queryKey, i)), i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"), i.throwOnError === void 0 && (i.throwOnError = !!i.suspense), !i.networkMode && i.persister && (i.networkMode = "offlineFirst"), i.queryFn === ic && (i.enabled = !1), i
      }
      defaultMutationOptions(l) {
         return l?._defaulted ? l : {
            ...this.#e.mutations,
            ...l?.mutationKey && this.getMutationDefaults(l.mutationKey),
            ...l,
            _defaulted: !0
         }
      }
      clear() {
         this.#t.clear(), this.#n.clear()
      }
   },
   Up = w.createContext(void 0),
   Q0 = l => {
      const i = w.useContext(Up);
      if (!i) throw new Error("No QueryClient set, use QueryClientProvider to set one");
      return i
   },
   X0 = ({
      client: l,
      children: i
   }) => (w.useEffect(() => (l.mount(), () => {
      l.unmount()
   }), [l]), g.jsx(Up.Provider, {
      value: l,
      children: i
   }));

function Z0(l, i) {
   const s = Q0(),
      [u] = w.useState(() => new Y0(s, l));
   w.useEffect(() => {
      u.setOptions(l)
   }, [u, l]);
   const c = w.useSyncExternalStore(w.useCallback(h => u.subscribe(te.batchCalls(h)), [u]), () => u.getCurrentResult(), () => u.getCurrentResult()),
      f = w.useCallback((h, y) => {
         u.mutate(h, y).catch(ze)
      }, [u]);
   if (c.error && N0(u.options.throwOnError, [c.error])) throw c.error;
   return {
      ...c,
      mutate: f,
      mutateAsync: c.mutate
   }
}
const K0 = 1,
   P0 = 1e6;
let Mu = 0;

function J0() {
   return Mu = (Mu + 1) % Number.MAX_SAFE_INTEGER, Mu.toString()
}
const _u = new Map,
   Qm = l => {
      if (_u.has(l)) return;
      const i = setTimeout(() => {
         _u.delete(l), mi({
            type: "REMOVE_TOAST",
            toastId: l
         })
      }, P0);
      _u.set(l, i)
   },
   F0 = (l, i) => {
      switch (i.type) {
         case "ADD_TOAST":
            return {
               ...l, toasts: [i.toast, ...l.toasts].slice(0, K0)
            };
         case "UPDATE_TOAST":
            return {
               ...l, toasts: l.toasts.map(s => s.id === i.toast.id ? {
                  ...s,
                  ...i.toast
               } : s)
            };
         case "DISMISS_TOAST": {
            const {
               toastId: s
            } = i;
            return s ? Qm(s) : l.toasts.forEach(u => {
               Qm(u.id)
            }), {
               ...l,
               toasts: l.toasts.map(u => u.id === s || s === void 0 ? {
                  ...u,
                  open: !1
               } : u)
            }
         }
         case "REMOVE_TOAST":
            return i.toastId === void 0 ? {
               ...l,
               toasts: []
            } : {
               ...l,
               toasts: l.toasts.filter(s => s.id !== i.toastId)
            }
      }
   },
   Yr = [];
let Gr = {
   toasts: []
};

function mi(l) {
   Gr = F0(Gr, l), Yr.forEach(i => {
      i(Gr)
   })
}

function $0({
   ...l
}) {
   const i = J0(),
      s = c => mi({
         type: "UPDATE_TOAST",
         toast: {
            ...c,
            id: i
         }
      }),
      u = () => mi({
         type: "DISMISS_TOAST",
         toastId: i
      });
   return mi({
      type: "ADD_TOAST",
      toast: {
         ...l,
         id: i,
         open: !0,
         onOpenChange: c => {
            c || u()
         }
      }
   }), {
      id: i,
      dismiss: u,
      update: s
   }
}

function W0() {
   const [l, i] = w.useState(Gr);
   return w.useEffect(() => (Yr.push(i), () => {
      const s = Yr.indexOf(i);
      s > -1 && Yr.splice(s, 1)
   }), [l]), {
      ...l,
      toast: $0,
      dismiss: s => mi({
         type: "DISMISS_TOAST",
         toastId: s
      })
   }
}
var ts = vp();
const I0 = yp(ts);

function Zt(l, i, {
   checkForDefaultPrevented: s = !0
} = {}) {
   return function (c) {
      if (l?.(c), s === !1 || !c.defaultPrevented) return i?.(c)
   }
}

function Xm(l, i) {
   if (typeof l == "function") return l(i);
   l != null && (l.current = i)
}

function rc(...l) {
   return i => {
      let s = !1;
      const u = l.map(c => {
         const f = Xm(c, i);
         return !s && typeof f == "function" && (s = !0), f
      });
      if (s) return () => {
         for (let c = 0; c < u.length; c++) {
            const f = u[c];
            typeof f == "function" ? f() : Xm(l[c], null)
         }
      }
   }
}

function Be(...l) {
   return w.useCallback(rc(...l), l)
}

function es(l, i = []) {
   let s = [];

   function u(f, h) {
      const y = w.createContext(h),
         v = s.length;
      s = [...s, h];
      const m = E => {
         const {
            scope: A,
            children: D,
            ...z
         } = E, R = A?.[l]?.[v] || y, N = w.useMemo(() => z, Object.values(z));
         return g.jsx(R.Provider, {
            value: N,
            children: D
         })
      };
      m.displayName = f + "Provider";

      function b(E, A) {
         const D = A?.[l]?.[v] || y,
            z = w.useContext(D);
         if (z) return z;
         if (h !== void 0) return h;
         throw new Error(`\`${E}\` must be used within \`${f}\``)
      }
      return [m, b]
   }
   const c = () => {
      const f = s.map(h => w.createContext(h));
      return function (y) {
         const v = y?.[l] || f;
         return w.useMemo(() => ({
            [`__scope${l}`]: {
               ...y,
               [l]: v
            }
         }), [y, v])
      }
   };
   return c.scopeName = l, [u, tx(c, ...i)]
}

function tx(...l) {
   const i = l[0];
   if (l.length === 1) return i;
   const s = () => {
      const u = l.map(c => ({
         useScope: c(),
         scopeName: c.scopeName
      }));
      return function (f) {
         const h = u.reduce((y, {
            useScope: v,
            scopeName: m
         }) => {
            const E = v(f)[`__scope${m}`];
            return {
               ...y,
               ...E
            }
         }, {});
         return w.useMemo(() => ({
            [`__scope${i.scopeName}`]: h
         }), [h])
      }
   };
   return s.scopeName = i.scopeName, s
}

function Vu(l) {
   const i = ex(l),
      s = w.forwardRef((u, c) => {
         const {
            children: f,
            ...h
         } = u, y = w.Children.toArray(f), v = y.find(lx);
         if (v) {
            const m = v.props.children,
               b = y.map(E => E === v ? w.Children.count(m) > 1 ? w.Children.only(null) : w.isValidElement(m) ? m.props.children : null : E);
            return g.jsx(i, {
               ...h,
               ref: c,
               children: w.isValidElement(m) ? w.cloneElement(m, void 0, b) : null
            })
         }
         return g.jsx(i, {
            ...h,
            ref: c,
            children: f
         })
      });
   return s.displayName = `${l}.Slot`, s
}

function ex(l) {
   const i = w.forwardRef((s, u) => {
      const {
         children: c,
         ...f
      } = s;
      if (w.isValidElement(c)) {
         const h = ix(c),
            y = ax(f, c.props);
         return c.type !== w.Fragment && (y.ref = u ? rc(u, h) : h), w.cloneElement(c, y)
      }
      return w.Children.count(c) > 1 ? w.Children.only(null) : null
   });
   return i.displayName = `${l}.SlotClone`, i
}
var Hp = Symbol("radix.slottable");

function nx(l) {
   const i = ({
      children: s
   }) => g.jsx(g.Fragment, {
      children: s
   });
   return i.displayName = `${l}.Slottable`, i.__radixId = Hp, i
}

function lx(l) {
   return w.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === Hp
}

function ax(l, i) {
   const s = {
      ...i
   };
   for (const u in i) {
      const c = l[u],
         f = i[u];
      /^on[A-Z]/.test(u) ? c && f ? s[u] = (...y) => {
         const v = f(...y);
         return c(...y), v
      } : c && (s[u] = c) : u === "style" ? s[u] = {
         ...c,
         ...f
      } : u === "className" && (s[u] = [c, f].filter(Boolean).join(" "))
   }
   return {
      ...l,
      ...s
   }
}

function ix(l) {
   let i = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
      s = i && "isReactWarning" in i && i.isReactWarning;
   return s ? l.ref : (i = Object.getOwnPropertyDescriptor(l, "ref")?.get, s = i && "isReactWarning" in i && i.isReactWarning, s ? l.props.ref : l.props.ref || l.ref)
}

function rx(l) {
   const i = l + "CollectionProvider",
      [s, u] = es(i),
      [c, f] = s(i, {
         collectionRef: {
            current: null
         },
         itemMap: new Map
      }),
      h = R => {
         const {
            scope: N,
            children: B
         } = R, X = Kn.useRef(null), V = Kn.useRef(new Map).current;
         return g.jsx(c, {
            scope: N,
            itemMap: V,
            collectionRef: X,
            children: B
         })
      };
   h.displayName = i;
   const y = l + "CollectionSlot",
      v = Vu(y),
      m = Kn.forwardRef((R, N) => {
         const {
            scope: B,
            children: X
         } = R, V = f(y, B), k = Be(N, V.collectionRef);
         return g.jsx(v, {
            ref: k,
            children: X
         })
      });
   m.displayName = y;
   const b = l + "CollectionItemSlot",
      E = "data-radix-collection-item",
      A = Vu(b),
      D = Kn.forwardRef((R, N) => {
         const {
            scope: B,
            children: X,
            ...V
         } = R, k = Kn.useRef(null), H = Be(N, k), P = f(b, B);
         return Kn.useEffect(() => (P.itemMap.set(k, {
            ref: k,
            ...V
         }), () => {
            P.itemMap.delete(k)
         })), g.jsx(A, {
            [E]: "",
            ref: H,
            children: X
         })
      });
   D.displayName = b;

   function z(R) {
      const N = f(l + "CollectionConsumer", R);
      return Kn.useCallback(() => {
         const X = N.collectionRef.current;
         if (!X) return [];
         const V = Array.from(X.querySelectorAll(`[${E}]`));
         return Array.from(N.itemMap.values()).sort((P, $) => V.indexOf(P.ref.current) - V.indexOf($.ref.current))
      }, [N.collectionRef, N.itemMap])
   }
   return [{
      Provider: h,
      Slot: m,
      ItemSlot: D
   }, z, u]
}
var sx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
   fe = sx.reduce((l, i) => {
      const s = Vu(`Primitive.${i}`),
         u = w.forwardRef((c, f) => {
            const {
               asChild: h,
               ...y
            } = c, v = h ? s : i;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), g.jsx(v, {
               ...y,
               ref: f
            })
         });
      return u.displayName = `Primitive.${i}`, {
         ...l,
         [i]: u
      }
   }, {});

function Lp(l, i) {
   l && ts.flushSync(() => l.dispatchEvent(i))
}

function Pn(l) {
   const i = w.useRef(l);
   return w.useEffect(() => {
      i.current = l
   }), w.useMemo(() => (...s) => i.current?.(...s), [])
}

function ox(l, i = globalThis?.document) {
   const s = Pn(l);
   w.useEffect(() => {
      const u = c => {
         c.key === "Escape" && s(c)
      };
      return i.addEventListener("keydown", u, {
         capture: !0
      }), () => i.removeEventListener("keydown", u, {
         capture: !0
      })
   }, [s, i])
}
var ux = "DismissableLayer",
   Qu = "dismissableLayer.update",
   cx = "dismissableLayer.pointerDownOutside",
   fx = "dismissableLayer.focusOutside",
   Zm, kp = w.createContext({
      layers: new Set,
      layersWithOutsidePointerEventsDisabled: new Set,
      branches: new Set
   }),
   sc = w.forwardRef((l, i) => {
      const {
         disableOutsidePointerEvents: s = !1,
         onEscapeKeyDown: u,
         onPointerDownOutside: c,
         onFocusOutside: f,
         onInteractOutside: h,
         onDismiss: y,
         ...v
      } = l, m = w.useContext(kp), [b, E] = w.useState(null), A = b?.ownerDocument ?? globalThis?.document, [, D] = w.useState({}), z = Be(i, $ => E($)), R = Array.from(m.layers), [N] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), B = R.indexOf(N), X = b ? R.indexOf(b) : -1, V = m.layersWithOutsidePointerEventsDisabled.size > 0, k = X >= B, H = hx($ => {
         const K = $.target,
            ut = [...m.branches].some(vt => vt.contains(K));
         !k || ut || (c?.($), h?.($), $.defaultPrevented || y?.())
      }, A), P = mx($ => {
         const K = $.target;
         [...m.branches].some(vt => vt.contains(K)) || (f?.($), h?.($), $.defaultPrevented || y?.())
      }, A);
      return ox($ => {
         X === m.layers.size - 1 && (u?.($), !$.defaultPrevented && y && ($.preventDefault(), y()))
      }, A), w.useEffect(() => {
         if (b) return s && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Zm = A.body.style.pointerEvents, A.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(b)), m.layers.add(b), Km(), () => {
            s && m.layersWithOutsidePointerEventsDisabled.size === 1 && (A.body.style.pointerEvents = Zm)
         }
      }, [b, A, s, m]), w.useEffect(() => () => {
         b && (m.layers.delete(b), m.layersWithOutsidePointerEventsDisabled.delete(b), Km())
      }, [b, m]), w.useEffect(() => {
         const $ = () => D({});
         return document.addEventListener(Qu, $), () => document.removeEventListener(Qu, $)
      }, []), g.jsx(fe.div, {
         ...v,
         ref: z,
         style: {
            pointerEvents: V ? k ? "auto" : "none" : void 0,
            ...l.style
         },
         onFocusCapture: Zt(l.onFocusCapture, P.onFocusCapture),
         onBlurCapture: Zt(l.onBlurCapture, P.onBlurCapture),
         onPointerDownCapture: Zt(l.onPointerDownCapture, H.onPointerDownCapture)
      })
   });
sc.displayName = ux;
var dx = "DismissableLayerBranch",
   qp = w.forwardRef((l, i) => {
      const s = w.useContext(kp),
         u = w.useRef(null),
         c = Be(i, u);
      return w.useEffect(() => {
         const f = u.current;
         if (f) return s.branches.add(f), () => {
            s.branches.delete(f)
         }
      }, [s.branches]), g.jsx(fe.div, {
         ...l,
         ref: c
      })
   });
qp.displayName = dx;

function hx(l, i = globalThis?.document) {
   const s = Pn(l),
      u = w.useRef(!1),
      c = w.useRef(() => {});
   return w.useEffect(() => {
      const f = y => {
            if (y.target && !u.current) {
               let v = function () {
                  Bp(cx, s, m, {
                     discrete: !0
                  })
               };
               const m = {
                  originalEvent: y
               };
               y.pointerType === "touch" ? (i.removeEventListener("click", c.current), c.current = v, i.addEventListener("click", c.current, {
                  once: !0
               })) : v()
            } else i.removeEventListener("click", c.current);
            u.current = !1
         },
         h = window.setTimeout(() => {
            i.addEventListener("pointerdown", f)
         }, 0);
      return () => {
         window.clearTimeout(h), i.removeEventListener("pointerdown", f), i.removeEventListener("click", c.current)
      }
   }, [i, s]), {
      onPointerDownCapture: () => u.current = !0
   }
}

function mx(l, i = globalThis?.document) {
   const s = Pn(l),
      u = w.useRef(!1);
   return w.useEffect(() => {
      const c = f => {
         f.target && !u.current && Bp(fx, s, {
            originalEvent: f
         }, {
            discrete: !1
         })
      };
      return i.addEventListener("focusin", c), () => i.removeEventListener("focusin", c)
   }, [i, s]), {
      onFocusCapture: () => u.current = !0,
      onBlurCapture: () => u.current = !1
   }
}

function Km() {
   const l = new CustomEvent(Qu);
   document.dispatchEvent(l)
}

function Bp(l, i, s, {
   discrete: u
}) {
   const c = s.originalEvent.target,
      f = new CustomEvent(l, {
         bubbles: !1,
         cancelable: !0,
         detail: s
      });
   i && c.addEventListener(l, i, {
      once: !0
   }), u ? Lp(c, f) : c.dispatchEvent(f)
}
var px = sc,
   yx = qp,
   Jn = globalThis?.document ? w.useLayoutEffect : () => {},
   vx = "Portal",
   oc = w.forwardRef((l, i) => {
      const {
         container: s,
         ...u
      } = l, [c, f] = w.useState(!1);
      Jn(() => f(!0), []);
      const h = s || c && globalThis?.document?.body;
      return h ? I0.createPortal(g.jsx(fe.div, {
         ...u,
         ref: i
      }), h) : null
   });
oc.displayName = vx;

function gx(l, i) {
   return w.useReducer((s, u) => i[s][u] ?? s, l)
}
var ns = l => {
   const {
      present: i,
      children: s
   } = l, u = bx(i), c = typeof s == "function" ? s({
      present: u.isPresent
   }) : w.Children.only(s), f = Be(u.ref, xx(c));
   return typeof s == "function" || u.isPresent ? w.cloneElement(c, {
      ref: f
   }) : null
};
ns.displayName = "Presence";

function bx(l) {
   const [i, s] = w.useState(), u = w.useRef(null), c = w.useRef(l), f = w.useRef("none"), h = l ? "mounted" : "unmounted", [y, v] = gx(h, {
      mounted: {
         UNMOUNT: "unmounted",
         ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
         MOUNT: "mounted",
         ANIMATION_END: "unmounted"
      },
      unmounted: {
         MOUNT: "mounted"
      }
   });
   return w.useEffect(() => {
      const m = Hr(u.current);
      f.current = y === "mounted" ? m : "none"
   }, [y]), Jn(() => {
      const m = u.current,
         b = c.current;
      if (b !== l) {
         const A = f.current,
            D = Hr(m);
         l ? v("MOUNT") : D === "none" || m?.display === "none" ? v("UNMOUNT") : v(b && A !== D ? "ANIMATION_OUT" : "UNMOUNT"), c.current = l
      }
   }, [l, v]), Jn(() => {
      if (i) {
         let m;
         const b = i.ownerDocument.defaultView ?? window,
            E = D => {
               const R = Hr(u.current).includes(CSS.escape(D.animationName));
               if (D.target === i && R && (v("ANIMATION_END"), !c.current)) {
                  const N = i.style.animationFillMode;
                  i.style.animationFillMode = "forwards", m = b.setTimeout(() => {
                     i.style.animationFillMode === "forwards" && (i.style.animationFillMode = N)
                  })
               }
            },
            A = D => {
               D.target === i && (f.current = Hr(u.current))
            };
         return i.addEventListener("animationstart", A), i.addEventListener("animationcancel", E), i.addEventListener("animationend", E), () => {
            b.clearTimeout(m), i.removeEventListener("animationstart", A), i.removeEventListener("animationcancel", E), i.removeEventListener("animationend", E)
         }
      } else v("ANIMATION_END")
   }, [i, v]), {
      isPresent: ["mounted", "unmountSuspended"].includes(y),
      ref: w.useCallback(m => {
         u.current = m ? getComputedStyle(m) : null, s(m)
      }, [])
   }
}

function Hr(l) {
   return l?.animationName || "none"
}

function xx(l) {
   let i = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
      s = i && "isReactWarning" in i && i.isReactWarning;
   return s ? l.ref : (i = Object.getOwnPropertyDescriptor(l, "ref")?.get, s = i && "isReactWarning" in i && i.isReactWarning, s ? l.props.ref : l.props.ref || l.ref)
}
var Sx = tc[" useInsertionEffect ".trim().toString()] || Jn;

function wx({
   prop: l,
   defaultProp: i,
   onChange: s = () => {},
   caller: u
}) {
   const [c, f, h] = Ex({
      defaultProp: i,
      onChange: s
   }), y = l !== void 0, v = y ? l : c; {
      const b = w.useRef(l !== void 0);
      w.useEffect(() => {
         const E = b.current;
         E !== y && console.warn(`${u} is changing from ${E?"controlled":"uncontrolled"} to ${y?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), b.current = y
      }, [y, u])
   }
   const m = w.useCallback(b => {
      if (y) {
         const E = Tx(b) ? b(l) : b;
         E !== l && h.current?.(E)
      } else f(b)
   }, [y, l, f, h]);
   return [v, m]
}

function Ex({
   defaultProp: l,
   onChange: i
}) {
   const [s, u] = w.useState(l), c = w.useRef(s), f = w.useRef(i);
   return Sx(() => {
      f.current = i
   }, [i]), w.useEffect(() => {
      c.current !== s && (f.current?.(s), c.current = s)
   }, [s, c]), [s, u, f]
}

function Tx(l) {
   return typeof l == "function"
}
var Ax = Object.freeze({
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal"
   }),
   Ox = "VisuallyHidden",
   ls = w.forwardRef((l, i) => g.jsx(fe.span, {
      ...l,
      ref: i,
      style: {
         ...Ax,
         ...l.style
      }
   }));
ls.displayName = Ox;
var Rx = ls,
   uc = "ToastProvider",
   [cc, Nx, Cx] = rx("Toast"),
   [Yp] = es("Toast", [Cx]),
   [Mx, as] = Yp(uc),
   Gp = l => {
      const {
         __scopeToast: i,
         label: s = "Notification",
         duration: u = 5e3,
         swipeDirection: c = "right",
         swipeThreshold: f = 50,
         children: h
      } = l, [y, v] = w.useState(null), [m, b] = w.useState(0), E = w.useRef(!1), A = w.useRef(!1);
      return s.trim() || console.error(`Invalid prop \`label\` supplied to \`${uc}\`. Expected non-empty \`string\`.`), g.jsx(cc.Provider, {
         scope: i,
         children: g.jsx(Mx, {
            scope: i,
            label: s,
            duration: u,
            swipeDirection: c,
            swipeThreshold: f,
            toastCount: m,
            viewport: y,
            onViewportChange: v,
            onToastAdd: w.useCallback(() => b(D => D + 1), []),
            onToastRemove: w.useCallback(() => b(D => D - 1), []),
            isFocusedToastEscapeKeyDownRef: E,
            isClosePausedRef: A,
            children: h
         })
      })
   };
Gp.displayName = uc;
var Vp = "ToastViewport",
   _x = ["F8"],
   Xu = "toast.viewportPause",
   Zu = "toast.viewportResume",
   Qp = w.forwardRef((l, i) => {
      const {
         __scopeToast: s,
         hotkey: u = _x,
         label: c = "Notifications ({hotkey})",
         ...f
      } = l, h = as(Vp, s), y = Nx(s), v = w.useRef(null), m = w.useRef(null), b = w.useRef(null), E = w.useRef(null), A = Be(i, E, h.onViewportChange), D = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""), z = h.toastCount > 0;
      w.useEffect(() => {
         const N = B => {
            u.length !== 0 && u.every(V => B[V] || B.code === V) && E.current?.focus()
         };
         return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N)
      }, [u]), w.useEffect(() => {
         const N = v.current,
            B = E.current;
         if (z && N && B) {
            const X = () => {
                  if (!h.isClosePausedRef.current) {
                     const P = new CustomEvent(Xu);
                     B.dispatchEvent(P), h.isClosePausedRef.current = !0
                  }
               },
               V = () => {
                  if (h.isClosePausedRef.current) {
                     const P = new CustomEvent(Zu);
                     B.dispatchEvent(P), h.isClosePausedRef.current = !1
                  }
               },
               k = P => {
                  !N.contains(P.relatedTarget) && V()
               },
               H = () => {
                  N.contains(document.activeElement) || V()
               };
            return N.addEventListener("focusin", X), N.addEventListener("focusout", k), N.addEventListener("pointermove", X), N.addEventListener("pointerleave", H), window.addEventListener("blur", X), window.addEventListener("focus", V), () => {
               N.removeEventListener("focusin", X), N.removeEventListener("focusout", k), N.removeEventListener("pointermove", X), N.removeEventListener("pointerleave", H), window.removeEventListener("blur", X), window.removeEventListener("focus", V)
            }
         }
      }, [z, h.isClosePausedRef]);
      const R = w.useCallback(({
         tabbingDirection: N
      }) => {
         const X = y().map(V => {
            const k = V.ref.current,
               H = [k, ...Qx(k)];
            return N === "forwards" ? H : H.reverse()
         });
         return (N === "forwards" ? X.reverse() : X).flat()
      }, [y]);
      return w.useEffect(() => {
         const N = E.current;
         if (N) {
            const B = X => {
               const V = X.altKey || X.ctrlKey || X.metaKey;
               if (X.key === "Tab" && !V) {
                  const H = document.activeElement,
                     P = X.shiftKey;
                  if (X.target === N && P) {
                     m.current?.focus();
                     return
                  }
                  const ut = R({
                        tabbingDirection: P ? "backwards" : "forwards"
                     }),
                     vt = ut.findIndex(xt => xt === H);
                  Du(ut.slice(vt + 1)) ? X.preventDefault() : P ? m.current?.focus() : b.current?.focus()
               }
            };
            return N.addEventListener("keydown", B), () => N.removeEventListener("keydown", B)
         }
      }, [y, R]), g.jsxs(yx, {
         ref: v,
         role: "region",
         "aria-label": c.replace("{hotkey}", D),
         tabIndex: -1,
         style: {
            pointerEvents: z ? void 0 : "none"
         },
         children: [z && g.jsx(Ku, {
            ref: m,
            onFocusFromOutsideViewport: () => {
               const N = R({
                  tabbingDirection: "forwards"
               });
               Du(N)
            }
         }), g.jsx(cc.Slot, {
            scope: s,
            children: g.jsx(fe.ol, {
               tabIndex: -1,
               ...f,
               ref: A
            })
         }), z && g.jsx(Ku, {
            ref: b,
            onFocusFromOutsideViewport: () => {
               const N = R({
                  tabbingDirection: "backwards"
               });
               Du(N)
            }
         })]
      })
   });
Qp.displayName = Vp;
var Xp = "ToastFocusProxy",
   Ku = w.forwardRef((l, i) => {
      const {
         __scopeToast: s,
         onFocusFromOutsideViewport: u,
         ...c
      } = l, f = as(Xp, s);
      return g.jsx(ls, {
         tabIndex: 0,
         ...c,
         ref: i,
         style: {
            position: "fixed"
         },
         onFocus: h => {
            const y = h.relatedTarget;
            !f.viewport?.contains(y) && u()
         }
      })
   });
Ku.displayName = Xp;
var gi = "Toast",
   Dx = "toast.swipeStart",
   jx = "toast.swipeMove",
   zx = "toast.swipeCancel",
   Ux = "toast.swipeEnd",
   Zp = w.forwardRef((l, i) => {
      const {
         forceMount: s,
         open: u,
         defaultOpen: c,
         onOpenChange: f,
         ...h
      } = l, [y, v] = wx({
         prop: u,
         defaultProp: c ?? !0,
         onChange: f,
         caller: gi
      });
      return g.jsx(ns, {
         present: s || y,
         children: g.jsx(kx, {
            open: y,
            ...h,
            ref: i,
            onClose: () => v(!1),
            onPause: Pn(l.onPause),
            onResume: Pn(l.onResume),
            onSwipeStart: Zt(l.onSwipeStart, m => {
               m.currentTarget.setAttribute("data-swipe", "start")
            }),
            onSwipeMove: Zt(l.onSwipeMove, m => {
               const {
                  x: b,
                  y: E
               } = m.detail.delta;
               m.currentTarget.setAttribute("data-swipe", "move"), m.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${b}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${E}px`)
            }),
            onSwipeCancel: Zt(l.onSwipeCancel, m => {
               m.currentTarget.setAttribute("data-swipe", "cancel"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }),
            onSwipeEnd: Zt(l.onSwipeEnd, m => {
               const {
                  x: b,
                  y: E
               } = m.detail.delta;
               m.currentTarget.setAttribute("data-swipe", "end"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${b}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${E}px`), v(!1)
            })
         })
      })
   });
Zp.displayName = gi;
var [Hx, Lx] = Yp(gi, {
   onClose() {}
}), kx = w.forwardRef((l, i) => {
   const {
      __scopeToast: s,
      type: u = "foreground",
      duration: c,
      open: f,
      onClose: h,
      onEscapeKeyDown: y,
      onPause: v,
      onResume: m,
      onSwipeStart: b,
      onSwipeMove: E,
      onSwipeCancel: A,
      onSwipeEnd: D,
      ...z
   } = l, R = as(gi, s), [N, B] = w.useState(null), X = Be(i, W => B(W)), V = w.useRef(null), k = w.useRef(null), H = c || R.duration, P = w.useRef(0), $ = w.useRef(H), K = w.useRef(0), {
      onToastAdd: ut,
      onToastRemove: vt
   } = R, xt = Pn(() => {
      N?.contains(document.activeElement) && R.viewport?.focus(), h()
   }), dt = w.useCallback(W => {
      !W || W === 1 / 0 || (window.clearTimeout(K.current), P.current = new Date().getTime(), K.current = window.setTimeout(xt, W))
   }, [xt]);
   w.useEffect(() => {
      const W = R.viewport;
      if (W) {
         const ft = () => {
               dt($.current), m?.()
            },
            M = () => {
               const Q = new Date().getTime() - P.current;
               $.current = $.current - Q, window.clearTimeout(K.current), v?.()
            };
         return W.addEventListener(Xu, M), W.addEventListener(Zu, ft), () => {
            W.removeEventListener(Xu, M), W.removeEventListener(Zu, ft)
         }
      }
   }, [R.viewport, H, v, m, dt]), w.useEffect(() => {
      f && !R.isClosePausedRef.current && dt(H)
   }, [f, H, R.isClosePausedRef, dt]), w.useEffect(() => (ut(), () => vt()), [ut, vt]);
   const wt = w.useMemo(() => N ? Ip(N) : null, [N]);
   return R.viewport ? g.jsxs(g.Fragment, {
      children: [wt && g.jsx(qx, {
         __scopeToast: s,
         role: "status",
         "aria-live": u === "foreground" ? "assertive" : "polite",
         children: wt
      }), g.jsx(Hx, {
         scope: s,
         onClose: xt,
         children: ts.createPortal(g.jsx(cc.ItemSlot, {
            scope: s,
            children: g.jsx(px, {
               asChild: !0,
               onEscapeKeyDown: Zt(y, () => {
                  R.isFocusedToastEscapeKeyDownRef.current || xt(), R.isFocusedToastEscapeKeyDownRef.current = !1
               }),
               children: g.jsx(fe.li, {
                  tabIndex: 0,
                  "data-state": f ? "open" : "closed",
                  "data-swipe-direction": R.swipeDirection,
                  ...z,
                  ref: X,
                  style: {
                     userSelect: "none",
                     touchAction: "none",
                     ...l.style
                  },
                  onKeyDown: Zt(l.onKeyDown, W => {
                     W.key === "Escape" && (y?.(W.nativeEvent), W.nativeEvent.defaultPrevented || (R.isFocusedToastEscapeKeyDownRef.current = !0, xt()))
                  }),
                  onPointerDown: Zt(l.onPointerDown, W => {
                     W.button === 0 && (V.current = {
                        x: W.clientX,
                        y: W.clientY
                     })
                  }),
                  onPointerMove: Zt(l.onPointerMove, W => {
                     if (!V.current) return;
                     const ft = W.clientX - V.current.x,
                        M = W.clientY - V.current.y,
                        Q = !!k.current,
                        Z = ["left", "right"].includes(R.swipeDirection),
                        it = ["left", "up"].includes(R.swipeDirection) ? Math.min : Math.max,
                        x = Z ? it(0, ft) : 0,
                        G = Z ? 0 : it(0, M),
                        F = W.pointerType === "touch" ? 10 : 2,
                        J = {
                           x,
                           y: G
                        },
                        lt = {
                           originalEvent: W,
                           delta: J
                        };
                     Q ? (k.current = J, Lr(jx, E, lt, {
                        discrete: !1
                     })) : Pm(J, R.swipeDirection, F) ? (k.current = J, Lr(Dx, b, lt, {
                        discrete: !1
                     }), W.target.setPointerCapture(W.pointerId)) : (Math.abs(ft) > F || Math.abs(M) > F) && (V.current = null)
                  }),
                  onPointerUp: Zt(l.onPointerUp, W => {
                     const ft = k.current,
                        M = W.target;
                     if (M.hasPointerCapture(W.pointerId) && M.releasePointerCapture(W.pointerId), k.current = null, V.current = null, ft) {
                        const Q = W.currentTarget,
                           Z = {
                              originalEvent: W,
                              delta: ft
                           };
                        Pm(ft, R.swipeDirection, R.swipeThreshold) ? Lr(Ux, D, Z, {
                           discrete: !0
                        }) : Lr(zx, A, Z, {
                           discrete: !0
                        }), Q.addEventListener("click", it => it.preventDefault(), {
                           once: !0
                        })
                     }
                  })
               })
            })
         }), R.viewport)
      })]
   }) : null
}), qx = l => {
   const {
      __scopeToast: i,
      children: s,
      ...u
   } = l, c = as(gi, i), [f, h] = w.useState(!1), [y, v] = w.useState(!1);
   return Gx(() => h(!0)), w.useEffect(() => {
      const m = window.setTimeout(() => v(!0), 1e3);
      return () => window.clearTimeout(m)
   }, []), y ? null : g.jsx(oc, {
      asChild: !0,
      children: g.jsx(ls, {
         ...u,
         children: f && g.jsxs(g.Fragment, {
            children: [c.label, " ", s]
         })
      })
   })
}, Bx = "ToastTitle", Kp = w.forwardRef((l, i) => {
   const {
      __scopeToast: s,
      ...u
   } = l;
   return g.jsx(fe.div, {
      ...u,
      ref: i
   })
});
Kp.displayName = Bx;
var Yx = "ToastDescription",
   Pp = w.forwardRef((l, i) => {
      const {
         __scopeToast: s,
         ...u
      } = l;
      return g.jsx(fe.div, {
         ...u,
         ref: i
      })
   });
Pp.displayName = Yx;
var Jp = "ToastAction",
   Fp = w.forwardRef((l, i) => {
      const {
         altText: s,
         ...u
      } = l;
      return s.trim() ? g.jsx(Wp, {
         altText: s,
         asChild: !0,
         children: g.jsx(fc, {
            ...u,
            ref: i
         })
      }) : (console.error(`Invalid prop \`altText\` supplied to \`${Jp}\`. Expected non-empty \`string\`.`), null)
   });
Fp.displayName = Jp;
var $p = "ToastClose",
   fc = w.forwardRef((l, i) => {
      const {
         __scopeToast: s,
         ...u
      } = l, c = Lx($p, s);
      return g.jsx(Wp, {
         asChild: !0,
         children: g.jsx(fe.button, {
            type: "button",
            ...u,
            ref: i,
            onClick: Zt(l.onClick, c.onClose)
         })
      })
   });
fc.displayName = $p;
var Wp = w.forwardRef((l, i) => {
   const {
      __scopeToast: s,
      altText: u,
      ...c
   } = l;
   return g.jsx(fe.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": u || void 0,
      ...c,
      ref: i
   })
});

function Ip(l) {
   const i = [];
   return Array.from(l.childNodes).forEach(u => {
      if (u.nodeType === u.TEXT_NODE && u.textContent && i.push(u.textContent), Vx(u)) {
         const c = u.ariaHidden || u.hidden || u.style.display === "none",
            f = u.dataset.radixToastAnnounceExclude === "";
         if (!c)
            if (f) {
               const h = u.dataset.radixToastAnnounceAlt;
               h && i.push(h)
            } else i.push(...Ip(u))
      }
   }), i
}

function Lr(l, i, s, {
   discrete: u
}) {
   const c = s.originalEvent.currentTarget,
      f = new CustomEvent(l, {
         bubbles: !0,
         cancelable: !0,
         detail: s
      });
   i && c.addEventListener(l, i, {
      once: !0
   }), u ? Lp(c, f) : c.dispatchEvent(f)
}
var Pm = (l, i, s = 0) => {
   const u = Math.abs(l.x),
      c = Math.abs(l.y),
      f = u > c;
   return i === "left" || i === "right" ? f && u > s : !f && c > s
};

function Gx(l = () => {}) {
   const i = Pn(l);
   Jn(() => {
      let s = 0,
         u = 0;
      return s = window.requestAnimationFrame(() => u = window.requestAnimationFrame(i)), () => {
         window.cancelAnimationFrame(s), window.cancelAnimationFrame(u)
      }
   }, [i])
}

function Vx(l) {
   return l.nodeType === l.ELEMENT_NODE
}

function Qx(l) {
   const i = [],
      s = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
         acceptNode: u => {
            const c = u.tagName === "INPUT" && u.type === "hidden";
            return u.disabled || u.hidden || c ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
         }
      });
   for (; s.nextNode();) i.push(s.currentNode);
   return i
}

function Du(l) {
   const i = document.activeElement;
   return l.some(s => s === i ? !0 : (s.focus(), document.activeElement !== i))
}
var Xx = Gp,
   ty = Qp,
   ey = Zp,
   ny = Kp,
   ly = Pp,
   ay = Fp,
   iy = fc;

function ry(l) {
   var i, s, u = "";
   if (typeof l == "string" || typeof l == "number") u += l;
   else if (typeof l == "object")
      if (Array.isArray(l)) {
         var c = l.length;
         for (i = 0; i < c; i++) l[i] && (s = ry(l[i])) && (u && (u += " "), u += s)
      } else
         for (s in l) l[s] && (u && (u += " "), u += s);
   return u
}

function sy() {
   for (var l, i, s = 0, u = "", c = arguments.length; s < c; s++)(l = arguments[s]) && (i = ry(l)) && (u && (u += " "), u += i);
   return u
}
const Jm = l => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l,
   Fm = sy,
   oy = (l, i) => s => {
      var u;
      if (i?.variants == null) return Fm(l, s?.class, s?.className);
      const {
         variants: c,
         defaultVariants: f
      } = i, h = Object.keys(c).map(m => {
         const b = s?.[m],
            E = f?.[m];
         if (b === null) return null;
         const A = Jm(b) || Jm(E);
         return c[m][A]
      }), y = s && Object.entries(s).reduce((m, b) => {
         let [E, A] = b;
         return A === void 0 || (m[E] = A), m
      }, {}), v = i == null || (u = i.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((m, b) => {
         let {
            class: E,
            className: A,
            ...D
         } = b;
         return Object.entries(D).every(z => {
            let [R, N] = z;
            return Array.isArray(N) ? N.includes({
               ...f,
               ...y
            } [R]) : {
               ...f,
               ...y
            } [R] === N
         }) ? [...m, E, A] : m
      }, []);
      return Fm(l, h, v, s?.class, s?.className)
   };
const Zx = l => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
   Kx = l => l.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, u) => u ? u.toUpperCase() : s.toLowerCase()),
   $m = l => {
      const i = Kx(l);
      return i.charAt(0).toUpperCase() + i.slice(1)
   },
   uy = (...l) => l.filter((i, s, u) => !!i && i.trim() !== "" && u.indexOf(i) === s).join(" ").trim(),
   Px = l => {
      for (const i in l)
         if (i.startsWith("aria-") || i === "role" || i === "title") return !0
   };
var Jx = {
   xmlns: "http://www.w3.org/2000/svg",
   width: 24,
   height: 24,
   viewBox: "0 0 24 24",
   fill: "none",
   stroke: "currentColor",
   strokeWidth: 2,
   strokeLinecap: "round",
   strokeLinejoin: "round"
};
const Fx = w.forwardRef(({
   color: l = "currentColor",
   size: i = 24,
   strokeWidth: s = 2,
   absoluteStrokeWidth: u,
   className: c = "",
   children: f,
   iconNode: h,
   ...y
}, v) => w.createElement("svg", {
   ref: v,
   ...Jx,
   width: i,
   height: i,
   stroke: l,
   strokeWidth: u ? Number(s) * 24 / Number(i) : s,
   className: uy("lucide", c),
   ...!f && !Px(y) && {
      "aria-hidden": "true"
   },
   ...y
}, [...h.map(([m, b]) => w.createElement(m, b)), ...Array.isArray(f) ? f : [f]]));
const ae = (l, i) => {
   const s = w.forwardRef(({
      className: u,
      ...c
   }, f) => w.createElement(Fx, {
      ref: f,
      iconNode: i,
      className: uy(`lucide-${Zx($m(l))}`, `lucide-${l}`, u),
      ...c
   }));
   return s.displayName = $m(l), s
};
const $x = [
      ["path", {
         d: "M5 12h14",
         key: "1ays0h"
      }],
      ["path", {
         d: "m12 5 7 7-7 7",
         key: "xquz4c"
      }]
   ],
   Wx = ae("arrow-right", $x);
const Ix = [
      ["path", {
         d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
         key: "18u6gg"
      }],
      ["circle", {
         cx: "12",
         cy: "13",
         r: "3",
         key: "1vg3eu"
      }]
   ],
   t1 = ae("camera", Ix);
const e1 = [
      ["path", {
         d: "M20 6 9 17l-5-5",
         key: "1gmf2c"
      }]
   ],
   n1 = ae("check", e1);
const l1 = [
      ["circle", {
         cx: "12",
         cy: "12",
         r: "10",
         key: "1mglay"
      }],
      ["line", {
         x1: "12",
         x2: "12",
         y1: "8",
         y2: "12",
         key: "1pkeuh"
      }],
      ["line", {
         x1: "12",
         x2: "12.01",
         y1: "16",
         y2: "16",
         key: "4dfq90"
      }]
   ],
   cy = ae("circle-alert", l1);
const a1 = [
      ["circle", {
         cx: "12",
         cy: "12",
         r: "10",
         key: "1mglay"
      }],
      ["path", {
         d: "m9 12 2 2 4-4",
         key: "dzmm74"
      }]
   ],
   i1 = ae("circle-check", a1);
const r1 = [
      ["circle", {
         cx: "12",
         cy: "12",
         r: "10",
         key: "1mglay"
      }],
      ["rect", {
         x: "9",
         y: "9",
         width: "6",
         height: "6",
         rx: "1",
         key: "1ssd4o"
      }]
   ],
   s1 = ae("circle-stop", r1);
const o1 = [
      ["path", {
         d: "M12 13v8",
         key: "1l5pq0"
      }],
      ["path", {
         d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
         key: "1pljnt"
      }],
      ["path", {
         d: "m8 17 4-4 4 4",
         key: "1quai1"
      }]
   ],
   u1 = ae("cloud-upload", o1);
const c1 = [
      ["path", {
         d: "M12 20v2",
         key: "1lh1kg"
      }],
      ["path", {
         d: "M12 2v2",
         key: "tus03m"
      }],
      ["path", {
         d: "M17 20v2",
         key: "1rnc9c"
      }],
      ["path", {
         d: "M17 2v2",
         key: "11trls"
      }],
      ["path", {
         d: "M2 12h2",
         key: "1t8f8n"
      }],
      ["path", {
         d: "M2 17h2",
         key: "7oei6x"
      }],
      ["path", {
         d: "M2 7h2",
         key: "asdhe0"
      }],
      ["path", {
         d: "M20 12h2",
         key: "1q8mjw"
      }],
      ["path", {
         d: "M20 17h2",
         key: "1fpfkl"
      }],
      ["path", {
         d: "M20 7h2",
         key: "1o8tra"
      }],
      ["path", {
         d: "M7 20v2",
         key: "4gnj0m"
      }],
      ["path", {
         d: "M7 2v2",
         key: "1i4yhu"
      }],
      ["rect", {
         x: "4",
         y: "4",
         width: "16",
         height: "16",
         rx: "2",
         key: "1vbyd7"
      }],
      ["rect", {
         x: "8",
         y: "8",
         width: "8",
         height: "8",
         rx: "1",
         key: "z9xiuo"
      }]
   ],
   f1 = ae("cpu", c1);
const d1 = [
      ["path", {
         d: "M4 5h16",
         key: "1tepv9"
      }],
      ["path", {
         d: "M4 12h16",
         key: "1lakjw"
      }],
      ["path", {
         d: "M4 19h16",
         key: "1djgab"
      }]
   ],
   h1 = ae("menu", d1);
const m1 = [
      ["path", {
         d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
         key: "v9h5vc"
      }],
      ["path", {
         d: "M21 3v5h-5",
         key: "1q7to0"
      }],
      ["path", {
         d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
         key: "3uifl3"
      }],
      ["path", {
         d: "M8 16H3v5",
         key: "1cv678"
      }]
   ],
   p1 = ae("refresh-cw", m1);
const y1 = [
      ["path", {
         d: "M3 7V5a2 2 0 0 1 2-2h2",
         key: "aa7l1z"
      }],
      ["path", {
         d: "M17 3h2a2 2 0 0 1 2 2v2",
         key: "4qcy5o"
      }],
      ["path", {
         d: "M21 17v2a2 2 0 0 1-2 2h-2",
         key: "6vwrx8"
      }],
      ["path", {
         d: "M7 21H5a2 2 0 0 1-2-2v-2",
         key: "ioqczr"
      }]
   ],
   oa = ae("scan", y1);
const v1 = [
      ["rect", {
         width: "18",
         height: "18",
         x: "3",
         y: "3",
         rx: "2",
         key: "afitv7"
      }],
      ["path", {
         d: "m15 9-6 6",
         key: "1uzhvr"
      }],
      ["path", {
         d: "M9 9h.01",
         key: "1q5me6"
      }],
      ["path", {
         d: "M15 15h.01",
         key: "lqbp3k"
      }]
   ],
   g1 = ae("square-percent", v1);
const b1 = [
      ["path", {
         d: "M12 3v12",
         key: "1x0j5s"
      }],
      ["path", {
         d: "m17 8-5-5-5 5",
         key: "7q97r8"
      }],
      ["path", {
         d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
         key: "ih7n3h"
      }]
   ],
   x1 = ae("upload", b1);
const S1 = [
      ["path", {
         d: "m16 11 2 2 4-4",
         key: "9rsbq5"
      }],
      ["path", {
         d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
         key: "1yyitq"
      }],
      ["circle", {
         cx: "9",
         cy: "7",
         r: "4",
         key: "nufk8"
      }]
   ],
   w1 = ae("user-check", S1);
const E1 = [
      ["path", {
         d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
         key: "ftymec"
      }],
      ["rect", {
         x: "2",
         y: "6",
         width: "14",
         height: "12",
         rx: "2",
         key: "158x01"
      }]
   ],
   T1 = ae("video", E1);
const A1 = [
      ["path", {
         d: "M18 6 6 18",
         key: "1bl5f8"
      }],
      ["path", {
         d: "m6 6 12 12",
         key: "d8bk6v"
      }]
   ],
   dc = ae("x", A1),
   O1 = (l, i) => {
      const s = new Array(l.length + i.length);
      for (let u = 0; u < l.length; u++) s[u] = l[u];
      for (let u = 0; u < i.length; u++) s[l.length + u] = i[u];
      return s
   },
   R1 = (l, i) => ({
      classGroupId: l,
      validator: i
   }),
   fy = (l = new Map, i = null, s) => ({
      nextPart: l,
      validators: i,
      classGroupId: s
   }),
   Xr = "-",
   Wm = [],
   N1 = "arbitrary..",
   C1 = l => {
      const i = _1(l),
         {
            conflictingClassGroups: s,
            conflictingClassGroupModifiers: u
         } = l;
      return {
         getClassGroupId: h => {
            if (h.startsWith("[") && h.endsWith("]")) return M1(h);
            const y = h.split(Xr),
               v = y[0] === "" && y.length > 1 ? 1 : 0;
            return dy(y, v, i)
         },
         getConflictingClassGroupIds: (h, y) => {
            if (y) {
               const v = u[h],
                  m = s[h];
               return v ? m ? O1(m, v) : v : m || Wm
            }
            return s[h] || Wm
         }
      }
   },
   dy = (l, i, s) => {
      if (l.length - i === 0) return s.classGroupId;
      const c = l[i],
         f = s.nextPart.get(c);
      if (f) {
         const m = dy(l, i + 1, f);
         if (m) return m
      }
      const h = s.validators;
      if (h === null) return;
      const y = i === 0 ? l.join(Xr) : l.slice(i).join(Xr),
         v = h.length;
      for (let m = 0; m < v; m++) {
         const b = h[m];
         if (b.validator(y)) return b.classGroupId
      }
   },
   M1 = l => l.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
      const i = l.slice(1, -1),
         s = i.indexOf(":"),
         u = i.slice(0, s);
      return u ? N1 + u : void 0
   })(),
   _1 = l => {
      const {
         theme: i,
         classGroups: s
      } = l;
      return D1(s, i)
   },
   D1 = (l, i) => {
      const s = fy();
      for (const u in l) {
         const c = l[u];
         hc(c, s, u, i)
      }
      return s
   },
   hc = (l, i, s, u) => {
      const c = l.length;
      for (let f = 0; f < c; f++) {
         const h = l[f];
         j1(h, i, s, u)
      }
   },
   j1 = (l, i, s, u) => {
      if (typeof l == "string") {
         z1(l, i, s);
         return
      }
      if (typeof l == "function") {
         U1(l, i, s, u);
         return
      }
      H1(l, i, s, u)
   },
   z1 = (l, i, s) => {
      const u = l === "" ? i : hy(i, l);
      u.classGroupId = s
   },
   U1 = (l, i, s, u) => {
      if (L1(l)) {
         hc(l(u), i, s, u);
         return
      }
      i.validators === null && (i.validators = []), i.validators.push(R1(s, l))
   },
   H1 = (l, i, s, u) => {
      const c = Object.entries(l),
         f = c.length;
      for (let h = 0; h < f; h++) {
         const [y, v] = c[h];
         hc(v, hy(i, y), s, u)
      }
   },
   hy = (l, i) => {
      let s = l;
      const u = i.split(Xr),
         c = u.length;
      for (let f = 0; f < c; f++) {
         const h = u[f];
         let y = s.nextPart.get(h);
         y || (y = fy(), s.nextPart.set(h, y)), s = y
      }
      return s
   },
   L1 = l => "isThemeGetter" in l && l.isThemeGetter === !0,
   k1 = l => {
      if (l < 1) return {
         get: () => {},
         set: () => {}
      };
      let i = 0,
         s = Object.create(null),
         u = Object.create(null);
      const c = (f, h) => {
         s[f] = h, i++, i > l && (i = 0, u = s, s = Object.create(null))
      };
      return {
         get(f) {
            let h = s[f];
            if (h !== void 0) return h;
            if ((h = u[f]) !== void 0) return c(f, h), h
         },
         set(f, h) {
            f in s ? s[f] = h : c(f, h)
         }
      }
   },
   Pu = "!",
   Im = ":",
   q1 = [],
   tp = (l, i, s, u, c) => ({
      modifiers: l,
      hasImportantModifier: i,
      baseClassName: s,
      maybePostfixModifierPosition: u,
      isExternal: c
   }),
   B1 = l => {
      const {
         prefix: i,
         experimentalParseClassName: s
      } = l;
      let u = c => {
         const f = [];
         let h = 0,
            y = 0,
            v = 0,
            m;
         const b = c.length;
         for (let R = 0; R < b; R++) {
            const N = c[R];
            if (h === 0 && y === 0) {
               if (N === Im) {
                  f.push(c.slice(v, R)), v = R + 1;
                  continue
               }
               if (N === "/") {
                  m = R;
                  continue
               }
            }
            N === "[" ? h++ : N === "]" ? h-- : N === "(" ? y++ : N === ")" && y--
         }
         const E = f.length === 0 ? c : c.slice(v);
         let A = E,
            D = !1;
         E.endsWith(Pu) ? (A = E.slice(0, -1), D = !0) : E.startsWith(Pu) && (A = E.slice(1), D = !0);
         const z = m && m > v ? m - v : void 0;
         return tp(f, D, A, z)
      };
      if (i) {
         const c = i + Im,
            f = u;
         u = h => h.startsWith(c) ? f(h.slice(c.length)) : tp(q1, !1, h, void 0, !0)
      }
      if (s) {
         const c = u;
         u = f => s({
            className: f,
            parseClassName: c
         })
      }
      return u
   },
   Y1 = l => {
      const i = new Map;
      return l.orderSensitiveModifiers.forEach((s, u) => {
         i.set(s, 1e6 + u)
      }), s => {
         const u = [];
         let c = [];
         for (let f = 0; f < s.length; f++) {
            const h = s[f],
               y = h[0] === "[",
               v = i.has(h);
            y || v ? (c.length > 0 && (c.sort(), u.push(...c), c = []), u.push(h)) : c.push(h)
         }
         return c.length > 0 && (c.sort(), u.push(...c)), u
      }
   },
   G1 = l => ({
      cache: k1(l.cacheSize),
      parseClassName: B1(l),
      sortModifiers: Y1(l),
      ...C1(l)
   }),
   V1 = /\s+/,
   Q1 = (l, i) => {
      const {
         parseClassName: s,
         getClassGroupId: u,
         getConflictingClassGroupIds: c,
         sortModifiers: f
      } = i, h = [], y = l.trim().split(V1);
      let v = "";
      for (let m = y.length - 1; m >= 0; m -= 1) {
         const b = y[m],
            {
               isExternal: E,
               modifiers: A,
               hasImportantModifier: D,
               baseClassName: z,
               maybePostfixModifierPosition: R
            } = s(b);
         if (E) {
            v = b + (v.length > 0 ? " " + v : v);
            continue
         }
         let N = !!R,
            B = u(N ? z.substring(0, R) : z);
         if (!B) {
            if (!N) {
               v = b + (v.length > 0 ? " " + v : v);
               continue
            }
            if (B = u(z), !B) {
               v = b + (v.length > 0 ? " " + v : v);
               continue
            }
            N = !1
         }
         const X = A.length === 0 ? "" : A.length === 1 ? A[0] : f(A).join(":"),
            V = D ? X + Pu : X,
            k = V + B;
         if (h.indexOf(k) > -1) continue;
         h.push(k);
         const H = c(B, N);
         for (let P = 0; P < H.length; ++P) {
            const $ = H[P];
            h.push(V + $)
         }
         v = b + (v.length > 0 ? " " + v : v)
      }
      return v
   },
   X1 = (...l) => {
      let i = 0,
         s, u, c = "";
      for (; i < l.length;)(s = l[i++]) && (u = my(s)) && (c && (c += " "), c += u);
      return c
   },
   my = l => {
      if (typeof l == "string") return l;
      let i, s = "";
      for (let u = 0; u < l.length; u++) l[u] && (i = my(l[u])) && (s && (s += " "), s += i);
      return s
   },
   Z1 = (l, ...i) => {
      let s, u, c, f;
      const h = v => {
            const m = i.reduce((b, E) => E(b), l());
            return s = G1(m), u = s.cache.get, c = s.cache.set, f = y, y(v)
         },
         y = v => {
            const m = u(v);
            if (m) return m;
            const b = Q1(v, s);
            return c(v, b), b
         };
      return f = h, (...v) => f(X1(...v))
   },
   K1 = [],
   Xt = l => {
      const i = s => s[l] || K1;
      return i.isThemeGetter = !0, i
   },
   py = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
   yy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
   P1 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
   J1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
   F1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
   $1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
   W1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
   I1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
   Xn = l => P1.test(l),
   pt = l => !!l && !Number.isNaN(Number(l)),
   Zn = l => !!l && Number.isInteger(Number(l)),
   ju = l => l.endsWith("%") && pt(l.slice(0, -1)),
   pn = l => J1.test(l),
   vy = () => !0,
   tS = l => F1.test(l) && !$1.test(l),
   mc = () => !1,
   eS = l => W1.test(l),
   nS = l => I1.test(l),
   lS = l => !tt(l) && !et(l),
   aS = l => Wn(l, xy, mc),
   tt = l => py.test(l),
   vl = l => Wn(l, Sy, tS),
   ep = l => Wn(l, dS, pt),
   iS = l => Wn(l, Ey, vy),
   rS = l => Wn(l, wy, mc),
   np = l => Wn(l, gy, mc),
   sS = l => Wn(l, by, nS),
   kr = l => Wn(l, Ty, eS),
   et = l => yy.test(l),
   di = l => Sl(l, Sy),
   oS = l => Sl(l, wy),
   lp = l => Sl(l, gy),
   uS = l => Sl(l, xy),
   cS = l => Sl(l, by),
   qr = l => Sl(l, Ty, !0),
   fS = l => Sl(l, Ey, !0),
   Wn = (l, i, s) => {
      const u = py.exec(l);
      return u ? u[1] ? i(u[1]) : s(u[2]) : !1
   },
   Sl = (l, i, s = !1) => {
      const u = yy.exec(l);
      return u ? u[1] ? i(u[1]) : s : !1
   },
   gy = l => l === "position" || l === "percentage",
   by = l => l === "image" || l === "url",
   xy = l => l === "length" || l === "size" || l === "bg-size",
   Sy = l => l === "length",
   dS = l => l === "number",
   wy = l => l === "family-name",
   Ey = l => l === "number" || l === "weight",
   Ty = l => l === "shadow",
   hS = () => {
      const l = Xt("color"),
         i = Xt("font"),
         s = Xt("text"),
         u = Xt("font-weight"),
         c = Xt("tracking"),
         f = Xt("leading"),
         h = Xt("breakpoint"),
         y = Xt("container"),
         v = Xt("spacing"),
         m = Xt("radius"),
         b = Xt("shadow"),
         E = Xt("inset-shadow"),
         A = Xt("text-shadow"),
         D = Xt("drop-shadow"),
         z = Xt("blur"),
         R = Xt("perspective"),
         N = Xt("aspect"),
         B = Xt("ease"),
         X = Xt("animate"),
         V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
         k = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
         H = () => [...k(), et, tt],
         P = () => ["auto", "hidden", "clip", "visible", "scroll"],
         $ = () => ["auto", "contain", "none"],
         K = () => [et, tt, v],
         ut = () => [Xn, "full", "auto", ...K()],
         vt = () => [Zn, "none", "subgrid", et, tt],
         xt = () => ["auto", {
            span: ["full", Zn, et, tt]
         }, Zn, et, tt],
         dt = () => [Zn, "auto", et, tt],
         wt = () => ["auto", "min", "max", "fr", et, tt],
         W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
         ft = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
         M = () => ["auto", ...K()],
         Q = () => [Xn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...K()],
         Z = () => [Xn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...K()],
         it = () => [Xn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...K()],
         x = () => [l, et, tt],
         G = () => [...k(), lp, np, {
            position: [et, tt]
         }],
         F = () => ["no-repeat", {
            repeat: ["", "x", "y", "space", "round"]
         }],
         J = () => ["auto", "cover", "contain", uS, aS, {
            size: [et, tt]
         }],
         lt = () => [ju, di, vl],
         st = () => ["", "none", "full", m, et, tt],
         nt = () => ["", pt, di, vl],
         zt = () => ["solid", "dashed", "dotted", "double"],
         At = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
         Ot = () => [pt, ju, lp, np],
         bn = () => ["", "none", z, et, tt],
         Ue = () => ["none", pt, et, tt],
         Ve = () => ["none", pt, et, tt],
         Te = () => [pt, et, tt],
         xn = () => [Xn, "full", ...K()];
      return {
         cacheSize: 500,
         theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [pn],
            breakpoint: [pn],
            color: [vy],
            container: [pn],
            "drop-shadow": [pn],
            ease: ["in", "out", "in-out"],
            font: [lS],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [pn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [pn],
            shadow: [pn],
            spacing: ["px", pt],
            text: [pn],
            "text-shadow": [pn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
         },
         classGroups: {
            aspect: [{
               aspect: ["auto", "square", Xn, tt, et, N]
            }],
            container: ["container"],
            columns: [{
               columns: [pt, tt, et, y]
            }],
            "break-after": [{
               "break-after": V()
            }],
            "break-before": [{
               "break-before": V()
            }],
            "break-inside": [{
               "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
               "box-decoration": ["slice", "clone"]
            }],
            box: [{
               box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
               float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
               clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
               object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
               object: H()
            }],
            overflow: [{
               overflow: P()
            }],
            "overflow-x": [{
               "overflow-x": P()
            }],
            "overflow-y": [{
               "overflow-y": P()
            }],
            overscroll: [{
               overscroll: $()
            }],
            "overscroll-x": [{
               "overscroll-x": $()
            }],
            "overscroll-y": [{
               "overscroll-y": $()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
               inset: ut()
            }],
            "inset-x": [{
               "inset-x": ut()
            }],
            "inset-y": [{
               "inset-y": ut()
            }],
            start: [{
               "inset-s": ut(),
               start: ut()
            }],
            end: [{
               "inset-e": ut(),
               end: ut()
            }],
            "inset-bs": [{
               "inset-bs": ut()
            }],
            "inset-be": [{
               "inset-be": ut()
            }],
            top: [{
               top: ut()
            }],
            right: [{
               right: ut()
            }],
            bottom: [{
               bottom: ut()
            }],
            left: [{
               left: ut()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
               z: [Zn, "auto", et, tt]
            }],
            basis: [{
               basis: [Xn, "full", "auto", y, ...K()]
            }],
            "flex-direction": [{
               flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
               flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
               flex: [pt, Xn, "auto", "initial", "none", tt]
            }],
            grow: [{
               grow: ["", pt, et, tt]
            }],
            shrink: [{
               shrink: ["", pt, et, tt]
            }],
            order: [{
               order: [Zn, "first", "last", "none", et, tt]
            }],
            "grid-cols": [{
               "grid-cols": vt()
            }],
            "col-start-end": [{
               col: xt()
            }],
            "col-start": [{
               "col-start": dt()
            }],
            "col-end": [{
               "col-end": dt()
            }],
            "grid-rows": [{
               "grid-rows": vt()
            }],
            "row-start-end": [{
               row: xt()
            }],
            "row-start": [{
               "row-start": dt()
            }],
            "row-end": [{
               "row-end": dt()
            }],
            "grid-flow": [{
               "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
               "auto-cols": wt()
            }],
            "auto-rows": [{
               "auto-rows": wt()
            }],
            gap: [{
               gap: K()
            }],
            "gap-x": [{
               "gap-x": K()
            }],
            "gap-y": [{
               "gap-y": K()
            }],
            "justify-content": [{
               justify: [...W(), "normal"]
            }],
            "justify-items": [{
               "justify-items": [...ft(), "normal"]
            }],
            "justify-self": [{
               "justify-self": ["auto", ...ft()]
            }],
            "align-content": [{
               content: ["normal", ...W()]
            }],
            "align-items": [{
               items: [...ft(), {
                  baseline: ["", "last"]
               }]
            }],
            "align-self": [{
               self: ["auto", ...ft(), {
                  baseline: ["", "last"]
               }]
            }],
            "place-content": [{
               "place-content": W()
            }],
            "place-items": [{
               "place-items": [...ft(), "baseline"]
            }],
            "place-self": [{
               "place-self": ["auto", ...ft()]
            }],
            p: [{
               p: K()
            }],
            px: [{
               px: K()
            }],
            py: [{
               py: K()
            }],
            ps: [{
               ps: K()
            }],
            pe: [{
               pe: K()
            }],
            pbs: [{
               pbs: K()
            }],
            pbe: [{
               pbe: K()
            }],
            pt: [{
               pt: K()
            }],
            pr: [{
               pr: K()
            }],
            pb: [{
               pb: K()
            }],
            pl: [{
               pl: K()
            }],
            m: [{
               m: M()
            }],
            mx: [{
               mx: M()
            }],
            my: [{
               my: M()
            }],
            ms: [{
               ms: M()
            }],
            me: [{
               me: M()
            }],
            mbs: [{
               mbs: M()
            }],
            mbe: [{
               mbe: M()
            }],
            mt: [{
               mt: M()
            }],
            mr: [{
               mr: M()
            }],
            mb: [{
               mb: M()
            }],
            ml: [{
               ml: M()
            }],
            "space-x": [{
               "space-x": K()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
               "space-y": K()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
               size: Q()
            }],
            "inline-size": [{
               inline: ["auto", ...Z()]
            }],
            "min-inline-size": [{
               "min-inline": ["auto", ...Z()]
            }],
            "max-inline-size": [{
               "max-inline": ["none", ...Z()]
            }],
            "block-size": [{
               block: ["auto", ...it()]
            }],
            "min-block-size": [{
               "min-block": ["auto", ...it()]
            }],
            "max-block-size": [{
               "max-block": ["none", ...it()]
            }],
            w: [{
               w: [y, "screen", ...Q()]
            }],
            "min-w": [{
               "min-w": [y, "screen", "none", ...Q()]
            }],
            "max-w": [{
               "max-w": [y, "screen", "none", "prose", {
                  screen: [h]
               }, ...Q()]
            }],
            h: [{
               h: ["screen", "lh", ...Q()]
            }],
            "min-h": [{
               "min-h": ["screen", "lh", "none", ...Q()]
            }],
            "max-h": [{
               "max-h": ["screen", "lh", ...Q()]
            }],
            "font-size": [{
               text: ["base", s, di, vl]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
               font: [u, fS, iS]
            }],
            "font-stretch": [{
               "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ju, tt]
            }],
            "font-family": [{
               font: [oS, rS, i]
            }],
            "font-features": [{
               "font-features": [tt]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
               tracking: [c, et, tt]
            }],
            "line-clamp": [{
               "line-clamp": [pt, "none", et, ep]
            }],
            leading: [{
               leading: [f, ...K()]
            }],
            "list-image": [{
               "list-image": ["none", et, tt]
            }],
            "list-style-position": [{
               list: ["inside", "outside"]
            }],
            "list-style-type": [{
               list: ["disc", "decimal", "none", et, tt]
            }],
            "text-alignment": [{
               text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
               placeholder: x()
            }],
            "text-color": [{
               text: x()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
               decoration: [...zt(), "wavy"]
            }],
            "text-decoration-thickness": [{
               decoration: [pt, "from-font", "auto", et, vl]
            }],
            "text-decoration-color": [{
               decoration: x()
            }],
            "underline-offset": [{
               "underline-offset": [pt, "auto", et, tt]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
               text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
               indent: K()
            }],
            "vertical-align": [{
               align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", et, tt]
            }],
            whitespace: [{
               whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
               break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
               wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
               hyphens: ["none", "manual", "auto"]
            }],
            content: [{
               content: ["none", et, tt]
            }],
            "bg-attachment": [{
               bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
               "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
               "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
               bg: G()
            }],
            "bg-repeat": [{
               bg: F()
            }],
            "bg-size": [{
               bg: J()
            }],
            "bg-image": [{
               bg: ["none", {
                  linear: [{
                     to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                  }, Zn, et, tt],
                  radial: ["", et, tt],
                  conic: [Zn, et, tt]
               }, cS, sS]
            }],
            "bg-color": [{
               bg: x()
            }],
            "gradient-from-pos": [{
               from: lt()
            }],
            "gradient-via-pos": [{
               via: lt()
            }],
            "gradient-to-pos": [{
               to: lt()
            }],
            "gradient-from": [{
               from: x()
            }],
            "gradient-via": [{
               via: x()
            }],
            "gradient-to": [{
               to: x()
            }],
            rounded: [{
               rounded: st()
            }],
            "rounded-s": [{
               "rounded-s": st()
            }],
            "rounded-e": [{
               "rounded-e": st()
            }],
            "rounded-t": [{
               "rounded-t": st()
            }],
            "rounded-r": [{
               "rounded-r": st()
            }],
            "rounded-b": [{
               "rounded-b": st()
            }],
            "rounded-l": [{
               "rounded-l": st()
            }],
            "rounded-ss": [{
               "rounded-ss": st()
            }],
            "rounded-se": [{
               "rounded-se": st()
            }],
            "rounded-ee": [{
               "rounded-ee": st()
            }],
            "rounded-es": [{
               "rounded-es": st()
            }],
            "rounded-tl": [{
               "rounded-tl": st()
            }],
            "rounded-tr": [{
               "rounded-tr": st()
            }],
            "rounded-br": [{
               "rounded-br": st()
            }],
            "rounded-bl": [{
               "rounded-bl": st()
            }],
            "border-w": [{
               border: nt()
            }],
            "border-w-x": [{
               "border-x": nt()
            }],
            "border-w-y": [{
               "border-y": nt()
            }],
            "border-w-s": [{
               "border-s": nt()
            }],
            "border-w-e": [{
               "border-e": nt()
            }],
            "border-w-bs": [{
               "border-bs": nt()
            }],
            "border-w-be": [{
               "border-be": nt()
            }],
            "border-w-t": [{
               "border-t": nt()
            }],
            "border-w-r": [{
               "border-r": nt()
            }],
            "border-w-b": [{
               "border-b": nt()
            }],
            "border-w-l": [{
               "border-l": nt()
            }],
            "divide-x": [{
               "divide-x": nt()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
               "divide-y": nt()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
               border: [...zt(), "hidden", "none"]
            }],
            "divide-style": [{
               divide: [...zt(), "hidden", "none"]
            }],
            "border-color": [{
               border: x()
            }],
            "border-color-x": [{
               "border-x": x()
            }],
            "border-color-y": [{
               "border-y": x()
            }],
            "border-color-s": [{
               "border-s": x()
            }],
            "border-color-e": [{
               "border-e": x()
            }],
            "border-color-bs": [{
               "border-bs": x()
            }],
            "border-color-be": [{
               "border-be": x()
            }],
            "border-color-t": [{
               "border-t": x()
            }],
            "border-color-r": [{
               "border-r": x()
            }],
            "border-color-b": [{
               "border-b": x()
            }],
            "border-color-l": [{
               "border-l": x()
            }],
            "divide-color": [{
               divide: x()
            }],
            "outline-style": [{
               outline: [...zt(), "none", "hidden"]
            }],
            "outline-offset": [{
               "outline-offset": [pt, et, tt]
            }],
            "outline-w": [{
               outline: ["", pt, di, vl]
            }],
            "outline-color": [{
               outline: x()
            }],
            shadow: [{
               shadow: ["", "none", b, qr, kr]
            }],
            "shadow-color": [{
               shadow: x()
            }],
            "inset-shadow": [{
               "inset-shadow": ["none", E, qr, kr]
            }],
            "inset-shadow-color": [{
               "inset-shadow": x()
            }],
            "ring-w": [{
               ring: nt()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
               ring: x()
            }],
            "ring-offset-w": [{
               "ring-offset": [pt, vl]
            }],
            "ring-offset-color": [{
               "ring-offset": x()
            }],
            "inset-ring-w": [{
               "inset-ring": nt()
            }],
            "inset-ring-color": [{
               "inset-ring": x()
            }],
            "text-shadow": [{
               "text-shadow": ["none", A, qr, kr]
            }],
            "text-shadow-color": [{
               "text-shadow": x()
            }],
            opacity: [{
               opacity: [pt, et, tt]
            }],
            "mix-blend": [{
               "mix-blend": [...At(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
               "bg-blend": At()
            }],
            "mask-clip": [{
               "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
               mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
               "mask-linear": [pt]
            }],
            "mask-image-linear-from-pos": [{
               "mask-linear-from": Ot()
            }],
            "mask-image-linear-to-pos": [{
               "mask-linear-to": Ot()
            }],
            "mask-image-linear-from-color": [{
               "mask-linear-from": x()
            }],
            "mask-image-linear-to-color": [{
               "mask-linear-to": x()
            }],
            "mask-image-t-from-pos": [{
               "mask-t-from": Ot()
            }],
            "mask-image-t-to-pos": [{
               "mask-t-to": Ot()
            }],
            "mask-image-t-from-color": [{
               "mask-t-from": x()
            }],
            "mask-image-t-to-color": [{
               "mask-t-to": x()
            }],
            "mask-image-r-from-pos": [{
               "mask-r-from": Ot()
            }],
            "mask-image-r-to-pos": [{
               "mask-r-to": Ot()
            }],
            "mask-image-r-from-color": [{
               "mask-r-from": x()
            }],
            "mask-image-r-to-color": [{
               "mask-r-to": x()
            }],
            "mask-image-b-from-pos": [{
               "mask-b-from": Ot()
            }],
            "mask-image-b-to-pos": [{
               "mask-b-to": Ot()
            }],
            "mask-image-b-from-color": [{
               "mask-b-from": x()
            }],
            "mask-image-b-to-color": [{
               "mask-b-to": x()
            }],
            "mask-image-l-from-pos": [{
               "mask-l-from": Ot()
            }],
            "mask-image-l-to-pos": [{
               "mask-l-to": Ot()
            }],
            "mask-image-l-from-color": [{
               "mask-l-from": x()
            }],
            "mask-image-l-to-color": [{
               "mask-l-to": x()
            }],
            "mask-image-x-from-pos": [{
               "mask-x-from": Ot()
            }],
            "mask-image-x-to-pos": [{
               "mask-x-to": Ot()
            }],
            "mask-image-x-from-color": [{
               "mask-x-from": x()
            }],
            "mask-image-x-to-color": [{
               "mask-x-to": x()
            }],
            "mask-image-y-from-pos": [{
               "mask-y-from": Ot()
            }],
            "mask-image-y-to-pos": [{
               "mask-y-to": Ot()
            }],
            "mask-image-y-from-color": [{
               "mask-y-from": x()
            }],
            "mask-image-y-to-color": [{
               "mask-y-to": x()
            }],
            "mask-image-radial": [{
               "mask-radial": [et, tt]
            }],
            "mask-image-radial-from-pos": [{
               "mask-radial-from": Ot()
            }],
            "mask-image-radial-to-pos": [{
               "mask-radial-to": Ot()
            }],
            "mask-image-radial-from-color": [{
               "mask-radial-from": x()
            }],
            "mask-image-radial-to-color": [{
               "mask-radial-to": x()
            }],
            "mask-image-radial-shape": [{
               "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
               "mask-radial": [{
                  closest: ["side", "corner"],
                  farthest: ["side", "corner"]
               }]
            }],
            "mask-image-radial-pos": [{
               "mask-radial-at": k()
            }],
            "mask-image-conic-pos": [{
               "mask-conic": [pt]
            }],
            "mask-image-conic-from-pos": [{
               "mask-conic-from": Ot()
            }],
            "mask-image-conic-to-pos": [{
               "mask-conic-to": Ot()
            }],
            "mask-image-conic-from-color": [{
               "mask-conic-from": x()
            }],
            "mask-image-conic-to-color": [{
               "mask-conic-to": x()
            }],
            "mask-mode": [{
               mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
               "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
               mask: G()
            }],
            "mask-repeat": [{
               mask: F()
            }],
            "mask-size": [{
               mask: J()
            }],
            "mask-type": [{
               "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
               mask: ["none", et, tt]
            }],
            filter: [{
               filter: ["", "none", et, tt]
            }],
            blur: [{
               blur: bn()
            }],
            brightness: [{
               brightness: [pt, et, tt]
            }],
            contrast: [{
               contrast: [pt, et, tt]
            }],
            "drop-shadow": [{
               "drop-shadow": ["", "none", D, qr, kr]
            }],
            "drop-shadow-color": [{
               "drop-shadow": x()
            }],
            grayscale: [{
               grayscale: ["", pt, et, tt]
            }],
            "hue-rotate": [{
               "hue-rotate": [pt, et, tt]
            }],
            invert: [{
               invert: ["", pt, et, tt]
            }],
            saturate: [{
               saturate: [pt, et, tt]
            }],
            sepia: [{
               sepia: ["", pt, et, tt]
            }],
            "backdrop-filter": [{
               "backdrop-filter": ["", "none", et, tt]
            }],
            "backdrop-blur": [{
               "backdrop-blur": bn()
            }],
            "backdrop-brightness": [{
               "backdrop-brightness": [pt, et, tt]
            }],
            "backdrop-contrast": [{
               "backdrop-contrast": [pt, et, tt]
            }],
            "backdrop-grayscale": [{
               "backdrop-grayscale": ["", pt, et, tt]
            }],
            "backdrop-hue-rotate": [{
               "backdrop-hue-rotate": [pt, et, tt]
            }],
            "backdrop-invert": [{
               "backdrop-invert": ["", pt, et, tt]
            }],
            "backdrop-opacity": [{
               "backdrop-opacity": [pt, et, tt]
            }],
            "backdrop-saturate": [{
               "backdrop-saturate": [pt, et, tt]
            }],
            "backdrop-sepia": [{
               "backdrop-sepia": ["", pt, et, tt]
            }],
            "border-collapse": [{
               border: ["collapse", "separate"]
            }],
            "border-spacing": [{
               "border-spacing": K()
            }],
            "border-spacing-x": [{
               "border-spacing-x": K()
            }],
            "border-spacing-y": [{
               "border-spacing-y": K()
            }],
            "table-layout": [{
               table: ["auto", "fixed"]
            }],
            caption: [{
               caption: ["top", "bottom"]
            }],
            transition: [{
               transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", et, tt]
            }],
            "transition-behavior": [{
               transition: ["normal", "discrete"]
            }],
            duration: [{
               duration: [pt, "initial", et, tt]
            }],
            ease: [{
               ease: ["linear", "initial", B, et, tt]
            }],
            delay: [{
               delay: [pt, et, tt]
            }],
            animate: [{
               animate: ["none", X, et, tt]
            }],
            backface: [{
               backface: ["hidden", "visible"]
            }],
            perspective: [{
               perspective: [R, et, tt]
            }],
            "perspective-origin": [{
               "perspective-origin": H()
            }],
            rotate: [{
               rotate: Ue()
            }],
            "rotate-x": [{
               "rotate-x": Ue()
            }],
            "rotate-y": [{
               "rotate-y": Ue()
            }],
            "rotate-z": [{
               "rotate-z": Ue()
            }],
            scale: [{
               scale: Ve()
            }],
            "scale-x": [{
               "scale-x": Ve()
            }],
            "scale-y": [{
               "scale-y": Ve()
            }],
            "scale-z": [{
               "scale-z": Ve()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
               skew: Te()
            }],
            "skew-x": [{
               "skew-x": Te()
            }],
            "skew-y": [{
               "skew-y": Te()
            }],
            transform: [{
               transform: [et, tt, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
               origin: H()
            }],
            "transform-style": [{
               transform: ["3d", "flat"]
            }],
            translate: [{
               translate: xn()
            }],
            "translate-x": [{
               "translate-x": xn()
            }],
            "translate-y": [{
               "translate-y": xn()
            }],
            "translate-z": [{
               "translate-z": xn()
            }],
            "translate-none": ["translate-none"],
            accent: [{
               accent: x()
            }],
            appearance: [{
               appearance: ["none", "auto"]
            }],
            "caret-color": [{
               caret: x()
            }],
            "color-scheme": [{
               scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
               cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", et, tt]
            }],
            "field-sizing": [{
               "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
               "pointer-events": ["auto", "none"]
            }],
            resize: [{
               resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
               scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
               "scroll-m": K()
            }],
            "scroll-mx": [{
               "scroll-mx": K()
            }],
            "scroll-my": [{
               "scroll-my": K()
            }],
            "scroll-ms": [{
               "scroll-ms": K()
            }],
            "scroll-me": [{
               "scroll-me": K()
            }],
            "scroll-mbs": [{
               "scroll-mbs": K()
            }],
            "scroll-mbe": [{
               "scroll-mbe": K()
            }],
            "scroll-mt": [{
               "scroll-mt": K()
            }],
            "scroll-mr": [{
               "scroll-mr": K()
            }],
            "scroll-mb": [{
               "scroll-mb": K()
            }],
            "scroll-ml": [{
               "scroll-ml": K()
            }],
            "scroll-p": [{
               "scroll-p": K()
            }],
            "scroll-px": [{
               "scroll-px": K()
            }],
            "scroll-py": [{
               "scroll-py": K()
            }],
            "scroll-ps": [{
               "scroll-ps": K()
            }],
            "scroll-pe": [{
               "scroll-pe": K()
            }],
            "scroll-pbs": [{
               "scroll-pbs": K()
            }],
            "scroll-pbe": [{
               "scroll-pbe": K()
            }],
            "scroll-pt": [{
               "scroll-pt": K()
            }],
            "scroll-pr": [{
               "scroll-pr": K()
            }],
            "scroll-pb": [{
               "scroll-pb": K()
            }],
            "scroll-pl": [{
               "scroll-pl": K()
            }],
            "snap-align": [{
               snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
               snap: ["normal", "always"]
            }],
            "snap-type": [{
               snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
               snap: ["mandatory", "proximity"]
            }],
            touch: [{
               touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
               "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
               "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
               select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
               "will-change": ["auto", "scroll", "contents", "transform", et, tt]
            }],
            fill: [{
               fill: ["none", ...x()]
            }],
            "stroke-w": [{
               stroke: [pt, di, vl, ep]
            }],
            stroke: [{
               stroke: ["none", ...x()]
            }],
            "forced-color-adjust": [{
               "forced-color-adjust": ["auto", "none"]
            }]
         },
         conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
         },
         conflictingClassGroupModifiers: {
            "font-size": ["leading"]
         },
         orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
      }
   },
   mS = Z1(hS);

function de(...l) {
   return mS(sy(l))
}
const pS = Xx,
   Ay = w.forwardRef(({
      className: l,
      ...i
   }, s) => g.jsx(ty, {
      ref: s,
      className: de("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", l),
      ...i
   }));
Ay.displayName = ty.displayName;
const yS = oy("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
      variants: {
         variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
         }
      },
      defaultVariants: {
         variant: "default"
      }
   }),
   Oy = w.forwardRef(({
      className: l,
      variant: i,
      ...s
   }, u) => g.jsx(ey, {
      ref: u,
      className: de(yS({
         variant: i
      }), l),
      ...s
   }));
Oy.displayName = ey.displayName;
const vS = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx(ay, {
   ref: s,
   className: de("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", l),
   ...i
}));
vS.displayName = ay.displayName;
const Ry = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx(iy, {
   ref: s,
   className: de("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", l),
   "toast-close": "",
   ...i,
   children: g.jsx(dc, {
      className: "h-4 w-4"
   })
}));
Ry.displayName = iy.displayName;
const Ny = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx(ny, {
   ref: s,
   className: de("text-sm font-semibold", l),
   ...i
}));
Ny.displayName = ny.displayName;
const Cy = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx(ly, {
   ref: s,
   className: de("text-sm opacity-90", l),
   ...i
}));
Cy.displayName = ly.displayName;

function gS() {
   const {
      toasts: l
   } = W0();
   return g.jsxs(pS, {
      children: [l.map(function ({
         id: i,
         title: s,
         description: u,
         action: c,
         ...f
      }) {
         return g.jsxs(Oy, {
            ...f,
            children: [g.jsxs("div", {
               className: "grid gap-1",
               children: [s && g.jsx(Ny, {
                  children: s
               }), u && g.jsx(Cy, {
                  children: u
               })]
            }), c, g.jsx(Ry, {})]
         }, i)
      }), g.jsx(Ay, {})]
   })
}
const bS = ["top", "right", "bottom", "left"],
   Fn = Math.min,
   we = Math.max,
   Zr = Math.round,
   Br = Math.floor,
   $e = l => ({
      x: l,
      y: l
   }),
   xS = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
   };

function Ju(l, i, s) {
   return we(l, Fn(i, s))
}

function yn(l, i) {
   return typeof l == "function" ? l(i) : l
}

function vn(l) {
   return l.split("-")[0]
}

function fa(l) {
   return l.split("-")[1]
}

function pc(l) {
   return l === "x" ? "y" : "x"
}

function yc(l) {
   return l === "y" ? "height" : "width"
}

function Fe(l) {
   const i = l[0];
   return i === "t" || i === "b" ? "y" : "x"
}

function vc(l) {
   return pc(Fe(l))
}

function SS(l, i, s) {
   s === void 0 && (s = !1);
   const u = fa(l),
      c = vc(l),
      f = yc(c);
   let h = c === "x" ? u === (s ? "end" : "start") ? "right" : "left" : u === "start" ? "bottom" : "top";
   return i.reference[f] > i.floating[f] && (h = Kr(h)), [h, Kr(h)]
}

function wS(l) {
   const i = Kr(l);
   return [Fu(l), i, Fu(i)]
}

function Fu(l) {
   return l.includes("start") ? l.replace("start", "end") : l.replace("end", "start")
}
const ap = ["left", "right"],
   ip = ["right", "left"],
   ES = ["top", "bottom"],
   TS = ["bottom", "top"];

function AS(l, i, s) {
   switch (l) {
      case "top":
      case "bottom":
         return s ? i ? ip : ap : i ? ap : ip;
      case "left":
      case "right":
         return i ? ES : TS;
      default:
         return []
   }
}

function OS(l, i, s, u) {
   const c = fa(l);
   let f = AS(vn(l), s === "start", u);
   return c && (f = f.map(h => h + "-" + c), i && (f = f.concat(f.map(Fu)))), f
}

function Kr(l) {
   const i = vn(l);
   return xS[i] + l.slice(i.length)
}

function RS(l) {
   return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...l
   }
}

function My(l) {
   return typeof l != "number" ? RS(l) : {
      top: l,
      right: l,
      bottom: l,
      left: l
   }
}

function Pr(l) {
   const {
      x: i,
      y: s,
      width: u,
      height: c
   } = l;
   return {
      width: u,
      height: c,
      top: s,
      left: i,
      right: i + u,
      bottom: s + c,
      x: i,
      y: s
   }
}

function rp(l, i, s) {
   let {
      reference: u,
      floating: c
   } = l;
   const f = Fe(i),
      h = vc(i),
      y = yc(h),
      v = vn(i),
      m = f === "y",
      b = u.x + u.width / 2 - c.width / 2,
      E = u.y + u.height / 2 - c.height / 2,
      A = u[y] / 2 - c[y] / 2;
   let D;
   switch (v) {
      case "top":
         D = {
            x: b,
            y: u.y - c.height
         };
         break;
      case "bottom":
         D = {
            x: b,
            y: u.y + u.height
         };
         break;
      case "right":
         D = {
            x: u.x + u.width,
            y: E
         };
         break;
      case "left":
         D = {
            x: u.x - c.width,
            y: E
         };
         break;
      default:
         D = {
            x: u.x,
            y: u.y
         }
   }
   switch (fa(i)) {
      case "start":
         D[h] -= A * (s && m ? -1 : 1);
         break;
      case "end":
         D[h] += A * (s && m ? -1 : 1);
         break
   }
   return D
}
async function NS(l, i) {
   var s;
   i === void 0 && (i = {});
   const {
      x: u,
      y: c,
      platform: f,
      rects: h,
      elements: y,
      strategy: v
   } = l, {
      boundary: m = "clippingAncestors",
      rootBoundary: b = "viewport",
      elementContext: E = "floating",
      altBoundary: A = !1,
      padding: D = 0
   } = yn(i, l), z = My(D), N = y[A ? E === "floating" ? "reference" : "floating" : E], B = Pr(await f.getClippingRect({
      element: (s = await (f.isElement == null ? void 0 : f.isElement(N))) == null || s ? N : N.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(y.floating)),
      boundary: m,
      rootBoundary: b,
      strategy: v
   })), X = E === "floating" ? {
      x: u,
      y: c,
      width: h.floating.width,
      height: h.floating.height
   } : h.reference, V = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(y.floating)), k = await (f.isElement == null ? void 0 : f.isElement(V)) ? await (f.getScale == null ? void 0 : f.getScale(V)) || {
      x: 1,
      y: 1
   } : {
      x: 1,
      y: 1
   }, H = Pr(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: y,
      rect: X,
      offsetParent: V,
      strategy: v
   }) : X);
   return {
      top: (B.top - H.top + z.top) / k.y,
      bottom: (H.bottom - B.bottom + z.bottom) / k.y,
      left: (B.left - H.left + z.left) / k.x,
      right: (H.right - B.right + z.right) / k.x
   }
}
const CS = 50,
   MS = async (l, i, s) => {
      const {
         placement: u = "bottom",
         strategy: c = "absolute",
         middleware: f = [],
         platform: h
      } = s, y = h.detectOverflow ? h : {
         ...h,
         detectOverflow: NS
      }, v = await (h.isRTL == null ? void 0 : h.isRTL(i));
      let m = await h.getElementRects({
            reference: l,
            floating: i,
            strategy: c
         }),
         {
            x: b,
            y: E
         } = rp(m, u, v),
         A = u,
         D = 0;
      const z = {};
      for (let R = 0; R < f.length; R++) {
         const N = f[R];
         if (!N) continue;
         const {
            name: B,
            fn: X
         } = N, {
            x: V,
            y: k,
            data: H,
            reset: P
         } = await X({
            x: b,
            y: E,
            initialPlacement: u,
            placement: A,
            strategy: c,
            middlewareData: z,
            rects: m,
            platform: y,
            elements: {
               reference: l,
               floating: i
            }
         });
         b = V ?? b, E = k ?? E, z[B] = {
            ...z[B],
            ...H
         }, P && D < CS && (D++, typeof P == "object" && (P.placement && (A = P.placement), P.rects && (m = P.rects === !0 ? await h.getElementRects({
            reference: l,
            floating: i,
            strategy: c
         }) : P.rects), {
            x: b,
            y: E
         } = rp(m, A, v)), R = -1)
      }
      return {
         x: b,
         y: E,
         placement: A,
         strategy: c,
         middlewareData: z
      }
   }, _S = l => ({
      name: "arrow",
      options: l,
      async fn(i) {
         const {
            x: s,
            y: u,
            placement: c,
            rects: f,
            platform: h,
            elements: y,
            middlewareData: v
         } = i, {
            element: m,
            padding: b = 0
         } = yn(l, i) || {};
         if (m == null) return {};
         const E = My(b),
            A = {
               x: s,
               y: u
            },
            D = vc(c),
            z = yc(D),
            R = await h.getDimensions(m),
            N = D === "y",
            B = N ? "top" : "left",
            X = N ? "bottom" : "right",
            V = N ? "clientHeight" : "clientWidth",
            k = f.reference[z] + f.reference[D] - A[D] - f.floating[z],
            H = A[D] - f.reference[D],
            P = await (h.getOffsetParent == null ? void 0 : h.getOffsetParent(m));
         let $ = P ? P[V] : 0;
         (!$ || !await (h.isElement == null ? void 0 : h.isElement(P))) && ($ = y.floating[V] || f.floating[z]);
         const K = k / 2 - H / 2,
            ut = $ / 2 - R[z] / 2 - 1,
            vt = Fn(E[B], ut),
            xt = Fn(E[X], ut),
            dt = vt,
            wt = $ - R[z] - xt,
            W = $ / 2 - R[z] / 2 + K,
            ft = Ju(dt, W, wt),
            M = !v.arrow && fa(c) != null && W !== ft && f.reference[z] / 2 - (W < dt ? vt : xt) - R[z] / 2 < 0,
            Q = M ? W < dt ? W - dt : W - wt : 0;
         return {
            [D]: A[D] + Q,
            data: {
               [D]: ft,
               centerOffset: W - ft - Q,
               ...M && {
                  alignmentOffset: Q
               }
            },
            reset: M
         }
      }
   }), DS = function (l) {
      return l === void 0 && (l = {}), {
         name: "flip",
         options: l,
         async fn(i) {
            var s, u;
            const {
               placement: c,
               middlewareData: f,
               rects: h,
               initialPlacement: y,
               platform: v,
               elements: m
            } = i, {
               mainAxis: b = !0,
               crossAxis: E = !0,
               fallbackPlacements: A,
               fallbackStrategy: D = "bestFit",
               fallbackAxisSideDirection: z = "none",
               flipAlignment: R = !0,
               ...N
            } = yn(l, i);
            if ((s = f.arrow) != null && s.alignmentOffset) return {};
            const B = vn(c),
               X = Fe(y),
               V = vn(y) === y,
               k = await (v.isRTL == null ? void 0 : v.isRTL(m.floating)),
               H = A || (V || !R ? [Kr(y)] : wS(y)),
               P = z !== "none";
            !A && P && H.push(...OS(y, R, z, k));
            const $ = [y, ...H],
               K = await v.detectOverflow(i, N),
               ut = [];
            let vt = ((u = f.flip) == null ? void 0 : u.overflows) || [];
            if (b && ut.push(K[B]), E) {
               const W = SS(c, h, k);
               ut.push(K[W[0]], K[W[1]])
            }
            if (vt = [...vt, {
                  placement: c,
                  overflows: ut
               }], !ut.every(W => W <= 0)) {
               var xt, dt;
               const W = (((xt = f.flip) == null ? void 0 : xt.index) || 0) + 1,
                  ft = $[W];
               if (ft && (!(E === "alignment" ? X !== Fe(ft) : !1) || vt.every(Z => Fe(Z.placement) === X ? Z.overflows[0] > 0 : !0))) return {
                  data: {
                     index: W,
                     overflows: vt
                  },
                  reset: {
                     placement: ft
                  }
               };
               let M = (dt = vt.filter(Q => Q.overflows[0] <= 0).sort((Q, Z) => Q.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : dt.placement;
               if (!M) switch (D) {
                  case "bestFit": {
                     var wt;
                     const Q = (wt = vt.filter(Z => {
                        if (P) {
                           const it = Fe(Z.placement);
                           return it === X || it === "y"
                        }
                        return !0
                     }).map(Z => [Z.placement, Z.overflows.filter(it => it > 0).reduce((it, x) => it + x, 0)]).sort((Z, it) => Z[1] - it[1])[0]) == null ? void 0 : wt[0];
                     Q && (M = Q);
                     break
                  }
                  case "initialPlacement":
                     M = y;
                     break
               }
               if (c !== M) return {
                  reset: {
                     placement: M
                  }
               }
            }
            return {}
         }
      }
   };

function sp(l, i) {
   return {
      top: l.top - i.height,
      right: l.right - i.width,
      bottom: l.bottom - i.height,
      left: l.left - i.width
   }
}

function op(l) {
   return bS.some(i => l[i] >= 0)
}
const jS = function (l) {
      return l === void 0 && (l = {}), {
         name: "hide",
         options: l,
         async fn(i) {
            const {
               rects: s,
               platform: u
            } = i, {
               strategy: c = "referenceHidden",
               ...f
            } = yn(l, i);
            switch (c) {
               case "referenceHidden": {
                  const h = await u.detectOverflow(i, {
                        ...f,
                        elementContext: "reference"
                     }),
                     y = sp(h, s.reference);
                  return {
                     data: {
                        referenceHiddenOffsets: y,
                        referenceHidden: op(y)
                     }
                  }
               }
               case "escaped": {
                  const h = await u.detectOverflow(i, {
                        ...f,
                        altBoundary: !0
                     }),
                     y = sp(h, s.floating);
                  return {
                     data: {
                        escapedOffsets: y,
                        escaped: op(y)
                     }
                  }
               }
               default:
                  return {}
            }
         }
      }
   },
   _y = new Set(["left", "top"]);
async function zS(l, i) {
   const {
      placement: s,
      platform: u,
      elements: c
   } = l, f = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), h = vn(s), y = fa(s), v = Fe(s) === "y", m = _y.has(h) ? -1 : 1, b = f && v ? -1 : 1, E = yn(i, l);
   let {
      mainAxis: A,
      crossAxis: D,
      alignmentAxis: z
   } = typeof E == "number" ? {
      mainAxis: E,
      crossAxis: 0,
      alignmentAxis: null
   } : {
      mainAxis: E.mainAxis || 0,
      crossAxis: E.crossAxis || 0,
      alignmentAxis: E.alignmentAxis
   };
   return y && typeof z == "number" && (D = y === "end" ? z * -1 : z), v ? {
      x: D * b,
      y: A * m
   } : {
      x: A * m,
      y: D * b
   }
}
const US = function (l) {
      return l === void 0 && (l = 0), {
         name: "offset",
         options: l,
         async fn(i) {
            var s, u;
            const {
               x: c,
               y: f,
               placement: h,
               middlewareData: y
            } = i, v = await zS(i, l);
            return h === ((s = y.offset) == null ? void 0 : s.placement) && (u = y.arrow) != null && u.alignmentOffset ? {} : {
               x: c + v.x,
               y: f + v.y,
               data: {
                  ...v,
                  placement: h
               }
            }
         }
      }
   },
   HS = function (l) {
      return l === void 0 && (l = {}), {
         name: "shift",
         options: l,
         async fn(i) {
            const {
               x: s,
               y: u,
               placement: c,
               platform: f
            } = i, {
               mainAxis: h = !0,
               crossAxis: y = !1,
               limiter: v = {
                  fn: B => {
                     let {
                        x: X,
                        y: V
                     } = B;
                     return {
                        x: X,
                        y: V
                     }
                  }
               },
               ...m
            } = yn(l, i), b = {
               x: s,
               y: u
            }, E = await f.detectOverflow(i, m), A = Fe(vn(c)), D = pc(A);
            let z = b[D],
               R = b[A];
            if (h) {
               const B = D === "y" ? "top" : "left",
                  X = D === "y" ? "bottom" : "right",
                  V = z + E[B],
                  k = z - E[X];
               z = Ju(V, z, k)
            }
            if (y) {
               const B = A === "y" ? "top" : "left",
                  X = A === "y" ? "bottom" : "right",
                  V = R + E[B],
                  k = R - E[X];
               R = Ju(V, R, k)
            }
            const N = v.fn({
               ...i,
               [D]: z,
               [A]: R
            });
            return {
               ...N,
               data: {
                  x: N.x - s,
                  y: N.y - u,
                  enabled: {
                     [D]: h,
                     [A]: y
                  }
               }
            }
         }
      }
   },
   LS = function (l) {
      return l === void 0 && (l = {}), {
         options: l,
         fn(i) {
            const {
               x: s,
               y: u,
               placement: c,
               rects: f,
               middlewareData: h
            } = i, {
               offset: y = 0,
               mainAxis: v = !0,
               crossAxis: m = !0
            } = yn(l, i), b = {
               x: s,
               y: u
            }, E = Fe(c), A = pc(E);
            let D = b[A],
               z = b[E];
            const R = yn(y, i),
               N = typeof R == "number" ? {
                  mainAxis: R,
                  crossAxis: 0
               } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...R
               };
            if (v) {
               const V = A === "y" ? "height" : "width",
                  k = f.reference[A] - f.floating[V] + N.mainAxis,
                  H = f.reference[A] + f.reference[V] - N.mainAxis;
               D < k ? D = k : D > H && (D = H)
            }
            if (m) {
               var B, X;
               const V = A === "y" ? "width" : "height",
                  k = _y.has(vn(c)),
                  H = f.reference[E] - f.floating[V] + (k && ((B = h.offset) == null ? void 0 : B[E]) || 0) + (k ? 0 : N.crossAxis),
                  P = f.reference[E] + f.reference[V] + (k ? 0 : ((X = h.offset) == null ? void 0 : X[E]) || 0) - (k ? N.crossAxis : 0);
               z < H ? z = H : z > P && (z = P)
            }
            return {
               [A]: D,
               [E]: z
            }
         }
      }
   },
   kS = function (l) {
      return l === void 0 && (l = {}), {
         name: "size",
         options: l,
         async fn(i) {
            var s, u;
            const {
               placement: c,
               rects: f,
               platform: h,
               elements: y
            } = i, {
               apply: v = () => {},
               ...m
            } = yn(l, i), b = await h.detectOverflow(i, m), E = vn(c), A = fa(c), D = Fe(c) === "y", {
               width: z,
               height: R
            } = f.floating;
            let N, B;
            E === "top" || E === "bottom" ? (N = E, B = A === (await (h.isRTL == null ? void 0 : h.isRTL(y.floating)) ? "start" : "end") ? "left" : "right") : (B = E, N = A === "end" ? "top" : "bottom");
            const X = R - b.top - b.bottom,
               V = z - b.left - b.right,
               k = Fn(R - b[N], X),
               H = Fn(z - b[B], V),
               P = !i.middlewareData.shift;
            let $ = k,
               K = H;
            if ((s = i.middlewareData.shift) != null && s.enabled.x && (K = V), (u = i.middlewareData.shift) != null && u.enabled.y && ($ = X), P && !A) {
               const vt = we(b.left, 0),
                  xt = we(b.right, 0),
                  dt = we(b.top, 0),
                  wt = we(b.bottom, 0);
               D ? K = z - 2 * (vt !== 0 || xt !== 0 ? vt + xt : we(b.left, b.right)) : $ = R - 2 * (dt !== 0 || wt !== 0 ? dt + wt : we(b.top, b.bottom))
            }
            await v({
               ...i,
               availableWidth: K,
               availableHeight: $
            });
            const ut = await h.getDimensions(y.floating);
            return z !== ut.width || R !== ut.height ? {
               reset: {
                  rects: !0
               }
            } : {}
         }
      }
   };

function is() {
   return typeof window < "u"
}

function da(l) {
   return Dy(l) ? (l.nodeName || "").toLowerCase() : "#document"
}

function Ee(l) {
   var i;
   return (l == null || (i = l.ownerDocument) == null ? void 0 : i.defaultView) || window
}

function We(l) {
   var i;
   return (i = (Dy(l) ? l.ownerDocument : l.document) || window.document) == null ? void 0 : i.documentElement
}

function Dy(l) {
   return is() ? l instanceof Node || l instanceof Ee(l).Node : !1
}

function Ye(l) {
   return is() ? l instanceof Element || l instanceof Ee(l).Element : !1
}

function gn(l) {
   return is() ? l instanceof HTMLElement || l instanceof Ee(l).HTMLElement : !1
}

function up(l) {
   return !is() || typeof ShadowRoot > "u" ? !1 : l instanceof ShadowRoot || l instanceof Ee(l).ShadowRoot
}

function bi(l) {
   const {
      overflow: i,
      overflowX: s,
      overflowY: u,
      display: c
   } = Ge(l);
   return /auto|scroll|overlay|hidden|clip/.test(i + u + s) && c !== "inline" && c !== "contents"
}

function qS(l) {
   return /^(table|td|th)$/.test(da(l))
}

function rs(l) {
   try {
      if (l.matches(":popover-open")) return !0
   } catch {}
   try {
      return l.matches(":modal")
   } catch {
      return !1
   }
}
const BS = /transform|translate|scale|rotate|perspective|filter/,
   YS = /paint|layout|strict|content/,
   gl = l => !!l && l !== "none";
let zu;

function gc(l) {
   const i = Ye(l) ? Ge(l) : l;
   return gl(i.transform) || gl(i.translate) || gl(i.scale) || gl(i.rotate) || gl(i.perspective) || !bc() && (gl(i.backdropFilter) || gl(i.filter)) || BS.test(i.willChange || "") || YS.test(i.contain || "")
}

function GS(l) {
   let i = $n(l);
   for (; gn(i) && !ua(i);) {
      if (gc(i)) return i;
      if (rs(i)) return null;
      i = $n(i)
   }
   return null
}

function bc() {
   return zu == null && (zu = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), zu
}

function ua(l) {
   return /^(html|body|#document)$/.test(da(l))
}

function Ge(l) {
   return Ee(l).getComputedStyle(l)
}

function ss(l) {
   return Ye(l) ? {
      scrollLeft: l.scrollLeft,
      scrollTop: l.scrollTop
   } : {
      scrollLeft: l.scrollX,
      scrollTop: l.scrollY
   }
}

function $n(l) {
   if (da(l) === "html") return l;
   const i = l.assignedSlot || l.parentNode || up(l) && l.host || We(l);
   return up(i) ? i.host : i
}

function jy(l) {
   const i = $n(l);
   return ua(i) ? l.ownerDocument ? l.ownerDocument.body : l.body : gn(i) && bi(i) ? i : jy(i)
}

function yi(l, i, s) {
   var u;
   i === void 0 && (i = []), s === void 0 && (s = !0);
   const c = jy(l),
      f = c === ((u = l.ownerDocument) == null ? void 0 : u.body),
      h = Ee(c);
   if (f) {
      const y = $u(h);
      return i.concat(h, h.visualViewport || [], bi(c) ? c : [], y && s ? yi(y) : [])
   } else return i.concat(c, yi(c, [], s))
}

function $u(l) {
   return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null
}

function zy(l) {
   const i = Ge(l);
   let s = parseFloat(i.width) || 0,
      u = parseFloat(i.height) || 0;
   const c = gn(l),
      f = c ? l.offsetWidth : s,
      h = c ? l.offsetHeight : u,
      y = Zr(s) !== f || Zr(u) !== h;
   return y && (s = f, u = h), {
      width: s,
      height: u,
      $: y
   }
}

function xc(l) {
   return Ye(l) ? l : l.contextElement
}

function sa(l) {
   const i = xc(l);
   if (!gn(i)) return $e(1);
   const s = i.getBoundingClientRect(),
      {
         width: u,
         height: c,
         $: f
      } = zy(i);
   let h = (f ? Zr(s.width) : s.width) / u,
      y = (f ? Zr(s.height) : s.height) / c;
   return (!h || !Number.isFinite(h)) && (h = 1), (!y || !Number.isFinite(y)) && (y = 1), {
      x: h,
      y
   }
}
const VS = $e(0);

function Uy(l) {
   const i = Ee(l);
   return !bc() || !i.visualViewport ? VS : {
      x: i.visualViewport.offsetLeft,
      y: i.visualViewport.offsetTop
   }
}

function QS(l, i, s) {
   return i === void 0 && (i = !1), !s || i && s !== Ee(l) ? !1 : i
}

function xl(l, i, s, u) {
   i === void 0 && (i = !1), s === void 0 && (s = !1);
   const c = l.getBoundingClientRect(),
      f = xc(l);
   let h = $e(1);
   i && (u ? Ye(u) && (h = sa(u)) : h = sa(l));
   const y = QS(f, s, u) ? Uy(f) : $e(0);
   let v = (c.left + y.x) / h.x,
      m = (c.top + y.y) / h.y,
      b = c.width / h.x,
      E = c.height / h.y;
   if (f) {
      const A = Ee(f),
         D = u && Ye(u) ? Ee(u) : u;
      let z = A,
         R = $u(z);
      for (; R && u && D !== z;) {
         const N = sa(R),
            B = R.getBoundingClientRect(),
            X = Ge(R),
            V = B.left + (R.clientLeft + parseFloat(X.paddingLeft)) * N.x,
            k = B.top + (R.clientTop + parseFloat(X.paddingTop)) * N.y;
         v *= N.x, m *= N.y, b *= N.x, E *= N.y, v += V, m += k, z = Ee(R), R = $u(z)
      }
   }
   return Pr({
      width: b,
      height: E,
      x: v,
      y: m
   })
}

function os(l, i) {
   const s = ss(l).scrollLeft;
   return i ? i.left + s : xl(We(l)).left + s
}

function Hy(l, i) {
   const s = l.getBoundingClientRect(),
      u = s.left + i.scrollLeft - os(l, s),
      c = s.top + i.scrollTop;
   return {
      x: u,
      y: c
   }
}

function XS(l) {
   let {
      elements: i,
      rect: s,
      offsetParent: u,
      strategy: c
   } = l;
   const f = c === "fixed",
      h = We(u),
      y = i ? rs(i.floating) : !1;
   if (u === h || y && f) return s;
   let v = {
         scrollLeft: 0,
         scrollTop: 0
      },
      m = $e(1);
   const b = $e(0),
      E = gn(u);
   if ((E || !E && !f) && ((da(u) !== "body" || bi(h)) && (v = ss(u)), E)) {
      const D = xl(u);
      m = sa(u), b.x = D.x + u.clientLeft, b.y = D.y + u.clientTop
   }
   const A = h && !E && !f ? Hy(h, v) : $e(0);
   return {
      width: s.width * m.x,
      height: s.height * m.y,
      x: s.x * m.x - v.scrollLeft * m.x + b.x + A.x,
      y: s.y * m.y - v.scrollTop * m.y + b.y + A.y
   }
}

function ZS(l) {
   return Array.from(l.getClientRects())
}

function KS(l) {
   const i = We(l),
      s = ss(l),
      u = l.ownerDocument.body,
      c = we(i.scrollWidth, i.clientWidth, u.scrollWidth, u.clientWidth),
      f = we(i.scrollHeight, i.clientHeight, u.scrollHeight, u.clientHeight);
   let h = -s.scrollLeft + os(l);
   const y = -s.scrollTop;
   return Ge(u).direction === "rtl" && (h += we(i.clientWidth, u.clientWidth) - c), {
      width: c,
      height: f,
      x: h,
      y
   }
}
const cp = 25;

function PS(l, i) {
   const s = Ee(l),
      u = We(l),
      c = s.visualViewport;
   let f = u.clientWidth,
      h = u.clientHeight,
      y = 0,
      v = 0;
   if (c) {
      f = c.width, h = c.height;
      const b = bc();
      (!b || b && i === "fixed") && (y = c.offsetLeft, v = c.offsetTop)
   }
   const m = os(u);
   if (m <= 0) {
      const b = u.ownerDocument,
         E = b.body,
         A = getComputedStyle(E),
         D = b.compatMode === "CSS1Compat" && parseFloat(A.marginLeft) + parseFloat(A.marginRight) || 0,
         z = Math.abs(u.clientWidth - E.clientWidth - D);
      z <= cp && (f -= z)
   } else m <= cp && (f += m);
   return {
      width: f,
      height: h,
      x: y,
      y: v
   }
}

function JS(l, i) {
   const s = xl(l, !0, i === "fixed"),
      u = s.top + l.clientTop,
      c = s.left + l.clientLeft,
      f = gn(l) ? sa(l) : $e(1),
      h = l.clientWidth * f.x,
      y = l.clientHeight * f.y,
      v = c * f.x,
      m = u * f.y;
   return {
      width: h,
      height: y,
      x: v,
      y: m
   }
}

function fp(l, i, s) {
   let u;
   if (i === "viewport") u = PS(l, s);
   else if (i === "document") u = KS(We(l));
   else if (Ye(i)) u = JS(i, s);
   else {
      const c = Uy(l);
      u = {
         x: i.x - c.x,
         y: i.y - c.y,
         width: i.width,
         height: i.height
      }
   }
   return Pr(u)
}

function Ly(l, i) {
   const s = $n(l);
   return s === i || !Ye(s) || ua(s) ? !1 : Ge(s).position === "fixed" || Ly(s, i)
}

function FS(l, i) {
   const s = i.get(l);
   if (s) return s;
   let u = yi(l, [], !1).filter(y => Ye(y) && da(y) !== "body"),
      c = null;
   const f = Ge(l).position === "fixed";
   let h = f ? $n(l) : l;
   for (; Ye(h) && !ua(h);) {
      const y = Ge(h),
         v = gc(h);
      !v && y.position === "fixed" && (c = null), (f ? !v && !c : !v && y.position === "static" && !!c && (c.position === "absolute" || c.position === "fixed") || bi(h) && !v && Ly(l, h)) ? u = u.filter(b => b !== h) : c = y, h = $n(h)
   }
   return i.set(l, u), u
}

function $S(l) {
   let {
      element: i,
      boundary: s,
      rootBoundary: u,
      strategy: c
   } = l;
   const h = [...s === "clippingAncestors" ? rs(i) ? [] : FS(i, this._c) : [].concat(s), u],
      y = fp(i, h[0], c);
   let v = y.top,
      m = y.right,
      b = y.bottom,
      E = y.left;
   for (let A = 1; A < h.length; A++) {
      const D = fp(i, h[A], c);
      v = we(D.top, v), m = Fn(D.right, m), b = Fn(D.bottom, b), E = we(D.left, E)
   }
   return {
      width: m - E,
      height: b - v,
      x: E,
      y: v
   }
}

function WS(l) {
   const {
      width: i,
      height: s
   } = zy(l);
   return {
      width: i,
      height: s
   }
}

function IS(l, i, s) {
   const u = gn(i),
      c = We(i),
      f = s === "fixed",
      h = xl(l, !0, f, i);
   let y = {
      scrollLeft: 0,
      scrollTop: 0
   };
   const v = $e(0);

   function m() {
      v.x = os(c)
   }
   if (u || !u && !f)
      if ((da(i) !== "body" || bi(c)) && (y = ss(i)), u) {
         const D = xl(i, !0, f, i);
         v.x = D.x + i.clientLeft, v.y = D.y + i.clientTop
      } else c && m();
   f && !u && c && m();
   const b = c && !u && !f ? Hy(c, y) : $e(0),
      E = h.left + y.scrollLeft - v.x - b.x,
      A = h.top + y.scrollTop - v.y - b.y;
   return {
      x: E,
      y: A,
      width: h.width,
      height: h.height
   }
}

function Uu(l) {
   return Ge(l).position === "static"
}

function dp(l, i) {
   if (!gn(l) || Ge(l).position === "fixed") return null;
   if (i) return i(l);
   let s = l.offsetParent;
   return We(l) === s && (s = s.ownerDocument.body), s
}

function ky(l, i) {
   const s = Ee(l);
   if (rs(l)) return s;
   if (!gn(l)) {
      let c = $n(l);
      for (; c && !ua(c);) {
         if (Ye(c) && !Uu(c)) return c;
         c = $n(c)
      }
      return s
   }
   let u = dp(l, i);
   for (; u && qS(u) && Uu(u);) u = dp(u, i);
   return u && ua(u) && Uu(u) && !gc(u) ? s : u || GS(l) || s
}
const tw = async function (l) {
   const i = this.getOffsetParent || ky,
      s = this.getDimensions,
      u = await s(l.floating);
   return {
      reference: IS(l.reference, await i(l.floating), l.strategy),
      floating: {
         x: 0,
         y: 0,
         width: u.width,
         height: u.height
      }
   }
};

function ew(l) {
   return Ge(l).direction === "rtl"
}
const nw = {
   convertOffsetParentRelativeRectToViewportRelativeRect: XS,
   getDocumentElement: We,
   getClippingRect: $S,
   getOffsetParent: ky,
   getElementRects: tw,
   getClientRects: ZS,
   getDimensions: WS,
   getScale: sa,
   isElement: Ye,
   isRTL: ew
};

function qy(l, i) {
   return l.x === i.x && l.y === i.y && l.width === i.width && l.height === i.height
}

function lw(l, i) {
   let s = null,
      u;
   const c = We(l);

   function f() {
      var y;
      clearTimeout(u), (y = s) == null || y.disconnect(), s = null
   }

   function h(y, v) {
      y === void 0 && (y = !1), v === void 0 && (v = 1), f();
      const m = l.getBoundingClientRect(),
         {
            left: b,
            top: E,
            width: A,
            height: D
         } = m;
      if (y || i(), !A || !D) return;
      const z = Br(E),
         R = Br(c.clientWidth - (b + A)),
         N = Br(c.clientHeight - (E + D)),
         B = Br(b),
         V = {
            rootMargin: -z + "px " + -R + "px " + -N + "px " + -B + "px",
            threshold: we(0, Fn(1, v)) || 1
         };
      let k = !0;

      function H(P) {
         const $ = P[0].intersectionRatio;
         if ($ !== v) {
            if (!k) return h();
            $ ? h(!1, $) : u = setTimeout(() => {
               h(!1, 1e-7)
            }, 1e3)
         }
         $ === 1 && !qy(m, l.getBoundingClientRect()) && h(), k = !1
      }
      try {
         s = new IntersectionObserver(H, {
            ...V,
            root: c.ownerDocument
         })
      } catch {
         s = new IntersectionObserver(H, V)
      }
      s.observe(l)
   }
   return h(!0), f
}

function aw(l, i, s, u) {
   u === void 0 && (u = {});
   const {
      ancestorScroll: c = !0,
      ancestorResize: f = !0,
      elementResize: h = typeof ResizeObserver == "function",
      layoutShift: y = typeof IntersectionObserver == "function",
      animationFrame: v = !1
   } = u, m = xc(l), b = c || f ? [...m ? yi(m) : [], ...i ? yi(i) : []] : [];
   b.forEach(B => {
      c && B.addEventListener("scroll", s, {
         passive: !0
      }), f && B.addEventListener("resize", s)
   });
   const E = m && y ? lw(m, s) : null;
   let A = -1,
      D = null;
   h && (D = new ResizeObserver(B => {
      let [X] = B;
      X && X.target === m && D && i && (D.unobserve(i), cancelAnimationFrame(A), A = requestAnimationFrame(() => {
         var V;
         (V = D) == null || V.observe(i)
      })), s()
   }), m && !v && D.observe(m), i && D.observe(i));
   let z, R = v ? xl(l) : null;
   v && N();

   function N() {
      const B = xl(l);
      R && !qy(R, B) && s(), R = B, z = requestAnimationFrame(N)
   }
   return s(), () => {
      var B;
      b.forEach(X => {
         c && X.removeEventListener("scroll", s), f && X.removeEventListener("resize", s)
      }), E?.(), (B = D) == null || B.disconnect(), D = null, v && cancelAnimationFrame(z)
   }
}
const iw = US,
   rw = HS,
   sw = DS,
   ow = kS,
   uw = jS,
   hp = _S,
   cw = LS,
   fw = (l, i, s) => {
      const u = new Map,
         c = {
            platform: nw,
            ...s
         },
         f = {
            ...c.platform,
            _c: u
         };
      return MS(l, i, {
         ...c,
         platform: f
      })
   };
var dw = typeof document < "u",
   hw = function () {},
   Vr = dw ? w.useLayoutEffect : hw;

function Jr(l, i) {
   if (l === i) return !0;
   if (typeof l != typeof i) return !1;
   if (typeof l == "function" && l.toString() === i.toString()) return !0;
   let s, u, c;
   if (l && i && typeof l == "object") {
      if (Array.isArray(l)) {
         if (s = l.length, s !== i.length) return !1;
         for (u = s; u-- !== 0;)
            if (!Jr(l[u], i[u])) return !1;
         return !0
      }
      if (c = Object.keys(l), s = c.length, s !== Object.keys(i).length) return !1;
      for (u = s; u-- !== 0;)
         if (!{}.hasOwnProperty.call(i, c[u])) return !1;
      for (u = s; u-- !== 0;) {
         const f = c[u];
         if (!(f === "_owner" && l.$$typeof) && !Jr(l[f], i[f])) return !1
      }
      return !0
   }
   return l !== l && i !== i
}

function By(l) {
   return typeof window > "u" ? 1 : (l.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function mp(l, i) {
   const s = By(l);
   return Math.round(i * s) / s
}

function Hu(l) {
   const i = w.useRef(l);
   return Vr(() => {
      i.current = l
   }), i
}

function mw(l) {
   l === void 0 && (l = {});
   const {
      placement: i = "bottom",
      strategy: s = "absolute",
      middleware: u = [],
      platform: c,
      elements: {
         reference: f,
         floating: h
      } = {},
      transform: y = !0,
      whileElementsMounted: v,
      open: m
   } = l, [b, E] = w.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: i,
      middlewareData: {},
      isPositioned: !1
   }), [A, D] = w.useState(u);
   Jr(A, u) || D(u);
   const [z, R] = w.useState(null), [N, B] = w.useState(null), X = w.useCallback(Z => {
      Z !== P.current && (P.current = Z, R(Z))
   }, []), V = w.useCallback(Z => {
      Z !== $.current && ($.current = Z, B(Z))
   }, []), k = f || z, H = h || N, P = w.useRef(null), $ = w.useRef(null), K = w.useRef(b), ut = v != null, vt = Hu(v), xt = Hu(c), dt = Hu(m), wt = w.useCallback(() => {
      if (!P.current || !$.current) return;
      const Z = {
         placement: i,
         strategy: s,
         middleware: A
      };
      xt.current && (Z.platform = xt.current), fw(P.current, $.current, Z).then(it => {
         const x = {
            ...it,
            isPositioned: dt.current !== !1
         };
         W.current && !Jr(K.current, x) && (K.current = x, ts.flushSync(() => {
            E(x)
         }))
      })
   }, [A, i, s, xt, dt]);
   Vr(() => {
      m === !1 && K.current.isPositioned && (K.current.isPositioned = !1, E(Z => ({
         ...Z,
         isPositioned: !1
      })))
   }, [m]);
   const W = w.useRef(!1);
   Vr(() => (W.current = !0, () => {
      W.current = !1
   }), []), Vr(() => {
      if (k && (P.current = k), H && ($.current = H), k && H) {
         if (vt.current) return vt.current(k, H, wt);
         wt()
      }
   }, [k, H, wt, vt, ut]);
   const ft = w.useMemo(() => ({
         reference: P,
         floating: $,
         setReference: X,
         setFloating: V
      }), [X, V]),
      M = w.useMemo(() => ({
         reference: k,
         floating: H
      }), [k, H]),
      Q = w.useMemo(() => {
         const Z = {
            position: s,
            left: 0,
            top: 0
         };
         if (!M.floating) return Z;
         const it = mp(M.floating, b.x),
            x = mp(M.floating, b.y);
         return y ? {
            ...Z,
            transform: "translate(" + it + "px, " + x + "px)",
            ...By(M.floating) >= 1.5 && {
               willChange: "transform"
            }
         } : {
            position: s,
            left: it,
            top: x
         }
      }, [s, y, M.floating, b.x, b.y]);
   return w.useMemo(() => ({
      ...b,
      update: wt,
      refs: ft,
      elements: M,
      floatingStyles: Q
   }), [b, wt, ft, M, Q])
}
const pw = l => {
      function i(s) {
         return {}.hasOwnProperty.call(s, "current")
      }
      return {
         name: "arrow",
         options: l,
         fn(s) {
            const {
               element: u,
               padding: c
            } = typeof l == "function" ? l(s) : l;
            return u && i(u) ? u.current != null ? hp({
               element: u.current,
               padding: c
            }).fn(s) : {} : u ? hp({
               element: u,
               padding: c
            }).fn(s) : {}
         }
      }
   },
   yw = (l, i) => {
      const s = iw(l);
      return {
         name: s.name,
         fn: s.fn,
         options: [l, i]
      }
   },
   vw = (l, i) => {
      const s = rw(l);
      return {
         name: s.name,
         fn: s.fn,
         options: [l, i]
      }
   },
   gw = (l, i) => ({
      fn: cw(l).fn,
      options: [l, i]
   }),
   bw = (l, i) => {
      const s = sw(l);
      return {
         name: s.name,
         fn: s.fn,
         options: [l, i]
      }
   },
   xw = (l, i) => {
      const s = ow(l);
      return {
         name: s.name,
         fn: s.fn,
         options: [l, i]
      }
   },
   Sw = (l, i) => {
      const s = uw(l);
      return {
         name: s.name,
         fn: s.fn,
         options: [l, i]
      }
   },
   ww = (l, i) => {
      const s = pw(l);
      return {
         name: s.name,
         fn: s.fn,
         options: [l, i]
      }
   };
var Ew = "Arrow",
   Yy = w.forwardRef((l, i) => {
      const {
         children: s,
         width: u = 10,
         height: c = 5,
         ...f
      } = l;
      return g.jsx(fe.svg, {
         ...f,
         ref: i,
         width: u,
         height: c,
         viewBox: "0 0 30 10",
         preserveAspectRatio: "none",
         children: l.asChild ? s : g.jsx("polygon", {
            points: "0,0 30,0 15,10"
         })
      })
   });
Yy.displayName = Ew;
var Tw = Yy;

function Aw(l) {
   const [i, s] = w.useState(void 0);
   return Jn(() => {
      if (l) {
         s({
            width: l.offsetWidth,
            height: l.offsetHeight
         });
         const u = new ResizeObserver(c => {
            if (!Array.isArray(c) || !c.length) return;
            const f = c[0];
            let h, y;
            if ("borderBoxSize" in f) {
               const v = f.borderBoxSize,
                  m = Array.isArray(v) ? v[0] : v;
               h = m.inlineSize, y = m.blockSize
            } else h = l.offsetWidth, y = l.offsetHeight;
            s({
               width: h,
               height: y
            })
         });
         return u.observe(l, {
            box: "border-box"
         }), () => u.unobserve(l)
      } else s(void 0)
   }, [l]), i
}
var Gy = "Popper",
   [Vy, Qy] = es(Gy),
   [XE, Xy] = Vy(Gy),
   Zy = "PopperAnchor",
   Ky = w.forwardRef((l, i) => {
      const {
         __scopePopper: s,
         virtualRef: u,
         ...c
      } = l, f = Xy(Zy, s), h = w.useRef(null), y = Be(i, h), v = w.useRef(null);
      return w.useEffect(() => {
         const m = v.current;
         v.current = u?.current || h.current, m !== v.current && f.onAnchorChange(v.current)
      }), u ? null : g.jsx(fe.div, {
         ...c,
         ref: y
      })
   });
Ky.displayName = Zy;
var Sc = "PopperContent",
   [Ow, Rw] = Vy(Sc),
   Py = w.forwardRef((l, i) => {
      const {
         __scopePopper: s,
         side: u = "bottom",
         sideOffset: c = 0,
         align: f = "center",
         alignOffset: h = 0,
         arrowPadding: y = 0,
         avoidCollisions: v = !0,
         collisionBoundary: m = [],
         collisionPadding: b = 0,
         sticky: E = "partial",
         hideWhenDetached: A = !1,
         updatePositionStrategy: D = "optimized",
         onPlaced: z,
         ...R
      } = l, N = Xy(Sc, s), [B, X] = w.useState(null), V = Be(i, zt => X(zt)), [k, H] = w.useState(null), P = Aw(k), $ = P?.width ?? 0, K = P?.height ?? 0, ut = u + (f !== "center" ? "-" + f : ""), vt = typeof b == "number" ? b : {
         top: 0,
         right: 0,
         bottom: 0,
         left: 0,
         ...b
      }, xt = Array.isArray(m) ? m : [m], dt = xt.length > 0, wt = {
         padding: vt,
         boundary: xt.filter(Cw),
         altBoundary: dt
      }, {
         refs: W,
         floatingStyles: ft,
         placement: M,
         isPositioned: Q,
         middlewareData: Z
      } = mw({
         strategy: "fixed",
         placement: ut,
         whileElementsMounted: (...zt) => aw(...zt, {
            animationFrame: D === "always"
         }),
         elements: {
            reference: N.anchor
         },
         middleware: [yw({
            mainAxis: c + K,
            alignmentAxis: h
         }), v && vw({
            mainAxis: !0,
            crossAxis: !1,
            limiter: E === "partial" ? gw() : void 0,
            ...wt
         }), v && bw({
            ...wt
         }), xw({
            ...wt,
            apply: ({
               elements: zt,
               rects: At,
               availableWidth: Ot,
               availableHeight: bn
            }) => {
               const {
                  width: Ue,
                  height: Ve
               } = At.reference, Te = zt.floating.style;
               Te.setProperty("--radix-popper-available-width", `${Ot}px`), Te.setProperty("--radix-popper-available-height", `${bn}px`), Te.setProperty("--radix-popper-anchor-width", `${Ue}px`), Te.setProperty("--radix-popper-anchor-height", `${Ve}px`)
            }
         }), k && ww({
            element: k,
            padding: y
         }), Mw({
            arrowWidth: $,
            arrowHeight: K
         }), A && Sw({
            strategy: "referenceHidden",
            ...wt
         })]
      }), [it, x] = $y(M), G = Pn(z);
      Jn(() => {
         Q && G?.()
      }, [Q, G]);
      const F = Z.arrow?.x,
         J = Z.arrow?.y,
         lt = Z.arrow?.centerOffset !== 0,
         [st, nt] = w.useState();
      return Jn(() => {
         B && nt(window.getComputedStyle(B).zIndex)
      }, [B]), g.jsx("div", {
         ref: W.setFloating,
         "data-radix-popper-content-wrapper": "",
         style: {
            ...ft,
            transform: Q ? ft.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: st,
            "--radix-popper-transform-origin": [Z.transformOrigin?.x, Z.transformOrigin?.y].join(" "),
            ...Z.hide?.referenceHidden && {
               visibility: "hidden",
               pointerEvents: "none"
            }
         },
         dir: l.dir,
         children: g.jsx(Ow, {
            scope: s,
            placedSide: it,
            onArrowChange: H,
            arrowX: F,
            arrowY: J,
            shouldHideArrow: lt,
            children: g.jsx(fe.div, {
               "data-side": it,
               "data-align": x,
               ...R,
               ref: V,
               style: {
                  ...R.style,
                  animation: Q ? void 0 : "none"
               }
            })
         })
      })
   });
Py.displayName = Sc;
var Jy = "PopperArrow",
   Nw = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
   },
   Fy = w.forwardRef(function (i, s) {
      const {
         __scopePopper: u,
         ...c
      } = i, f = Rw(Jy, u), h = Nw[f.placedSide];
      return g.jsx("span", {
         ref: f.onArrowChange,
         style: {
            position: "absolute",
            left: f.arrowX,
            top: f.arrowY,
            [h]: 0,
            transformOrigin: {
               top: "",
               right: "0 0",
               bottom: "center 0",
               left: "100% 0"
            } [f.placedSide],
            transform: {
               top: "translateY(100%)",
               right: "translateY(50%) rotate(90deg) translateX(-50%)",
               bottom: "rotate(180deg)",
               left: "translateY(50%) rotate(-90deg) translateX(50%)"
            } [f.placedSide],
            visibility: f.shouldHideArrow ? "hidden" : void 0
         },
         children: g.jsx(Tw, {
            ...c,
            ref: s,
            style: {
               ...c.style,
               display: "block"
            }
         })
      })
   });
Fy.displayName = Jy;

function Cw(l) {
   return l !== null
}
var Mw = l => ({
   name: "transformOrigin",
   options: l,
   fn(i) {
      const {
         placement: s,
         rects: u,
         middlewareData: c
      } = i, h = c.arrow?.centerOffset !== 0, y = h ? 0 : l.arrowWidth, v = h ? 0 : l.arrowHeight, [m, b] = $y(s), E = {
         start: "0%",
         center: "50%",
         end: "100%"
      } [b], A = (c.arrow?.x ?? 0) + y / 2, D = (c.arrow?.y ?? 0) + v / 2;
      let z = "",
         R = "";
      return m === "bottom" ? (z = h ? E : `${A}px`, R = `${-v}px`) : m === "top" ? (z = h ? E : `${A}px`, R = `${u.floating.height+v}px`) : m === "right" ? (z = `${-v}px`, R = h ? E : `${D}px`) : m === "left" && (z = `${u.floating.width+v}px`, R = h ? E : `${D}px`), {
         data: {
            x: z,
            y: R
         }
      }
   }
});

function $y(l) {
   const [i, s = "center"] = l.split("-");
   return [i, s]
}
var _w = Ky,
   Dw = Py,
   jw = Fy,
   [us] = es("Tooltip", [Qy]),
   wc = Qy(),
   Wy = "TooltipProvider",
   zw = 700,
   pp = "tooltip.open",
   [Uw, Iy] = us(Wy),
   tv = l => {
      const {
         __scopeTooltip: i,
         delayDuration: s = zw,
         skipDelayDuration: u = 300,
         disableHoverableContent: c = !1,
         children: f
      } = l, h = w.useRef(!0), y = w.useRef(!1), v = w.useRef(0);
      return w.useEffect(() => {
         const m = v.current;
         return () => window.clearTimeout(m)
      }, []), g.jsx(Uw, {
         scope: i,
         isOpenDelayedRef: h,
         delayDuration: s,
         onOpen: w.useCallback(() => {
            window.clearTimeout(v.current), h.current = !1
         }, []),
         onClose: w.useCallback(() => {
            window.clearTimeout(v.current), v.current = window.setTimeout(() => h.current = !0, u)
         }, [u]),
         isPointerInTransitRef: y,
         onPointerInTransitChange: w.useCallback(m => {
            y.current = m
         }, []),
         disableHoverableContent: c,
         children: f
      })
   };
tv.displayName = Wy;
var ev = "Tooltip",
   [ZE, xi] = us(ev),
   Wu = "TooltipTrigger",
   Hw = w.forwardRef((l, i) => {
      const {
         __scopeTooltip: s,
         ...u
      } = l, c = xi(Wu, s), f = Iy(Wu, s), h = wc(s), y = w.useRef(null), v = Be(i, y, c.onTriggerChange), m = w.useRef(!1), b = w.useRef(!1), E = w.useCallback(() => m.current = !1, []);
      return w.useEffect(() => () => document.removeEventListener("pointerup", E), [E]), g.jsx(_w, {
         asChild: !0,
         ...h,
         children: g.jsx(fe.button, {
            "aria-describedby": c.open ? c.contentId : void 0,
            "data-state": c.stateAttribute,
            ...u,
            ref: v,
            onPointerMove: Zt(l.onPointerMove, A => {
               A.pointerType !== "touch" && !b.current && !f.isPointerInTransitRef.current && (c.onTriggerEnter(), b.current = !0)
            }),
            onPointerLeave: Zt(l.onPointerLeave, () => {
               c.onTriggerLeave(), b.current = !1
            }),
            onPointerDown: Zt(l.onPointerDown, () => {
               c.open && c.onClose(), m.current = !0, document.addEventListener("pointerup", E, {
                  once: !0
               })
            }),
            onFocus: Zt(l.onFocus, () => {
               m.current || c.onOpen()
            }),
            onBlur: Zt(l.onBlur, c.onClose),
            onClick: Zt(l.onClick, c.onClose)
         })
      })
   });
Hw.displayName = Wu;
var Ec = "TooltipPortal",
   [Lw, kw] = us(Ec, {
      forceMount: void 0
   }),
   nv = l => {
      const {
         __scopeTooltip: i,
         forceMount: s,
         children: u,
         container: c
      } = l, f = xi(Ec, i);
      return g.jsx(Lw, {
         scope: i,
         forceMount: s,
         children: g.jsx(ns, {
            present: s || f.open,
            children: g.jsx(oc, {
               asChild: !0,
               container: c,
               children: u
            })
         })
      })
   };
nv.displayName = Ec;
var ca = "TooltipContent",
   lv = w.forwardRef((l, i) => {
      const s = kw(ca, l.__scopeTooltip),
         {
            forceMount: u = s.forceMount,
            side: c = "top",
            ...f
         } = l,
         h = xi(ca, l.__scopeTooltip);
      return g.jsx(ns, {
         present: u || h.open,
         children: h.disableHoverableContent ? g.jsx(av, {
            side: c,
            ...f,
            ref: i
         }) : g.jsx(qw, {
            side: c,
            ...f,
            ref: i
         })
      })
   }),
   qw = w.forwardRef((l, i) => {
      const s = xi(ca, l.__scopeTooltip),
         u = Iy(ca, l.__scopeTooltip),
         c = w.useRef(null),
         f = Be(i, c),
         [h, y] = w.useState(null),
         {
            trigger: v,
            onClose: m
         } = s,
         b = c.current,
         {
            onPointerInTransitChange: E
         } = u,
         A = w.useCallback(() => {
            y(null), E(!1)
         }, [E]),
         D = w.useCallback((z, R) => {
            const N = z.currentTarget,
               B = {
                  x: z.clientX,
                  y: z.clientY
               },
               X = Qw(B, N.getBoundingClientRect()),
               V = Xw(B, X),
               k = Zw(R.getBoundingClientRect()),
               H = Pw([...V, ...k]);
            y(H), E(!0)
         }, [E]);
      return w.useEffect(() => () => A(), [A]), w.useEffect(() => {
         if (v && b) {
            const z = N => D(N, b),
               R = N => D(N, v);
            return v.addEventListener("pointerleave", z), b.addEventListener("pointerleave", R), () => {
               v.removeEventListener("pointerleave", z), b.removeEventListener("pointerleave", R)
            }
         }
      }, [v, b, D, A]), w.useEffect(() => {
         if (h) {
            const z = R => {
               const N = R.target,
                  B = {
                     x: R.clientX,
                     y: R.clientY
                  },
                  X = v?.contains(N) || b?.contains(N),
                  V = !Kw(B, h);
               X ? A() : V && (A(), m())
            };
            return document.addEventListener("pointermove", z), () => document.removeEventListener("pointermove", z)
         }
      }, [v, b, h, m, A]), g.jsx(av, {
         ...l,
         ref: f
      })
   }),
   [Bw, Yw] = us(ev, {
      isInside: !1
   }),
   Gw = nx("TooltipContent"),
   av = w.forwardRef((l, i) => {
      const {
         __scopeTooltip: s,
         children: u,
         "aria-label": c,
         onEscapeKeyDown: f,
         onPointerDownOutside: h,
         ...y
      } = l, v = xi(ca, s), m = wc(s), {
         onClose: b
      } = v;
      return w.useEffect(() => (document.addEventListener(pp, b), () => document.removeEventListener(pp, b)), [b]), w.useEffect(() => {
         if (v.trigger) {
            const E = A => {
               A.target?.contains(v.trigger) && b()
            };
            return window.addEventListener("scroll", E, {
               capture: !0
            }), () => window.removeEventListener("scroll", E, {
               capture: !0
            })
         }
      }, [v.trigger, b]), g.jsx(sc, {
         asChild: !0,
         disableOutsidePointerEvents: !1,
         onEscapeKeyDown: f,
         onPointerDownOutside: h,
         onFocusOutside: E => E.preventDefault(),
         onDismiss: b,
         children: g.jsxs(Dw, {
            "data-state": v.stateAttribute,
            ...m,
            ...y,
            ref: i,
            style: {
               ...y.style,
               "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
               "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
               "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
               "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
               "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [g.jsx(Gw, {
               children: u
            }), g.jsx(Bw, {
               scope: s,
               isInside: !0,
               children: g.jsx(Rx, {
                  id: v.contentId,
                  role: "tooltip",
                  children: c || u
               })
            })]
         })
      })
   });
lv.displayName = ca;
var iv = "TooltipArrow",
   Vw = w.forwardRef((l, i) => {
      const {
         __scopeTooltip: s,
         ...u
      } = l, c = wc(s);
      return Yw(iv, s).isInside ? null : g.jsx(jw, {
         ...c,
         ...u,
         ref: i
      })
   });
Vw.displayName = iv;

function Qw(l, i) {
   const s = Math.abs(i.top - l.y),
      u = Math.abs(i.bottom - l.y),
      c = Math.abs(i.right - l.x),
      f = Math.abs(i.left - l.x);
   switch (Math.min(s, u, c, f)) {
      case f:
         return "left";
      case c:
         return "right";
      case s:
         return "top";
      case u:
         return "bottom";
      default:
         throw new Error("unreachable")
   }
}

function Xw(l, i, s = 5) {
   const u = [];
   switch (i) {
      case "top":
         u.push({
            x: l.x - s,
            y: l.y + s
         }, {
            x: l.x + s,
            y: l.y + s
         });
         break;
      case "bottom":
         u.push({
            x: l.x - s,
            y: l.y - s
         }, {
            x: l.x + s,
            y: l.y - s
         });
         break;
      case "left":
         u.push({
            x: l.x + s,
            y: l.y - s
         }, {
            x: l.x + s,
            y: l.y + s
         });
         break;
      case "right":
         u.push({
            x: l.x - s,
            y: l.y - s
         }, {
            x: l.x - s,
            y: l.y + s
         });
         break
   }
   return u
}

function Zw(l) {
   const {
      top: i,
      right: s,
      bottom: u,
      left: c
   } = l;
   return [{
      x: c,
      y: i
   }, {
      x: s,
      y: i
   }, {
      x: s,
      y: u
   }, {
      x: c,
      y: u
   }]
}

function Kw(l, i) {
   const {
      x: s,
      y: u
   } = l;
   let c = !1;
   for (let f = 0, h = i.length - 1; f < i.length; h = f++) {
      const y = i[f],
         v = i[h],
         m = y.x,
         b = y.y,
         E = v.x,
         A = v.y;
      b > u != A > u && s < (E - m) * (u - b) / (A - b) + m && (c = !c)
   }
   return c
}

function Pw(l) {
   const i = l.slice();
   return i.sort((s, u) => s.x < u.x ? -1 : s.x > u.x ? 1 : s.y < u.y ? -1 : s.y > u.y ? 1 : 0), Jw(i)
}

function Jw(l) {
   if (l.length <= 1) return l.slice();
   const i = [];
   for (let u = 0; u < l.length; u++) {
      const c = l[u];
      for (; i.length >= 2;) {
         const f = i[i.length - 1],
            h = i[i.length - 2];
         if ((f.x - h.x) * (c.y - h.y) >= (f.y - h.y) * (c.x - h.x)) i.pop();
         else break
      }
      i.push(c)
   }
   i.pop();
   const s = [];
   for (let u = l.length - 1; u >= 0; u--) {
      const c = l[u];
      for (; s.length >= 2;) {
         const f = s[s.length - 1],
            h = s[s.length - 2];
         if ((f.x - h.x) * (c.y - h.y) >= (f.y - h.y) * (c.x - h.x)) s.pop();
         else break
      }
      s.push(c)
   }
   return s.pop(), i.length === 1 && s.length === 1 && i[0].x === s[0].x && i[0].y === s[0].y ? i : i.concat(s)
}
var Fw = tv,
   $w = nv,
   rv = lv;
const Ww = Fw,
   Iw = w.forwardRef(({
      className: l,
      sideOffset: i = 4,
      ...s
   }, u) => g.jsx($w, {
      children: g.jsx(rv, {
         ref: u,
         sideOffset: i,
         className: de("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", l),
         ...s
      })
   }));
Iw.displayName = rv.displayName;
const sv = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx("div", {
   ref: s,
   className: de("rounded-xl border bg-card text-card-foreground shadow", l),
   ...i
}));
sv.displayName = "Card";
const tE = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx("div", {
   ref: s,
   className: de("flex flex-col space-y-1.5 p-6", l),
   ...i
}));
tE.displayName = "CardHeader";
const eE = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx("div", {
   ref: s,
   className: de("font-semibold leading-none tracking-tight", l),
   ...i
}));
eE.displayName = "CardTitle";
const nE = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx("div", {
   ref: s,
   className: de("text-sm text-muted-foreground", l),
   ...i
}));
nE.displayName = "CardDescription";
const ov = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx("div", {
   ref: s,
   className: de("p-6 pt-0", l),
   ...i
}));
ov.displayName = "CardContent";
const lE = w.forwardRef(({
   className: l,
   ...i
}, s) => g.jsx("div", {
   ref: s,
   className: de("flex items-center p-6 pt-0", l),
   ...i
}));
lE.displayName = "CardFooter";

function aE() {
   return g.jsx("div", {
      className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
      children: g.jsx(sv, {
         className: "w-full max-w-md mx-4",
         children: g.jsxs(ov, {
            className: "pt-6",
            children: [g.jsxs("div", {
               className: "flex mb-4 gap-2",
               children: [g.jsx(cy, {
                  className: "h-8 w-8 text-red-500"
               }), g.jsx("h1", {
                  className: "text-2xl font-bold text-gray-900",
                  children: "404 Page Not Found"
               })]
            }), g.jsx("p", {
               className: "mt-4 text-sm text-gray-600",
               children: "Did you forget to add the page to the router?"
            })]
         })
      })
   })
}
var iE = Symbol.for("react.lazy"),
   Fr = tc[" use ".trim().toString()];

function rE(l) {
   return typeof l == "object" && l !== null && "then" in l
}

function uv(l) {
   return l != null && typeof l == "object" && "$$typeof" in l && l.$$typeof === iE && "_payload" in l && rE(l._payload)
}

function sE(l) {
   const i = uE(l),
      s = w.forwardRef((u, c) => {
         let {
            children: f,
            ...h
         } = u;
         uv(f) && typeof Fr == "function" && (f = Fr(f._payload));
         const y = w.Children.toArray(f),
            v = y.find(fE);
         if (v) {
            const m = v.props.children,
               b = y.map(E => E === v ? w.Children.count(m) > 1 ? w.Children.only(null) : w.isValidElement(m) ? m.props.children : null : E);
            return g.jsx(i, {
               ...h,
               ref: c,
               children: w.isValidElement(m) ? w.cloneElement(m, void 0, b) : null
            })
         }
         return g.jsx(i, {
            ...h,
            ref: c,
            children: f
         })
      });
   return s.displayName = `${l}.Slot`, s
}
var oE = sE("Slot");

function uE(l) {
   const i = w.forwardRef((s, u) => {
      let {
         children: c,
         ...f
      } = s;
      if (uv(c) && typeof Fr == "function" && (c = Fr(c._payload)), w.isValidElement(c)) {
         const h = hE(c),
            y = dE(f, c.props);
         return c.type !== w.Fragment && (y.ref = u ? rc(u, h) : h), w.cloneElement(c, y)
      }
      return w.Children.count(c) > 1 ? w.Children.only(null) : null
   });
   return i.displayName = `${l}.SlotClone`, i
}
var cE = Symbol("radix.slottable");

function fE(l) {
   return w.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === cE
}

function dE(l, i) {
   const s = {
      ...i
   };
   for (const u in i) {
      const c = l[u],
         f = i[u];
      /^on[A-Z]/.test(u) ? c && f ? s[u] = (...y) => {
         const v = f(...y);
         return c(...y), v
      } : c && (s[u] = c) : u === "style" ? s[u] = {
         ...c,
         ...f
      } : u === "className" && (s[u] = [c, f].filter(Boolean).join(" "))
   }
   return {
      ...l,
      ...s
   }
}

function hE(l) {
   let i = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
      s = i && "isReactWarning" in i && i.isReactWarning;
   return s ? l.ref : (i = Object.getOwnPropertyDescriptor(l, "ref")?.get, s = i && "isReactWarning" in i && i.isReactWarning, s ? l.props.ref : l.props.ref || l.ref)
}
const mE = oy("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
      variants: {
         variant: {
            default: "bg-primary text-primary-foreground border border-primary-border",
            destructive: "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
            outline: " border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",
            secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
            ghost: "border border-transparent",
            link: "text-primary underline-offset-4 hover:underline"
         },
         size: {
            default: "min-h-9 px-4 py-2",
            sm: "min-h-8 rounded-md px-3 text-xs",
            lg: "min-h-10 rounded-md px-8",
            icon: "h-9 w-9"
         }
      },
      defaultVariants: {
         variant: "default",
         size: "default"
      }
   }),
   qe = w.forwardRef(({
      className: l,
      variant: i,
      size: s,
      asChild: u = !1,
      ...c
   }, f) => {
      const h = u ? oE : "button";
      return g.jsx(h, {
         className: de(mE({
            variant: i,
            size: s,
            className: l
         })),
         ref: f,
         ...c
      })
   });
qe.displayName = "Button";

function pE() {
   const [l, i] = w.useState(!1), [s, u] = w.useState(!1);
   w.useEffect(() => {
      const f = () => {
         i(window.scrollY > 20)
      };
      return window.addEventListener("scroll", f), () => window.removeEventListener("scroll", f)
   }, []);
   const c = f => {
      u(!1);
      const h = document.getElementById(f);
      h && h.scrollIntoView({
         behavior: "smooth"
      })
   };
   return g.jsxs("header", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${l?"bg-[#030818]/80 backdrop-blur-md border-b border-white/10":"bg-transparent"}`,
      children: [g.jsxs("div", {
         className: "container mx-auto px-4 md:px-6 h-20 flex items-center justify-between",
         children: [g.jsxs(ku, {
            href: "/",
            className: "flex items-center gap-2 group cursor-pointer",
            onClick: f => {
               f.preventDefault(), c("hero")
            },
            children: [g.jsx(oa, {
               className: "w-8 h-8 text-primary group-hover:text-glow-cyan transition-all"
            }), g.jsx("span", {
               className: "font-display font-bold text-2xl tracking-wider text-white",
               children: "OrVex"
            })]
         }), g.jsxs("nav", {
            className: "hidden md:flex items-center gap-8",
            children: [g.jsx("button", {
               onClick: () => c("how-it-works"),
               className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
               children: "How It Works"
            }), g.jsx("button", {
               onClick: () => c("sandbox"),
               className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
               children: "Sandbox"
            }), g.jsx("button", {
               onClick: () => c("quiz"),
               className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
               children: "Quiz"
            }), g.jsxs("div", {
               className: "flex items-center gap-4 ml-4",
               children: [g.jsx(qe, {
                  variant: "ghost",
                  className: "text-white hover:text-primary",
                  children: "Log In"
               }), g.jsx(qe, {
                  className: "bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-background glow-cyan transition-all",
                  children: "Sign Up"
               })]
            })]
         }), g.jsx("button", {
            className: "md:hidden text-white p-2",
            onClick: () => u(!s),
            children: s ? g.jsx(dc, {}) : g.jsx(h1, {})
         })]
      }), s && g.jsxs("div", {
         className: "md:hidden absolute top-20 left-0 right-0 glass-panel border-b border-white/10 p-4 flex flex-col gap-4",
         children: [g.jsx("button", {
            onClick: () => c("how-it-works"),
            className: "text-left py-2 px-4 text-white hover:bg-white/5 rounded",
            children: "How It Works"
         }), g.jsx("button", {
            onClick: () => c("sandbox"),
            className: "text-left py-2 px-4 text-white hover:bg-white/5 rounded",
            children: "Sandbox"
         }), g.jsx("button", {
            onClick: () => c("quiz"),
            className: "text-left py-2 px-4 text-white hover:bg-white/5 rounded",
            children: "Quiz"
         }), g.jsxs("div", {
            className: "flex flex-col gap-2 pt-4 border-t border-white/10",
            children: [g.jsx(qe, {
               variant: "ghost",
               className: "w-full justify-start text-white",
               children: "Log In"
            }), g.jsx(qe, {
               className: "w-full bg-primary/10 border border-primary text-primary glow-cyan",
               children: "Sign Up"
            })]
         })]
      })]
   })
}

function yE() {
   const l = () => {
         document.getElementById("sandbox")?.scrollIntoView({
            behavior: "smooth"
         })
      },
      i = () => {
         document.getElementById("how-it-works")?.scrollIntoView({
            behavior: "smooth"
         })
      };
   return g.jsx("section", {
      id: "hero",
      className: "relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden",
      children: g.jsxs("div", {
         className: "container mx-auto px-4 md:px-6 z-10 grid lg:grid-cols-2 gap-12 items-center",
         children: [g.jsxs("div", {
            className: "flex flex-col gap-6 max-w-2xl",
            children: [g.jsxs("div", {
               className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono font-medium w-fit",
               children: [g.jsx("span", {
                  className: "w-2 h-2 rounded-full bg-primary animate-pulse"
               }), "System Online: Operational"]
            }), g.jsxs("h1", {
               className: "text-5xl md:text-7xl font-bold font-display leading-tight",
               children: [g.jsx("span", {
                  className: "block text-white",
                  children: "Truth matters."
               }), g.jsx("span", {
                  className: "block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow-cyan",
                  children: "Verify reality."
               })]
            }), g.jsx("p", {
               className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl",
               children: "AI-Powered Deepfake Detection. We analyze visual physics, facial expressions, shadow patterns, and audio-lip movement to uncover synthetic media in real-time."
            }), g.jsxs("div", {
               className: "flex flex-wrap items-center gap-4 mt-4",
               children: [g.jsxs("button", {
                  onClick: l,
                  className: "px-8 py-4 bg-primary text-background font-bold rounded-md glow-cyan hover:bg-primary/90 hover:scale-105 transition-all flex items-center gap-2",
                  children: [g.jsx(oa, {
                     className: "w-5 h-5"
                  }), "Start Verification"]
               }), g.jsx("button", {
                  onClick: i,
                  className: "px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-all",
                  children: "Learn How It Works"
               })]
            })]
         }), g.jsxs("div", {
            className: "relative hidden lg:flex justify-center items-center h-[500px]",
            children: [g.jsx("div", {
               className: "absolute w-96 h-96 border border-primary/20 rounded-full animate-pulse-ring"
            }), g.jsx("div", {
               className: "absolute w-80 h-80 border border-secondary/30 rounded-full animate-spin-slow border-t-primary/60 border-b-primary/60"
            }), g.jsx("div", {
               className: "absolute w-64 h-64 border border-primary/40 rounded-full animate-spin-reverse border-l-secondary border-r-secondary"
            }), g.jsx("div", {
               className: "absolute w-32 h-32 rounded-full bg-primary/20 glow-cyan blur-xl"
            }), g.jsx("div", {
               className: "relative z-10 w-24 h-24 glass-panel rounded-full flex items-center justify-center border border-primary/50 glow-cyan",
               children: g.jsx(oa, {
                  className: "w-10 h-10 text-primary"
               })
            }), g.jsx("div", {
               className: "absolute top-10 left-10 glass-panel px-3 py-1 rounded text-xs font-mono text-primary border border-primary/30",
               children: "FRAME_ANALYSIS: ACTIVE"
            }), g.jsx("div", {
               className: "absolute bottom-20 right-10 glass-panel px-3 py-1 rounded text-xs font-mono text-secondary border border-secondary/30",
               children: "PHYSICS_ENGINE: NOMINAL"
            })]
         })]
      })
   })
}

function vE() {
   const l = w.useRef(null);
   w.useEffect(() => {
      const s = new IntersectionObserver(c => {
         c.forEach(f => {
            f.isIntersecting && f.target.classList.add("is-visible")
         })
      }, {
         threshold: .1
      });
      return document.querySelectorAll(".how-it-works-card").forEach(c => s.observe(c)), () => s.disconnect()
   }, []);
   const i = [{
      icon: u1,
      title: "Upload Media",
      desc: "Provide the suspicious image or video snippet through our secure, encrypted sandbox interface."
   }, {
      icon: f1,
      title: "AI Deep Analysis",
      desc: "Our neural networks break down the file, analyzing metadata, compression artifacts, and pixel inconsistencies."
   }, {
      icon: g1,
      title: "Authenticity Score",
      desc: "Receive a real-time confidence rating measuring the probability of synthetic manipulation."
   }, {
      icon: w1,
      title: "Expert Verification",
      desc: "Flagged content is escalated to our human security team for final manual verification and review."
   }, {
      icon: p1,
      title: "Continuous Learning",
      desc: "Every scan feeds back into our threat-detection model, improving accuracy for future deepfakes."
   }];
   return g.jsx("section", {
      id: "how-it-works",
      className: "py-24 relative z-10",
      ref: l,
      children: g.jsxs("div", {
         className: "container mx-auto px-4 md:px-6",
         children: [g.jsxs("div", {
            className: "text-center mb-16",
            children: [g.jsx("h2", {
               className: "text-3xl md:text-5xl font-bold font-display mb-4 text-white",
               children: "How It Works"
            }), g.jsx("p", {
               className: "text-muted-foreground max-w-2xl mx-auto",
               children: "Our multi-layered detection pipeline combines advanced machine learning with rigorous human oversight."
            })]
         }), g.jsx("div", {
            className: "flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2",
            children: i.map((s, u) => g.jsxs("div", {
               className: "flex flex-col lg:flex-row items-center w-full lg:w-auto",
               children: [g.jsxs("div", {
                  className: "how-it-works-card fade-in-section glass-panel p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors flex-1 w-full max-w-sm",
                  style: {
                     transitionDelay: `${u*150}ms`
                  },
                  children: [g.jsx("div", {
                     className: "w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 text-primary",
                     children: g.jsx(s.icon, {
                        className: "w-6 h-6"
                     })
                  }), g.jsxs("div", {
                     className: "text-sm font-mono text-primary mb-2",
                     children: ["STEP 0", u + 1]
                  }), g.jsx("h3", {
                     className: "text-xl font-bold text-white mb-2",
                     children: s.title
                  }), g.jsx("p", {
                     className: "text-sm text-muted-foreground",
                     children: s.desc
                  })]
               }), u < i.length - 1 && g.jsx("div", {
                  className: "hidden lg:flex items-center justify-center px-2 text-muted-foreground opacity-50",
                  children: g.jsx(Wx, {
                     className: "w-6 h-6"
                  })
               }), u < i.length - 1 && g.jsx("div", {
                  className: "lg:hidden h-8 border-l border-dashed border-white/20 my-2"
               })]
            }, u))
         })]
      })
   })
}
const gE = new Set([204, 205, 304]),
   bE = "application/json, application/problem+json";

function cv(l) {
   return typeof Request < "u" && l instanceof Request
}

function xE(l, i) {
   return i ? i.toUpperCase() : cv(l) ? l.method.toUpperCase() : "GET"
}

function SE(l) {
   return typeof URL < "u" && l instanceof URL
}

function wE(l) {
   return typeof l == "string" ? l : SE(l) ? l.toString() : l.url
}

function EE(...l) {
   const i = new Headers;
   for (const s of l) s && new Headers(s).forEach((u, c) => {
      i.set(c, u)
   });
   return i
}

function fv(l) {
   const i = l.get("content-type");
   return i ? i.split(";", 1)[0].trim().toLowerCase() : null
}

function Iu(l) {
   return l === "application/json" || !!l?.endsWith("+json")
}

function dv(l) {
   return !!(l && (l.startsWith("text/") || l === "application/xml" || l === "text/xml" || l.endsWith("+xml") || l === "application/x-www-form-urlencoded"))
}

function hv(l, i) {
   return !!(i === "HEAD" || gE.has(l.status) || l.headers.get("content-length") === "0" || l.body === null)
}

function mv(l) {
   return l.charCodeAt(0) === 65279 ? l.slice(1) : l
}

function pv(l) {
   const i = l.trimStart();
   return i.startsWith("{") || i.startsWith("[")
}

function hi(l, i) {
   if (!l || typeof l != "object") return;
   const s = l[i];
   if (typeof s != "string") return;
   const u = s.trim();
   return u === "" ? void 0 : u
}

function TE(l, i = 300) {
   return l.length > i ? `${l.slice(0,i-1)}…` : l
}

function AE(l, i) {
   const s = `HTTP ${l.status} ${l.statusText}`;
   if (typeof i == "string") {
      const h = i.trim();
      return h ? `${s}: ${TE(h)}` : s
   }
   const u = hi(i, "title"),
      c = hi(i, "detail"),
      f = hi(i, "message") ?? hi(i, "error_description") ?? hi(i, "error");
   return u && c ? `${s}: ${u} — ${c}` : c ? `${s}: ${c}` : f ? `${s}: ${f}` : u ? `${s}: ${u}` : s
}
class OE extends Error {
   name = "ApiError";
   status;
   statusText;
   data;
   headers;
   response;
   method;
   url;
   constructor(i, s, u) {
      super(AE(i, s)), Object.setPrototypeOf(this, new.target.prototype), this.status = i.status, this.statusText = i.statusText, this.data = s, this.headers = i.headers, this.response = i, this.method = u.method, this.url = i.url || u.url
   }
}
class RE extends Error {
   name = "ResponseParseError";
   status;
   statusText;
   headers;
   response;
   method;
   url;
   rawBody;
   cause;
   constructor(i, s, u, c) {
      super(`Failed to parse response from ${c.method} ${i.url||c.url} (${i.status} ${i.statusText}) as JSON`), Object.setPrototypeOf(this, new.target.prototype), this.status = i.status, this.statusText = i.statusText, this.headers = i.headers, this.response = i, this.method = c.method, this.url = i.url || c.url, this.rawBody = s, this.cause = u
   }
}
async function NE(l, i) {
   const s = await l.text(),
      u = mv(s);
   if (u.trim() === "") return null;
   try {
      return JSON.parse(u)
   } catch (c) {
      throw new RE(l, s, c, i)
   }
}
async function CE(l, i) {
   if (hv(l, i)) return null;
   const s = fv(l.headers);
   if (s && !Iu(s) && !dv(s)) return typeof l.blob == "function" ? l.blob() : l.text();
   const u = await l.text(),
      c = mv(u);
   if (c.trim() === "") return null;
   if (Iu(s) || pv(c)) try {
      return JSON.parse(c)
   } catch {
      return u
   }
   return u
}

function ME(l) {
   const i = fv(l.headers);
   return Iu(i) ? "json" : dv(i) || i == null ? "text" : "blob"
}
async function _E(l, i, s) {
   if (hv(l, s.method)) return null;
   switch (i === "auto" ? ME(l) : i) {
      case "json":
         return NE(l, s);
      case "text": {
         const c = await l.text();
         return c === "" ? null : c
      }
      case "blob":
         if (typeof l.blob != "function") throw new TypeError('Blob responses are not supported in this runtime. Use responseType "json" or "text" instead.');
         return l.blob()
   }
}
async function DE(l, i = {}) {
   l = l;
   const {
      responseType: s = "auto",
      headers: u,
      ...c
   } = i, f = xE(l, c.method);
   if (c.body != null && (f === "GET" || f === "HEAD")) throw new TypeError(`customFetch: ${f} requests cannot have a body.`);
   const h = EE(cv(l) ? l.headers : void 0, u);
   typeof c.body == "string" && !h.has("content-type") && pv(c.body) && h.set("content-type", "application/json"), s === "json" && !h.has("accept") && h.set("accept", bE);
   const y = {
         method: f,
         url: wE(l)
      },
      v = await fetch(l, {
         ...c,
         method: f,
         headers: h
      });
   if (!v.ok) {
      const m = await CE(v, f);
      throw new OE(v, m, y)
   }
   return await _E(v, s, y)
}
const jE = () => "/api/analyze",
   zE = async (l, i) => {
      const s = new FormData;
      return s.append("file", l.file), DE(jE(), {
         ...i,
         method: "POST",
         body: s
      })
   }, UE = l => {
      const i = ["analyzeMedia"],
         {
            mutation: s,
            request: u
         } = {
            mutation: {
               mutationKey: i
            },
            request: void 0
         };
      return {
         mutationFn: f => {
            const {
               data: h
            } = f ?? {};
            return zE(h, u)
         },
         ...s
      }
   }, HE = l => Z0(UE());

function LE() {
   const [l, i] = w.useState(!1), [s, u] = w.useState(null), [c, f] = w.useState(null), h = w.useRef(null), y = w.useRef(null), [v, m] = w.useState([]), b = HE();
   w.useEffect(() => {
      let k = null;
      return l ? navigator.mediaDevices.getUserMedia({
         video: !0
      }).then(H => {
         k = H, h.current && (h.current.srcObject = H), f(null), u(null)
      }).catch(H => {
         console.error("Error accessing webcam", H), i(!1), A("ERROR: Webcam access denied or unavailable.")
      }) : h.current && h.current.srcObject && (h.current.srcObject.getTracks().forEach(P => P.stop()), h.current.srcObject = null), () => {
         k && k.getTracks().forEach(H => H.stop())
      }
   }, [l]);
   const E = k => {
         const H = k.target.files?.[0];
         H && (u(H), f(URL.createObjectURL(H)), i(!1), A(`FILE LOADED: ${H.name} (${Math.round(H.size/1024)} KB)`))
      },
      A = k => {
         const H = new Date().toISOString().split("T")[1].substring(0, 12);
         m(P => [...P, `[${H}] > ${k}`])
      },
      D = async () => {
         if (!h.current) return null;
         const k = document.createElement("canvas");
         k.width = h.current.videoWidth, k.height = h.current.videoHeight;
         const H = k.getContext("2d");
         return H ? (H.drawImage(h.current, 0, 0, k.width, k.height), new Promise(P => k.toBlob(P, "image/jpeg"))) : null
      }, z = async () => {
         m([]), A("INITIALIZING SCAN...");
         let k = null;
         if (s) k = s;
         else if (l) A("CAPTURING FRAME FROM WEBCAM..."), k = await D();
         else {
            A("ERROR: NO MEDIA SELECTED. PLEASE UPLOAD A FILE OR ENABLE WEBCAM.");
            return
         }
         if (!k) {
            A("ERROR: FAILED TO EXTRACT MEDIA BLOB.");
            return
         }
         A("TRANSMITTING TO NEURAL NETWORK..."), b.mutate({
            data: {
               file: k
            }
         }, {
            onSuccess: H => {
               let P = 0;
               const $ = setInterval(() => {
                  P < H.logs.length ? (A(H.logs[P]), P++) : (clearInterval($), A(`ANALYSIS COMPLETE. TIME: ${H.processingTime}ms`))
               }, 200)
            },
            onError: H => {
               A(`FATAL ERROR: ${H?.error?.error||"Connection failed"}`)
            }
         })
      }, R = b.isPending, N = b.data;
   !R && !N && b.isError;
   let B = "border-white/10",
      X = "Awaiting Analysis...",
      V = "text-muted-foreground";
   return R ? (B = "border-primary/50 glow-cyan", X = "ANALYZING...", V = "text-primary animate-pulse") : N && (N.result === "fake" ? (B = "border-destructive glow-red", X = "DEEPFAKE DETECTED", V = "text-destructive text-glow-red") : (B = "border-success glow-green", X = "AUTHENTIC MEDIA", V = "text-success text-glow-green")), g.jsx("section", {
      id: "sandbox",
      className: "py-24 relative z-10",
      children: g.jsxs("div", {
         className: "container mx-auto px-4 md:px-6",
         children: [g.jsxs("div", {
            className: "mb-12",
            children: [g.jsx("h2", {
               className: "text-3xl md:text-5xl font-bold font-display text-white mb-4",
               children: "Face Analysis Sandbox"
            }), g.jsx("p", {
               className: "text-muted-foreground",
               children: "Test our detection algorithms in real-time. Upload media or use your webcam."
            })]
         }), g.jsxs("div", {
            className: "grid lg:grid-cols-12 gap-8",
            children: [g.jsxs("div", {
               className: "lg:col-span-7 flex flex-col gap-6",
               children: [g.jsxs("div", {
                  className: "glass-panel border border-white/10 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center bg-black/50",
                  children: [g.jsx("div", {
                     className: "absolute inset-0 pointer-events-none border-b border-primary/20 bg-gradient-to-b from-transparent to-primary/5 h-[10%] animate-[slide-down_3s_linear_infinite]"
                  }), l ? g.jsx("video", {
                     ref: h,
                     autoPlay: !0,
                     playsInline: !0,
                     muted: !0,
                     className: "w-full h-full object-cover"
                  }) : c ? g.jsx("img", {
                     src: c,
                     alt: "Preview",
                     className: "w-full h-full object-contain"
                  }) : g.jsxs("div", {
                     className: "text-center flex flex-col items-center p-6",
                     children: [g.jsx(oa, {
                        className: "w-16 h-16 text-muted-foreground mb-4 opacity-50"
                     }), g.jsx("p", {
                        className: "text-muted-foreground font-mono text-sm uppercase",
                        children: "No Signal"
                     })]
                  }), g.jsx("div", {
                     className: "absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50"
                  }), g.jsx("div", {
                     className: "absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50"
                  }), g.jsx("div", {
                     className: "absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50"
                  }), g.jsx("div", {
                     className: "absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50"
                  })]
               }), g.jsxs("div", {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                  children: [g.jsxs(qe, {
                     variant: "outline",
                     className: `bg-transparent border-white/20 text-white hover:bg-white/5 ${l?"border-destructive text-destructive hover:bg-destructive/10":""}`,
                     onClick: () => i(!l),
                     children: [l ? g.jsx(s1, {
                        className: "w-4 h-4 mr-2"
                     }) : g.jsx(t1, {
                        className: "w-4 h-4 mr-2"
                     }), l ? "Disable" : "Webcam"]
                  }), g.jsxs(qe, {
                     variant: "outline",
                     className: "bg-transparent border-white/20 text-white hover:bg-white/5",
                     onClick: () => y.current?.click(),
                     children: [g.jsx(x1, {
                        className: "w-4 h-4 mr-2"
                     }), "Image"]
                  }), g.jsxs(qe, {
                     variant: "outline",
                     className: "bg-transparent border-white/20 text-white hover:bg-white/5",
                     onClick: () => y.current?.click(),
                     children: [g.jsx(T1, {
                        className: "w-4 h-4 mr-2"
                     }), "Video"]
                  }), g.jsxs(qe, {
                     className: "bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-background glow-cyan",
                     onClick: z,
                     disabled: R || !l && !s,
                     children: [g.jsx(oa, {
                        className: "w-4 h-4 mr-2"
                     }), "Analyze"]
                  }), g.jsx("input", {
                     type: "file",
                     ref: y,
                     className: "hidden",
                     accept: "image/*,video/*",
                     onChange: E
                  })]
               })]
            }), g.jsxs("div", {
               className: "lg:col-span-5 flex flex-col gap-6",
               children: [g.jsxs("div", {
                  className: `glass-panel rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 min-h-[200px] border ${B}`,
                  children: [g.jsx("h3", {
                     className: `text-2xl md:text-3xl font-display font-bold uppercase tracking-widest ${V}`,
                     children: X
                  }), N && g.jsxs("div", {
                     className: "mt-4 flex items-center gap-2",
                     children: [N.result === "fake" ? g.jsx(cy, {
                        className: "w-6 h-6 text-destructive"
                     }) : g.jsx(i1, {
                        className: "w-6 h-6 text-success"
                     }), g.jsxs("span", {
                        className: "text-white font-mono text-lg",
                        children: ["Confidence: ", N.confidence.toFixed(1), "%"]
                     })]
                  })]
               }), g.jsxs("div", {
                  className: "glass-panel border border-white/10 rounded-xl p-6",
                  children: [g.jsxs("div", {
                     className: "flex justify-between text-sm font-mono mb-2",
                     children: [g.jsx("span", {
                        className: "text-white",
                        children: "Authenticity Score"
                     }), g.jsx("span", {
                        className: N ? N.result === "fake" ? "text-destructive" : "text-success" : "text-muted-foreground",
                        children: N ? `${N.confidence.toFixed(1)}%` : "0%"
                     })]
                  }), g.jsxs("div", {
                     className: "h-4 bg-black/50 rounded-full overflow-hidden border border-white/10 relative",
                     children: [g.jsx("div", {
                        className: `absolute top-0 left-0 h-full transition-all duration-1000 ease-out ${N?.result==="fake"?"bg-destructive glow-red":N?.result==="real"?"bg-success glow-green":"bg-primary glow-cyan opacity-0"}`,
                        style: {
                           width: `${N?N.confidence:R?100:0}%`
                        }
                     }), R && g.jsx("div", {
                        className: "absolute inset-0 bg-primary/20 animate-pulse"
                     })]
                  })]
               }), g.jsxs("div", {
                  className: "glass-panel border border-white/10 rounded-xl p-4 flex-1 min-h-[250px] font-mono text-xs flex flex-col",
                  children: [g.jsxs("div", {
                     className: "text-muted-foreground mb-4 pb-2 border-b border-white/10 flex justify-between",
                     children: [g.jsx("span", {
                        children: "SYSTEM_LOGS // NODE: OMEGA-7"
                     }), g.jsx("span", {
                        className: R ? "text-primary animate-pulse" : "",
                        children: R ? "PROCESSING..." : "IDLE"
                     })]
                  }), g.jsxs("div", {
                     className: "flex-1 overflow-y-auto space-y-2 text-green-400",
                     children: [v.map((k, H) => g.jsx("div", {
                        className: "opacity-80",
                        children: k.includes("ERROR") || k.includes("FAKE") ? g.jsx("span", {
                           className: "text-destructive",
                           children: k
                        }) : k.includes("REAL") ? g.jsx("span", {
                           className: "text-success",
                           children: k
                        }) : k
                     }, H)), R && g.jsxs("div", {
                        className: "text-primary animate-pulse mt-2",
                        children: ["> PROCESSING", g.jsx("span", {
                           className: "animate-[ping_1.5s_infinite]",
                           children: "."
                        }), g.jsx("span", {
                           className: "animate-[ping_1.5s_infinite_200ms]",
                           children: "."
                        }), g.jsx("span", {
                           className: "animate-[ping_1.5s_infinite_400ms]",
                           children: "."
                        })]
                     })]
                  })]
               })]
            })]
         })]
      })
   })
}
const Lu = [{
   id: 1,
   type: "Social Media Post",
   content: "A photo of a famous politician walking a tiger through Central Park.",
   imageBg: "bg-gradient-to-br from-indigo-900/50 to-purple-900/50",
   correctAnswer: "fake",
   explanation: "Notice the unnatural lighting on the subject's face compared to the background, and the tiger's shadow direction is completely wrong."
}, {
   id: 2,
   type: "News Clip",
   content: "Breaking news coverage of a minor earthquake in a major city.",
   imageBg: "bg-gradient-to-br from-slate-800/50 to-gray-900/50",
   correctAnswer: "real",
   explanation: "Authentic footage. Audio syncs perfectly with lip movement, and the camera shake exhibits natural motion blur."
}, {
   id: 3,
   type: "Video Call",
   content: "Your CEO requesting an urgent wire transfer to a new vendor.",
   imageBg: "bg-gradient-to-br from-emerald-900/50 to-teal-900/50",
   correctAnswer: "fake",
   explanation: "Classic deepfake scam. Blinking rate is unnaturally low, and the edges of the face mask glitch slightly during rapid head movement."
}];

function kE() {
   const [l, i] = w.useState({}), s = Object.keys(l).filter(c => l[Number(c)] === Lu.find(f => f.id === Number(c))?.correctAnswer).length;
   Object.keys(l).length;
   const u = (c, f) => {
      l[c] || i(h => ({
         ...h,
         [c]: f
      }))
   };
   return g.jsx("section", {
      id: "quiz",
      className: "py-24 relative z-10 bg-black/40 border-y border-white/5",
      children: g.jsxs("div", {
         className: "container mx-auto px-4 md:px-6",
         children: [g.jsxs("div", {
            className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
            children: [g.jsxs("div", {
               children: [g.jsx("h2", {
                  className: "text-3xl md:text-5xl font-bold font-display text-white mb-4",
                  children: "Would You Trust This?"
               }), g.jsx("p", {
                  className: "text-muted-foreground max-w-2xl",
                  children: "Test your own ability to detect synthetic media against our AI. Spot the fakes."
               })]
            }), g.jsxs("div", {
               className: "glass-panel px-6 py-3 rounded-lg border-primary/30 border inline-flex items-center gap-4 text-white font-mono shrink-0",
               children: [g.jsx("span", {
                  children: "Score:"
               }), g.jsxs("span", {
                  className: "text-2xl text-primary glow-cyan",
                  children: [s, "/", Lu.length]
               })]
            })]
         }), g.jsx("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: Lu.map(c => {
               const f = l[c.id] !== void 0,
                  h = l[c.id] === c.correctAnswer;
               return g.jsxs("div", {
                  className: "glass-panel border border-white/10 rounded-xl overflow-hidden flex flex-col",
                  children: [g.jsxs("div", {
                     className: `h-48 ${c.imageBg} relative flex items-center justify-center p-4 text-center border-b border-white/10`,
                     children: [g.jsx("div", {
                        className: "absolute top-2 left-2 px-2 py-1 rounded bg-black/50 text-xs font-mono text-white/70",
                        children: c.type
                     }), g.jsxs("p", {
                        className: "text-sm font-medium text-white/90",
                        children: ['"', c.content, '"']
                     }), f && g.jsx("div", {
                        className: "absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in duration-300",
                        children: h ? g.jsxs(g.Fragment, {
                           children: [g.jsx("div", {
                              className: "w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mb-2 glow-green",
                              children: g.jsx(n1, {
                                 className: "w-6 h-6 text-success"
                              })
                           }), g.jsx("span", {
                              className: "text-success font-bold font-mono",
                              children: "CORRECT"
                           })]
                        }) : g.jsxs(g.Fragment, {
                           children: [g.jsx("div", {
                              className: "w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center mb-2 glow-red",
                              children: g.jsx(dc, {
                                 className: "w-6 h-6 text-destructive"
                              })
                           }), g.jsx("span", {
                              className: "text-destructive font-bold font-mono",
                              children: "INCORRECT"
                           })]
                        })
                     })]
                  }), g.jsx("div", {
                     className: "p-6 flex-1 flex flex-col",
                     children: f ? g.jsx("div", {
                        className: "flex-1 flex flex-col justify-center",
                        children: g.jsxs("p", {
                           className: "text-sm text-muted-foreground leading-relaxed",
                           children: [g.jsx("strong", {
                              className: "text-white",
                              children: "Analysis:"
                           }), " ", c.explanation]
                        })
                     }) : g.jsxs("div", {
                        className: "flex gap-4 mt-auto",
                        children: [g.jsx(qe, {
                           onClick: () => u(c.id, "real"),
                           className: "flex-1 bg-success/10 hover:bg-success hover:text-black text-success border border-success/30 transition-all",
                           children: "Trust"
                        }), g.jsx(qe, {
                           onClick: () => u(c.id, "fake"),
                           className: "flex-1 bg-destructive/10 hover:bg-destructive hover:text-white text-destructive border border-destructive/30 transition-all",
                           children: "Doubt"
                        })]
                     })
                  })]
               }, c.id)
            })
         })]
      })
   })
}

function qE() {
   const l = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   };
   return g.jsxs("footer", {
      className: "bg-black py-12 border-t border-white/5 relative overflow-hidden",
      children: [g.jsx("div", {
         className: "absolute inset-0 opacity-[0.02]",
         style: {
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
         }
      }), g.jsxs("div", {
         className: "container mx-auto px-4 md:px-6 relative z-10",
         children: [g.jsxs("div", {
            className: "grid md:grid-cols-4 gap-8 mb-8",
            children: [g.jsxs("div", {
               className: "md:col-span-2",
               children: [g.jsxs("div", {
                  className: "flex items-center gap-2 mb-4 cursor-pointer",
                  onClick: l,
                  children: [g.jsx(oa, {
                     className: "w-6 h-6 text-primary glow-cyan"
                  }), g.jsx("span", {
                     className: "font-display font-bold text-xl tracking-wider text-white",
                     children: "OrVex"
                  })]
               }), g.jsx("p", {
                  className: "text-muted-foreground text-sm max-w-sm mb-4",
                  children: "Advanced deepfake detection and synthetic media analysis for enterprises, journalists, and security professionals."
               }), g.jsx("div", {
                  className: "inline-flex items-center px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/50",
                  children: "OrVex Security Team"
               })]
            }), g.jsxs("div", {
               children: [g.jsx("h4", {
                  className: "text-white font-medium mb-4 font-mono text-sm uppercase tracking-wider",
                  children: "Platform"
               }), g.jsxs("ul", {
                  className: "space-y-2 text-sm text-muted-foreground",
                  children: [g.jsx("li", {
                     children: g.jsx("button", {
                        onClick: l,
                        className: "hover:text-primary transition-colors",
                        children: "Home"
                     })
                  }), g.jsx("li", {
                     children: g.jsx("button", {
                        onClick: () => document.getElementById("how-it-works")?.scrollIntoView({
                           behavior: "smooth"
                        }),
                        className: "hover:text-primary transition-colors",
                        children: "How It Works"
                     })
                  }), g.jsx("li", {
                     children: g.jsx("button", {
                        onClick: () => document.getElementById("sandbox")?.scrollIntoView({
                           behavior: "smooth"
                        }),
                        className: "hover:text-primary transition-colors",
                        children: "Sandbox"
                     })
                  }), g.jsx("li", {
                     children: g.jsx("button", {
                        onClick: () => document.getElementById("quiz")?.scrollIntoView({
                           behavior: "smooth"
                        }),
                        className: "hover:text-primary transition-colors",
                        children: "Quiz"
                     })
                  })]
               })]
            }), g.jsxs("div", {
               children: [g.jsx("h4", {
                  className: "text-white font-medium mb-4 font-mono text-sm uppercase tracking-wider",
                  children: "Contact"
               }), g.jsxs("ul", {
                  className: "space-y-2 text-sm text-muted-foreground",
                  children: [g.jsx("li", {
                     children: g.jsx("a", {
                        href: "mailto:contact@orvex.ai",
                        className: "hover:text-primary transition-colors",
                        children: "contact@orvex.ai"
                     })
                  }), g.jsx("li", {
                     children: "Enterprise Sales"
                  }), g.jsx("li", {
                     children: "API Documentation"
                  }), g.jsx("li", {
                     children: "Security Disclosures"
                  })]
               })]
            })]
         }), g.jsxs("div", {
            className: "pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono",
            children: [g.jsxs("p", {
               children: ["© ", new Date().getFullYear(), " OrVex Intelligence. All rights reserved."]
            }), g.jsxs("div", {
               className: "flex gap-4",
               children: [g.jsx(ku, {
                  href: "/privacy",
                  className: "hover:text-white transition-colors",
                  children: "Privacy Policy"
               }), g.jsx(ku, {
                  href: "/terms",
                  className: "hover:text-white transition-colors",
                  children: "Terms of Service"
               })]
            })]
         })]
      })]
   })
}

function BE() {
   return g.jsxs("div", {
      className: "min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden",
      children: [g.jsx(pE, {}), g.jsxs("main", {
         className: "flex-1",
         children: [g.jsx(yE, {}), g.jsx(vE, {}), g.jsx(LE, {}), g.jsx(kE, {})]
      }), g.jsx(qE, {})]
   })
}
const YE = new V0;

function GE() {
   return g.jsxs(m0, {
      children: [g.jsx(Um, {
         path: "/",
         component: BE
      }), g.jsx(Um, {
         component: aE
      })]
   })
}

function VE() {
   return g.jsx(X0, {
      client: YE,
      children: g.jsxs(Ww, {
         children: [g.jsx(Op, {
            base: "/".replace(/\/$/, ""),
            children: g.jsx(GE, {})
         }), g.jsx(gS, {})]
      })
   })
}
Kb.createRoot(document.getElementById("root")).render(g.jsx(VE, {}));