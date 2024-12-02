import { forwardRef } from "react";

import { motion } from "framer-motion";

import { useAppStore } from "~/shared/lib/hooks/useAppStore";

export const ModalWindow = forwardRef<HTMLDivElement>((props, ref) => {
  const deckStore = useAppStore("deckStore");

  const { modalText } = deckStore;

  const startGameHandler = () => {
    deckStore.closeModalWindow();
  };

  return (
    <motion.div
      ref={ref}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal"
    >
      <div className="dialogue">
        <div className="txt">{modalText}</div>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={startGameHandler}
        >
          Начать игру
        </motion.button>
      </div>
    </motion.div>
  );
});
