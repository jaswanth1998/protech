import { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { LuZoomIn, LuZoomOut, LuMaximize2, LuRotateCcw, LuX } from 'react-icons/lu';

const btnBase =
  'inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1';

function Toolbar({ zoomIn, zoomOut, resetTransform, onExpand, onClose, dark = false }) {
  const btn = dark
    ? `${btnBase} bg-white/10 text-white hover:bg-white/20`
    : `${btnBase} bg-white/95 text-navy-dark shadow-sm hover:bg-white`;
  const tray = dark
    ? 'flex gap-1.5 rounded-lg bg-navy-dark/70 p-1.5 backdrop-blur'
    : 'flex gap-1.5 rounded-lg bg-gray-100/90 p-1 backdrop-blur-sm shadow-md';

  return (
    <div className={tray}>
      <button type="button" className={btn} onClick={() => zoomIn()} aria-label="Zoom in">
        <LuZoomIn aria-hidden="true" />
      </button>
      <button type="button" className={btn} onClick={() => zoomOut()} aria-label="Zoom out">
        <LuZoomOut aria-hidden="true" />
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => resetTransform()}
        aria-label="Reset zoom"
      >
        <LuRotateCcw aria-hidden="true" />
      </button>
      {onExpand && (
        <button type="button" className={btn} onClick={onExpand} aria-label="Open fullscreen">
          <LuMaximize2 aria-hidden="true" />
        </button>
      )}
      {onClose && (
        <button type="button" className={btn} onClick={onClose} aria-label="Close fullscreen">
          <LuX aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

function ZoomableImage({ src, alt, className = '', imgClassName = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const inlineCfg = {
    initialScale: 1,
    minScale: 1,
    maxScale: 4,
    doubleClick: { mode: 'zoomIn', step: 0.7 },
    // Require Ctrl/Cmd modifier so page scroll isn't hijacked.
    wheel: { step: 0.15, activationKeys: ['Control', 'Meta'] },
    pinch: { step: 5 },
    panning: { velocityDisabled: true },
  };

  const fullCfg = {
    initialScale: 1,
    minScale: 0.5,
    maxScale: 10,
    doubleClick: { mode: 'zoomIn', step: 0.7 },
    wheel: { step: 0.2 },
    pinch: { step: 5 },
    centerOnInit: true,
    panning: { velocityDisabled: true },
  };

  return (
    <>
      <div className={`group relative w-full overflow-hidden ${className}`}>
        <TransformWrapper {...inlineCfg}>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <TransformComponent
                wrapperStyle={{ width: '100%', height: '100%' }}
                contentStyle={{ width: '100%', height: '100%' }}
              >
                <img
                  src={src}
                  alt={alt}
                  className={`h-full w-full cursor-zoom-in object-contain ${imgClassName}`}
                  loading="lazy"
                  draggable={false}
                />
              </TransformComponent>

              <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end p-2 opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                <div className="pointer-events-auto">
                  <Toolbar
                    zoomIn={zoomIn}
                    zoomOut={zoomOut}
                    resetTransform={resetTransform}
                    onExpand={() => setIsOpen(true)}
                  />
                </div>
              </div>

              <div
                className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-white/85 px-2 py-0.5 text-xs text-navy shadow-sm backdrop-blur-sm transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                aria-hidden="true"
              >
                <span className="hidden md:inline">Ctrl/⌘ + scroll · double-click · or expand</span>
                <span className="md:hidden">Pinch · double-tap · or expand</span>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close fullscreen"
            tabIndex={-1}
            className="absolute inset-0 cursor-default focus:outline-none"
            onClick={() => setIsOpen(false)}
          />
          <TransformWrapper {...fullCfg}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="pointer-events-none absolute right-4 top-4 z-10">
                  <div className="pointer-events-auto" ref={closeBtnRef}>
                    <Toolbar
                      zoomIn={zoomIn}
                      zoomOut={zoomOut}
                      resetTransform={resetTransform}
                      onClose={() => setIsOpen(false)}
                      dark
                    />
                  </div>
                </div>

                <TransformComponent
                  wrapperStyle={{ width: '100vw', height: '100vh' }}
                  contentStyle={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="max-h-[92vh] max-w-[96vw] select-none object-contain"
                    draggable={false}
                  />
                </TransformComponent>

                <div
                  className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                  aria-hidden="true"
                >
                  Scroll · pinch · double-click to zoom · Esc to close
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      )}
    </>
  );
}

export default ZoomableImage;
