/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/assets/js/touch-swipe.js ***!
  \**************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

/*
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
 *
 * $Date: 2012-14-05 (Mon, 14 May 2012) $
 * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
 *
 * $Date: 2012-06-06 (Wed, 06 June 2012) $
 * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
 *
 * $Date: 2012-05-06 (Fri, 05 June 2012) $
 * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
 *
 * $Date: 2012-29-07 (Sun, 29 July 2012) $
 * $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
 * 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
 *
 * $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
 * $version: 1.3.3	- Code tidy prep for minefied version
 *
 * $Date: 2012-04-10 (wed, 4 Oct 2012) $
 * $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
 *
 * $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
 * $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is .noSwipe
 *
 * $Date: 2012-22-10 (Mon, 22 Oct 2012) $
 * $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
 *					- Fixed bug with IE and eventPreventDefault()
 * $Date: 2013-01-12 (Fri, 12 Jan 2013) $
 * $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
 *					- made the demo site all static local HTML pages so they can be run locally by a developer
 *					- added jsDoc comments and added documentation for the plugin
 *					- code tidy
 *					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
 * $Date: 2013-03-23 (Sat, 23 Mar 2013) $
 * $version: 1.6.1	- Added support for ie8 touch events
 * $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
 *                   - Deprecated the 'click' handler in favour of tap.
 *                   - added cancelThreshold property
 *                   - added option method to update init options at runtime
 * $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
 *
 * $Date: 2013-04-04 (Thurs, 04 April 2013) $
 * $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
 *
 * $Date: 2013-08-24 (Sat, 24 Aug 2013) $
 * $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
 *
 * $Date: 2014-06-04 (Wed, 04 June 2014) $
 * $version 1.6.6 	- Merge of pull requests.
 *    				- IE10 touch support
 *    				- Only prevent default event handling on valid swipe
 *    				- Separate license/changelog comment
 *    				- Detect if the swipe is valid at the end of the touch event.
 *    				- Pass fingerdata to event handlers.
 *    				- Add 'hold' gesture
 *    				- Be more tolerant about the tap distance
 *    				- Typos and minor fixes
 *
 * $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
 * $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
 *
 * $Date: 2015-2-2 (Mon, 2 Feb 2015) $
 * $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
 *					- Fixed issue with swipe and pinch not triggering at the same time
 *
 * $Date: 2015-9-6 (Tues, 9 June 2015) $
 * $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
 *					- Added scrolling demo
 *					- Added version property to plugin
 *
 * $Date: 2015-1-10 (Wed, 1 October 2015) $
 * $version 1.6.10    - Added PR from beatspace to fix tap events
 * $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
 *					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances
 * $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
 *
 * $Date: 2015-12-18 (Fri, 18 December 2015) $
 * $version 1.6.13    - Added PRs
 *                    - Fixed #267 allowPageScroll not working correctly
 * $version 1.6.14    - Fixed #220 / #248 doubletap not firing with swipes, #223 commonJS compatible
 * $version 1.6.15    - More bug fixes
 *
 * $Date: 2016-04-29 (Fri, 29 April 2016) $
 * $version 1.6.16    - Swipes with 0 distance now allow default events to trigger.  So tapping any form elements or A tags will allow default interaction, but swiping will trigger a swipe.
                        Removed the a, input, select etc from the excluded Children list as the 0 distance tap solves that issue.
* $Date: 2016-05-19  (Fri, 29 April 2016) $
* $version 1.6.17     - Fixed context issue when calling instance methods via $("selector").swipe("method");
* $version 1.6.18     - now honors fallbackToMouseEvents=false for MS Pointer events when a Mouse is used.
 */

/**
 * See (http://jquery.com/).
 * @name $
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */

