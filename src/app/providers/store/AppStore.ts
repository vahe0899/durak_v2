import { makeAutoObservable } from "mobx";

import back from "~/shared/assets/cardBackRed.png";
import { cards } from "~/shared/cards/cards";
import { Card } from "~/shared/types";

export class AppStore {
  userHand: Card[] = [];
  aiHand: Card[] = [];
  playgroundFirstLine: Card[] = [];
  playgroundSecondLine: Card[] = [];
  deck: Card[] = [...cards];
  beatDeck: Card[] = [];
  back: string = back;
  isAiTurn: boolean = false;
  modalWindow: boolean = true;
  trumpCard: Card | null = null;
  trumpSuit: string = "";
  modalText: string =
    "Нажмите на кнопку, чтоб начать игру. Надеюсь, что правила вы помните. Удачи!";
  isUserWin: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  closeModalWindow = () => {
    this.modalWindow = false;
  };

  // take(hand: Card[], line1: Card[], line2: Card[]) {
  //   hand = [...hand, ...line2, ...line1];
  //   line1 = [];
  //   line2 = [];

  //   return { hand, line1, line2 };
  // }

  // userTake = () => {
  //   console.log("take");
  //   if (this.playgroundFirstLine.length === 0) {
  //     alert("Поздравляю! Вы взяли ничего!");
  //     return;
  //   } else {
  //     const takeResult = this.take(
  //       this.userHand,
  //       this.playgroundFirstLine,
  //       this.playgroundSecondLine
  //     );
  //     const distributionResult = this.distribution(
  //       this.aiHand,
  //       this.userHand,
  //       this.deck
  //     );

  //     this.userHand = takeResult.hand;
  //     this.aiHand = [...distributionResult.newAiArray, ...this.aiHand];
  //     this.playgroundFirstLine = takeResult.line1;
  //     this.playgroundSecondLine = takeResult.line2;
  //     this.deck = distributionResult.deckOfCards;
  //     this.isAiTurn = true;
  //   }
  // };

  // beat = () => {
  //   if (this.playgroundFirstLine.length === 0) {
  //     alert("Поздравляю! Вы скинули пустоту в бито!");
  //     return;
  //   } else if (
  //     this.playgroundFirstLine.length > this.playgroundSecondLine.length
  //   ) {
  //     alert("Противник всё видит и осуждает");
  //     return;
  //   } else {
  //     const newHands = this.distribution(this.aiHand, this.userHand, this.deck);
  //     const line1: Card[] = [];
  //     const line2: Card[] = [];

  //     this.aiHand = [...this.aiHand, ...newHands.newAiArray];
  //     this.userHand = [...this.userHand, ...newHands.newUserArray];
  //     this.deck = newHands.deckOfCards;
  //     this.playgroundFirstLine = line1;
  //     this.playgroundSecondLine = line2;
  //     this.isAiTurn = true;
  //   }
  // };

  // start() {
  //   const shuffleResult = this.shuffle(this.deck);
  //   const shuffledDeck = shuffleResult.deck;
  //   //увеличиваем значения козырных карт
  //   shuffledDeck.forEach((element) => {
  //     if (element.suit === shuffleResult.suit) {
  //       element.value = element.value * 3;
  //     }
  //   });

  //   const distributionResult = this.distribution(
  //     this.aiHand,
  //     this.userHand,
  //     this.deck
  //   );

  //   this.isAiTurn = this.turnCheck(
  //     distributionResult.newUserArray,
  //     distributionResult.newAiArray,
  //     shuffleResult.suit
  //   );

  //   if (shuffleResult && shuffleResult.trump) {
  //     this.trumpCard = shuffleResult.trump;
  //   }

  //   this.aiHand = distributionResult.newAiArray;
  //   this.userHand = distributionResult.newUserArray;
  //   this.deck = distributionResult.deckOfCards;
  //   this.trumpSuit = shuffleResult.suit;
  //   this.modalWindow = false;
  // }

  // shuffle(array: Card[]) {
  //   const deck = array.sort(() => Math.random() - 0.5);
  //   const trump = array.pop(); //козырь
  //   let suit: string = "";

  //   if (trump) {
  //     deck.unshift(trump);
  //     suit = trump.suit;
  //   }

  //   return { deck, trump, suit };
  // }

  // //раздача
  // distribution(aiArray: Card[], userArray: Card[], deckOfCards: Card[]) {
  //   const newUserArray: Card[] = [];
  //   const newAiArray: Card[] = [];

  //   for (let i = aiArray.length; i < 6; i++) {
  //     if (deckOfCards.length === 0) break;
  //     const card = deckOfCards.pop();
  //     if (card) {
  //       newAiArray.push(card);
  //     }
  //   }

