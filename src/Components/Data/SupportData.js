const data = [
    {
      id: 0,
      img: "https://r-scale-e0.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/8c8a58fa97c205ff222de3685497742c/78319b4b-e83e-4c0e-9e24-4457f63f576b.jpg?type=1&srcmode=0&srcx=1/1&srcy=39/100&srcw=1/1&srch=17/20&dstw=640&dsth=360&quality=80",
      title: 'Biedne kotki',
      author: 'Adam',
      value: 90,
      goal: 10000,
      contentTitle: "Zbiórka dla biednych kotków ze schroniska!",
      content: "Luty to całkiem dobry miesiąc dla Kotkowa. Nowego domu szuka teraz tylko około dziesięciu kotów. Nie to co latem, gdy rodzi się mnóstwo małych kociaków. Wtedy jednorazowo pomocy potrzebuje ich nawet ponad setka. A domów tymczasowych, gdzie można im dać schronienie, jest dziesięć. Ale żaden potrzebujący zwierzak nigdy nie zostanie bez pomocy. Nawet gdy oznacza to, że tymczasowy opiekun będzie ich miał wtedy 10 czy 12 jednocześnie. Białostockie Kotkowo to grupa zapaleńców i miłośników futrzaków, którzy w swoim wolnym czasie zupełnie bezinteresownie ratują koty. Zarówno te dopiero co urodzone, w piwnicy czy na działce, jak i nieco starsze, które rozpaczliwie potrzebują pomocy. I sterylizują te, które świetnie sobie radzą na wolności, aby zapobiegać kociej bezdomności. Przez ostatnie kilka lat Kotkowo (najpierw jako nieformalna grupa, teraz już jako fundacja) pomogło około 2 tysiącom kotów! Zaczęło się od Noki. Założycielka Kotkowa, Agata Kilon, ma w swoim mieszkaniu cztery dachowce. Wszystkie uratowane od niechybnej śmierci. Choć jeszcze kilka lat temu nie wyobrażała sobie, że tak potoczą się jej losy. - Wszystko zaczęło się w roku 2002. To wtedy w naszym życiu pojawiła się Nokia. Znalazłam ją w piwnicy, była malutka, biedna, nieszczęśliwa. Gdy już się odkarmiła i wydobrzała, pokazała swój charakter. Okazało się, że jest to najwredniejsza kotka jaką znamy - opowiada Agata. - Ale tak to chyba jest jak kota się sobie wybiera, bo to kot powinien sobie nas wybrać ",
      label: "home",
      owner: 0,
      awardsTitle: "Nagrody",
      awards: [
        {
          goal: 1000,
          content: "Nowy box dla biednych kotków",
        },
        {
          goal: 100,
          content: "Koce do spania dla kotków",
        },
        {
          goal: 50,
          content: "Karma dla kotków",
        },
        {
          goal: 10,
          content: "Kocie przysmaki",
        },
      ]
    },
    {
      id: 1,
        img: "https://2.allegroimg.com/original/124414/7f9559e544ec9a9d67ea91013732",
        title: 'Produkcja nowej gry RPG',
        author: 'Marek',
        value: 99,
        goal: 550,
        label: "home",
        owner: 1
    },
    {
      id: 2,
        img: "http://portaltatrzanski.pl/upload/article/11e05098f8e3f678e88ff0b8003b26b7.jpeg",
        title: 'Wyprawa na giewont',
        author: 'Piotr',
        value: 80,
        goal: 3400,
        label: "home",
        owner: 0
    },
    {
      id: 3,
        img: "https://lajt.co.uk/media/cache/original/uploads/article/2017/07/shutterstock_396876331.jpg",
        title: 'Wycieczka dla biednych dzieci z Polski',
        author: 'Paweł',
        value: 75,
        goal: 5000,
        label: "home",
        owner: 0
    },
    {
      id: 4,
      img: "https://ocdn.eu/pulscms-transforms/1/49qk9kqTURBXy9lYzdmYmJhNTI3OWQ3YzdhZGYzY2JiNTUwZWI3OGU1OS5qcGVnk5UDAHjNDxnNCH6TBc0DFM0BvJMJpmZlZTg0MAaBoTAB/watykan-informacje-o-najmniejszym-kraju-swiata.jpg",
      title: 'Wycieczka do papieża',
      author: 'Adam',
      value: 50,
      goal: 5000,
      label: "travel",
      owner: 0
    },
    {
      id: 5,
        img: "http://www.national-geographic.pl/media/cache/default_view/uploads/media/default/0013/39/9f62d4e5ee84b35d436e238935663e6d79eb0df7.jpeg",
        title: 'Wymarzone morze',
        author: 'Marek',
        value: 15,
        goal: 5000,
        label: "travel",
        owner: 0
    },
    {
      id: 6,
        img: "https://lovelajf.pl/wp-content/uploads/elementor/thumbs/podroz-dookola-swiata-trasa-1250x480-e1517481843952-nl85dn2c5w2urh5pr7critxc7e049oid91ib1db2b4.jpg",
        title: 'Podróż dookoła świata',
        author: 'Paweł',
        value: 67,
        goal: 5000,
        label: "travel",
        owner: 0
    },
    {
      id: 7,
        img: "http://portaltatrzanski.pl/upload/article/11e05098f8e3f678e88ff0b8003b26b7.jpeg",
        title: 'Wyprawa na giewont',
        author: 'Piotr',
        value: 80,
        goal: 5000,
        label: "travel",
        owner: 0
    },
    {
      id: 8,
        img: "https://lajt.co.uk/media/cache/original/uploads/article/2017/07/shutterstock_396876331.jpg",
        title: 'Wycieczka dla biednych dzieci z Polski',
        author: 'Paweł',
        value: 44,
        goal: 5000,
        label: "travel",
        owner: 0
    },
    {
      id: 9,
      img: "https://r-scale-e0.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/8c8a58fa97c205ff222de3685497742c/78319b4b-e83e-4c0e-9e24-4457f63f576b.jpg?type=1&srcmode=0&srcx=1/1&srcy=39/100&srcw=1/1&srch=17/20&dstw=640&dsth=360&quality=80",
      title: 'Biedne kotki',
      author: 'Adam',
      value: 90,
      goal: 5000,
      label: "healt",
      owner: 0
    },
    {
      id: 10,
      img: "https://apteline-cms.azureedge.net/cdntypo3/_processed1_/5/9/csm_szczepionka%205w1_Olexandr_fotolia_a4ed96f581.jpg",
      title: 'Szczpionka na choroby',
      author: 'Radek',
      value: 40,
      goal: 5000,
      label: "healt",
      owner: 0
    },
    {
      id: 11,
      img: "https://www.radiomaryja.pl/wp-content/uploads/2017/09/szczoteczki-dzieci-afryka.jpg",
      title: 'Leki dla dzieci z afryki',
      author: 'Mariusz',
      value: 90,
      goal: 5000,
      label: "healt",
      owner: 0
    },
    {
      id: 12,
      img: "https://miastodzieci.pl/wp-content/uploads/2010/06/puppies-2243686_1920.jpg",
      title: 'Biedne pieski',
      author: 'Adam',
      value: 90,
      goal: 5000,
      label: "healt",
      owner: 0
    },
    {
      id: 13,
        img: "https://2.allegroimg.com/original/124414/7f9559e544ec9a9d67ea91013732",
        title: 'Produkcja nowej gry RPG',
        author: 'Marek',
        value: 39,
        goal: 5000,
        label: "start",
        owner: 0
    },
    {
      id: 14,
      img: "http://poradnikbudowlany.eu/wp-content/uploads/2015/12/IImiejsce_projekt_warszawski21.jpg",
      title: 'Super projekt miejski',
      author: 'Bartek',
      value: 9,
      goal: 5000,
      label: "start",
      owner: 0
    },
    {
      id: 15,
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Graphen.jpg",
      title: 'Polski grafen',
      author: 'Radek',
      value: 79,
      goal: 5000,
      label: "start",
      owner: 0
    },
    {
      id: 16,
      img: "https://static.antyweb.pl/uploads/2017/08/18839514_1612232758858069_4177833694260763688_o-1420x670.jpg",
      title: 'Nowa planszówka',
      author: 'Łukasz',
      value: 29,
      goal: 5000,
      label: "start",
      owner: 0
    },{
      id: 66,
      img: "https://static.antyweb.pl/uploads/2017/08/18839514_1612232758858069_4177833694260763688_o-1420x670.jpg",
      title: 'Nowa planszówka',
      author: 'Łukasz',
      value: 29,
      goal: 5000,
      label: "start",
      owner: 0
    },{
      id: 17,
      img: "https://static.antyweb.pl/uploads/2017/08/18839514_1612232758858069_4177833694260763688_o-1420x670.jpg",
      title: 'Nowa planszówka',
      author: 'Łukasz',
      value: 97,
      goal: 5000,
      label: "home",
      owner: 0
    },{
      id: 18,
      img: "https://static.antyweb.pl/uploads/2017/08/18839514_1612232758858069_4177833694260763688_o-1420x670.jpg",
      title: 'Nowa planszówka',
      author: 'Łukasz',
      value: 92,
      goal: 5000,
      label: "home",
      owner: 0
    },
  ];

  export default data;