// GameGrid: displays all games in a grid with screenshots, trending, and recently played

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GameGrid() {

  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/games');
        if (!res.ok) throw new Error('Failed to fetch games');
        const data = await res.json();
        setGames(data);
      } catch (err) {
        setError('Unable to load games. Please try again later.');
        setGames([]);
      }
      setLoading(false);
    }
    fetchGames();
  }, []);

  const filteredGames = games.filter(g =>
    g.title.toLowerCase().includes(search.toLowerCase()) ||
    g.genre.toLowerCase().includes(search.toLowerCase())
  );
  const trendingGames = games.filter(g => g.trending);
  const recentlyPlayedGames = games.filter(g => g.recently_played);

  if (loading) return (
    <div className="p-8 text-center text-gray-400">
      <div className="animate-pulse flex flex-wrap gap-4 justify-center">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-800 rounded-lg p-4 w-40 h-32" />
        ))}
      </div>
      <div className="mt-4">Loading games...</div>
    </div>
  );
  if (error) return <div className="p-8 text-center text-red-400">{error}</div>;

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col md:flex-row gap-2 items-center justify-between">
        <input
          type="text"
          placeholder="Search games..."
          className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 w-full md:w-1/3"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <span className="bg-blue-700 text-white px-2 py-1 rounded">Trending</span>
          <span className="bg-green-700 text-white px-2 py-1 rounded">Recently Played</span>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">Trending Games</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingGames.map(game => (
            <Link key={game.id} href={`/game/${game.id}`}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 text-white shadow-lg hover:scale-105 transition cursor-pointer">
                <img src={game.cover} alt={game.title} className="w-full h-24 object-cover rounded mb-2" />
                <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                <p className="text-sm text-gray-300">{game.genre} – {game.platform}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-green-400 mb-2">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentlyPlayedGames.map(game => (
            <Link key={game.id} href={`/game/${game.id}`}>
              <div className="bg-gray-800 rounded-lg p-4 text-white shadow hover:scale-105 transition cursor-pointer">
                <img src={game.cover} alt={game.title} className="w-full h-24 object-cover rounded mb-2" />
                <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                <p className="text-sm text-gray-300">{game.genre} – {game.platform}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-white mb-2">All Games</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredGames.map(game => (
            <Link key={game.id} href={`/game/${game.id}`}>
              <div className="bg-gray-900 rounded-lg p-4 text-white shadow hover:scale-105 transition cursor-pointer">
                <img src={game.cover} alt={game.title} className="w-full h-24 object-cover rounded mb-2" />
                <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                <p className="text-sm text-gray-300">{game.genre} – {game.platform}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
