import { ReactNode } from 'react';
type ModalProps = {
    trigger?: ReactNode;
    title?: ReactNode;
    children: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    firstName?: string;
    lastName?: string;
};
declare function ModalPop({ trigger, title, children, open, onOpenChange, firstName, lastName, }: ModalProps): import("react/jsx-runtime").JSX.Element;
export { ModalPop };
export default ModalPop;
