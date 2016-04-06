var Scene = new (function (settings) {
    this.canvas = document.getElementById("scene");
    this.context = this.canvas.getContext("2d");

    this.Viewport = {
        X: 0,
        Y: 0,
        Width: 1200,
        Height: 500,
        Visible: true
    };

    this.Mouse = {
        X: 0,
        Y: 0,
        Down: false
    };

    this.SelectedButton = null;

    this.sync = function() {
        this.context.clearRect(0, 0, this.Viewport.Width, this.Viewport.Height)
    }

    this.updateViewport = function() {
        this.Viewport.Width = $(window).width();
        this.Viewport.Height = $(window).height();
        
        var Coords = window.findButton('intrCont').getCoords();
        
        if ((Coords) && (TimelineElements.length)) {
            var Y = Coords.Y + Coords.Height + 50 + ((TimelineElements.length + 1) * 250);
            if (this.Viewport.Height < Y) {
                this.Viewport.Height = Y;
            }
        }

        Scene.context.canvas.width = this.Viewport.Width;
        Scene.context.canvas.height = this.Viewport.Height;
    }

    return {
        canvas: this.canvas,
        context: this.context,
        Viewport: this.Viewport,
        SelectedButton: this.SelectedButton,
        sync: this.sync,
        updateViewport: this.updateViewport
    };
});