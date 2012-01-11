enyo.kind({
	name: "North52.Tasks",
	kind: enyo.Pane,
	flex:1,
	components: [
		{name: "slidingPane", kind: "SlidingPane", flex: 1, components: [
			{width: "320px", name: "listSliding", dragAnywhere: false, fixedWidth: true, components: [
				{name: "list", kind: "ListList", flex: 1}
			]},
			{width: "320px", name: "taskSliding", dragAnywhere: false, fixedWidth: true, showing: true, components: [
				{name: "tasks",kind: "TaskList",flex:1}
			]},
			{flex: 1, name: "viewSliding", dragAnywhere: false, showing: true, onResize:"checkSize", components: [
				{name: "view",kind: "TaskView",flex:1}
			]}
		]}
	],
	checkSize: function(obj,width) {
		if(parseInt(width,10)>500) {
			this.$.view.$.grab.hide();
		} else {
			this.$.view.$.grab.show();
		}
	}
});
