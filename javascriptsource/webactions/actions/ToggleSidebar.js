// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * @returns {Promise.<void>}
 */
async function ToggleSidebar() {
    var _a, _b;
    // BEGIN USER CODE
    const sidebarToggleLocation = "com.mendix.widgets.web.sidebar.toggle";
    (_b = (_a = window)[sidebarToggleLocation]) === null || _b === void 0 ? void 0 : _b.call(_a);
    // END USER CODE
}

export { ToggleSidebar };
