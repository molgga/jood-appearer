(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-app-pages-demo-demo-module"], {
    /***/
    "../../node_modules/intersection-observer/intersection-observer.js":
    /*!***********************************************************************************************************!*\
      !*** /home/travis/build/molgga/jood-appearer/node_modules/intersection-observer/intersection-observer.js ***!
      \***********************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIntersectionObserverIntersectionObserverJs(module, exports) {
      /**
       * Copyright 2016 Google Inc. All Rights Reserved.
       *
       * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
       *
       *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
       *
       */
      (function () {
        'use strict'; // Exit early if we're not running in a browser.

        if (typeof window !== 'object') {
          return;
        } // Exit early if all IntersectionObserver and IntersectionObserverEntry
        // features are natively supported.


        if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
          // Minimal polyfill for Edge 15's lack of `isIntersecting`
          // See: https://github.com/w3c/IntersectionObserver/issues/211
          if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
            Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
              get: function get() {
                return this.intersectionRatio > 0;
              }
            });
          }

          return;
        }
        /**
         * Returns the embedding frame element, if any.
         * @param {!Document} doc
         * @return {!Element}
         */


        function getFrameElement(doc) {
          try {
            return doc.defaultView && doc.defaultView.frameElement || null;
          } catch (e) {
            // Ignore the error.
            return null;
          }
        }
        /**
         * A local reference to the root document.
         */


        var document = function (startDoc) {
          var doc = startDoc;
          var frame = getFrameElement(doc);

          while (frame) {
            doc = frame.ownerDocument;
            frame = getFrameElement(doc);
          }

          return doc;
        }(window.document);
        /**
         * An IntersectionObserver registry. This registry exists to hold a strong
         * reference to IntersectionObserver instances currently observing a target
         * element. Without this registry, instances without another reference may be
         * garbage collected.
         */


        var registry = [];
        /**
         * The signal updater for cross-origin intersection. When not null, it means
         * that the polyfill is configured to work in a cross-origin mode.
         * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
         */

        var crossOriginUpdater = null;
        /**
         * The current cross-origin intersection. Only used in the cross-origin mode.
         * @type {DOMRect|ClientRect}
         */

        var crossOriginRect = null;
        /**
         * Creates the global IntersectionObserverEntry constructor.
         * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
         * @param {Object} entry A dictionary of instance properties.
         * @constructor
         */

        function IntersectionObserverEntry(entry) {
          this.time = entry.time;
          this.target = entry.target;
          this.rootBounds = ensureDOMRect(entry.rootBounds);
          this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
          this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
          this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.

          var targetRect = this.boundingClientRect;
          var targetArea = targetRect.width * targetRect.height;
          var intersectionRect = this.intersectionRect;
          var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.

          if (targetArea) {
            // Round the intersection ratio to avoid floating point math issues:
            // https://github.com/w3c/IntersectionObserver/issues/324
            this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
          } else {
            // If area is zero and is intersecting, sets to 1, otherwise to 0
            this.intersectionRatio = this.isIntersecting ? 1 : 0;
          }
        }
        /**
         * Creates the global IntersectionObserver constructor.
         * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
         * @param {Function} callback The function to be invoked after intersection
         *     changes have queued. The function is not invoked if the queue has
         *     been emptied by calling the `takeRecords` method.
         * @param {Object=} opt_options Optional configuration options.
         * @constructor
         */


        function IntersectionObserver(callback, opt_options) {
          var options = opt_options || {};

          if (typeof callback != 'function') {
            throw new Error('callback must be a function');
          }

          if (options.root && options.root.nodeType != 1) {
            throw new Error('root must be an Element');
          } // Binds and throttles `this._checkForIntersections`.


          this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.

          this._callback = callback;
          this._observationTargets = [];
          this._queuedEntries = [];
          this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.

          this.thresholds = this._initThresholds(options.threshold);
          this.root = options.root || null;
          this.rootMargin = this._rootMarginValues.map(function (margin) {
            return margin.value + margin.unit;
          }).join(' ');
          /** @private @const {!Array<!Document>} */

          this._monitoringDocuments = [];
          /** @private @const {!Array<function()>} */

          this._monitoringUnsubscribes = [];
        }
        /**
         * The minimum interval within which the document will be checked for
         * intersection changes.
         */


        IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
        /**
         * The frequency in which the polyfill polls for intersection changes.
         * this can be updated on a per instance basis and must be set prior to
         * calling `observe` on the first target.
         */

        IntersectionObserver.prototype.POLL_INTERVAL = null;
        /**
         * Use a mutation observer on the root element
         * to detect intersection changes.
         */

        IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
        /**
         * Sets up the polyfill in the cross-origin mode. The result is the
         * updater function that accepts two arguments: `boundingClientRect` and
         * `intersectionRect` - just as these fields would be available to the
         * parent via `IntersectionObserverEntry`. This function should be called
         * each time the iframe receives intersection information from the parent
         * window, e.g. via messaging.
         * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
         */

        IntersectionObserver._setupCrossOriginUpdater = function () {
          if (!crossOriginUpdater) {
            /**
             * @param {DOMRect|ClientRect} boundingClientRect
             * @param {DOMRect|ClientRect} intersectionRect
             */
            crossOriginUpdater = function crossOriginUpdater(boundingClientRect, intersectionRect) {
              if (!boundingClientRect || !intersectionRect) {
                crossOriginRect = getEmptyRect();
              } else {
                crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
              }

              registry.forEach(function (observer) {
                observer._checkForIntersections();
              });
            };
          }

          return crossOriginUpdater;
        };
        /**
         * Resets the cross-origin mode.
         */


        IntersectionObserver._resetCrossOriginUpdater = function () {
          crossOriginUpdater = null;
          crossOriginRect = null;
        };
        /**
         * Starts observing a target element for intersection changes based on
         * the thresholds values.
         * @param {Element} target The DOM element to observe.
         */


        IntersectionObserver.prototype.observe = function (target) {
          var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
            return item.element == target;
          });

          if (isTargetAlreadyObserved) {
            return;
          }

          if (!(target && target.nodeType == 1)) {
            throw new Error('target must be an Element');
          }

          this._registerInstance();

          this._observationTargets.push({
            element: target,
            entry: null
          });

          this._monitorIntersections(target.ownerDocument);

          this._checkForIntersections();
        };
        /**
         * Stops observing a target element for intersection changes.
         * @param {Element} target The DOM element to observe.
         */


        IntersectionObserver.prototype.unobserve = function (target) {
          this._observationTargets = this._observationTargets.filter(function (item) {
            return item.element != target;
          });

          this._unmonitorIntersections(target.ownerDocument);

          if (this._observationTargets.length == 0) {
            this._unregisterInstance();
          }
        };
        /**
         * Stops observing all target elements for intersection changes.
         */


        IntersectionObserver.prototype.disconnect = function () {
          this._observationTargets = [];

          this._unmonitorAllIntersections();

          this._unregisterInstance();
        };
        /**
         * Returns any queue entries that have not yet been reported to the
         * callback and clears the queue. This can be used in conjunction with the
         * callback to obtain the absolute most up-to-date intersection information.
         * @return {Array} The currently queued entries.
         */


        IntersectionObserver.prototype.takeRecords = function () {
          var records = this._queuedEntries.slice();

          this._queuedEntries = [];
          return records;
        };
        /**
         * Accepts the threshold value from the user configuration object and
         * returns a sorted array of unique threshold values. If a value is not
         * between 0 and 1 and error is thrown.
         * @private
         * @param {Array|number=} opt_threshold An optional threshold value or
         *     a list of threshold values, defaulting to [0].
         * @return {Array} A sorted list of unique and valid threshold values.
         */


        IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
          var threshold = opt_threshold || [0];
          if (!Array.isArray(threshold)) threshold = [threshold];
          return threshold.sort().filter(function (t, i, a) {
            if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
              throw new Error('threshold must be a number between 0 and 1 inclusively');
            }

            return t !== a[i - 1];
          });
        };
        /**
         * Accepts the rootMargin value from the user configuration object
         * and returns an array of the four margin values as an object containing
         * the value and unit properties. If any of the values are not properly
         * formatted or use a unit other than px or %, and error is thrown.
         * @private
         * @param {string=} opt_rootMargin An optional rootMargin value,
         *     defaulting to '0px'.
         * @return {Array<Object>} An array of margin objects with the keys
         *     value and unit.
         */


        IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
          var marginString = opt_rootMargin || '0px';
          var margins = marginString.split(/\s+/).map(function (margin) {
            var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);

            if (!parts) {
              throw new Error('rootMargin must be specified in pixels or percent');
            }

            return {
              value: parseFloat(parts[1]),
              unit: parts[2]
            };
          }); // Handles shorthand.

          margins[1] = margins[1] || margins[0];
          margins[2] = margins[2] || margins[0];
          margins[3] = margins[3] || margins[1];
          return margins;
        };
        /**
         * Starts polling for intersection changes if the polling is not already
         * happening, and if the page's visibility state is visible.
         * @param {!Document} doc
         * @private
         */


        IntersectionObserver.prototype._monitorIntersections = function (doc) {
          var win = doc.defaultView;

          if (!win) {
            // Already destroyed.
            return;
          }

          if (this._monitoringDocuments.indexOf(doc) != -1) {
            // Already monitoring.
            return;
          } // Private state for monitoring.


          var callback = this._checkForIntersections;
          var monitoringInterval = null;
          var domObserver = null; // If a poll interval is set, use polling instead of listening to
          // resize and scroll events or DOM mutations.

          if (this.POLL_INTERVAL) {
            monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
          } else {
            addEvent(win, 'resize', callback, true);
            addEvent(doc, 'scroll', callback, true);

            if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
              domObserver = new win.MutationObserver(callback);
              domObserver.observe(doc, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
              });
            }
          }

          this._monitoringDocuments.push(doc);

          this._monitoringUnsubscribes.push(function () {
            // Get the window object again. When a friendly iframe is destroyed, it
            // will be null.
            var win = doc.defaultView;

            if (win) {
              if (monitoringInterval) {
                win.clearInterval(monitoringInterval);
              }

              removeEvent(win, 'resize', callback, true);
            }

            removeEvent(doc, 'scroll', callback, true);

            if (domObserver) {
              domObserver.disconnect();
            }
          }); // Also monitor the parent.


          if (doc != (this.root && this.root.ownerDocument || document)) {
            var frame = getFrameElement(doc);

            if (frame) {
              this._monitorIntersections(frame.ownerDocument);
            }
          }
        };
        /**
         * Stops polling for intersection changes.
         * @param {!Document} doc
         * @private
         */


        IntersectionObserver.prototype._unmonitorIntersections = function (doc) {
          var index = this._monitoringDocuments.indexOf(doc);

          if (index == -1) {
            return;
          }

          var rootDoc = this.root && this.root.ownerDocument || document; // Check if any dependent targets are still remaining.

          var hasDependentTargets = this._observationTargets.some(function (item) {
            var itemDoc = item.element.ownerDocument; // Target is in this context.

            if (itemDoc == doc) {
              return true;
            } // Target is nested in this context.


            while (itemDoc && itemDoc != rootDoc) {
              var frame = getFrameElement(itemDoc);
              itemDoc = frame && frame.ownerDocument;

              if (itemDoc == doc) {
                return true;
              }
            }

            return false;
          });

          if (hasDependentTargets) {
            return;
          } // Unsubscribe.


          var unsubscribe = this._monitoringUnsubscribes[index];

          this._monitoringDocuments.splice(index, 1);

          this._monitoringUnsubscribes.splice(index, 1);

          unsubscribe(); // Also unmonitor the parent.

          if (doc != rootDoc) {
            var frame = getFrameElement(doc);

            if (frame) {
              this._unmonitorIntersections(frame.ownerDocument);
            }
          }
        };
        /**
         * Stops polling for intersection changes.
         * @param {!Document} doc
         * @private
         */


        IntersectionObserver.prototype._unmonitorAllIntersections = function () {
          var unsubscribes = this._monitoringUnsubscribes.slice(0);

          this._monitoringDocuments.length = 0;
          this._monitoringUnsubscribes.length = 0;

          for (var i = 0; i < unsubscribes.length; i++) {
            unsubscribes[i]();
          }
        };
        /**
         * Scans each observation target for intersection changes and adds them
         * to the internal entries queue. If new entries are found, it
         * schedules the callback to be invoked.
         * @private
         */


        IntersectionObserver.prototype._checkForIntersections = function () {
          if (!this.root && crossOriginUpdater && !crossOriginRect) {
            // Cross origin monitoring, but no initial data available yet.
            return;
          }

          var rootIsInDom = this._rootIsInDom();

          var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

          this._observationTargets.forEach(function (item) {
            var target = item.element;
            var targetRect = getBoundingClientRect(target);

            var rootContainsTarget = this._rootContainsTarget(target);

            var oldEntry = item.entry;

            var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);

            var newEntry = item.entry = new IntersectionObserverEntry({
              time: now(),
              target: target,
              boundingClientRect: targetRect,
              rootBounds: crossOriginUpdater && !this.root ? null : rootRect,
              intersectionRect: intersectionRect
            });

            if (!oldEntry) {
              this._queuedEntries.push(newEntry);
            } else if (rootIsInDom && rootContainsTarget) {
              // If the new entry intersection ratio has crossed any of the
              // thresholds, add a new entry.
              if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                this._queuedEntries.push(newEntry);
              }
            } else {
              // If the root is not in the DOM or target is not contained within
              // root but the previous entry for this target had an intersection,
              // add a new record indicating removal.
              if (oldEntry && oldEntry.isIntersecting) {
                this._queuedEntries.push(newEntry);
              }
            }
          }, this);

          if (this._queuedEntries.length) {
            this._callback(this.takeRecords(), this);
          }
        };
        /**
         * Accepts a target and root rect computes the intersection between then
         * following the algorithm in the spec.
         * TODO(philipwalton): at this time clip-path is not considered.
         * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
         * @param {Element} target The target DOM element
         * @param {Object} targetRect The bounding rect of the target.
         * @param {Object} rootRect The bounding rect of the root after being
         *     expanded by the rootMargin value.
         * @return {?Object} The final intersection rect object or undefined if no
         *     intersection is found.
         * @private
         */


        IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, targetRect, rootRect) {
          // If the element isn't displayed, an intersection can't happen.
          if (window.getComputedStyle(target).display == 'none') return;
          var intersectionRect = targetRect;
          var parent = getParentNode(target);
          var atRoot = false;

          while (!atRoot && parent) {
            var parentRect = null;
            var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.

            if (parentComputedStyle.display == 'none') return null;

            if (parent == this.root || parent.nodeType ==
            /* DOCUMENT */
            9) {
              atRoot = true;

              if (parent == this.root || parent == document) {
                if (crossOriginUpdater && !this.root) {
                  if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
                    // A 0-size cross-origin intersection means no-intersection.
                    parent = null;
                    parentRect = null;
                    intersectionRect = null;
                  } else {
                    parentRect = crossOriginRect;
                  }
                } else {
                  parentRect = rootRect;
                }
              } else {
                // Check if there's a frame that can be navigated to.
                var frame = getParentNode(parent);
                var frameRect = frame && getBoundingClientRect(frame);

                var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);

                if (frameRect && frameIntersect) {
                  parent = frame;
                  parentRect = convertFromParentRect(frameRect, frameIntersect);
                } else {
                  parent = null;
                  intersectionRect = null;
                }
              }
            } else {
              // If the element has a non-visible overflow, and it's not the <body>
              // or <html> element, update the intersection rect.
              // Note: <body> and <html> cannot be clipped to a rect that's not also
              // the document rect, so no need to compute a new intersection.
              var doc = parent.ownerDocument;

              if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != 'visible') {
                parentRect = getBoundingClientRect(parent);
              }
            } // If either of the above conditionals set a new parentRect,
            // calculate new intersection data.


            if (parentRect) {
              intersectionRect = computeRectIntersection(parentRect, intersectionRect);
            }

            if (!intersectionRect) break;
            parent = parent && getParentNode(parent);
          }

          return intersectionRect;
        };
        /**
         * Returns the root rect after being expanded by the rootMargin value.
         * @return {ClientRect} The expanded root rect.
         * @private
         */


        IntersectionObserver.prototype._getRootRect = function () {
          var rootRect;

          if (this.root) {
            rootRect = getBoundingClientRect(this.root);
          } else {
            // Use <html>/<body> instead of window since scroll bars affect size.
            var html = document.documentElement;
            var body = document.body;
            rootRect = {
              top: 0,
              left: 0,
              right: html.clientWidth || body.clientWidth,
              width: html.clientWidth || body.clientWidth,
              bottom: html.clientHeight || body.clientHeight,
              height: html.clientHeight || body.clientHeight
            };
          }

          return this._expandRectByRootMargin(rootRect);
        };
        /**
         * Accepts a rect and expands it by the rootMargin value.
         * @param {DOMRect|ClientRect} rect The rect object to expand.
         * @return {ClientRect} The expanded rect.
         * @private
         */


        IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
          var margins = this._rootMarginValues.map(function (margin, i) {
            return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
          });

          var newRect = {
            top: rect.top - margins[0],
            right: rect.right + margins[1],
            bottom: rect.bottom + margins[2],
            left: rect.left - margins[3]
          };
          newRect.width = newRect.right - newRect.left;
          newRect.height = newRect.bottom - newRect.top;
          return newRect;
        };
        /**
         * Accepts an old and new entry and returns true if at least one of the
         * threshold values has been crossed.
         * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
         *    particular target element or null if no previous entry exists.
         * @param {IntersectionObserverEntry} newEntry The current entry for a
         *    particular target element.
         * @return {boolean} Returns true if a any threshold has been crossed.
         * @private
         */


        IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
          // To make comparing easier, an entry that has a ratio of 0
          // but does not actually intersect is given a value of -1
          var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
          var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios

          if (oldRatio === newRatio) return;

          for (var i = 0; i < this.thresholds.length; i++) {
            var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio
            // and the old ratio are on the opposite sides of a threshold.

            if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
              return true;
            }
          }
        };
        /**
         * Returns whether or not the root element is an element and is in the DOM.
         * @return {boolean} True if the root element is an element and is in the DOM.
         * @private
         */


        IntersectionObserver.prototype._rootIsInDom = function () {
          return !this.root || containsDeep(document, this.root);
        };
        /**
         * Returns whether or not the target element is a child of root.
         * @param {Element} target The target element to check.
         * @return {boolean} True if the target element is a child of root.
         * @private
         */


        IntersectionObserver.prototype._rootContainsTarget = function (target) {
          return containsDeep(this.root || document, target) && (!this.root || this.root.ownerDocument == target.ownerDocument);
        };
        /**
         * Adds the instance to the global IntersectionObserver registry if it isn't
         * already present.
         * @private
         */


        IntersectionObserver.prototype._registerInstance = function () {
          if (registry.indexOf(this) < 0) {
            registry.push(this);
          }
        };
        /**
         * Removes the instance from the global IntersectionObserver registry.
         * @private
         */


        IntersectionObserver.prototype._unregisterInstance = function () {
          var index = registry.indexOf(this);
          if (index != -1) registry.splice(index, 1);
        };
        /**
         * Returns the result of the performance.now() method or null in browsers
         * that don't support the API.
         * @return {number} The elapsed time since the page was requested.
         */


        function now() {
          return window.performance && performance.now && performance.now();
        }
        /**
         * Throttles a function and delays its execution, so it's only called at most
         * once within a given time period.
         * @param {Function} fn The function to throttle.
         * @param {number} timeout The amount of time that must pass before the
         *     function can be called again.
         * @return {Function} The throttled function.
         */


        function throttle(fn, timeout) {
          var timer = null;
          return function () {
            if (!timer) {
              timer = setTimeout(function () {
                fn();
                timer = null;
              }, timeout);
            }
          };
        }
        /**
         * Adds an event handler to a DOM node ensuring cross-browser compatibility.
         * @param {Node} node The DOM node to add the event handler to.
         * @param {string} event The event name.
         * @param {Function} fn The event handler to add.
         * @param {boolean} opt_useCapture Optionally adds the even to the capture
         *     phase. Note: this only works in modern browsers.
         */


        function addEvent(node, event, fn, opt_useCapture) {
          if (typeof node.addEventListener == 'function') {
            node.addEventListener(event, fn, opt_useCapture || false);
          } else if (typeof node.attachEvent == 'function') {
            node.attachEvent('on' + event, fn);
          }
        }
        /**
         * Removes a previously added event handler from a DOM node.
         * @param {Node} node The DOM node to remove the event handler from.
         * @param {string} event The event name.
         * @param {Function} fn The event handler to remove.
         * @param {boolean} opt_useCapture If the event handler was added with this
         *     flag set to true, it should be set to true here in order to remove it.
         */


        function removeEvent(node, event, fn, opt_useCapture) {
          if (typeof node.removeEventListener == 'function') {
            node.removeEventListener(event, fn, opt_useCapture || false);
          } else if (typeof node.detatchEvent == 'function') {
            node.detatchEvent('on' + event, fn);
          }
        }
        /**
         * Returns the intersection between two rect objects.
         * @param {Object} rect1 The first rect.
         * @param {Object} rect2 The second rect.
         * @return {?Object|?ClientRect} The intersection rect or undefined if no
         *     intersection is found.
         */


        function computeRectIntersection(rect1, rect2) {
          var top = Math.max(rect1.top, rect2.top);
          var bottom = Math.min(rect1.bottom, rect2.bottom);
          var left = Math.max(rect1.left, rect2.left);
          var right = Math.min(rect1.right, rect2.right);
          var width = right - left;
          var height = bottom - top;
          return width >= 0 && height >= 0 && {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
          } || null;
        }
        /**
         * Shims the native getBoundingClientRect for compatibility with older IE.
         * @param {Element} el The element whose bounding rect to get.
         * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
         */


        function getBoundingClientRect(el) {
          var rect;

          try {
            rect = el.getBoundingClientRect();
          } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
            // https://github.com/w3c/IntersectionObserver/pull/205
          }

          if (!rect) return getEmptyRect(); // Older IE

          if (!(rect.width && rect.height)) {
            rect = {
              top: rect.top,
              right: rect.right,
              bottom: rect.bottom,
              left: rect.left,
              width: rect.right - rect.left,
              height: rect.bottom - rect.top
            };
          }

          return rect;
        }
        /**
         * Returns an empty rect object. An empty rect is returned when an element
         * is not in the DOM.
         * @return {ClientRect} The empty rect.
         */


        function getEmptyRect() {
          return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
          };
        }
        /**
         * Ensure that the result has all of the necessary fields of the DOMRect.
         * Specifically this ensures that `x` and `y` fields are set.
         *
         * @param {?DOMRect|?ClientRect} rect
         * @return {?DOMRect}
         */


        function ensureDOMRect(rect) {
          // A `DOMRect` object has `x` and `y` fields.
          if (!rect || 'x' in rect) {
            return rect;
          } // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
          // for internally calculated Rect objects. For the purposes of
          // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
          // for these fields.


          return {
            top: rect.top,
            y: rect.top,
            bottom: rect.bottom,
            left: rect.left,
            x: rect.left,
            right: rect.right,
            width: rect.width,
            height: rect.height
          };
        }
        /**
         * Inverts the intersection and bounding rect from the parent (frame) BCR to
         * the local BCR space.
         * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
         * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
         * @return {ClientRect} The local root bounding rect for the parent's children.
         */


        function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
          var top = parentIntersectionRect.top - parentBoundingRect.top;
          var left = parentIntersectionRect.left - parentBoundingRect.left;
          return {
            top: top,
            left: left,
            height: parentIntersectionRect.height,
            width: parentIntersectionRect.width,
            bottom: top + parentIntersectionRect.height,
            right: left + parentIntersectionRect.width
          };
        }
        /**
         * Checks to see if a parent element contains a child element (including inside
         * shadow DOM).
         * @param {Node} parent The parent element.
         * @param {Node} child The child element.
         * @return {boolean} True if the parent node contains the child node.
         */


        function containsDeep(parent, child) {
          var node = child;

          while (node) {
            if (node == parent) return true;
            node = getParentNode(node);
          }

          return false;
        }
        /**
         * Gets the parent node of an element or its host element if the parent node
         * is a shadow root.
         * @param {Node} node The node whose parent to get.
         * @return {Node|null} The parent node or null if no parent exists.
         */


        function getParentNode(node) {
          var parent = node.parentNode;

          if (node.nodeType ==
          /* DOCUMENT */
          9 && node != document) {
            // If this node is a document node, look for the embedding frame.
            return getFrameElement(node);
          }

          if (parent && parent.nodeType == 11 && parent.host) {
            // If the parent is a shadow root, return the host element.
            return parent.host;
          }

          if (parent && parent.assignedSlot) {
            // If the parent is distributed in a <slot>, return the parent of a slot.
            return parent.assignedSlot.parentNode;
          }

          return parent;
        } // Exposes the constructors globally.


        window.IntersectionObserver = IntersectionObserver;
        window.IntersectionObserverEntry = IntersectionObserverEntry;
      })();
      /***/

    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/example/common/sample-actor/sample-actor.component.html":
    /*!*************************************************************************************************************************************************************!*\
      !*** /home/travis/build/molgga/jood-appearer/node_modules/raw-loader/dist/cjs.js!./src/app/modules/example/common/sample-actor/sample-actor.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesExampleCommonSampleActorSampleActorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"panel-count\">\n  <div class=\"aside\">\n    <span class=\"label\">appearCount</span>\n    <span class=\"count\">{{ appearCount }}</span>\n  </div>\n  <div class=\"spacer\"></div>\n  <div class=\"bside\">\n    <span class=\"label\">disappearCount</span>\n    <span class=\"count\">{{ disappearCount }}</span>\n  </div>\n</div>\n<div class=\"panel-item\">\n  {{ item | json }}\n</div>\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/base-actor/base-actor.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** /home/travis/build/molgga/jood-appearer/node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/base-actor/base-actor.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDemoBaseActorBaseActorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"horizontal-list\">\n  <sample-actor\n    *ngFor=\"let item of actorMakeList\"\n    [item]=\"item\"\n    (sampleEvent)=\"onSampleAppearEvent($event)\"\n  >\n  </sample-actor>\n</div>\n\n<div class=\"vertical-list\">\n  <sample-actor\n    *ngFor=\"let item of actorMakeList\"\n    [item]=\"item\"\n    (sampleEvent)=\"onSampleAppearEvent($event)\"\n  >\n  </sample-actor>\n</div>\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/lazy-actor/lazy-actor.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** /home/travis/build/molgga/jood-appearer/node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/lazy-actor/lazy-actor.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDemoLazyActorLazyActorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"horizontal-list\">\n  <sample-actor\n    *ngFor=\"let item of actorMakeList\"\n    actorType=\"lazy\"\n    (sampleEvent)=\"onSampleAppearEvent($event)\"\n  >\n  </sample-actor>\n</div>\n\n<div class=\"vertical-list\">\n  <sample-actor\n    *ngFor=\"let item of actorMakeList\"\n    actorType=\"lazy\"\n    (sampleEvent)=\"onSampleAppearEvent($event)\"\n  >\n  </sample-actor>\n</div>\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/once-actor/once-actor.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** /home/travis/build/molgga/jood-appearer/node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/once-actor/once-actor.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDemoOnceActorOnceActorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"horizontal-list\">\n  <sample-actor\n    *ngFor=\"let item of actorMakeList\"\n    actorType=\"once\"\n    (sampleEvent)=\"onSampleAppearEvent($event)\"\n  >\n  </sample-actor>\n</div>\n\n<div class=\"vertical-list\">\n  <sample-actor\n    *ngFor=\"let item of actorMakeList\"\n    actorType=\"once\"\n    (sampleEvent)=\"onSampleAppearEvent($event)\"\n  >\n  </sample-actor>\n</div>\n";
      /***/
    },

    /***/
    "../packages/src/actor/base-actor.ts":
    /*!*******************************************!*\
      !*** ../packages/src/actor/base-actor.ts ***!
      \*******************************************/

    /*! exports provided: BaseActor */

    /***/
    function packagesSrcActorBaseActorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseActor", function () {
        return BaseActor;
      });
      /* harmony import */


      var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/types */
      "../packages/src/common/types.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /**
       * Stage 에 등록될 Actor.
       * 스테이지에 진입, 이탈 시 계속 알려주는 기본형.
       * @class BaseActor
       * @implements {IActor}
       */


      var BaseActor = /*#__PURE__*/function () {
        /**
         * @param element 옵저버에 등록되어야 하는 native element
         */
        function BaseActor(element) {
          _classCallCheck(this, BaseActor);

          /**
           * 이벤트 Observable
           * @see https://rxjs-dev.firebaseapp.com/guide/subject
           */
          this.events = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          /**
           * 현재 진입 여부 상태
           */

          this.isAppear = false;
          this.element = element;
        }
        /**
         * 해당 인스턴스를 관찰하는 스테이지를 연결
         * @param stage 스테이지
         */


        _createClass(BaseActor, [{
          key: "bind",
          value: function bind(stage) {
            this.stage = stage;
          }
          /**
           * 진입, 이탈 등 이벤트 알림
           * @param type 이벤트 타입
           * @param [entry] 상태 변경시 관찰된 상태
           */

        }, {
          key: "dispatch",
          value: function dispatch(type, entry) {
            this.events.next(new _common_types__WEBPACK_IMPORTED_MODULE_0__["AppearEvent"](type, {
              actor: this,
              entry: entry
            }));
          }
          /**
           * 스테이지 진입
           * @param [entry] 스테이지 진입시 관찰 상태
           */

        }, {
          key: "appear",
          value: function appear(entry) {
            if (this.isAppear) return;
            this.isAppear = true;
            this.dispatch(_common_types__WEBPACK_IMPORTED_MODULE_0__["AppearEvent"].APPEAR, entry);
          }
          /**
           * 스테이지 이탈
           * @param [entry] 스테이지 이탈시 관찰 상태
           */

        }, {
          key: "disappear",
          value: function disappear(entry) {
            if (!this.isAppear) return;
            this.isAppear = false;
            this.dispatch(_common_types__WEBPACK_IMPORTED_MODULE_0__["AppearEvent"].DISAPPEAR, entry);
          }
          /**
           * 파기
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.stage) {
              this.stage.unobserve(this);
            }
          }
        }]);

        return BaseActor;
      }();
      /***/

    },

    /***/
    "../packages/src/actor/lazy-actor.ts":
    /*!*******************************************!*\
      !*** ../packages/src/actor/lazy-actor.ts ***!
      \*******************************************/

    /*! exports provided: LazyActor */

    /***/
    function packagesSrcActorLazyActorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyActor", function () {
        return LazyActor;
      });
      /* harmony import */


      var _base_actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-actor */
      "../packages/src/actor/base-actor.ts");
      /* harmony import */


      var _common_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/types */
      "../packages/src/common/types.ts");
      /**
       * Stage 에 등록될 Actor.
       * 스테이지에 진입을 한번만 감지하되, 진입 후 너무 빠르게 이탈시에는 감지 처리를 하지 않는 느린 감지형.
       * (사용 예: 촘촘한 상품 목록과 같이 빠르게 스크롤 하여 지나칠 수 있는 곳)
       * @class LazyActor
       * @extends {BaseActor}
       */


      var LazyActor = /*#__PURE__*/function (_base_actor__WEBPACK_) {
        _inherits(LazyActor, _base_actor__WEBPACK_);

        var _super = _createSuper(LazyActor);

        function LazyActor() {
          var _this;

          _classCallCheck(this, LazyActor);

          _this = _super.apply(this, arguments);
          _this.appearTimer = null;
          _this.checkoutDelay = 1000;
          _this.appearDelay = 150;
          return _this;
        }
        /**
         * 느린 감지를 시작하기 전 대기 시간.
         * 지정된 시간 전에 감지된 진입은 느린 감지를 하지 않고 바로 진입을 알림.
         * @param [delay=1000]
         */


        _createClass(LazyActor, [{
          key: "setCheckoutDelay",
          value: function setCheckoutDelay() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
            this.checkoutDelay = delay;
          }
          /**
           * 지정된 시간 사이에 진입 후 진출을 하는 경우 진입 알림을 하지 않는 대기 시간.
           * @param [delay=150]
           */

        }, {
          key: "setAppearDelay",
          value: function setAppearDelay() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 150;
            this.appearDelay = delay;
          }
          /**
           * 진입 대기 타이머 파기
           */

        }, {
          key: "clearAppearTimer",
          value: function clearAppearTimer() {
            if (this.appearTimer) {
              clearTimeout(this.appearTimer);
              this.appearTimer = null;
            }
          }
          /**
           * 스테이지 진입. 진입 후 일정시간 (appearDelay) 전에 이탈하는 경우는 진입으로 취급하지 않음.
           * @override
           * @param [entry]
           */

        }, {
          key: "appear",
          value: function appear(entry) {
            var _this2 = this;

            this.clearAppearTimer();
            if (this.isAppear) return;

            if (this.checkoutDelay <= entry.time) {
              this.appearTimer = setTimeout(function () {
                _this2.doAppear(entry);
              }, this.appearDelay);
            } else {
              this.doAppear(entry);
            }
          }
          /**
           * 실제 진입 처리.
           * @private
           * @param entry
           */

        }, {
          key: "doAppear",
          value: function doAppear(entry) {
            this.isAppear = true;
            this.dispatch(_common_types__WEBPACK_IMPORTED_MODULE_1__["AppearEvent"].APPEAR, entry);

            if (this.stage) {
              this.stage.unobserve(this);
            }
          }
          /**
           * 스테이지 이탈.
           * @override
           * @param entry
           */

        }, {
          key: "disappear",
          value: function disappear(entry) {
            this.clearAppearTimer();
            if (!this.isAppear) return;
            this.isAppear = false;
            this.dispatch(_common_types__WEBPACK_IMPORTED_MODULE_1__["AppearEvent"].DISAPPEAR, entry);
          }
        }]);

        return LazyActor;
      }(_base_actor__WEBPACK_IMPORTED_MODULE_0__["BaseActor"]);
      /***/

    },

    /***/
    "../packages/src/actor/once-actor.ts":
    /*!*******************************************!*\
      !*** ../packages/src/actor/once-actor.ts ***!
      \*******************************************/

    /*! exports provided: OnceActor */

    /***/
    function packagesSrcActorOnceActorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnceActor", function () {
        return OnceActor;
      });
      /* harmony import */


      var _base_actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-actor */
      "../packages/src/actor/base-actor.ts");
      /* harmony import */


      var _common_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/types */
      "../packages/src/common/types.ts");
      /**
       * Stage 에 등록될 Actor.
       * 스테이지 진입을 한번만 감지한 후 본인 스스로 관찰 해제하는 감지형.
       * (사용 예: 화면 진입시 한번만 애니메이션 한다, 이미지 로드를 한다)
       * @class OnceActor
       * @extends {BaseActor}
       */


      var OnceActor = /*#__PURE__*/function (_base_actor__WEBPACK_2) {
        _inherits(OnceActor, _base_actor__WEBPACK_2);

        var _super2 = _createSuper(OnceActor);

        function OnceActor() {
          _classCallCheck(this, OnceActor);

          return _super2.apply(this, arguments);
        }

        _createClass(OnceActor, [{
          key: "appear",

          /**
           * 스테이지 진입. 진입시 자동 관찰 해제.
           * @override
           * @param [entry]
           */
          value: function appear(entry) {
            if (this.isAppear) return;
            this.isAppear = true;
            this.dispatch(_common_types__WEBPACK_IMPORTED_MODULE_1__["AppearEvent"].APPEAR, entry);

            if (this.stage) {
              this.stage.unobserve(this);
            }
          }
        }]);

        return OnceActor;
      }(_base_actor__WEBPACK_IMPORTED_MODULE_0__["BaseActor"]);
      /***/

    },

    /***/
    "../packages/src/common/types.ts":
    /*!***************************************!*\
      !*** ../packages/src/common/types.ts ***!
      \***************************************/

    /*! exports provided: AppearType, AppearEvent */

    /***/
    function packagesSrcCommonTypesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppearType", function () {
        return AppearType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppearEvent", function () {
        return AppearEvent;
      });
      /**
       * Actor type 구분
       * @export
       * @enum {number}
       */


      var AppearType;

      (function (AppearType) {
        AppearType["BASE"] = "base";
        AppearType["ONCE"] = "once";
        AppearType["LAZY"] = "lazy";
      })(AppearType || (AppearType = {}));
      /**
       * 관찰대상의 이벤트
       * @implements {AppearEventData<T>}
       * @template T
       */


      var AppearEvent =
      /**
       * @param type 이벤트 타입
       * @param option 이벤트 데이터
       */
      function AppearEvent(type, option) {
        _classCallCheck(this, AppearEvent);

        var actor = option.actor,
            entry = option.entry;
        this.type = type;
        this.actor = actor;
        this.entry = entry;
      };
      /**
       * 이벤트 타입 - 진입
       */


      AppearEvent.APPEAR = "APPEAR";
      /**
       * 이벤트 타입 - 이탈
       */

      AppearEvent.DISAPPEAR = "DISAPPEAR";
      /***/
    },

    /***/
    "../packages/src/public-api.ts":
    /*!*************************************!*\
      !*** ../packages/src/public-api.ts ***!
      \*************************************/

    /*! exports provided: AppearStage, BaseActor, OnceActor, LazyActor, AppearType, AppearEvent */

    /***/
    function packagesSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! intersection-observer */
      "../../node_modules/intersection-observer/intersection-observer.js");
      /* harmony import */


      var intersection_observer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _stage_appear_stage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stage/appear-stage */
      "../packages/src/stage/appear-stage.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppearStage", function () {
        return _stage_appear_stage__WEBPACK_IMPORTED_MODULE_1__["AppearStage"];
      });
      /* harmony import */


      var _actor_base_actor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./actor/base-actor */
      "../packages/src/actor/base-actor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseActor", function () {
        return _actor_base_actor__WEBPACK_IMPORTED_MODULE_2__["BaseActor"];
      });
      /* harmony import */


      var _actor_once_actor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./actor/once-actor */
      "../packages/src/actor/once-actor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OnceActor", function () {
        return _actor_once_actor__WEBPACK_IMPORTED_MODULE_3__["OnceActor"];
      });
      /* harmony import */


      var _actor_lazy_actor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./actor/lazy-actor */
      "../packages/src/actor/lazy-actor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LazyActor", function () {
        return _actor_lazy_actor__WEBPACK_IMPORTED_MODULE_4__["LazyActor"];
      });
      /* harmony import */


      var _common_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./common/types */
      "../packages/src/common/types.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppearType", function () {
        return _common_types__WEBPACK_IMPORTED_MODULE_5__["AppearType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppearEvent", function () {
        return _common_types__WEBPACK_IMPORTED_MODULE_5__["AppearEvent"];
      });
      /***/

    },

    /***/
    "../packages/src/stage/appear-stage.ts":
    /*!*********************************************!*\
      !*** ../packages/src/stage/appear-stage.ts ***!
      \*********************************************/

    /*! exports provided: AppearStage */

    /***/
    function packagesSrcStageAppearStageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppearStage", function () {
        return AppearStage;
      });
      /**
       * 화면(지정된 root 영역)에 진입 여부를 판단하고 알리기 위한 클래스.
       * 등록된 Actor(s)를 IntersectionObserver 를 통해 관찰하고 관찰된 상태에 따라 Actor 에게 알림.
       * @template T Actor
       */


      var AppearStage = /*#__PURE__*/function () {
        function AppearStage() {
          _classCallCheck(this, AppearStage);
        }

        _createClass(AppearStage, [{
          key: "init",

          /**
           * 초기화
           * @param [option] 초기 옵션. 인터섹션 옵저버는 생성시에만 옵션 지정이 가능
           */
          value: function init() {
            var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this.observer) {
              this.actorMap = new Map();
              this.observer = new IntersectionObserver(this.onObserveEntries.bind(this), option);
            }
          }
          /**
           * 전달된 actor 를 옵저버에 등록합니다.
           * @param actor 등록할 Actor
           */

        }, {
          key: "observe",
          value: function observe(actor) {
            var element = actor.element;

            if (this.actorMap && !this.actorMap.has(element)) {
              actor.bind(this);
              this.actorMap.set(element, actor);
              this.intersectionObserver.observe(element);
            }
          }
          /**
           * 전달된 actor 를 옵저버에서 제외합니다.
           * @param actor 제외할 Actor
           */

        }, {
          key: "unobserve",
          value: function unobserve(actor) {
            var element = actor.element;

            if (this.actorMap && this.actorMap.has(element)) {
              this.actorMap["delete"](element);
              this.intersectionObserver.unobserve(element);
            }
          }
          /**
           * 옵저버에 등록(관찰) 중 인 Actor 의 수
           */

        }, {
          key: "getActors",

          /**
           * 등록 되어있는 Actor 를 반환 합니다.
           * @returns T[]
           */
          value: function getActors() {
            return Array.from(this.actorMap ? this.actorMap.values() : []);
          }
          /**
           * 생성된 intersection observer 인스턴스
           */

        }, {
          key: "onObserveEntries",

          /**
           * 옵저버의 콜백 핸들러
           * @param entries 옵저버의 콜백으로 전달받는 엔트리 값
           */
          value: function onObserveEntries(entries) {
            var _this3 = this;

            entries.forEach(function (entry) {
              var isIntersecting = entry.isIntersecting,
                  target = entry.target;

              var actor = _this3.actorMap.get(target);

              if (actor) {
                if (isIntersecting) {
                  actor.appear(entry);
                } else {
                  actor.disappear(entry);
                }
              }
            });
          }
          /**
           * 파기
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.actorMap) {
              this.actorMap.clear();
              this.actorMap = null;
            }

            if (this.observer) {
              this.observer.disconnect();
              this.observer = null;
            }
          }
        }, {
          key: "actorSize",
          get: function get() {
            return this.actorMap ? this.actorMap.size : 0;
          }
        }, {
          key: "intersectionObserver",
          get: function get() {
            if (!this.observer) throw new Error("uninitialize");
            return this.observer;
          }
        }]);

        return AppearStage;
      }();
      /***/

    },

    /***/
    "./src/app/modules/example/common/common.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/modules/example/common/common.module.ts ***!
      \*********************************************************/

    /*! exports provided: ExampleCommonModule */

    /***/
    function srcAppModulesExampleCommonCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleCommonModule", function () {
        return ExampleCommonModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _dev_app_modules_example_common_sample_actor_sample_actor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ~/dev/app/modules/example/common/sample-actor/sample-actor.component */
      "./src/app/modules/example/common/sample-actor/sample-actor.component.ts");

      var ExampleCommonModule = function ExampleCommonModule() {
        _classCallCheck(this, ExampleCommonModule);
      };

      ExampleCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_dev_app_modules_example_common_sample_actor_sample_actor_component__WEBPACK_IMPORTED_MODULE_3__["SampleActorComponent"]],
        declarations: [_dev_app_modules_example_common_sample_actor_sample_actor_component__WEBPACK_IMPORTED_MODULE_3__["SampleActorComponent"]]
      })], ExampleCommonModule);
      /***/
    },

    /***/
    "./src/app/modules/example/common/sample-actor/sample-actor.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/example/common/sample-actor/sample-actor.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesExampleCommonSampleActorSampleActorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n  margin: 10px;\n  padding: 20px;\n  color: #333333;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  transition: color 300ms, background-color 300ms;\n}\n:host.is-appeared {\n  color: #ffffff;\n  background-color: #333333;\n}\n:host .panel-count {\n  display: flex;\n  text-align: center;\n}\n:host .panel-count .spacer {\n  flex: 1;\n  min-width: 20px;\n}\n:host .panel-count .label {\n  display: block;\n  font-size: 13px;\n}\n:host .panel-count .count {\n  display: block;\n  padding-top: 5px;\n  font-size: 24px;\n  font-weight: bold;\n}\n:host .panel-item {\n  padding-top: 5px;\n  text-align: center;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL21vZHVsZXMvZXhhbXBsZS9jb21tb24vc2FtcGxlLWFjdG9yL3NhbXBsZS1hY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLE9BQUE7RUFDQSxlQUFBO0FBRU47QUFBSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRU47QUFBSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVOO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6InByb2plY3RzL2Rldi9zcmMvYXBwL21vZHVsZXMvZXhhbXBsZS9jb21tb24vc2FtcGxlLWFjdG9yL3NhbXBsZS1hY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG4gICYuaXMtYXBwZWFyZWQge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIH1cblxuICAucGFuZWwtY291bnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMTtcbiAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICB9XG4gICAgLmxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAuY291bnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLnBhbmVsLWl0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/modules/example/common/sample-actor/sample-actor.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/example/common/sample-actor/sample-actor.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: SampleActorComponent */

    /***/
    function srcAppModulesExampleCommonSampleActorSampleActorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SampleActorComponent", function () {
        return SampleActorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! projects/packages/src/public-api */
      "../packages/src/public-api.ts");
      /* harmony import */


      var _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ~/dev/app/modules/example/common/sample-actor/types */
      "./src/app/modules/example/common/sample-actor/types.ts");

      var SampleActorComponent = /*#__PURE__*/function () {
        function SampleActorComponent(elRef) {
          _classCallCheck(this, SampleActorComponent);

          this.elRef = elRef;
          this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.appearCount = 0;
          this.disappearCount = 0;
          this.appearerListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        }

        _createClass(SampleActorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var nativeElement = this.elRef.nativeElement;

            switch (this.actorType) {
              case _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_4__["SampleActorType"].ONCE:
                this.actor = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_3__["OnceActor"](nativeElement);
                break;

              case _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_4__["SampleActorType"].LAZY:
                this.actor = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_3__["LazyActor"](nativeElement);
                this.actor.setCheckoutDelay(1000);
                this.actor.setAppearDelay(200);
                break;

              default:
                this.actor = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_3__["BaseActor"](nativeElement);
                break;
            }

            var observeAppearEvent = this.actor.events.subscribe(this.onAppearEvent.bind(this));
            this.appearerListener.add(observeAppearEvent);
            this.emitter.emit({
              type: _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_4__["SampleActorEventType"].ATTACH,
              actor: this.actor
            });
          }
        }, {
          key: "onAppearEvent",
          value: function onAppearEvent(evt) {
            switch (evt.type) {
              case projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_3__["AppearEvent"].APPEAR:
                this.appearCount++;
                break;

              case projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_3__["AppearEvent"].DISAPPEAR:
                this.disappearCount++;
                break;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            try {
              this.emitter.emit({
                type: _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_4__["SampleActorEventType"].DETACH,
                actor: this.actor
              });

              if (this.appearerListener) {
                this.appearerListener.unsubscribe();
              }
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "isAppeared",
          get: function get() {
            return !!(this.actor && this.actor.isAppear);
          }
        }]);

        return SampleActorComponent;
      }();

      SampleActorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      SampleActorComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        actorType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        emitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ["sampleEvent"]
        }],
        isAppeared: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ["class.is-appeared"]
        }]
      };
      SampleActorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "sample-actor",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sample-actor.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/example/common/sample-actor/sample-actor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sample-actor.component.scss */
        "./src/app/modules/example/common/sample-actor/sample-actor.component.scss"))["default"]]
      })], SampleActorComponent);
      /***/
    },

    /***/
    "./src/app/modules/example/common/sample-actor/types.ts":
    /*!**************************************************************!*\
      !*** ./src/app/modules/example/common/sample-actor/types.ts ***!
      \**************************************************************/

    /*! exports provided: SampleActorType, SampleActorEventType */

    /***/
    function srcAppModulesExampleCommonSampleActorTypesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SampleActorType", function () {
        return SampleActorType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SampleActorEventType", function () {
        return SampleActorEventType;
      });

      var SampleActorType;

      (function (SampleActorType) {
        SampleActorType["BASE"] = "base";
        SampleActorType["ONCE"] = "once";
        SampleActorType["LAZY"] = "lazy";
      })(SampleActorType || (SampleActorType = {}));

      var SampleActorEventType;

      (function (SampleActorEventType) {
        SampleActorEventType["ATTACH"] = "ATTACH";
        SampleActorEventType["DETACH"] = "DETACH";
      })(SampleActorEventType || (SampleActorEventType = {}));
      /***/

    },

    /***/
    "./src/app/pages/demo/base-actor/base-actor.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/demo/base-actor/base-actor.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDemoBaseActorBaseActorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".horizontal-list {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL3BhZ2VzL2RlbW8vYmFzZS1hY3Rvci9iYXNlLWFjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9wYWdlcy9kZW1vL2Jhc2UtYWN0b3IvYmFzZS1hY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/demo/base-actor/base-actor.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/demo/base-actor/base-actor.component.ts ***!
      \***************************************************************/

    /*! exports provided: BaseActorComponent */

    /***/
    function srcAppPagesDemoBaseActorBaseActorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseActorComponent", function () {
        return BaseActorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! projects/packages/src/public-api */
      "../packages/src/public-api.ts");
      /* harmony import */


      var _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ~/dev/app/modules/example/common/sample-actor/types */
      "./src/app/modules/example/common/sample-actor/types.ts");

      var BaseActorComponent = /*#__PURE__*/function () {
        function BaseActorComponent() {
          _classCallCheck(this, BaseActorComponent);

          this.actorMakeList = [];
        }

        _createClass(BaseActorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.actorMakeList = Array.from(Array(50)).map(function (a, b) {
              return {
                id: b
              };
            });
            this.appearStage = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["AppearStage"]();
            this.appearStage.init();
          }
        }, {
          key: "onSampleAppearEvent",
          value: function onSampleAppearEvent(evt) {
            var type = evt.type,
                actor = evt.actor;

            switch (type) {
              case _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__["SampleActorEventType"].ATTACH:
                this.appearStage.observe(actor);
                break;

              case _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__["SampleActorEventType"].DETACH:
                this.appearStage.unobserve(actor);
                break;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            try {
              if (this.appearStage) {
                this.appearStage.dispose();
                this.appearStage = null;
              }
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return BaseActorComponent;
      }();

      BaseActorComponent.ctorParameters = function () {
        return [];
      };

      BaseActorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "example-base-actor",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./base-actor.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/base-actor/base-actor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./base-actor.component.scss */
        "./src/app/pages/demo/base-actor/base-actor.component.scss"))["default"]]
      })], BaseActorComponent);
      /***/
    },

    /***/
    "./src/app/pages/demo/demo.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/demo/demo.module.ts ***!
      \*******************************************/

    /*! exports provided: PageModule */

    /***/
    function srcAppPagesDemoDemoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageModule", function () {
        return PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _dev_app_pages_demo_demo_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ~/dev/app/pages/demo/demo.routing */
      "./src/app/pages/demo/demo.routing.ts");
      /* harmony import */


      var _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ~/dev/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _dev_app_modules_example_common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ~/dev/app/modules/example/common/common.module */
      "./src/app/modules/example/common/common.module.ts");
      /* harmony import */


      var _base_actor_base_actor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./base-actor/base-actor.component */
      "./src/app/pages/demo/base-actor/base-actor.component.ts");
      /* harmony import */


      var _once_actor_once_actor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./once-actor/once-actor.component */
      "./src/app/pages/demo/once-actor/once-actor.component.ts");
      /* harmony import */


      var _lazy_actor_lazy_actor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./lazy-actor/lazy-actor.component */
      "./src/app/pages/demo/lazy-actor/lazy-actor.component.ts");

      var PageModule = function PageModule() {
        _classCallCheck(this, PageModule);
      };

      PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dev_app_pages_demo_demo_routing__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"], _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _dev_app_modules_example_common_common_module__WEBPACK_IMPORTED_MODULE_5__["ExampleCommonModule"]],
        declarations: [_base_actor_base_actor_component__WEBPACK_IMPORTED_MODULE_6__["BaseActorComponent"], _once_actor_once_actor_component__WEBPACK_IMPORTED_MODULE_7__["OnceActorComponent"], _lazy_actor_lazy_actor_component__WEBPACK_IMPORTED_MODULE_8__["LazyActorComponent"]]
      })], PageModule);
      /***/
    },

    /***/
    "./src/app/pages/demo/demo.routing.ts":
    /*!********************************************!*\
      !*** ./src/app/pages/demo/demo.routing.ts ***!
      \********************************************/

    /*! exports provided: RoutingModule */

    /***/
    function srcAppPagesDemoDemoRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
        return RoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _base_actor_base_actor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./base-actor/base-actor.component */
      "./src/app/pages/demo/base-actor/base-actor.component.ts");
      /* harmony import */


      var _once_actor_once_actor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./once-actor/once-actor.component */
      "./src/app/pages/demo/once-actor/once-actor.component.ts");
      /* harmony import */


      var _lazy_actor_lazy_actor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lazy-actor/lazy-actor.component */
      "./src/app/pages/demo/lazy-actor/lazy-actor.component.ts");

      var routes = [{
        path: "",
        children: [{
          path: "base-actor",
          component: _base_actor_base_actor_component__WEBPACK_IMPORTED_MODULE_3__["BaseActorComponent"]
        }, {
          path: "once-actor",
          component: _once_actor_once_actor_component__WEBPACK_IMPORTED_MODULE_4__["OnceActorComponent"]
        }, {
          path: "lazy-actor",
          component: _lazy_actor_lazy_actor_component__WEBPACK_IMPORTED_MODULE_5__["LazyActorComponent"]
        }, {
          path: "**",
          component: _base_actor_base_actor_component__WEBPACK_IMPORTED_MODULE_3__["BaseActorComponent"]
        }]
      }];

      var RoutingModule = function RoutingModule() {
        _classCallCheck(this, RoutingModule);
      };

      RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/demo/lazy-actor/lazy-actor.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/demo/lazy-actor/lazy-actor.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDemoLazyActorLazyActorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".horizontal-list {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL3BhZ2VzL2RlbW8vbGF6eS1hY3Rvci9sYXp5LWFjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9wYWdlcy9kZW1vL2xhenktYWN0b3IvbGF6eS1hY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/demo/lazy-actor/lazy-actor.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/demo/lazy-actor/lazy-actor.component.ts ***!
      \***************************************************************/

    /*! exports provided: LazyActorComponent */

    /***/
    function srcAppPagesDemoLazyActorLazyActorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyActorComponent", function () {
        return LazyActorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! projects/packages/src/public-api */
      "../packages/src/public-api.ts");
      /* harmony import */


      var _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ~/dev/app/modules/example/common/sample-actor/types */
      "./src/app/modules/example/common/sample-actor/types.ts");

      var LazyActorComponent = /*#__PURE__*/function () {
        function LazyActorComponent() {
          _classCallCheck(this, LazyActorComponent);
        }

        _createClass(LazyActorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.actorMakeList = Array.from(Array(50)).map(function (a, b) {
              return {
                id: b
              };
            });
            this.appearStage = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["AppearStage"]();
            this.appearStage.init();
          }
        }, {
          key: "onSampleAppearEvent",
          value: function onSampleAppearEvent(evt) {
            var type = evt.type,
                actor = evt.actor;

            switch (type) {
              case _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__["SampleActorEventType"].ATTACH:
                this.appearStage.observe(actor);
                break;

              case _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__["SampleActorEventType"].DETACH:
                this.appearStage.unobserve(actor);
                break;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            try {
              if (this.appearStage) {
                this.appearStage.dispose();
                this.appearStage = null;
              }
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return LazyActorComponent;
      }();

      LazyActorComponent.ctorParameters = function () {
        return [];
      };

      LazyActorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "example-lazy-actor",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./lazy-actor.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/lazy-actor/lazy-actor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./lazy-actor.component.scss */
        "./src/app/pages/demo/lazy-actor/lazy-actor.component.scss"))["default"]]
      })], LazyActorComponent);
      /***/
    },

    /***/
    "./src/app/pages/demo/once-actor/once-actor.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/demo/once-actor/once-actor.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDemoOnceActorOnceActorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".horizontal-list {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL3BhZ2VzL2RlbW8vb25jZS1hY3Rvci9vbmNlLWFjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9wYWdlcy9kZW1vL29uY2UtYWN0b3Ivb25jZS1hY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/demo/once-actor/once-actor.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/demo/once-actor/once-actor.component.ts ***!
      \***************************************************************/

    /*! exports provided: OnceActorComponent */

    /***/
    function srcAppPagesDemoOnceActorOnceActorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnceActorComponent", function () {
        return OnceActorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! projects/packages/src/public-api */
      "../packages/src/public-api.ts");
      /* harmony import */


      var _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ~/dev/app/modules/example/common/sample-actor/types */
      "./src/app/modules/example/common/sample-actor/types.ts");

      var OnceActorComponent = /*#__PURE__*/function () {
        function OnceActorComponent() {
          _classCallCheck(this, OnceActorComponent);
        }

        _createClass(OnceActorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.actorMakeList = Array.from(Array(50)).map(function (a, b) {
              return {
                id: b
              };
            });
            this.appearStage = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["AppearStage"]();
            this.appearStage.init();
          }
        }, {
          key: "onSampleAppearEvent",
          value: function onSampleAppearEvent(evt) {
            var type = evt.type,
                actor = evt.actor;

            switch (type) {
              case _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__["SampleActorEventType"].ATTACH:
                this.appearStage.observe(actor);
                break;

              case _dev_app_modules_example_common_sample_actor_types__WEBPACK_IMPORTED_MODULE_3__["SampleActorEventType"].DETACH:
                this.appearStage.unobserve(actor);
                break;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            try {
              if (this.appearStage) {
                this.appearStage.dispose();
                this.appearStage = null;
              }
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return OnceActorComponent;
      }();

      OnceActorComponent.ctorParameters = function () {
        return [];
      };

      OnceActorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "example-once-actor",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./once-actor.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/once-actor/once-actor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./once-actor.component.scss */
        "./src/app/pages/demo/once-actor/once-actor.component.scss"))["default"]]
      })], OnceActorComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dev-app-pages-demo-demo-module-es5.js.map