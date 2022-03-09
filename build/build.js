(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // ../ArweaveWalletConnector/node_modules/mitt/dist/mitt.mjs
  function mitt_default(n) {
    return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
      var i = n.get(t);
      i ? i.push(e) : n.set(t, [e]);
    }, off: function(t, e) {
      var i = n.get(t);
      i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
    }, emit: function(t, e) {
      var i = n.get(t);
      i && i.slice().map(function(n2) {
        n2(e);
      }), (i = n.get("*")) && i.slice().map(function(n2) {
        n2(t, e);
      });
    } };
  }
  var init_mitt = __esm({
    "../ArweaveWalletConnector/node_modules/mitt/dist/mitt.mjs"() {
    }
  });

  // ../ArweaveWalletConnector/lib/Emitter.js
  var Emitter;
  var init_Emitter = __esm({
    "../ArweaveWalletConnector/lib/Emitter.js"() {
      init_mitt();
      Emitter = class {
        constructor() {
          this.mittInstance = mitt_default();
        }
        emit(method, params) {
          this.mittInstance.emit(method, params);
        }
        on(method, handler) {
          this.mittInstance.on(method, handler);
        }
        off(method, handler) {
          this.mittInstance.off(method, handler);
        }
        once(method, handler) {
          return new Promise((resolve) => {
            const wrapper = (e) => {
              this.off(method, wrapper);
              resolve(e);
              if (handler) {
                handler(e);
              }
            };
            this.on(method, wrapper);
          });
        }
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "../ArweaveWalletConnector/node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/has-tostringtag/shams.js
  var require_shams2 = __commonJS({
    "../ArweaveWalletConnector/node_modules/has-tostringtag/shams.js"(exports, module) {
      "use strict";
      var hasSymbols = require_shams();
      module.exports = function hasToStringTagShams() {
        return hasSymbols() && !!Symbol.toStringTag;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "../ArweaveWalletConnector/node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "../ArweaveWalletConnector/node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var slice = Array.prototype.slice;
      var toStr = Object.prototype.toString;
      var funcType = "[object Function]";
      module.exports = function bind(that) {
        var target = this;
        if (typeof target !== "function" || toStr.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slice.call(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
              return result;
            }
            return this;
          } else {
            return target.apply(that, args.concat(slice.call(arguments)));
          }
        };
        var boundLength = Math.max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs.push("$" + i);
        }
        bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "../ArweaveWalletConnector/node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // ../ArweaveWalletConnector/node_modules/has/src/index.js
  var require_src = __commonJS({
    "../ArweaveWalletConnector/node_modules/has/src/index.js"(exports, module) {
      "use strict";
      var bind = require_function_bind();
      module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
    }
  });

  // ../ArweaveWalletConnector/node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "../ArweaveWalletConnector/node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      var undefined2;
      var $SyntaxError = SyntaxError;
      var $Function = Function;
      var $TypeError = TypeError;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD) {
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      }
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      }() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var getProto = Object.getPrototypeOf || function(x) {
        return x.__proto__;
      };
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
      };
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind = require_function_bind();
      var hasOwn = require_src();
      var $concat = bind.call(Function.call, Array.prototype.concat);
      var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
      var $replace = bind.call(Function.call, String.prototype.replace);
      var $strSlice = bind.call(Function.call, String.prototype.slice);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "../ArweaveWalletConnector/node_modules/call-bind/index.js"(exports, module) {
      "use strict";
      var bind = require_function_bind();
      var GetIntrinsic = require_get_intrinsic();
      var $apply = GetIntrinsic("%Function.prototype.apply%");
      var $call = GetIntrinsic("%Function.prototype.call%");
      var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
      var $max = GetIntrinsic("%Math.max%");
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = null;
        }
      }
      module.exports = function callBind(originalFunction) {
        var func = $reflectApply(bind, $call, arguments);
        if ($gOPD && $defineProperty) {
          var desc = $gOPD(func, "length");
          if (desc.configurable) {
            $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
          }
        }
        return func;
      };
      var applyBind = function applyBind2() {
        return $reflectApply(bind, $apply, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // ../ArweaveWalletConnector/node_modules/call-bind/callBound.js
  var require_callBound = __commonJS({
    "../ArweaveWalletConnector/node_modules/call-bind/callBound.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBind = require_call_bind();
      var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = GetIntrinsic(name, !!allowMissing);
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBind(intrinsic);
        }
        return intrinsic;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/is-arguments/index.js
  var require_is_arguments = __commonJS({
    "../ArweaveWalletConnector/node_modules/is-arguments/index.js"(exports, module) {
      "use strict";
      var hasToStringTag = require_shams2()();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var isStandardArguments = function isArguments(value) {
        if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
          return false;
        }
        return $toString(value) === "[object Arguments]";
      };
      var isLegacyArguments = function isArguments(value) {
        if (isStandardArguments(value)) {
          return true;
        }
        return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
      };
      var supportsStandardArguments = function() {
        return isStandardArguments(arguments);
      }();
      isStandardArguments.isLegacyArguments = isLegacyArguments;
      module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
    }
  });

  // ../ArweaveWalletConnector/node_modules/is-generator-function/index.js
  var require_is_generator_function = __commonJS({
    "../ArweaveWalletConnector/node_modules/is-generator-function/index.js"(exports, module) {
      "use strict";
      var toStr = Object.prototype.toString;
      var fnToStr = Function.prototype.toString;
      var isFnRegex = /^\s*(?:function)?\*/;
      var hasToStringTag = require_shams2()();
      var getProto = Object.getPrototypeOf;
      var getGeneratorFunc = function() {
        if (!hasToStringTag) {
          return false;
        }
        try {
          return Function("return function*() {}")();
        } catch (e) {
        }
      };
      var GeneratorFunction;
      module.exports = function isGeneratorFunction(fn) {
        if (typeof fn !== "function") {
          return false;
        }
        if (isFnRegex.test(fnToStr.call(fn))) {
          return true;
        }
        if (!hasToStringTag) {
          var str = toStr.call(fn);
          return str === "[object GeneratorFunction]";
        }
        if (!getProto) {
          return false;
        }
        if (typeof GeneratorFunction === "undefined") {
          var generatorFunc = getGeneratorFunc();
          GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
        }
        return getProto(fn) === GeneratorFunction;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/foreach/index.js
  var require_foreach = __commonJS({
    "../ArweaveWalletConnector/node_modules/foreach/index.js"(exports, module) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var toString = Object.prototype.toString;
      module.exports = function forEach(obj, fn, ctx) {
        if (toString.call(fn) !== "[object Function]") {
          throw new TypeError("iterator must be a function");
        }
        var l = obj.length;
        if (l === +l) {
          for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
          }
        } else {
          for (var k in obj) {
            if (hasOwn.call(obj, k)) {
              fn.call(ctx, obj[k], k, obj);
            }
          }
        }
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/available-typed-arrays/index.js
  var require_available_typed_arrays = __commonJS({
    "../ArweaveWalletConnector/node_modules/available-typed-arrays/index.js"(exports, module) {
      "use strict";
      var possibleNames = [
        "BigInt64Array",
        "BigUint64Array",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray"
      ];
      var g = typeof globalThis === "undefined" ? global : globalThis;
      module.exports = function availableTypedArrays() {
        var out = [];
        for (var i = 0; i < possibleNames.length; i++) {
          if (typeof g[possibleNames[i]] === "function") {
            out[out.length] = possibleNames[i];
          }
        }
        return out;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js
  var require_getOwnPropertyDescriptor = __commonJS({
    "../ArweaveWalletConnector/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // ../ArweaveWalletConnector/node_modules/is-typed-array/index.js
  var require_is_typed_array = __commonJS({
    "../ArweaveWalletConnector/node_modules/is-typed-array/index.js"(exports, module) {
      "use strict";
      var forEach = require_foreach();
      var availableTypedArrays = require_available_typed_arrays();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var $slice = callBound("String.prototype.slice");
      var toStrTags = {};
      var gOPD = require_getOwnPropertyDescriptor();
      var getPrototypeOf = Object.getPrototypeOf;
      if (hasToStringTag && gOPD && getPrototypeOf) {
        forEach(typedArrays, function(typedArray) {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var anyTrue = false;
        forEach(toStrTags, function(getter, typedArray) {
          if (!anyTrue) {
            try {
              anyTrue = getter.call(value) === typedArray;
            } catch (e) {
            }
          }
        });
        return anyTrue;
      };
      module.exports = function isTypedArray(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        if (!hasToStringTag || !(Symbol.toStringTag in value)) {
          var tag = $slice($toString(value), 8, -1);
          return $indexOf(typedArrays, tag) > -1;
        }
        if (!gOPD) {
          return false;
        }
        return tryTypedArrays(value);
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/which-typed-array/index.js
  var require_which_typed_array = __commonJS({
    "../ArweaveWalletConnector/node_modules/which-typed-array/index.js"(exports, module) {
      "use strict";
      var forEach = require_foreach();
      var availableTypedArrays = require_available_typed_arrays();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $slice = callBound("String.prototype.slice");
      var toStrTags = {};
      var gOPD = require_getOwnPropertyDescriptor();
      var getPrototypeOf = Object.getPrototypeOf;
      if (hasToStringTag && gOPD && getPrototypeOf) {
        forEach(typedArrays, function(typedArray) {
          if (typeof g[typedArray] === "function") {
            var arr = new g[typedArray]();
            if (Symbol.toStringTag in arr) {
              var proto = getPrototypeOf(arr);
              var descriptor = gOPD(proto, Symbol.toStringTag);
              if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
              }
              toStrTags[typedArray] = descriptor.get;
            }
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var foundName = false;
        forEach(toStrTags, function(getter, typedArray) {
          if (!foundName) {
            try {
              var name = getter.call(value);
              if (name === typedArray) {
                foundName = name;
              }
            } catch (e) {
            }
          }
        });
        return foundName;
      };
      var isTypedArray = require_is_typed_array();
      module.exports = function whichTypedArray(value) {
        if (!isTypedArray(value)) {
          return false;
        }
        if (!hasToStringTag || !(Symbol.toStringTag in value)) {
          return $slice($toString(value), 8, -1);
        }
        return tryTypedArrays(value);
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/util/support/types.js
  var require_types = __commonJS({
    "../ArweaveWalletConnector/node_modules/util/support/types.js"(exports) {
      "use strict";
      var isArgumentsObject = require_is_arguments();
      var isGeneratorFunction = require_is_generator_function();
      var whichTypedArray = require_which_typed_array();
      var isTypedArray = require_is_typed_array();
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== "undefined";
      var SymbolSupported = typeof Symbol !== "undefined";
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      var bigIntValue;
      if (SymbolSupported) {
        symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      var symbolValue;
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (typeof value !== "object") {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports.isArgumentsObject = isArgumentsObject;
      exports.isGeneratorFunction = isGeneratorFunction;
      exports.isTypedArray = isTypedArray;
      function isPromise(input) {
        return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
      }
      exports.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray(value) || isDataView(value);
      }
      exports.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray(value) === "Uint8Array";
      }
      exports.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray(value) === "Uint8ClampedArray";
      }
      exports.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray(value) === "Uint16Array";
      }
      exports.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray(value) === "Uint32Array";
      }
      exports.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray(value) === "Int8Array";
      }
      exports.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray(value) === "Int16Array";
      }
      exports.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray(value) === "Int32Array";
      }
      exports.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray(value) === "Float32Array";
      }
      exports.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray(value) === "Float64Array";
      }
      exports.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray(value) === "BigInt64Array";
      }
      exports.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray(value) === "BigUint64Array";
      }
      exports.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === "[object Map]";
      }
      isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
      function isMap(value) {
        if (typeof Map === "undefined") {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === "[object Set]";
      }
      isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
      function isSet(value) {
        if (typeof Set === "undefined") {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === "[object WeakMap]";
      }
      isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === "undefined") {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === "[object WeakSet]";
      }
      isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === "[object ArrayBuffer]";
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === "undefined") {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === "[object DataView]";
      }
      isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === "undefined") {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports.isDataView = isDataView;
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === "[object SharedArrayBuffer]";
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === "undefined") {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === "undefined") {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === "[object AsyncFunction]";
      }
      exports.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === "[object Map Iterator]";
      }
      exports.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === "[object Set Iterator]";
      }
      exports.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === "[object Generator]";
      }
      exports.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === "[object WebAssembly.Module]";
      }
      exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports.isAnyArrayBuffer = isAnyArrayBuffer;
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
        Object.defineProperty(exports, method, {
          enumerable: false,
          value: function() {
            throw new Error(method + " is not supported in userland");
          }
        });
      });
    }
  });

  // ../ArweaveWalletConnector/node_modules/util/support/isBufferBrowser.js
  var require_isBufferBrowser = __commonJS({
    "../ArweaveWalletConnector/node_modules/util/support/isBufferBrowser.js"(exports, module) {
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "../ArweaveWalletConnector/node_modules/inherits/inherits_browser.js"(exports, module) {
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // ../ArweaveWalletConnector/node_modules/util/util.js
  var require_util = __commonJS({
    "../ArweaveWalletConnector/node_modules/util/util.js"(exports) {
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
        var keys = Object.keys(obj);
        var descriptors = {};
        for (var i = 0; i < keys.length; i++) {
          descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
        }
        return descriptors;
      };
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
          }
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x2) {
          if (x2 === "%%")
            return "%";
          if (i >= len)
            return x2;
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject(x)) {
            str += " " + x;
          } else {
            str += " " + inspect(x);
          }
        }
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (typeof process !== "undefined" && process.noDeprecation === true) {
          return fn;
        }
        if (typeof process === "undefined") {
          return function() {
            return exports.deprecate(fn, msg).apply(this, arguments);
          };
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) {
              throw new Error(msg);
            } else if (process.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnvRegex = /^$/;
      if (process.env.NODE_DEBUG) {
        debugEnv = process.env.NODE_DEBUG;
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
        debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
      }
      var debugEnv;
      exports.debuglog = function(set) {
        set = set.toUpperCase();
        if (!debugs[set]) {
          if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
              var msg = exports.format.apply(exports, arguments);
              console.error("%s %d: %s", set, pid, msg);
            };
          } else {
            debugs[set] = function() {
            };
          }
        }
        return debugs[set];
      };
      function inspect(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        if (arguments.length >= 3)
          ctx.depth = arguments[2];
        if (arguments.length >= 4)
          ctx.colors = arguments[3];
        if (isBoolean(opts)) {
          ctx.showHidden = opts;
        } else if (opts) {
          exports._extend(ctx, opts);
        }
        if (isUndefined(ctx.showHidden))
          ctx.showHidden = false;
        if (isUndefined(ctx.depth))
          ctx.depth = 2;
        if (isUndefined(ctx.colors))
          ctx.colors = false;
        if (isUndefined(ctx.customInspect))
          ctx.customInspect = true;
        if (ctx.colors)
          ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
      }
      exports.inspect = inspect;
      inspect.colors = {
        "bold": [1, 22],
        "italic": [3, 23],
        "underline": [4, 24],
        "inverse": [7, 27],
        "white": [37, 39],
        "grey": [90, 39],
        "black": [30, 39],
        "blue": [34, 39],
        "cyan": [36, 39],
        "green": [32, 39],
        "magenta": [35, 39],
        "red": [31, 39],
        "yellow": [33, 39]
      };
      inspect.styles = {
        "special": "cyan",
        "number": "yellow",
        "boolean": "yellow",
        "undefined": "grey",
        "null": "bold",
        "string": "green",
        "date": "magenta",
        "regexp": "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
        if (style) {
          return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) {
          return primitive;
        }
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        if (ctx.showHidden) {
          keys = Object.getOwnPropertyNames(value);
        }
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys.length === 0) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        var base = "", array = false, braces = ["{", "}"];
        if (isArray(value)) {
          array = true;
          braces = ["[", "]"];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx.stylize("[Object]", "special");
          }
        }
        ctx.seen.push(value);
        var output;
        if (array) {
          output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function(key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
          });
        }
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value))
          return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value))
          return ctx.stylize("" + value, "number");
        if (isBoolean(value))
          return ctx.stylize("" + value, "boolean");
        if (isNull(value))
          return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
          } else {
            output.push("");
          }
        }
        keys.forEach(function(key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
          }
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(visibleKeys, key)) {
          name = "[" + key + "]";
        }
        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx, desc.value, null);
            } else {
              str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").substr(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          if (cur.indexOf("\n") >= 0)
            numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      exports.types = require_types();
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject(re) && objectToString(re) === "[object RegExp]";
      }
      exports.isRegExp = isRegExp;
      exports.types.isRegExp = isRegExp;
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports.isObject = isObject;
      function isDate(d) {
        return isObject(d) && objectToString(d) === "[object Date]";
      }
      exports.isDate = isDate;
      exports.types.isDate = isDate;
      function isError(e) {
        return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      exports.isError = isError;
      exports.types.isNativeError = isError;
      function isFunction(arg) {
        return typeof arg === "function";
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = require_isBufferBrowser();
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function timestamp() {
        var d = new Date();
        var time = [
          pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())
        ].join(":");
        return [d.getDate(), months[d.getMonth()], time].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = require_inherits_browser();
      exports._extend = function(origin, add) {
        if (!add || !isObject(add))
          return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
      exports.promisify = function promisify(original) {
        if (typeof original !== "function")
          throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];
          if (typeof fn !== "function") {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }
        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
          });
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          args.push(function(err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol)
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
        return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
      };
      exports.promisify.custom = kCustomPromisifiedSymbol;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error("Promise was rejected with a falsy value");
          newReason.reason = reason;
          reason = newReason;
        }
        return cb(reason);
      }
      function callbackify(original) {
        if (typeof original !== "function") {
          throw new TypeError('The "original" argument must be of type Function');
        }
        function callbackified() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          var maybeCb = args.pop();
          if (typeof maybeCb !== "function") {
            throw new TypeError("The last argument must be of type Function");
          }
          var self2 = this;
          var cb = function() {
            return maybeCb.apply(self2, arguments);
          };
          original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
          }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
          });
        }
        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
        return callbackified;
      }
      exports.callbackify = callbackify;
    }
  });

  // ../ArweaveWalletConnector/node_modules/reflect-metadata/Reflect.js
  var require_Reflect = __commonJS({
    "../ArweaveWalletConnector/node_modules/reflect-metadata/Reflect.js"() {
      var Reflect2;
      (function(Reflect3) {
        (function(factory) {
          var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
          var exporter = makeExporter(Reflect3);
          if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect3;
          } else {
            exporter = makeExporter(root.Reflect, exporter);
          }
          factory(exporter);
          function makeExporter(target, previous) {
            return function(key, value) {
              if (typeof target[key] !== "function") {
                Object.defineProperty(target, key, { configurable: true, writable: true, value });
              }
              if (previous)
                previous(key, value);
            };
          }
        })(function(exporter) {
          var hasOwn = Object.prototype.hasOwnProperty;
          var supportsSymbol = typeof Symbol === "function";
          var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
          var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
          var supportsCreate = typeof Object.create === "function";
          var supportsProto = { __proto__: [] } instanceof Array;
          var downLevel = !supportsCreate && !supportsProto;
          var HashMap = {
            create: supportsCreate ? function() {
              return MakeDictionary(/* @__PURE__ */ Object.create(null));
            } : supportsProto ? function() {
              return MakeDictionary({ __proto__: null });
            } : function() {
              return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
              return hasOwn.call(map, key);
            } : function(map, key) {
              return key in map;
            },
            get: downLevel ? function(map, key) {
              return hasOwn.call(map, key) ? map[key] : void 0;
            } : function(map, key) {
              return map[key];
            }
          };
          var functionPrototype = Object.getPrototypeOf(Function);
          var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
          var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
          var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
          var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
          var Metadata = new _WeakMap();
          function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsObject(target))
                throw new TypeError();
              if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
              if (IsNull(attributes))
                attributes = void 0;
              propertyKey = ToPropertyKey(propertyKey);
              return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsConstructor(target))
                throw new TypeError();
              return DecorateConstructor(decorators, target);
            }
          }
          exporter("decorate", decorate);
          function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
              OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
          }
          exporter("metadata", metadata);
          function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          exporter("defineMetadata", defineMetadata);
          function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasMetadata", hasMetadata);
          function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasOwnMetadata", hasOwnMetadata);
          function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
          }
          exporter("getMetadata", getMetadata);
          function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("getOwnMetadata", getOwnMetadata);
          function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
          }
          exporter("getMetadataKeys", getMetadataKeys);
          function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
          }
          exporter("getOwnMetadataKeys", getOwnMetadataKeys);
          function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, false);
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(metadataKey))
              return false;
            if (metadataMap.size > 0)
              return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
              return true;
            Metadata.delete(target);
            return true;
          }
          exporter("deleteMetadata", deleteMetadata);
          function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                  throw new TypeError();
                target = decorated;
              }
            }
            return target;
          }
          function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target, propertyKey, descriptor);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                  throw new TypeError();
                descriptor = decorated;
              }
            }
            return descriptor;
          }
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
          }
          function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
          }
          function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryGetMetadata(MetadataKey, parent, P);
            return void 0;
          }
          function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, true);
            metadataMap.set(MetadataKey, MetadataValue);
          }
          function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
              return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
              return ownKeys;
            if (ownKeys.length <= 0)
              return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
              var key = ownKeys_1[_i];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
              var key = parentKeys_1[_a];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            return keys;
          }
          function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          function Type(x) {
            if (x === null)
              return 1;
            switch (typeof x) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return x === null ? 1 : 6;
              default:
                return 6;
            }
          }
          function IsUndefined(x) {
            return x === void 0;
          }
          function IsNull(x) {
            return x === null;
          }
          function IsSymbol(x) {
            return typeof x === "symbol";
          }
          function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
          }
          function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
              case 0:
                return input;
              case 1:
                return input;
              case 2:
                return input;
              case 3:
                return input;
              case 4:
                return input;
              case 5:
                return input;
            }
            var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== void 0) {
              var result = exoticToPrim.call(input, hint);
              if (IsObject(result))
                throw new TypeError();
              return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
          }
          function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
              var toString_1 = O.toString;
              if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                  return result;
              }
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
            } else {
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
              var toString_2 = O.toString;
              if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                  return result;
              }
            }
            throw new TypeError();
          }
          function ToBoolean(argument) {
            return !!argument;
          }
          function ToString(argument) {
            return "" + argument;
          }
          function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3);
            if (IsSymbol(key))
              return key;
            return ToString(key);
          }
          function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
          }
          function IsCallable(argument) {
            return typeof argument === "function";
          }
          function IsConstructor(argument) {
            return typeof argument === "function";
          }
          function IsPropertyKey(argument) {
            switch (Type(argument)) {
              case 3:
                return true;
              case 4:
                return true;
              default:
                return false;
            }
          }
          function GetMethod(V, P) {
            var func = V[P];
            if (func === void 0 || func === null)
              return void 0;
            if (!IsCallable(func))
              throw new TypeError();
            return func;
          }
          function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
              throw new TypeError();
            var iterator = method.call(obj);
            if (!IsObject(iterator))
              throw new TypeError();
            return iterator;
          }
          function IteratorValue(iterResult) {
            return iterResult.value;
          }
          function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
          }
          function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
              f.call(iterator);
          }
          function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
              return proto;
            if (proto !== functionPrototype)
              return proto;
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
              return proto;
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
              return proto;
            if (constructor === O)
              return proto;
            return constructor;
          }
          function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = function() {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              MapIterator2.prototype["@@iterator"] = function() {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function() {
                return this;
              };
              MapIterator2.prototype.next = function() {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(this._keys[index], this._values[index]);
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return { value: result, done: false };
                }
                return { value: void 0, done: true };
              };
              MapIterator2.prototype.throw = function(error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function(value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return { value, done: true };
              };
              return MapIterator2;
            }();
            return function() {
              function Map2() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              Object.defineProperty(Map2.prototype, "size", {
                get: function() {
                  return this._keys.length;
                },
                enumerable: true,
                configurable: true
              });
              Map2.prototype.has = function(key) {
                return this._find(key, false) >= 0;
              };
              Map2.prototype.get = function(key) {
                var index = this._find(key, false);
                return index >= 0 ? this._values[index] : void 0;
              };
              Map2.prototype.set = function(key, value) {
                var index = this._find(key, true);
                this._values[index] = value;
                return this;
              };
              Map2.prototype.delete = function(key) {
                var index = this._find(key, false);
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (key === this._cacheKey) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map2.prototype.clear = function() {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map2.prototype.keys = function() {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map2.prototype.values = function() {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map2.prototype.entries = function() {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map2.prototype["@@iterator"] = function() {
                return this.entries();
              };
              Map2.prototype[iteratorSymbol] = function() {
                return this.entries();
              };
              Map2.prototype._find = function(key, insert) {
                if (this._cacheKey !== key) {
                  this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map2;
            }();
            function getKey(key, _) {
              return key;
            }
            function getValue(_, value) {
              return value;
            }
            function getEntry(key, value) {
              return [key, value];
            }
          }
          function CreateSetPolyfill() {
            return function() {
              function Set2() {
                this._map = new _Map();
              }
              Object.defineProperty(Set2.prototype, "size", {
                get: function() {
                  return this._map.size;
                },
                enumerable: true,
                configurable: true
              });
              Set2.prototype.has = function(value) {
                return this._map.has(value);
              };
              Set2.prototype.add = function(value) {
                return this._map.set(value, value), this;
              };
              Set2.prototype.delete = function(value) {
                return this._map.delete(value);
              };
              Set2.prototype.clear = function() {
                this._map.clear();
              };
              Set2.prototype.keys = function() {
                return this._map.keys();
              };
              Set2.prototype.values = function() {
                return this._map.values();
              };
              Set2.prototype.entries = function() {
                return this._map.entries();
              };
              Set2.prototype["@@iterator"] = function() {
                return this.keys();
              };
              Set2.prototype[iteratorSymbol] = function() {
                return this.keys();
              };
              return Set2;
            }();
          }
          function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return function() {
              function WeakMap2() {
                this._key = CreateUniqueKey();
              }
              WeakMap2.prototype.has = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap2.prototype.get = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? HashMap.get(table, this._key) : void 0;
              };
              WeakMap2.prototype.set = function(target, value) {
                var table = GetOrCreateWeakMapTable(target, true);
                table[this._key] = value;
                return this;
              };
              WeakMap2.prototype.delete = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap2.prototype.clear = function() {
                this._key = CreateUniqueKey();
              };
              return WeakMap2;
            }();
            function CreateUniqueKey() {
              var key;
              do
                key = "@@WeakMap@@" + CreateUUID();
              while (HashMap.has(keys, key));
              keys[key] = true;
              return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
              if (!hasOwn.call(target, rootKey)) {
                if (!create)
                  return void 0;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
              }
              return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
              for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 255 | 0;
              return buffer;
            }
            function GenRandomBytes(size) {
              if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                  return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                  return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
              }
              return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
              var data = GenRandomBytes(UUID_SIZE);
              data[6] = data[6] & 79 | 64;
              data[8] = data[8] & 191 | 128;
              var result = "";
              for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                  result += "-";
                if (byte < 16)
                  result += "0";
                result += byte.toString(16).toLowerCase();
              }
              return result;
            }
          }
          function MakeDictionary(obj) {
            obj.__ = void 0;
            delete obj.__;
            return obj;
          }
        });
      })(Reflect2 || (Reflect2 = {}));
    }
  });

  // ../ArweaveWalletConnector/node_modules/typescript-is/index.js
  var require_typescript_is = __commonJS({
    "../ArweaveWalletConnector/node_modules/typescript-is/index.js"(exports, module) {
      var defaultGetErrorObject = void 0;
      function checkGetErrorObject(getErrorObject) {
        if (typeof getErrorObject !== "function") {
          throw new Error("This module should not be used in runtime. Instead, use a transformer during compilation.");
        }
      }
      var assertionsMetadataKey = Symbol("assertions");
      function inputObjectAtPath(path, inputObject) {
        let subField = inputObject;
        for (const key of path.slice(1)) {
          subField = subField[key.startsWith("[") ? parseInt(key.replace("[", "").replace("]", "")) : key];
        }
        return subField;
      }
      function appendInputToErrorMessage(message, path, inputObject) {
        if (message === void 0)
          return "validation error";
        const foundInputObject = inputObjectAtPath(path, inputObject);
        try {
          return message + ", found: " + require_util().inspect(foundInputObject);
        } catch (error) {
        }
        try {
          return message + ", found: " + JSON.stringify(foundInputObject);
        } catch (error) {
        }
        return message;
      }
      var TypeGuardError = class extends Error {
        constructor(errorObject, inputObject) {
          super(appendInputToErrorMessage(errorObject.message, errorObject.path, inputObject));
          this.name = "TypeGuardError";
          this.path = errorObject.path;
          this.reason = errorObject.reason;
          this.input = inputObject;
        }
      };
      function AssertType(assertion, options = {}) {
        require_Reflect();
        return function(target, propertyKey, parameterIndex) {
          const assertions = Reflect.getOwnMetadata(assertionsMetadataKey, target, propertyKey) || [];
          if (Reflect.getOwnMetadata("design:returntype", target, propertyKey) === Promise) {
            assertions[parameterIndex] = { assertion, options: Object.assign({ async: true }, options) };
          } else {
            assertions[parameterIndex] = { assertion, options };
          }
          Reflect.defineMetadata(assertionsMetadataKey, assertions, target, propertyKey);
        };
      }
      function ValidateClass(errorConstructor = TypeGuardError) {
        require_Reflect();
        return function(target) {
          for (const propertyKey of Object.getOwnPropertyNames(target.prototype)) {
            const assertions = Reflect.getOwnMetadata(assertionsMetadataKey, target.prototype, propertyKey);
            if (assertions) {
              const originalMethod = target.prototype[propertyKey];
              target.prototype[propertyKey] = function(...args) {
                for (let i = 0; i < assertions.length; i++) {
                  if (!assertions[i]) {
                    continue;
                  }
                  const errorObject = assertions[i].assertion(args[i]);
                  if (errorObject !== null) {
                    const errorInstance = new errorConstructor(errorObject, args[i]);
                    if (assertions[i].options.async) {
                      return Promise.reject(errorInstance);
                    } else {
                      throw errorInstance;
                    }
                  }
                }
                return originalMethod.apply(this, args);
              };
            }
          }
        };
      }
      function is4(obj, getErrorObject = defaultGetErrorObject) {
        checkGetErrorObject(getErrorObject);
        const errorObject = getErrorObject(obj);
        return errorObject === null;
      }
      function assertType(obj, getErrorObject = defaultGetErrorObject) {
        checkGetErrorObject(getErrorObject);
        const errorObject = getErrorObject(obj);
        if (errorObject === null) {
          return obj;
        } else {
          throw new TypeGuardError(errorObject, obj);
        }
      }
      function createIs(getErrorObject = defaultGetErrorObject) {
        checkGetErrorObject(getErrorObject);
        return (obj) => is4(obj, getErrorObject);
      }
      function createAssertType(getErrorObject = defaultGetErrorObject) {
        checkGetErrorObject(getErrorObject);
        return (obj) => assertType(obj, getErrorObject);
      }
      function setDefaultGetErrorObject(getErrorObject) {
        defaultGetErrorObject = getErrorObject;
      }
      module.exports = {
        is: is4,
        assertType,
        createIs,
        createAssertType,
        equals: is4,
        createEquals: createIs,
        assertEquals: assertType,
        createAssertEquals: createAssertType,
        AssertType,
        ValidateClass,
        TypeGuardError,
        setDefaultGetErrorObject
      };
    }
  });

  // ../ArweaveWalletConnector/lib/Bridge.js
  var import_typescript_is, WIDTH, HEIGHT, Bridge;
  var init_Bridge = __esm({
    "../ArweaveWalletConnector/lib/Bridge.js"() {
      init_Emitter();
      import_typescript_is = __toESM(require_typescript_is(), 1);
      WIDTH = "400";
      HEIGHT = "600";
      Bridge = class extends Emitter {
        constructor(connectToUrl, appInfo) {
          super();
          this._iframe = {};
          this._showIframe = false;
          this._popup = {};
          this._usePopup = true;
          this._requirePopup = false;
          this._keepPopup = false;
          this._promiseController = [];
          this._pending = [];
          this.listener = (e) => {
            var _a, _b, _c, _d, _e, _f;
            if (e.source !== this._popup.window && e.source !== ((_a = this._iframe) === null || _a === void 0 ? void 0 : _a.window)) {
              return;
            }
            if (e.origin !== ((_b = this._url) === null || _b === void 0 ? void 0 : _b.origin)) {
              return;
            }
            if (typeof e.data !== "object") {
              return;
            }
            const { method, params, id, result, error, session } = e.data;
            console.info(`WalletConnector:${e.source === this._popup.window ? "popup" : "iframe"}`, e.data);
            if (id != null) {
              if (typeof id !== "number" && typeof id !== "string") {
                return;
              }
              if (typeof id === "string" && isNaN(parseInt(id))) {
                return;
              }
              if (!this._promiseController[+id]) {
                throw "received result to nonexistent request";
              }
              this._pending = this._pending.filter((x) => x != id);
              if (error != null) {
                this._promiseController[+id].reject(error);
              } else {
                this._promiseController[+id].resolve(result);
              }
              return;
            }
            if (typeof method !== "string") {
              return;
            }
            if (method === "ready") {
              if (e.source === this._popup.window) {
                (_d = (_c = this._popup).resolve) === null || _d === void 0 ? void 0 : _d.call(_c);
              }
              if (e.source === this._iframe.window) {
                (_f = (_e = this._iframe).resolve) === null || _f === void 0 ? void 0 : _f.call(_e);
              }
              return;
            }
            if (method === "change") {
              return;
            }
            if (method === "showIframe") {
              if (typeof params !== "boolean") {
                return;
              }
              this.showIframe = params;
            }
            if (method === "usePopup") {
              if (typeof params !== "boolean") {
                return;
              }
              this.setUsePopup(params);
            }
            if (method === "keepPopup") {
              if (typeof params !== "boolean") {
                return;
              }
              this.setRequirePopup(params);
            }
            const emitting = { method, params, session };
            if (!(0, import_typescript_is.is)(emitting, (object) => {
              function _string(object2) {
                ;
                if (typeof object2 !== "string")
                  return {};
                else
                  return null;
              }
              function _unknown() {
                return null;
              }
              function _undefined(object2) {
                ;
                if (object2 !== void 0)
                  return {};
                else
                  return null;
              }
              function _number(object2) {
                ;
                if (typeof object2 !== "number")
                  return {};
                else
                  return null;
              }
              function su__undefined__string__number_eu(object2) {
                var conditions = [_undefined, _string, _number];
                for (const condition of conditions) {
                  var error2 = condition(object2);
                  if (!error2)
                    return null;
                }
                return {};
              }
              function _0(object2) {
                ;
                if (typeof object2 !== "object" || object2 === null || Array.isArray(object2))
                  return {};
                {
                  if ("method" in object2) {
                    var error2 = _string(object2["method"]);
                    if (error2)
                      return error2;
                  } else
                    return {};
                }
                {
                  if ("params" in object2) {
                    var error2 = _unknown(object2["params"]);
                    if (error2)
                      return error2;
                  } else
                    return {};
                }
                {
                  if ("session" in object2) {
                    var error2 = su__undefined__string__number_eu(object2["session"]);
                    if (error2)
                      return error2;
                  }
                }
                return null;
              }
              return _0(object);
            })) {
              return console.warn("dropped");
            }
            this.emit("message", emitting);
          };
          this._iframeParentNode = appInfo === null || appInfo === void 0 ? void 0 : appInfo.iframeParentNode;
          this._url = connectToUrl;
          const urlInfo = {
            origin: window.location.origin,
            session: Math.random().toString().slice(2)
          };
          if (appInfo === null || appInfo === void 0 ? void 0 : appInfo.name) {
            urlInfo.name = appInfo.name;
          }
          if (appInfo === null || appInfo === void 0 ? void 0 : appInfo.logo) {
            urlInfo.logo = appInfo.logo;
          }
          this._url.hash = new URLSearchParams(urlInfo).toString();
          window.addEventListener("message", this.listener);
        }
        get url() {
          var _a;
          return (_a = this._url) === null || _a === void 0 ? void 0 : _a.origin;
        }
        get showIframe() {
          return this._showIframe;
        }
        set showIframe(value) {
          if (value === this._showIframe) {
            return;
          }
          this._showIframe = value;
          this.deliverMessage({ method: "showIframe", params: value });
          this.emit("builtin", { showIframe: value });
          if (!this._iframeNode) {
            return;
          }
          if (!this._iframeParentNode) {
            this._iframeNode.style.opacity = value ? "1" : "0";
            value ? this._iframeNode.style.removeProperty("pointer-events") : this._iframeNode.style.pointerEvents = "none";
          }
        }
        get usePopup() {
          return this._usePopup;
        }
        setUsePopup(value) {
          if (value === this._usePopup) {
            return;
          }
          this._usePopup = value;
          this.emit("builtin", { usePopup: value });
        }
        get requirePopup() {
          return this._requirePopup;
        }
        setRequirePopup(value) {
          if (value === this._requirePopup) {
            return;
          }
          this._requirePopup = value;
          this.emit("builtin", { requirePopup: value });
        }
        get keepPopup() {
          return this._keepPopup;
        }
        set keepPopup(value) {
          this._keepPopup = value;
          this.emit("builtin", { keepPopup: value });
          if (!value) {
            this.closePopup();
          }
          if (value) {
            this.openPopup(true);
          }
        }
        destructor(options) {
          this.closeIframe();
          this.closePopup(true);
          window.removeEventListener("message", this.listener);
        }
        postMessage(message, options) {
          const id = this._promiseController.length;
          const promise = new Promise((resolve, reject) => this._promiseController.push({ resolve, reject })).finally(() => this.completeRequest());
          this.deliverMessage(Object.assign(Object.assign({}, message), { id }));
          if (options === null || options === void 0 ? void 0 : options.timeout) {
            setTimeout(() => this._promiseController[id].reject("timeout"), options.timeout);
          }
          return promise;
        }
        openIframe() {
          if (this._iframeEl) {
            return;
          }
          this._iframeNode = document.createElement("div");
          this._iframeEl = document.createElement("iframe");
          this._iframeEl.src = this._url.toString();
          this._iframeEl.allow = "usb";
          this._iframeEl.width = WIDTH;
          this._iframeEl.height = HEIGHT;
          this._iframeEl.style.border = "none";
          if (!this._iframeParentNode) {
            this._iframeEl.style.borderRadius = "8px";
            this._iframeEl.style.maxWidth = "100%";
            this._iframeEl.style.maxHeight = "100%";
            this._iframeNode.style.opacity = "0";
            this._iframeNode.style.pointerEvents = "none";
            this._iframeNode.style.position = "fixed";
            this._iframeNode.style.inset = "0";
            this._iframeNode.style.zIndex = "1000000";
            this._iframeNode.style.display = "flex";
            this._iframeNode.style.alignItems = "center";
            this._iframeNode.style.justifyContent = "center";
            this._iframeNode.style.transition = "0.2s opacity ease";
            this._iframeNode.style.background = "#00000088";
          }
          this._iframeNode.appendChild(this._iframeEl);
          const promise = new Promise((resolve, reject) => this._iframe = { resolve, reject });
          this._iframe.promise = promise;
          const injectIframe = () => {
            var _a;
            if (this._iframeParentNode) {
              this._iframeParentNode.appendChild(this._iframeNode);
            } else {
              document.body.appendChild(this._iframeNode);
            }
            this._iframe.window = (_a = this._iframeEl) === null || _a === void 0 ? void 0 : _a.contentWindow;
          };
          if (document.readyState === "complete" || document.readyState === "interactive") {
            injectIframe();
          } else {
            document.addEventListener("DOMContentLoaded", injectIframe);
          }
        }
        closeIframe() {
          var _a, _b, _c, _d;
          (_a = this._iframeEl) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "about:blank");
          (_b = this._iframeNode) === null || _b === void 0 ? void 0 : _b.remove();
          this._iframeNode = void 0;
          this._iframeEl = void 0;
          (_d = (_c = this._iframe).reject) === null || _d === void 0 ? void 0 : _d.call(_c);
          this._iframe = {};
        }
        openPopup(force) {
          if (this._popup.window && !this._popup.window.closed) {
            this._popup.window.focus();
            return;
          }
          if (!this.usePopup && !force) {
            return;
          }
          window.name = "parent";
          const popupWindow = window.open(this._url.toString(), "_blank", `location,resizable,scrollbars,width=${WIDTH},height=${HEIGHT}`);
          const promise = new Promise((resolve, reject) => this._popup = { window: popupWindow, resolve, reject });
          this._popup.promise = promise;
          const timer = setInterval(() => {
            if (this._popup.window && !this._popup.window.closed) {
              return;
            }
            if (this.keepPopup) {
              this.keepPopup = false;
            }
            clearInterval(timer);
          }, 200);
        }
        closePopup(force) {
          var _a, _b, _c;
          if (!this._popup.window || ((_a = this._popup.window) === null || _a === void 0 ? void 0 : _a.closed)) {
            return;
          }
          if ((this.keepPopup || this.requirePopup) && !force) {
            return;
          }
          this._popup.window.location.href = "about:blank";
          this._popup.window.close();
          (_c = (_b = this._popup).reject) === null || _c === void 0 ? void 0 : _c.call(_b);
          this._popup = {};
        }
        completeRequest() {
          setTimeout(() => {
            if (this._pending.length) {
              return;
            }
            this.closePopup();
            this.showIframe = false;
          }, 100);
        }
        deliverMessage(message, options) {
          var _a, _b;
          if (!this._url) {
            throw "Missing URL";
          }
          console.info(`WalletConnector:post`, message);
          const fullMessage = Object.assign(Object.assign({}, message), { jsonrpc: "2.0" });
          fullMessage.id != null && this._pending.push(fullMessage.id);
          this.openIframe();
          this._iframe.promise = (_a = this._iframe.promise) === null || _a === void 0 ? void 0 : _a.then(() => {
            var _a2;
            return (_a2 = this._iframe.window) === null || _a2 === void 0 ? void 0 : _a2.postMessage(fullMessage, this._url.origin, (options === null || options === void 0 ? void 0 : options.transfer) ? [fullMessage] : void 0);
          }).catch(() => {
            return;
          });
          this.openPopup();
          this._popup.promise = (_b = this._popup.promise) === null || _b === void 0 ? void 0 : _b.then(() => {
            var _a2;
            return (_a2 = this._popup.window) === null || _a2 === void 0 ? void 0 : _a2.postMessage(fullMessage, this._url.origin, (options === null || options === void 0 ? void 0 : options.transfer) ? [fullMessage] : void 0);
          }).catch(() => {
            return;
          });
        }
      };
    }
  });

  // ../ArweaveWalletConnector/lib/Connector.js
  var import_typescript_is2, __awaiter, Connector;
  var init_Connector = __esm({
    "../ArweaveWalletConnector/lib/Connector.js"() {
      init_Emitter();
      init_Bridge();
      import_typescript_is2 = __toESM(require_typescript_is(), 1);
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Connector = class extends Emitter {
        constructor(protocolInfo, appInfo, connectToUrl) {
          super();
          this._session = 0;
          this._listener = (message) => {
            const { method, params, session } = message;
            if (session != null && this._session != session) {
              return;
            }
            if (!session && this._session) {
              return;
            }
            if (method === "connect") {
              if (!(0, import_typescript_is2.is)(params, (object) => {
                function _string(object2) {
                  ;
                  if (typeof object2 !== "string")
                    return {};
                  else
                    return null;
                }
                return _string(object);
              })) {
                return;
              }
              this.setAddress(params);
            }
            if (method === "disconnect") {
              this.disconnectEvent(false);
            }
          };
          this._protocolInfo = protocolInfo;
          this._appInfo = appInfo;
          this._emitterPassthrough = (param) => {
            const event = Object.entries(param)[0];
            this.emit(event[0], event[1]);
          };
          if (connectToUrl) {
            this.setUrl(connectToUrl);
          }
        }
        get address() {
          return this._address;
        }
        setAddress(value) {
          if (value && value === this.address) {
            return;
          }
          this._address = value;
          value != null ? this.emit("connect", value) : this.emit("disconnect", value);
          this.emit("change", value);
        }
        get connected() {
          return this._address != null;
        }
        get url() {
          var _a;
          return (_a = this._bridge) === null || _a === void 0 ? void 0 : _a.url;
        }
        get showIframe() {
          var _a;
          return ((_a = this._bridge) === null || _a === void 0 ? void 0 : _a.showIframe) || false;
        }
        get usePopup() {
          var _a;
          return ((_a = this._bridge) === null || _a === void 0 ? void 0 : _a.usePopup) || false;
        }
        get requirePopup() {
          var _a;
          return ((_a = this._bridge) === null || _a === void 0 ? void 0 : _a.requirePopup) || false;
        }
        get keepPopup() {
          var _a;
          return ((_a = this._bridge) === null || _a === void 0 ? void 0 : _a.keepPopup) || false;
        }
        set keepPopup(keep) {
          this._bridge && (this._bridge.keepPopup = keep);
        }
        setUrl(connectToUrl) {
          var _a;
          const oldBridge = this._bridge;
          const url = typeof connectToUrl === "string" ? new URL(connectToUrl.includes("://") ? connectToUrl : "https://" + connectToUrl) : connectToUrl;
          this._url = url;
          if (((_a = this._bridge) === null || _a === void 0 ? void 0 : _a.url) === url.origin) {
            return;
          }
          this.disconnect();
          if (!Connector._bridges[url.origin]) {
            this._bridge = new Bridge(url, this._appInfo);
            Connector._bridges[url.origin] = { bridge: this._bridge, sessions: [] };
          } else {
            this._bridge = Connector._bridges[url.origin].bridge;
            const sessions = Connector._bridges[url.origin].sessions;
            for (let i = 0; i <= sessions.length; i++) {
              if (sessions.indexOf(i) < 0) {
                this._session = i;
                break;
              }
            }
          }
          Connector._bridges[url.origin].sessions.push(this._session);
          this._bridge.on("message", this._listener);
          this._bridge.on("builtin", this._emitterPassthrough);
          if (this._bridge.showIframe !== (oldBridge === null || oldBridge === void 0 ? void 0 : oldBridge.showIframe)) {
            this.emit("showIframe", this._bridge.showIframe);
          }
          if (this._bridge.usePopup !== (oldBridge === null || oldBridge === void 0 ? void 0 : oldBridge.usePopup)) {
            this.emit("usePopup", this._bridge.usePopup);
          }
          if (this._bridge.requirePopup !== (oldBridge === null || oldBridge === void 0 ? void 0 : oldBridge.requirePopup)) {
            this.emit("requirePopup", this._bridge.requirePopup);
          }
          if (this._bridge.keepPopup !== (oldBridge === null || oldBridge === void 0 ? void 0 : oldBridge.keepPopup)) {
            this.emit("keepPopup", this._bridge.keepPopup);
          }
        }
        connect(options) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this._bridge) {
              this._url && this.setUrl(this._url);
            }
            const promise = new Promise((resolve, reject) => {
              this.once("change", (address) => address ? resolve(address) : reject());
            }).finally(() => {
              var _a;
              return (_a = this._bridge) === null || _a === void 0 ? void 0 : _a.completeRequest();
            });
            this._bridge.deliverMessage({ method: "connect", params: options });
            return promise;
          });
        }
        disconnect(options) {
          return __awaiter(this, void 0, void 0, function* () {
            return this.disconnectEvent(true, options);
          });
        }
        disconnectEvent(fromMethod, options) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this._bridge) {
              return;
            }
            const oldBridge = this._bridge;
            const session = this._session;
            const url = oldBridge.url;
            this.setAddress(void 0);
            this._bridge = void 0;
            this._session = 0;
            if (fromMethod) {
              try {
                yield oldBridge.postMessage(Object.assign(Object.assign({ method: "disconnect", params: [options] }, this._protocolInfo), { session }));
              } catch (e) {
                console.warn("disconnect request failed");
              }
            }
            oldBridge.off("message", this._listener);
            oldBridge.off("builtin", this._emitterPassthrough);
            Connector._bridges[url].sessions = Connector._bridges[url].sessions.filter((x) => x != session);
            setTimeout(() => {
              if (Connector._bridges[url].sessions.length) {
                return;
              }
              Connector._bridges[url].bridge.destructor();
              delete Connector._bridges[url];
            }, 100);
          });
        }
        postMessage(method, params, options) {
          return new Promise((resolve, reject) => {
            if (!this._bridge) {
              return reject("URL missing");
            }
            this.once("disconnect", reject);
            this._bridge.postMessage(Object.assign(Object.assign({ method, params }, this._protocolInfo), { session: this._session }), options).then(resolve).catch(reject);
          });
        }
      };
      Connector._bridges = {};
    }
  });

  // ../ArweaveWalletConnector/lib/Inject.js
  function load(connector) {
    if (!connector.namespaces) {
      return;
    }
    if (!connectors.find((c) => c === connector)) {
      connectors.push(connector);
    }
    update();
  }
  function unload(connector) {
    if (!connectors.find((c) => c === connector)) {
      return update();
    }
    connectors.splice(connectors.indexOf(connector), 1);
    for (const namespace in connector.namespaces) {
      if (loaded[namespace] !== connector) {
        continue;
      }
      window[namespace] = swaps[namespace];
      delete swaps[namespace];
      delete loaded[namespace];
    }
    update();
  }
  function update() {
    for (const connector of connectors) {
      for (const namespace in connector.namespaces) {
        if (loaded[namespace] && loaded[namespace] !== connector) {
          continue;
        }
        if (window[namespace] === connector.namespaces[namespace]) {
          continue;
        }
        swaps[namespace] = window[namespace];
        window[namespace] = connector.namespaces[namespace];
        loaded[namespace] = connector;
      }
    }
    window.clearInterval(interval);
    if (connectors.length) {
      interval = setInterval(() => update(), 1e4);
    }
  }
  var interval, connectors, loaded, swaps;
  var init_Inject = __esm({
    "../ArweaveWalletConnector/lib/Inject.js"() {
      connectors = [];
      loaded = {};
      swaps = {};
    }
  });

  // ../ArweaveWalletConnector/node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "../ArweaveWalletConnector/node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1)
          validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
        }
        return parts.join("");
      }
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/lib/utils.js
  var require_utils = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/lib/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.b64UrlDecode = exports.b64UrlEncode = exports.bufferTob64Url = exports.bufferTob64 = exports.b64UrlToBuffer = exports.stringToB64Url = exports.stringToBuffer = exports.bufferToString = exports.b64UrlToString = exports.concatBuffers = void 0;
      var B64js = require_base64_js();
      function concatBuffers(buffers) {
        let total_length = 0;
        for (let i = 0; i < buffers.length; i++) {
          total_length += buffers[i].byteLength;
        }
        let temp = new Uint8Array(total_length);
        let offset = 0;
        temp.set(new Uint8Array(buffers[0]), offset);
        offset += buffers[0].byteLength;
        for (let i = 1; i < buffers.length; i++) {
          temp.set(new Uint8Array(buffers[i]), offset);
          offset += buffers[i].byteLength;
        }
        return temp;
      }
      exports.concatBuffers = concatBuffers;
      function b64UrlToString(b64UrlString) {
        let buffer = b64UrlToBuffer(b64UrlString);
        if (typeof TextDecoder == "undefined") {
          const TextDecoder2 = require_util().TextDecoder;
          return new TextDecoder2("utf-8", { fatal: true }).decode(buffer);
        }
        return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
      }
      exports.b64UrlToString = b64UrlToString;
      function bufferToString(buffer) {
        if (typeof TextDecoder == "undefined") {
          const TextDecoder2 = require_util().TextDecoder;
          return new TextDecoder2("utf-8", { fatal: true }).decode(buffer);
        }
        return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
      }
      exports.bufferToString = bufferToString;
      function stringToBuffer(string) {
        if (typeof TextEncoder == "undefined") {
          const TextEncoder2 = require_util().TextEncoder;
          return new TextEncoder2().encode(string);
        }
        return new TextEncoder().encode(string);
      }
      exports.stringToBuffer = stringToBuffer;
      function stringToB64Url(string) {
        return bufferTob64Url(stringToBuffer(string));
      }
      exports.stringToB64Url = stringToB64Url;
      function b64UrlToBuffer(b64UrlString) {
        return new Uint8Array(B64js.toByteArray(b64UrlDecode(b64UrlString)));
      }
      exports.b64UrlToBuffer = b64UrlToBuffer;
      function bufferTob64(buffer) {
        return B64js.fromByteArray(new Uint8Array(buffer));
      }
      exports.bufferTob64 = bufferTob64;
      function bufferTob64Url(buffer) {
        return b64UrlEncode(bufferTob64(buffer));
      }
      exports.bufferTob64Url = bufferTob64Url;
      function b64UrlEncode(b64UrlString) {
        return b64UrlString.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
      }
      exports.b64UrlEncode = b64UrlEncode;
      function b64UrlDecode(b64UrlString) {
        b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
        let padding;
        b64UrlString.length % 4 == 0 ? padding = 0 : padding = 4 - b64UrlString.length % 4;
        return b64UrlString.concat("=".repeat(padding));
      }
      exports.b64UrlDecode = b64UrlDecode;
    }
  });

  // ../ArweaveWalletConnector/node_modules/bignumber.js/bignumber.js
  var require_bignumber = __commonJS({
    "../ArweaveWalletConnector/node_modules/bignumber.js/bignumber.js"(exports, module) {
      (function(globalObject) {
        "use strict";
        var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
        function clone(configObject) {
          var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xA0",
            suffix: ""
          }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
          function BigNumber2(v, b) {
            var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
            if (!(x instanceof BigNumber2))
              return new BigNumber2(v, b);
            if (b == null) {
              if (v && v._isBigNumber === true) {
                x.s = v.s;
                if (!v.c || v.e > MAX_EXP) {
                  x.c = x.e = null;
                } else if (v.e < MIN_EXP) {
                  x.c = [x.e = 0];
                } else {
                  x.e = v.e;
                  x.c = v.c.slice();
                }
                return;
              }
              if ((isNum = typeof v == "number") && v * 0 == 0) {
                x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                if (v === ~~v) {
                  for (e = 0, i = v; i >= 10; i /= 10, e++)
                    ;
                  if (e > MAX_EXP) {
                    x.c = x.e = null;
                  } else {
                    x.e = e;
                    x.c = [v];
                  }
                  return;
                }
                str = String(v);
              } else {
                if (!isNumeric.test(str = String(v)))
                  return parseNumeric(x, str, isNum);
                x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
              }
              if ((e = str.indexOf(".")) > -1)
                str = str.replace(".", "");
              if ((i = str.search(/e/i)) > 0) {
                if (e < 0)
                  e = i;
                e += +str.slice(i + 1);
                str = str.substring(0, i);
              } else if (e < 0) {
                e = str.length;
              }
            } else {
              intCheck(b, 2, ALPHABET.length, "Base");
              if (b == 10 && alphabetHasNormalDecimalDigits) {
                x = new BigNumber2(v);
                return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
              }
              str = String(v);
              if (isNum = typeof v == "number") {
                if (v * 0 != 0)
                  return parseNumeric(x, str, isNum, b);
                x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
                  throw Error(tooManyDigits + v);
                }
              } else {
                x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
              }
              alphabet = ALPHABET.slice(0, b);
              e = i = 0;
              for (len = str.length; i < len; i++) {
                if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                  if (c == ".") {
                    if (i > e) {
                      e = len;
                      continue;
                    }
                  } else if (!caseChanged) {
                    if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                      caseChanged = true;
                      i = -1;
                      e = 0;
                      continue;
                    }
                  }
                  return parseNumeric(x, String(v), isNum, b);
                }
              }
              isNum = false;
              str = convertBase(str, b, 10, x.s);
              if ((e = str.indexOf(".")) > -1)
                str = str.replace(".", "");
              else
                e = str.length;
            }
            for (i = 0; str.charCodeAt(i) === 48; i++)
              ;
            for (len = str.length; str.charCodeAt(--len) === 48; )
              ;
            if (str = str.slice(i, ++len)) {
              len -= i;
              if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                throw Error(tooManyDigits + x.s * v);
              }
              if ((e = e - i - 1) > MAX_EXP) {
                x.c = x.e = null;
              } else if (e < MIN_EXP) {
                x.c = [x.e = 0];
              } else {
                x.e = e;
                x.c = [];
                i = (e + 1) % LOG_BASE;
                if (e < 0)
                  i += LOG_BASE;
                if (i < len) {
                  if (i)
                    x.c.push(+str.slice(0, i));
                  for (len -= LOG_BASE; i < len; ) {
                    x.c.push(+str.slice(i, i += LOG_BASE));
                  }
                  i = LOG_BASE - (str = str.slice(i)).length;
                } else {
                  i -= len;
                }
                for (; i--; str += "0")
                  ;
                x.c.push(+str);
              }
            } else {
              x.c = [x.e = 0];
            }
          }
          BigNumber2.clone = clone;
          BigNumber2.ROUND_UP = 0;
          BigNumber2.ROUND_DOWN = 1;
          BigNumber2.ROUND_CEIL = 2;
          BigNumber2.ROUND_FLOOR = 3;
          BigNumber2.ROUND_HALF_UP = 4;
          BigNumber2.ROUND_HALF_DOWN = 5;
          BigNumber2.ROUND_HALF_EVEN = 6;
          BigNumber2.ROUND_HALF_CEIL = 7;
          BigNumber2.ROUND_HALF_FLOOR = 8;
          BigNumber2.EUCLID = 9;
          BigNumber2.config = BigNumber2.set = function(obj) {
            var p, v;
            if (obj != null) {
              if (typeof obj == "object") {
                if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                  v = obj[p];
                  intCheck(v, 0, MAX, p);
                  DECIMAL_PLACES = v;
                }
                if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                  v = obj[p];
                  intCheck(v, 0, 8, p);
                  ROUNDING_MODE = v;
                }
                if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                  v = obj[p];
                  if (v && v.pop) {
                    intCheck(v[0], -MAX, 0, p);
                    intCheck(v[1], 0, MAX, p);
                    TO_EXP_NEG = v[0];
                    TO_EXP_POS = v[1];
                  } else {
                    intCheck(v, -MAX, MAX, p);
                    TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                  }
                }
                if (obj.hasOwnProperty(p = "RANGE")) {
                  v = obj[p];
                  if (v && v.pop) {
                    intCheck(v[0], -MAX, -1, p);
                    intCheck(v[1], 1, MAX, p);
                    MIN_EXP = v[0];
                    MAX_EXP = v[1];
                  } else {
                    intCheck(v, -MAX, MAX, p);
                    if (v) {
                      MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                    } else {
                      throw Error(bignumberError + p + " cannot be zero: " + v);
                    }
                  }
                }
                if (obj.hasOwnProperty(p = "CRYPTO")) {
                  v = obj[p];
                  if (v === !!v) {
                    if (v) {
                      if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                        CRYPTO = v;
                      } else {
                        CRYPTO = !v;
                        throw Error(bignumberError + "crypto unavailable");
                      }
                    } else {
                      CRYPTO = v;
                    }
                  } else {
                    throw Error(bignumberError + p + " not true or false: " + v);
                  }
                }
                if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                  v = obj[p];
                  intCheck(v, 0, 9, p);
                  MODULO_MODE = v;
                }
                if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                  v = obj[p];
                  intCheck(v, 0, MAX, p);
                  POW_PRECISION = v;
                }
                if (obj.hasOwnProperty(p = "FORMAT")) {
                  v = obj[p];
                  if (typeof v == "object")
                    FORMAT = v;
                  else
                    throw Error(bignumberError + p + " not an object: " + v);
                }
                if (obj.hasOwnProperty(p = "ALPHABET")) {
                  v = obj[p];
                  if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                    alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                    ALPHABET = v;
                  } else {
                    throw Error(bignumberError + p + " invalid: " + v);
                  }
                }
              } else {
                throw Error(bignumberError + "Object expected: " + obj);
              }
            }
            return {
              DECIMAL_PLACES,
              ROUNDING_MODE,
              EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
              RANGE: [MIN_EXP, MAX_EXP],
              CRYPTO,
              MODULO_MODE,
              POW_PRECISION,
              FORMAT,
              ALPHABET
            };
          };
          BigNumber2.isBigNumber = function(v) {
            if (!v || v._isBigNumber !== true)
              return false;
            if (!BigNumber2.DEBUG)
              return true;
            var i, n, c = v.c, e = v.e, s = v.s;
            out:
              if ({}.toString.call(c) == "[object Array]") {
                if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                  if (c[0] === 0) {
                    if (e === 0 && c.length === 1)
                      return true;
                    break out;
                  }
                  i = (e + 1) % LOG_BASE;
                  if (i < 1)
                    i += LOG_BASE;
                  if (String(c[0]).length == i) {
                    for (i = 0; i < c.length; i++) {
                      n = c[i];
                      if (n < 0 || n >= BASE || n !== mathfloor(n))
                        break out;
                    }
                    if (n !== 0)
                      return true;
                  }
                }
              } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
                return true;
              }
            throw Error(bignumberError + "Invalid BigNumber: " + v);
          };
          BigNumber2.maximum = BigNumber2.max = function() {
            return maxOrMin(arguments, P.lt);
          };
          BigNumber2.minimum = BigNumber2.min = function() {
            return maxOrMin(arguments, P.gt);
          };
          BigNumber2.random = function() {
            var pow2_53 = 9007199254740992;
            var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
              return mathfloor(Math.random() * pow2_53);
            } : function() {
              return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
            };
            return function(dp) {
              var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
              if (dp == null)
                dp = DECIMAL_PLACES;
              else
                intCheck(dp, 0, MAX);
              k = mathceil(dp / LOG_BASE);
              if (CRYPTO) {
                if (crypto.getRandomValues) {
                  a = crypto.getRandomValues(new Uint32Array(k *= 2));
                  for (; i < k; ) {
                    v = a[i] * 131072 + (a[i + 1] >>> 11);
                    if (v >= 9e15) {
                      b = crypto.getRandomValues(new Uint32Array(2));
                      a[i] = b[0];
                      a[i + 1] = b[1];
                    } else {
                      c.push(v % 1e14);
                      i += 2;
                    }
                  }
                  i = k / 2;
                } else if (crypto.randomBytes) {
                  a = crypto.randomBytes(k *= 7);
                  for (; i < k; ) {
                    v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                    if (v >= 9e15) {
                      crypto.randomBytes(7).copy(a, i);
                    } else {
                      c.push(v % 1e14);
                      i += 7;
                    }
                  }
                  i = k / 7;
                } else {
                  CRYPTO = false;
                  throw Error(bignumberError + "crypto unavailable");
                }
              }
              if (!CRYPTO) {
                for (; i < k; ) {
                  v = random53bitInt();
                  if (v < 9e15)
                    c[i++] = v % 1e14;
                }
              }
              k = c[--i];
              dp %= LOG_BASE;
              if (k && dp) {
                v = POWS_TEN[LOG_BASE - dp];
                c[i] = mathfloor(k / v) * v;
              }
              for (; c[i] === 0; c.pop(), i--)
                ;
              if (i < 0) {
                c = [e = 0];
              } else {
                for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
                  ;
                for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
                  ;
                if (i < LOG_BASE)
                  e -= LOG_BASE - i;
              }
              rand.e = e;
              rand.c = c;
              return rand;
            };
          }();
          BigNumber2.sum = function() {
            var i = 1, args = arguments, sum = new BigNumber2(args[0]);
            for (; i < args.length; )
              sum = sum.plus(args[i++]);
            return sum;
          };
          convertBase = function() {
            var decimal = "0123456789";
            function toBaseOut(str, baseIn, baseOut, alphabet) {
              var j, arr = [0], arrL, i = 0, len = str.length;
              for (; i < len; ) {
                for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
                  ;
                arr[0] += alphabet.indexOf(str.charAt(i++));
                for (j = 0; j < arr.length; j++) {
                  if (arr[j] > baseOut - 1) {
                    if (arr[j + 1] == null)
                      arr[j + 1] = 0;
                    arr[j + 1] += arr[j] / baseOut | 0;
                    arr[j] %= baseOut;
                  }
                }
              }
              return arr.reverse();
            }
            return function(str, baseIn, baseOut, sign, callerIsToString) {
              var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
              if (i >= 0) {
                k = POW_PRECISION;
                POW_PRECISION = 0;
                str = str.replace(".", "");
                y = new BigNumber2(baseIn);
                x = y.pow(str.length - i);
                POW_PRECISION = k;
                y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
                y.e = y.c.length;
              }
              xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
              e = k = xc.length;
              for (; xc[--k] == 0; xc.pop())
                ;
              if (!xc[0])
                return alphabet.charAt(0);
              if (i < 0) {
                --e;
              } else {
                x.c = xc;
                x.e = e;
                x.s = sign;
                x = div(x, y, dp, rm, baseOut);
                xc = x.c;
                r = x.r;
                e = x.e;
              }
              d = e + dp + 1;
              i = xc[d];
              k = baseOut / 2;
              r = r || d < 0 || xc[d + 1] != null;
              r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
              if (d < 1 || !xc[0]) {
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
              } else {
                xc.length = d;
                if (r) {
                  for (--baseOut; ++xc[--d] > baseOut; ) {
                    xc[d] = 0;
                    if (!d) {
                      ++e;
                      xc = [1].concat(xc);
                    }
                  }
                }
                for (k = xc.length; !xc[--k]; )
                  ;
                for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]))
                  ;
                str = toFixedPoint(str, e, alphabet.charAt(0));
              }
              return str;
            };
          }();
          div = function() {
            function multiply(x, k, base) {
              var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
              for (x = x.slice(); i--; ) {
                xlo = x[i] % SQRT_BASE;
                xhi = x[i] / SQRT_BASE | 0;
                m = khi * xlo + xhi * klo;
                temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                x[i] = temp % base;
              }
              if (carry)
                x = [carry].concat(x);
              return x;
            }
            function compare2(a, b, aL, bL) {
              var i, cmp;
              if (aL != bL) {
                cmp = aL > bL ? 1 : -1;
              } else {
                for (i = cmp = 0; i < aL; i++) {
                  if (a[i] != b[i]) {
                    cmp = a[i] > b[i] ? 1 : -1;
                    break;
                  }
                }
              }
              return cmp;
            }
            function subtract(a, b, aL, base) {
              var i = 0;
              for (; aL--; ) {
                a[aL] -= i;
                i = a[aL] < b[aL] ? 1 : 0;
                a[aL] = i * base + a[aL] - b[aL];
              }
              for (; !a[0] && a.length > 1; a.splice(0, 1))
                ;
            }
            return function(x, y, dp, rm, base) {
              var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
              if (!xc || !xc[0] || !yc || !yc[0]) {
                return new BigNumber2(!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
              }
              q = new BigNumber2(s);
              qc = q.c = [];
              e = x.e - y.e;
              s = dp + e + 1;
              if (!base) {
                base = BASE;
                e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                s = s / LOG_BASE | 0;
              }
              for (i = 0; yc[i] == (xc[i] || 0); i++)
                ;
              if (yc[i] > (xc[i] || 0))
                e--;
              if (s < 0) {
                qc.push(1);
                more = true;
              } else {
                xL = xc.length;
                yL = yc.length;
                i = 0;
                s += 2;
                n = mathfloor(base / (yc[0] + 1));
                if (n > 1) {
                  yc = multiply(yc, n, base);
                  xc = multiply(xc, n, base);
                  yL = yc.length;
                  xL = xc.length;
                }
                xi = yL;
                rem = xc.slice(0, yL);
                remL = rem.length;
                for (; remL < yL; rem[remL++] = 0)
                  ;
                yz = yc.slice();
                yz = [0].concat(yz);
                yc0 = yc[0];
                if (yc[1] >= base / 2)
                  yc0++;
                do {
                  n = 0;
                  cmp = compare2(yc, rem, yL, remL);
                  if (cmp < 0) {
                    rem0 = rem[0];
                    if (yL != remL)
                      rem0 = rem0 * base + (rem[1] || 0);
                    n = mathfloor(rem0 / yc0);
                    if (n > 1) {
                      if (n >= base)
                        n = base - 1;
                      prod = multiply(yc, n, base);
                      prodL = prod.length;
                      remL = rem.length;
                      while (compare2(prod, rem, prodL, remL) == 1) {
                        n--;
                        subtract(prod, yL < prodL ? yz : yc, prodL, base);
                        prodL = prod.length;
                        cmp = 1;
                      }
                    } else {
                      if (n == 0) {
                        cmp = n = 1;
                      }
                      prod = yc.slice();
                      prodL = prod.length;
                    }
                    if (prodL < remL)
                      prod = [0].concat(prod);
                    subtract(rem, prod, remL, base);
                    remL = rem.length;
                    if (cmp == -1) {
                      while (compare2(yc, rem, yL, remL) < 1) {
                        n++;
                        subtract(rem, yL < remL ? yz : yc, remL, base);
                        remL = rem.length;
                      }
                    }
                  } else if (cmp === 0) {
                    n++;
                    rem = [0];
                  }
                  qc[i++] = n;
                  if (rem[0]) {
                    rem[remL++] = xc[xi] || 0;
                  } else {
                    rem = [xc[xi]];
                    remL = 1;
                  }
                } while ((xi++ < xL || rem[0] != null) && s--);
                more = rem[0] != null;
                if (!qc[0])
                  qc.splice(0, 1);
              }
              if (base == BASE) {
                for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
                  ;
                round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
              } else {
                q.e = e;
                q.r = +more;
              }
              return q;
            };
          }();
          function format(n, i, rm, id) {
            var c0, e, ne, len, str;
            if (rm == null)
              rm = ROUNDING_MODE;
            else
              intCheck(rm, 0, 8);
            if (!n.c)
              return n.toString();
            c0 = n.c[0];
            ne = n.e;
            if (i == null) {
              str = coeffToString(n.c);
              str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
            } else {
              n = round(new BigNumber2(n), i, rm);
              e = n.e;
              str = coeffToString(n.c);
              len = str.length;
              if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                for (; len < i; str += "0", len++)
                  ;
                str = toExponential(str, e);
              } else {
                i -= ne;
                str = toFixedPoint(str, e, "0");
                if (e + 1 > len) {
                  if (--i > 0)
                    for (str += "."; i--; str += "0")
                      ;
                } else {
                  i += e - len;
                  if (i > 0) {
                    if (e + 1 == len)
                      str += ".";
                    for (; i--; str += "0")
                      ;
                  }
                }
              }
            }
            return n.s < 0 && c0 ? "-" + str : str;
          }
          function maxOrMin(args, method) {
            var n, i = 1, m = new BigNumber2(args[0]);
            for (; i < args.length; i++) {
              n = new BigNumber2(args[i]);
              if (!n.s) {
                m = n;
                break;
              } else if (method.call(m, n)) {
                m = n;
              }
            }
            return m;
          }
          function normalise(n, c, e) {
            var i = 1, j = c.length;
            for (; !c[--j]; c.pop())
              ;
            for (j = c[0]; j >= 10; j /= 10, i++)
              ;
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
              n.c = n.e = null;
            } else if (e < MIN_EXP) {
              n.c = [n.e = 0];
            } else {
              n.e = e;
              n.c = c;
            }
            return n;
          }
          parseNumeric = function() {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(x, str, isNum, b) {
              var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
              if (isInfinityOrNaN.test(s)) {
                x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
              } else {
                if (!isNum) {
                  s = s.replace(basePrefix, function(m, p1, p2) {
                    base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                    return !b || b == base ? p1 : m;
                  });
                  if (b) {
                    base = b;
                    s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                  }
                  if (str != s)
                    return new BigNumber2(s, base);
                }
                if (BigNumber2.DEBUG) {
                  throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
                }
                x.s = null;
              }
              x.c = x.e = null;
            };
          }();
          function round(x, sd, rm, r) {
            var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
            if (xc) {
              out: {
                for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
                  ;
                i = sd - d;
                if (i < 0) {
                  i += LOG_BASE;
                  j = sd;
                  n = xc[ni = 0];
                  rd = n / pows10[d - j - 1] % 10 | 0;
                } else {
                  ni = mathceil((i + 1) / LOG_BASE);
                  if (ni >= xc.length) {
                    if (r) {
                      for (; xc.length <= ni; xc.push(0))
                        ;
                      n = rd = 0;
                      d = 1;
                      i %= LOG_BASE;
                      j = i - LOG_BASE + 1;
                    } else {
                      break out;
                    }
                  } else {
                    n = k = xc[ni];
                    for (d = 1; k >= 10; k /= 10, d++)
                      ;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + d;
                    rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                  }
                }
                r = r || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                if (sd < 1 || !xc[0]) {
                  xc.length = 0;
                  if (r) {
                    sd -= x.e + 1;
                    xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                    x.e = -sd || 0;
                  } else {
                    xc[0] = x.e = 0;
                  }
                  return x;
                }
                if (i == 0) {
                  xc.length = ni;
                  k = 1;
                  ni--;
                } else {
                  xc.length = ni + 1;
                  k = pows10[LOG_BASE - i];
                  xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                }
                if (r) {
                  for (; ; ) {
                    if (ni == 0) {
                      for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                        ;
                      j = xc[0] += k;
                      for (k = 1; j >= 10; j /= 10, k++)
                        ;
                      if (i != k) {
                        x.e++;
                        if (xc[0] == BASE)
                          xc[0] = 1;
                      }
                      break;
                    } else {
                      xc[ni] += k;
                      if (xc[ni] != BASE)
                        break;
                      xc[ni--] = 0;
                      k = 1;
                    }
                  }
                }
                for (i = xc.length; xc[--i] === 0; xc.pop())
                  ;
              }
              if (x.e > MAX_EXP) {
                x.c = x.e = null;
              } else if (x.e < MIN_EXP) {
                x.c = [x.e = 0];
              }
            }
            return x;
          }
          function valueOf(n) {
            var str, e = n.e;
            if (e === null)
              return n.toString();
            str = coeffToString(n.c);
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
            return n.s < 0 ? "-" + str : str;
          }
          P.absoluteValue = P.abs = function() {
            var x = new BigNumber2(this);
            if (x.s < 0)
              x.s = 1;
            return x;
          };
          P.comparedTo = function(y, b) {
            return compare(this, new BigNumber2(y, b));
          };
          P.decimalPlaces = P.dp = function(dp, rm) {
            var c, n, v, x = this;
            if (dp != null) {
              intCheck(dp, 0, MAX);
              if (rm == null)
                rm = ROUNDING_MODE;
              else
                intCheck(rm, 0, 8);
              return round(new BigNumber2(x), dp + x.e + 1, rm);
            }
            if (!(c = x.c))
              return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
            if (v = c[v])
              for (; v % 10 == 0; v /= 10, n--)
                ;
            if (n < 0)
              n = 0;
            return n;
          };
          P.dividedBy = P.div = function(y, b) {
            return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
          };
          P.dividedToIntegerBy = P.idiv = function(y, b) {
            return div(this, new BigNumber2(y, b), 0, 1);
          };
          P.exponentiatedBy = P.pow = function(n, m) {
            var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
            n = new BigNumber2(n);
            if (n.c && !n.isInteger()) {
              throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
            }
            if (m != null)
              m = new BigNumber2(m);
            nIsBig = n.e > 14;
            if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
              y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
              return m ? y.mod(m) : y;
            }
            nIsNeg = n.s < 0;
            if (m) {
              if (m.c ? !m.c[0] : !m.s)
                return new BigNumber2(NaN);
              isModExp = !nIsNeg && x.isInteger() && m.isInteger();
              if (isModExp)
                x = x.mod(m);
            } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
              k = x.s < 0 && isOdd(n) ? -0 : 0;
              if (x.e > -1)
                k = 1 / k;
              return new BigNumber2(nIsNeg ? 1 / k : k);
            } else if (POW_PRECISION) {
              k = mathceil(POW_PRECISION / LOG_BASE + 2);
            }
            if (nIsBig) {
              half = new BigNumber2(0.5);
              if (nIsNeg)
                n.s = 1;
              nIsOdd = isOdd(n);
            } else {
              i = Math.abs(+valueOf(n));
              nIsOdd = i % 2;
            }
            y = new BigNumber2(ONE);
            for (; ; ) {
              if (nIsOdd) {
                y = y.times(x);
                if (!y.c)
                  break;
                if (k) {
                  if (y.c.length > k)
                    y.c.length = k;
                } else if (isModExp) {
                  y = y.mod(m);
                }
              }
              if (i) {
                i = mathfloor(i / 2);
                if (i === 0)
                  break;
                nIsOdd = i % 2;
              } else {
                n = n.times(half);
                round(n, n.e + 1, 1);
                if (n.e > 14) {
                  nIsOdd = isOdd(n);
                } else {
                  i = +valueOf(n);
                  if (i === 0)
                    break;
                  nIsOdd = i % 2;
                }
              }
              x = x.times(x);
              if (k) {
                if (x.c && x.c.length > k)
                  x.c.length = k;
              } else if (isModExp) {
                x = x.mod(m);
              }
            }
            if (isModExp)
              return y;
            if (nIsNeg)
              y = ONE.div(y);
            return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
          };
          P.integerValue = function(rm) {
            var n = new BigNumber2(this);
            if (rm == null)
              rm = ROUNDING_MODE;
            else
              intCheck(rm, 0, 8);
            return round(n, n.e + 1, rm);
          };
          P.isEqualTo = P.eq = function(y, b) {
            return compare(this, new BigNumber2(y, b)) === 0;
          };
          P.isFinite = function() {
            return !!this.c;
          };
          P.isGreaterThan = P.gt = function(y, b) {
            return compare(this, new BigNumber2(y, b)) > 0;
          };
          P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
            return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
          };
          P.isInteger = function() {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
          };
          P.isLessThan = P.lt = function(y, b) {
            return compare(this, new BigNumber2(y, b)) < 0;
          };
          P.isLessThanOrEqualTo = P.lte = function(y, b) {
            return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
          };
          P.isNaN = function() {
            return !this.s;
          };
          P.isNegative = function() {
            return this.s < 0;
          };
          P.isPositive = function() {
            return this.s > 0;
          };
          P.isZero = function() {
            return !!this.c && this.c[0] == 0;
          };
          P.minus = function(y, b) {
            var i, j, t, xLTy, x = this, a = x.s;
            y = new BigNumber2(y, b);
            b = y.s;
            if (!a || !b)
              return new BigNumber2(NaN);
            if (a != b) {
              y.s = -b;
              return x.plus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
              if (!xc || !yc)
                return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
              if (!xc[0] || !yc[0]) {
                return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
              }
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            if (a = xe - ye) {
              if (xLTy = a < 0) {
                a = -a;
                t = xc;
              } else {
                ye = xe;
                t = yc;
              }
              t.reverse();
              for (b = a; b--; t.push(0))
                ;
              t.reverse();
            } else {
              j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
              for (a = b = 0; b < j; b++) {
                if (xc[b] != yc[b]) {
                  xLTy = xc[b] < yc[b];
                  break;
                }
              }
            }
            if (xLTy)
              t = xc, xc = yc, yc = t, y.s = -y.s;
            b = (j = yc.length) - (i = xc.length);
            if (b > 0)
              for (; b--; xc[i++] = 0)
                ;
            b = BASE - 1;
            for (; j > a; ) {
              if (xc[--j] < yc[j]) {
                for (i = j; i && !xc[--i]; xc[i] = b)
                  ;
                --xc[i];
                xc[j] += BASE;
              }
              xc[j] -= yc[j];
            }
            for (; xc[0] == 0; xc.splice(0, 1), --ye)
              ;
            if (!xc[0]) {
              y.s = ROUNDING_MODE == 3 ? -1 : 1;
              y.c = [y.e = 0];
              return y;
            }
            return normalise(y, xc, ye);
          };
          P.modulo = P.mod = function(y, b) {
            var q, s, x = this;
            y = new BigNumber2(y, b);
            if (!x.c || !y.s || y.c && !y.c[0]) {
              return new BigNumber2(NaN);
            } else if (!y.c || x.c && !x.c[0]) {
              return new BigNumber2(x);
            }
            if (MODULO_MODE == 9) {
              s = y.s;
              y.s = 1;
              q = div(x, y, 0, 3);
              y.s = s;
              q.s *= s;
            } else {
              q = div(x, y, 0, MODULO_MODE);
            }
            y = x.minus(q.times(y));
            if (!y.c[0] && MODULO_MODE == 1)
              y.s = x.s;
            return y;
          };
          P.multipliedBy = P.times = function(y, b) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
            if (!xc || !yc || !xc[0] || !yc[0]) {
              if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                y.c = y.e = y.s = null;
              } else {
                y.s *= x.s;
                if (!xc || !yc) {
                  y.c = y.e = null;
                } else {
                  y.c = [0];
                  y.e = 0;
                }
              }
              return y;
            }
            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;
            if (xcL < ycL)
              zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
            for (i = xcL + ycL, zc = []; i--; zc.push(0))
              ;
            base = BASE;
            sqrtBase = SQRT_BASE;
            for (i = ycL; --i >= 0; ) {
              c = 0;
              ylo = yc[i] % sqrtBase;
              yhi = yc[i] / sqrtBase | 0;
              for (k = xcL, j = i + k; j > i; ) {
                xlo = xc[--k] % sqrtBase;
                xhi = xc[k] / sqrtBase | 0;
                m = yhi * xlo + xhi * ylo;
                xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                zc[j--] = xlo % base;
              }
              zc[j] = c;
            }
            if (c) {
              ++e;
            } else {
              zc.splice(0, 1);
            }
            return normalise(y, zc, e);
          };
          P.negated = function() {
            var x = new BigNumber2(this);
            x.s = -x.s || null;
            return x;
          };
          P.plus = function(y, b) {
            var t, x = this, a = x.s;
            y = new BigNumber2(y, b);
            b = y.s;
            if (!a || !b)
              return new BigNumber2(NaN);
            if (a != b) {
              y.s = -b;
              return x.minus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
              if (!xc || !yc)
                return new BigNumber2(a / 0);
              if (!xc[0] || !yc[0])
                return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            if (a = xe - ye) {
              if (a > 0) {
                ye = xe;
                t = yc;
              } else {
                a = -a;
                t = xc;
              }
              t.reverse();
              for (; a--; t.push(0))
                ;
              t.reverse();
            }
            a = xc.length;
            b = yc.length;
            if (a - b < 0)
              t = yc, yc = xc, xc = t, b = a;
            for (a = 0; b; ) {
              a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
              xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }
            if (a) {
              xc = [a].concat(xc);
              ++ye;
            }
            return normalise(y, xc, ye);
          };
          P.precision = P.sd = function(sd, rm) {
            var c, n, v, x = this;
            if (sd != null && sd !== !!sd) {
              intCheck(sd, 1, MAX);
              if (rm == null)
                rm = ROUNDING_MODE;
              else
                intCheck(rm, 0, 8);
              return round(new BigNumber2(x), sd, rm);
            }
            if (!(c = x.c))
              return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;
            if (v = c[v]) {
              for (; v % 10 == 0; v /= 10, n--)
                ;
              for (v = c[0]; v >= 10; v /= 10, n++)
                ;
            }
            if (sd && x.e + 1 > n)
              n = x.e + 1;
            return n;
          };
          P.shiftedBy = function(k) {
            intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
            return this.times("1e" + k);
          };
          P.squareRoot = P.sqrt = function() {
            var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
            if (s !== 1 || !c || !c[0]) {
              return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            }
            s = Math.sqrt(+valueOf(x));
            if (s == 0 || s == 1 / 0) {
              n = coeffToString(c);
              if ((n.length + e) % 2 == 0)
                n += "0";
              s = Math.sqrt(+n);
              e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
              if (s == 1 / 0) {
                n = "5e" + e;
              } else {
                n = s.toExponential();
                n = n.slice(0, n.indexOf("e") + 1) + e;
              }
              r = new BigNumber2(n);
            } else {
              r = new BigNumber2(s + "");
            }
            if (r.c[0]) {
              e = r.e;
              s = e + dp;
              if (s < 3)
                s = 0;
              for (; ; ) {
                t = r;
                r = half.times(t.plus(div(x, t, dp, 1)));
                if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                  if (r.e < e)
                    --s;
                  n = n.slice(s - 3, s + 1);
                  if (n == "9999" || !rep && n == "4999") {
                    if (!rep) {
                      round(t, t.e + DECIMAL_PLACES + 2, 0);
                      if (t.times(t).eq(x)) {
                        r = t;
                        break;
                      }
                    }
                    dp += 4;
                    s += 4;
                    rep = 1;
                  } else {
                    if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                      round(r, r.e + DECIMAL_PLACES + 2, 1);
                      m = !r.times(r).eq(x);
                    }
                    break;
                  }
                }
              }
            }
            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
          };
          P.toExponential = function(dp, rm) {
            if (dp != null) {
              intCheck(dp, 0, MAX);
              dp++;
            }
            return format(this, dp, rm, 1);
          };
          P.toFixed = function(dp, rm) {
            if (dp != null) {
              intCheck(dp, 0, MAX);
              dp = dp + this.e + 1;
            }
            return format(this, dp, rm);
          };
          P.toFormat = function(dp, rm, format2) {
            var str, x = this;
            if (format2 == null) {
              if (dp != null && rm && typeof rm == "object") {
                format2 = rm;
                rm = null;
              } else if (dp && typeof dp == "object") {
                format2 = dp;
                dp = rm = null;
              } else {
                format2 = FORMAT;
              }
            } else if (typeof format2 != "object") {
              throw Error(bignumberError + "Argument not an object: " + format2);
            }
            str = x.toFixed(dp, rm);
            if (x.c) {
              var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
              if (g2)
                i = g1, g1 = g2, g2 = i, len -= i;
              if (g1 > 0 && len > 0) {
                i = len % g1 || g1;
                intPart = intDigits.substr(0, i);
                for (; i < len; i += g1)
                  intPart += groupSeparator + intDigits.substr(i, g1);
                if (g2 > 0)
                  intPart += groupSeparator + intDigits.slice(i);
                if (isNeg)
                  intPart = "-" + intPart;
              }
              str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format2.fractionGroupSeparator || "")) : fractionPart) : intPart;
            }
            return (format2.prefix || "") + str + (format2.suffix || "");
          };
          P.toFraction = function(md) {
            var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
            if (md != null) {
              n = new BigNumber2(md);
              if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
                throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
              }
            }
            if (!xc)
              return new BigNumber2(x);
            d = new BigNumber2(ONE);
            n1 = d0 = new BigNumber2(ONE);
            d1 = n0 = new BigNumber2(ONE);
            s = coeffToString(xc);
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber2(s);
            n0.c[0] = 0;
            for (; ; ) {
              q = div(n, d, 0, 1);
              d2 = d0.plus(q.times(d1));
              if (d2.comparedTo(md) == 1)
                break;
              d0 = d1;
              d1 = d2;
              n1 = n0.plus(q.times(d2 = n1));
              n0 = d2;
              d = n.minus(q.times(d2 = d));
              n = d2;
            }
            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e = e * 2;
            r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
            MAX_EXP = exp;
            return r;
          };
          P.toNumber = function() {
            return +valueOf(this);
          };
          P.toPrecision = function(sd, rm) {
            if (sd != null)
              intCheck(sd, 1, MAX);
            return format(this, sd, rm, 2);
          };
          P.toString = function(b) {
            var str, n = this, s = n.s, e = n.e;
            if (e === null) {
              if (s) {
                str = "Infinity";
                if (s < 0)
                  str = "-" + str;
              } else {
                str = "NaN";
              }
            } else {
              if (b == null) {
                str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
              } else if (b === 10 && alphabetHasNormalDecimalDigits) {
                n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                str = toFixedPoint(coeffToString(n.c), n.e, "0");
              } else {
                intCheck(b, 2, ALPHABET.length, "Base");
                str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
              }
              if (s < 0 && n.c[0])
                str = "-" + str;
            }
            return str;
          };
          P.valueOf = P.toJSON = function() {
            return valueOf(this);
          };
          P._isBigNumber = true;
          if (configObject != null)
            BigNumber2.set(configObject);
          return BigNumber2;
        }
        function bitFloor(n) {
          var i = n | 0;
          return n > 0 || n === i ? i : i - 1;
        }
        function coeffToString(a) {
          var s, z, i = 1, j = a.length, r = a[0] + "";
          for (; i < j; ) {
            s = a[i++] + "";
            z = LOG_BASE - s.length;
            for (; z--; s = "0" + s)
              ;
            r += s;
          }
          for (j = r.length; r.charCodeAt(--j) === 48; )
            ;
          return r.slice(0, j + 1 || 1);
        }
        function compare(x, y) {
          var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
          if (!i || !j)
            return null;
          a = xc && !xc[0];
          b = yc && !yc[0];
          if (a || b)
            return a ? b ? 0 : -j : i;
          if (i != j)
            return i;
          a = i < 0;
          b = k == l;
          if (!xc || !yc)
            return b ? 0 : !xc ^ a ? 1 : -1;
          if (!b)
            return k > l ^ a ? 1 : -1;
          j = (k = xc.length) < (l = yc.length) ? k : l;
          for (i = 0; i < j; i++)
            if (xc[i] != yc[i])
              return xc[i] > yc[i] ^ a ? 1 : -1;
          return k == l ? 0 : k > l ^ a ? 1 : -1;
        }
        function intCheck(n, min, max, name) {
          if (n < min || n > max || n !== mathfloor(n)) {
            throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
          }
        }
        function isOdd(n) {
          var k = n.c.length - 1;
          return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
        }
        function toExponential(str, e) {
          return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
        }
        function toFixedPoint(str, e, z) {
          var len, zs;
          if (e < 0) {
            for (zs = z + "."; ++e; zs += z)
              ;
            str = zs + str;
          } else {
            len = str.length;
            if (++e > len) {
              for (zs = z, e -= len; --e; zs += z)
                ;
              str += zs;
            } else if (e < len) {
              str = str.slice(0, e) + "." + str.slice(e);
            }
          }
          return str;
        }
        BigNumber = clone();
        BigNumber["default"] = BigNumber.BigNumber = BigNumber;
        if (typeof define == "function" && define.amd) {
          define(function() {
            return BigNumber;
          });
        } else if (typeof module != "undefined" && module.exports) {
          module.exports = BigNumber;
        } else {
          if (!globalObject) {
            globalObject = typeof self != "undefined" && self ? self : window;
          }
          globalObject.BigNumber = BigNumber;
        }
      })(exports);
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/ar.js
  var require_ar = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/ar.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var bignumber_js_1 = require_bignumber();
      var Ar = class {
        constructor() {
          this.BigNum = (value, decimals) => {
            let instance = bignumber_js_1.BigNumber.clone({ DECIMAL_PLACES: decimals });
            return new instance(value);
          };
        }
        winstonToAr(winstonString, { formatted = false, decimals = 12, trim = true } = {}) {
          let number = this.stringToBigNum(winstonString, decimals).shiftedBy(-12);
          return formatted ? number.toFormat(decimals) : number.toFixed(decimals);
        }
        arToWinston(arString, { formatted = false } = {}) {
          let number = this.stringToBigNum(arString).shiftedBy(12);
          return formatted ? number.toFormat() : number.toFixed(0);
        }
        compare(winstonStringA, winstonStringB) {
          let a = this.stringToBigNum(winstonStringA);
          let b = this.stringToBigNum(winstonStringB);
          return a.comparedTo(b);
        }
        isEqual(winstonStringA, winstonStringB) {
          return this.compare(winstonStringA, winstonStringB) === 0;
        }
        isLessThan(winstonStringA, winstonStringB) {
          let a = this.stringToBigNum(winstonStringA);
          let b = this.stringToBigNum(winstonStringB);
          return a.isLessThan(b);
        }
        isGreaterThan(winstonStringA, winstonStringB) {
          let a = this.stringToBigNum(winstonStringA);
          let b = this.stringToBigNum(winstonStringB);
          return a.isGreaterThan(b);
        }
        add(winstonStringA, winstonStringB) {
          let a = this.stringToBigNum(winstonStringA);
          let b = this.stringToBigNum(winstonStringB);
          return a.plus(winstonStringB).toFixed(0);
        }
        sub(winstonStringA, winstonStringB) {
          let a = this.stringToBigNum(winstonStringA);
          let b = this.stringToBigNum(winstonStringB);
          return a.minus(winstonStringB).toFixed(0);
        }
        stringToBigNum(stringValue, decimalPlaces = 12) {
          return this.BigNum(stringValue, decimalPlaces);
        }
      };
      exports.default = Ar;
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/utils.js
  var require_utils2 = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      var bind = require_bind();
      var toString = Object.prototype.toString;
      function isArray(val) {
        return toString.call(val) === "[object Array]";
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
      }
      function isFormData(val) {
        return typeof FormData !== "undefined" && val instanceof FormData;
      }
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject(val) {
        if (toString.call(val) !== "[object Object]") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      function isDate(val) {
        return toString.call(val) === "[object Date]";
      }
      function isFile(val) {
        return toString.call(val) === "[object File]";
      }
      function isBlob(val) {
        return toString.call(val) === "[object Blob]";
      }
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      function isURLSearchParams(val) {
        return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
      }
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      module.exports = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
          return url;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + "=" + encode(v));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/enhanceError.js
  var require_enhanceError = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/enhanceError.js"(exports, module) {
      "use strict";
      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        error.isAxiosError = true;
        error.toJSON = function toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        };
        return error;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/createError.js
  var require_createError = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/createError.js"(exports, module) {
      "use strict";
      var enhanceError = require_enhanceError();
      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      var createError = require_createError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
        }
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/cookies.js
  var require_cookies = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }() : function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }();
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i = line.indexOf(":");
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/cancel/Cancel.js
  var require_Cancel = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
      "use strict";
      function Cancel(message) {
        this.message = message;
      }
      Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      };
      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      var settle = require_settle();
      var cookies = require_cookies();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var createError = require_createError();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"];
          }
          var request = new XMLHttpRequest();
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(createError("Network Error", config, null, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            request = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
          }
          if (config.cancelToken || config.signal) {
            onCanceled = function(cancel) {
              if (!request) {
                return;
              }
              reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          if (!requestData) {
            requestData = null;
          }
          request.send(requestData);
        });
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/defaults.js
  var require_defaults = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/defaults.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      var normalizeHeaderName = require_normalizeHeaderName();
      var enhanceError = require_enhanceError();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        },
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional || defaults.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw enhanceError(e, this, "E_JSON_PARSE");
                }
                throw e;
              }
            }
          }
          return data;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      var defaults = require_defaults();
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn) {
          data = fn.call(context, data, headers);
        });
        return data;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new Cancel("canceled");
        }
      }
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
        utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
          delete config.headers[method];
        });
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config = {};
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          }
        }
        function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function mergeDirectKeys(prop) {
          if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        var mergeMap = {
          "url": valueFromConfig2,
          "method": valueFromConfig2,
          "data": valueFromConfig2,
          "baseURL": defaultToConfig2,
          "transformRequest": defaultToConfig2,
          "transformResponse": defaultToConfig2,
          "paramsSerializer": defaultToConfig2,
          "timeout": defaultToConfig2,
          "timeoutMessage": defaultToConfig2,
          "withCredentials": defaultToConfig2,
          "adapter": defaultToConfig2,
          "responseType": defaultToConfig2,
          "xsrfCookieName": defaultToConfig2,
          "xsrfHeaderName": defaultToConfig2,
          "onUploadProgress": defaultToConfig2,
          "onDownloadProgress": defaultToConfig2,
          "decompress": defaultToConfig2,
          "maxContentLength": defaultToConfig2,
          "maxBodyLength": defaultToConfig2,
          "transport": defaultToConfig2,
          "httpAgent": defaultToConfig2,
          "httpsAgent": defaultToConfig2,
          "cancelToken": defaultToConfig2,
          "socketPath": defaultToConfig2,
          "responseEncoding": defaultToConfig2,
          "validateStatus": mergeDirectKeys
        };
        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          var merge = mergeMap[prop] || mergeDeepProperties;
          var configValue = merge(prop);
          utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/env/data.js
  var require_data = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/env/data.js"(exports, module) {
      module.exports = {
        "version": "0.22.0"
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      var VERSION = require_data().version;
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new TypeError("options must be an object");
        }
        var keys = Object.keys(options);
        var i = keys.length;
        while (i-- > 0) {
          var opt = keys[i];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new TypeError("option " + opt + " must be " + result);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw Error("Unknown option " + opt);
          }
        }
      }
      module.exports = {
        assertOptions,
        validators
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig = require_mergeConfig();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request(config) {
        if (typeof config === "string") {
          config = arguments[1] || {};
          config.url = arguments[0];
        } else {
          config = config || {};
        }
        config = mergeConfig(this.defaults, config);
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = "get";
        }
        var transitional = config.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        Axios.prototype[method] = function(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data
          }));
        };
      });
      module.exports = Axios;
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      var Cancel = require_Cancel();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        this.promise.then(function(cancel) {
          if (!token._listeners)
            return;
          var i;
          var l = token._listeners.length;
          for (i = 0; i < l; i++) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = function(onfulfilled) {
          var _resolve;
          var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.prototype.subscribe = function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      };
      CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      module.exports = function isAxiosError(payload) {
        return typeof payload === "object" && payload.isAxiosError === true;
      };
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios = createInstance(defaults);
      axios.Axios = Axios;
      axios.Cancel = require_Cancel();
      axios.CancelToken = require_CancelToken();
      axios.isCancel = require_isCancel();
      axios.VERSION = require_data().version;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = require_spread();
      axios.isAxiosError = require_isAxiosError();
      module.exports = axios;
      module.exports.default = axios;
    }
  });

  // ../ArweaveWalletConnector/node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "../ArweaveWalletConnector/node_modules/axios/index.js"(exports, module) {
      module.exports = require_axios();
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/lib/api.js
  var require_api = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/lib/api.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var axios_1 = require_axios2();
      var Api = class {
        constructor(config) {
          this.METHOD_GET = "GET";
          this.METHOD_POST = "POST";
          this.applyConfig(config);
        }
        applyConfig(config) {
          this.config = this.mergeDefaults(config);
        }
        getConfig() {
          return this.config;
        }
        mergeDefaults(config) {
          const protocol = config.protocol || "http";
          const port = config.port || (protocol === "https" ? 443 : 80);
          return {
            host: config.host || "127.0.0.1",
            protocol,
            port,
            timeout: config.timeout || 2e4,
            logging: config.logging || false,
            logger: config.logger || console.log
          };
        }
        async get(endpoint, config) {
          try {
            return await this.request().get(endpoint, config);
          } catch (error) {
            if (error.response && error.response.status) {
              return error.response;
            }
            throw error;
          }
        }
        async post(endpoint, body, config) {
          try {
            return await this.request().post(endpoint, body, config);
          } catch (error) {
            if (error.response && error.response.status) {
              return error.response;
            }
            throw error;
          }
        }
        request() {
          let instance = axios_1.default.create({
            baseURL: `${this.config.protocol}://${this.config.host}:${this.config.port}`,
            timeout: this.config.timeout,
            maxContentLength: 1024 * 1024 * 512
          });
          if (this.config.logging) {
            instance.interceptors.request.use((request) => {
              this.config.logger(`Requesting: ${request.baseURL}/${request.url}`);
              return request;
            });
            instance.interceptors.response.use((response) => {
              this.config.logger(`Response:   ${response.config.url} - ${response.status}`);
              return response;
            });
          }
          return instance;
        }
      };
      exports.default = Api;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/network.js
  var require_network = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/network.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Network = class {
        constructor(api) {
          this.api = api;
        }
        getInfo() {
          return this.api.get(`info`).then((response) => {
            return response.data;
          });
        }
        getPeers() {
          return this.api.get(`peers`).then((response) => {
            return response.data;
          });
        }
      };
      exports.default = Network;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/lib/error.js
  var require_error = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/lib/error.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getError = void 0;
      var ArweaveError = class extends Error {
        constructor(type, optional = {}) {
          if (optional.message) {
            super(optional.message);
          } else {
            super();
          }
          this.type = type;
          this.response = optional.response;
        }
        getType() {
          return this.type;
        }
      };
      exports.default = ArweaveError;
      function getError(resp) {
        let data = resp.data;
        if (typeof resp.data === "string") {
          try {
            data = JSON.parse(resp.data);
          } catch (e) {
          }
        }
        if (resp.data instanceof ArrayBuffer || resp.data instanceof Uint8Array) {
          try {
            data = JSON.parse(data.toString());
          } catch (e) {
          }
        }
        return data ? data.error || data : resp.statusText || "unknown";
      }
      exports.getError = getError;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/lib/merkle.js
  var require_merkle = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/lib/merkle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.debug = exports.validatePath = exports.arrayCompare = exports.bufferToInt = exports.intToBuffer = exports.arrayFlatten = exports.generateProofs = exports.buildLayers = exports.generateTransactionChunks = exports.generateTree = exports.computeRootHash = exports.generateLeaves = exports.chunkData = exports.MIN_CHUNK_SIZE = exports.MAX_CHUNK_SIZE = void 0;
      var common_1 = require_common();
      var utils_1 = require_utils();
      exports.MAX_CHUNK_SIZE = 256 * 1024;
      exports.MIN_CHUNK_SIZE = 32 * 1024;
      var NOTE_SIZE = 32;
      var HASH_SIZE = 32;
      async function chunkData(data) {
        let chunks = [];
        let rest = data;
        let cursor = 0;
        while (rest.byteLength >= exports.MAX_CHUNK_SIZE) {
          let chunkSize = exports.MAX_CHUNK_SIZE;
          let nextChunkSize = rest.byteLength - exports.MAX_CHUNK_SIZE;
          if (nextChunkSize > 0 && nextChunkSize < exports.MIN_CHUNK_SIZE) {
            chunkSize = Math.ceil(rest.byteLength / 2);
          }
          const chunk = rest.slice(0, chunkSize);
          const dataHash = await common_1.default.crypto.hash(chunk);
          cursor += chunk.byteLength;
          chunks.push({
            dataHash,
            minByteRange: cursor - chunk.byteLength,
            maxByteRange: cursor
          });
          rest = rest.slice(chunkSize);
        }
        chunks.push({
          dataHash: await common_1.default.crypto.hash(rest),
          minByteRange: cursor,
          maxByteRange: cursor + rest.byteLength
        });
        return chunks;
      }
      exports.chunkData = chunkData;
      async function generateLeaves(chunks) {
        return Promise.all(chunks.map(async ({ dataHash, minByteRange, maxByteRange }) => {
          return {
            type: "leaf",
            id: await hash(await Promise.all([hash(dataHash), hash(intToBuffer(maxByteRange))])),
            dataHash,
            minByteRange,
            maxByteRange
          };
        }));
      }
      exports.generateLeaves = generateLeaves;
      async function computeRootHash(data) {
        const rootNode = await generateTree(data);
        return rootNode.id;
      }
      exports.computeRootHash = computeRootHash;
      async function generateTree(data) {
        const rootNode = await buildLayers(await generateLeaves(await chunkData(data)));
        return rootNode;
      }
      exports.generateTree = generateTree;
      async function generateTransactionChunks(data) {
        const chunks = await chunkData(data);
        const leaves = await generateLeaves(chunks);
        const root = await buildLayers(leaves);
        const proofs = await generateProofs(root);
        const lastChunk = chunks.slice(-1)[0];
        if (lastChunk.maxByteRange - lastChunk.minByteRange === 0) {
          chunks.splice(chunks.length - 1, 1);
          proofs.splice(proofs.length - 1, 1);
        }
        return {
          data_root: root.id,
          chunks,
          proofs
        };
      }
      exports.generateTransactionChunks = generateTransactionChunks;
      async function buildLayers(nodes, level = 0) {
        if (nodes.length < 2) {
          const root = nodes[0];
          return root;
        }
        const nextLayer = [];
        for (let i = 0; i < nodes.length; i += 2) {
          nextLayer.push(await hashBranch(nodes[i], nodes[i + 1]));
        }
        return buildLayers(nextLayer, level + 1);
      }
      exports.buildLayers = buildLayers;
      function generateProofs(root) {
        const proofs = resolveBranchProofs(root);
        if (!Array.isArray(proofs)) {
          return [proofs];
        }
        return arrayFlatten(proofs);
      }
      exports.generateProofs = generateProofs;
      function resolveBranchProofs(node, proof = new Uint8Array(), depth = 0) {
        if (node.type == "leaf") {
          return {
            offset: node.maxByteRange - 1,
            proof: (0, utils_1.concatBuffers)([
              proof,
              node.dataHash,
              intToBuffer(node.maxByteRange)
            ])
          };
        }
        if (node.type == "branch") {
          const partialProof = (0, utils_1.concatBuffers)([
            proof,
            node.leftChild.id,
            node.rightChild.id,
            intToBuffer(node.byteRange)
          ]);
          return [
            resolveBranchProofs(node.leftChild, partialProof, depth + 1),
            resolveBranchProofs(node.rightChild, partialProof, depth + 1)
          ];
        }
        throw new Error(`Unexpected node type`);
      }
      function arrayFlatten(input) {
        const flat = [];
        input.forEach((item) => {
          if (Array.isArray(item)) {
            flat.push(...arrayFlatten(item));
          } else {
            flat.push(item);
          }
        });
        return flat;
      }
      exports.arrayFlatten = arrayFlatten;
      async function hashBranch(left, right) {
        if (!right) {
          return left;
        }
        let branch = {
          type: "branch",
          id: await hash([
            await hash(left.id),
            await hash(right.id),
            await hash(intToBuffer(left.maxByteRange))
          ]),
          byteRange: left.maxByteRange,
          maxByteRange: right.maxByteRange,
          leftChild: left,
          rightChild: right
        };
        return branch;
      }
      async function hash(data) {
        if (Array.isArray(data)) {
          data = common_1.default.utils.concatBuffers(data);
        }
        return new Uint8Array(await common_1.default.crypto.hash(data));
      }
      function intToBuffer(note) {
        const buffer = new Uint8Array(NOTE_SIZE);
        for (var i = buffer.length - 1; i >= 0; i--) {
          var byte = note % 256;
          buffer[i] = byte;
          note = (note - byte) / 256;
        }
        return buffer;
      }
      exports.intToBuffer = intToBuffer;
      function bufferToInt(buffer) {
        let value = 0;
        for (var i = 0; i < buffer.length; i++) {
          value *= 256;
          value += buffer[i];
        }
        return value;
      }
      exports.bufferToInt = bufferToInt;
      var arrayCompare = (a, b) => a.every((value, index) => b[index] === value);
      exports.arrayCompare = arrayCompare;
      async function validatePath(id, dest, leftBound, rightBound, path) {
        if (rightBound <= 0) {
          return false;
        }
        if (dest >= rightBound) {
          return validatePath(id, 0, rightBound - 1, rightBound, path);
        }
        if (dest < 0) {
          return validatePath(id, 0, 0, rightBound, path);
        }
        if (path.length == HASH_SIZE + NOTE_SIZE) {
          const pathData = path.slice(0, HASH_SIZE);
          const endOffsetBuffer = path.slice(pathData.length, pathData.length + NOTE_SIZE);
          const pathDataHash = await hash([
            await hash(pathData),
            await hash(endOffsetBuffer)
          ]);
          let result = (0, exports.arrayCompare)(id, pathDataHash);
          if (result) {
            return {
              offset: rightBound - 1,
              leftBound,
              rightBound,
              chunkSize: rightBound - leftBound
            };
          }
          return false;
        }
        const left = path.slice(0, HASH_SIZE);
        const right = path.slice(left.length, left.length + HASH_SIZE);
        const offsetBuffer = path.slice(left.length + right.length, left.length + right.length + NOTE_SIZE);
        const offset = bufferToInt(offsetBuffer);
        const remainder = path.slice(left.length + right.length + offsetBuffer.length);
        const pathHash = await hash([
          await hash(left),
          await hash(right),
          await hash(offsetBuffer)
        ]);
        if ((0, exports.arrayCompare)(id, pathHash)) {
          if (dest < offset) {
            return await validatePath(left, dest, leftBound, Math.min(rightBound, offset), remainder);
          }
          return await validatePath(right, dest, Math.max(leftBound, offset), rightBound, remainder);
        }
        return false;
      }
      exports.validatePath = validatePath;
      async function debug(proof, output = "") {
        if (proof.byteLength < 1) {
          return output;
        }
        const left = proof.slice(0, HASH_SIZE);
        const right = proof.slice(left.length, left.length + HASH_SIZE);
        const offsetBuffer = proof.slice(left.length + right.length, left.length + right.length + NOTE_SIZE);
        const offset = bufferToInt(offsetBuffer);
        const remainder = proof.slice(left.length + right.length + offsetBuffer.length);
        const pathHash = await hash([
          await hash(left),
          await hash(right),
          await hash(offsetBuffer)
        ]);
        const updatedOutput = `${output}
${JSON.stringify(Buffer.from(left))},${JSON.stringify(Buffer.from(right))},${offset} => ${JSON.stringify(pathHash)}`;
        return debug(remainder, updatedOutput);
      }
      exports.debug = debug;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/lib/transaction-uploader.js
  var require_transaction_uploader = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/lib/transaction-uploader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TransactionUploader = void 0;
      var transaction_1 = require_transaction();
      var ArweaveUtils = require_utils();
      var error_1 = require_error();
      var merkle_1 = require_merkle();
      var MAX_CHUNKS_IN_BODY = 1;
      var FATAL_CHUNK_UPLOAD_ERRORS = [
        "invalid_json",
        "chunk_too_big",
        "data_path_too_big",
        "offset_too_big",
        "data_size_too_big",
        "chunk_proof_ratio_not_attractive",
        "invalid_proof"
      ];
      var ERROR_DELAY = 1e3 * 40;
      var TransactionUploader = class {
        constructor(api, transaction) {
          this.api = api;
          this.chunkIndex = 0;
          this.txPosted = false;
          this.lastRequestTimeEnd = 0;
          this.totalErrors = 0;
          this.lastResponseStatus = 0;
          this.lastResponseError = "";
          if (!transaction.id) {
            throw new Error(`Transaction is not signed`);
          }
          if (!transaction.chunks) {
            throw new Error(`Transaction chunks not prepared`);
          }
          this.data = transaction.data;
          this.transaction = new transaction_1.default(Object.assign({}, transaction, { data: new Uint8Array(0) }));
        }
        get isComplete() {
          return this.txPosted && this.chunkIndex === this.transaction.chunks.chunks.length;
        }
        get totalChunks() {
          return this.transaction.chunks.chunks.length;
        }
        get uploadedChunks() {
          return this.chunkIndex;
        }
        get pctComplete() {
          return Math.trunc(this.uploadedChunks / this.totalChunks * 100);
        }
        async uploadChunk(chunkIndex_) {
          if (this.isComplete) {
            throw new Error(`Upload is already complete`);
          }
          if (this.lastResponseError !== "") {
            this.totalErrors++;
          } else {
            this.totalErrors = 0;
          }
          if (this.totalErrors === 100) {
            throw new Error(`Unable to complete upload: ${this.lastResponseStatus}: ${this.lastResponseError}`);
          }
          let delay = this.lastResponseError === "" ? 0 : Math.max(this.lastRequestTimeEnd + ERROR_DELAY - Date.now(), ERROR_DELAY);
          if (delay > 0) {
            delay = delay - delay * Math.random() * 0.3;
            await new Promise((res) => setTimeout(res, delay));
          }
          this.lastResponseError = "";
          if (!this.txPosted) {
            await this.postTransaction();
            return;
          }
          if (chunkIndex_) {
            this.chunkIndex = chunkIndex_;
          }
          const chunk = this.transaction.getChunk(chunkIndex_ || this.chunkIndex, this.data);
          const chunkOk = await (0, merkle_1.validatePath)(this.transaction.chunks.data_root, parseInt(chunk.offset), 0, parseInt(chunk.data_size), ArweaveUtils.b64UrlToBuffer(chunk.data_path));
          if (!chunkOk) {
            throw new Error(`Unable to validate chunk ${this.chunkIndex}`);
          }
          const resp = await this.api.post(`chunk`, this.transaction.getChunk(this.chunkIndex, this.data)).catch((e) => {
            console.error(e.message);
            return { status: -1, data: { error: e.message } };
          });
          this.lastRequestTimeEnd = Date.now();
          this.lastResponseStatus = resp.status;
          if (this.lastResponseStatus == 200) {
            this.chunkIndex++;
          } else {
            this.lastResponseError = (0, error_1.getError)(resp);
            if (FATAL_CHUNK_UPLOAD_ERRORS.includes(this.lastResponseError)) {
              throw new Error(`Fatal error uploading chunk ${this.chunkIndex}: ${this.lastResponseError}`);
            }
          }
        }
        static async fromSerialized(api, serialized, data) {
          if (!serialized || typeof serialized.chunkIndex !== "number" || typeof serialized.transaction !== "object") {
            throw new Error(`Serialized object does not match expected format.`);
          }
          var transaction = new transaction_1.default(serialized.transaction);
          if (!transaction.chunks) {
            await transaction.prepareChunks(data);
          }
          const upload = new TransactionUploader(api, transaction);
          upload.chunkIndex = serialized.chunkIndex;
          upload.lastRequestTimeEnd = serialized.lastRequestTimeEnd;
          upload.lastResponseError = serialized.lastResponseError;
          upload.lastResponseStatus = serialized.lastResponseStatus;
          upload.txPosted = serialized.txPosted;
          upload.data = data;
          if (upload.transaction.data_root !== serialized.transaction.data_root) {
            throw new Error(`Data mismatch: Uploader doesn't match provided data.`);
          }
          return upload;
        }
        static async fromTransactionId(api, id) {
          const resp = await api.get(`tx/${id}`);
          if (resp.status !== 200) {
            throw new Error(`Tx ${id} not found: ${resp.status}`);
          }
          const transaction = resp.data;
          transaction.data = new Uint8Array(0);
          const serialized = {
            txPosted: true,
            chunkIndex: 0,
            lastResponseError: "",
            lastRequestTimeEnd: 0,
            lastResponseStatus: 0,
            transaction
          };
          return serialized;
        }
        toJSON() {
          return {
            chunkIndex: this.chunkIndex,
            transaction: this.transaction,
            lastRequestTimeEnd: this.lastRequestTimeEnd,
            lastResponseStatus: this.lastResponseStatus,
            lastResponseError: this.lastResponseError,
            txPosted: this.txPosted
          };
        }
        async postTransaction() {
          const uploadInBody = this.totalChunks <= MAX_CHUNKS_IN_BODY;
          if (uploadInBody) {
            this.transaction.data = this.data;
            const resp2 = await this.api.post(`tx`, this.transaction).catch((e) => {
              console.error(e);
              return { status: -1, data: { error: e.message } };
            });
            this.lastRequestTimeEnd = Date.now();
            this.lastResponseStatus = resp2.status;
            this.transaction.data = new Uint8Array(0);
            if (resp2.status >= 200 && resp2.status < 300) {
              this.txPosted = true;
              this.chunkIndex = MAX_CHUNKS_IN_BODY;
              return;
            }
            this.lastResponseError = (0, error_1.getError)(resp2);
            throw new Error(`Unable to upload transaction: ${resp2.status}, ${this.lastResponseError}`);
          }
          const resp = await this.api.post(`tx`, this.transaction);
          this.lastRequestTimeEnd = Date.now();
          this.lastResponseStatus = resp.status;
          if (!(resp.status >= 200 && resp.status < 300)) {
            this.lastResponseError = (0, error_1.getError)(resp);
            throw new Error(`Unable to upload transaction: ${resp.status}, ${this.lastResponseError}`);
          }
          this.txPosted = true;
        }
      };
      exports.TransactionUploader = TransactionUploader;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arconnect/index.js
  var require_arconnect = __commonJS({
    "../ArweaveWalletConnector/node_modules/arconnect/index.js"(exports, module) {
      module.exports = {};
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/transactions.js
  var require_transactions = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/transactions.js"(exports) {
      "use strict";
      var __await = exports && exports.__await || function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      var __asyncGenerator = exports && exports.__asyncGenerator || function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var error_1 = require_error();
      var transaction_1 = require_transaction();
      var ArweaveUtils = require_utils();
      var transaction_uploader_1 = require_transaction_uploader();
      require_arconnect();
      var Transactions = class {
        constructor(api, crypto2, chunks) {
          this.api = api;
          this.crypto = crypto2;
          this.chunks = chunks;
        }
        getTransactionAnchor() {
          return this.api.get(`tx_anchor`, { transformResponse: [] }).then((response) => {
            return response.data;
          });
        }
        getPrice(byteSize, targetAddress) {
          let endpoint = targetAddress ? `price/${byteSize}/${targetAddress}` : `price/${byteSize}`;
          return this.api.get(endpoint, {
            transformResponse: [
              function(data) {
                return data;
              }
            ]
          }).then((response) => {
            return response.data;
          });
        }
        async get(id) {
          const response = await this.api.get(`tx/${id}`);
          if (response.status == 200) {
            const data_size = parseInt(response.data.data_size);
            if (response.data.format >= 2 && data_size > 0 && data_size <= 1024 * 1024 * 12) {
              const data = await this.getData(id);
              return new transaction_1.default(Object.assign(Object.assign({}, response.data), { data }));
            }
            return new transaction_1.default(Object.assign(Object.assign({}, response.data), { format: response.data.format || 1 }));
          }
          if (response.status == 404) {
            throw new error_1.default("TX_NOT_FOUND");
          }
          if (response.status == 410) {
            throw new error_1.default("TX_FAILED");
          }
          throw new error_1.default("TX_INVALID");
        }
        fromRaw(attributes) {
          return new transaction_1.default(attributes);
        }
        async search(tagName, tagValue) {
          return this.api.post(`arql`, {
            op: "equals",
            expr1: tagName,
            expr2: tagValue
          }).then((response) => {
            if (!response.data) {
              return [];
            }
            return response.data;
          });
        }
        getStatus(id) {
          return this.api.get(`tx/${id}/status`).then((response) => {
            if (response.status == 200) {
              return {
                status: 200,
                confirmed: response.data
              };
            }
            return {
              status: response.status,
              confirmed: null
            };
          });
        }
        async getData(id, options) {
          const data = await this.chunks.downloadChunkedData(id);
          if (options && options.decode && !options.string) {
            return data;
          }
          if (options && options.decode && options.string) {
            return ArweaveUtils.bufferToString(data);
          }
          return ArweaveUtils.bufferTob64Url(data);
        }
        async sign(transaction, jwk, options) {
          if (!jwk && (typeof window === "undefined" || !window.arweaveWallet)) {
            throw new Error(`A new Arweave transaction must provide the jwk parameter.`);
          } else if (!jwk || jwk === "use_wallet") {
            try {
              const existingPermissions = await window.arweaveWallet.getPermissions();
              if (!existingPermissions.includes("SIGN_TRANSACTION"))
                await window.arweaveWallet.connect(["SIGN_TRANSACTION"]);
            } catch (_a) {
            }
            const signedTransaction = await window.arweaveWallet.sign(transaction, options);
            transaction.setSignature({
              id: signedTransaction.id,
              owner: signedTransaction.owner,
              reward: signedTransaction.reward,
              tags: signedTransaction.tags,
              signature: signedTransaction.signature
            });
          } else {
            transaction.setOwner(jwk.n);
            let dataToSign = await transaction.getSignatureData();
            let rawSignature = await this.crypto.sign(jwk, dataToSign, options);
            let id = await this.crypto.hash(rawSignature);
            transaction.setSignature({
              id: ArweaveUtils.bufferTob64Url(id),
              owner: jwk.n,
              signature: ArweaveUtils.bufferTob64Url(rawSignature)
            });
          }
        }
        async verify(transaction) {
          const signaturePayload = await transaction.getSignatureData();
          const rawSignature = transaction.get("signature", {
            decode: true,
            string: false
          });
          const expectedId = ArweaveUtils.bufferTob64Url(await this.crypto.hash(rawSignature));
          if (transaction.id !== expectedId) {
            throw new Error(`Invalid transaction signature or ID! The transaction ID doesn't match the expected SHA-256 hash of the signature.`);
          }
          return this.crypto.verify(transaction.owner, signaturePayload, rawSignature);
        }
        async post(transaction) {
          if (typeof transaction === "string") {
            transaction = new transaction_1.default(JSON.parse(transaction));
          } else if (typeof transaction.readInt32BE === "function") {
            transaction = new transaction_1.default(JSON.parse(transaction.toString()));
          } else if (typeof transaction === "object" && !(transaction instanceof transaction_1.default)) {
            transaction = new transaction_1.default(transaction);
          }
          if (!(transaction instanceof transaction_1.default)) {
            throw new Error(`Must be Transaction object`);
          }
          if (!transaction.chunks) {
            await transaction.prepareChunks(transaction.data);
          }
          const uploader = await this.getUploader(transaction, transaction.data);
          try {
            while (!uploader.isComplete) {
              await uploader.uploadChunk();
            }
          } catch (e) {
            if (uploader.lastResponseStatus > 0) {
              return {
                status: uploader.lastResponseStatus,
                statusText: uploader.lastResponseError,
                data: {
                  error: uploader.lastResponseError
                }
              };
            }
            throw e;
          }
          return {
            status: 200,
            statusText: "OK",
            data: {}
          };
        }
        async getUploader(upload, data) {
          let uploader;
          if (data instanceof ArrayBuffer) {
            data = new Uint8Array(data);
          }
          if (upload instanceof transaction_1.default) {
            if (!data) {
              data = upload.data;
            }
            if (!(data instanceof Uint8Array)) {
              throw new Error("Data format is invalid");
            }
            if (!upload.chunks) {
              await upload.prepareChunks(data);
            }
            uploader = new transaction_uploader_1.TransactionUploader(this.api, upload);
            if (!uploader.data || uploader.data.length === 0) {
              uploader.data = data;
            }
          } else {
            if (typeof upload === "string") {
              upload = await transaction_uploader_1.TransactionUploader.fromTransactionId(this.api, upload);
            }
            if (!data || !(data instanceof Uint8Array)) {
              throw new Error(`Must provide data when resuming upload`);
            }
            uploader = await transaction_uploader_1.TransactionUploader.fromSerialized(this.api, upload, data);
          }
          return uploader;
        }
        upload(upload, data) {
          return __asyncGenerator(this, arguments, function* upload_1() {
            const uploader = yield __await(this.getUploader(upload, data));
            while (!uploader.isComplete) {
              yield __await(uploader.uploadChunk());
              yield yield __await(uploader);
            }
            return yield __await(uploader);
          });
        }
      };
      exports.default = Transactions;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/wallets.js
  var require_wallets = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/wallets.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ArweaveUtils = require_utils();
      require_arconnect();
      var Wallets = class {
        constructor(api, crypto2) {
          this.api = api;
          this.crypto = crypto2;
        }
        getBalance(address) {
          return this.api.get(`wallet/${address}/balance`, {
            transformResponse: [
              function(data) {
                return data;
              }
            ]
          }).then((response) => {
            return response.data;
          });
        }
        getLastTransactionID(address) {
          return this.api.get(`wallet/${address}/last_tx`).then((response) => {
            return response.data;
          });
        }
        generate() {
          return this.crypto.generateJWK();
        }
        async jwkToAddress(jwk) {
          if (!jwk || jwk === "use_wallet") {
            return this.getAddress();
          } else {
            return this.getAddress(jwk);
          }
        }
        async getAddress(jwk) {
          if (!jwk || jwk === "use_wallet") {
            try {
              await window.arweaveWallet.connect(["ACCESS_ADDRESS"]);
            } catch (_a) {
            }
            return window.arweaveWallet.getActiveAddress();
          } else {
            return this.ownerToAddress(jwk.n);
          }
        }
        async ownerToAddress(owner) {
          return ArweaveUtils.bufferTob64Url(await this.crypto.hash(ArweaveUtils.b64UrlToBuffer(owner)));
        }
      };
      exports.default = Wallets;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/silo.js
  var require_silo = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/silo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SiloResource = void 0;
      var ArweaveUtils = require_utils();
      var Silo = class {
        constructor(api, crypto2, transactions) {
          this.api = api;
          this.crypto = crypto2;
          this.transactions = transactions;
        }
        async get(siloURI) {
          if (!siloURI) {
            throw new Error(`No Silo URI specified`);
          }
          const resource = await this.parseUri(siloURI);
          const ids = await this.transactions.search("Silo-Name", resource.getAccessKey());
          if (ids.length == 0) {
            throw new Error(`No data could be found for the Silo URI: ${siloURI}`);
          }
          const transaction = await this.transactions.get(ids[0]);
          if (!transaction) {
            throw new Error(`No data could be found for the Silo URI: ${siloURI}`);
          }
          const encrypted = transaction.get("data", { decode: true, string: false });
          return this.crypto.decrypt(encrypted, resource.getEncryptionKey());
        }
        async readTransactionData(transaction, siloURI) {
          if (!siloURI) {
            throw new Error(`No Silo URI specified`);
          }
          const resource = await this.parseUri(siloURI);
          const encrypted = transaction.get("data", { decode: true, string: false });
          return this.crypto.decrypt(encrypted, resource.getEncryptionKey());
        }
        async parseUri(siloURI) {
          const parsed = siloURI.match(/^([a-z0-9-_]+)\.([0-9]+)/i);
          if (!parsed) {
            throw new Error(`Invalid Silo name, must be a name in the format of [a-z0-9]+.[0-9]+, e.g. 'bubble.7'`);
          }
          const siloName = parsed[1];
          const hashIterations = Math.pow(2, parseInt(parsed[2]));
          const digest = await this.hash(ArweaveUtils.stringToBuffer(siloName), hashIterations);
          const accessKey = ArweaveUtils.bufferTob64(digest.slice(0, 15));
          const encryptionkey = await this.hash(digest.slice(16, 31), 1);
          return new SiloResource(siloURI, accessKey, encryptionkey);
        }
        async hash(input, iterations) {
          let digest = await this.crypto.hash(input);
          for (let count = 0; count < iterations - 1; count++) {
            digest = await this.crypto.hash(digest);
          }
          return digest;
        }
      };
      exports.default = Silo;
      var SiloResource = class {
        constructor(uri, accessKey, encryptionKey) {
          this.uri = uri;
          this.accessKey = accessKey;
          this.encryptionKey = encryptionKey;
        }
        getUri() {
          return this.uri;
        }
        getAccessKey() {
          return this.accessKey;
        }
        getEncryptionKey() {
          return this.encryptionKey;
        }
      };
      exports.SiloResource = SiloResource;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/chunks.js
  var require_chunks = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/chunks.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var error_1 = require_error();
      var ArweaveUtils = require_utils();
      var Chunks = class {
        constructor(api) {
          this.api = api;
        }
        async getTransactionOffset(id) {
          const resp = await this.api.get(`tx/${id}/offset`);
          if (resp.status === 200) {
            return resp.data;
          }
          throw new Error(`Unable to get transaction offset: ${(0, error_1.getError)(resp)}`);
        }
        async getChunk(offset) {
          const resp = await this.api.get(`chunk/${offset}`);
          if (resp.status === 200) {
            return resp.data;
          }
          throw new Error(`Unable to get chunk: ${(0, error_1.getError)(resp)}`);
        }
        async getChunkData(offset) {
          const chunk = await this.getChunk(offset);
          const buf = ArweaveUtils.b64UrlToBuffer(chunk.chunk);
          return buf;
        }
        firstChunkOffset(offsetResponse) {
          return parseInt(offsetResponse.offset) - parseInt(offsetResponse.size) + 1;
        }
        async downloadChunkedData(id) {
          const offsetResponse = await this.getTransactionOffset(id);
          const size = parseInt(offsetResponse.size);
          const endOffset = parseInt(offsetResponse.offset);
          const startOffset = endOffset - size + 1;
          const data = new Uint8Array(size);
          let byte = 0;
          while (byte < size) {
            if (this.api.config.logging) {
              console.log(`[chunk] ${byte}/${size}`);
            }
            let chunkData;
            try {
              chunkData = await this.getChunkData(startOffset + byte);
            } catch (error) {
              console.error(`[chunk] Failed to fetch chunk at offset ${startOffset + byte}`);
              console.error(`[chunk] This could indicate that the chunk wasn't uploaded or hasn't yet seeded properly to a particular gatway/node`);
            }
            if (chunkData) {
              data.set(chunkData, byte);
              byte += chunkData.length;
            } else {
              throw new Error(`Coudn't complete data download at ${byte}/${size}`);
            }
          }
          return data;
        }
      };
      exports.default = Chunks;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/blocks.js
  var require_blocks = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/blocks.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var error_1 = require_error();
      require_arconnect();
      var Blocks = class {
        constructor(api, network) {
          this.api = api;
          this.network = network;
        }
        async get(indepHash) {
          const response = await this.api.get(`${Blocks.ENDPOINT}${indepHash}`);
          if (response.status === 200) {
            return response.data;
          } else {
            if (response.status === 404) {
              throw new error_1.default("BLOCK_NOT_FOUND");
            } else {
              throw new Error(`Error while loading block data: ${response}`);
            }
          }
        }
        async getCurrent() {
          const { current } = await this.network.getInfo();
          return await this.get(current);
        }
      };
      exports.default = Blocks;
      Blocks.ENDPOINT = "block/hash/";
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/common.js
  var require_common = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/common.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ar_1 = require_ar();
      var api_1 = require_api();
      var network_1 = require_network();
      var transactions_1 = require_transactions();
      var wallets_1 = require_wallets();
      var transaction_1 = require_transaction();
      var ArweaveUtils = require_utils();
      var silo_1 = require_silo();
      var chunks_1 = require_chunks();
      var blocks_1 = require_blocks();
      var Arweave = class {
        constructor(apiConfig) {
          this.api = new api_1.default(apiConfig);
          this.wallets = new wallets_1.default(this.api, Arweave.crypto);
          this.chunks = new chunks_1.default(this.api);
          this.transactions = new transactions_1.default(this.api, Arweave.crypto, this.chunks);
          this.silo = new silo_1.default(this.api, this.crypto, this.transactions);
          this.network = new network_1.default(this.api);
          this.blocks = new blocks_1.default(this.api, this.network);
          this.ar = new ar_1.default();
        }
        get crypto() {
          return Arweave.crypto;
        }
        get utils() {
          return Arweave.utils;
        }
        getConfig() {
          return {
            api: this.api.getConfig(),
            crypto: null
          };
        }
        async createTransaction(attributes, jwk) {
          const transaction = {};
          Object.assign(transaction, attributes);
          if (!attributes.data && !(attributes.target && attributes.quantity)) {
            throw new Error(`A new Arweave transaction must have a 'data' value, or 'target' and 'quantity' values.`);
          }
          if (attributes.owner == void 0) {
            if (jwk && jwk !== "use_wallet") {
              transaction.owner = jwk.n;
            }
          }
          if (attributes.last_tx == void 0) {
            transaction.last_tx = await this.transactions.getTransactionAnchor();
          }
          if (typeof attributes.data === "string") {
            attributes.data = ArweaveUtils.stringToBuffer(attributes.data);
          }
          if (attributes.data instanceof ArrayBuffer) {
            attributes.data = new Uint8Array(attributes.data);
          }
          if (attributes.data && !(attributes.data instanceof Uint8Array)) {
            throw new Error("Expected data to be a string, Uint8Array or ArrayBuffer");
          }
          if (attributes.reward == void 0) {
            const length = attributes.data ? attributes.data.byteLength : 0;
            transaction.reward = await this.transactions.getPrice(length, transaction.target);
          }
          transaction.data_root = "";
          transaction.data_size = attributes.data ? attributes.data.byteLength.toString() : "0";
          transaction.data = attributes.data || new Uint8Array(0);
          const createdTransaction = new transaction_1.default(transaction);
          await createdTransaction.getSignatureData();
          return createdTransaction;
        }
        async createSiloTransaction(attributes, jwk, siloUri) {
          const transaction = {};
          Object.assign(transaction, attributes);
          if (!attributes.data) {
            throw new Error(`Silo transactions must have a 'data' value`);
          }
          if (!siloUri) {
            throw new Error(`No Silo URI specified.`);
          }
          if (attributes.target || attributes.quantity) {
            throw new Error(`Silo transactions can only be used for storing data, sending AR to other wallets isn't supported.`);
          }
          if (attributes.owner == void 0) {
            if (!jwk || !jwk.n) {
              throw new Error(`A new Arweave transaction must either have an 'owner' attribute, or you must provide the jwk parameter.`);
            }
            transaction.owner = jwk.n;
          }
          if (attributes.last_tx == void 0) {
            transaction.last_tx = await this.transactions.getTransactionAnchor();
          }
          const siloResource = await this.silo.parseUri(siloUri);
          if (typeof attributes.data == "string") {
            const encrypted = await this.crypto.encrypt(ArweaveUtils.stringToBuffer(attributes.data), siloResource.getEncryptionKey());
            transaction.reward = await this.transactions.getPrice(encrypted.byteLength);
            transaction.data = ArweaveUtils.bufferTob64Url(encrypted);
          }
          if (attributes.data instanceof Uint8Array) {
            const encrypted = await this.crypto.encrypt(attributes.data, siloResource.getEncryptionKey());
            transaction.reward = await this.transactions.getPrice(encrypted.byteLength);
            transaction.data = ArweaveUtils.bufferTob64Url(encrypted);
          }
          const siloTransaction = new transaction_1.default(transaction);
          siloTransaction.addTag("Silo-Name", siloResource.getAccessKey());
          siloTransaction.addTag("Silo-Version", `0.1.0`);
          return siloTransaction;
        }
        arql(query) {
          return this.api.post("/arql", query).then((response) => response.data || []);
        }
      };
      exports.default = Arweave;
      Arweave.utils = ArweaveUtils;
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/lib/deepHash.js
  var require_deepHash = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/lib/deepHash.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var common_1 = require_common();
      async function deepHash(data) {
        if (Array.isArray(data)) {
          const tag2 = common_1.default.utils.concatBuffers([
            common_1.default.utils.stringToBuffer("list"),
            common_1.default.utils.stringToBuffer(data.length.toString())
          ]);
          return await deepHashChunks(data, await common_1.default.crypto.hash(tag2, "SHA-384"));
        }
        const tag = common_1.default.utils.concatBuffers([
          common_1.default.utils.stringToBuffer("blob"),
          common_1.default.utils.stringToBuffer(data.byteLength.toString())
        ]);
        const taggedHash = common_1.default.utils.concatBuffers([
          await common_1.default.crypto.hash(tag, "SHA-384"),
          await common_1.default.crypto.hash(data, "SHA-384")
        ]);
        return await common_1.default.crypto.hash(taggedHash, "SHA-384");
      }
      exports.default = deepHash;
      async function deepHashChunks(chunks, acc) {
        if (chunks.length < 1) {
          return acc;
        }
        const hashPair = common_1.default.utils.concatBuffers([
          acc,
          await deepHash(chunks[0])
        ]);
        const newAcc = await common_1.default.crypto.hash(hashPair, "SHA-384");
        return await deepHashChunks(chunks.slice(1), newAcc);
      }
    }
  });

  // ../ArweaveWalletConnector/node_modules/arweave/web/lib/transaction.js
  var require_transaction = __commonJS({
    "../ArweaveWalletConnector/node_modules/arweave/web/lib/transaction.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tag = void 0;
      var ArweaveUtils = require_utils();
      var deepHash_1 = require_deepHash();
      var merkle_1 = require_merkle();
      var BaseObject = class {
        get(field, options) {
          if (!Object.getOwnPropertyNames(this).includes(field)) {
            throw new Error(`Field "${field}" is not a property of the Arweave Transaction class.`);
          }
          if (this[field] instanceof Uint8Array) {
            if (options && options.decode && options.string) {
              return ArweaveUtils.bufferToString(this[field]);
            }
            if (options && options.decode && !options.string) {
              return this[field];
            }
            return ArweaveUtils.bufferTob64Url(this[field]);
          }
          if (options && options.decode == true) {
            if (options && options.string) {
              return ArweaveUtils.b64UrlToString(this[field]);
            }
            return ArweaveUtils.b64UrlToBuffer(this[field]);
          }
          return this[field];
        }
      };
      var Tag2 = class extends BaseObject {
        constructor(name, value, decode = false) {
          super();
          this.name = name;
          this.value = value;
        }
      };
      exports.Tag = Tag2;
      var Transaction = class extends BaseObject {
        constructor(attributes = {}) {
          super();
          this.format = 2;
          this.id = "";
          this.last_tx = "";
          this.owner = "";
          this.tags = [];
          this.target = "";
          this.quantity = "0";
          this.data_size = "0";
          this.data = new Uint8Array();
          this.data_root = "";
          this.reward = "0";
          this.signature = "";
          Object.assign(this, attributes);
          if (typeof this.data === "string") {
            this.data = ArweaveUtils.b64UrlToBuffer(this.data);
          }
          if (attributes.tags) {
            this.tags = attributes.tags.map((tag) => {
              return new Tag2(tag.name, tag.value);
            });
          }
        }
        addTag(name, value) {
          this.tags.push(new Tag2(ArweaveUtils.stringToB64Url(name), ArweaveUtils.stringToB64Url(value)));
        }
        toJSON() {
          return {
            format: this.format,
            id: this.id,
            last_tx: this.last_tx,
            owner: this.owner,
            tags: this.tags,
            target: this.target,
            quantity: this.quantity,
            data: ArweaveUtils.bufferTob64Url(this.data),
            data_size: this.data_size,
            data_root: this.data_root,
            data_tree: this.data_tree,
            reward: this.reward,
            signature: this.signature
          };
        }
        setOwner(owner) {
          this.owner = owner;
        }
        setSignature({ id, owner, reward, tags, signature }) {
          this.id = id;
          this.owner = owner;
          if (reward)
            this.reward = reward;
          if (tags)
            this.tags = tags;
          this.signature = signature;
        }
        async prepareChunks(data) {
          if (!this.chunks && data.byteLength > 0) {
            this.chunks = await (0, merkle_1.generateTransactionChunks)(data);
            this.data_root = ArweaveUtils.bufferTob64Url(this.chunks.data_root);
          }
          if (!this.chunks && data.byteLength === 0) {
            this.chunks = {
              chunks: [],
              data_root: new Uint8Array(),
              proofs: []
            };
            this.data_root = "";
          }
        }
        getChunk(idx, data) {
          if (!this.chunks) {
            throw new Error(`Chunks have not been prepared`);
          }
          const proof = this.chunks.proofs[idx];
          const chunk = this.chunks.chunks[idx];
          return {
            data_root: this.data_root,
            data_size: this.data_size,
            data_path: ArweaveUtils.bufferTob64Url(proof.proof),
            offset: proof.offset.toString(),
            chunk: ArweaveUtils.bufferTob64Url(data.slice(chunk.minByteRange, chunk.maxByteRange))
          };
        }
        async getSignatureData() {
          switch (this.format) {
            case 1:
              let tags = this.tags.reduce((accumulator, tag) => {
                return ArweaveUtils.concatBuffers([
                  accumulator,
                  tag.get("name", { decode: true, string: false }),
                  tag.get("value", { decode: true, string: false })
                ]);
              }, new Uint8Array());
              return ArweaveUtils.concatBuffers([
                this.get("owner", { decode: true, string: false }),
                this.get("target", { decode: true, string: false }),
                this.get("data", { decode: true, string: false }),
                ArweaveUtils.stringToBuffer(this.quantity),
                ArweaveUtils.stringToBuffer(this.reward),
                this.get("last_tx", { decode: true, string: false }),
                tags
              ]);
            case 2:
              if (!this.data_root) {
                await this.prepareChunks(this.data);
              }
              const tagList = this.tags.map((tag) => [
                tag.get("name", { decode: true, string: false }),
                tag.get("value", { decode: true, string: false })
              ]);
              return await (0, deepHash_1.default)([
                ArweaveUtils.stringToBuffer(this.format.toString()),
                this.get("owner", { decode: true, string: false }),
                this.get("target", { decode: true, string: false }),
                ArweaveUtils.stringToBuffer(this.quantity),
                ArweaveUtils.stringToBuffer(this.reward),
                this.get("last_tx", { decode: true, string: false }),
                tagList,
                ArweaveUtils.stringToBuffer(this.data_size),
                this.get("data_root", { decode: true, string: false })
              ]);
            default:
              throw new Error(`Unexpected transaction format: ${this.format}`);
          }
        }
      };
      exports.default = Transaction;
    }
  });

  // ../ArweaveWalletConnector/lib/ArweaveWebWallet.js
  var import_transaction, import_typescript_is3, __awaiter2, __rest, ArweaveWebWallet;
  var init_ArweaveWebWallet = __esm({
    "../ArweaveWalletConnector/lib/ArweaveWebWallet.js"() {
      init_Connector();
      init_Inject();
      import_transaction = __toESM(require_transaction(), 1);
      import_typescript_is3 = __toESM(require_typescript_is(), 1);
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __rest = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      ArweaveWebWallet = class extends Connector {
        constructor(appInfo, url) {
          super({ protocol: "arweave", version: "1.0.0" }, Object.assign({}, appInfo), url);
          this.namespaces = {
            arweaveWallet: {
              connect: () => this.address || this.connect(),
              disconnect: () => this.disconnect(),
              getActiveAddress: () => this.address,
              getActivePublicKey: () => this.getPublicKey(),
              getAllAddresses: () => {
                throw "not implemented";
              },
              getWalletNames: () => {
                throw "not implemented";
              },
              sign: (tx, options) => this.signTransaction(tx, options),
              dispatch: (tx, options) => this.dispatch(tx, options),
              encrypt: () => {
                throw "not implemented";
              },
              decrypt: (data, options) => this.decrypt(data, options),
              signature: (data, options) => this.sign(data, options),
              getPermissions: () => [],
              getArweaveConfig: () => this.getArweaveConfig()
            }
          };
          this.on("connect", () => load(this));
          this.on("disconnect", () => unload(this));
        }
        getPublicKey() {
          return __awaiter2(this, void 0, void 0, function* () {
            const res = yield this.postMessage("getPublicKey");
            if (!(0, import_typescript_is3.is)(res, (object) => {
              function _string(object2) {
                ;
                if (typeof object2 !== "string")
                  return {};
                else
                  return null;
              }
              return _string(object);
            })) {
              throw "TypeError";
            }
            return res;
          });
        }
        getArweaveConfig() {
          return __awaiter2(this, void 0, void 0, function* () {
            const res = yield this.postMessage("getArweaveConfig");
            if (!(0, import_typescript_is3.is)(res, (object) => {
              function _undefined(object2) {
                ;
                if (object2 !== void 0)
                  return {};
                else
                  return null;
              }
              function _number(object2) {
                ;
                if (typeof object2 !== "number")
                  return {};
                else
                  return null;
              }
              function _null(object2) {
                ;
                if (object2 !== null)
                  return {};
                else
                  return null;
              }
              function su__undefined__number_eu(object2) {
                var conditions = [_undefined, _number];
                for (const condition of conditions) {
                  var error = condition(object2);
                  if (!error)
                    return null;
                }
                return {};
              }
              function _string(object2) {
                ;
                if (typeof object2 !== "string")
                  return {};
                else
                  return null;
              }
              function su__undefined__string_eu(object2) {
                var conditions = [_undefined, _string];
                for (const condition of conditions) {
                  var error = condition(object2);
                  if (!error)
                    return null;
                }
                return {};
              }
              function su__undefined__string__number_eu(object2) {
                var conditions = [_undefined, _string, _number];
                for (const condition of conditions) {
                  var error = condition(object2);
                  if (!error)
                    return null;
                }
                return {};
              }
              function _false(object2) {
                ;
                if (object2 !== false)
                  return {};
                else
                  return null;
              }
              function _true(object2) {
                ;
                if (object2 !== true)
                  return {};
                else
                  return null;
              }
              function su__undefined__10__11_eu(object2) {
                var conditions = [_undefined, _false, _true];
                for (const condition of conditions) {
                  var error = condition(object2);
                  if (!error)
                    return null;
                }
                return {};
              }
              function _1(object2) {
                ;
                if (typeof object2 !== "object" || object2 === null || Array.isArray(object2))
                  return {};
                {
                  if ("timeout" in object2) {
                    var error = su__undefined__number_eu(object2["timeout"]);
                    if (error)
                      return error;
                  }
                }
                {
                  if ("protocol" in object2) {
                    var error = su__undefined__string_eu(object2["protocol"]);
                    if (error)
                      return error;
                  }
                }
                {
                  if ("host" in object2) {
                    var error = su__undefined__string_eu(object2["host"]);
                    if (error)
                      return error;
                  }
                }
                {
                  if ("port" in object2) {
                    var error = su__undefined__string__number_eu(object2["port"]);
                    if (error)
                      return error;
                  }
                }
                {
                  if ("logging" in object2) {
                    var error = su__undefined__10__11_eu(object2["logging"]);
                    if (error)
                      return error;
                  }
                }
                return null;
              }
              function _any() {
                return null;
              }
              function _2(object2) {
                ;
                if (typeof object2 !== "object" || object2 === null || Array.isArray(object2))
                  return {};
                {
                  if ("logger" in object2) {
                    var error = _any(object2["logger"]);
                    if (error)
                      return error;
                  }
                }
                return null;
              }
              function si__1__2_ei(object2) {
                var conditions = [_1, _2];
                for (const condition of conditions) {
                  var error = condition(object2);
                  if (error)
                    return error;
                }
                return null;
              }
              return si__1__2_ei(object);
            })) {
              throw "TypeError";
            }
            delete res.logger;
            return res;
          });
        }
        signTransaction(tx, options) {
          var _a;
          return __awaiter2(this, void 0, void 0, function* () {
            const { data, chunks } = tx, txHeader = __rest(tx, ["data", "chunks"]);
            const res = yield this.postMessage("signTransaction", [txHeader, options]);
            if (!(0, import_typescript_is3.is)(res, (object) => {
              function _string(object2) {
                ;
                if (typeof object2 !== "string")
                  return {};
                else
                  return null;
              }
              function _undefined(object2) {
                ;
                if (object2 !== void 0)
                  return {};
                else
                  return null;
              }
              function _null(object2) {
                ;
                if (object2 !== null)
                  return {};
                else
                  return null;
              }
              function su__undefined__null__string_eu(object2) {
                var conditions = [_undefined, _null, _string];
                for (const condition of conditions) {
                  var error = condition(object2);
                  if (!error)
                    return null;
                }
                return {};
              }
              function _9(object2) {
                ;
                if (typeof object2 !== "object" || object2 === null || Array.isArray(object2))
                  return {};
                {
                  if ("name" in object2) {
                    var error = _string(object2["name"]);
                    if (error)
                      return error;
                  } else
                    return {};
                }
                {
                  if ("value" in object2) {
                    var error = _string(object2["value"]);
                    if (error)
                      return error;
                  } else
                    return {};
                }
                return null;
              }
              function sa__9_ea_9(object2) {
                ;
                if (!Array.isArray(object2))
                  return {};
                for (let i = 0; i < object2.length; i++) {
                  var error = _9(object2[i]);
                  if (error)
                    return error;
                }
                return null;
              }
              function su__undefined__null_sa__9_ea_9_9_9_eu(object2) {
                var conditions = [_undefined, _null, sa__9_ea_9];
                for (const condition of conditions) {
                  var error = condition(object2);
                  if (!error)
                    return null;
                }
                return {};
              }
              function _0(object2) {
                ;
                if (typeof object2 !== "object" || object2 === null || Array.isArray(object2))
                  return {};
                {
                  if ("id" in object2) {
                    var error = _string(object2["id"]);
                    if (error)
                      return error;
                  } else
                    return {};
                }
                {
                  if ("owner" in object2) {
                    var error = su__undefined__null__string_eu(object2["owner"]);
                    if (error)
                      return error;
                  }
                }
                {
                  if ("tags" in object2) {
                    var error = su__undefined__null_sa__9_ea_9_9_9_eu(object2["tags"]);
                    if (error)
                      return error;
                  }
                }
                {
                  if ("signature" in object2) {
                    var error = _string(object2["signature"]);
                    if (error)
                      return error;
                  } else
                    return {};
                }
                {
                  if ("reward" in object2) {
                    var error = su__undefined__null__string_eu(object2["reward"]);
                    if (error)
                      return error;
                  }
                }
                return null;
              }
              return _0(object);
            })) {
              throw "TypeError";
            }
            tx.setSignature({
              id: res.id,
              owner: res.owner || tx.owner,
              tags: (_a = res.tags) === null || _a === void 0 ? void 0 : _a.map((tag) => new import_transaction.Tag(tag.name, tag.value, true)),
              signature: res.signature,
              reward: res.reward || void 0
            });
            return tx;
          });
        }
        dispatch(tx, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const res = yield this.postMessage("dispatch", [tx, options], { transfer: true });
            if (!(0, import_typescript_is3.is)(res, (object) => {
              function _string(object2) {
                ;
                if (typeof object2 !== "string")
                  return {};
                else
                  return null;
              }
              function _2(object2) {
                ;
                if (object2 !== "BASE")
                  return {};
                else
                  return null;
              }
              function _3(object2) {
                ;
                if (object2 !== "BUNDLED")
                  return {};
                else
                  return null;
              }
              function _null(object2) {
                ;
                if (object2 !== null)
                  return {};
                else
                  return null;
              }
              function su__2__3_eu(object2) {
                var conditions = [_2, _3];
                for (const condition of conditions) {
                  var error = condition(object2);
                  if (!error)
                    return null;
                }
                return {};
              }
              function _0(object2) {
                ;
                if (typeof object2 !== "object" || object2 === null || Array.isArray(object2))
                  return {};
                {
                  if ("id" in object2) {
                    var error = _string(object2["id"]);
                    if (error)
                      return error;
                  }
                }
                {
                  if ("type" in object2) {
                    var error = su__2__3_eu(object2["type"]);
                    if (error)
                      return error;
                  }
                }
                return null;
              }
              return _0(object);
            })) {
              throw "TypeError";
            }
            return res;
          });
        }
        sign(message, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const res = yield this.postMessage("sign", [message, options]);
            if (!ArrayBuffer.isView(res)) {
              throw "TypeError";
            }
            const constructor = message.constructor;
            return new constructor(res.buffer);
          });
        }
        decrypt(message, options) {
          return __awaiter2(this, void 0, void 0, function* () {
            const res = yield this.postMessage("decrypt", [message, options]);
            if (!ArrayBuffer.isView(res)) {
              throw "TypeError";
            }
            const constructor = message.constructor;
            return new constructor(res.buffer);
          });
        }
      };
    }
  });

  // ../ArweaveWalletConnector/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    ArweaveWebWallet: () => ArweaveWebWallet
  });
  var init_lib = __esm({
    "../ArweaveWalletConnector/lib/index.js"() {
      init_ArweaveWebWallet();
    }
  });

  // src/wrapper.ts
  var arweaveWallet;
  var run = async () => {
    const { ArweaveWebWallet: ArweaveWebWallet2 } = await Promise.resolve().then(() => (init_lib(), lib_exports));
    if (arweaveWallet) {
      arweaveWallet.disconnect();
    }
    arweaveWallet = new ArweaveWebWallet2();
    arweaveWallet.setUrl("arweave.app");
    arweaveWallet.connect();
  };
  window.addEventListener("arweave-wallet-connector:connect", run);
})();
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
//# sourceMappingURL=build.js.map
