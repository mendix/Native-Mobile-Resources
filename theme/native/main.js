const myCustomStyling = {
    slices:
    {
        padding: 60,
        innerRadius: 50,
        customStyles: {
            mySlice1: {
                slice: {
                    color: 'gray'
            },
            label: {
                  fontStyle: "italic"
                }
        },
            mySlice2: {
                slice: {
                    color: 'brown'
                }
            },
            mySlice3: {
                slice: {
                    color: 'pink'
                },
                label: {
                    fontStyle: "italic"
                    }
            },
            mySlice4: {
                slice: {
                    color: 'aqua'
                }
            },
            mySlice5: {
                slice: {
                    color: 'yellow'
                },
                label: {
                    fontStyle: "italic"
                    }
            }
        }
    }
}

const customWebView = {
    container: {
        borderColor: "red",
        borderWidth: 10
    }
}

export { myCustomStyling, customWebView };
