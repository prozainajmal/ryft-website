// Content for the landing page lists, taken from the design.

export const RANKS = [
  { src: 'img/ef2a96d3148fbeb91a7ede74fcc83108.webp', name: 'Iron', color: '#9AA1AA' },
  { src: 'img/8390f59352d56c18ddeeae4e5a566653.webp', name: 'Bronze', color: '#C08A5A' },
  { src: 'img/7919711cf2cbb5769131d50ba67062bf.webp', name: 'Silver', color: '#C9D0D8' },
  { src: 'img/ba4047bdaa690f29d9e522d2fdcf4bb9.webp', name: 'Gold', color: '#E7B649' },
  { src: 'img/7871f7f55b1b61db10aeb28f2d24c556.webp', name: 'Platinum', color: '#4FC9D9' },
  { src: 'img/4351967924f89de471b21f204c2ff488.webp', name: 'Diamond', color: '#C98CF0' },
  { src: 'img/1c63e9cca313fce0a1c711875f8b1b3b.webp', name: 'Ascendant', color: '#2FC28B' },
  { src: 'img/db2c5a28bed5f4a25568361a6f87b439.webp', name: 'Immortal', color: '#F0627F' },
  { src: 'img/d5bfc59279d899c7c190fcc82ea82169.webp', name: 'Radiant', color: '#FFEFA8' },
];

export const AGENTS = [
  ['Astra', 'astra'], ['Breach', 'breach'], ['Brimstone', 'brimstone'], ['Chamber', 'chamber'], ['Clove', 'clove'],
  ['Cypher', 'cypher'], ['Deadlock', 'deadlock'], ['Fade', 'fade'], ['Gekko', 'gekko'], ['Harbor', 'harbor'],
  ['Hush', 'hush'], ['Iso', 'iso'], ['Jett', 'jett'], ['KAY/O', 'kay-o'], ['Killjoy', 'killjoy'],
  ['Miks', 'miks'], ['Neon', 'neon'], ['Omen', 'omen'], ['Phoenix', 'phoenix'], ['Raze', 'raze'],
  ['Reyna', 'reyna'], ['Sage', 'sage'], ['Skye', 'skye'], ['Sova', 'sova'], ['Tejo', 'tejo'],
  ['Veto', 'veto'], ['Viper', 'viper'], ['Vyse', 'vyse'], ['Waylay', 'waylay'], ['Yoru', 'yoru'],
].map(([name, file]) => ({ name, src: `agents/${file}.webp` }));

export const FEATURES = [
  ['b2c0c3caaa8d2dbf2cb696489f7f163b', 'X', 'Encrypted account vault', 'Every Riot account behind one PIN, AES-256 encrypted, never leaves your PC.', 'Round 1', '#r1'],
  ['80fa83b155bd3822616f4440385b3474', 'E', 'One-click launch & login', 'RYFT opens the Riot Client, signs in and starts Valorant for you.', 'Round 1', '#r1'],
  ['6903eda5308ddf29ae102cc854f2d148', 'C', 'Saved sessions', 'Switch back to an account without typing a password or a login code.', 'Round 1', '#r1'],
  ['653afac0a6b68f7fe2ff1e9419dfcbbf', 'Q', 'Live lobby ranks', 'Your team’s ranks in agent select, all ten players once the match loads.', 'Round 2', '#r2'],
  ['fd5be6206361568689d85e0cf1752eeb', 'E', 'Match history', 'Every game with scoreboards, rounds, MVPs, ADR and headshot %.', 'Round 3', '#r3'],
  ['e04908f2f96809394ea885b8eefa28a2', 'C', 'Deep breakdowns', 'Agents, weapons, maps, RR changes and your rank every act.', 'Round 3', '#r3'],
  ['bd09840b9b76bd261fe2753f59788dec', 'X', 'Player lookup', 'Any Riot ID becomes a full profile you can compare with your own.', 'Round 4', '#r4'],
  ['3b213b7f88d79372ab4ff3a325afa9ce', 'Q', 'Leaderboards', 'Top ranked players in six regions, with their player cards.', 'Round 4', '#r4'],
].map(([id, key, title, body, tag, href]) => ({ icon: `img/${id}.webp`, key, title, body, tag, href }));

export const GUNS = [
  { src: 'img/71b507e7725328939b10c0728c7839c4.webp', name: 'Vandal', delay: '0s' },
  { src: 'img/956f991d31c3eccbe3b098bceb85776b.webp', name: 'Phantom', delay: '-1.5s' },
  { src: 'img/af41237d37dc10a1299268f81bf6e97e.webp', name: 'Operator', delay: '-3s' },
  { src: 'img/7ad6e950920aaf53214cb86373c3bfc9.webp', name: 'Sheriff', delay: '-4.5s' },
  { src: 'img/e73d387e3c2e67f994a95e0efad903d3.webp', name: 'Spectre', delay: '-2s' },
];

export const COMPARE = [
  ['Encrypted vault for all your Riot accounts', 'No', 'no'],
  ['One-click launch and login', 'No', 'no'],
  ['Ranks during agent select', 'No', 'no'],
  ['Match history and scoreboards', 'Yes', 'yes'],
  ['Look up any player', 'Yes', 'yes'],
  ['Works without opening a browser', 'No', 'no'],
  ['Official game art, works offline', 'Online only', 'no'],
].map(([what, web, cls]) => ({ what, web, cls }));

export const FAQS: [string, string][] = [
  ['Is RYFT free?', 'Yes. RYFT is a free download for Windows 10 and 11.'],
  ['Where are my passwords stored?', 'Only on your PC, in a vault file encrypted with AES-256 using a key made from your PIN. RYFT has no servers and no account system.'],
  ['Does RYFT touch the game?', 'No. It never reads Valorant’s memory or injects anything. Live match data comes from the Riot Client’s own local connection on your PC.'],
  ['Do I need to set anything up for stats?', 'No. Stats, match history and leaderboards work as soon as you link your Riot ID — there’s nothing else to paste in.'],
  ['How do updates work?', 'RYFT checks for a new version every time it starts and updates itself, so you’re always on the latest release.'],
  ['Can I see the enemy team in agent select?', 'Riot only sends the enemy team once the match loads. In agent select you see your own team; the enemies appear automatically a few seconds later.'],
  ['What about players who hide their name?', 'They stay hidden. If someone turned on “Hide my name”, RYFT only shows their agent — never their name or rank.'],
];

export const ROADMAP = [
  ['RR session tracker', 'See how much RR you’ve won or lost today, set a rank goal, and keep it on top of the game in a small widget.'],
  ['Multi-account dashboard', 'Rank, RR and last match for every account in your vault on one screen, plus a quick party rank check.'],
  ['Discord Rich Presence', 'Show your rank and current match on your Discord profile.'],
];

/** Release notes by version. Versions not listed here show the release name from GitHub. */
export const RELEASE_NOTES: Record<string, { title: string; body: string }> = {
  '0.3.0': { title: 'Store, wishlist and live match intel', body: 'Check your daily store and wishlist skins, see parties, recent form and repeat opponents in live matches, plus Coach tips and pro crosshairs.' },
  '0.2.1': { title: 'Start with Windows', body: 'Choose whether RYFT opens when Windows starts — during install or any time in Settings.' },
  '0.2.0': { title: 'Stats work out of the box', body: 'No setup needed for stats, automatic updates, and a theme you can make your own.' },
};
