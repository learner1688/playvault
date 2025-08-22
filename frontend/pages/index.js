// VaultPlay Home Page (Game Grid)
import Head from 'next/head';
import GameGrid from '../components/GameGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>VaultPlay – Cloud Retro Arcade</title>
        <meta name="description" content="Play retro, PS1, and PSP games instantly in your browser. VaultPlay – Cloud Arcade Platform." />
        <meta property="og:title" content="VaultPlay – Cloud Retro Arcade" />
        <meta property="og:description" content="Play 20 classic games instantly. No downloads." />
      </Head>
      <GameGrid />
    </>
  );
}
