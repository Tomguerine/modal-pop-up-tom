"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalPop = ModalPop;
const jsx_runtime_1 = require("react/jsx-runtime");
// src/Modal.tsx (dans TON MODULE NPM)
const react_1 = require("react");
const Dialog = __importStar(require("@radix-ui/react-dialog"));
const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    zIndex: 9998,
};
const contentStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: 16,
    borderRadius: 8,
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    zIndex: 9999,
    maxWidth: 560,
    width: 'calc(100% - 32px)',
};
function ModalPop({ trigger, title, children, open, onOpenChange, firstName, lastName, }) {
    const [internalOpen, setInternalOpen] = (0, react_1.useState)(false);
    const [live, setLive] = (0, react_1.useState)('');
    const isControlled = open !== undefined;
    const currentOpen = isControlled ? open : internalOpen;
    if (!firstName || !lastName) {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [trigger, (0, jsx_runtime_1.jsx)("p", { role: "alert", children: "First and last name are required." })] }));
    }
    return ((0, jsx_runtime_1.jsxs)(Dialog.Root, { open: currentOpen, onOpenChange: (o) => {
            if (!isControlled)
                setInternalOpen(o);
            onOpenChange?.(o);
            setLive(o ? 'Dialog opened' : 'Dialog closed');
        }, children: [trigger && (0, jsx_runtime_1.jsx)(Dialog.Trigger, { asChild: true, children: trigger }), (0, jsx_runtime_1.jsxs)(Dialog.Portal, { children: [(0, jsx_runtime_1.jsx)(Dialog.Overlay, { style: overlayStyle }), (0, jsx_runtime_1.jsxs)(Dialog.Content, { role: "alertdialog", "aria-modal": "true", "aria-labelledby": "modal-title", style: contentStyle, children: [title && ((0, jsx_runtime_1.jsx)(Dialog.Title, { id: "modal-title", style: { marginBottom: 8, fontWeight: 700 }, children: title })), (0, jsx_runtime_1.jsx)("div", { children: children }), (0, jsx_runtime_1.jsx)(Dialog.Close, { asChild: true, children: (0, jsx_runtime_1.jsx)("button", { style: {
                                        marginTop: 16,
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        border: '1px solid #ddd',
                                        background: '#f9f9f9',
                                    }, "aria-label": "Close", children: "Close" }) })] })] }), (0, jsx_runtime_1.jsx)("div", { "aria-live": "assertive", className: "sr-only", children: live })] }));
}
exports.default = ModalPop;