  //   for (let i = userArray.length; i < 6; i++) {
  //     if (deckOfCards.length === 0) break;
  //     const card = deckOfCards.pop();
  //     if (card) {
  //       newUserArray.push(card);
  //     }
  //   }

  //   return { newAiArray, newUserArray, deckOfCards };
  // }

  // //проверка кто первый ходит
  // turnCheck(userHand: Card[], aiHand: Card[], suit: string) {
  //   //для начала находим все козыри на руках у ИИ и Игрока и их значения
  //   const aiTrumps = aiHand
  //     .filter((item) => item.suit === suit)
  //     .map((item) => item.value);

  //   const userTrumps = userHand
  //     .filter((item) => item.suit === suit)
  //     .map((item) => item.value);
  //   //берём наименьшие карты у обоих игроков и сравниваем их
  //   const aiMinimalTrump = Math.min(...aiTrumps);
  //   const userMinimalTrump = Math.min(...userTrumps);
  //   let turn = true;

  //   if (aiMinimalTrump > userMinimalTrump) {
  //     turn = false;
  //   }

  //   return turn;
  // }

  // userTurn = (id: number, name: string) => {
  //   if (this.deck.length === 0 && this.aiHand.length === 0) {
  //     this.deck = [...cards];
  //     this.userHand = [];
  //     this.aiHand = [];
  //     this.playgroundFirstLine = [];
  //     this.playgroundSecondLine = [];
  //     this.trumpCard = null;
  //     this.trumpSuit = "";
  //     this.modalWindow = true;
  //     this.modalText = "Конец игры. Вы проиграли :(";
  //   } else if (this.deck.length === 0 && this.userHand.length === 0) {
  //     this.deck = [...cards];
  //     this.userHand = [];
  //     this.aiHand = [];
  //     this.playgroundFirstLine = [];
  //     this.playgroundSecondLine = [];
  //     this.trumpCard = null;
  //     this.trumpSuit = "";
  //     this.modalWindow = true;
  //     this.modalText = "Конец игры. Вы выиграли :)";
  //     this.isUserWin = true;
  //   } else {
  //     let userResult;
  //     const action = { id, name };
  //     // проверка на наличие карт на столе и выбор: атаковать или отбиваться
  //     if (
  //       this.playgroundFirstLine.length === this.playgroundSecondLine.length
  //     ) {
  //       userResult = this.userAttack(
  //         this.playgroundFirstLine,
  //         this.playgroundSecondLine,
  //         this.userHand,
  //         action,
  //         this.aiHand
  //       );
  //     } else {
  //       userResult = this.userDefense(
  //         this.playgroundFirstLine,
  //         this.playgroundSecondLine,
  //         this.userHand,
  //         action,
  //         this.trumpSuit
  //       );
  //     }

  //     if (userResult !== undefined) {
  //       this.isAiTurn = true;
  //       this.playgroundFirstLine = userResult.line1;
  //       this.playgroundSecondLine = userResult.line2;
  //       this.userHand = userResult.hand;
  //     }
  //   }
  // };

  // //атака Игрока
  // userAttack(
  //   line1: Card[],
  //   line2: Card[],
  //   hand: Card[],
  //   action: { id: number; name: string },
  //   hand2: Card[]
  // ) {
  //   let index;
  //   let selectedCard;
  //   if (line1.length === 0) {
  //     index = hand.findIndex((item) => item.id === action.id);
  //     selectedCard = hand.splice(index, 1);
  //     line1.push(selectedCard[0]);
  //     return { hand, line1, line2, hand2 };
  //   } else {
  //     const names = [
  //       ...line1.map((item) => item.name),
  //       ...line2.map((item) => item.name),
  //     ];
  //     index = hand.findIndex(
  //       (item) => item.id === action.id && names.includes(action.name)
  //     );
  //     if (index === -1) {
  //       alert("Неверный ход! На столе нет таких карт");
  //     } else {
  //       selectedCard = hand.splice(index, 1);
  //       line1.push(selectedCard[0]);
  //       return { hand, line1, line2, hand2 };
  //     }
  //   }
  // }

  // //защита игрока
  // userDefense(
  //   line1: Card[],
  //   line2: Card[],
  //   hand: Card[],
  //   action: { id: number; name: string },
  //   trump: string
  // ) {
  //   const index = hand.findIndex((item) => item.id === action.id);
  //   const activeCard = line1[line1.length - 1];
  //   if (
  //     (hand[index].suit !== activeCard.suit && hand[index].suit !== trump) ||
  //     hand[index].value < activeCard.value
  //   ) {
  //     alert("Неверный ход!");
  //     return;
  //   }

