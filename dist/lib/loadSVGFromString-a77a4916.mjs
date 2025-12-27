var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { k as svgViewBoxElementsRegEx, l as reViewBoxAttrValue, m as parseUnit, n as parsePreserveAspectRatioAttribute, N as NONE, o as svgNS, q as getSvgRegex, t as svgInvalidAncestors, C as CENTER, v as qrDecompose, T as TextMixin, I, A as Ao, w as parseAttributes, _ as _o, R as RIGHT, L as LEFT, D as DEFAULT_SVG_FONT_SIZE, x as nanoid, y as Image, P as Pn, z as invertTransform, E as yr, F as multiplyTransformMatrices, G as N, H as svgValidTagNamesRegEx, J as y } from "./sdk-entry-3267f079.mjs";
import "pinia";
import "vue";
function applyViewboxTransform(element) {
  if (!svgViewBoxElementsRegEx.test(element.nodeName)) {
    return {};
  }
  const viewBoxAttr = element.getAttribute("viewBox");
  let scaleX = 1;
  let scaleY = 1;
  let minX = 0;
  let minY = 0;
  let matrix;
  let el;
  const widthAttr = element.getAttribute("width");
  const heightAttr = element.getAttribute("height");
  const x = element.getAttribute("x") || 0;
  const y2 = element.getAttribute("y") || 0;
  const goodViewbox = viewBoxAttr && reViewBoxAttrValue.test(viewBoxAttr);
  const missingViewBox = !goodViewbox;
  const missingDimAttr = !widthAttr || !heightAttr || widthAttr === "100%" || heightAttr === "100%";
  let translateMatrix = "";
  let widthDiff = 0;
  let heightDiff = 0;
  if (missingViewBox) {
    if ((x || y2) && element.parentNode && element.parentNode.nodeName !== "#document") {
      translateMatrix = " translate(" + parseUnit(x || "0") + " " + parseUnit(y2 || "0") + ") ";
      matrix = (element.getAttribute("transform") || "") + translateMatrix;
      element.setAttribute("transform", matrix);
      element.removeAttribute("x");
      element.removeAttribute("y");
    }
  }
  if (missingViewBox && missingDimAttr) {
    return {
      width: 0,
      height: 0
    };
  }
  const parsedDim = {
    width: 0,
    height: 0
  };
  if (missingViewBox) {
    parsedDim.width = parseUnit(widthAttr);
    parsedDim.height = parseUnit(heightAttr);
    return parsedDim;
  }
  const pasedViewBox = viewBoxAttr.match(reViewBoxAttrValue);
  minX = -parseFloat(pasedViewBox[1]);
  minY = -parseFloat(pasedViewBox[2]);
  const viewBoxWidth = parseFloat(pasedViewBox[3]);
  const viewBoxHeight = parseFloat(pasedViewBox[4]);
  parsedDim.minX = minX;
  parsedDim.minY = minY;
  parsedDim.viewBoxWidth = viewBoxWidth;
  parsedDim.viewBoxHeight = viewBoxHeight;
  if (!missingDimAttr) {
    parsedDim.width = parseUnit(widthAttr);
    parsedDim.height = parseUnit(heightAttr);
    scaleX = parsedDim.width / viewBoxWidth;
    scaleY = parsedDim.height / viewBoxHeight;
  } else {
    parsedDim.width = viewBoxWidth;
    parsedDim.height = viewBoxHeight;
  }
  const preserveAspectRatio = parsePreserveAspectRatioAttribute(
    element.getAttribute("preserveAspectRatio") || ""
  );
  if (preserveAspectRatio.alignX !== NONE) {
    if (preserveAspectRatio.meetOrSlice === "meet") {
      scaleY = scaleX = scaleX > scaleY ? scaleY : scaleX;
    }
    if (preserveAspectRatio.meetOrSlice === "slice") {
      scaleY = scaleX = scaleX > scaleY ? scaleX : scaleY;
    }
    widthDiff = parsedDim.width - viewBoxWidth * scaleX;
    heightDiff = parsedDim.height - viewBoxHeight * scaleX;
    if (preserveAspectRatio.alignX === "Mid") {
      widthDiff /= 2;
    }
    if (preserveAspectRatio.alignY === "Mid") {
      heightDiff /= 2;
    }
    if (preserveAspectRatio.alignX === "Min") {
      widthDiff = 0;
    }
    if (preserveAspectRatio.alignY === "Min") {
      heightDiff = 0;
    }
  }
  if (scaleX === 1 && scaleY === 1 && minX === 0 && minY === 0 && x === 0 && y2 === 0) {
    return parsedDim;
  }
  if ((x || y2) && element.parentNode.nodeName !== "#document") {
    translateMatrix = " translate(" + parseUnit(x || "0") + " " + parseUnit(y2 || "0") + ") ";
  }
  matrix = translateMatrix + " matrix(" + scaleX + " 0 0 " + scaleY + " " + (minX * scaleX + widthDiff) + " " + (minY * scaleY + heightDiff) + ") ";
  if (element.nodeName === "svg") {
    el = element.ownerDocument.createElementNS(svgNS, "g");
    while (element.firstChild) {
      el.appendChild(element.firstChild);
    }
    element.appendChild(el);
  } else {
    el = element;
    el.removeAttribute("x");
    el.removeAttribute("y");
    matrix = el.getAttribute("transform") + matrix;
  }
  el.setAttribute("transform", matrix);
  return parsedDim;
}
const svgInvalidAncestorsRegEx = getSvgRegex(svgInvalidAncestors);
function hasInvalidAncestor(element) {
  let _element = element;
  while (_element && (_element = _element.parentElement)) {
    if (_element && _element.nodeName && svgInvalidAncestorsRegEx.test(_element.nodeName.replace("svg:", "")) && !_element.getAttribute("instantiated_by_use")) {
      return true;
    }
  }
  return false;
}
function elementById(doc, id) {
  if (doc.getElementById) {
    return doc.getElementById(id);
  }
  const nodelist = doc.getElementsByTagName("*");
  for (let i = 0, len = nodelist.length; i < len; i++) {
    const node = nodelist[i];
    if (id === node.getAttribute("id")) {
      return node;
    }
  }
  return null;
}
function getMultipleNodes(doc, nodeNames) {
  let nodeName, nodeArray = [], nodeList, i, len;
  for (i = 0, len = nodeNames.length; i < len; i++) {
    nodeName = nodeNames[i];
    nodeList = doc.getElementsByTagNameNS(
      "http://www.w3.org/2000/svg",
      nodeName
    );
    nodeArray = nodeArray.concat(Array.from(nodeList));
  }
  return nodeArray;
}
function parseUseDirectives(doc) {
  const nodelist = getMultipleNodes(doc, ["use", "svg:use"]);
  let i = 0;
  while (nodelist.length && i < nodelist.length) {
    const el = nodelist[i], xlinkAttribute = el.getAttribute("xlink:href") || el.getAttribute("href");
    if (xlinkAttribute === null) {
      return;
    }
    const xlink = xlinkAttribute.slice(1);
    const x = el.getAttribute("x") || 0;
    const y2 = el.getAttribute("y") || 0;
    if (!elementById(doc, xlink)) {
      return;
    }
    let el2 = elementById(doc, xlink).cloneNode(true);
    let currentTrans = (el2.getAttribute("transform") || "") + " translate(" + x + ", " + y2 + ")";
    const oldLength = nodelist.length;
    const namespace = svgNS;
    applyViewboxTransform(el2);
    if (/^svg$/i.test(el2.nodeName)) {
      const el3 = el2.ownerDocument.createElementNS(namespace, "g");
      for (let j = 0, attrs = el2.attributes, len = attrs.length; j < len; j++) {
        const attr = attrs.item(j);
        attr && el3.setAttributeNS(namespace, attr.nodeName, attr.nodeValue);
      }
      while (el2.firstChild) {
        el3.appendChild(el2.firstChild);
      }
      el2 = el3;
    }
    for (let j = 0, attrs = el.attributes, len = attrs.length; j < len; j++) {
      const attr = attrs.item(j);
      if (!attr) {
        continue;
      }
      const { nodeName, nodeValue } = attr;
      if (nodeName === "x" || nodeName === "y" || nodeName === "xlink:href" || nodeName === "href") {
        continue;
      }
      if (nodeName === "transform") {
        currentTrans = nodeValue + " " + currentTrans;
      } else {
        el2.setAttribute(nodeName, nodeValue);
      }
    }
    el2.setAttribute("transform", currentTrans);
    el2.setAttribute("instantiated_by_use", "1");
    el2.removeAttribute("id");
    const parentNode = el.parentNode;
    parentNode.replaceChild(el2, el);
    if (nodelist.length === oldLength) {
      i++;
    }
  }
}
const _assignTransformMatrixProps = (object) => {
  if (object.transformMatrix) {
    const { scaleX, scaleY, angle, skewX } = qrDecompose(
      object.transformMatrix
    );
    object.flipX = false;
    object.flipY = false;
    object.set("scaleX", scaleX);
    object.set("scaleY", scaleY);
    object.angle = angle;
    object.skewX = skewX;
    object.skewY = 0;
  }
};
const removeTransformMatrixForSvgParsing = (object, preserveAspectRatioOptions) => {
  let center = object._findCenterFromElement();
  if (object.transformMatrix) {
    _assignTransformMatrixProps(object);
    center = center.transform(object.transformMatrix);
  }
  delete object.transformMatrix;
  if (preserveAspectRatioOptions) {
    object.scaleX *= preserveAspectRatioOptions.scaleX;
    object.scaleY *= preserveAspectRatioOptions.scaleY;
    object.cropX = preserveAspectRatioOptions.cropX;
    object.cropY = preserveAspectRatioOptions.cropY;
    center.x += preserveAspectRatioOptions.offsetLeft;
    center.y += preserveAspectRatioOptions.offsetTop;
    object.width = preserveAspectRatioOptions.width;
    object.height = preserveAspectRatioOptions.height;
  }
  object.setPositionByOrigin(center, CENTER, CENTER);
};
const gradientsAttrs = [
  "gradientTransform",
  "x1",
  "x2",
  "y1",
  "y2",
  "gradientUnits",
  "cx",
  "cy",
  "r",
  "fx",
  "fy"
];
const xlinkAttr = "xlink:href";
function recursivelyParseGradientsXlink(doc, gradient) {
  var _a;
  const xLink = ((_a = gradient.getAttribute(xlinkAttr)) == null ? void 0 : _a.slice(1)) || "", referencedGradient = elementById(doc, xLink);
  if (referencedGradient && referencedGradient.getAttribute(xlinkAttr)) {
    recursivelyParseGradientsXlink(doc, referencedGradient);
  }
  if (referencedGradient) {
    gradientsAttrs.forEach((attr) => {
      const value = referencedGradient.getAttribute(attr);
      if (!gradient.hasAttribute(attr) && value) {
        gradient.setAttribute(attr, value);
      }
    });
    if (!gradient.children.length) {
      const referenceClone = referencedGradient.cloneNode(true);
      while (referenceClone.firstChild) {
        gradient.appendChild(referenceClone.firstChild);
      }
    }
  }
  gradient.removeAttribute(xlinkAttr);
}
const tagArray = [
  "linearGradient",
  "radialGradient",
  "svg:linearGradient",
  "svg:radialGradient"
];
function getGradientDefs(doc) {
  const elList = getMultipleNodes(doc, tagArray);
  const gradientDefs = {};
  let j = elList.length;
  while (j--) {
    const el = elList[j];
    if (el.getAttribute("xlink:href")) {
      recursivelyParseGradientsXlink(doc, el);
    }
    const id = el.getAttribute("id");
    if (id) {
      gradientDefs[id] = el;
    }
  }
  return gradientDefs;
}
function getCSSRules(doc) {
  const styles = doc.getElementsByTagName("style");
  let i;
  let len;
  const allRules = {};
  for (i = 0, len = styles.length; i < len; i++) {
    const styleContents = (styles[i].textContent || "").replace(
      // remove comments
      /\/\*[\s\S]*?\*\//g,
      ""
    );
    if (styleContents.trim() === "") {
      continue;
    }
    styleContents.split("}").filter(function(rule) {
      return rule.trim();
    }).forEach(function(rule) {
      const match = rule.split("{"), ruleObj = {}, declaration = match[1].trim(), propertyValuePairs = declaration.split(";").filter(function(pair) {
        return pair.trim();
      });
      for (i = 0, len = propertyValuePairs.length; i < len; i++) {
        const pair = propertyValuePairs[i].split(":"), property = pair[0].trim(), value = pair[1].trim();
        ruleObj[property] = value;
      }
      rule = match[0].trim();
      rule.split(",").forEach((_rule) => {
        _rule = _rule.replace(/^svg/i, "").trim();
        if (_rule === "") {
          return;
        }
        allRules[_rule] = {
          ...allRules[_rule] || {},
          ...ruleObj
        };
      });
    });
  }
  return allRules;
}
class IText extends Ao {
  constructor(text, options) {
    super(text, options);
    __publicField(this, "effects");
    this.effects = options.effects;
    this.on("mousedblclick", this.onDblClick.bind(this));
  }
  renderEffects() {
    var _a;
    console.log("renderEffects:");
    (_a = this.canvas) == null ? void 0 : _a.renderAll();
  }
  _renderChar(method, ctx, lineIndex, charIndex, _char, left, top) {
    if (this.effects) {
      for (let i = this.effects.length - 1; i >= 0; i--) {
        const item = this.effects[i];
        ctx.save();
        ctx.strokeStyle = item.stroke;
        ctx.lineJoin = item.strokeLineJoin;
        ctx.lineWidth = item.strokeWidth;
        ctx.strokeText(_char, left, top);
        ctx.restore();
      }
    }
    super._renderChar(method, ctx, lineIndex, charIndex, _char, left, top);
  }
  static async fromElement(element, options, cssRules) {
    const parsedAttributes = parseAttributes(
      element,
      _o.ATTRIBUTE_NAMES,
      cssRules
    );
    const {
      textAnchor = LEFT,
      textDecoration = "",
      dx = 0,
      dy = 0,
      top = 0,
      left = 0,
      fontSize = DEFAULT_SVG_FONT_SIZE,
      strokeWidth = 1,
      ...restOfOptions
    } = { ...options, ...parsedAttributes };
    const textContent = element.textContent || "";
    const text = new this(textContent, {
      left: left + dx,
      top: top + dy,
      underline: textDecoration.includes("underline"),
      overline: textDecoration.includes("overline"),
      linethrough: textDecoration.includes("line-through"),
      // we initialize this as 0
      strokeWidth: 0,
      fontSize,
      editable: true,
      ...restOfOptions
    }), textHeightScaleFactor = text.getScaledHeight() / text.height, lineHeightDiff = (text.height + text.strokeWidth) * text.lineHeight - text.height, scaledDiff = lineHeightDiff * textHeightScaleFactor, textHeight = text.getScaledHeight() + scaledDiff;
    let offX = 0;
    if (textAnchor === CENTER) {
      offX = text.getScaledWidth() / 2;
    }
    if (textAnchor === RIGHT) {
      offX = text.getScaledWidth();
    }
    text.set({
      left: text.left - offX,
      top: text.top - (textHeight - text.fontSize * (0.07 + text._fontSizeFraction)) / text.lineHeight,
      strokeWidth
    });
    text.text.charCodeAt(0);
    const computerModernFonts = /* @__PURE__ */ new Set([
      "cmsy10",
      "cmr10",
      "cmmi10",
      "cmmi7",
      "cmex10",
      "cmss10",
      "cmss12",
      "cmtt10",
      "cmbx10",
      "cmbxsl10",
      "cmssl10",
      "cmfi10",
      "cmcsc10",
      "cmvtt10",
      "cmb10",
      "cmmi12",
      "cmr12",
      "cmu10"
    ]);
    if (computerModernFonts.has(text.fontFamily)) {
      text.set({
        fontFamily: "times new roman"
      });
    }
    return text;
  }
}
Object.assign(IText.prototype, {
  ...TextMixin
});
I.setClass(IText);
I.setSVGClass(IText);
const findTag = (el) => {
  const tag = el.tagName.toLowerCase().replace("svg:", "");
  if (tag === "image")
    return Image;
  if (tag === "text")
    return IText;
  return I.getSVGClass(el.tagName.toLowerCase().replace("svg:", ""));
};
class ElementsParser {
  constructor(elements, options, reviver, doc, clipPaths, masks) {
    this.elements = elements;
    this.options = options;
    this.reviver = reviver;
    this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g;
    this.doc = doc;
    this.clipPaths = clipPaths;
    this.masks = masks;
    this.gradientDefs = getGradientDefs(doc);
    this.cssRules = getCSSRules(doc);
  }
  parse() {
    return Promise.all(
      this.elements.map((element) => this.createObject(element))
    );
  }
  async createObject(el) {
    const klass = findTag(el);
    if (klass) {
      const obj = await klass.fromElement(
        el,
        this.options,
        this.cssRules
      );
      obj.set({ id: nanoid(10) });
      this.resolveGradient(obj, el, "fill");
      this.resolveGradient(obj, el, "stroke");
      if (obj instanceof Image && obj._originalElement) {
        removeTransformMatrixForSvgParsing(
          obj,
          obj.parsePreserveAspectRatioAttribute()
        );
      } else {
        removeTransformMatrixForSvgParsing(obj);
      }
      await this.resolveClipPath(obj, el);
      await this.resolveMask(obj, el);
      this.reviver && this.reviver(el, obj);
      return obj;
    }
    return null;
  }
  extractPropertyDefinition(obj, property, storage) {
    const value = obj[property], regex = this.regexUrl;
    if (!regex.test(value)) {
      return void 0;
    }
    regex.lastIndex = 0;
    const id = regex.exec(value)[1];
    regex.lastIndex = 0;
    return storage[id];
  }
  resolveGradient(obj, el, property) {
    const gradientDef = this.extractPropertyDefinition(
      obj,
      property,
      this.gradientDefs
    );
    if (gradientDef) {
      const opacityAttr = el.getAttribute(property + "-opacity");
      const gradient = Pn.fromElement(gradientDef, obj, {
        ...this.options,
        opacity: opacityAttr
      });
      obj.set(property, gradient);
    }
  }
  async resolveClipPath(obj, usingElement) {
    const clipPathElements = this.extractPropertyDefinition(
      obj,
      "clipPath",
      this.clipPaths
    );
    if (clipPathElements) {
      const objTransformInv = invertTransform(obj.calcTransformMatrix());
      const clipPathTag = clipPathElements[0].parentElement;
      let clipPathOwner = usingElement;
      while (clipPathOwner.parentElement && clipPathOwner.getAttribute("clip-path") !== obj.clipPath) {
        clipPathOwner = clipPathOwner.parentElement;
      }
      clipPathOwner.parentElement.appendChild(clipPathTag);
      const container = await Promise.all(
        clipPathElements.map((clipPathElement) => {
          return findTag(clipPathElement).fromElement(clipPathElement, this.options, this.cssRules).then((enlivedClippath) => {
            removeTransformMatrixForSvgParsing(enlivedClippath);
            enlivedClippath.fillRule = enlivedClippath.clipRule;
            delete enlivedClippath.clipRule;
            return enlivedClippath;
          });
        })
      );
      const clipPath = container.length === 1 ? container[0] : new yr(container);
      const gTransform = multiplyTransformMatrices(
        objTransformInv,
        clipPath.calcTransformMatrix()
      );
      if (clipPath.clipPath) {
        await this.resolveClipPath(clipPath, clipPathOwner);
      }
      const { scaleX, scaleY, angle, skewX, translateX, translateY } = qrDecompose(gTransform);
      clipPath.set({
        flipX: false,
        flipY: false
      });
      clipPath.set({
        scaleX,
        scaleY,
        angle,
        skewX,
        skewY: 0
      });
      clipPath.setPositionByOrigin(
        new N(translateX, translateY),
        CENTER,
        CENTER
      );
      obj.clipPath = clipPath;
    } else {
      delete obj.clipPath;
      return;
    }
  }
  async resolveMask(obj, usingElement) {
    const maskElements = this.extractPropertyDefinition(
      obj,
      "mask",
      this.masks
    );
    if (maskElements) {
      const maskElement = maskElements[0];
      const maskImage = await Image.fromElement(maskElement);
      let src = maskImage == null ? void 0 : maskImage.getSrc();
      if (maskElement.tagName.toLowerCase() === "text") {
        const text = await IText.fromElement(maskElement);
        src = text.toDataURL();
      }
      obj.set({ mask: {
        src,
        left: obj.left,
        top: obj.top,
        width: obj.width,
        height: obj.height
      } });
    }
  }
}
const isValidSvgTag = (el) => svgValidTagNamesRegEx.test(el.nodeName.replace("svg:", ""));
const createEmptyResponse = () => ({
  objects: [],
  elements: [],
  options: {},
  allElements: []
});
async function parseSVGDocument(doc, reviver, { crossOrigin, signal } = {}) {
  if (signal && signal.aborted) {
    console.log("`options.signal` is in `aborted` state");
    return createEmptyResponse();
  }
  const documentElement = doc.documentElement;
  parseUseDirectives(doc);
  const descendants = Array.from(documentElement.getElementsByTagName("*")), options = {
    ...applyViewboxTransform(documentElement),
    crossOrigin,
    signal
  };
  const elements = descendants.filter((el) => {
    applyViewboxTransform(el);
    return isValidSvgTag(el) && !hasInvalidAncestor(el);
  });
  if (!elements || elements && !elements.length) {
    return {
      ...createEmptyResponse(),
      options,
      allElements: descendants
    };
  }
  const localClipPaths = {};
  const loaclMasks = {};
  descendants.filter((el) => el.nodeName.replace("svg:", "") === "clipPath").forEach((el) => {
    const id = el.getAttribute("id");
    localClipPaths[id] = Array.from(el.getElementsByTagName("*")).filter(
      (el2) => isValidSvgTag(el2)
    );
  });
  descendants.filter((el) => el.nodeName.replace("svg:", "") === "mask").forEach((el) => {
    const id = el.getAttribute("id");
    loaclMasks[id] = Array.from(el.getElementsByTagName("*")).filter(
      (el2) => isValidSvgTag(el2)
    );
  });
  const elementParser = new ElementsParser(
    elements,
    options,
    reviver,
    doc,
    localClipPaths,
    loaclMasks
  );
  const instances = await elementParser.parse();
  return {
    objects: instances,
    elements,
    options,
    allElements: descendants
  };
}
const initializeCanvas = (fontFamily, fontSize, fontWeight, fontStyle) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = `${fontWeight} ${fontStyle} ${fontSize}px ${fontFamily}`;
  return context;
};
const measureTextWidthWithCache = (context, text, cache, fontKey) => {
  const cacheKey = `${fontKey}-${text}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  } else {
    const width = context.measureText(text).width;
    cache.set(cacheKey, width);
    return width;
  }
};
const detectAndSplitHiddenSpaces = (svgData) => {
  const cache = /* @__PURE__ */ new Map();
  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgData, "image/svg+xml");
  const tspanElements = svgDocument.querySelectorAll("tspan");
  tspanElements.forEach((tspan) => {
    var _a, _b, _c, _d, _e, _f;
    const xValues = ((_a = tspan.getAttribute("x")) == null ? void 0 : _a.split(" ").map(Number)) || [];
    const textContent = tspan.textContent || "";
    let previousX = xValues[0];
    const newTspans = [];
    const fontFamily = ((_b = tspan.closest("text")) == null ? void 0 : _b.getAttribute("font-family")) || "Arial";
    const fontSize = parseFloat(((_c = tspan.closest("text")) == null ? void 0 : _c.getAttribute("font-size")) || "14");
    const fontWeight = ((_d = tspan.closest("text")) == null ? void 0 : _d.getAttribute("font-weight")) || "normal";
    const fontStyle = ((_e = tspan.closest("text")) == null ? void 0 : _e.getAttribute("font-style")) || "normal";
    const fontKey = `${fontFamily}-${fontWeight}-${fontStyle}-${fontSize}`;
    const context = initializeCanvas(fontFamily, fontSize, fontWeight, fontStyle);
    let startIdx = 0;
    for (let i = 1; i < xValues.length; i++) {
      const currentX = xValues[i];
      const char = textContent[i - 1];
      const charWidth = measureTextWidthWithCache(context, char, cache, fontKey);
      const spaceWidth = measureTextWidthWithCache(context, " ", cache, fontKey);
      if (currentX - previousX > charWidth + spaceWidth - 0.8) {
        const newTextContent = textContent.slice(startIdx, i);
        const newTspan = tspan.cloneNode();
        newTspan.textContent = newTextContent;
        newTspan.setAttribute("x", xValues[startIdx].toString());
        newTspans.push(newTspan);
        startIdx = i;
      }
      previousX = currentX;
    }
    if (startIdx < textContent.length) {
      const newTspan = tspan.cloneNode();
      newTspan.textContent = textContent.slice(startIdx);
      newTspan.setAttribute("x", xValues[startIdx].toString());
      newTspans.push(newTspan);
    }
    const docFragment = document.createDocumentFragment();
    newTspans.forEach((newTspan) => {
      docFragment.appendChild(newTspan);
    });
    (_f = tspan.parentNode) == null ? void 0 : _f.replaceChild(docFragment, tspan);
  });
  return new XMLSerializer().serializeToString(svgDocument);
};
const mergeTspans = (svgData) => {
  var _a, _b, _c;
  const cache = /* @__PURE__ */ new Map();
  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgData, "image/svg+xml");
  const tspanElements = Array.from(svgDocument.querySelectorAll("tspan"));
  let i = 0;
  while (i < tspanElements.length - 1) {
    const currentTspan = tspanElements[i];
    const nextTspan = tspanElements[i + 1];
    if (isIconOrGlyph(currentTspan.textContent) || isIconOrGlyph(nextTspan.textContent)) {
      i++;
      continue;
    }
    const currentXValues = ((_a = currentTspan.getAttribute("x")) == null ? void 0 : _a.split(" ").map(Number)) || [];
    const nextXValues = ((_b = nextTspan.getAttribute("x")) == null ? void 0 : _b.split(" ").map(Number)) || [];
    const currentText = currentTspan.textContent || "";
    const nextText = nextTspan.textContent || "";
    const currentLastX = currentXValues[currentXValues.length - 1];
    const nextFirstX = nextXValues[0];
    const currentTextElement = currentTspan.closest("text");
    const nextTextElement = nextTspan.closest("text");
    if (!currentTextElement || !nextTextElement) {
      i++;
      continue;
    }
    const currentFontFamily = currentTextElement.getAttribute("font-family") || "Arial";
    const currentFontSize = parseFloat(currentTextElement.getAttribute("font-size") || "14");
    const currentFontWeight = currentTextElement.getAttribute("font-weight") || "normal";
    const currentFontStyle = currentTextElement.getAttribute("font-style") || "normal";
    const currentY = currentTspan.getAttribute("y") || "";
    const currentTransform = currentTextElement.getAttribute("transform") || "";
    const nextFontFamily = nextTextElement.getAttribute("font-family") || "Arial";
    const nextFontSize = parseFloat(nextTextElement.getAttribute("font-size") || "14");
    const nextFontWeight = nextTextElement.getAttribute("font-weight") || "normal";
    const nextFontStyle = nextTextElement.getAttribute("font-style") || "normal";
    const nextY = nextTspan.getAttribute("y") || "";
    const nextTransform = nextTextElement.getAttribute("transform") || "";
    if (currentFontFamily === nextFontFamily && currentFontSize === nextFontSize && currentFontWeight === nextFontWeight && currentFontStyle === nextFontStyle && currentY === nextY && currentTransform === nextTransform) {
      const fontKey = `${currentFontFamily}-${currentFontWeight}-${currentFontStyle}-${currentFontSize}`;
      const context = initializeCanvas(currentFontFamily, currentFontSize, currentFontWeight, currentFontStyle);
      const lastChar = currentText[currentText.length - 1];
      const spaceWidth = measureTextWidthWithCache(context, " ", cache, fontKey);
      const lastCharWidth = measureTextWidthWithCache(context, lastChar, cache, fontKey);
      if (nextFirstX - currentLastX < lastCharWidth + spaceWidth - 1) {
        currentTspan.textContent = currentText + nextText;
        currentTspan.setAttribute("x", [...currentXValues, ...nextXValues].join(" "));
        (_c = nextTspan.parentNode) == null ? void 0 : _c.removeChild(nextTspan);
        tspanElements.splice(i + 1, 1);
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  return new XMLSerializer().serializeToString(svgDocument);
};
const isIconOrGlyph = (text) => {
  const specialCharacters = /* @__PURE__ */ new Set(["", "•", "⚙", "✪"]);
  for (const char of text) {
    const codePoint = char.codePointAt(0);
    if (specialCharacters.has(char)) {
      return true;
    }
    const iconGlyphRanges = [
      [9728, 9983],
      // Miscellaneous Symbols
      [127744, 128511],
      // Miscellaneous Symbols and Pictographs
      [128512, 128591],
      // Emoticons
      [128640, 128767],
      // Transport and Map Symbols
      [128768, 128895],
      // Alchemical Symbols
      [128896, 129023],
      // Geometric Shapes Extended
      [129024, 129279],
      // Supplemental Arrows-C
      [129280, 129535],
      // Supplemental Symbols and Pictographs
      [129536, 129647],
      // Chess Symbols
      [129648, 129791]
      // Symbols and Pictographs Extended-A
    ];
    for (const [start, end] of iconGlyphRanges) {
      if (codePoint >= start && codePoint <= end) {
        return true;
      }
    }
  }
  return false;
};
function loadSVGFromString(string, reviver, options) {
  const mergeSVGString = mergeTspans(string);
  const modifiedSVGString = detectAndSplitHiddenSpaces(mergeSVGString);
  const parser = new (y()).DOMParser(), doc = parser.parseFromString(modifiedSVGString.trim(), "text/xml");
  cloneTspansIntoTextNodes(doc);
  return parseSVGDocument(doc, reviver, options);
}
function cloneTspansIntoTextNodes(doc) {
  var _a;
  const texts = doc.getElementsByTagName("text");
  const docFragment = doc.createDocumentFragment();
  for (let i = texts.length - 1; i >= 0; i--) {
    const textElement = texts[i];
    const tspans = textElement.getElementsByTagName("tspan");
    if (tspans.length > 1) {
      for (let j = 0; j < tspans.length; j++) {
        const tspan = tspans[j];
        const newText = doc.createElementNS("http://www.w3.org/2000/svg", "text");
        for (let attr of textElement.attributes) {
          newText.setAttribute(attr.name, attr.value);
        }
        newText.appendChild(tspan.cloneNode(true));
        docFragment.appendChild(newText);
      }
      (_a = textElement.parentNode) == null ? void 0 : _a.replaceChild(docFragment, textElement);
    }
  }
}
export {
  loadSVGFromString
};
//# sourceMappingURL=loadSVGFromString-a77a4916.mjs.map
