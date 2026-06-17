/* @ds-bundle: {"format":3,"namespace":"PantherLoopDesignSystem_4d00e2","components":[{"name":"CategoryPill","sourcePath":"components/content/CategoryPill.jsx"},{"name":"TaskCard","sourcePath":"components/content/TaskCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"TopAppBar","sourcePath":"components/navigation/TopAppBar.jsx"}],"sourceHashes":{"components/content/CategoryPill.jsx":"7a185312d3ce","components/content/TaskCard.jsx":"165cd91645bd","components/core/Avatar.jsx":"b3341e96bb91","components/core/Button.jsx":"1a7af573103c","components/core/StatusBadge.jsx":"fb41531ce219","components/forms/Input.jsx":"4e7480a29b49","components/icons/Icon.jsx":"58e3af9ab0e5","components/navigation/BottomNav.jsx":"d7c5747985f9","components/navigation/TopAppBar.jsx":"3cdd471fb760","ui_kits/pantherloop_app/app.jsx":"9600ec25b9bd","ui_kits/pantherloop_app/data.jsx":"9fc4b117cc42","ui_kits/pantherloop_app/frame.jsx":"e81407a3de79","ui_kits/pantherloop_app/screens-chat.jsx":"f3b0f561f4c3","ui_kits/pantherloop_app/screens-detail.jsx":"2a4e4e502bfd","ui_kits/pantherloop_app/screens-feed.jsx":"bf8628323793","ui_kits/pantherloop_app/screens-onboarding.jsx":"da538827b6dd","ui_kits/pantherloop_app/screens-payments.jsx":"a77035bedbb6","ui_kits/pantherloop_app/screens-post.jsx":"eb5be9c30105","ui_kits/pantherloop_app/screens-profile.jsx":"ea6e35369d41","ui_kits/pantherloop_app/screens-rides.jsx":"e71065c8eef6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PantherLoopDesignSystem_4d00e2 = window.PantherLoopDesignSystem_4d00e2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/CategoryPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CategoryPill — horizontal-scroll filter chip. Active = navy fill + white text.
 */
function CategoryPill({
  children,
  active = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 34,
      padding: "0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: active ? 600 : 500,
      lineHeight: 1,
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-control)",
      border: `1px solid ${active ? "var(--navy)" : "var(--border)"}`,
      background: active ? "var(--navy)" : "var(--white)",
      color: active ? "#fff" : "var(--text-primary)",
      cursor: "pointer",
      transition: "background 120ms ease, color 120ms ease, border-color 120ms ease",
      WebkitTapHighlightColor: "transparent",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { CategoryPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CategoryPill.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  open: {
    bg: "var(--status-open-bg)",
    fg: "var(--status-open-fg)",
    label: "Open"
  },
  "in-progress": {
    bg: "var(--status-progress-bg)",
    fg: "var(--status-progress-fg)",
    label: "In Progress"
  },
  confirmed: {
    bg: "var(--status-confirmed-bg)",
    fg: "var(--status-confirmed-fg)",
    label: "Confirmed"
  },
  disputed: {
    bg: "var(--status-disputed-bg)",
    fg: "var(--status-disputed-fg)",
    label: "Disputed"
  },
  cancelled: {
    bg: "var(--status-cancelled-bg)",
    fg: "var(--status-cancelled-fg)",
    label: "Cancelled"
  },
  expired: {
    bg: "var(--status-expired-bg)",
    fg: "var(--status-expired-fg)",
    label: "Expired"
  }
};

/**
 * StatusBadge — the colored pill that marks a task's lifecycle state.
 */
function StatusBadge({
  status = "open",
  label,
  style = {},
  ...rest
}) {
  const s = STATUS[status] || STATUS.open;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 10px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-pill)",
      background: s.bg,
      color: s.fg,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), label || s.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — monochrome icon from the Lucide set, tinted with CSS mask so it
 * inherits any color. PantherLoop's icon system is Lucide (2px stroke, rounded).
 */
function Icon({
  name,
  size = 24,
  color = "currentColor",
  style = {},
  ...rest
}) {
  const url = `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    style: {
      display: "inline-block",
      flex: "0 0 auto",
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular user avatar. Default shows navy bg + white initials.
 * Tier rings: "helper" (gold ring), "driver" (navy ring + car badge).
 */
function Avatar({
  initials = "",
  src,
  size = 40,
  tier = "none",
  style = {},
  ...rest
}) {
  const ringColors = {
    helper: "var(--gold)",
    driver: "var(--navy)",
    none: "transparent"
  };
  const ring = ringColors[tier] || "transparent";
  const hasRing = tier === "helper" || tier === "driver";
  const ringWidth = Math.max(2, Math.round(size * 0.06));
  const fontSize = Math.round(size * 0.4);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "0 0 auto",
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      borderRadius: "var(--radius-full)",
      background: "var(--navy)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize,
      letterSpacing: "-0.01em",
      overflow: "hidden",
      boxShadow: hasRing ? `0 0 0 ${ringWidth}px var(--white), 0 0 0 ${ringWidth * 2}px ${ring}` : "none",
      backgroundImage: src ? `url(${src})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, !src && initials.slice(0, 2).toUpperCase()), tier === "driver" && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -2,
      bottom: -2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: Math.max(16, size * 0.42),
      height: Math.max(16, size * 0.42),
      borderRadius: "var(--radius-full)",
      background: "var(--navy)",
      border: "1.5px solid #fff"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "car",
    size: Math.max(9, size * 0.24),
    color: "#fff"
  })));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/TaskCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TaskCard — the core feed unit. White card, hairline border, 16pt radius.
 * Title + status badge, meta line, description excerpt, divider, then
 * poster (avatar + name + rating) on the left and the navy price on the right.
 */
