import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
/**
 * Simple modal dialog built with Radix UI's Dialog primitives.
 */
function Modal({ trigger, title, children, open, onOpenChange, firstName, lastName, }) {
    if (!open || !firstName || !lastName)
        return null;
    const [live, setLive] = useState('');
    return (_jsxs(Dialog.Root, { open: open, onOpenChange: (o) => {
            onOpenChange?.(o);
            setLive(o ? 'Dialog opened' : 'Dialog closed');
        }, children: [trigger && _jsx(Dialog.Trigger, { asChild: true, children: trigger }), _jsxs(Dialog.Portal, { children: [_jsx(Dialog.Overlay, { className: "fixed inset-0 bg-black/50" }), _jsxs(Dialog.Content, { role: "alertdialog", "aria-modal": "true", "aria-labelledby": "modal-title", className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-lg", children: [title && (_jsx(Dialog.Title, { id: "modal-title", className: "mb-2 font-bold", children: title })), _jsxs("div", { children: [firstName, " ", lastName] }), _jsx("div", { children: children }), _jsx(Dialog.Close, { asChild: true, children: _jsx("button", { className: "mt-4", "aria-label": "Close", children: "Close" }) })] })] }), _jsx("div", { "aria-live": "assertive", className: "sr-only", children: live })] }));
}
export { Modal };
export default Modal;
