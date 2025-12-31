'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, 'id'>) => void;
  hideToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

const toastConfig = {
  success: {
    icon: CheckCircle2,
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-400',
    progressColor: 'bg-green-500',
  },
  error: {
    icon: XCircle,
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    iconColor: 'text-red-400',
    progressColor: 'bg-red-500',
  },
  warning: {
    icon: AlertCircle,
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
    progressColor: 'bg-yellow-500',
  },
  info: {
    icon: Info,
    bgColor: 'bg-primary-500/10',
    borderColor: 'border-primary-500/30',
    iconColor: 'text-primary-400',
    progressColor: 'bg-primary-500',
  },
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: Toast = { ...toast, id, duration: toast.duration || 5000 };

    setToasts((prev) => [...prev, newToast]);

    // Auto-remove toast after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, newToast.duration);
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[10000] flex flex-col gap-3 max-w-md w-full pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => {
            const config = toastConfig[toast.type];
            const Icon = config.icon;

            return (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className={`
                  pointer-events-auto relative overflow-hidden
                  ${config.bgColor} ${config.borderColor}
                  backdrop-blur-xl border rounded-xl shadow-2xl
                `}
              >
                <div className="p-4 pr-10">
                  <div className="flex gap-3">
                    <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm">
                        {toast.title}
                      </p>
                      {toast.message && (
                        <p className="text-gray-400 text-sm mt-1">
                          {toast.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={() => hideToast(toast.id)}
                  className="absolute top-3 right-3 p-1 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Progress bar */}
                <motion.div
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ duration: (toast.duration || 5000) / 1000, ease: 'linear' }}
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${config.progressColor} origin-left`}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