function TaskCard({
  title,
  status = "open",
  location,
  category,
  deadline,
  description,
  posterName,
  posterInitials,
  posterTier = "none",
  rating,
  price,
  onClick,
  style = {},
  ...rest
}) {
  const meta = [location, category, deadline].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      background: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-card)",
      padding: "14px 16px",
      boxShadow: "var(--shadow-card)",
      cursor: onClick ? "pointer" : "default",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)",
      lineHeight: 1.3,
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status
  })), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 6,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, m)))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 13,
      lineHeight: 1.45,
      color: "var(--text-secondary)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border)",
      margin: "12px -16px 0",
      marginLeft: -16,
      marginRight: -16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: posterInitials,
    tier: posterTier,
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-primary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, posterName), rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 13,
    color: "var(--gold)"
  }), rating)), price != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "var(--price)",
      letterSpacing: "-0.02em",
      whiteSpace: "nowrap"
    }
  }, "$", price)));
}
Object.assign(__ds_scope, { TaskCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TaskCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — PantherLoop's primary action control.
 * Variants: primary (navy), accept (gold), secondary (navy outline), ghost (gray outline).
 */
function Button({
  children,
  variant = "primary",
  size = "lg",
  iconLeft,
  iconRight,
  fullWidth = true,
  disabled = false,
  style = {},
  ...rest
}) {
  const heights = {
    lg: 48,
    md: 40,
    sm: 32
  };
  const fontSizes = {
    lg: 16,
    md: 15,
    sm: 13
  };
  const height = heights[size] || 48;
  const variants = {
    primary: {
      background: "var(--navy)",
      color: "#fff",
      border: "none"
    },
    accept: {
      background: "var(--gold)",
      color: "#fff",
      border: "none"
    },
    secondary: {
      background: "transparent",
      color: "var(--navy)",
      border: "1px solid var(--navy)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid var(--border)"
    }
  };
  const v = variants[variant] || variants.primary;
  const iconColor = v.color;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: fullWidth ? "100%" : "auto",
      height,
      padding: fullWidth ? 0 : "0 18px",
      fontFamily: "var(--font-sans)",
      fontSize: fontSizes[size] || 16,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "filter 120ms ease, transform 80ms ease",
      WebkitTapHighlightColor: "transparent",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === "sm" ? 16 : 18,
    color: iconColor
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === "sm" ? 16 : 18,
    color: iconColor
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labeled text field on the surface fill. Focus shows a navy border.
 * Supports leading icon, prefix (e.g. "$"), and a multiline textarea variant.
 */
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  iconLeft,
  prefix,
  multiline = false,
  rows = 4,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldBase = {
    width: "100%",
    height: multiline ? "auto" : "var(--input-height)",
    minHeight: multiline ? 44 * 2 : undefined,
    padding: multiline ? "12px 14px" : "0 14px",
    paddingLeft: iconLeft ? 40 : prefix ? 28 : 14,
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    fontWeight: 400,
    color: "var(--text-primary)",
    background: "var(--bg-input)",
    border: `1px solid ${focused ? "var(--navy)" : "var(--border)"}`,
    borderRadius: "var(--radius-control)",
    outline: "none",
    boxShadow: focused ? "0 0 0 3px rgba(11,31,75,0.08)" : "none",
    transition: "border-color 120ms ease, box-shadow 120ms ease",
    boxSizing: "border-box",
    resize: multiline ? "vertical" : undefined,
    opacity: disabled ? 0.5 : 1
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 6,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--text-tertiary)",
    style: {
      position: "absolute",
      left: 12,
      top: 13,
      pointerEvents: "none"
    }
  }), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 0,
      height: "var(--input-height)",
      display: "flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-secondary)",
      pointerEvents: "none"
    }
  }, prefix), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldBase
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldBase
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_TABS = [{
  key: "home",
  icon: "house",
  label: "Home"
}, {
  key: "post",
  icon: "plus",
  label: "Post",
  fab: true
}, {
  key: "messages",
  icon: "message-circle",
  label: "Messages"
}, {
  key: "alerts",
  icon: "bell",
  label: "Alerts"
}, {
  key: "profile",
  icon: "user",
  label: "Profile"
}];

/**
 * BottomNav — the persistent 5-tab bar. Post is a gold FAB-style circle.
 * Active tabs are navy; inactive are gray.
 */
