window.app = new Vue({
    el: '#app',
    data: function () {
      return {
        show: true,
        heroesList: ['Name', 'Surname', 'Superhero Name', 'Avatar'],
        tooltip: 'Click to hide/show Superheroes',
        changeBtnName: "Hide Superheroes",
        imgTooltip: "Disappeared by Thanos snap",
        heroes: [
          {
            name: 'Thor',
            surname: 'Odinson',
            heroName: 'Thor',
            img: 'https://media.aintitcool.com/media/uploads/2018/dannie/aiw_online_1_sheet_thor_v1_sm_large.jpg'
          },
          {
            name: 'Stephen',
            surname: 'Strange',
            heroName: 'Doctor Strange',
            // img: 'https://media.aintitcool.com/media/uploads/2018/dannie/aiw_online_1_sheet_drstrange_v1_sm_large.jpg'
          },
          {
            name: 'Tony',
            surname: 'Stark',
            heroName: 'Iron Man',
            img: 'https://media.aintitcool.com/media/uploads/2018/dannie/aiw_online_1_sheet_ironman_v1_sm_large.jpg'
          },
          {
            name: 'Peter',
            surname: 'Parker',
            heroName: 'Spider Man',
            // url: 'https://media.aintitcool.com/media/uploads/2018/dannie/aiw_online_1_sheet_spiderman_v1_sm_large.jpg'
          },
          {
            name: 'Steve',
            surname: 'Rodgers',
            heroName: 'Captain America',
            img: 'https://media.aintitcool.com/media/uploads/2018/dannie/aiw_online_1_sheet_captam_v1_sm_large.jpg'
          },
        ]
      }
    },
    methods: {
      changeVisibility: function (event) { 
        this.show = !this.show;
        if (this.show) {
          this.changeBtnName = 'Hide Superheroes'
        }
        else {
          this.changeBtnName = 'Show Superheroes'
        }
      
      }
    },

    computed: {
      heroesCount: function () {
        return this.heroes.length;
      }
    }
  });