import { useEffect, useRef, useState } from 'react';
import { useBottomSheetContext } from './context';

const useDrag = (onClose?: () => void, isDragable?: boolean) => {
  const draghandleRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [initialCursorY, setInitialCursorY] = useState<number>(0);
  const [cursorY, setCursorY] = useState<number>(0);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const delta = cursorY - initialCursorY;

  const onTouchStart = (e: TouchEvent) => {
    const [{ screenY }] = e.changedTouches;
    setInitialCursorY(screenY);
    setCursorY(screenY);
  };

  const onTouchMove = (e: TouchEvent) => {
    setCursorY(e.changedTouches[0].screenY);
  };

  const onTouchEnd = () => {
    const ref = panelRef?.current;
    if (!ref || !isDragable) {
      return;
    }
    if (delta > ref.clientHeight / 2) {
      ref.style.transform = `translateY(${ref.clientHeight}px)`;
      setIsClosing(true);
      setTimeout(() => {
        onClose && onClose();
      }, 210);
    } else {
      setInitialCursorY(0);
      setCursorY(0);
    }
  };

  const clickOutsideClose = () => {
    const ref = panelRef?.current;
    if (!ref || !isDragable) {
      return;
    }
    ref.style.transform = `translateY(${ref.clientHeight}px)`;
    setIsClosing(true);
    setTimeout(() => {
      onClose && onClose();
    }, 210);
  };

  useEffect(() => {
    const ref = draghandleRef?.current;

    if (!ref || !isDragable) {
      return;
    }
    ref.addEventListener('touchstart', onTouchStart);
    ref.addEventListener('touchmove', onTouchMove);
    ref.addEventListener('touchend', onTouchEnd);
    return () => {
      ref.removeEventListener('touchstart', onTouchStart);
      ref.removeEventListener('touchmove', onTouchMove);
      ref.removeEventListener('touchend', onTouchEnd);
    };
  }, [draghandleRef, onTouchStart, onTouchMove, onTouchEnd]);

  useEffect(() => {
    const ref = panelRef?.current;
    if (!ref || !isDragable) {
      return;
    }
    if (delta > 0) {
      ref.style.transform = `translateY(${delta}px)`;
    } else {
      setTimeout(() => {
        ref.style.transform = 'translateY(0)';
      }, 0);
    }
  }, [delta, panelRef]);

  useEffect(() => {
    setTimeout(() => {
      contentRef?.current && (contentRef.current.scrollTop = 0);
      panelRef?.current && (panelRef.current.scrollTop = 0);
    }, 0);
  }, [contentRef, panelRef]);

  const { bottomSheetChildren, dispatch } =
    useBottomSheetContext('BottomSheet.Panel');

  const hasDraghandle = bottomSheetChildren?.includes('Draghandle');
  useEffect(() => {
    if (hasDraghandle) {
      dispatch?.({ type: 'RegisterDraghandleRef', draghandleRef });
    }
  }, [hasDraghandle, bottomSheetChildren, dispatch, draghandleRef]);

  return {
    isTransition: delta === 0 || isClosing,
    draghandleRef,
    panelRef,
    contentRef,
    hasDraghandle,
    clickOutsideClose,
  };
};

export default useDrag;
