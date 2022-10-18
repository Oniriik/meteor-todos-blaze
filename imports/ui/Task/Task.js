import { Template } from 'meteor/templating';

import './Task.html';

Template.task.events({
    'click .js-toggle-checked'() {
        Meteor.call('tasks.setIsChecked', this._id, !this.isChecked);
    },
    'click .js-delete'() {
        Meteor.call('tasks.remove', this._id);
    },
});