function BottomNav({
  active = "home",
  tabs = DEFAULT_TABS,
  onTab,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-around",
      height: "var(--bottom-nav-height)",
      paddingTop: 8,
      background: "var(--white)",
      borderTop: "1px solid var(--border)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), tabs.map(t => {
    const isActive = active === t.key;
    if (t.fab) {
      return /*#__PURE__*/React.createElement("button", {
        key: t.key,
        type: "button",
        onClick: () => onTab && onTab(t.key),
        "aria-label": t.label,
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          marginTop: -6
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
          borderRadius: "var(--radius-full)",
          background: "var(--gold)",
          boxShadow: "0 4px 12px rgba(182,134,44,0.35)"
        }
      }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: "plus",
        size: 26,
        color: "#fff"
      })));
    }
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      type: "button",
      onClick: () => onTab && onTab(t.key),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        flex: 1,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 24,
      color: isActive ? "var(--navy)" : "var(--text-tertiary)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? "var(--navy)" : "var(--text-tertiary)"
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopAppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TopAppBar — navy header. Optional back chevron, centered or left title,
 * and a right slot for a notification bell or avatar.
 */
function TopAppBar({
  title,
  align = "left",
  onBack,
  right = "none",
  rightInitials,
  badge = false,
  onRight,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      height: "var(--top-bar-height)",
      padding: "0 16px",
      background: "var(--header-bg)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), onBack && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    "aria-label": "Back",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 26,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      flex: 1,
      margin: 0,
      fontSize: 17,
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "-0.01em",
      textAlign: align === "center" ? "center" : "left"
    }
  }, title), align === "center" && onBack && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26
    }
  }), right === "bell" && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRight,
    "aria-label": "Notifications",
    style: {
      position: "relative",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 22,
    color: "#fff"
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -2,
      right: -2,
      width: 8,
      height: 8,
      borderRadius: "var(--radius-full)",
      background: "var(--gold)",
      border: "1.5px solid var(--navy)"
    }
  })), right === "avatar" && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRight,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: rightInitials || "PL",
    size: 32,
    tier: "helper"
  })));
}
Object.assign(__ds_scope, { TopAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopAppBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/app.jsx
try { (() => {
/* global React, TASKS, Onboarding, HomeFeed, TaskDetails, PostTask, TaskChat, Profile, Rides, Payments */

// A single self-contained device that routes between PantherLoop screens.
function DeviceApp({
  initial = "home"
}) {
  const [screen, setScreen] = React.useState(initial);
  const [task, setTask] = React.useState(TASKS[0]);
  const go = s => setScreen(s);
  const onTab = k => {
    if (k === "messages") go("chat");else if (k === "profile") go("profile");else go("home"); // home + alerts
  };
  const onPost = () => go("post");
  switch (screen) {
    case "onboarding":
      return /*#__PURE__*/React.createElement(Onboarding, {
        onDone: () => go("home")
      });
    case "details":
      return /*#__PURE__*/React.createElement(TaskDetails, {
        task: task,
        onBack: () => go("home"),
        onAccept: () => go("chat"),
        onMessage: () => go("chat")
      });
    case "post":
      return /*#__PURE__*/React.createElement(PostTask, {
        onBack: () => go("home"),
        onSubmit: () => go("home")
      });
    case "chat":
      return /*#__PURE__*/React.createElement(TaskChat, {
        onBack: () => go("home")
      });
    case "profile":
      return /*#__PURE__*/React.createElement(Profile, {
        onTab: onTab,
        onPost: onPost
      });
    case "rides":
      return /*#__PURE__*/React.createElement(Rides, {
        onTab: onTab,
        onPost: onPost
      });
    case "payments":
      return /*#__PURE__*/React.createElement(Payments, {
        onTab: onTab,
        onPost: onPost
      });
    case "home":
    default:
      return /*#__PURE__*/React.createElement(HomeFeed, {
        onOpenTask: t => {
          setTask(t);
          go("details");
        },
        onTab: onTab,
        onPost: onPost
      });
  }
}
const SCREENS = [{
  key: "onboarding",
  label: "Onboarding · FIU gate"
}, {
  key: "home",
  label: "Home Feed"
}, {
  key: "details",
  label: "Task Details"
}, {
  key: "post",
  label: "Post Task"
}, {
  key: "chat",
  label: "Task Chat"
}, {
  key: "profile",
  label: "Profile"
}, {
  key: "rides",
  label: "Rides"
}, {
  key: "payments",
  label: "Payments"
}];
function Gallery() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 40,
      justifyContent: "center",
      maxWidth: 1380,
      margin: "0 auto"
    }
  }, SCREENS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-secondary)",
      letterSpacing: "0.01em"
    }
  }, s.label), /*#__PURE__*/React.createElement(DeviceApp, {
    initial: s.key
  }))));
}
window.DeviceApp = DeviceApp;
window.Gallery = Gallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/data.jsx
try { (() => {
/* Sample data for the PantherLoop app UI kit. */
const TASKS = [{
  id: "t1",
  title: "Pick up textbook from GC library",
  status: "open",
  location: "GC Building",
  category: "Delivery",
  deadline: "Today 4pm",
  description: "Reserved Organic Chem textbook is at the GC circulation desk. Grab it and drop at PG-5 lobby. I'll be there.",
  posterName: "Maria R.",
  posterInitials: "MR",
  posterTier: "helper",
  rating: 4.9,
  reviews: 38,
  price: 12
}, {
  id: "t2",
  title: "Ride to MMC from West Kendall, 8am",
  status: "open",
  location: "West Kendall",
  category: "Rides",
  deadline: "Tomorrow 8am",
  description: "Need a ride to the Modesto Maidique Campus for an 8:30 lecture. Can split gas + tip.",
  posterName: "Diego C.",
  posterInitials: "DC",
  posterTier: "driver",
  rating: 4.8,
  reviews: 64,
  price: 9
}, {
  id: "t3",
  title: "Calc II tutoring before midterm",
  status: "in-progress",
  location: "Green Library",
  category: "Tutoring",
  deadline: "Thu 6pm",
  description: "Two-hour session on integrals and series. Bring your own notes, I have practice sets.",
  posterName: "Aisha K.",
  posterInitials: "AK",
  posterTier: "helper",
  rating: 5.0,
  reviews: 21,
  price: 40
}, {
  id: "t4",
  title: "Sell: mini fridge, barely used",
  status: "open",
  location: "Lakeview Hall",
  category: "Resell",
  deadline: "This week",
  description: "Dorm mini fridge, clean, works great. Pickup from Lakeview South. Cash or PantherPay.",
  posterName: "Tyler B.",
  posterInitials: "TB",
  posterTier: "none",
  rating: 4.6,
  reviews: 12,
  price: 55
}, {
  id: "t5",
  title: "Print + bind senior project, 60 pages",
  status: "confirmed",
  location: "PG-6 Tech",
  category: "Errand",
  deadline: "Fri noon",
  description: "Color print and spiral bind my capstone. I'll send the PDF. Front desk pickup works.",
  posterName: "Priya S.",
  posterInitials: "PS",
  posterTier: "helper",
  rating: 4.9,
  reviews: 47,
  price: 18
}];
const CATEGORIES = ["All", "Delivery", "Rides", "Tutoring", "Resell", "Errand"];
const CHAT = [{
  from: "them",
  text: "Hey! I'm at the GC desk now, they have the book ready 👍",
  time: "3:42 PM"
}, {
  from: "me",
  text: "Awesome, heading to PG-5 lobby. 10 mins?",
  time: "3:43 PM"
}, {
  from: "them",
  text: "Perfect. I'll wait by the south entrance.",
  time: "3:43 PM"
}, {
  from: "me",
  text: "Here now, navy jacket.",
  time: "3:52 PM"
}, {
  from: "them",
  text: "Got you. Handing it over 🙌",
  time: "3:53 PM"
}];
const TXNS = [{
  id: "x1",
  label: "Calc II tutoring",
  sub: "Aisha K. · Tutoring",
  amount: -40,
  kind: "out",
  status: "Confirmed",
  date: "Jun 14"
}, {
  id: "x2",
  label: "Textbook delivery",
  sub: "You helped Maria R.",
  amount: 12,
  kind: "in",
  status: "Confirmed",
  date: "Jun 13"
}, {
  id: "x3",
  label: "Ride to MMC",
  sub: "In escrow · releases on drop-off",
  amount: -9,
  kind: "escrow",
  status: "In Progress",
  date: "Jun 13"
}, {
  id: "x4",
  label: "Mini fridge sale",
  sub: "You sold to Tyler B.",
  amount: 55,
  kind: "in",
  status: "Confirmed",
  date: "Jun 10"
}, {
  id: "x5",
  label: "Print + bind",
  sub: "Priya S. · Errand",
  amount: 18,
  kind: "in",
  status: "Confirmed",
  date: "Jun 9"
}];
const RIDES = [{
  id: "r1",
  from: "West Kendall",
  to: "MMC Campus",
  time: "8:00 AM",
  seats: 2,
  name: "Diego C.",
  initials: "DC",
  rating: 4.8,
  price: 9,
  mins: 22
}, {
  id: "r2",
  from: "Brickell",
  to: "MMC Campus",
  time: "8:15 AM",
  seats: 3,
  name: "Sofia L.",
  initials: "SL",
  rating: 4.9,
  price: 11,
  mins: 18
}, {
  id: "r3",
  from: "Doral",
  to: "MMC Campus",
  time: "8:30 AM",
  seats: 1,
  name: "Marcus T.",
  initials: "MT",
  rating: 4.7,
  price: 8,
  mins: 26
}];
Object.assign(window, {
  TASKS,
  CATEGORIES,
  CHAT,
  TXNS,
  RIDES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/frame.jsx
try { (() => {
/* global React */
const PL = window.PantherLoopDesignSystem_4d00e2;
const {
  Icon
} = PL;

// iOS-style status bar that sits on the navy header.
function StatusBar({
  dark = false
}) {
  const color = dark ? "var(--text-primary)" : "#fff";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px 0 26px",
      background: dark ? "var(--surface)" : "var(--navy)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color,
      letterSpacing: "-0.01em"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 16,
    color: color
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 16,
    color: color
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 20,
    color: color
  })));
}

// Home indicator pill at the very bottom.
function HomeIndicator({
  light = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: light ? "var(--navy)" : "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 134,
      height: 5,
      borderRadius: 3,
      background: light ? "rgba(255,255,255,0.5)" : "var(--text-tertiary)"
    }
  }));
}

/**
 * PhoneFrame — 390×844 device frame with bezel. Children fill the screen.
 * statusBarDark switches the status bar to dark content (for light headers).
 */
function PhoneFrame({
  children,
  statusBarDark = false,
  homeLight = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      flex: "0 0 auto",
      background: "var(--surface)",
      borderRadius: 44,
      boxShadow: "0 24px 70px rgba(11,31,75,0.28), 0 0 0 11px #0a0e1a, 0 0 0 12px #2a3346",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: statusBarDark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }
  }, children), /*#__PURE__*/React.createElement(HomeIndicator, {
    light: homeLight
  }));
}

