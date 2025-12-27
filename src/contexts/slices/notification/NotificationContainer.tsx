// src/contexts/slices/notification/NotificationContainer.tsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, Toaster, type ToastT } from 'sonner';
import { type RootState, type AppDispatch } from '@contexts/store';
import { dismissNotification, nextNotification } from './notificationSlice';

export const NotificationContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { current, visible, queue } = useSelector((state: RootState) => state.notification);

  const handleDismiss = () => {
    dispatch(dismissNotification());
    console.log('handleDismiss icerisinde current', current);
  };
  const nextFunction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    dispatch(nextNotification());
  };
  useEffect(() => {
    if (!current && queue.length > 0) {
      // 500 ms'lik bir bekleme ekliyoruz
      nextFunction();
    }
  }, [current, queue.length, dispatch]);

  useEffect(() => {
    if (current && current.message && visible) {
      const toastOptions: ToastT = {
        id: current.id || '',
        duration: current.duration ?? 2000,
        onAutoClose: handleDismiss,
      };

      if (current.actionLabel && current.onActionPress) {
        toastOptions.action = {
          label: current.actionLabel,
          onClick: () => {
            current.onActionPress?.();
          },
        };
      }

      // Toast tipine göre uygun sonner fonksiyonunu çağır
      switch (current.type) {
        case 'success':
          toast.success(current.message, toastOptions);
          break;
        case 'error':
          toast.error(current.message, toastOptions);
          break;
        case 'info':
        default:
          toast.info(current.message, toastOptions);
          break;
      }
    }
  }, [current, visible, handleDismiss]);

  // Bu component sadece toast'ları tetikler, UI render etmez
  return <Toaster position={'bottom-center'} />;
};
