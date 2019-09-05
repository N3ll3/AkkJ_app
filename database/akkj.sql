-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  jeu. 05 sep. 2019 à 20:22
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `akkj`
--

-- --------------------------------------------------------

--
-- Structure de la table `bgame`
--

DROP TABLE IF EXISTS `bgame`;
CREATE TABLE IF NOT EXISTS `bgame` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `difficulty_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` int(11) NOT NULL,
  `min_nb_players` int(11) NOT NULL,
  `max_nb_players` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_27BF3DA0FCFA9DAE` (`difficulty_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `bgame`
--

INSERT INTO `bgame` (`id`, `difficulty_id`, `name`, `description`, `duration`, `min_nb_players`, `max_nb_players`, `image`) VALUES
(3, 4, 'The 7th Continent', '<p>It&#39;s the early 20th century. You have decided to sail back to the newly discovered seventh continent to attempt to lift the terrible curse that has struck you since your return from the previous expedition. In The 7th Continent, a solo or cooperative &quot;choose-your-own-adventure&quot; exploration board game, you choose a character and begin your adventure on your own or with a team of other explorers. Inspired by the Fighting Fantasy book series, you will discover the extent of this wild new land through a variety of terrain and event cards. In a land fraught with danger and wonders, you have to use every ounce of wit and cunning to survive, crafting tools, weapons, and shelter to ensure your survival. Unlike most board games, it will take you many, MANY hours of exploring and searching the seventh continent until you eventually discover how to remove the curse(s)...or die trying. The 7th Continent features an easy saving system so that you can stop playing at any time and resume your adventure later on, just like in a video game!</p>', 1000, 1, 4, 'https://cf.geekdo-images.com/original/img/iQDBaRJ2LxJba_M7gPZj24eHwBc=/0x0/pic2648303.jpg'),
(4, 4, 'Chronicles of Crime', '<p>Chronicles of Crime is a cooperative game of crime investigation, mixing an app, a board game and a touch of Virtual Reality. With the same physical components (board, locations, characters and items), players will be able to play plenty of different scenarios and solve as many different crime stories. Players start the app, choose the scenario they want to play, and follow the story. The goal being to catch the killer of the current case in the shortest short time possible. Using the Scan&amp;Play technology, each component (locations, characters, items, etc.) has a unique QR code, which, depending on the scenario selected, will activate and trigger different clues and stories. That means players will be able to get new stories way after the game is released simply by downloading the app&#39;s updates, without any shipping of new physical components involved. The VR experience only requires a mobile phone. Players simply put the VR glasses (optional buy) onto their mobile device, and put the VR glasses on their nose, holding their mobile device in front of their eyes, to immerse themselves in the game&#39;s universe and search for clues in a virtual world. The game comes with 1 tutorial and 5 scenarios, but more can be downloaded directly inside the app! Each session last around 1h to 1h30 minutes and many scenarios are connected to each others in order to tell a much bigger story. &mdash;description from the publisher (Espa&ntilde;ol) Londres, en la actualidad. Acabas de dejar la oficina del Jefe de Polic&iacute;a. Un cuerpo ha sido hallado en Hyde Park, y tu jefe te acaba de asignar el caso. No es tu primera investigaci&oacute;n, pero algo te dice que este caso no es como los dem&aacute;s. Centras tu cabeza, inicias la maquinaria y te diriges a la escena del crimen. &iexcl;Es hora de trabajar! Cr&oacute;nicas del Crimen es un juego cooperativo de investigaci&oacute;n criminal. El uso de la tecnolog&iacute;a Escanea &amp; Juega mezcla los juegos digitales con los de tablero, permitiendo multitud de historias sobre investigaci&oacute;n criminal utilizando los mismos componentes. &iexcl;Interroga a los sospechosos, recoge pruebas, y arresta al asesino antes de que sea demasiado tarde!</p>', 90, 1, 4, 'https://cf.geekdo-images.com/original/img/JRE8PpskKmoIQ3R5WZZUOy7nQLw=/0x0/pic4317519.jpg'),
(5, 2, 'Gang Rush Breakout', '<p>Description from the publisher: When the members of the underworld start to cross the bridge that leads to their headquarters, nobody knows who will reach the other side. Dash, crash, and cash in Gang Rush Breakout &mdash; whoever meets the Godfather with the most loot wins!</p>', 45, 3, 5, 'https://cf.geekdo-images.com/original/img/d1tk0ANbcaIVboDI6HSDMVQ4h-Y=/0x0/pic3329425.jpg'),
(6, 2, 'Schotten Totten', '<p>In Schotten Totten, nine boundary stones lie between you and your opponent. In front of each, you build poker-like formations of three cards on a side. Whoever plays the higher-ranking formation wins the stone. And in a unique twist, you may use your powers of logic to claim a stone even before your opponent has played all three of his cards, by demonstrating that the stone is impossible for him to win. Successfully claim five stones, or any three adjacent stones, and you win the game. In 2000 GMT published a rethemed version as Battle Line which includes an extra 10 &quot;tactics&quot; cards that modify the standard game play, and with cards that run from 1 to 10 (instead of 1 to 9). The 2004 Edition of Schottentotten has these &quot;tactics&quot; cards too. Schotten-Totten FAQ.</p>', 20, 2, 2, 'https://cf.geekdo-images.com/original/img/AGu9cA6dK9POOBnE07f935TSTLQ=/0x0/pic2932872.jpg'),
(7, 2, 'Splendor', '<p>Splendor is a game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops&mdash;all in order to acquire the most prestige points. If you&#39;re wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige. On your turn, you may (1) collect chips (gems), or (2) buy and build a card, or (3) reserve one card. If you collect chips, you take either three different kinds of chips or two chips of the same kind. If you buy a card, you pay its price in chips and add it to your playing area. To reserve a card&mdash;in order to make sure you get it, or, why not, your opponents don&#39;t get it&mdash;you place it in front of you face down for later building; this costs you a round, but you also get gold in the form of a joker chip, which you can use as any gem. All of the cards you buy increase your wealth as they give you a permanent gem bonus for later buys; some of the cards also give you prestige points. In order to win the game, you must reach 15 prestige points before your opponents do.</p>', 30, 2, 4, 'https://cf.geekdo-images.com/original/img/PgaVULm0QKeFV2zTro4hJEb70Yk=/0x0/pic1904079.jpg'),
(8, 2, 'Unlock! Secret Adventures', '<p>Unlock! Secret Adventures features three &quot;escape room&quot; scenarios that you can play on your tabletop. Unlock! is a cooperative card game inspired by escape rooms that uses a simple system which allows you to search scenes, combine objects, and solve riddles. Play Unlock! to embark on great adventures, while seated at a table using only cards and a companion app that can provide clues, check codes, monitor time remaining, etc. The three scenarios are... &quot;A Noside Story&quot; &quot;Tombstone Express&quot; &quot;The Adventurers of Oz&quot;</p>', 60, 1, 6, 'https://cf.geekdo-images.com/original/img/C54zT52CJRLQ7I7QmiTXiEvrxC8=/0x0/pic3945063.jpg'),
(9, 3, 'Exit: The Game – The Forgotten Island', '<p>For those shipwrecked on the beach of this forgotten island, a chained boat is the only hope &mdash; but the mysterious owner has left puzzles over the whole island. Will the team solve them, free the boat, and escape? Exit: The Game &ndash; The Forgotten Island is a puzzle game modeled after escape rooms.</p>', 90, 1, 4, 'https://cf.geekdo-images.com/original/img/flRngUcuFaNFY5t_HA2l-yVopS0=/0x0/pic3663356.jpg'),
(10, 4, 'Saint Seiya: Deckbuilding', '<p>Athena is threatened by the great Pope, and the Knights subjected to his power are ready to fight! 5 Bronze Knights: Seiya, Shiry&Aring;&laquo;, Hy&Aring;ga, Shun, and Ikki must end this threat before the extinction of the last flame of the Clock. During the game, players each play one of the five available Heroes. They will have to face the other Knights they will face or rally to their cause. Play as one of the bronze knights and build your deck as you fight or rally other knights to your cause. Use the various effects of the cards to possess the most powerful knights and have the best team at the end of the game, when the 12 flames of the clock will be extinguished. The player with the most victory point when all the flammes are switched off is the winner.</p>', 60, 2, 5, 'https://cf.geekdo-images.com/original/img/LUgAo8FaSPM_X_qkCeE-UChAKQY=/0x0/pic4303079.png'),
(11, 3, 'Terra Mystica', '<p>In the land of Terra Mystica dwell 14 different peoples in seven landscapes, and each group is bound to its own home environment, so to develop and grow, they must terraform neighboring landscapes into their home environments in competition with the other groups. Terra Mystica is a full information game without any luck that rewards strategic planning. Each player governs one of the 14 groups. With subtlety and craft, the player must attempt to rule as great an area as possible and to develop that group&#39;s skills. There are also four religious cults in which you can progress. To do all that, each group has special skills and abilities. Taking turns, the players execute their actions on the resources they have at their disposal. Different buildings allow players to develop different resources. Dwellings allow for more workers. Trading houses allow players to make money. Strongholds unlock a group&#39;s special ability, and temples allow you to develop religion and your terraforming and seafaring skills. Buildings can be upgraded: Dwellings can be developed into trading houses; trading houses can be developed into strongholds or temples; one temple can be upgraded to become a sanctuary. Each group must also develop its terraforming skill and its skill with boats to use the rivers. The groups in question, along with their home landscape, are: Desert (Fakirs, Nomads) Plains (Halflings, Cultists) Swamp (Alchemists, Darklings) Lake (Mermaids, Swarmlings) Forest (Witches, Auren) Mountain (Dwarves, Engineers) Wasteland (Giants, Chaos Magicians) Proximity to other groups is a double-edged sword in Terra Mystica. Being close to other groups gives you extra power, but it also means that expanding is more difficult...</p>', 150, 2, 5, 'https://cf.geekdo-images.com/original/img/CynjY3GgwPTg34abNIv8eLX1pXs=/0x0/pic1356616.jpg'),
(12, 2, 'Relic Runners', '<p>In Relic Runners, each player takes on the role of a character keen to exploit and acquire relics that have been unearthed in a long lost part of the jungle. Each would-be archaeologist has a colorful past &mdash; retired university professor, former army captain, etc. &mdash; and wants to be the first to get their hands on the precious loot to earn the most victory points. Players must navigate a series of paths in order to visit temples. The archaeologists are restricted in their movement by their access to rations, but thankfully they can place markers on paths to allow them to travel for free in future turns. The players also have a toolkit that can be upgraded in three particular ways to break the rules in some way or offer them an advantage as they move around. Each time a player visits a temple, he takes a token. Initially the temples offer up victory points or some form of in-game bonus. When the final token is taken, a relic is placed there to be collected. The players earn large victory points for collecting relics of different types (set collection) and players can also earn bonus points for creating long routes and traveling along these to collect relics.</p>', 80, 2, 5, 'https://cf.geekdo-images.com/original/img/YHa0mUJv6xuW-dnxI3Qkyv2_Cxs=/0x0/pic1696460.jpg'),
(13, 4, 'Abyss', '<p>This game is played on a 5&times;5 board. One player drops 6 white stones and 6 black stones on empty cells. The other player then may: (a) choose a color and be the second to move, or (b) choose to move first and the other choose color. On each turn, each player must orthogonally slide a friendly stone, pushing all stones it that line, until at least one enemy stone is pushed out of the board. When one player cannot execute a valid move, the game ends. The player with more stones on the board wins.The Abyss power is once again vacant, so the time has come to get your hands on the throne and its privileges. Use all of your cunning to win or buy votes in the Council. Recruit the most influential Lords and abuse their powers to take control of the most strategic territories. Finally, impose yourself as the only one able to rule the Abyssal people! Abyss is a game of development, combination and collection in which players try to take control of strategic locations in an underwater city. To achieve this, players must develop on three levels: first by collecting allies, then using them to recruit Lords of the Abyss, who will then grant access to different parts of the city. Players acquire cards through a draft of sorts, and the Lords of the Abyss acquired on those cards grant special powers to the cardholder &mdash; but once you use the cards to acquire a location, that power is shut off, so players need to time their land grabs well in order to put themselves in the best position for when the game ends.</p>', 60, 2, 4, 'https://cf.geekdo-images.com/original/img/QZD3-w6S6hbAQO7AfTFc342WsqI=/0x0/pic1965255.jpg'),
(14, 3, 'Great Western Trail', '<p>America in the 19th century: You are a rancher and repeatedly herd your cattle from Texas to Kansas City, where you send them off by train. This earns you money and victory points. Needless to say, each time you arrive in Kansas City, you want to have your most valuable cattle in tow. However, the &quot;Great Western Trail&quot; not only requires that you keep your herd in good shape, but also that you wisely use the various buildings along the trail. Also, it might be a good idea to hire capable staff: cowboys to improve your herd, craftsmen to build your very own buildings, or engineers for the important railroad line. If you cleverly manage your herd and navigate the opportunities and pitfalls of Great Western Trail, you surely will gain the most victory points and win the game. &mdash;description from the publisher</p>', 150, 2, 4, 'https://cf.geekdo-images.com/original/img/F6LRHU_90d9ICvPLDXQ2rikYuuY=/0x0/pic4887376.jpg'),
(15, 4, 'Imaginarium', '<p>Welcome to the Imaginarium! A wonderful game world, where the winner is chosen for his level of empathy and great imagination, rather than luck or deft hands. To the bright fantasy world, in which you shall create associations and proceed to make sense of those made by other players. Every round of Imaginarium is as different and individual as each person. So call your friends and immerse in the magic atmosphere now! Box contents: - Game board with clouds. - 98 large cards with crazy pictures - 7 colorful, specially trained flying elephants - 49 tokens with numbers, 7 of each color. Rules Place your elephants on the start cloud of the game board. Shuffle the deck and deal 6 cards to each player. Each turn one of the players becomes the leader. He chooses one of his cards, lays it in the center of the table, face down, and says his association with this card. Other players choose a card each from their hand, which best matches the leader&rsquo;s association, then proceed to lay it in the center of the table, face down. The leader shuffles placed cards and puts them in row, face up. Players must guess which card the leader has in mind. Each player chooses a token with the number correlating to his guess-version, then places It number-down on the table. When all players have made their decisions, they turn over the tokens. - If all players have guessed the leader&rsquo;s card correctly, then his elephant retreats three steps back. The elephants of the players stand in place. - If none of the players managed to guess the leader&rsquo;s card correctly, then his elephant retreats two steps back. Other players move their elephants forward on as many steps as the number of people who chose the same card. - In all other cases, the leader&rsquo;s elephant and the elephants of those players, who guessed his card correctly, move up three steps. Moreover, all players, including the leader, move their elephant forward as many steps, as the number of people who chose the same card as them. In the end of each turn all played cards should be discarded, and each player gets one card from the deck. Next player in the clockwise direction becomes the leader. The game ends when all the cards in the players&rsquo; hands are played. The winner is the one whose elephant moved the farthest. Special fields Some clouds on the board are marked with special symbols. If the leader&rsquo;s elephant stops on one of them, his association gets restrictions: - (number 4) &ndash; The association must contain exactly four words. - (question mark) &ndash; The association should be made in the form of a question. - (Adidas logo) &ndash; Association should relate to any well known brand. The name of the brand doesn&rsquo;t have to be mentioned &ndash; the association may be made with its slogan, campaign, etc. - (TV) &ndash; Association must be related to movies, cartoons, TV series or TV programs. - (book) &ndash; Association should be presented in the form of a story.Imaginarium is a strategy, combination and development game. From its Kickstarter description: Through the mist, you can just about see the gigantic form of the factory. This is where the essence of dreams is shaped! We will enter the factory through the grand entrance. Here are the famous machines! You can repair, combine or dismantle them. They will produce the resources needed to repair more powerful machines. I am sure that you will quickly make the best use of your resources and the space available in your workshop to carry out the projects of the design office and gain Victory points!</p>', 90, 2, 5, 'https://cf.geekdo-images.com/original/img/45tJI6GcHaLXPgnNmwqNMj1EZoA=/0x0/pic3809813.jpg'),
(16, 2, 'La Crique des Pirates', '<p>Come aboard and sail to Pirate&#39;s Cove, the legendary hideaway of thieving pirates and cutthroat buccaneers. The tales of those legendary pirates of old who&#39;ve fought and survived these mysterious waters still haunt all those who yearn for a life at sea. Armed with a secret map and starting with a modestly outfitted sloop salvaged from last winter&#39;s storm, you set sail to Pirate&#39;s Cove, your eyes filled with visions of treasure and fame, your lungs filled with the salty air of the high seas. Your objective: to battle for the rights to plunder and become the most famed and feared pirate the world has ever seen. To do so, you will need to navigate shrewdly, fight recklessly and pillage mercilessly. You will gain fame by winning battles; burying gold and treasure; and bragging about your exploits at the tavern. At the end of twelve months, the pirate with the most fame will be declared the most fearsome pirate of the high seas! The game has 12 turns and at the start of every turn, each pirate must decide (secretly) which of the six islands they will visit. All players reveal their navigation directions simultaneously and then the turn is resolved. If any two or more pirates end up at the same island, Combat ensues. Combat resolution is determined by the strengths of your ship and the results of cannon fire (dice). The goal of combat is to scare away rival pirates so that you are the only pirate left at the island. If you stay in combat too long, your ship will suffer and make subsequent turns more difficult, so there is a fine balance of when to stay and fight and when to let the bigger ship have its booty. If you flee from combat, you end up at Pirate&#39;s Cove where you receive a small compensation for the turn. Once all conflicts are resolved, then the bounty for each island is given out. Each island (except Pirate&#39;s Cove and Treasure Island) offer various amounts of Fame, Gold, Treasure or Tavern cards. The bounty is skewed so that some Islands are clearly better choices than others, so it can force you to decide (or bluff) if you think you can take the island should other pirates go after the same bounty. Once you have your bounty, you can purchase upgrades for your ship. Each Island offers a different ship component. The four parts of your ship are: Sails (determines speed and initiative in combat), Hull (how much treasure you can carry), Crew (needed to man the cannons), and Cannons. (The lower number of Crew and Cannons determines how many dice you roll in combat). There is also an island with a Pub that offers useful strategy cards to help you in all aspects of the game. The last island is treasure island which offers no real bounty other than the chance to bury treasures that you have in the hull of your ship. Buried treasure is converted to Fame (which is the ultimate goal of the game). Other random elements of the game include the dreaded Legendary Pirates who are highly dangerous ships that patrol the islands in order. One of 5 different Legendary Pirates (which include famous names like Blackbeard and The Flying Dutchman) is drawn at the beginning of every game, and stays until defeated. If you end up at the same island as one of them, you had better have a strong ship and helpful allies or they will blast you with their powerful cannons. However, if you can manage to sink their ships, you can score a good amount of fame! But beware, once you defeat him/her a new Legendary Pirate will appear to wreck havoc in the islands. At the very end of the game, there is a chance for everyone to tell &quot;tall tales&quot; about themselves to increase their final fame standings. These tall tale cards are gained at the pub and offer yet another fun &quot;pirate&quot; mechanic. In all, Pirate&#39;s Cove offers you the chance to truly play like a pirate where you can fight and plunder your way to victory.</p>', 90, 3, 5, 'https://cf.geekdo-images.com/original/img/QMUBPs550zk55qOmZyCoAb7rK6o=/0x0/pic162248.jpg'),
(17, 4, '51st State: Master Set', '<p>The world you know no longer exists. There is no government. No army. No civilization. The United States have collapsed. And now, thirty years after the war started, new powers finally try to take control over the ruined country, try to establish a new order, try to control others and create a new country, a new State: the 51st State. 51st State is a card game in which players control one of the four powers (mutants, traders, New Yorkers and Appalachians) and try to build their very own new country. Players put new locations into the game, they hire leaders, and send people to work in buildings to gain resources and new skills. Every card in 51st State can be put into play in three different ways. You can invade a location to gain many resources once, or you can sign a contract with this location to gain one resource every turn, or you can attach the location to your State so you can use its skill. One card, three possibilities. Lots of decisions and choices that matter. Integrates with: The New Era WinterThe world you know no longer exists. There is no government. No army. No civilization. The United States has collapsed, and now thirty years after the war started, new powers finally try to take control over the ruined country, try to establish a new order, try to control others and create a new country, a new state: the 51st State. 51st State is a card game in which players control one of four powers trying to build a new country. Players put new locations into play, hire leaders, and send people to work in buildings to gain resources and new skills. To do this, every card in 51st State can be used in three different ways: Raze a location to gain many resources once. Deal with this location to gain one resource every turn. Build the location so that you can use its skill each turn. 51st State: Master Set marks the rebirth of the 51st State line, with this set containing 88 cards from the original base game, and 50 cards each from both the New Era and Winter expansions; one of these expansions can be mixed with the cards of the base game, but not both at the same time. The entire set has been rebalanced to offer a cohesive experience no matter which expansion you choose to use.</p>', 90, 1, 4, 'https://cf.geekdo-images.com/original/img/FikdHVDtGfaFsStTcuw0LwiFTqo=/0x0/pic2945432.jpg'),
(18, 3, 'Terraforming Mars', '<p>In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things. The players acquire unique project cards (from over two hundred different ones) by buying them to their hand. The projects (cards) can represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, to mining the moons of Jupiter and establishing greenhouse gas industries to heat up the atmosphere. The cards can give you immediate bonuses, as well as increasing your production of different resources. Many cards also have requirements and they become playable when the temperature, oxygen, or ocean coverage increases enough. Buying cards is costly, so there is a balance between buying cards (3 megacredits per card) and actually playing them (which can cost anything between 0 to 41 megacredits, depending on the project). Standard Projects are always available to complement your cards. Your basic income, as well as your basic score, is based on your Terraform Rating (starting at 20), which increases every time you raise one of the three global parameters. However, your income is complemented with your production, and you also get VPs from many other sources. Each player keeps track of their production and resources on their player boards, and the game uses six types of resources: MegaCredits, Steel, Titanium, Plants, Energy, and Heat. On the game board, you compete for the best places for your city tiles, ocean tiles, and greenery tiles. You also compete for different Milestones and Awards worth many VPs. Each round is called a generation (guess why) and consists of the following phases: 1) Player order shifts clockwise. 2) Research phase: All players buy cards from four privately drawn. 3) Action phase: Players take turns doing 1-2 actions from these options: Playing a card, claiming a Milestone, funding an Award, using a Standard project, converting plant into greenery tiles (and raising oxygen), converting heat into a temperature raise, and using the action of a card in play. The turn continues around the table (sometimes several laps) until all players have passed. 4) Production phase: Players get resources according to their terraform rating and production parameters. When the three global parameters (temperature, oxygen, ocean) have all reached their goal, the terraforming is complete, and the game ends after that generation. Count your Terraform Rating and other VPs to determine the winning corporation!</p>', 120, 1, 5, 'https://cf.geekdo-images.com/original/img/o8z_levBVArPUKI7ZrIysZEs1A0=/0x0/pic3536616.jpg'),
(19, 3, 'Clank!: A Deck-Building Adventure', '<p>Description from the publisher: Burgle your way to adventure in the deck-building board game Clank! Sneak into an angry dragon&#39;s mountain lair to steal precious artifacts. Delve deeper to find more valuable loot. Acquire cards for your deck and watch your thievish abilities grow. Be quick and be quiet. One false step and CLANK! Each careless sound draws the attention of the dragon, and each artifact stolen increases its rage. You can enjoy your plunder only if you make it out of the depths alive! Clank! is a deck-building game. Each player has their own deck, and building yours up is part of playing the game. You start each of your turns with five cards in your hand, and you&rsquo;ll play them all in any order you choose. Most cards will generate resources, of which there are three different kinds: Skill, which is used to acquire new cards for your deck. Swords, which are used to fight the monsters that infest the dungeon. Boots, which are used to move around the board. Every time you acquire a new card, you put it face up in your discard pile. Whenever you need to draw a card and find your deck empty, you shuffle your discard pile and turn it face down to form a new deck. With each shuffle, your newest cards become part of a bigger and better deck! Each player starts with the same cards in their deck, but they&rsquo;ll acquire different cards during their turns. Because cards can do many different things, each player&rsquo;s deck (and strategy) will become more and more different as the game unfolds. During the game, you have two goals: Retrieve an Artifact token and escape the dragon by returning to the place you started, outside of the dungeon. Accumulate enough points with your Artifact and other loot to beat out your opponents and earn the title of Greatest Thief in the Realm!</p>', 60, 2, 4, 'https://cf.geekdo-images.com/original/img/wKVNKaIsMedZeZj2579L01EDBTc=/0x0/pic4449526.jpg'),
(20, 4, 'Immortal 8', '<p>Immortal 8 is a civilization drafting game for 3 to 6 players ages 14+, with an estimated time of 8 minutes per player. At the beginning of the game, players receive a secret Immortal card which tells them how to score victory points, among many other ways to score points. During the two rounds of the game, they will play a maximum total of five cards by drafting them. A round of Immortal 8 is divided into three phases : 1) Living Draft: Each player drafts five cards (four cards during the second round) and can play a maximum of three cards (two during the second round). The players gain bonuses from played cards and gold coins from cards they drafted but did not play. 2) Kingdom: Starting with the first player, each player takes all actions at once before the next player takes their turn. In any order, the active player can activate all cards in their player area, only one wonder, and opponent&#39;s buildings by paying the trading cost. 3) Supremacy: The player with the most military tokens gains a supremacy token, then the player with the most science tokens gains a supremacy token. At the end of the Supremacy phase of the second round, the game ends and players gain VPs this way: Immortal scoring Wonder tokens majority Supremacy tokens Diamonds Culture points VP tokens The player with the most VPs wins!</p>', 60, 3, 6, 'https://cf.geekdo-images.com/original/img/JZJkYPIrDtpGiHc6jQ35g4p1sO0=/0x0/pic3917910.jpg'),
(21, 2, 'Les Aventuriers du Rail', '<p>With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes. Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn. Additional points come to those who fulfill Destination Tickets &ndash; goal cards that connect distant cities; and to the player who builds the longest continuous route. &quot;The rules are simple enough to write on a train ticket &ndash; each turn you either draw more cards, claim a route, or get additional Destination Tickets,&quot; says Ticket to Ride author, Alan R. Moon. &quot;The tension comes from being forced to balance greed &ndash; adding more cards to your hand, and fear &ndash; losing a critical route to a competitor.&quot; Ticket to Ride continues in the tradition of Days of Wonder&#39;s big format board games featuring high-quality illustrations and components including: an oversize board map of North America, 225 custom-molded train cars, 144 illustrated cards, and wooden scoring markers. Since its introduction and numerous subsequent awards, Ticket to Ride has become the BoardGameGeek epitome of a &quot;gateway game&quot; -- simple enough to be taught in a few minutes, and with enough action and tension to keep new players involved and in the game for the duration. Part of the Ticket to Ride series.</p>', 60, 2, 5, 'https://cf.geekdo-images.com/original/img/bOcAJxw-W-B2Gz0x67z8bjqzJgY=/0x0/pic38668.jpg'),
(22, 2, '7 Wonders', '<p>You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times. 7 Wonders lasts three ages. In each age, players receive seven cards from a particular deck, choose one of those cards, then pass the remainder to an adjacent player. Players reveal their cards simultaneously, paying resources if needed or collecting resources or interacting with other players in various ways. (Players have individual boards with special powers on which to organize their cards, and the boards are double-sided). Each player then chooses another card from the deck they were passed, and the process repeats until players have six cards in play from that age. After three ages, the game ends. In essence, 7 Wonders is a card development game. Some cards have immediate effects, while others provide bonuses or upgrades later in the game. Some cards provide discounts on future purchases. Some provide military strength to overpower your neighbors and others give nothing but victory points. Each card is played immediately after being drafted, so you&#39;ll know which cards your neighbor is receiving and how his choices might affect what you&#39;ve already built up. Cards are passed left-right-left over the three ages, so you need to keep an eye on the neighbors in both directions. Though the box of earlier editions is listed as being for 3&ndash;7 players, there is an official 2-player variant included in the instructions.</p>', 30, 2, 7, 'https://cf.geekdo-images.com/original/img/3DP_RW5lTX0WrV67s8qi8CsiXoQ=/0x0/pic860217.jpg'),
(23, 4, 'OrcQuest', '<p>We are orcs! We have come to rob you, see your houses burn down, and blow your heads off! We&#39;re done being victims of your heroes in tights and shining armor! In this world, we are the heroes! In OrcQuest, you are about to embody a gang of green skins, and being mean is good. Brawls, traps, treasures, captures and cheap shots are on the menu, and you&#39;re gonna love it! OrcQuest is a fast-paced card game in which violence and dirty tricks are the keys to victory. Even our dice are sharp enough to slash our enemies. Be bad, be strong, be orc! In more detail, you want to be the richest green skin alive at the end of the raid. Every turn, you take a card from the draw pile, then you have to play one challenge card: Brawl, Trap or Capture. You can also play other cards: one Magic stuff, one Treasure, and as many Cheapshot as you want to help you. The dice determine the result of the challenge. If you succeed, you get the reward (gold, life points...). If you fail, you can lose life points, gains, cards... and maybe you will not be alone. Every player can interact during the turn of the others, using Cheapshots or Magic stuff. When the draw pile is empty, one last turn is played. This is the final phase. Some cards can be played only at this moment &mdash; if you manage to keep them in your hand...</p>', 45, 2, 6, 'https://cf.geekdo-images.com/original/img/kBQVeFzt-zLrXuLUGG1nVD_eu68=/0x0/pic3751028.jpg'),
(24, 4, 'Rise to Nobility', '<p>Five years after the events of Cavern Tavern, where a fragile peace was brokered between The Five Realms, the High Queen Tabita Orestes has ordered a new city to be built. The city of Caveborn will be the capital of the Five Realms, a place where all the races will learn to live together in harmony, with the main purpose being to bring them closer and prevent another war. The Queen needs to keep the alliance between the races and ensure that Caveborn is peaceful and prosperous. To that end, a Settlers Council has been formed with Berk the Town Clerk as its chairman &mdash; but Berk is getting old and needs a successor. Are you that person? Rise to Nobility is a worker (dice) placement game set in the same fantasy world as Cavern Tavern. You each own a small piece of land in the newly built city, and your job is to rise from anonymity, make your way to the title of lord, and take over the head seat at the Stone Council. You can achieve this by upgrading your land and increasing its value, satisfying the demands of the settlers&#39; council, attracting and housing as many settlers as you can, accommodating their needs, finding them jobs, and helping them develop from apprentices to guild masters, thus insuring you have people in high places all around the city of Caveborn.</p>', 150, 1, 6, 'https://cf.geekdo-images.com/original/img/wpjYpj3j-k0immZ6_Pk5eW38VnM=/0x0/pic4123139.jpg'),
(25, 4, 'This War of Mine: The Board Game', '<p>This War Of Mine: The Board Game is the tabletop adaptation of the award-winning video game that pictures the drama of civilians trapped in a war-torn city. You will enter this experience as a group of civilians trapped in a besieged and conflict-ridden city, enduring many hardships that often test the essence of humanity. During day time you will take shelter in a ruined tenement house, which you will care about and manage by: removing rubble, searching through various rooms (often behind barricaded doors), you will build beds, improvised workshops, stoves, tools, water filters, small animal traps, you will cultivate an improvised vegetable garden, fix the tenements&rsquo; shelled facilities, reinforce the security of your shelter and should winter come, you&rsquo;ll try to keep it warm. Upon nightfall your main duties will consist of guarding your shelter and what little possessions you can accumulate against bandits and raiders. Those in your group fit for such a task will use the cover of the night to carefully explore dozens of the ever-changing locations scattered throughout the dangerous city in search of all the things that a person needs to survive (materials, food, meds, equipment, etc.). On your way you will meet tens of characters, each with a unique story (residents of the locations you visit, thieves, bandits, soldiers, war victims, refugees, neighbors, traders and members of local communities), each encounter is a potential, unique adventure. To guide you through all these events you will have the special SCRIPTS mechanism, responsible for implementing the deep and complex story and a coherent plot (each game will be unique and different than the previous). Your goal is to SURVIVE until the cessation of war hostilities. During your struggle as the survivors, you will experience dramas connected with making extremely difficult decisions and choices (you will have to face the consequences of your actions sooner or later in the playthrough). Survival itself will often prove not to be enough. The price each of you will decide to pay, might be too high in the final outcome. So the goal is really to survive in a way that will let you live on with the decisions you made. The EPILOGUES mechanism will kick in here. TWOM: The Board Game features a multiplayer experience for up to 6 players, as well as a solo variant. You will be able to personify one of the well-known characters from the electronic version of the game and face hundreds of new challenges and difficult choices. The boardgame significantly broadens the original game&rsquo;s universe and emphasises the depth of plot, yet its main focus will be on human interactions driven by survival instinct and group decision-making. The project aims to omit the usual boardgame threshold - TWOM: The Board Game is an INSTANT PLAY game, with no need for reading the manual before starting the adventure. Experience the simulation of a struggle for survival as a group of civilians facing a blind and merciless war. In war, not everyone is a soldier.</p>', 120, 1, 6, 'https://cf.geekdo-images.com/original/img/VmqDT6K9qJyjmq3oHdJmdrmhdII=/0x0/pic3315915.jpg'),
(26, 2, 'Concept', '<p>In Concept, your goal is to guess words through the association of icons. A team of two players &ndash; neighbors at the table &ndash; choose a word or phrase that the other players need to guess. Acting together, this team places pieces judiciously on the available icons on the game board. To get others to guess &quot;milk&quot;, for example, the team might place the question mark icon (which signifies the main concept) on the liquid icon, then cubes of this color on the icons for &quot;food/drink&quot; and &quot;white&quot;. For a more complicated concept, such as &quot;Leonardo DiCaprio&quot;, the team can use the main concept and its matching cubes to clue players into the hidden phrase being an actor or director, while then using sub-concept icons and their matching cubes to gives clues to particular movies in which DiCaprio starred, such as Titanic or Inception. The first player to discover the word or phrase receives 2 victory points, the team receives points as well, and the player who ends up with the most points wins.</p>', 40, 4, 12, 'https://cf.geekdo-images.com/original/img/BuU0gJueE-UDGQjsYvQ2jbFVEaM=/0x0/pic1907628.jpg'),
(27, 2, 'Carcassonne Big Box', '<p>Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera. Having placed a tile, the player can then decide to place one of his meeples on one of the areas on it: on the city as a knight, on the road as a robber, on a cloister as a monk, or on the grass as a farmer. When that area is complete, that meeple scores points for its owner. During a game of Carcassonne, players are faced with decisions like: &quot;Is it really worth putting my last meeple there?&quot; or &quot;Should I use this tile to expand my city, or should I place it near my opponent instead, giving him a hard time to complete his project and score points?&quot; Since players place only one tile and have the option to place one meeple on it, turns proceed quickly even if it is a game full of options and possibilities. This big box includes the basic game, Inns &amp; Cathedrals, Traders &amp; Builders, Princess &amp; Dragon and The Tower. The English version also has The River.</p>', 45, 2, 5, 'https://cf.geekdo-images.com/original/img/qBVrFiP5j3cgR--m3JlV1jX3m5U=/0x0/pic201589.jpg'),
(28, 4, 'Anachrony', '<p>It is the late 26th century. Earth is recovering from a catastrophic explosion that exterminated the majority of the population centuries ago and made most of the surface uninhabitable due to unearthly weather conditions. The surviving humans organized along four radically different ideologies, called Paths, to rebuild the world as they see fit: Harmony, Dominance, Progress, and Salvation. Followers of the four Paths live in a fragile peace, but in almost complete isolation next to each other. Their only meeting point is the last major city on Earth, now just known as the Capital. By powering up the mysterious Time Rifts that opened in the wake of the cataclysm, each Path is able to reach back to specific moments in their past. Doing so can greatly speed up their progress, but too much meddling may endanger the time-space continuum. But progress is more important than ever before: if the mysterious message arriving through the Time Rift is to be believed, an even more terrible cataclysm is looming on the horizon: an asteroid bearing the mysterious substance called Neutronium is heading towards Earth. Even stranger, the scientists show that the energy signature of the asteroid matches the explosion centuries ago... Anachrony features a unique two-tiered worker placement system. To travel to the Capital or venture out to the devastated areas for resources, players need not only various Specialists (Engineers, Scientists, Administrators, and Geniuses) but also Exosuits to protect and enhance them &mdash; and both are in short supply. The game is played in 4-7 turns, depending on the time when the looming cataclysm occurs (unless, of course, it is averted!). The elapsed turns are measured on a dynamic Timeline. By powering up the Time Rifts, players can reach back to earlier turns to supply their past &quot;self&quot; with resources. Each Path has a vastly different objective that rewards it with a massive amount of Victory Points when achieved. The Paths&#39; settlements will survive the impact, but the Capital will not. Whichever Path manages to collect most points will be the new seat for the Capital, thus the most important force left on the planet...</p>', 120, 1, 4, 'https://cf.geekdo-images.com/original/img/HwoXcAIvX44tc_CDgcQ6I0Rztg8=/0x0/pic3499707.jpg');
INSERT INTO `bgame` (`id`, `difficulty_id`, `name`, `description`, `duration`, `min_nb_players`, `max_nb_players`, `image`) VALUES
(29, 2, '6 qui prend!', '<p>In 6 nimmt!, a.k.a. Category 5 and many other names, you want to score as few points as possible. To play the game, you shuffle the 104 number cards, lay out four cards face-up to start the four rows, then deal ten cards to each player. Each turn, players simultaneously choose and reveal a card from their hand, then add the cards to the rows, with cards being placed in ascending order based on their number; specifically, each card is placed in the row that ends with the highest number that&#39;s below the card&#39;s number. When the sixth card is placed in a row, the owner of that card claims the other five cards and the sixth card becomes the first card in a new row. In addition to a number from 1 to 104, each card has a point value. After finishing ten rounds, players tally their score and see whether the game ends. (Category 5 ends when a player has a score greater than 74, for example, while 6 nimmt! ends when someone tops 66.) When this happens, the player with the fewest points wins! 6 nimmt! works with 2-10 players, and the dynamics of gameplay change the more players that you have. One variant for the game has you use 34 cards, 44 cards, 54 cards, etc. (instead of all 104 cards) when you have three, four, five, etc. number of players. This change allows you to know which cards are in play, thereby allowing you to track which cards have been played and (theoretically) make better choices as to which card to play when.In 6 nimmt!, you want to score as few points as possible. To play, you shuffle the 104 number cards, lay out four cards face-up to start the four rows, then deal ten cards to each player. Each turn, players simultaneously choose and reveal a card from their hand, then add the cards to the rows, with cards being placed in ascending order based on their number; specifically, each card is placed in the row that ends with the highest number that&#39;s below the card&#39;s number. When the sixth card is placed in a row, the owner of that card claims the other five cards and the sixth card becomes the first card in a new row. In addition to a number from 1 to 104, each card has a point value. After finishing ten rounds, players tally their score and see whether the game ends., i.e., whether someone has at least 66 points. When this happens, the player with the fewest points wins! 6 nimmt! works with 2-10 players, and the dynamics of gameplay change the more players that you have. One variant for the game has you use 34 cards, 44 cards, 54 cards, etc. (instead of all 104 cards) when you have three, four, five, etc. number of players. This change allows you to know which cards are in play, thereby allowing you to track which cards have been played and (theoretically) make better choices as to which card to play when. 6 nimmt! 25 Jahre includes 28 additional cards to be used in a new variant. The game now lasts only two rounds, and at the start of play each player receives three special cards. Just before you have to place your number card in a row, you can choose to play one of your cards, with these cards opening a fifth row, moving a previously placed card to a different row, inserting one card between two others, allowing up to six cards in a row instead of five, blocking a row, replacing the card you played, and more. After all number cards have been played, players tally their scores, keeping any unplayed special cards, then shuffle the number cards and begin a new round. At the end of the second round, whoever has the fewest points wins.</p>\r\n\r\n<p>In 6 nimmt!, a.k.a. Category 5 and many other names, you want to score as few points as possible. To play the game, you shuffle the 104 number cards, lay out four cards face-up to start the four rows, then deal ten cards to each player. Each turn, players simultaneously choose and reveal a card from their hand, then add the cards to the rows, with cards being placed in ascending order based on their number; specifically, each card is placed in the row that ends with the highest number that&#39;s below the card&#39;s number. When the sixth card is placed in a row, the owner of that card claims the other five cards and the sixth card becomes the first card in a new row. In addition to a number from 1 to 104, each card has a point value. After finishing ten rounds, players tally their score and see whether the game ends. (Category 5 ends when a player has a score greater than 74, for example, while 6 nimmt! ends when someone tops 66.) When this happens, the player with the fewest points wins! 6 nimmt! works with 2-10 players, and the dynamics of gameplay change the more players that you have. One variant for the game has you use 34 cards, 44 cards, 54 cards, etc. (instead of all 104 cards) when you have three, four, five, etc. number of players. This change allows you to know which cards are in play, thereby allowing you to track which cards have been played and (theoretically) make better choices as to which card to play when.</p>', 45, 2, 10, 'https://cf.geekdo-images.com/original/img/3Gg4GrqJwbhQHSYcw1TJJQDMsw8=/0x0/pic2602138.jpg'),
(30, 2, 'Timeline: Discoveries', '<p>Timeline: Discoveries is a card game played using 110 cards. Each card depicts an discovery on both sides, with the year in which that discovery occurred on only one side. Players take turns placing a card from their hand in a row on the table. After placing the card, the player reveals the date on it. If the card was placed correctly with the date in chronological order with all other cards on the table, the card stays in place; otherwise the card is removed from play and the player takes another card from the deck. The first player to get rid of all his cards by placing them correctly wins. If multiple players go out in the same round, then everyone else is eliminated from play and each of those players are dealt one more card for another round of play. If only one player has no cards after a bonus round, he wins; otherwise play continues until a single player goes out. Timeline: Discoveries can be combined with any other title in the Timeline series. Integratable with: Timeline: Diversity Timeline: Events Timeline: Inventions Timeline: Music &amp; Cinema Timeline: American History Timeline: Americana</p>', 15, 2, 8, 'https://cf.geekdo-images.com/original/img/ignMlJ1PyDy_aKYFhhnF6Jfim-0=/0x0/pic1724655.jpg'),
(31, 4, 'Cards Against Humanity', '<p>&quot;A party game for horrible people.&quot; Play begins with a judge, known as the &quot;Card Czar&quot;, choosing a black question or fill-in-the-blank card from the top of the deck and showing it to all players. Each player holds a hand of ten white answer cards at the beginning of each round, and passes a card (sometimes two) to the Card Czar, face-down, representing their answer to the question on the card. The card czar determines which answer card(s) are funniest in the context of the question or fill-in-the-blank card. The player who submitted the chosen card(s) is given the question card to represent an &quot;Awesome Point&quot;, and then the player to the left of the new Card Czar becomes the new Czar for the next round. Play continues until the players agree to stop, at which point the player with the most Awesome Points is the winner. This, so far, sounds like the popular and fairly inoffensive Apples to Apples. While the games are similar, the sense of humor required is very different. The game encourages players to poke fun at practically every awkward or taboo subject including race, religion, gender, poverty, torture, alcoholism, drugs, sex (oh yes), abortion, child abuse, celebrities, and those everyday little annoyances like &quot;Expecting a burp and vomiting on the floor&quot;. In addition, there are a few extra rules. First, some question cards are &quot;Pick 2&quot; or cards, which require each participant to submit two cards in sequence to complete their answer. Second, a gambling component also exists. If a question is played which a player believes they have two possible winning answers for, they may bet an Awesome Point to play a single second answer. If the player who gambled wins, they retain the wagered point, but if they lose, the player who contributed the winning answer takes both points. From the website: &quot;Cards Against Humanity is distributed under a Creative Commons Attribution-Noncommercial-Share Alike license - that means you can use and remix the game for free, but you can&#39;t sell it. Feel free to contact us at cardsagainsthumanity@gmail.com.&quot;</p>', 30, 4, 30, 'https://cf.geekdo-images.com/original/img/jg6r3iBsIWQAIFhrcGlQ1o-ZfzQ=/0x0/pic2909692.jpg'),
(32, 4, 'Blanc-Manger Coco', '<p>Blanc-Manger Coco is a French implementation of Cards Against Humanity. The lead player in turn chooses a question with a blank space, other players must choose an answer that must be funny, with the proposed cards having a big chance of being offensive. A strong knowledge of French language and culture (it that exists) is recommended to understand everything.</p>', 30, 3, 12, 'https://cf.geekdo-images.com/original/img/fPQEUkeWthOnKBSjKQWLKnEmV1I=/0x0/pic4614123.jpg'),
(33, 2, 'Fantasy', '<p>A simple family card game wherein players try to collect the most fairy-folk in their forest. Each folk has a special effect that triggers when (s)he is played and alters the balance of the game. Publisher Blurb: Use your spells to become the Grand Master of the Woods! The Fantasy forest is in a state of upheaval! Fed up with all the chaos, the inhabitants have decided to elect their own leader. Gathered together in the middle of the forest, dryads, elves, goblins, hobgoblins and leprechauns are engaged in a fierce struggle to see who will become Grand Master of the Woods. Each race has its own magical power: dryads can steal cards already played by an opponent, gnomes can take two extra cards... Knowing how to use these spells will be vital for victory! At the beginning of the game, each player receives five creature cards. On their turn, players draw a new card and then play a card from their hand, immediately applying its effects. In order to win, players will have to get the most creatures on their side. Expanded by: Fantasy II</p>', 20, 2, 4, 'https://cf.geekdo-images.com/original/img/BogNTQyKvNegM3kgnLKEqbQ6gCc=/0x0/pic530482.jpg'),
(35, 2, 'Les Bâtisseurs: Moyen-Âge', '<p>In Catan (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players collect these resources (cards)&mdash;wood, grain, brick, sheep, or stone&mdash;to build up their civilizations to get to 10 victory points and win the game. Setup includes randomly placing large hexagonal tiles (each showing a resource or the desert) in a honeycomb shape and surrounding them with water tiles, some of which contain ports of exchange. Number disks, which will correspond to die rolls (two 6-sided dice are used), are placed on each resource tile. Each player is given two settlements (think: houses) and roads (sticks) which are, in turn, placed on intersections and borders of the resource tiles. Players collect a hand of resource cards based on which hex tiles their last-placed house is adjacent to. A robber pawn is placed on the desert tile. A turn consists of possibly playing a development card, rolling the dice, everyone (perhaps) collecting resource cards based on the roll and position of houses (or upgraded cities&mdash;think: hotels) unless a 7 is rolled, turning in resource cards (if possible and desired) for improvements, trading cards at a port, and trading resource cards with other players. If a 7 is rolled, the active player moves the robber to a new hex tile and steals resource cards from other players who have built structures adjacent to that tile. Points are accumulated by building settlements and cities, having the longest road and the largest army (from some of the development cards), and gathering certain development cards that simply award victory points. When a player has gathered 10 points (some of which may be held in secret), he announces his total and claims the win. Catan has won multiple awards and is one of the most popular games in recent history due to its amazing ability to appeal to experienced gamers as well as those new to the hobby. Die Siedler von Catan was originally published by KOSMOS and has gone through multiple editions. It was licensed by Mayfair and has undergone four editions as The Settlers of Catan. In 2015, it was formally renamed Catan to better represent itself as the core and base game of the Catan series. It has been re-published in two travel editions, portable edition and compact edition, as a special gallery edition (replaced in 2009 with a family edition), as an anniversary wooden edition, as a deluxe 3D collector&#39;s edition, in the basic Simply Catan, as a beginner version, and with an entirely new theme in Japan and Asia as Settlers of Catan: Rockman Edition. Numerous spin-offs and expansions have also been made for the game.Description from the publisher: From the Hanging Gardens of Babylon to the Pyramids of Egypt, and without forgetting the Greek Parthenon, The Builders: Antiquity &mdash; a standalone card game based on The Builders: Middle Ages &mdash; offers a whole range of challenges to its builders. To face these challenges, you must put on your foreman clothes. Between hiring workers, managing their organization, purchasing slaves or tools, and taking out loans, you&#39;ll have to make the right decisions to fulfill your dream: Becoming the greatest builder the age has ever known. In the game, players score points (and gain money) by completing the construction of buildings. Each building has four characteristics &mdash; carpentry, masonry, architecture, painting &mdash; rated between 0 and 5, and the workers have the same characteristics valued in the same range. To complete a construction, the player must add enough workers to cover the four characteristics of the building, but placing a worker on a construction site costs money. Each turn players have three free actions; however, for an added cost players may also chose to buy additional actions during their turn. Unlike in The Builders: Middle Ages, players can acquire slaves and put them to work, but if they don&#39;t pay to free the slaves by the end of the game, they lose points. Other changes from the original game include the ability to send your workers to universities or purchase tools to improve their characteristics. Make use of your workers, of your slaves, or your freed slaves to build your buildings and amass victory points to ultimately be named the greatest builder of all!In The Builders: Middle Ages, the cards represent buildings or workers. Players score points (and gain money) by completing the construction of buildings, while placing a worker on a construction site costs money. Each building has four characteristics (carpentry, masonry, architecture, tilery) rated between 0 and 5, and the workers have the same characteristics valued in the same range. To complete a construction, the player must add enough workers to cover the four characteristics of the building. Each player starts the game with 10 ecu and an apprentice. Five workers and five buildings are placed face-up on the table, with the others set aside in separate decks. On a turn, you can take three free actions, then pay 5 ecu for each additional action. The possible actions are: Open a site - Take one of the five buildings, place it front of you, then draw a replacement from the deck. Recruit a worker - Take one of the five workers, place it front of you, then draw a replacement from the deck. Assign a worker to a building - Pay the cost of the worker (as he won&#39;t work for free!), then place him on a building; when the building&#39;s needs are met, you earn the points and coins indicated, then flip the building over. The workers return to your pool of available labor. Get money - Forgo one, two or three actions to earn 1, 3 or 6 ecu. Some completed buildings join your labor pool as they can be used to complete other buildings. As soon as a player reaches 17 points, players finish the round so that everyone has the same number of turns, then you tally points, with each completed card having a point value and each 10 ecu being worth 1 point. Whoever has the most points wins.</p>', 30, 2, 4, 'https://cf.geekdo-images.com/original/img/fvG1F29E616NixXrgLbqHX7RSwc=/0x0/pic1987602.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `bgame_category`
--

DROP TABLE IF EXISTS `bgame_category`;
CREATE TABLE IF NOT EXISTS `bgame_category` (
  `bgame_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`bgame_id`,`category_id`),
  KEY `IDX_1E7492268E0F7ED4` (`bgame_id`),
  KEY `IDX_1E74922612469DE2` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `bgame_category`
--

INSERT INTO `bgame_category` (`bgame_id`, `category_id`) VALUES
(3, 57),
(3, 69),
(3, 83),
(3, 123),
(4, 57),
(4, 76),
(4, 103),
(5, 77),
(5, 93),
(5, 100),
(5, 119),
(6, 69),
(6, 76),
(7, 69),
(7, 78),
(7, 122),
(8, 69),
(8, 83),
(8, 118),
(8, 120),
(9, 76),
(9, 118),
(9, 120),
(10, 69),
(10, 75),
(10, 105),
(10, 132),
(11, 73),
(11, 78),
(11, 85),
(11, 127),
(12, 83),
(13, 55),
(13, 69),
(13, 85),
(13, 105),
(13, 117),
(13, 123),
(14, 62),
(14, 64),
(15, 69),
(15, 85),
(15, 90),
(15, 111),
(16, 57),
(16, 87),
(16, 107),
(16, 113),
(17, 69),
(17, 71),
(17, 78),
(17, 123),
(18, 78),
(18, 81),
(18, 91),
(18, 123),
(18, 124),
(18, 127),
(19, 57),
(19, 85),
(20, 73),
(20, 85),
(21, 128),
(22, 63),
(22, 69),
(22, 71),
(22, 73),
(23, 69),
(23, 85),
(23, 90),
(24, 71),
(24, 77),
(24, 78),
(24, 85),
(25, 57),
(25, 83),
(25, 95),
(25, 132),
(26, 76),
(26, 111),
(27, 71),
(27, 98),
(28, 78),
(28, 123),
(29, 69),
(30, 69),
(30, 79),
(30, 131),
(31, 69),
(31, 90),
(31, 95),
(31, 111),
(31, 117),
(32, 69),
(32, 90),
(32, 95),
(32, 111),
(32, 135),
(33, 69),
(33, 85),
(35, 63),
(35, 71),
(35, 98),
(35, 108);

-- --------------------------------------------------------

--
-- Structure de la table `bgame_mechanism`
--

DROP TABLE IF EXISTS `bgame_mechanism`;
CREATE TABLE IF NOT EXISTS `bgame_mechanism` (
  `bgame_id` int(11) NOT NULL,
  `mechanism_id` int(11) NOT NULL,
  PRIMARY KEY (`bgame_id`,`mechanism_id`),
  KEY `IDX_BC1D512F8E0F7ED4` (`bgame_id`),
  KEY `IDX_BC1D512F37CD6DD0` (`mechanism_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `bgame_mechanism`
--

INSERT INTO `bgame_mechanism` (`bgame_id`, `mechanism_id`) VALUES
(3, 23),
(3, 27),
(3, 28),
(3, 33),
(3, 53),
(3, 61),
(4, 23),
(4, 53),
(4, 57),
(4, 61),
(5, 26),
(6, 28),
(6, 48),
(7, 20),
(7, 48),
(8, 23),
(8, 53),
(9, 23),
(10, 25),
(11, 13),
(11, 46),
(11, 60),
(11, 61),
(12, 38),
(12, 40),
(12, 46),
(12, 48),
(12, 61),
(13, 17),
(13, 20),
(13, 28),
(13, 40),
(13, 41),
(13, 48),
(14, 25),
(14, 28),
(14, 40),
(14, 48),
(15, 50),
(15, 62),
(15, 63),
(16, 26),
(16, 28),
(16, 38),
(16, 50),
(17, 20),
(17, 28),
(17, 60),
(17, 61),
(17, 63),
(18, 20),
(18, 28),
(18, 48),
(18, 55),
(18, 56),
(18, 61),
(19, 20),
(19, 25),
(19, 39),
(19, 40),
(19, 41),
(20, 20),
(21, 20),
(21, 28),
(21, 46),
(21, 48),
(22, 20),
(22, 28),
(22, 48),
(22, 50),
(22, 61),
(23, 20),
(23, 28),
(23, 55),
(24, 26),
(24, 48),
(24, 61),
(24, 63),
(25, 12),
(25, 23),
(25, 26),
(25, 27),
(25, 41),
(25, 43),
(25, 49),
(25, 53),
(25, 63),
(26, 35),
(27, 13),
(27, 56),
(28, 12),
(28, 20),
(28, 26),
(28, 48),
(28, 61),
(28, 63),
(29, 28),
(29, 50),
(31, 28),
(31, 50),
(32, 28),
(32, 50),
(33, 28),
(33, 48),
(35, 12),
(35, 20),
(35, 26),
(35, 33),
(35, 46),
(35, 48);

-- --------------------------------------------------------

--
-- Structure de la table `bgame_player`
--

DROP TABLE IF EXISTS `bgame_player`;
CREATE TABLE IF NOT EXISTS `bgame_player` (
  `bgame_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  PRIMARY KEY (`bgame_id`,`player_id`),
  KEY `IDX_311752B98E0F7ED4` (`bgame_id`),
  KEY `IDX_311752B999E6F5DF` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(55, 'Abstract Strategy'),
(56, 'Action / Dexterity'),
(57, 'Adventure'),
(58, 'Age of Reason'),
(59, 'American Civil War'),
(60, 'American Indian Wars'),
(61, 'American Revolutionary War'),
(62, 'American West'),
(63, 'Ancient'),
(64, 'Animals'),
(65, 'Arabian'),
(66, 'Aviation / Flight'),
(67, 'Bluffing'),
(68, 'Book'),
(69, 'Card Game'),
(70, 'Children\'s Game'),
(71, 'City Building'),
(72, 'Civil War'),
(73, 'Civilization'),
(74, 'Collectible Components'),
(75, 'Comic Book / Strip'),
(76, 'Deduction'),
(77, 'Dice'),
(78, 'Economic'),
(79, 'Educational'),
(80, 'Electronic'),
(81, 'Environmental'),
(82, 'Expansion for Base-game'),
(83, 'Exploration'),
(84, 'Fan Expansion'),
(85, 'Fantasy'),
(86, 'Farming'),
(87, 'Fighting'),
(88, 'Game System'),
(89, 'Horror'),
(90, 'Humor'),
(91, 'Industry / Manufacturing'),
(92, 'Korean War'),
(93, 'Mafia'),
(94, 'Math'),
(95, 'Mature / Adult'),
(96, 'Maze'),
(97, 'Medical'),
(98, 'Medieval'),
(99, 'Memory'),
(100, 'Miniatures'),
(101, ' Modern Warfare'),
(102, 'Movies / TV / Radio theme'),
(103, 'Murder/Mystery'),
(104, 'Music'),
(105, 'Mythology'),
(106, 'Napoleonic'),
(107, 'Nautical'),
(108, 'Negotiation'),
(109, 'Novel-based'),
(110, 'Number'),
(111, 'Party Game'),
(112, 'Pike and Shot'),
(113, 'Pirates'),
(114, 'Political'),
(115, 'Post-Napoleonic'),
(116, 'Prehistoric'),
(117, 'Print & Play'),
(118, 'Puzzle'),
(119, 'Racing'),
(120, 'Real-time'),
(121, 'Religious'),
(122, 'Renaissance'),
(123, 'Science Fiction'),
(124, 'Space Exploration'),
(125, 'Spies/Secret Agents'),
(126, 'Sports'),
(127, 'Territory Building'),
(128, 'Trains'),
(129, 'Transportation'),
(130, 'Travel'),
(131, 'Trivia'),
(132, 'Video Game Theme'),
(133, 'Vietnam War'),
(134, 'Wargame'),
(135, 'Word Game'),
(136, 'World War I'),
(137, 'World War II'),
(138, 'Zombies');

-- --------------------------------------------------------

--
-- Structure de la table `difficulty`
--

DROP TABLE IF EXISTS `difficulty`;
CREATE TABLE IF NOT EXISTS `difficulty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `difficulty`
--

INSERT INTO `difficulty` (`id`, `name`) VALUES
(1, 'débutant'),
(2, 'facile'),
(3, 'intermédiaire'),
(4, 'expert');

-- --------------------------------------------------------

--
-- Structure de la table `mechanism`
--

DROP TABLE IF EXISTS `mechanism`;
CREATE TABLE IF NOT EXISTS `mechanism` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `mechanism`
--

INSERT INTO `mechanism` (`id`, `name`) VALUES
(10, 'Acting'),
(11, 'Action / Movement Programming'),
(12, 'Action Point Allowance System'),
(13, 'Area Control / Area Influence'),
(14, 'Area Enclosure'),
(15, 'Area Movement'),
(16, 'Area-Impulse'),
(17, 'Auction/Bidding'),
(18, 'Betting/Wagering'),
(19, 'Campaign / Battle Card Driven'),
(20, 'Card Drafting'),
(21, 'Chit-Pull System'),
(22, 'Commodity Speculation'),
(23, 'Cooperative Play'),
(24, 'Crayon Rail System'),
(25, 'Deck / Pool Building'),
(26, 'Dice Rolling'),
(27, 'Grid Movement'),
(28, 'Hand Management'),
(29, 'Hex-and-Counter'),
(30, 'Hidden Traitor'),
(31, 'Line Drawing'),
(32, 'Memory'),
(33, 'Modular Board'),
(34, 'Paper-and-Pencil'),
(35, 'Partnerships'),
(36, 'Pattern Building'),
(37, 'Pattern Recognition'),
(38, 'Pick-up and Deliver'),
(39, 'Player Elimination'),
(40, 'Point to Point Movement'),
(41, 'Press Your Luck'),
(42, 'Rock-Paper-Scissors'),
(43, 'Role Playing'),
(44, 'Roll / Spin and Move'),
(45, 'Rondel'),
(46, 'Route/Network Building'),
(47, 'Secret Unit Deployment'),
(48, 'Set Collection'),
(49, 'Simulation'),
(50, 'Simultaneous Action Selection'),
(51, 'Singing'),
(52, 'Stock Holding'),
(53, 'Storytelling'),
(54, 'STR-01 Competitive Games'),
(55, 'Take That'),
(56, 'Tile Placement'),
(57, 'Time Track'),
(58, ' Trading'),
(59, 'Trick-taking'),
(60, 'Variable Phase Order'),
(61, 'Variable Player Powers'),
(62, 'Voting'),
(63, 'Worker Placement');

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

DROP TABLE IF EXISTS `migration_versions`;
CREATE TABLE IF NOT EXISTS `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20190722163908', '2019-07-22 16:39:38'),
('20190827134855', '2019-08-27 13:49:18'),
('20190828064753', '2019-08-28 06:48:16');

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

DROP TABLE IF EXISTS `player`;
CREATE TABLE IF NOT EXISTS `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `theme`
--

DROP TABLE IF EXISTS `theme`;
CREATE TABLE IF NOT EXISTS `theme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `theme`
--

INSERT INTO `theme` (`id`, `name`) VALUES
(9, 'Espace'),
(10, 'Guerre'),
(11, 'western'),
(12, 'Mythologie'),
(13, 'Fantasy'),
(14, 'Pirates'),
(15, 'Histoire'),
(16, 'Moyen Age'),
(17, 'Manga/Marcel/DC'),
(18, 'Apéro'),
(19, 'Post-Apocalypse');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `bgame`
--
ALTER TABLE `bgame`
  ADD CONSTRAINT `FK_27BF3DA0FCFA9DAE` FOREIGN KEY (`difficulty_id`) REFERENCES `difficulty` (`id`);

--
-- Contraintes pour la table `bgame_category`
--
ALTER TABLE `bgame_category`
  ADD CONSTRAINT `FK_1E74922612469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_1E7492268E0F7ED4` FOREIGN KEY (`bgame_id`) REFERENCES `bgame` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `bgame_mechanism`
--
ALTER TABLE `bgame_mechanism`
  ADD CONSTRAINT `FK_BC1D512F37CD6DD0` FOREIGN KEY (`mechanism_id`) REFERENCES `mechanism` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_BC1D512F8E0F7ED4` FOREIGN KEY (`bgame_id`) REFERENCES `bgame` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `bgame_player`
--
ALTER TABLE `bgame_player`
  ADD CONSTRAINT `FK_311752B98E0F7ED4` FOREIGN KEY (`bgame_id`) REFERENCES `bgame` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_311752B999E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
