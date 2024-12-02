import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import "./Table.scss";
import ReactConfetti from "react-confetti";

import CardItem from "~/entities/CardItem/CardItem";
import { ModalWindow } from "~/entities/ModalWindow/ModalWindow";

import back from "~/shared/assets/cardBackRed.png";
import { cards } from "~/shared/cards/cards";
import { useAppStore } from "~/shared/lib/hooks/useAppStore";
import { Card } from "~/shared/types";

const HAND_LENGTH = 6;

export const Table = observer(() => {
  const MotionCardItem = motion(CardItem);
  const MotionModalWindow = motion(ModalWindow);

  const deckStore = useAppStore("deckStore");

  const { modalWindow } = deckStore;

  const [deck, setDeck] = useState([...cards]);
  const [aiHand, setAiHand] = useState<Card[] | null>(null);
  const [userHand, setUserHand] = useState<Card[] | null>(null);
  const [playgroundSecondLine, setPlaygroundSecondLine] = useState<
    Card[] | null
  >(null);
  const [playgroundFirstLine, setPlaygroundFirstLine] = useState<Card[] | null>(
    null
  );
  const [trump, setTrump] = useState<Card | null>(null);
  const [isUserWin, setIsUserWin] = useState(false);

  useEffect(() => {
    if (!modalWindow) {
      setDeck(deck.sort(() => Math.random() - 0.5));
      setTrump(deck[0]);
      setUserHand(deck.splice(0, HAND_LENGTH));
      setAiHand(deck.splice(0, HAND_LENGTH));
    }
  }, [modalWindow]);

  useEffect(() => {
    console.log(deck);
  }, [deck, modalWindow]);

  return (
    <div className="container">
      {isUserWin && <ReactConfetti />}
      <AnimatePresence>
        {modalWindow && (
          <MotionModalWindow
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
      </AnimatePresence>
      <div className="deck">
        <div className="cards">
          {deck.length !== 0 && trump && (
            <MotionCardItem
              exit={{ opacity: 0, y: 200 }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              data={trump}
              class={"card"}
            />
          )}
          {deck.length > 1 && trump && (
            <MotionCardItem
              exit={{ opacity: 0, y: 200 }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              data={back}
              class={"horizontal-card"}
            />
          )}
        </div>
      </div>
      <div className="table">
        <div className="ai-area">
          <div className="ai-hand">
            {aiHand?.map((item) => (
              <MotionCardItem
                exit={{ opacity: 0, y: 200 }}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                data={back}
                key={item.id}
                class={"card"}
              />
            ))}
          </div>
        </div>
        <div className="playground">
          <div className="first-line">
            {playgroundFirstLine?.map((item) => (
              <MotionCardItem
                exit={{ opacity: 0, y: 200 }}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                data={item}
                key={item.id}
                class={"card"}
              />
            ))}
          </div>
          <div className="second-line">
            {playgroundSecondLine?.map((item) => (
              <MotionCardItem
                exit={{ opacity: 0, y: 200 }}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                data={item}
                key={item.id}
                class={"card"}
              />
            ))}
          </div>
        </div>
        <div className="user-area">
          <div className="user-hand">
            {userHand?.map((item) => (
              <MotionCardItem
                exit={{ opacity: 0, y: 200 }}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                data={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                key={item.id}
                user={true}
                class={"card"}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="buttons">
        {trump && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn"
            onClick={() => {
              // beat();
            }}
          >
            Бито
          </motion.button>
        )}
        {trump && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn"
            onClick={() => {
              // userTake();
            }}
          >
            Взять
          </motion.button>
        )}
      </div>
    </div>
  );
});