// A vertically scrolling content area used inside screens.
function ScrollArea({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      overflowX: "hidden",
      ...style
    }
  }, children);
}
Object.assign(window, {
  PL,
  StatusBar,
  HomeIndicator,
  PhoneFrame,
  ScrollArea
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/screens-chat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, PhoneFrame, ScrollArea, CHAT */
const {
  TopAppBar,
  Avatar,
  Icon,
  StatusBadge
} = window.PantherLoopDesignSystem_4d00e2;
function Bubble({
  from,
  text,
  time
}) {
  const me = from === "me";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: me ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "76%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "9px 13px",
      borderRadius: 16,
      borderBottomRightRadius: me ? 4 : 16,
      borderBottomLeftRadius: me ? 16 : 4,
      background: me ? "var(--navy)" : "var(--white)",
      color: me ? "#fff" : "var(--text-primary)",
      border: me ? "none" : "1px solid var(--border)",
      fontSize: 15,
      lineHeight: 1.4
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-tertiary)",
      marginTop: 3,
      textAlign: me ? "right" : "left"
    }
  }, time)));
}
function TaskChat({
  onBack
}) {
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      gap: 12,
      height: 56,
      padding: "0 12px",
      background: "var(--navy)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 26,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Avatar, {
    initials: "MR",
    tier: "helper",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Maria R."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,0.7)"
    }
  }, "Textbook delivery \xB7 $12")), /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px",
      background: "var(--white)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "Pick up textbook from GC library"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "in-progress"
  })), /*#__PURE__*/React.createElement(ScrollArea, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11,
      color: "var(--text-tertiary)"
    }
  }, "TODAY"), CHAT.map((m, i) => /*#__PURE__*/React.createElement(Bubble, _extends({
    key: i
  }, m))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-tertiary)",
      marginBottom: 6
    }
  }, "PROOF OF DELIVERY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: 120,
      borderRadius: 12,
      border: "1.5px dashed var(--navy)",
      background: "rgba(11,31,75,0.04)",
      color: "var(--navy)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "camera",
    size: 26,
    color: "var(--navy)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Add proof photo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-secondary)"
    }
  }, "Snap the handoff to release escrow"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 12px",
      background: "var(--white)",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "camera",
    size: 24,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      height: 40,
      padding: "0 14px",
      background: "var(--surface)",
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-tertiary)"
    }
  }, "Message Maria\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--navy)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 20,
    color: "#fff"
  }))));
}
window.TaskChat = TaskChat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/screens-chat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/screens-detail.jsx
try { (() => {
/* global React, PhoneFrame, ScrollArea */
const {
  TopAppBar,
  Button,
  StatusBadge,
  Avatar,
  Icon
} = window.PantherLoopDesignSystem_4d00e2;
function MetaRow({
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 0",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, value));
}
function TaskDetails({
  task,
  onBack,
  onAccept,
  onMessage
}) {
  const t = task || {};
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "Task details",
    align: "center",
    onBack: onBack,
    right: "bell"
  }), /*#__PURE__*/React.createElement(ScrollArea, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 600,
      color: "var(--text-primary)",
      lineHeight: 1.25,
      letterSpacing: "-0.01em"
    }
  }, t.title), /*#__PURE__*/React.createElement(StatusBadge, {
    status: t.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, t.location, " \xB7 ", t.category), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "14px 16px",
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "Budget"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "var(--navy)",
      letterSpacing: "-0.02em"
    }
  }, "$", t.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "4px 16px",
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    icon: "map-pin",
    label: "Pickup / location",
    value: t.location
  }), /*#__PURE__*/React.createElement(MetaRow, {
    icon: "clock",
    label: "Deadline",
    value: t.deadline
  }), /*#__PURE__*/React.createElement(MetaRow, {
    icon: "tag",
    label: "Category",
    value: t.category
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "22px 0 8px",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Description"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, t.description), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "22px 0 8px",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Posted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 14px",
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: t.posterInitials,
    tier: t.posterTier,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, t.posterName), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      marginTop: 2,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 13,
    color: "var(--gold)"
  }), t.rating, " \xB7 ", t.reviews, " reviews")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    color: "var(--text-tertiary)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      display: "flex",
      gap: 10,
      padding: "12px 16px",
      background: "var(--white)",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onMessage,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 20,
    color: "var(--navy)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accept",
    iconLeft: "check",
    onClick: onAccept
  }, "Accept \xB7 $", t.price))));
}
window.TaskDetails = TaskDetails;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/screens-detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/screens-feed.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, PhoneFrame, ScrollArea, TASKS, CATEGORIES */
const {
  TopAppBar,
  BottomNav,
  CategoryPill,
  TaskCard,
  Icon
} = window.PantherLoopDesignSystem_4d00e2;
function HomeFeed({
  onOpenTask,
  onTab,
  onPost
}) {
  const [cat, setCat] = React.useState("All");
  const list = cat === "All" ? TASKS : TASKS.filter(t => t.category === cat);
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    homeLight: false
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "PantherLoop",
    right: "bell",
    badge: true,
    onRight: () => onTab("alerts")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 8px",
      background: "var(--white)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 40,
      padding: "0 12px",
      background: "var(--surface)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-tertiary)"
    }
  }, "Search tasks, rides, items\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 16px",
      overflowX: "auto"
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryPill, {
    key: c,
    active: c === cat,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement(ScrollArea, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, cat === "All" ? "Open near you" : cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, list.length, " tasks")), list.map(t => /*#__PURE__*/React.createElement(TaskCard, _extends({
    key: t.id
  }, t, {
    onClick: () => onOpenTask(t)
  }))))), /*#__PURE__*/React.createElement(BottomNav, {
    active: "home",
    onTab: k => k === "post" ? onPost() : onTab(k)
  }));
}
window.HomeFeed = HomeFeed;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/screens-feed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/screens-onboarding.jsx
try { (() => {
/* global React, PhoneFrame, ScrollArea */
const {
  Button,
  Input,
  Icon
} = window.PantherLoopDesignSystem_4d00e2;
function StepDots({
  step,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      justifyContent: "center"
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: i === step ? 22 : 7,
      height: 7,
      borderRadius: 4,
      background: i === step ? "var(--gold)" : "var(--border)",
      transition: "width 160ms ease"
    }
  })));
}
function Onboarding({
  onDone
}) {
  const [step, setStep] = React.useState(0);
  const next = () => step < 2 ? setStep(step + 1) : onDone();
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    statusBarDark: true
  }, /*#__PURE__*/React.createElement(ScrollArea, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "8px 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "12px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark.svg",
    width: "180",
    alt: "PantherLoop"
  })), step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "24px 0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 24,
      background: "var(--navy)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "graduation-cap",
    size: 46,
    color: "var(--gold-light)"
  }))), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 28,
      fontWeight: 600,
      color: "var(--text-primary)",
      textAlign: "center",
      letterSpacing: "-0.02em",
      lineHeight: 1.2
    }
  }, "The campus economy, built for Panthers"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      textAlign: "center"
    }
  }, "Post tasks, earn cash, catch rides, and resell \u2014 all with verified FIU students.")), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "20px 0 0",
      fontSize: 22,
      fontWeight: 600,
      color: "var(--text-primary)",
      letterSpacing: "-0.01em"
    }
  }, "Verify your FIU email"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 24px",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, "Only @fiu.edu addresses can join. We'll send a one-time code."), /*#__PURE__*/React.createElement(Input, {
    label: "FIU email",
    iconLeft: "mail",
    placeholder: "panther@fiu.edu"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "16px 14px",
      marginTop: 20,
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20,
    color: "var(--gold)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.45,
      color: "var(--text-secondary)"
    }
  }, "FIU verification keeps PantherLoop students-only. Your email is never shown publicly."))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "20px 0 0",
      fontSize: 22,
      fontWeight: 600,
      color: "var(--text-primary)",
      letterSpacing: "-0.01em"
    }
  }, "Live selfie check"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 24px",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, "A quick selfie confirms you're a real person. This builds trust across every trade."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 220,
      borderRadius: "50%",
      border: "2px dashed var(--navy)",
      background: "rgba(11,31,75,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scan-face",
    size: 56,
    color: "var(--navy)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--navy)"
    }
  }, "Center your face")))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StepDots, {
    step: step,
    total: 3
  }), /*#__PURE__*/React.createElement(Button, {
    variant: step === 2 ? "accept" : "primary",
    iconLeft: step === 2 ? "camera" : undefined,
    onClick: next
  }, step === 0 ? "Get started" : step === 1 ? "Send code" : "Take selfie & finish"), step === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: "center",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "Already have an account? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--navy)",
      fontWeight: 600
    }
  }, "Log in"))))));
}
window.Onboarding = Onboarding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/screens-onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/screens-payments.jsx
try { (() => {
/* global React, PhoneFrame, ScrollArea, TXNS, BottomNav */
const {
  TopAppBar,
  BottomNav: Nav,
  Button,
  StatusBadge,
  Icon
} = window.PantherLoopDesignSystem_4d00e2;
function TxnRow({
  t
}) {
  const incoming = t.amount > 0;
  const iconName = t.kind === "escrow" ? "lock" : incoming ? "arrow-down-left" : "arrow-up-right";
  const iconBg = t.kind === "escrow" ? "var(--status-progress-bg)" : incoming ? "var(--status-open-bg)" : "var(--surface)";
  const iconColor = t.kind === "escrow" ? "var(--status-progress-fg)" : incoming ? "var(--status-open-fg)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 0",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    size: 18,
    color: iconColor
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: "var(--text-primary)"
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, t.sub, " \xB7 ", t.date)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: incoming ? "var(--gold)" : "var(--navy)",
      whiteSpace: "nowrap"
    }
  }, incoming ? `+$${t.amount}` : `–$${Math.abs(t.amount)}`));
}
function Payments({
  onTab,
  onPost
}) {
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "PantherPay",
    right: "bell"
  }), /*#__PURE__*/React.createElement(ScrollArea, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 16,
      padding: "20px",
      borderRadius: 16,
      background: "var(--navy)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.7)"
    }
  }, "Available balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginTop: 4
    }
  }, "$248.50"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 42,
      borderRadius: 10,
      border: "none",
      background: "var(--gold)",
      color: "#fff",
      fontSize: 15,
      fontWeight: 600,
      fontFamily: "var(--font-sans)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down-to-line",
    size: 18,
    color: "#fff"
  }), " Cash out")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 42,
      borderRadius: 10,
      border: "1px solid rgba(255,255,255,0.3)",
      background: "transparent",
      color: "#fff",
      fontSize: 15,
      fontWeight: 600,
      fontFamily: "var(--font-sans)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    color: "#fff"
  }), " Add money")))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px",
      padding: "14px 16px",
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 16,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--status-progress-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 18,
    color: "var(--status-progress-fg)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "$9.00 in escrow"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, "Ride to MMC \xB7 releases on drop-off")), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "in-progress"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 4px",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Activity"), TXNS.map(t => /*#__PURE__*/React.createElement(TxnRow, {
    key: t.id,
    t: t
  })))), /*#__PURE__*/React.createElement(Nav, {
    active: "home",
    onTab: k => k === "post" ? onPost() : onTab(k)
  }));
}
window.Payments = Payments;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/screens-payments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/screens-post.jsx
try { (() => {
/* global React, PhoneFrame, ScrollArea, CATEGORIES */
const {
  TopAppBar,
  Button,
  Input,
  CategoryPill,
  Icon
} = window.PantherLoopDesignSystem_4d00e2;
function PostTask({
  onBack,
  onSubmit
}) {
  const [cat, setCat] = React.useState("Delivery");
  const cats = CATEGORIES.filter(c => c !== "All");
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "Post a task",
    align: "center",
    onBack: onBack
  }), /*#__PURE__*/React.createElement(ScrollArea, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 120px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Task title",
    placeholder: "e.g. Pick up textbook from library"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 8,
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(CategoryPill, {
    key: c,
    active: c === cat,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Budget",
    prefix: "$",
    placeholder: "0"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Deadline",
    iconLeft: "clock",
    placeholder: "Today 4pm"
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "Location",
    iconLeft: "map-pin",
    placeholder: "GC Building, 2nd floor"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Description",
    multiline: true,
    rows: 4,
    placeholder: "Describe what you need done\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "12px 14px",
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20,
    color: "var(--gold)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.45,
      color: "var(--text-secondary)"
    }
  }, "Your budget is held in ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, "PantherPay escrow"), " and only released when you confirm the task is done.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      padding: "12px 16px",
      background: "var(--white)",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "plus",
    onClick: onSubmit
  }, "Post task")));
}
window.PostTask = PostTask;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/screens-post.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/screens-profile.jsx
try { (() => {
/* global React, PhoneFrame, ScrollArea, BottomNav */
const {
  TopAppBar,
  BottomNav: Nav,
  Avatar,
  Button,
  StatusBadge,
  Icon
} = window.PantherLoopDesignSystem_4d00e2;
function Stat({
  value,
  label,
  gold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: gold ? "var(--gold)" : "var(--navy)",
      letterSpacing: "-0.02em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, label));
}
function HistoryRow({
  title,
  meta,
  status,
  amount
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 0",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: "var(--text-primary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, meta)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: status
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: amount > 0 ? "var(--gold)" : "var(--navy)",
      width: 52,
      textAlign: "right"
    }
  }, amount > 0 ? `+$${amount}` : `$${Math.abs(amount)}`));
}
function Profile({
  onTab,
  onPost
}) {
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "Profile",
    right: "bell"
  }), /*#__PURE__*/React.createElement(ScrollArea, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--navy)",
      padding: "20px 16px 24px",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "MR",
    tier: "helper",
    size: 68
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "-0.01em"
    }
  }, "Maria Reyes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 13,
      color: "rgba(255,255,255,0.85)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 14,
    color: "var(--gold-light)"
  }), " 4.9"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.55)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.85)"
    }
  }, "FIU \xB7 Junior")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      marginTop: 8,
      padding: "3px 10px",
      borderRadius: 20,
      background: "rgba(212,168,67,0.18)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 13,
    color: "var(--gold-light)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--gold-light)"
    }
  }, "VERIFIED HELPER")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      margin: "16px",
      padding: "16px 8px",
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "127",
    label: "Tasks done"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "$1.4k",
    label: "Earned",
    gold: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "98%",
    label: "On time"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "pencil",
    size: "md"
  }, "Edit profile")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "settings",
    size: "md"
  }, "Settings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 4px",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Task history"), /*#__PURE__*/React.createElement(HistoryRow, {
    title: "Textbook delivery",
    meta: "Helped Maria R. \xB7 Jun 13",
    status: "confirmed",
    amount: 12
  }), /*#__PURE__*/React.createElement(HistoryRow, {
    title: "Calc II tutoring",
    meta: "With Aisha K. \xB7 Jun 14",
    status: "in-progress",
    amount: -40
  }), /*#__PURE__*/React.createElement(HistoryRow, {
    title: "Mini fridge sale",
    meta: "Sold to Tyler B. \xB7 Jun 10",
    status: "confirmed",
    amount: 55
  }), /*#__PURE__*/React.createElement(HistoryRow, {
    title: "Ride to MMC",
    meta: "Cancelled \xB7 Jun 8",
    status: "cancelled",
    amount: -9
  }))), /*#__PURE__*/React.createElement(Nav, {
    active: "profile",
    onTab: k => k === "post" ? onPost() : onTab(k)
  }));
}
window.Profile = Profile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/screens-profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pantherloop_app/screens-rides.jsx
try { (() => {
/* global React, PhoneFrame, RIDES, BottomNav */
const {
  BottomNav: Nav,
  Avatar,
  Button,
  Icon
} = window.PantherLoopDesignSystem_4d00e2;
function FauxMap() {
  // Stylized campus map — not a real map tile. Soft roads on the surface color.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "#E9EEF6",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(0deg, rgba(11,31,75,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,75,0.05) 1px, transparent 1px)",
      backgroundSize: "46px 46px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "38%",
      left: "-10%",
      width: "120%",
      height: 14,
      background: "#fff",
      transform: "rotate(-8deg)",
      boxShadow: "0 0 0 1px var(--border)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-10%",
      left: "62%",
      width: 12,
      height: "120%",
      background: "#fff",
      transform: "rotate(6deg)",
      boxShadow: "0 0 0 1px var(--border)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "70%",
      left: "-10%",
      width: "120%",
      height: 10,
      background: "#fff",
      transform: "rotate(4deg)",
      boxShadow: "0 0 0 1px var(--border)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "20%",
      left: "10%",
      width: 120,
      height: 90,
      borderRadius: 10,
      background: "rgba(10,102,64,0.10)",
      border: "1px solid rgba(10,102,64,0.18)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "30%",
      left: "26%",
      transform: "translate(-50%,-100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "3px 8px",
      background: "var(--navy)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 600,
      borderRadius: 6,
      whiteSpace: "nowrap",
      marginBottom: 4
    }
  }, "MMC Campus"), /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 32,
    color: "var(--navy)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "55%",
      left: "55%"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "car-front",
    size: 26,
    color: "var(--gold)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "62%",
      left: "30%"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "car-front",
    size: 22,
    color: "var(--gold-light)"
  })));
}
function RideCard({
  r
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 16,
      padding: "14px 16px",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: r.initials,
    tier: "driver",
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 13,
    color: "var(--gold)"
  }), " ", r.rating, " \xB7 ", r.seats, " seats")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "var(--navy)",
      letterSpacing: "-0.02em"
    }
  }, "$", r.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 12,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-dot",
    size: 14,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, r.from), /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", null, r.time, " \xB7 ", r.mins, " min")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      color: "var(--text-primary)",
      fontWeight: 500,
      marginTop: 4,
      marginLeft: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--navy)",
    style: {
      marginLeft: -22
    }
  }), " ", r.to));
}
function Rides({
  onTab,
  onPost
}) {
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    statusBarDark: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: "0 0 46%"
    }
  }, /*#__PURE__*/React.createElement(FauxMap, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 16,
      right: 16,
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 44,
      padding: "0 14px",
      background: "var(--white)",
      borderRadius: 12,
      boxShadow: "var(--shadow-raised)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, "To MMC Campus"), /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 18,
    color: "var(--navy)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      marginTop: -20,
      borderRadius: "24px 24px 0 0",
      background: "var(--surface)",
      boxShadow: "var(--shadow-sheet)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 5,
      borderRadius: 3,
      background: "var(--border)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 16px 6px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Rides leaving soon"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--gold)",
      fontWeight: 600
    }
  }, "Offer a ride")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "8px 16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, RIDES.map(r => /*#__PURE__*/React.createElement(RideCard, {
    key: r.id,
    r: r
  })))), /*#__PURE__*/React.createElement(Nav, {
    active: "home",
    onTab: k => k === "post" ? onPost() : onTab(k)
  }));
}
window.Rides = Rides;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pantherloop_app/screens-rides.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CategoryPill = __ds_scope.CategoryPill;

__ds_ns.TaskCard = __ds_scope.TaskCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.TopAppBar = __ds_scope.TopAppBar;

})();
