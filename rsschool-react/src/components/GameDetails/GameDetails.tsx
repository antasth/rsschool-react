import styles from './GameDetails.module.css';

const GameDetails = (): React.ReactElement => {
  // const [GameDetails, setGameDetails] = useState<IGameDetails>([]);
  // const handleGameCardClick = (id: number): void => {
  //   getGameDetails(id);
  // };
  return <h1 className={styles.details}>Game Details</h1>;
};

export { GameDetails };
