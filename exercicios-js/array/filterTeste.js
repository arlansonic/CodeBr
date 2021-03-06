const { Console } = require("console")
const { Z_FULL_FLUSH } = require("zlib")

const funcionarios = [
      {
        id: 1,
        nome: 'Feodor',
        sobrenome: 'Pheby',
        email: 'fpheby0@163.com',
        genero: 'M',
        cidade: 'Bal’shavik',
        pais: 'Belarus',
        empresa: 'Dabjam',
        salario: 2401.69
      },
      {
        id: 2,
        nome: 'Irwinn',
        sobrenome: 'Pridmore',
        email: 'ipridmore1@squarespace.com',
        genero: 'M',
        cidade: 'Pancoran',
        pais: 'Indonesia',
        empresa: 'Topicshots',
        salario: 12347.24
      },
      {
        id: 3,
        nome: 'Cedric',
        sobrenome: 'Ormes',
        email: 'cormes2@yale.edu',
        genero: 'M',
        cidade: 'Sanli',
        pais: 'China',
        empresa: 'Digitube',
        salario: 22018.66
      },
      {
        id: 4,
        nome: 'Reina',
        sobrenome: 'Borth',
        email: 'rborth3@furl.net',
        genero: 'F',
        cidade: 'Vysokovsk',
        pais: 'Russia',
        empresa: 'Jaxspan',
        salario: 11064.27
      },
      {
        id: 5,
        nome: 'Gwenny',
        sobrenome: 'Burnhill',
        email: 'gburnhill4@nature.com',
        genero: 'F',
        cidade: 'El Puente',
        pais: 'Honduras',
        empresa: 'Thoughtstorm',
        salario: 19942.83
      },
      {
        id: 6,
        nome: 'Sindee',
        sobrenome: 'Lavington',
        email: 'slavington5@howstuffworks.com',
        genero: 'F',
        cidade: 'El Valle del Espíritu Santo',
        pais: 'Venezuela',
        empresa: 'Jayo',
        salario: 6907.48
      },
      {
        id: 7,
        nome: 'Ingamar',
        sobrenome: 'Ewdale',
        email: 'iewdale6@drupal.org',
        genero: 'M',
        cidade: 'Paris 19',
        pais: 'France',
        empresa: 'Eare',
        salario: 18069.6
      },
      {
        id: 8,
        nome: 'Waverly',
        sobrenome: 'Vassbender',
        email: 'wvassbender7@nba.com',
        genero: 'M',
        cidade: 'Xiakou',
        pais: 'China',
        empresa: 'Digitube',
        salario: 15995.7
      },
      {
        id: 9,
        nome: 'Dunstan',
        sobrenome: 'Wakeling',
        email: 'dwakeling8@wsj.com',
        genero: 'M',
        cidade: 'Kakata',
        pais: 'Liberia',
        empresa: 'Devshare',
        salario: 11287.61
      },
      {
        id: 10,
        nome: 'Forrester',
        sobrenome: 'Ciccottio',
        email: 'fciccottio9@dot.gov',
        genero: 'M',
        cidade: 'Chaoyang',
        pais: 'China',
        empresa: 'Kayveo',
        salario: 17309.69
      },
      {
        id: 11,
        nome: 'Erick',
        sobrenome: 'Cosgrive',
        email: 'ecosgrivea@sakura.ne.jp',
        genero: 'M',
        cidade: 'Qızılhacılı',
        pais: 'Azerbaijan',
        empresa: 'Jabbertype',
        salario: 16813.8
      },
      {
        id: 12,
        nome: 'Trish',
        sobrenome: 'Oleszczak',
        email: 'toleszczakb@foxnews.com',
        genero: 'F',
        cidade: 'Meicheng',
        pais: 'China',
        empresa: 'Abatz',
        salario: 16158.43
      },
      {
        id: 13,
        nome: 'Ewart',
        sobrenome: 'Tittershill',
        email: 'etittershillc@printfriendly.com',
        genero: 'M',
        cidade: 'Mogapinyana',
        pais: 'Botswana',
        empresa: 'Fiveclub',
        salario: 15565.55
      },
      {
        id: 14,
        nome: 'Bethena',
        sobrenome: 'Hatherley',
        email: 'bhatherleyd@amazon.de',
        genero: 'F',
        cidade: 'Taiyuan',
        pais: 'China',
        empresa: 'Eidel',
        salario: 7293.7
      },
      {
        id: 15,
        nome: 'Sullivan',
        sobrenome: 'Brookwood',
        email: 'sbrookwoode@examiner.com',
        genero: 'M',
        cidade: 'Yandian',
        pais: 'China',
        empresa: 'Gigashots',
        salario: 8966.21
      },
      {
        id: 16,
        nome: 'Fritz',
        sobrenome: 'McGrath',
        email: 'fmcgrathf@amazon.co.uk',
        genero: 'M',
        cidade: 'Sagud-Bahley',
        pais: 'Philippines',
        empresa: 'Vidoo',
        salario: 18799.62
      },
      {
        id: 17,
        nome: 'Audie',
        sobrenome: 'Andric',
        email: 'aandricg@sciencedaily.com',
        genero: 'F',
        cidade: 'Malpique',
        pais: 'Portugal',
        empresa: 'Livetube',
        salario: 3589.92
      },
      {
        id: 18,
        nome: 'Holly',
        sobrenome: 'Bainbrigge',
        email: 'hbainbriggeh@sogou.com',
        genero: 'M',
        cidade: 'Sherbrooke',
        pais: 'Canada',
        empresa: 'Babblestorm',
        salario: 15231.44
      },
      {
        id: 19,
        nome: 'Welsh',
        sobrenome: 'Duncklee',
        email: 'wdunckleei@wunderground.com',
        genero: 'M',
        cidade: 'Tiaong',
        pais: 'Philippines',
        empresa: 'Kwideo',
        salario: 2393.28
      },
      {
        id: 20,
        nome: 'Ivar',
        sobrenome: 'Shugg',
        email: 'ishuggj@imdb.com',
        genero: 'M',
        cidade: 'Baiguo',
        pais: 'China',
        empresa: 'Blogtags',
        salario: 19440.66
      },
      {
        id: 21,
        nome: 'Rex',
        sobrenome: 'Calliss',
        email: 'rcallissk@twitter.com',
        genero: 'M',
        cidade: 'Ning’an',
        pais: 'China',
        empresa: 'Vitz',
        salario: 12263.33
      },
      {
        id: 22,
        nome: 'Jecho',
        sobrenome: 'Saye',
        email: 'jsayel@businesswire.com',
        genero: 'M',
        cidade: 'Anilao',
        pais: 'Philippines',
        empresa: 'Dynazzy',
        salario: 6863.78
      },
      {
        id: 23,
        nome: 'Horten',
        sobrenome: 'Downgate',
        email: 'hdowngatem@usnews.com',
        genero: 'M',
        cidade: 'Buenos Aires',
        pais: 'Peru',
        empresa: 'Brainlounge',
        salario: 11649.8
      },
      {
        id: 24,
        nome: 'Daphna',
        sobrenome: 'Dey',
        email: 'ddeyn@illinois.edu',
        genero: 'F',
        cidade: 'Urshel’skiy',
        pais: 'Russia',
        empresa: 'Topicstorm',
        salario: 10758.83
      },
      {
        id: 25,
        nome: 'Rebeka',
        sobrenome: 'Firmage',
        email: 'rfirmageo@nationalgeographic.com',
        genero: 'F',
        cidade: 'Apongo',
        pais: 'Peru',
        empresa: 'Fanoodle',
        salario: 21634.87
      },
      {
        id: 26,
        nome: 'Zelda',
        sobrenome: 'Bollands',
        email: 'zbollandsp@google.com.br',
        genero: 'F',
        cidade: 'Souto de Cima',
        pais: 'Portugal',
        empresa: 'Feedbug',
        salario: 18322.19
      },
      {
        id: 27,
        nome: 'Paige',
        sobrenome: 'Layton',
        email: 'playtonq@nature.com',
        genero: 'F',
        cidade: 'Charyshskoye',
        pais: 'Russia',
        empresa: 'JumpXS',
        salario: 8340.03
      },
      {
        id: 28,
        nome: 'Sharla',
        sobrenome: 'Buddington',
        email: 'sbuddingtonr@goo.ne.jp',
        genero: 'F',
        cidade: 'Glogovac',
        pais: 'Kosovo',
        empresa: 'Photobean',
        salario: 13708.03
      },
      {
        id: 29,
        nome: 'Ashleigh',
        sobrenome: 'Liebrecht',
        email: 'aliebrechts@123-reg.co.uk',
        genero: 'F',
        cidade: 'Zhenxing',
        pais: 'China',
        empresa: 'Zoovu',
        salario: 15088.09
      },
      {
        id: 30,
        nome: 'Cora',
        sobrenome: 'Yashaev',
        email: 'cyashaevt@ow.ly',
        genero: 'F',
        cidade: 'Kali',
        pais: 'Indonesia',
        empresa: 'Ailane',
        salario: 21017.88
      },
      {
        id: 31,
        nome: 'Pincus',
        sobrenome: 'Sexten',
        email: 'psextenu@seesaa.net',
        genero: 'M',
        cidade: 'Halimaung Jaya (F-3)',
        pais: 'Indonesia',
        empresa: 'Quire',
        salario: 2765.45
      },
      {
        id: 32,
        nome: 'Olag',
        sobrenome: 'Tomasini',
        email: 'otomasiniv@4shared.com',
        genero: 'M',
        cidade: 'Kungshamn',
        pais: 'Sweden',
        empresa: 'Jabberstorm',
        salario: 9753.25
      },
      {
        id: 33,
        nome: 'Ruggiero',
        sobrenome: 'Mallard',
        email: 'rmallardw@youtu.be',
        genero: 'M',
        cidade: 'Patsi',
        pais: 'Comoros',
        empresa: 'Photobean',
        salario: 8544.99
      },
      {
        id: 34,
        nome: 'Fawn',
        sobrenome: 'Jakucewicz',
        email: 'fjakucewiczx@independent.co.uk',
        genero: 'F',
        cidade: 'Cabanbanan',
        pais: 'Philippines',
        empresa: 'Skipstorm',
        salario: 19717.65
      },
      {
        id: 35,
        nome: 'Fredrika',
        sobrenome: 'Learmonth',
        email: 'flearmonthy@storify.com',
        genero: 'F',
        cidade: 'Prómachoi',
        pais: 'Greece',
        empresa: 'Wordify',
        salario: 3718.37
      },
      {
        id: 36,
        nome: 'Viviana',
        sobrenome: 'Kubyszek',
        email: 'vkubyszekz@fema.gov',
        genero: 'F',
        cidade: 'Colegiales',
        pais: 'Argentina',
        empresa: 'Feedbug',
        salario: 16320.97
      },
      {
        id: 37,
        nome: 'Roslyn',
        sobrenome: 'Laetham',
        email: 'rlaetham10@nasa.gov',
        genero: 'F',
        cidade: 'Petare',
        pais: 'Venezuela',
        empresa: 'Blogpad',
        salario: 7560.42
      },
      {
        id: 38,
        nome: 'Shaughn',
        sobrenome: 'Dallaghan',
        email: 'sdallaghan11@hc360.com',
        genero: 'M',
        cidade: 'Hougang',
        pais: 'China',
        empresa: 'Quire',
        salario: 3448.31
      },
      {
        id: 39,
        nome: 'Johannes',
        sobrenome: 'Renner',
        email: 'jrenner12@washingtonpost.com',
        genero: 'M',
        cidade: 'Koh Kong',
        pais: 'Cambodia',
        empresa: 'Skyba',
        salario: 5384.49
      },
      {
        id: 40,
        nome: 'Natal',
        sobrenome: 'Iacoboni',
        email: 'niacoboni13@scribd.com',
        genero: 'M',
        cidade: 'Al Majāridah',
        pais: 'Saudi Arabia',
        empresa: 'Thoughtmix',
        salario: 14584.88
      },
      {
        id: 41,
        nome: 'Sonia',
        sobrenome: 'Raubenheimer',
        email: 'sraubenheimer14@domainmarket.com',
        genero: 'F',
        cidade: 'Chenfangji',
        pais: 'China',
        empresa: 'Voomm',
        salario: 22943.09
      },
      {
        id: 42,
        nome: 'Brose',
        sobrenome: 'Moneypenny',
        email: 'bmoneypenny15@aboutads.info',
        genero: 'M',
        cidade: 'Funaishikawa',
        pais: 'Japan',
        empresa: 'Abatz',
        salario: 12643.81
      },
      {
        id: 43,
        nome: 'Curtis',
        sobrenome: 'Saveall',
        email: 'csaveall16@stumbleupon.com',
        genero: 'M',
        cidade: 'Krajan Satu',
        pais: 'Indonesia',
        empresa: 'Avavee',
        salario: 17626.62
      },
      {
        id: 44,
        nome: 'Jonas',
        sobrenome: 'Castillou',
        email: 'jcastillou17@ft.com',
        genero: 'M',
        cidade: 'Wanghu',
        pais: 'China',
        empresa: 'Youtags',
        salario: 9400.01
      },
      {
        id: 45,
        nome: 'Doralynn',
        sobrenome: 'Thoresby',
        email: 'dthoresby18@macromedia.com',
        genero: 'F',
        cidade: 'Zhuli',
        pais: 'China',
        empresa: 'Photofeed',
        salario: 14475.7
      },
      {
        id: 46,
        nome: 'Nat',
        sobrenome: 'Martinets',
        email: 'nmartinets19@scientificamerican.com',
        genero: 'F',
        cidade: 'Klagenfurt am Wörthersee',
        pais: 'Austria',
        empresa: 'Brightdog',
        salario: 5768.19
      },
      {
        id: 47,
        nome: 'Reinhold',
        sobrenome: 'Cosans',
        email: 'rcosans1a@smh.com.au',
        genero: 'M',
        cidade: 'Cabeça Gorda',
        pais: 'Portugal',
        empresa: 'Tagchat',
        salario: 15893.6
      },
      {
        id: 48,
        nome: 'Emiline',
        sobrenome: 'Arton',
        email: 'earton1b@un.org',
        genero: 'F',
        cidade: 'Buin',
        pais: 'Chile',
        empresa: 'Abata',
        salario: 3610.05
      },
      {
        id: 49,
        nome: 'Rad',
        sobrenome: 'Sporner',
        email: 'rsporner1c@noaa.gov',
        genero: 'M',
        cidade: 'Lagunas',
        pais: 'Peru',
        empresa: 'Realbuzz',
        salario: 17476.61
      },
      {
        id: 50,
        nome: 'Freemon',
        sobrenome: 'Cankett',
        email: 'fcankett1d@networksolutions.com',
        genero: 'M',
        cidade: 'Komsomolets',
        pais: 'Russia',
        empresa: 'Meejo',
        salario: 19144.88
      },
      {
        id: 51,
        nome: 'Orazio',
        sobrenome: 'McCord',
        email: 'omccord1e@twitpic.com',
        genero: 'M',
        cidade: 'Gambut',
        pais: 'Indonesia',
        empresa: 'Blognation',
        salario: 9925.7
      },
      {
        id: 52,
        nome: 'Tymon',
        sobrenome: 'Tacon',
        email: 'ttacon1f@slideshare.net',
        genero: 'M',
        cidade: 'Iyo',
        pais: 'Japan',
        empresa: 'Flashpoint',
        salario: 9661.26
      },
      {
        id: 53,
        nome: 'Malvin',
        sobrenome: 'Kemp',
        email: 'mkemp1g@de.vu',
        genero: 'M',
        cidade: 'Antalaha',
        pais: 'Madagascar',
        empresa: 'Feedbug',
        salario: 18799.09
      },
      {
        id: 54,
        nome: 'Loree',
        sobrenome: 'Reinbeck',
        email: 'lreinbeck1h@cbc.ca',
        genero: 'F',
        cidade: 'Manwakh',
        pais: 'Yemen',
        empresa: 'Gabspot',
        salario: 4527.48
      },
      {
        id: 55,
        nome: 'Witty',
        sobrenome: 'MacArthur',
        email: 'wmacarthur1i@about.com',
        genero: 'M',
        cidade: 'Rosmalen',
        pais: 'Netherlands',
        empresa: 'Rhynyx',
        salario: 5623.15
      },
      {
        id: 56,
        nome: 'Angel',
        sobrenome: 'Gladeche',
        email: 'agladeche1j@time.com',
        genero: 'F',
        cidade: 'Hetang',
        pais: 'China',
        empresa: 'Oyoyo',
        salario: 18332.04
      },
      {
        id: 57,
        nome: 'Fabe',
        sobrenome: 'Spinks',
        email: 'fspinks1k@edublogs.org',
        genero: 'M',
        cidade: 'Yemva',
        pais: 'Russia',
        empresa: 'Photofeed',
        salario: 12532.79
      },
      {
        id: 58,
        nome: 'Annabel',
        sobrenome: 'Zellner',
        email: 'azellner1l@domainmarket.com',
        genero: 'F',
        cidade: 'Huangtudian',
        pais: 'China',
        empresa: 'Kanoodle',
        salario: 13943.24
      },
      {
        id: 59,
        nome: 'Keith',
        sobrenome: 'Annott',
        email: 'kannott1m@oakley.com',
        genero: 'M',
        cidade: 'Bajiao',
        pais: 'China',
        empresa: 'Buzzdog',
        salario: 4410.56
      },
      {
        id: 60,
        nome: 'Barb',
        sobrenome: 'Ezzy',
        email: 'bezzy1n@bizjournals.com',
        genero: 'F',
        cidade: 'Marcovia',
        pais: 'Honduras',
        empresa: 'Youspan',
        salario: 20713.23
      },
      {
        id: 61,
        nome: 'Hewett',
        sobrenome: 'Pirot',
        email: 'hpirot1o@fda.gov',
        genero: 'M',
        cidade: 'Dongzha',
        pais: 'China',
        empresa: 'Kanoodle',
        salario: 13646.56
      },
      {
        id: 62,
        nome: 'Terencio',
        sobrenome: 'Mayho',
        email: 'tmayho1p@washingtonpost.com',
        genero: 'M',
        cidade: 'Marinilla',
        pais: 'Colombia',
        empresa: 'Jamia',
        salario: 12056.37
      },
      {
        id: 63,
        nome: 'Wheeler',
        sobrenome: 'Woodrow',
        email: 'wwoodrow1q@qq.com',
        genero: 'M',
        cidade: 'Seymchan',
        pais: 'Russia',
        empresa: 'Meevee',
        salario: 20567.28
      },
      {
        id: 64,
        nome: 'Mike',
        sobrenome: 'McArte',
        email: 'mmcarte1r@npr.org',
        genero: 'M',
        cidade: 'Shumikha',
        pais: 'Russia',
        empresa: 'Edgetag',
        salario: 17891.92
      },
      {
        id: 65,
        nome: 'Patricio',
        sobrenome: 'Ansell',
        email: 'pansell1s@dedecms.com',
        genero: 'M',
        cidade: 'Wangcheng',
        pais: 'China',
        empresa: 'Trunyx',
        salario: 12804.31
      },
      {
        id: 66,
        nome: 'Trace',
        sobrenome: 'Caspell',
        email: 'tcaspell1t@flickr.com',
        genero: 'M',
        cidade: 'Rasshevatskaya',
        pais: 'Russia',
        empresa: 'Shufflebeat',
        salario: 6448.66
      },
      {
        id: 67,
        nome: 'Pieter',
        sobrenome: 'Twigley',
        email: 'ptwigley1u@businessinsider.com',
        genero: 'M',
        cidade: 'Dairiti',
        pais: 'Indonesia',
        empresa: 'Izio',
        salario: 7286.36
      },
      {
        id: 68,
        nome: 'Bevan',
        sobrenome: 'Bussons',
        email: 'bbussons1v@microsoft.com',
        genero: 'M',
        cidade: 'Bellavista',
        pais: 'Peru',
        empresa: 'Yodo',
        salario: 8659.65
      },
      {
        id: 69,
        nome: 'Tish',
        sobrenome: 'Brimelow',
        email: 'tbrimelow1w@shinystat.com',
        genero: 'F',
        cidade: 'Pereiras',
        pais: 'Portugal',
        empresa: 'Bluezoom',
        salario: 17390.19
      },
      {
        id: 70,
        nome: 'Helge',
        sobrenome: 'Casarili',
        email: 'hcasarili1x@dyndns.org',
        genero: 'F',
        cidade: 'Amu Gulang Baolige',
        pais: 'China',
        empresa: 'Divavu',
        salario: 14122.44
      },
      {
        id: 71,
        nome: 'Ange',
        sobrenome: 'Pocke',
        email: 'apocke1y@facebook.com',
        genero: 'F',
        cidade: 'Gelsenkirchen',
        pais: 'Germany',
        empresa: 'Flipbug',
        salario: 19835.99
      },
      {
        id: 72,
        nome: 'Kim',
        sobrenome: 'Amps',
        email: 'kamps1z@deliciousdays.com',
        genero: 'F',
        cidade: 'Perivólia',
        pais: 'Cyprus',
        empresa: 'Trunyx',
        salario: 3382.8
      },
      {
        id: 73,
        nome: 'Blakeley',
        sobrenome: 'Zannuto',
        email: 'bzannuto20@ask.com',
        genero: 'F',
        cidade: 'Bateria',
        pais: 'Philippines',
        empresa: 'Flashpoint',
        salario: 8927.97
      },
      {
        id: 74,
        nome: 'Tatum',
        sobrenome: 'Birrel',
        email: 'tbirrel21@simplemachines.org',
        genero: 'F',
        cidade: 'Ōzu',
        pais: 'Japan',
        empresa: 'Cogibox',
        salario: 15852.15
      },
      {
        id: 75,
        nome: 'Winona',
        sobrenome: 'Thieme',
        email: 'wthieme22@diigo.com',
        genero: 'F',
        cidade: 'Xinsheng',
        pais: 'China',
        empresa: 'Kwideo',
        salario: 21549.45
      },
      {
        id: 76,
        nome: 'Yves',
        sobrenome: 'Nowaczyk',
        email: 'ynowaczyk23@google.nl',
        genero: 'M',
        cidade: 'Dongdu',
        pais: 'China',
        empresa: 'Skibox',
        salario: 18994.95
      },
      {
        id: 77,
        nome: 'Riannon',
        sobrenome: 'Danford',
        email: 'rdanford24@chronoengine.com',
        genero: 'F',
        cidade: 'Mahaddayweyne',
        pais: 'Somalia',
        empresa: 'Realblab',
        salario: 1684.9
      },
      {
        id: 78,
        nome: 'Shirl',
        sobrenome: 'Gradon',
        email: 'sgradon25@arizona.edu',
        genero: 'F',
        cidade: 'Zitong',
        pais: 'China',
        empresa: 'Cogibox',
        salario: 16774.53
      },
      {
        id: 79,
        nome: 'Ruthe',
        sobrenome: 'McKinna',
        email: 'rmckinna26@exblog.jp',
        genero: 'F',
        cidade: 'Pingyang',
        pais: 'China',
        empresa: 'Skiptube',
        salario: 19302.47
      },
      {
        id: 80,
        nome: 'Keriann',
        sobrenome: 'Dorrell',
        email: 'kdorrell27@mapquest.com',
        genero: 'F',
        cidade: 'Santa Gertrudes',
        pais: 'Brazil',
        empresa: 'Kwilith',
        salario: 10732.53
      },
      {
        id: 81,
        nome: 'Richmond',
        sobrenome: 'Grainger',
        email: 'rgrainger28@studiopress.com',
        genero: 'M',
        cidade: 'Aileu',
        pais: 'East Timor',
        empresa: 'Rooxo',
        salario: 22174.02
      },
      {
        id: 82,
        nome: 'Danny',
        sobrenome: 'Sauniere',
        email: 'dsauniere29@ucoz.ru',
        genero: 'M',
        cidade: 'Sayansk',
        pais: 'Russia',
        empresa: 'Jaloo',
        salario: 17532.83
      },
      {
        id: 83,
        nome: 'Rois',
        sobrenome: 'Rude',
        email: 'rrude2a@ebay.co.uk',
        genero: 'F',
        cidade: 'Lewin Kłodzki',
        pais: 'Poland',
        empresa: 'Voomm',
        salario: 9878.99
      },
      {
        id: 84,
        nome: 'Vina',
        sobrenome: 'Snelgrove',
        email: 'vsnelgrove2b@cam.ac.uk',
        genero: 'F',
        cidade: 'Serrana',
        pais: 'Brazil',
        empresa: 'Trudoo',
        salario: 20864.06
      },
      {
        id: 85,
        nome: 'Siward',
        sobrenome: 'Sheering',
        email: 'ssheering2c@pen.io',
        genero: 'M',
        cidade: 'Kete Krachi',
        pais: 'Ghana',
        empresa: 'Jabbertype',
        salario: 10907.23
      },
      {
        id: 86,
        nome: 'Bat',
        sobrenome: 'Bartens',
        email: 'bbartens2d@storify.com',
        genero: 'M',
        cidade: 'Mandaon',
        pais: 'Philippines',
        empresa: 'Babblestorm',
        salario: 3840.6
      },
      {
        id: 87,
        nome: 'Codee',
        sobrenome: 'Poad',
        email: 'cpoad2e@wikimedia.org',
        genero: 'F',
        cidade: 'Beranci',
        pais: 'Macedonia',
        empresa: 'Youtags',
        salario: 5576.22
      },
      {
        id: 88,
        nome: 'Ronnica',
        sobrenome: 'Lake',
        email: 'rlake2f@who.int',
        genero: 'F',
        cidade: 'Maisí',
        pais: 'Cuba',
        empresa: 'Lazzy',
        salario: 8331.9
      },
      {
        id: 89,
        nome: 'Mandie',
        sobrenome: 'Mustin',
        email: 'mmustin2g@vkontakte.ru',
        genero: 'F',
        cidade: 'Tammela',
        pais: 'Finland',
        empresa: 'Rhycero',
        salario: 14215.93
      },
      {
        id: 90,
        nome: 'Gardiner',
        sobrenome: 'Beesley',
        email: 'gbeesley2h@bizjournals.com',
        genero: 'M',
        cidade: 'Carvalhal',
        pais: 'Portugal',
        empresa: 'Midel',
        salario: 9887.5
      },
      {
        id: 91,
        nome: 'Levy',
        sobrenome: 'Foston',
        email: 'lfoston2i@bluehost.com',
        genero: 'M',
        cidade: 'Shuicha',
        pais: 'China',
        empresa: 'Flashpoint',
        salario: 20810.32
      },
      {
        id: 92,
        nome: 'Minna',
        sobrenome: 'Childes',
        email: 'mchildes2j@rediff.com',
        genero: 'F',
        cidade: 'Tuochuan',
        pais: 'China',
        empresa: 'Blogtag',
        salario: 19433.39
      },
      {
        id: 93,
        nome: 'Brigid',
        sobrenome: 'Brolly',
        email: 'bbrolly2k@fc2.com',
        genero: 'F',
        cidade: 'Kitāf',
        pais: 'Yemen',
        empresa: 'Thoughtbeat',
        salario: 6286.7
      },
      {
        id: 94,
        nome: 'Jillene',
        sobrenome: 'McIlhagga',
        email: 'jmcilhagga2l@moonfruit.com',
        genero: 'F',
        cidade: 'Bogoria',
        pais: 'Poland',
        empresa: 'Centidel',
        salario: 1434.66
      },
      {
        id: 95,
        nome: 'Heath',
        sobrenome: 'De Ambrosi',
        email: 'hdeambrosi2m@imgur.com',
        genero: 'M',
        cidade: 'Alilem',
        pais: 'Philippines',
        empresa: 'Twitterbeat',
        salario: 7832.05
      },
      {
        id: 96,
        nome: 'Mahmoud',
        sobrenome: 'Edscer',
        email: 'medscer2n@ftc.gov',
        genero: 'M',
        cidade: 'Karjalohja',
        pais: 'Finland',
        empresa: 'Pixonyx',
        salario: 5360.19
      },
      {
        id: 97,
        nome: 'Syman',
        sobrenome: 'Brelsford',
        email: 'sbrelsford2o@homestead.com',
        genero: 'M',
        cidade: 'Alejandro Roca',
        pais: 'Argentina',
        empresa: 'Mycat',
        salario: 18801.65
      },
      {
        id: 98,
        nome: 'Graeme',
        sobrenome: 'Driver',
        email: 'gdriver2p@behance.net',
        genero: 'M',
        cidade: 'Shitang',
        pais: 'China',
        empresa: 'Zazio',
        salario: 7491.49
      },
      {
        id: 99,
        nome: 'Donall',
        sobrenome: 'Boscher',
        email: 'dboscher2q@webnode.com',
        genero: 'M',
        cidade: 'Jiangya',
        pais: 'China',
        empresa: 'Feedspan',
        salario: 22894.64
      },
      {
        id: 100,
        nome: 'Uriel',
        sobrenome: 'Congreve',
        email: 'ucongreve2r@sina.com.cn',
        genero: 'M',
        cidade: 'Salmi',
        pais: 'Russia',
        empresa: 'Devpoint',
        salario: 22895.45
      }    
]

// exemplo 1 de pegar os salarios < 5000
// Fazendo com function

// console.log(funcionarios.filter(function(f){
//     return f.salario < 5000
// }))

// Pegando os paises 

console.log(funcionarios.filter(function(f){
    return f.pais == 'China'
}))

// Com Arrow Function - Pegando os id < 20

// const identificacao = funcionarios => funcionarios.id < 20
// console.log(funcionarios.filter(identificacao))

//  && f.salario < 1000
console.log(funcionarios.filter(function(f){
    if(f.genero == 'F' && f.pais == 'China'){
        return funcionarios.map(g => g.genero).reduce(function(fem){
            return fem
        })
    }
}))

