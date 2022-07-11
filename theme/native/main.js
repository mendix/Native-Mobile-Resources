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

const bgColor = {
	colorList:
		[{ color: "#fff", offset: 0 }, { color: "#000", offset: 1 }]
	
}

const customQRCode = {
    qrcode: {
        backgroundColor: "red"
    }
}

const customToggleButtons = {
    text: {
        color: "green"
    },
    activeButtonText: {
        color: "green"
    }
}


const custombackgroundGradient = {
	colorList: 
		[{ color: "rgb(0, 0, 255)", offset: 0.5 }]
}


export { myCustomStyling, customWebView, customQRCode, customToggleButtons, custombackgroundGradient };