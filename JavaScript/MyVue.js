var games = new Vue({
    el: '#games',
    data:{
     params:{},
     schedules: {},
     places:{},
     month: 'september',
     id: 1,
     location: 'AJ Katzenmaier',
    },
    methods:{
      getMonth:function(schedule){
        this.month = schedule.month;
      },

      goToMyGame:function(game){
            this.id = game.id;
            this.location = game.location;
            $('#tables').addClass("displayLandscape");
            $('#maps').removeClass("displayLandscape");
            $('#chatButton').css('visibility','visible');
        },
    },//end of methods
})

games.schedules = schedules;
games.places = places;