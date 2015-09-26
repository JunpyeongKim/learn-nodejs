var bingo = {
    is_my_turn: Boolean,
    socket: null,

    init: function () {
        var self = this;

        this.is_my_turn = true;

        this.socket = io.connect();

        this.socket.on('check_number', function (data) {
            self.where_is_it(data_num);
            self.print_msg(data.username + " checked '" + data.num + "'");
        });

        this.socket.on('game_started', function (data) {

        });

        this.socket.on('update_users', function (data) {

        });

        this.socket.on('connect', function (data) {

        });

        var numbers = [];
        for (var i = 1; i <= 25; i++) {
            numbers.push(i);
        }

        numbers.sort(function (a, b) {
            //TODO:
        });

        $("table.bingo-board td").each(function (i) {
            $(this).html(numbers[i]);

            $(this).click(function () {
                self.select_num(this);
            });
        });

        $("#start_button").click(function () {
            //TODO:
        });
    },

    select_num: function () {},

    where_is_it: function () {},

    check_num: function () {},

    update_userlist: function () {},

    leave: function () {},

    print_msg: function (msg) {
        $("#logs").append(msg + "<br/>");
    }
};

$(document).ready(function () {
    bingo.init();
});