  //   const selectedCard = hand.splice(index, 1);
  //   line2.push(selectedCard[0]);

  //   return { line1, line2, hand };
  // }

  // aiTurn = () => {
  //   if (this.deck.length === 0 && this.aiHand.length === 0) {
  //     this.deck = [...cards];
  //     this.userHand = [];
  //     this.aiHand = [];
  //     this.playgroundFirstLine = [];
  //     this.playgroundSecondLine = [];
  //     this.trumpCard = null;
  //     this.trumpSuit = "";
  //     this.modalWindow = true;
  //     this.modalText = "Конец игры. Вы проиграли :(";
  //   } else if (this.deck.length === 0 && this.userHand.length === 0) {
  //     this.deck = [...cards];
  //     this.userHand = [];
  //     this.aiHand = [];
  //     this.playgroundFirstLine = [];
  //     this.playgroundSecondLine = [];
  //     this.trumpCard = null;
  //     this.trumpSuit = "";
  //     this.modalWindow = true;
  //     this.modalText = "Конец игры. Вы выиграли :)";
  //     this.isUserWin = true;
  //   } else {
  //     let aiResult;
  //     // проверка на наличие карт на столе и выбор: атаковать или отбиваться
  //     if (
  //       this.playgroundFirstLine.length === this.playgroundSecondLine.length
  //     ) {
  //       aiResult = this.aiAttack(
  //         this.playgroundFirstLine,
  //         this.playgroundSecondLine,
  //         this.aiHand,
  //         this.deck,
  //         this.userHand
  //       );
  //     } else {
  //       aiResult = this.aiDefense(
  //         this.playgroundFirstLine,
  //         this.playgroundSecondLine,
  //         this.aiHand,
  //         this.trumpSuit,
  //         this.userHand,
  //         this.deck
  //       );
  //       console.log(aiResult, ">>>>>> результаты защиты ИИ");
  //     }

  //     this.playgroundFirstLine = aiResult.line1;
  //     this.playgroundSecondLine = aiResult.line2;
  //     this.aiHand = aiResult.hand;
  //     this.userHand = aiResult.hand2;
  //     this.isAiTurn = false;
  //   }
  // };

  // //защита ИИ
  // aiDefense(
  //   line1: Card[],
  //   line2: Card[],
  //   hand: Card[],
  //   trump: string,
  //   hand2: Card[],
  //   deck: Card[]
  // ) {
  //   const activeCard = line1[line1.length - 1];
  //   const index = hand.findIndex(
  //     (item) =>
  //       (item.suit === activeCard.suit && item.value > activeCard.value) ||
  //       (item.suit === trump && item.value > activeCard.value)
  //   );
  //   if (index < 0) {
  //     const result = this.distribution(hand, hand2, deck);
  //     console.log(result);
  //     hand2 = [...result.newUserArray, ...hand2];
  //     console.log(hand2);
  //     const takeResult = this.take(hand, line1, line2);

  //     hand = takeResult.hand;
  //     line1 = takeResult.line1;
  //     line2 = takeResult.line2;
  //   } else {
  //     const selectedCard = hand.splice(index, 1);
  //     line2.push(selectedCard[0]);
  //   }

  //   return { line1, line2, hand, hand2, deck };
  // }

  // //атака ИИ
  // aiAttack(
  //   line1: Card[],
  //   line2: Card[],
  //   hand: Card[],
  //   deck: Card[],
  //   hand2: Card[]
  // ) {
  //   let index;
  //   let selectedCard;
  //   if (line1.length === 0) {
  //     index = Math.floor(Math.random() * hand.length);
  //     selectedCard = hand.splice(index, 1);
  //     line1.push(selectedCard[0]);
  //   } else {
  //     const names = [
  //       ...line1.map((item) => item.name),
  //       ...line2.map((item) => item.name),
  //     ];
  //     index = hand.findIndex((item) => names.includes(item.name));
  //     if (index === -1) {
  //       alert("Бито");
  //       const newHands = this.distribution(hand, hand2, deck);
  //       hand = [...hand, ...newHands.newAiArray];
  //       hand2 = [...hand2, ...newHands.newUserArray];
  //       line1 = [];
  //       line2 = [];
  //       return { hand, line1, line2, hand2 };
  //     } else {
  //       selectedCard = hand.splice(index, 1);
  //       line1.push(selectedCard[0]);
  //     }
  //   }

  //   return { hand, line1, line2, hand2 };
  // }
}
