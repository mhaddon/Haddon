Containers.push(new Container('containerTitle', {
    Data: {
        Position: {
            X: 0,
            Y: 200,
            Width: 400,
            Height: 150,
            CenterOffset: "X",
            Centered: true
        },
        Fill: {
            On: false,
            Opacity: 0.5
        }
    }
}));

Containers.push(new TextBox('textTitleHelloWorld', {
    Data: {
        Position: {
            X: 0,
            Y: -30,
            Width: 400,
            Height: 15,
            CenterOffset: true,
            Centered: true,
            Parent: "containerTitle"
        },
        Text: {
            On: true,
            Value: 'Hello World',
            Size: 62,
            Colour: 'white'
        }
    }
}));

Containers.push(new TextBox('textTitleDescription', {
    Data: {
        Position: {
            X: 0,
            Y: 20,
            Width: 400,
            Height: 100,
            CenterOffset: true,
            Centered: true,
            Parent: 'containerTitle'
        },
        Text: {
            On: true,
            Value: 'loading...',
            Font: 'Roboto,Georgia',
            Size: 16,
            Colour: 'white',
            LetterSpacing: true
        }
    }
}));