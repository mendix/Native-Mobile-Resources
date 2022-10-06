import { galleryTextFilter } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Gallery

    Default Class For Mendix Gallery Widget
========================================================================== */
export const com_mendix_widget_native_gallerytextfilter_GalleryTextFilter = {
    container: {
        ...galleryTextFilter.container
    },
    caption: {
        ...galleryTextFilter.caption
    },
    textInputContainer: {
        ...galleryTextFilter.textInputContainer
    },
    textInputOnFocusContainer: {
        ...galleryTextFilter.textInputOnFocusContainer
    },
    textInput: {
        ...galleryTextFilter.textInput
    },
    textInputClearIcon: {
        ...galleryTextFilter.textInputClearIcon
    }
};
