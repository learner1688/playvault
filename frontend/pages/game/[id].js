// Game Detail Page

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Controller from '../../components/Controller';

export default function GameDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGame() {
      setLoading(true);
      try {
        const res = await fetch(`/api/games`);
        const data = await res.json();
        const found = data.find(g => g.id === id);
        setGame(found);
      } catch {
        setGame(null);
      }
      setLoading(false);
    }
    if (id) fetchGame();
  }, [id]);

  if (loading) return <div className="p-8 text-center">Loading game details...</div>;
  if (!game) return <div className="p-8 text-center text-red-400">Game not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Head>
        <title>{game.title} – VaultPlay</title>
        <meta name="description" content={game.description} />
        <meta property="og:title" content={`${game.title} – VaultPlay`} />
        <meta property="og:description" content={game.description} />
        <meta property="og:image" content={game.cover} />
      </Head>
      <h1 className="text-3xl font-bold mb-2 text-center text-yellow-400 drop-shadow">{game.title}</h1>
      <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
        <div className="flex gap-2">
          {game.screenshots.map((src, i) => (
            <img key={i} src={src} alt="screenshot" className="w-32 h-20 object-cover rounded shadow" />
          ))}
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-200 mb-2">{game.description}</p>
          <div className="flex items-center gap-2">
            <span className="bg-blue-700 text-white px-2 py-1 rounded">{game.genre}</span>
            <span className="bg-green-700 text-white px-2 py-1 rounded">{game.platform}</span>
            <span className="ml-2 text-yellow-400 font-bold">{game.release_year}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition">Play Now</button>
        <span className="mt-2 text-sm text-gray-400">No downloads. Play instantly in your browser!</span>
      </div>
      {/* Emulator player placeholder */}
      <div className="bg-black rounded-lg shadow-lg mb-4 flex items-center justify-center h-48">
        <span className="text-gray-500">[Emulator Player Here]</span>
      </div>
      {/* Touch-first game controls layout */}
      <Controller platform={game.platform} />
      <div className="mt-8 text-center text-gray-400 text-xs">VaultPlay – Cloud Retro Arcade Platform</div>
    </div>
  );
}
