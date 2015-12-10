Login=new Mongo.Collection('login');


Login.allow({
    insert: function (userId, login) {
        return true;
    },
    update: function (userId, login, fields, modifier) {
        return true;
    },
    remove: function (userId, login) {
        return true;
    }
});