// (function(factory) {
//   if (typeof define === 'function' && define.amd && define.amd.jQuery) {
//     // AMD. Register as anonymous module.
//     define(['jquery'], factory);
//   } else if (typeof module !== 'undefined' && module.exports) {
//     // CommonJS Module
//     factory(require("jquery"));
//   } else {
//     // Browser globals.
//     factory(jQuery);
//   }
// }(function($) {
(function ($) {
  "use strict";

  //Constants
  var VERSION = "1.6.18",
    LEFT = "left",
    RIGHT = "right",
    UP = "up",
    DOWN = "down",
    IN = "in",
    OUT = "out",
    NONE = "none",
    AUTO = "auto",
    SWIPE = "swipe",
    PINCH = "pinch",
    TAP = "tap",
    DOUBLE_TAP = "doubletap",
    LONG_TAP = "longtap",
    HOLD = "hold",
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    ALL_FINGERS = "all",
    DOUBLE_TAP_THRESHOLD = 10,
    PHASE_START = "start",
    PHASE_MOVE = "move",
    PHASE_END = "end",
    PHASE_CANCEL = "cancel",
    SUPPORTS_TOUCH = ('ontouchstart' in window),
    SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.PointerEvent && !SUPPORTS_TOUCH,
    SUPPORTS_POINTER = (window.PointerEvent || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
    PLUGIN_NS = 'TouchSwipe';

  /**
  * The default configuration, and available options to configure touch swipe with.
  * You can set the default values by updating any of the properties prior to instantiation.
  * @name $.fn.swipe.defaults
  * @namespace
  * @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
  * @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe.
  * @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
  * @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch.
  * @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
  * @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release.
  * @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
  * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
  * @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
  * @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
  * @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
  * @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
  * @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
  * @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
  * @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
  * @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
  * @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
  * @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not.
  * @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
  * @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#longTapThreshold}
  * @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link $.fn.swipe.defaults#longTapThreshold}
  * @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
  * @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers.
  * @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
  									<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
  									<code>"none"</code> : the page will not scroll when user swipes. <br/>
  									<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
  									<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
  * @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non touch devices.
  * @property {string} [excludedElements=".noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes elements with the class .noSwipe .
  * @property {boolean} [preventDefaultEvents=true] by default default events are cancelled, so the page doesn't move.  You can disable this so both native events fire as well as your handlers.
  */
  var defaults = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null,
    //Deprecated since 1.6.2
    tap: null,
    doubleTap: null,
    longTap: null,
    hold: null,
    triggerOnTouchEnd: true,
    triggerOnTouchLeave: false,
    allowPageScroll: "auto",
    fallbackToMouseEvents: true,
    excludedElements: ".noSwipe",
    preventDefaultEvents: true
  };

  /**
   * Applies TouchSwipe behaviour to one or more jQuery objects.
   * The TouchSwipe plugin can be instantiated via this method, or methods within
   * TouchSwipe can be executed via this method as per jQuery plugin architecture.
   * An existing plugin can have its options changed simply by re calling .swipe(options)
   * @see TouchSwipe
   * @class
   * @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
   * the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
   * If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the
   * configuration properties defined in the object. See TouchSwipe
   *
   */
  $.fn.swipe = function (method) {
    var $this = $(this),
      plugin = $this.data(PLUGIN_NS);

    //Check if we are already instantiated and trying to execute a method
    if (plugin && typeof method === 'string') {
      if (plugin[method]) {
        return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.swipe');
      }
    }

    //Else update existing plugin with new options hash
    else if (plugin && _typeof(method) === 'object') {
      plugin['option'].apply(plugin, arguments);
    }

    //Else not instantiated and trying to pass init object (or nothing)
    else if (!plugin && (_typeof(method) === 'object' || !method)) {
      return init.apply(this, arguments);
    }
    return $this;
  };

  /**
   * The version of the plugin
   * @readonly
   */
  $.fn.swipe.version = VERSION;

  //Expose our defaults so a user could override the plugin defaults
  $.fn.swipe.defaults = defaults;

  /**
   * The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
   * @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
   * @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
   * @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
   */
  $.fn.swipe.phases = {
    PHASE_START: PHASE_START,
    PHASE_MOVE: PHASE_MOVE,
    PHASE_END: PHASE_END,
    PHASE_CANCEL: PHASE_CANCEL
  };

  /**
   * The direction constants that are passed to the event handlers.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
   * @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
   * @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
   * @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
   * @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
   * @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
   */
  $.fn.swipe.directions = {
    LEFT: LEFT,
    RIGHT: RIGHT,
    UP: UP,
    DOWN: DOWN,
    IN: IN,
    OUT: OUT
  };

  /**
   * The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
   * These properties are read only
   * @namespace
   * @readonly
   * @see $.fn.swipe.defaults#allowPageScroll
   * @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
   * @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
   * @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
   * @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
   */
  $.fn.swipe.pageScroll = {
    NONE: NONE,
    HORIZONTAL: HORIZONTAL,
    VERTICAL: VERTICAL,
    AUTO: AUTO
  };

  /**
   * Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the
   * options object, as well as the value of the <code>fingers</code> event property.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @see $.fn.swipe.defaults#fingers
   * @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
   * @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>2</code>.
   * @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>3</code>.
   * @property {string} FOUR Constant indicating 4 finger are to be detected / were detected. Not all devices support this. Value is <code>4</code>.
   * @property {string} FIVE Constant indicating 5 finger are to be detected / were detected. Not all devices support this. Value is <code>5</code>.
   * @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
   */
  $.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    ALL: ALL_FINGERS
  };

  /**
   * Initialise the plugin for each DOM element matched
   * This creates a new instance of the main TouchSwipe class for each DOM element, and then
   * saves a reference to that instance in the elements data property.
   * @internal
   */
  function init(options) {
    //Prep and extend the options
    if (options && options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined)) {
      options.allowPageScroll = NONE;
    }

    //Check for deprecated options
    //Ensure that any old click handlers are assigned to the new tap, unless we have a tap
    if (options.click !== undefined && options.tap === undefined) {
      options.tap = options.click;
    }
    if (!options) {
      options = {};
    }

    //pass empty object so we dont modify the defaults
    options = $.extend({}, $.fn.swipe.defaults, options);

    //For each element instantiate the plugin
    return this.each(function () {
      var $this = $(this);

      //Check we havent already initialised the plugin
      var plugin = $this.data(PLUGIN_NS);
      if (!plugin) {
        plugin = new TouchSwipe(this, options);
        $this.data(PLUGIN_NS, plugin);
      }
    });
  }

  /**
   * Main TouchSwipe Plugin Class.
   * Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
   * @private
   * @name TouchSwipe
   * @param {DOMNode} element The HTML DOM object to apply to plugin to
   * @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
   * @see $.fh.swipe.defaults
   * @see $.fh.swipe
   * @class
   */
  function TouchSwipe(element, options) {
    //take a local/instacne level copy of the options - should make it this.options really...
    var options = $.extend({}, options);
    var useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
      START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown' : 'touchstart' : 'mousedown',
      MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove' : 'touchmove' : 'mousemove',
      END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup' : 'touchend' : 'mouseup',
      LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? 'mouseleave' : null : 'mouseleave',
      //we manually detect leave on touch devices, so null event here
      CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel' : 'touchcancel';

    //touch properties
    var distance = 0,
      direction = null,
      currentDirection = null,
      duration = 0,
      startTouchesDistance = 0,
      endTouchesDistance = 0,
      pinchZoom = 1,
      pinchDistance = 0,
      pinchDirection = 0,
      maximumsMap = null;

    //jQuery wrapped element for this instance
    var $element = $(element);

    //Current phase of th touch cycle
    var phase = "start";

    // the current number of fingers being used.
    var fingerCount = 0;

    //track mouse points / delta
    var fingerData = {};

    //track times
    var startTime = 0,
      endTime = 0,
      previousTouchEndTime = 0,
      fingerCountAtRelease = 0,
      doubleTapStartTime = 0;

    //Timeouts
    var singleTapTimeout = null,
      holdTimeout = null;

    // Add gestures to all swipable areas if supported
    try {
      $element.on(START_EV, touchStart);
      $element.on(CANCEL_EV, touchCancel);
    } catch (e) {
      $.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
    }

    //
    //Public methods
    //

    /**
     * re-enables the swipe plugin with the previous configuration
     * @function
     * @name $.fn.swipe#enable
     * @return {DOMNode} The Dom element that was registered with TouchSwipe
     * @example $("#element").swipe("enable");
     */
    this.enable = function () {
      //Incase we are already enabled, clean up...
      this.disable();
      $element.on(START_EV, touchStart);
      $element.on(CANCEL_EV, touchCancel);
      return $element;
    };

    /**
     * disables the swipe plugin
     * @function
     * @name $.fn.swipe#disable
     * @return {DOMNode} The Dom element that is now registered with TouchSwipe
     * @example $("#element").swipe("disable");
     */
    this.disable = function () {
      removeListeners();
      return $element;
    };

    /**
     * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
     * @function
     * @name $.fn.swipe#destroy
     * @example $("#element").swipe("destroy");
     */
    this.destroy = function () {
      removeListeners();
      $element.data(PLUGIN_NS, null);
      $element = null;
    };

    /**
     * Allows run time updating of the swipe configuration options.
     * @function
     * @name $.fn.swipe#option
     * @param {String} property The option property to get or set, or a has of multiple options to set
     * @param {Object} [value] The value to set the property to
     * @return {Object} If only a property name is passed, then that property value is returned. If nothing is passed the current options hash is returned.
     * @example $("#element").swipe("option", "threshold"); // return the threshold
     * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
     * @example $("#element").swipe("option", {threshold:100, fingers:3} ); // set multiple properties after init
     * @example $("#element").swipe({threshold:100, fingers:3} ); // set multiple properties after init - the "option" method is optional!
     * @example $("#element").swipe("option"); // Return the current options hash
     * @see $.fn.swipe.defaults
     *
     */
    this.option = function (property, value) {
      if (_typeof(property) === 'object') {
        options = $.extend(options, property);
      } else if (options[property] !== undefined) {
        if (value === undefined) {
          return options[property];
        } else {
          options[property] = value;
        }
      } else if (!property) {
        return options;
      } else {
        $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
      }
      return null;
    };

    //
    // Private methods
    //

    //
    // EVENTS
    //
    /**
     * Event handler for a touch start event.
     * Stops the default click event from triggering and stores where we touched
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchStart(jqEvent) {
      //If we already in a touch event (a finger already in use) then ignore subsequent ones..
      if (getTouchInProgress()) {
        return;
      }

      //Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
      if ($(jqEvent.target).closest(options.excludedElements, $element).length > 0) {
        return;
      }

      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      //If we have a pointer event, whoes type is 'mouse' and we have said NO mouse events, then dont do anything.
      if (event.pointerType && event.pointerType == "mouse" && options.fallbackToMouseEvents == false) {
        return;
      }
      ;
      var ret,
        touches = event.touches,
        evt = touches ? touches[0] : event;
      phase = PHASE_START;

      //If we support touches, get the finger count
      if (touches) {
        // get the total number of fingers touching the screen
        fingerCount = touches.length;
      }
      //Else this is the desktop, so stop the browser from dragging content
      else if (options.preventDefaultEvents !== false) {
        jqEvent.preventDefault(); //call this on jq event so we are cross browser
      }

      //clear vars..
      distance = 0;
      direction = null;
      currentDirection = null;
      pinchDirection = null;
      duration = 0;
      startTouchesDistance = 0;
      endTouchesDistance = 0;
      pinchZoom = 1;
      pinchDistance = 0;
      maximumsMap = createMaximumsData();
      cancelMultiFingerRelease();

      //Create the default finger data
      createFingerData(0, evt);

      // check the number of fingers is what we are looking for, or we are capturing pinches
      if (!touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches()) {
        // get the coordinates of the touch
        startTime = getTimeStamp();
        if (fingerCount == 2) {
          //Keep track of the initial pinch distance, so we can calculate the diff later
          //Store second finger data as start
          createFingerData(1, touches[1]);
          startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
        }
        if (options.swipeStatus || options.pinchStatus) {
          ret = triggerHandler(event, phase);
        }
      } else {
        //A touch with more or less than the fingers we are looking for, so cancel
        ret = false;
      }

      //If we have a return value from the users handler, then return and cancel
      if (ret === false) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
        return ret;
      } else {
        if (options.hold) {
          holdTimeout = setTimeout($.proxy(function () {
            //Trigger the event
            $element.trigger('hold', [event.target]);
            //Fire the callback
            if (options.hold) {
              ret = options.hold.call($element, event, event.target);
            }
          }, this), options.longTapThreshold);
        }
        setTouchInProgress(true);
      }
      return null;
    }
    ;

    /**
     * Event handler for a touch move event.
     * If we change fingers during move, then cancel the event
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchMove(jqEvent) {
      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      //If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
      if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease()) return;
      var ret,
        touches = event.touches,
        evt = touches ? touches[0] : event;

      //Update the  finger data
      var currentFinger = updateFingerData(evt);
      endTime = getTimeStamp();
      if (touches) {
        fingerCount = touches.length;
      }
      if (options.hold) {
        clearTimeout(holdTimeout);
      }
      phase = PHASE_MOVE;

      //If we have 2 fingers get Touches distance as well
      if (fingerCount == 2) {
        //Keep track of the initial pinch distance, so we can calculate the diff later
        //We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
        if (startTouchesDistance == 0) {
          //Create second finger if this is the first time...
          createFingerData(1, touches[1]);
          startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
        } else {
          //Else just update the second finger
          updateFingerData(touches[1]);
          endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
          pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
        }
        pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
        pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
      }
      if (fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
        //The overall direction of the swipe. From start to now.
        direction = calculateDirection(currentFinger.start, currentFinger.end);

        //The immediate direction of the swipe, direction between the last movement and this one.
        currentDirection = calculateDirection(currentFinger.last, currentFinger.end);

        //Check if we need to prevent default event (page scroll / pinch zoom) or not
        validateDefaultEvent(jqEvent, currentDirection);

        //Distance and duration are all off the main finger
        distance = calculateDistance(currentFinger.start, currentFinger.end);
        duration = calculateDuration();

        //Cache the maximum distance we made in this direction
        setMaxDistance(direction, distance);

        //Trigger status handler
        ret = triggerHandler(event, phase);

        //If we trigger end events when threshold are met, or trigger events when touch leaves element
        if (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
          var inBounds = true;

          //If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
          if (options.triggerOnTouchLeave) {
            var bounds = getbounds(this);
            inBounds = isInBounds(currentFinger.end, bounds);
          }

          //Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
          if (!options.triggerOnTouchEnd && inBounds) {
            phase = getNextPhase(PHASE_MOVE);
          }
          //We end if out of bounds here, so set current phase to END, and check if its modified
          else if (options.triggerOnTouchLeave && !inBounds) {
            phase = getNextPhase(PHASE_END);
          }
          if (phase == PHASE_CANCEL || phase == PHASE_END) {
            triggerHandler(event, phase);
          }
        }
      } else {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }
      if (ret === false) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }
    }

    /**
     * Event handler for a touch end event.
     * Calculate the direction and trigger events
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchEnd(jqEvent) {
      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
        touches = event.touches;

      //If we are still in a touch with the device wait a fraction and see if the other finger comes up
      //if it does within the threshold, then we treat it as a multi release, not a single release and end the touch / swipe
      if (touches) {
        if (touches.length && !inMultiFingerRelease()) {
          startMultiFingerRelease(event);
          return true;
        } else if (touches.length && inMultiFingerRelease()) {
          return true;
        }
      }

      //If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
      //This is used to allow 2 fingers to release fractionally after each other, whilst maintaining the event as containing 2 fingers, not 1
      if (inMultiFingerRelease()) {
        fingerCount = fingerCountAtRelease;
      }

      //Set end of swipe
      endTime = getTimeStamp();

      //Get duration incase move was never fired
      duration = calculateDuration();

      //If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
      if (didSwipeBackToCancel() || !validateSwipeDistance()) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      } else if (options.triggerOnTouchEnd || options.triggerOnTouchEnd === false && phase === PHASE_MOVE) {
        //call this on jq event so we are cross browser
        if (options.preventDefaultEvents !== false && jqEvent.cancelable !== false) {
          jqEvent.preventDefault();
        }
        phase = PHASE_END;
        triggerHandler(event, phase);
      }
      //Special cases - A tap should always fire on touch end regardless,
      //So here we manually trigger the tap end handler by itself
      //We dont run trigger handler as it will re-trigger events that may have fired already
      else if (!options.triggerOnTouchEnd && hasTap()) {
        //Trigger the pinch events...
        phase = PHASE_END;
        triggerHandlerForGesture(event, phase, TAP);
      } else if (phase === PHASE_MOVE) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }
      setTouchInProgress(false);
      return null;
    }

    /**
     * Event handler for a touch cancel event.
     * Clears current vars
     * @inner
     */
    function touchCancel() {
      // reset the variables back to default values
      fingerCount = 0;
      endTime = 0;
      startTime = 0;
      startTouchesDistance = 0;
      endTouchesDistance = 0;
      pinchZoom = 1;

      //If we were in progress of tracking a possible multi touch end, then re set it.
      cancelMultiFingerRelease();
      setTouchInProgress(false);
    }

    /**
     * Event handler for a touch leave event.
     * This is only triggered on desktops, in touch we work this out manually
     * as the touchleave event is not supported in webkit
     * @inner
     */
    function touchLeave(jqEvent) {
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      //If we have the trigger on leave property set....
      if (options.triggerOnTouchLeave) {
        phase = getNextPhase(PHASE_END);
        triggerHandler(event, phase);
      }
    }

    /**
     * Removes all listeners that were associated with the plugin
     * @inner
     */
    function removeListeners() {
      $element.off(START_EV, touchStart);
      $element.off(CANCEL_EV, touchCancel);
      $element.off(MOVE_EV, touchMove);
      $element.off(END_EV, touchEnd);

      //we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
      if (LEAVE_EV) {
        $element.off(LEAVE_EV, touchLeave);
      }
      setTouchInProgress(false);
    }

    /**
     * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
     */
    function getNextPhase(currentPhase) {
      var nextPhase = currentPhase;

      // Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
      var validTime = validateSwipeTime();
      var validDistance = validateSwipeDistance();
      var didCancel = didSwipeBackToCancel();

      //If we have exceeded our time, then cancel
      if (!validTime || didCancel) {
        nextPhase = PHASE_CANCEL;
      }
      //Else if we are moving, and have reached distance then end
      else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave)) {
        nextPhase = PHASE_END;
      }
      //Else if we have ended by leaving and didn't reach distance, then cancel
      else if (!validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave) {
        nextPhase = PHASE_CANCEL;
      }
      return nextPhase;
    }

    /**
     * Trigger the relevant event handler
     * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
     * @param {object} event the original event object
     * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
     * @inner
     */
    function triggerHandler(event, phase) {
      var ret,
        touches = event.touches;

      // SWIPE GESTURES
      if (didSwipe() || hasSwipes()) {
        ret = triggerHandlerForGesture(event, phase, SWIPE);
      }

      // PINCH GESTURES (if the above didn't cancel)
      if ((didPinch() || hasPinches()) && ret !== false) {
        ret = triggerHandlerForGesture(event, phase, PINCH);
      }

      // CLICK / TAP (if the above didn't cancel)
      if (didDoubleTap() && ret !== false) {
        //Trigger the tap events...
        ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
      }

      // CLICK / TAP (if the above didn't cancel)
      else if (didLongTap() && ret !== false) {
        //Trigger the tap events...
        ret = triggerHandlerForGesture(event, phase, LONG_TAP);
      }

      // CLICK / TAP (if the above didn't cancel)
      else if (didTap() && ret !== false) {
        //Trigger the tap event..
        ret = triggerHandlerForGesture(event, phase, TAP);
      }

      // If we are cancelling the gesture, then manually trigger the reset handler
      if (phase === PHASE_CANCEL) {
        touchCancel(event);
      }

      // If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
      if (phase === PHASE_END) {
        //If we support touch, then check that all fingers are off before we cancel
        if (touches) {
          if (!touches.length) {
            touchCancel(event);
          }
        } else {
          touchCancel(event);
        }
      }
      return ret;
    }

    /**
     * Trigger the relevant event handler
     * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
     * @param {object} event the original event object
     * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
     * @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
     * @return Boolean False, to indicate that the event should stop propagation, or void.
     * @inner
     */
    function triggerHandlerForGesture(event, phase, gesture) {
      var ret;

      //SWIPES....
      if (gesture == SWIPE) {
        //Trigger status every time..
        $element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]);
        if (options.swipeStatus) {
          ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection);
          //If the status cancels, then dont run the subsequent event handlers..
          if (ret === false) return false;
        }
        if (phase == PHASE_END && validateSwipe()) {
          //Cancel any taps that were in progress...
          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);
          $element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
          if (options.swipe) {
            ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
            //If the status cancels, then dont run the subsequent event handlers..
            if (ret === false) return false;
          }

          //trigger direction specific event handlers
          switch (direction) {
            case LEFT:
              $element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
              if (options.swipeLeft) {
                ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;
            case RIGHT:
              $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
              if (options.swipeRight) {
                ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;
            case UP:
              $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
              if (options.swipeUp) {
                ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;
            case DOWN:
              $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
              if (options.swipeDown) {
                ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;
          }
        }
      }

      //PINCHES....
      if (gesture == PINCH) {
        $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
        if (options.pinchStatus) {
          ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
          //If the status cancels, then dont run the subsequent event handlers..
          if (ret === false) return false;
        }
        if (phase == PHASE_END && validatePinch()) {
          switch (pinchDirection) {
            case IN:
              $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
              if (options.pinchIn) {
                ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
              }
              break;
            case OUT:
              $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
              if (options.pinchOut) {
                ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
              }
              break;
          }
        }
      }
      if (gesture == TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {
          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);

          //If we are also looking for doubelTaps, wait incase this is one...
          if (hasDoubleTap() && !inDoubleTap()) {
            doubleTapStartTime = getTimeStamp();

            //Now wait for the double tap timeout, and trigger this single tap
            //if its not cancelled by a double tap
            singleTapTimeout = setTimeout($.proxy(function () {
              doubleTapStartTime = null;
              $element.trigger('tap', [event.target]);
              if (options.tap) {
                ret = options.tap.call($element, event, event.target);
              }
            }, this), options.doubleTapThreshold);
          } else {
            doubleTapStartTime = null;
            $element.trigger('tap', [event.target]);
            if (options.tap) {
              ret = options.tap.call($element, event, event.target);
            }
          }
        }
      } else if (gesture == DOUBLE_TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {
          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);
          doubleTapStartTime = null;
          $element.trigger('doubletap', [event.target]);
          if (options.doubleTap) {
            ret = options.doubleTap.call($element, event, event.target);
          }
        }
      } else if (gesture == LONG_TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {
          clearTimeout(singleTapTimeout);
          doubleTapStartTime = null;
          $element.trigger('longtap', [event.target]);
          if (options.longTap) {
            ret = options.longTap.call($element, event, event.target);
          }
        }
      }
      return ret;
    }

    //
    // GESTURE VALIDATION
    //

    /**
     * Checks the user has swipe far enough
     * @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
     * If no threshold was set, then we return true.
     * @inner
     */
    function validateSwipeDistance() {
      var valid = true;
      //If we made it past the min swipe distance..
      if (options.threshold !== null) {
        valid = distance >= options.threshold;
      }
      return valid;
    }

    /**
     * Checks the user has swiped back to cancel.
     * @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
     * If no cancelThreshold was set, then we return true.
     * @inner
     */
    function didSwipeBackToCancel() {
      var cancelled = false;
      if (options.cancelThreshold !== null && direction !== null) {
        cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold;
      }
      return cancelled;
    }

    /**
     * Checks the user has pinched far enough
     * @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
     * If no threshold was set, then we return true.
     * @inner
     */
    function validatePinchDistance() {
      if (options.pinchThreshold !== null) {
        return pinchDistance >= options.pinchThreshold;
      }
      return true;
    }

    /**
     * Checks that the time taken to swipe meets the minimum / maximum requirements
     * @return Boolean
     * @inner
     */
    function validateSwipeTime() {
      var result;
      //If no time set, then return true
      if (options.maxTimeThreshold) {
        if (duration >= options.maxTimeThreshold) {
          result = false;
        } else {
          result = true;
        }
      } else {
        result = true;
      }
      return result;
    }

    /**
     * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
     * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
     * @param {object} jqEvent The normalised jQuery representation of the event object.
     * @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
     * @see $.fn.swipe.directions
     * @inner
     */
    function validateDefaultEvent(jqEvent, direction) {
      //If the option is set, allways allow the event to bubble up (let user handle weirdness)
      if (options.preventDefaultEvents === false) {
        return;
      }
      if (options.allowPageScroll === NONE) {
        jqEvent.preventDefault();
      } else {
        var auto = options.allowPageScroll === AUTO;
        switch (direction) {
          case LEFT:
            if (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) {
              jqEvent.preventDefault();
            }
            break;
          case RIGHT:
            if (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) {
              jqEvent.preventDefault();
            }
            break;
          case UP:
            if (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) {
              jqEvent.preventDefault();
            }
            break;
          case DOWN:
            if (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) {
              jqEvent.preventDefault();
            }
            break;
          case NONE:
            break;
        }
      }
    }

    // PINCHES
    /**
     * Returns true of the current pinch meets the thresholds
     * @return Boolean
     * @inner
     */
    function validatePinch() {
      var hasCorrectFingerCount = validateFingers();
      var hasEndPoint = validateEndPoint();
      var hasCorrectDistance = validatePinchDistance();
      return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
    }

    /**
     * Returns true if any Pinch events have been registered
     * @return Boolean
     * @inner
     */
    function hasPinches() {
      //Enure we dont return 0 or null for false values
      return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
    }

    /**
     * Returns true if we are detecting pinches, and have one
     * @return Boolean
     * @inner
     */
    function didPinch() {
      //Enure we dont return 0 or null for false values
      return !!(validatePinch() && hasPinches());
    }

    // SWIPES
    /**
     * Returns true if the current swipe meets the thresholds
     * @return Boolean
     * @inner
     */
    function validateSwipe() {
      //Check validity of swipe
      var hasValidTime = validateSwipeTime();
      var hasValidDistance = validateSwipeDistance();
      var hasCorrectFingerCount = validateFingers();
      var hasEndPoint = validateEndPoint();
      var didCancel = didSwipeBackToCancel();

      // if the user swiped more than the minimum length, perform the appropriate action
      // hasValidDistance is null when no distance is set
      var valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
      return valid;
    }

    /**
     * Returns true if any Swipe events have been registered
     * @return Boolean
     * @inner
     */
    function hasSwipes() {
      //Enure we dont return 0 or null for false values
      return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
    }

    /**
     * Returns true if we are detecting swipes and have one
     * @return Boolean
     * @inner
     */
    function didSwipe() {
      //Enure we dont return 0 or null for false values
      return !!(validateSwipe() && hasSwipes());
    }

    /**
     * Returns true if we have matched the number of fingers we are looking for
     * @return Boolean
     * @inner
     */
    function validateFingers() {
      //The number of fingers we want were matched, or on desktop we ignore
      return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH;
    }

    /**
     * Returns true if we have an end point for the swipe
     * @return Boolean
     * @inner
     */
    function validateEndPoint() {
      //We have an end value for the finger
      return fingerData[0].end.x !== 0;
    }

    // TAP / CLICK
    /**
     * Returns true if a click / tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasTap() {
      //Enure we dont return 0 or null for false values
      return !!options.tap;
    }

    /**
     * Returns true if a double tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasDoubleTap() {
      //Enure we dont return 0 or null for false values
      return !!options.doubleTap;
    }

    /**
     * Returns true if any long tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasLongTap() {
      //Enure we dont return 0 or null for false values
      return !!options.longTap;
    }

    /**
     * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
     * @return Boolean
     * @inner
     */
    function validateDoubleTap() {
      if (doubleTapStartTime == null) {
        return false;
      }
      var now = getTimeStamp();
      return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold;
    }

    /**
     * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
     * @return Boolean
     * @inner
     */
    function inDoubleTap() {
      return validateDoubleTap();
    }

    /**
     * Returns true if we have a valid tap
     * @return Boolean
     * @inner
     */
    function validateTap() {
      return (fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold);
    }

    /**
     * Returns true if we have a valid long tap
     * @return Boolean
     * @inner
     */
    function validateLongTap() {
      //slight threshold on moving finger
      return duration > options.longTapThreshold && distance < DOUBLE_TAP_THRESHOLD;
    }

    /**
     * Returns true if we are detecting taps and have one
     * @return Boolean
     * @inner
     */
    function didTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateTap() && hasTap());
    }

    /**
     * Returns true if we are detecting double taps and have one
     * @return Boolean
     * @inner
     */
    function didDoubleTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateDoubleTap() && hasDoubleTap());
    }

    /**
     * Returns true if we are detecting long taps and have one
     * @return Boolean
     * @inner
     */
    function didLongTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateLongTap() && hasLongTap());
    }

    // MULTI FINGER TOUCH
    /**
     * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
     * @inner
     */
    function startMultiFingerRelease(event) {
      previousTouchEndTime = getTimeStamp();
      fingerCountAtRelease = event.touches.length + 1;
    }

    /**
     * Cancels the tracking of time between 2 finger releases, and resets counters
     * @inner
     */
    function cancelMultiFingerRelease() {
      previousTouchEndTime = 0;
      fingerCountAtRelease = 0;
    }

    /**
     * Checks if we are in the threshold between 2 fingers being released
     * @return Boolean
     * @inner
     */
    function inMultiFingerRelease() {
      var withinThreshold = false;
      if (previousTouchEndTime) {
        var diff = getTimeStamp() - previousTouchEndTime;
        if (diff <= options.fingerReleaseThreshold) {
          withinThreshold = true;
        }
      }
      return withinThreshold;
    }

    /**
     * gets a data flag to indicate that a touch is in progress
     * @return Boolean
     * @inner
     */
    function getTouchInProgress() {
      //strict equality to ensure only true and false are returned
      return !!($element.data(PLUGIN_NS + '_intouch') === true);
    }

    /**
     * Sets a data flag to indicate that a touch is in progress
     * @param {boolean} val The value to set the property to
     * @inner
     */
    function setTouchInProgress(val) {
      //If destroy is called in an event handler, we have no el, and we have already cleaned up, so return.
      if (!$element) {
        return;
      }

      //Add or remove event listeners depending on touch status
      if (val === true) {
        $element.on(MOVE_EV, touchMove);
        $element.on(END_EV, touchEnd);

        //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
        if (LEAVE_EV) {
          $element.on(LEAVE_EV, touchLeave);
        }
      } else {
        $element.off(MOVE_EV, touchMove, false);
        $element.off(END_EV, touchEnd, false);

        //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
        if (LEAVE_EV) {
          $element.off(LEAVE_EV, touchLeave, false);
        }
      }

      //strict equality to ensure only true and false can update the value
      $element.data(PLUGIN_NS + '_intouch', val === true);
    }

    /**
     * Creates the finger data for the touch/finger in the event object.
     * @param {int} id The id to store the finger data under (usually the order the fingers were pressed)
     * @param {object} evt The event object containing finger data
     * @return finger data object
     * @inner
     */
    function createFingerData(id, evt) {
      var f = {
        start: {
          x: 0,
          y: 0
        },
        last: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      };
      f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX;
      f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY;
      fingerData[id] = f;
      return f;
    }

    /**
     * Updates the finger data for a particular event object
     * @param {object} evt The event object containing the touch/finger data to upadte
     * @return a finger data object.
     * @inner
     */
    function updateFingerData(evt) {
      var id = evt.identifier !== undefined ? evt.identifier : 0;
      var f = getFingerData(id);
      if (f === null) {
        f = createFingerData(id, evt);
      }
      f.last.x = f.end.x;
      f.last.y = f.end.y;
      f.end.x = evt.pageX || evt.clientX;
      f.end.y = evt.pageY || evt.clientY;
      return f;
    }

    /**
     * Returns a finger data object by its event ID.
     * Each touch event has an identifier property, which is used
     * to track repeat touches
     * @param {int} id The unique id of the finger in the sequence of touch events.
     * @return a finger data object.
     * @inner
     */
    function getFingerData(id) {
      return fingerData[id] || null;
    }

    /**
     * Sets the maximum distance swiped in the given direction.
     * If the new value is lower than the current value, the max value is not changed.
     * @param {string}  direction The direction of the swipe
     * @param {int}  distance The distance of the swipe
     * @inner
     */
    function setMaxDistance(direction, distance) {
      if (direction == NONE) return;
      distance = Math.max(distance, getMaxDistance(direction));
      maximumsMap[direction].distance = distance;
    }

    /**
     * gets the maximum distance swiped in the given direction.
     * @param {string}  direction The direction of the swipe
     * @return int  The distance of the swipe
     * @inner
     */
    function getMaxDistance(direction) {
      if (maximumsMap[direction]) return maximumsMap[direction].distance;
      return undefined;
    }

    /**
     * Creats a map of directions to maximum swiped values.
     * @return Object A dictionary of maximum values, indexed by direction.
     * @inner
     */
    function createMaximumsData() {
      var maxData = {};
      maxData[LEFT] = createMaximumVO(LEFT);
      maxData[RIGHT] = createMaximumVO(RIGHT);
      maxData[UP] = createMaximumVO(UP);
      maxData[DOWN] = createMaximumVO(DOWN);
      return maxData;
    }

    /**
     * Creates a map maximum swiped values for a given swipe direction
     * @param {string} The direction that these values will be associated with
     * @return Object Maximum values
     * @inner
     */
    function createMaximumVO(dir) {
      return {
        direction: dir,
        distance: 0
      };
    }

    //
    // MATHS / UTILS
    //

    /**
     * Calculate the duration of the swipe
     * @return int
     * @inner
     */
    function calculateDuration() {
      return endTime - startTime;
    }

    /**
     * Calculate the distance between 2 touches (pinch)
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int;
     * @inner
     */
    function calculateTouchesDistance(startPoint, endPoint) {
      var diffX = Math.abs(startPoint.x - endPoint.x);
      var diffY = Math.abs(startPoint.y - endPoint.y);
      return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
    }

    /**
     * Calculate the zoom factor between the start and end distances
     * @param {int} startDistance Distance (between 2 fingers) the user started pinching at
     * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
     * @return float The zoom value from 0 to 1.
     * @inner
     */
    function calculatePinchZoom(startDistance, endDistance) {
      var percent = endDistance / startDistance * 1;
      return percent.toFixed(2);
    }

    /**
     * Returns the pinch direction, either IN or OUT for the given points
     * @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
     * @see $.fn.swipe.directions
     * @inner
     */
    function calculatePinchDirection() {
      if (pinchZoom < 1) {
        return OUT;
      } else {
        return IN;
      }
    }

    /**
     * Calculate the length / distance of the swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int
     * @inner
     */
    function calculateDistance(startPoint, endPoint) {
      return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
    }

    /**
     * Calculate the angle of the swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int
     * @inner
     */
    function calculateAngle(startPoint, endPoint) {
      var x = startPoint.x - endPoint.x;
      var y = endPoint.y - startPoint.y;
      var r = Math.atan2(y, x); //radians
      var angle = Math.round(r * 180 / Math.PI); //degrees

      //ensure value is positive
      if (angle < 0) {
        angle = 360 - Math.abs(angle);
      }
      return angle;
    }

    /**
     * Calculate the direction of the swipe
     * This will also call calculateAngle to get the latest angle of swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
     * @see $.fn.swipe.directions
     * @inner
     */
    function calculateDirection(startPoint, endPoint) {
      if (comparePoints(startPoint, endPoint)) {
        return NONE;
      }
      var angle = calculateAngle(startPoint, endPoint);
      if (angle <= 45 && angle >= 0) {
        return LEFT;
      } else if (angle <= 360 && angle >= 315) {
        return LEFT;
      } else if (angle >= 135 && angle <= 225) {
        return RIGHT;
      } else if (angle > 45 && angle < 135) {
        return DOWN;
      } else {
        return UP;
      }
    }

    /**
     * Returns a MS time stamp of the current time
     * @return int
     * @inner
     */
    function getTimeStamp() {
      var now = new Date();
      return now.getTime();
    }

    /**
     * Returns a bounds object with left, right, top and bottom properties for the element specified.
     * @param {DomNode} The DOM node to get the bounds for.
     */
    function getbounds(el) {
      el = $(el);
      var offset = el.offset();
      var bounds = {
        left: offset.left,
        right: offset.left + el.outerWidth(),
        top: offset.top,
        bottom: offset.top + el.outerHeight()
      };
      return bounds;
    }

    /**
     * Checks if the point object is in the bounds object.
     * @param {object} point A point object.
     * @param {int} point.x The x value of the point.
     * @param {int} point.y The x value of the point.
     * @param {object} bounds The bounds object to test
     * @param {int} bounds.left The leftmost value
     * @param {int} bounds.right The righttmost value
     * @param {int} bounds.top The topmost value
     * @param {int} bounds.bottom The bottommost value
     */
    function isInBounds(point, bounds) {
      return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom;
    }
    ;

    /**
     * Checks if the two points are equal
     * @param {object} point A point object.
     * @param {object} point B point object.
     * @return true of the points match
     */
    function comparePoints(pointA, pointB) {
      return pointA.x == pointB.x && pointA.y == pointB.y;
    }
  }

  /**
   * A catch all handler that is triggered for all swipe directions.
   * @name $.fn.swipe#swipe
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "left" swipes.
   * @name $.fn.swipe#swipeLeft
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "right" swipes.
   * @name $.fn.swipe#swipeRight
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "up" swipes.
   * @name $.fn.swipe#swipeUp
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "down" swipes.
   * @name $.fn.swipe#swipeDown
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
   * This is triggered regardless of swipe thresholds.
   * @name $.fn.swipe#swipeStatus
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
   * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler triggered for pinch in events.
   * @name $.fn.swipe#pinchIn
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A handler triggered for pinch out events.
   * @name $.fn.swipe#pinchOut
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
   * @name $.fn.swipe#pinchStatus
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A click handler triggered when a user simply clicks, rather than swipes on an element.
   * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
   * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
   * Use the <code>tap</code> event instead.
   * @name $.fn.swipe#click
   * @event
   * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
   * @name $.fn.swipe#tap
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A double tap handler triggered when a user double clicks or taps on an element.
   * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property.
   * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
   * as the script needs to check if its a double tap.
   * @name $.fn.swipe#doubleTap
   * @see  $.fn.swipe.defaults#doubleTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
   * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
   * @name $.fn.swipe#longTap
   * @see  $.fn.swipe.defaults#longTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A hold tap handler triggered as soon as the longTapThreshold is reached
   * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
   * @name $.fn.swipe#hold
   * @see  $.fn.swipe.defaults#longTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ25ELENBQUMsSUFBSW9ELE1BQU0sQ0FBQ3BELENBQUMsSUFBSW1ELE1BQU0sQ0FBQ3ZDLENBQUMsSUFBSXdDLE1BQU0sQ0FBQ3hDLENBQUM7SUFDdEQ7RUFHRjs7RUFLQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFLRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUMsQ0FBQyxFQUFJeUMsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb3R1YmVyLy4vc3JjL2Fzc2V0cy9qcy90b3VjaC1zd2lwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qIVxyXG4gKiBAZmlsZU92ZXJ2aWV3IFRvdWNoU3dpcGUgLSBqUXVlcnkgUGx1Z2luXHJcbiAqIEB2ZXJzaW9uIDEuNi4xOFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hdHQgQnJ5c29uIGh0dHA6Ly93d3cuZ2l0aHViLmNvbS9tYXR0YnJ5c29uXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21hdHRicnlzb24vVG91Y2hTd2lwZS1KcXVlcnktUGx1Z2luXHJcbiAqIEBzZWUgaHR0cDovL2xhYnMucmFtcGludGVyYWN0aXZlLmNvLnVrL3RvdWNoU3dpcGUvXHJcbiAqIEBzZWUgaHR0cDovL3BsdWdpbnMuanF1ZXJ5LmNvbS9wcm9qZWN0L3RvdWNoU3dpcGVcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTUgTWF0dCBCcnlzb25cclxuICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIG9yIEdQTCBWZXJzaW9uIDIgbGljZW5zZXMuXHJcbiAqXHJcbiAqL1xyXG5cclxuLypcclxuICpcclxuICogQ2hhbmdlbG9nXHJcbiAqICREYXRlOiAyMDEwLTEyLTEyIChXZWQsIDEyIERlYyAyMDEwKSAkXHJcbiAqICR2ZXJzaW9uOiAxLjAuMFxyXG4gKiAkdmVyc2lvbjogMS4wLjEgLSByZW1vdmVkIG11bHRpYnl0ZSBjb21tZW50c1xyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMS0yMS0wMiAoTW9uLCAyMSBGZWIgMjAxMSkgJFxyXG4gKiAkdmVyc2lvbjogMS4xLjAgXHQtIGFkZGVkIGFsbG93UGFnZVNjcm9sbCBwcm9wZXJ0eSB0byBhbGxvdyBzd2lwaW5nIGFuZCBzY3JvbGxpbmcgb2YgcGFnZVxyXG4gKlx0XHRcdFx0XHQtIGNoYW5nZWQgaGFuZGxlciBzaWduYXR1cmVzIHNvIG9uZSBoYW5kbGVyIGNhbiBiZSB1c2VkIGZvciBtdWx0aXBsZSBldmVudHNcclxuICogJERhdGU6IDIwMTEtMjMtMDIgKFdlZCwgMjMgRmViIDIwMTEpICRcclxuICogJHZlcnNpb246IDEuMi4wIFx0LSBhZGRlZCBjbGljayBoYW5kbGVyLiBUaGlzIGlzIGZpcmVkIGlmIHRoZSB1c2VyIHNpbXBseSBjbGlja3MgYW5kIGRvZXMgbm90IHN3aXBlLiBUaGUgZXZlbnQgb2JqZWN0IGFuZCBjbGljayB0YXJnZXQgYXJlIHBhc3NlZCB0byBoYW5kbGVyLlxyXG4gKlx0XHRcdFx0XHQtIElmIHlvdSB1c2UgdGhlIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9qcXVlcnktdWktZm9yLWlwYWQtYW5kLWlwaG9uZS8gcGx1Z2luLCB5b3UgY2FuIGFsc28gYXNzaWduIGpRdWVyeSBtb3VzZSBldmVudHMgdG8gY2hpbGRyZW4gb2YgYSB0b3VjaFN3aXBlIG9iamVjdC5cclxuICogJHZlcnNpb246IDEuMi4xIFx0LSByZW1vdmVkIGNvbnNvbGUgbG9nIVxyXG4gKlxyXG4gKiAkdmVyc2lvbjogMS4yLjIgXHQtIEZpeGVkIGJ1ZyB3aGVyZSBzY29wZSB3YXMgbm90IHByZXNlcnZlZCBpbiBjYWxsYmFjayBtZXRob2RzLlxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMS0yOC0wNCAoVGh1cnMsIDI4IEFwcmlsIDIwMTEpICRcclxuICogJHZlcnNpb246IDEuMi40IFx0LSBDaGFuZ2VkIGxpY2VuY2UgdGVybXMgdG8gYmUgTUlUIG9yIEdQTCBpbmxpbmUgd2l0aCBqUXVlcnkuIEFkZGVkIGNoZWNrIGZvciBzdXBwb3J0IG9mIHRvdWNoIGV2ZW50cyB0byBzdG9wIG5vbiBjb21wYXRpYmxlIGJyb3dzZXJzIGVycm9yaW5nLlxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMS0yNy0wOSAoVHVlcywgMjcgU2VwdGVtYmVyIDIwMTEpICRcclxuICogJHZlcnNpb246IDEuMi41IFx0LSBBZGRlZCBzdXBwb3J0IGZvciB0ZXN0aW5nIHN3aXBlcyB3aXRoIG1vdXNlIG9uIGRlc2t0b3AgYnJvd3NlciAodGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9qb2VsaHkpXHJcbiAqXHJcbiAqICREYXRlOiAyMDEyLTE0LTA1IChNb24sIDE0IE1heSAyMDEyKSAkXHJcbiAqICR2ZXJzaW9uOiAxLjIuNiBcdC0gQWRkZWQgdGltZVRocmVzaG9sZCBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmQgdG91Y2gsIHNvIHVzZXIgY2FuIGlnbm9yZSBzbG93IHN3aXBlcyAodGhhbmtzIHRvIE1hcmsgQ2hhc2UpLiBEZWZhdWx0IGlzIG51bGwsIGFsbCBzd2lwZXMgYXJlIGRldGVjdGVkXHJcbiAqXHJcbiAqICREYXRlOiAyMDEyLTA1LTA2IChUdWVzLCAwNSBKdW5lIDIwMTIpICRcclxuICogJHZlcnNpb246IDEuMi43IFx0LSBDaGFuZ2VkIHRpbWUgdGhyZXNob2xkIHRvIGhhdmUgbnVsbCBkZWZhdWx0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gQWRkZWQgZHVyYXRpb24gcGFyYW0gcGFzc2VkIGJhY2sgaW4gZXZlbnRzLCBhbmQgcmVmYWN0b3JlZCBob3cgdGltZSBpcyBoYW5kbGVkLlxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMi0wNS0wNiAoVHVlcywgMDUgSnVuZSAyMDEyKSAkXHJcbiAqICR2ZXJzaW9uOiAxLjIuOCBcdC0gQWRkZWQgdGhlIHBvc3NpYmlsaXR5IHRvIHJldHVybiBhIHZhbHVlIGxpa2UgbnVsbCBvciBmYWxzZSBpbiB0aGUgdHJpZ2dlciBjYWxsYmFjay4gSW4gdGhhdCB3YXkgd2UgY2FuIGNvbnRyb2wgd2hlbiB0aGUgdG91Y2ggc3RhcnQvbW92ZSBzaG91bGQgdGFrZSBlZmZlY3Qgb3Igbm90IChzaW1wbHkgYnkgcmV0dXJuaW5nIGluIHNvbWUgY2FzZXMgcmV0dXJuIG51bGw7IG9yIHJldHVybiBmYWxzZTspIFRoaXMgZWZmZWN0cyB0aGUgb250b3VjaHN0YXJ0L29udG91Y2htb3ZlIGV2ZW50LlxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMi0wNi0wNiAoV2VkLCAwNiBKdW5lIDIwMTIpICRcclxuICogJHZlcnNpb246IDEuMy4wIFx0LSBSZWZhY3RvcmVkIHdob2xlIHBsdWdpbiB0byBhbGxvdyBmb3IgbWV0aG9kcyB0byBiZSBleGVjdXRlZCwgYXMgd2VsbCBhcyBleHBvc2VkIGRlZmF1bHRzIGZvciB1c2VyIG92ZXJyaWRlLiBBZGRlZCAnZW5hYmxlJywgJ2Rpc2FibGUnLCBhbmQgJ2Rlc3Ryb3knIG1ldGhvZHNcclxuICpcclxuICogJERhdGU6IDIwMTItMDUtMDYgKEZyaSwgMDUgSnVuZSAyMDEyKSAkXHJcbiAqICR2ZXJzaW9uOiAxLjMuMSBcdC0gQnVnIGZpeGVzICAtIGJpbmQoKSB3aXRoIGZhbHNlIGFzIGxhc3QgYXJndW1lbnQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBpbiBqUXVlcnkgMS42LCBhbHNvLCBpZiB5b3UganVzdCBjbGljaywgdGhlIGR1cmF0aW9uIGlzIG5vdyByZXR1cm5lZCBjb3JyZWN0bHkuXHJcbiAqXHJcbiAqICREYXRlOiAyMDEyLTI5LTA3IChTdW4sIDI5IEp1bHkgMjAxMikgJFxyXG4gKiAkdmVyc2lvbjogMS4zLjJcdC0gQWRkZWQgZmFsbGJhY2tUb01vdXNlRXZlbnRzIG9wdGlvbiB0byBOT1QgY2FwdHVyZSBtb3VzZSBldmVudHMgb24gbm9uIHRvdWNoIGRldmljZXMuXHJcbiAqIFx0XHRcdC0gQWRkZWQgXCJhbGxcIiBmaW5nZXJzIHZhbHVlIHRvIHRoZSBmaW5nZXJzIHByb3BlcnR5LCBzbyBhbnkgY29tYmluYXRpb24gb2YgZmluZ2VycyB0cmlnZ2VycyB0aGUgc3dpcGUsIGFsbG93aW5nIGV2ZW50IGhhbmRsZXJzIHRvIGNoZWNrIHRoZSBmaW5nZXIgY291bnRcclxuICpcclxuICogJERhdGU6IDIwMTItMDktMDggKFRodXJzLCA5IEF1ZyAyMDEyKSAkXHJcbiAqICR2ZXJzaW9uOiAxLjMuM1x0LSBDb2RlIHRpZHkgcHJlcCBmb3IgbWluZWZpZWQgdmVyc2lvblxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMi0wNC0xMCAod2VkLCA0IE9jdCAyMDEyKSAkXHJcbiAqICR2ZXJzaW9uOiAxLjQuMFx0LSBBZGRlZCBwaW5jaCBzdXBwb3J0LCBwaW5jaEluIGFuZCBwaW5jaE91dFxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMi0xMS0xMCAoVGh1cnMsIDExIE9jdCAyMDEyKSAkXHJcbiAqICR2ZXJzaW9uOiAxLjUuMFx0LSBBZGRlZCBleGNsdWRlZEVsZW1lbnRzLCBhIGpxdWVyeSBzZWxlY3RvciB0aGF0IHNwZWNpZmllcyBjaGlsZCBlbGVtZW50cyB0aGF0IGRvIE5PVCB0cmlnZ2VyIHN3aXBlcy4gQnkgZGVmYXVsdCwgdGhpcyBpcyAubm9Td2lwZVxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMi0yMi0xMCAoTW9uLCAyMiBPY3QgMjAxMikgJFxyXG4gKiAkdmVyc2lvbjogMS41LjFcdC0gRml4ZWQgYnVnIHdpdGggalF1ZXJ5IDEuOCBhbmQgdHJhaWxpbmcgY29tbWEgaW4gZXhjbHVkZWRFbGVtZW50c1xyXG4gKlx0XHRcdFx0XHQtIEZpeGVkIGJ1ZyB3aXRoIElFIGFuZCBldmVudFByZXZlbnREZWZhdWx0KClcclxuICogJERhdGU6IDIwMTMtMDEtMTIgKEZyaSwgMTIgSmFuIDIwMTMpICRcclxuICogJHZlcnNpb246IDEuNi4wXHQtIEZpeGVkIGJ1Z3Mgd2l0aCBwaW5jaGluZywgbWFpbmx5IHdoZW4gYm90aCBwaW5jaCBhbmQgc3dpcGUgZW5hYmxlZCwgYXMgd2VsbCBhcyBhZGRpbmcgdGltZSB0aHJlc2hvbGQgZm9yIG11bHRpZmluZ2VyIGdlc3R1cmVzLCBzbyByZWxlYXNpbmcgb25lIGZpbmdlciBiZW9mcmUgdGhlIG90aGVyIGRvZXNudCB0cmlnZ2VyIGFzIHNpbmdsZSBmaW5nZXIgZ2VzdHVyZS5cclxuICpcdFx0XHRcdFx0LSBtYWRlIHRoZSBkZW1vIHNpdGUgYWxsIHN0YXRpYyBsb2NhbCBIVE1MIHBhZ2VzIHNvIHRoZXkgY2FuIGJlIHJ1biBsb2NhbGx5IGJ5IGEgZGV2ZWxvcGVyXHJcbiAqXHRcdFx0XHRcdC0gYWRkZWQganNEb2MgY29tbWVudHMgYW5kIGFkZGVkIGRvY3VtZW50YXRpb24gZm9yIHRoZSBwbHVnaW5cclxuICpcdFx0XHRcdFx0LSBjb2RlIHRpZHlcclxuICpcdFx0XHRcdFx0LSBhZGRlZCB0cmlnZ2VyT25Ub3VjaExlYXZlIHByb3BlcnR5IHRoYXQgd2lsbCBlbmQgdGhlIGV2ZW50IHdoZW4gdGhlIHVzZXIgc3dpcGVzIG9mZiB0aGUgZWxlbWVudC5cclxuICogJERhdGU6IDIwMTMtMDMtMjMgKFNhdCwgMjMgTWFyIDIwMTMpICRcclxuICogJHZlcnNpb246IDEuNi4xXHQtIEFkZGVkIHN1cHBvcnQgZm9yIGllOCB0b3VjaCBldmVudHNcclxuICogJHZlcnNpb246IDEuNi4yXHQtIEFkZGVkIHN1cHBvcnQgZm9yIGV2ZW50cyBiaW5kaW5nIHdpdGggb24gLyBvZmYgLyBiaW5kIGluIGpRIGZvciBhbGwgY2FsbGJhY2sgbmFtZXMuXHJcbiAqICAgICAgICAgICAgICAgICAgIC0gRGVwcmVjYXRlZCB0aGUgJ2NsaWNrJyBoYW5kbGVyIGluIGZhdm91ciBvZiB0YXAuXHJcbiAqICAgICAgICAgICAgICAgICAgIC0gYWRkZWQgY2FuY2VsVGhyZXNob2xkIHByb3BlcnR5XHJcbiAqICAgICAgICAgICAgICAgICAgIC0gYWRkZWQgb3B0aW9uIG1ldGhvZCB0byB1cGRhdGUgaW5pdCBvcHRpb25zIGF0IHJ1bnRpbWVcclxuICogJHZlcnNpb24gMS42LjMgICAgLSBhZGRlZCBkb3VibGV0YXAsIGxvbmd0YXAgZXZlbnRzIGFuZCBsb25nVGFwVGhyZXNob2xkLCBkb3VibGVUYXBUaHJlc2hvbGQgcHJvcGVydHlcclxuICpcclxuICogJERhdGU6IDIwMTMtMDQtMDQgKFRodXJzLCAwNCBBcHJpbCAyMDEzKSAkXHJcbiAqICR2ZXJzaW9uIDEuNi40ICAgIC0gRml4ZWQgYnVnIHdpdGggY2FuY2VsVGhyZXNob2xkIGludHJvZHVjZWQgaW4gMS42LjMsIHdoZXJlIHN3aXBlIHN0YXR1cyBubyBsb25nZXIgZmlyZWQgc3RhcnQgZXZlbnQsIGFuZCBzdG9wcGVkIG9uY2Ugc3dpcGluZyBiYWNrLlxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxMy0wOC0yNCAoU2F0LCAyNCBBdWcgMjAxMykgJFxyXG4gKiAkdmVyc2lvbiAxLjYuNSAgICAtIE1lcmdlZCBhIGZldyBwdWxsIHJlcXVlc3RzIGZpeGluZyB2YXJpb3VzIGJ1Z3MsIGFkZGVkIEFNRCBzdXBwb3J0LlxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxNC0wNi0wNCAoV2VkLCAwNCBKdW5lIDIwMTQpICRcclxuICogJHZlcnNpb24gMS42LjYgXHQtIE1lcmdlIG9mIHB1bGwgcmVxdWVzdHMuXHJcbiAqICAgIFx0XHRcdFx0LSBJRTEwIHRvdWNoIHN1cHBvcnRcclxuICogICAgXHRcdFx0XHQtIE9ubHkgcHJldmVudCBkZWZhdWx0IGV2ZW50IGhhbmRsaW5nIG9uIHZhbGlkIHN3aXBlXHJcbiAqICAgIFx0XHRcdFx0LSBTZXBhcmF0ZSBsaWNlbnNlL2NoYW5nZWxvZyBjb21tZW50XHJcbiAqICAgIFx0XHRcdFx0LSBEZXRlY3QgaWYgdGhlIHN3aXBlIGlzIHZhbGlkIGF0IHRoZSBlbmQgb2YgdGhlIHRvdWNoIGV2ZW50LlxyXG4gKiAgICBcdFx0XHRcdC0gUGFzcyBmaW5nZXJkYXRhIHRvIGV2ZW50IGhhbmRsZXJzLlxyXG4gKiAgICBcdFx0XHRcdC0gQWRkICdob2xkJyBnZXN0dXJlXHJcbiAqICAgIFx0XHRcdFx0LSBCZSBtb3JlIHRvbGVyYW50IGFib3V0IHRoZSB0YXAgZGlzdGFuY2VcclxuICogICAgXHRcdFx0XHQtIFR5cG9zIGFuZCBtaW5vciBmaXhlc1xyXG4gKlxyXG4gKiAkRGF0ZTogMjAxNS0yMi0wMSAoVGh1cnMsIDIyIEphbiAyMDE1KSAkXHJcbiAqICR2ZXJzaW9uIDEuNi43ICAgIC0gQWRkZWQgcGF0Y2ggZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0dGJyeXNvbi9Ub3VjaFN3aXBlLUpxdWVyeS1QbHVnaW4vaXNzdWVzLzIwNiB0byBmaXggbWVtb3J5IGxlYWtcclxuICpcclxuICogJERhdGU6IDIwMTUtMi0yIChNb24sIDIgRmViIDIwMTUpICRcclxuICogJHZlcnNpb24gMS42LjggICAgLSBBZGRlZCBwcmV2ZW50RGVmYXVsdEV2ZW50cyBvcHRpb24gdG8gcHJveHkgZXZlbnRzIHJlZ2FyZGxlc3MuXHJcbiAqXHRcdFx0XHRcdC0gRml4ZWQgaXNzdWUgd2l0aCBzd2lwZSBhbmQgcGluY2ggbm90IHRyaWdnZXJpbmcgYXQgdGhlIHNhbWUgdGltZVxyXG4gKlxyXG4gKiAkRGF0ZTogMjAxNS05LTYgKFR1ZXMsIDkgSnVuZSAyMDE1KSAkXHJcbiAqICR2ZXJzaW9uIDEuNi45ICAgIC0gQWRkZWQgUFIgZnJvbSBqZGFsdG9uL2h5YnJpZCB0byBmaXggcG9pbnRlciBldmVudHNcclxuICpcdFx0XHRcdFx0LSBBZGRlZCBzY3JvbGxpbmcgZGVtb1xyXG4gKlx0XHRcdFx0XHQtIEFkZGVkIHZlcnNpb24gcHJvcGVydHkgdG8gcGx1Z2luXHJcbiAqXHJcbiAqICREYXRlOiAyMDE1LTEtMTAgKFdlZCwgMSBPY3RvYmVyIDIwMTUpICRcclxuICogJHZlcnNpb24gMS42LjEwICAgIC0gQWRkZWQgUFIgZnJvbSBiZWF0c3BhY2UgdG8gZml4IHRhcCBldmVudHNcclxuICogJHZlcnNpb24gMS42LjExICAgIC0gQWRkZWQgUFJzIGZyb20gaW5kcmktaW5kcmkgKCBEb2MgdGlkeXVwKSwga2tpcnNjaGUgKCBCb3dlciB0aWR5IHVwICksIFV6aVRlY2ggKHByZXZlbnREZWZhdWx0RXZlbnRzIGZpeGVzIClcclxuICpcdFx0XHRcdFx0IC0gQWxsb3dlZCBzZXR0aW5nIG11bHRpcGxlIG9wdGlvbnMgdmlhIC5zd2lwZShcIm9wdGlvbnNcIiwgb3B0aW9uc19oYXNoKSBhbmQgbW9yZSBzaW1wbHkgLnN3aXBlKG9wdGlvbnNfaGFzaCkgb3IgZXhpc2l0bmcgaW5zdGFuY2VzXHJcbiAqICR2ZXJzaW9uIDEuNi4xMiAgICAtIEZpeGVkIGJ1ZyB3aXRoIG11bHRpIGZpbmdlciByZWxlYXNlcyBhYm92ZSAyIG5vdCB0cmlnZ2VyaW5nIGV2ZW50c1xyXG4gKlxyXG4gKiAkRGF0ZTogMjAxNS0xMi0xOCAoRnJpLCAxOCBEZWNlbWJlciAyMDE1KSAkXHJcbiAqICR2ZXJzaW9uIDEuNi4xMyAgICAtIEFkZGVkIFBSc1xyXG4gKiAgICAgICAgICAgICAgICAgICAgLSBGaXhlZCAjMjY3IGFsbG93UGFnZVNjcm9sbCBub3Qgd29ya2luZyBjb3JyZWN0bHlcclxuICogJHZlcnNpb24gMS42LjE0ICAgIC0gRml4ZWQgIzIyMCAvICMyNDggZG91YmxldGFwIG5vdCBmaXJpbmcgd2l0aCBzd2lwZXMsICMyMjMgY29tbW9uSlMgY29tcGF0aWJsZVxyXG4gKiAkdmVyc2lvbiAxLjYuMTUgICAgLSBNb3JlIGJ1ZyBmaXhlc1xyXG4gKlxyXG4gKiAkRGF0ZTogMjAxNi0wNC0yOSAoRnJpLCAyOSBBcHJpbCAyMDE2KSAkXHJcbiAqICR2ZXJzaW9uIDEuNi4xNiAgICAtIFN3aXBlcyB3aXRoIDAgZGlzdGFuY2Ugbm93IGFsbG93IGRlZmF1bHQgZXZlbnRzIHRvIHRyaWdnZXIuICBTbyB0YXBwaW5nIGFueSBmb3JtIGVsZW1lbnRzIG9yIEEgdGFncyB3aWxsIGFsbG93IGRlZmF1bHQgaW50ZXJhY3Rpb24sIGJ1dCBzd2lwaW5nIHdpbGwgdHJpZ2dlciBhIHN3aXBlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVkIHRoZSBhLCBpbnB1dCwgc2VsZWN0IGV0YyBmcm9tIHRoZSBleGNsdWRlZCBDaGlsZHJlbiBsaXN0IGFzIHRoZSAwIGRpc3RhbmNlIHRhcCBzb2x2ZXMgdGhhdCBpc3N1ZS5cclxuKiAkRGF0ZTogMjAxNi0wNS0xOSAgKEZyaSwgMjkgQXByaWwgMjAxNikgJFxyXG4qICR2ZXJzaW9uIDEuNi4xNyAgICAgLSBGaXhlZCBjb250ZXh0IGlzc3VlIHdoZW4gY2FsbGluZyBpbnN0YW5jZSBtZXRob2RzIHZpYSAkKFwic2VsZWN0b3JcIikuc3dpcGUoXCJtZXRob2RcIik7XHJcbiogJHZlcnNpb24gMS42LjE4ICAgICAtIG5vdyBob25vcnMgZmFsbGJhY2tUb01vdXNlRXZlbnRzPWZhbHNlIGZvciBNUyBQb2ludGVyIGV2ZW50cyB3aGVuIGEgTW91c2UgaXMgdXNlZC5cclxuICovXHJcblxyXG4vKipcclxuICogU2VlIChodHRwOi8vanF1ZXJ5LmNvbS8pLlxyXG4gKiBAbmFtZSAkXHJcbiAqIEBjbGFzc1xyXG4gKiBTZWUgdGhlIGpRdWVyeSBMaWJyYXJ5ICAoaHR0cDovL2pxdWVyeS5jb20vKSBmb3IgZnVsbCBkZXRhaWxzLiAgVGhpcyBqdXN0XHJcbiAqIGRvY3VtZW50cyB0aGUgZnVuY3Rpb24gYW5kIGNsYXNzZXMgdGhhdCBhcmUgYWRkZWQgdG8galF1ZXJ5IGJ5IHRoaXMgcGx1Zy1pbi5cclxuICovXHJcblxyXG4vKipcclxuICogU2VlIChodHRwOi8vanF1ZXJ5LmNvbS8pXHJcbiAqIEBuYW1lIGZuXHJcbiAqIEBjbGFzc1xyXG4gKiBTZWUgdGhlIGpRdWVyeSBMaWJyYXJ5ICAoaHR0cDovL2pxdWVyeS5jb20vKSBmb3IgZnVsbCBkZXRhaWxzLiAgVGhpcyBqdXN0XHJcbiAqIGRvY3VtZW50cyB0aGUgZnVuY3Rpb24gYW5kIGNsYXNzZXMgdGhhdCBhcmUgYWRkZWQgdG8galF1ZXJ5IGJ5IHRoaXMgcGx1Zy1pbi5cclxuICogQG1lbWJlck9mICRcclxuICovXHJcblxyXG5cclxuLy8gKGZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuLy8gICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICYmIGRlZmluZS5hbWQualF1ZXJ5KSB7XHJcbi8vICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFub255bW91cyBtb2R1bGUuXHJcbi8vICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XHJcbi8vICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4vLyAgICAgLy8gQ29tbW9uSlMgTW9kdWxlXHJcbi8vICAgICBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICAvLyBCcm93c2VyIGdsb2JhbHMuXHJcbi8vICAgICBmYWN0b3J5KGpRdWVyeSk7XHJcbi8vICAgfVxyXG4vLyB9KGZ1bmN0aW9uKCQpIHtcclxuICAgIChmdW5jdGlvbigkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIC8vQ29uc3RhbnRzXHJcbiAgdmFyIFZFUlNJT04gPSBcIjEuNi4xOFwiLFxyXG4gICAgTEVGVCA9IFwibGVmdFwiLFxyXG4gICAgUklHSFQgPSBcInJpZ2h0XCIsXHJcbiAgICBVUCA9IFwidXBcIixcclxuICAgIERPV04gPSBcImRvd25cIixcclxuICAgIElOID0gXCJpblwiLFxyXG4gICAgT1VUID0gXCJvdXRcIixcclxuXHJcbiAgICBOT05FID0gXCJub25lXCIsXHJcbiAgICBBVVRPID0gXCJhdXRvXCIsXHJcblxyXG4gICAgU1dJUEUgPSBcInN3aXBlXCIsXHJcbiAgICBQSU5DSCA9IFwicGluY2hcIixcclxuICAgIFRBUCA9IFwidGFwXCIsXHJcbiAgICBET1VCTEVfVEFQID0gXCJkb3VibGV0YXBcIixcclxuICAgIExPTkdfVEFQID0gXCJsb25ndGFwXCIsXHJcbiAgICBIT0xEID0gXCJob2xkXCIsXHJcblxyXG4gICAgSE9SSVpPTlRBTCA9IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgVkVSVElDQUwgPSBcInZlcnRpY2FsXCIsXHJcblxyXG4gICAgQUxMX0ZJTkdFUlMgPSBcImFsbFwiLFxyXG5cclxuICAgIERPVUJMRV9UQVBfVEhSRVNIT0xEID0gMTAsXHJcblxyXG4gICAgUEhBU0VfU1RBUlQgPSBcInN0YXJ0XCIsXHJcbiAgICBQSEFTRV9NT1ZFID0gXCJtb3ZlXCIsXHJcbiAgICBQSEFTRV9FTkQgPSBcImVuZFwiLFxyXG4gICAgUEhBU0VfQ0FOQ0VMID0gXCJjYW5jZWxcIixcclxuXHJcbiAgICBTVVBQT1JUU19UT1VDSCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyxcclxuXHJcbiAgICBTVVBQT1JUU19QT0lOVEVSX0lFMTAgPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgIXdpbmRvdy5Qb2ludGVyRXZlbnQgJiYgIVNVUFBPUlRTX1RPVUNILFxyXG5cclxuICAgIFNVUFBPUlRTX1BPSU5URVIgPSAod2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpICYmICFTVVBQT1JUU19UT1VDSCxcclxuXHJcbiAgICBQTFVHSU5fTlMgPSAnVG91Y2hTd2lwZSc7XHJcblxyXG5cclxuXHJcbiAgLyoqXHJcbiAgKiBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uLCBhbmQgYXZhaWxhYmxlIG9wdGlvbnMgdG8gY29uZmlndXJlIHRvdWNoIHN3aXBlIHdpdGguXHJcbiAgKiBZb3UgY2FuIHNldCB0aGUgZGVmYXVsdCB2YWx1ZXMgYnkgdXBkYXRpbmcgYW55IG9mIHRoZSBwcm9wZXJ0aWVzIHByaW9yIHRvIGluc3RhbnRpYXRpb24uXHJcbiAgKiBAbmFtZSAkLmZuLnN3aXBlLmRlZmF1bHRzXHJcbiAgKiBAbmFtZXNwYWNlXHJcbiAgKiBAcHJvcGVydHkge2ludH0gW2ZpbmdlcnM9MV0gVGhlIG51bWJlciBvZiBmaW5nZXJzIHRvIGRldGVjdCBpbiBhIHN3aXBlLiBBbnkgc3dpcGVzIHRoYXQgZG8gbm90IG1lZXQgdGhpcyByZXF1aXJlbWVudCB3aWxsIE5PVCB0cmlnZ2VyIHN3aXBlIGhhbmRsZXJzLlxyXG4gICogQHByb3BlcnR5IHtpbnR9IFt0aHJlc2hvbGQ9NzVdIFRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIHVzZXIgbXVzdCBtb3ZlIHRoZWlyIGZpbmdlciBieSBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBhIHN3aXBlLlxyXG4gICogQHByb3BlcnR5IHtpbnR9IFtjYW5jZWxUaHJlc2hvbGQ9bnVsbF0gVGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgdXNlciBtdXN0IG1vdmUgdGhlaXIgZmluZ2VyIGJhY2sgZnJvbSB0aGUgb3JpZ2luYWwgc3dpcGUgZGlyZWN0aW9uIHRvIGNhbmNlbCB0aGUgZ2VzdHVyZS5cclxuICAqIEBwcm9wZXJ0eSB7aW50fSBbcGluY2hUaHJlc2hvbGQ9MjBdIFRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIHVzZXIgbXVzdCBwaW5jaCB0aGVpciBmaW5nZXIgYnkgYmVmb3JlIGl0IGlzIGNvbnNpZGVyZWQgYSBwaW5jaC5cclxuICAqIEBwcm9wZXJ0eSB7aW50fSBbbWF4VGltZVRocmVzaG9sZD1udWxsXSBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIGJldHdlZW4gdG91Y2hTdGFydCBhbmQgdG91Y2hFbmQgbXVzdCBOT1QgZXhjZWVkIGluIG9yZGVyIHRvIGJlIGNvbnNpZGVyZWQgYSBzd2lwZS5cclxuICAqIEBwcm9wZXJ0eSB7aW50fSBbZmluZ2VyUmVsZWFzZVRocmVzaG9sZD0yNTBdIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gcmVsZWFzaW5nIG11bHRpcGxlIGZpbmdlcnMuICBJZiAyIGZpbmdlcnMgYXJlIGRvd24sIGFuZCBhcmUgcmVsZWFzZWQgb25lIGFmdGVyIHRoZSBvdGhlciwgaWYgdGhleSBhcmUgd2l0aGluIHRoaXMgdGhyZXNob2xkLCBpdCBjb3VudHMgYXMgYSBzaW11bHRhbmVvdXMgcmVsZWFzZS5cclxuICAqIEBwcm9wZXJ0eSB7aW50fSBbbG9uZ1RhcFRocmVzaG9sZD01MDBdIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gdGFwIGFuZCByZWxlYXNlIGZvciBhIGxvbmcgdGFwXHJcbiAgKiBAcHJvcGVydHkge2ludH0gW2RvdWJsZVRhcFRocmVzaG9sZD0yMDBdIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gMiB0YXBzIHRvIGNvdW50IGFzIGEgZG91YmxlIHRhcFxyXG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW3N3aXBlPW51bGxdIEEgaGFuZGxlciB0byBjYXRjaCBhbGwgc3dpcGVzLiBTZWUge0BsaW5rICQuZm4uc3dpcGUjZXZlbnQ6c3dpcGV9XHJcbiAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbc3dpcGVMZWZ0PW51bGxdIEEgaGFuZGxlciB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgXCJsZWZ0XCIgc3dpcGVzLiBTZWUge0BsaW5rICQuZm4uc3dpcGUjZXZlbnQ6c3dpcGVMZWZ0fVxyXG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW3N3aXBlUmlnaHQ9bnVsbF0gQSBoYW5kbGVyIHRoYXQgaXMgdHJpZ2dlcmVkIGZvciBcInJpZ2h0XCIgc3dpcGVzLiBTZWUge0BsaW5rICQuZm4uc3dpcGUjZXZlbnQ6c3dpcGVSaWdodH1cclxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtzd2lwZVVwPW51bGxdIEEgaGFuZGxlciB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgXCJ1cFwiIHN3aXBlcy4gU2VlIHtAbGluayAkLmZuLnN3aXBlI2V2ZW50OnN3aXBlVXB9XHJcbiAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbc3dpcGVEb3duPW51bGxdIEEgaGFuZGxlciB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgXCJkb3duXCIgc3dpcGVzLiBTZWUge0BsaW5rICQuZm4uc3dpcGUjZXZlbnQ6c3dpcGVEb3dufVxyXG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW3N3aXBlU3RhdHVzPW51bGxdIEEgaGFuZGxlciB0cmlnZ2VyZWQgZm9yIGV2ZXJ5IHBoYXNlIG9mIHRoZSBzd2lwZS4gU2VlIHtAbGluayAkLmZuLnN3aXBlI2V2ZW50OnN3aXBlU3RhdHVzfVxyXG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW3BpbmNoSW49bnVsbF0gQSBoYW5kbGVyIHRyaWdnZXJlZCBmb3IgcGluY2ggaW4gZXZlbnRzLiBTZWUge0BsaW5rICQuZm4uc3dpcGUjZXZlbnQ6cGluY2hJbn1cclxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtwaW5jaE91dD1udWxsXSBBIGhhbmRsZXIgdHJpZ2dlcmVkIGZvciBwaW5jaCBvdXQgZXZlbnRzLiBTZWUge0BsaW5rICQuZm4uc3dpcGUjZXZlbnQ6cGluY2hPdXR9XHJcbiAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbcGluY2hTdGF0dXM9bnVsbF0gQSBoYW5kbGVyIHRyaWdnZXJlZCBmb3IgZXZlcnkgcGhhc2Ugb2YgYSBwaW5jaC4gU2VlIHtAbGluayAkLmZuLnN3aXBlI2V2ZW50OnBpbmNoU3RhdHVzfVxyXG4gICogQHByb3BlcnR5IHtmdW5jdGlvbn0gW3RhcD1udWxsXSBBIGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGp1c3QgdGFwcyBvbiB0aGUgaXRlbSwgcmF0aGVyIHRoYW4gc3dpcGVzIGl0LiBJZiB0aGV5IGRvIG5vdCBtb3ZlLCB0YXAgaXMgdHJpZ2dlcmVkLCBpZiB0aGV5IGRvIG1vdmUsIGl0IGlzIG5vdC5cclxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtkb3VibGVUYXA9bnVsbF0gQSBoYW5kbGVyIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBkb3VibGUgdGFwcyBvbiB0aGUgaXRlbS4gVGhlIGRlbGF5IGJldHdlZW4gdGFwcyBjYW4gYmUgc2V0IHdpdGggdGhlIGRvdWJsZVRhcFRocmVzaG9sZCBwcm9wZXJ0eS4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRlZmF1bHRzI2RvdWJsZVRhcFRocmVzaG9sZH1cclxuICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtsb25nVGFwPW51bGxdIEEgaGFuZGxlciB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgbG9uZyB0YXBzIG9uIHRoZSBpdGVtLiBUaGUgZGVsYXkgYmV0d2VlbiBzdGFydCBhbmQgZW5kIGNhbiBiZSBzZXQgd2l0aCB0aGUgbG9uZ1RhcFRocmVzaG9sZCBwcm9wZXJ0eS4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRlZmF1bHRzI2xvbmdUYXBUaHJlc2hvbGR9XHJcbiAgKiBAcHJvcGVydHkgKGZ1bmN0aW9uKSBbaG9sZD1udWxsXSBBIGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIHJlYWNoZXMgbG9uZ1RhcFRocmVzaG9sZCBvbiB0aGUgaXRlbS4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRlZmF1bHRzI2xvbmdUYXBUaHJlc2hvbGR9XHJcbiAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFt0cmlnZ2VyT25Ub3VjaEVuZD10cnVlXSBJZiB0cnVlLCB0aGUgc3dpcGUgZXZlbnRzIGFyZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdG91Y2ggZW5kIGV2ZW50IGlzIHJlY2VpdmVkICh1c2VyIHJlbGVhc2VzIGZpbmdlcikuICBJZiBmYWxzZSwgaXQgd2lsbCBiZSB0cmlnZ2VyZWQgb24gcmVhY2hpbmcgdGhlIHRocmVzaG9sZCwgYW5kIHRoZW4gY2FuY2VsIHRoZSB0b3VjaCBldmVudCBhdXRvbWF0aWNhbGx5LlxyXG4gICogQHByb3BlcnR5IHtib29sZWFufSBbdHJpZ2dlck9uVG91Y2hMZWF2ZT1mYWxzZV0gSWYgdHJ1ZSwgdGhlbiB3aGVuIHRoZSB1c2VyIGxlYXZlcyB0aGUgc3dpcGUgb2JqZWN0LCB0aGUgc3dpcGUgd2lsbCBlbmQgYW5kIHRyaWdnZXIgYXBwcm9wcmlhdGUgaGFuZGxlcnMuXHJcbiAgKiBAcHJvcGVydHkge3N0cmluZ3x1bmRlZmluZWR9IFthbGxvd1BhZ2VTY3JvbGw9J2F1dG8nXSBIb3cgdGhlIGJyb3dzZXIgaGFuZGxlcyBwYWdlIHNjcm9sbHMgd2hlbiB0aGUgdXNlciBpcyBzd2lwaW5nIG9uIGEgdG91Y2hTd2lwZSBvYmplY3QuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5wYWdlU2Nyb2xsfS4gIDxici8+PGJyLz5cclxuICBcdFx0XHRcdFx0XHRcdFx0XHQ8Y29kZT5cImF1dG9cIjwvY29kZT4gOiBhbGwgdW5kZWZpbmVkIHN3aXBlcyB3aWxsIGNhdXNlIHRoZSBwYWdlIHRvIHNjcm9sbCBpbiB0aGF0IGRpcmVjdGlvbi4gPGJyLz5cclxuICBcdFx0XHRcdFx0XHRcdFx0XHQ8Y29kZT5cIm5vbmVcIjwvY29kZT4gOiB0aGUgcGFnZSB3aWxsIG5vdCBzY3JvbGwgd2hlbiB1c2VyIHN3aXBlcy4gPGJyLz5cclxuICBcdFx0XHRcdFx0XHRcdFx0XHQ8Y29kZT5cImhvcml6b250YWxcIjwvY29kZT4gOiB3aWxsIGZvcmNlIHBhZ2UgdG8gc2Nyb2xsIG9uIGhvcml6b250YWwgc3dpcGVzLiA8YnIvPlxyXG4gIFx0XHRcdFx0XHRcdFx0XHRcdDxjb2RlPlwidmVydGljYWxcIjwvY29kZT4gOiB3aWxsIGZvcmNlIHBhZ2UgdG8gc2Nyb2xsIG9uIHZlcnRpY2FsIHN3aXBlcy4gPGJyLz5cclxuICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2ZhbGxiYWNrVG9Nb3VzZUV2ZW50cz10cnVlXSBJZiB0cnVlIG1vdXNlIGV2ZW50cyBhcmUgdXNlZCB3aGVuIHJ1biBvbiBhIG5vbiB0b3VjaCBkZXZpY2UsIGZhbHNlIHdpbGwgc3RvcCBzd2lwZXMgYmVpbmcgdHJpZ2dlcmVkIGJ5IG1vdXNlIGV2ZW50cyBvbiBub24gdG91Y2ggZGV2aWNlcy5cclxuICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZXhjbHVkZWRFbGVtZW50cz1cIi5ub1N3aXBlXCJdIEEganF1ZXJ5IHNlbGVjdG9yIHRoYXQgc3BlY2lmaWVzIGNoaWxkIGVsZW1lbnRzIHRoYXQgZG8gTk9UIHRyaWdnZXIgc3dpcGVzLiBCeSBkZWZhdWx0IHRoaXMgZXhjbHVkZXMgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgLm5vU3dpcGUgLlxyXG4gICogQHByb3BlcnR5IHtib29sZWFufSBbcHJldmVudERlZmF1bHRFdmVudHM9dHJ1ZV0gYnkgZGVmYXVsdCBkZWZhdWx0IGV2ZW50cyBhcmUgY2FuY2VsbGVkLCBzbyB0aGUgcGFnZSBkb2Vzbid0IG1vdmUuICBZb3UgY2FuIGRpc2FibGUgdGhpcyBzbyBib3RoIG5hdGl2ZSBldmVudHMgZmlyZSBhcyB3ZWxsIGFzIHlvdXIgaGFuZGxlcnMuXHJcbiAgKi9cclxuICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICBmaW5nZXJzOiAxLFxyXG4gICAgdGhyZXNob2xkOiA3NSxcclxuICAgIGNhbmNlbFRocmVzaG9sZDogbnVsbCxcclxuICAgIHBpbmNoVGhyZXNob2xkOiAyMCxcclxuICAgIG1heFRpbWVUaHJlc2hvbGQ6IG51bGwsXHJcbiAgICBmaW5nZXJSZWxlYXNlVGhyZXNob2xkOiAyNTAsXHJcbiAgICBsb25nVGFwVGhyZXNob2xkOiA1MDAsXHJcbiAgICBkb3VibGVUYXBUaHJlc2hvbGQ6IDIwMCxcclxuICAgIHN3aXBlOiBudWxsLFxyXG4gICAgc3dpcGVMZWZ0OiBudWxsLFxyXG4gICAgc3dpcGVSaWdodDogbnVsbCxcclxuICAgIHN3aXBlVXA6IG51bGwsXHJcbiAgICBzd2lwZURvd246IG51bGwsXHJcbiAgICBzd2lwZVN0YXR1czogbnVsbCxcclxuICAgIHBpbmNoSW46IG51bGwsXHJcbiAgICBwaW5jaE91dDogbnVsbCxcclxuICAgIHBpbmNoU3RhdHVzOiBudWxsLFxyXG4gICAgY2xpY2s6IG51bGwsIC8vRGVwcmVjYXRlZCBzaW5jZSAxLjYuMlxyXG4gICAgdGFwOiBudWxsLFxyXG4gICAgZG91YmxlVGFwOiBudWxsLFxyXG4gICAgbG9uZ1RhcDogbnVsbCxcclxuICAgIGhvbGQ6IG51bGwsXHJcbiAgICB0cmlnZ2VyT25Ub3VjaEVuZDogdHJ1ZSxcclxuICAgIHRyaWdnZXJPblRvdWNoTGVhdmU6IGZhbHNlLFxyXG4gICAgYWxsb3dQYWdlU2Nyb2xsOiBcImF1dG9cIixcclxuICAgIGZhbGxiYWNrVG9Nb3VzZUV2ZW50czogdHJ1ZSxcclxuICAgIGV4Y2x1ZGVkRWxlbWVudHM6IFwiLm5vU3dpcGVcIixcclxuICAgIHByZXZlbnREZWZhdWx0RXZlbnRzOiB0cnVlXHJcbiAgfTtcclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBBcHBsaWVzIFRvdWNoU3dpcGUgYmVoYXZpb3VyIHRvIG9uZSBvciBtb3JlIGpRdWVyeSBvYmplY3RzLlxyXG4gICAqIFRoZSBUb3VjaFN3aXBlIHBsdWdpbiBjYW4gYmUgaW5zdGFudGlhdGVkIHZpYSB0aGlzIG1ldGhvZCwgb3IgbWV0aG9kcyB3aXRoaW5cclxuICAgKiBUb3VjaFN3aXBlIGNhbiBiZSBleGVjdXRlZCB2aWEgdGhpcyBtZXRob2QgYXMgcGVyIGpRdWVyeSBwbHVnaW4gYXJjaGl0ZWN0dXJlLlxyXG4gICAqIEFuIGV4aXN0aW5nIHBsdWdpbiBjYW4gaGF2ZSBpdHMgb3B0aW9ucyBjaGFuZ2VkIHNpbXBseSBieSByZSBjYWxsaW5nIC5zd2lwZShvcHRpb25zKVxyXG4gICAqIEBzZWUgVG91Y2hTd2lwZVxyXG4gICAqIEBjbGFzc1xyXG4gICAqIEBwYXJhbSB7TWl4ZWR9IG1ldGhvZCBJZiB0aGUgY3VycmVudCBET01Ob2RlIGlzIGEgVG91Y2hTd2lwZSBvYmplY3QsIGFuZCA8Y29kZT5tZXRob2Q8L2NvZGU+IGlzIGEgVG91Y2hTd2lwZSBtZXRob2QsIHRoZW5cclxuICAgKiB0aGUgPGNvZGU+bWV0aG9kPC9jb2RlPiBpcyBleGVjdXRlZCwgYW5kIGFueSBmb2xsb3dpbmcgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gdGhlIFRvdWNoU3dpcGUgbWV0aG9kLlxyXG4gICAqIElmIDxjb2RlPm1ldGhvZDwvY29kZT4gaXMgYW4gb2JqZWN0LCB0aGVuIHRoZSBUb3VjaFN3aXBlIGNsYXNzIGlzIGluc3RhbnRpYXRlZCBvbiB0aGUgY3VycmVudCBET01Ob2RlLCBwYXNzaW5nIHRoZVxyXG4gICAqIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBvYmplY3QuIFNlZSBUb3VjaFN3aXBlXHJcbiAgICpcclxuICAgKi9cclxuICAkLmZuLnN3aXBlID0gZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICBwbHVnaW4gPSAkdGhpcy5kYXRhKFBMVUdJTl9OUyk7XHJcblxyXG4gICAgLy9DaGVjayBpZiB3ZSBhcmUgYWxyZWFkeSBpbnN0YW50aWF0ZWQgYW5kIHRyeWluZyB0byBleGVjdXRlIGEgbWV0aG9kXHJcbiAgICBpZiAocGx1Z2luICYmIHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChwbHVnaW5bbWV0aG9kXSkge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW5bbWV0aG9kXS5hcHBseShwbHVnaW4sIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQuZXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuc3dpcGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vRWxzZSB1cGRhdGUgZXhpc3RpbmcgcGx1Z2luIHdpdGggbmV3IG9wdGlvbnMgaGFzaFxyXG4gICAgZWxzZSBpZiAocGx1Z2luICYmIHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHBsdWdpblsnb3B0aW9uJ10uYXBwbHkocGx1Z2luLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRWxzZSBub3QgaW5zdGFudGlhdGVkIGFuZCB0cnlpbmcgdG8gcGFzcyBpbml0IG9iamVjdCAob3Igbm90aGluZylcclxuICAgIGVsc2UgaWYgKCFwbHVnaW4gJiYgKHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICFtZXRob2QpKSB7XHJcbiAgICAgIHJldHVybiBpbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICR0aGlzO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBwbHVnaW5cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICAkLmZuLnN3aXBlLnZlcnNpb24gPSBWRVJTSU9OO1xyXG5cclxuXHJcblxyXG4gIC8vRXhwb3NlIG91ciBkZWZhdWx0cyBzbyBhIHVzZXIgY291bGQgb3ZlcnJpZGUgdGhlIHBsdWdpbiBkZWZhdWx0c1xyXG4gICQuZm4uc3dpcGUuZGVmYXVsdHMgPSBkZWZhdWx0cztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBoYXNlcyB0aGF0IGEgdG91Y2ggZXZlbnQgZ29lcyB0aHJvdWdoLiAgVGhlIDxjb2RlPnBoYXNlPC9jb2RlPiBpcyBwYXNzZWQgdG8gdGhlIGV2ZW50IGhhbmRsZXJzLlxyXG4gICAqIFRoZXNlIHByb3BlcnRpZXMgYXJlIHJlYWQgb25seSwgYXR0ZW1wdGluZyB0byBjaGFuZ2UgdGhlbSB3aWxsIG5vdCBhbHRlciB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXHJcbiAgICogQG5hbWVzcGFjZVxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSEFTRV9TVEFSVCBDb25zdGFudCBpbmRpY2F0aW5nIHRoZSBzdGFydCBwaGFzZSBvZiB0aGUgdG91Y2ggZXZlbnQuIFZhbHVlIGlzIDxjb2RlPlwic3RhcnRcIjwvY29kZT4uXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFBIQVNFX01PVkUgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgbW92ZSBwaGFzZSBvZiB0aGUgdG91Y2ggZXZlbnQuIFZhbHVlIGlzIDxjb2RlPlwibW92ZVwiPC9jb2RlPi5cclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gUEhBU0VfRU5EIENvbnN0YW50IGluZGljYXRpbmcgdGhlIGVuZCBwaGFzZSBvZiB0aGUgdG91Y2ggZXZlbnQuIFZhbHVlIGlzIDxjb2RlPlwiZW5kXCI8L2NvZGU+LlxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSEFTRV9DQU5DRUwgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgY2FuY2VsIHBoYXNlIG9mIHRoZSB0b3VjaCBldmVudC4gVmFsdWUgaXMgPGNvZGU+XCJjYW5jZWxcIjwvY29kZT4uXHJcbiAgICovXHJcbiAgJC5mbi5zd2lwZS5waGFzZXMgPSB7XHJcbiAgICBQSEFTRV9TVEFSVDogUEhBU0VfU1RBUlQsXHJcbiAgICBQSEFTRV9NT1ZFOiBQSEFTRV9NT1ZFLFxyXG4gICAgUEhBU0VfRU5EOiBQSEFTRV9FTkQsXHJcbiAgICBQSEFTRV9DQU5DRUw6IFBIQVNFX0NBTkNFTFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkaXJlY3Rpb24gY29uc3RhbnRzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXHJcbiAgICogVGhlc2UgcHJvcGVydGllcyBhcmUgcmVhZCBvbmx5LCBhdHRlbXB0aW5nIHRvIGNoYW5nZSB0aGVtIHdpbGwgbm90IGFsdGVyIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cclxuICAgKiBAbmFtZXNwYWNlXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IExFRlQgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgbGVmdCBkaXJlY3Rpb24uIFZhbHVlIGlzIDxjb2RlPlwibGVmdFwiPC9jb2RlPi5cclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gUklHSFQgQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgcmlnaHQgZGlyZWN0aW9uLiBWYWx1ZSBpcyA8Y29kZT5cInJpZ2h0XCI8L2NvZGU+LlxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVUCBDb25zdGFudCBpbmRpY2F0aW5nIHRoZSB1cCBkaXJlY3Rpb24uIFZhbHVlIGlzIDxjb2RlPlwidXBcIjwvY29kZT4uXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IERPV04gQ29uc3RhbnQgaW5kaWNhdGluZyB0aGUgZG93biBkaXJlY3Rpb24uIFZhbHVlIGlzIDxjb2RlPlwiY2FuY2VsXCI8L2NvZGU+LlxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTiBDb25zdGFudCBpbmRpY2F0aW5nIHRoZSBpbiBkaXJlY3Rpb24uIFZhbHVlIGlzIDxjb2RlPlwiaW5cIjwvY29kZT4uXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IE9VVCBDb25zdGFudCBpbmRpY2F0aW5nIHRoZSBvdXQgZGlyZWN0aW9uLiBWYWx1ZSBpcyA8Y29kZT5cIm91dFwiPC9jb2RlPi5cclxuICAgKi9cclxuICAkLmZuLnN3aXBlLmRpcmVjdGlvbnMgPSB7XHJcbiAgICBMRUZUOiBMRUZULFxyXG4gICAgUklHSFQ6IFJJR0hULFxyXG4gICAgVVA6IFVQLFxyXG4gICAgRE9XTjogRE9XTixcclxuICAgIElOOiBJTixcclxuICAgIE9VVDogT1VUXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBhZ2Ugc2Nyb2xsIGNvbnN0YW50cyB0aGF0IGNhbiBiZSB1c2VkIHRvIHNldCB0aGUgdmFsdWUgb2YgPGNvZGU+YWxsb3dQYWdlU2Nyb2xsPC9jb2RlPiBvcHRpb25cclxuICAgKiBUaGVzZSBwcm9wZXJ0aWVzIGFyZSByZWFkIG9ubHlcclxuICAgKiBAbmFtZXNwYWNlXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQHNlZSAkLmZuLnN3aXBlLmRlZmF1bHRzI2FsbG93UGFnZVNjcm9sbFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBOT05FIENvbnN0YW50IGluZGljYXRpbmcgbm8gcGFnZSBzY3JvbGxpbmcgaXMgYWxsb3dlZC4gVmFsdWUgaXMgPGNvZGU+XCJub25lXCI8L2NvZGU+LlxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBIT1JJWk9OVEFMIENvbnN0YW50IGluZGljYXRpbmcgaG9yaXpvbnRhbCBwYWdlIHNjcm9sbGluZyBpcyBhbGxvd2VkLiBWYWx1ZSBpcyA8Y29kZT5cImhvcml6b250YWxcIjwvY29kZT4uXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFZFUlRJQ0FMIENvbnN0YW50IGluZGljYXRpbmcgdmVydGljYWwgcGFnZSBzY3JvbGxpbmcgaXMgYWxsb3dlZC4gVmFsdWUgaXMgPGNvZGU+XCJ2ZXJ0aWNhbFwiPC9jb2RlPi5cclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gQVVUTyBDb25zdGFudCBpbmRpY2F0aW5nIGVpdGhlciBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHdpbGwgYmUgYWxsb3dlZCwgZGVwZW5kaW5nIG9uIHRoZSBzd2lwZSBoYW5kbGVycyByZWdpc3RlcmVkLiBWYWx1ZSBpcyA8Y29kZT5cImF1dG9cIjwvY29kZT4uXHJcbiAgICovXHJcbiAgJC5mbi5zd2lwZS5wYWdlU2Nyb2xsID0ge1xyXG4gICAgTk9ORTogTk9ORSxcclxuICAgIEhPUklaT05UQUw6IEhPUklaT05UQUwsXHJcbiAgICBWRVJUSUNBTDogVkVSVElDQUwsXHJcbiAgICBBVVRPOiBBVVRPXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnRzIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIGZpbmdlcnMgdXNlZCBpbiBhIHN3aXBlLiAgVGhlc2UgYXJlIHVzZWQgdG8gc2V0IGJvdGggdGhlIHZhbHVlIG9mIDxjb2RlPmZpbmdlcnM8L2NvZGU+IGluIHRoZVxyXG4gICAqIG9wdGlvbnMgb2JqZWN0LCBhcyB3ZWxsIGFzIHRoZSB2YWx1ZSBvZiB0aGUgPGNvZGU+ZmluZ2VyczwvY29kZT4gZXZlbnQgcHJvcGVydHkuXHJcbiAgICogVGhlc2UgcHJvcGVydGllcyBhcmUgcmVhZCBvbmx5LCBhdHRlbXB0aW5nIHRvIGNoYW5nZSB0aGVtIHdpbGwgbm90IGFsdGVyIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cclxuICAgKiBAbmFtZXNwYWNlXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQHNlZSAkLmZuLnN3aXBlLmRlZmF1bHRzI2ZpbmdlcnNcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gT05FIENvbnN0YW50IGluZGljYXRpbmcgMSBmaW5nZXIgaXMgdG8gYmUgZGV0ZWN0ZWQgLyB3YXMgZGV0ZWN0ZWQuIFZhbHVlIGlzIDxjb2RlPjE8L2NvZGU+LlxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBUV08gQ29uc3RhbnQgaW5kaWNhdGluZyAyIGZpbmdlcnMgYXJlIHRvIGJlIGRldGVjdGVkIC8gd2VyZSBkZXRlY3RlZC4gVmFsdWUgaXMgPGNvZGU+MjwvY29kZT4uXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFRIUkVFIENvbnN0YW50IGluZGljYXRpbmcgMyBmaW5nZXIgYXJlIHRvIGJlIGRldGVjdGVkIC8gd2VyZSBkZXRlY3RlZC4gVmFsdWUgaXMgPGNvZGU+MzwvY29kZT4uXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IEZPVVIgQ29uc3RhbnQgaW5kaWNhdGluZyA0IGZpbmdlciBhcmUgdG8gYmUgZGV0ZWN0ZWQgLyB3ZXJlIGRldGVjdGVkLiBOb3QgYWxsIGRldmljZXMgc3VwcG9ydCB0aGlzLiBWYWx1ZSBpcyA8Y29kZT40PC9jb2RlPi5cclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gRklWRSBDb25zdGFudCBpbmRpY2F0aW5nIDUgZmluZ2VyIGFyZSB0byBiZSBkZXRlY3RlZCAvIHdlcmUgZGV0ZWN0ZWQuIE5vdCBhbGwgZGV2aWNlcyBzdXBwb3J0IHRoaXMuIFZhbHVlIGlzIDxjb2RlPjU8L2NvZGU+LlxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBTEwgQ29uc3RhbnQgaW5kaWNhdGluZyBhbnkgY29tYmluYXRpb24gb2YgZmluZ2VyIGFyZSB0byBiZSBkZXRlY3RlZC4gIFZhbHVlIGlzIDxjb2RlPlwiYWxsXCI8L2NvZGU+LlxyXG4gICAqL1xyXG4gICQuZm4uc3dpcGUuZmluZ2VycyA9IHtcclxuICAgIE9ORTogMSxcclxuICAgIFRXTzogMixcclxuICAgIFRIUkVFOiAzLFxyXG4gICAgRk9VUjogNCxcclxuICAgIEZJVkU6IDUsXHJcbiAgICBBTEw6IEFMTF9GSU5HRVJTXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGlzZSB0aGUgcGx1Z2luIGZvciBlYWNoIERPTSBlbGVtZW50IG1hdGNoZWRcclxuICAgKiBUaGlzIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIG1haW4gVG91Y2hTd2lwZSBjbGFzcyBmb3IgZWFjaCBET00gZWxlbWVudCwgYW5kIHRoZW5cclxuICAgKiBzYXZlcyBhIHJlZmVyZW5jZSB0byB0aGF0IGluc3RhbmNlIGluIHRoZSBlbGVtZW50cyBkYXRhIHByb3BlcnR5LlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGluaXQob3B0aW9ucykge1xyXG4gICAgLy9QcmVwIGFuZCBleHRlbmQgdGhlIG9wdGlvbnNcclxuICAgIGlmIChvcHRpb25zICYmIChvcHRpb25zLmFsbG93UGFnZVNjcm9sbCA9PT0gdW5kZWZpbmVkICYmIChvcHRpb25zLnN3aXBlICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zd2lwZVN0YXR1cyAhPT0gdW5kZWZpbmVkKSkpIHtcclxuICAgICAgb3B0aW9ucy5hbGxvd1BhZ2VTY3JvbGwgPSBOT05FO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ2hlY2sgZm9yIGRlcHJlY2F0ZWQgb3B0aW9uc1xyXG4gICAgLy9FbnN1cmUgdGhhdCBhbnkgb2xkIGNsaWNrIGhhbmRsZXJzIGFyZSBhc3NpZ25lZCB0byB0aGUgbmV3IHRhcCwgdW5sZXNzIHdlIGhhdmUgYSB0YXBcclxuICAgIGlmIChvcHRpb25zLmNsaWNrICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy50YXAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvcHRpb25zLnRhcCA9IG9wdGlvbnMuY2xpY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Bhc3MgZW1wdHkgb2JqZWN0IHNvIHdlIGRvbnQgbW9kaWZ5IHRoZSBkZWZhdWx0c1xyXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCAkLmZuLnN3aXBlLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAvL0ZvciBlYWNoIGVsZW1lbnQgaW5zdGFudGlhdGUgdGhlIHBsdWdpblxyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIC8vQ2hlY2sgd2UgaGF2ZW50IGFscmVhZHkgaW5pdGlhbGlzZWQgdGhlIHBsdWdpblxyXG4gICAgICB2YXIgcGx1Z2luID0gJHRoaXMuZGF0YShQTFVHSU5fTlMpO1xyXG5cclxuICAgICAgaWYgKCFwbHVnaW4pIHtcclxuICAgICAgICBwbHVnaW4gPSBuZXcgVG91Y2hTd2lwZSh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICAkdGhpcy5kYXRhKFBMVUdJTl9OUywgcGx1Z2luKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYWluIFRvdWNoU3dpcGUgUGx1Z2luIENsYXNzLlxyXG4gICAqIERvIG5vdCB1c2UgdGhpcyB0byBjb25zdHJ1Y3QgeW91ciBUb3VjaFN3aXBlIG9iamVjdCwgdXNlIHRoZSBqUXVlcnkgcGx1Z2luIG1ldGhvZCAkLmZuLnN3aXBlKCk7IHtAbGluayAkLmZuLnN3aXBlfVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQG5hbWUgVG91Y2hTd2lwZVxyXG4gICAqIEBwYXJhbSB7RE9NTm9kZX0gZWxlbWVudCBUaGUgSFRNTCBET00gb2JqZWN0IHRvIGFwcGx5IHRvIHBsdWdpbiB0b1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIHRvIGNvbmZpZ3VyZSB0aGUgcGx1Z2luIHdpdGguICBAbGluayB7JC5mbi5zd2lwZS5kZWZhdWx0c31cclxuICAgKiBAc2VlICQuZmguc3dpcGUuZGVmYXVsdHNcclxuICAgKiBAc2VlICQuZmguc3dpcGVcclxuICAgKiBAY2xhc3NcclxuICAgKi9cclxuICBmdW5jdGlvbiBUb3VjaFN3aXBlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAvL3Rha2UgYSBsb2NhbC9pbnN0YWNuZSBsZXZlbCBjb3B5IG9mIHRoZSBvcHRpb25zIC0gc2hvdWxkIG1ha2UgaXQgdGhpcy5vcHRpb25zIHJlYWxseS4uLlxyXG4gICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHVzZVRvdWNoRXZlbnRzID0gKFNVUFBPUlRTX1RPVUNIIHx8IFNVUFBPUlRTX1BPSU5URVIgfHwgIW9wdGlvbnMuZmFsbGJhY2tUb01vdXNlRXZlbnRzKSxcclxuICAgICAgU1RBUlRfRVYgPSB1c2VUb3VjaEV2ZW50cyA/IChTVVBQT1JUU19QT0lOVEVSID8gKFNVUFBPUlRTX1BPSU5URVJfSUUxMCA/ICdNU1BvaW50ZXJEb3duJyA6ICdwb2ludGVyZG93bicpIDogJ3RvdWNoc3RhcnQnKSA6ICdtb3VzZWRvd24nLFxyXG4gICAgICBNT1ZFX0VWID0gdXNlVG91Y2hFdmVudHMgPyAoU1VQUE9SVFNfUE9JTlRFUiA/IChTVVBQT1JUU19QT0lOVEVSX0lFMTAgPyAnTVNQb2ludGVyTW92ZScgOiAncG9pbnRlcm1vdmUnKSA6ICd0b3VjaG1vdmUnKSA6ICdtb3VzZW1vdmUnLFxyXG4gICAgICBFTkRfRVYgPSB1c2VUb3VjaEV2ZW50cyA/IChTVVBQT1JUU19QT0lOVEVSID8gKFNVUFBPUlRTX1BPSU5URVJfSUUxMCA/ICdNU1BvaW50ZXJVcCcgOiAncG9pbnRlcnVwJykgOiAndG91Y2hlbmQnKSA6ICdtb3VzZXVwJyxcclxuICAgICAgTEVBVkVfRVYgPSB1c2VUb3VjaEV2ZW50cyA/IChTVVBQT1JUU19QT0lOVEVSID8gJ21vdXNlbGVhdmUnIDogbnVsbCkgOiAnbW91c2VsZWF2ZScsIC8vd2UgbWFudWFsbHkgZGV0ZWN0IGxlYXZlIG9uIHRvdWNoIGRldmljZXMsIHNvIG51bGwgZXZlbnQgaGVyZVxyXG4gICAgICBDQU5DRUxfRVYgPSAoU1VQUE9SVFNfUE9JTlRFUiA/IChTVVBQT1JUU19QT0lOVEVSX0lFMTAgPyAnTVNQb2ludGVyQ2FuY2VsJyA6ICdwb2ludGVyY2FuY2VsJykgOiAndG91Y2hjYW5jZWwnKTtcclxuXHJcblxyXG5cclxuICAgIC8vdG91Y2ggcHJvcGVydGllc1xyXG4gICAgdmFyIGRpc3RhbmNlID0gMCxcclxuICAgICAgZGlyZWN0aW9uID0gbnVsbCxcclxuICAgICAgY3VycmVudERpcmVjdGlvbiA9IG51bGwsXHJcbiAgICAgIGR1cmF0aW9uID0gMCxcclxuICAgICAgc3RhcnRUb3VjaGVzRGlzdGFuY2UgPSAwLFxyXG4gICAgICBlbmRUb3VjaGVzRGlzdGFuY2UgPSAwLFxyXG4gICAgICBwaW5jaFpvb20gPSAxLFxyXG4gICAgICBwaW5jaERpc3RhbmNlID0gMCxcclxuICAgICAgcGluY2hEaXJlY3Rpb24gPSAwLFxyXG4gICAgICBtYXhpbXVtc01hcCA9IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICAvL2pRdWVyeSB3cmFwcGVkIGVsZW1lbnQgZm9yIHRoaXMgaW5zdGFuY2VcclxuICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcblxyXG4gICAgLy9DdXJyZW50IHBoYXNlIG9mIHRoIHRvdWNoIGN5Y2xlXHJcbiAgICB2YXIgcGhhc2UgPSBcInN0YXJ0XCI7XHJcblxyXG4gICAgLy8gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIGZpbmdlcnMgYmVpbmcgdXNlZC5cclxuICAgIHZhciBmaW5nZXJDb3VudCA9IDA7XHJcblxyXG4gICAgLy90cmFjayBtb3VzZSBwb2ludHMgLyBkZWx0YVxyXG4gICAgdmFyIGZpbmdlckRhdGEgPSB7fTtcclxuXHJcbiAgICAvL3RyYWNrIHRpbWVzXHJcbiAgICB2YXIgc3RhcnRUaW1lID0gMCxcclxuICAgICAgZW5kVGltZSA9IDAsXHJcbiAgICAgIHByZXZpb3VzVG91Y2hFbmRUaW1lID0gMCxcclxuICAgICAgZmluZ2VyQ291bnRBdFJlbGVhc2UgPSAwLFxyXG4gICAgICBkb3VibGVUYXBTdGFydFRpbWUgPSAwO1xyXG5cclxuICAgIC8vVGltZW91dHNcclxuICAgIHZhciBzaW5nbGVUYXBUaW1lb3V0ID0gbnVsbCxcclxuICAgICAgaG9sZFRpbWVvdXQgPSBudWxsO1xyXG5cclxuICAgIC8vIEFkZCBnZXN0dXJlcyB0byBhbGwgc3dpcGFibGUgYXJlYXMgaWYgc3VwcG9ydGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAkZWxlbWVudC5vbihTVEFSVF9FViwgdG91Y2hTdGFydCk7XHJcbiAgICAgICRlbGVtZW50Lm9uKENBTkNFTF9FViwgdG91Y2hDYW5jZWwpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAkLmVycm9yKCdldmVudHMgbm90IHN1cHBvcnRlZCAnICsgU1RBUlRfRVYgKyAnLCcgKyBDQU5DRUxfRVYgKyAnIG9uIGpRdWVyeS5zd2lwZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvL1B1YmxpYyBtZXRob2RzXHJcbiAgICAvL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmUtZW5hYmxlcyB0aGUgc3dpcGUgcGx1Z2luIHdpdGggdGhlIHByZXZpb3VzIGNvbmZpZ3VyYXRpb25cclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogQG5hbWUgJC5mbi5zd2lwZSNlbmFibGVcclxuICAgICAqIEByZXR1cm4ge0RPTU5vZGV9IFRoZSBEb20gZWxlbWVudCB0aGF0IHdhcyByZWdpc3RlcmVkIHdpdGggVG91Y2hTd2lwZVxyXG4gICAgICogQGV4YW1wbGUgJChcIiNlbGVtZW50XCIpLnN3aXBlKFwiZW5hYmxlXCIpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvL0luY2FzZSB3ZSBhcmUgYWxyZWFkeSBlbmFibGVkLCBjbGVhbiB1cC4uLlxyXG4gICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgJGVsZW1lbnQub24oU1RBUlRfRVYsIHRvdWNoU3RhcnQpO1xyXG4gICAgICAkZWxlbWVudC5vbihDQU5DRUxfRVYsIHRvdWNoQ2FuY2VsKTtcclxuICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGRpc2FibGVzIHRoZSBzd2lwZSBwbHVnaW5cclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogQG5hbWUgJC5mbi5zd2lwZSNkaXNhYmxlXHJcbiAgICAgKiBAcmV0dXJuIHtET01Ob2RlfSBUaGUgRG9tIGVsZW1lbnQgdGhhdCBpcyBub3cgcmVnaXN0ZXJlZCB3aXRoIFRvdWNoU3dpcGVcclxuICAgICAqIEBleGFtcGxlICQoXCIjZWxlbWVudFwiKS5zd2lwZShcImRpc2FibGVcIik7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgdGhlIHN3aXBlIHBsdWdpbiBjb21wbGV0ZWx5LiBUbyB1c2UgYW55IHN3aXBlIG1ldGhvZHMsIHlvdSBtdXN0IHJlIGluaXRpYWxpc2UgdGhlIHBsdWdpbi5cclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogQG5hbWUgJC5mbi5zd2lwZSNkZXN0cm95XHJcbiAgICAgKiBAZXhhbXBsZSAkKFwiI2VsZW1lbnRcIikuc3dpcGUoXCJkZXN0cm95XCIpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICRlbGVtZW50LmRhdGEoUExVR0lOX05TLCBudWxsKTtcclxuICAgICAgJGVsZW1lbnQgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgcnVuIHRpbWUgdXBkYXRpbmcgb2YgdGhlIHN3aXBlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogQG5hbWUgJC5mbi5zd2lwZSNvcHRpb25cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBUaGUgb3B0aW9uIHByb3BlcnR5IHRvIGdldCBvciBzZXQsIG9yIGEgaGFzIG9mIG11bHRpcGxlIG9wdGlvbnMgdG8gc2V0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3ZhbHVlXSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0b1xyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBJZiBvbmx5IGEgcHJvcGVydHkgbmFtZSBpcyBwYXNzZWQsIHRoZW4gdGhhdCBwcm9wZXJ0eSB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgbm90aGluZyBpcyBwYXNzZWQgdGhlIGN1cnJlbnQgb3B0aW9ucyBoYXNoIGlzIHJldHVybmVkLlxyXG4gICAgICogQGV4YW1wbGUgJChcIiNlbGVtZW50XCIpLnN3aXBlKFwib3B0aW9uXCIsIFwidGhyZXNob2xkXCIpOyAvLyByZXR1cm4gdGhlIHRocmVzaG9sZFxyXG4gICAgICogQGV4YW1wbGUgJChcIiNlbGVtZW50XCIpLnN3aXBlKFwib3B0aW9uXCIsIFwidGhyZXNob2xkXCIsIDEwMCk7IC8vIHNldCB0aGUgdGhyZXNob2xkIGFmdGVyIGluaXRcclxuICAgICAqIEBleGFtcGxlICQoXCIjZWxlbWVudFwiKS5zd2lwZShcIm9wdGlvblwiLCB7dGhyZXNob2xkOjEwMCwgZmluZ2VyczozfSApOyAvLyBzZXQgbXVsdGlwbGUgcHJvcGVydGllcyBhZnRlciBpbml0XHJcbiAgICAgKiBAZXhhbXBsZSAkKFwiI2VsZW1lbnRcIikuc3dpcGUoe3RocmVzaG9sZDoxMDAsIGZpbmdlcnM6M30gKTsgLy8gc2V0IG11bHRpcGxlIHByb3BlcnRpZXMgYWZ0ZXIgaW5pdCAtIHRoZSBcIm9wdGlvblwiIG1ldGhvZCBpcyBvcHRpb25hbCFcclxuICAgICAqIEBleGFtcGxlICQoXCIjZWxlbWVudFwiKS5zd2lwZShcIm9wdGlvblwiKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IG9wdGlvbnMgaGFzaFxyXG4gICAgICogQHNlZSAkLmZuLnN3aXBlLmRlZmF1bHRzXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICB0aGlzLm9wdGlvbiA9IGZ1bmN0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBvcHRpb25zID0gJC5leHRlbmQob3B0aW9ucywgcHJvcGVydHkpO1xyXG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnNbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvcHRpb25zW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICghcHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkLmVycm9yKCdPcHRpb24gJyArIHByb3BlcnR5ICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuc3dpcGUub3B0aW9ucycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcclxuICAgIC8vXHJcblxyXG4gICAgLy9cclxuICAgIC8vIEVWRU5UU1xyXG4gICAgLy9cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgYSB0b3VjaCBzdGFydCBldmVudC5cclxuICAgICAqIFN0b3BzIHRoZSBkZWZhdWx0IGNsaWNrIGV2ZW50IGZyb20gdHJpZ2dlcmluZyBhbmQgc3RvcmVzIHdoZXJlIHdlIHRvdWNoZWRcclxuICAgICAqIEBpbm5lclxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGpxRXZlbnQgVGhlIG5vcm1hbGlzZWQgalF1ZXJ5IGV2ZW50IG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdG91Y2hTdGFydChqcUV2ZW50KSB7XHJcblxyXG4gICAgICAvL0lmIHdlIGFscmVhZHkgaW4gYSB0b3VjaCBldmVudCAoYSBmaW5nZXIgYWxyZWFkeSBpbiB1c2UpIHRoZW4gaWdub3JlIHN1YnNlcXVlbnQgb25lcy4uXHJcbiAgICAgIGlmIChnZXRUb3VjaEluUHJvZ3Jlc3MoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9DaGVjayBpZiB0aGlzIGVsZW1lbnQgbWF0Y2hlcyBhbnkgaW4gdGhlIGV4Y2x1ZGVkIGVsZW1lbnRzIHNlbGVjdG9ycywgIG9yIGl0cyBwYXJlbnQgaXMgZXhjbHVkZWQsIGlmIHNvLCBET04nVCBzd2lwZVxyXG4gICAgICBpZiAoJChqcUV2ZW50LnRhcmdldCkuY2xvc2VzdChvcHRpb25zLmV4Y2x1ZGVkRWxlbWVudHMsICRlbGVtZW50KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0FzIHdlIHVzZSBKcXVlcnkgYmluZCBmb3IgZXZlbnRzLCB3ZSBuZWVkIHRvIHRhcmdldCB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XHJcbiAgICAgIC8vSWYgdGhlc2UgZXZlbnRzIGFyZSBiZWluZyBwcm9ncmFtbWF0aWNhbGx5IHRyaWdnZXJlZCwgd2UgZG9uJ3QgaGF2ZSBhbiBvcmlnaW5hbCBldmVudCBvYmplY3QsIHNvIHVzZSB0aGUgSnEgb25lLlxyXG4gICAgICB2YXIgZXZlbnQgPSBqcUV2ZW50Lm9yaWdpbmFsRXZlbnQgPyBqcUV2ZW50Lm9yaWdpbmFsRXZlbnQgOiBqcUV2ZW50O1xyXG5cclxuXHJcbiAgICAgIC8vSWYgd2UgaGF2ZSBhIHBvaW50ZXIgZXZlbnQsIHdob2VzIHR5cGUgaXMgJ21vdXNlJyBhbmQgd2UgaGF2ZSBzYWlkIE5PIG1vdXNlIGV2ZW50cywgdGhlbiBkb250IGRvIGFueXRoaW5nLlxyXG4gICAgICBpZihldmVudC5wb2ludGVyVHlwZSAmJiBldmVudC5wb2ludGVyVHlwZT09XCJtb3VzZVwiICYmIG9wdGlvbnMuZmFsbGJhY2tUb01vdXNlRXZlbnRzPT1mYWxzZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciByZXQsXHJcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMsXHJcbiAgICAgICAgZXZ0ID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0gOiBldmVudDtcclxuXHJcbiAgICAgIHBoYXNlID0gUEhBU0VfU1RBUlQ7XHJcblxyXG4gICAgICAvL0lmIHdlIHN1cHBvcnQgdG91Y2hlcywgZ2V0IHRoZSBmaW5nZXIgY291bnRcclxuICAgICAgaWYgKHRvdWNoZXMpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIHRvdGFsIG51bWJlciBvZiBmaW5nZXJzIHRvdWNoaW5nIHRoZSBzY3JlZW5cclxuICAgICAgICBmaW5nZXJDb3VudCA9IHRvdWNoZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICAgIC8vRWxzZSB0aGlzIGlzIHRoZSBkZXNrdG9wLCBzbyBzdG9wIHRoZSBicm93c2VyIGZyb20gZHJhZ2dpbmcgY29udGVudFxyXG4gICAgICBlbHNlIGlmIChvcHRpb25zLnByZXZlbnREZWZhdWx0RXZlbnRzICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGpxRXZlbnQucHJldmVudERlZmF1bHQoKTsgLy9jYWxsIHRoaXMgb24ganEgZXZlbnQgc28gd2UgYXJlIGNyb3NzIGJyb3dzZXJcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9jbGVhciB2YXJzLi5cclxuICAgICAgZGlzdGFuY2UgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgICBjdXJyZW50RGlyZWN0aW9uPW51bGw7XHJcbiAgICAgIHBpbmNoRGlyZWN0aW9uID0gbnVsbDtcclxuICAgICAgZHVyYXRpb24gPSAwO1xyXG4gICAgICBzdGFydFRvdWNoZXNEaXN0YW5jZSA9IDA7XHJcbiAgICAgIGVuZFRvdWNoZXNEaXN0YW5jZSA9IDA7XHJcbiAgICAgIHBpbmNoWm9vbSA9IDE7XHJcbiAgICAgIHBpbmNoRGlzdGFuY2UgPSAwO1xyXG4gICAgICBtYXhpbXVtc01hcCA9IGNyZWF0ZU1heGltdW1zRGF0YSgpO1xyXG4gICAgICBjYW5jZWxNdWx0aUZpbmdlclJlbGVhc2UoKTtcclxuXHJcbiAgICAgIC8vQ3JlYXRlIHRoZSBkZWZhdWx0IGZpbmdlciBkYXRhXHJcbiAgICAgIGNyZWF0ZUZpbmdlckRhdGEoMCwgZXZ0KTtcclxuXHJcbiAgICAgIC8vIGNoZWNrIHRoZSBudW1iZXIgb2YgZmluZ2VycyBpcyB3aGF0IHdlIGFyZSBsb29raW5nIGZvciwgb3Igd2UgYXJlIGNhcHR1cmluZyBwaW5jaGVzXHJcbiAgICAgIGlmICghdG91Y2hlcyB8fCAoZmluZ2VyQ291bnQgPT09IG9wdGlvbnMuZmluZ2VycyB8fCBvcHRpb25zLmZpbmdlcnMgPT09IEFMTF9GSU5HRVJTKSB8fCBoYXNQaW5jaGVzKCkpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSB0b3VjaFxyXG4gICAgICAgIHN0YXJ0VGltZSA9IGdldFRpbWVTdGFtcCgpO1xyXG5cclxuICAgICAgICBpZiAoZmluZ2VyQ291bnQgPT0gMikge1xyXG4gICAgICAgICAgLy9LZWVwIHRyYWNrIG9mIHRoZSBpbml0aWFsIHBpbmNoIGRpc3RhbmNlLCBzbyB3ZSBjYW4gY2FsY3VsYXRlIHRoZSBkaWZmIGxhdGVyXHJcbiAgICAgICAgICAvL1N0b3JlIHNlY29uZCBmaW5nZXIgZGF0YSBhcyBzdGFydFxyXG4gICAgICAgICAgY3JlYXRlRmluZ2VyRGF0YSgxLCB0b3VjaGVzWzFdKTtcclxuICAgICAgICAgIHN0YXJ0VG91Y2hlc0Rpc3RhbmNlID0gZW5kVG91Y2hlc0Rpc3RhbmNlID0gY2FsY3VsYXRlVG91Y2hlc0Rpc3RhbmNlKGZpbmdlckRhdGFbMF0uc3RhcnQsIGZpbmdlckRhdGFbMV0uc3RhcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGVTdGF0dXMgfHwgb3B0aW9ucy5waW5jaFN0YXR1cykge1xyXG4gICAgICAgICAgcmV0ID0gdHJpZ2dlckhhbmRsZXIoZXZlbnQsIHBoYXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9BIHRvdWNoIHdpdGggbW9yZSBvciBsZXNzIHRoYW4gdGhlIGZpbmdlcnMgd2UgYXJlIGxvb2tpbmcgZm9yLCBzbyBjYW5jZWxcclxuICAgICAgICByZXQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9JZiB3ZSBoYXZlIGEgcmV0dXJuIHZhbHVlIGZyb20gdGhlIHVzZXJzIGhhbmRsZXIsIHRoZW4gcmV0dXJuIGFuZCBjYW5jZWxcclxuICAgICAgaWYgKHJldCA9PT0gZmFsc2UpIHtcclxuICAgICAgICBwaGFzZSA9IFBIQVNFX0NBTkNFTDtcclxuICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuaG9sZCkge1xyXG4gICAgICAgICAgaG9sZFRpbWVvdXQgPSBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vVHJpZ2dlciB0aGUgZXZlbnRcclxuICAgICAgICAgICAgJGVsZW1lbnQudHJpZ2dlcignaG9sZCcsIFtldmVudC50YXJnZXRdKTtcclxuICAgICAgICAgICAgLy9GaXJlIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5ob2xkKSB7XHJcbiAgICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy5ob2xkLmNhbGwoJGVsZW1lbnQsIGV2ZW50LCBldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB0aGlzKSwgb3B0aW9ucy5sb25nVGFwVGhyZXNob2xkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRvdWNoSW5Qcm9ncmVzcyh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBhIHRvdWNoIG1vdmUgZXZlbnQuXHJcbiAgICAgKiBJZiB3ZSBjaGFuZ2UgZmluZ2VycyBkdXJpbmcgbW92ZSwgdGhlbiBjYW5jZWwgdGhlIGV2ZW50XHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBqcUV2ZW50IFRoZSBub3JtYWxpc2VkIGpRdWVyeSBldmVudCBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRvdWNoTW92ZShqcUV2ZW50KSB7XHJcblxyXG4gICAgICAvL0FzIHdlIHVzZSBKcXVlcnkgYmluZCBmb3IgZXZlbnRzLCB3ZSBuZWVkIHRvIHRhcmdldCB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XHJcbiAgICAgIC8vSWYgdGhlc2UgZXZlbnRzIGFyZSBiZWluZyBwcm9ncmFtbWF0aWNhbGx5IHRyaWdnZXJlZCwgd2UgZG9uJ3QgaGF2ZSBhbiBvcmlnaW5hbCBldmVudCBvYmplY3QsIHNvIHVzZSB0aGUgSnEgb25lLlxyXG4gICAgICB2YXIgZXZlbnQgPSBqcUV2ZW50Lm9yaWdpbmFsRXZlbnQgPyBqcUV2ZW50Lm9yaWdpbmFsRXZlbnQgOiBqcUV2ZW50O1xyXG5cclxuICAgICAgLy9JZiB3ZSBhcmUgZW5kaW5nLCBjYW5jZWxsaW5nLCBvciB3aXRoaW4gdGhlIHRocmVzaG9sZCBvZiAyIGZpbmdlcnMgYmVpbmcgcmVsZWFzZWQsIGRvbid0IHRyYWNrIGFueXRoaW5nLi5cclxuICAgICAgaWYgKHBoYXNlID09PSBQSEFTRV9FTkQgfHwgcGhhc2UgPT09IFBIQVNFX0NBTkNFTCB8fCBpbk11bHRpRmluZ2VyUmVsZWFzZSgpKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHZhciByZXQsXHJcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMsXHJcbiAgICAgICAgZXZ0ID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0gOiBldmVudDtcclxuXHJcblxyXG4gICAgICAvL1VwZGF0ZSB0aGUgIGZpbmdlciBkYXRhXHJcbiAgICAgIHZhciBjdXJyZW50RmluZ2VyID0gdXBkYXRlRmluZ2VyRGF0YShldnQpO1xyXG4gICAgICBlbmRUaW1lID0gZ2V0VGltZVN0YW1wKCk7XHJcblxyXG4gICAgICBpZiAodG91Y2hlcykge1xyXG4gICAgICAgIGZpbmdlckNvdW50ID0gdG91Y2hlcy5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmhvbGQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoaG9sZFRpbWVvdXQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwaGFzZSA9IFBIQVNFX01PVkU7XHJcblxyXG4gICAgICAvL0lmIHdlIGhhdmUgMiBmaW5nZXJzIGdldCBUb3VjaGVzIGRpc3RhbmNlIGFzIHdlbGxcclxuICAgICAgaWYgKGZpbmdlckNvdW50ID09IDIpIHtcclxuXHJcbiAgICAgICAgLy9LZWVwIHRyYWNrIG9mIHRoZSBpbml0aWFsIHBpbmNoIGRpc3RhbmNlLCBzbyB3ZSBjYW4gY2FsY3VsYXRlIHRoZSBkaWZmIGxhdGVyXHJcbiAgICAgICAgLy9XZSBkbyB0aGlzIGhlcmUgYXMgd2VsbCBhcyB0aGUgc3RhcnQgZXZlbnQsIGluIGNhc2UgdGhleSBzdGFydCB3aXRoIDEgZmluZ2VyLCBhbmQgdGhlIHByZXNzIDIgZmluZ2Vyc1xyXG4gICAgICAgIGlmIChzdGFydFRvdWNoZXNEaXN0YW5jZSA9PSAwKSB7XHJcbiAgICAgICAgICAvL0NyZWF0ZSBzZWNvbmQgZmluZ2VyIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUuLi5cclxuICAgICAgICAgIGNyZWF0ZUZpbmdlckRhdGEoMSwgdG91Y2hlc1sxXSk7XHJcblxyXG4gICAgICAgICAgc3RhcnRUb3VjaGVzRGlzdGFuY2UgPSBlbmRUb3VjaGVzRGlzdGFuY2UgPSBjYWxjdWxhdGVUb3VjaGVzRGlzdGFuY2UoZmluZ2VyRGF0YVswXS5zdGFydCwgZmluZ2VyRGF0YVsxXS5zdGFydCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vRWxzZSBqdXN0IHVwZGF0ZSB0aGUgc2Vjb25kIGZpbmdlclxyXG4gICAgICAgICAgdXBkYXRlRmluZ2VyRGF0YSh0b3VjaGVzWzFdKTtcclxuXHJcbiAgICAgICAgICBlbmRUb3VjaGVzRGlzdGFuY2UgPSBjYWxjdWxhdGVUb3VjaGVzRGlzdGFuY2UoZmluZ2VyRGF0YVswXS5lbmQsIGZpbmdlckRhdGFbMV0uZW5kKTtcclxuICAgICAgICAgIHBpbmNoRGlyZWN0aW9uID0gY2FsY3VsYXRlUGluY2hEaXJlY3Rpb24oZmluZ2VyRGF0YVswXS5lbmQsIGZpbmdlckRhdGFbMV0uZW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBpbmNoWm9vbSA9IGNhbGN1bGF0ZVBpbmNoWm9vbShzdGFydFRvdWNoZXNEaXN0YW5jZSwgZW5kVG91Y2hlc0Rpc3RhbmNlKTtcclxuICAgICAgICBwaW5jaERpc3RhbmNlID0gTWF0aC5hYnMoc3RhcnRUb3VjaGVzRGlzdGFuY2UgLSBlbmRUb3VjaGVzRGlzdGFuY2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKGZpbmdlckNvdW50ID09PSBvcHRpb25zLmZpbmdlcnMgfHwgb3B0aW9ucy5maW5nZXJzID09PSBBTExfRklOR0VSUykgfHwgIXRvdWNoZXMgfHwgaGFzUGluY2hlcygpKSB7XHJcblxyXG4gICAgICAgIC8vVGhlIG92ZXJhbGwgZGlyZWN0aW9uIG9mIHRoZSBzd2lwZS4gRnJvbSBzdGFydCB0byBub3cuXHJcbiAgICAgICAgZGlyZWN0aW9uID0gY2FsY3VsYXRlRGlyZWN0aW9uKGN1cnJlbnRGaW5nZXIuc3RhcnQsIGN1cnJlbnRGaW5nZXIuZW5kKTtcclxuXHJcbiAgICAgICAgLy9UaGUgaW1tZWRpYXRlIGRpcmVjdGlvbiBvZiB0aGUgc3dpcGUsIGRpcmVjdGlvbiBiZXR3ZWVuIHRoZSBsYXN0IG1vdmVtZW50IGFuZCB0aGlzIG9uZS5cclxuICAgICAgICBjdXJyZW50RGlyZWN0aW9uID0gY2FsY3VsYXRlRGlyZWN0aW9uKGN1cnJlbnRGaW5nZXIubGFzdCwgY3VycmVudEZpbmdlci5lbmQpO1xyXG5cclxuICAgICAgICAvL0NoZWNrIGlmIHdlIG5lZWQgdG8gcHJldmVudCBkZWZhdWx0IGV2ZW50IChwYWdlIHNjcm9sbCAvIHBpbmNoIHpvb20pIG9yIG5vdFxyXG4gICAgICAgIHZhbGlkYXRlRGVmYXVsdEV2ZW50KGpxRXZlbnQsIGN1cnJlbnREaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAvL0Rpc3RhbmNlIGFuZCBkdXJhdGlvbiBhcmUgYWxsIG9mZiB0aGUgbWFpbiBmaW5nZXJcclxuICAgICAgICBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKGN1cnJlbnRGaW5nZXIuc3RhcnQsIGN1cnJlbnRGaW5nZXIuZW5kKTtcclxuICAgICAgICBkdXJhdGlvbiA9IGNhbGN1bGF0ZUR1cmF0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vQ2FjaGUgdGhlIG1heGltdW0gZGlzdGFuY2Ugd2UgbWFkZSBpbiB0aGlzIGRpcmVjdGlvblxyXG4gICAgICAgIHNldE1heERpc3RhbmNlKGRpcmVjdGlvbiwgZGlzdGFuY2UpO1xyXG5cclxuICAgICAgICAvL1RyaWdnZXIgc3RhdHVzIGhhbmRsZXJcclxuICAgICAgICByZXQgPSB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xyXG5cclxuXHJcbiAgICAgICAgLy9JZiB3ZSB0cmlnZ2VyIGVuZCBldmVudHMgd2hlbiB0aHJlc2hvbGQgYXJlIG1ldCwgb3IgdHJpZ2dlciBldmVudHMgd2hlbiB0b3VjaCBsZWF2ZXMgZWxlbWVudFxyXG4gICAgICAgIGlmICghb3B0aW9ucy50cmlnZ2VyT25Ub3VjaEVuZCB8fCBvcHRpb25zLnRyaWdnZXJPblRvdWNoTGVhdmUpIHtcclxuXHJcbiAgICAgICAgICB2YXIgaW5Cb3VuZHMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIC8vSWYgY2hlY2tpbmcgaWYgd2UgbGVhdmUgdGhlIGVsZW1lbnQsIHJ1biB0aGUgYm91bmRzIGNoZWNrICh3ZSBjYW4gdXNlIHRvdWNobGVhdmUgYXMgaXRzIG5vdCBzdXBwb3J0ZWQgb24gd2Via2l0KVxyXG4gICAgICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlck9uVG91Y2hMZWF2ZSkge1xyXG4gICAgICAgICAgICB2YXIgYm91bmRzID0gZ2V0Ym91bmRzKHRoaXMpO1xyXG4gICAgICAgICAgICBpbkJvdW5kcyA9IGlzSW5Cb3VuZHMoY3VycmVudEZpbmdlci5lbmQsIGJvdW5kcyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9UcmlnZ2VyIGVuZCBoYW5kbGVzIGFzIHdlIHN3aXBlIGlmIHRocmVzaG9sZHMgbWV0IG9yIGlmIHdlIGhhdmUgbGVmdCB0aGUgZWxlbWVudCBpZiB0aGUgdXNlciBoYXMgYXNrZWQgdG8gY2hlY2sgdGhlc2UuLlxyXG4gICAgICAgICAgaWYgKCFvcHRpb25zLnRyaWdnZXJPblRvdWNoRW5kICYmIGluQm91bmRzKSB7XHJcbiAgICAgICAgICAgIHBoYXNlID0gZ2V0TmV4dFBoYXNlKFBIQVNFX01PVkUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9XZSBlbmQgaWYgb3V0IG9mIGJvdW5kcyBoZXJlLCBzbyBzZXQgY3VycmVudCBwaGFzZSB0byBFTkQsIGFuZCBjaGVjayBpZiBpdHMgbW9kaWZpZWRcclxuICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudHJpZ2dlck9uVG91Y2hMZWF2ZSAmJiAhaW5Cb3VuZHMpIHtcclxuICAgICAgICAgICAgcGhhc2UgPSBnZXROZXh0UGhhc2UoUEhBU0VfRU5EKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAocGhhc2UgPT0gUEhBU0VfQ0FOQ0VMIHx8IHBoYXNlID09IFBIQVNFX0VORCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwaGFzZSA9IFBIQVNFX0NBTkNFTDtcclxuICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xyXG4gICAgICAgIHBoYXNlID0gUEhBU0VfQ0FOQ0VMO1xyXG4gICAgICAgIHRyaWdnZXJIYW5kbGVyKGV2ZW50LCBwaGFzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgdG91Y2ggZW5kIGV2ZW50LlxyXG4gICAgICogQ2FsY3VsYXRlIHRoZSBkaXJlY3Rpb24gYW5kIHRyaWdnZXIgZXZlbnRzXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBqcUV2ZW50IFRoZSBub3JtYWxpc2VkIGpRdWVyeSBldmVudCBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRvdWNoRW5kKGpxRXZlbnQpIHtcclxuICAgICAgLy9BcyB3ZSB1c2UgSnF1ZXJ5IGJpbmQgZm9yIGV2ZW50cywgd2UgbmVlZCB0byB0YXJnZXQgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxyXG4gICAgICAvL0lmIHRoZXNlIGV2ZW50cyBhcmUgYmVpbmcgcHJvZ3JhbW1hdGljYWxseSB0cmlnZ2VyZWQsIHdlIGRvbid0IGhhdmUgYW4gb3JpZ2luYWwgZXZlbnQgb2JqZWN0LCBzbyB1c2UgdGhlIEpxIG9uZS5cclxuICAgICAgdmFyIGV2ZW50ID0ganFFdmVudC5vcmlnaW5hbEV2ZW50ID8ganFFdmVudC5vcmlnaW5hbEV2ZW50IDoganFFdmVudCxcclxuICAgICAgICB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcclxuXHJcbiAgICAgIC8vSWYgd2UgYXJlIHN0aWxsIGluIGEgdG91Y2ggd2l0aCB0aGUgZGV2aWNlIHdhaXQgYSBmcmFjdGlvbiBhbmQgc2VlIGlmIHRoZSBvdGhlciBmaW5nZXIgY29tZXMgdXBcclxuICAgICAgLy9pZiBpdCBkb2VzIHdpdGhpbiB0aGUgdGhyZXNob2xkLCB0aGVuIHdlIHRyZWF0IGl0IGFzIGEgbXVsdGkgcmVsZWFzZSwgbm90IGEgc2luZ2xlIHJlbGVhc2UgYW5kIGVuZCB0aGUgdG91Y2ggLyBzd2lwZVxyXG4gICAgICBpZiAodG91Y2hlcykge1xyXG4gICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCAmJiAhaW5NdWx0aUZpbmdlclJlbGVhc2UoKSkge1xyXG4gICAgICAgICAgc3RhcnRNdWx0aUZpbmdlclJlbGVhc2UoZXZlbnQpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3VjaGVzLmxlbmd0aCAmJiBpbk11bHRpRmluZ2VyUmVsZWFzZSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vSWYgYSBwcmV2aW91cyBmaW5nZXIgaGFzIGJlZW4gcmVsZWFzZWQsIGNoZWNrIGhvdyBsb25nIGFnbywgaWYgd2l0aGluIHRoZSB0aHJlc2hvbGQsIHRoZW4gYXNzdW1lIGl0IHdhcyBhIG11bHRpZmluZ2VyIHJlbGVhc2UuXHJcbiAgICAgIC8vVGhpcyBpcyB1c2VkIHRvIGFsbG93IDIgZmluZ2VycyB0byByZWxlYXNlIGZyYWN0aW9uYWxseSBhZnRlciBlYWNoIG90aGVyLCB3aGlsc3QgbWFpbnRhaW5pbmcgdGhlIGV2ZW50IGFzIGNvbnRhaW5pbmcgMiBmaW5nZXJzLCBub3QgMVxyXG4gICAgICBpZiAoaW5NdWx0aUZpbmdlclJlbGVhc2UoKSkge1xyXG4gICAgICAgIGZpbmdlckNvdW50ID0gZmluZ2VyQ291bnRBdFJlbGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vU2V0IGVuZCBvZiBzd2lwZVxyXG4gICAgICBlbmRUaW1lID0gZ2V0VGltZVN0YW1wKCk7XHJcblxyXG4gICAgICAvL0dldCBkdXJhdGlvbiBpbmNhc2UgbW92ZSB3YXMgbmV2ZXIgZmlyZWRcclxuICAgICAgZHVyYXRpb24gPSBjYWxjdWxhdGVEdXJhdGlvbigpO1xyXG5cclxuICAgICAgLy9JZiB3ZSB0cmlnZ2VyIGhhbmRsZXJzIGF0IGVuZCBvZiBzd2lwZSBPUiwgd2UgdHJpZ2dlciBkdXJpbmcsIGJ1dCB0aGV5IGRpZG50IHRyaWdnZXIgYW5kIHdlIGFyZSBzdGlsbCBpbiB0aGUgbW92ZSBwaGFzZVxyXG4gICAgICBpZiAoZGlkU3dpcGVCYWNrVG9DYW5jZWwoKSB8fCAhdmFsaWRhdGVTd2lwZURpc3RhbmNlKCkpIHtcclxuICAgICAgICBwaGFzZSA9IFBIQVNFX0NBTkNFTDtcclxuICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudHJpZ2dlck9uVG91Y2hFbmQgfHwgKG9wdGlvbnMudHJpZ2dlck9uVG91Y2hFbmQgPT09IGZhbHNlICYmIHBoYXNlID09PSBQSEFTRV9NT1ZFKSkge1xyXG4gICAgICAgIC8vY2FsbCB0aGlzIG9uIGpxIGV2ZW50IHNvIHdlIGFyZSBjcm9zcyBicm93c2VyXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHRFdmVudHMgIT09IGZhbHNlICYmIGpxRXZlbnQuY2FuY2VsYWJsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgIGpxRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGhhc2UgPSBQSEFTRV9FTkQ7XHJcbiAgICAgICAgdHJpZ2dlckhhbmRsZXIoZXZlbnQsIHBoYXNlKTtcclxuICAgICAgfVxyXG4gICAgICAvL1NwZWNpYWwgY2FzZXMgLSBBIHRhcCBzaG91bGQgYWx3YXlzIGZpcmUgb24gdG91Y2ggZW5kIHJlZ2FyZGxlc3MsXHJcbiAgICAgIC8vU28gaGVyZSB3ZSBtYW51YWxseSB0cmlnZ2VyIHRoZSB0YXAgZW5kIGhhbmRsZXIgYnkgaXRzZWxmXHJcbiAgICAgIC8vV2UgZG9udCBydW4gdHJpZ2dlciBoYW5kbGVyIGFzIGl0IHdpbGwgcmUtdHJpZ2dlciBldmVudHMgdGhhdCBtYXkgaGF2ZSBmaXJlZCBhbHJlYWR5XHJcbiAgICAgIGVsc2UgaWYgKCFvcHRpb25zLnRyaWdnZXJPblRvdWNoRW5kICYmIGhhc1RhcCgpKSB7XHJcbiAgICAgICAgLy9UcmlnZ2VyIHRoZSBwaW5jaCBldmVudHMuLi5cclxuICAgICAgICBwaGFzZSA9IFBIQVNFX0VORDtcclxuICAgICAgICB0cmlnZ2VySGFuZGxlckZvckdlc3R1cmUoZXZlbnQsIHBoYXNlLCBUQVApO1xyXG4gICAgICB9IGVsc2UgaWYgKHBoYXNlID09PSBQSEFTRV9NT1ZFKSB7XHJcbiAgICAgICAgcGhhc2UgPSBQSEFTRV9DQU5DRUw7XHJcbiAgICAgICAgdHJpZ2dlckhhbmRsZXIoZXZlbnQsIHBoYXNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0VG91Y2hJblByb2dyZXNzKGZhbHNlKTtcclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBhIHRvdWNoIGNhbmNlbCBldmVudC5cclxuICAgICAqIENsZWFycyBjdXJyZW50IHZhcnNcclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0b3VjaENhbmNlbCgpIHtcclxuICAgICAgLy8gcmVzZXQgdGhlIHZhcmlhYmxlcyBiYWNrIHRvIGRlZmF1bHQgdmFsdWVzXHJcbiAgICAgIGZpbmdlckNvdW50ID0gMDtcclxuICAgICAgZW5kVGltZSA9IDA7XHJcbiAgICAgIHN0YXJ0VGltZSA9IDA7XHJcbiAgICAgIHN0YXJ0VG91Y2hlc0Rpc3RhbmNlID0gMDtcclxuICAgICAgZW5kVG91Y2hlc0Rpc3RhbmNlID0gMDtcclxuICAgICAgcGluY2hab29tID0gMTtcclxuXHJcbiAgICAgIC8vSWYgd2Ugd2VyZSBpbiBwcm9ncmVzcyBvZiB0cmFja2luZyBhIHBvc3NpYmxlIG11bHRpIHRvdWNoIGVuZCwgdGhlbiByZSBzZXQgaXQuXHJcbiAgICAgIGNhbmNlbE11bHRpRmluZ2VyUmVsZWFzZSgpO1xyXG5cclxuICAgICAgc2V0VG91Y2hJblByb2dyZXNzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBhIHRvdWNoIGxlYXZlIGV2ZW50LlxyXG4gICAgICogVGhpcyBpcyBvbmx5IHRyaWdnZXJlZCBvbiBkZXNrdG9wcywgaW4gdG91Y2ggd2Ugd29yayB0aGlzIG91dCBtYW51YWxseVxyXG4gICAgICogYXMgdGhlIHRvdWNobGVhdmUgZXZlbnQgaXMgbm90IHN1cHBvcnRlZCBpbiB3ZWJraXRcclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0b3VjaExlYXZlKGpxRXZlbnQpIHtcclxuICAgICAgLy9JZiB0aGVzZSBldmVudHMgYXJlIGJlaW5nIHByb2dyYW1tYXRpY2FsbHkgdHJpZ2dlcmVkLCB3ZSBkb24ndCBoYXZlIGFuIG9yaWdpbmFsIGV2ZW50IG9iamVjdCwgc28gdXNlIHRoZSBKcSBvbmUuXHJcbiAgICAgIHZhciBldmVudCA9IGpxRXZlbnQub3JpZ2luYWxFdmVudCA/IGpxRXZlbnQub3JpZ2luYWxFdmVudCA6IGpxRXZlbnQ7XHJcblxyXG4gICAgICAvL0lmIHdlIGhhdmUgdGhlIHRyaWdnZXIgb24gbGVhdmUgcHJvcGVydHkgc2V0Li4uLlxyXG4gICAgICBpZiAob3B0aW9ucy50cmlnZ2VyT25Ub3VjaExlYXZlKSB7XHJcbiAgICAgICAgcGhhc2UgPSBnZXROZXh0UGhhc2UoUEhBU0VfRU5EKTtcclxuICAgICAgICB0cmlnZ2VySGFuZGxlcihldmVudCwgcGhhc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgdGhhdCB3ZXJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGx1Z2luXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgICAkZWxlbWVudC5vZmYoU1RBUlRfRVYsIHRvdWNoU3RhcnQpO1xyXG4gICAgICAkZWxlbWVudC5vZmYoQ0FOQ0VMX0VWLCB0b3VjaENhbmNlbCk7XHJcbiAgICAgICRlbGVtZW50Lm9mZihNT1ZFX0VWLCB0b3VjaE1vdmUpO1xyXG4gICAgICAkZWxlbWVudC5vZmYoRU5EX0VWLCB0b3VjaEVuZCk7XHJcblxyXG4gICAgICAvL3dlIG9ubHkgaGF2ZSBsZWF2ZSBldmVudHMgb24gZGVza3RvcCwgd2UgbWFudWFsbHkgY2FsY3VsYXRlIGxlYXZlIG9uIHRvdWNoIGFzIGl0cyBub3Qgc3VwcG9ydGVkIGluIHdlYmtpdFxyXG4gICAgICBpZiAoTEVBVkVfRVYpIHtcclxuICAgICAgICAkZWxlbWVudC5vZmYoTEVBVkVfRVYsIHRvdWNoTGVhdmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUb3VjaEluUHJvZ3Jlc3MoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgdGltZSBhbmQgZGlzdGFuY2UgdGhyZXNob2xkcyBoYXZlIGJlZW4gbWV0LCBhbmQgaWYgc28gdGhlbiB0aGUgYXBwcm9wcmlhdGUgaGFuZGxlcnMgYXJlIGZpcmVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXROZXh0UGhhc2UoY3VycmVudFBoYXNlKSB7XHJcblxyXG4gICAgICB2YXIgbmV4dFBoYXNlID0gY3VycmVudFBoYXNlO1xyXG5cclxuICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgdmFsaWQgc3dpcGUgKHVuZGVyIHRpbWUgYW5kIG92ZXIgZGlzdGFuY2UgIGFuZCBjaGVjayBpZiB3ZSBhcmUgb3V0IG9mIGJvdW5kLi4uKVxyXG4gICAgICB2YXIgdmFsaWRUaW1lID0gdmFsaWRhdGVTd2lwZVRpbWUoKTtcclxuICAgICAgdmFyIHZhbGlkRGlzdGFuY2UgPSB2YWxpZGF0ZVN3aXBlRGlzdGFuY2UoKTtcclxuICAgICAgdmFyIGRpZENhbmNlbCA9IGRpZFN3aXBlQmFja1RvQ2FuY2VsKCk7XHJcblxyXG4gICAgICAvL0lmIHdlIGhhdmUgZXhjZWVkZWQgb3VyIHRpbWUsIHRoZW4gY2FuY2VsXHJcbiAgICAgIGlmICghdmFsaWRUaW1lIHx8IGRpZENhbmNlbCkge1xyXG4gICAgICAgIG5leHRQaGFzZSA9IFBIQVNFX0NBTkNFTDtcclxuICAgICAgfVxyXG4gICAgICAvL0Vsc2UgaWYgd2UgYXJlIG1vdmluZywgYW5kIGhhdmUgcmVhY2hlZCBkaXN0YW5jZSB0aGVuIGVuZFxyXG4gICAgICBlbHNlIGlmICh2YWxpZERpc3RhbmNlICYmIGN1cnJlbnRQaGFzZSA9PSBQSEFTRV9NT1ZFICYmICghb3B0aW9ucy50cmlnZ2VyT25Ub3VjaEVuZCB8fCBvcHRpb25zLnRyaWdnZXJPblRvdWNoTGVhdmUpKSB7XHJcbiAgICAgICAgbmV4dFBoYXNlID0gUEhBU0VfRU5EO1xyXG4gICAgICB9XHJcbiAgICAgIC8vRWxzZSBpZiB3ZSBoYXZlIGVuZGVkIGJ5IGxlYXZpbmcgYW5kIGRpZG4ndCByZWFjaCBkaXN0YW5jZSwgdGhlbiBjYW5jZWxcclxuICAgICAgZWxzZSBpZiAoIXZhbGlkRGlzdGFuY2UgJiYgY3VycmVudFBoYXNlID09IFBIQVNFX0VORCAmJiBvcHRpb25zLnRyaWdnZXJPblRvdWNoTGVhdmUpIHtcclxuICAgICAgICBuZXh0UGhhc2UgPSBQSEFTRV9DQU5DRUw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXh0UGhhc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciB0aGUgcmVsZXZhbnQgZXZlbnQgaGFuZGxlclxyXG4gICAgICogVGhlIGhhbmRsZXJzIGFyZSBwYXNzZWQgdGhlIG9yaWdpbmFsIGV2ZW50LCB0aGUgZWxlbWVudCB0aGF0IHdhcyBzd2lwZWQsIGFuZCBpbiB0aGUgY2FzZSBvZiB0aGUgY2F0Y2ggYWxsIGhhbmRsZXIsIHRoZSBkaXJlY3Rpb24gdGhhdCB3YXMgc3dpcGVkLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcInVwXCIsIG9yIFwiZG93blwiXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBoYXNlIHRoZSBwaGFzZSBvZiB0aGUgc3dpcGUgKHN0YXJ0LCBlbmQgY2FuY2VsIGV0Yykge0BsaW5rICQuZm4uc3dpcGUucGhhc2VzfVxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXJIYW5kbGVyKGV2ZW50LCBwaGFzZSkge1xyXG5cclxuXHJcblxyXG4gICAgICB2YXIgcmV0LFxyXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC50b3VjaGVzO1xyXG5cclxuICAgICAgLy8gU1dJUEUgR0VTVFVSRVNcclxuICAgICAgaWYgKGRpZFN3aXBlKCkgfHwgaGFzU3dpcGVzKCkpIHtcclxuICAgICAgICAgIHJldCA9IHRyaWdnZXJIYW5kbGVyRm9yR2VzdHVyZShldmVudCwgcGhhc2UsIFNXSVBFKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUElOQ0ggR0VTVFVSRVMgKGlmIHRoZSBhYm92ZSBkaWRuJ3QgY2FuY2VsKVxyXG4gICAgICBpZiAoKGRpZFBpbmNoKCkgfHwgaGFzUGluY2hlcygpKSAmJiByZXQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICByZXQgPSB0cmlnZ2VySGFuZGxlckZvckdlc3R1cmUoZXZlbnQsIHBoYXNlLCBQSU5DSCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENMSUNLIC8gVEFQIChpZiB0aGUgYWJvdmUgZGlkbid0IGNhbmNlbClcclxuICAgICAgaWYgKGRpZERvdWJsZVRhcCgpICYmIHJldCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAvL1RyaWdnZXIgdGhlIHRhcCBldmVudHMuLi5cclxuICAgICAgICByZXQgPSB0cmlnZ2VySGFuZGxlckZvckdlc3R1cmUoZXZlbnQsIHBoYXNlLCBET1VCTEVfVEFQKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ0xJQ0sgLyBUQVAgKGlmIHRoZSBhYm92ZSBkaWRuJ3QgY2FuY2VsKVxyXG4gICAgICBlbHNlIGlmIChkaWRMb25nVGFwKCkgJiYgcmV0ICE9PSBmYWxzZSkge1xyXG4gICAgICAgIC8vVHJpZ2dlciB0aGUgdGFwIGV2ZW50cy4uLlxyXG4gICAgICAgIHJldCA9IHRyaWdnZXJIYW5kbGVyRm9yR2VzdHVyZShldmVudCwgcGhhc2UsIExPTkdfVEFQKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ0xJQ0sgLyBUQVAgKGlmIHRoZSBhYm92ZSBkaWRuJ3QgY2FuY2VsKVxyXG4gICAgICBlbHNlIGlmIChkaWRUYXAoKSAmJiByZXQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgLy9UcmlnZ2VyIHRoZSB0YXAgZXZlbnQuLlxyXG4gICAgICAgIHJldCA9IHRyaWdnZXJIYW5kbGVyRm9yR2VzdHVyZShldmVudCwgcGhhc2UsIFRBUCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgLy8gSWYgd2UgYXJlIGNhbmNlbGxpbmcgdGhlIGdlc3R1cmUsIHRoZW4gbWFudWFsbHkgdHJpZ2dlciB0aGUgcmVzZXQgaGFuZGxlclxyXG4gICAgICBpZiAocGhhc2UgPT09IFBIQVNFX0NBTkNFTCkge1xyXG5cclxuICAgICAgICB0b3VjaENhbmNlbChldmVudCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIC8vIElmIHdlIGFyZSBlbmRpbmcgdGhlIGdlc3R1cmUsIHRoZW4gbWFudWFsbHkgdHJpZ2dlciB0aGUgcmVzZXQgaGFuZGxlciBJRiBhbGwgZmluZ2VycyBhcmUgb2ZmXHJcbiAgICAgIGlmIChwaGFzZSA9PT0gUEhBU0VfRU5EKSB7XHJcbiAgICAgICAgLy9JZiB3ZSBzdXBwb3J0IHRvdWNoLCB0aGVuIGNoZWNrIHRoYXQgYWxsIGZpbmdlcnMgYXJlIG9mZiBiZWZvcmUgd2UgY2FuY2VsXHJcbiAgICAgICAgaWYgKHRvdWNoZXMpIHtcclxuICAgICAgICAgIGlmICghdG91Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdG91Y2hDYW5jZWwoZXZlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b3VjaENhbmNlbChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIHRoZSByZWxldmFudCBldmVudCBoYW5kbGVyXHJcbiAgICAgKiBUaGUgaGFuZGxlcnMgYXJlIHBhc3NlZCB0aGUgb3JpZ2luYWwgZXZlbnQsIHRoZSBlbGVtZW50IHRoYXQgd2FzIHN3aXBlZCwgYW5kIGluIHRoZSBjYXNlIG9mIHRoZSBjYXRjaCBhbGwgaGFuZGxlciwgdGhlIGRpcmVjdGlvbiB0aGF0IHdhcyBzd2lwZWQsIFwibGVmdFwiLCBcInJpZ2h0XCIsIFwidXBcIiwgb3IgXCJkb3duXCJcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGhhc2UgdGhlIHBoYXNlIG9mIHRoZSBzd2lwZSAoc3RhcnQsIGVuZCBjYW5jZWwgZXRjKSB7QGxpbmsgJC5mbi5zd2lwZS5waGFzZXN9XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ2VzdHVyZSB0aGUgZ2VzdHVyZSB0byB0cmlnZ2VyIGEgaGFuZGxlciBmb3IgOiBQSU5DSCBvciBTV0lQRSB7QGxpbmsgJC5mbi5zd2lwZS5nZXN0dXJlc31cclxuICAgICAqIEByZXR1cm4gQm9vbGVhbiBGYWxzZSwgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZXZlbnQgc2hvdWxkIHN0b3AgcHJvcGFnYXRpb24sIG9yIHZvaWQuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckhhbmRsZXJGb3JHZXN0dXJlKGV2ZW50LCBwaGFzZSwgZ2VzdHVyZSkge1xyXG5cclxuICAgICAgdmFyIHJldDtcclxuXHJcbiAgICAgIC8vU1dJUEVTLi4uLlxyXG4gICAgICBpZiAoZ2VzdHVyZSA9PSBTV0lQRSkge1xyXG4gICAgICAgIC8vVHJpZ2dlciBzdGF0dXMgZXZlcnkgdGltZS4uXHJcbiAgICAgICAgJGVsZW1lbnQudHJpZ2dlcignc3dpcGVTdGF0dXMnLCBbcGhhc2UsIGRpcmVjdGlvbiB8fCBudWxsLCBkaXN0YW5jZSB8fCAwLCBkdXJhdGlvbiB8fCAwLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbl0pO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5zd2lwZVN0YXR1cykge1xyXG4gICAgICAgICAgcmV0ID0gb3B0aW9ucy5zd2lwZVN0YXR1cy5jYWxsKCRlbGVtZW50LCBldmVudCwgcGhhc2UsIGRpcmVjdGlvbiB8fCBudWxsLCBkaXN0YW5jZSB8fCAwLCBkdXJhdGlvbiB8fCAwLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbik7XHJcbiAgICAgICAgICAvL0lmIHRoZSBzdGF0dXMgY2FuY2VscywgdGhlbiBkb250IHJ1biB0aGUgc3Vic2VxdWVudCBldmVudCBoYW5kbGVycy4uXHJcbiAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBoYXNlID09IFBIQVNFX0VORCAmJiB2YWxpZGF0ZVN3aXBlKCkpIHtcclxuXHJcbiAgICAgICAgICAvL0NhbmNlbCBhbnkgdGFwcyB0aGF0IHdlcmUgaW4gcHJvZ3Jlc3MuLi5cclxuICAgICAgICAgIGNsZWFyVGltZW91dChzaW5nbGVUYXBUaW1lb3V0KTtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChob2xkVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgJGVsZW1lbnQudHJpZ2dlcignc3dpcGUnLCBbZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uXSk7XHJcblxyXG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGUpIHtcclxuICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy5zd2lwZS5jYWxsKCRlbGVtZW50LCBldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgLy9JZiB0aGUgc3RhdHVzIGNhbmNlbHMsIHRoZW4gZG9udCBydW4gdGhlIHN1YnNlcXVlbnQgZXZlbnQgaGFuZGxlcnMuLlxyXG4gICAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vdHJpZ2dlciBkaXJlY3Rpb24gc3BlY2lmaWMgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTEVGVDpcclxuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdzd2lwZUxlZnQnLCBbZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uXSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLnN3aXBlTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy5zd2lwZUxlZnQuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSSUdIVDpcclxuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdzd2lwZVJpZ2h0JywgW2RpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbl0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zd2lwZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSBvcHRpb25zLnN3aXBlUmlnaHQuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVUDpcclxuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdzd2lwZVVwJywgW2RpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbl0pO1xyXG5cclxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zd2lwZVVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSBvcHRpb25zLnN3aXBlVXAuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSwgY3VycmVudERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBET1dOOlxyXG4gICAgICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3N3aXBlRG93bicsIFtkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEsIGN1cnJlbnREaXJlY3Rpb25dKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGVEb3duKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSBvcHRpb25zLnN3aXBlRG93bi5jYWxsKCRlbGVtZW50LCBldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhLCBjdXJyZW50RGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy9QSU5DSEVTLi4uLlxyXG4gICAgICBpZiAoZ2VzdHVyZSA9PSBQSU5DSCkge1xyXG4gICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3BpbmNoU3RhdHVzJywgW3BoYXNlLCBwaW5jaERpcmVjdGlvbiB8fCBudWxsLCBwaW5jaERpc3RhbmNlIHx8IDAsIGR1cmF0aW9uIHx8IDAsIGZpbmdlckNvdW50LCBwaW5jaFpvb20sIGZpbmdlckRhdGFdKTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucGluY2hTdGF0dXMpIHtcclxuICAgICAgICAgIHJldCA9IG9wdGlvbnMucGluY2hTdGF0dXMuY2FsbCgkZWxlbWVudCwgZXZlbnQsIHBoYXNlLCBwaW5jaERpcmVjdGlvbiB8fCBudWxsLCBwaW5jaERpc3RhbmNlIHx8IDAsIGR1cmF0aW9uIHx8IDAsIGZpbmdlckNvdW50LCBwaW5jaFpvb20sIGZpbmdlckRhdGEpO1xyXG4gICAgICAgICAgLy9JZiB0aGUgc3RhdHVzIGNhbmNlbHMsIHRoZW4gZG9udCBydW4gdGhlIHN1YnNlcXVlbnQgZXZlbnQgaGFuZGxlcnMuLlxyXG4gICAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwaGFzZSA9PSBQSEFTRV9FTkQgJiYgdmFsaWRhdGVQaW5jaCgpKSB7XHJcblxyXG4gICAgICAgICAgc3dpdGNoIChwaW5jaERpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIElOOlxyXG4gICAgICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3BpbmNoSW4nLCBbcGluY2hEaXJlY3Rpb24gfHwgbnVsbCwgcGluY2hEaXN0YW5jZSB8fCAwLCBkdXJhdGlvbiB8fCAwLCBmaW5nZXJDb3VudCwgcGluY2hab29tLCBmaW5nZXJEYXRhXSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLnBpbmNoSW4pIHtcclxuICAgICAgICAgICAgICAgIHJldCA9IG9wdGlvbnMucGluY2hJbi5jYWxsKCRlbGVtZW50LCBldmVudCwgcGluY2hEaXJlY3Rpb24gfHwgbnVsbCwgcGluY2hEaXN0YW5jZSB8fCAwLCBkdXJhdGlvbiB8fCAwLCBmaW5nZXJDb3VudCwgcGluY2hab29tLCBmaW5nZXJEYXRhKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIE9VVDpcclxuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdwaW5jaE91dCcsIFtwaW5jaERpcmVjdGlvbiB8fCBudWxsLCBwaW5jaERpc3RhbmNlIHx8IDAsIGR1cmF0aW9uIHx8IDAsIGZpbmdlckNvdW50LCBwaW5jaFpvb20sIGZpbmdlckRhdGFdKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGluY2hPdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldCA9IG9wdGlvbnMucGluY2hPdXQuY2FsbCgkZWxlbWVudCwgZXZlbnQsIHBpbmNoRGlyZWN0aW9uIHx8IG51bGwsIHBpbmNoRGlzdGFuY2UgfHwgMCwgZHVyYXRpb24gfHwgMCwgZmluZ2VyQ291bnQsIHBpbmNoWm9vbSwgZmluZ2VyRGF0YSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdlc3R1cmUgPT0gVEFQKSB7XHJcbiAgICAgICAgaWYgKHBoYXNlID09PSBQSEFTRV9DQU5DRUwgfHwgcGhhc2UgPT09IFBIQVNFX0VORCkge1xyXG5cclxuICAgICAgICAgIGNsZWFyVGltZW91dChzaW5nbGVUYXBUaW1lb3V0KTtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChob2xkVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgLy9JZiB3ZSBhcmUgYWxzbyBsb29raW5nIGZvciBkb3ViZWxUYXBzLCB3YWl0IGluY2FzZSB0aGlzIGlzIG9uZS4uLlxyXG4gICAgICAgICAgaWYgKGhhc0RvdWJsZVRhcCgpICYmICFpbkRvdWJsZVRhcCgpKSB7XHJcbiAgICAgICAgICAgIGRvdWJsZVRhcFN0YXJ0VGltZSA9IGdldFRpbWVTdGFtcCgpO1xyXG5cclxuICAgICAgICAgICAgLy9Ob3cgd2FpdCBmb3IgdGhlIGRvdWJsZSB0YXAgdGltZW91dCwgYW5kIHRyaWdnZXIgdGhpcyBzaW5nbGUgdGFwXHJcbiAgICAgICAgICAgIC8vaWYgaXRzIG5vdCBjYW5jZWxsZWQgYnkgYSBkb3VibGUgdGFwXHJcbiAgICAgICAgICAgIHNpbmdsZVRhcFRpbWVvdXQgPSBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgZG91YmxlVGFwU3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCd0YXAnLCBbZXZlbnQudGFyZ2V0XSk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLnRhcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy50YXAuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzKSwgb3B0aW9ucy5kb3VibGVUYXBUaHJlc2hvbGQpO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvdWJsZVRhcFN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ3RhcCcsIFtldmVudC50YXJnZXRdKTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGFwKSB7XHJcbiAgICAgICAgICAgICAgcmV0ID0gb3B0aW9ucy50YXAuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZ2VzdHVyZSA9PSBET1VCTEVfVEFQKSB7XHJcbiAgICAgICAgaWYgKHBoYXNlID09PSBQSEFTRV9DQU5DRUwgfHwgcGhhc2UgPT09IFBIQVNFX0VORCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNpbmdsZVRhcFRpbWVvdXQpO1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGhvbGRUaW1lb3V0KTtcclxuICAgICAgICAgIGRvdWJsZVRhcFN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdkb3VibGV0YXAnLCBbZXZlbnQudGFyZ2V0XSk7XHJcblxyXG4gICAgICAgICAgaWYgKG9wdGlvbnMuZG91YmxlVGFwKSB7XHJcbiAgICAgICAgICAgIHJldCA9IG9wdGlvbnMuZG91YmxlVGFwLmNhbGwoJGVsZW1lbnQsIGV2ZW50LCBldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChnZXN0dXJlID09IExPTkdfVEFQKSB7XHJcbiAgICAgICAgaWYgKHBoYXNlID09PSBQSEFTRV9DQU5DRUwgfHwgcGhhc2UgPT09IFBIQVNFX0VORCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNpbmdsZVRhcFRpbWVvdXQpO1xyXG4gICAgICAgICAgZG91YmxlVGFwU3RhcnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAkZWxlbWVudC50cmlnZ2VyKCdsb25ndGFwJywgW2V2ZW50LnRhcmdldF0pO1xyXG4gICAgICAgICAgaWYgKG9wdGlvbnMubG9uZ1RhcCkge1xyXG4gICAgICAgICAgICByZXQgPSBvcHRpb25zLmxvbmdUYXAuY2FsbCgkZWxlbWVudCwgZXZlbnQsIGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gR0VTVFVSRSBWQUxJREFUSU9OXHJcbiAgICAvL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHRoZSB1c2VyIGhhcyBzd2lwZSBmYXIgZW5vdWdoXHJcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW4gaWYgPGNvZGU+dGhyZXNob2xkPC9jb2RlPiBoYXMgYmVlbiBzZXQsIHJldHVybiB0cnVlIGlmIHRoZSB0aHJlc2hvbGQgd2FzIG1ldCwgZWxzZSBmYWxzZS5cclxuICAgICAqIElmIG5vIHRocmVzaG9sZCB3YXMgc2V0LCB0aGVuIHdlIHJldHVybiB0cnVlLlxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlU3dpcGVEaXN0YW5jZSgpIHtcclxuICAgICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgLy9JZiB3ZSBtYWRlIGl0IHBhc3QgdGhlIG1pbiBzd2lwZSBkaXN0YW5jZS4uXHJcbiAgICAgIGlmIChvcHRpb25zLnRocmVzaG9sZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHZhbGlkID0gZGlzdGFuY2UgPj0gb3B0aW9ucy50aHJlc2hvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0aGUgdXNlciBoYXMgc3dpcGVkIGJhY2sgdG8gY2FuY2VsLlxyXG4gICAgICogQHJldHVybiBCb29sZWFuIGlmIDxjb2RlPmNhbmNlbFRocmVzaG9sZDwvY29kZT4gaGFzIGJlZW4gc2V0LCByZXR1cm4gdHJ1ZSBpZiB0aGUgY2FuY2VsVGhyZXNob2xkIHdhcyBtZXQsIGVsc2UgZmFsc2UuXHJcbiAgICAgKiBJZiBubyBjYW5jZWxUaHJlc2hvbGQgd2FzIHNldCwgdGhlbiB3ZSByZXR1cm4gdHJ1ZS5cclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkaWRTd2lwZUJhY2tUb0NhbmNlbCgpIHtcclxuICAgICAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAob3B0aW9ucy5jYW5jZWxUaHJlc2hvbGQgIT09IG51bGwgJiYgZGlyZWN0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgY2FuY2VsbGVkID0gKGdldE1heERpc3RhbmNlKGRpcmVjdGlvbikgLSBkaXN0YW5jZSkgPj0gb3B0aW9ucy5jYW5jZWxUaHJlc2hvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjYW5jZWxsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgdGhlIHVzZXIgaGFzIHBpbmNoZWQgZmFyIGVub3VnaFxyXG4gICAgICogQHJldHVybiBCb29sZWFuIGlmIDxjb2RlPnBpbmNoVGhyZXNob2xkPC9jb2RlPiBoYXMgYmVlbiBzZXQsIHJldHVybiB0cnVlIGlmIHRoZSB0aHJlc2hvbGQgd2FzIG1ldCwgZWxzZSBmYWxzZS5cclxuICAgICAqIElmIG5vIHRocmVzaG9sZCB3YXMgc2V0LCB0aGVuIHdlIHJldHVybiB0cnVlLlxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlUGluY2hEaXN0YW5jZSgpIHtcclxuICAgICAgaWYgKG9wdGlvbnMucGluY2hUaHJlc2hvbGQgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcGluY2hEaXN0YW5jZSA+PSBvcHRpb25zLnBpbmNoVGhyZXNob2xkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHRoYXQgdGhlIHRpbWUgdGFrZW4gdG8gc3dpcGUgbWVldHMgdGhlIG1pbmltdW0gLyBtYXhpbXVtIHJlcXVpcmVtZW50c1xyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVTd2lwZVRpbWUoKSB7XHJcbiAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgIC8vSWYgbm8gdGltZSBzZXQsIHRoZW4gcmV0dXJuIHRydWVcclxuICAgICAgaWYgKG9wdGlvbnMubWF4VGltZVRocmVzaG9sZCkge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA+PSBvcHRpb25zLm1heFRpbWVUaHJlc2hvbGQpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBkaXJlY3Rpb24gb2YgdGhlIHN3aXBlIGFuZCB0aGUgdmFsdWUgYWxsb3dQYWdlU2Nyb2xsIHRvIHNlZSBpZiB3ZSBzaG91bGQgYWxsb3cgb3IgcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgZnJvbSBvY2N1cnJpbmcuXHJcbiAgICAgKiBUaGlzIHdpbGwgZXNzZW50aWFsbHkgYWxsb3cgcGFnZSBzY3JvbGxpbmcgb3Igbm90IHdoZW4gdGhlIHVzZXIgaXMgc3dpcGluZyBvbiBhIHRvdWNoU3dpcGUgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGpxRXZlbnQgVGhlIG5vcm1hbGlzZWQgalF1ZXJ5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBldmVudCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gb2YgdGhlIGV2ZW50LiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cclxuICAgICAqIEBzZWUgJC5mbi5zd2lwZS5kaXJlY3Rpb25zXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVEZWZhdWx0RXZlbnQoanFFdmVudCwgZGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAvL0lmIHRoZSBvcHRpb24gaXMgc2V0LCBhbGx3YXlzIGFsbG93IHRoZSBldmVudCB0byBidWJibGUgdXAgKGxldCB1c2VyIGhhbmRsZSB3ZWlyZG5lc3MpXHJcbiAgICAgIGlmIChvcHRpb25zLnByZXZlbnREZWZhdWx0RXZlbnRzID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wdGlvbnMuYWxsb3dQYWdlU2Nyb2xsID09PSBOT05FKSB7XHJcbiAgICAgICAganFFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBhdXRvID0gb3B0aW9ucy5hbGxvd1BhZ2VTY3JvbGwgPT09IEFVVE87XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlIExFRlQ6XHJcbiAgICAgICAgICAgIGlmICgob3B0aW9ucy5zd2lwZUxlZnQgJiYgYXV0bykgfHwgKCFhdXRvICYmIG9wdGlvbnMuYWxsb3dQYWdlU2Nyb2xsICE9IEhPUklaT05UQUwpKSB7XHJcbiAgICAgICAgICAgICAganFFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgUklHSFQ6XHJcbiAgICAgICAgICAgIGlmICgob3B0aW9ucy5zd2lwZVJpZ2h0ICYmIGF1dG8pIHx8ICghYXV0byAmJiBvcHRpb25zLmFsbG93UGFnZVNjcm9sbCAhPSBIT1JJWk9OVEFMKSkge1xyXG4gICAgICAgICAgICAgIGpxRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIFVQOlxyXG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMuc3dpcGVVcCAmJiBhdXRvKSB8fCAoIWF1dG8gJiYgb3B0aW9ucy5hbGxvd1BhZ2VTY3JvbGwgIT0gVkVSVElDQUwpKSB7XHJcbiAgICAgICAgICAgICAganFFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgRE9XTjpcclxuICAgICAgICAgICAgaWYgKChvcHRpb25zLnN3aXBlRG93biAmJiBhdXRvKSB8fCAoIWF1dG8gJiYgb3B0aW9ucy5hbGxvd1BhZ2VTY3JvbGwgIT0gVkVSVElDQUwpKSB7XHJcbiAgICAgICAgICAgICAganFFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgTk9ORTpcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBQSU5DSEVTXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBvZiB0aGUgY3VycmVudCBwaW5jaCBtZWV0cyB0aGUgdGhyZXNob2xkc1xyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQaW5jaCgpIHtcclxuICAgICAgdmFyIGhhc0NvcnJlY3RGaW5nZXJDb3VudCA9IHZhbGlkYXRlRmluZ2VycygpO1xyXG4gICAgICB2YXIgaGFzRW5kUG9pbnQgPSB2YWxpZGF0ZUVuZFBvaW50KCk7XHJcbiAgICAgIHZhciBoYXNDb3JyZWN0RGlzdGFuY2UgPSB2YWxpZGF0ZVBpbmNoRGlzdGFuY2UoKTtcclxuICAgICAgcmV0dXJuIGhhc0NvcnJlY3RGaW5nZXJDb3VudCAmJiBoYXNFbmRQb2ludCAmJiBoYXNDb3JyZWN0RGlzdGFuY2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFueSBQaW5jaCBldmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcclxuICAgICAqIEByZXR1cm4gQm9vbGVhblxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhc1BpbmNoZXMoKSB7XHJcbiAgICAgIC8vRW51cmUgd2UgZG9udCByZXR1cm4gMCBvciBudWxsIGZvciBmYWxzZSB2YWx1ZXNcclxuICAgICAgcmV0dXJuICEhKG9wdGlvbnMucGluY2hTdGF0dXMgfHwgb3B0aW9ucy5waW5jaEluIHx8IG9wdGlvbnMucGluY2hPdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHdlIGFyZSBkZXRlY3RpbmcgcGluY2hlcywgYW5kIGhhdmUgb25lXHJcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkaWRQaW5jaCgpIHtcclxuICAgICAgLy9FbnVyZSB3ZSBkb250IHJldHVybiAwIG9yIG51bGwgZm9yIGZhbHNlIHZhbHVlc1xyXG4gICAgICByZXR1cm4gISEodmFsaWRhdGVQaW5jaCgpICYmIGhhc1BpbmNoZXMoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gU1dJUEVTXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBzd2lwZSBtZWV0cyB0aGUgdGhyZXNob2xkc1xyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVTd2lwZSgpIHtcclxuICAgICAgLy9DaGVjayB2YWxpZGl0eSBvZiBzd2lwZVxyXG4gICAgICB2YXIgaGFzVmFsaWRUaW1lID0gdmFsaWRhdGVTd2lwZVRpbWUoKTtcclxuICAgICAgdmFyIGhhc1ZhbGlkRGlzdGFuY2UgPSB2YWxpZGF0ZVN3aXBlRGlzdGFuY2UoKTtcclxuICAgICAgdmFyIGhhc0NvcnJlY3RGaW5nZXJDb3VudCA9IHZhbGlkYXRlRmluZ2VycygpO1xyXG4gICAgICB2YXIgaGFzRW5kUG9pbnQgPSB2YWxpZGF0ZUVuZFBvaW50KCk7XHJcbiAgICAgIHZhciBkaWRDYW5jZWwgPSBkaWRTd2lwZUJhY2tUb0NhbmNlbCgpO1xyXG5cclxuICAgICAgLy8gaWYgdGhlIHVzZXIgc3dpcGVkIG1vcmUgdGhhbiB0aGUgbWluaW11bSBsZW5ndGgsIHBlcmZvcm0gdGhlIGFwcHJvcHJpYXRlIGFjdGlvblxyXG4gICAgICAvLyBoYXNWYWxpZERpc3RhbmNlIGlzIG51bGwgd2hlbiBubyBkaXN0YW5jZSBpcyBzZXRcclxuICAgICAgdmFyIHZhbGlkID0gIWRpZENhbmNlbCAmJiBoYXNFbmRQb2ludCAmJiBoYXNDb3JyZWN0RmluZ2VyQ291bnQgJiYgaGFzVmFsaWREaXN0YW5jZSAmJiBoYXNWYWxpZFRpbWU7XHJcblxyXG4gICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYW55IFN3aXBlIGV2ZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzU3dpcGVzKCkge1xyXG4gICAgICAvL0VudXJlIHdlIGRvbnQgcmV0dXJuIDAgb3IgbnVsbCBmb3IgZmFsc2UgdmFsdWVzXHJcbiAgICAgIHJldHVybiAhIShvcHRpb25zLnN3aXBlIHx8IG9wdGlvbnMuc3dpcGVTdGF0dXMgfHwgb3B0aW9ucy5zd2lwZUxlZnQgfHwgb3B0aW9ucy5zd2lwZVJpZ2h0IHx8IG9wdGlvbnMuc3dpcGVVcCB8fCBvcHRpb25zLnN3aXBlRG93bik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHdlIGFyZSBkZXRlY3Rpbmcgc3dpcGVzIGFuZCBoYXZlIG9uZVxyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlkU3dpcGUoKSB7XHJcbiAgICAgIC8vRW51cmUgd2UgZG9udCByZXR1cm4gMCBvciBudWxsIGZvciBmYWxzZSB2YWx1ZXNcclxuICAgICAgcmV0dXJuICEhKHZhbGlkYXRlU3dpcGUoKSAmJiBoYXNTd2lwZXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgd2UgaGF2ZSBtYXRjaGVkIHRoZSBudW1iZXIgb2YgZmluZ2VycyB3ZSBhcmUgbG9va2luZyBmb3JcclxuICAgICAqIEByZXR1cm4gQm9vbGVhblxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmluZ2VycygpIHtcclxuICAgICAgLy9UaGUgbnVtYmVyIG9mIGZpbmdlcnMgd2Ugd2FudCB3ZXJlIG1hdGNoZWQsIG9yIG9uIGRlc2t0b3Agd2UgaWdub3JlXHJcbiAgICAgIHJldHVybiAoKGZpbmdlckNvdW50ID09PSBvcHRpb25zLmZpbmdlcnMgfHwgb3B0aW9ucy5maW5nZXJzID09PSBBTExfRklOR0VSUykgfHwgIVNVUFBPUlRTX1RPVUNIKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBoYXZlIGFuIGVuZCBwb2ludCBmb3IgdGhlIHN3aXBlXHJcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVuZFBvaW50KCkge1xyXG4gICAgICAvL1dlIGhhdmUgYW4gZW5kIHZhbHVlIGZvciB0aGUgZmluZ2VyXHJcbiAgICAgIHJldHVybiBmaW5nZXJEYXRhWzBdLmVuZC54ICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBUCAvIENMSUNLXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhIGNsaWNrIC8gdGFwIGV2ZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzVGFwKCkge1xyXG4gICAgICAvL0VudXJlIHdlIGRvbnQgcmV0dXJuIDAgb3IgbnVsbCBmb3IgZmFsc2UgdmFsdWVzXHJcbiAgICAgIHJldHVybiAhIShvcHRpb25zLnRhcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYSBkb3VibGUgdGFwIGV2ZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzRG91YmxlVGFwKCkge1xyXG4gICAgICAvL0VudXJlIHdlIGRvbnQgcmV0dXJuIDAgb3IgbnVsbCBmb3IgZmFsc2UgdmFsdWVzXHJcbiAgICAgIHJldHVybiAhIShvcHRpb25zLmRvdWJsZVRhcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYW55IGxvbmcgdGFwIGV2ZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzTG9uZ1RhcCgpIHtcclxuICAgICAgLy9FbnVyZSB3ZSBkb250IHJldHVybiAwIG9yIG51bGwgZm9yIGZhbHNlIHZhbHVlc1xyXG4gICAgICByZXR1cm4gISEob3B0aW9ucy5sb25nVGFwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBjb3VsZCBiZSBpbiB0aGUgcHJvY2VzcyBvZiBhIGRvdWJsZSB0YXAgKG9uZSB0YXAgaGFzIG9jY3VycmVkLCB3ZSBhcmUgbGlzdGVuaW5nIGZvciBkb3VibGUgdGFwcywgYW5kIHRoZSB0aHJlc2hvbGQgaGFzbid0IHBhc3QuXHJcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZURvdWJsZVRhcCgpIHtcclxuICAgICAgaWYgKGRvdWJsZVRhcFN0YXJ0VGltZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBub3cgPSBnZXRUaW1lU3RhbXAoKTtcclxuICAgICAgcmV0dXJuIChoYXNEb3VibGVUYXAoKSAmJiAoKG5vdyAtIGRvdWJsZVRhcFN0YXJ0VGltZSkgPD0gb3B0aW9ucy5kb3VibGVUYXBUaHJlc2hvbGQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBjb3VsZCBiZSBpbiB0aGUgcHJvY2VzcyBvZiBhIGRvdWJsZSB0YXAgKG9uZSB0YXAgaGFzIG9jY3VycmVkLCB3ZSBhcmUgbGlzdGVuaW5nIGZvciBkb3VibGUgdGFwcywgYW5kIHRoZSB0aHJlc2hvbGQgaGFzbid0IHBhc3QuXHJcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbkRvdWJsZVRhcCgpIHtcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlRG91YmxlVGFwKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHdlIGhhdmUgYSB2YWxpZCB0YXBcclxuICAgICAqIEByZXR1cm4gQm9vbGVhblxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVGFwKCkge1xyXG4gICAgICByZXR1cm4gKChmaW5nZXJDb3VudCA9PT0gMSB8fCAhU1VQUE9SVFNfVE9VQ0gpICYmIChpc05hTihkaXN0YW5jZSkgfHwgZGlzdGFuY2UgPCBvcHRpb25zLnRocmVzaG9sZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHdlIGhhdmUgYSB2YWxpZCBsb25nIHRhcFxyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVMb25nVGFwKCkge1xyXG4gICAgICAvL3NsaWdodCB0aHJlc2hvbGQgb24gbW92aW5nIGZpbmdlclxyXG4gICAgICByZXR1cm4gKChkdXJhdGlvbiA+IG9wdGlvbnMubG9uZ1RhcFRocmVzaG9sZCkgJiYgKGRpc3RhbmNlIDwgRE9VQkxFX1RBUF9USFJFU0hPTEQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgZGV0ZWN0aW5nIHRhcHMgYW5kIGhhdmUgb25lXHJcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkaWRUYXAoKSB7XHJcbiAgICAgIC8vRW51cmUgd2UgZG9udCByZXR1cm4gMCBvciBudWxsIGZvciBmYWxzZSB2YWx1ZXNcclxuICAgICAgcmV0dXJuICEhKHZhbGlkYXRlVGFwKCkgJiYgaGFzVGFwKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgZGV0ZWN0aW5nIGRvdWJsZSB0YXBzIGFuZCBoYXZlIG9uZVxyXG4gICAgICogQHJldHVybiBCb29sZWFuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlkRG91YmxlVGFwKCkge1xyXG4gICAgICAvL0VudXJlIHdlIGRvbnQgcmV0dXJuIDAgb3IgbnVsbCBmb3IgZmFsc2UgdmFsdWVzXHJcbiAgICAgIHJldHVybiAhISh2YWxpZGF0ZURvdWJsZVRhcCgpICYmIGhhc0RvdWJsZVRhcCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgZGV0ZWN0aW5nIGxvbmcgdGFwcyBhbmQgaGF2ZSBvbmVcclxuICAgICAqIEByZXR1cm4gQm9vbGVhblxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRpZExvbmdUYXAoKSB7XHJcbiAgICAgIC8vRW51cmUgd2UgZG9udCByZXR1cm4gMCBvciBudWxsIGZvciBmYWxzZSB2YWx1ZXNcclxuICAgICAgcmV0dXJuICEhKHZhbGlkYXRlTG9uZ1RhcCgpICYmIGhhc0xvbmdUYXAoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTVVMVEkgRklOR0VSIFRPVUNIXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0cmFja2luZyB0aGUgdGltZSBiZXR3ZWVuIDIgZmluZ2VyIHJlbGVhc2VzLCBhbmQga2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgZmluZ2VycyB3ZSBpbml0aWFsbHkgaGFkIHVwXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc3RhcnRNdWx0aUZpbmdlclJlbGVhc2UoZXZlbnQpIHtcclxuICAgICAgcHJldmlvdXNUb3VjaEVuZFRpbWUgPSBnZXRUaW1lU3RhbXAoKTtcclxuICAgICAgZmluZ2VyQ291bnRBdFJlbGVhc2UgPSBldmVudC50b3VjaGVzLmxlbmd0aCArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWxzIHRoZSB0cmFja2luZyBvZiB0aW1lIGJldHdlZW4gMiBmaW5nZXIgcmVsZWFzZXMsIGFuZCByZXNldHMgY291bnRlcnNcclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjYW5jZWxNdWx0aUZpbmdlclJlbGVhc2UoKSB7XHJcbiAgICAgIHByZXZpb3VzVG91Y2hFbmRUaW1lID0gMDtcclxuICAgICAgZmluZ2VyQ291bnRBdFJlbGVhc2UgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHdlIGFyZSBpbiB0aGUgdGhyZXNob2xkIGJldHdlZW4gMiBmaW5nZXJzIGJlaW5nIHJlbGVhc2VkXHJcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbk11bHRpRmluZ2VyUmVsZWFzZSgpIHtcclxuXHJcbiAgICAgIHZhciB3aXRoaW5UaHJlc2hvbGQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChwcmV2aW91c1RvdWNoRW5kVGltZSkge1xyXG4gICAgICAgIHZhciBkaWZmID0gZ2V0VGltZVN0YW1wKCkgLSBwcmV2aW91c1RvdWNoRW5kVGltZVxyXG4gICAgICAgIGlmIChkaWZmIDw9IG9wdGlvbnMuZmluZ2VyUmVsZWFzZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgd2l0aGluVGhyZXNob2xkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB3aXRoaW5UaHJlc2hvbGQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyBhIGRhdGEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IGEgdG91Y2ggaXMgaW4gcHJvZ3Jlc3NcclxuICAgICAqIEByZXR1cm4gQm9vbGVhblxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldFRvdWNoSW5Qcm9ncmVzcygpIHtcclxuICAgICAgLy9zdHJpY3QgZXF1YWxpdHkgdG8gZW5zdXJlIG9ubHkgdHJ1ZSBhbmQgZmFsc2UgYXJlIHJldHVybmVkXHJcbiAgICAgIHJldHVybiAhISgkZWxlbWVudC5kYXRhKFBMVUdJTl9OUyArICdfaW50b3VjaCcpID09PSB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgYSBkYXRhIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCBhIHRvdWNoIGlzIGluIHByb2dyZXNzXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbCBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0b1xyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldFRvdWNoSW5Qcm9ncmVzcyh2YWwpIHtcclxuXHJcbiAgICAgIC8vSWYgZGVzdHJveSBpcyBjYWxsZWQgaW4gYW4gZXZlbnQgaGFuZGxlciwgd2UgaGF2ZSBubyBlbCwgYW5kIHdlIGhhdmUgYWxyZWFkeSBjbGVhbmVkIHVwLCBzbyByZXR1cm4uXHJcbiAgICAgIGlmKCEkZWxlbWVudCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgIC8vQWRkIG9yIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZGVwZW5kaW5nIG9uIHRvdWNoIHN0YXR1c1xyXG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgJGVsZW1lbnQub24oTU9WRV9FViwgdG91Y2hNb3ZlKTtcclxuICAgICAgICAkZWxlbWVudC5vbihFTkRfRVYsIHRvdWNoRW5kKTtcclxuXHJcbiAgICAgICAgLy93ZSBvbmx5IGhhdmUgbGVhdmUgZXZlbnRzIG9uIGRlc2t0b3AsIHdlIG1hbnVhbGx5IGNhbGN1YXRlIGxlYXZlIG9uIHRvdWNoIGFzIGl0cyBub3Qgc3VwcG9ydGVkIGluIHdlYmtpdFxyXG4gICAgICAgIGlmIChMRUFWRV9FVikge1xyXG4gICAgICAgICAgJGVsZW1lbnQub24oTEVBVkVfRVYsIHRvdWNoTGVhdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgJGVsZW1lbnQub2ZmKE1PVkVfRVYsIHRvdWNoTW92ZSwgZmFsc2UpO1xyXG4gICAgICAgICRlbGVtZW50Lm9mZihFTkRfRVYsIHRvdWNoRW5kLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vd2Ugb25seSBoYXZlIGxlYXZlIGV2ZW50cyBvbiBkZXNrdG9wLCB3ZSBtYW51YWxseSBjYWxjdWF0ZSBsZWF2ZSBvbiB0b3VjaCBhcyBpdHMgbm90IHN1cHBvcnRlZCBpbiB3ZWJraXRcclxuICAgICAgICBpZiAoTEVBVkVfRVYpIHtcclxuICAgICAgICAgICRlbGVtZW50Lm9mZihMRUFWRV9FViwgdG91Y2hMZWF2ZSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vc3RyaWN0IGVxdWFsaXR5IHRvIGVuc3VyZSBvbmx5IHRydWUgYW5kIGZhbHNlIGNhbiB1cGRhdGUgdGhlIHZhbHVlXHJcbiAgICAgICRlbGVtZW50LmRhdGEoUExVR0lOX05TICsgJ19pbnRvdWNoJywgdmFsID09PSB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBmaW5nZXIgZGF0YSBmb3IgdGhlIHRvdWNoL2ZpbmdlciBpbiB0aGUgZXZlbnQgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHtpbnR9IGlkIFRoZSBpZCB0byBzdG9yZSB0aGUgZmluZ2VyIGRhdGEgdW5kZXIgKHVzdWFsbHkgdGhlIG9yZGVyIHRoZSBmaW5nZXJzIHdlcmUgcHJlc3NlZClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnQgVGhlIGV2ZW50IG9iamVjdCBjb250YWluaW5nIGZpbmdlciBkYXRhXHJcbiAgICAgKiBAcmV0dXJuIGZpbmdlciBkYXRhIG9iamVjdFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbmdlckRhdGEoaWQsIGV2dCkge1xyXG4gICAgICB2YXIgZiA9IHtcclxuICAgICAgICBzdGFydDoge1xyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIHk6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3Q6IHtcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmQ6IHtcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBmLnN0YXJ0LnggPSBmLmxhc3QueCA9IGYuZW5kLnggPSBldnQucGFnZVggfHwgZXZ0LmNsaWVudFg7XHJcbiAgICAgIGYuc3RhcnQueSA9IGYubGFzdC55ID0gZi5lbmQueSA9IGV2dC5wYWdlWSB8fCBldnQuY2xpZW50WTtcclxuICAgICAgZmluZ2VyRGF0YVtpZF0gPSBmO1xyXG4gICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGZpbmdlciBkYXRhIGZvciBhIHBhcnRpY3VsYXIgZXZlbnQgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IFRoZSBldmVudCBvYmplY3QgY29udGFpbmluZyB0aGUgdG91Y2gvZmluZ2VyIGRhdGEgdG8gdXBhZHRlXHJcbiAgICAgKiBAcmV0dXJuIGEgZmluZ2VyIGRhdGEgb2JqZWN0LlxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZpbmdlckRhdGEoZXZ0KSB7XHJcbiAgICAgIHZhciBpZCA9IGV2dC5pZGVudGlmaWVyICE9PSB1bmRlZmluZWQgPyBldnQuaWRlbnRpZmllciA6IDA7XHJcbiAgICAgIHZhciBmID0gZ2V0RmluZ2VyRGF0YShpZCk7XHJcblxyXG4gICAgICBpZiAoZiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGYgPSBjcmVhdGVGaW5nZXJEYXRhKGlkLCBldnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmLmxhc3QueCA9IGYuZW5kLng7XHJcbiAgICAgIGYubGFzdC55ID0gZi5lbmQueTtcclxuXHJcbiAgICAgIGYuZW5kLnggPSBldnQucGFnZVggfHwgZXZ0LmNsaWVudFg7XHJcbiAgICAgIGYuZW5kLnkgPSBldnQucGFnZVkgfHwgZXZ0LmNsaWVudFk7XHJcblxyXG4gICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBmaW5nZXIgZGF0YSBvYmplY3QgYnkgaXRzIGV2ZW50IElELlxyXG4gICAgICogRWFjaCB0b3VjaCBldmVudCBoYXMgYW4gaWRlbnRpZmllciBwcm9wZXJ0eSwgd2hpY2ggaXMgdXNlZFxyXG4gICAgICogdG8gdHJhY2sgcmVwZWF0IHRvdWNoZXNcclxuICAgICAqIEBwYXJhbSB7aW50fSBpZCBUaGUgdW5pcXVlIGlkIG9mIHRoZSBmaW5nZXIgaW4gdGhlIHNlcXVlbmNlIG9mIHRvdWNoIGV2ZW50cy5cclxuICAgICAqIEByZXR1cm4gYSBmaW5nZXIgZGF0YSBvYmplY3QuXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0RmluZ2VyRGF0YShpZCkge1xyXG4gICAgICByZXR1cm4gZmluZ2VyRGF0YVtpZF0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBtYXhpbXVtIGRpc3RhbmNlIHN3aXBlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLlxyXG4gICAgICogSWYgdGhlIG5ldyB2YWx1ZSBpcyBsb3dlciB0aGFuIHRoZSBjdXJyZW50IHZhbHVlLCB0aGUgbWF4IHZhbHVlIGlzIG5vdCBjaGFuZ2VkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBvZiB0aGUgc3dpcGVcclxuICAgICAqIEBwYXJhbSB7aW50fSAgZGlzdGFuY2UgVGhlIGRpc3RhbmNlIG9mIHRoZSBzd2lwZVxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldE1heERpc3RhbmNlKGRpcmVjdGlvbiwgZGlzdGFuY2UpIHtcclxuICAgICAgaWYoZGlyZWN0aW9uPT1OT05FKSByZXR1cm47XHJcbiAgICAgIGRpc3RhbmNlID0gTWF0aC5tYXgoZGlzdGFuY2UsIGdldE1heERpc3RhbmNlKGRpcmVjdGlvbikpO1xyXG4gICAgICBtYXhpbXVtc01hcFtkaXJlY3Rpb25dLmRpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRzIHRoZSBtYXhpbXVtIGRpc3RhbmNlIHN3aXBlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBvZiB0aGUgc3dpcGVcclxuICAgICAqIEByZXR1cm4gaW50ICBUaGUgZGlzdGFuY2Ugb2YgdGhlIHN3aXBlXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TWF4RGlzdGFuY2UoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGlmIChtYXhpbXVtc01hcFtkaXJlY3Rpb25dKSByZXR1cm4gbWF4aW11bXNNYXBbZGlyZWN0aW9uXS5kaXN0YW5jZTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0cyBhIG1hcCBvZiBkaXJlY3Rpb25zIHRvIG1heGltdW0gc3dpcGVkIHZhbHVlcy5cclxuICAgICAqIEByZXR1cm4gT2JqZWN0IEEgZGljdGlvbmFyeSBvZiBtYXhpbXVtIHZhbHVlcywgaW5kZXhlZCBieSBkaXJlY3Rpb24uXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWF4aW11bXNEYXRhKCkge1xyXG4gICAgICB2YXIgbWF4RGF0YSA9IHt9O1xyXG4gICAgICBtYXhEYXRhW0xFRlRdID0gY3JlYXRlTWF4aW11bVZPKExFRlQpO1xyXG4gICAgICBtYXhEYXRhW1JJR0hUXSA9IGNyZWF0ZU1heGltdW1WTyhSSUdIVCk7XHJcbiAgICAgIG1heERhdGFbVVBdID0gY3JlYXRlTWF4aW11bVZPKFVQKTtcclxuICAgICAgbWF4RGF0YVtET1dOXSA9IGNyZWF0ZU1heGltdW1WTyhET1dOKTtcclxuXHJcbiAgICAgIHJldHVybiBtYXhEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG1hcCBtYXhpbXVtIHN3aXBlZCB2YWx1ZXMgZm9yIGEgZ2l2ZW4gc3dpcGUgZGlyZWN0aW9uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gVGhlIGRpcmVjdGlvbiB0aGF0IHRoZXNlIHZhbHVlcyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aFxyXG4gICAgICogQHJldHVybiBPYmplY3QgTWF4aW11bSB2YWx1ZXNcclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNYXhpbXVtVk8oZGlyKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlyZWN0aW9uOiBkaXIsXHJcbiAgICAgICAgZGlzdGFuY2U6IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTUFUSFMgLyBVVElMU1xyXG4gICAgLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlXHJcbiAgICAgKiBAcmV0dXJuIGludFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUR1cmF0aW9uKCkge1xyXG4gICAgICByZXR1cm4gZW5kVGltZSAtIHN0YXJ0VGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHRvdWNoZXMgKHBpbmNoKVxyXG4gICAgICogQHBhcmFtIHtwb2ludH0gc3RhcnRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0ge3BvaW50fSBlbmRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXHJcbiAgICAgKiBAcmV0dXJuIGludDtcclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUb3VjaGVzRGlzdGFuY2Uoc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcclxuICAgICAgdmFyIGRpZmZYID0gTWF0aC5hYnMoc3RhcnRQb2ludC54IC0gZW5kUG9pbnQueCk7XHJcbiAgICAgIHZhciBkaWZmWSA9IE1hdGguYWJzKHN0YXJ0UG9pbnQueSAtIGVuZFBvaW50LnkpO1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5zcXJ0KGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHpvb20gZmFjdG9yIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgZGlzdGFuY2VzXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gc3RhcnREaXN0YW5jZSBEaXN0YW5jZSAoYmV0d2VlbiAyIGZpbmdlcnMpIHRoZSB1c2VyIHN0YXJ0ZWQgcGluY2hpbmcgYXRcclxuICAgICAqIEBwYXJhbSB7aW50fSBlbmREaXN0YW5jZSBEaXN0YW5jZSAoYmV0d2VlbiAyIGZpbmdlcnMpIHRoZSB1c2VyIGVuZGVkIHBpbmNoaW5nIGF0XHJcbiAgICAgKiBAcmV0dXJuIGZsb2F0IFRoZSB6b29tIHZhbHVlIGZyb20gMCB0byAxLlxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBpbmNoWm9vbShzdGFydERpc3RhbmNlLCBlbmREaXN0YW5jZSkge1xyXG4gICAgICB2YXIgcGVyY2VudCA9IChlbmREaXN0YW5jZSAvIHN0YXJ0RGlzdGFuY2UpICogMTtcclxuICAgICAgcmV0dXJuIHBlcmNlbnQudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBwaW5jaCBkaXJlY3Rpb24sIGVpdGhlciBJTiBvciBPVVQgZm9yIHRoZSBnaXZlbiBwb2ludHNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nIEVpdGhlciB7QGxpbmsgJC5mbi5zd2lwZS5kaXJlY3Rpb25zLklOfSBvciB7QGxpbmsgJC5mbi5zd2lwZS5kaXJlY3Rpb25zLk9VVH1cclxuICAgICAqIEBzZWUgJC5mbi5zd2lwZS5kaXJlY3Rpb25zXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGluY2hEaXJlY3Rpb24oKSB7XHJcbiAgICAgIGlmIChwaW5jaFpvb20gPCAxKSB7XHJcbiAgICAgICAgcmV0dXJuIE9VVDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gSU47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGxlbmd0aCAvIGRpc3RhbmNlIG9mIHRoZSBzd2lwZVxyXG4gICAgICogQHBhcmFtIHtwb2ludH0gc3RhcnRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0ge3BvaW50fSBlbmRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXHJcbiAgICAgKiBAcmV0dXJuIGludFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZURpc3RhbmNlKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhlbmRQb2ludC54IC0gc3RhcnRQb2ludC54LCAyKSArIE1hdGgucG93KGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIDIpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGFuZ2xlIG9mIHRoZSBzd2lwZVxyXG4gICAgICogQHBhcmFtIHtwb2ludH0gc3RhcnRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0ge3BvaW50fSBlbmRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXHJcbiAgICAgKiBAcmV0dXJuIGludFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUFuZ2xlKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XHJcbiAgICAgIHZhciB4ID0gc3RhcnRQb2ludC54IC0gZW5kUG9pbnQueDtcclxuICAgICAgdmFyIHkgPSBlbmRQb2ludC55IC0gc3RhcnRQb2ludC55O1xyXG4gICAgICB2YXIgciA9IE1hdGguYXRhbjIoeSwgeCk7IC8vcmFkaWFuc1xyXG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTsgLy9kZWdyZWVzXHJcblxyXG4gICAgICAvL2Vuc3VyZSB2YWx1ZSBpcyBwb3NpdGl2ZVxyXG4gICAgICBpZiAoYW5nbGUgPCAwKSB7XHJcbiAgICAgICAgYW5nbGUgPSAzNjAgLSBNYXRoLmFicyhhbmdsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzd2lwZVxyXG4gICAgICogVGhpcyB3aWxsIGFsc28gY2FsbCBjYWxjdWxhdGVBbmdsZSB0byBnZXQgdGhlIGxhdGVzdCBhbmdsZSBvZiBzd2lwZVxyXG4gICAgICogQHBhcmFtIHtwb2ludH0gc3RhcnRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0ge3BvaW50fSBlbmRQb2ludCBBIHBvaW50IG9iamVjdCBjb250YWluaW5nIHggYW5kIHkgY28tb3JkaW5hdGVzXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZyBFaXRoZXIge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9ucy5MRUZUfSAvIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnMuUklHSFR9IC8ge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9ucy5ET1dOfSAvIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnMuVVB9XHJcbiAgICAgKiBAc2VlICQuZm4uc3dpcGUuZGlyZWN0aW9uc1xyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZURpcmVjdGlvbihzdGFydFBvaW50LCBlbmRQb2ludCkge1xyXG5cclxuICAgICAgaWYoIGNvbXBhcmVQb2ludHMoc3RhcnRQb2ludCwgZW5kUG9pbnQpICkge1xyXG4gICAgICAgIHJldHVybiBOT05FO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgYW5nbGUgPSBjYWxjdWxhdGVBbmdsZShzdGFydFBvaW50LCBlbmRQb2ludCk7XHJcblxyXG4gICAgICBpZiAoKGFuZ2xlIDw9IDQ1KSAmJiAoYW5nbGUgPj0gMCkpIHtcclxuICAgICAgICByZXR1cm4gTEVGVDtcclxuICAgICAgfSBlbHNlIGlmICgoYW5nbGUgPD0gMzYwKSAmJiAoYW5nbGUgPj0gMzE1KSkge1xyXG4gICAgICAgIHJldHVybiBMRUZUO1xyXG4gICAgICB9IGVsc2UgaWYgKChhbmdsZSA+PSAxMzUpICYmIChhbmdsZSA8PSAyMjUpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJJR0hUO1xyXG4gICAgICB9IGVsc2UgaWYgKChhbmdsZSA+IDQ1KSAmJiAoYW5nbGUgPCAxMzUpKSB7XHJcbiAgICAgICAgcmV0dXJuIERPV047XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFVQO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIE1TIHRpbWUgc3RhbXAgb2YgdGhlIGN1cnJlbnQgdGltZVxyXG4gICAgICogQHJldHVybiBpbnRcclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRUaW1lU3RhbXAoKSB7XHJcbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICByZXR1cm4gbm93LmdldFRpbWUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGJvdW5kcyBvYmplY3Qgd2l0aCBsZWZ0LCByaWdodCwgdG9wIGFuZCBib3R0b20gcHJvcGVydGllcyBmb3IgdGhlIGVsZW1lbnQgc3BlY2lmaWVkLlxyXG4gICAgICogQHBhcmFtIHtEb21Ob2RlfSBUaGUgRE9NIG5vZGUgdG8gZ2V0IHRoZSBib3VuZHMgZm9yLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRib3VuZHMoZWwpIHtcclxuICAgICAgZWwgPSAkKGVsKTtcclxuICAgICAgdmFyIG9mZnNldCA9IGVsLm9mZnNldCgpO1xyXG5cclxuICAgICAgdmFyIGJvdW5kcyA9IHtcclxuICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCxcclxuICAgICAgICByaWdodDogb2Zmc2V0LmxlZnQgKyBlbC5vdXRlcldpZHRoKCksXHJcbiAgICAgICAgdG9wOiBvZmZzZXQudG9wLFxyXG4gICAgICAgIGJvdHRvbTogb2Zmc2V0LnRvcCArIGVsLm91dGVySGVpZ2h0KClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGJvdW5kcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBvaW50IG9iamVjdCBpcyBpbiB0aGUgYm91bmRzIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwb2ludCBBIHBvaW50IG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB7aW50fSBwb2ludC54IFRoZSB4IHZhbHVlIG9mIHRoZSBwb2ludC5cclxuICAgICAqIEBwYXJhbSB7aW50fSBwb2ludC55IFRoZSB4IHZhbHVlIG9mIHRoZSBwb2ludC5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBib3VuZHMgVGhlIGJvdW5kcyBvYmplY3QgdG8gdGVzdFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGJvdW5kcy5sZWZ0IFRoZSBsZWZ0bW9zdCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtpbnR9IGJvdW5kcy5yaWdodCBUaGUgcmlnaHR0bW9zdCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtpbnR9IGJvdW5kcy50b3AgVGhlIHRvcG1vc3QgdmFsdWVcclxuICAgICAqIEBwYXJhbSB7aW50fSBib3VuZHMuYm90dG9tIFRoZSBib3R0b21tb3N0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzSW5Cb3VuZHMocG9pbnQsIGJvdW5kcykge1xyXG4gICAgICByZXR1cm4gKHBvaW50LnggPiBib3VuZHMubGVmdCAmJiBwb2ludC54IDwgYm91bmRzLnJpZ2h0ICYmIHBvaW50LnkgPiBib3VuZHMudG9wICYmIHBvaW50LnkgPCBib3VuZHMuYm90dG9tKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIHR3byBwb2ludHMgYXJlIGVxdWFsXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcG9pbnQgQSBwb2ludCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcG9pbnQgQiBwb2ludCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJuIHRydWUgb2YgdGhlIHBvaW50cyBtYXRjaFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjb21wYXJlUG9pbnRzKHBvaW50QSwgcG9pbnRCKSB7XHJcbiAgICAgIHJldHVybiAocG9pbnRBLnggPT0gcG9pbnRCLnggJiYgcG9pbnRBLnkgPT0gcG9pbnRCLnkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBBIGNhdGNoIGFsbCBoYW5kbGVyIHRoYXQgaXMgdHJpZ2dlcmVkIGZvciBhbGwgc3dpcGUgZGlyZWN0aW9ucy5cclxuICAgKiBAbmFtZSAkLmZuLnN3aXBlI3N3aXBlXHJcbiAgICogQGV2ZW50XHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcclxuICAgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdGhlIHVzZXIgc3dpcGVkIGluLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cclxuICAgKiBAcGFyYW0ge2ludH0gZGlzdGFuY2UgVGhlIGRpc3RhbmNlIHRoZSB1c2VyIHN3aXBlZFxyXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqIEBwYXJhbSB7aW50fSBmaW5nZXJDb3VudCBUaGUgbnVtYmVyIG9mIGZpbmdlcnMgdXNlZC4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmZpbmdlcnN9XHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbmdlckRhdGEgVGhlIGNvb3JkaW5hdGVzIG9mIGZpbmdlcnMgaW4gZXZlbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudERpcmVjdGlvbiBUaGUgY3VycmVudCBkaXJlY3Rpb24gdGhlIHVzZXIgaXMgc3dpcGluZy5cclxuICAgKi9cclxuXHJcblxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgdHJpZ2dlcmVkIGZvciBcImxlZnRcIiBzd2lwZXMuXHJcbiAgICogQG5hbWUgJC5mbi5zd2lwZSNzd2lwZUxlZnRcclxuICAgKiBAZXZlbnRcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICogQHBhcmFtIHtFdmVudE9iamVjdH0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7aW50fSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiB0aGUgdXNlciBzd2lwZWQgaW4uIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5kaXJlY3Rpb25zfVxyXG4gICAqIEBwYXJhbSB7aW50fSBkaXN0YW5jZSBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgc3dpcGVkXHJcbiAgICogQHBhcmFtIHtpbnR9IGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBvZiB0aGUgc3dpcGUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICogQHBhcmFtIHtpbnR9IGZpbmdlckNvdW50IFRoZSBudW1iZXIgb2YgZmluZ2VycyB1c2VkLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZmluZ2Vyc31cclxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50RGlyZWN0aW9uIFRoZSBjdXJyZW50IGRpcmVjdGlvbiB0aGUgdXNlciBpcyBzd2lwaW5nLlxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBBIGhhbmRsZXIgdGhhdCBpcyB0cmlnZ2VyZWQgZm9yIFwicmlnaHRcIiBzd2lwZXMuXHJcbiAgICogQG5hbWUgJC5mbi5zd2lwZSNzd2lwZVJpZ2h0XHJcbiAgICogQGV2ZW50XHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcclxuICAgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdGhlIHVzZXIgc3dpcGVkIGluLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cclxuICAgKiBAcGFyYW0ge2ludH0gZGlzdGFuY2UgVGhlIGRpc3RhbmNlIHRoZSB1c2VyIHN3aXBlZFxyXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqIEBwYXJhbSB7aW50fSBmaW5nZXJDb3VudCBUaGUgbnVtYmVyIG9mIGZpbmdlcnMgdXNlZC4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmZpbmdlcnN9XHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbmdlckRhdGEgVGhlIGNvb3JkaW5hdGVzIG9mIGZpbmdlcnMgaW4gZXZlbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudERpcmVjdGlvbiBUaGUgY3VycmVudCBkaXJlY3Rpb24gdGhlIHVzZXIgaXMgc3dpcGluZy5cclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgdHJpZ2dlcmVkIGZvciBcInVwXCIgc3dpcGVzLlxyXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjc3dpcGVVcFxyXG4gICAqIEBldmVudFxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtpbnR9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRoZSB1c2VyIHN3aXBlZCBpbi4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnN9XHJcbiAgICogQHBhcmFtIHtpbnR9IGRpc3RhbmNlIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBzd2lwZWRcclxuICAgKiBAcGFyYW0ge2ludH0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIG9mIHRoZSBzd2lwZSBpbiBtaWxsaXNlY29uZHNcclxuICAgKiBAcGFyYW0ge2ludH0gZmluZ2VyQ291bnQgVGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5maW5nZXJzfVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmaW5nZXJEYXRhIFRoZSBjb29yZGluYXRlcyBvZiBmaW5nZXJzIGluIGV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnREaXJlY3Rpb24gVGhlIGN1cnJlbnQgZGlyZWN0aW9uIHRoZSB1c2VyIGlzIHN3aXBpbmcuXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIHRyaWdnZXJlZCBmb3IgXCJkb3duXCIgc3dpcGVzLlxyXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjc3dpcGVEb3duXHJcbiAgICogQGV2ZW50XHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcclxuICAgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdGhlIHVzZXIgc3dpcGVkIGluLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cclxuICAgKiBAcGFyYW0ge2ludH0gZGlzdGFuY2UgVGhlIGRpc3RhbmNlIHRoZSB1c2VyIHN3aXBlZFxyXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqIEBwYXJhbSB7aW50fSBmaW5nZXJDb3VudCBUaGUgbnVtYmVyIG9mIGZpbmdlcnMgdXNlZC4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmZpbmdlcnN9XHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbmdlckRhdGEgVGhlIGNvb3JkaW5hdGVzIG9mIGZpbmdlcnMgaW4gZXZlbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudERpcmVjdGlvbiBUaGUgY3VycmVudCBkaXJlY3Rpb24gdGhlIHVzZXIgaXMgc3dpcGluZy5cclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQSBoYW5kbGVyIHRyaWdnZXJlZCBmb3IgZXZlcnkgcGhhc2Ugb2YgdGhlIHN3aXBlLiBUaGlzIGhhbmRsZXIgaXMgY29uc3RhbnRseSBmaXJlZCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBwaW5jaC5cclxuICAgKiBUaGlzIGlzIHRyaWdnZXJlZCByZWdhcmRsZXNzIG9mIHN3aXBlIHRocmVzaG9sZHMuXHJcbiAgICogQG5hbWUgJC5mbi5zd2lwZSNzd2lwZVN0YXR1c1xyXG4gICAqIEBldmVudFxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBoYXNlIFRoZSBwaGFzZSBvZiB0aGUgc3dpcGUgZXZlbnQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5waGFzZXN9XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRoZSB1c2VyIHN3aXBlZCBpbi4gVGhpcyBpcyBudWxsIGlmIHRoZSB1c2VyIGhhcyB5ZXQgdG8gbW92ZS4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnN9XHJcbiAgICogQHBhcmFtIHtpbnR9IGRpc3RhbmNlIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBzd2lwZWQuIFRoaXMgaXMgMCBpZiB0aGUgdXNlciBoYXMgeWV0IHRvIG1vdmUuXHJcbiAgICogQHBhcmFtIHtpbnR9IGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBvZiB0aGUgc3dpcGUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICogQHBhcmFtIHtpbnR9IGZpbmdlckNvdW50IFRoZSBudW1iZXIgb2YgZmluZ2VycyB1c2VkLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZmluZ2Vyc31cclxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50RGlyZWN0aW9uIFRoZSBjdXJyZW50IGRpcmVjdGlvbiB0aGUgdXNlciBpcyBzd2lwaW5nLlxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBBIGhhbmRsZXIgdHJpZ2dlcmVkIGZvciBwaW5jaCBpbiBldmVudHMuXHJcbiAgICogQG5hbWUgJC5mbi5zd2lwZSNwaW5jaEluXHJcbiAgICogQGV2ZW50XHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcclxuICAgKiBAcGFyYW0ge2ludH0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdGhlIHVzZXIgcGluY2hlZCBpbi4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmRpcmVjdGlvbnN9XHJcbiAgICogQHBhcmFtIHtpbnR9IGRpc3RhbmNlIFRoZSBkaXN0YW5jZSB0aGUgdXNlciBwaW5jaGVkXHJcbiAgICogQHBhcmFtIHtpbnR9IGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBvZiB0aGUgc3dpcGUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICogQHBhcmFtIHtpbnR9IGZpbmdlckNvdW50IFRoZSBudW1iZXIgb2YgZmluZ2VycyB1c2VkLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZmluZ2Vyc31cclxuICAgKiBAcGFyYW0ge2ludH0gem9vbSBUaGUgem9vbS9zY2FsZSBsZXZlbCB0aGUgdXNlciBwaW5jaGVkIHRvbywgMC0xLlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmaW5nZXJEYXRhIFRoZSBjb29yZGluYXRlcyBvZiBmaW5nZXJzIGluIGV2ZW50XHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGFuZGxlciB0cmlnZ2VyZWQgZm9yIHBpbmNoIG91dCBldmVudHMuXHJcbiAgICogQG5hbWUgJC5mbi5zd2lwZSNwaW5jaE91dFxyXG4gICAqIEBldmVudFxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtpbnR9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRoZSB1c2VyIHBpbmNoZWQgaW4uIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5kaXJlY3Rpb25zfVxyXG4gICAqIEBwYXJhbSB7aW50fSBkaXN0YW5jZSBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgcGluY2hlZFxyXG4gICAqIEBwYXJhbSB7aW50fSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHN3aXBlIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqIEBwYXJhbSB7aW50fSBmaW5nZXJDb3VudCBUaGUgbnVtYmVyIG9mIGZpbmdlcnMgdXNlZC4gU2VlIHtAbGluayAkLmZuLnN3aXBlLmZpbmdlcnN9XHJcbiAgICogQHBhcmFtIHtpbnR9IHpvb20gVGhlIHpvb20vc2NhbGUgbGV2ZWwgdGhlIHVzZXIgcGluY2hlZCB0b28sIDAtMS5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gZmluZ2VyRGF0YSBUaGUgY29vcmRpbmF0ZXMgb2YgZmluZ2VycyBpbiBldmVudFxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBBIGhhbmRsZXIgdHJpZ2dlcmVkIGZvciBhbGwgcGluY2ggZXZlbnRzLiBUaGlzIGhhbmRsZXIgaXMgY29uc3RhbnRseSBmaXJlZCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBwaW5jaC4gVGhpcyBpcyB0cmlnZ2VyZWQgcmVnYXJkbGVzcyBvZiB0aHJlc2hvbGRzLlxyXG4gICAqIEBuYW1lICQuZm4uc3dpcGUjcGluY2hTdGF0dXNcclxuICAgKiBAZXZlbnRcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICogQHBhcmFtIHtFdmVudE9iamVjdH0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7aW50fSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiB0aGUgdXNlciBwaW5jaGVkIGluLiBTZWUge0BsaW5rICQuZm4uc3dpcGUuZGlyZWN0aW9uc31cclxuICAgKiBAcGFyYW0ge2ludH0gZGlzdGFuY2UgVGhlIGRpc3RhbmNlIHRoZSB1c2VyIHBpbmNoZWRcclxuICAgKiBAcGFyYW0ge2ludH0gZHVyYXRpb24gVGhlIGR1cmF0aW9uIG9mIHRoZSBzd2lwZSBpbiBtaWxsaXNlY29uZHNcclxuICAgKiBAcGFyYW0ge2ludH0gZmluZ2VyQ291bnQgVGhlIG51bWJlciBvZiBmaW5nZXJzIHVzZWQuIFNlZSB7QGxpbmsgJC5mbi5zd2lwZS5maW5nZXJzfVxyXG4gICAqIEBwYXJhbSB7aW50fSB6b29tIFRoZSB6b29tL3NjYWxlIGxldmVsIHRoZSB1c2VyIHBpbmNoZWQgdG9vLCAwLTEuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbmdlckRhdGEgVGhlIGNvb3JkaW5hdGVzIG9mIGZpbmdlcnMgaW4gZXZlbnRcclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjbGljayBoYW5kbGVyIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBzaW1wbHkgY2xpY2tzLCByYXRoZXIgdGhhbiBzd2lwZXMgb24gYW4gZWxlbWVudC5cclxuICAgKiBUaGlzIGlzIGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjYuMiwgYW55IGFzc2lnbm1lbnQgdG8gY2xpY2sgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgdGFwIGhhbmRsZXIuXHJcbiAgICogWW91IGNhbm5vdCB1c2UgPGNvZGU+b248L2NvZGU+IHRvIGJpbmQgdG8gdGhpcyBldmVudCBhcyB0aGUgZGVmYXVsdCBqUSA8Y29kZT5jbGljazwvY29kZT4gZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQuXHJcbiAgICogVXNlIHRoZSA8Y29kZT50YXA8L2NvZGU+IGV2ZW50IGluc3RlYWQuXHJcbiAgICogQG5hbWUgJC5mbi5zd2lwZSNjbGlja1xyXG4gICAqIEBldmVudFxyXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS42LjIsIHBsZWFzZSB1c2Uge0BsaW5rICQuZm4uc3dpcGUjdGFwfSBpbnN0ZWFkXHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBwYXJhbSB7RXZlbnRPYmplY3R9IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcclxuICAgKiBAcGFyYW0ge0RvbU9iamVjdH0gdGFyZ2V0IFRoZSBlbGVtZW50IGNsaWNrZWQgb24uXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY2xpY2sgLyB0YXAgaGFuZGxlciB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgc2ltcGx5IGNsaWNrcyBvciB0YXBzLCByYXRoZXIgdGhhbiBzd2lwZXMgb24gYW4gZWxlbWVudC5cclxuICAgKiBAbmFtZSAkLmZuLnN3aXBlI3RhcFxyXG4gICAqIEBldmVudFxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtEb21PYmplY3R9IHRhcmdldCBUaGUgZWxlbWVudCBjbGlja2VkIG9uLlxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBBIGRvdWJsZSB0YXAgaGFuZGxlciB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgZG91YmxlIGNsaWNrcyBvciB0YXBzIG9uIGFuIGVsZW1lbnQuXHJcbiAgICogWW91IGNhbiBzZXQgdGhlIHRpbWUgZGVsYXkgZm9yIGEgZG91YmxlIHRhcCB3aXRoIHRoZSB7QGxpbmsgJC5mbi5zd2lwZS5kZWZhdWx0cyNkb3VibGVUYXBUaHJlc2hvbGR9IHByb3BlcnR5LlxyXG4gICAqIE5vdGU6IElmIHlvdSBzZXQgYm90aCA8Y29kZT5kb3VibGVUYXA8L2NvZGU+IGFuZCA8Y29kZT50YXA8L2NvZGU+IGhhbmRsZXJzLCB0aGUgPGNvZGU+dGFwPC9jb2RlPiBldmVudCB3aWxsIGJlIGRlbGF5ZWQgYnkgdGhlIDxjb2RlPmRvdWJsZVRhcFRocmVzaG9sZDwvY29kZT5cclxuICAgKiBhcyB0aGUgc2NyaXB0IG5lZWRzIHRvIGNoZWNrIGlmIGl0cyBhIGRvdWJsZSB0YXAuXHJcbiAgICogQG5hbWUgJC5mbi5zd2lwZSNkb3VibGVUYXBcclxuICAgKiBAc2VlICAkLmZuLnN3aXBlLmRlZmF1bHRzI2RvdWJsZVRhcFRocmVzaG9sZFxyXG4gICAqIEBldmVudFxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAcGFyYW0ge0V2ZW50T2JqZWN0fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtEb21PYmplY3R9IHRhcmdldCBUaGUgZWxlbWVudCBjbGlja2VkIG9uLlxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBBIGxvbmcgdGFwIGhhbmRsZXIgdHJpZ2dlcmVkIG9uY2UgYSB0YXAgaGFzIGJlZW4gcmVsZWFzZSBpZiB0aGUgdGFwIHdhcyBsb25nZXIgdGhhbiB0aGUgbG9uZ1RhcFRocmVzaG9sZC5cclxuICAgKiBZb3UgY2FuIHNldCB0aGUgdGltZSBkZWxheSBmb3IgYSBsb25nIHRhcCB3aXRoIHRoZSB7QGxpbmsgJC5mbi5zd2lwZS5kZWZhdWx0cyNsb25nVGFwVGhyZXNob2xkfSBwcm9wZXJ0eS5cclxuICAgKiBAbmFtZSAkLmZuLnN3aXBlI2xvbmdUYXBcclxuICAgKiBAc2VlICAkLmZuLnN3aXBlLmRlZmF1bHRzI2xvbmdUYXBUaHJlc2hvbGRcclxuICAgKiBAZXZlbnRcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICogQHBhcmFtIHtFdmVudE9iamVjdH0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7RG9tT2JqZWN0fSB0YXJnZXQgVGhlIGVsZW1lbnQgY2xpY2tlZCBvbi5cclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob2xkIHRhcCBoYW5kbGVyIHRyaWdnZXJlZCBhcyBzb29uIGFzIHRoZSBsb25nVGFwVGhyZXNob2xkIGlzIHJlYWNoZWRcclxuICAgKiBZb3UgY2FuIHNldCB0aGUgdGltZSBkZWxheSBmb3IgYSBsb25nIHRhcCB3aXRoIHRoZSB7QGxpbmsgJC5mbi5zd2lwZS5kZWZhdWx0cyNsb25nVGFwVGhyZXNob2xkfSBwcm9wZXJ0eS5cclxuICAgKiBAbmFtZSAkLmZuLnN3aXBlI2hvbGRcclxuICAgKiBAc2VlICAkLmZuLnN3aXBlLmRlZmF1bHRzI2xvbmdUYXBUaHJlc2hvbGRcclxuICAgKiBAZXZlbnRcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICogQHBhcmFtIHtFdmVudE9iamVjdH0gZXZlbnQgVGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7RG9tT2JqZWN0fSB0YXJnZXQgVGhlIGVsZW1lbnQgY2xpY2tlZCBvbi5cclxuICAgKi9cclxuXHJcbiB9ICkgKGpRdWVyeSk7ICJdLCJuYW1lcyI6WyIkIiwiVkVSU0lPTiIsIkxFRlQiLCJSSUdIVCIsIlVQIiwiRE9XTiIsIklOIiwiT1VUIiwiTk9ORSIsIkFVVE8iLCJTV0lQRSIsIlBJTkNIIiwiVEFQIiwiRE9VQkxFX1RBUCIsIkxPTkdfVEFQIiwiSE9MRCIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIkFMTF9GSU5HRVJTIiwiRE9VQkxFX1RBUF9USFJFU0hPTEQiLCJQSEFTRV9TVEFSVCIsIlBIQVNFX01PVkUiLCJQSEFTRV9FTkQiLCJQSEFTRV9DQU5DRUwiLCJTVVBQT1JUU19UT1VDSCIsIndpbmRvdyIsIlNVUFBPUlRTX1BPSU5URVJfSUUxMCIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJQb2ludGVyRXZlbnQiLCJTVVBQT1JUU19QT0lOVEVSIiwiUExVR0lOX05TIiwiZGVmYXVsdHMiLCJmaW5nZXJzIiwidGhyZXNob2xkIiwiY2FuY2VsVGhyZXNob2xkIiwicGluY2hUaHJlc2hvbGQiLCJtYXhUaW1lVGhyZXNob2xkIiwiZmluZ2VyUmVsZWFzZVRocmVzaG9sZCIsImxvbmdUYXBUaHJlc2hvbGQiLCJkb3VibGVUYXBUaHJlc2hvbGQiLCJzd2lwZSIsInN3aXBlTGVmdCIsInN3aXBlUmlnaHQiLCJzd2lwZVVwIiwic3dpcGVEb3duIiwic3dpcGVTdGF0dXMiLCJwaW5jaEluIiwicGluY2hPdXQiLCJwaW5jaFN0YXR1cyIsImNsaWNrIiwidGFwIiwiZG91YmxlVGFwIiwibG9uZ1RhcCIsImhvbGQiLCJ0cmlnZ2VyT25Ub3VjaEVuZCIsInRyaWdnZXJPblRvdWNoTGVhdmUiLCJhbGxvd1BhZ2VTY3JvbGwiLCJmYWxsYmFja1RvTW91c2VFdmVudHMiLCJleGNsdWRlZEVsZW1lbnRzIiwicHJldmVudERlZmF1bHRFdmVudHMiLCJmbiIsIm1ldGhvZCIsIiR0aGlzIiwicGx1Z2luIiwiZGF0YSIsImFwcGx5IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJlcnJvciIsImluaXQiLCJ2ZXJzaW9uIiwicGhhc2VzIiwiZGlyZWN0aW9ucyIsInBhZ2VTY3JvbGwiLCJPTkUiLCJUV08iLCJUSFJFRSIsIkZPVVIiLCJGSVZFIiwiQUxMIiwib3B0aW9ucyIsInVuZGVmaW5lZCIsImV4dGVuZCIsImVhY2giLCJUb3VjaFN3aXBlIiwiZWxlbWVudCIsInVzZVRvdWNoRXZlbnRzIiwiU1RBUlRfRVYiLCJNT1ZFX0VWIiwiRU5EX0VWIiwiTEVBVkVfRVYiLCJDQU5DRUxfRVYiLCJkaXN0YW5jZSIsImRpcmVjdGlvbiIsImN1cnJlbnREaXJlY3Rpb24iLCJkdXJhdGlvbiIsInN0YXJ0VG91Y2hlc0Rpc3RhbmNlIiwiZW5kVG91Y2hlc0Rpc3RhbmNlIiwicGluY2hab29tIiwicGluY2hEaXN0YW5jZSIsInBpbmNoRGlyZWN0aW9uIiwibWF4aW11bXNNYXAiLCIkZWxlbWVudCIsInBoYXNlIiwiZmluZ2VyQ291bnQiLCJmaW5nZXJEYXRhIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInByZXZpb3VzVG91Y2hFbmRUaW1lIiwiZmluZ2VyQ291bnRBdFJlbGVhc2UiLCJkb3VibGVUYXBTdGFydFRpbWUiLCJzaW5nbGVUYXBUaW1lb3V0IiwiaG9sZFRpbWVvdXQiLCJvbiIsInRvdWNoU3RhcnQiLCJ0b3VjaENhbmNlbCIsImUiLCJlbmFibGUiLCJkaXNhYmxlIiwicmVtb3ZlTGlzdGVuZXJzIiwiZGVzdHJveSIsIm9wdGlvbiIsInByb3BlcnR5IiwidmFsdWUiLCJqcUV2ZW50IiwiZ2V0VG91Y2hJblByb2dyZXNzIiwidGFyZ2V0IiwiY2xvc2VzdCIsImxlbmd0aCIsImV2ZW50Iiwib3JpZ2luYWxFdmVudCIsInBvaW50ZXJUeXBlIiwicmV0IiwidG91Y2hlcyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlTWF4aW11bXNEYXRhIiwiY2FuY2VsTXVsdGlGaW5nZXJSZWxlYXNlIiwiY3JlYXRlRmluZ2VyRGF0YSIsImhhc1BpbmNoZXMiLCJnZXRUaW1lU3RhbXAiLCJjYWxjdWxhdGVUb3VjaGVzRGlzdGFuY2UiLCJzdGFydCIsInRyaWdnZXJIYW5kbGVyIiwic2V0VGltZW91dCIsInByb3h5IiwidHJpZ2dlciIsInNldFRvdWNoSW5Qcm9ncmVzcyIsInRvdWNoTW92ZSIsImluTXVsdGlGaW5nZXJSZWxlYXNlIiwiY3VycmVudEZpbmdlciIsInVwZGF0ZUZpbmdlckRhdGEiLCJjbGVhclRpbWVvdXQiLCJlbmQiLCJjYWxjdWxhdGVQaW5jaERpcmVjdGlvbiIsImNhbGN1bGF0ZVBpbmNoWm9vbSIsIk1hdGgiLCJhYnMiLCJjYWxjdWxhdGVEaXJlY3Rpb24iLCJsYXN0IiwidmFsaWRhdGVEZWZhdWx0RXZlbnQiLCJjYWxjdWxhdGVEaXN0YW5jZSIsImNhbGN1bGF0ZUR1cmF0aW9uIiwic2V0TWF4RGlzdGFuY2UiLCJpbkJvdW5kcyIsImJvdW5kcyIsImdldGJvdW5kcyIsImlzSW5Cb3VuZHMiLCJnZXROZXh0UGhhc2UiLCJ0b3VjaEVuZCIsInN0YXJ0TXVsdGlGaW5nZXJSZWxlYXNlIiwiZGlkU3dpcGVCYWNrVG9DYW5jZWwiLCJ2YWxpZGF0ZVN3aXBlRGlzdGFuY2UiLCJjYW5jZWxhYmxlIiwiaGFzVGFwIiwidHJpZ2dlckhhbmRsZXJGb3JHZXN0dXJlIiwidG91Y2hMZWF2ZSIsIm9mZiIsImN1cnJlbnRQaGFzZSIsIm5leHRQaGFzZSIsInZhbGlkVGltZSIsInZhbGlkYXRlU3dpcGVUaW1lIiwidmFsaWREaXN0YW5jZSIsImRpZENhbmNlbCIsImRpZFN3aXBlIiwiaGFzU3dpcGVzIiwiZGlkUGluY2giLCJkaWREb3VibGVUYXAiLCJkaWRMb25nVGFwIiwiZGlkVGFwIiwiZ2VzdHVyZSIsInZhbGlkYXRlU3dpcGUiLCJ2YWxpZGF0ZVBpbmNoIiwiaGFzRG91YmxlVGFwIiwiaW5Eb3VibGVUYXAiLCJ2YWxpZCIsImNhbmNlbGxlZCIsImdldE1heERpc3RhbmNlIiwidmFsaWRhdGVQaW5jaERpc3RhbmNlIiwicmVzdWx0IiwiYXV0byIsImhhc0NvcnJlY3RGaW5nZXJDb3VudCIsInZhbGlkYXRlRmluZ2VycyIsImhhc0VuZFBvaW50IiwidmFsaWRhdGVFbmRQb2ludCIsImhhc0NvcnJlY3REaXN0YW5jZSIsImhhc1ZhbGlkVGltZSIsImhhc1ZhbGlkRGlzdGFuY2UiLCJ4IiwiaGFzTG9uZ1RhcCIsInZhbGlkYXRlRG91YmxlVGFwIiwibm93IiwidmFsaWRhdGVUYXAiLCJpc05hTiIsInZhbGlkYXRlTG9uZ1RhcCIsIndpdGhpblRocmVzaG9sZCIsImRpZmYiLCJ2YWwiLCJpZCIsImYiLCJ5IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiaWRlbnRpZmllciIsImdldEZpbmdlckRhdGEiLCJtYXgiLCJtYXhEYXRhIiwiY3JlYXRlTWF4aW11bVZPIiwiZGlyIiwic3RhcnRQb2ludCIsImVuZFBvaW50IiwiZGlmZlgiLCJkaWZmWSIsInJvdW5kIiwic3FydCIsInN0YXJ0RGlzdGFuY2UiLCJlbmREaXN0YW5jZSIsInBlcmNlbnQiLCJ0b0ZpeGVkIiwicG93IiwiY2FsY3VsYXRlQW5nbGUiLCJyIiwiYXRhbjIiLCJhbmdsZSIsIlBJIiwiY29tcGFyZVBvaW50cyIsIkRhdGUiLCJnZXRUaW1lIiwiZWwiLCJvZmZzZXQiLCJsZWZ0IiwicmlnaHQiLCJvdXRlcldpZHRoIiwidG9wIiwiYm90dG9tIiwib3V0ZXJIZWlnaHQiLCJwb2ludCIsInBvaW50QSIsInBvaW50QiIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=