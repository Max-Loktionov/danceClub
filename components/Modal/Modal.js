import { useState, useEffect } from "react";
import ClientOnlyPortal from "../../services/ClientOnlyPortal";
import style from "./modal.module.scss";

function Modal(props) {
  const onBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      props.onClose();
    }
  };
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.code === "Escape") {
        props.onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <>
      {props.isModalOpen && (
        <ClientOnlyPortal selector="#modal">
          <div className={style.overlay} onClick={onBackdrop}>
            <div className={style.modal}>
              {props.children}
              <button type="button" onClick={() => props.onClose()}>
                x
              </button>
            </div>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
}

export default Modal;
// ===================================
/*
import { useState, useEffect } from "react";
import ClientOnlyPortal from "../../services/ClientOnlyPortal";

export default function Modal(props) {
  const [open, setOpen] = useState();
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
  });

  const onBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      () => setOpen(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.code === "Escape") {
      props.onClose();
    }
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <div className={style.overlay} onClick={onBackdrop}>
            <div className={style.modal}>
              {props.children}
              <div />
              {/* <p>
                This modal is rendered using{" "}
                <a
                  href="https://reactjs.org/docs/portals.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portals
                </a>
                .
              </p> 
              <button type="button" onClick={() => setOpen(false)}>
                Close Modal
              </button>
            </div>
             <style jsx>{`
              :global(body) {
                overflow: hidden;
              }
              .backdrop {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.7);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
              }
              .modal {
                background-color: white;
                position: absolute;
                top: 10%;
                right: 10%;
                bottom: 10%;
                left: 10%;
                padding: 1em;
              }
            `}</style> 
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
}*/
